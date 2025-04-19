"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[3380],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,l=function(t,e){if(null==t)return{};var n,i,l={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=i.createContext({}),p=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),y=l,m=d["".concat(o,".").concat(y)]||d[y]||u[y]||r;return n?i.createElement(m,a(a({ref:e},c),{},{components:n})):i.createElement(m,a({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,a=new Array(r);a[0]=y;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:l,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},16214:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=n(87462),l=(n(67294),n(3905));const r={},a="Missing summary",s={type:"api",id:"missing-summary-9",unversionedId:"missing-summary-9",title:"Missing summary",description:"",slug:"/missing-summary-9",frontMatter:{},api:{tags:["applications"],security:[{bearerAuth:[]}],description:"create new application",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["close_project","new_reward"]},entity:{type:"string",enum:["project","guild"],description:"which entity this application is used for"},entity_id:{type:"string",description:"entity ID for this application"},target_user_wallet:{type:"string",description:"which account should this reward be sent to"},token_asset_name:{type:"string",description:"asset name for token"},token_amount:{type:"string",description:"how many token will be sent in this reward"},credit_asset_name:{type:"string",description:"asset name for credit"},credit_amount:{type:"string",description:"how many SeeDAO credit will be sent in this reward"},detailed_type:{type:"string",description:"detailed type of the application, e.g. \u916c\u52b3"},comment:{type:"string",description:"other comment of this application"}}}}}}},responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{code:{type:"number"},msg:{type:"string"}}}}}}},method:"post",path:"/applications",parameters:[],servers:[{url:"https://api.example.com/v1"},{url:"http://localhost:8080/v1"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{type:"close_project",entity:"project",entity_id:"string",target_user_wallet:"string",token_asset_name:"string",token_amount:"string",credit_asset_name:"string",credit_amount:"string",detailed_type:"string",comment:"string"}],info:{title:"Super App API",version:"1.0"},postman:{name:"/applications",description:{content:"create new application",type:"text/plain"},url:{path:["applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'[\n    {\n        "type": "<string>",\n        "entity": "<string>",\n        "entity_id": "<string>",\n        "target_user_wallet": "<string>",\n        "token_asset_name": "<string>",\n        "token_amount": "<string>",\n        "credit_asset_name": "<string>",\n        "credit_amount": "<string>",\n        "detailed_type": "<string>",\n        "comment": "<string>"\n    },\n    {\n        "type": "<string>",\n        "entity": "<string>",\n        "entity_id": "<string>",\n        "target_user_wallet": "<string>",\n        "token_asset_name": "<string>",\n        "token_amount": "<string>",\n        "credit_asset_name": "<string>",\n        "credit_amount": "<string>",\n        "detailed_type": "<string>",\n        "comment": "<string>"\n    }\n]'},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},source:"@site/seedao-docs/02-os-api/api/_spec_.yml",sourceDirName:"02-os-api/api",permalink:"/missing-summary-9",previous:{title:"list all applications",permalink:"/list-all-applications"},next:{title:"Missing summary",permalink:"/missing-summary-10"}},o=[],p={toc:o},c="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(c,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"missing-summary"},"Missing summary"),(0,l.kt)("p",null,"create new application"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"close_project"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"new_reward"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"entity"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"project"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"guild"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"which entity this application is used for")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"entity_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"entity ID for this application")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"target_user_wallet"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"which account should this reward be sent to")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"token_asset_name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"asset name for token")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"token_amount"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"how many token will be sent in this reward")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"credit_asset_name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"asset name for credit")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"credit_amount"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"how many SeeDAO credit will be sent in this reward")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detailed_type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"detailed type of the application, e.g. \u916c\u52b3")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"comment"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"other comment of this application")))))))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"201")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Created"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"code"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))}d.isMDXComponent=!0}}]);