---
title: "Aikar's Flags"
slug: /aikars-flags
description: Aikar's flags是一组设计用于提升您Paper服务器性能的JVM标志集合。
---

# Aikar's Flags

## 推荐的 JVM 启动标志

:::warning[脚本生成器]

**本页仅作为解释页面。** 如果您需要生成启动脚本，请访问我们的 **[脚本生成器](/Paper/misc/tools/start-script-gen)**。

:::

```bash
java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui
```

:::danger[在共享主机上不要分配所有可用内存！]

设置 `Xms` 和 `Xmx` 值时，如果您的主机显示有 8GB 内存，请**不要使用 8GB**！

Minecraft（和 Java）需要额外的内存来支持 `Xmx` 参数之上的运行。建议将 `Xmx` 和 `Xms` 减少约 1000-1500MB，以避免内存不足或 `OOMKiller` 导致服务器关闭。这也为操作系统留出了一些内存空间。

有 8GB 内存吗？为安全起见，使用 6500MB。
_但您也可以询问您的主机是否会为您覆盖这些额外开销，提供 9500M。有些主机会同意。_

:::

## 推荐的内存大小

**我们建议至少使用 6-10GB** 内存，无论玩家数量有多少！如果您负担不起 10GB 内存，请尽量提供更多，但确保操作系统也有一些内存。G1GC 在有更多内存时运行更佳。

然而，超过一定点后，更多的内存并不意味着更好的性能。最终会遇到收益递减的情况。为服务器购买 32GB RAM 将只会浪费金钱，带来极少的收益。

## Java GC 日志记录

使用这些标志后遇到旧代问题吗？根据您的 Java 版本添加以下标志启用 GC 日志记录：

**Java 8-10**

```bash
-Xloggc:gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps
-XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=5 -XX:GCLogFileSize=1M
```

**Java 11+**

```bash
-Xlog:gc*:logs/gc.log:time,uptime:filecount=5,filesize=1M
```

GC 日志记录不会影响性能，可始终保持开启。这些文件不会占用太多空间（5MB）。

## 标志的技术解释

1. **-Xms 匹配-Xmx - 为什么：** 您不应该让服务器在 `Xmx` 情况下完全耗尽内存。您的服务器应始终预期使用整个 `Xmx`！因此，您应确保操作系统在 `Xmx` 之上有额外的内存用于非 Minecraft/操作系统级别的事务。因此，如果 `Xms` 低于 `Xmx`，则有未使用的内存！未使用的内存是浪费的内存。G1 根据分配给每个区域的内存量来优化暂停时间。如果有比所需更多的内存，G1 将简单地将其推送到老年代，这不会对您造成损害。改善 GC 行为的基本思想是确保短生命周期对象年轻死去，从不被晋升。G1 获得的内存越多，您越有保证对象不会过早晋升到老年代。G1 与以往的收集器不同，能够更有效地处理更大的堆。

   如果不需要分配给它的内存，它将不会使用它。整个引擎的运作方式不同，不会受到过大堆的影响，这是业界普遍接受的 G1 使用相同 Xms 和 Xmx 的信息！

2. **UnlockExperimentalVMOptions：** 一些以下选项需要此标志。

3. **G1NewSizePercent：** 这些是重要的设置。现在您可以指定整体所需范围的百分比用于新生代。通过这些设置，我们告诉 G1 不要使用其默认的 5%作为新生代，而是给它 40%！Minecraft 有极高的内存分配速率，至少在 30 个玩家服务器上达到每秒至少 800MB！这主要是短生命周期对象（方块位置）。

   现在，这意味着 Minecraft 确实需要更多地关注新生代以支持甚至支持这种分配速率。如果您的新生代太小，您将每秒运行 1-2 次新生代收集，这是糟糕的。您将有很多暂停，TPS 有风险下降，服务器无法跟上 GC 成本。然后结合对象现在更快地晋升的事实，导致您的老年代增长更快。给予更多的新生代，我们能够减缓年轻代收集的间隔，为短生命周期对象死亡提供更多时间，并实现整体更高效的 GC 行为。

4. **G1MixedGCLiveThresholdPercent：** 控制何时在年轻代收集中包含区域以使老年代保持整洁，而不进行正常的老年代 GC 收集。当内存少于这个百分比时，老年代甚至不会被包括在‘混合’收集中。混合收集不像完整的老年代收集那样重，因此小幅增量地清理老年代保持内存使用量较轻。

   默认值为 65 至 85，具体取决于 Java 版本，我们将其设置为 90 以确保尽快回收垃圾，以保留尽可能多的空闲区域。

