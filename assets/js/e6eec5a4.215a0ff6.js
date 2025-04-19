"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[7092],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?i.createElement(h,s(s({ref:n},p),{},{components:t})):i.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67692:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(87462),a=(t(67294),t(3905));const r={sidebar_position:0},s="Overview",o={type:"mdx",unversionedId:"06-seeauth/seeauth-web/intro",id:"06-seeauth/seeauth-web/intro",title:"Overview",description:"For web front, user need to sign message and request third part server's auth api for getting third part server's user credentials, then user can use the credentials to access his/her data.",source:"@site/seedao-docs/06-seeauth/seeauth-web/intro.md",sourceDirName:"06-seeauth/seeauth-web",slug:"/seeauth/seeauth-web/intro",permalink:"/seeauth/seeauth-web/intro",draft:!1,editUrl:null,tags:[],version:"",sidebarPosition:0,frontMatter:{sidebar_position:0}},l=[{value:"1. sign message use <code>signer</code>",id:"1-sign-message-use-signer",level:4},{value:"2. sign message use <code>signMessageFn</code>",id:"2-sign-message-use-signmessagefn",level:4}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"For web front, user need to sign message and request third part server's auth api for getting third part server's user credentials, then user can use the credentials to access his/her data."),(0,a.kt)("h1",{id:"install"},"Install"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@seedao%2Fsee-auth"},(0,a.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@seedao%2Fsee-auth.svg",alt:"npm version"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm i @seedao/see-auth\n")),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Has tow ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seeAuthWithSigner(...)"),": use ",(0,a.kt)("inlineCode",{parentName:"li"},"signer")," to sign message especially"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seeAuthSignMessageFn(...)"),": use ",(0,a.kt)("inlineCode",{parentName:"li"},"signMessageFn")," function to sign message especially")),(0,a.kt)("h4",{id:"1-sign-message-use-signer"},"1. sign message use ",(0,a.kt)("inlineCode",{parentName:"h4"},"signer")),(0,a.kt)("p",null,"example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { seeAuthWithSigner } from "@seedao/see-auth";\n\nconst domain = window.location.host;\nconst uri = window.location.origin;\nconst chainId = 1;\n\ninterface ThirdAuthResp {\n  token: string\n}\nconst resp: ThirdAuthResp = await seeAuthWithSigner<ThirdAuthResp>(domain, uri, chainId, "https://3rd.deno.dev/seeauth", signer);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthWithSigner(...)")," function's signature is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function seeAuthWithSigner<T>(domain: string, uri: string, chainId: number, authEndpoint: string, signer: Signer): Promise<T>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain"),": the domain of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const domain = window.location.host"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": the uri of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const uri = window.location.origin"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chainId"),": the chain id of blockchain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authEndpoint"),": the third part server's auth api endpoint, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://3rd.deno.dev/seeauth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signer"),": the signer, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"const provider: BrowserProvider = new BrowserProvider(window.ethereum); const signer = await provider.getSigner();")),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," generic type is the response type of the third part server's auth api endpoint, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"interface Resp3rd { token: string }"))),(0,a.kt)("p",null,"If you just want get SeeAuth server's response, and request third part server's auth api by yourself, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthWithSigner2(...)")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { seeAuthWithSigner2 } from "@seedao/see-auth";\n\nconst domain = window.location.host;\nconst uri = window.location.origin;\nconst chainId = 1;\n\nconst resp: SeeAuth = await seeAuthWithSigner2(domain, uri, chainId, signer);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthWithSigner2(...)")," function's signature is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function seeAuthWithSigner2(domain: string, uri: string, chainId: number, signer: Signer): Promise<SeeAuth>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain"),": the domain of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const domain = window.location.host"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": the uri of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const uri = window.location.origin"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chainId"),": the chain id of blockchain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signer"),": the signer, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"const provider: BrowserProvider = new BrowserProvider(window.ethereum); const signer = await provider.getSigner();")),(0,a.kt)("li",{parentName:"ul"},"function's return type is ",(0,a.kt)("inlineCode",{parentName:"li"},"SeeAuth")," object, it contains everything you need to request third part server's auth api")),(0,a.kt)("h4",{id:"2-sign-message-use-signmessagefn"},"2. sign message use ",(0,a.kt)("inlineCode",{parentName:"h4"},"signMessageFn")),(0,a.kt)("p",null,"example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { seeAuthSignMessageFn } from "@seedao/see-auth";\n\nconst domain = window.location.host;\nconst uri = window.location.origin;\nconst chainId = 1;\n\nconst resp: ThirdAuthResp = await seeAuthSignMessageFn<ThirdAuthResp>(domain, uri, chainId, signer.address, "https://3rd.deno.dev/seeauth", async (message: string | Uint8Array) => {\n  return await signer.signMessage(message);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthSignMessageFn(...)")," function's signature is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function seeAuthSignMessageFn<T>(domain: string, uri: string, chainId: number, address: string, authEndpoint: string, signMessageFn: (message: string | Uint8Array) => Promise<string>): Promise<T>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain"),": the domain of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const domain = window.location.host"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": the uri of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const uri = window.location.origin"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chainId"),": the chain id of blockchain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," is the address of which signed the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authEndpoint"),": the third part server's auth api endpoint, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://3rd.deno.dev/seeauth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signMessageFn")," is the function which implements sign message"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," generic type is the response type of the third part server's auth api endpoint, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"interface Resp3rd { token: string }"))),(0,a.kt)("p",null,"If you just want get SeeAuth server's response, and request third part server's auth api by yourself, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthSignMessageFn2(...)")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { seeAuthSignMessageFn2 } from "@seedao/see-auth";\n\nconst domain = window.location.host;\nconst uri = window.location.origin;\nconst chainId = 1;\n\nconst resp: SeeAuth = await seeAuthSignMessageFn2(domain, uri, chainId, signer.address, async (message: string | Uint8Array) => {\n  return await signer.signMessage(message);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"seeAuthSignMessageFn2(...)")," function's signature is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function seeAuthSignMessageFn2(domain: string, uri: string, chainId: number, address: string, signMessageFn: (message: string | Uint8Array) => Promise<string>): Promise<SeeAuth>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain"),": the domain of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const domain = window.location.host"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": the uri of the web site, common use ",(0,a.kt)("inlineCode",{parentName:"li"},"const uri = window.location.origin"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chainId"),": the chain id of blockchain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," is the address of which signed the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signMessageFn")," is the function which implements sign message"),(0,a.kt)("li",{parentName:"ul"},"function's return type is ",(0,a.kt)("inlineCode",{parentName:"li"},"SeeAuth")," object, it contains everything you need to request third part server's auth api")))}d.isMDXComponent=!0}}]);