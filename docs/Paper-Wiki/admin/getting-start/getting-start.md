# 让我们开始吧
## 需求
::: warning 
在1.18版本发布后，Paper需要**Java17**才能正常运行。如果你还没有使用Java17，请先下载Java17。  
:::

| Paper版本 | 建议Java版本 |
|--|--|
| 1.8 - 1.11 | Java8 |
| 1.12 - 1.16.4 | Java 11 |
| 1.16.5 | Java 16 |
| 1.17 - 1.20.1 或更高 | Java 17 |

## 迁移存档到Paper
### 从Vanilla（原版）迁移：
从原版迁移到Paper相当容易，但是存档稍微不同：Paper（或CraftBukkit或Spigot）会将不同的维度单独分成不同的文件夹。  
但是，不用为此担心！Paper会自动帮助你转换存档。

> **译者注：**  
> “不用担心” 是指Paper会自动将存档转换为Paper的存档格式。  
> 但是万一哪天想要从该格式转到原版存档的格式则需要手动转换，因为原版服务端没有提供自动转换功能。

### 从CraftBukkit或Spigot迁移：
Paper是CraftBukkit或Spigot开箱即用的替代品（Fork），因此你无需存档担忧。  
  
## 下载Paper
Paper提供了可以直接下载的Jar文件：[下载地址](https://papermc.io/downloads)。  
确保游戏版本和所需下载的构建版本号正确后，点击下载按钮即可。  

## 启动服务器
启动服务器与启动其它Java程序一样。   
  
打开你的终端，切换到存放服务器数据的文件夹，然后运行`java -Xms2G -Xmx2G -jar paper.jar --nogui`。  
需要将`paper.jar`修改成你实际下载的文件名。
    
你想要调整为服务器分配的内存，只需要修改`-Xms`和`-Xmx`参数。并且使用`--nogui`禁用原版服务端的GUI。
如果使用了`--nogui`参数，服务端不会弹出两个界面（一个终端一个GUI）。
  
要对此参数进行更加细致的调整，详见左侧 Aikar's Flags 一文。  
