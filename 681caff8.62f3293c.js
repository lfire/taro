(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{1763:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1764:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1765:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},762:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(1763),a=r(1764),o=(r(0),r(1765)),c={slug:"2021-04-08-taro-3.2",title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",author:"yechunxi",author_url:"https://github.com/yechunxi",author_image_url:"https://avatars.githubusercontent.com/u/8535673?v=4",tags:["v3"],description:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765"},i={permalink:"/taro/blog/2021-04-08-taro-3.2",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-04-08-taro-3.2.md",source:"@site/blog/2021-04-08-taro-3.2.md",description:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",date:"2021-04-08T00:00:00.000Z",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",readingTime:2.795,truncated:!0,nextItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",permalink:"/taro/blog/2021-03-10-taro-3-1-lts"}},u=[],p={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Taro")," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f ",Object(o.b)("strong",{parentName:"p"},"\u8de8\u7aef\u8de8\u6846\u67b6")," \u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4f7f\u7528   React/Vue/Nerv \u7b49\u6846\u67b6\u6765\u5f00\u53d1 ",Object(o.b)("inlineCode",{parentName:"p"},"\u5fae\u4fe1/\u4eac\u4e1c/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8/QQ\u5c0f\u7a0b\u5e8f/H5/React Native")," \u7b49\u5e94\u7528\u3002"),Object(o.b)("p",null,"\u81ea\u4ece Taro 3 \u53d1\u5e03\u4ee5\u6765\uff0c\u4e0d\u5c11\u5f00\u53d1\u8005\u671f\u5f85 Taro 3 \u53ef\u4ee5\u652f\u6301 React Native\u3002\u57fa\u4e8e 58 \u56e2\u961f\u5728 React Native \u65b9\u5411\u7684\u6280\u672f\u79ef\u7d2f\uff0c\u6211\u4eec\u4e0e Taro \u56e2\u961f\u8fbe\u6210\u6218\u7565\u5408\u4f5c\u4f19\u4f34\u5173\u7cfb\u3002\u7531 58 \u56e2\u961f\u4e3b\u5bfc\u5f00\u53d1 Taro 3 React Native\uff0c\u5171\u540c\u63a8\u8fdb Taro \u7684\u53d1\u5c55\u3002"),Object(o.b)("p",null,"\u53bb\u5e74 12 \u6708\u5f00\u59cb\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/s/-7G7NMHX8ol99QxkswFOxg"}),"Taro 3 React Native \u7684\u652f\u6301"),"\uff0c\u5171\u53d1\u5e03\u4e86 9 \u4e2a canary \u7248\u672c\u4e0e 4 \u4e2a beta \u7248\uff0c\u7ecf\u8fc7\u8f83\u957f\u65f6\u95f4\u7684\u9a8c\u8bc1\uff0c\u5982\u4eca\u7ec8\u4e8e\u8fce\u6765\u4e86 3.2 \u6b63\u5f0f\u7248\u3002"))}l.isMDXComponent=!0}}]);