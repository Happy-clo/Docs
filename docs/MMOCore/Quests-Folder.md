所有任务都是在这个文件夹中定义的，包括 GUI 和其他的功能。

## 示例任务

```yaml
# 接受任务需要的最低主等级和挖矿等级
level-req:
  main: 10
  mining: 5

# 任务在任务菜单中展示的名称
name: "A Whole New World"

# 任务的描述
# 在菜单中展示
lore:
  - "This is the tutorial quest."
  - "Lore example..."
  - ""
  - "&eRewards:"
  - "&7► Wooden Tools"
  - "&7► Leather Armor"
  - "&7► 100 EXP"

# 玩家必须完成的前置任务
parent: []

# 任务的冷却时间
# 删除这一条使该任务变成一次性任务
# 将其设置为0使该任务没有冷却时间
delay: 12

# 玩家必须完成的目标
# 玩家完成所有目标后该任务就结束了
objectives:
  1:
    type: 'clickon{world="world";x=56;y=68;z=115;range=5}'
    lore: "Head to the camp."
    triggers:
      - 'message{format="&aGood job, now get some oak logs!"}'
      - "sound{sound=ENTITY_EXPERIENCE_ORB_PICKUP}"
  2:
    type: 'mineblock{type="OAK_LOG";amount=3}'
    lore: "Get three oak logs!"
    triggers:
      - 'message{format="&aGood job, now give these logs to the blacksmith."}'
      - 'sound{sound="ENTITY_EXPERIENCE_ORB_PICKUP"}'
  3:
    type: 'getitem{type="OAK_LOG";amount=3;npc=0}'
    lore: "Give these oak logs to the blacksmith."
    triggers:
      - 'message{format="&aGood job, now talk to the blacksmith again to claim your weapons!"}'
      - "sound{sound=ENTITY_EXPERIENCE_ORB_PICKUP}"
  4:
    type: "talkto{npc=0}"
    lore: "Get your weapons from the blacksmith!"
    triggers:
      - 'message{format="&aNow go kill 5 skeletal knights to finish tutorial!"}'
      - "sound{sound=ENTITY_PLAYER_LEVELUP}"
  5:
    type: 'killmythicmob{name="SkeletalKnight";amount=5}'
    lore: "Kill 5 skeletal knights!"
    triggers:
      - 'message{format="&a&lYou have successfully finished the tutorial!"}'
      - 'sound{sound="ENTITY_PLAYER_LEVELUP"}'
      - "mmoitem{type=SWORD;id=CUTLASS}"
```

## 提示

上面的配置可以存放于任务文件夹中的任意一个 yml 文件(每个任务一个 yml 配置)。第一个配置选项是“level-req”。定义了玩家需要达到什么等级才能解锁任务。上述配置将该选项设置为主等级 10 级，挖矿等级 5 级。

之后，你可以设置任务菜单中显示的**任务名称**。

接下来，你可以设置任务菜单中显示的任务**描述**。

下一个选项是**前置任务**选项，它定义玩家是否必须完成另一个任务才能解锁该任务。

下一个选项是任务的**冷却时间**。如果你希望它是一次性任务，你就什么都不设置。如果你取消任务的冷却，就把它设为 0。你也可以定义该任务的冷却时间为多少小时。

## 目标

接下来，你需要在任务配置中定义**目标**。任务是玩家为了获得奖励而必须完成的一系列目标。在一个目标里面你有类型、lore 和触发器。类型决定了玩家必须做什么，lore 定义了玩家将看到的任务描述，而触发器定义了玩家完成目标后会发生什么。触发器可以用于向玩家提供关于 RPG 故事线或下一个目标的提示，也可以用于给予简单的任务奖励。

### 普通目标

| 目标       | 描述                             | 格式                                                          |
| ---------- | -------------------------------- | ------------------------------------------------------------- |
| 点击方块   | 玩家点击某一坐标附近的方块       | `clickon{world=<world-name>;x=<x>;y=<y>;z=<z>;range=<radius>` |
| 破坏方块   | 玩家破坏一定数量个指定类型的方块 | `mineblock{type=<MATERIAL>;amount=<amount>}`                  |
| 击杀怪物   | 玩家击杀一定数量的原版怪物       | `killmob{type=<ENTITY_TYPE>;amount=<AMOUNT>}`                 |
| 前往目标点 | 玩家移动到某一坐标斧斤           | `goto{world=<world-name>;x=<x>;y=<y>;z=<z>;range=<radius>}`   |

### Citizens 插件目标

| 目标          | 描述                                      | 格式                                                                     |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| 提交物品      | 玩家需要交给 NPC 一定数量的物品           | `getitem{type=<MATERIAL>;npc=<Citizen_ID>;amount=<AMOUNT>}`              |
| 提交 MMO 物品 | 玩家需要交给 NPC 一定数量的 MMOItems 物品 | `getmmoitem{type=<MI_TYPE>;id=<MI_ID>;npc=<Citizen-ID>;amount=<AMOUNT>}` |
| 交谈          | 玩家需要与指定 NPC 交谈                   | `talkto{npc=<Citizen_ID>}`                                               |

`getitem{type=MATERIAL;id=DIAMOND;amount=3;npc=0}` 在这个目标示例中，你需要将 3 个钻石带给 ID 为 0 的 NPC

### MythicMobs 插件目标

| 目标                 | 描述                               | 格式                                                           |
| -------------------- | ---------------------------------- | -------------------------------------------------------------- |
| 击杀 MythicMobs 怪物 | 玩家击杀一定数量的 MythicMobs 怪物 | `killmythicmob{name=<mythicMobsInternalName>;amount=<AMOUNT>}` |

## 有效的触发器类型 :id=triggers

| 触发器          | 描述                        | 格式/示例                                                 |
| --------------- | --------------------------- | --------------------------------------------------------- |
| 消息            | 向玩家发送一条消息          | `message{format="&aYour message here... "}`               |
| 指令            | 执行一条控制台指令          | `command{format="tellraw @a {"text":"Hello!"}"}`          |
| 经验            | 给予玩家特定职业的经验      | `exp{profession=<PROFESSION>;amount=<AMOUNT>}`            |
| 声音            | 向玩家播放特定的声音        | `sound{sound=<SOUND_NAME>;volume=<VOLUME>;pitch=<PITCH>}` |
| 物品            | 给予玩家一定数量的物品      | `item{type=DIAMOND;amount=3}`                             |
| MMO 物品        | 给予玩家一定数量的 MMO 物品 | `mmoitem{type=SWORD;id=FALCON_BLADE;amount=2}`            |
| 魔力            | 给予/消耗/设置玩家的魔力    | `mana{operation=<GIVE/SET/TAKE>;amount=2-3}`              |
| 星能            | 给予/消耗/设置玩家的星能    | `stellium{operation=<GIVE/SET/TAKE>;amount=2-3}`          |
| MythicMobs 技能 | 释放一个 MythicMobs 技能    | `mmskill{id=MythicMobsSkillInternalName}`                 |
| 金钱            | 给予/消耗/设置玩家的金钱    | `money{operation=<GIVE/SET/TAKE>;amount=2-3}`             |

所有这些目标类型和触发器，以及如何正确使用它们都可以在默认配置中查看。消息和触发器支持 PlaceholderAPI 中的占位符。
