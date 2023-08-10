---
title: "配置文件"
---

本文将介绍由Purpur提供的、位于purpur.yml文件中所有的配置项。    
  
如果你想要了解在paper.yml，spigot.yml，server.properties中的配置项的信息，你可以在它们对应的文档中阅读。  

* [Server Configuration (server.properties)](https://minecraft.fandom.com/wiki/Server.properties)

* [Bukkit Configuration (bukkit.yml)](https://bukkit.fandom.com/wiki/Bukkit.yml)

* [Spigot Configuration (spigot.yml)](https://www.spigotmc.org/wiki/spigot-configuration/)

* [Paper Configuration (paper.yml)](https://docs.papermc.io/paper/reference/paper-global-configuration)  
[Paper 配置文件（paper.yml）](https://docs.poikcue.com/#/PaperMC/Administration/Reference/global-configuration)

* [Pufferfish Configuration (pufferfish.yml)](https://docs.pufferfish.host/setup/pufferfish-fork-configuration/)

配置中的值可能会多次更改，这就意味着这里的信息不一定是完整的。如果你找不到想要修改的项或出现了某些错误，请在 [Discord](https://purpurmc.org/discord) 上与我们联系。

## 全局设定

全局设定将会影响服务器中的所有世界与服务器本身的功能。

### verbose

- **默认值**: false
- **描述**: 在服务器启动时是否要在日志中打印所有配置项的值。
	
### config-version

* **无论什么理由都不要更改此值！** 本配置项将帮助自动更新你的配置文件。
	
### command

* #### uptime
    * ##### format
        - **默认值**: "&lt;days>&lt;hours>&lt;minutes>&lt;seconds>"
        - **描述**: 用于在 `<uptime>` 中显示 [`uptime-command-output`](#uptime-command-output) 的格式。
    * ##### day
        - **默认值**: "%02d day,"
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<day>` 的输出内容。
    * ##### days
        - **默认值**: "%02d days, "
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<days>` 的输出内容。
    * ##### hour
        - **默认值**: "%02d hour, "
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<hour>` 的输出内容。
    * ##### hours
        - **默认值**: "%02d hours, "
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<hours>` 的输出内容。
    * ##### minute
        - **默认值**: "%02d minute, and "
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<minute>` 的输出内容。
    * ##### minutes
        - **默认值**: "%02d minutes, and "
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<minutes>` 的输出内容。
    * ##### second
        - **默认值**: "%02d second"
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<second>` 的输出内容。
    * ##### seconds
        - **默认值**: "%02d seconds"
        - **描述**: 在 [command.uptime.format](#format) 配置项中显示 `<second>` 的输出内容。
* #### gamemode
    * ##### requires-specific-permission
        - 需要 [`minecraft.command.gamemode.<gamemode>`](../Purpur/Permissions.html#minecraft-command-gamemode-gamemode) 权限
        - **默认值**: false
        - **描述**: 设定为 "true" 使每个游戏模式需要其专属的权限。
* #### fill
    * ##### max-area
        - **默认值**: 32768
        - **描述**: `/fill`命令可以影响的最大区域。
* #### tpsbar
    * ##### title
        `<tps>` - 当前的TPS

        `<mspt>` - 当前的MSPT

        `<ping>` - 当前的延迟

        - **默认值**: &lt;gray>TPS&lt;yellow>:&lt;/yellow> &lt;tps> MSPT&lt;yellow>:&lt;/yellow>
      &lt;mspt> Ping&lt;yellow>:&lt;/yellow> &lt;ping>ms
        - **描述**: 运行`/tpsbar`命令时在bossbar显示的格式。

    * ##### overlay
        - **默认值**: NOTCHED_20
        - **描述**:
            设定Bossbar的overlay格式。
            可选： `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20`
    * ##### fill-mode
        - **默认值**: MSPT
        - **描述**:
            在Bossbar上要显示哪些内容？
            可选: `TPS`, `MSPT`, `PING` 
    * ##### progress-color
        可选: `pink`, `blue`, `red`, `green`, `yellow`, `violet`, `white`
        * ###### good
            - **默认值**: green
            - **描述**: 当`fill-mode`为“good”（良好）时应该显示的颜色。
        * ###### medium
            - **默认值**: yellow
            - **描述**: 当`fill-mode`为“medium”（一般）时应该显示的颜色。
        * ###### low
            - **默认值**: red
            - **描述**: 当`fill-mode`为“low”（差）时应该显示的颜色。
    * ##### text-color
        `<text>` - 在 [`settings.command.tpsbar.title`](#title) 显示的格式
        * ###### good
            - **默认值**: &lt;gradient:#55ff55:#00aa00>&lt;text>&lt;/gradient>
            - **描述**: 当`fill-mode`为“good”时`<text>`的渐变色。
        * ###### medium
            - **默认值**: &lt;gradient:#ffff55:#ffaa00>&lt;text>&lt;/gradient>
            - **描述**: 当`fill-mode`为“medium“时`<text>`的渐变色。
        * ###### low
            - **默认值**: &lt;gradient:#ff5555:#aa0000>&lt;text>&lt;/gradient>
            - **描述**: 当`fill-mode`为“low”时`<text>`的渐变色。
    * ##### tick-interval
        - **默认值**: 20
        - **描述**: bossbar应当多久更新一次。
* #### rambar
    * ##### title
        `<used>` - 目前已用的内存量。

        `<xmx>` - 设定 `Xmx` 的（最大的）值

        `<percent>` - 已用内存的百分比

      - **默认值**: '"&lt;gray>Ram&lt;yellow>:&lt;/yellow> &lt;used>/&lt;xmx> (&lt;percent>)"'
      - **描述**: 当运行`/rambar`命令时bossbar中显示的的格式

    * ##### overlay
        - **默认值**: NOTCHED_20
        - **描述**:
          设定Bossbar的overlay格式
          可选： `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20`
    * ##### progress-color
      可选: `pink`, `blue`, `red`, `green`, `yellow`, `violet`, `white`
        * ###### good
            - **默认值**: green
            - **描述**: 当内存使用量为“good”（良好）时显示的颜色
        * ###### medium
            - **默认值**: yellow
            - **描述**: 当内存使用量为“medium”（一般）时显示的颜色
        * ###### low
            - **默认值**: red
            - **描述**: 当内存使用量为“low”（差）时显示的颜色
    * ##### text-color
      `<text>` - 在 [`settings.command.tpsbar.title`](#title) 中显示的格式
        * ###### good
            - **默认值**: &lt;gradient:#55ff55:#00aa00>&lt;text>&lt;/gradient>
            - **描述**: 当内存使用量为“good”时`<text>`的渐变色。
        * ###### medium
            - **默认值**: &lt;gradient:#ffff55:#ffaa00>&lt;text>&lt;/gradient>
            - **描述**: 当内存使用量为“medium”时`<text>`的渐变色。
        * ###### low
            - **默认值**: &lt;gradient:#ff5555:#aa0000>&lt;text>&lt;/gradient>
            - **描述**: 当内存使用量为“low”时`<text>`的渐变色。
    * ##### tick-interval
        - **默认值**: 20
        - **描述**: bossbar应当多久更新一次。
* #### compass
    * ##### title
        - **默认值**: "S  ·  ◈  ·  ◈  ·  ◈  ·  SW  ·  ◈  ·  ◈  ·  ◈  ·  W  ·  ◈  ·  ◈  ·  ◈  ·  NW  ·  ◈  ·  ◈  ·  ◈  ·  N  ·  ◈  ·  ◈  ·  ◈  ·  NE  ·  ◈  ·  ◈  ·  ◈  ·  E  ·  ◈  ·  ◈  ·  ◈  ·  SE  ·  ◈  ·  ◈  ·  ◈  ·  
S  ·  ◈  ·  ◈  ·  ◈  ·  SW  ·  ◈  ·  ◈  ·  ◈  ·  W  ·  ◈  ·  ◈  ·  ◈  ·  NW  ·  ◈  ·  ◈  ·  ◈  ·  N  ·  ◈  ·  ◈  ·  ◈  ·  NE  ·  ◈  ·  ◈  ·  ◈  ·  E  ·  ◈  ·  ◈  ·  ◈  ·  SE  ·  ◈  ·  ◈  ·  ◈  ·  "
        - **描述**: 当运行[`/compass`](../Purpur/Commands.html#compass)命令时bossbar显示的格式。
        
    * ##### overlay
        - **默认值**: PROGRESS
        - **描述**:
            设定Bossbar的overlay格式
            可选： `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20`
    * ##### progress-color
        可选： `pink`, `blue`, `red`, `green`, `yellow`, `violet`, `white`
        - **默认值**: green
        - **描述**: bossbar的颜色
    * ##### percent
        - **默认值**: 1.0
        - **描述**: 从0.0至1.0之间bossbar的填充程度
    * ##### tick-interval
        - **默认值**: 5
        - **描述**: bossbar应当多久更新一次。
* #### hide-hidden-players-from-entity-selector
    - **默认值**: false
    - **描述**: 设定为true即将指向最近的实体，即使处于隐藏状态。

### allow-water-placement-in-the-end

- **默认值**: true
- **描述**: 是否允许在末地放置水。
	
### use-alternate-keepalive

- **默认值**: false
- **描述**: 是否使用不同的方法判断ping心跳包超时。启用此项后将向玩家每秒发送一次心跳包，如果他们在30秒内没有响应则以超时为由踢出玩家。以何种顺序响应，只要他们之中有一位响应都会继续允许玩家响应。也就是说如果某名玩家丢包时便不会踢出玩家。
	
### tps-catchup

- **默认值**: true
- **描述**: 是否要启用TPS catchup

::: tip 提示 
TPS catchup 会当服务器的tps低于20时，使服务器计时tick的速度比20TPS更快。这会尝试使平均的TPS值尽可能地更接近于20，但是也会产生其副作用。
:::

### server-mod-name
- **默认值**: Purpur
- **描述**: 当客户端过期时或某名玩家按下F3时显示在调试页面中所显示的服务器名称

### fix-projectile-looting-transfer
- **默认值**: false
- **描述**: 是否要阻止通过弹射物而掠夺造成的死亡，除非插件修改了掠夺modifier。解决[`MC-3304`](https://bugs.mojang.com/browse/MC-3304)。

### username-valid-characters
- **默认值**: ^[a-zA-Z0-9_.]*$
- **描述**: 用户名中可以使用的字符。此项需要使用正则表达式。

### lagging-threshold
- **默认值**: 19.0
- **描述**: 当出现延迟时，是否进行追踪以确保正确地处理了行为。当服务器出现延迟时，此项即为阈值。不过目前本项仅用于设定Purpur中的`mob.villager.brain-ticks`。
	
### disable-give-dropping
- **默认值**: false
- **描述**: 设定为true时，若玩家物品栏已满，`/give`命令不会将物品掉落在地上。
	
### messages

#### afk-broadcast-away
需要 [`kick-if-idle`](#kick-if-idle) 设定为 `false`

- **默认值**: &lt;yellow>&lt;italic>%s is now AFK
- **描述**: 当玩家开始挂机时（需要`player-idle-timeout`设定的值大于0且 [kick-if-idle](#kick-if-idle) 设定为 false）通知所有人的消息。

#### afk-broadcast-back
需要 [`kick-if-idle`](#kick-if-idle) 设定为 `false`

- **默认值**: &lt;yellow>&lt;italic>%s is no longer AFK
- **描述**: 当玩家回来时（即不再挂机；需要`player-idle-timeout`设定的值大于0且 [kick-if-idle](#kick-if-idle) 设定为 false）通知所有人的消息。

#### afk-tab-list-prefix
需要 [`kick-if-idle`](#kick-if-idle) 设定为 `false`

- **默认值**: "[AFK] "
- **描述**: 当某玩家处于挂机状态时，在TAB玩家列表中显示的前缀。

#### afk-tab-list-suffix
需要 [`kick-if-idle`](#kick-if-idle) 设定为 `false`

- **默认值**: ""
- **描述**: 当某玩家处于挂机状态时，在TAB玩家列表中显示的后缀。

#### cannot-ride-mob
需要拥有 [`allow.ride.<mob_id>`](../Purpur/Permissions.html#allow-ride-mob-id) 权限。

- **默认值**: &lt;red>You cannot mount that mob
- **描述**: 当某名玩家尝试骑行不允许骑乘的生物时，发送的消息。

#### dont-run-with-scissors
需要启用 [`damage-if-sprinting`](#damage-if-sprinting) 选项。

- **默认值**: &lt;red>&lt;italic>Don't run with scissors!
- **描述**: 当玩家尝试拿着剪刀乱跑时在 Actionbar 提醒的消息。

#### ping-command-output
需要拥有 [`bukkit.command.ping`](../Purpur/Permissions.html#bukkit-command-ping) 权限。

- **默认值**: &lt;green>%s's ping is %sms
- **描述**: 当运行 `/ping <user>` 命令时提示的消息。

#### uptime-command-output
需要拥有 [`bukkit.command.uptime`](../Purpur/Permissions.html#bukkit-command-uptime) 权限
`<uptime>` - 来自 [`<global>.command.uptime.format`](#format) 格式

- **默认值**: &lt;green>Server uptime is &lt;uptime>
- **描述**: 当运行 `/uptime` 命令时显示的消息。

#### demo-command-output
需要拥有 [`bukkit.command.demo`](../Purpur/Permissions.html#bukkit-command-demo) 权限

- **默认值**: &lt;green>%s has been shown the demo screen
- **描述**: 当输入`/demo`命令时为玩家显示DEMO页面。

#### credits-command-output
需要拥有 [`bukkit.command.credits`](../Purpur/Permissions.html#bukkit-command-credits) 权限

- **默认值**: &lt;green>%s has been shown the end credits
- **描述**:  输入`/credits`命令时为玩家播放终末之诗。

#### tpsbar-command-output
需要拥有 [`bukkit.command.tpsbar`](../Purpur/Permissions.html#bukkit-command-tpsbar) 权限

- **默认值**: &lt;green>Tpsbar toggled &lt;onoff> for &lt;target>
- **描述**: 输入`/tpsbar`命令时为玩家显示tpsbar。

#### ram-command-output

- **默认值**: '&lt;green>Ram Usage: &lt;used>/&lt;xmx> (&lt;percent>)'
- **描述**: 当某名玩家运行 `/ram` 命令时向玩家发送内存使用量消息。

#### rambar-command-output

- **默认值**: &lt;green>Rambar toggled &lt;onoff> for &lt;target>
- **描述**: 输入`/rambar`命令时为玩家显示rambar。
 
#### unverified-username
- **默认值**: default
- **描述**: 当玩家使用未经验证（离线模式的玩家）的用户名加入服务器被踢出时应该显示的文本。设定为"default"即显示默认文本"Failed to verify username!"
	
#### sleep-skipping-night
- **默认值**: default
- **描述**: 当夜晚被跳过时ActionBar应该显示的消息。设定为 "default" 即使用客户端本地化文本，设定为空字符串禁用此功能。

#### sleeping-players-percent
- **默认值**: default
- **描述**: 当玩家睡觉时ActionBar应该显示的消息。设定为 "default" 即使用客户端本地化文本，设定为空字符串禁用此功能。可用占位符：`<count>` - 当前正在睡觉的玩家的数量，`<total>` - 所有需要睡觉的玩家的数量。

#### death-message
* ##### stonecutter
    - **默认值**: &lt;player> has sawed themself in half
    - **描述**: 若玩家站在切石机上而导致死亡时显示的消息。
* ##### run-with-scissors
    - **默认值**: &lt;player> slipped and fell on their shears
    - **描述**: 若玩家拿着剪刀到处乱跑而导致死亡时显示的消息。

### network
### kick-for-out-of-order-chat
- **默认值**: true
- **描述**: 设定为false以禁止服务器踢出不正当聊天的玩家。
####  upnp-port-forwarding
- **默认值**: false
- **描述**: 当服务器启动时是否要自动使用UPnP进行端口转发。
####  max-joins-per-second
- **默认值**: false
- **描述**: 设定为 true 时，paper.yml配置文件中的`max-joins-per-tick`配置项使用每秒替代每Tick。
	
### blocks

####  barrel
* ##### rows
    - **默认值**: 3
    - **描述**: 设定木桶应该有几行存储空间。最小值是 1，最大值是 6。
####  beehive
* ##### max-bees-inside
    - **默认值**: 3
    - **描述**: 蜂巢内最多允许有几只蜜蜂。
####  grindstone
* ##### ignored-enchants
    - **默认值**:
        ```
        - minecraft:binding_curse
        - minecraft:vanishing_curse
        ```
    - **描述**: 应该在砂轮中移除附魔时，应该忽略哪些附魔。
* ##### remove-attributes
    - **默认值**: false
    - **描述**: 设定为true以允许砂轮移除物品属性。
* ##### remove-name-and-lore
    - **默认值**: false
    - **描述**:设定为true以允许砂轮移除物品的名称和lore。
####  ender_chest
* ##### six-rows
    - **默认值**: false
    - **描述**: 在末影箱中是否有六行存储空间。
* ##### use-permissions-for-rows
    - 需要 [`ender_chest.six-rows`](#six-rows) 设定为true
    - 需要拥有[`purpur.enderchest.rows.<number>`](../Purpur/Permissions.html#purpur-enderchest-rows-number) 权限
    - **默认值**: false
    - **描述**: 是否应该为不同权限节点作为实际提供存储空间行的数量。默认情况下，当此项启用时，除非用权限指定，所有玩家都应该有六行存储空间。

#### disable-mushroom-updates  
- **默认值**: false
- **描述**: 是否在服务器上停止更新蘑菇方块状态。
#### disable-chorus-plant-updates  
- **默认值**: false
- **描述**: 是否在服务器上停止更新紫颂树状态。
#### disable-note-block-updates  
- **默认值**: false
- **描述**: 是否在服务器上停止更新音符盒状态。
####  crying_obsidian
* ##### valid-for-portal-frame
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许使用哭泣的黑曜石创建传送门。
####  coral
* ##### die-outside-water
    - **默认值**: true
    - **描述**: 设定为 "false" 以允许珊瑚在陆地上存活。
#### sculk_shrieker
* ##### can-summon-default
    - **默认值**: false
    - **描述**: 设定为 "true" 以在放置时将`can_summon`设为`true`。
#### twisting_vines
* ##### max-growth-age
    - **默认值**: 25
    - **描述**: 植物可生长的最大年龄。
#### weeping_vines
* ##### max-growth-age
    - **默认值**: 25
    - **描述**: 植物可生长的最大年龄。
#### cave_vines
* ##### max-growth-age
    - **默认值**: 25
    - **描述**: 植物可生长的最大年龄。
#### kelp
* ##### max-growth-age
    - **默认值**: 25
    - **描述**: 植物可生长的最大年龄。
### broadcasts

#### advancement

##### only-broadcast-to-affected-player
- **默认值**: false
- **描述**: 当完成某成就时，是否只通知相关的玩家。

#### death

##### only-broadcast-to-affected-player
- **默认值**: false
- **描述**: 当玩家死亡时，是否只通知相关的玩家。
	
### logger

#### suppress-init-legacy-material-errors
- **默认值**: false
- **描述**: 是否取消插件初始化历史材质API警告。
#### suppress-ignored-advancement-warnings
- **默认值**: false
- **描述**: 是否要在控制台和日志中取消未知属性警告。
#### suppress-unrecognized-recipe-errors
- **默认值**: false
- **描述**: 是否要在控制台和日志中尝试加载无法识别的配方时取消警告。
#### suppress-setblock-in-far-chunk-errors
- **默认值**: false
- **描述**: 当setBlock影响区块过远时是否要取消警告。
#### suppress-sent-expired-chat
- **默认值**: false
- **描述**: 当客户端与服务器系统时间不同步时是否要取消警告。
	
### seed

#### structure
在[https://minecraft.fandom.com/wiki/Custom_world_generation#Structure_defaults](https://minecraft.fandom.com/wiki/Custom_world_generation#Structure_defaults)中了解关于下列配置项的更多信息。

##### buried_treasure
- **默认值**: -1
- **描述**: 默认值 `-1` 使用世界种子，任何非 `-1` 的值都将使用该自定义种子。可接受 -2147483648 至 2147483647 中任意整数。
##### mineshaft
- **默认值**: -1
- **描述**: 默认值 `-1` 使用世界种子，任何非 `-1` 的值都将使用该自定义种子。可接受 -2147483648 至 2147483647 中任意整数。
	
### entity

#### enderman
* ##### short-height
    - **默认值**: false
    - **描述**: 若启用，将允许末影人进到两格高的区域之中。因为客户端碰撞箱不变，所以你依然可以命中头部。

### enchantment

* ##### allow-infinity-and-mending-together
    - **默认值**: false
    - **描述**: 是否允许在同一武器/工具上同时应用经验修补和无限附魔。
* ##### allow-infinity-on-crossbow
    - **默认值**: false
    - **描述**: 是否允许在弩上应用无限附魔。
* ##### allow-looting-on-shears
    - **默认值**: false
    - **描述**: 是否允许在剪刀上应用掠夺附魔。
* ##### allow-unsafe-enchant-command
    - **默认值**: false
    - **描述**: 是否允许使用命令突破最高等级限制。
* ##### clamp-levels
    - **默认值**: true
    - **描述**: 设定此值为 `false` 将允许等级最高至 `32767` ，并使用短整型替代字节来存储数据。

::: tip 提示 
客户端不会显示超过 `255` 部分的等级。
:::

####  anvil
* ##### allow-unsafe-enchants
    - **默认值**: false
    - **描述**: 需要启用此项以使下列所有"不安全的附魔"配置项工作。
* ##### allow-inapplicable-enchants
    - **默认值**: true
    - **描述**: 是否允许在工具或盔甲上应用（默认无法应用的）附魔。例如：在镐子上应用锋利附魔。
* ##### allow-incompatible-enchants
    - **默认值**: true
    - **描述**: 是否允许默认不兼容的附魔应用在一起。例如：保护和火焰保护一起应用或时运和精准采集。
* ##### allow-higher-enchants-levels
    - **默认值**: true
    - **描述**: 是否允许附魔超过最大限制等级。例如：效率V+效率V=效率VI。

## 世界设定

世界设定以每个世界为基础。子节点 `default` 将应用于未使用特定设置的所有世界。

想要了解关于针对配置文件的更多信息，可在[这里](https://docs.poikcue.com/PaperMC/Paper/Administration/how-to/configuration.html)查看来自Paper的解释。（上面是译者翻译的Paper文档。原英文页面在[这里](https://docs.papermc.io/paper/per-world-configuration)）

### hunger

#### starvation-damage
- **默认值**: 1.0
- **描述**: 饥饿将造成的伤害。

### settings

#### entity
* #### shared-random
- **默认值**: true
- **描述**: 设定为 `false` 以允许操纵RNG。Paper使用全局随机源以控制RNG。此值会优化性能，但是技术向的玩家更喜欢将该功能关闭以便更好的控制RNG。

::: warning 警告 
Purpur团队没有测试过此shared-random配置项，可以被视为不安全（shared random被设计为多线程安全，撤销该补丁会导致在某些情况下触发 ConcurrentModificationExceptions，无论是否有插件，同时会增加内存使用量）
:::

### blocks

#### enchantment-table
* ##### lapis-persists
    - **默认值**: false
    - **描述**: 设定此值为 `true` 即将青金石保留在附魔台中，所以你大可放心的把青金石放到附魔台里面。
#### dragon_egg
* ##### teleport
    - **默认值**: true
    - **描述**: 当尝试开采（击打）龙蛋时是否会使其传送。
#### amethyst
* ##### silk-touch
    - **默认值**: false
    - **描述**: 当某物附魔了精准采集时开采是否会获得掉落物。
#### observer
* ##### disable-clock
    - **默认值**: false
    - **描述**: 是否要禁用侦测器时钟。
#### azalea
* ##### growth-chance
    - **默认值**: 0.0
    - **描述**: 杜鹃花丛自然生长为树木的几率。
#### flowering_azalea
* ##### growth-chance
    - **默认值**: 0.0
    - **描述**: 杜鹃花丛自然生长为树木的几率。
#### campfire
* ##### lit-when-placed
    - **默认值**: true
    - **描述**: 设定为false以阻止篝火在放置时默认为点燃状态。
#### cactus
* ##### breaks-from-solid-neighbors
    - **默认值**: true
    - **描述**: 当固体方块放置到仙人掌附近时是否会使仙人掌被破坏。
#### cauldron
* ##### fill-chances
    * ###### rain
        - **默认值**: 0.05
        - **描述**: 炼药锅被雨水填满的速度（取决于随机Tick）
    * ###### powder-snow
        - **默认值**: 0.1
        - **描述**: 炼药锅被雪填满的速度（取决于随机Tick）
    * ###### dripstone-water
        - **默认值**: 0.17578125
        - **描述**: 当在滴水石锥上面放一块水，下面放置炼药锅时被水填满的速度（取决于随机Tick）
    * ###### dripstone-lava
        - **默认值**: 0.05859375
        - **描述**:  当在滴水石锥上面放一块岩浆，下面放置炼药锅时被岩浆填满的速度（取决于随机Tick）
#### turtle_egg
* ##### break-from-exp-orbs
    - **默认值**: true
    - **描述**: 是否允许经验球破坏海龟蛋。
* ##### break-from-items
    - **默认值**: true
    - **描述**: 是否允许掉落物破坏海龟蛋。
* ##### break-from-minecarts
    - **默认值**: true
    - **描述**: 是否允许矿车破坏海龟蛋。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 `true` 以使海龟蛋绕过 mob griefing游戏规则
* ##### random-tick-crack-chance
    - **默认值**: 500
    - **描述**: 海龟蛋破裂的概率。
* ##### feather-fall-distance-affects-trampling
    - **默认值**: false
    - **描述**: 如果实体下落距离等于摔落保护等级+在首个位置时必定践踏的方块，那么当此值设定为 `true` 时即不再视为践踏海龟蛋。即摔落保护I时需要3个方块以上才算践踏，而摔落保护2则需要4个方块以上，等等。 
#### powered-rail
* ##### activation-range
    - **默认值**: 8
    - **描述**: 单个红石可以供能多少个动力铁轨。
#### conduit
* ##### valid-ring-blocks
    - **默认值**:
        ``` yaml
        - minecraft:prismarine
        - minecraft:prismarine_bricks
        - minecraft:sea_lantern
        - minecraft:dark_prismarine
        ```
    - **描述**: 可以用于构建潮涌核心的方块。
* ##### effect-distance
    - **默认值**: 16
    - **描述**: 框架中每有七个物品时潮涌核心的生效距离。
* ##### mob-damage
    * ###### distance
        - **默认值**: 8
        - **描述**: 可对敌对生物造成伤害的距离。
    * ###### damage-amount
        - **默认值**: 4
        - **描述**: 当敌对生物通过水/雨连接时每两秒对其应用的伤害量。
#### beacon
* ##### effect-range
    * ###### level-1
        - **默认值**: 20
        - **描述**: 该等级上应受到效果影响的方块距离。
    * ###### level-2
        - **默认值**: 30
        - **描述**: 该等级上应受到效果影响的方块距离。
    * ###### level-3
        - **默认值**: 40
        - **描述**: 该等级上应受到效果影响的方块距离。
    * ###### level-4
        - **默认值**: 50
        - **描述**: 该等级上应受到效果影响的方块距离。
#### sponge
* ##### absorbs-lava
    - **默认值**: false
    - **描述**: 是否应该允许海绵吸收岩浆。
* ##### absorption
    * ###### area
        - **默认值**: 64
        - **描述**: 海绵可以吸水的区域方块数量。
    * ###### radius
        - **默认值**: 6
        - **描述**: 海绵可以吸水的方块半径。
#### composter
* ##### sneak-to-bulk-process
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许潜行并右键单击时大量处理食物/植物。
#### slab
* ##### break-individual-slabs-when-sneaking
    - **默认值**: false
    - **描述**: 设定为 "true" 即允许在潜行时仅破坏两个半砖中的一个。
#### packed_ice
* ##### allow-mob-spawns
    - **默认值**: true
    - **描述**: 设定为 "false" 即不允许生物在浮冰上生成。
#### blue_ice
* ##### allow-mob-spawns
    - **默认值**: true
    - **描述**: 设定为 "false" 即不允许生物在蓝冰上生成。
#### sand
* ##### fix-duping
    - **默认值**: true
    - **描述**: 设定为 "false" 以启用刷沙。你可能还需要禁用 [`safe-teleporting`](#safe-teleporting)
#### end_portal
* ##### safe-teleporting
    - **默认值**: true
    - **描述**: 在处理末地传送门传送时是否要启用对不安全的代码保护。要利用某些机制可能需要禁用此功能。
#### dispenser
* ##### apply-cursed-to-armor-slots
    - **默认值**: true
    - **描述**: 如果已附魔绑定诅咒，发射器在发射盔甲时是否直接发射到盔甲栏中。
#### respawn_anchor
* ##### explode
    - **默认值**: true
    - **描述**: 重生锚是否应该会爆炸。设定为 "false" 将使重生锚突然消失。
* ##### explosion-power
    - **默认值**: 5.0
    - **描述**: 设定爆炸范围。（举例：TNT是4.0，闪电苦力怕是6.0）
* ##### explosion-fire
    - **默认值**: true
    - **描述**: 爆炸是否会产生火焰。
* ##### explosion-effect
    - **默认值**: DESTROY
    - **描述**: 应该如何处理受爆炸影响的方块。 `DESTROY` 将会直接摧毁方块 (无掉落物). `BREAK` 将会自然地处理掉落 (有掉落物). `NONE` 将不会破坏任何方块。
#### sign
* ##### allow-colors
    - 需要拥有 [`purpur.sign.color`](../Purpur/Permissions.html#purpur-sign-color), [`purpur.sign.style`](../Purpur/Permissions.html#purpur-sign-style), 和/或 [`purpur.sign.magic`](../Purpur/Permissions.html#purpur-sign-magic) 权限。
    - **默认值**: false
    - **描述**: 是否允许玩家在告示牌上使用颜色代码。
* ##### right-click-edit
    - 需要拥有 [`purpur.sign.edit`](../Purpur/Permissions.html#purpur-sign-edit) 权限。
    - **默认值**: false
    - **描述**: 当手持另外一个告示牌时右键告示牌是否可以修改告示牌。
#### magma-block
* ##### damage-when-sneaking
    - **默认值**: false
    - **描述**: 当潜行时是否会造成伤害。
* ##### damage-with-frost-walker
    - **默认值**: false
    - **描述**: 当靴子附魔冰霜行者时，设定为 "true" 时依然会对其造成伤害。
#### lava
* ##### infinite-source
    - **默认值**: false
    - **描述**:  是否允许岩浆拥有像水一样的无限供应特性。(&lt;无限供应> 两个由源方块流出的液体合并在一起会创建新的源方块。)
* ##### infinite-required-sources
    - **默认值**: 2
    - **描述**: 无限岩浆需要多少个源方块数量。
* ##### speed
    * ###### nether
        - **默认值**: 10
        - **描述**: 物理/流动之间的Tick间隔（值越小，流速越快）。
    * ###### not-nether
        - **默认值**: 30
        - **描述**: 物理/流动之间的Tick间隔（值越小，流速越快）。
#### water
* ##### infinite-source
    - **默认值**: true
    - **描述**:  水是否应该有水源方块 (&lt;无限供应> 两个由源方块流出的液体合并在一起会创建新的源方块。)
* ##### infinite-required-sources
    - **默认值**: 2
    - **描述**: 无限水需要水源方块的数量。
#### piston
* ##### block-push-limit
    - **默认值**: 12
    - **描述**: 活塞可以推动多少数量的方块。
#### bed
* ##### explode
    - **默认值**: true
    - **描述**: 床是否会爆炸。设定此值为 "false" 即使床突然消失。
* ##### explode-on-villager-sleep
    - **默认值**: false
    - **描述**: 当村民睡在某个床上时是否会爆炸。
* ##### explosion-power
    - **默认值**: 5.0
    - **描述**: 设定爆炸范围。（举例：TNT是4.0，闪电苦力怕是6.0）
* ##### explosion-fire
    - **默认值**: true
    - **描述**: 爆炸是否会产生火焰。
* ##### explosion-effect
    - **默认值**: DESTROY
    - **描述**: 应该如何处理受爆炸影响的方块。 `DESTROY` 将会直接摧毁方块 (无掉落物). `BREAK` 将会自然地处理掉落 (有掉落物). `NONE` 将不会破坏任何方块。
#### farmland
* ##### gets-moist-from-below
    - **默认值**: false
    - **描述**: 是否允许正下方的水润湿泥土。
* ##### use-alpha-farmland
    - **默认值**: false
    - **描述**: 当在农田下面直接放置栅栏/圆石墙时是否可以防止被践踏。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以使农田绕过 mob griefing 游戏规则。
* ##### only-players-trample
    - **默认值**: false
    - **描述**:  是否只有玩家才能践踏农田。
* ##### disable-trampling
    - **默认值**: false
    - **描述**: 设定为 "true" 以完全禁用践踏。
* ##### trample-height
    - **默认值**: -1.0
    - **描述**: 设定玩家/实体在下坠时尝试践踏农田所需的高度。

::: tip 提示
践踏高度需要方块的高度或精确距离。在测试之中我们发现设定值和实际下落距离是不一致的。以下是测试结果：  
        设定的值 -> 实际践踏所需的高度  
        1.0 -> 1.25  
        1.5 -> 1.75  
        2.0 -> 2.25  
        2.5 -> 2.87  
        3.0 -> 3.5  
        3.5 -> 4.25  
        4.0 -> 4.25  
        4.5 -> 5.0  
        5.0 -> 5.87  
        5.5 -> 5.87  
        6.0 -> 6.75  
:::

* ##### feather-fall-distance-affects-trampling
    - **默认值**: false
    - **描述**: 如果实体下落距离等于摔落保护等级+在首个位置时必定践踏的方块，那么当此值设定为 `true` 时即不再视为践踏。即摔落保护I时需要3个方块以上才算践踏，而摔落保护2则需要4个方块以上，等等。 
#### spawner
* ##### deactivate-by-redstone
    - **默认值**: false
    - **描述**: 是否允许红石禁用刷怪笼。
* ##### fix-mc-238526
    - **默认值**: false
    - **描述**:  修复刷怪笼不正确生成水生动物的问题；MC-238526
#### dispenser
* ##### place-anvils
    - **默认值**: false
    - **描述**: 是否允许发射器放置铁砧。
#### anvil
* ##### use-mini-message
    - 需要拥有 [`purpur.anvil.minimessage`](../Purpur/Permissions.html#purpur-anvil-minimessage) 权限
    - **默认值**: false
    - **描述**:  是否允许玩家在铁砧中使用 MiniMessage tags。
* ##### allow-colors
    - 需要拥有 [`purpur.anvil.color`](../Purpur/Permissions.html#purpur-anvil-color) 权限
    - **默认值**: false
    - **描述**: 是否允许玩家在铁砧中使用颜色代码。
* ##### cumulative-cost
    - **默认值**: true
    - **描述**: 物品在铁砧中是否要应用附魔惩罚。
* ##### iron-ingots-used-for-repair
    - **默认值**: 0
    - **描述**:需要修复铁砧所需的铁锭数量。
* ##### obsidian-used-for-damage
    - **默认值**: 0
    - **描述**: 黑曜石对铁砧造成伤害所需要的数量。
#### lightning_rod
* ##### range
    - **默认值**: 128
    - **描述**: 避雷针重定向雷电的距离。
#### stonecutter
* ##### damage
    - **默认值**: 0.0
    - **描述**: 如果设定了一个值，生物则会自动绕开切石机。
#### furnace
* ##### use-lava-from-underneath
    - **默认值**: false
    - **描述**: 当岩浆在熔炉下面时是否允许为其无限供能。
#### blue_ice
* ##### allow-snow-formation
    - **默认值**: true
    - **描述**: 设定为 "false" 以禁止在蓝冰上生成雪。
#### chest
* ##### open-with-solid-block-on-top
    - **默认值**: false
    - **描述**: 当有固体方面在上面时是否允许打开箱子。
#### shulker_box
* ##### allow-oversized-stacks
    - **默认值**: false
    - **描述**: 是否在潜影盒中允许过度堆叠物品（默认在 chunk ban issue PaperMC/Paper#4748 修复。）
#### door
* ##### requires-redstone
    - **默认值**: []
    - **描述**: 是否要允许设置需要红石操控的门。
#### powder_snow
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许细雪绕过mob griefing游戏规则。
#### end-crystal
* ##### baseless
    * ###### explode
        - **默认值**: true
        - **描述**: 设定为 "false" 以使下界水晶不再爆炸。
    * ###### explosion-power
        - **默认值**: 6.0
        - **描述**: 下界水晶爆炸力度。
    * ###### explosion-fire
        - **默认值**: false
        - **描述**: 设定 "true" 以在下界水晶爆炸后生成火焰。
    * ###### explosion-effect
        - **默认值**: DESTROY
        - **描述**: 爆炸所带来影响的类型。可选： `NONE`, `BREAK`, 和 `DESTROY`。
* ##### base
    * ###### explode
        - **默认值**: true
        - **描述**: 设定为 "false" 以令下界水晶不再爆炸。
    * ###### explosion-power
        - **默认值**: 6.0
        - **描述**: 下界水晶爆炸力度。
    * ###### explosion-fire
        - **默认值**: false
        - **描述**: 设定 "true" 以在下界水晶爆炸后生成火焰。
    * ###### explosion-effect
        - **默认值**: DESTROY
        - **描述**: 爆炸所带来影响的类型。可选： `NONE`, `BREAK`, 和 `DESTROY`。


### mobs

#### allay
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### respect-nbt
    - **默认值**: []
    - **描述**: 若要使悦灵在拾起物品时保留NBT，你需要在存储一份保留的附魔列表，即如果你给了悦灵一个带有附魔的剑，它只会拾起相同含有附魔的剑。
#### frog
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### ridable-jump-height
    - **默认值**: 0.65
    - **描述**: 当骑乘时该生物可以跳跃的最大高度（以方块为单位）。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
#### tadpole
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
#### warden
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
#### ender_dragon
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### always-drop-full-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 时，末影龙的每次死亡是否都会掉落如首次死亡一样的全部经验。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 时，末影龙将绕过mob griefing游戏规则。
* ##### can-ride-vehicles
    - **默认值**: false
    - **描述**: 设定为 "true" 时末影龙可以骑乘载具。
* ##### attributes
    * ###### max_health
        - **默认值**: 200.0
        - **描述**: 最大生命属性
#### cave_spider
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 12.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### endermite
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 8.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### mooshroom
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### polar_bear
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breedable-item
    - **默认值**: ""
    - **描述**: 可以吸引与繁殖北极熊的物品。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 30.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### vindicator
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### johnny
    * ###### spawn-chance
        - **默认值**: 0.0
        - **描述**: 将命名为"Johnny"的卫道士替代普通卫道士的概率（0.0 - 1.0）
* ##### attributes
    * ###### max_health
        - **默认值**: 24.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### zombie_horse
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### spawn-chance
    - **默认值**: 0.0
    - **描述**: 生成僵尸马替代骷髅马（雷雨天气中自然生成）的概率（0.0 - 1.0）
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 15.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.4
            - **描述**: 最小跳跃力量属性
        * max
            - **默认值**: 1.0
            - **描述**: 最小跳跃力量属性
    * ###### movement_speed
        * min
            - **默认值**: 0.2
            - **描述**: 最小移速属性
        * max
            - **默认值**: 0.2
            - **描述**: 最大移速属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### wither
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。 
* ##### can-ride-vehicles
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许凋灵骑乘载具。
* ##### play-spawn-sound
    - **默认值**: true
    - **描述**: 当凋灵生成时，是否要向全局播放生成音效。
* ##### explosion-radius
    - **默认值**: 1.0
    - **描述**: 凋灵远程攻击时爆炸范围。
* ##### health-regen-amount
    - **默认值**: 1.0
    - **描述**: 凋灵再生效果的数量。
* ##### health-regen-delay
    - **默认值**: 20
    - **描述**: 凋灵在应用两次生命恢复时应该间隔多次时间。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 令凋灵绕过 mob griefing 游戏规则。
* ##### attributes
    * ###### max_health
        - **默认值**: 300.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### wither_skeleton
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### zombie_villager
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### cure
    * ###### enabled
        - **默认值**: true
        - **描述**: 设定为 "false" 以禁止治愈僵尸村民。
* ##### curing_time
    * ###### min
        - **默认值**: 3600
        - **描述**: 随机选择治愈的Tick数量的最小值。
    * ###### max
        - **默认值**: 6000
        - **描述**: 随机选择治愈的Tick数量的最大值。
* ##### jockey
    * ###### only-babies
        - **默认值**: true
        - **描述**: 是否只允许幼年才能骑乘鸡。
    * ###### chance
        - **默认值**: 0.05
        - **描述**: 生成鸡骑士的概率（0.0 - 1.0）
    * ###### try-existing-chickens
        - **默认值**: true
        - **描述**: 在生成时是否要扫描已有的鸡。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### spawn_reinforcements
        - **默认值**: 0.1
        - **描述**: 额外生成的概率（0.0 - 1.0）
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 时令生物永远掉落经验值。
#### wandering_trader
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### can-be-leashed
    - **默认值**: false
    - **描述**: 玩家是否可以使用拴绳引领村民（可交易的村民不算在内）
* ##### allow-trading
    - **默认值**: true
    - **描述**: 设定为 "false" 时禁用与流浪商人交易。
* ##### follow-emerald-blocks
    - **默认值**: false
    - **描述**: 村民是否会被绿宝石方块所吸引并跟随手中手持该方块的玩家。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### silverfish
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以使蠹虫绕过mob griefing游戏规则。
* ##### attributes
    * ###### max_health
        - **默认值**: 8.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### zombified_piglin
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### count-as-player-kill-when-angry
    - **默认值**: true
    - **描述**: 设定为 "false" 时令僵尸猪灵被玩家激怒时（不是被击杀）不再掉落经验值
* ##### jockey
    * ###### only-babies
        - **默认值**: true
        - **描述**: 是否只允许幼年才能骑乘鸡。
    * ###### chance
        - **默认值**: 0.05
        - **描述**: 生成鸡骑士的概率（0.0 - 1.0）
    * ###### try-existing-chickens
        - **默认值**: true
        - **描述**: 在生成时是否要扫描已有的鸡。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### spawn_reinforcements
        - **默认值**: 0.0
        - **描述**: 额外生成的概率（0.0 - 1.0）
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### snow_golem
::: tip 决定两次射击间隔的公式
```
    ((平方根(distanceToTarget) / attack-distance) / snow-ball-modifier) * (max-shoot-interval-ticks - min-shoot-interval-ticks) + min-shoot-interval-ticks
```  
如果 `min-shoot-interval-ticks` 和 `max-shoot-interval-ticks` 都设定为 0，则雪人不会射出任何雪球。  
:::

* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### leave-trail-when-ridden
    - **默认值**: false
    - **描述**: 当雪人正在骑马时是否令其留下尾迹。
* ##### drops-pumpkin-when-sheared
    - **默认值**: true
    - **描述**: 当使用剪子剪雪人时是否令其南瓜掉落至地上。
* ##### pumpkin-can-be-added-back
    - **默认值**: false
    - **描述**: 南瓜是否可以被雪人重新佩戴。
* ##### min-shoot-interval-ticks
    - **默认值**: 20
    - **描述**: 射击最大间隔Tick的数量。
* ##### max-shoot-interval-ticks
    - **默认值**: 20
    - **描述**: 射击最大间隔Tick的数量。
* ##### snow-ball-modifier
    - **默认值**: 10.0
    - **描述**: 雪球弹射物的modifier值。
* ##### attack-distance
    - **默认值**: 1.25
    - **描述**: 雪人即将攻击时的距离。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许雪人绕过 mob griefing 游戏规则。
* ##### takes-damage-from-water
    - **默认值**: true
    - **描述**: 设定为 "false" 令此生物不再在水中受到伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 4.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### skeleton_horse
* ##### can-swim
    - **默认值**: false
    - **描述**: 骷髅马能否在水中游泳。设定为 "false" 将令它们下沉至水底（与原版一致）。
* ##### ridable-in-water
    - **默认值**: true
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 15.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.4
            - **描述**: 最小跳跃力量属性
        * max
            - **默认值**: 1.0
            - **描述**: 最小跳跃力量属性
    * ###### movement_speed
        * min
            - **默认值**: 0.2
            - **描述**: 最小移速属性
        * max
            - **默认值**: 0.2
            - **描述**: 最大移速属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### phantom
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attacked-by-crystal-range
    - **默认值**: 0.0
    - **描述**: 幻翼扫描攻击的水晶半径。设定为 0 禁用此功能。
* ##### attacked-by-crystal-damage
    - **默认值**: 1.0
    - **描述**: 水晶每秒对幻翼造成的伤害量。默认值 1.0 是半颗心。
* ##### orbit-crystal-radius
    - **默认值**: 0.0
    - **描述**: 幻翼扫描水晶的轨道半径。设定为 0 禁用此功能。
* ##### burn-in-light
    - **默认值**: 0
    - **描述**: 幻翼在亮度为多少时可以生成。
* ##### burn-in-daylight
    - **默认值**: true
    - **描述**: 幻翼在白天是否会自燃。
* ##### flames-on-swoop
    - **默认值**: false
    - **描述**: 设定为 true 令幻翼在俯冲时射出火焰。
* ##### ignore-players-with-torch
    - **默认值**: false
    - **描述**: 幻翼是否要尽量避免遇到头上有根火把的玩家。
* ##### allow-griefing
    - **默认值**: false
    - **描述**: 幻翼的火焰是否可以燃烧。
* ###### size
    * min
        - **默认值**: 0
        - **描述**: 当自然生成时随机可以选择的最小规模。
    * max
        - **默认值**: 0
        - **描述**: 当自然生成时随机可以选择的最大规模。
* ##### spawn
    * ###### min-sky-darkness
        - **默认值**: 5
        - **描述**: 夜晚在空中的数量（5对于雷雨来说足够暗了，但是还不够下雨）
    * ###### only-above-sea-level
        - **默认值**: true
        - **描述**: 是否仅当玩家高于海平面时才会生成。
    * ###### only-with-visible-sky
        - **默认值**: true
        - **描述**: 是否仅当玩家抬头即可望到天时才会生成。
    * ###### local-difficulty-chance
        - **默认值**: 3.0
        - **描述**: 本地游戏难度需要大于在0.0和该值之间的随机数。
    * ###### min-time-since-slept
        - **默认值**: 72000
        - **描述**: 在生成之前，玩家最后一次睡觉起最小的Tick数值。
    * ###### delay
        * min
            - **默认值**: 1200
            - **描述**: 全局设定两次尝试生成之间最小时间（Tick为单位。）
        * max
            - **默认值**: 2400
            - **描述**: 全局设定两次尝试生成之间最大时间（Tick为单位。）
    * ###### overhead
        * min
            - **默认值**: 20
            - **描述**: 在玩家之上生成所需的最小方块数。
        * max
            - **默认值**: 35
            - **描述**: 在玩家之上生成所需的最大方块数。
        * radius
            - **默认值**: 10
            - **描述**: 在玩家之上需要生成间隔的方块距离。
    * ###### per-attempt
        * min
            - **默认值**: 1
            - **描述**: 幻翼每次尝试生成的最小数量。
        * max
            - **默认值**: -1
            - **描述**: 幻翼每次尝试生成的最大数量。（使用 -1 由世界难度决定。）
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### attack_damage
        - **默认值**: "6 + size"
        - **描述**: 设定幻翼的基础攻击伤害。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### chicken
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### retaliate
    - **默认值**: false
    - **描述**: 鸡若被打了，是否会回击。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 4.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### creeper
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### allow-griefing
    - **默认值**: true
    - **描述**: 设定为 "false" 以防止苦力怕爆炸破坏地形。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 令苦力怕绕过 mob griefing 游戏规则。
* ##### naturally-charged-chance
    - **默认值**: 0.0
    - **描述**: 自然生成闪电苦力怕的概率（0.0 - 1.0）
* ##### explode-when-killed
    - **默认值**: false
    - **描述**: 是否要令苦力怕被击杀后爆炸。
* ##### health-impacts-explosion
    - **默认值**: false
    - **描述**: 是否要令苦力怕的爆炸威力与其生命成比例（生命越低，爆炸伤害越小）
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### head-visibility-percent
    - **默认值**: 0.5
    - **描述**: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### donkey
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 30.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.5
            - **描述**: 最小跳跃高度属性
        * max
            - **默认值**: 0.5
            - **描述**: 最大跳跃高度属性
    * ###### movement_speed
        * min
            - **默认值**: 0.175
            - **描述**: 最小移动速度属性
        * max
            - **默认值**: 0.175
            - **描述**: 最大移动速度属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### cow
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### feed-mushrooms-for-mooshroom
    - **默认值**: 0
    - **描述**: 要喂多少个蘑菇才能令牛转换为蘑菇牛。设定为 0 禁用此功能。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### naturally-aggressive-to-players
    * ###### chance
        - **默认值**: 0.0
        - **描述**: 此生物在生成时默认为敌对生物的概率（0.0 - 1.0）
    * ###### damage
        - **默认值**: 2.0
        - **描述**: 将对玩家造成多少伤害
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### enderman
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### allow-griefing
    - **默认值**: true
    - **描述**: 设定为 false 令末影人不会搬走方块
* ##### can-despawn-with-held-block
    - **默认值**: false
    - **描述**: 即使末影人正在手持方块，是否依然允许其自然消失。
* ##### ignore-projectiles
    - **默认值**: false
    - **描述**: 末影人是否要免疫弹射物。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令末影人绕过 mob griefing 游戏规则
* ##### takes-damage-from-water
    - **默认值**: true
    - **描述**: 设定为 "false" 令此生物不再在水中受到伤害。
* ##### aggressive-towards-endermites
    - **默认值**: true
    - **描述**: 设定为 "false" 以令末影人不再对任何方式生成的末影螨尝试发动攻击。
* ##### aggressive-towards-endermites-only-spawned-by-player-thrown-ender-pearls
    - **默认值**: false
    - **描述**: 末影人是否仅对由玩家投掷末影珍珠产生的末影螨发动攻击。仅当 `aggressive-towards-endermites` 为 true 时此项才有效。
* ##### ignore-players-wearing-dragon-head
    - **默认值**: false
    - **描述**: 设定为 true 令末影人忽略玩家正在佩戴龙首。
* ##### disable-player-stare-aggression
    - **默认值**: false
    - **描述**: 设定为 true 时，当玩家直视末影人头部时不再激怒末影人。
* ##### attributes
    * ###### max_health
        - **默认值**: 40.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### evoker
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令唤魔者绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 24.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### drowned
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### can-break-doors
    - **默认值**: false
    - **描述**: 设定为 true 以允许溺尸破门。
* ##### jockey
    * ###### only-babies
        - **默认值**: true
        - **描述**: 是否只允许幼年才能骑乘鸡。
    * ###### chance
        - **默认值**: 0.05
        - **描述**: 生成鸡骑士的概率（0.0 - 1.0）
    * ###### try-existing-chickens
        - **默认值**: true
        - **描述**: 在生成时是否要扫描已有的鸡。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### spawn_reinforcements
        - **默认值**: 0.1
        - **描述**: 额外生成的概率（0.0 - 1.0）
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### pillager
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令掠夺者绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 24.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### fox
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### tulips-change-type
    - **默认值**: false
    - **描述**: 对其喂白/橙色郁金香会改变至 snow/regular 类型。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令狐狸绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### giant
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### step-height
    - **默认值**: 2.0
    - **描述**: 巨人无需跳跃可以向上走多少格方块。
* ##### jump-height
    - **默认值**: 1.0
    - **描述**: 跳跃高度modifier。默认值 1.0 会令巨人在跳跃时可以跳跃至腰部的高度。
* ##### movement-speed
    - **默认值**: 0.5
    - **描述**: 移动速度属性
* ##### attack-damage
    - **默认值**: 50.0
    - **描述**: 攻击伤害（半颗心）
* ##### have-ai
    - **默认值**: false
    - **描述**: 巨人是否应该使用AI替代仅是站在这里。
* ##### have-hostile-ai
    - **默认值**: false
    - **描述**: 巨人是否应该有敌对AI。
* ##### attributes
    * ###### max_health
        - **默认值**: 100.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### hoglin
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 40.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### glow_squid
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### can-fly
    - **默认值**: false
    - **描述**: 鱿鱼能飞，我的天哪！
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
* ##### rainglow-mode
    - **默认值**: rainbow
    - **描述**: 允许你更改发光鱿鱼的颜色。
        ```yaml
        Basic:
        - rainbow: 红色, 橙色, 黄色, 绿色, 蓝色, 靛蓝色 和 蓝紫色.
        - all_colors: 蓝色, 红色, 绿色, 粉色, 黄色, 橙色, 靛蓝色, 紫色, 白色, 灰色 和 黑色.
        - monochrome: 白色, 灰色, 和 黑色.
        - vanilla: 仅蓝色.
        
        Pride:
        - trans_pride: 蓝色, 白色 和 粉色.
        - lesbian_pride: 红色, 橙色, 白色, 粉色 和 紫色.
        - bi_pride: 蓝色, 粉色 和 紫色.
        - pan_pride: 粉色, 黄色 和 蓝色.
        - ace_pride: 黑色, 灰色, 白色 和 紫色.
        - aro_pride: 黑色, 灰色, 白色 和 绿色.
        - genderfluid: 蓝色, 粉色, 紫色, 白色 和 黑色.
        - enby_pride: 黄色, 白色, 黑色 和 紫色.
        ```

::: tip 提示 
在客户端上必须安装 [`Rainglow Fabric mod`](https://modrinth.com/mod/rainglow) mod才能改变发光鱿鱼颜色。  
:::


#### squid
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### immune-to-EAR
    - **默认值**: true
    - **描述**: 是否要令该生物免疫 EAR (Entity Activation Range)
* ##### water-offset-check
    - **默认值**: 0.0
    - **描述**: 阻止鱿鱼漂浮在水面上。
* ##### can-fly
    - **默认值**: false
    - **描述**: 鱿鱼能飞，我的天哪！
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### villager
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### brain-ticks
    - **默认值**: 1
    - **描述**: 村民的大脑应该多久反应一次（以Tick为单位），原版是每Tick（1）反应一次。越高的值越能缓解延迟，但是设定的值过高会令村民反应迟钝。
* ##### use-brain-ticks-only-when-lagging
    - **默认值**: true
    - **描述**: 是否仅在服务器出现延迟时更改 brain-ticks 值（见上文 lagging-threshold ）。如果设定为 false，brain-ticks 将始终启用。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 是否忽略 `mobGriefing` 游戏规则并允许村民丢弃物品，允许他们繁殖。
* ##### can-be-leashed
    - **默认值**: false
    - **描述**: 是否允许玩家使用拴绳引领村民（不包含可交易的村民）
* ##### follow-emerald-blocks
    - **默认值**: false
    - **描述**: 村民是否会被绿宝石块并跟随手持绿宝石方块的玩家。
* ##### allow-trading
    - **默认值**: true
    - **描述**: 设定为 false 将禁用与村民交易。
* ##### display-trade-item
    - **默认值**: true
    - **描述**: 设定为 false 以禁止村民展示可交易物品。
* ##### lobotomize
    * ###### enabled
        - **默认值**: false
        - **描述**: 如果村民无法移动是否要禁用移动。 (不禁用交易)
    * ###### check-interval
        - **默认值**: 100
        - **描述**: 如果村民禁用移动间隔多少Tick检查一次。
* ##### minimum-demand
    - **默认值**: 0
    - **描述**: 修复MC-163962中，村民需求将无限降低。Paper添加了一个补丁以避免需求降低至0以下。此项允许设定最小值。
* ##### can-breed
    - **默认值**: true
    - **描述**: 村民之间能否繁殖。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### clerics-farm-warts
    - **默认值**: false
    - **描述**: 设定为 "true" 以令牧师种下界疣。
* ##### cleric-wart-farmers-throw-warts-at-villagers
    - **默认值**: true
    - **描述**: 设定为 false 以禁止牧师将下界疣丢给其它村民。
* ##### spawn-iron-golem
    * ###### radius
        - **默认值**: 0
        - **描述**: 在尝试生成更多的铁傀儡之前需要检索村民数量的半径。设定为 0 禁用此功能。
    * ###### limit
        - **默认值**: 0
        - **描述**: 村民可生成铁傀儡所设定半径内的最大数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### mule
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 30.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.5
            - **描述**: 最小跳跃高度属性
        * max
            - **默认值**: 0.5
            - **描述**: 最大跳跃高度属性
    * ###### movement_speed
        * min
            - **默认值**: 0.175
            - **描述**: 最小移动速度属性
        * max
            - **默认值**: 0.175
            - **描述**: 最大移动速度属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### wolf
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### milk-cures-rabid-wolves
    - **默认值**: true
    - **描述**: 设定为 false 时，被激怒的狼无法被牛奶所治愈。
* ##### spawn-rabid-chance
    - **默认值**: 0.0
    - **描述**: 生成时狼默认被激怒的概率（0.0 - 1.0）。
* ##### default-collar-color
    - **默认值**: red
    - **描述**: 当狼被驯服时默认项圈的颜色。 [可用颜色](https://purpurmc.org/javadoc/org/bukkit/Color.html)
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 8.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### zoglin
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 40.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### ocelot
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### shulker
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### change-color-with-dye
    - **默认值**: false
    - **描述**: 是否允许手持染料右键潜影贝时更改其颜色。
* ##### spawn-from-bullet:
    * ###### base-chance
        - **默认值**: 1.0
        - **描述**: 基础概率。
    * ###### require-open-lid
        - **默认值**: true
        - **描述**: 是否仅当潜影贝处于打开状态时，所射出的子弹才有可能复制一个新的。
    * ###### nearby-range
        - **默认值**: 8.0
        - **描述**: 检查潜影贝最近的距离。
    * ###### nearby-equation
        - **默认值**: `(nearby - 1) / 5.0`
        - **描述**: 用于计算所射出的子弹生成新的潜影贝的方程式。（`nearby` 指附近的潜影贝实体数量）保留此项为空时即当附近有潜影贝时永远生成。
    * ###### random-color
        - **默认值**: false
        - **描述**: 由子弹射出而生成的潜影贝是否应该有随机的颜色。
* ##### attributes
    * ###### max_health
        - **默认值**: 30.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### horse
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### stand-with-rider
    - **默认值**: true
    - **描述**: 当前环境若有噪音时马（和骑手）是否应该站立不动。
* ##### stand-when-hurt
    - **默认值**: true
    - **描述**: 马在受伤时是否应该站立不动。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 30.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.4
            - **描述**: 最小跳跃高度属性
        * max
            - **默认值**: 1.0
            - **描述**: 最大跳跃高度属性
    * ###### movement_speed
        * min
            - **默认值**: 0.1125
            - **描述**: 最小移动速度属性
        * max
            - **默认值**: 0.3375
            - **描述**: 最大移动速度属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### piglin
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令猪灵绕过 mob griefing 游戏规则
* ##### portal-spawn-modifier
    - **默认值**: 2000
    - **描述**: 是否应该更改猪灵在传送门上生成的概率，由世界难度决定。 [在这里了解更多](https://github.com/PurpurMC/Purpur/blob/61fc0a557fc0eedececd63d44d43ce6431bc23bb/patches/server/0167-Piglin-portal-spawn-modifier.patch)
* ##### attributes
    * ###### max_health
        - **默认值**: 16.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### piglin_brute
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 50.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### skeleton
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 8.0
        - **描述**: 最大生命属性
* ##### head-visibility-percent
    - **默认值**: 0.5
    - **描述**: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
* ##### feed-wither-roses
    - **默认值**: 0
    - **描述**: 当手持凋零玫瑰时右键骷髅是否会将其转换为凋零骷髅。此值为需要拿多少凋零玫瑰才能转换骷髅，设定为 0 禁用此功能。
* ##### bow-accuracy
    - **默认值**: 14 - difficulty * 4
    - **描述**: 更改骷髅射箭的精准度。散度（spread）作为公式的结果。此值越高，越不精准。
      ``` yaml
      简单:   14 - 1 * 4 = 10
      普通: 14 - 2 * 4 = 6
      困难:   14 - 3 * 4 = 2
      ```
#### stray
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### goat
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### panda
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### strider
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### give-saddle-back
    - **默认值**: false
    - **描述**: 设定为 "true" 时，潜行并右键带有鞍的炽足兽时可以卸下鞍。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### takes-damage-from-water
    - **默认值**: true
    - **描述**: 设定为 "false" 令此生物不再在水中受到伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### rabbit
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### spawn-killer-rabbit-chance
    - **默认值**: 0.0
    - **描述**: 杀手兔自然生成的概率（0.0 - 1.0）
* ##### spawn-toast-chance
    - **默认值**: 0.0
    - **描述**: 自然生成叫做Toast的兔子的概率（0.0 - 1.0）
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令兔子绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 3.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### husk
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### jockey
    * ###### only-babies
        - **默认值**: true
        - **描述**: 是否只允许幼年才能骑乘鸡。
    * ###### chance
        - **默认值**: 0.05
        - **描述**: 生成鸡骑士的概率（0.0 - 1.0）
    * ###### try-existing-chickens
        - **默认值**: true
        - **描述**: 在生成时是否要扫描已有的鸡。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### spawn_reinforcements
        - **默认值**: 0.1
        - **描述**: 额外生成的概率（0.0 - 1.0）
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### spider
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* #### can-climb-world-border
    - **默认值**: true
    - **描述**: 设定为 false 将阻止蜘蛛攀爬世界边界。
* ##### attributes
    * ###### max_health
        - **默认值**: 16.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### sheep
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令绵羊绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 8.0
        - **描述**: 最大生命属性
* ##### jeb-shear-random-color
    - **默认值**: false
    - **描述**: 当剪重命名为 jeb_ 的绵羊时是否要掉落随机方块。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### ravager
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令劫掠兽绕过 mob griefing 游戏规则
* ##### griefable-blocks
    - **默认值**:
        ``` yaml
        - minecraft:oak_leaves
        - minecraft:spruce_leaves
        - minecraft:birch_leaves
        - minecraft:jungle_leaves
        - minecraft:acacia_leaves
        - minecraft:dark_oak_leaves
        - minecraft:beetroots
        - minecraft:carrots
        - minecraft:potatoes
        - minecraft:wheat
        ```
    - **描述**: 可被掠夺兽破坏的方块列表。
* ##### attributes
    * ###### max_health
        - **默认值**: 100.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### pig
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### give-saddle-back
    - **默认值**: false
    - **描述**: 设定为 "true" 时，潜行并右键带有鞍的猪时可以卸下鞍。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### witch
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 26.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### zombie
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### jockey
    * ###### only-babies
        - **默认值**: true
        - **描述**: 是否只允许幼年才能骑乘鸡。
    * ###### chance
        - **默认值**: 0.05
        - **描述**: 生成鸡骑士的概率（0.0 - 1.0）
    * ###### try-existing-chickens
        - **默认值**: true
        - **描述**: 在生成时是否要扫描已有的鸡。
* ##### aggressive-towards-villager-when-lagging
    - **默认值**: true
    - **描述**: 当出现延迟时是否要暂时令僵尸不会主动攻击村民。
* ##### bypass-mob-griefing
    - **默认值**: false
    - **描述**: 设定为 "true" 以令僵尸绕过 mob griefing 游戏规则
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
    * ###### spawn_reinforcements
        - **默认值**: 0.1
        - **描述**: 额外生成的概率（0.0 - 1.0）
* ##### head-visibility-percent
    - **默认值**: 0.5
    - **描述**: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### dolphin
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### naturally-aggressive-to-players-chance
    - **默认值**: 0.0
    - **描述**: 此生物在生成时默认为敌对生物的概率（0.0 - 1.0）
* ##### disable-treasure-searching
    - **默认值**: false
    - **描述**: 是否要禁止海豚寻找宝藏。
* ##### spit
    * ###### cooldown
        - **默认值**: 20
        - **描述**: 海豚攻击间隔。
    * ###### speed
        - **默认值**: 1.0
        - **描述**: 海豚攻击速度。
    * ###### damage
        - **默认值**: 2.0
        - **描述**: 海豚攻击伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### axolotl
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 14.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### bat
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### attributes
    * ###### max_health
        - **默认值**: 6.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### bee
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### can-work-at-night
    - **默认值**: false
    - **描述**: 蜜蜂在夜晚时是否要工作。
* ##### can-work-in-rain
    - **默认值**: false
    - **描述**: 蜜蜂在雨天时是否要工作。
* ##### dies-after-sting
    - **默认值**: true
    - **描述**: 蜜蜂在蜇人后时是否会死去。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### blaze
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### takes-damage-from-water
    - **默认值**: true
    - **描述**: 设定为 "false" 令此生物不再在水中受到伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 20.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### cat
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### default-collar-color
    - **默认值**: red
    - **描述**: 当猫被驯服时默认项圈的颜色。 [可用颜色](https://purpurmc.org/javadoc/org/bukkit/Color.html)
* ##### spawn-delay
    - **默认值**: 1200
    - **描述**: 尝试自然生成猫两次的Tick间隔
* ##### scan-range-for-other-cats
    * ###### swamp-hut
        - **默认值**: 16
        - **描述**: 如果在该范围内找到了其它猫，则不会再生成一只新的猫。设定为 0 禁用。
    * ###### village
        - **默认值**: 48
        - **描述**: 如果在该范围内找到了其它猫，则不会再生成一只新的猫。设定为 0 禁用。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### cod
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 3.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### elder_guardian
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 80.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### ghast
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### allow-griefing
    - **默认值**: true
    - **描述**: 设定为 false 防止恶魂破坏方块。
* ##### attributes
    * ###### max_health
        - **默认值**: 10.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### guardian
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 30.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### illusioner
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### naturally-spawn
    - **默认值**: false
    - **描述**: 设定幻术师是否会自然生成。
* ##### movement-speed
    - **默认值**: 0.5
    - **描述**: 移动速度属性
* ##### follow-range
    - **默认值**: 18.0
    - **描述**: 跟踪距离属性。
* ##### attributes
    * ###### max_health
        - **默认值**: 32.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### iron_golem
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### healing-calms-anger
    - **默认值**: false
    - **描述**: 若激怒铁傀儡，修复铁傀儡是否能令它冷静下来。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### can-spawn-in-air
    - **默认值**: false
    - **描述**: 设定铁傀儡能否在空中生成，就如同在1.12和更低版本一样。
* ##### can-swim
    - **默认值**: false
    - **描述**: 设定铁傀儡能否游泳。
* ##### poppy-calms-anger
    - **默认值**: false
    - **描述**: 若激怒铁傀儡，给它一朵虞美人是否能令它冷静下来。
* ##### attributes
    * ###### max_health
        - **默认值**: 100.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### llama
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动，羊驼必须被驯服和放置鞍（地毯）才可以使用WASD控制移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### join-caravans
    - **默认值**: true
    - **描述**: 设定为 false 以禁用 [llama caravan feature](https://minecraft.gamepedia.com/Llama#Leading)
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 30.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.5
            - **描述**: 最小跳跃高度属性
        * max
            - **默认值**: 0.5
            - **描述**: 最大跳跃高度属性
    * ###### movement_speed
        * min
            - **默认值**: 0.175
            - **描述**: 最小移动速度属性
        * max
            - **默认值**: 0.175
            - **描述**: 最大移动速度属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### trader_llama
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动，羊驼必须被驯服才可以使用WASD控制移动。不过鞍（地毯）不是必需的，因为是生成时应该自带地毯。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        * min
            - **默认值**: 15.0
            - **描述**: 最小生命属性
        * max
            - **默认值**: 30.0
            - **描述**: 最大生命属性
    * ###### jump_strength
        * min
            - **默认值**: 0.5
            - **描述**: 最小跳跃高度属性
        * max
            - **默认值**: 0.5
            - **描述**: 最大跳跃高度属性
    * ###### movement_speed
        * min
            - **默认值**: 0.175
            - **描述**: 最小移动速度属性
        * max
            - **默认值**: 0.175
            - **描述**: 最大移动速度属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### magma_cube
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: "size * size"
        - **描述**: 用于计算最大生命值的计算公式。
    * ###### attack_damage
        - **默认值**: "size"
        - **描述**: 设定岩浆怪的基础伤害。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### parrot
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### can-breed
    - **默认值**: false
    - **描述**: 是否可以用任何种类的种子繁殖鹦鹉（幼年鹦鹉不算在内 D:, 所以得强调是“成年”鹦鹉）
* ##### attributes
    * ###### max_health
        - **默认值**: 6.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### pufferfish
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 3.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### salmon
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 3.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### slime
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### attributes
    * ###### max_health
        - **默认值**: "size * size"
        - **描述**: 用于计算最大生命值的计算公式。
    * ###### attack_damage
        - **默认值**: "size"
        - **描述**: 设定史莱姆的基础伤害。
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### tropical_fish
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### attributes
    * ###### max_health
        - **默认值**: 3.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### turtle
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### breeding-delay-ticks
    - **默认值**: 6000
    - **描述**: 在繁殖之前需要等待的Tick数量。
* ##### attributes
    * ###### max_health
        - **默认值**: 30.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
#### vex
* ##### ridable
    - **默认值**: false
    - **描述**: 是否要令此生物可骑乘。
* ##### controllable
    - **默认值**: true
    - **描述**: 是否可以使用WASD控制此生物移动。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 是否要令此生物可在水中骑乘（不会驱逐玩家）
* ##### takes-damage-from-water
    - **默认值**: false
    - **描述**: 设定为 "true" 即当此生物处于水中时令其造成伤害。
* ##### ridable-max-y
    - **默认值**: 256
    - **描述**: 当骑乘时此生物可以飞行的最大高度
* ##### attributes
    * ###### max_health
        - **默认值**: 14.0
        - **描述**: 最大生命属性
* ##### always-drop-exp
    - **默认值**: false
    - **描述**: 设定为 "true" 令生物永远掉落经验值。
	
### gameplay-mechanics

#### arrow
* ##### movement-resets-despawn-counter
    - **默认值**: true
    - **描述**: 设定此值为 false 以禁止箭矢永远有效 (比如箭矢卡入的方块被移除, 活塞移动之类)
#### use-better-mending
- **默认值**: false
- **描述**: 设定为 "true" 以令经验修补附魔优先修补受损最严重的盔甲。
#### mobs-ignore-rails
- **默认值**: false
- **描述**: 设定为 true 以允许生物走过铁轨。
#### rain-stops-after-sleep
- **默认值**: true
- **描述**: 设定为 false 令玩家在醒来时继续下雨。
#### thunder-stops-after-sleep
- **默认值**: true
- **描述**: 设定为 false 令玩家在醒来时继续打雷。
#### mob-last-hurt-by-player-time
- **默认值**: 100
- **描述**: 允许你扩大生物在受到玩家伤害后计算为被玩家所击杀的 Ticks（弹射物或直接攻击）
#### halloween
* ##### force
    - **默认值**: false
    - **描述**: 设定为 true 令世界强行处于万圣节。
* ##### head-chance
    - **默认值**: 0.25
    - **描述**: 设定僵尸或骷髅在生成时默认佩戴南瓜灯的概率（0.0 - 1.0）
#### mob-effects
* ##### health-regen-amount
    - **默认值**: 1.0
    - **描述**: 设定此项应当影响的实体数量
* ##### minimal-health-poison-amount
    - **默认值**: 1.0
    - **描述**: 设定此项应当影响的实体数量
* ##### poison-degeneration-amount
    - **默认值**: 1.0
    - **描述**: 设定此项应当影响的实体数量
* ##### wither-degeneration-amount
    - **默认值**: 1.0
    - **描述**: 设定此项应当影响的实体数量
* ##### hunger-exhaustion-amount
    - **默认值**: 0.005
    - **描述**: 设定此项应当影响的实体数量
* ##### saturation-regen-amount
    - **默认值**: 1.0
    - **描述**: 设定此项应当影响的实体数量
#### projectiles-bypass-mob-griefing
* **默认值**: false
* **描述**: 设定为 "true" 以令弹射物绕过 mob griefing 游戏规则
#### projectile-offset
* ##### bow
    - **默认值**: 1.0
    - **描述**: 弓射出的弹射物偏移。
* ##### crossbow
    - **默认值**: 1.0
    - **描述**: 弩射出的弹射物偏移。
* ##### egg
    - **默认值**: 1.0
    - **描述**: 鸡蛋弹射物偏移。
* ##### ender-pearl
    - **默认值**: 1.0
    - **描述**: 末影珍珠弹射物偏移。
* ##### throwable-potion
    - **默认值**: 1.0
    - **描述**: 喷溅型药水弹射物偏移。
* ##### trident
    - **默认值**: 1.0
    - **描述**: 三叉戟的弹射物偏移。
* ##### snowball
    - **默认值**: 1.0
    - **描述**: 雪球的弹射物偏移。
#### drowning
* ##### air-ticks
    - **默认值**: 300
    - **描述**: 从开始潜水时计时，可在水下呼吸多长时间。
* ##### ticks-per-damage
    - **默认值**: 20
    - **描述**: 间隔多少Ticks应当受到窒息伤害移除。
* ##### damage-from-drowning
    - **默认值**: 2.0
    - **描述**: 窒息伤害量。
#### tick-fluids
- **默认值**: true
- **描述**: 设定为false以停止流体计时Tick。 
  ![使用此项的插件的截图](https://media.discordapp.net/attachments/595431462510002206/821169659382333440/unknown.png)   
  附件: [FreezeFluids-1.0.jar](https://cdn.discordapp.com/attachments/720375089123688488/820951359519326218/FreezeFluids-1.0.jar)
#### disable-drops-on-cramming-death
- **默认值**: false
- **描述**: 若因为cramming游戏规则而导致实体死亡，在死亡时是否没有掉落物。
#### entity-blindness-multiplier
- **默认值**: 1
- **描述**: 当生物被致盲药水效果影响时，应该受几级影响效果。
#### entities-pick-up-loot-bypass-mob-griefing
- **默认值**: false
- **描述**: （可捡起掉落物的）生物是否允许其拾起掉落物，甚至是当`mobGriefing`游戏规则禁用时。
#### fix-climbing-bypassing-cramming-rule
- **默认值**: false
- **描述**: 当攀爬时实体是否允许绕过cramming游戏规则
#### milk-cures-bad-omen
- **默认值**: true
- **描述**: 是否允许玩家饮用牛奶消除不祥之兆效果。
#### trident-loyalty-void-return-height
- **默认值**: 0.0
- **描述**: 附魔有忠诚的三叉戟在虚空中的高度和何时返回其投掷者。设定为 0 或更高以禁用。
#### void-damage-dealt
- **默认值**: 4.0
- **描述**: 虚空应该造成的伤害。
#### void-damage-height
- **默认值**: -64.0
- **描述**: 高度为何时对其造成虚空伤害。
#### entity-lifespan
- **默认值**: 0
- **描述**: 默认禁用 (0), 当实体消失之前应当存在多少Ticks。一旦与玩家互动将重新计时。
#### silk-touch
需要拥有 [`purpur.drop.spawners`](../Purpur/Permissions.html#purpur-drop-spawners) 和 [`purpur.place.spawners`](../Purpur/Permissions.html#purpur-place-spawners) 权限

* ##### enabled
    - **默认值**: false
    - **描述**: 是否允许附魔精准采集的镐子挖掘刷怪笼。
* ##### minimal-level
    - **默认值**: 1
    - **描述**: 要令刷怪笼掉落（至少）需要的精准采集等级
* ##### tools
    - **默认值**:
    ``` yaml
    - minecraft:iron_pickaxe
    - minecraft:golden_pickaxe
    - minecraft:diamond_pickaxe
    - minecraft:netherite_pickaxe
    ```
    - **描述**: 需附魔精准采集可开采刷怪笼的镐子白名单列表。
* ##### spawner-name
    - **默认值**: "&lt;reset>&lt;white>Spawner"
    - **描述**: 刷怪笼的名称
* ##### spawner-lore
    - **默认值**:
        ``` yaml
        - Spawns a <mob>
        ```
    - **描述**: 刷怪笼的lore
#### boat
* ##### eject-players-on-land
    - **默认值**: false
    - **描述**: 在陆地上是否不允许玩家在船上。
* ##### do-fall-damage
    - **默认值**: true
    - **描述**: 设定为 false 则船不会向玩家造成下落伤害。
#### armorstand
* ##### step-height
    - **默认值**: 0.0
    - **描述**: 设定盔甲架默认台阶的高度。当有插件利用盔甲架作为车辆时，例如无需跳跃即可驶过方块等等时很有用。
* ##### set-name-visible-when-placing-with-custom-name
    - **默认值**: false
    - **描述**: 当盔甲架有自定义名称时，名称是否可见。
* ##### fix-nametags
    - **默认值**: false
    - **描述**: 当盔甲架被命名牌命名时，名称是否可见。
* ##### place-with-arms-visible
    - **默认值**: false
    - **描述**: 放置时是否可见盔甲架的手臂。
* ##### can-movement-tick
    - **默认值**: true
    - **描述**: 设定为 false 以盔甲架禁止移动。
* ##### can-move-in-water
    - **默认值**: true
    - **描述**: 设定为 false 以禁止盔甲架在水中移动。
* ##### can-move-in-water-over-fence
    - **默认值**: true
    - **描述**: 设定为 false 以禁止盔甲架在水中越过栅栏。
#### player
* ##### exp-pickup-delay-ticks
    - **默认值**: 2
    - **描述**: 当经验球掉落之后玩家在多久之后可以拾起。
* ##### shift-right-click-repairs-mending-points
    - **默认值**: 0
    - **描述**: 要修复玩家物品栏已附魔经验修补的物品所需的经验值。
* ##### spawn-invulnerable-ticks
    - **默认值**: 60
    - **描述**: 当玩家重生（或首次加入到服务器）时有多长的无敌时间。
* ##### invulnerable-while-accepting-resource-pack
    - **默认值**: false
    - **描述**: 当玩家正在下载资源包时玩家是否应该处于无敌状态。
* ##### teleport-if-outside-border
    - **默认值**: false
    - **描述**: 当玩家以某种方式传送出世界边界时是否要传送回出生点。
* ##### allow-void-trading
    - **默认值**: false
    - **描述**: 玩家是否可以利用末地折跃门机制（漏洞）以达到持续与村民交易的目的。
* ##### totem-of-undying-works-in-inventory
    - **默认值**: false
    - **描述**: 不死图腾当在背包中是否生效，而不是仅在手上。
* ##### ridable-in-water
    - **默认值**: false
    - **描述**: 当玩家在水中时，其它生物/玩家是否可以骑在该玩家上。
* ##### fix-stuck-in-portal
    - **默认值**: false
    - **描述**: 当玩家卡在传送门内部没有方法出去时，移动到其它方块是否会立即重置传送门冷却时间，允许再次使用传送门。
* ##### one-punch-in-creative
    - **默认值**: false
    - **描述**: 当创造模式的玩家空手攻击某实体时，该实体是否会立即死亡。
* ##### sleep-ignore-nearby-mobs
    - **默认值**: false
    - **描述**: 设定为 "true" 时。即使附近有敌对生物时也允许睡觉。
* ##### can-skip-night
    - **默认值**: true
    - **描述**: 设定为 "false" 以禁止玩家睡觉跳过夜晚。
* ##### critical-damage-multiplier
    - **默认值**: 1.5
    - **描述**: 暴击时在基础伤害上额外增加的伤害。
* ##### burp-when-full
    - **默认值**: false
    - **描述**: 当玩家的饥饿值已满时是否要播放打嗝音效。
* ##### curse-of-binding
    * ###### remove-with-weakness
        - **默认值**: false
        - **描述**: 当玩家拥有虚弱效果时是否可以脱下附魔绑定诅咒的盔甲。
* ##### armor-click-equip
    * ###### allow-hot-swapping
        - **默认值**: false
        - **描述**: 当玩家手持盔甲并右键时是否立即交换已穿着的盔甲。
    * ###### creative-makes-copy
        - **默认值**: true
        - **描述**: 设定为 "false" 以禁止创造模式玩家手持并右键盔甲时可复制该盔甲。（原文没有创造模式，但是小标题是creative）
* ##### idle-timeout
    * ###### kick-if-idle
        - **默认值**: true
        - **描述**: 当玩家闲置时是否要踢出该玩家 (查看 server.properties 中的 player-idle-timeout 时间)
    * ###### tick-nearby-entities
        - **默认值**: true
        - **描述**: 当附近玩家挂机时是否要正常计算实体。设定为 false 则需要至少一名未挂机玩家才会正常计时Tick。
    * ###### mobs-target
        - **默认值**: true
        - **描述**: 生物是否要视附近挂机玩家为目标。
    * ###### count-as-sleeping
        - **默认值**: false
        - **描述**: 是否要将挂机玩家数视为正在睡觉（允许活跃的玩家跳过夜晚，即使挂机的玩家根本没在床上）
    * ###### update-tab-list
        - **默认值**: false
        - **描述**: 是否要在Tab列表中更新挂机玩家状态（将 `[AFK]` 作为玩家前缀。）
* ##### exp-dropped-on-death
    * ###### equation
        - **默认值**: expLevel * 7
        - **描述**: 在死亡时应该掉落多少经验。可选的NMS变量为 `expLevel`，`expTotal`和`exp`。
    * ###### maximum
        - **默认值**: 100
        - **描述**: 在死亡时最大可掉落的经验值。
* ##### netherite-fire-resistance
    * ###### duration
        - **默认值**: 0
        - **描述**: 防火效果持续时间。设定为 0 以禁用。
    * ###### amplifier
        - **默认值**: 0
        - **描述**: 设定防火效果的强度。
    * ###### ambient
        - **默认值**: false
        - **描述**: 设定为 "true" 以令在屏幕中显示的粒子效果变少。
    * ###### show-particles
        - **默认值**: false
        - **描述**: 设定为 "true" 以令防火药水效果显示粒子。
    * ###### show-icon
        - **默认值**: true
        - **描述**: 设定为 "false" 以令防火效果不显示图标。
#### minecart
* ##### max-speed
    - **默认值**: 0.4
    - **描述**: 控制矿车的最大速度。
* ##### place-anywhere
    - **默认值**: false
    - **描述**: 矿车是否随处摆放（不只是在铁轨上）
* ##### powered-rail
    * ###### boost-modifier
        - **默认值**: 0.06
        - **描述**: 矿车从动力铁轨上获得的速度倍率。（不影响熔炉铁轨）
* ##### controllable
    * ###### enabled
        - **默认值**: false
        - **描述**: 矿车不在铁轨上是否可以控制。
    * ###### fall-damage
        - **默认值**: true
        - **描述**: 当玩家位于矿车之中时下坠是否会造成摔落伤害。
    * ###### step-height
        - **默认值**: 1.0
        - **描述**: 无需跳跃矿车可以向上前行的最大高度。
    * ###### hop-boost
        - **默认值**: 0.5
        - **描述**: 当在可控制的矿车上按下空格所获得的跳跃力。
    * ###### base-speed
        - **默认值**: 0.1
        - **描述**: 控制矿车时的基础速度。
    * ###### block-speed
        - **默认值**:
            ``` yaml
            grass_block: 0.3
            stone: 0.5
            ```
        - **描述**: 经过某方块类型时的速度列表。
#### item
* ##### shears
    * ###### damage-if-sprinting
        - **默认值**: false
        - **描述**: 当冲刺时剪刀是否应该随机对玩家造成伤害（别拿着剪刀乱跑！）
    * ###### sprinting-damage
        - **默认值**: 1
        - **描述**: 当`damage-if-sprinting`启用时对玩家造成的伤害数量。
* ##### snowball
    * ###### extinguish
        * ###### fire
            - **默认值**: false
            - **描述**: 雪球在投出后是否可以熄灭火。
        * ###### candles
            - **默认值**: false
            - **描述**: 雪球在投出后是否可以熄灭蜡烛。
        * ###### campfires
            - **默认值**: false
            - **描述**: 雪球在投出后是否可以熄灭篝火。
* ##### shulker_box
    * ###### drop-contents-when-destroyed
        - **默认值**: true
        - **描述**: 当潜影盒被摧毁时是否应该掉落其中的内容。
* ##### compass
    * ###### holding-shows-bossbar
        - **默认值**: false
        - **描述**: 当手持指南针时是否要显示运行 [`/compass`](../Purpur/Commands.html#compass) 命令所获得的bossbar。
* ##### glow_berries
    * ###### eat-glow-duration
        - **默认值**: 0
        - **描述**: 玩家在吃了发光浆果之后获得发光效果的Ticks数。设定为 0 以禁用。
* ##### ender-pearl
    * ###### damage
        - **默认值**: 5
        - **描述**: 当玩家使用末影珍珠之要造成的伤害量。
    * ###### cooldown
        - **默认值**: 20
        - **描述**: 玩家使用末影珍珠之后的冷却（以Ticks为单位）
    * ###### creative-cooldown
        - **默认值**: 20
        - **描述**: 创造模式的玩家使用末影珍珠之后的冷却（以Ticks为单位）
    * ###### endermite-spawn-chance
        - **默认值**: 0.05
        - **描述**: 当使用末影珍珠传送之后生成末影螨的概率（0.0 - 1.0）
* ##### immune
    * ###### explosion
        - **默认值**: []
        - **描述**: 免疫爆炸的物品列表。
    * ###### fire
        - **默认值**: []
        - **描述**: 免疫火焰的物品列表。
    * ###### lightning
        - **默认值**: []
        - **描述**: 免疫闪电的物品列表。
    * ###### cactus
        - **默认值**: []
        - **描述**: 免疫仙人掌的物品列表。
::: tip 示例物品列表：  
        ``` yaml  
        explosion:
          - minecraft:diamond
          - minecraft:diamond_block
          - minecraft:diamond_sword
        ```  
:::

::: warning 警告 
这些物品列表会导致客户端不同步的问题，例如地上的物品无法显示！在服务器代码这边我们无能为力。
:::

#### elytra
* ##### damage-per-second
    - **默认值**: 1
    - **描述**: 飞行每秒应该消耗鞘翅的多少耐久度。
* ##### damage-multiplied-by-speed
    - **默认值**: 0.0
    - **描述**: 如果飞行速度超过设定的速度，则需要额外消耗其耐久度的倍率。设定为 0 禁用此功能。
* ##### kinetic-damage
    - **默认值**: true
    - **描述**: 玩家飞进墙里面是否要造成伤害。
* ##### ignore-unbreaking
    - **默认值**: false
    - **描述**: 鞘翅是否应该无视 耐久 附魔。
* ##### damage-per-boost
    * ###### firework
        - **默认值**: 0
        - **描述**: 当烟花加速激活时需要对鞘翅造成额外的耐久消耗。
    * ###### trident
        - **默认值**: 0
        - **描述**: 当激流附魔三叉戟激活时需要对鞘翅造成额外的耐久消耗。
#### mob-spawning
* ##### village-cats
    - **默认值**: default
    - **描述**: 设定为 true 以允许生成于在该值中的世界。
* ##### raid-patrols
    - **默认值**: default
    - **描述**: 设定为 true 以允许生成于在该值中的世界。
* ##### phantoms
    - **默认值**: default
    - **描述**: 设定为 true 以允许生成于在该值中的世界。
* ##### wandering-traders
    - **默认值**: default
    - **描述**: 设定为 true 以允许生成于在该值中的世界。
* ##### village-sieges
    - **默认值**: default
    - **描述**: 设定为 true 以允许生成于在该值中的世界。
* ##### ignore-creative-players
    - **默认值**: false
    - **描述**: 当生成生物时是否要忽视创造玩家。
#### raid-cooldown-seconds
- **默认值**: 0
- **描述**: 在另一个袭击开始前需要等待的时间。
#### entities-can-use-portals
- **默认值**: true
- **描述**: 设定为 "false" 以阻止实体使用传送门。
#### persistent-tileentity-display-names-and-lore
- **默认值**: false
- **描述**: 设定为 true 使方块实体的显示名称和lore在破坏后依旧存在。（比如：命名过的玩家的头保留它们的名称）
#### persistent-droppable-entity-display-names
- **默认值**: false
- **描述**: 设定为 true 使实体的显示名称和lore在破坏后依旧存在。（比如 命名过的盔甲架保留它们的名称） 
#### infinity-bow
* ##### normal-arrows
    - **默认值**: true
    - **描述**: 设定为 true 以允许无限附魔应用于该箭矢类型。
* ##### spectral-arrows
    - **默认值**: false
    - **描述**: 设定为 true 以允许无限附魔应用于该箭矢类型。
* ##### tipped-arrows
    - **默认值**: false
    - **描述**: 设定为 true 以允许无限附魔应用于该箭矢类型。
* ##### works-without-arrows
    - **默认值**: false
    - **描述**: 设定为 "true" 以允许无限附魔的弓无需箭矢。
#### daylight-cycle-ticks
* ##### daytime
    - **默认值**: 12000
    - **描述**: 昼夜更替（日）Tick时间
* ##### nighttime
    - **默认值**: 12000
    - **描述**: 昼夜更替（夜）Tick时间
#### animal-breeding-cooldown-seconds
- **默认值**: 0
- **描述**: 为每种动物类型添加繁殖冷却。
#### projectile-damage
* ##### snowball
    - **默认值**: -1
    - **描述**: 雪球应当造成的伤害 (-1 即默认对烈焰人造成 3 点伤害 & 其它实体为 0 点伤害)
#### entity-left-handed-chance
- **默认值**: 0.05
- **描述**: 生成左撇子生物的概率。
#### fireballs-bypass-mob-griefing
- **默认值**: false
- **描述**: 设定为 "true" 以令火球绕过 mob griefing 游戏规则
#### note-block-ignore-above
- **默认值**: false
- **描述**: 设定为 "true" 以令音符盒继续发声，即使上面有一个方块阻挡着。
#### impose-teleport-restrictions-on-gateways
- **默认值**: false
- **描述**: 设定为 "true" 以对折跃门增加传送限制。当玩家由于有其它人乘坐/驾驶而传送失败将broadcasts `EntityTeleportHinderedEvent` 事件并尝试重新传送。
#### always-tame-in-creative
- **默认值**: false
- **描述**: 设定为 "true" 以100%的概率驯服生物。
#### shovel-turns-block-to-grass-path
- **默认值**:
    ``` yaml
    - minecraft:coarse_dirt
    - minecraft:dirt
    - minecraft:grass_block
    - minecraft:mycelium
    - minecraft:podzol
    - minecraft:rooted_dirt
    ```
- **描述**: 使用铲子右键时可转换为草径的方块列表。
	
### ridable-settings

#### babies-are-ridable
- **默认值**: true
- **描述**: 设定为 false 以禁止骑乘幼年。
#### untamed-tamables-are-ridable
- **默认值**: true
- **描述**: 设定为 false 以禁止骑行未驯服的生物。
#### use-night-vision
- **默认值**: false
- **描述**: 设定为 true 以允许给骑手提供夜视效果。
	
