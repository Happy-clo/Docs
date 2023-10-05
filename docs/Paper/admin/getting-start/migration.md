# 迁移数据

要从你的服务器迁移到 Paper 相当简单。下面将告诉你如何迁移数据。

:::tip 备份数据
开始之前，请确保你的服务器有一份可用的完整备份。  
:::

## 从其它服务端迁移到 Paper

### 从 CraftBukkit 或 Spigot

从 CraftBukkit 或 Spigot 服务端迁移到 Paper 很简单，只需要按照以下步骤进行：

1. 停止正在运行的 Minecraft 服务器，然后新建一份完整的备份。
2. 从[官方网站](https://papermc.io/downloads)下载 Paper 服务端。
3. 使用下载的 Paper 服务端核心替换掉原服务端。
4. 启动服务器。  
   Paper 与现有的插件完全兼容。

:::tip 配置文件
Paper 依旧会保留 bukkit.yml 和 spigot.yml 并使用它们的配置。只有新增的配置才会保存到 paper.yml 中。
:::

### 从 Vanilla（原版）

当从原版迁移到 Paper 服务端时，每一个世界文件夹都会自动转换。如果你想要从 Paper 转回原版，请阅读下文的“转到 Vanilla（原版）”。

1. 停止正在运行的原版服务端，然后新建一份完整的备份。
2. 从[官方网站](https://papermc.io/downloads)下载 Paper 服务端核心并替换掉原版服务端。
3. 启动服务器。

### 从 Forge 或 Fabric

由于 Forge 或 Fabric 与原版服务器的世界文件完全一致，所以只需要按照上文“从 Vanilla（原版）”的步骤转移数据即可。不过请注意，如果你使用 Mod 自定义了某些方块，物品或其它数据，Paper 无法加载这些自定义内容。

除此之外，Paper 不支持任何 Fabric 或 Forge 的 Mod。你需要寻找插件的替代品。任何兼容插件与 Mod 的服务端几乎都有缺陷，不建议使用。

> 译者注：  
> 大多数无需 Mod 的插件都不会主动为 Mod 提供兼容，甚至有的插件已经表明“不支持也不会支持 Mod”。所以，请尽量专注于使用 Mod 服务端或插件服务端中的任意一种。

## 从 Paper 迁移到其它服务端

### 转到 Vanilla（原版）

由于 Paper 将原版服务端存档文件进行拆分，所以需要手动进行数据迁移。如果不进行手动迁移，则下界和末地就像是被重置了一样。但是不用担心！即使看起来就像是被重置了一样，你的存档依然没有丢失，只是原版服务端不清楚怎么才能找到下界和末地的存档文件。

以下表格将展示 Paper 服务端和原版服务端存档的区别。

| 服务端  | 主世界   | 下界                  | 末地                  |
| ------- | -------- | --------------------- | --------------------- |
| Vanilla | `/world` | `/world/DIM-1`        | `/world/DIM1`         |
| Paper   | `/world` | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

:::tip
以下步骤将假设 `level-name`（在 server.properties 中设定）是 `world`。  
如果不是，请将下文 `world` 相关字符改成 `level-name` 的值。  
:::

1. 如果服务器正在运行，请先停止。
2. 如果你已经运行了原版服务器，请先前往 `world` 文件夹中删除 DIM-1 和 DIM1 文件夹。只有在原版服务器已经启动时，才需要进行该步骤。
3. 复制 `/world_nether/DIM-1` 到 `/world` 文件夹中。
4. 复制 `/world_nether/DIM1` 到 `/world` 文件夹中。
5. 删除 `/world_nether` 和 `/world_the_end` 文件夹。
6. 使用原版服务端替换掉 Paper 服务端。
7. 启动原版服务端。

### 转到 CraftBukkit 或 Spigot

Paper 不支持迁移存档到 CraftBukkit 或 Spigot！虽然你可能会成功（因为 Paper 与 CraftBukkit 或 Spigot 的存档文件夹结构相同），但是不要为此产生的任何问题寻求支持，并且该过程可能会**丢失数据**。

### 转到 Fabric 或 Forge

因为 Fabric 或 Forge 与原版的文件夹结构是一致的，所以参考原版迁移方法即可完成存档迁移。请注意：Fabric 和 Forge 都不支持 Paper 插件！你需要寻找 Mod 来代替服务器插件。
