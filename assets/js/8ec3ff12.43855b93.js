(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[2876],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,u(u({ref:e},s),{},{components:n})):r.createElement(f,u({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60147:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),u={title:"\u4f7f\u7528  NutUI \u4eac\u4e1c\u98ce\u683c\u7ec4\u4ef6\u5e93"},i={unversionedId:"nutui",id:"nutui",isDocsHomePage:!1,title:"\u4f7f\u7528  NutUI \u4eac\u4e1c\u98ce\u683c\u7ec4\u4ef6\u5e93",description:"\u6ce8\u610f\uff1aNutUI \u76ee\u524d\u5fc5\u987b\u4f7f\u7528 taro 3.x \u7248\u672c + vue3 \u6280\u672f\u6808 \u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/docs/nutui.mdx",sourceDirName:".",slug:"/nutui",permalink:"/taro/docs/next/nutui",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/nutui.mdx",version:"current",frontMatter:{title:"\u4f7f\u7528  NutUI \u4eac\u4e1c\u98ce\u683c\u7ec4\u4ef6\u5e93"},sidebar:"docs",previous:{title:"\u4f7f\u7528 CSS-in-JS",permalink:"/taro/docs/next/css-in-js"},next:{title:"\u4f7f\u7528 Vant Weapp",permalink:"/taro/docs/next/vant"}},p=[{value:"\u9884\u89c8\u4f53\u9a8c",id:"\u9884\u89c8\u4f53\u9a8c",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f",id:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f",children:[]},{value:"\u9879\u76ee\u521d\u59cb\u5316",id:"\u9879\u76ee\u521d\u59cb\u5316",children:[]},{value:"NPM \u4f7f\u7528\u793a\u4f8b",id:"npm-\u4f7f\u7528\u793a\u4f8b",children:[]}]}],l={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aNutUI \u76ee\u524d\u5fc5\u987b\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"taro 3.x \u7248\u672c + vue3")," \u6280\u672f\u6808 \u8fdb\u884c\u5f00\u53d1\u3002")),(0,o.kt)("p",null,"\u4e3a\u4e86\u7ed9\u5f00\u53d1\u8005\u63d0\u4f9b\u66f4\u9ad8\u6548\u4fbf\u6377\u7684\u5f00\u53d1\u65b9\u5f0f\uff0cTaro \u548c NutUI \u5408\u529b\uff0c\u73b0\u5df2\u53ef\u4ee5\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://nutui.jd.com/#/starttaro"},"NutUI")," \u5f00\u53d1\u5c0f\u7a0b\u5e8f\u4e86\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://nutui.jd.com/#/starttaro"},"NutUI")," \u63d0\u4f9b\u4e8630+ \u7ec4\u4ef6\u6db5\u76d6\u4e86\u65e5\u5e38\u4e1a\u52a1\u5f00\u53d1\u4f7f\u7528\u7684\u5927\u90e8\u5206\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"Taro3 \u652f\u6301\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://nutui.jd.com/#/starttaro"},"NutUI")," \u7ec4\u4ef6\u5e93\u8fdb\u884c\u5f00\u53d1\uff0c\u793a\u4f8b\u4ed3\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"},"taro3-nutui"),"\u3002"),(0,o.kt)("h2",{id:"\u9884\u89c8\u4f53\u9a8c"},"\u9884\u89c8\u4f53\u9a8c"),(0,o.kt)("img",{src:"https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png",width:"200",alt:"NutUI"}),(0,o.kt)("img",{src:"https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg",width:"200",alt:"NutUI"}),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Npm \u6216 Yarn \u5b89\u88c5")),(0,o.kt)("h4",{id:"\u5b89\u88c5-taro-\u811a\u624b\u67b6"},"\u5b89\u88c5 Taro \u811a\u624b\u67b6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 npm \u5b89\u88c5 CLI\nnpm install -g @tarojs/cli\n\n# OR \u4f7f\u7528 yarn \u5b89\u88c5 CLI\nyarn global add @tarojs/cli\n\n# OR \u5b89\u88c5\u4e86 cnpm\uff0c\u4f7f\u7528 cnpm \u5b89\u88c5 CLI\ncnpm install -g @tarojs/cli\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u5b89\u88c5\u8fc7\u7a0b\u51fa\u73b0sass\u76f8\u5173\u7684\u5b89\u88c5\u9519\u8bef\uff0c\u8bf7\u5728\u5b89\u88c5 mirror-config-china \u540e\u91cd\u8bd5\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g mirror-config-china\n")),(0,o.kt)("h3",{id:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f"},"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"taro -v\n")),(0,o.kt)("h3",{id:"\u9879\u76ee\u521d\u59cb\u5316"},"\u9879\u76ee\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u521b\u5efa\u6a21\u677f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"taro init myApp\n")),(0,o.kt)("h4",{id:"\u6309\u7167\u4e0b\u65b9\u56fe\u7247\u4f9d\u6b21\u9009\u62e9\uff0c\u9009\u62e9-vue3--nutui-\u6a21\u677f"},"\u6309\u7167\u4e0b\u65b9\u56fe\u7247\u4f9d\u6b21\u9009\u62e9\uff0c\u9009\u62e9 Vue3 + NutUI \u6a21\u677f"),(0,o.kt)("img",{src:"https://storage.360buyimg.com/jdc-article/taro.jpg"}),(0,o.kt)("h3",{id:"npm-\u4f7f\u7528\u793a\u4f8b"},"NPM \u4f7f\u7528\u793a\u4f8b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fd9\u79cd\u65b9\u5f0f\u5c06\u4f1a\u5bfc\u5165\u6240\u6709\u7ec4\u4ef6\uff0c\u6253\u5305\u6587\u4ef6\u5927\u5c0f\u4f1a\u5f88\u5927")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { createApp } from "vue";\nimport App from "./App.vue";\nimport NutUI from "@nutui/nutui-taro";\nimport "@nutui/nutui-taro/dist/style.css";\ncreateApp(App).use(NutUI);\n')),(0,o.kt)("h4",{id:"\u63a8\u8350\u4f7f\u7528\u6309\u9700\u52a0\u8f7d"},"\u63a8\u8350\u4f7f\u7528\u6309\u9700\u52a0\u8f7d"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import")," \u662f\u4e00\u6b3e babel \u63d2\u4ef6\uff0c\u5b83\u4f1a\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c06 import \u8bed\u53e5\u81ea\u52a8\u8f6c\u6362\u4e3a\u6309\u9700\u5f15\u5165\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("h5",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install babel-plugin-import --save-dev\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," \u4e2d\u6dfb\u52a0\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // ...\n  plugins: [\n    [\n      "import",\n      {\n        "libraryName": "@nutui/nutui",\n        "libraryDirectory": "dist/packages/_es",\n        "camel2DashComponentName": false\n      },\n      \'nutui3-vue\'\n    ],\n    [\n      "import",\n      {\n        "libraryName": "@nutui/nutui-taro",\n        "libraryDirectory": "dist/packages/_es",\n        "camel2DashComponentName": false\n      },\n      \'nutui3-taro\'\n    ]\n  ]\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { createApp } from "vue";\nimport App from "./App.vue";\nimport { Button, Cell, Icon } from "@nutui/nutui-taro";\nimport "@nutui/nutui-taro/dist/style.css";\ncreateApp(App).use(Button).use(Cell).use(Icon);\n')),(0,o.kt)("h4",{id:"\u5b9a\u5236\u5316\u4e3b\u9898\u4f7f\u7528"},"\u5b9a\u5236\u5316\u4e3b\u9898\u4f7f\u7528"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u5728 ",(0,o.kt)("strong",{parentName:"p"},"app.ts")," \u6587\u4ef6\u4e2d\u914d\u7f6e \u4f7f\u7528 scss \u6837\u5f0f\u6587\u4ef6\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { createApp } from "vue";\nimport App from "./App.vue";\nimport { Button, Cell, Icon } from "@nutui/nutui-taro";\n// \u5b9a\u5236\u5316\u4e3b\u9898\u5fc5\u987b\u4f7f\u7528 scss\nimport \'@nutui/nutui-taro/dist/styles/themes/default.scss\';\ncreateApp(App).use(Button).use(Cell).use(Icon);\n')),(0,o.kt)("p",null,"\u521b\u5efa\u5b9a\u5236\u5316\u4e3b\u9898\u6837\u5f0f\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/styles/custom_theme.scss")," \uff0c\u6837\u5f0f\u53d8\u91cf\u8986\u76d6\u8868\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss"},"nutui variables")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$primary-color: #478EF2;\n$primary-color-end: #496AF2;\n")),(0,o.kt)("p",null,"\u7136\u540e\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"config/index.js")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"scss")," \u6587\u4ef6\u5168\u5c40\u8986\u76d6\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\nconst config = {\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2,\n    375: 2 / 1\n  },\n  sass: {\n    resource: [\n        path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')\n    ]\n  },\n  // ...\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vue")," \u6587\u4ef6\u4e2d\u4f7f\u7528\u67e5\u770b\u6548\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view>\n      <nut-button type="primary" >nutui</nut-button>\n  </view>\n</template>\n')))}s.isMDXComponent=!0}}]);