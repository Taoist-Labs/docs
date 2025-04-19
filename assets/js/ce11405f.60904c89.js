"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[1884],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(y,o(o({ref:e},u),{},{components:n})):a.createElement(y,o({ref:e},u))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26442:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o="Missing summary",i={type:"api",id:"missing-summary-8",unversionedId:"missing-summary-8",title:"Missing summary",description:"",slug:"/missing-summary-8",frontMatter:{},api:{tags:["treasury"],description:"update assets total amount of current quarter record, if record with given budget type and asset name  is not existing, a new record will be created\n",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{asset_name:{type:"string",description:"Name of the assets"},budget_type:{type:"string",description:"Budget type of this record",enum:["credit","coin"]},total_amount:{type:"string",description:"Total amount of the asset"}}}}}}},responses:{200:{description:"asset records has been updated successfully",content:{"application/json":{schema:{type:"object",properties:{id:{type:"number",description:"treasury asset record ID"},quarter_num:{type:"string",description:"quarter number, in format yyyy0[1234]"},credit_total_amount:{type:"string",description:"total credit amount"},credit_remain_amount:{type:"string",description:"remain credit amount"},token_total_amount:{type:"string",description:"total token amount"},token_remain_amount:{type:"string",description:"remain token amount"}}}}}}},method:"post",path:"/treasury/update_assets",parameters:[],servers:[{url:"https://api.example.com/v1"},{url:"http://localhost:8080/v1"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{asset_name:"string",budget_type:"credit",total_amount:"string"}],info:{title:"Super App API",version:"1.0"},postman:{name:"/treasury/update_assets",description:{content:"update assets total amount of current quarter record, if record with given budget type and asset name  is not existing, a new record will be created\n",type:"text/plain"},url:{path:["treasury","update_assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'[\n    {\n        "asset_name": "<string>",\n        "budget_type": "<string>",\n        "total_amount": "<string>"\n    },\n    {\n        "asset_name": "<string>",\n        "budget_type": "<string>",\n        "total_amount": "<string>"\n    }\n]'}}},source:"@site/seedao-docs/02-os-api/api/_spec_.yml",sourceDirName:"02-os-api/api",permalink:"/missing-summary-8",previous:{title:"Missing summary",permalink:"/missing-summary-7"},next:{title:"list all applications",permalink:"/list-all-applications"}},s=[],p={toc:s},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"missing-summary"},"Missing summary"),(0,r.kt)("p",null,"update assets total amount of current quarter record, if record with given budget type and asset name  is not existing, a new record will be created"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"asset_name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Name of the assets")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"budget_type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"credit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"coin"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Budget type of this record")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"total_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Total amount of the asset")))))))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"asset records has been updated successfully"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"treasury asset record ID")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"quarter_num"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"quarter number, in format yyyy0","[1234]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"credit_total_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"total credit amount")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"credit_remain_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"remain credit amount")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"token_total_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"total token amount")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"token_remain_amount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"remain token amount"))))))))))))}c.isMDXComponent=!0}}]);