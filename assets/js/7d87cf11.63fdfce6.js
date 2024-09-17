"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6268],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),y=o,m=s["".concat(c,".").concat(y)]||s[y]||f[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4043:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(8168),o=r(8587),a=(r(6540),r(5680)),i=["components"],p={},c="Getting help",l={type:"mdx",permalink:"/handbook/help",source:"@site/src/pages/help.md",title:"Getting help",description:"Jitsi is maintained by a dedicated group of enthusiasts.",frontMatter:{}},u=[],s={toc:u},f="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,i);return(0,a.yg)(f,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-help"},"Getting help"),(0,a.yg)("p",null,"Jitsi is maintained by a dedicated group of enthusiasts."),(0,a.yg)("p",null,"If you need help with Jitsi ",(0,a.yg)("a",{parentName:"p",href:"https://community.jitsi.org"},"our community")," is the best place to start."),(0,a.yg)("p",null,"You can learn more about using Jitsi or developing applications with it by browsing our ",(0,a.yg)("a",{parentName:"p",href:"/handbook/docs/intro"},"docs"),"."))}y.isMDXComponent=!0}}]);