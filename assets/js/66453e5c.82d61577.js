"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95006],{48419:(t,e,s)=>{s.d(e,{A:()=>c});var n=s(16655),a=s(63696),r=s(62540);const c=function(){function t(){if(!document?.documentElement)return;const t=document.documentElement;"dark"===t.dataset?.theme?(t.classList.add("dark"),setTimeout((()=>{t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((()=>{t.classList.remove("dark")}),100))}return(0,a.useEffect)((()=>{n.A.canUseDOM&&t()}),[n.A.canUseDOM]),(0,a.useEffect)((()=>{if(!n.A.canUseDOM)return;const e=new MutationObserver((e=>{e.forEach((e=>{"attributes"!==e.type||"data-rh"!==e.attributeName&&"data-theme"!==e.attributeName||t()}))}));return e.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{e.disconnect()}}),[n.A.canUseDOM]),(0,r.jsx)("div",{})}},11283:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var n=s(67032),a=s(48419),r=s(6072),c=s(62540);function i(){return(0,c.jsx)("iframe",{title:"Extensions Catalog",src:"https://registry.podman-desktop.io/",className:"w-full min-h-[2000px] h-full"})}function u(){const{siteConfig:t}=(0,n.A)();return(0,c.jsxs)(r.A,{title:t.title,description:"Extensions",wrapperClassName:"h-full",children:[(0,c.jsx)(a.A,{}),(0,c.jsx)(i,{})]})}}}]);