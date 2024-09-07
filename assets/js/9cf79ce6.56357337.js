"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[21],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=m(a),g=r,u=k["".concat(o,".").concat(g)]||k[g]||c[g]||i;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[k]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"Aikar's Flags",slug:"/aikars-flags",description:"Aikar's flags\u662f\u4e00\u7ec4\u8bbe\u8ba1\u7528\u4e8e\u63d0\u5347\u60a8Paper\u670d\u52a1\u5668\u6027\u80fd\u7684JVM\u6807\u5fd7\u96c6\u5408\u3002"},p="Aikar's Flags",l={unversionedId:"Paper/admin/how-to/aikars-flags",id:"Paper/admin/how-to/aikars-flags",title:"Aikar's Flags",description:"Aikar's flags\u662f\u4e00\u7ec4\u8bbe\u8ba1\u7528\u4e8e\u63d0\u5347\u60a8Paper\u670d\u52a1\u5668\u6027\u80fd\u7684JVM\u6807\u5fd7\u96c6\u5408\u3002",source:"@site/docs/Paper/admin/how-to/aikars-flags.md",sourceDirName:"Paper/admin/how-to",slug:"/aikars-flags",permalink:"/aikars-flags",draft:!1,tags:[],version:"current",frontMatter:{title:"Aikar's Flags",slug:"/aikars-flags",description:"Aikar's flags\u662f\u4e00\u7ec4\u8bbe\u8ba1\u7528\u4e8e\u63d0\u5347\u60a8Paper\u670d\u52a1\u5668\u6027\u80fd\u7684JVM\u6807\u5fd7\u96c6\u5408\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8fc1\u79fb\u6570\u636e",permalink:"/Paper/admin/getting-start/migration"},next:{title:"\u914d\u7f6e Anti-Xray",permalink:"/anti-xray"}},o={},m=[{value:"\u63a8\u8350\u7684 JVM \u542f\u52a8\u6807\u5fd7",id:"\u63a8\u8350\u7684-jvm-\u542f\u52a8\u6807\u5fd7",level:2},{value:"\u63a8\u8350\u7684\u5185\u5b58\u5927\u5c0f",id:"\u63a8\u8350\u7684\u5185\u5b58\u5927\u5c0f",level:2},{value:"Java GC \u65e5\u5fd7\u8bb0\u5f55",id:"java-gc-\u65e5\u5fd7\u8bb0\u5f55",level:2},{value:"\u6807\u5fd7\u7684\u6280\u672f\u89e3\u91ca",id:"\u6807\u5fd7\u7684\u6280\u672f\u89e3\u91ca",level:2},{value:"\u900f\u660e\u5927\u9875",id:"\u900f\u660e\u5927\u9875",level:3}],s={toc:m},k="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aikars-flags"},"Aikar's Flags"),(0,r.kt)("h2",{id:"\u63a8\u8350\u7684-jvm-\u542f\u52a8\u6807\u5fd7"},"\u63a8\u8350\u7684 JVM \u542f\u52a8\u6807\u5fd7"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[\u811a\u672c\u751f\u6210\u5668]"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u672c\u9875\u4ec5\u4f5c\u4e3a\u89e3\u91ca\u9875\u9762\u3002")," \u5982\u679c\u60a8\u9700\u8981\u751f\u6210\u542f\u52a8\u811a\u672c\uff0c\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://flags.sh/"},"\u811a\u672c\u751f\u6210\u5668")),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[\u5728\u5171\u4eab\u4e3b\u673a\u4e0a\u4e0d\u8981\u5206\u914d\u6240\u6709\u53ef\u7528\u5185\u5b58\uff01]"),(0,r.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Xms")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx")," \u503c\u65f6\uff0c\u5982\u679c\u60a8\u7684\u4e3b\u673a\u663e\u793a\u6709 8GB \u5185\u5b58\uff0c\u8bf7",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4f7f\u7528 8GB"),"\uff01"),(0,r.kt)("p",{parentName:"admonition"},"Minecraft\uff08\u548c Java\uff09\u9700\u8981\u989d\u5916\u7684\u5185\u5b58\u6765\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx")," \u53c2\u6570\u4e4b\u4e0a\u7684\u8fd0\u884c\u3002\u5efa\u8bae\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Xms")," \u51cf\u5c11\u7ea6 1000-1500MB\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u4e0d\u8db3\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"OOMKiller")," \u5bfc\u81f4\u670d\u52a1\u5668\u5173\u95ed\u3002\u8fd9\u4e5f\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u7559\u51fa\u4e86\u4e00\u4e9b\u5185\u5b58\u7a7a\u95f4\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6709 8GB \u5185\u5b58\u5417\uff1f\u4e3a\u5b89\u5168\u8d77\u89c1\uff0c\u4f7f\u7528 6500MB\u3002\n",(0,r.kt)("em",{parentName:"p"},"\u4f46\u60a8\u4e5f\u53ef\u4ee5\u8be2\u95ee\u60a8\u7684\u4e3b\u673a\u662f\u5426\u4f1a\u4e3a\u60a8\u8986\u76d6\u8fd9\u4e9b\u989d\u5916\u5f00\u9500\uff0c\u63d0\u4f9b 9500M\u3002\u6709\u4e9b\u4e3b\u673a\u4f1a\u540c\u610f\u3002"))),(0,r.kt)("h2",{id:"\u63a8\u8350\u7684\u5185\u5b58\u5927\u5c0f"},"\u63a8\u8350\u7684\u5185\u5b58\u5927\u5c0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5efa\u8bae\u81f3\u5c11\u4f7f\u7528 6-10GB")," \u5185\u5b58\uff0c\u65e0\u8bba\u73a9\u5bb6\u6570\u91cf\u6709\u591a\u5c11\uff01\u5982\u679c\u60a8\u8d1f\u62c5\u4e0d\u8d77 10GB \u5185\u5b58\uff0c\u8bf7\u5c3d\u91cf\u63d0\u4f9b\u66f4\u591a\uff0c\u4f46\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u6709\u4e00\u4e9b\u5185\u5b58\u3002G1GC \u5728\u6709\u66f4\u591a\u5185\u5b58\u65f6\u8fd0\u884c\u66f4\u4f73\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u8d85\u8fc7\u4e00\u5b9a\u70b9\u540e\uff0c\u66f4\u591a\u7684\u5185\u5b58\u5e76\u4e0d\u610f\u5473\u7740\u66f4\u597d\u7684\u6027\u80fd\u3002\u6700\u7ec8\u4f1a\u9047\u5230\u6536\u76ca\u9012\u51cf\u7684\u60c5\u51b5\u3002\u4e3a\u670d\u52a1\u5668\u8d2d\u4e70 32GB RAM \u5c06\u53ea\u4f1a\u6d6a\u8d39\u91d1\u94b1\uff0c\u5e26\u6765\u6781\u5c11\u7684\u6536\u76ca\u3002"),(0,r.kt)("h2",{id:"java-gc-\u65e5\u5fd7\u8bb0\u5f55"},"Java GC \u65e5\u5fd7\u8bb0\u5f55"),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e9b\u6807\u5fd7\u540e\u9047\u5230\u65e7\u4ee3\u95ee\u9898\u5417\uff1f\u6839\u636e\u60a8\u7684 Java \u7248\u672c\u6dfb\u52a0\u4ee5\u4e0b\u6807\u5fd7\u542f\u7528 GC \u65e5\u5fd7\u8bb0\u5f55\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java 8-10")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Xloggc:gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps\n-XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=5 -XX:GCLogFileSize=1M\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java 11+")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Xlog:gc*:logs/gc.log:time,uptime:filecount=5,filesize=1M\n")),(0,r.kt)("p",null,"GC \u65e5\u5fd7\u8bb0\u5f55\u4e0d\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u53ef\u59cb\u7ec8\u4fdd\u6301\u5f00\u542f\u3002\u8fd9\u4e9b\u6587\u4ef6\u4e0d\u4f1a\u5360\u7528\u592a\u591a\u7a7a\u95f4\uff085MB\uff09\u3002"),(0,r.kt)("h2",{id:"\u6807\u5fd7\u7684\u6280\u672f\u89e3\u91ca"},"\u6807\u5fd7\u7684\u6280\u672f\u89e3\u91ca"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"-Xms \u5339\u914d-Xmx - \u4e3a\u4ec0\u4e48\uff1a")," \u60a8\u4e0d\u5e94\u8be5\u8ba9\u670d\u52a1\u5668\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx")," \u60c5\u51b5\u4e0b\u5b8c\u5168\u8017\u5c3d\u5185\u5b58\u3002\u60a8\u7684\u670d\u52a1\u5668\u5e94\u59cb\u7ec8\u9884\u671f\u4f7f\u7528\u6574\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx"),"\uff01\u56e0\u6b64\uff0c\u60a8\u5e94\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx")," \u4e4b\u4e0a\u6709\u989d\u5916\u7684\u5185\u5b58\u7528\u4e8e\u975e Minecraft/\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u7684\u4e8b\u52a1\u3002\u56e0\u6b64\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"Xms")," \u4f4e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Xmx"),"\uff0c\u5219\u6709\u672a\u4f7f\u7528\u7684\u5185\u5b58\uff01\u672a\u4f7f\u7528\u7684\u5185\u5b58\u662f\u6d6a\u8d39\u7684\u5185\u5b58\u3002G1 \u6839\u636e\u5206\u914d\u7ed9\u6bcf\u4e2a\u533a\u57df\u7684\u5185\u5b58\u91cf\u6765\u4f18\u5316\u6682\u505c\u65f6\u95f4\u3002\u5982\u679c\u6709\u6bd4\u6240\u9700\u66f4\u591a\u7684\u5185\u5b58\uff0cG1 \u5c06\u7b80\u5355\u5730\u5c06\u5176\u63a8\u9001\u5230\u8001\u5e74\u4ee3\uff0c\u8fd9\u4e0d\u4f1a\u5bf9\u60a8\u9020\u6210\u635f\u5bb3\u3002\u6539\u5584 GC \u884c\u4e3a\u7684\u57fa\u672c\u601d\u60f3\u662f\u786e\u4fdd\u77ed\u751f\u547d\u5468\u671f\u5bf9\u8c61\u5e74\u8f7b\u6b7b\u53bb\uff0c\u4ece\u4e0d\u88ab\u664b\u5347\u3002G1 \u83b7\u5f97\u7684\u5185\u5b58\u8d8a\u591a\uff0c\u60a8\u8d8a\u6709\u4fdd\u8bc1\u5bf9\u8c61\u4e0d\u4f1a\u8fc7\u65e9\u664b\u5347\u5230\u8001\u5e74\u4ee3\u3002G1 \u4e0e\u4ee5\u5f80\u7684\u6536\u96c6\u5668\u4e0d\u540c\uff0c\u80fd\u591f\u66f4\u6709\u6548\u5730\u5904\u7406\u66f4\u5927\u7684\u5806\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u9700\u8981\u5206\u914d\u7ed9\u5b83\u7684\u5185\u5b58\uff0c\u5b83\u5c06\u4e0d\u4f1a\u4f7f\u7528\u5b83\u3002\u6574\u4e2a\u5f15\u64ce\u7684\u8fd0\u4f5c\u65b9\u5f0f\u4e0d\u540c\uff0c\u4e0d\u4f1a\u53d7\u5230\u8fc7\u5927\u5806\u7684\u5f71\u54cd\uff0c\u8fd9\u662f\u4e1a\u754c\u666e\u904d\u63a5\u53d7\u7684 G1 \u4f7f\u7528\u76f8\u540c Xms \u548c Xmx \u7684\u4fe1\u606f\uff01")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UnlockExperimentalVMOptions\uff1a")," \u4e00\u4e9b\u4ee5\u4e0b\u9009\u9879\u9700\u8981\u6b64\u6807\u5fd7\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1NewSizePercent\uff1a")," \u8fd9\u4e9b\u662f\u91cd\u8981\u7684\u8bbe\u7f6e\u3002\u73b0\u5728\u60a8\u53ef\u4ee5\u6307\u5b9a\u6574\u4f53\u6240\u9700\u8303\u56f4\u7684\u767e\u5206\u6bd4\u7528\u4e8e\u65b0\u751f\u4ee3\u3002\u901a\u8fc7\u8fd9\u4e9b\u8bbe\u7f6e\uff0c\u6211\u4eec\u544a\u8bc9 G1 \u4e0d\u8981\u4f7f\u7528\u5176\u9ed8\u8ba4\u7684 5%\u4f5c\u4e3a\u65b0\u751f\u4ee3\uff0c\u800c\u662f\u7ed9\u5b83 40%\uff01Minecraft \u6709\u6781\u9ad8\u7684\u5185\u5b58\u5206\u914d\u901f\u7387\uff0c\u81f3\u5c11\u5728 30 \u4e2a\u73a9\u5bb6\u670d\u52a1\u5668\u4e0a\u8fbe\u5230\u6bcf\u79d2\u81f3\u5c11 800MB\uff01\u8fd9\u4e3b\u8981\u662f\u77ed\u751f\u547d\u5468\u671f\u5bf9\u8c61\uff08\u65b9\u5757\u4f4d\u7f6e\uff09\u3002"),(0,r.kt)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u8fd9\u610f\u5473\u7740 Minecraft \u786e\u5b9e\u9700\u8981\u66f4\u591a\u5730\u5173\u6ce8\u65b0\u751f\u4ee3\u4ee5\u652f\u6301\u751a\u81f3\u652f\u6301\u8fd9\u79cd\u5206\u914d\u901f\u7387\u3002\u5982\u679c\u60a8\u7684\u65b0\u751f\u4ee3\u592a\u5c0f\uff0c\u60a8\u5c06\u6bcf\u79d2\u8fd0\u884c 1-2 \u6b21\u65b0\u751f\u4ee3\u6536\u96c6\uff0c\u8fd9\u662f\u7cdf\u7cd5\u7684\u3002\u60a8\u5c06\u6709\u5f88\u591a\u6682\u505c\uff0cTPS \u6709\u98ce\u9669\u4e0b\u964d\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u8ddf\u4e0a GC \u6210\u672c\u3002\u7136\u540e\u7ed3\u5408\u5bf9\u8c61\u73b0\u5728\u66f4\u5feb\u5730\u664b\u5347\u7684\u4e8b\u5b9e\uff0c\u5bfc\u81f4\u60a8\u7684\u8001\u5e74\u4ee3\u589e\u957f\u66f4\u5feb\u3002\u7ed9\u4e88\u66f4\u591a\u7684\u65b0\u751f\u4ee3\uff0c\u6211\u4eec\u80fd\u591f\u51cf\u7f13\u5e74\u8f7b\u4ee3\u6536\u96c6\u7684\u95f4\u9694\uff0c\u4e3a\u77ed\u751f\u547d\u5468\u671f\u5bf9\u8c61\u6b7b\u4ea1\u63d0\u4f9b\u66f4\u591a\u65f6\u95f4\uff0c\u5e76\u5b9e\u73b0\u6574\u4f53\u66f4\u9ad8\u6548\u7684 GC \u884c\u4e3a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1MixedGCLiveThresholdPercent\uff1a")," \u63a7\u5236\u4f55\u65f6\u5728\u5e74\u8f7b\u4ee3\u6536\u96c6\u4e2d\u5305\u542b\u533a\u57df\u4ee5\u4f7f\u8001\u5e74\u4ee3\u4fdd\u6301\u6574\u6d01\uff0c\u800c\u4e0d\u8fdb\u884c\u6b63\u5e38\u7684\u8001\u5e74\u4ee3 GC \u6536\u96c6\u3002\u5f53\u5185\u5b58\u5c11\u4e8e\u8fd9\u4e2a\u767e\u5206\u6bd4\u65f6\uff0c\u8001\u5e74\u4ee3\u751a\u81f3\u4e0d\u4f1a\u88ab\u5305\u62ec\u5728\u2018\u6df7\u5408\u2019\u6536\u96c6\u4e2d\u3002\u6df7\u5408\u6536\u96c6\u4e0d\u50cf\u5b8c\u6574\u7684\u8001\u5e74\u4ee3\u6536\u96c6\u90a3\u6837\u91cd\uff0c\u56e0\u6b64\u5c0f\u5e45\u589e\u91cf\u5730\u6e05\u7406\u8001\u5e74\u4ee3\u4fdd\u6301\u5185\u5b58\u4f7f\u7528\u91cf\u8f83\u8f7b\u3002"),(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\u4e3a 65 \u81f3 85\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e Java \u7248\u672c\uff0c\u6211\u4eec\u5c06\u5176\u8bbe\u7f6e\u4e3a 90 \u4ee5\u786e\u4fdd\u5c3d\u5feb\u56de\u6536\u5783\u573e\uff0c\u4ee5\u4fdd\u7559\u5c3d\u53ef\u80fd\u591a\u7684\u7a7a\u95f2\u533a\u57df\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1ReservePercent=20\uff1a")," Minecraft \u6700\u65b0\u7248\u672c\u4e2d\u7684\u5185\u5b58\u5206\u914d\u901f\u7387\u786e\u5b9e\u975e\u5e38\u9ad8\u3002\u6211\u4eec\u9762\u4e34\u201c\u7a7a\u95f4\u8017\u5c3d\u201d\u7684\u98ce\u9669\uff0c\u5373\u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\u53ef\u7528\u6765\u79fb\u52a8\u6570\u636e\u3002\u8fd9\u786e\u4fdd\u4e86\u66f4\u591a\u7684\u5185\u5b58\u7b49\u5f85\u7528\u4e8e\u6b64\u64cd\u4f5c\u3002\u9ed8\u8ba4\u503c\u4e3a 10\uff0c\u56e0\u6b64\u6211\u4eec\u4e3a\u5176\u63d0\u4f9b\u4e86\u53e6\u5916 10\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MaxTenuringThreshold=1\uff1a")," Minecraft \u7684\u5185\u5b58\u5206\u914d\u901f\u7387\u975e\u5e38\u9ad8\u3002\u5927\u90e8\u5206\u5185\u5b58\u5728 Eden \u4ee3\u4e2d\u56de\u6536\u3002\u7136\u800c\uff0c\u77ac\u6001\u6570\u636e\u5c06\u6ea2\u51fa\u5230\u5e78\u5b58\u8005\u4ee3\u4e2d\u3002\u6700\u521d\u5c1d\u8bd5\u5b8c\u5168\u5220\u9664\u5e78\u5b58\u8005\u4ee3\u5e76\u53d6\u5f97\u4e86\u4e0d\u9519\u7684\u7ed3\u679c\uff0c\u4f46\u7ed3\u679c\u662f\u77ac\u6001\u6570\u636e\u4f1a\u8fdb\u5165\u8001\u5e74\u4ee3\uff0c\u8fd9\u662f\u4e0d\u597d\u7684\u3002\u6700\u5927 tenuring \u4e3a 1 \u786e\u4fdd\u6211\u4eec\u4e0d\u4f1a\u5c06\u77ac\u6001\u6570\u636e\u664b\u5347\u5230\u8001\u5e74\u4ee3\uff0c\u4f46\u4efb\u4f55\u5728 GC \u4e4b\u540e\u751f\u5b58\u4e24\u6b21\u7684\u6570\u636e\u5c06\u88ab\u5047\u5b9a\u4e3a\u957f\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u6781\u5927\u5730\u51cf\u5c11\u4e86\u5e74\u8f7b\u6536\u96c6\u4e2d\u7684\u6682\u505c\u65f6\u95f4\uff0c\u56e0\u4e3a\u5c06\u6570\u636e\u590d\u5236\u5230\u5e78\u5b58\u8005\u7a7a\u95f4\u591a\u8fbe 15 \u6b21\u5bf9\u5b9e\u9645\u8001\u5e74\u4ee3\u5185\u5b58\u9700\u8981\u5f88\u591a\u65f6\u95f4\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0cGC \u5f15\u64ce\u5e94\u8ddf\u8e2a\u5bf9\u8c61\u7684\u5e73\u5747\u5e74\u9f84\u5e76\u66f4\u5feb\u5730\u4f7f\u6570\u636e\u6210\u4e3a\u8001\u5e74\uff0c\u4f46\u8fd9\u4e0d\u662f\u5176\u5de5\u4f5c\u65b9\u5f0f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8003\u8651\u5230\u5e73\u5747 GC \u901f\u7387\u4e3a 10 \u79d2\u5230\u6570\u5206\u949f\u6bcf\u6b21\u5e74\u8f7b\u6536\u96c6\uff0c\u8fd9\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u201c\u5783\u573e\u201d\u664b\u5347\uff0c\u5e76\u4e14\u53ea\u4f1a\u5ef6\u8fdf\u5728\u6df7\u5408 GC \u4e2d\u6536\u96c6\u7684\u957f\u751f\u547d\u5468\u671f\u5185\u5b58\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SurvivorRatio=32\uff1a")," \u56e0\u4e3a\u6211\u4eec\u5927\u5e45\u964d\u4f4e\u4e86 MaxTenuringThreshold\uff0c\u6211\u4eec\u5c06\u5927\u5e45\u51cf\u5c11\u5e78\u5b58\u8005\u7a7a\u95f4\u7684\u4f7f\u7528\u3002\u8fd9\u5c06\u91ca\u653e\u66f4\u591a\u533a\u57df\u4f9b Eden \u4f7f\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"AlwaysPreTouch\uff1a")," AlwaysPreTouch \u786e\u4fdd\u5728\u8fdb\u7a0b\u542f\u52a8\u65f6\u8bbe\u7f6e\u5e76\u4fdd\u7559\u5185\u5b58\u8fde\u7eed\u6027\uff0c\u63d0\u9ad8\u5176\u6548\u7387\u3002\u8fd9\u63d0\u9ad8\u4e86\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u8bbf\u95ee\u901f\u5ea6\u3002\u4f7f\u7528\u900f\u660e\u5de8\u5927\u9875\u662f\u5f3a\u5236\u7684\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+DisableExplicitGC\uff1a")," \u8bb8\u591a\u63d2\u4ef6\u8ba4\u4e3a\u5b83\u4eec\u77e5\u9053\u5982\u4f55\u63a7\u5236\u5185\u5b58\uff0c\u5e76\u5c1d\u8bd5\u8c03\u7528\u5783\u573e\u6536\u96c6\u3002\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u63d2\u4ef6\u4f1a\u89e6\u53d1\u5b8c\u6574\u7684\u5783\u573e\u6536\u96c6\uff0c\u5bfc\u81f4\u5927\u5e45\u5ef6\u8fdf\u3002\u6b64\u6807\u5fd7\u7981\u6b62\u63d2\u4ef6\u5c1d\u8bd5\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u4fdd\u62a4\u60a8\u514d\u53d7\u5176\u7cdf\u7cd5\u4ee3\u7801\u7684\u5f71\u54cd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MaxGCPauseMillis=200\uff1a")," \u6b64\u8bbe\u7f6e\u63a7\u5236\u5728\u60a8\u7684\u65b0\u751f\u4ee3\u7684\u6700\u5c0f\u548c\u6700\u5927\u8303\u56f4\u4e4b\u95f4\u4f7f\u7528\u591a\u5c11\u5185\u5b58\u3002\u8fd9\u662f\u60a8\u5e0c\u671b\u670d\u52a1\u5668\u6682\u505c\u8fdb\u884c\u6536\u96c6\u7684\u201c\u76ee\u6807\u201d\u65f6\u95f4\u3002200 \u65e8\u5728\u6700\u591a\u635f\u5931 4 \u4e2a\u523b\u5ea6\u3002\u8fd9\u5c06\u5bfc\u81f4\u77ed\u6682\u7684 TPS \u4e0b\u964d\uff0c\u4f46\u670d\u52a1\u5668\u53ef\u4ee5\u7acb\u5373\u5f25\u8865\u8fd9\u79cd\u4e0b\u964d\uff0c\u610f\u5473\u7740\u5b83\u5bf9\u60a8\u7684 TPS \u6ca1\u6709\u5b9e\u8d28\u6027\u5f71\u54cd\u3002200ms \u4f4e\u4e8e\u73a9\u5bb6\u80fd\u611f\u77e5\u7684\u65f6\u95f4\u3002\u5728\u6d4b\u8bd5\u4e2d\uff0c\u5c06\u6b64\u503c\u9650\u5236\u4e3a\u66f4\u4f4e\u7684\u6570\u5b57\u4f1a\u5bfc\u81f4 G1 \u65e0\u6cd5\u5feb\u901f\u91cd\u65b0\u6536\u96c6\u5185\u5b58\uff0c\u53ef\u80fd\u5bfc\u81f4\u8001\u5e74\u4ee3\u7528\u5c3d\u89e6\u53d1\u5b8c\u6574\u6536\u96c6\u3002\u53ea\u56e0\u4e3a\u6b64\u6570\u5b57\u4e3a 200 \u5e76\u4e0d\u610f\u5473\u7740\u6bcf\u6b21\u6536\u96c6\u90fd\u662f 200\u3002\u5b83\u8868\u793a\u5982\u679c\u786e\u5b9e\u9700\u8981\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u9ad8\u8fbe 200\uff0c\u5e76\u4e14\u6211\u4eec\u9700\u8981\u8ba9\u5b83\u5728\u6709\u5185\u5b58\u8981\u6536\u96c6\u65f6\u6267\u884c\u5176\u5de5\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+ParallelRefProcEnabled\uff1a")," \u4f18\u5316 GC \u8fc7\u7a0b\uff0c\u4f7f\u7528\u591a\u7ebf\u7a0b\u8fdb\u884c\u5f31\u5f15\u7528\u68c0\u67e5\u3002\u4e0d\u6e05\u695a\u4e3a\u4ec0\u4e48\u8fd9\u4e0d\u662f\u9ed8\u8ba4\u8bbe\u7f6e...")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1RSetUpdatingPauseTimePercent=5\uff1a")," \u9ed8\u8ba4\u503c\u4e3a\u6682\u505c\u671f\u95f4\u82b1\u8d39\u7684\u65f6\u95f4\u7684 10\uff05\uff0c\u5c06\u5176\u51cf\u5c11\u5230 5\uff05\u4f7f\u5176\u66f4\u591a\u5730\u5e76\u53d1\u4ee5\u51cf\u5c11\u6682\u505c\u6301\u7eed\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1MixedGCCountTarget=4\uff1a")," \u9ed8\u8ba4\u503c\u4e3a 8\u3002\u7531\u4e8e\u6211\u4eec\u65e8\u5728\u66f4\u6162\u5730\u6536\u96c6\uff0c\u51cf\u5c11\u8001\u5e74\u4ee3\u4f7f\u7528\u91cf\uff0c\u5c1d\u8bd5\u66f4\u5feb\u5730\u56de\u6536\u8001\u5e74\u4ee3\u5185\u5b58\u4ee5\u907f\u514d\u7528\u5c3d\u8001\u5e74\u4ee3\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1HeapRegionSize=8M+\uff1a")," \u9ed8\u8ba4\u4e3a\u81ea\u52a8\u8ba1\u7b97\u3002\u5bf9\u4e8e Minecraft \u7279\u522b\u91cd\u8981\uff0c\u7279\u522b\u662f 1.15 \u7248\u672c\uff0c\u56e0\u4e3a\u5728\u4f4e\u5185\u5b58\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u8ba1\u7b97\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4f1a\u592a\u4f4e\u3002\u4efb\u4f55\u5c0f\u4e8e\u6b64\u5927\u5c0f\u4e00\u534a\uff084MB\uff09\u7684\u5185\u5b58\u5206\u914d\u90fd\u5c06\u88ab\u89c6\u4e3a\u201c\u5de8\u5927\u201d\uff0c\u5e76\u76f4\u63a5\u63a8\u8fdb\u8001\u5e74\u4ee3\uff0c\u66f4\u96be\u91ca\u653e\u3002\u5982\u679c\u5141\u8bb8 Java \u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e\uff0c\u5219\u60a8\u7684\u5185\u5b58\u7684\u663e\u8457\u90e8\u5206\u5c06\u88ab\u89c6\u4e3a\u5de8\u5927\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+PerfDisableSharedMem\uff1a")," \u5bfc\u81f4 GC \u5199\u5165\u6587\u4ef6\u7cfb\u7edf\uff0c\u5982\u679c\u78c1\u76d8 IO \u9ad8\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u4e3b\u8981\u5ef6\u8fdf - \u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://www.evanjones.ca/jvm-mmap-pause.html"},"https://www.evanjones.ca/jvm-mmap-pause.html")))),(0,r.kt)("h3",{id:"\u900f\u660e\u5927\u9875"},"\u900f\u660e\u5927\u9875"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6709\u4e89\u8bae\u7684\u529f\u80fd\uff0c\u5982\u679c\u60a8\u65e0\u6cd5\u914d\u7f6e\u4e3b\u673a\u4ee5\u4f7f\u7528\u771f\u6b63\u7684 HugeTLBFS\uff0c\u5219\u53ef\u80fd\u4f1a\u6709\u7528\u3002\u5c1d\u8bd5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseTransparentHugePages"),"\uff0c\u4f46\u975e\u5e38\u91cd\u8981\u7684\u662f\u60a8\u8fd8\u5fc5\u987b\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"AlwaysPreTouch"),"\u3002\u5426\u5219\uff0cTHP \u53ef\u80fd\u4f1a\u5bf9\u60a8\u9020\u6210\u4f24\u5bb3\u3002\u6211\u4eec\u5c1a\u672a\u6d4b\u91cf THP \u5728 Minecraft \u4e2d\u7684\u5de5\u4f5c\u65b9\u5f0f\u6216\u5176\u4e0e AlwaysPreTouch \u7684\u5f71\u54cd\uff0c\u56e0\u6b64\u6b64\u90e8\u5206\u9002\u7528\u4e8e\u5e0c\u671b\u8fdb\u884c\u5b9e\u9a8c\u7684\u9ad8\u7ea7\u7528\u6237\u3002"))}c.isMDXComponent=!0}}]);