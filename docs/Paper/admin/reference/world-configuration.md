---
title: "Paper 针对世界的配置"
---

在 `paper-world-defaults.yml` 文件中的每一个配置都可以单独应用于每一个世界。  
了解如何配置它们，请详见 [配置文件](https://help.1145.one/Paper-Wiki/admin/how-to/configuration)  
对于全局的配置，请见 [Paper 全局配置](https://help.1145.one/Paper-Wiki/admin/reference/global-configuration)

## anticheat

### anti-xray

#### 关于推荐使用 `engine-mode` `1` 还是 `2` 可以在[配置反矿物透视](https://help.1145.one/Paper-Wiki/admin/how-to/anti-xray)中找到。

#### enabled

- **默认值**: `false`
- **描述**: 是否启用反矿物透视。

#### engine-mode

- **默认值**: `1`
- **描述**: 请见[配置反矿物透视](https://docs.poikcue.com/PaperMC/paper/admin/how-to/anti-xray.html)

#### max-block-height

- **默认值**: `64`
- **描述**: 设定一个最大生效高度 (为 `y` 坐标，将从世界最底部开始计算起）以确定反矿物透视的生效范围。只接受 16 的倍数，其余数字将四舍五入处理。[中文 Minecraft Wiki 矿石](https://minecraft.fandom.com/zh/wiki/%E7%9F%BF%E7%9F%B3) 会帮助你确定一个最佳数值。

#### update-radius

- **默认值**: `2`
- **描述**: 当客户端与方块交互时，将发送（包含真实方块数据的）方块更新的半径距离。 该值仅接受 `0`, `1`, 和 `2` ，若此值比 `0` 小则取值为 `0`, 若此值比 `2` 大则取值为 `2`。 `0` 仅为测试用途，不要在生产环境使用 `0` 值。

#### lava-obscures

- **默认值**: `false`
- **描述**: 与岩浆接触的方块是否要进行模糊处理。开启后，当岩浆与其材质不像石头的矿物接触时表现不佳。虽然岩浆几乎是不透明的，但是有时不能完全覆盖住方块表面。

#### use-permission

- **默认值**: `false`
- **描述**: 是否为有 `paper.antixray.bypass` 权限的玩家不启用反矿物透视。 由于部分传统权限插件在数量检查上会出现错误。只应当在使用现代（Modern）权限插件时启用此项。

#### hidden-blocks

- **默认值**:
  `[copper_ore, deepslate_copper_ore, gold_ore, deepslate_gold_ore, iron_ore, deepslate_iron_ore, coal_ore, deepslate_coal_ore, lapis_ore, deepslate_lapis_ore, mossy_cobblestone, obsidian, chest, diamond_ore, deepslate_diamond_ore, redstone_ore, deepslate_redstone_ore, clay, emerald_ore, deepslate_emerald_ore, ender_chest]`
- **描述**: 如果启用反矿物透视模式 `engine-mode: 1` ，哪些方块需要被隐藏掉。它们会被替换为 `石头` (当 y<0 时替换为 `深层` 类型), `下界岩`, 和 `末地岩`，被替换为何种方块将取决于矿物所在维度。忽略任何类型的空气方块。
  如果启用模式 `engine-mode: 2` ，哪些方块在启用反矿物透视的世界中将随机生成。将 `hidden-blocks` 列表中的方块替换为 `replacement-blocks`。方块实体（例如刷怪笼和箱子）在此列表中无效。

#### replacement-blocks:

- **默认值**: [stone, oak_planks, deepslate]
- **描述**: 此列表不会影响使用 `engine-mode: 1` 的世界。修改此列表对于使用模式 1 的世界无效。

  若使用`engine-mode: 2`，`replacement-blocks` 和 `hidden-blocks` 两个列表中的方块都会随机被 `hidden-blocks` 列表中的方块取代。方块实体在 `hidden-blocks` 列表中会被忽略掉，但可以加入到 `replacement-blocks` 列表之中。忽略所有类型的空气方块。

### obfuscation

#### items

##### hide-durability

- **默认值**: `false`
- **描述**: 服务器是否要发送耐久度的相关信息给其他玩家的客户端。可能会影响需要依赖获取耐久度的材质包。

##### hide-itemmeta

- **默认值**: `false`
- **描述**: 服务器是否要发送（可能会给作弊客户端带来有利条件的）不必要的物品信息给其他玩家的客户端（例如附魔、在潜影盒/背包中的物品等等）。可能会影响需要依赖于获取附魔、Lore 或物品名称等的材质包。

##### hide-itemmeta-with-visual-effects

- **默认值**: `false`
- **描述**: 服务器是否要发送影响物品显示的物品信息（例如磁石指针位置）给其他玩家的客户端。这些信息可能用于作弊客户端为作弊玩家带来有利条件。不管怎样，此项都会影响当其他玩家手持某些物品时的外观。

## chunks

### auto-save-interval

- **默认值**: `-1`
- **描述**: 配置世界在间隔多少 Tick 后应当保存一次。此值的优先度高于 `bukkit.yml` 文件中 `ticks-per.autosave` 项。若此值设为 `-1`，则使用 `bukkit.yml` 文件中的`ticks-per.autosave` 作为默认值。

### delay-chunk-unloads-by

- **默认值**: `10s`
- **描述**: 延迟多长时间后卸载区块。

### entity-per-chunk-save-limit

- **默认值**: `{experience_orb: -1...}`
- **描述**: 限制每个区块中指定实体可被保存/加载的数量。 设定此值为 `-1` 将会禁用对特定实体的限制。可以添加除了已经填入的实体类型以外的任何实体。

### fixed-chunk-inhabited-time

- **默认值**: `-1`
- **描述**: 如果设定为`0`或更高，则将区块的保持加载时间设定为一个定值。这里的“定值” 是指静态或永不会变，并**不是**指修复一个 Bug。从玩家在此区块活跃时起，计时器就会开始计数。

### max-auto-save-chunks-per-tick

- **默认值**: `24`
- **描述**: 单个 Tick 中自动保存可保存最大区块的数量。

### prevent-moving-into-unloaded-chunks

- **默认值**: `false`
- **描述**: 服务器是否允许玩家移动进尚未加载完成的区块中。

## collisions

### allow-player-cramming-damage

- **默认值**: `false`
- **描述**: 当实体堆叠数量超过游戏规则 `maxEntityCramming` 设定值时，是否要对玩家造成伤害。

### allow-vehicle-collisions

- **默认值**: `false`
- **描述**: 当 `only-players-collide` 启用时，交通工具是否也要计入在内。

### fix-climbing-bypassing-cramming-rule

- **默认值**: `false`
- **描述**: 攀爬是否不计入实体堆叠限制内（`maxEntityCramming`游戏规则）。如果设定为 `true`，则正在攀爬的实体也将计入实体堆叠限制，并允许其同样受到窒息伤害。

### max-entity-collisions

- **默认值**: `8`
- **描述**: 达到此值后，服务器将不再处理碰撞。

### only-players-collide

- **默认值**: `false`
- **描述**: 是否仅当玩家接触另外一个实体时才会计算碰撞。

## entities

### armor-stands

#### do-collision-entity-lookups

- **默认值**: `true`
- **描述**:是否要为盔甲架实体启用实体碰撞检查。

#### tick

- **默认值**: `true`
- **描述**: 当禁用后，盔甲架将停止计算 Tick。此项在有大量盔甲架时可以提高性能。

### behaviour

#### baby-zombie-movement-modifier

- **默认值**: `0.5`
- **描述**: 设定幼年僵尸的移动速度。比如，设定 `0.5` 是比默认移动速度快 50%，设定 `-0.4` 是比默认移动速度慢 40%。

#### disable-chest-cat-detection

- **默认值**: `false`
- **描述**: 如果有猫坐在箱子上，玩家是否可以打开箱子。

#### disable-creeper-lingering-effect

- **默认值**: `false`
- **描述**: 是否要禁用苦力怕随机的 AreaEffectCloud 效果。

#### disable-player-crits

- **默认值**: `false`
- **描述**: 在 PvP 中是否要禁用暴击，即每一次挥剑的伤害相同。

#### allow-spider-world-border-climbing

- **默认值**: `true`
- **描述**: 蜘蛛是否能够爬到世界边界上，就像在普通的墙上一样。

#### door-breaking-difficulty

- **默认值**: `[HARD, NORMAL, EASY, PEACEFUL]`
- **描述**: 哪些难度下可以使实体尝试破门。

#### ender-dragons-death-always-places-dragon-egg

- **默认值**: `false`
- **描述**: 末影龙是否在每次死亡时都会生成一个龙蛋。

#### experience-merge-max-value

- **默认值**: `-1`
- **描述**: 单个经验球可提供的最大经验值，防止将周围的所有经验都合并在一个经验球里面。设定`-1`则没有上限，可以把周围经验全部合并到一个经验球之中。当击杀 Boss 后此变化非常明显。

#### mobs-can-always-pick-up-loot

- **默认值**: `false`
- **描述**: 僵尸和骷髅（可单独配置）是否总会拾取战利品。如果设定为 `false`，将由游戏难度决定（和原版一致）。

#### nerf-pigmen-from-nether-portals

- **默认值**: `false`
- **描述**: 是否移除由下界传送门生成的猪人的 AI。

#### parrots-are-unaffected-by-player-movement

- **默认值**: `false`
- **描述**: 是否要让鹦鹉“赖”在玩家身上不走，即玩家移动不会驱赶鹦鹉。潜行可以赶走它们。

#### phantoms-do-not-spawn-on-creative-players

- **默认值**: `true`
- **描述**: 创造模式的玩家是否不会生成幻翼。

#### phantoms-only-attack-insomniacs

- **默认值**: `true`
- **描述**: 幻翼是否不攻击正在睡觉的玩家。

#### piglins-guard-chests

- **默认值**: `true`
- **描述**: 猪灵被激怒后是否会尝试保护箱子。

#### pillager-patrols

##### disable

- **默认值**: `false`
- **描述**: 是否要禁用掠夺者巡逻机制和相关的 AI。

##### spawn-chance

- **默认值**: `0.2`
- **描述**: 设定巡逻队生成的概率。

##### spawn-delay

###### per-player

- **默认值**: `false`
- **描述**: 每名玩家是否都会造成生成延迟。

###### ticks

- **默认值**: `12000`
- **描述**: 需要间隔多少 Tick 后才有概率重新生成。

##### start

###### per-player

- **默认值**: `false`
- **描述**: 每名玩家是否都会造成生成的间隔天数。

###### day

- **默认值**: `5`
- **描述**: 两次袭击所需间隔的天数。

#### should-remove-dragon

- **默认值**: `false`
- **描述**: 如果没有可用传送门剩余，是否要删除末影龙。

#### spawner-nerfed-mobs-should-jump

- **默认值**: `false`
- **描述**: 刷怪笼所生成（经过削弱的怪物）是否应当不断尝试在水中漂浮（跳跃）。

#### zombie-villager-infection-chance

- **默认值**: `-1.0`
- **描述**: 设定村民转换为僵尸村民的概率。设定为 `-1.0` 将由原版游戏难度决定。设定为 `0.0` 时，僵尸将永远会直接杀死村民。设定为 `100.0` 时，僵尸将永远直接转化村民为僵尸村民。译者注：根据 Minecraft Wiki 得知，简单模式不会将村民转换为僵尸村民，普通模式转换为僵尸村民的概率是 50%，困难模式转换为僵尸村民的概率是 100%。

#### zombies-target-turtle-eggs

- **默认值**: `true`
- **描述**: 僵尸和僵尸猪灵是否会视海龟蛋为目标。设定此值为`false`将会提高性能，因为他们不会尝试搜索附近的蛋。

### entities-target-with-follow-range

- **默认值**: `false`
- **描述**: 当视实体为目标时，服务器是否应该直接使用 Follow range。译者注：我不知道这个 Follow range 是不是一个配置文件键名，中文应该是“追寻距离”。

### mob-effects

#### immune-to-wither-effect

- **默认值**: `true`
- **描述**: 特定实体是否直接免疫凋零效果。

#### spiders-immune-to-poison-effect

- **默认值**: `true`
- **描述**: 蜘蛛是否要免疫药水效果。

#### undead-immune-to-certain-effects

- **默认值**: `true`
- **描述**: 亡灵生物是否直接免疫再生和药水效果。

### spawning

#### all-chunks-are-slime-chunks

- **默认值**: `false`
- **描述**: 服务器是否应该将所有区块都作为粘液区块，史莱姆可以在任意区块中生成。会减少遇到史莱姆的概率，因为可生成的区域变大了。

#### alt-item-despawn-rate

##### enabled

- **默认值**: `false`
- **描述**: 物品是否会有不同的消失时间。

##### items

- **默认值**: `{ cobblestone: 300 }` (从 Ticks mappings 获取物品列表)
- **描述**: 为不同物品设定不同的消失时间（以 Tick 为单位）。物品 ID 和原版/give 命令（命名空间 ID）一样，也可以按下**F3+H**启用游戏内的高级提示框，将鼠标指针放在物品栏中的任意物品上面，会显示在物品信息的最底行。

#### count-all-mobs-for-spawning

- **默认值**: `false`
- **描述**: 是否要将刷怪笼和其它（杂项）生成的生物统计入全局生物上限。

#### creative-arrow-despawn-rate

- **默认值**: `-1`
- **描述**: 创造模式玩家射出的箭消失的速度。以 Tick 为单位。

#### despawn-ranges

##### soft

- **默认值**: `32`
- **描述**: 距离玩家多少方块外的（每个）实体（可单独设置）应该被随机选中并删除（消失）。影响水平和垂直两个方向。

##### hard

- **默认值**: `128`
- **描述**: 距离玩家多少方块外的（每个）实体（可单独设置）应该被强制选中并删除（消失）。影响水平和垂直两个方向。

#### disable-mob-spawner-spawn-egg-transformation

- **默认值**: `false`
- **描述**: 是否要禁止玩家使用刷怪蛋修改刷怪笼刷出生物的种类。

#### duplicate-uuid

##### mode

- **默认值**: `saferegen`

- **描述**: 用于处理相同 UUID 的实体的处理办法。  
  以下是可选的值：
  - **`saferegen`**: 为实体重新命名 UUID。如果两个离得很近就移除。
  - **`delete`**: 移除实体。
  - **`silent`**: 什么都不做，也不打印日志。
  - **`warn`**: 什么都不做，只打印日志。

##### safe-regen-delete-range

- **默认值**: `32`
- **描述**: 若在上面使用 `saferegen` 值，那么两个生物相距多少方块才应该移除一个。

#### filter-nbt-data-from-spawn-eggs-and-related

- **默认值**: `true`
- **描述**: 服务器是否要删除部分从刷怪蛋刷出的生物、Falling Block 的实体形式和经常用在创造模式下会滥用的物品的 NBT。
- **说明**: 部分冒险模式的地图需要关闭此项，但是不建议在公开的服务器上禁用此选项。

#### iron-golems-can-spawn-in-air

- **默认值**: `false`
- **描述**: 铁傀儡是否可以在空中生成。刷铁机可能会因此项而失效。

#### monster-spawn-max-light-level

- **默认值**: `-1`
- **描述**: 当设定为 `-1` 时, 生成怪物所需最大亮度将和原版一致（=0）。设定为 `15` 或更高恢复到 1.18 Pre 及之前版本。

#### non-player-arrow-despawn-rate

- **默认值**: `default`
- **描述**: 非玩家实体射出箭后箭矢消失的速度。以 Tick 为单位。  
  设定为 `default` 则使用 `spigot.yml` 中默认的箭矢消失速度，并且将应用于全部箭矢。

#### per-player-mob-spawns

- **默认值**: `true`
- **描述**: 是为单个玩家还是为全部服务器应用怪物上限（在 bukkit.yml 设定）。  
  当启用此项后，怪物生成的数量与禁用此项的数量几乎是一致的，但是会更加均匀。可以防止一个人占用全服的怪物上限，让每名玩家都有良好的游戏体验。

#### scan-for-legacy-ender-dragon

- **默认值**: `true`
- **描述**: 服务器是否会检测末影龙战。设定此值为 `false` 将在末地不再自动生成末影龙（甚至在新的世界中）。

#### skeleton-horse-thunder-spawn-chance

- **默认值**: `0.01`
- **描述**: 设定在雷暴天气下召唤骷髅马骑兵队的概率（劈中骷髅时）。

#### slime-spawn-height

##### slime-chunk

###### maximum

- **默认值**: `40`
- **描述**: 史莱姆区块生成史莱姆的 Y 最小值。

##### swamp-biome

###### maximum

- **默认值**: `70`
- **描述**: 沼泽生物群系生成史莱姆的 Y 最大值。

###### minimum

- **默认值**: `50`
- **描述**: 沼泽生物群系生成史莱姆的 Y 最小值.

#### spawn-limits

- **默认值**: `-1`
- **描述**: 用于确定每种类型的实体（可以单独设置）在每个世界中自然生成的数量。此值与 bukkit.yml 中的配置项是一样的，不过可以为每个世界单独设置。若设定为 `-1` 将交由 bukkit.yml 中的值管理。

#### wandering-trader

##### spawn-chance-failure-increment

- **默认值**: `25`
- **描述**: 若尝试生成流浪商人失败，下次生成的概率应该增加多少。

##### spawn-chance-max

- **默认值**: `75`
- **描述**: 流浪商人生成的最大概率是多少。

##### spawn-chance-min

- **默认值**: `25`
- **描述**: 流浪商人生成的基础概率是多少。

##### spawn-day-length

- **默认值**: `24000`
- **描述**: 尝试生成流浪商人的间隔时间。以 Tick 为单位。

##### spawn-minute-length

- **默认值**: `1200`
- **描述**: 流浪商人生成的时间长度。以 Tick 为单位。

#### wateranimal-spawn-height

##### maximum

- **默认值**: `default`
- **描述**: 水生动物生成的最大高度。
- **说明**: 默认值即遵循原版 Minecraft 生成的高度，也就是 1.12.2 版本的水平面高度 (通常 Y: 64)。

##### minimum

- **默认值**: `default`
- **描述**: 水生动物生成的最小高度。
- **说明**: 默认值即遵循原版 Minecraft 生成的高度，也就是 1.12.2 版本的水平面高度 (通常 Y: 64)。

## environment

### disable-explosion-knockback

- **默认值**: `false`
- **描述**: 服务器是否应该完全阻止由爆炸造成的击退。
-

### disable-ice-and-snow

- **默认值**: `false`
- **描述**: 是否不再生成冰与雪。此项同时也会使炼药锅不再会被雨/雪填满。

### disable-teleportation-suffocation-check

- **默认值**: `false`
- **描述**: 是否要在尝试传送玩家之前禁用窒息检查。
- **说明**: 虽然这会帮助玩家传送出去时不被墙所阻挡，但是在特定位置的情况下，当玩家登出服务器时会穿过方块。

### disable-thunder

- **默认值**: `false`
- **描述**: 是否要禁用雷雨天气。

### frosted-ice

#### delay

##### max

- **默认值**: `40`
- **描述**: 霜冰效果的最大 RNG 值。

##### min

- **默认值**: `20`
- **描述**: 霜冰效果的最小 RNG 值。

#### enabled

- **默认值**: `true`
- **描述**: 服务器是否要启用（并计时 Tick）霜冰方块。译者注：根据 Minecraft Wiki 得知，霜冰应该是冰霜行者附魔创造出的方块。

### generate-flat-bedrock

- **默认值**: `false`
- **描述**: 服务器是否要生成基岩作为单个的平面层。

### nether-ceiling-void-damage-height

- **默认值**: `disabled`
- **描述**: 设定玩家在地狱 Y 高度应该高于多少后受到虚空伤害。这是一个非常“友好”的方式限制玩家在地狱基岩天花板上建筑。设定为`disabled`以禁用此功能。

### optimize-explosions

- **默认值**: `false`
- **描述**: 服务器是否应该在爆炸时使用缓存来查找实体，而不是爆炸时进行计算。此项会显著提高爆炸的速度。

### portal-create-radius

- **默认值**: `16`
- **描述**: 服务器尝试生成新传送门时可偏移的最大距离。

### portal-search-radius

- **默认值**: `128`
- **描述**: 服务器尝试搜寻已有传送门的范围。如果找不到就新生成一个。译者注：可以适当把此值调大一点，因为译者在玩游戏时经常在地下生成一个新的传送门。

### portal-search-vanilla-dimension-scaling

- **默认值**: `true`
- **描述**: 是否为原版维度应用 `portal-search-radius`。

### treasure-maps

#### enabled

- **默认值**: `true`
- **描述**: 从村民和箱子中得到的藏宝图是否应当指向相应的位置。

#### find-already-discovered

- **描述**: 原版的机制是优先寻找未被探索过的位置，可能会被引导到一个没有被完全搜刮的地方，也可能因设置了世界边界而导致出错。下面的配置允许设置地图从不同方式获得时的默认行为。

##### loot-tables

- **默认值**: `default`
- **描述**: 是否要为未被探索过的结构覆盖配置战利品表检查。`default` 允许战利品表单独确定是否允许地图搜索已被探索过的位置。所有的原版战利品表都将默认跳过已探索过的位置，因此当此项设置为`false` 时会覆盖并强制搜索已探索过的位置。

##### villager-trade

- **默认值**: `false`
- **描述**: 服务器是否要将与村民交易获得的藏宝图定位到第一个宝藏位置。

### water-over-lava-flow-speed

- **默认值**: `5`
- **描述**: 设定水流过岩浆时的速度。

## feature-seeds

### generate-random-seeds-for-all

- **默认值**: `false`
- **描述**: 为全部未指定种子的游戏内容启用自动填充种子。若想要要在受限环境中最大限度内设定种子，设定此项是个不错的选择。

### `<feature-namespace>`

- **描述**: 在特定情况下设定种子种群。如果设定为`-1`则保持原版种子种群不变，也不会被自动填充覆盖。

## fishing-time-range

### maximum

- **默认值**: `600`
- **描述**: 钓鱼前的最大 RNG Tick。

### minimum

- **默认值**: `100`
- **描述**: 钓鱼前的最小 RNG Tick。

## fixes

### disable-unloaded-chunk-enderpearl-exploit

- **默认值**: `true`
- **描述**: 卸载区块时是否不保存已投出的末影珍珠。

### falling-block-height-nerf

- **默认值**: `disabled`
- **描述**: 服务器应该在高度为何值时时移除下落方块。设定为 `disabled` 则禁用此项。

### fix-curing-zombie-villager-discount-exploit

- **默认值**: true
- **描述**: 是否要修复一个反复治愈僵尸村民来得到村民折扣的[经常被恶意利用的机制](https://bugs.mojang.com/browse/MC-181190)。

### fix-items-merging-through-walls

- **默认值**: `false`
- **描述**: 是否应该在物品尝试堆叠时防止其穿墙。启用此项会使性能下降。只有当 `spigot.yml`中的`merge-radius.item` 值设定很大才会穿墙堆叠物品。

### prevent-tnt-from-moving-in-water

- **默认值**: `false`
- **描述**: 服务器是否应该禁止已激活的 TNT 在水中游动。

### split-overstacked-loot

- **默认值**: `true`
- **描述**: 当设定为 `false` 时，战利品表不会将超出最大堆叠限制的物品尝试进行拆分为较少的堆叠数量。这会阻止超过最大堆叠数目导致在生成模式下的潜影盒中物品丢失或使区块崩溃而出现错误（因为玩家一直在尝试发送过大的包，导致最终会被踢出服务器）

### tnt-entity-height-nerf

- **默认值**: `disabled`
- **描述**: 服务器移除已激活的 TNT 最大高度的值。设定为 `disabled` 以禁用此项。

## hopper

### cooldown-when-full

- **默认值**: `true`
- **描述**: 当漏斗已满时，是否要暂时停止加入新物品以替代不断尝试往里塞东西。

### disable-move-event

- **默认值**: `false`
- **描述**: 为漏斗禁用全部 `InventoryMoveItemEvent` 事件。此项可以显著提高性能，但是会影响使用此事件的插件，例如领地或保护插件。

### ignore-occluding-blocks

- **默认值**: `false`
- **描述**: 漏斗是否会忽略其阻塞的方块。例如在沙子里面塞一个漏斗矿车。启用此项会提高为漏斗放入新物品时的性能。

## lootables

### auto-replenish

- **默认值**: `false`
- **描述**: 服务器是否会自动填充战利品容器。在启用此项之后，对某些玩家不断跑图（不断生成新区块）以寻找好东西的长期存档的服务器非常有用。

### max-refills

- **默认值**: `-1`
- **描述**: 设定重新填充战利品的最大次数。
- **说明**: 默认值 `-1` 即无限填充战利品。

### refresh-max

- **默认值**: `2d`
- **描述**: 容器重新填充战利品最大需要经过多长时间。

### refresh-min

- **默认值**: `12h`
- **描述**: 容器重新填充战利品最少需要经过多长时间。

### reset-seed-on-fill

- **默认值**: `true`
- **描述**: 当每次准备重新填充战利品是否都要随机决定重新填充的新物品种类。

### restrict-player-reloot

- **默认值**: `true`
- **描述**: 是否要防止同一玩家反复回来掠夺同一容器中的战利品 ~~（江湖大盗）~~ 。

## maps

### item-frame-cursor-limit

- **默认值**: `128`
- **描述**: 每个地图最大标记数量。如果过多可能会使客户端卡顿。

### item-frame-cursor-update-interval

- **默认值**: `10`
- **描述**: 物品展示框上的地图标记多久更新一次。设定为 `1` 或更低则禁用此更新。

## max-growth-height

### bamboo

#### max

- **默认值**: `16`
- **描述**: 竹子自然生长能长到多高。

#### min

- **默认值**: `11`
- **描述**: 竹子自然生长最起码要长多高。

### cactus

- **默认值**: `3`
- **描述**: 仙人掌自然生长最多能长多高。

### reeds

- **默认值**: `3`
- **描述**: 甘蔗（reeds）自然生长最多能长多高。

## misc

### disable-end-credits

- **默认值**: `false`
- **描述**: 离开末地时是否永不播放终末之诗。

### disable-relative-projectile-velocity

- **默认值**: `false`
- **描述**: 服务器在计算射出的箭的速度时是否不计算射手的速度。

### disable-sprint-interruption-on-attack

- **默认值**: `false`
- **描述**: 当玩家疾跑时受到攻击是否要停止疾跑。

### light-queue-size

- **默认值**: `20`
- **描述**: 设定每个世界对于非主线程的光更新队列的大小。原版设定此值为 `5`，但是实际使用此值会造成许多问题，特别是当使用 WorldEdit 等插件时。

### max-leash-distance

- **默认值**: `10.0`
- **描述**: 缰绳有效的最大距离。如果拴住生物的距离超过此值，则会断开缰绳。

### redstone-implementation

::: warning
此项所有内容都是实验性的。  
如果出现问题，也许会在发布某个补丁的同时永久删除这些内容。  
:::

- **默认值**: `vanilla`
- **描述**: 指定服务器的红石实现。以下备选实现方式通过优化功耗计算器、减少方块的数量与形状变化，可以大幅降低由红石引发的延迟。以下是实现列表：
  - **vanilla**: 原版实现。
  - **eigencraft**: theosib 开发的 Eigencraft 红石实现。
  - **alternate-current**: Space Walker 开发的 Alternate Current 红石实现。
- **注意:** 无论是 Eigencraft 还是 Alternate Current 的红石实现方式都修改了红石的行为。通过以下文档了解各自的红石实现。
  - Eigencraft: 目前没有官方文档。但是[theosib's comments](https://bugs.mojang.com/browse/MC-81098?focusedCommentId=420777#comment-42077)在 Mojira Bug Tracker 对此实现进行了概述。
  - [Alternate Current](https://github.com/SpaceWalkerRS/alternate-current/blob/main/README.md)

### shield-blocking-delay

- **默认值**: `5`
- **描述**: 玩家举起盾牌与实际格挡伤害之间需要间隔多少 Tick。

### show-sign-click-command-failure-msgs-to-player

- **默认值**: `false`
- **描述**: 点击告示牌运行命令失败时是否需要向玩家显示失败消息。

### update-pathfinding-on-block-update

- **默认值**: `true`
- **描述**: 当某一方块更新时是否要同步更新生物的寻路机制。禁用此选项可以大大提高服务器性能，又几乎完全不影响游戏机制。推荐加载大量的实体时，又建了一个自动农场或红石钟时启用。

## scoreboards

### allow-non-player-entities-on-scoreboards

- **默认值**: `false`
- **描述**: 当服务器计算碰撞时，是否要将非玩家实体视作从来未在计分板上出现过。启用此项会增加服务器计算实体碰撞的时间。

### use-vanilla-world-scoreboard-name-coloring

- **默认值**: `false`
- **描述**: 服务器是否要使用原版计分板为玩家显示名称着色。当在原版服务器和客户端上游玩冒险模式地图很有用。

## spawn

### allow-using-signs-inside-spawn-protection

- **默认值**: `false`
- **描述**: 是否允许玩家在出生点保护内放置告示牌。

### keep-spawn-loaded

- **默认值**: `true`
- **描述**: 服务器出生点是否应当始终保持加载状态。

### keep-spawn-loaded-range

- **默认值**: `10`
- **描述**: 出生点区块始终保持加载的距离。

## tick-rates

### behavior

#### villager

##### validatenearbypoi

- **默认值**: `-1`
- **描述**: 设定村民实体的 `validatenearbypoi` 行为的 Tick 速率。

#### `<entity-type>`

##### `<behavior-name>`

- **描述**: 对于特定实体种类设定 Tick 速率。`-1` 与原版保持一致。在 Timings 中查看实体名称。可能在以后的更新补丁中更改此项。

### container-update

- **默认值**: `1`
- **描述**: 服务器更新容器和物品栏的速率。以 Tick 为单位。

### grass-spread

- **默认值**: `1`
- **描述**: 设定服务器尝试蔓延草方块时的延迟。以 Tick 为单位。这个数值越高，蔓延的速度就越慢。

### mob-spawner

- **默认值**: 1
- **描述**: 刷怪笼应该多少 Tick 后计算可用生物生成区并尝试生成生物。设定为 `-1` 禁用所有刷怪笼。

### sensor

#### villager

##### secondarypoisensor

- **默认值**: `40`
- **描述**: 设定村民实体的 `secondarypoisensor` 传感器的 Tick 速率。

#### `<entity-type>`

##### `<sensor-name>`

- **描述**: 对于特定实体种类设定传感器 Tick 速率。`-1` 与原版保持一致。在 Timings 中查看实体名称。可能在以后的更新补丁中更改此项。

### unsupported-settings

#### fix-invulnerable-end-crystal-exploit

- **默认值**: `true`
- **描述**: 如果设定为`false`，则允许生成无敌的末影水晶。修复[MC-108513](https://bugs.mojang.com/browse/MC-108513)。
