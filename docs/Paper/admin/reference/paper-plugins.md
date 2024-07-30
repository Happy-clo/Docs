---
slug: /reference/paper-plugins
description: A guide to the ins and outs of Paper plugins.
---

# Paper 插件

此文档页面旨在解释 Paper 插件可能插入的所有新语义和可能的困惑。

:::info

开发者可以在 [这里](docs/paper/dev/getting-started/paper-plugins.mdx) 获取有关 Paper 插件的更多信息。

:::

## 它们是什么？

Paper 插件是由 Paper 的新插件加载框架加载的插件。开发者使用 Paper 插件来利用 Mojang 提供的现代系统，例如数据包。

![插件列表](assets/plugin-list.png)

## 有什么区别？

启用后，Paper 插件与 Bukkit 插件**完全相同**。这使插件仍然可以完全互相通信和支持，这意味着即使插件是 Bukkit 或 Paper 插件，它们都能够相互依赖。

Paper 插件仅支持通过 Paper 的插件加载器加载，可能使用 Bukkit 插件无法使用的新 API。

### 如何添加 Paper 插件？

Paper 插件的添加方法与 Bukkit 插件相同，因此，你可以按照[本指南](docs/paper/admin/getting-started/adding-plugins.md)操作。

### 循环插件加载

随着 Paper 插件的引入，Paper 引入了一个修复了一些奇怪问题的新插件加载器。然而，这导致了插件之间的[循环加载](docs/paper/dev/getting-started/paper-plugins.mdx#cyclic-plugin-loading)不再被支持。

如果 Paper 检测到循环，服务器将会以错误关闭。

:::danger[遗留]

如果你的服务器**需要**这种循环加载，你可以通过添加启动标志 [`-Dpaper.useLegacyPluginLoading=true`](system-properties.md#paperuselegacypluginloading) 来启用它。
请注意，未来可能不再支持该功能。

:::
