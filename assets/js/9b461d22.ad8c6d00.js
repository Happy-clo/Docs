"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[324],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=u(a),k=n,s=d["".concat(o,".").concat(k)]||d[k]||c[k]||p;return a?r.createElement(s,i(i({ref:e},m),{},{components:a})):r.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,i=new Array(p);i[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:n,i[1]=l;for(var u=2;u<p;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1784:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const p={},i="\u8ba9\u6211\u4eec\u5f00\u59cb\u5427",l={unversionedId:"Paper/admin/getting-start/getting-start",id:"Paper/admin/getting-start/getting-start",title:"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427",description:"\u9700\u6c42",source:"@site/docs/Paper/admin/getting-start/getting-start.md",sourceDirName:"Paper/admin/getting-start",slug:"/Paper/admin/getting-start/",permalink:"/Paper/admin/getting-start/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/docs/Paper/admin/getting-start/getting-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paper \u7ba1\u7406\u6307\u5357",permalink:"/admin"},next:{title:"\u6dfb\u52a0\u63d2\u4ef6",permalink:"/Paper/admin/getting-start/adding-plugins"}},o={},u=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u8fc1\u79fb\u5b58\u6863\u5230 Paper",id:"\u8fc1\u79fb\u5b58\u6863\u5230-paper",level:2},{value:"\u4ece Vanilla\uff08\u539f\u7248\uff09\u8fc1\u79fb\uff1a",id:"\u4ece-vanilla\u539f\u7248\u8fc1\u79fb",level:4},{value:"\u4ece CraftBukkit \u6216 Spigot \u8fc1\u79fb\uff1a",id:"\u4ece-craftbukkit-\u6216-spigot-\u8fc1\u79fb",level:4},{value:"\u4e0b\u8f7d Paper",id:"\u4e0b\u8f7d-paper",level:2},{value:"\u542f\u52a8\u670d\u52a1\u5668",id:"\u542f\u52a8\u670d\u52a1\u5668",level:2}],m={toc:u},d="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427"},"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427"),(0,n.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"\u5728 1.18 \u7248\u672c\u53d1\u5e03\u540e\uff0cPaper \u9700\u8981",(0,n.kt)("strong",{parentName:"p"},"Java17"),"\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u4f7f\u7528 Java17\uff0c\u8bf7\u5148\u4e0b\u8f7d Java17\u3002  ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Paper \u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5efa\u8bae Java \u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.8 - 1.11"),(0,n.kt)("td",{parentName:"tr",align:null},"Java8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.12 - 1.16.4"),(0,n.kt)("td",{parentName:"tr",align:null},"Java 11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.16.5"),(0,n.kt)("td",{parentName:"tr",align:null},"Java 16")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.17 - 1.20.1 \u6216\u66f4\u9ad8"),(0,n.kt)("td",{parentName:"tr",align:null},"Java 17")))),(0,n.kt)("h2",{id:"\u8fc1\u79fb\u5b58\u6863\u5230-paper"},"\u8fc1\u79fb\u5b58\u6863\u5230 Paper"),(0,n.kt)("h4",{id:"\u4ece-vanilla\u539f\u7248\u8fc1\u79fb"},"\u4ece Vanilla\uff08\u539f\u7248\uff09\u8fc1\u79fb\uff1a"),(0,n.kt)("p",null,"\u4ece\u539f\u7248\u8fc1\u79fb\u5230 Paper \u76f8\u5f53\u5bb9\u6613\uff0c\u4f46\u662f\u5b58\u6863\u7a0d\u5fae\u4e0d\u540c\uff1aPaper\uff08\u6216 CraftBukkit \u6216 Spigot\uff09\u4f1a\u5c06\u4e0d\u540c\u7684\u7ef4\u5ea6\u5355\u72ec\u5206\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u5939\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f\uff0c\u4e0d\u7528\u4e3a\u6b64\u62c5\u5fc3\uff01Paper \u4f1a\u81ea\u52a8\u5e2e\u52a9\u4f60\u8f6c\u6362\u5b58\u6863\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u8bd1\u8005\u6ce8\uff1a"),(0,n.kt)("br",{parentName:"p"}),"\n","\u201c\u4e0d\u7528\u62c5\u5fc3\u201d \u662f\u6307 Paper \u4f1a\u81ea\u52a8\u5c06\u5b58\u6863\u8f6c\u6362\u4e3a Paper \u7684\u5b58\u6863\u683c\u5f0f\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f\u4e07\u4e00\u54ea\u5929\u60f3\u8981\u4ece\u8be5\u683c\u5f0f\u8f6c\u5230\u539f\u7248\u5b58\u6863\u7684\u683c\u5f0f\u5219\u9700\u8981\u624b\u52a8\u8f6c\u6362\uff0c\u56e0\u4e3a\u539f\u7248\u670d\u52a1\u7aef\u6ca1\u6709\u63d0\u4f9b\u81ea\u52a8\u8f6c\u6362\u529f\u80fd\u3002")),(0,n.kt)("h4",{id:"\u4ece-craftbukkit-\u6216-spigot-\u8fc1\u79fb"},"\u4ece CraftBukkit \u6216 Spigot \u8fc1\u79fb\uff1a"),(0,n.kt)("p",null,"Paper \u662f CraftBukkit \u6216 Spigot \u5f00\u7bb1\u5373\u7528\u7684\u66ff\u4ee3\u54c1\uff08Fork\uff09\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u5b58\u6863\u62c5\u5fe7\u3002"),(0,n.kt)("h2",{id:"\u4e0b\u8f7d-paper"},"\u4e0b\u8f7d Paper"),(0,n.kt)("p",null,"Paper \u63d0\u4f9b\u4e86\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u7684 Jar \u6587\u4ef6\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://papermc.io/downloads"},"\u4e0b\u8f7d\u5730\u5740"),"\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u786e\u4fdd\u6e38\u620f\u7248\u672c\u548c\u6240\u9700\u4e0b\u8f7d\u7684\u6784\u5efa\u7248\u672c\u53f7\u6b63\u786e\u540e\uff0c\u70b9\u51fb\u4e0b\u8f7d\u6309\u94ae\u5373\u53ef\u3002"),(0,n.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u5668"},"\u542f\u52a8\u670d\u52a1\u5668"),(0,n.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u5668\u4e0e\u542f\u52a8\u5176\u5b83 Java \u7a0b\u5e8f\u4e00\u6837\u3002"),(0,n.kt)("p",null,"\u6253\u5f00\u4f60\u7684\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u5b58\u653e\u670d\u52a1\u5668\u6570\u636e\u7684\u6587\u4ef6\u5939\uff0c\u7136\u540e\u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"java -Xms2G -Xmx2G -jar paper.jar --nogui"),"\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u9700\u8981\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"paper.jar"),"\u4fee\u6539\u6210\u4f60\u5b9e\u9645\u4e0b\u8f7d\u7684\u6587\u4ef6\u540d\u3002"),(0,n.kt)("p",null,"\u4f60\u60f3\u8981\u8c03\u6574\u4e3a\u670d\u52a1\u5668\u5206\u914d\u7684\u5185\u5b58\uff0c\u53ea\u9700\u8981\u4fee\u6539",(0,n.kt)("inlineCode",{parentName:"p"},"-Xms"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"-Xmx"),"\u53c2\u6570\u3002\u5e76\u4e14\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"--nogui"),"\u7981\u7528\u539f\u7248\u670d\u52a1\u7aef\u7684 GUI\u3002\n\u5982\u679c\u4f7f\u7528\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"--nogui"),"\u53c2\u6570\uff0c\u670d\u52a1\u7aef\u4e0d\u4f1a\u5f39\u51fa\u4e24\u4e2a\u754c\u9762\uff08\u4e00\u4e2a\u7ec8\u7aef\u4e00\u4e2a GUI\uff09\u3002"),(0,n.kt)("p",null,"\u8981\u5bf9\u6b64\u53c2\u6570\u8fdb\u884c\u66f4\u52a0\u7ec6\u81f4\u7684\u8c03\u6574\uff0c\u8be6\u89c1\u5de6\u4fa7 Aikar's Flags \u4e00\u6587\u3002"))}c.isMDXComponent=!0}}]);