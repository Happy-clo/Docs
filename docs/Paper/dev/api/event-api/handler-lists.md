---
title: "HandlerList"
---

每个可以被监听的 `Event`（事件）都有一个 `HandlerList` 来存储所有监听该事件的监听器。  
事件被触发的过程本质上是按照优先级顺序依次调用事件类的 `HandlerList` 中所存储的监听器。

## 获取某一事件的 HandlerList

要获取某一事件的 HandlerList，可以对某个事件类调用静态方法 `getHandlerList()`。

```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        HandlerList handlerList = event.getHandlerList();
        // ...
    }

    // Or:

    public ExampleListener() {
        // Access the handler list through the static getter
        HandlerList handlerList = PlayerJoinEvent.getHandlerList();
        // ...
    }
}
```

## 注销一个监听器

要注销一个监听器，你可以对监听器注册所在的 `HandlerList` 调用 `unregister()` 方法。

```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        HandlerList handlerList = event.getHandlerList();
        handlerList.unregister(this);
        // ...
    }

    // 或者：

    public ExampleListener() {
        // 通过静态 getter 访问 HandlerList
        HandlerList handlerList = PlayerJoinEvent.getHandlerList();
        handlerList.unregister(this);
        // 的确，这是一个愚蠢的例子...
    }
}
```

为了便于使用，你也可以通过 `Listener` 或 `Plugin` 对象进行注销。

译注：对于前者，将会注销某个 `Listener` 类内所有监听器方法。对于后者，将会注销某个插件所注册的全部事件监听器。

你还可以对 `HandlerList` 对象调用 `unregisterAll()` 方法以注销监听某一事件的所有监听器。
