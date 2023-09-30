# 添加插件
插件是从Paper内置的配置文件延申到服务器游戏内容中最强大的方式。插件提供的新功能从可以让喝牛奶同时恢复饥饿值、使枯木生长为参天大树，也可以为服务器添加一个独创的游戏玩法。  
:::tip 恶意代码  
确保你下载的渠道和下载的插件是安全的！插件不但可以无条件的修改游戏服务器，同时也还可以修改系统。  
因此请当心！确保你下载的插件所运行的代码是安全的。 
:::

## 寻找插件
在安装插件之前，你应该先准备好你想要安装的插件。你可以在 SpigotMC, BukkitDev, 或者在 PaperMC 论坛中找到你想要安装的插件，也会有一部分插件在GitHub上发布。  
有效寻找插件的方式不是使用内置的搜索功能，而是善用浏览器。在浏览器中输入`Minecraft plugins`后面跟上你想要使用的插件的主要功能，大多数情况下都能找到想要的插件。  
> 译者注：  
> 别用百度，用必应。必应搜索`Minecraft plugin <加上你要找的插件英文关键字>`
  
:::tip Paper与Spigot和Bukkit的兼容性  
Paper兼容Bukkit和Spigot的插件。除非插件强调不支持Paper服务端，则默认代表该插件可以在Paper服务器上使用。  
:::
## 安装插件
1. 下载你想要使用的插件。确保下载的插件的是以`.jar`结尾。有些插件作者喜欢通过以`.zip`压缩包的形式分发插件，所以需要解压缩此压缩文件来获得以`.jar`后缀结尾的插件：同时也会说明插件适用于哪些服务器。
2. 当在本地有一份可用的插件时，找到你的Paper服务器根目录中的`plugins`文件夹。
3. 将`.jar`文件拖拽到plugins文件夹中。若你使用需要远程连接的服务器，则需要使用面板或者SFTP上传插件。不过无论使用哪种方式上传，最终得到的插件与运行的效果是一样的。
4. 重启服务器。不出意外的话插件应该正常加载。
5. 检查插件是否成功加载。当服务器启动完毕后，在游戏内输入`/plugins`或者在终端输入`plugins`再次检查。对于成功加载的插件，在插件列表中应当以绿色的插件名显示。如果没有列表中没有这个插件、或者插件名称显示为红色则代表没有正常加载，需要进行故障排查。

## 故障排查
故障排查的第一步是检查服务器启动日志。服务器最新日志会放在服务器根目录下的`logs/latest.log`文件里。你需要从头开始阅读整个日志以检查插件应该在何时被加载并获得一份详细的报错。

### 缺少依赖
当你看到了这样一段文字：
```
Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'  
org.bukkit.plugin.UnknownDependencyException:  Unknown/missing dependency plugins:  [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.
```
这意味着你尝试安装的插件缺少依赖（前置）。通常情况下，依赖是另一个Bukkit插件，要想正常加载你所使用的插件，必须先在服务器中先安装此依赖插件才行。虽然你会看到的报错可能长的离谱，但是最重要的一行文本是：  
````
Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.
````
这句话的意思是，要想加载`MyAwesomePlugin`插件，则必须先在服务器上安装`Vault`插件。

### 未知的 plugin.yml
当你看到了类似于以下内容的文本时：
```
Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'
org.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml
```
这意味着你下载的插件不是有效的Paper插件。通常发生在以下情况：  
1. 该Jar文件不适用于Paper。它也许适用于Forge、Fabric等Mod服务端/客户端，不过Paper无法加载它。  
2. 插件未能完全下载。当你使用`curl`或者`wget`等工具下载时时，你可能下载的是某网站的源码，而你不是想要下载的插件。大多数出现此情况是因为网络原因，请尝试再次下载插件。如果你通过面板或者SFTP上传插件，确保你的SFTP客户端是二进制传输模式，而不是ASCII模式。查看你使用的SFTP软件文档来了解更多信息。

> **译者说明:**  
> 如果你使用的插件以Jar后缀结尾，先试试用压缩软件打开它！  
> 看看压缩包（Jar通俗点讲是一个压缩包）里面能不能找到`plugin.yml`。如果找不到，那么这就不是一个可以使用的服务器插件！  

### 未知的插件名称
当你看到类似于以下内容的文本时：  
```
Ambiguous plugin name `Essentials' for files `plugins/EssentialsX-2.19.4.jar' and `plugins/Essentialsx-2.20.0-dev.jar' in `plugins'
```  
这意味着你有两个安装的插件是同名的，Paper不支持同名插件同时加载。此情况发生在同时安装了两个`EssentialsX`插件：一个是正式版2.19.4，一个是开发版本2.20.0。确保安装的插件没有重复的，如果有，删除一个旧版本或一个你不需要的版本，然后重启服务器。  

### 其它情况
如果出现任何未在上述列表中列出的情况，请先尝试自己阅读并排查报错。即使报错通常很长，但是很多情况下只需要阅读前两行就能明白出现了什么错误。如果还是搞不清楚，请在Paper的Discord服务器中找到 #paper-help 频道以寻求帮助。  

## 未记录任何日志
如果你没有在日志中找到关于加载插件的文本，那么你的服务器很有可能根本没有找到这个插件。服务器加载插件需要同时满足以下条件：  
1. 位于服务器根目录中的`plugins`文件夹中。Paper不会尝试寻找子目录中的插件，更不会加载。所有插件必须位于`plugins`根目录下。
2. 文件以`.jar`后缀结尾。如果它不以`.jar`结尾，那么你下载的可能不是插件本体，Paper也无法读取。有些作者使用`.zip`压缩包来分发多个插件文件，所以在安装之前，请先解压缩它们。

如果同时满足以上两个条件，但是还是看不到任何关于插件加载的日志，请在Discord服务器中找到 #paper-help 频道寻求帮助。  
