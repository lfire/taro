(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1763:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},1764:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,b={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}n.d(t,"a",(function(){return l}))},1765:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var l=n(0),b=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var a=b.a.createContext({}),O=function(e){var t=b.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=O(e.components);return b.a.createElement(a.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),d=O(n),i=l,s=d["".concat(r,".").concat(i)]||d[i]||j[i]||c;return n?b.a.createElement(s,o(o({ref:t},a),{},{components:n})):b.a.createElement(s,o({ref:t},a))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=i;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var a=2;a<c;a++)r[a]=n[a];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return O}));var l=n(1763),b=n(1764),c=(n(0),n(1765)),r={title:"Taro.getSystemInfo(res)",sidebar_label:"getSystemInfo"},o={unversionedId:"apis/base/system/getSystemInfo",id:"version-2.x/apis/base/system/getSystemInfo",isDocsHomePage:!1,title:"Taro.getSystemInfo(res)",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/base/system/getSystemInfo.md",slug:"/apis/base/system/getSystemInfo",permalink:"/taro/docs/2.x/apis/base/system/getSystemInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/system/getSystemInfo.md",version:"2.x",sidebar_label:"getSystemInfo",sidebar:"version-2.x/API",previous:{title:"Taro.arrayBufferToBase64(buffer)",permalink:"/taro/docs/2.x/apis/base/arrayBufferToBase64"},next:{title:"Taro.getSystemInfoSync()",permalink:"/taro/docs/2.x/apis/base/system/getSystemInfoSync"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"Result",id:"result",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],a={rightToc:u};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => Promise<Result>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: any) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: any) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: Result) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"result"},"Result"),Object(c.b)("p",null,"\u6ce8\u610f\uff1a",Object(c.b)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"SDKVersion"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")),Object(c.b)("tr",null,Object(c.b)("td",null,"albumAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u76f8\u518c\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"benchmarkLevel"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff08\u4ec5Android\u5c0f\u6e38\u620f\uff09\u3002\u53d6\u503c\u4e3a\uff1a-2 \u6216 0\uff08\u8be5\u8bbe\u5907\u65e0\u6cd5\u8fd0\u884c\u5c0f\u6e38\u620f\uff09\uff0c-1\uff08\u6027\u80fd\u672a\u77e5\uff09\uff0c>=1\uff08\u8bbe\u5907\u6027\u80fd\u503c\uff0c\u8be5\u503c\u8d8a\u9ad8\uff0c\u8bbe\u5907\u6027\u80fd\u8d8a\u597d\uff0c\u76ee\u524d\u6700\u9ad8\u4e0d\u523050\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"bluetoothEnabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u84dd\u7259\u7684\u7cfb\u7edf\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"brand"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8bbe\u5907\u54c1\u724c")),Object(c.b)("tr",null,Object(c.b)("td",null,"cameraAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u6444\u50cf\u5934\u7684\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"fontSizeSetting"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\uff08\u5355\u4f4dpx\uff09\u3002\u4ee5\u5fae\u4fe1\u5ba2\u6237\u7aef\u300c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u300d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6")),Object(c.b)("tr",null,Object(c.b)("td",null,"language"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),Object(c.b)("tr",null,Object(c.b)("td",null,"locationAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u5b9a\u4f4d\u7684\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"locationEnabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5730\u7406\u4f4d\u7f6e\u7684\u7cfb\u7edf\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"microphoneAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u9ea6\u514b\u98ce\u7684\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"model"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8bbe\u5907\u578b\u53f7")),Object(c.b)("tr",null,Object(c.b)("td",null,"notificationAlertAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u63d0\u9192\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"notificationAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u7684\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"notificationBadgeAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u6807\u8bb0\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"notificationSoundAuthorized"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u58f0\u97f3\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"pixelRatio"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8bbe\u5907\u50cf\u7d20\u6bd4")),Object(c.b)("tr",null,Object(c.b)("td",null,"platform"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5ba2\u6237\u7aef\u5e73\u53f0")),Object(c.b)("tr",null,Object(c.b)("td",null,"safeArea"),Object(c.b)("td",null,Object(c.b)("code",null,"SafeAreaResult")),Object(c.b)("td",null,"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df")),Object(c.b)("tr",null,Object(c.b)("td",null,"screenHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5c4f\u5e55\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),Object(c.b)("tr",null,Object(c.b)("td",null,"screenWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")),Object(c.b)("tr",null,Object(c.b)("td",null,"statusBarHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),Object(c.b)("tr",null,Object(c.b)("td",null,"system"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u64cd\u4f5c\u7cfb\u7edf\u53ca\u7248\u672c")),Object(c.b)("tr",null,Object(c.b)("td",null,"version"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5fae\u4fe1\u7248\u672c\u53f7")),Object(c.b)("tr",null,Object(c.b)("td",null,"wifiEnabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",null,"Wi-Fi \u7684\u7cfb\u7edf\u5f00\u5173")),Object(c.b)("tr",null,Object(c.b)("td",null,"windowHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),Object(c.b)("tr",null,Object(c.b)("td",null,"windowWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getSystemInfo({\n  success: res => console.log(res)\n})\n.then(res => console.log(res))\n")),Object(c.b)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getSystemInfo({\n  success: function (res) {\n    console.log(res.model)\n    console.log(res.pixelRatio)\n    console.log(res.windowWidth)\n    console.log(res.windowHeight)\n    console.log(res.language)\n    console.log(res.version)\n    console.log(res.platform)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.getSystemInfo"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);