"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[724],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),y=i,k=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return n?l.createElement(k,r(r({ref:e},d),{},{components:n})):l.createElement(k,r({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90246:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={},r="list all applications",o={type:"api",id:"list-all-applications",unversionedId:"list-all-applications",title:"list all applications",description:"",slug:"/list-all-applications",frontMatter:{},api:{tags:["applications"],security:[{bearerAuth:[]}],description:"The requests contains all type of requests listed above, which contains : * Project related:\n  * Close project\n* Credit and Token\n  * Credit reward\n  * Token reward\n\nThis API returns requests based on query params\n",parameters:[{name:"page",in:"query",description:"which page",schema:{type:"number"},required:!1},{name:"size",in:"query",description:"size of each page",schema:{type:"number"}},{name:"sort_field",in:"query",schema:{type:"string"}},{name:"sort_order",in:"query",schema:{type:"string",enum:["asc","desc"]}},{name:"type",in:"query",required:!0,schema:{type:"string",enum:["close_project","new_reward"]}},{name:"entity",in:"query",required:!0,description:"project or guild, one query can only get data from one type of entity",schema:{type:"string",enum:["project","guild"]}},{name:"entity_id",in:"query",required:!1,schema:{type:"string",description:"entity ID for the application"}},{name:"start_date",in:"query",required:!1,schema:{type:"string",description:"start date of applications, must be used with end_date"}},{name:"end_date",in:"query",required:!1,schema:{type:"string",description:"end date of applications, must be used with start_date"}},{name:"applicant",in:"query",required:!1,schema:{type:"string",description:"applicant wallet address"}},{name:"user_wallet",in:"query",required:!1,schema:{type:"string",description:"target user wallet address"}},{name:"state",in:"query",required:!1,schema:{type:"string",description:"state of applications",enum:["open","approved","rejected","processing","completed"]}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{page:{type:"number"},size:{type:"number"},total:{type:"number"},rows:{type:"array",items:{description:"application record generated by join query",type:"object",properties:{application_id:{type:"number",description:"application ID"},entity_name:{type:"string",description:"entity type of this application",enum:["project","guild"]},created_at:{type:"string",description:"when the application is created"},target_user_wallet:{type:"string",description:"target wallet for this new reward, for close_project application, this field is meanless"},token_asset_name:{type:"string",description:"asset name for token"},token_amount:{type:"string",description:"how many token will be sent in this reward"},credit_asset_name:{type:"string",description:"asset name for credit"},credit_amount:{type:"string",description:"how many credit will be sent in this reward"},budget_source:{type:"string",description:"project or guild name that provides this reward"},status:{type:"string",enum:["open","approved","rejected","processing","completed"]},submitter_wallet:{type:"string",description:"wallet of submitter user"},submitter_name:{type:"string",description:"name of submitter user if set in the db record, or empty string will be returned"},reviewer_wallet:{type:"string",description:"wallet of reviewer user, if the application is in one state, this field should be empty"},reviewer_name:{type:"string",description:"name of submitter user if set in the db record, or empty string will be returned. Also application in open state will not have this field set\n"},transaction_ids:{type:"string",description:"transaction IDs for this reward, only shown for completed applications"}}}}}}}}}},method:"get",path:"/applications",servers:[{url:"https://api.example.com/v1"},{url:"http://localhost:8080/v1"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"Super App API",version:"1.0"},postman:{name:"list all applications",description:{content:"The requests contains all type of requests listed above, which contains : * Project related:\n  * Close project\n* Credit and Token\n  * Credit reward\n  * Token reward\n\nThis API returns requests based on query params\n",type:"text/plain"},url:{path:["applications"],host:["{{baseUrl}}"],query:[{description:{content:"which page",type:"text/plain"},key:"page",value:"<number>"},{description:{content:"size of each page",type:"text/plain"},key:"size",value:"<number>"},{description:{content:"",type:"text/plain"},key:"sort_field",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sort_order",value:"<string>"},{description:{content:"(Required) ",type:"text/plain"},key:"type",value:"<string>"},{description:{content:"(Required) project or guild, one query can only get data from one type of entity",type:"text/plain"},key:"entity",value:"<string>"},{description:{content:"",type:"text/plain"},key:"entity_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"start_date",value:"<string>"},{description:{content:"",type:"text/plain"},key:"end_date",value:"<string>"},{description:{content:"",type:"text/plain"},key:"applicant",value:"<string>"},{description:{content:"",type:"text/plain"},key:"user_wallet",value:"<string>"},{description:{content:"",type:"text/plain"},key:"state",value:"<string>"}],variable:[]},method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},source:"@site/seedao-docs/02-os-api/api/_spec_.yml",sourceDirName:"02-os-api/api",permalink:"/list-all-applications",previous:{title:"Missing summary",permalink:"/missing-summary-8"},next:{title:"Missing summary",permalink:"/missing-summary-9"}},s=[],p={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-all-applications"},"list all applications"),(0,i.kt)("p",null,"The requests contains all type of requests listed above, which contains : * Project related:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close project"),(0,i.kt)("li",{parentName:"ul"},"Credit and Token",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Credit reward"),(0,i.kt)("li",{parentName:"ul"},"Token reward")))),(0,i.kt)("p",null,"This API returns requests based on query params"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"page"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"which page")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"size"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"size of each page")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sort_field"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sort_order"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"asc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"desc"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"close_project"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"new_reward"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"entity"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"project"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"guild"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"project or guild, one query can only get data from one type of entity")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"entity_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"entity ID for the application")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"start_date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"start date of applications, must be used with end_date")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"end_date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"end date of applications, must be used with start_date")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"applicant"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"applicant wallet address")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"user_wallet"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"target user wallet address")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"state"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"approved"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rejected"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"processing"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"completed"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"state of applications")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"page"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"size"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"total"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"rows"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"application_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"application ID")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"entity_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"project"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"guild"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"entity type of this application")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"created_at"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"when the application is created")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"target_user_wallet"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"target wallet for this new reward, for close_project application, this field is meanless")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"token_asset_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"asset name for token")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"token_amount"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"how many token will be sent in this reward")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"credit_asset_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"asset name for credit")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"credit_amount"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"how many credit will be sent in this reward")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"budget_source"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"project or guild name that provides this reward")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"status"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"approved"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rejected"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"processing"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"completed"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"submitter_wallet"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"wallet of submitter user")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"submitter_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"name of submitter user if set in the db record, or empty string will be returned")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reviewer_wallet"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"wallet of reviewer user, if the application is in one state, this field should be empty")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reviewer_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"name of submitter user if set in the db record, or empty string will be returned. Also application in open state will not have this field set")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"transaction_ids"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"transaction IDs for this reward, only shown for completed applications"))))))))))))))))}c.isMDXComponent=!0}}]);