"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43163],{544:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(161),a=s(27378),r=s(24246);const l=function(){function e(){if(!document?.documentElement)return;const e=document.documentElement;"dark"===e.dataset?.theme?(e.classList.add("dark"),setTimeout((()=>{e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((()=>{e.classList.remove("dark")}),100))}return(0,a.useEffect)((()=>{n.Z.canUseDOM&&e()}),[n.Z.canUseDOM]),(0,a.useEffect)((()=>{if(!n.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!==t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[n.Z.canUseDOM]),(0,r.jsx)("div",{})}},53330:(e,t,s)=>{s.r(t),s.d(t,{MacOSDownloads:()=>x,default:()=>p});var n=s(36641),a=s(50353),r=s(9928),l=s(19374),i=s(92739),o=s(544),c=s(40684),d=s(27378),m=s(24246);function x(){const[e,t]=(0,d.useState)({version:"",universal:"",x64:"",arm64:"",airgapsetupX64:"",airgapsetupArm64:""});return(0,d.useEffect)((()=>{(async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),s=await t.json(),n=s.assets,a=n.filter((e=>e.name.endsWith("-arm64.dmg")&&!e.name.includes("airgap")));if(1!==a.length)throw new Error("Unable to grab arm64 dmg");const r=a[0],l=n.filter((e=>e.name.endsWith("-x64.dmg")&&!e.name.includes("airgap")));if(1!==l.length)throw new Error("Unable to grab x64 dmg");const i=l[0],o=n.filter((e=>e.name.endsWith("universal.dmg")&&e.name.includes("airgap")));let c;1!==o.length?console.log("Error: Unable to find Apple Disk Image for restricted environments"):c=o[0];const d=n.filter((e=>e.name.endsWith(".dmg")&&!e.name.includes("airgap")&&e.name!==r.name&&e.name!==i.name));if(1!==d.length)throw new Error("Unable to grab unified dmg");const m=d[0],x=n.filter((e=>e.name.endsWith("-x64.dmg")&&e.name.includes("airgap"))),p=x?.[0]?.browser_download_url,u=n.filter((e=>e.name.endsWith("-arm64.dmg")&&e.name.includes("airgap"))),h=u?.[0]?.browser_download_url;e({version:s.name,universal:m.browser_download_url,x64:i.browser_download_url,arm64:r.browser_download_url,airgapsetup:c?.browser_download_url,airgapsetupX64:p,airgapsetupArm64:h})})(t).catch((e=>{console.error(e)}))}),[]),(0,m.jsxs)("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center",children:[(0,m.jsx)(i.G,{size:"4x",icon:r.Av$,className:"my-4"}),(0,m.jsx)("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-500 border-b-2",children:"macOS"}),(0,m.jsx)("div",{className:"flex p-1 flex-col md:flex-col items-center align-top",children:(0,m.jsxs)("div",{className:"flex flex-col align-middle items-center",children:[(0,m.jsx)("h3",{className:"mt-0",children:"Podman Desktop for macOS"}),(0,m.jsxs)("div",{className:"pt-8",children:[(0,m.jsxs)(n.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-md font-semibold",to:e.universal,children:[(0,m.jsx)(i.G,{size:"1x",icon:l.q7m,className:"mr-2"}),"Download Now"]}),(0,m.jsxs)("caption",{className:"block w-full mt-1 text/50 dark:text-white/50",children:["Universal *.dmg, version ",e.version]})]}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsx)("div",{children:"Other macOS downloads:"}),(0,m.jsxs)(n.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.x64,children:[(0,m.jsx)(i.G,{size:"1x",icon:l.q7m,className:"mr-2"}),"Intel"]}),(0,m.jsxs)(n.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 text-md font-semibold",to:e.arm64,children:[(0,m.jsx)(i.G,{size:"1x",icon:l.q7m,className:"mr-2"}),"Apple silicon"]})]}),(0,m.jsxs)("div",{className:"pt-2 pb-4 flex flex-col",children:[(0,m.jsx)("div",{className:"",children:"Installer for restricted environments:"}),(0,m.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,m.jsxs)(n.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.airgapsetupX64,children:[(0,m.jsx)(i.G,{size:"1x",icon:l.q7m,className:"mr-2"}),"Intel"]}),(0,m.jsxs)(n.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.airgapsetupArm64,children:[(0,m.jsx)(i.G,{size:"1x",icon:l.q7m,className:"mr-2"}),"Apple silicon"]})]})]}),(0,m.jsx)("div",{className:"flex flex-col align-middle items-center",children:(0,m.jsxs)("div",{className:"items-center text-center pt-6",children:[(0,m.jsxs)("p",{className:"text-lg",children:["Using ",(0,m.jsx)("strong",{children:"Brew"}),"? Install in one command:"]}),(0,m.jsxs)("div",{className:"flex flex-row pt-3",children:[(0,m.jsx)("p",{className:"text-xl p-1",children:(0,m.jsx)(i.G,{size:"sm",icon:l.v8y,className:"mx-1 mt-2"})}),(0,m.jsx)("div",{className:"dark:bg-charcoal-800/50 bg-zinc-300/50 p-1 truncate",children:(0,m.jsxs)("p",{className:"text-xl dark:text-purple-200 text-purple-600",children:[(0,m.jsx)(i.G,{size:"xs",icon:l.Jw3,className:"mx-2 mt-3"}),"brew install podman-desktop",(0,m.jsxs)("button",{title:"Copy To Clipboard",className:"mr-2 p-1",children:[" ",(0,m.jsx)(i.G,{size:"xs",icon:l.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{(async()=>{await navigator.clipboard.writeText("brew install podman-desktop")})().catch((e=>{console.error("unable to copy instructions",e)}))}})]})]})})]})]})})]})})]})}function p(){const{siteConfig:e}=(0,a.Z)();return(0,m.jsxs)(c.Z,{title:e.title,description:"Downloads for macOS",children:[(0,m.jsx)(o.Z,{}),(0,m.jsx)("section",{className:"container mx-auto flex justify-center flex-col",children:(0,m.jsxs)("div",{className:"w-full flex flex-col",children:[(0,m.jsx)("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white",children:"macOS Downloads"}),(0,m.jsx)("main",{className:"h-screen",children:(0,m.jsx)(x,{})})]})})]})}}}]);