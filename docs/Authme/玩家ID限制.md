AuthMe 支持对玩家 ID 的相关限制

## 玩家 ID 限制

玩家的 ID 可以与他们的 IP 地址相绑定， config.yml 中有个例子:

```yaml
# 想要激活玩家ID限制你需要
# 启用这里，并配置 AllowedRestrictedUser 设置项
AllowRestrictedUser: true
# 如果下列列表中玩家ID与IP不匹配
# 本插件将踢出玩家，玩家ID大小写不敏感
AllowedRestrictedUser:
  - admin;127.0.0.1
  - admin;123.45.67.89
  - billy;34.56.78.90
```

这代表玩家 `admin` 只能用 IP 地址 127.0.0.1 或者 123.45.67.89 进入游戏. 尝试用其它 IP 登录玩家 ID `admin` 将会被阻止. 本设置大小学不敏感, 例如玩家 `ADMIN`, `Admin`, 同样适用本限制

为了封禁一个玩家, 你可以给这个玩家 ID 搭配一个不可能存在的 IP 地址, 例如 "player;8.8.8.8" 可以让任何人都不能用 ID `Player` 进服

## 玩家 ID 放行

相对地, 你可以设置一些玩家 ID，本插件将完全放行这些 ID，不会做任何限制 config.yml 中有个例子:

```yaml
# 你可以在下面列出插件会完全放行的玩家ID
# 使用这些ID的玩家将完全不用注册或登录，使用自担风险!!
# 这个设置项可以与 BuildCraft 或者其它mod相兼容
# 它是大小写不敏感的!
UnrestrictedName:
  - npcplayer
  - othernpc
```

这些设置是大小写不敏感的，如果玩家用这些 ID 进服 (例如 `npcplayer`, 或者 `NpcPlayer`), AuthMe 不会让该玩家登录或者注册，也不会阻拦任何指令或者动作，这对于某些添加 NPC 进服的插件来说可能有点用
