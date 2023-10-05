---
title: "配置反矿物透视"
---

Paper 使用基于混淆处理的反矿物透视，提供两种模式。可以对每个世界进行自定义配置。

### 针对某个世界的配置文件

如果你还不了解 Paper 可以为每个世界进行自定义配置，请花上几分钟了解一下。

本文将逐步说明如何配置反矿物透视。若要参考文档，请查阅 [针对世界的配置](https://help.1145.one/Paper-Wiki/admin/reference/world-configuration)。  
反矿物透视会提供两种模式。`engine-mode: 1` 将为指定维度的指定方块替换为假的方块，例如石头（y<0 时为深层）、下界岩或末地岩。而 `engine-mode: 2` 与其恰好相反：将石头（y<0 时为深层）、下界岩或末地岩替换为假的矿物方块。  
下图将说明在使用推荐配置的情况下，开启了矿物透视的玩家在不同模式中将会看到的图片。以下是主世界和下界的截图。  
![主世界](https://docs.papermc.io/assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png)
![下界](https://docs.papermc.io/assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png)
以客户端的角度来说，`engine-mode: 1` 模式的计算量要小很多，而 `engine-mode: 2` 模式的反矿物透视效果会更好。`engine-mode: 1` 只会隐藏周围全部被岩石包裹住的矿石，没有被包裹住的、有水的旁边的则不会隐藏。而`engine-mode: 2`不会出现以上情况，因为其工作原理是在原有原矿石的基础上额外添加假方块。

### 绕过反矿物透视

**可见范围：** 即使反矿物透视可以在服务器上阻止多数玩家使用矿物透视，但不排除可能绕过的现象。通过分析反矿物透视的工作原理，玩家在服务器上可以看到他们附近大量的矿物。不过，你可以考虑再安装一个可靠的反作弊以解决此问题。不管如何，反矿物透视不是开箱即用的。  
**种子搜索：** 另外一种矿物透视则是根据 Minecraft 种子的生成规律来寻找矿物。一旦玩家得到了种子，则可以根据生成规律得知每一个矿物的位置，便能完全绕过反矿物透视。可以在 Paper 的配置文件中使用 `feature-seeds` 功能来增大玩家强行获得种子的难度，并可以和 `spigot.yml` 中的 structure seed 项配合使用。  
**裸露在空气中的矿石：** 在模式 1 和模式 2 中，裸露在空气中的矿石都会被开启矿物透视的玩家看到。如果开启模式 2 将通过增加大量的假矿石混入其中来解决这一问题。不过，开启此选项会导致部分玩家的客户端性能出现问题（FPS 下降）。

## 推荐配置

以下是启用 `engine-mode: 1` 和 `engine-mode: 2` 的不同推荐配置。

#### 代码

Yaml 需要注意缩进！下面的配置都正确的处理了缩进，请确保在复制时同样地正确地处理了缩进。

#### `engine-mode: 1`

#### 默认世界

```
请使用以下内容来替代掉 paper-world-defaults.yml 中的 anticheat.anti-xray 键。
```

```yaml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
      # 地牢中的箱子不会隐藏，因为完全裸露在空气中。但是通过藏宝图得到的宝箱则会隐藏起来。
      - chest
      - coal_ore
      - deepslate_coal_ore
      - copper_ore
      - deepslate_copper_ore
      - raw_copper_block
      - diamond_ore
      - deepslate_diamond_ore
      - emerald_ore
      - deepslate_emerald_ore
      - gold_ore
      - deepslate_gold_ore
      - iron_ore
      - deepslate_iron_ore
      - raw_iron_block
      - lapis_ore
      - deepslate_lapis_ore
      - redstone_ore
      - deepslate_redstone_ore
    lava-obscures: false
    # 1.18版本起，部分矿石的最大生成高度进行了调整。
    # 请自行修改 max-block-height 以确保适用于当前版本。
    # https://minecraft.fandom.com/wiki/Ore 可能很有帮助
    max-block-height: 64
    # 在启用 engine-mode: 1 时不会使用 replacement-blocks 列表。调整此列表中的内容将不会生效。
    replacement-blocks: []
    update-radius: 2
    use-permission: false
```

#### 下界

```
复制到地狱文件夹中的 paper-world.yml 。具体请见左侧的配置文件指南。
```

```yaml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
      - ancient_debris
      - nether_gold_ore
      - nether_quartz_ore
    lava-obscures: false
    max-block-height: 128
    # 在启用 engine-mode: 1 时不会使用 replacement-blocks 列表。调整此列表中的内容将不会生效。
    replacement-blocks: []
    update-radius: 2
    use-permission: false
```

#### 末地

```
复制到末地文件夹中的 paper-world.yml 。具体请见左侧的配置文件指南。
```

```yaml
anticheat:
  anti-xray:
    enabled: false
```

#### `engine-mode: 2`

#### 默认世界

```
请使用以下内容来替代掉 paper-world-defaults.yml 中的 anticheat.anti-xray 键。
```

```yaml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
      # 你可以添加空气来隐藏洞穴。
      # 这对于反开矿物透视找洞穴的玩家很有用，但是会导致FPS下降。
      - air
      - copper_ore
      - deepslate_copper_ore
      - raw_copper_block
      - diamond_ore
      - deepslate_diamond_ore
      - gold_ore
      - deepslate_gold_ore
      - iron_ore
      - deepslate_iron_ore
      - raw_iron_block
      - lapis_ore
      - deepslate_lapis_ore
      - redstone_ore
      - deepslate_redstone_ore
    lava-obscures: false
    # 1.18版本起，部分矿石的最大生成高度进行了调整。
    # 请自行修改 max-block-height 以确保适用于当前版本。
    # https://minecraft.fandom.com/wiki/Ore 可能很有帮助
    max-block-height: 64
    replacement-blocks:
      # 箱子是方块实体且无法在模式2中隐藏。
      # 但是如果 max-block-height 调整的足够高，通过藏宝图寻找的箱子也会隐藏。
      - chest
      - amethyst_block
      - andesite
      - budding_amethyst
      - calcite
      - coal_ore
      - deepslate_coal_ore
      - deepslate
      - diorite
      - dirt
      - emerald_ore
      - deepslate_emerald_ore
      - granite
      - gravel
      - oak_planks
      - smooth_basalt
      - stone
      - tuff
    update-radius: 2
    use-permission: false
```

#### 下界

```
复制到地狱文件夹中的`paper-world.yml`。具体请见左侧的配置文件指南。
```

```yaml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
      # 在上文查看可能绕过的情况与客户端FPS下降的问题。
      - air
      - ancient_debris
      - bone_block
      - glowstone
      - magma_block
      - nether_bricks
      - nether_gold_ore
      - nether_quartz_ore
      - polished_blackstone_bricks
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
      - basalt
      - blackstone
      - gravel
      - netherrack
      - soul_sand
      - soul_soil
    update-radius: 2
    use-permission: false
```

#### 末地

```
复制到末地文件夹中的`paper-world.yml`。具体请见左侧的配置文件指南。
```

```yaml
anticheat:
  anti-xray:
    enabled: false
```

## 常见问题解答与支持

#### 我依然可以看到（某些）矿石 / 使用 X-ray（矿物透视）

正如上所述，这里解释了一些即使你启用了反矿物透视却依然能够看到（某些）矿石的原因：

- 矿石在配置项 `max-block-height` 之上。
- 反矿物透视无法隐藏裸露在空气或其它透明方块中的矿石（例如在洞穴中）。实际上，这种情况也适用于 `engine-mode: 2`，不过，通常情况下假方块会阻碍查看真实方块。要想隐藏这些裸露的矿石也需要额外的插件。
- 启用了 `use-permission` 且你有绕过反矿物透视的权限或你有 OP 权限。
- 在配置的方块列表中缺少该方块类型。可能使用了过时的配置文件。

#### 我已经添加了假方块但是 X-ray 却看不见它们

如果你正在使用 `engine-mode: 2` 且你已经添加了假方块至 `hidden-blocks` 列表中，但是你在游戏中使用 X-ray 时却看不见它们，可能有以下几点原因：

- 添加的方块类型是方块实体。反矿物透视可以隐藏（替换）方块实体（例如箱子），前提是它们没有裸露在空气或其它透明方块中。但是，反矿物透视无法将方块实体作为假方块替换进区块里。
- 方块在你的客户端中的 X-ray mod 被禁用或你的 X-ray 资源包不显示该方块。

#### 在 y =0 以下或某些其它地方不工作

- 你的配置文件很有可能已过时且在 `replacement-blocks` 列表中缺少重要方块，例如 `深板岩` 或特定生物群系才会出现的方块，比如 `玄武岩`。你可能也想检查 `hidden-blocks` 列表是否包含了全部重要矿石与它们对应的 `深层` 变种。
- 如果它超过一定的 y 高度就不工作，请检查你的 `max-block-height` 配置项。

#### 反矿物透视依然无法工作，进一步的故障排除

- 确保每更改完反矿物透视配置文件之后重启一次服务器。更改不会自动生效。
- 不要使用 `/reload` 命令。要应用反矿物透视更改需要重启服务器。
- 在重启服务器之后，查看 timings 或 spark 的 config 部分以验证配置是否已正常应用。

#### 如果它依然不正常工作，我该如何并且去哪里寻求支持？

如果以上几点依然无法解决你的问题，或你有关于反矿物透视更进一步的问题，请不要犹豫，在 [PaperMC Discord](https://discord.gg/papermc) 中通过 #paper-help 频道询问我们。请尝试提供关于你的问题尽可能多的细节。"It doesn't work"（“它不正常工作”）在寻求帮助时并不是很有用。描述你预期中的目的，你为此尝试过什么，你所期望的与观察到的。最好包含一个 timings 或 spark 链接以及一张在游戏中看到的图片。
