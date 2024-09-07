"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,m=c["".concat(o,".").concat(d)]||c[d]||v[d]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"\u4e8b\u4ef6\u76d1\u542c\u5668"},l=void 0,p={unversionedId:"Paper/dev/api/event-api/event-listeners",id:"Paper/dev/api/event-api/event-listeners",title:"\u4e8b\u4ef6\u76d1\u542c\u5668",description:"Events\uff08\u4e8b\u4ef6\uff09\u662f\u5728\u6e38\u620f\u4e2d\u76d1\u542c\u67d0\u4e00\u7279\u5b9a\u884c\u4e3a\u53d1\u751f\u7684\u6709\u6548\u65b9\u5f0f\u3002\u5b83\u4eec\u53ef\u4ee5\u88ab\u670d\u52a1\u5668\uff08\u6216\u63d2\u4ef6\uff09\u89e6\u53d1\u3002",source:"@site/docs/Paper/dev/api/event-api/event-listeners.md",sourceDirName:"Paper/dev/api/event-api",slug:"/Paper/dev/api/event-api/event-listeners",permalink:"/Paper/dev/api/event-api/event-listeners",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8b\u4ef6\u76d1\u542c\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",permalink:"/Paper/dev/api/event-api/custom-events"},next:{title:"HandlerList",permalink:"/Paper/dev/api/event-api/handler-lists"}},o={},u=[{value:"\u4f60\u7684\u76d1\u542c\u5668\u7c7b",id:"\u4f60\u7684\u76d1\u542c\u5668\u7c7b",level:2},{value:"<code>@EventHandler</code>",id:"eventhandler",level:2},{value:"\u76d1\u542c\u5668\u65b9\u6cd5",id:"\u76d1\u542c\u5668\u65b9\u6cd5",level:2},{value:"\u6ce8\u518c\u76d1\u542c\u5668",id:"\u6ce8\u518c\u76d1\u542c\u5668",level:2},{value:"EventPriority",id:"eventpriority",level:2},{value:"\u53d6\u6d88\u4e8b\u4ef6",id:"\u53d6\u6d88\u4e8b\u4ef6",level:2}],s={toc:u},c="wrapper";function v(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Events"),"\uff08\u4e8b\u4ef6\uff09\u662f\u5728\u6e38\u620f\u4e2d\u76d1\u542c\u67d0\u4e00\u7279\u5b9a\u884c\u4e3a\u53d1\u751f\u7684\u6709\u6548\u65b9\u5f0f\u3002\u5b83\u4eec\u53ef\u4ee5\u88ab\u670d\u52a1\u5668\uff08\u6216\u63d2\u4ef6\uff09\u89e6\u53d1\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\u67d0\u540d\u73a9\u5bb6\u52a0\u5165\u4e86\u670d\u52a1\u5668\uff0c\u6291\u6216\u662f\u67d0\u4e2a\u65b9\u5757\u88ab\u7834\u574f\u65f6\uff0c\u90fd\u5c06\u89e6\u53d1\u5bf9\u5e94\u4e8b\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u63d2\u4ef6\u80fd\u591f\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u4f8b\u5982\u73a9\u5bb6\u5b8c\u6210\u4e86\u67d0\u4e2a\u63d2\u4ef6\u81ea\u5b9a\u4e49\u7684\u4efb\u52a1\uff0c\u4ee5\u4f9b\u5176\u5b83\u63d2\u4ef6\u76d1\u542c\u3002"),(0,a.kt)("h2",{id:"\u4f60\u7684\u76d1\u542c\u5668\u7c7b"},"\u4f60\u7684\u76d1\u542c\u5668\u7c7b"),(0,a.kt)("p",null,"\u8981\u8fdb\u884c\u76d1\u542c\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7c7b\u5e76\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," \u63a5\u53e3\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7c7b\u540d\u53ef\u4efb\u53d6\uff0c\u4e0d\u8fc7\u5efa\u8bae\u4f7f\u7528\u4e0e\u8be5\u7c7b\u6240\u76d1\u542c\u7684\u4e8b\u4ef6\u76f8\u5173\u7684\u540d\u79f0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleListener implements Listener {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"eventhandler"},(0,a.kt)("inlineCode",{parentName:"h2"},"@EventHandler")),(0,a.kt)("p",null,"\u8981\u76d1\u542c\u67d0\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"@EventHandler")," \u6ce8\u89e3 ( ",(0,a.kt)("inlineCode",{parentName:"p"},"annotation")," ) \u7684\u65b9\u6cd5\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u540c\u7406\uff0c\u65b9\u6cd5\u540d\u53ef\u4efb\u53d6\uff0c\u4e0d\u8fc7\u5efa\u8bae\u4f7f\u7528\u4e0e\u8be5\u65b9\u6cd5\u6240\u76d1\u542c\u7684\u4e8b\u4ef6\u76f8\u5173\u7684\u540d\u79f0\uff0c\u5e76\u907f\u514d\u65e0\u610f\u4e49\u65b9\u6cd5\u540d\u3002"),(0,a.kt)("h2",{id:"\u76d1\u542c\u5668\u65b9\u6cd5"},"\u76d1\u542c\u5668\u65b9\u6cd5"),(0,a.kt)("p",null,"\u65b9\u6cd5\u4f53\u65e0\u9700\u8fd4\u56de\u4efb\u4f55\u503c\uff0c\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," \u4f5c\u4e3a\u8fd4\u56de\u7c7b\u578b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u76d1\u542c\u5668\u65b9\u6cd5\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5176\u7c7b\u578b\u4e3a\u8be5\u65b9\u6cd5\u6240\u76d1\u542c\u7684\u4e8b\u4ef6\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleListener implements Listener {\n\n    @EventHandler\n    public void onPlayerJoin(PlayerJoinEvent event) {\n        // ...\n    }\n}\n")),(0,a.kt)("p",null,"::: tip\n\u7531\u4e8e\u63d2\u4ef6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u8fd9\u91cc\u65e0\u6cd5\u5217\u51fa\u4e00\u4efd\u5305\u62ec\u6240\u6709\u53ef\u76d1\u542c\u4e8b\u4ef6\u7684\u5217\u8868\u3002\u4e0d\u8fc7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://jd.papermc.io/paper/1.19/org/bukkit/event/Event.html"},"\u8fd9\u91cc"),"\u53ef\u4ee5\u4e86\u89e3 Paper \u6240\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," \u7c7b\u7684\u5168\u90e8\u5b50\u7c7b\u3002"),(0,a.kt)("p",null,"\u4ec5\u6709\u5b9e\u73b0\u4e86\u9759\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"getHandlerList")," \u65b9\u6cd5\u7684\u4e8b\u4ef6\u624d\u80fd\u88ab\u76d1\u542c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",":::"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u76d1\u542c\u5668"},"\u6ce8\u518c\u76d1\u542c\u5668"),(0,a.kt)("p",null,"\u8981\u6ce8\u518c\u76d1\u542c\u5668\uff0c\u4f60\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bukkit.getPluginManager().registerEvents()")," \u5e76\u4f20\u5165\u76d1\u542c\u5668\u7c7b\u7684\u5b9e\u4f8b\u548c\u4f60\u7684\u63d2\u4ef6\u4e3b\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e00\u65b9\u6cd5\u5c06\u4f1a\u6ce8\u518c\u76d1\u542c\u5668\uff0c\u5e76\u5141\u8bb8\u5b83\u76d1\u542c\u4e8b\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u4e00\u65b9\u6cd5\u901a\u5e38\u5199\u5728\u4f60\u7684\u63d2\u4ef6\u4e3b\u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onEnable()")," \u65b9\u6cd5\u4e2d\uff0c\u6b64\u65f6\u76d1\u542c\u5668\u5c06\u5728\u670d\u52a1\u5668\u5f00\u59cb\u8ba1\u7b97\u6e38\u620f\u523b (tick) \u65f6\u6ce8\u518c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ExamplePlugin extends JavaPlugin {\n\n    @Override\n    public void onEnable() {\n        getServer().getPluginManager().registerEvents(new ExampleListener(), this);\n    }\n}\n")),(0,a.kt)("h2",{id:"eventpriority"},"EventPriority"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public class ExampleListener implements Listener {\n\n    @EventHandler(priority = EventPriority.HIGH)\n    public void onPlayerJoin(PlayerJoinEvent event) {\n        // ...\n    }\n}\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u516d\u4e2a\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.LOWEST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.LOW")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.NORMAL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.HIGH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.HIGHEST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventPriority.MONITOR"))),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\u4f18\u5148\u7ea7\u7684\u987a\u5e8f\u4e0e\u76f4\u89c9\u76f8\u53cd\u3002\u4f18\u5148\u7ea7 ",(0,a.kt)("strong",{parentName:"p"},"\u8d8a\u9ad8"),"\uff0c\u4e8b\u4ef6\u88ab\u8c03\u7528\u5c31 ",(0,a.kt)("strong",{parentName:"p"},"\u8d8a\u665a"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\uff1a\u4f60\u7684\u63d2\u4ef6\u9700\u8981\u5bf9\u67d0\u4e2a\u4e8b\u4ef6\u4e00\u9524\u5b9a\u97f3\uff0c\u6b64\u540e\u4e0d\u5e0c\u671b\u88ab\u5176\u4ed6\u76d1\u542c\u5668\u518d\u4f5c\u8986\u76d6\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"EventPriority.HIGHEST"),"\u3002"),(0,a.kt)("p",null,"::: tip\n",(0,a.kt)("inlineCode",{parentName:"p"},"MONITOR")," \u7684\u4f18\u5148\u7ea7\u5e38\u5e38\u7528\u4e8e\u83b7\u5f97\u5176\u4ed6\u63d2\u4ef6\u5bf9\u4e8b\u4ef6\u7684\u4fee\u6539\u7ed3\u679c\uff0c\u800c\u4e0d\u662f\u4eb2\u81ea\u4fee\u6539\u5b83\u3002\u5177\u6709\u6b64\u4f18\u5148\u7ea7\u7684\u76d1\u542c\u5668\u5728\u6240\u6709\u76d1\u542c\u5668\u4e2d\u6392\u5728\u6700\u540e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u8fd9\u6837\u7684\u76d1\u542c\u5668\u53ef\u83b7\u6089\u5148\u524d\u63d2\u4ef6\u5bf9\u4e8b\u4ef6\u7684\u4fee\u6539\uff0c\u4f8b\u5982\u4e8b\u4ef6\u662f\u5426\u88ab\u53d6\u6d88\uff08cancellation\uff09\u548c\u5bf9\u4e8b\u4ef6\u4e2d\u67d0\u4e9b\u5b57\u6bb5\u7684\u4fee\u6539\uff08modification\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",":::"),(0,a.kt)("h2",{id:"\u53d6\u6d88\u4e8b\u4ef6"},"\u53d6\u6d88\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u4e00\u4e9b\u4e8b\u4ef6\u53ef\u4ee5\u53d6\u6d88\uff0c\u963b\u6b62\u67d0\u4e9b\u884c\u4e3a\u53d1\u751f\u3002\u8fd9\u4e9b\u4e8b\u4ef6\u7c7b\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Cancellable"),"\u3002"),(0,a.kt)("p",null,"\u8bd1\u6ce8\uff1a\u4e8b\u4ef6\u7684\u89e6\u53d1\u65f6\u673a\u662f\u5728\u67d0\u4e2a\u884c\u4e3a\u53d1\u751f\u4ee5\u524d\uff0c\u5f53\u4e8b\u4ef6\u76d1\u542c\u5668\u5168\u90e8\u8fd0\u884c\u5b8c\u6bd5\u540e\uff0c\u88ab\u63d2\u4ef6\u6240\u4fee\u6539\u8fc7\u7684\u4e8b\u4ef6\u7ed3\u679c\u624d\u4f1a\u771f\u6b63\u53d1\u751f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleListener implements Listener {\n\n    @EventHandler\n    public void onPlayerJoin(PlayerJoinEvent event) {\n        event.setCancelled(true);\n    }\n}\n")),(0,a.kt)("p",null,"::: danger\n\u5728\u4f60\u7684\u63d2\u4ef6\u53d6\u6d88\u67d0\u4e8b\u4ef6\u4e4b\u524d\uff0c\u8bf7\u601d\u8003\u4e00\u4e0b\u5176\u5b83\u63d2\u4ef6\u662f\u5426\u5df2\u7ecf\u53d6\u6d88\u6216\u66f4\u6539\u4e86\u8be5\u4e8b\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8bf7\u5148\u68c0\u67e5\u4e8b\u4ef6\u7684\u5404\u4e2a\u5b57\u6bb5\u518d\u8fdb\u884c\u4fee\u6539\uff01",(0,a.kt)("br",{parentName:"p"}),"\n",":::"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4f1a\u53d6\u6d88\u4e8b\u4ef6\uff0c\u8fd9\u610f\u5473\u7740\u73a9\u5bb6\u65e0\u6cd5\u52a0\u5165\u5230\u670d\u52a1\u5668\u4e2d\u3002\u5f53\u4e00\u4e2a\u4e8b\u4ef6\u88ab\u53d6\u6d88\u540e\uff0c\u5176\u4ed6\u76d1\u542c\u5668\u5c06\u7ee7\u7eed\u6309\u987a\u5e8f\u88ab\u8c03\u7528\u4e0b\u53bb\uff0c\u9664\u975e\u67d0\u4e2a\u76d1\u542c\u5668\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@EventHandler")," \u6ce8\u89e3\u4e2d\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreCancelled = true")," \u4ee5\u5ffd\u7565\u5df2\u53d6\u6d88\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u6b32\u5ffd\u7565\u5df2\u53d6\u6d88\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public class ExampleListener implements Listener {\n\n    @EventHandler(ignoreCancelled = true)\n    public void onPlayerJoin(PlayerJoinEvent event) {\n        // ...\n    }\n}\n")))}v.isMDXComponent=!0}}]);