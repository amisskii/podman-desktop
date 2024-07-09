"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58792],{58718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=s(24246),i=s(71670);const a={},r="Function: registerCommand()",c={id:"namespaces/commands/functions/registerCommand",title:"Function: registerCommand()",description:"registerCommand(command, callback, thisArg?): Disposable",source:"@site/api/namespaces/commands/functions/registerCommand.md",sourceDirName:"namespaces/commands/functions",slug:"/namespaces/commands/functions/registerCommand",permalink:"/api/namespaces/commands/functions/registerCommand",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"executeCommand",permalink:"/api/namespaces/commands/functions/executeCommand"},next:{title:"configuration",permalink:"/api/namespaces/configuration/"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Defined in",id:"defined-in",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"function-registercommand",children:"Function: registerCommand()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"registerCommand"}),"(",(0,t.jsx)(n.code,{children:"command"}),", ",(0,t.jsx)(n.code,{children:"callback"}),", ",(0,t.jsx)(n.code,{children:"thisArg"}),"?): ",(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Define a command, to be executed later, either by calling ",(0,t.jsx)(n.a,{href:"/api/namespaces/commands/functions/executeCommand",children:"commands.executeCommand"})," or by referencing its name in the ",(0,t.jsx)(n.code,{children:"command"})," field of a ",(0,t.jsx)(n.a,{href:"/api/interfaces/StatusBarItem",children:"StatusBarItem"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"command"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"the name of the command. The name must be unique over all extensions. It is recommended to prefix this name with the name of the extension, to avoid conflicts with commands from other extensions."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"callback"})]}),"\n",(0,t.jsx)(n.p,{children:"the command to execute"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"thisArg?"}),": ",(0,t.jsx)(n.code,{children:"any"})]}),"\n",(0,t.jsxs)(n.p,{children:["The value of ",(0,t.jsx)(n.code,{children:"this"})," provided for the call to callback"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,t.jsx)(n.p,{children:"A disposable that unregisters this command when being disposed"}),"\n",(0,t.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"if a command with the same name is already registered."}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/amisskii/podman-desktop/blob/532e7c46fbba3109dbe24fe148ee452c6478184e/packages/extension-api/src/extension-api.d.ts#L654",children:"packages/extension-api/src/extension-api.d.ts:654"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(27378);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);