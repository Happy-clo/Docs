# 概览

items.yml 是一个客制化的配置文件，用于各种 GUI 和消息中。

本 wiki 页面可能经常会过期，因为语言文件更新和其他的东西一直被加进来，但是这不是一个复杂的文件。你只是在编写你想要物品看起来像什么样子。

大多数物品来自 /p, /profess, /waypoints, 银行, 铁砧, /friend, /party, /skills 菜单。 

**有些重要的东西需要提前说明，你需要使用默认样例中的占位符。如果你想要正确显示的话，看看默认模板的内置占位符。他们都在默认的 items.yml 中**

# 默认配置（尽可能勤快的更新）

```yaml
BACK_TO_PROFESS_SELECTION:
    item: RED_STAINED_GLASS_PANE
    name: '&aBack to Class Selection'
    lore: {}

PREVIOUS_PAGE:
    item: ARROW
    name: '&aPrevious'
    lore: {}

NEXT_PAGE:
    item: ARROW
    name: '&aNext'
    lore: {}

OFFSET_PREVIOUS:
    item: PLAYER_HEAD
    texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmQ2OWUwNmU1ZGFkZmQ4NGU1ZjNkMWMyMTA2M2YyNTUzYjJmYTk0NWVlMWQ0ZDcxNTJmZGM1NDI1YmMxMmE5In19fQ==
    name: '&aPrevious'
    lore: {}

OFFSET_NEXT:
    item: PLAYER_HEAD
    texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTliZjMyOTJlMTI2YTEwNWI1NGViYTcxM2FhMWIxNTJkNTQxYTFkODkzODgyOWM1NjM2NGQxNzhlZDIyYmYifX19
    name: '&aNext'
    lore: {}

WAYPOINT_ITEM:
    item: GRAY_DYE
    name: '&a{waypoint}'
    lore:
    - '&7&oClick to teleport to this'
    - '&7&owaypoint for &b&o{stellium} &7&ostellium.'

GOLD_COIN:
    item: GOLD_NUGGET
    name: '&6Gold Coin'
    lore:
    - '&eWorth: 1g'

NOTE:
    item: PAPER
    name: '&6Note'
    lore:
    - '&eWorth: {worth}g'

DEPOSIT_ITEM:
    item: BOOK
    name: '&aDeposit {worth}g'
    lore: {}

GOLD_POUCH:
    item: LEATHER
    name: '&fGold Pouch'
    lore:
    - '&7Right-Click to open.'

MOB_GOLD_POUCH:
    item: LEATHER
    name: '&fGold Pouch'
    lore:
    - '&7Right-Click to open.'

ANVIL_FILL:
    item: DIAMOND_HOE
    damage: 15
    lore: {}
    name: '&a'

ANVIL_ARROW:
    item: DIAMOND_HOE
    damage: 16
    lore: {}
    name: '&a'

ANVIL_PLUS:
    item: DIAMOND_HOE
    damage: 17
    lore: {}
    name: '&a'

APPLY_TOOL_GEM:
    item: LIME_STAINED_GLASS_PANE
    lore: {}
    name: '&aClick to apply a random enchant!'

OFFLINE_FRIEND:
    item: PLAYER_HEAD
    name: '&c[Offline] &f{name}'
    lore:
    - '&7Last Seen: {last_seen} ago'
    - ''
    - '&cRight click to remove.'

ONLINE_FRIEND:
    item: PLAYER_HEAD
    name: '&a[Online] &f{name}'
    lore:
    - '&7Level {level} {class}'
    - '&7Online Since: {online_since}'
    - ''
    - '&cRight click to remove.'

NO_FRIEND:
    item: GRAY_STAINED_GLASS_PANE
    name: '&cNo Friend'
    lore: {}
    
NEW_FRIEND_REQUEST:
    item: WRITABLE_BOOK
    name: '&aNew Friend Request'
    lore: {}
    
NEW_PARTY_INVITE:
    item: WRITABLE_BOOK
    name: '&aInvite a player'
    lore: {}

ONLINE_PARTY_MEMBER_OWNER:
    item: PLAYER_HEAD
    name: '&f{name}'
    lore:
    - '&7Level {level} {class}'
    - '&7Online Since: {online_since}'
    - ''
    - '&cRight click to kick him.'

PARTY_MEMBER:
    item: PLAYER_HEAD
    name: '&f{name}'
    lore:
    - '&7Level {level} {class}'
    - '&7Online Since: {online_since}'

NO_PARTY_MEMBER:
    item: GRAY_STAINED_GLASS_PANE
    name: '&cNo Member'
    lore: {}

LEAVE_PARTY:
    item: REDSTONE
    name: '&cLeave Party'
    lore: {}

UPGRADE_SKILL:
    item: GREEN_STAINED_GLASS_PANE
    name: '&a&lUPGRADE {skill}'
    lore:
    - '&7Costs 1 skill point.'

SKILL_SLOT:
    item: GRAY_DYE
    name: '&aSkill Slot {slot}'
    lore:
    - '&7Current Skill: &6{skill}'
    - ''
    - '&7&oRemember you can cast this spell'
    - '&7&oby pressing [F] followed by [{index}].'
    - ''
    - '&e► Left click to bind {selected}.'
    - '&e► Right click to unbind.'
```