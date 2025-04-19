"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[492],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>k});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(l),d=n,k=c["".concat(s,".").concat(d)]||c[d]||y[d]||a;return l?r.createElement(k,o(o({ref:e},u),{},{components:l})):r.createElement(k,o({ref:e},u))}));function k(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=l.length,o=new Array(a);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},90018:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=l(87462),n=(l(67294),l(3905));const a={},o="query multiple users by wallet",i={type:"api",id:"query-multiple-users-by-wallet",unversionedId:"query-multiple-users-by-wallet",title:"query multiple users by wallet",description:"",slug:"/query-multiple-users-by-wallet",frontMatter:{},api:{tags:["user"],parameters:[{name:"wallets",in:"query",description:"wallet address of users to be queried",explode:!0,schema:{type:"array",items:{description:"single wallet address",type:"string"}}}],responses:{200:{description:"return found users",content:{"application/json":{schema:{type:"object",properties:{code:{type:"number"},msg:{type:"string"},data:{type:"array",items:{type:"object",description:"user information",properties:{id:{type:"string",description:"uniq ID for user"},avatar:{type:"string"},discord_url:{type:"string"}}}}}}}}},500:{description:"got internal error"}},description:"query multiple users by wallet",method:"get",path:"/user/users",servers:[{url:"https://api.example.com/v1"},{url:"http://localhost:8080/v1"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"Super App API",version:"1.0"},postman:{name:"query multiple users by wallet",description:{type:"text/plain"},url:{path:["user","users"],host:["{{baseUrl}}"],query:[{description:{content:"wallet address of users to be queried",type:"text/plain"},key:"wallets",value:"<string>"},{description:{content:"wallet address of users to be queried",type:"text/plain"},key:"wallets",value:"<string>"}],variable:[]},method:"GET"}},source:"@site/seedao-docs/02-os-api/api/_spec_.yml",sourceDirName:"02-os-api/api",permalink:"/query-multiple-users-by-wallet",previous:{title:"user login",permalink:"/user-login"},next:{title:"get self user detail",permalink:"/get-self-user-detail"}},s=[],p={toc:s},u="wrapper";function c(t){let{components:e,...l}=t;return(0,n.kt)(u,(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"query-multiple-users-by-wallet"},"query multiple users by wallet"),(0,n.kt)("p",null,"query multiple users by wallet"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"wallets"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"wallet address of users to be queried")))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"200")),(0,n.kt)("div",null,(0,n.kt)("p",null,"return found users"))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"code"),(0,n.kt)("span",{style:{opacity:"0.6"}}," number"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"msg"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"uniq ID for user")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"avatar"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"discord_url"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"500")),(0,n.kt)("div",null,(0,n.kt)("p",null,"got internal error"))),(0,n.kt)("div",null))))))}c.isMDXComponent=!0}}]);