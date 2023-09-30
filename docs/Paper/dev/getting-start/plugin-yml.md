---
title: "Paper Plugin YML"
---

plugin.yml 文件是你的插件最主要的配置文件。
它包含插件最基本的信息，比如插件名、版本和简要描述。它同时包括插件的依赖、权限和命令等。

plugin.yml 文件存放在项目 `resources` 文件夹中，项目目录结构如下图所示：
```
example-plugin
├── build.gradle.kts
├── settings.gradle.kts
└── src
    └── main
        ├── java
        └── resources
            └── plugin.yml
```

## 例子

这是一个 plugin.yml 模板：

```yaml
name: ExamplePlugin
version: 1.0.0
main: io.papermc.testplugin.ExamplePlugin
description: An example plugin
author: PaperMC
website: https://papermc.io
api-version: 1.19
```

## 字段

### 注意  
 本文所列出的字段并未按任何特定顺序排列。  
 如字段旁有星号 (\*) ，则代表该字段为必填项。  

### name*

你的插件名。将会在插件列表中（`/plugins` 指令）列出，并在日志文本中作为输出的默认前缀显示。  
如果为日志输出设定了前缀，则将被前缀覆盖。
- `name: ExamplePlugin`

### version*

插件当前的版本。会在插件信息文本和服务器日志文本中显示。  
- `version: 1.0.0`

### main*

插件的主类。主类是一个插件中唯一继承 `JavaPlugin` 的类，并且是插件执行的入口。  
- `main: io.papermc.testplugin.ExamplePlugin`

需要包含包的路径和主类的名字（不用带 .java 或者 .kt ）

### description

简单描述插件的作用。将会在插件信息命令中显示。
- `description: An example plugin`

### author / authors

插件的作者（们）。可以填写单个作者或作者列表。  
- `author: PaperMC`
- `authors: [PaperMC, SpigotMC, Bukkit]`
将会在插件信息命令中显示。  

### website

插件的网站。连接到GitHub存储库或是插件发布页很有用。
- `website: https://papermc.io`
将会在插件信息命令中显示。  

### api-version

插件正在使用的 Paper API 版本。不包含次要版本（比如使用 `1.13.2-R0.1-SNAPSHOT` 版本的 Paper API 时，只需写 `1.13` ，后加 `.2` 反而无效）  
服务器版本低于此处填写的 API 版本将直接拒绝加载插件。  
有效的版本是 1.13-1.19  
- `api-version: 1.19`
  
如果没有指定此项，加载插件时会将其认定为过时插件并作特殊处理，同时在服务器后台输出一段警告。  

### load

服务器应当在何时加载插件。应该填写 `STARTUP` 或 `POSTWORLD`。
- `load: STARTUP`

### prefix

插件的前缀。在日志中该前缀将取代插件名。
- `prefix: EpicPaperMCHypePlugin`

### libraries

这个功能目前违反 Maven 中央仓库 ( Maven Central ) 的服务条款 ( ToS ) 。不过很有可能保留此功能。  

列出插件的部分依赖项。服务端将会从 Maven 中央仓库下载所列依赖项，并单独加入各个插件的 `classpath` 中。这样就无需再将依赖通过 `shade` 的方式打包进插件，也无需使用 `relocation` 来避免多个插件通过 `shade` 打包同一类库时由于依赖项版本不同而可能发生的冲突。  

```yaml
libraries:
  - com.google.guava:guava:30.1.1-jre
  - com.google.code.gson:gson:2.8.6
```

### permissions

列出你的插件所使用的权限。可以用于限制玩家访问插件功能（如指令）。  
```yaml
permissions :
  - permission.node:
        description: "This is a permission node"
        default: op
        children:
            - permission.node.child: true
  - another.permission.node:
        description: "This is another permission node"
        default: not op
```

description是权限节点的描述。将会在权限列表中显示。default 是权限节点的默认值，可以设为为 `op` / `not op`或`true` / `false`。此值默认是 `op`。    
每个权限节点都可以有子权限。当设定为 `true` 时它将继承父权限。  

## Commands

列出插件使用的命令。在需要使用命令来提供某些功能时很有用。
```yaml
commands:
  - command:
        description: "This is a command"
        usage: "/command <arg>"
        aliases: [cmd, command]
        permission: permission.node
        permission-message: "You do not have permission to use this command"
```

-  **description**是命令的描述。简要的描述命令的作用。
-  **usage**是命令的用法。将会在玩家运行 `/help <command>` 命令时显示。
-  **aliases** 是命令使用的一系列别名。对于缩短命令很有帮助。
-  **permission**是玩家要使用此命令所需的权限节点。注意：只有在玩家有权使用该命令时它才会在客户端的补全候选项里显示。
-  **permission-message**在玩家没有权限使用命令时显示的内容。

## Dependencies

### 依赖死循环  
当插件指定了一个依赖插件时，被依赖的插件会在该插件加载之前先加载。    
如果依赖出现循环，那么将给插件加载过程带来严重问题。依赖的死循环可通过如下流程图表示：   
插件A -> 插件B -> 插件A -> 插件B...     
    
在上图中，插件 A 将插件 B 作为依赖，而插件 B 又将插件 A 作为依赖。  

### depend

列出插件要**加载**所依赖的前置插件。通过前置插件的名称来指定。

如果指定的依赖找不到，你的插件也不会加载。  
  
- `depend: [Vault, WorldEdit]`
  
### softdepend
  
插件的软依赖列表（如无所列依赖，插件也能正常加载，但不能提供全部功能）。通过软依赖插件的名称来指定。

- `softdepend: [Vault, WorldEdit]`

### loadbefore

列出该插件应优先于哪些插件之前加载。通过插件的名称来指定。  
当某些插件需要使用你的插件所提供的 API 时，此功能很有用。

- `loadbefore: [Vault, FactionsUUID]`