5. **G1ReservePercent=20：** Minecraft 最新版本中的内存分配速率确实非常高。我们面临“空间耗尽”的风险，即没有足够的内存可用来移动数据。这确保了更多的内存等待用于此操作。默认值为 10，因此我们为其提供了另外 10。

6. **MaxTenuringThreshold=1：** Minecraft 的内存分配速率非常高。大部分内存在 Eden 代中回收。然而，瞬态数据将溢出到幸存者代中。最初尝试完全删除幸存者代并取得了不错的结果，但结果是瞬态数据会进入老年代，这是不好的。最大 tenuring 为 1 确保我们不会将瞬态数据晋升到老年代，但任何在 GC 之后生存两次的数据将被假定为长生命周期。

   这极大地减少了年轻收集中的暂停时间，因为将数据复制到幸存者空间多达 15 次对实际老年代内存需要很多时间。理想情况下，GC 引擎应跟踪对象的平均年龄并更快地使数据成为老年，但这不是其工作方式。

   考虑到平均 GC 速率为 10 秒到数分钟每次年轻收集，这不会导致任何“垃圾”晋升，并且只会延迟在混合 GC 中收集的长生命周期内存。

7. **SurvivorRatio=32：** 因为我们大幅降低了 MaxTenuringThreshold，我们将大幅减少幸存者空间的使用。这将释放更多区域供 Eden 使用。

8. **AlwaysPreTouch：** AlwaysPreTouch 确保在进程启动时设置并保留内存连续性，提高其效率。这提高了操作系统的内存访问速度。使用透明巨大页是强制的。

9. **+DisableExplicitGC：** 许多插件认为它们知道如何控制内存，并尝试调用垃圾收集。执行此操作的插件会触发完整的垃圾收集，导致大幅延迟。此标志禁止插件尝试执行此操作，保护您免受其糟糕代码的影响。

10. **MaxGCPauseMillis=200：** 此设置控制在您的新生代的最小和最大范围之间使用多少内存。这是您希望服务器暂停进行收集的“目标”时间。200 旨在最多损失 4 个刻度。这将导致短暂的 TPS 下降，但服务器可以立即弥补这种下降，意味着它对您的 TPS 没有实质性影响。200ms 低于玩家能感知的时间。在测试中，将此值限制为更低的数字会导致 G1 无法快速重新收集内存，可能导致老年代用尽触发完整收集。只因为此数字为 200 并不意味着每次收集都是 200。它表示如果确实需要，它可以使用高达 200，并且我们需要让它在有内存要收集时执行其工作。

11. **+ParallelRefProcEnabled：** 优化 GC 过程，使用多线程进行弱引用检查。不清楚为什么这不是默认设置...

12. **G1RSetUpdatingPauseTimePercent=5：** 默认值为暂停期间花费的时间的 10％，将其减少到 5％使其更多地并发以减少暂停持续时间。

13. **G1MixedGCCountTarget=4：** 默认值为 8。由于我们旨在更慢地收集，减少老年代使用量，尝试更快地回收老年代内存以避免用尽老年代。

14. **G1HeapRegionSize=8M+：** 默认为自动计算。对于 Minecraft 特别重要，特别是 1.15 版本，因为在低内存情况下，默认计算大多数情况下会太低。任何小于此大小一半（4MB）的内存分配都将被视为“巨大”，并直接推进老年代，更难释放。如果允许 Java 使用默认设置，则您的内存的显著部分将被视为巨大。

15. **+PerfDisableSharedMem：** 导致 GC 写入文件系统，如果磁盘 IO 高，则可能导致主要延迟 - 请参阅https://www.evanjones.ca/jvm-mmap-pause.html

### 透明大页

这是一个有争议的功能，如果您无法配置主机以使用真正的 HugeTLBFS，则可能会有用。尝试添加 `-XX:+UseTransparentHugePages`，但非常重要的是您还必须设置 `AlwaysPreTouch`。否则，THP 可能会对您造成伤害。我们尚未测量 THP 在 Minecraft 中的工作方式或其与 AlwaysPreTouch 的影响，因此此部分适用于希望进行实验的高级用户。
