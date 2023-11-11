"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[186],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(i),f=n,h=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return i?r.createElement(h,s(s({ref:t},l),{},{components:i})):r.createElement(h,s({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var d=2;d<o;d++)s[d]=i[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2533:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=i(7462),n=i(3366),o=(i(7294),i(3905)),s=["components"],a={id:"devops-guide-bsd",title:"Self-Hosting Guide - FreeBSD/NetBSD/OpenBSD",sidebar_label:"BSD"},p=void 0,d={unversionedId:"devops-guide/devops-guide-bsd",id:"devops-guide/devops-guide-bsd",title:"Self-Hosting Guide - FreeBSD/NetBSD/OpenBSD",description:"This document is a reference point for pointing to the upstream packages provided by the FreeBSD, NetBSD and OpenBSD distributions. Jitsi only officially supports Linux, for any problems with the BSD packages you can contact their respective mailing lists.",source:"@site/docs/devops-guide/bsd.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-bsd",permalink:"/handbook/docs/devops-guide/devops-guide-bsd",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/bsd.md",tags:[],version:"current",lastUpdatedAt:1699730696,formattedLastUpdatedAt:"Nov 11, 2023",frontMatter:{id:"devops-guide-bsd",title:"Self-Hosting Guide - FreeBSD/NetBSD/OpenBSD",sidebar_label:"BSD"}},l={},c=[{value:"FreeBSD",id:"freebsd",level:2},{value:"NetBSD",id:"netbsd",level:2},{value:"OpenBSD",id:"openbsd",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:c};function f(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document is a reference point for pointing to the upstream packages provided by the FreeBSD, NetBSD and OpenBSD distributions. Jitsi only officially supports Linux, for any problems with the BSD packages you can contact their respective mailing lists."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Many of the installation steps require root access."),(0,o.kt)("h2",{id:"freebsd"},"FreeBSD"),(0,o.kt)("p",null,"FreeBSD provides ports for ",(0,o.kt)("a",{parentName:"p",href:"https://www.freshports.org/net-im/jitsi-meet-full"},"Jitsi")," along with documentation on how to configure it and the current limitations - ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freebsd.org/Jitsi"},"https://wiki.freebsd.org/Jitsi"),"."),(0,o.kt)("p",null,"Jitsi can be installed using the meta port ",(0,o.kt)("a",{parentName:"p",href:"https://www.freshports.org/net-im/jitsi-meet-full"},"net-im/jitsi-meet-full")," which pulls in Jitsi Videobridge, Jicofo and Jitsi Meet Web UI, along with prosody, the Jitsi prosody plugins, nginx and other required dependencies. Instructions on how to build the port can be read on the FreeBSD Foundation site - ",(0,o.kt)("a",{parentName:"p",href:"https://freebsdfoundation.org/freebsd-project/resourcesold/installing-a-port-on-freebsd/"},"https://freebsdfoundation.org/freebsd-project/resourcesold/installing-a-port-on-freebsd/"),"."),(0,o.kt)("h2",{id:"netbsd"},"NetBSD"),(0,o.kt)("p",null,"NetBSD provides individual ports for ",(0,o.kt)("a",{parentName:"p",href:"https://pkgsrc.se/chat/jitsi-videobridge"},"Jitsi Videobridge"),", ",(0,o.kt)("a",{parentName:"p",href:"https://pkgsrc.se/chat/jicofo"},"Jicofo"),", ",(0,o.kt)("a",{parentName:"p",href:"https://pkgsrc.se/chat/jitsi-meet-prosody"},"Jitsi prosody plugins")," and ",(0,o.kt)("a",{parentName:"p",href:"https://pkgsrc.se/wip/jitsi-meet"},"Jitsi Meet Web UI"),". They can be installed using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg_add <pkg-name>"),"."),(0,o.kt)("h2",{id:"openbsd"},"OpenBSD"),(0,o.kt)("p",null,"OpenBSD provides ports for ",(0,o.kt)("a",{parentName:"p",href:"https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/meta/jitsi/"},"Jitsi"),", along with a pkg-readme which details how to configure Jitsi for a single host install, located at ",(0,o.kt)("a",{parentName:"p",href:"https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/meta/jitsi/pkg/"},"/usr/local/share/docs/pkg-readme/jitsi"),"."),(0,o.kt)("p",null,"The meta port can be installed by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg_add jitsi"),", which pulls in the individual ports, Jitsi Videobridge, Jicofo and Jitsi Meet Web UI, along with prosody, Jitsi prosody plugins and other required dependencies."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jigasi and Jibri have not yet been ported to work with any BSD systems.")))}f.isMDXComponent=!0}}]);