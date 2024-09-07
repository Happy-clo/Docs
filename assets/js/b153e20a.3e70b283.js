"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,c=u["".concat(o,".").concat(d)]||u[d]||k[d]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"PDC-\u6301\u4e45\u5316\u6570\u636e\u5bb9\u5668"},l=void 0,p={unversionedId:"Paper/dev/api/index",id:"Paper/dev/api/index",title:"PDC-\u6301\u4e45\u5316\u6570\u636e\u5bb9\u5668",description:"\u8bd1\u8005\u4e0d\u662f\u4e00\u540d Java \u5f00\u53d1\u8005\u3002\u5bf9\u4e8e\u5f00\u53d1\u90e8\u5206\u7684\u7ffb\u8bd1\u65e0\u6cd5\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002",source:"@site/docs/Paper/dev/api/index.md",sourceDirName:"Paper/dev/api",slug:"/Paper/dev/api/",permalink:"/Paper/dev/api/",draft:!1,tags:[],version:"current",frontMatter:{title:"PDC-\u6301\u4e45\u5316\u6570\u636e\u5bb9\u5668"},sidebar:"tutorialSidebar",previous:{title:"Paper Bug Fixes",permalink:"/misc/paper-bug-fixes"},next:{title:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",permalink:"/Paper/dev/api/event-api/custom-events"}},o={},m=[{value:"\u5b83\u662f\u7528\u6765\u5e72\u4ec0\u4e48\u7684\uff1f",id:"\u5b83\u662f\u7528\u6765\u5e72\u4ec0\u4e48\u7684",level:2},{value:"\u8bd1\u8005\u6ce8",id:"\u8bd1\u8005\u6ce8",level:3},{value:"\u6dfb\u52a0\u6570\u636e",id:"\u6dfb\u52a0\u6570\u636e",level:2},{value:"\u83b7\u53d6\u6570\u636e",id:"\u83b7\u53d6\u6570\u636e",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",level:3},{value:"\u83b7\u53d6\u5404\u79cd <code>PersistentDataHolder</code> \u6240\u5bf9\u5e94\u7684 PDC",id:"\u83b7\u53d6\u5404\u79cd-persistentdataholder-\u6240\u5bf9\u5e94\u7684-pdc",level:2}],s={toc:m},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8bd1\u8005\u4e0d\u662f\u4e00\u540d Java \u5f00\u53d1\u8005\u3002\u5bf9\u4e8e\u5f00\u53d1\u90e8\u5206\u7684\u7ffb\u8bd1\u65e0\u6cd5\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae\u60a8\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"https://docs.papermc.io/paper/dev/pdc"},"\u539f\u6587\u6863"),"\uff0c\u5c06\u672c\u6587\uff08\u4e2d\u6587\u7ffb\u8bd1\uff09\u4f5c\u4e3a\u53c2\u8003\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u60a8\u662f Java \u5f00\u53d1\u8005\u5e76\u719f\u6089 Bukkit \u5f00\u53d1\uff0c\u60a8\u53ef\u4ee5\u5e2e\u52a9\u6539\u8fdb\u6b64\u6587\u6863\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Happy-clo/Docs/issues/new"},"GitHub Issue")," \u7559\u8a00\u6216\u63d0\u4ea4 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Happy-clo/Docs/"},"PR"),"  ")),(0,r.kt)("p",null,"\u6301\u4e45\u5316\u6570\u636e\u5bb9\u5668\uff08Persistent Data Container\uff09\uff08PDC\uff09\u53ef\u7528\u4e8e\u5411\u5404\u79cd\u5bf9\u8c61\u9644\u52a0\u81ea\u5b9a\u4e49\u6570\u636e\uff0c\u6bd4\u5982\u5728\u4e00\u4e2a\u7269\u54c1\uff0c\u5b9e\u4f53\u6216\u65b9\u5757\u5bf9\u8c61\u4e0a\u5b58\u50a8\u6570\u636e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u662f\u53ef\u4ee5\u4f7f\u7528 PDC \u9644\u52a0\u6570\u636e\u7684\u7c7b\u7684\u5b8c\u6574\u5217\u8868\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chunk"},"Chunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#world"},"World")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#entity"},"Entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tilestate"},"TileState")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#itemmeta"},"ItemMeta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structure"},"Structure"))),(0,r.kt)("h2",{id:"\u5b83\u662f\u7528\u6765\u5e72\u4ec0\u4e48\u7684"},"\u5b83\u662f\u7528\u6765\u5e72\u4ec0\u4e48\u7684\uff1f"),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\uff0c\u5f00\u53d1\u8005\u501f\u52a9\u4e8e\u5404\u5f0f\u5404\u6837\u7684\u65b9\u5f0f\u5411\u5bf9\u8c61\u9644\u52a0\u81ea\u5b9a\u4e49\u6570\u636e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NBT tags\uff08NBT \u6807\u7b7e\uff09\uff1a\u9700\u8981\u901a\u8fc7\u53cd\u5c04\u6765\u8bbf\u95ee\u670d\u52a1\u7aef\u5e95\u5c42\uff0c\u4e14\u957f\u8fdc\u6765\u770b\u901a\u5e38\u662f\u4e0d\u53ef\u9760\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"Lore \u4e0e\u7269\u54c1\u540d\uff1a\u63d2\u4ef6\u4e4b\u95f4\u5f88\u5bb9\u6613\u53d1\u751f\u51b2\u7a81\uff0c\u5e76\u4e14\u8bfb\u53d6\u901f\u5ea6\u4e5f\u6162\u3002")),(0,r.kt)("p",null,"\u76f8\u8f83\u4e8e\u5728\u5bf9\u8c61\u4e0a\u5b58\u50a8\u6570\u636e\u7684\u4f20\u7edf\u65b9\u5f0f\uff0cPDC \u7684\u4f18\u70b9\u5728\u4e8e\u5b83\u66f4\u53ef\u9760\u3001\u6027\u80fd\u4e5f\u66f4\u597d\u3002\u5f00\u53d1\u8005\u5728\u4f7f\u7528 PDC \u65f6\u4e0d\u9700\u8981\u4eb2\u81ea\u8bbf\u95ee\u670d\u52a1\u5668\u5e95\u5c42\uff0c\u56e0\u6b64\u7248\u672c\u66f4\u65b0\u65f6\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u7684\u53ef\u80fd\u6027\u5f88\u5c0f\u3002\u540c\u65f6\uff0c\u5f00\u53d1\u8005\u4e5f\u65e0\u9700\u5728\u610f\u6570\u636e\u7684\u751f\u547d\u5468\u671f\u3002\u4ee5\u5b9e\u4f53\u4e3a\u4f8b\uff0c\u901a\u8fc7 PDC \u5411\u67d0\u4e2a\u5b9e\u4f53\u9644\u52a0\u7684\u6570\u636e\u4f1a\u5728\u8be5\u5b9e\u4f53\u5378\u8f7d\u65f6\u88ab\u81ea\u52a8\u4fdd\u5b58\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"\u8bd1\u8005\u6ce8"},"\u8bd1\u8005\u6ce8"),(0,r.kt)("p",null,"\u7269\u54c1\u3001\u5b9e\u4f53\u3001\u65b9\u5757\u7b49\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"PDC")," \u7684\u7c7b\u90fd\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataHolder")," \u63a5\u53e3\u3002\u51e1\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataHolder")," \u7c7b\u7684\u5b9e\u4f8b\uff0c\u90fd\u7ed1\u5b9a\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"PDC")," \u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"getPersistentDataContainer")," \u65b9\u6cd5\u83b7\u53d6\u3002\u8fd9\u5c31\u50cf\u662f\u7bb1\u5b50\u548c\u73a9\u5bb6\u8fd9\u4e24\u4e2a\u63a5\u53e3\u90fd\u7ee7\u627f\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"InventoryHolder")," \uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"getInventory")," \u65b9\u6cd5\u83b7\u53d6\u5404\u81ea\u7684\u7269\u54c1\u680f\u3002"),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u6570\u636e"},"\u6dfb\u52a0\u6570\u636e"),(0,r.kt)("p",null,"\u8981\u5728 PDC \u4e0a\u5b58\u50a8\u6570\u636e\uff0c\u9996\u5148\u9700\u8981\u4f5c\u4e00\u4e9b\u51c6\u5907\u3002\u7b2c\u4e00\u662f\u51c6\u5907\u7528\u4e8e\u6807\u8bb0\u6570\u636e\u9879\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"NamespacedKey"),"\uff0c\u7b2c\u4e8c\u662f\u83b7\u53d6\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer"),"\u3002\u7b2c\u4e09\u5219\u662f\u51c6\u5907\u597d\u6570\u636e\u672c\u8eab\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521b\u5efa\u4e00\u4e2a NamespacedKey\nNamespacedKey key = new NamespacedKey(pluginInstance, "example-key");\n\nItemStack item = new ItemStack(Material.DIAMOND);\n// ItemMeta \u5b9e\u73b0\u4e86 PersistentDataHolder \u63a5\u53e3\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5176 PDC \u5bb9\u5668\nItemMeta meta = item.getItemMeta();\nmeta.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");\nitem.setItemMeta(meta);\n')),(0,r.kt)("p",null,"\u91cd\u590d\u5229\u7528\u540c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"NamespacedKey")," \u5bf9\u8c61\u662f\u4e0d\u9519\u7684\u505a\u6cd5\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"NamespacedKey")," \u7c7b\u53ef\u4f7f\u7528\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u6784\u9020\u5668\u5b9e\u4f8b\u5316\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Plugin")," \u5b9e\u4f8b\u548c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u6807\u8bc6\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u547d\u540d\u7a7a\u95f4\uff08namespace\uff09\u548c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u6807\u8bc6\u7b26")),(0,r.kt)("p",null,"\u901a\u5e38\u4f18\u5148\u4f7f\u7528\u524d\u8005\uff0c\u56e0\u4e3a\u5b83\u5c06\u81ea\u52a8\u4f7f\u7528\u63d2\u4ef6\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u4e0d\u8fc7\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4e00\u4e2a\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u6216\u60f3\u8bfb\u53d6\u5176\u5b83\u63d2\u4ef6\u6240\u4fdd\u5b58\u7684\u6570\u636e\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u9009\u62e9\u540e\u8005\u3002"),(0,r.kt)("h2",{id:"\u83b7\u53d6\u6570\u636e"},"\u83b7\u53d6\u6570\u636e"),(0,r.kt)("p",null,"\u8981\u4ece\u4e00\u4e2a PDC \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u4f60\u9700\u8981\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"NamespacedKey")," \u548c\u6570\u636e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataType"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521b\u5efa NamespacedKey\nNamespacedKey key = new NamespacedKey(pluginInstance, "example-key");\n\nItemStack item = ...; // \u4e4b\u524d\u7684\u7269\u54c1\n// \u4ece PDC \u83b7\u53d6\u6570\u636e\nPersistentDataContainer container = item.getItemMeta().getPersistentDataContainer();\nif (container.has(key, PersistentDataType.STRING)) {\n    String value = container.get(key, PersistentDataType.STRING);\n    // \u7528 value \u505a\u4e9b\u4e8b\u60c5\u3002\n    player.sendMessage(Component.text(value));\n}\n')),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"PDC \u652f\u6301\u4f17\u591a\u6570\u636e\u7c7b\u578b\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Byte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Byte Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Double")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Long"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Long Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Short")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"li"},"Tag Containers"),"\u3002\u4f7f\u7528 Tag Containers \u53ef\u4ee5\u5728 PDC \u4e2d\u5d4c\u5957 PDC\u3002",(0,r.kt)("br",{parentName:"li"}),"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 PersistentDataContainer\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u83b7\u53d6\u5df2\u6709\u7684 container\nPersistentDataContainer container = ...;\n// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 container\nPersistentDataContainer newContainer = container.getAdapterContext().newPersistentDataContainer();\n")))),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b"},"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"\u4f7f\u7528\u539f\u751f\u7684\u6570\u636e\u7c7b\u578b\u9002\u914d\u5668\u65f6\uff0c\u5df2\u7ecf\u53ef\u4ee5\u5b58\u50a8\u5f88\u591a\u7c7b\u578b\u7684\u6570\u636e\u4e86\uff08\u5982\u4e0a\u6240\u5217\uff09\u3002\u4e0d\u8fc7\uff0c\u5982\u679c\u4f60\u9700\u8981\u7528\u5230\u66f4\u590d\u6742\u7684\u6570\u636e\u7c7b\u578b\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataType"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataType")," \u7684\u4f5c\u7528\u662f\u5c06\u590d\u6742\u7c7b\u578b\u7684\u6570\u636e\u201c\u5206\u89e3\u201d\u4e3a\u591a\u4e2a\u539f\u751f\u9002\u914d\u5668\u652f\u6301\u7684\u6570\u636e\uff0c\u53cd\u4e4b\u4e5f\u53ef\u4ee5\u5c06\u4e00\u7cfb\u5217\u57fa\u672c\u7c7b\u578b\u6570\u636e\u7ec4\u5408\u6210\u4e00\u4e2a\u590d\u6742\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7528\u6b64\u65b9\u5f0f\u5904\u7406 UUID \u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class UUIDDataType implements PersistentDataType<byte[], UUID> {\n     @Override\n     public Class<byte[]> getPrimitiveType() {\n         return byte[].class;\n     }\n\n     @Override\n     public Class<UUID> getComplexType() {\n         return UUID.class;\n     }\n\n     @Override\n     public byte[] toPrimitive(UUID complex, PersistentDataAdapterContext context) {\n         ByteBuffer bb = ByteBuffer.wrap(new byte[16]);\n         bb.putLong(complex.getMostSignificantBits());\n         bb.putLong(complex.getLeastSignificantBits());\n         return bb.array();\n     }\n\n     @Override\n     public UUID fromPrimitive(byte[] primitive, PersistentDataAdapterContext context) {\n         ByteBuffer bb = ByteBuffer.wrap(primitive);\n         long firstLong = bb.getLong();\n         long secondLong = bb.getLong();\n         return new UUID(firstLong, secondLong);\n     }\n }\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4f7f\u7528\u4f60\u81ea\u5df1\u5b9e\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataType"),"\uff0c\u4f60\u5fc5\u987b\u5728\u8c03\u7528 PDC \u7684 set/get/has \u65b9\u6cd5\u65f6\u4f20\u5165\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataType")," \u5b9e\u4f8b\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"container.set(key, new UUIDDataType(), uuid);\n"))),(0,r.kt)("h2",{id:"\u83b7\u53d6\u5404\u79cd-persistentdataholder-\u6240\u5bf9\u5e94\u7684-pdc"},"\u83b7\u53d6\u5404\u79cd ",(0,r.kt)("inlineCode",{parentName:"h2"},"PersistentDataHolder")," \u6240\u5bf9\u5e94\u7684 PDC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"chunk"},"Chunk"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Chunk#getPersistentDataContainer()")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"world"},"World"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"World#getPersistentDataContainer()")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"entity"},"Entity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Entity#getPersistentDataContainer()")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"tilestate"},"TileState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7a0d\u5fae\u6709\u4e9b\u590d\u6742\uff0c\u56e0\u4e3a\u4f60\u9700\u8981\u5c06\u65b9\u5757\u5bf9\u8c61\u8f6c\u6362\u4e3a\u67d0\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"TileState")," \u5b50\u7c7b\u7684\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"li"}),"\u4e0b\u65b9\u7684\u5199\u6cd5\u4e0d\u9002\u7528\u4e8e\u6240\u6709\u65b9\u5757\uff0c\u53ea\u9002\u7528\u4e8e\u90a3\u4e9b\u62e5\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"TileEntity")," \u7684\u65b9\u5757\u3002",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  Block block = ...;\n  if (block.getState() instanceof Chest chest) {\n      chest.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");\n      chest.update();\n  }\n')),(0,r.kt)("admonition",{parentName:"li",title:"\u8bd1\u8005\u6ce8  ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u65b9\u5757\u7684\u201c\u6570\u636e\u201d\u5176\u5b9e\u662f\u501f\u52a9\u5b9e\u4f53\u4fdd\u5b58\u7684\u3002\u6bd4\u5982\u5bf9\u4e00\u4e2a\u7bb1\u5b50\u800c\u8a00\uff0c\u5b9e\u9645\u4e0a\u5b58\u5728\u4e00\u4e2a\u7bb1\u5b50 ",(0,r.kt)("inlineCode",{parentName:"p"},"TileEntity")," \u5b9e\u4f53\uff0c\u8fd9\u4e2a\u5b9e\u4f53\u4fdd\u5b58\u4e86\u7269\u54c1\u680f\u6570\u636e\u3002\u540c\u7406\uff0cPDC \u6570\u636e\u4e5f\u5b58\u50a8\u5728\u8fd9\u4e2a\u5b9e\u4f53\u4e0a\u3002\u4e0d\u662f\u6bcf\u4e00\u79cd\u65b9\u5757\u90fd\u6709\u201c\u6570\u636e\u201d\u3002\u53ea\u6709\u90a3\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockState")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"TileState")," \u5b50\u7c7b\u7684\u65b9\u5757\u624d\u6709\u201c\u6570\u636e\u201d\u3002\u53ea\u80fd\u5bf9\u8fd9\u7c7b\u65b9\u5757\u83b7\u53d6\u5176 PDC \u6570\u636e\u3002  "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"structure"},"Structure"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Structure#getPersistentDataContainer()")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"itemmeta"},"ItemMeta"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ItemMeta#getPersistentDataContainer()"))))))}k.isMDXComponent=!0}}]);