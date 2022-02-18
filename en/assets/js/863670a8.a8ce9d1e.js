"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93899],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),l=n(67294),a=n(72389),o=n(24726),i=n(86010),d="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,c=e.block,s=e.defaultValue,p=e.values,k=e.groupId,m=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(t=null!=s?s:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),f=b.tabGroupChoices,x=b.setTabGroupChoices,N=(0,l.useState)(y),A=N[0],w=N[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=f[k];null!=P&&P!==A&&v.some((function(e){return e.value===P}))&&w(P)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==A&&(E(t),w(r),null!=k&&x(k,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;n=T[l]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:C,onClick:C},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),u?(0,l.cloneElement)(h.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function c(e){var t=(0,a.Z)();return l.createElement(u,(0,r.Z)({key:String(t)},e))}},23959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=n(9877),i=n(58215),d=["components"],u={title:"Ad",sidebar_label:"Ad"},c=void 0,s={unversionedId:"components/open/ad",id:"version-3.x/components/open/ad",title:"Ad",description:"Banner ad.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/ad.md",sourceDirName:"components/open",slug:"/components/open/ad",permalink:"/taro/en/docs/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/ad.md",tags:[],version:"3.x",frontMatter:{title:"Ad",sidebar_label:"Ad"},sidebar:"components",previous:{title:"Canvas",permalink:"/taro/en/docs/components/canvas/"},next:{title:"AdCustom",permalink:"/taro/en/docs/components/open/ad-custom"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"AdProps",id:"adprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:3},{value:"AdErrCode",id:"aderrcode",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],k={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Banner ad."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/ad.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<AdProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unitId=''\n        adIntervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),(0,a.kt)("h2",{id:"adprops"},"AdProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"unitId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"d unit ID, which can be created via the Ad Host module in",(0,a.kt)("a",{href:"https://mp.weixin.qq.com/?lang=en_US&token="}," Mini Program Console"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"adIntervals"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The interval between the automatic refresh of the advertisements in seconds, the value of the parameter must be greater than or equal to 30.\uff08Banner ads are not refreshed automatically if this parameter is not set.\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Callback used when an ad is loaded")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Callback used when ad loading failed. event.detail = ","{errCode: 1002}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onClose"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Callback used when an ad is closed")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.unitId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.adIntervals"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onLoad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onClose"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),(0,a.kt)("h3",{id:"aderrcode"},"AdErrCode"),(0,a.kt)("p",null,"An error code is obtained by executing the binderror callback."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Code"),(0,a.kt)("th",{style:{textAlign:"center"}},"Exception"),(0,a.kt)("th",{style:{textAlign:"center"}},"Cause"),(0,a.kt)("th",{style:{textAlign:"center"}},"Solution"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"1000"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Call failed due to a backend error")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"This error is not caused by developers.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Ignore the error, and it will be automatically recovered after a period of time."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1001"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Parameter error")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The parameter is incorrectly used.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"For details, visit developers.weixin.qq.com. (There are different courses specific to Mini Programs and Mini Games. In the top tab, you can switch between the courses on the right of the ",(0,a.kt)("strong",null,"Design")," column.)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1002"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Invalid ad unit")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The spelling may be incorrect or the ad ID of another app may be used.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Visit mp.weixin.qq.com to confirm the ad ID."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1003"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Internal error")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"This error is not caused by developers.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Ignore the error, and it will be automatically recovered after a period of time."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1004"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"No suitable ad")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The ad does not appear every time. Maybe it is not appropriate to the user.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"This is a normal case. In addition, you need to improve compatibility in this case."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1005"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The ad component is being reviewed.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Your ad is being reviewed and therefore cannot be displayed.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1006"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The ad component is rejected.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Your ad failed to pass the review and therefore cannot be displayed.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1007"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The ad component is rejected.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Your advertising capability is suspended. ads cannot be displayed during the suspension.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Visit mp.weixin.qq.com to check the Mini Program ad suspension status."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1008"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The ad unit is disabled.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"The advertising capability in the advertising space is disabled.")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"Visit mp.weixin.qq.com to enable the display in the advertising space."))))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Ad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);