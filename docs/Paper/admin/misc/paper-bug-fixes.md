---
slug: /misc/paper-bug-fixes
description: An explanation of which Vanilla bugs we fix in Paper.
---

# Paper Bug Fixes

Paper 修复了 Minecraft 中的许多游戏和技术问题。最常见的修复是 TNT 复制和基岩破坏。

## Vanilla bug fixes

Paper 修复了许多 Mojang 未打算修复的 Vanilla 漏洞。这些漏洞被修复是为了修正行为或防止服务器上的滥用和不稳定。我们的一些修复是可配置的，因为我们理解某些服务器可能希望保留 Vanilla 行为。你可以在[全局配置](/docs/paper/admin/reference/configuration/global-configuration.mdx)和[世界配置](/docs/paper/admin/reference/configuration/world-configuration.mdx)中找到这些配置选项。

### 什么是预期行为与漏洞？

当我们收到一个问题报告时，我们会检查 Mojang 的问题跟踪器。如果问题在那里被报告，我们会检查它是否：

1. 已被确认是一个漏洞
2. 已分配了优先级

如果它符合这两个标准，我们将接受更改来修复漏洞，因为 Mojang 修复它们可能需要很长时间（有时是几年）。如果 Mojang 拒绝了一个问题，我们通常不会“修复”它，因为这是预期行为。

## 复制漏洞

因为 TNT 复制被认为是一种自动化采矿形式，而不是资源复制，我们提供了一个选项来恢复它。不幸的是，这也重新启用了地毯和铁轨复制，我们通常不会为这些提供配置，但这是相同的漏洞，所以我们别无选择。然而，配置选项如下：

```yaml
unsupported-settings:
  allow-piston-duplication: true
```

我们还允许你恢复使用末地传送门复制重力方块（如沙子）的能力。这不推荐，因为它可能会导致服务器问题，但我们确实提供了一个配置选项来恢复此功能：

```yaml
unsupported-settings:
  allow-unsafe-end-portal-teleportation: true
```

同样，我们还允许你启用基于线的复制漏洞，使用以下配置选项：

```yaml
unsupported-settings:
  allow-tripwire-disarming-exploits: true
```

这是一个[Mojang 长期存在的漏洞](https://bugs.mojang.com/browse/MC-129055)，尚未被修复。我们在 Paper 中修复了它，但我们提供了一个配置选项来恢复 Vanilla 行为。

## 方块破坏

我们还修复了破坏基岩和末地传送门框架的能力。我们也提供了一个配置选项来恢复此功能，但不推荐：

```yaml
unsupported-settings:
  allow-permanent-block-break-exploits: true
```

## 后记

如果你在启用这些设置时遇到问题，我们将不提供支持，因为它们可能导致意外的副作用。这些设置也不能保证在未来得到支持，其行为可能会随时更改或删除。

有关不提供许多复制漏洞配置选项的遗留原因，请参见：
[#3724](https://github.com/PaperMC/Paper/issues/3724)
