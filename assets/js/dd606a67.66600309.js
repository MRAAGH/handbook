"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3511:(e,t,n)=>{n.r(t),n.d(t,{Anchor:()=>u,assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"dev-guide-iframe",title:"IFrame API"},l=void 0,s={unversionedId:"dev-guide/dev-guide-iframe",id:"dev-guide/dev-guide-iframe",title:"IFrame API",description:"Embedding the Jitsi Meet API into your site or app enables you to host and provide secure video meetings with your colleagues, teams, and stakeholders. The Meet API provides a full complement of comprehensive meeting features.",source:"@site/docs/dev-guide/iframe.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-iframe",permalink:"/handbook/docs/dev-guide/dev-guide-iframe",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/iframe.md",tags:[],version:"current",lastUpdatedAt:1720101463,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{id:"dev-guide-iframe",title:"IFrame API"},sidebar:"docs",previous:{title:"SDKs",permalink:"/handbook/docs/category/sdks"},next:{title:"lib-jitsi-meet API (low level)",permalink:"/handbook/docs/dev-guide/dev-guide-ljm-api"}},m={},d=[{value:"Integration",id:"integration",level:2},{value:"Mobile support",id:"mobile-support",level:2},{value:"Opening meetings in the Jitsi Meet app",id:"opening-meetings-in-the-jitsi-meet-app",level:3},{value:"Creating the Jitsi Meet API object",id:"creating-the-jitsi-meet-api-object",level:2},{value:"Functions",id:"functions",level:2},{value:"Commands",id:"commands",level:2},{value:"Events",id:"events",level:2}],u=function(e){var t=e.children,n=e.name;return(0,r.kt)("a",{name:n,id:n,href:"#"+n},t)},c={toc:d,Anchor:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Embedding the Jitsi Meet API into your site or app enables you to host and provide secure video meetings with your colleagues, teams, and stakeholders. The Meet API provides a full complement of comprehensive meeting features."),(0,r.kt)("p",null,"Your Jitsi meetings can be hosted and attended using any device while keeping your data and privacy protected. You can reach your meeting participants anywhere in the world eliminating the need for travel and the associated inconvenience."),(0,r.kt)("p",null,"The IFrame API enables you to embed Jitsi Meet functionality into your meeting application so you can experience the full functionality of the globally distributed and highly available deployment available with ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/"},"meet.jit.si"),"."),(0,r.kt)("p",null,"You can also embed and integrate the globally distributed and highly available deployment on the ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/"},"meet.jit.si")," platform itself. "),(0,r.kt)("admonition",{title:"NOTE",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"JaaS customers, please make sure you also read ",(0,r.kt)("a",{parentName:"p",href:"https://developer.8x8.com/jaas/docs/iframe-api-overview"},"this"),"!")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use React in your web application you might want to use our ",(0,r.kt)("a",{parentName:"p",href:"dev-guide-react-sdk"},"React SDK")," instead.")),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"To enable the Jitsi Meet API in your application you must use one of the following JavaScript (JS) Jitsi Meet API library scripts and integrate it into your application:"),(0,r.kt)("p",null,"For self-hosting in your domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script src='https://<your-domain>/external_api.js'><\/script>\n")),(0,r.kt)("p",null,"meet.jit.si:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script src='https://meet.jit.si/external_api.js'><\/script>\n\n")),(0,r.kt)("h2",{id:"mobile-support"},"Mobile support"),(0,r.kt)("p",null,"The iframe API works on mobile browsers the same way as it does on desktop browsers."),(0,r.kt)("h3",{id:"opening-meetings-in-the-jitsi-meet-app"},"Opening meetings in the Jitsi Meet app"),(0,r.kt)("p",null,"In order to open meetings with the Jitsi Meet app you can use our custom URL scheme as follows:"),(0,r.kt)("p",null,"(let's assume the meeting is ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si/test123"},"https://meet.jit.si/test123"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android: ",(0,r.kt)("inlineCode",{parentName:"li"},"intent://meet.jit.si/test123#Intent;scheme=org.jitsi.meet;package=org.jitsi.meet;end")),(0,r.kt)("li",{parentName:"ul"},"iOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.jitsi.meet://meet.jit.si/test123"))),(0,r.kt)("p",null,"This works with custom servers too, just replace ",(0,r.kt)("inlineCode",{parentName:"p"},"meet.jit.si")," with your custom server URL."),(0,r.kt)("h2",{id:"creating-the-jitsi-meet-api-object"},"Creating the Jitsi Meet API object"),(0,r.kt)("p",null,"After you have integrated the Meet API library, you must then create the Jitsi Meet API object."),(0,r.kt)("p",null,"The Meet API object takes the following form:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"api = new JitsiMeetExternalAPI(domain, options)"))),(0,r.kt)("p",null,"The API object constructor uses the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": The domain used to build the conference URL (e.g., ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"meet.jit.si")),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": The object with properties. "),(0,r.kt)("p",{parentName:"li"},"IFrame arguments include:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"roomName"),": The name of the room to join.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The created IFrame width."),(0,r.kt)("p",{parentName:"li"},"The width argument has the following characteristics:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A numerical value indicates the width in pixel units.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a string is specified the format is a number followed by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"px")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"em")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pt")),", or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"%")),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The height for the created IFrame. "),(0,r.kt)("p",{parentName:"li"},"The height argument has the following characteristics: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A numerical value indicates the height in pixel units.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a string is specified the format is a number followed by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"px")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"em")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pt")),", or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"%")),". ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parentNode"),": The HTML DOM Element where the IFrame is added as a child.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configOverwrite"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"interfaceConfigOverwrite"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jwt"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," token.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"onload"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The IFrame onload event handler.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"invitees"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," Object arrays that contain information about participants invited to a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"devices"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," Information map about the devices used in a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userInfo"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The JS object that contains information about the participant starting or joining the meeting (e.g., email).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lang"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," The default meeting language.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"iceServers"),": ",(0,r.kt)("em",{parentName:"p"},"Optional.")," Object with rules that will be used to modify/remove the existing ice server configuration. ",(0,r.kt)("strong",{parentName:"p"},"NOTE: This property is currently experimental and may be removed in the future!")))))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const domain = 'meet.jit.si';\nconst options = {\n    roomName: 'JitsiMeetAPIExample',\n    width: 700,\n    height: 700,\n    parentNode: document.querySelector('#meet'),\n    lang: 'de'\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can set the initial media devices for the call using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const domain = 'meet.jit.si';\nconst options = {\n    ...\n    devices: {\n        audioInput: '<deviceLabel>',\n        audioOutput: '<deviceLabel>',\n        videoInput: '<deviceLabel>'\n    },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can override options set in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"configOverwrite"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interfaceConfigOverwrite"))," objects, respectively."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n    ...\n    configOverwrite: { startWithAudioMuted: true },\n    interfaceConfigOverwrite: { DISABLE_DOMINANT_SPEAKER_INDICATOR: true },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"To pass a JWT token to Jitsi Meet use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n   ...\n   jwt: '<jwt_token>',\n   ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"userInfo"))," (e.g., email, display name) for the call using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var domain = \"meet.jit.si\";\nvar options = {\n    ...\n    userInfo: {\n        email: 'email@jitsiexamplemail.com',\n        displayName: 'John Doe'\n    }\n}\nvar api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)(u,{name:"ice-servers",mdxType:"Anchor"}),(0,r.kt)("p",null,"You can modify the default ice servers configuration with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"iceServers"))," property (",(0,r.kt)("strong",{parentName:"p"},"NOTE: This property is currently experimental and may be removed in the future!"),") using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var domain = \"meet.jit.si\";\nvar options = {\n    ...\n    iceServers: {\n        replace: [\n            { // replace the URL of all existing ice servers with type matching targetType \n                targetType: 'turn',\n                urls: 'turn:example.com:443'\n            },\n            { // replace the URL of all existing ice servers with type matching targetType \n                targetType: 'turns',\n                urls: 'turns:example.com:443?transport=tcp'\n            },\n            { // remove all existing ice servers with type matching targetType \n                targetType: 'stun',\n                urls: null\n            }\n        ]\n    },\n    ...\n}\nvar api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("p",null,"Configuring the tile view:"),(0,r.kt)("p",null,"You can configure the maximum number of columns in the tile view by overriding the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TILE_VIEW_MAX_COLUMNS"))," property from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file via the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interfaceConfigOverwrite"))," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n    ...\n    interfaceConfigOverwrite: { TILE_VIEW_MAX_COLUMNS: 2 },\n    ...\n};\nconst api = new JitsiMeetExternalAPI(domain, options);\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TILE_VIEW_MAX_COLUMNS"))," accepts values from 1 to 5. The default value is 5.")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"All functions are documented ",(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/dev-guide/dev-guide-iframe-functions"},"here")," now."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"All commands are documented ",(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/dev-guide/dev-guide-iframe-commands"},"here")," now."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"All events are documented ",(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/dev-guide/dev-guide-iframe-events"},"here")," now."))}h.isMDXComponent=!0}}]);