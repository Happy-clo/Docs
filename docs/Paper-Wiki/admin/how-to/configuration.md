# 配置文件

## 针对每个世界
强大但是鲜为人知的Paper特有功能便是可以为每个世界进行自定义的配置修改。如果你想对所有世界统一配置，则可以尝试仅编辑 `paper-world-defaults.yml` 文件。  

### 默认值
Paper默认不会为每一个世界都提供自定义配置项，而是将所有默认值存储在 `config/paper-world-defaults.yml` 中。此文件的每一个值都可以被指定世界的特定配置所修改或覆盖，但是在默认情况下是使用 `paper-world-defaults.yml` 文件中的值。编辑此文件即意味要将修改后的值应用于所有未手动配置的所有世界中。  

### 每个世界的值
要为专门某个世界设定一个配置的值，需要所在世界目录中找到 `paper-world.yml` 。    
例如：你想要在一个叫做 `resource` 的世界中禁用 `spawn.keep-spawn-loaded` 值，就需要在 `resource` 文件夹中编辑 `paper-world.yml` 文件并添加以下内容：  
  
*此文件位于 resource/paper-world.yml*  
```
_version:  28

spawn:  
  keep-spawn-loaded: false
```
在配置文件中，默认只有 `_version` 一值。想要针对某世界进行配置，需要从 `paper-world-defaults.yml` 中复制对应值过来后修改。  

### 继承
所有没有为世界明确定义的配置都将继承自 `paper-world-defaults.yml`。  
也就是说，如果想要修改所有世界的默认配置，无需机械地复制、粘贴到每个世界相应的文件里。  
更不用将想要修改的值从 `paper-world-defaults.yml` 挨个复制过来然后粘贴到所有 `paper-world.yml` 文件中。    
只需要复制想要针对某个世界进行修改的配置项到对应的 `paper-world.yml` 文件里之后再进行精确的修改即可。    
举个更加复杂的例子：需要在两个不同的世界中分别修改 `spawn-limits` 值和 `keep-spawn-loaded` 值。  
  
*位于paper-world-defaults.yml*   
```
entities:  
  spawning:  
    spawn-limits:  
      ambient:  70  
      axolotls:  10  
      creature:  15  
      monster:  5  
      underground_water_creature:  5  
      water_ambient:  5  
      water_creature:  20  
spawn:  
  keep-spawn-loaded:  true
```
*位于world_nether/paper-world.yml*
```
entities:  
  spawning:  
    spawn-limits:  
      monster:  90
```  
*位于resource_world/paper-world.yml*
```
entities:  
  spawning:  
    spawn-limits:  
      axolotls:  8  
      creature:  15  
      monster:  2  
spawn:  
  keep-spawn-loaded:  false
```
这个例子简单的介绍了一下继承的概念。对于目前我们更改的每一个世界，以下列表是正在应用的实际配置：  

| 配置文件的值                                                 | world  | world_nether | world_the_end | resource_world |
| ----------------------------------------------------------- | ------ | ------------ | ------------- | -------------- |
| `entities.spawning.spawn-limits.ambient`                    | `15`   | `15`         | `15`          | `15`           |
| `entities.spawning.spawn-limits.axolotls`                   | `5`    | `5`          | `5`           | `8`            |
| `entities.spawning.spawn-limits.creature`                   | `10`   | `10`         | `10`          | `15`           |
| `entities.spawning.spawn-limits.monster`                    | `70`   | `90`         | `70`          | `2`            |
| `entities.spawning.spawn-limits.underground_water_creature` | `5`    | `5`          | `5`           | `5`            |
| `entities.spawning.spawn-limits.water_ambient`              | `20`   | `20`         | `20`          | `20`           |
| `entities.spawning.spawn-limits.water_creature`             | `5`    | `5`          | `5`           | `5`            |
| `spawn.keep-spawn-loaded`                                   | `true` | `true`       | `true`        | `false`        |

  
现在，`world_the_end`的值没有被更改过。所以，它使用了 `config/paper-world-defaults.yml` 中的所有默认值。
而且在 `resource_world/paper-world.yml` 中禁用了 `keep-spawn-loaded`，不过很明显的可以看到此项在 `config/paper-world-defaults.yml` 中是启用的。  
