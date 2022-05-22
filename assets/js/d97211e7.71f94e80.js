"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=o,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={id:"dev-guide-iframe-commands",title:"Commands"},p=void 0,s={unversionedId:"dev-guide/dev-guide-iframe-commands",id:"dev-guide/dev-guide-iframe-commands",title:"Commands",description:"You can control the embedded Jitsi Meet conference by calling executeCommand on the JitsiMeetExternalAPI object:",source:"@site/docs/dev-guide/iframe-commands.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-iframe-commands",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-commands",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/iframe-commands.md",tags:[],version:"current",lastUpdatedAt:1653234021,formattedLastUpdatedAt:"5/22/2022",frontMatter:{id:"dev-guide-iframe-commands",title:"Commands"},sidebar:"docs",previous:{title:"Functions",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-functions"},next:{title:"Events",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-events"}},d={},m=[{value:"displayName",id:"displayname",level:3},{value:"password",id:"password",level:3},{value:"toggleLobby",id:"togglelobby",level:3},{value:"sendTones",id:"sendtones",level:3},{value:"startShareVideo",id:"startsharevideo",level:3},{value:"stopShareVideo",id:"stopsharevideo",level:3},{value:"subject",id:"subject",level:3},{value:"localSubject",id:"localsubject",level:3},{value:"toggleAudio",id:"toggleaudio",level:3},{value:"toggleVideo",id:"togglevideo",level:3},{value:"toggleFilmStrip",id:"togglefilmstrip",level:3},{value:"toggleChat",id:"togglechat",level:3},{value:"toggleRaiseHand",id:"toggleraisehand",level:3},{value:"toggleShareScreen",id:"togglesharescreen",level:3},{value:"toggleSubtitles",id:"togglesubtitles",level:3},{value:"toggleTileView",id:"toggletileview",level:3},{value:"hangup",id:"hangup",level:3},{value:"email",id:"email",level:3},{value:"avatarUrl",id:"avatarurl",level:3},{value:"sendEndpointTextMessage",id:"sendendpointtextmessage",level:3},{value:"setLargeVideoParticipant",id:"setlargevideoparticipant",level:3},{value:"setVideoQuality",id:"setvideoquality",level:3},{value:"muteEveryone",id:"muteeveryone",level:3},{value:"startRecording",id:"startrecording",level:3},{value:"stopRecording",id:"stoprecording",level:3},{value:"initiatePrivateChat",id:"initiateprivatechat",level:3},{value:"cancelPrivateChat",id:"cancelprivatechat",level:3},{value:"kickParticipant",id:"kickparticipant",level:3},{value:"grantModerator",id:"grantmoderator",level:3},{value:"overwriteConfig",id:"overwriteconfig",level:3},{value:"sendChatMessage",id:"sendchatmessage",level:3},{value:"setFollowMe",id:"setfollowme",level:3},{value:"setSubtitles",id:"setsubtitles",level:3},{value:"setTileView",id:"settileview",level:3},{value:"answerKnockingParticipant",id:"answerknockingparticipant",level:3},{value:"toggleCamera",id:"togglecamera",level:3},{value:"toggleCameraMirror",id:"togglecameramirror",level:3},{value:"toggleVirtualBackgroundDialog",id:"togglevirtualbackgrounddialog",level:3},{value:"setParticipantVolume",id:"setparticipantvolume",level:3},{value:"toggleParticipantsPane",id:"toggleparticipantspane",level:3},{value:"toggleModeration",id:"togglemoderation",level:3},{value:"askToUnmute",id:"asktounmute",level:3},{value:"approveVideo",id:"approvevideo",level:3},{value:"rejectParticipant",id:"rejectparticipant",level:3},{value:"addBreakoutRoom",id:"addbreakoutroom",level:3},{value:"autoAssignToBreakoutRooms",id:"autoassigntobreakoutrooms",level:3},{value:"closeBreakoutRoom",id:"closebreakoutroom",level:3},{value:"joinBreakoutRoom",id:"joinbreakoutroom",level:3},{value:"removeBreakoutRoom",id:"removebreakoutroom",level:3},{value:"sendParticipantToRoom",id:"sendparticipanttoroom",level:3},{value:"overwriteNames",id:"overwritenames",level:3}],u={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can control the embedded Jitsi Meet conference by calling ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"executeCommand"))," on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"JitsiMeetExternalAPI"))," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand(command, ...arguments);\n")),(0,r.kt)("p",null,"The command parameter is a string which contains the command name."),(0,r.kt)("p",null,"You can also execute multiple commands using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"executeCommands"))," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommands(commands);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"commands"))," parameter is an object with the names of the commands as keys and the arguments for the commands as values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommands({\n    displayName: [ 'nickname' ],\n    toggleAudio: []\n});\n")),(0,r.kt)("p",null,"The following commands are supported:"),(0,r.kt)("h3",{id:"displayname"},"displayName"),(0,r.kt)("p",null,"Sets the display name of the local participant."),(0,r.kt)("p",null,"  This command requires one argument to set the new display name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('displayName', 'New Nickname');\n")),(0,r.kt)("h3",{id:"password"},"password"),(0,r.kt)("p",null,"Sets the password for the room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// set new password for channel\napi.addEventListener('participantRoleChanged', function(event) {\n    if (event.role === \"moderator\") {\n        api.executeCommand('password', 'The Password');\n    }\n});\n// join a protected channel\napi.on('passwordRequired', function ()\n{\n    api.executeCommand('password', 'The Password');\n});\n")),(0,r.kt)("h3",{id:"togglelobby"},"toggleLobby"),(0,r.kt)("p",null,"Toggles the lobby mode on or off."),(0,r.kt)("p",null,"This command requires the desired lobby mode state as the argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.addEventListener('participantRoleChanged', function (event) {\n    if(event.role === 'moderator') {\n        api.executeCommand('toggleLobby', true);\n    }\n});\n")),(0,r.kt)("h3",{id:"sendtones"},"sendTones"),(0,r.kt)("p",null,"Touch tone playback."),(0,r.kt)("p",null,"This command requires the selected touch tone dial pads to play as well as the length of and time gap between tone play as the arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('sendTones', {\n    tones: string, // The dial pad touch tones to play. For example, '12345#'.\n    duration: number, // Optional. The number of milliseconds each tone should play. The default is 200.\n    pause: number // Optional. The number of milliseconds between each tone. The default is 200.\n});\n")),(0,r.kt)("h3",{id:"startsharevideo"},"startShareVideo"),(0,r.kt)("p",null,"Starts sharing a video"),(0,r.kt)("p",null,"This command requires the an url pointing to either a youtube video or a video to be streamed from web (e.g an mp4 file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('startShareVideo', url);\n")),(0,r.kt)("h3",{id:"stopsharevideo"},"stopShareVideo"),(0,r.kt)("p",null,"Stops sharing a video (if the user is the one who started the video)"),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('stopShareVideo');\n")),(0,r.kt)("h3",{id:"subject"},"subject"),(0,r.kt)("p",null,"Sets the subject of the conference."),(0,r.kt)("p",null,"This command requires the new subject to be set as the argument and it will be applied only if the participant has the moderator role or after they receive that role later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('subject', 'New Conference Subject');\n")),(0,r.kt)("h3",{id:"localsubject"},"localSubject"),(0,r.kt)("p",null,"Sets the local subject of the conference."),(0,r.kt)("p",null,"This command requires the new local subject to be set as the argument and it can be applied by all participants regardless of their role."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('localSubject', 'New Conference Local Subject');\n")),(0,r.kt)("h3",{id:"toggleaudio"},"toggleAudio"),(0,r.kt)("p",null,"Mutes / unmutes the audio for the local participant."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleAudio');\n")),(0,r.kt)("h3",{id:"togglevideo"},"toggleVideo"),(0,r.kt)("p",null,"Mutes / unmutes the video for the local participant."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleVideo');\n")),(0,r.kt)("h3",{id:"togglefilmstrip"},"toggleFilmStrip"),(0,r.kt)("p",null,"Hide or show the filmstrip."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleFilmStrip');\n")),(0,r.kt)("h3",{id:"togglechat"},"toggleChat"),(0,r.kt)("p",null,"Hide or show chat messaging."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleChat');\n")),(0,r.kt)("h3",{id:"toggleraisehand"},"toggleRaiseHand"),(0,r.kt)("p",null,"Hide or show the raised hand."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleRaiseHand')\n")),(0,r.kt)("h3",{id:"togglesharescreen"},"toggleShareScreen"),(0,r.kt)("p",null,"Start or stop screen sharing."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleShareScreen');\n")),(0,r.kt)("h3",{id:"togglesubtitles"},"toggleSubtitles"),(0,r.kt)("p",null,"Start or stop subtitles."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleSubtitles');\n")),(0,r.kt)("h3",{id:"toggletileview"},"toggleTileView"),(0,r.kt)("p",null,"Enter or exit the tile view layout mode."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleTileView');\n")),(0,r.kt)("h3",{id:"hangup"},"hangup"),(0,r.kt)("p",null,"Ends the call."),(0,r.kt)("p",null,"No arguments are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('hangup');\n")),(0,r.kt)("h3",{id:"email"},"email"),(0,r.kt)("p",null,"Changes the local email address."),(0,r.kt)("p",null,"This command requires the new email address as the single argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('email', 'example@example.com');\n")),(0,r.kt)("h3",{id:"avatarurl"},"avatarUrl"),(0,r.kt)("p",null,"Changes the local avatar URL."),(0,r.kt)("p",null,"This command requires the new avatar URL to be set as the single argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('avatarUrl', 'https://avatars0.githubusercontent.com/u/3671647');\n")),(0,r.kt)("h3",{id:"sendendpointtextmessage"},"sendEndpointTextMessage"),(0,r.kt)("p",null,"Sends a text message to another participant through the data channels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('sendEndpointTextMessage', 'receiverParticipantId', 'text');\n")),(0,r.kt)("h3",{id:"setlargevideoparticipant"},"setLargeVideoParticipant"),(0,r.kt)("p",null,"Displays the participant on the large video display."),(0,r.kt)("p",null,"The participant ID, if specified, is displayed on the large video. If no argument is passed, the participant to be displayed on the large  video is automatically selected based on the dominant/pinned speaker settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setLargeVideoParticipant', 'abcd1234');\n")),(0,r.kt)("h3",{id:"setvideoquality"},"setVideoQuality"),(0,r.kt)("p",null,"Sets the send and receive video resolution."),(0,r.kt)("p",null,"The resolution height setting is implemented using a single argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setVideoQuality', 720);\n")),(0,r.kt)("h3",{id:"muteeveryone"},"muteEveryone"),(0,r.kt)("p",null,"Mute all meeting participants."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator and can take one argument: ",(0,r.kt)("inlineCode",{parentName:"p"},"mediaType")," - for which media type to mute everyone."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mediaType")," can be either 'audio' (default) or 'video'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('muteEveryone', 'video');\n")),(0,r.kt)("h3",{id:"startrecording"},"startRecording"),(0,r.kt)("p",null,"Starts a file recording or streaming session using passed parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RTMP streaming")," - Recording mode set to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream"))," with an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"rtmpStreamKey")),". The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"rtmpBroadcastID"))," value is optional.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"YouTube streams")," - Recording mode set to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream"))," with an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"youtubeStreamKey")),". The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"youtubeBroadcastID"))," value is optional.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dropbox recording")," - Recording mode set to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"file"))," with a Dropbox OAuth2 token."),(0,r.kt)("p",{parentName:"li"},"Additionally, Dropbox saving should be enabled on the Jitsi meet deploy config you are using.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File recording")," - Recording mode set to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"file")),"."),(0,r.kt)("p",{parentName:"li"},"Optionally, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"shouldShare"))," should be passed on. No other params are required."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('startRecording', {\n    mode: string //recording mode, either `file` or `stream`.\n    dropboxToken: string, //dropbox oauth2 token.\n    shouldShare: boolean, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.\n    rtmpStreamKey: string, //the RTMP stream key.\n    rtmpBroadcastID: string, //the RTMP broadcast ID.\n    youtubeStreamKey: string, //the youtube stream key.\n    youtubeBroadcastID: string //the youtube broacast ID.\n});\n")),(0,r.kt)("h3",{id:"stoprecording"},"stopRecording"),(0,r.kt)("p",null,"Stops an ongoing ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"file"))," recording."),(0,r.kt)("p",null,"The mode in which the recording was started must be specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('stopRecording',\n    mode: string //recording mode to stop, `stream` or `file`\n);\n")),(0,r.kt)("h3",{id:"initiateprivatechat"},"initiatePrivateChat"),(0,r.kt)("p",null,"Opens the chat window and sets the participant with the given participant ID as the messages recipient."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('initiatePrivateChat',\n    participantID: string\n);\n")),(0,r.kt)("h3",{id:"cancelprivatechat"},"cancelPrivateChat"),(0,r.kt)("p",null,"Removes the private chat participant thus it resets the chat window to group chat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('cancelPrivateChat');\n")),(0,r.kt)("h3",{id:"kickparticipant"},"kickParticipant"),(0,r.kt)("p",null,"Kicks the participant with the given participant ID from the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('kickParticipant',\n    participantID: string\n);\n")),(0,r.kt)("h3",{id:"grantmoderator"},"grantModerator"),(0,r.kt)("p",null,"Grants moderator rights to the participant with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('grantModerator',\n    participantID: string\n);\n")),(0,r.kt)("h3",{id:"overwriteconfig"},"overwriteConfig"),(0,r.kt)("p",null,"Overwrite config.js props with values from the config object passed on to the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('overwriteConfig',\n    config: Object\n);\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('overwriteConfig',\n    {\n      toolbarButtons: ['chat']\n    }\n);\n")),(0,r.kt)("p",null,"will overwrite the ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbarButtons")," config value with ",(0,r.kt)("inlineCode",{parentName:"p"},"[chat]"),", resulting in UI only showing the ",(0,r.kt)("inlineCode",{parentName:"p"},"chat")," button."),(0,r.kt)("h3",{id:"sendchatmessage"},"sendChatMessage"),(0,r.kt)("p",null,"Sends a chat message either to a specific participant or as a group chat message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('sendChatMessage',\n    message: string, //the text message\n    to: string, // the receiving participant ID or empty string/undefined for group chat.\n    ignorePrivacy: boolean // true if the privacy notification should be ignored. Defaulted to false.\n);\n")),(0,r.kt)("h3",{id:"setfollowme"},"setFollowMe"),(0,r.kt)("p",null,"Allows moderators to toggle the follow me functionality"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setFollowMe',\n    value: boolean, // set to true if participants should be following you, false otherwise\n);\n")),(0,r.kt)("h3",{id:"setsubtitles"},"setSubtitles"),(0,r.kt)("p",null,"Enables or disables the subtitles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setSubtitles',\n    enabled: boolean\n);\n")),(0,r.kt)("h3",{id:"settileview"},"setTileView"),(0,r.kt)("p",null,"Enables or disables the tileview mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setTileView',\n    enabled: boolean\n);\n")),(0,r.kt)("h3",{id:"answerknockingparticipant"},"answerKnockingParticipant"),(0,r.kt)("p",null,"Approves or rejects the knocking participant in the lobby."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('answerKnockingParticipant',\n    id: string, // the participant id\n    approved: boolean\n);\n")),(0,r.kt)("h3",{id:"togglecamera"},"toggleCamera"),(0,r.kt)("p",null,"Toggles the front/back camera on mobile web."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleCamera');\n")),(0,r.kt)("h3",{id:"togglecameramirror"},"toggleCameraMirror"),(0,r.kt)("p",null,"Toggles the mirroring of the local video."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleCameraMirror');\n")),(0,r.kt)("h3",{id:"togglevirtualbackgrounddialog"},"toggleVirtualBackgroundDialog"),(0,r.kt)("p",null,"Toggles the virtual background selection dialog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleVirtualBackgroundDialog');\n")),(0,r.kt)("h3",{id:"setparticipantvolume"},"setParticipantVolume"),(0,r.kt)("p",null,"Change volume of the participant with the given participant ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('setParticipantVolume',\n    participantID: string,\n    volume: number // number between 0 and 1\n);\n")),(0,r.kt)("h3",{id:"toggleparticipantspane"},"toggleParticipantsPane"),(0,r.kt)("p",null,"Changes the visibility status of the participants pane."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleParticipantsPane',\n    enabled: boolean // The visibility status of the participants pane.\n);\n")),(0,r.kt)("h3",{id:"togglemoderation"},"toggleModeration"),(0,r.kt)("p",null,"Changes moderation status of the given media type."),(0,r.kt)("p",null,"This command requires two arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," - whether to enable it or not, and ",(0,r.kt)("inlineCode",{parentName:"p"},"mediaType")," - the media type for which to change moderation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('toggleModeration',\n    enable: Boolean,\n    mediaType: String // can be 'audio' (default) or 'video'\n);\n")),(0,r.kt)("h3",{id:"asktounmute"},"askToUnmute"),(0,r.kt)("p",null,"Asks the participant with the given ID to unmute.\nIf audio moderation is on it also approves the participant for audio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('askToUnmute',\n    participantId: String\n);\n")),(0,r.kt)("h3",{id:"approvevideo"},"approveVideo"),(0,r.kt)("p",null,"If video moderation is on it approves the participant with the given ID for video."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('approveVideo',\n    participantId: String\n);\n")),(0,r.kt)("h3",{id:"rejectparticipant"},"rejectParticipant"),(0,r.kt)("p",null,"Rejects the participant with the given ID from moderation of the given media type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('rejectParticipant',\n    participantId: String,\n    mediaType: String // can be 'audio' (default) or 'video'\n);\n")),(0,r.kt)("h3",{id:"addbreakoutroom"},"addBreakoutRoom"),(0,r.kt)("p",null,"Creates a breakout room."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('addBreakoutRoom',\n    name: String // Optional. The name or subject of the new room.\n);\n")),(0,r.kt)("h3",{id:"autoassigntobreakoutrooms"},"autoAssignToBreakoutRooms"),(0,r.kt)("p",null,"Auto-assigns the participants to breakout rooms."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('autoAssignToBreakoutRooms');\n")),(0,r.kt)("h3",{id:"closebreakoutroom"},"closeBreakoutRoom"),(0,r.kt)("p",null,"Closes the breakout room and sends participants to the main room."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('closeBreakoutRoom',\n    roomId: String // The id of the room to close.\n);\n")),(0,r.kt)("h3",{id:"joinbreakoutroom"},"joinBreakoutRoom"),(0,r.kt)("p",null,"Joins a breakout room. If the argument is omitted, joins the main room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('joinBreakoutRoom',\n    roomId: String // Optional. The id of the room to join.\n);\n")),(0,r.kt)("h3",{id:"removebreakoutroom"},"removeBreakoutRoom"),(0,r.kt)("p",null,"Removes the breakout room."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('removeBreakoutRoom',\n    breakoutRoomJid: String // The jid of the breakout room to remove.\n);\n")),(0,r.kt)("h3",{id:"sendparticipanttoroom"},"sendParticipantToRoom"),(0,r.kt)("p",null,"Sends a participant to a room."),(0,r.kt)("p",null,"This command can only be executed by the meeting moderator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('sendParticipantToRoom',\n    participantId: String, // The id of the participant.\n    roomId: String // The id of the room.\n);\n")),(0,r.kt)("h3",{id:"overwritenames"},"overwriteNames"),(0,r.kt)("p",null,"Overwrites the names of the given participants to the given names. (locally for the participant that send the command)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.executeCommand('overwriteNames', [{\n        id: String, // The id of the participant.\n        name: String // The new name.\n    }]\n);\n")))}c.isMDXComponent=!0}}]);