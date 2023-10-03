---
title: "自定义事件"
---

创建自定义事件是为你的插件添加新功能的不错的方式。  
这将允许其它插件监听你的自定义事件并为你的插件添加新功能。

## 创建一个自定义事件

要创建一个自定义事件，你需要创建一个继承 `Event` 的类。每个事件都要求有一个 `HandlerList` 以存储所有监听该事件的监听器。  
唯一一种例外情况是某个事件被有意设计为不可监听以便作其他事件的父类所用。比如 `BlockPistonEvent` 没有 `HandlerList`，所以不能被监听。  
HandlerList 用于在事件被触发时，调用所有的监听器。

译注：虽然不能直接监听“活塞事件”，但是可以监听“活塞推出事件”和“活塞收回事件”。同理，尽管无法直接监听“玩家事件”，但是可以监听“玩家加入事件”、“玩家退出事件”等等。 `BlockPistonEvent` 是一个抽象类，自然不会用于直接监听。即使其不是抽象类也不能用于直接监听。

::: tip getHandlerList
尽管这一方法不是从 `Event` 类继承来的，你仍需要添加一个静态 `getHandlerList()` 方法并返回一个 `HandlerList`。  
若要使你的事件正常工作， `getHandlers` 和 `getHandlerList` 方法必须同时存在。  
:::

```java
public class PaperIsCoolEvent extends Event {

    private static final HandlerList HANDLER_LIST = new HandlerList();

    public static HandlerList getHandlerList() {
        return HANDLER_LIST;
    }

    @Override
    public HandlerList getHandlers() {
        return HANDLER_LIST;
    }
}
```

既然已经创建好了我们的事件，我们现在可以为它添加许多功能啦！  
比如：我们想要在这个 `PaperIsCoolEvent` 事件被调用时，在服务器内发送一条广播。

```java
public class PaperIsCoolEvent extends Event {

    private static final HandlerList HANDLER_LIST = new HandlerList();
    private Component message;

    public PaperIsCoolEvent(Component message) {
        this.message = message;
    }

    public static HandlerList getHandlerList() {
        return HANDLER_LIST;
    }

    @Override
    public HandlerList getHandlers() {
        return HANDLER_LIST;
    }

    public Component getMessage() {
        return this.message;
    }

    public void setMessage(Component message) {
        this.message = message;
    }
}
```

## 调用事件

既然我们已经创建好了这个事件，我们接下来就可以触发它。

```java
public class ExamplePlugin extends JavaPlugin {

    // ...

    public void callCoolPaperEvent() {
        PaperIsCoolEvent coolEvent = new PaperIsCoolEvent(Component.text("Paper is cool!"));
        coolEvent.callEvent();
        // 插件可以通过监听器来对消息作出更改。所以在事件被调用后我们需要重新获取消息内容。
        // 这一段代码允许其它插件按自己的需求更改广播消息。
        // 举个例子：某一插件通过监听该事件来为所有广播消息添加前缀。
        Bukkit.broadcast(coolEvent.getMessage());
    }
}
```

## 取消实现

如果你想要让你的事件可被取消，则可以令其实现 `Cancellable` 接口。

```java
public class PaperIsCoolEvent extends Event implements Cancellable {

    private static final HandlerList HANDLER_LIST = new HandlerList();
    private Component message;
    private boolean cancelled;

    // ...

    @Override
    public boolean isCancelled() {
        return this.cancelled;
    }

    @Override
    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }
}
```

现在，当事件被调用后，你就可以检查它是否被正常取消了。

```java
public class ExamplePlugin extends JavaPlugin {

    // ...

    public void callCoolPaperEvent() {
        PaperIsCoolEvent coolEvent = new PaperIsCoolEvent(Component.text("Paper is cool!"));
        coolEvent.callEvent();
        if (!coolEvent.isCancelled()) {
            Bukkit.broadcast(coolEvent.getMessage());
        }
    }
}
```

当一个事件是可以被取消的，并且事件已经被取消了，`Event#callEvent` 方法会返回 `false`。这就允许你直接在 if 语句中使用 `callEvent` 方法的返回值，无需再调用 `Cancellable#isCancelled` 方法手动检查了。

```java

public class ExamplePlugin extends JavaPlugin {

// ...

public class ExamplePlugin extends JavaPlugin {
    // ...
    public void callCoolPaperEvent() {
        PaperIsCoolEvent coolEvent = new PaperIsCoolEvent(Component.text("Paper is cool!"));
        if (coolEvent.callEvent()) { // 直接通过 callEvent 方法获取结果。
            Bukkit.broadcast(coolEvent.getMessage());
        }
    }
}

```
