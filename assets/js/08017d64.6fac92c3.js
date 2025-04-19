"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[6346],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},y="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),y=p(n),u=l,d=y["".concat(s,".").concat(u)]||y[u]||m[u]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[y]="string"==typeof t?t:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22931:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={},i="Missing summary",a={type:"api",id:"missing-summary-2",unversionedId:"missing-summary-2",title:"Missing summary",description:"",slug:"/missing-summary-2",frontMatter:{},api:{tags:["project"],description:"list my projects",parameters:[{name:"page",in:"query",description:"which page",schema:{type:"number"},required:!1},{name:"size",in:"query",description:"size of each page",schema:{type:"number"}},{name:"sort_field",in:"query",schema:{type:"string"}},{name:"sort_order",in:"query",schema:{type:"string",enum:["asc","desc"]}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{page:{type:"number"},size:{type:"number"},total:{type:"number"},rows:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"uniq id for project"},logo:{type:"string",description:"logo of the project, can be base64 image or image url"},name:{type:"string",description:"name of the project"},status:{type:"string",enum:["open","pending_close","closed"],description:"status of the project"},sponsors:{description:"project holder, may be one or more user address",type:"array",items:{type:"string"}},members:{description:"project member, the value is member ID",type:"array",items:{type:"string",description:"user ID"}},proposals:{description:"proposal IDs",type:"array",items:{type:"string",description:"proposal ID"}}}}}}}}}}},method:"get",path:"/my_projects",servers:[{url:"https://api.example.com/v1"},{url:"http://localhost:8080/v1"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"Super App API",version:"1.0"},postman:{name:"/my_projects",description:{content:"list my projects",type:"text/plain"},url:{path:["my_projects"],host:["{{baseUrl}}"],query:[{description:{content:"which page",type:"text/plain"},key:"page",value:"<number>"},{description:{content:"size of each page",type:"text/plain"},key:"size",value:"<number>"},{description:{content:"",type:"text/plain"},key:"sort_field",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sort_order",value:"<string>"}],variable:[]},method:"GET"}},source:"@site/seedao-docs/02-os-api/api/_spec_.yml",sourceDirName:"02-os-api/api",permalink:"/missing-summary-2",previous:{title:"Missing summary",permalink:"/missing-summary-1"},next:{title:"Missing summary",permalink:"/missing-summary-3"}},s=[],p={toc:s},c="wrapper";function y(t){let{components:e,...n}=t;return(0,l.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"missing-summary"},"Missing summary"),(0,l.kt)("p",null,"list my projects"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"page"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"which page")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"size"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"size of each page")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"sort_field"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"sort_order"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"asc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"desc"),"]")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"OK"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"page"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"size"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"total"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"rows"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"uniq id for project")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"logo of the project, can be base64 image or image url")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"name of the project")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pending_close"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"closed"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"status of the project")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"sponsors"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"project holder, may be one or more user address")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"members"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"project member, the value is member ID")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"proposals"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"proposal IDs"))))))))))))))))}y.isMDXComponent=!0}}]);