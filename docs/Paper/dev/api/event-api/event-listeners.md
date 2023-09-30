---
title: "事件监听器"
---

 `Events`（事件）是在游戏中监听某一特定行为发生的有效方式。它们可以被服务器（或插件）触发。  
例如某名玩家加入了服务器，抑或是某个方块被破坏时，都将触发对应事件。  
插件能够触发自定义事件，例如玩家完成了某个插件自定义的任务，以供其它插件监听。  

## 你的监听器类

要进行监听，你需要创建一个类并实现 `Listener` 接口。  
类名可任取，不过建议使用与该类所监听的事件相关的名称。  

```java
public class ExampleListener implements Listener {
    // ...
}
```

## `@EventHandler`

要监听某一个事件，你需要创建一个含有 `@EventHandler` 注解 ( `annotation` ) 的方法。  
同理，方法名可任取，不过建议使用与该方法所监听的事件相关的名称，并避免无意义方法名。  

## 监听器方法

方法体无需返回任何值，因此建议使用 `void` 作为返回类型。  
监听器方法有且仅有一个参数，其类型为该方法所监听的事件的类型。      
   
```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        // ...
    }
}
```

::: tip
由于插件可以自定义事件，这里无法列出一份包括所有可监听事件的列表。不过在[这里](https://jd.papermc.io/paper/1.19/org/bukkit/event/Event.html)可以了解 Paper 所提供的 `Event` 类的全部子类。  
   
仅有实现了静态 `getHandlerList` 方法的事件才能被监听。   
:::

## 注册监听器

要注册监听器，你需要调用 `Bukkit.getPluginManager().registerEvents()` 并传入监听器类的实例和你的插件主类的实例。  
  
这一方法将会注册监听器，并允许它监听事件。    
这一方法通常写在你的插件主类的 `onEnable()` 方法中，此时监听器将在服务器开始计算游戏刻 (tick) 时注册。  

```java
public class ExamplePlugin extends JavaPlugin {

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(new ExampleListener(), this);
    }
}
```

## EventPriority

你也可以指定事件监听器的优先级。  
    
```
public class ExampleListener implements Listener {

    @EventHandler(priority = EventPriority.HIGH)
    public void onPlayerJoin(PlayerJoinEvent event) {
        // ...
    }
}
```
你可以选择六个不同的优先级：
- `EventPriority.LOWEST`
- `EventPriority.LOW`
- `EventPriority.NORMAL`
- `EventPriority.HIGH`
- `EventPriority.HIGHEST`
- `EventPriority.MONITOR`

实际上优先级的顺序与直觉相反。优先级 **越高**，事件被调用就 **越晚**。  
例如：你的插件需要对某个事件一锤定音，此后不希望被其他监听器再作覆盖，则需要使用`EventPriority.HIGHEST`。

::: tip
`MONITOR` 的优先级常常用于获得其他插件对事件的修改结果，而不是亲自修改它。具有此优先级的监听器在所有监听器中排在最后。  
因此这样的监听器可获悉先前插件对事件的修改，例如事件是否被取消（cancellation）和对事件中某些字段的修改（modification）。  
:::

## 取消事件

一些事件可以取消，阻止某些行为发生。这些事件类实现了 `Cancellable`。  

译注：事件的触发时机是在某个行为发生以前，当事件监听器全部运行完毕后，被插件所修改过的事件结果才会真正发生。
    
```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        event.setCancelled(true);
    }
}
```

::: danger 
在你的插件取消某事件之前，请思考一下其它插件是否已经取消或更改了该事件。    
请先检查事件的各个字段再进行修改！    
:::
  
上面的例子会取消事件，这意味着玩家无法加入到服务器中。当一个事件被取消后，其他监听器将继续按顺序被调用下去，除非某个监听器在 `@EventHandler` 注解中添加了 `ignoreCancelled = true` 以忽略已取消的事件。    
  
如欲忽略已取消的事件，可以这样写：  
```
public class ExampleListener implements Listener {

    @EventHandler(ignoreCancelled = true)
    public void onPlayerJoin(PlayerJoinEvent event) {
        // ...
    }
}
```
