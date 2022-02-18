"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68410],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26945:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],o={title:"\u8de8\u5e73\u53f0\u5f00\u53d1"},p=void 0,s={unversionedId:"envs",id:"version-3.x/envs",title:"\u8de8\u5e73\u53f0\u5f00\u53d1",description:"Taro \u7684\u8bbe\u8ba1\u521d\u8877\u5c31\u662f\u4e3a\u4e86\u7edf\u4e00\u8de8\u5e73\u53f0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5e76\u4e14\u5df2\u7ecf\u5c3d\u529b\u901a\u8fc7\u8fd0\u884c\u65f6\u6846\u67b6\u3001\u7ec4\u4ef6\u3001API \u53bb\u62b9\u5e73\u591a\u7aef\u5dee\u5f02\uff0c\u4f46\u662f\u7531\u4e8e\u4e0d\u540c\u7684\u5e73\u53f0\u4e4b\u95f4\u8fd8\u662f\u5b58\u5728\u4e00\u4e9b\u65e0\u6cd5\u6d88\u9664\u7684\u5dee\u5f02\uff0c\u6240\u4ee5\u4e3a\u4e86\u66f4\u597d\u7684\u5b9e\u73b0\u8de8\u5e73\u53f0\u5f00\u53d1\uff0cTaro \u4e2d\u63d0\u4f9b\u4e86\u5982\u4e0b\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/versioned_docs/version-3.x/envs.md",sourceDirName:".",slug:"/envs",permalink:"/taro/docs/envs",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/envs.md",tags:[],version:"3.x",frontMatter:{title:"\u8de8\u5e73\u53f0\u5f00\u53d1"},sidebar:"docs",previous:{title:"\u9759\u6001\u8d44\u6e90\u5f15\u7528",permalink:"/taro/docs/static-reference"},next:{title:"\u591a\u7aef\u540c\u6b65\u8c03\u8bd5",permalink:"/taro/docs/envs-debug"}},c=[{value:"\u5185\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5185\u7f6e\u73af\u5883\u53d8\u91cf",children:[{value:"process.env.TARO_ENV",id:"processenvtaro_env",children:[{value:"1. \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c H5 \u7aef\u5206\u522b\u5f15\u7528\u4e0d\u540c\u8d44\u6e90\uff1a",id:"1-\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c-h5-\u7aef\u5206\u522b\u5f15\u7528\u4e0d\u540c\u8d44\u6e90",children:[],level:4},{value:"2. \u51b3\u5b9a\u4e0d\u540c\u7aef\u8981\u52a0\u8f7d\u7684\u7ec4\u4ef6",id:"2-\u51b3\u5b9a\u4e0d\u540c\u7aef\u8981\u52a0\u8f7d\u7684\u7ec4\u4ef6",children:[],level:4}],level:3}],level:2},{value:"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6",id:"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6",children:[{value:"\u4f7f\u7528\u8981\u70b9",id:"\u4f7f\u7528\u8981\u70b9",children:[],level:3},{value:"\u591a\u7aef\u7ec4\u4ef6",id:"\u591a\u7aef\u7ec4\u4ef6",children:[],level:3},{value:"\u591a\u7aef\u811a\u672c\u903b\u8f91",id:"\u591a\u7aef\u811a\u672c\u903b\u8f91",children:[],level:3},{value:"\u591a\u7aef\u9875\u9762\u8def\u7531",id:"\u591a\u7aef\u9875\u9762\u8def\u7531",children:[],level:3},{value:"\u89e3\u6790 node_modules \u5185\u7684\u591a\u7aef\u6587\u4ef6",id:"\u89e3\u6790-node_modules-\u5185\u7684\u591a\u7aef\u6587\u4ef6",children:[{value:"\u5c0f\u7a0b\u5e8f &amp; H5",id:"\u5c0f\u7a0b\u5e8f--h5",children:[],level:4},{value:"React Native",id:"react-native",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Taro \u7684\u8bbe\u8ba1\u521d\u8877\u5c31\u662f\u4e3a\u4e86\u7edf\u4e00\u8de8\u5e73\u53f0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5e76\u4e14\u5df2\u7ecf\u5c3d\u529b\u901a\u8fc7\u8fd0\u884c\u65f6\u6846\u67b6\u3001\u7ec4\u4ef6\u3001API \u53bb\u62b9\u5e73\u591a\u7aef\u5dee\u5f02\uff0c\u4f46\u662f\u7531\u4e8e\u4e0d\u540c\u7684\u5e73\u53f0\u4e4b\u95f4\u8fd8\u662f\u5b58\u5728\u4e00\u4e9b\u65e0\u6cd5\u6d88\u9664\u7684\u5dee\u5f02\uff0c\u6240\u4ee5\u4e3a\u4e86\u66f4\u597d\u7684\u5b9e\u73b0\u8de8\u5e73\u53f0\u5f00\u53d1\uff0cTaro \u4e2d\u63d0\u4f9b\u4e86\u5982\u4e0b\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("h2",{id:"\u5185\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5185\u7f6e\u73af\u5883\u53d8\u91cf"),(0,l.kt)("p",null,"Taro \u5728\u7f16\u8bd1\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u6765\u5e2e\u52a9\u7528\u6237\u505a\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"processenvtaro_env"},"process.env.TARO_ENV"),(0,l.kt)("p",null,"\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u7684\u7f16\u8bd1\u5e73\u53f0\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u53d6\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"weapp")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"swan")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"alipay")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"tt")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"qq")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"jd")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"h5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"rn")," "),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u53d8\u91cf\u6765\u533a\u5206\u4e0d\u540c\u73af\u5883\uff0c\u4ece\u800c\u4f7f\u7528\u4e0d\u540c\u7684\u903b\u8f91\u3002\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4f1a\u79fb\u9664\u4e0d\u5c5e\u4e8e\u5f53\u524d\u7f16\u8bd1\u7c7b\u578b\u7684\u4ee3\u7801\uff0c\u53ea\u4fdd\u7559\u5f53\u524d\u7f16\u8bd1\u7c7b\u578b\u4e0b\u7684\u4ee3\u7801"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("h4",{id:"1-\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c-h5-\u7aef\u5206\u522b\u5f15\u7528\u4e0d\u540c\u8d44\u6e90"},"1. \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c H5 \u7aef\u5206\u522b\u5f15\u7528\u4e0d\u540c\u8d44\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"/** \u6e90\u7801 */\nif (process.env.TARO_ENV === 'weapp') {\n  require('path/to/weapp/name')\n} else if (process.env.TARO_ENV === 'h5') {\n  require('path/to/h5/name')\n}\n\n/** \u7f16\u8bd1\u540e\uff08\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff09*/\nif (true) {\n  require('path/to/weapp/name')\n}\n/** \u7f16\u8bd1\u540e\uff08H5\uff09*/\nif (true) {\n  require('path/to/h5/name')\n}\n")),(0,l.kt)("h4",{id:"2-\u51b3\u5b9a\u4e0d\u540c\u7aef\u8981\u52a0\u8f7d\u7684\u7ec4\u4ef6"},"2. \u51b3\u5b9a\u4e0d\u540c\u7aef\u8981\u52a0\u8f7d\u7684\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"/** \u6e90\u7801\uff08React JSX\uff09 */\n<View>\n  {process.env.TARO_ENV === 'weapp' && <ScrollViewWeapp />}\n  {process.env.TARO_ENV === 'h5' && <ScrollViewH5 />}\n</View>\n\n/** \u7f16\u8bd1\u540e\uff08\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff09*/\n<View>\n  {true && <ScrollViewWeapp />}\n</View>\n/** \u7f16\u8bd1\u540e\uff08H5\uff09*/\n<View>\n  {true && <ScrollViewH5 />}\n</View>\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0d\u8981\u89e3\u6784 ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env")," \u6765\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u8bf7\u76f4\u63a5\u4ee5\u5b8c\u6574\u4e66\u5199\u7684\u65b9\u5f0f\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TARO_ENV"),"\uff09\u6765\u8fdb\u884c\u4f7f\u7528\u3002"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6b63\u786e\u5199\u6cd5\nif (process.env.TARO_ENV === 'weapp') {}\n\n// \u9519\u8bef\u5199\u6cd5\nconst { TARO_ENV = 'weapp' } = process.env\nif (TARO_ENV === 'weapp') {}\n")))),(0,l.kt)("h2",{id:"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6"},"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6"),(0,l.kt)("p",null,"\u5185\u7f6e\u73af\u5883\u53d8\u91cf\u867d\u7136\u53ef\u4ee5\u89e3\u51b3\u5927\u90e8\u5206\u8de8\u7aef\u7684\u95ee\u9898\uff0c\u4f46\u662f\u4f1a\u8ba9\u4ee3\u7801\u4e2d\u5145\u65a5\u7740\u903b\u8f91\u5224\u65ad\u7684\u4ee3\u7801\uff0c\u5f71\u54cd\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\uff0c\u800c\u4e14\u4e5f\u8ba9\u4ee3\u7801\u53d8\u5f97\u6108\u53d1\u4e11\u964b\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\uff0cTaro \u63d0\u4f9b\u4e86\u53e6\u5916\u4e00\u79cd\u8de8\u7aef\u5f00\u53d1\u7684\u65b9\u5f0f\u4f5c\u4e3a\u8865\u5145\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6"),"\uff0c\u6765\u89e3\u51b3\u8de8\u7aef\u5dee\u5f02\u7684\u529f\u80fd\u3002\u9488\u5bf9\u4e00\u9879\u529f\u80fd\uff0c\u5982\u679c\u591a\u4e2a\u7aef\u4e4b\u95f4\u90fd\u6709\u5dee\u5f02\uff0c\u90a3\u4e48\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5c06\u6587\u4ef6\u4fee\u6539\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u539f\u6587\u4ef6\u540d + \u7aef\u7c7b\u578b")," \u7684\u547d\u540d\u5f62\u5f0f\uff08\u7aef\u7c7b\u578b\u5bf9\u5e94\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TARO_ENV")," \u7684\u53d6\u503c\uff09\uff0c\u4e0d\u540c\u7aef\u7684\u6587\u4ef6\u4ee3\u7801\u5bf9\u5916\u4fdd\u6301\u7edf\u4e00\u63a5\u53e3\uff0c\u800c\u5f15\u7528\u7684\u65f6\u5019\u4ecd\u7136\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u539f\u6587\u4ef6\u540d\u7684\u6587\u4ef6\u3002Taro \u5728\u7f16\u8bd1\u65f6\uff0c\u4f1a\u8ddf\u6839\u636e\u5f53\u524d\u7684\u7f16\u8bd1\u5e73\u53f0\u7c7b\u578b\uff0c\u5c06\u52a0\u8f7d\u7684\u6587\u4ef6\u53d8\u66f4\u4e3a\u5e26\u6709\u5bf9\u5e94\u7aef\u7c7b\u578b\u6587\u4ef6\u540d\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u8fbe\u5230\u4e0d\u540c\u7684\u7aef\u52a0\u8f7d\u5bf9\u5e94\u6587\u4ef6\u7684\u76ee\u7684\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u8981\u70b9"},"\u4f7f\u7528\u8981\u70b9"),(0,l.kt)("p",null,"\u7edf\u4e00\u63a5\u53e3\u7684\u591a\u7aef\u6587\u4ef6\u8fd9\u4e00\u8de8\u5e73\u53f0\u517c\u5bb9\u5199\u6cd5\u6709\u5982\u4e0b\u4e09\u4e2a\u4f7f\u7528\u8981\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7aef\u7684\u5bf9\u5e94\u6587\u4ef6\u4e00\u5b9a\u8981",(0,l.kt)("strong",{parentName:"li"},"\u7edf\u4e00\u63a5\u53e3\u548c\u8c03\u7528\u65b9\u5f0f"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6587\u4ef6\u7684\u65f6\u5019\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u53ea\u9700\u8981\u5199\u9ed8\u8ba4\u6587\u4ef6\u540d\uff0c\u4e0d\u7528\u5e26\u6587\u4ef6\u540e\u7f00"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u6709\u4e00\u4e2a\u5e73\u53f0\u65e0\u5173\u7684\u9ed8\u8ba4\u6587\u4ef6\uff0c\u8fd9\u6837\u5728\u4f7f\u7528 TS \u7684\u65f6\u5019\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u62a5\u9519\u3002")),(0,l.kt)("p",null,"\u901a\u5e38\u6709\u4ee5\u4e0b\u4e09\u79cd\u4f7f\u7528\u573a\u666f\uff1a"),(0,l.kt)("h3",{id:"\u591a\u7aef\u7ec4\u4ef6"},"\u591a\u7aef\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5047\u5982\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Test")," \u7ec4\u4ef6\u5b58\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u548c H5 \u4e09\u4e2a\u4e0d\u540c\u7248\u672c\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u50cf\u5982\u4e0b\u7ec4\u7ec7\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 test.js                Test \u7ec4\u4ef6\u9ed8\u8ba4\u7684\u5f62\u5f0f\uff0c\u7f16\u8bd1\u5230\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u548c H5 \u4e4b\u5916\u7684\u7aef\u4f7f\u7528\u7684\u7248\u672c\n\u251c\u2500\u2500 test.weapp.js          Test \u7ec4\u4ef6\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7248\u672c\n\u251c\u2500\u2500 test.swan.js           Test \u7ec4\u4ef6\u7684\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7248\u672c\n\u2514\u2500\u2500 test.h5.js             Test \u7ec4\u4ef6\u7684 H5 \u7248\u672c\n")),(0,l.kt)("p",null,"\u56db\u4e2a\u6587\u4ef6\uff0c\u5bf9\u5916\u66b4\u9732\u7684\u662f\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u5b83\u4eec\u63a5\u53d7\u4e00\u81f4\u7684\u53c2\u6570\uff0c\u53ea\u662f\u5185\u90e8\u6709\u9488\u5bf9\u5404\u81ea\u5e73\u53f0\u7684\u4ee3\u7801\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u800c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Test")," \u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u5f15\u7528\u7684\u65b9\u5f0f\u4f9d\u7136\u548c\u4e4b\u524d\u4fdd\u6301\u4e00\u81f4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u7684\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5e26\u7aef\u7c7b\u578b\u7684\u6587\u4ef6\u540d"),"\uff0c\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u6dfb\u52a0\u7aef\u7c7b\u578b\u540e\u7f00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import Test from '../../components/test'\n\n<Test argA={1} argA={2} />\n")),(0,l.kt)("h3",{id:"\u591a\u7aef\u811a\u672c\u903b\u8f91"},"\u591a\u7aef\u811a\u672c\u903b\u8f91"),(0,l.kt)("p",null,"\u4e0e\u591a\u7aef\u7ec4\u4ef6\u7c7b\u4f3c\uff0c\u5047\u5982\u6709\u9700\u8981\u9488\u5bf9\u4e0d\u540c\u7684\u7aef\u5199\u4e0d\u540c\u7684\u811a\u672c\u903b\u8f91\u4ee3\u7801\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u7c7b\u4f3c\u7684\u8fdb\u884c\u5904\u7406\uff0c\u9075\u5b88\u7684\u552f\u4e00\u539f\u5219\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u591a\u7aef\u6587\u4ef6\u5bf9\u5916\u7684\u63a5\u53e3\u4fdd\u6301\u4e00\u81f4"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e0a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.setNavigationBarTitle")," \u6765\u8bbe\u7f6e\u9875\u9762\u6807\u9898\uff0cH5 \u5219\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"document.title"),"\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5c01\u88c5\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"setTitle")," \u65b9\u6cd5\u6765\u62b9\u5e73\u4e24\u4e2a\u5e73\u53f0\u7684\u5dee\u5f02\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},"set_title.weapp.js"),"\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="set_title.weapp.js"',title:'"set_title.weapp.js"'},"import Taro from '@tarojs/taro'\nexport default function setTitle (title) {\n  Taro.setNavigationBarTitle({\n    title\n  })\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},"set_title.h5.js"),"\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="set_title.h5.js"',title:'"set_title.h5.js"'},"export default function setTitle (title) {\n  document.title = title\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import setTitle from '../utils/set_title'\n\nsetTitle('\u9875\u9762\u6807\u9898')\n")),(0,l.kt)("h3",{id:"\u591a\u7aef\u9875\u9762\u8def\u7531"},"\u591a\u7aef\u9875\u9762\u8def\u7531"),(0,l.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u5e73\u53f0\uff0c\u8bbe\u7f6e\u4e0d\u540c\u7684\u8def\u7531\u89c4\u5219\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'},"let pages = []\n\nif (process.env.TARO_ENV === 'weapp') {\n  pages = [\n    '/pages/index/index'\n  ]\n}\n\nif (process.env.TARO_ENV === 'swan') {\n  pages = [\n    '/pages/indexswan/indexswan'\n  ]\n}\n\nexport default {\n  pages\n}\n")),(0,l.kt)("h3",{id:"\u89e3\u6790-node_modules-\u5185\u7684\u591a\u7aef\u6587\u4ef6"},"\u89e3\u6790 node_modules \u5185\u7684\u591a\u7aef\u6587\u4ef6"),(0,l.kt)("h4",{id:"\u5c0f\u7a0b\u5e8f--h5"},"\u5c0f\u7a0b\u5e8f & H5"),(0,l.kt)("p",null,"Taro 3 \u91cc\u7684\u591a\u7aef\u6587\u4ef6\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/packages/taro-runner-utils/src/resolve/MultiPlatformPlugin.ts"},"MultiPlatformPlugin")," \u63d2\u4ef6\u8fdb\u884c\u89e3\u6790\u3002"),(0,l.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve"},"enhanced-resolve")," \u63d2\u4ef6\uff0cTaro \u5185\u90e8\u4f1a\u9ed8\u8ba4\u52a0\u8f7d\u5b83\u3002\u4f46\u4e3a\u4e86\u63d0\u9ad8\u89e3\u6790\u6548\u7387\uff0c\u63d2\u4ef6",(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e0d\u89e3\u6790 node_modules \u4e2d\u7684\u6587\u4ef6"),"\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u9700\u8981\u89e3\u6790 NPM \u5305 ",(0,l.kt)("strong",{parentName:"p"},"taro-mobile")," \u91cc\u9762\u7684\u591a\u7aef\u6587\u4ef6\uff0c\u53ef\u4ee5\u5229\u7528 WebpackChain \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"MultiPlatformPlugin")," \u63d2\u4ef6\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"// mini \u4e5f\u53ef\u6539\u4e3a h5\uff0c\u5206\u522b\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u4e0e h5 \u7aef\u914d\u7f6e\nmini: {\n  webpackChain (chain) {\n    // Taro 3.1 & 3.2\n    chain.resolve.plugin('MultiPlatformPlugin')\n      .tap(args => {\n        return [...args, {\n          include: ['@taro-mobile']\n        }]\n      })\n\n    // Taro 3.3+\n    chain.resolve.plugin('MultiPlatformPlugin')\n      .tap(args => {\n         args[2][\"include\"] = ['@taro-mobile']\n         return args\n      })\n  }\n}\n")),(0,l.kt)("h4",{id:"react-native"},"React Native"),(0,l.kt)("p",null,"RN \u7aef\u6ca1\u6709\u4f7f\u7528 Webpack\uff0c\u56e0\u6b64\u5355\u72ec\u589e\u52a0\u4e86\u4e00\u4e2a\u914d\u7f6e\u652f\u6301\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"rn: {\n  resolve: {\n    include: ['taro-mobile'],\n  }\n}\n")))}d.isMDXComponent=!0}}]);