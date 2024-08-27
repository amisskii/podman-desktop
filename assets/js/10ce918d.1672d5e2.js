"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37918],{17265:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(24246),a=i(71670);const t={sidebar_position:2,title:"Lima instance for containers",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","docker","containers","onboarding","linux","macOS"],keywords:["podman desktop","containers","lima","onboarding","linux","macos"]},l="Creating a Lima instance for container workloads with Podman Desktop",c={id:"lima/creating-a-lima-instance",title:"Lima instance for containers",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",source:"@site/docs/lima/creating-a-lima-instance.md",sourceDirName:"lima",slug:"/lima/creating-a-lima-instance",permalink:"/docs/lima/creating-a-lima-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/lima/creating-a-lima-instance.md",tags:[{inline:!0,label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{inline:!0,label:"podman",permalink:"/docs/tags/podman"},{inline:!0,label:"docker",permalink:"/docs/tags/docker"},{inline:!0,label:"containers",permalink:"/docs/tags/containers"},{inline:!0,label:"onboarding",permalink:"/docs/tags/onboarding"},{inline:!0,label:"linux",permalink:"/docs/tags/linux"},{inline:!0,label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Lima instance for containers",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","docker","containers","onboarding","linux","macOS"],keywords:["podman desktop","containers","lima","onboarding","linux","macos"]},sidebar:"mySidebar",previous:{title:"Installing the CLI",permalink:"/docs/lima/installing"},next:{title:"Lima instance for Kubernetes",permalink:"/docs/lima/creating-a-kubernetes-instance"}},r={},o=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(n){const e={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components},{Icon:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"creating-a-lima-instance-for-container-workloads-with-podman-desktop",children:"Creating a Lima instance for container workloads with Podman Desktop"})}),"\n",(0,s.jsx)(e.p,{children:"To use the Lima provider you need a Lima instance running a Linux machine."}),"\n",(0,s.jsx)(e.p,{children:"In the future, Podman Desktop might be able to create Lima instances."}),"\n",(0,s.jsx)(e.p,{children:"Consider creating a custom Lima instance to:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Control the assigned resources: CPUs, memory, and disk size."}),"\n",(0,s.jsx)(e.li,{children:"Use the rootful connection by default, for example to run Kind."}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsxs)(e.a,{href:"/docs/lima/installing",children:["Install the ",(0,s.jsx)(e.code,{children:"lima"})," CLI"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In a terminal, create the Lima instance."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To create a Lima instance with rootless Podman, use the ",(0,s.jsx)(e.code,{children:"podman"})," template:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ limactl start --name=podman template://podman\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To create a Lima instance with rootful Podman, use the ",(0,s.jsx)(e.code,{children:"podman-rootful"})," template:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ limactl start --name=podman template://podman-rootful\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To create an Lima instance with rootless Docker, use the ",(0,s.jsx)(e.code,{children:"docker"})," template:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ limactl start --name=docker template://docker\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To create an Lima instance with rootful Docker, use the ",(0,s.jsx)(e.code,{children:"docker-rootful"})," template:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ limactl start --name=docker template://docker-rootful\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To select the number of CPUs, the memory, and the disk size, add the options to the ",(0,s.jsx)(e.code,{children:"limactl start"})," command:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"--cpus=2 --memory=2 --disk=50\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Wait for the instance to start, and restart the Lima extension."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Lima"]}),", to change the instance name and type."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Podman (default)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Type: podman"}),"\n",(0,s.jsxs)(e.li,{children:["Name: podman\n",(0,s.jsx)(e.img,{alt:"Lima preferences Podman",src:i(8667).Z+"",width:"602",height:"199"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Docker"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Type: docker"}),"\n",(0,s.jsxs)(e.li,{children:["Name: docker\n",(0,s.jsx)(e.img,{alt:"Lima preferences Docker",src:i(70134).Z+"",width:"607",height:"205"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Lima"]}),", to configure a custom socket name."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"The default socket name is:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"podman.sock"})," for Podman"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"docker.sock"})," for Docker"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"To use a custom socket name:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Lima preferences Socket",src:i(10520).Z+"",width:"741",height:"115"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions > Lima"]}),", to disable and enable the extension after changes."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:'To verify the connection to a running "podman" instance:'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ podman.lima version\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:'To verify the connection to a running "docker" instance:'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ docker.lima version\n"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},70134:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/lima-preferences-docker-2a17aa75bf2d45cb2850ce869016acea.png"},8667:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/lima-preferences-podman-1bc867f183e9e7cc1eb9bfc1f4e695c1.png"},10520:(n,e,i)=>{i.d(e,{Z:()=>s});const s="data:image/png;base64,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QSNGjOiXCt3cEih4bD7WxmfPWvJxs0oo/CdKrE38cG1dtKtyQYZpYJiJ5C0swtz2IutqTv1QdwIPPJFBzTMrKe+358X3s0A2/+3B0ZQ99zp6TLmIiEh0HT16tNft/fhGT7m4Jsr+GCYp/y6u3btO5fIlkPeNJSx9rIiRtaVsqLmRkq1FemEWVL6tQC4iInID0Ez5NWcRDEI4fL1Or8qnhRkIYjrhbk9yERERkWi52Ez5p+il4jcKl7De4iLXgBcJ66krIiIiNwgtXxERERERiTKFchERERGRKFMoFxERERGJMoVyEREREZEoUygXEREREYkyhXIRERERkShTKBcRERERiTKFchERERGRKOu3lweNGPGZ/ipKREREROSGcvToX6/oeM2Ui4iIiIhEmUK5iIiIiEiUKZSLiIiIiESZQrmIiIiISJQplIuIiIiIRJlCuYiIiIhIlCmUi4iIiIhEmUK5iIiIiEiUKZSLiIiIiESZQrmIiIiISJQplIuIiIiIRJlCuYiIiIhIlCmUi4iIiIhEmUK5iIiIiEiUKZSLiIiIiESZQrmIiIiISJQplIuIiIiIRJlCuYiIiIhIlCmUi4iIiIhEmUK5iIiIiEiUKZSLiIiIiESZQrmIiIiISJQplIuIiIiIRJlCuYiIiIhIlCmUi4iIiIhEmUK5iIiIiEiUKZSLiIiIiESZQrmIiIiISJQZ/VXQ33/mK4z5zKL+Kk5ERERE5Iaw96+vUX70uSsqY0AwGH+yLzuOGDHiik4kIiIiInKzOnr0aK/btXxFRERERCTKFMpFRERERKJMoVxEREREJMoUykVEREREokyhXEREREQkyvocyjs6Oq5mPUREREREPpX6kqP7HMpPnDhxRZUREREREbkZ9SVH9zmUt7W1XVFlRERERERuRn3J0X0O5b7v097efkUVEhERERG5mbS1teP7/kX3u6Qfenqex8mTfXoBqIiIiIjITe3kyZN43vE+7WtcSsEdHR00NzcTExNDTEwMgwYNYuBAPcBFRERERAQ68/KJEydob2+/pFUmlxTKT7nUk4iIiIiIyIVpmltEREREJMoUykVEREREokyhXEREREQkyhTKRURERESiTKFcRERERCTKFMpFRERERKLs/wMhZ8gdA/fZFgAAAABJRU5ErkJggg=="},71670:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>l});var s=i(27378);const a={},t=s.createContext(a);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);