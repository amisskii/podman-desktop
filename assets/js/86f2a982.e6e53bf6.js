"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40070],{97261:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=o(24246),a=o(71670);o(23930),o(39798);const i={sidebar_position:10,title:"Podman",description:"How to investigate when Podman does not work as expected."},t="Troubleshooting Podman",l={id:"troubleshooting/troubleshooting-podman",title:"Podman",description:"How to investigate when Podman does not work as expected.",source:"@site/docs/troubleshooting/troubleshooting-podman.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-podman",permalink:"/docs/troubleshooting/troubleshooting-podman",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-podman.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Podman",description:"How to investigate when Podman does not work as expected."},sidebar:"mySidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting/"},next:{title:"Podman on Windows",permalink:"/docs/troubleshooting/troubleshooting-podman-on-windows"}},r={},d=[{value:"Podman Desktop does not find your Podman installation",id:"podman-desktop-does-not-find-your-podman-installation",level:2},{value:"Issue",id:"issue",level:4},{value:"Solution",id:"solution",level:4},{value:"Podman Desktop fails creating a Podman machine",id:"podman-desktop-fails-creating-a-podman-machine",level:2},{value:"Issue",id:"issue-1",level:4},{value:"Workaround",id:"workaround",level:4},{value:"Podman Desktop fails starting a Podman machine",id:"podman-desktop-fails-starting-a-podman-machine",level:2},{value:"Issue",id:"issue-2",level:4},{value:"Workaround",id:"workaround-1",level:4},{value:"Podman Desktop fails listing images or containers",id:"podman-desktop-fails-listing-images-or-containers",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Podman Desktop fails listing containers",id:"podman-desktop-fails-listing-containers",level:2},{value:"Issue",id:"issue-3",level:4},{value:"Solution",id:"solution-1",level:4},{value:"Podman Desktop is failing to display the images or containers from a rootful Podman machine",id:"podman-desktop-is-failing-to-display-the-images-or-containers-from-a-rootful-podman-machine",level:2},{value:"Workaround",id:"workaround-2",level:4},{value:"Verification",id:"verification",level:4},{value:"Warning about Docker compatibility mode",id:"warning-about-docker-compatibility-mode",level:2},{value:"Issue",id:"issue-4",level:4},{value:"Solution",id:"solution-2",level:4}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"troubleshooting-podman",children:"Troubleshooting Podman"}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-does-not-find-your-podman-installation",children:"Podman Desktop does not find your Podman installation"}),"\n",(0,s.jsx)(n.h4,{id:"issue",children:"Issue"}),"\n",(0,s.jsx)(n.p,{children:"To install Podman, you can choose between multiple installation methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install from Podman Desktop."}),"\n",(0,s.jsx)(n.li,{children:"Podman installer."}),"\n",(0,s.jsx)(n.li,{children:"Operating system specific installer: Brew, Chocolatey, Scoop, Winget."}),"\n",(0,s.jsx)(n.li,{children:"Installer for restricted environment."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop might fail to detect your Podman installation."}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Try following steps to verify your Podman installation.\nAfter each step, quit and restart Podman Desktop to ensure that it can detect your Podman installation."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a terminal, verify you can access the Podman CLI, and verify the version."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman version\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update Podman to the latest stable version by using your installation method."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Search for errors in the installation logs (if your installation method is providing logs)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reinstall Podman with the same installation method."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reinstall Podman with the Podman Desktop installer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reinstall Podman with the Podman installer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reinstall Podman with another method."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-fails-creating-a-podman-machine",children:"Podman Desktop fails creating a Podman machine"}),"\n",(0,s.jsx)(n.h4,{id:"issue-1",children:"Issue"}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop might fail creating a Podman machine."}),"\n",(0,s.jsx)(n.h4,{id:"workaround",children:"Workaround"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a terminal, create the Podman machine with the Podman CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine init\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the creation fails, read the logs carefully to continue troubleshooting."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-fails-starting-a-podman-machine",children:"Podman Desktop fails starting a Podman machine"}),"\n",(0,s.jsx)(n.h4,{id:"issue-2",children:"Issue"}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop might fail starting a Podman machine."}),"\n",(0,s.jsx)(n.h4,{id:"workaround-1",children:"Workaround"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a terminal, start the Podman machine with the Podman CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine start\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the creation fails, read the logs carefully to continue troubleshooting."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-fails-listing-images-or-containers",children:"Podman Desktop fails listing images or containers"}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop might fail listing images or container."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Podman 4.1.0 or later is needed. Podman Desktop requires the Podman machine to expose the socket on the host for macOS, and on a named pipe for Windows"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On Windows and macOS: in a terminal, verify that at least one Podman machine is running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine list\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To verify you can connect by using the CLI, in a terminal, run the ",(0,s.jsx)(n.code,{children:"hello"})," container:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman run quay.io/podman/hello\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-fails-listing-containers",children:"Podman Desktop fails listing containers"}),"\n",(0,s.jsx)(n.h4,{id:"issue-3",children:"Issue"}),"\n",(0,s.jsxs)(n.p,{children:['Podman Desktop might display "No Containers" as shown below, even if there are active containers running in the background.\n',(0,s.jsx)(n.img,{alt:"img",src:o(99590).Z+"",width:"2880",height:"1800"})]}),"\n",(0,s.jsx)(n.h4,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop and restart Podman Desktop."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In Podman Desktop, restart the Podman machine."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a terminal, restart the Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine stop\n$ podman machine start\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the previous step did not work for you, delete your Podman machine, and create a new one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine rm\n$ podman machine init\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the previous steps did not work for you, delete your Podman configuration files, and create a new Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ rm -rf ~/.local/share/containers/podman\n$ rm -rf ~/.config/containers/\n$ podman machine init\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"podman-desktop-is-failing-to-display-the-images-or-containers-from-a-rootful-podman-machine",children:"Podman Desktop is failing to display the images or containers from a rootful Podman machine"}),"\n",(0,s.jsx)(n.p,{children:"The rootful configuration for a Podman machine depends on the Podman machine default connection.\nThe default connection can be modified by external events, or when creating a new Podman machine.\nPodman Desktop might then reconnect in rootless mode, and fail to display the images or containers."}),"\n",(0,s.jsx)(n.h4,{id:"workaround-2",children:"Workaround"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify that the Podman default connection is the rootful connection to your Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman system connection ls\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default connection has ",(0,s.jsx)(n.code,{children:"true"})," at the end of the line."]}),"\n",(0,s.jsxs)(n.p,{children:["The rootful connection has a ",(0,s.jsx)(n.code,{children:"-root"})," name suffix, and a ",(0,s.jsx)(n.code,{children:"ssh://root@"})," URI prefix."]}),"\n",(0,s.jsx)(n.p,{children:"Example default rootful connection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"Name                        URI                                                         Identity                                      Default\npodman-machine-default      ssh://user@127.0.0.1:54826/run/user/1000/podman/podman.sock c:\\Users\\username\\.ssh\\podman-machine-default false\npodman-machine-default-root ssh://root@127.0.0.1:54826/run/podman/podman.sock           c:\\Users\\username\\.ssh\\podman-machine-default true\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example default rootless connection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"Name                        URI                                                         Identity                                      Default\npodman-machine-default      ssh://user@127.0.0.1:54826/run/user/1000/podman/podman.sock c:\\Users\\username\\.ssh\\podman-machine-default true\npodman-machine-default-root ssh://root@127.0.0.1:54826/run/podman/podman.sock           c:\\Users\\username\\.ssh\\podman-machine-default false\n"})}),"\n",(0,s.jsx)(n.p,{children:"Continue with the next steps only if the default connection is not the rootful connection to your Podman machine."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the Podman machine in rootful mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine set --rootful\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart the Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine stop\n$ podman machine start\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify that Podman default connection points to the rootful connection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman system connection ls\n"})}),"\n",(0,s.jsx)(n.p,{children:"Continue with the next steps only if the default connection is not the rootful connection to your Podman machine."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the Podman machine, such as ",(0,s.jsx)(n.code,{children:"podman-machine-default"})," in rootful mode:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman system connection default podman-machine-default-root\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart the Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine stop\n$ podman machine start\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Podman default connection is the rootful connection to your Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman system connection ls\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"warning-about-docker-compatibility-mode",children:"Warning about Docker compatibility mode"}),"\n",(0,s.jsx)(n.h4,{id:"issue-4",children:"Issue"}),"\n",(0,s.jsx)(n.p,{children:"When running the Podman provider, a warning shows regarding Docker compatibility mode on the dashboard:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-\x3c!--",metastring:"markdownlint-disable MD040 --\x3e",children:"\u26a0\ufe0f Docker Socket Compatibility: Podman is not emulating the default Docker socket path: '/var/run/docker.sock'. Docker-specific tools may not work. See troubleshooting page on podman-desktop.io for more information.\n"})}),"\n",(0,s.jsx)(n.p,{children:"This might appear when either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Docker socket is not mounted correctly."}),"\n",(0,s.jsx)(n.li,{children:"Docker Desktop is also being ran at the same time."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"solution-2",children:"Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop Docker Desktop (if installed)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On macOS, Run the ",(0,s.jsx)(n.code,{children:"podman-mac-helper"})," binary:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ sudo podman-mac-helper install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart the Podman machine to recreate and activate the default Docker socket path."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," If Docker Desktop is started again, it will automatically re-alias the default Docker socket location and the Podman compatibility warning will re-appear."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},39798:(e,n,o)=>{o.d(n,{Z:()=>t});o(27378);var s=o(40624);const a={tabItem:"tabItem_wHwb"};var i=o(24246);function t(e){let{children:n,hidden:o,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,t),hidden:o,children:n})}},23930:(e,n,o)=>{o.d(n,{Z:()=>P});var s=o(27378),a=o(40624),i=o(83457),t=o(48165),l=o(9834),r=o(30654),d=o(70784),c=o(55643);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:s,default:a}}=e;return{value:n,label:o,attributes:s,default:a}}))}(o);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const a=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,r._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:a}=e,i=u(e),[t,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=o.find((e=>e.default))??o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,h]=p({queryString:o,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(o);return[a,(0,s.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:a}),g=(()=>{const e=d??f;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{g&&r(g)}),[g]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=o(76457);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=o(24246);function b(e){let{className:n,block:o,selectedValue:s,selectValue:t,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,o=r.indexOf(n),a=l[o].value;a!==s&&(d(n),t(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=r.indexOf(e.currentTarget)+1;n=r[o]??r[0];break}case"ArrowLeft":{const o=r.indexOf(e.currentTarget)-1;n=r[o]??r[r.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},n),children:l.map((e=>{let{value:n,label:o,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===n}),children:o??n},n)}))})}function v(e){let{lazy:n,children:o,selectedValue:a}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function P(e){const n=(0,x.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},99590:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/containers_error-2ddfc1139b9345ae8d06c597551608ad.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var s=o(27378);const a={},i=s.createContext(a);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);