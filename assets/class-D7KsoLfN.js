import{M as f,N as o,O as l}from"./props-DNTki0B4.js";let e=!1;function u(s,t,r,a){var i=s.__attributes??(s.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in s&&(s.__styles={}),t==="loading"&&(s[f]=r),r==null?s.removeAttribute(t):typeof r!="string"&&p(s).includes(t)?s[t]=r:s.setAttribute(t,r))}var c=new Map;function p(s){var t=c.get(s.nodeName);if(t)return t;c.set(s.nodeName,t=[]);for(var r,a=s,i=Element.prototype;i!==a;){r=l(a);for(var _ in r)r[_].set&&t.push(_);a=o(a)}return t}function v(s,t){var r=s.__className,a=n(t);(r!==a||e)&&(a===""?s.removeAttribute("class"):s.setAttribute("class",a),s.__className=a)}function N(s,t){var r=s.__className,a=n(t);(r!==a||e)&&(t==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function n(s){return s??""}function A(s,t,r){if(r){if(s.classList.contains(t))return;s.classList.add(t)}else{if(!s.classList.contains(t))return;s.classList.remove(t)}}export{v as a,N as b,e as h,u as s,A as t};
