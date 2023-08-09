---
title: "PDC-持久化数据容器"
---

译者不是一名 Java 开发者。对于开发部分的翻译无法保证完全正确。  
建议您阅读[原文档](https://docs.papermc.io/paper/dev/pdc)，将本文（中文翻译）作为参考。  
如果您是 Java 开发者并熟悉 Bukkit 开发，您可以帮助改进此文档。  
您可以在 [GitHub Issue](https://github.com/poikcue/docs/issues/new) 留言或提交 [PR](https://github.com/poikcue/docs)    


持久化数据容器（Persistent Data Container）（PDC）可用于向各种对象附加自定义数据，比如在一个物品，实体或方块对象上存储数据。  
以下是可以使用 PDC 附加数据的类的完整列表：

- [Chunk](#chunk)
- [World](#world)
- [Entity](#entity)
- [TileState](#tilestate)
- [ItemMeta](#itemmeta)
- [Structure](#structure)

## 它是用来干什么的？
在之前，开发者借助于各式各样的方式向对象附加自定义数据：

- NBT tags（NBT标签）：需要通过反射来访问服务端底层，且长远来看通常是不可靠的。
- Lore与物品名：插件之间很容易发生冲突，并且读取速度也慢。

相较于在对象上存储数据的传统方式，PDC 的优点在于它更可靠、性能也更好。开发者在使用 PDC 时不需要亲自访问服务器底层，因此版本更新时出现兼容性问题的可能性很小。同时，开发者也无需在意数据的生命周期。以实体为例，通过 PDC 向某个实体附加的数据会在该实体卸载时被自动保存，不需要开发者手动完成。

### 译者注

物品、实体、方块等支持 `PDC` 的类都实现了 `PersistentDataHolder` 接口。凡是 `PersistentDataHolder` 类的实例，都绑定了一个 `PDC` 容器，可以通过 `getPersistentDataContainer` 方法获取。这就像是箱子和玩家这两个接口都继承了 `InventoryHolder` ，可以通过 `getInventory` 方法获取各自的物品栏。  


## 添加数据
要在 PDC 上存储数据，首先需要作一些准备。第一是准备用于标记数据项的 `NamespacedKey`，第二是获取对象的 `PersistentDataContainer`。第三则是准备好数据本身。

```java
// 创建一个 NamespacedKey
NamespacedKey key = new NamespacedKey(pluginInstance, "example-key");

ItemStack item = new ItemStack(Material.DIAMOND);
// ItemMeta 实现了 PersistentDataHolder 接口，所以我们可以获取其 PDC 容器
ItemMeta meta = item.getItemMeta();
meta.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");
item.setItemMeta(meta);
```

重复利用同一个 `NamespacedKey` 对象是不错的做法。 `NamespacedKey` 类可使用以下任意一种构造器实例化：

- 一个 `Plugin` 实例和一个 `String` 标识符
- 一个 `String` 命名空间（namespace）和一个 `String` 标识符

通常优先使用前者，因为它将自动使用插件的命名空间，不过，如果你想使用一个不同的命名空间或想读取其它插件所保存的数据，那么你可以选择后者。


## 获取数据
要从一个 PDC 中读取数据，你需要提供 `NamespacedKey` 和数据的 `PersistentDataType`。

```java
// 创建 NamespacedKey
NamespacedKey key = new NamespacedKey(pluginInstance, "example-key");

ItemStack item = ...; // 之前的物品
// 从 PDC 获取数据
PersistentDataContainer container = item.getItemMeta().getPersistentDataContainer();
if (container.has(key, PersistentDataType.STRING)) {
    String value = container.get(key, PersistentDataType.STRING);
    // 用 value 做些事情。
    player.sendMessage(Component.text(value));
}
```

## 数据类型

PDC 支持众多数据类型，如：
- `Byte`, `Byte Array`
- `Double`
- `Float`
- `Integer`, `Integer Array`
- `Long`, `Long Array`
- `Short`
- `String` 
- 以及`Tag Containers`。使用 Tag Containers 可以在 PDC 中嵌套 PDC。  
要创建一个新的 PersistentDataContainer，你可以使用：  
  ```java
  // 获取已有的 container
  PersistentDataContainer container = ...;
  // 创建一个新的 container
  PersistentDataContainer newContainer = container.getAdapterContext().newPersistentDataContainer();
  ```
  
### 自定义数据类型

使用原生的数据类型适配器时，已经可以存储很多类型的数据了（如上所列）。不过，如果你需要用到更复杂的数据类型，那么你可以实现自己的 `PersistentDataType`。`PersistentDataType` 的作用是将复杂类型的数据“分解”为多个原生适配器支持的数据，反之也可以将一系列基本类型数据组合成一个复杂类型的数据。  

以下是一个用此方式处理UUID的例子：

```java
public class UUIDDataType implements PersistentDataType<byte[], UUID> {
     @Override
     public Class<byte[]> getPrimitiveType() {
         return byte[].class;
     }

     @Override
     public Class<UUID> getComplexType() {
         return UUID.class;
     }

     @Override
     public byte[] toPrimitive(UUID complex, PersistentDataAdapterContext context) {
         ByteBuffer bb = ByteBuffer.wrap(new byte[16]);
         bb.putLong(complex.getMostSignificantBits());
         bb.putLong(complex.getLeastSignificantBits());
         return bb.array();
     }

     @Override
     public UUID fromPrimitive(byte[] primitive, PersistentDataAdapterContext context) {
         ByteBuffer bb = ByteBuffer.wrap(primitive);
         long firstLong = bb.getLong();
         long secondLong = bb.getLong();
         return new UUID(firstLong, secondLong);
     }
 }
```

为了使用你自己实现的 `PersistentDataType`，你必须在调用 PDC 的 set/get/has 方法时传入你的 `PersistentDataType` 实例作为参数。  
```java
container.set(key, new UUIDDataType(), uuid);
```

## 获取各种 `PersistentDataHolder` 所对应的 PDC 

- ##### Chunk
    - `Chunk#getPersistentDataContainer()`
- ##### World
    - `World#getPersistentDataContainer()`
- ##### Entity
    - `Entity#getPersistentDataContainer()`
- ##### TileState
    - 稍微有些复杂，因为你需要将方块对象转换为某个 `TileState` 子类的实例。  
      下方的写法不适用于所有方块，只适用于那些拥有 `TileEntity` 的方块。  
      ```java
        Block block = ...;
        if (block.getState() instanceof Chest chest) {
            chest.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");
            chest.update();
        }
      ```
      ::: tip 译者注  
      方块的“数据”其实是借助实体保存的。比如对一个箱子而言，实际上存在一个箱子 `TileEntity` 实体，这个实体保存了物品栏数据。同理，PDC 数据也存储在这个实体上。不是每一种方块都有“数据”。只有那些 `BlockState` 为 `TileState` 子类的方块才有“数据”。只能对这类方块获取其 PDC 数据。  
      :::  

- ##### Structure
    - `Structure#getPersistentDataContainer()`
- ##### ItemMeta
    - `ItemMeta#getPersistentDataContainer()`