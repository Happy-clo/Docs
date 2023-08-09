---
title: "权限"
---

Purpur 为其新增的功能添加了一些新权限节点。

Purpur 新增的这些权限节点在默认情况下 **全部** 禁用，无论玩家是否有 OP。服务器需要一个权限插件（例如：[LuckPerms](https://luckperms.net/)）来给予玩家权限。

## allow.ride.<mob_id>
需要在 purpur.yml 中启用 [`<mob_id>.ridable`](../Purpur/Configuration.html#mobs)
- 此权限将允许使用 shift + 右键单击 以骑乘一个特定的生物。在骑乘后，你可以使用 WASD 来移动，使用空格来跳跃或者飞行。只需要将  "<mob_id&gt;" 替换为生物的实体ID。
- **examples**:
    - `allow.ride.cow`
    - `allow.ride.zombie_pigman`
    - `allow.ride.snow_golem`

## allow.special.<mob_id&gt;
需要在 purpur.yml 中启用 [`<mob_id>.ridable`](../Purpur/Configuration.html#mobs)

- 此权限将允许激活可骑行生物的特殊技能。不是所有的生物都有特殊技能。只需要将  "<mob_id&gt;" 替换为生物的实体ID。

- **目前可用的特殊技能**
    - `allow.special.creeper`
        - 按下空格激活苦力怕。
    - `allow.special.dolphin`
        - 按下空格吐口水。
    - `allow.special.phantom`
        - 按下空格发射一道火焰。
    - `allow.special.wither`
        - 鼠标单击发射凋灵之首。

## allow.powered.creeper
需要在 purpur.yml 中启用 [`creeper.ridable`](../Purpur/Configuration.html#creeper)

- 此权限允许在骑行苦力怕时切换为闪电变种。骑行时，按住空格（不移动）以切换。闪电变种将使用切换开或者关来替换爆炸。

## bukkit.command.uptime
- 允许使用 [`/uptime`](../Commands#uptime) 命令。

## bukkit.command.demo
- 允许使用 [`/demo`](../Commands#demo) 命令。

## bukkit.command.credits
- 允许使用 [`/credits`](../Commands#credits) 命令。

## bukkit.command.ping
- 允许使用 [`/ping`](../Commands#ping) 命令。

## bukkit.command.tpsbar
- 允许使用 [`/tpsbar`](../Commands#tpsbar) 命令。

## bukkit.command.compass
- 允许使用 [`/compass`](../Commands#compass) 命令。

## minecraft.command.gamemode.<gamemode&gt;
需要在 purpur.yml 中启用 [`gamemode.requires-specific-permission`](../Purpur/Configuration.html#command)

- 允许玩家设定他们的游戏模式为 <gamemode&gt;
- 可用游戏模式
    - adventure, creative, spectator, survival

## minecraft.command.gamemode.<gamemode&gt;.other;
需要在 purpur.yml 中启用 [`gamemode.requires-specific-permission`](../Purpur/Configuration.html#command) 

- 允许玩家设定他们和其它玩家的游戏模式为 <gamemode&gt;
- 可用游戏模式
    - adventure, creative, spectator, survival

## purpur.debug.f3n
- 允许使用 F3+N 调试快捷键切换游戏模式。
玩家必须同时拥有此权限*和*对应的游戏模式权限才能正常使用。

## purpur.drop.spawners
需要在 purpur.yml 中启用 [`gameplay-mechanics.silk-touch`](../Purpur/Configuration.html#silk-touch-1) 

- 拥有此权限的玩家可以使用附魔精准采集的（在配置项中指定的）工具在挖掘刷怪笼时获取其掉落物，而不是直接消失。

## purpur.joinfullserver
- 允许玩家当服务器已满时依然可以进入。

## purpur.bypassIdleKick
- 允许玩家在闲置时不被踢出服务器。

## purpur.portal.instant
- 允许玩家当进入传送门时立即传送。
  
## purpur.place.spawners
需要在 purpur.yml 中启用 [`gameplay-mechanics.silk-touch`](../Purpur/Configuration.html#silk-touch-1) 

- 拥有此权限的玩家当放置一个被精准采集挖掘的刷怪笼时将恢复至原来的生物类型。

## purpur.sign.edit
需要在 purpur.yml 中启用 [`sign.right-click-edit`](../Purpur/Configuration.html#sign)

- 允许玩家当手持告示牌时右键打开告示牌编辑器。

## purpur.sign.color
需要在 purpur.yml 中启用 [`sign.allow-colors`](../Purpur/Configuration.html#sign) 

-  允许玩家在告示牌上使用颜色代码。

## purpur.sign.style
需要在 purpur.yml 中启用 [`sign.allow-colors`](../Purpur/Configuration.html#sign)

- 允许玩家在告示牌上使用格式化代码（随机字符除外）

## purpur.sign.magic
需要在 purpur.yml 中启用 [`sign.allow-colors`](../Purpur/Configuration.html#sign)

- 允许玩家在告示牌中使用随机字符格式化代码。

## purpur.book.color.sign
Hex 代码仅当书与笔被署名后才会被注册。

- 允许玩家使用在书与笔中使用 legacy 和 hex 颜色代码，当书与笔被署名后更新。

## purpur.anvil.color
需要在 purpur.yml 中启用 [`anvil.allow-colors`](../Purpur/Configuration.html#allow-colors-1)

- 允许玩家在铁砧中使用 legacy 颜色代码。[`在Minecraft Wiki上了解更多关于颜色代码的信息。`](**https://minecraft.fandom.com/wiki/Formatting_codes**)


## purpur.anvil.minimessage
需要在 purpur.yml 中启用 [`anvil.allow-minimessage`](../Purpur/Configuration.html#use-mini-message)

- 允许玩家在铁砧中使用 MiniMessage tags [`你可以在这里测试 minimessage tags。`](https://webui.adventure.kyori.net/)

## purpur.anvil.remove_italics
需要在 purpur.yml 中启用 [`anvil.allow-colors`](../Purpur/Configuration.html#anvil)

- 允许玩家在铁砧中使用以  '&r' 开头的文本来移除已重命名的物品的斜体效果。

## purpur.anvil.format
需要在 purpur.yml 中启用 [`anvil.allow-colors`](../Purpur/Configuration.html#anvil)

- 允许玩家在铁砧中使用 legacy 格式化代码（&l, &m, &n, &o）


## purpur.enderchest.rows.<number&gt;
需要在 purpur.yml 中启用 [`ender_chest.six-rows`](../Purpur/Configuration.html#ender-chest) 和[`ender_chest.use-permissions-for-rows`](../Purpur/Configuration.html#ender-chest) 

- 控制玩家的末影箱中有多少行。
- 可用大小：
    - one, two, three, four, five, six

## purpur.inventory_totem
需要在 purpur.yml 中启用 [`totem-of-undying-works-in-inventory`](../Purpur/Configuration.html#totem-of-undying-works-in-inventory)

- 允许玩家的图腾在物品栏中依旧生效。

## purpur.mending_shift_click
需要设置 [`shift-right-click-repairs-mending-points`](../Purpur/Configuration.html#shift-right-click-repairs-mending-points) 的数字大于 0 

- 允许玩家按下 shift 右键以花费他们储存的经验修补装备。