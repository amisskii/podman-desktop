"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56576],{56409:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"interfaces/TelemetryLogger","title":"Interface: TelemetryLogger","description":"Defined in4429","source":"@site/api/interfaces/TelemetryLogger.md","sourceDirName":"interfaces","slug":"/interfaces/TelemetryLogger","permalink":"/api/interfaces/TelemetryLogger","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"StorageStats","permalink":"/api/interfaces/StorageStats"},"next":{"title":"TelemetryLoggerOptions","permalink":"/api/interfaces/TelemetryLoggerOptions"}}');var i=s(62540),t=s(43023);const a={},d="Interface: TelemetryLogger",l={},c=[{value:"Properties",id:"properties",level:2},{value:"isErrorsEnabled",id:"iserrorsenabled",level:3},{value:"isUsageEnabled",id:"isusageenabled",level:3},{value:"onDidChangeEnableStates",id:"ondidchangeenablestates",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"logError()",id:"logerror",level:3},{value:"Call Signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"eventName",id:"eventname",level:6},{value:"data?",id:"data",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Call Signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"error",id:"error",level:6},{value:"data?",id:"data-1",level:6},{value:"Returns",id:"returns-2",level:5},{value:"logUsage()",id:"logusage",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"eventName",id:"eventname-1",level:5},{value:"data?",id:"data-2",level:5},{value:"Returns",id:"returns-3",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-telemetrylogger",children:"Interface: TelemetryLogger"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4429",children:"packages/extension-api/src/extension-api.d.ts:4429"})]}),"\n",(0,i.jsx)(n.p,{children:"A telemetry logger which can be used by extensions to log usage and error telementry."}),"\n",(0,i.jsxs)(n.p,{children:["A logger wraps around an ",(0,i.jsx)(n.a,{href:"/api/interfaces/TelemetrySender",children:"sender"})," but it guarantees that"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"user settings to disable or tweak telemetry are respected, and that"}),"\n",(0,i.jsx)(n.li,{children:"potential sensitive data is removed"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'It also enables an "echo UI" that prints whatever data is send and it allows the editor\nto forward unhandled errors to the respective extensions.'}),"\n",(0,i.jsxs)(n.p,{children:["To get an instance of a ",(0,i.jsx)(n.code,{children:"TelemetryLogger"}),", use\n",(0,i.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/env/functions/createTelemetryLogger",children:"`createTelemetryLogger`"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"iserrorsenabled",children:"isErrorsEnabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"isErrorsEnabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4443",children:"packages/extension-api/src/extension-api.d.ts:4443"})]}),"\n",(0,i.jsx)(n.p,{children:"Whether or not error telemetry is enabled for this logger."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isusageenabled",children:"isUsageEnabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"isUsageEnabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4438",children:"packages/extension-api/src/extension-api.d.ts:4438"})]}),"\n",(0,i.jsx)(n.p,{children:"Whether or not usage telemetry is enabled for this logger."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondidchangeenablestates",children:"onDidChangeEnableStates"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDidChangeEnableStates"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"TelemetryLogger"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4433",children:"packages/extension-api/src/extension-api.d.ts:4433"})]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:"Event"})," which fires when the enablement state of usage or error telemetry changes."]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4478",children:"packages/extension-api/src/extension-api.d.ts:4478"})]}),"\n",(0,i.jsx)(n.p,{children:"Dispose this object and free resources."}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"logerror",children:"logError()"}),"\n",(0,i.jsx)(n.h4,{id:"call-signature",children:"Call Signature"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"logError"}),"(",(0,i.jsx)(n.code,{children:"eventName"}),", ",(0,i.jsx)(n.code,{children:"data"}),"?): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4465",children:"packages/extension-api/src/extension-api.d.ts:4465"})]}),"\n",(0,i.jsx)(n.p,{children:"Log an error event."}),"\n",(0,i.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,i.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event. Differs from ",(0,i.jsx)(n.code,{children:"logUsage"})," in that it will log the event if the telemetry setting is Error+.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,i.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h6,{id:"eventname",children:"eventName"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.p,{children:"The event name to log"}),"\n",(0,i.jsx)(n.h6,{id:"data",children:"data?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"The data to log"}),"\n",(0,i.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"call-signature-1",children:"Call Signature"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"logError"}),"(",(0,i.jsx)(n.code,{children:"error"}),", ",(0,i.jsx)(n.code,{children:"data"}),"?): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4473",children:"packages/extension-api/src/extension-api.d.ts:4473"})]}),"\n",(0,i.jsx)(n.p,{children:"Log an error event."}),"\n",(0,i.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsx)(n.h6,{id:"error",children:"error"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Error"})}),"\n",(0,i.jsx)(n.p,{children:"The error object which contains the stack trace cleaned of PII"}),"\n",(0,i.jsx)(n.h6,{id:"data-1",children:"data?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"Additional data to log alongside the stack trace"}),"\n",(0,i.jsx)(n.h5,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"logusage",children:"logUsage()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"logUsage"}),"(",(0,i.jsx)(n.code,{children:"eventName"}),", ",(0,i.jsx)(n.code,{children:"data"}),"?): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L4454",children:"packages/extension-api/src/extension-api.d.ts:4454"})]}),"\n",(0,i.jsx)(n.p,{children:"Log a usage event."}),"\n",(0,i.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,i.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsx)(n.h5,{id:"eventname-1",children:"eventName"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.p,{children:"The event name to log"}),"\n",(0,i.jsx)(n.h5,{id:"data-2",children:"data?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"The data to log"}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(63696);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);