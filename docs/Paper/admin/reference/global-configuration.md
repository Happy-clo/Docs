---
title: "Paper 全局配置"
---
  
Paper提供的全局配置选项将应用于服务器上的每一个世界，或仅仅是更改服务器本身的工作方式。若想要为每一个世界进行配置，请见[这里](https://help.1145.one/Paper-Wiki/admin/reference/world-configuration)。

## async-chunks

### threads

- **默认值**: `-1`

- **描述**: 服务器应该使用多少线程来保存世界或加载区块。除非另有规定，默认值（-1）将使用服务器线程数量的一半进行区块加载。默认使用最大4个线程用于保存和加载区块。使用 `-Dpaper.maxChunkThreads=[数字]` 启动参数以覆盖此项。

## chunk-loading

### autoconfig-send-distance

- **默认**: `true`

- **描述**: 是否要根据客户端设定的可视距离设定作为服务器实际发送给客户端的可视距离。此项只会设定服务器发送给客户端的区块距离的半径，不会影响服务器实际加载和计算 Tick。

### enable-frustum-priority

- **默认值**: `false`

- **描述**: 是否在尝试加载玩家两侧和后方的区块前优先加载玩家前面的区块。由于客户端当无次序的接收区块时表现不佳，所以此项默认禁用且通常不建议使用。

### global-max-chunk-load-rate

- **默认值**: `-1.0`

- **描述**: 全服务器每秒加载区块的最大数量。此项优先级要大于 `player-max-chunk-load-rate`。

### global-max-chunk-send-rate

- **默认值**: `-1.0`

- **描述**: 全服务器每秒发送区块的最大数量。调整此值可能有利于缓解服务器峰值宽带的使用。

### global-max-concurrent-loads

- **默认值**: `500.0`

- **描述**: 服务器每次处理加载区块时的最大数量。若此值超过了`player-max-concurrent-loads`则会覆盖它。

### max-concurrent-sends

- **默认值**: `2`

- **描述**: 每次排队发送区块的最大数值。设定一个较低的值会缓解服务器的网络瓶颈，比如使用反矿物透视与压缩。但是此值可能不会优化网络环境较差的玩家的游戏体验。

### min-load-radius

- **默认值**: `2`

- **描述**: 在区块加载时，玩家周围区块未阻塞的范围。此值影响的实际范围是设定值 +1，并且此项会控制客户端可加载的区块数量。

### player-max-chunk-load-rate

- **默认值**: `-1.0`

- **描述**: 每名玩家每秒加载区块的最大数值。

### player-max-concurrent-loads

- **默认值**: `20.0`

- **描述**: 每名玩家一次处理区块加载的最大数值。

### target-player-chunk-send-rate

- **默认值**: `100.0`

- **描述**: 每秒钟发送给玩家区块的最大数值。

## collisions

### enable-player-collisions

- **默认值**: `true`

- **描述**: 服务器是否应该允许玩家相互碰撞。此项和部分与计分板交互的插件同时启用时会出现问题。如果调整此项时出现问题，请尝试先禁用这些插件。


### send-full-pos-for-hard-colliding-entities

- **默认值**: `true`

- **描述**: 当与船只或矿车碰撞时，客户端/服务器经常会在处理两者时不一致，并使玩家的行为出错。此选项尝试在其发生碰撞时向其发送精确的位置来缓解此问题。开启此选项将消耗更多的带宽，但是在大多数情况下此选项值得开启。

## commands

### fix-target-selector-tag-completion

- **默认值**: `true`

- **描述**: 解决一个客户端 Bug，防止实体类型 Tag 建议在目标选择器中生效。在 [MC-235045](https://bugs.mojang.com/browse/MC-235045) 修复。

### suggest-player-names-when-null-tab-completions

- **默认值**: `true`

- **描述**: 当自动补全无其它参数可用时，是否要尝试返回 Tab 列表中的玩家名称。

### time-command-affects-all-worlds

- **默认值**: `false`

- **描述**: 当输入 `/time` 命令时，应当在所有世界生效还是仅在命令发送者所在的世界生效。

## console

### enable-brigadier-completion

- **默认值**: `true`

- **描述**: 是否要在控制台启用 Mojang 的命令引擎 Brigadier（高级）进行命令补全。

### enable-brigadier-highlighting

- **默认值**: `true`

- **描述**:  是否要在控制台启用 Mojang 的命令引擎 Brigadier 进行命令高亮。

### has-all-permissions

- **默认值**: `false`

- **描述**: 控制台是否默认有全部权限。

## item-validation

### display-name

- **默认值**: `8192`

- **描述**: 物品名称（Display）的最大字符长度。

### lore-line

- **默认值**: `8192`

- **描述**: 物品 Lore 的最大字符长度。

### resolve-selectors-in-books

- **默认值**: `false`

- **描述** 是否要在书中解析选择器。当启用后，有创造模式的玩家可以使用另外一种方式使服务器崩溃。

### book

#### author

- **默认值**: `8192`

- **描述**: 书作者的最大字符长度。

#### pages

- **默认值**: `16384`

- **描述**: 书页数的最大字符长度。

#### title

- **默认值**: `8192`

- **描述**: 书标题的最大字符长度。

### book-size

#### page-max

- **默认值**: `2560`

- **描述**: 书的单页可以为整书提供的最大字节数。

#### total-multiplier

- **默认值**: `0.98`

- **描述**: 书中单页从最后一页获取作为贡献全书最大字节的倍数 (第一页的倍数是 `1.0`).

## logging

### deobfuscate-stacktraces

- **默认值**: `true`

- **描述**: 是否将日志中的 Spigot mapping 堆栈转换为 Mojang mapping。该选项对使用 Mojang mapping 的服务器无效。

### log-player-ip-addresses

- **默认值**: `true`

- **描述**: 服务器日志是否要记录玩家的 IP 地址。是否开启此项都不会影响插件获取玩家的 IP 地址。

### use-rgb-for-named-text-colors

- **默认值**: `true`

- **描述**: ANSI 颜色是否应在记录日志时转换为 RGB 颜色。

## messages

### no-permission

- **默认值**:

`I'm sorry, but you do not have permission to perform this command. Please contact the server administrators if you believe that this is in error.`

> 中文参考翻译：`很抱歉，但是目前你的权限还不能使用此命令。如果你依然认为这是一个错误，请与服务器管理员联系。`

- **描述**: 当玩家运行某命令或进行某操作时，若权限不足所提示的文本。插件可以为其命令使用不同的提示文本。

### use-display-name-in-quit-messages

- **默认值**: `false`

- **描述**: 当玩家退出服务器时发送的信息应该用显示名称（可以被插件修改，即 Display name）还是真实的名称。

### kick

#### authentication-servers-down

- **默认值**: `<lang:multiplayer.disconnect.authservers_down>`

- **描述**: 当无法连接到 Mojang 验证服务器时提示的文本。

#### connection-throttle

- **默认值**: `Connection throttled! Please wait before reconnecting.`

- **默认值**: 当连接阻塞（即点击加入服务器按钮后极快速的断开连接并重新请求加入）时服务器发送给玩家的消息。可以在 `bukkit.yml` 中配置。

#### flying-player

- **默认值**: `<lang:multiplayer.disconnect.flying>`

- **描述**: 当玩家被检测到飞行作弊时踢出服务器显示的消息。

#### flying-vehicle

- **默认值**: `<lang:multiplayer.disconnect.flying>`

- **描述**: 当玩家被检测到驾驶时飞行作弊时踢出服务器显示的消息。

## misc

### fix-entity-position-desync

- **默认值**: `true`

- **描述**: 是否要修复服务器与客户端的实体同步位置不精确的 Bug。修复 [MC-4](https://bugs.mojang.com/browse/MC-4) 的 Bug。

### lag-compensate-block-breaking

- **默认值**: `true`

- **描述**: 服务器是否需要使用时间或 TPS 判断破坏方块时间。因为客户端视服务器的 TPS 始终为20，导致在服务器出现延迟时破坏方块会出现两者不一致的情况。此设置即防止该问题。

### load-permissions-yml-before-plugins

- **默认值**: `true`

- **描述**: 是否要在在加载插件之前优先加载 permissions.yml 文件，允许在其启用时立刻读取数据。

### max-joins-per-tick

- **默认值**: `3`

- **描述**: 设定每 Tick 最大允许多少名玩家加入服务器。若玩家在加入时超过了此限制，则会往后推迟加入时间。与 `Bukkit.yml` 配置文件中的 `connection-throttling` 没有任何关系。

### region-file-cache-size

- **默认值**: `256`

- **描述**: 区域文件缓存的最大大小（存储空间）。

### use-alternative-luck-forumula

- **默认值**: `false`

- **描述**: 是否要为幸运效果应用新的 [计算方式](https://gist.github.com/aikar/40281f6c73ec9b6fef7588e6461e1ba9)。同时，未定义但应适用此效果的部分游戏内容也将享受幸运效果。这对钓鱼计算公式有重大变化。

### use-dimension-type-for-custom-spawners

- **默认值**: `false`

- **描述**: 幻翼、流浪商人是否应该在自定义主世界中生成。默认为 `false` 以贴合原版。

## packet-limiter

### all-packets

#### action

- **默认值**: `KICK`

- **描述**:  一旦超过限制时需要采取的处罚措施。当填入 `DROP` 时将忽略超过限制的包，`KICK` 将会踢出发送超过限制的包的玩家。

#### interval

- **默认值**: `7.0`

- **描述**: 应用 `max-packet-rate` 时所需的间隔时间，以秒为单位。

#### max-packet-rate

- **默认值**: `500.0`

- **描述**: 一段时间内服务器可接受每名玩家发送最大的包的数量。

### kick-message

- **默认值**: `<red><lang:disconnect.exceeded_packet_rate>`

- **描述**: 玩家发送过多包后踢出服务器时提示的消息。

### overrides

- **默认值**: `ServerboundPlaceRecipePacket`, `DROP`, `4.0`, `5.0`

- **描述**: 为独立命名的任意 packet 覆盖全局配置。你可以在 Timings 找到每一个包的名称。对于有经验的用户，无论什么服务器 Packet 名均使用 Mojang mapping。

## player-auto-save

### max-per-tick

- **默认值**: `-1`

- **描述**: 每 Tick 最多保存多少名玩家的数据。设定为默认值 `-1` 将会根据 `player-auto-save.rate` 设定一个推荐数值，即 `10` 或 `20`。

### rate

- **默认值**: `-1`

- **描述**: 应当在多少 Ticks 时保存一次玩家数据。如果设定为 `-1` 则会使用 `bukkit.yml` 中的 `ticks-per.autosave` 项。

## proxies

### proxy-protocol

- **默认值**: `false`

- **描述**: 服务器是否需要处理 [代理协议](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) 消息文本。 这和 Velocity 或是 BungeeCord 完全没有关系，仅当使用 HAProxy 或类似软件时才应启用。

### bungee-cord

#### online-mode

- **默认值**: `true`

- **descriptions**: 当服务器作为 BungeeCord 子端时，应该如何处理玩家的 UUID 和数据。始终当保持此项应与 BungeeCord 设置中的 `online-mode` 一致。

### velocity

#### enabled

- **默认值**: `false`

- **描述**: 是否应当接受 Velocity 的 Modern 协议转发格式。

#### online-mode

- **默认值**: `false`

- **描述**: 当服务器作为 Velocity 子端时，该如何处理玩家的 UUID 和数据。此项应始终保持与 Velocity 设置中的 `online-mode` 一致。

#### secret

- **默认值**: `<空>`

- **描述**: 由你的 Velocity 代理与此服务器共享的 secret 字符串。此值必须与 Velocity 的 `forwarding-secret` 值保持一致。

## scoreboards

### save-empty-scoreboard-teams

- **默认值**: `false`

- **描述**: 许多计分板插件遗留大量的空的计分板 Teams，会大大减缓登录速度。是否要自动清理这些无用的计分板 Teams。

### track-plugin-scoreboards

- **默认值**: `false`

- **描述**: 服务器是否跟踪计分板插件时只追踪 dummy 类型的计分项。这是一个重大变化；但是，默认值是合理的。因为当你启用此项时，同时使用某些计分板插件时会减缓性能。

## spam-limiter

### incoming-packet-threshold

- **默认值**: `300`

- **描述**: 设定一个阈值。超过此阈值后的所有包都将视为刷屏并忽略它们。

### recipe-spam-increment

- **默认值**: `1`

- **描述**: 当玩家点击一个配方后，配方刷屏计数器应该增加多少数字。

### recipe-spam-limit

- **默认值**: `20`

- **描述**: 配方刷屏计数器应该累计到多少数字后踢出玩家。

### tab-spam-increment

- **默认值**: `1`

- **描述**: 在聊天中按下 Tab 使用自动补全时，Tab 补全刷屏计数器应该增加多少数字。

### tab-spam-limit

- **默认值**: `500`

- **描述**: Tab 补全刷屏计数器应该累计到多少数字后踢出玩家。

## timings

### enabled

- **默认值**: `true`

- **描述**: 设定 Timings 的全局启用状态。

### hidden-config-entries

- **默认值**:

`[database, settings.bungeecord-address, settings.velocity-support.secret, proxies.velocity.secret]`

- **描述**: 在 Timings 报告网页上应该隐藏哪些关于服务器的配置信息。

### history-interval

- **默认值**: `300`

- **描述**: 在 Timings 报告网页上两个不同的点之间要间隔多长时间。此项以秒为单位。

### history-length

- **默认值**: `3600`

- **描述**: 在单次报告中要保留的数据总量。此值会在 Timings 服务器上验证，过大的数据会拒绝受理。

### server-name

- **默认值**: `Unknown Server`

- **描述**: Timings 中显示的服务器名称是什么。

### server-name-privacy

- **默认值**: `false`

- **描述**: 是否要在 Timings 报告中隐藏服务器名称相关信息。

### url

- **默认值**: `https://timings.aikar.co`

- **描述**: 指定一个 [Timings Viewer](https://github.com/aikar/timings) 服务器，并将此 Timings 报告发送到该服务器上。

### verbose

- **默认值**: `true`

- **描述**: 是否要在 Timings 报告中显示更加详细的信息。例如：启用后，某个实体导致服务器卡服，所显示的信息将会比“实体（entities）”二字要详细的多。

## unsupported-settings

### allow-headless-pistons

- **默认值**: `false`

- **描述**: 是否允许在服务器中出现无头活塞，玩家通常用它来（永久）打破正常无法破坏的方块（比如下界破坏基岩天花板）。

### allow-permanent-block-break-exploits

- **默认值**: `false`

- **描述**: 是否可以使用原版漏洞破坏原版“无法破坏”的方块。包含基岩，末地传送门框架，末地传送门等等。

### allow-piston-duplication

- **默认值**: `false`

- **描述**: 是否应该允许复制 TNT，地毯和铁轨。沙子不在此之内。

### perform-username-validation

- **默认值**: `true`

- **默认值**: 服务器是否要验证玩家用户名。如果不启用，则会允许名称中含有特殊字符的玩家加入到服务器，不过此项会与部分插件不兼容。

## watchdog

### early-warning-delay

- **默认值**: `10000`

- **描述**: 在服务器挂起后，watchdog 线程开始打印 thread dumps 之前需要等待的时间（以毫秒为单位）。

### early-warning-every

- **默认值**: `5000`

- **描述**: 当服务器挂起时，watchdog 在终端打印 thread dumps 的间隔时间（以毫秒为单位）。
