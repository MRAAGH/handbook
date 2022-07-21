"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"dev-guide-iframe",title:"IFrame API"},s=void 0,l={unversionedId:"dev-guide/dev-guide-iframe",id:"dev-guide/dev-guide-iframe",title:"IFrame API",description:"Embedding the Jitsi Meet API into your site or app enables you to host and provide secure video meetings with your colleagues, teams, and stakeholders. The Meet API provides a full complement of comprehensive meeting features.",source:"@site/docs/dev-guide/iframe.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-iframe",permalink:"/handbook/docs/dev-guide/dev-guide-iframe",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/iframe.md",tags:[],version:"current",lastUpdatedAt:1658417707,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"dev-guide-iframe",title:"IFrame API"},sidebar:"docs",previous:{title:"Integrations",permalink:"/handbook/docs/dev-guide/dev-guide-web-integrations"},next:{title:"Functions",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-functions"}},m={},d=[{value:"Integration",id:"integration",level:2},{value:"Mobile support",id:"mobile-support",level:2},{value:"Opening meetings in the Jitsi Meet app",id:"opening-meetings-in-the-jitsi-meet-app",level:3},{value:"Creating the Jitsi Meet API object",id:"creating-the-jitsi-meet-api-object",level:2},{value:"Functions",id:"functions",level:2},{value:"Commands",id:"commands",level:2},{value:"Events",id:"events",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Embedding the Jitsi Meet API into your site or app enables you to host and provide secure video meetings with your colleagues, teams, and stakeholders. The Meet API provides a full complement of comprehensive meeting features."),(0,r.kt)("p",null,"Your Jitsi meetings can be hosted and attended using any device while keeping your data and privacy protected. You can reach your meeting participants anywhere in the world eliminating the need for travel and the associated inconvenience."),(0,r.kt)("p",null,"The IFrame API enables you to embed Jitsi Meet functionality into your meeting application so you can experience the full functionality of the globally distributed and highly available deployment available with ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/"},"meet.jit.si"),"."),(0,r.kt)("p",null,"You can also embed and integrate the globally distributed and highly available deployment on the ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/"},"meet.jit.si")," platform itself. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"JaaS customers, please make sure you also read ",(0,r.kt)("a",{parentName:"p",href:"https://developer.8x8.com/jaas/docs/iframe-api-overview"},"this"),"!"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use React in your web application you might want to use our ",(0,r.kt)("a",{parentName:"p",href:"dev-guide-react-sdk"},"React SDK")," instead."))),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"To enable the Jitsi Meet API in your application you must use one of the following JavaScript (JS) Jitsi Meet API library scripts and integrate it into your application:"),(0,r.kt)("p",null,"For self-hosting in your domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script src='https://<your-domain>/external_api.js'><\/script>\n")),(0,r.kt)("p",null,"meet.jit.si:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script src='https://meet.jit.si/external_api.js'><\/script>\n\n")),(0,r.kt)("h2",{id:"mobile-support"},"Mobile support"),(0,r.kt)("p",null,"The iframe API works on mobile browsers the same way as it does on desktop browsers."),(0,r.kt)("h3",{id:"opening-meetings-in-the-jitsi-meet-app"},"Opening meetings in the Jitsi Meet app"),(0,r.kt)("p",null,"In order to open meetings with the Jitsi Meet app you can use our custom URL scheme as follows:"),(0,r.kt)("p",null,"(let's assume the meeting is ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/test123"},"https://meet.jit.si/test123"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android: ",(0,r.kt)("inlineCode",{parentName:"li"},"intent://meet.jit.si/test123#Intent;scheme=org.jitsi.meet;package=org.jitsi.meet;end")),(0,r.kt)("li",{parentName:"ul"},"iOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.jitsi.meet://meet.jit.si/test123"))),(0,r.kt)("p",null,"This works with custom servers too, just replace ",(0,r.kt)("inlineCode",{parentName:"p"},"meet.jit.si")," with your custom server URL."),(0,r.kt)("h2",{id:"creating-the-jitsi-meet-api-object"},"Creating the Jitsi Meet API object"),(0,r.kt)("p",null,"After you have integrated the Meet API library, you must then create the Jitsi Meet API object."),(0,r.kt)("p",null,"The Meet API object takes the following form:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"api = new JitsiMeetExternalAPI(domain, options)"))),(0,r.kt)("p",null,"The API object constructor uses the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": The domain used to build the conference URL (e.g., ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"meet.jit.si")),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": The object with properties. "),(0,r.kt)("p",{parentName:"li"},"Optional arguments include:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"roomName"),": The name of the room to join.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"width"),": The created IFrame width."),(0,r.kt)("p",{parentName:"li"},"The width argument has the following characteristics:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A numerical value indicates the width in pixel units.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a string is specified the format is a number followed by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"px")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"em")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pt")),", or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"%")),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"height"),": The height for the created IFrame. "),(0,r.kt)("p",{parentName:"li"},"The height argument has the following characteristics: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A numerical value indicates the height in pixel units.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a string is specified the format is a number followed by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"px")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"em")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pt")),", or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"%")),". ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parentNode"),": The HTML DOM Element where the IFrame is added as a child.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configOverwrite"),": The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"interfaceConfigOverwrite"),": The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jwt"),": The ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," token.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"onload"),": The IFrame onload event handler.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"invitees"),": Object arrays that contain information about participants invited to a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"devices"),": Information map about the devices used in a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userInfo"),": The JS object that contains information about the participant starting the meeting (e.g., email).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lang"),": The default meeting language."),(0,r.kt)("p",{parentName:"li"},"For example:"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const domain = 'meet.jit.si';\nconst options = {\n    roomName: 'JitsiMeetAPIExample',\n    width: 700,\n    height: 700,\n    parentNode: document.querySelector('#meet'),\n    lang: 'de'\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can set the initial media devices for the call using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const domain = 'meet.jit.si';\nconst options = {\n    ...\n    devices: {\n        audioInput: '<deviceLabel>',\n        audioOutput: '<deviceLabel>',\n        videoInput: '<deviceLabel>'\n    },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can override options set in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"configOverwrite"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interfaceConfigOverwrite"))," objects, respectively."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n    ...\n    configOverwrite: { startWithAudioMuted: true },\n    interfaceConfigOverwrite: { DISABLE_DOMINANT_SPEAKER_INDICATOR: true },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"To pass a JWT token to Jitsi Meet use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n   ...\n   jwt: '<jwt_token>',\n   ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"userInfo"))," (e.g., email, display name) for the call using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var domain = \"meet.jit.si\";\nvar options = {\n    ...\n    userInfo: {\n        email: 'email@jitsiexamplemail.com',\n        displayName: 'John Doe'\n    }\n}\nvar api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"Configuring the tile view:"),(0,r.kt)("p",null,"You can configure the maximum number of columns in the tile view by overriding the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TILE_VIEW_MAX_COLUMNS"))," property from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file via the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interfaceConfigOverwrite"))," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n    ...\n    interfaceConfigOverwrite: { TILE_VIEW_MAX_COLUMNS: 2 },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TILE_VIEW_MAX_COLUMNS"))," accepts values from 1 to 5. The default value is 5."))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"All functions are documented ",(0,r.kt)("a",{parentName:"p",href:"dev-guide-iframe-functions"},"here")," now."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"All commands are documented ",(0,r.kt)("a",{parentName:"p",href:"dev-guide-iframe-commands"},"here")," now."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"All events are documented ",(0,r.kt)("a",{parentName:"p",href:"dev-guide-iframe-events"},"here")," now."))}u.isMDXComponent=!0}}]);