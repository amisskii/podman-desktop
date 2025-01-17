"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72290],{10643:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"namespaces/containerEngine/functions/listInfos","title":"Function: listInfos()","description":"listInfos(options?): Promise\\\\","source":"@site/api/namespaces/containerEngine/functions/listInfos.md","sourceDirName":"namespaces/containerEngine/functions","slug":"/namespaces/containerEngine/functions/listInfos","permalink":"/api/namespaces/containerEngine/functions/listInfos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"listImages","permalink":"/api/namespaces/containerEngine/functions/listImages"},"next":{"title":"listNetworks","permalink":"/api/namespaces/containerEngine/functions/listNetworks"}}');var o=s(62540),t=s(43023);const r={},a="Function: listInfos()",c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"options?",id:"options",level:3},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"function-listinfos",children:"Function: listInfos()"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"listInfos"}),"(",(0,o.jsx)(e.code,{children:"options"}),"?): ",(0,o.jsx)(e.code,{children:"Promise"}),"<",(0,o.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,o.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Defined in: ",(0,o.jsx)(e.a,{href:"https://github.com/amisskii/podman-desktop/blob/85f35da4b65af21a5fb216d78c748f82d8ea9394/packages/extension-api/src/extension-api.d.ts#L3919",children:"packages/extension-api/src/extension-api.d.ts:3919"})]}),"\n",(0,o.jsx)(e.p,{children:"List the engines information."}),"\n",(0,o.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(e.h3,{id:"options",children:"options?"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"/api/interfaces/ListInfosOptions",children:(0,o.jsx)(e.code,{children:"ListInfosOptions"})})}),"\n",(0,o.jsx)(e.p,{children:"optional options for listing information"}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Promise"}),"<",(0,o.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,o.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n",(0,o.jsx)(e.p,{children:"A promise resolving to an array of engine information."}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"// Example 1: List all engine information when no specific provider is provided.\nconst infos = await listInfos();\nconsole.log(infos);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"// Example 2: List information for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst info = await listInfos({ provider: provider.connection });\nconsole.log(info);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},43023:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var i=s(63696);const o={},t=i.createContext(o);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);