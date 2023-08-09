# 迁移数据
要从你的服务器迁移到Paper相当简单。下面将告诉你如何迁移数据。  
  
### 备份数据 
开始之前，请确保你的服务器有一份可用的完整备份。  

## 从其它服务端迁移到Paper
### 从CraftBukkit或Spigot
从CraftBukkit或Spigot服务端迁移到Paper很简单，只需要按照以下步骤进行：  
1. 停止正在运行的Minecraft服务器，然后新建一份完整的备份。  
2. 从[官方网站](https://papermc.io/downloads)下载Paper服务端。  
3. 使用下载的Paper服务端核心替换掉原服务端。  
4. 启动服务器。  
Paper与现有的插件完全兼容。  
  
### 配置文件
Paper依旧会保留bukkit.yml和spigot.yml并使用它们的配置。只有新增的配置才会保存到paper.yml中。

### 从Vanilla（原版）
当从原版迁移到Paper服务端时，每一个世界文件夹都会自动转换。如果你想要从Paper转回原版，请阅读下文的“转到Vanilla（原版）”。
1. 停止正在运行的原版服务端，然后新建一份完整的备份。  
2. 从[官方网站](https://papermc.io/downloads)下载Paper服务端核心并替换掉原版服务端。  
3. 启动服务器。  

### 从Forge或Fabric
由于Forge或Fabric与原版服务器的世界文件完全一致，所以只需要按照上文“从Vanilla（原版）”的步骤转移数据即可。不过请注意，如果你使用Mod自定义了某些方块，物品或其它数据，Paper无法加载这些自定义内容。  
  
除此之外，Paper不支持任何Fabric或Forge的Mod。你需要寻找插件的替代品。任何兼容插件与Mod的服务端几乎都有缺陷，不建议使用。  
  
> 译者注：  
> 大多数无需Mod的插件都不会主动为Mod提供兼容，甚至有的插件已经表明“不支持也不会支持Mod”。所以，请尽量专注于使用Mod服务端或插件服务端中的任意一种。

## 从Paper迁移到其它服务端
### 转到Vanilla（原版）
由于Paper将原版服务端存档文件进行拆分，所以需要手动进行数据迁移。如果不进行手动迁移，则下界和末地就像是被重置了一样。但是不用担心！即使看起来就像是被重置了一样，你的存档依然没有丢失，只是原版服务端不清楚怎么才能找到下界和末地的存档文件。  
  
以下表格将展示Paper服务端和原版服务端存档的区别。  
| 服务端           |   主世界  | 下界                  | 末地                   |
| --------------- | --------- | --------------------- | --------------------- |
| Vanilla         | `/world`  | `/world/DIM-1`        | `/world/DIM1`         |
| Paper           | `/world`  | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

以下步骤将假设 `level-name`（在server.properties中设定）是 `world`。  
如果不是，请将下文 `world` 相关字符改成 `level-name` 的值。  

1. 如果服务器正在运行，请先停止。
2. 如果你已经运行了原版服务器，请先前往 `world` 文件夹中删除 DIM-1 和 DIM1 文件夹。只有在原版服务器已经启动时，才需要进行该步骤。
3. 复制 `/world_nether/DIM-1` 到 `/world` 文件夹中。
4. 复制 `/world_nether/DIM1` 到 `/world` 文件夹中。
5. 删除 `/world_nether` 和 `/world_the_end` 文件夹。
6. 使用原版服务端替换掉Paper服务端。
7. 启动原版服务端。

### 转到CraftBukkit或Spigot
Paper不支持迁移存档到CraftBukkit或Spigot！虽然你可能会成功（因为Paper与CraftBukkit或Spigot的存档文件夹结构相同），但是不要为此产生的任何问题寻求支持，并且该过程可能会**丢失数据**。  

### 转到Fabric或Forge
因为Fabric或Forge与原版的文件夹结构是一致的，所以参考原版迁移方法即可完成存档迁移。请注意：Fabric和Forge都不支持Paper插件！你需要寻找Mod来代替服务器插件。
