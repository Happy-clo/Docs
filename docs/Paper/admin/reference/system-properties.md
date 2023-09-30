---
title: "Paper 系统配置"
---

### 阅读前提醒
我不是一名Java开发者。以下的所有涉及Java或者其它术语我都不是很清楚。  
因此我并不是很推荐阅读此页文档。如果你是开发人员，请阅读 [Paper System Properties](https://docs.papermc.io/paper/reference/system-properties)  
以了解。对于完全不确定的翻译，下面有原文。

这些系统配置可以在启动服务器之前就可以为不同项进行配置。

### 警告
为JVM设定 flags 可以更改其工作方式，Paper服务器也不例外。  
如果你不确定某个Flag的作用，**不要轻易使用它**！  

## 工作原理

系统配置在启动服务器时就已经设置好了。例如，如果你正在使用 `.bat` 或是 `.sh` 文件以启动服务器，你可以在文件中添加System Properties的相关参数。比如：

```bash
java -Dpaper.log-level=FINE -jar paper.jar
```
### 信息
部分Paper系统配置项需要带上一个“.”。  
在使用Windows Powershell时，需要拿双引号把它裹上。  
比如 `"-Dpaper.log-level=FINE"`

这里的 `-D` 用于设置环境属性，而系统属性则是带着 `FINE` 值的 `paper.log-level`。  
要使用，仅需将其加入到启动命令中即可。

### 注意
当一个 system property 用 `unset` 表示时，更改为 `true` 就可以用它了。

## Properties 列表

#### paper.playerconnection.keepalive:

- **默认值**: `30`
- **描述**: 当服务器接收不到玩家心跳包后，等待多长时间后断开连接。

#### timings.bypassMax:

- **默认值**: `unset`
- **描述**: 允许绕过Aikar的Timings API的最大数据限制。除非API更改为允许绕过，否则仅在服务器更改是无效的。

#### LetMeReload:

- **默认值**: `unset`
- **描述**: 当输入 `/reload` 命令时禁用确认重载文本。

#### paper.disableChannelLimit:

- **默认值**: `unset`
- **描述**: 禁用服务器插件通道限制。将禁用每名玩家128插件通道的限制。

#### net.kyori.adventure.text.warnWhenLegacyFormattingDetected:

- **默认值**: `false`
- **描述**: 当在聊天组件中检测到历史格式时是否要启用警告。

#### Paper.DisableClassPrioritization:

- **默认值**: `unset`
- **描述**: 禁用类优先级系统，主要是解决未能正确处理relocate和shade的问题。

#### Paper.disableFlushConsolidate:

- **默认值**: `unset`
- **描述**: 禁用Netty Flush Consolidation系统。
- **原文**: Disables the netty flush consolidation system.

#### Paper.debugDynamicMissingKeys:

- **默认值**: `unset`
- **描述**: 启用在NBT对象中为缺失键记录调试日志。

#### disable.watchdog:

- **默认值**: `unset`
- **描述**: 禁用Watchdog警告系统。

#### paper.explicit-flush:

- **默认值**: `unset`
- **描述**: 启用网络通道刷新缓冲。

#### Paper.enable-sync-chunk-writes:

- **默认值**: `unset`
- **描述**: 在每次调用时同步写入。会影响性能，尤其是是对于硬盘。

#### paper.debug-sync-loads:

- **默认值**: `unset`
- **描述**: 同步加载区块时启用记录调试日志。

#### Paper.ignoreWorldDataVersion:

- **默认值**: `unset`
- **描述**: 当加载世界时忽略数据版本。不推荐启用此项，且可能会出现问题。

#### debug.entities:

- **默认值**: `unset`
- **描述**: 为实体信息启用调试日志文本。

#### Paper.bypassHostCheck:

- **默认值**: `unset`
- **描述**: 当客户端尝试连接到服务器时绕过主机类型匹配。

#### paper.ticklist-warn-on-excessive-delay:

- **默认值**: `unset`
- **描述**: 当Tick列表延时过长时启用警告。

#### debug.rewriteForIde:

- **默认值**: `unset`
- **描述**: 在堆栈跟踪中移除NMS更改以在IDE中方便调试。也会remap CB插件调用以移除版本信息。

#### convertLegacySigns:

- **默认值**: `unset`
- **描述**: 将（旧）告示牌转换到新格式中。

#### paper.maxCustomChannelName:

- **默认值**: `64`
- **描述**: 设置插件通道名称的最大值。

#### Paper.maxSignLength:

- **默认值**: `80`
- **描述**: 设置告示牌一行文字的最大数量的文本。

#### Paper.FilterThreshhold:

- **默认值**: `8192`
- **最小值**: `8192`
- **描述**: 设置过滤包的最大值的大小。

#### Paper.minPrecachedDatafixVersion:

- **默认值**: `Minecraft 世界版本 + 1`
- **描述**: 如果你想要转换大量的区块，你可以考虑从一点开始进行转换并设置此项。

#### Paper.WorkerThreadCount:

- **默认值**: `8` 或 `CPU数量 - 2`。看哪个更低。
- **描述**: 用于区块加载的工作线程数。

#### Paper.excessiveTELimit:

- **默认值**: `750`
- **描述**: 超过此值则将方块实体拆分成多个包。

#### io.papermc.paper.suppress.sout.nags:

- **默认值**: `unset`
- **描述**: 禁止插件使用System.out/System.err输出消息。

#### paper.strict-thread-checks:

- **默认值**: `unset`
- **描述**: 设定AsyncCatcher的状态，若代码在非主线程上运行时将记录错误。

#### Paper.skipServerPropertiesComments:

- **默认值**: `unset`
- **描述**: 跳过server.properties中的注释。

#### Paper.debugInvalidSkullProfiles:

- **默认值**: `unset`
- **描述**: 为无效头颅启用调试日志记录。将记录所有无效头颅与其实际位置。

#### paper.alwaysPrintWarningState:

- **默认值**: `unset`
- **描述**: 是否始终为特定level打印警告。
- **原文**: Always prints the warning state for the particular level.

#### Paper.printStacktraceOnBadPluginClassAccess:

- **默认值**: `unset`
- **描述**: 当插件尝试访问一个非插件依赖的类时，打印堆栈跟踪

#### Paper.parseYamlCommentsByDefault:

- **默认值**: `true`
- **描述**: 默认是否分析Yaml中的注释。
