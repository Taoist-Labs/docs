"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[9605],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),p=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(i.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),y=r,k=d["".concat(i,".").concat(y)]||d[y]||u[y]||o;return n?l.createElement(k,a(a({ref:e},c),{},{components:n})):l.createElement(k,a({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[d]="string"==typeof t?t:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74133:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var l=n(87462),r=(n(67294),n(3905));const o={},a="SeepassController_get",s={type:"api",id:"seepass-controller-get",unversionedId:"seepass-controller-get",title:"SeepassController_get",description:"",slug:"/seepass-controller-get",frontMatter:{},api:{operationId:"SeepassController_get",parameters:[{name:"userAddr",required:!0,in:"path",description:"user address, should be valid wallet or sns name",schema:{type:"string"}}],responses:{200:{description:"",content:{"application/json":{schema:{type:"object",properties:{sns:{type:"string"},nickname:{type:"string"},bio:{type:"string"},email:{type:"string"},wallet:{type:"string"},avatar:{type:"string"},roles:{type:"array",items:{type:"string"}},scr:{type:"object",properties:{amount:{required:!0,type:"string"},contract_addr:{required:!0,type:"string"}}},level:{type:"object",properties:{current_lv:{required:!0,type:"string"},next_lv:{required:!0,type:"string"},scr_to_next_lv:{required:!0,type:"string"},upgrade_percent:{required:!0,type:"string"}}},seed:{type:"array",items:{type:"object",properties:{name:{type:"string"},token_id:{type:"string"},token_amount:{type:"string"},contract_addr:{type:"string"},contract_type:{type:"string"},image_uri:{type:"string"}},required:["token_id","token_amount","contract_addr","contract_type","image_uri"]}},sbt:{type:"array",items:{type:"object"}},social_accounts:{type:"array",items:{type:"object",properties:{network:{type:"string",description:"network of the social network",examples:["twitter","discord","mirror"]},identity:{type:"string",description:"uniq id or link for user in the network"}},required:["network","identity"]}}},required:["sns","wallet","avatar","roles","scr","level","seed","sbt","social_accounts"]}}}}},tags:["seepass"],description:"SeepassController_get",method:"get",path:"/seepass/{userAddr}",servers:[{url:"https://test-seepass-api.seedao.tech/",description:"dev env for the API"}],info:{title:"SeePASS API Spec",description:"This document provides a comprehensive overview of the API endpoints,\nrequest structures, and response schemas exported by the SeePASS service.\nSeePASS is a powerful service that implements the SeeDAO profile protocol,\nenabling users to access their SeeDAO data conveniently from a single endpoint.\n",version:"1.0",contact:{}},postman:{name:"Seepass Controller get",description:{type:"text/plain"},url:{path:["seepass",":userAddr"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) user address, should be valid wallet or sns name",type:"text/plain"},type:"any",value:"<string>",key:"userAddr"}]},method:"GET"}},source:"@site/seedao-docs/04-seepass/api/_spec_.yaml",sourceDirName:"04-seepass/api",permalink:"/seepass-controller-get",previous:{title:"ProfileController_get",permalink:"/profile-controller-get"}},i=[],p={toc:i},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seepasscontroller_get"},"SeepassController_get"),(0,r.kt)("p",null,"SeepassController_get"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"userAddr"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"user address, should be valid wallet or sns name")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null)),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"sns"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"nickname"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"bio"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"email"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"wallet"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"avatar"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"roles"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"scr"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contract_addr"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"level"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"current_lv"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"next_lv"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"scr_to_next_lv"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"upgrade_percent"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"seed"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"token_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"token_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contract_addr"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contract_type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"image_uri"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"sbt"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"social_accounts"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"network"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"network of the social network")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"identity"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"uniq id or link for user in the network"))))))))))))))))}d.isMDXComponent=!0}}]);