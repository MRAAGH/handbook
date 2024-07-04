"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"devops-guide-requirements",title:"Requirements"},d=void 0,l={unversionedId:"devops-guide/devops-guide-requirements",id:"devops-guide/devops-guide-requirements",title:"Requirements",description:"Jitsi Meet is a real-time system.",source:"@site/docs/devops-guide/requirements.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/requirements.md",tags:[],version:"current",lastUpdatedAt:1720101463,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{id:"devops-guide-requirements",title:"Requirements"},sidebar:"docs",previous:{title:"Deployment",permalink:"/handbook/docs/category/deployment"},next:{title:"Debian/Ubuntu server",permalink:"/handbook/docs/devops-guide/devops-guide-quickstart"}},u={},c=[],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jitsi Meet is a real-time system.\nRequirements are very different from a web server and depend on many factors.\nMiscalculations can very easily destroy basic functionality rather than cause slow performance.\nAvoid adding other functions to your Jitsi Meet setup as it can harm performance and complicate optimizations."),(0,o.kt)("p",{parentName:"admonition"},"Note that Jitsi Meet design priorizes scalability by adding servers on using a huge server. Check Jitsi-videobridge documentation on adding several bridges to a Jitsi Meet server, and OCTO to go even beyond that (federation of Jitsi Meet servers). If you feel that you are a network and server administration newbie, don't even think of going there.")),(0,o.kt)("h1",{id:"jitsi-meet-needs-by-order-of-importance"},"Jitsi Meet needs, by order of importance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network link: basic speed and reliability are essential. Check speed against the provider claims using any download tool (or ftp), and\nverify latency using a tool such as iperf3.\nExact calculation is very complex and depend on many optimisations and tricks, but you should at least remember these numbers on resolution:\n180 = 200 kbits/s\n360 = 500 kbits/s\n720 (HD) = 2500 kbits/s\n4k = 10 Mbits/s\nSo don't expect to have 20 users using 4K on a server with 100Mbits/s upload and download.\nFor a friends/small organization server, 1 Gbits/s will often be enough but for a serious server 10 Gbits/s\nis advisable. Several (or many...) bridges having each a 10 Gbits/s link are used by big deployments.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"These requirements concern the videobridge. If there are only external videobridges (as can be the case on high end Jitsi Meet servers), network performance matters much less.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RAM:")," it's usually suggested to get 8 GB.\nFor small meetings you can get away with 4 GB, for test servers or very small meetings you can try to use 2 GB.\nFor big meetings it's suggested to go the scalable way over getting huge amounts of memory.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CPU:")," very low processor performance can seriously harm a real time system, especially when using a shared server (where your CPU performance can be stolen by other customers of your hoster, check on 'dedicated CPU' if you are getting a VPS, rather than a physical server). However, a consideration is that a Jitsi Meet component, Prosody, can only use ONE (1) core. So getting a lot of cores, let's say more than 32, is not always useful. For a basic server, 4 dedicated cores can be enough.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Disk:")," unless you are doing heavy logging or have very specific needs, you can get away with 20 Gbytes of standard hard disk.\nSSD are more a nice to have than a necessity."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you want additional services, requirements can go up.")),(0,o.kt)("h1",{id:"recording"},"Recording"),(0,o.kt)("p",null,"Jibri needs ONE system per recording.\nOne Jibri instance = one meeting. For 5 meetings recorded simultaneously, you need 5 Jibris.\nThere is no workaround to that.\nIf you are knowledgeable, you can setup Jibris in containers and use a big server to save a bit on resources but that's about it."),(0,o.kt)("p",null,"Jibri RAM, CPU and hard disk needs are far higher than Jitsi Meet itself, as it does video encoding.\nFor ",(0,o.kt)("inlineCode",{parentName:"p"},"1080x720")," you currently need at least 8 GB RAM, for ",(0,o.kt)("inlineCode",{parentName:"p"},"1280x1024")," 12 GB (this is for recording a ",(0,o.kt)("strong",{parentName:"p"},"single"),"  meeting).\nFor cloud storage you will need at least SSD drives.\nIf memory is not sufficient, CPU can't encode fast enough or hard disk is not fast enough, recordings will fail."),(0,o.kt)("p",null,"While Jibri and Jitsi Meet can technically be hosted in a single server, it's not recommended because Jibri is a resource drain and it can harm Jitsi Meet performance, and can exhaust disk space and stop Jitsi Meet function altogether."))}m.isMDXComponent=!0}}]);