"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89626],{79148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(24246),i=t(71670);const s={sidebar_position:5,title:"Restarting a cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},o="Restarting your local Kind-powered Kubernetes cluster",d={id:"kind/restarting-your-kind-cluster",title:"Restarting a cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",source:"@site/docs/kind/restarting-your-kind-cluster.md",sourceDirName:"kind",slug:"/kind/restarting-your-kind-cluster",permalink:"/docs/kind/restarting-your-kind-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/restarting-your-kind-cluster.md",tags:[{inline:!0,label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{inline:!0,label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Restarting a cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Creating a cluster",permalink:"/docs/kind/creating-a-kind-cluster"},next:{title:"Working with a cluster",permalink:"/docs/kind/working-with-your-local-kind-cluster"}},c={},l=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Workaround",id:"workaround",level:4}];function a(e){const n={a:"a",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"restarting-your-local-kind-powered-kubernetes-cluster",children:"Restarting your local Kind-powered Kubernetes cluster"}),"\n",(0,r.jsx)(n.p,{children:"With Podman Desktop, you can restart your local Kind-powered Kubernetes cluster."}),"\n",(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Find the Kind cluster to restart."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(t,{icon:"fa-solid fa-repeat",size:"lg"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.strong,{children:"Containers"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Find the Kind cluster that restarted."}),"\n",(0,r.jsxs)(n.li,{children:["The cluster ",(0,r.jsx)(n.strong,{children:"Age"})," is consistent with the restart time."]}),"\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.strong,{children:"Pods"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Find the pods that are running on your Kind cluster."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"workaround",children:"Workaround"}),"\n",(0,r.jsx)(n.p,{children:"Kind has no command to restart a cluster.\nTherefore, Podman Desktop stops the Kind cluster, starts it again, and hopes for the best.\nThe Kind cluster might not restart successfully.\nIn that case:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Consider replacing Kind with a local Kubernetes cluster that you can restart, such as ",(0,r.jsx)(n.a,{href:"https://developers.redhat.com/products/openshift-local/",children:"OpenShift Local"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Consider ",(0,r.jsx)(n.a,{href:"/docs/kind/deleting-your-kind-cluster",children:"deleting your Kind cluster"}),", and ",(0,r.jsx)(n.a,{href:"/docs/kind/creating-a-kind-cluster",children:"creating a Kind cluster"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var r=t(27378);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);