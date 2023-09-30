---
title: "Aikar's Flags"
---

译者不是一名Java开发者。所以，目前不会翻译每一项翻译的具体解释和作用。    
虽然已经将此部分翻译列入计划中，但是我不清楚ETA，抱歉。    


## 推荐的JVM启动时参数
要使用这些启动参数，只需要调整 `-Xms` 和 `-Xmx` 的值。这些参数对于分配任何大小的内存都适用，即使分配的内存仅仅有500MB（对于高版本的Minecraft服务器，这些内存可能不够用。）    
```
java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui
```
#### 不要在服务器上使用全部内存
当你根据服务器的实际内存进行配置 -Xms 与 -Xmx 项时，例如可用 8000M 时，不要把这 8000M 全部分出去！在运行 Minecraft 服务器时，需要在此项的基础上额外占用一部分内存。建议将 -Xms/-Xmx 减少 1000-1500M，以避免内存不够用或者提示 `OOMKiller` 导致服务器强制关闭。同时，这些内存也要给系统预留一部分。**有 8000M 可用？安全起见，请设定 6500M 以确保服务器正常运行。**
*也有一些服务商会为你额外提供这部分内存，例如提供 9500M 让你分配 8000M 给Minecraft服务器。有一些服务商会提供的！记得问问他们。*  

## 推荐内存
**我们推荐至少分配 6-10GB 内存**，无论你的服务器是什么样的规模！如果你的服务器无法分配10GB内存，不要强行分配，就像上文所说的一样，预留一些内存。尽管G1GC在内存多的情况下运行的更好。  
  
不过请记住，内存多不一定代表性能会更好。最终，当内存超出某一个值时将变的无用。因此分配超出32GB的内存只会增大你的预算，而效果微乎其微。  

如果分配12GB或更低内存，就不用在上文的基础上额外修改参数了。  

#### 如果-Xmx的值大于12GB
如果-Xmx的值大于12GB，请调整以下参数：
-   `-XX:G1NewSizePercent=40`
-   `-XX:G1MaxNewSizePercent=50`
-   `-XX:G1HeapRegionSize=16M`
-   `-XX:G1ReservePercent=15`
-   `-XX:InitiatingHeapOccupancyPercent=20`

如果调整后老年代Collection增加，请恢复到原参数。
