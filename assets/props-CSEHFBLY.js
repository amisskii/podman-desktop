const nr="5.20.5",Kn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kn);let oe=!1,Gn=!1;function Wn(){oe=!0}Wn();const tr=1,rr=2,ur=4,lr=8,sr=16,zn=1,Zn=2,on=4,Xn=8,Jn=16,ir=4,cn=1,Qn=2,T=Symbol(),Ze=!1,D=2,_n=4,Ae=8,Be=16,q=32,ce=64,he=128,N=256,we=512,y=1024,j=2048,W=4096,ee=8192,Se=16384,et=32768,Oe=65536,vn=1<<17,nt=1<<19,dn=1<<20,M=Symbol("$state"),pn=Symbol("legacy props"),ar=Symbol("");var hn=Array.isArray,tt=Array.prototype.indexOf,rt=Array.from,wn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,ut=Object.getOwnPropertyDescriptors,lt=Object.prototype,st=Array.prototype,gn=Object.getPrototypeOf;function le(e){return typeof e=="function"}const Q=()=>{};function it(e){return e()}function ge(e){for(var n=0;n<e.length;n++)e[n]()}function fr(e,n,t=!1){return e===void 0?t?n():n:e}let ae=[],Le=[];function bn(){var e=ae;ae=[],ge(e)}function at(){var e=Le;Le=[],ge(e)}function ft(e){ae.length===0&&queueMicrotask(bn),ae.push(e)}function Xe(){ae.length>0&&bn(),Le.length>0&&at()}function yn(e){return e===this.v}function En(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ue(e){return!En(e,this.v)}function ot(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ct(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _t(e){throw new Error("https://svelte.dev/e/effect_orphan")}function vt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function or(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function dt(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ht(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function gt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function P(e,n){var t={f:0,v:e,reactions:null,equals:yn,rv:0,wv:0};return t}function cr(e){return mn(P(e))}function Ve(e,n=!1){var r;const t=P(e);return n||(t.equals=Ue),oe&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(t),t}function _r(e,n=!1){return mn(Ve(e,n))}function mn(e){return d!==null&&!I&&(d.f&D)!==0&&(R===null?xt([e]):R.push(e)),e}function vr(e,n){return S(e,$(()=>g(e))),n}function S(e,n){return d!==null&&!I&&Ie()&&(d.f&(D|Be))!==0&&(R===null||!R.includes(e))&&gt(),Fe(e,n)}function Fe(e,n){return e.equals(n)||(e.v,e.v=n,e.wv=Dn(),xn(e,j),Ie()&&h!==null&&(h.f&y)!==0&&(h.f&(q|ce))===0&&(L===null?Tt([e]):L.push(e))),n}function Je(e,n=1){var t=g(e),r=n===1?t++:t--;return S(e,t),r}function xn(e,n){var t=e.reactions;if(t!==null)for(var r=Ie(),u=t.length,l=0;l<u;l++){var i=t[l],c=i.f;(c&j)===0&&(!r&&i===h||(C(i,n),(c&(y|N))!==0&&((c&D)!==0?xn(i,W):De(i))))}}function fe(e){var n=D|j,t=d!==null&&(d.f&D)!==0?d:null;return h===null||t!==null&&(t.f&N)!==0?n|=N:h.f|=dn,{ctx:p,deps:null,effects:null,equals:yn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function bt(e){const n=fe(e);return n.equals=Ue,n}function Tn(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)G(n[t])}}function yt(e){for(var n=e.parent;n!==null;){if((n.f&D)===0)return n;n=n.parent}return null}function Et(e){var n,t=h;Y(yt(e));try{Tn(e),n=Cn(e)}finally{Y(t)}return n}function An(e){var n=Et(e),t=(U||(e.f&N)!==0)&&e.deps!==null?W:y;C(e,t),e.equals(n)||(e.v=n,e.wv=Dn())}function J(e,n=null,t){if(typeof e!="object"||e===null||M in e)return e;const r=gn(e);if(r!==lt&&r!==st)return e;var u=new Map,l=hn(e),i=P(0);l&&u.set("length",P(e.length));var c;return new Proxy(e,{defineProperty(f,s,_){(!("value"in _)||_.configurable===!1||_.enumerable===!1||_.writable===!1)&&pt();var o=u.get(s);return o===void 0?(o=P(_.value),u.set(s,o)):S(o,J(_.value,c)),!0},deleteProperty(f,s){var _=u.get(s);if(_===void 0)s in f&&u.set(s,P(T));else{if(l&&typeof s=="string"){var o=u.get("length"),a=Number(s);Number.isInteger(a)&&a<o.v&&S(o,a)}S(_,T),Qe(i)}return!0},get(f,s,_){var w;if(s===M)return e;var o=u.get(s),a=s in f;if(o===void 0&&(!a||(w=V(f,s))!=null&&w.writable)&&(o=P(J(a?f[s]:T,c)),u.set(s,o)),o!==void 0){var v=g(o);return v===T?void 0:v}return Reflect.get(f,s,_)},getOwnPropertyDescriptor(f,s){var _=Reflect.getOwnPropertyDescriptor(f,s);if(_&&"value"in _){var o=u.get(s);o&&(_.value=g(o))}else if(_===void 0){var a=u.get(s),v=a==null?void 0:a.v;if(a!==void 0&&v!==T)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return _},has(f,s){var v;if(s===M)return!0;var _=u.get(s),o=_!==void 0&&_.v!==T||Reflect.has(f,s);if(_!==void 0||h!==null&&(!o||(v=V(f,s))!=null&&v.writable)){_===void 0&&(_=P(o?J(f[s],c):T),u.set(s,_));var a=g(_);if(a===T)return!1}return o},set(f,s,_,o){var O;var a=u.get(s),v=s in f;if(l&&s==="length")for(var w=_;w<a.v;w+=1){var E=u.get(w+"");E!==void 0?S(E,T):w in f&&(E=P(T),u.set(w+"",E))}a===void 0?(!v||(O=V(f,s))!=null&&O.writable)&&(a=P(void 0),S(a,J(_,c)),u.set(s,a)):(v=a.v!==T,S(a,J(_,c)));var x=Reflect.getOwnPropertyDescriptor(f,s);if(x!=null&&x.set&&x.set.call(o,_),!v){if(l&&typeof s=="string"){var K=u.get("length"),k=Number(s);Number.isInteger(k)&&k>=K.v&&S(K,k+1)}Qe(i)}return!0},ownKeys(f){g(i);var s=Reflect.ownKeys(f).filter(a=>{var v=u.get(a);return v===void 0||v.v!==T});for(var[_,o]of u)o.v!==T&&!(_ in f)&&s.push(_);return s},setPrototypeOf(){ht()}})}function Qe(e,n=1){S(e,e.v+n)}function en(e){return e!==null&&typeof e=="object"&&M in e?e[M]:e}function dr(e,n){return Object.is(en(e),en(n))}var nn,Sn,On,Pn;function mt(){if(nn===void 0){nn=window,Sn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype;On=V(n,"firstChild").get,Pn=V(n,"nextSibling").get,e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function He(e=""){return document.createTextNode(e)}function F(e){return On.call(e)}function Ye(e){return Pn.call(e)}function pr(e,n){return F(e)}function hr(e,n){{var t=F(e);return t instanceof Comment&&t.data===""?Ye(t):t}}function wr(e,n=1,t=!1){let r=e;for(;n--;)r=Ye(r);return r}function gr(e){e.textContent=""}let de=!1,be=!1,ye=null,pe=!1,$e=!1;function tn(e){$e=e}let ie=[];let d=null,I=!1;function H(e){d=e}let h=null;function Y(e){h=e}let R=null;function xt(e){R=e}let m=null,A=0,L=null;function Tt(e){L=e}let Nn=1,Ee=0,U=!1,B=null;function Dn(){return++Nn}function te(e){var o;var n=e.f;if((n&j)!==0)return!0;if((n&W)!==0){var t=e.deps,r=(n&N)!==0;if(t!==null){var u,l,i=(n&we)!==0,c=r&&h!==null&&!U,f=t.length;if(i||c){var s=e,_=s.parent;for(u=0;u<f;u++)l=t[u],(i||!((o=l==null?void 0:l.reactions)!=null&&o.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);i&&(s.f^=we),c&&_!==null&&(_.f&N)===0&&(s.f^=N)}for(u=0;u<f;u++)if(l=t[u],te(l)&&An(l),l.wv>e.wv)return!0}(!r||h!==null&&!U)&&C(e,y)}return!1}function At(e,n){for(var t=n;t!==null;){if((t.f&he)!==0)try{t.fn(e);return}catch{t.f^=he}t=t.parent}throw de=!1,e}function St(e){return(e.f&Se)===0&&(e.parent===null||(e.parent.f&he)===0)}function Pe(e,n,t,r){if(de){if(t===null&&(de=!1),St(n))throw e;return}t!==null&&(de=!0);{At(e,n);return}}function In(e,n,t=!0){var r=e.reactions;if(r!==null)for(var u=0;u<r.length;u++){var l=r[u];(l.f&D)!==0?In(l,n,!1):n===l&&(t?C(l,j):(l.f&y)!==0&&C(l,W),De(l))}}function Cn(e){var v;var n=m,t=A,r=L,u=d,l=U,i=R,c=p,f=I,s=e.f;m=null,A=0,L=null,U=(s&N)!==0&&(I||!pe||d===null),d=(s&(q|ce))===0?e:null,R=null,ln(e.ctx),I=!1,Ee++;try{var _=(0,e.fn)(),o=e.deps;if(m!==null){var a;if(me(e,A),o!==null&&A>0)for(o.length=A+m.length,a=0;a<m.length;a++)o[A+a]=m[a];else e.deps=o=m;if(!U)for(a=A;a<o.length;a++)((v=o[a]).reactions??(v.reactions=[])).push(e)}else o!==null&&A<o.length&&(me(e,A),o.length=A);if(Ie()&&L!==null&&!I&&o!==null&&(e.f&(D|W|j))===0)for(a=0;a<L.length;a++)In(L[a],e);return u!==null&&Ee++,_}finally{m=n,A=t,L=r,d=u,U=l,R=i,ln(c),I=f}}function Ot(e,n){let t=n.reactions;if(t!==null){var r=tt.call(t,e);if(r!==-1){var u=t.length-1;u===0?t=n.reactions=null:(t[r]=t[u],t.pop())}}t===null&&(n.f&D)!==0&&(m===null||!m.includes(n))&&(C(n,W),(n.f&(N|we))===0&&(n.f^=we),Tn(n),me(n,0))}function me(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ot(e,t[r])}function Ne(e){var n=e.f;if((n&Se)===0){C(e,y);var t=h,r=p,u=pe;h=e,pe=!0;try{(n&Be)!==0?jt(e):jn(e),qn(e);var l=Cn(e);e.teardown=typeof l=="function"?l:null,e.wv=Nn;var i=e.deps,c;Ze&&Gn&&e.f&j}catch(f){Pe(f,e,t,r||e.ctx)}finally{pe=u,h=t}}}function Pt(){try{vt()}catch(e){if(ye!==null)Pe(e,ye,null);else throw e}}function Rn(){try{for(var e=0;ie.length>0;){e++>1e3&&Pt();var n=ie,t=n.length;ie=[];for(var r=0;r<t;r++){var u=n[r];(u.f&y)===0&&(u.f^=y);var l=Dt(u);Nt(l)}}}finally{be=!1,ye=null}}function Nt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Se|ee))===0)try{te(r)&&(Ne(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kn(r):r.fn=null))}catch(u){Pe(u,r,null,r.ctx)}}}function De(e){be||(be=!0,queueMicrotask(Rn));for(var n=ye=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(ce|q))!==0){if((t&y)===0)return;n.f^=y}}ie.push(n)}function Dt(e){for(var n=[],t=e.first;t!==null;){var r=t.f,u=(r&q)!==0,l=u&&(r&y)!==0;if(!l&&(r&ee)===0){if((r&_n)!==0)n.push(t);else if(u)t.f^=y;else{var i=d;try{d=t,te(t)&&Ne(t)}catch(s){Pe(s,t,null,t.ctx)}finally{d=i}}var c=t.first;if(c!==null){t=c;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function It(e){var n;for(Xe();ie.length>0;)be=!0,Rn(),Xe();return n}async function br(){await Promise.resolve(),It()}function g(e){var n=e.f,t=(n&D)!==0;if(B!==null&&B.add(e),d!==null&&!I){R!==null&&R.includes(e)&&wt();var r=d.deps;e.rv<Ee&&(e.rv=Ee,m===null&&r!==null&&r[A]===e?A++:m===null?m=[e]:(!U||!m.includes(e))&&m.push(e))}else if(t&&e.deps===null&&e.effects===null){var u=e,l=u.parent;l!==null&&(l.f&N)===0&&(u.f^=N)}return t&&(u=e,te(u)&&An(u)),e.v}function Ct(e){var n=B;B=new Set;var t=B,r;try{if($(e),n!==null)for(r of B)n.add(r)}finally{B=n}return t}function yr(e){var n=Ct(()=>$(e));for(var t of n)if((t.f&vn)!==0)for(const r of t.deps||[])(r.f&D)===0&&Fe(r,r.v);else Fe(t,t.v)}function $(e){var n=I;try{return I=!0,e()}finally{I=n}}const Rt=-7169;function C(e,n){e.f=e.f&Rt|n}function Er(e,n){var t={};for(var r in e)n.includes(r)||(t[r]=e[r]);return t}function Lt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(M in e)Me(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&M in t&&Me(t)}}}function Me(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Me(e[r],n)}catch{}const t=gn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=ut(t);for(let u in r){const l=r[u].get;if(l)try{l.call(e)}catch{}}}}}function Ln(e){h===null&&d===null&&_t(),d!==null&&(d.f&N)!==0&&h===null&&ct(),$e&&ot()}function Ft(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function re(e,n,t,r=!0){var u=(e&ce)!==0,l=h,i={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:n,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Ne(i),i.f|=et}catch(s){throw G(i),s}else n!==null&&De(i);var c=t&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(dn|he))===0;if(!c&&!u&&r&&(l!==null&&Ft(i,l),d!==null&&(d.f&D)!==0)){var f=d;(f.effects??(f.effects=[])).push(i)}return i}function Fn(e){const n=re(Ae,null,!1);return C(n,y),n.teardown=e,n}function rn(e){Ln();var n=h!==null&&(h.f&q)!==0&&p!==null&&!p.m;if(n){var t=p;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:d})}else{var r=Mn(e);return r}}function Mt(e){return Ln(),Ke(e)}function qt(e){const n=re(ce,e,!0);return(t={})=>new Promise(r=>{t.outro?Te(n,()=>{G(n),r(void 0)}):(G(n),r(void 0))})}function Mn(e){return re(_n,e,!1)}function mr(e,n){var t=p,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ke(()=>{e(),!r.ran&&(r.ran=!0,S(t.l.r2,!0),$(n))})}function xr(){var e=p;Ke(()=>{if(g(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&y)!==0&&C(t,W),te(t)&&Ne(t),n.ran=!1}e.l.r2.v=!1}})}function Ke(e){return re(Ae,e,!0)}function Tr(e,n=[],t=fe){const r=n.map(t);return Ge(()=>e(...r.map(g)))}function Ge(e,n=0){return re(Ae|Be|n,e,!0)}function xe(e,n=!0){return re(Ae|q,e,!0,n)}function qn(e){var n=e.teardown;if(n!==null){const t=$e,r=d;tn(!0),H(null);try{n.call(null)}finally{tn(t),H(r)}}}function jn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;G(t,n),t=r}}function jt(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&q)===0&&G(n),n=t}}function G(e,n=!0){var t=!1;if((n||(e.f&nt)!==0)&&e.nodes_start!==null){for(var r=e.nodes_start,u=e.nodes_end;r!==null;){var l=r===u?null:Ye(r);r.remove(),r=l}t=!0}jn(e,n&&!t),me(e,0),C(e,Se);var i=e.transitions;if(i!==null)for(const f of i)f.stop();qn(e);var c=e.parent;c!==null&&c.first!==null&&kn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function kn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Te(e,n){var t=[];Bn(e,t,!0),kt(t,()=>{G(e),n&&n()})}function kt(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var u of e)u.out(r)}else n()}function Bn(e,n,t){if((e.f&ee)===0){if(e.f^=ee,e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&n.push(i);for(var r=e.first;r!==null;){var u=r.next,l=(r.f&Oe)!==0||(r.f&q)!==0;Bn(r,n,l?t:!1),r=u}}}function un(e){Un(e,!0)}function Un(e,n){if((e.f&ee)!==0){e.f^=ee,(e.f&y)===0&&(e.f^=y),te(e)&&(C(e,j),De(e));for(var t=e.first;t!==null;){var r=t.next,u=(t.f&Oe)!==0||(t.f&q)!==0;Un(t,u?n:!1),t=r}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||n)&&l.in()}}function Bt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function ln(e){p=e}function Ar(e){return We().get(e)}function Sr(e,n){return We().set(e,n),n}function Or(e){return We().has(e)}function Ut(e,n=!1,t){p={p,c:null,e:null,m:!1,s:e,x:null,l:null},oe&&!n&&(p.l={s:null,u:null,r1:[],r2:P(!1)})}function Vt(e){const n=p;if(n!==null){e!==void 0&&(n.x=e);const i=n.e;if(i!==null){var t=h,r=d;n.e=null;try{for(var u=0;u<i.length;u++){var l=i[u];Y(l.effect),H(l.reaction),Mn(l.fn)}}finally{Y(t),H(r)}}p=n.p,n.m=!0}return e||{}}function Ie(){return!oe||p!==null&&p.l===null}function We(e){return p===null&&Bt(),p.c??(p.c=new Map(Ht(p)||void 0))}function Ht(e){let n=e.p;for(;n!==null;){const t=n.c;if(t!==null)return t;n=n.p}return null}const Yt=["touchstart","touchmove"];function $t(e){return Yt.includes(e)}let sn=!1;function Kt(){sn||(sn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function Vn(e){var n=d,t=h;H(null),Y(null);try{return e()}finally{H(n),Y(t)}}function Pr(e,n,t,r=t){e.addEventListener(n,()=>Vn(t));const u=e.__on_r;u?e.__on_r=()=>{u(),r(!0)}:e.__on_r=()=>r(!0),Kt()}const Hn=new Set,qe=new Set;function Gt(e,n,t,r={}){function u(l){if(r.capture||se.call(n,l),!l.cancelBubble)return Vn(()=>t==null?void 0:t.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ft(()=>{n.addEventListener(e,u,r)}):n.addEventListener(e,u,r),u}function Nr(e,n,t,r,u){var l={capture:r,passive:u},i=Gt(e,n,t,l);(n===document.body||n===window||n===document)&&Fn(()=>{n.removeEventListener(e,i,l)})}function Dr(e){for(var n=0;n<e.length;n++)Hn.add(e[n]);for(var t of qe)t(e)}function se(e){var k;var n=this,t=n.ownerDocument,r=e.type,u=((k=e.composedPath)==null?void 0:k.call(e))||[],l=u[0]||e.target,i=0,c=e.__root;if(c){var f=u.indexOf(c);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var s=u.indexOf(n);if(s===-1)return;f<=s&&(i=f)}if(l=u[i]||e.target,l!==n){wn(e,"currentTarget",{configurable:!0,get(){return l||t}});var _=d,o=h;H(null),Y(null);try{for(var a,v=[];l!==null;){var w=l.assignedSlot||l.parentNode||l.host||null;try{var E=l["__"+r];if(E!==void 0&&(!l.disabled||e.target===l))if(hn(E)){var[x,...K]=E;x.apply(l,[e,...K])}else E.call(l,e)}catch(O){a?v.push(O):a=O}if(e.cancelBubble||w===n||w===null)break;l=w}if(a){for(let O of v)queueMicrotask(()=>{throw O});throw a}}finally{e.__root=n,delete e.currentTarget,H(_),Y(o)}}}function Yn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function ne(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function Ir(e,n){var t=(n&cn)!==0,r=(n&Qn)!==0,u,l=!e.startsWith("<!>");return()=>{u===void 0&&(u=Yn(l?e:"<!>"+e),t||(u=F(u)));var i=r||Sn?document.importNode(u,!0):u.cloneNode(!0);if(t){var c=F(i),f=i.lastChild;ne(c,f)}else ne(i,i);return i}}function Cr(e,n,t="svg"){var r=!e.startsWith("<!>"),u=(n&cn)!==0,l=`<${t}>${r?e:"<!>"+e}</${t}>`,i;return()=>{if(!i){var c=Yn(l),f=F(c);if(u)for(i=document.createDocumentFragment();F(f);)i.appendChild(F(f));else i=F(f)}var s=i.cloneNode(!0);if(u){var _=F(s),o=s.lastChild;ne(_,o)}else ne(s,s);return s}}function Rr(e=""){{var n=He(e+"");return ne(n,n),n}}function Lr(){var e=document.createDocumentFragment(),n=document.createComment(""),t=He();return e.append(n,t),ne(n,t),e}function Fr(e,n){e!==null&&e.before(n)}let an=!0;function Mr(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function qr(e,n){return Wt(e,n)}const Z=new Map;function Wt(e,{target:n,anchor:t,props:r={},events:u,context:l,intro:i=!0}){mt();var c=new Set,f=o=>{for(var a=0;a<o.length;a++){var v=o[a];if(!c.has(v)){c.add(v);var w=$t(v);n.addEventListener(v,se,{passive:w});var E=Z.get(v);E===void 0?(document.addEventListener(v,se,{passive:w}),Z.set(v,1)):Z.set(v,E+1)}}};f(rt(Hn)),qe.add(f);var s=void 0,_=qt(()=>{var o=t??n.appendChild(He());return xe(()=>{if(l){Ut({});var a=p;a.c=l}u&&(r.$$events=u),an=i,s=e(o,r)||{},an=!0,l&&Vt()}),()=>{var w;for(var a of c){n.removeEventListener(a,se);var v=Z.get(a);--v===0?(document.removeEventListener(a,se),Z.delete(a)):Z.set(a,v)}qe.delete(f),o!==t&&((w=o.parentNode)==null||w.removeChild(o))}});return je.set(s,_),s}let je=new WeakMap;function jr(e,n){const t=je.get(e);return t?(je.delete(e),t(n)):Promise.resolve()}function kr(e,n,t=!1){var r=e,u=null,l=null,i=T,c=t?Oe:0,f=!1;const s=(o,a=!0)=>{f=!0,_(a,o)},_=(o,a)=>{i!==(i=o)&&(i?(u?un(u):a&&(u=xe(()=>a(r))),l&&Te(l,()=>{l=null})):(l?un(l):a&&(l=xe(()=>a(r))),u&&Te(u,()=>{u=null})))};Ge(()=>{f=!1,n(s),f||_(null,null)},c)}function Br(e,n,t){var r=e,u,l;Ge(()=>{u!==(u=n())&&(l&&(Te(l),l=null),u&&(l=xe(()=>t(r,u))))},Oe)}function Ur(e=!1){const n=p,t=n.l.u;if(!t)return;let r=()=>Lt(n.s);if(e){let u=0,l={};const i=fe(()=>{let c=!1;const f=n.s;for(const s in f)f[s]!==l[s]&&(l[s]=f[s],c=!0);return c&&u++,u});r=()=>g(i)}t.b.length&&Mt(()=>{fn(n,r),ge(t.b)}),rn(()=>{const u=$(()=>t.m.map(it));return()=>{for(const l of u)typeof l=="function"&&l()}}),t.a.length&&rn(()=>{fn(n,r),ge(t.a)})}function fn(e,n){if(e.l.s)for(const t of e.l.s)g(t);n()}function $n(e,n,t){if(e==null)return n(void 0),Q;const r=$(()=>e.subscribe(n,t));return r.unsubscribe?()=>r.unsubscribe():r}const X=[];function Vr(e,n=Q){let t=null;const r=new Set;function u(c){if(En(e,c)&&(e=c,t)){const f=!X.length;for(const s of r)s[1](),X.push(s,e);if(f){for(let s=0;s<X.length;s+=2)X[s][0](X[s+1]);X.length=0}}}function l(c){u(c(e))}function i(c,f=Q){const s=[c,f];return r.add(s),r.size===1&&(t=n(u,l)||Q),c(e),()=>{r.delete(s),r.size===0&&t&&(t(),t=null)}}return{set:u,update:l,subscribe:i}}function zt(e){let n;return $n(e,t=>n=t)(),n}let ve=!1,ke=Symbol();function Hr(e,n,t){const r=t[n]??(t[n]={store:null,source:Ve(void 0),unsubscribe:Q});if(r.store!==e&&!(ke in t))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Q;else{var u=!0;r.unsubscribe=$n(e,l=>{u?r.source.v=l:S(r.source,l)}),u=!1}return e&&ke in t?zt(e):g(r.source)}function Yr(){const e={};function n(){Fn(()=>{for(var t in e)e[t].unsubscribe();wn(e,ke,{enumerable:!1,value:!0})})}return[e,n]}function Zt(e){var n=ve;try{return ve=!1,[e(),ve]}finally{ve=n}}const Xt={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function $r(e,n,t){return new Proxy({props:e,exclude:n},Xt)}const Jt={get(e,n){if(!e.exclude.includes(n))return g(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=er({get[n](){return e.props[n]}},n,on)),e.special[n](t),Je(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),Je(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Kr(e,n){return new Proxy({props:e,exclude:n,special:{},version:P(0)},Jt)}const Qt={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(le(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let u=e.props[r];le(u)&&(u=u());const l=V(u,n);if(l&&l.set)return l.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(le(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const u=V(r,n);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,n){if(n===M||n===pn)return!1;for(let t of e.props)if(le(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){le(t)&&(t=t());for(const r in t)n.includes(r)||n.push(r)}return n}};function Gr(...e){return new Proxy({props:e},Qt)}function er(e,n,t,r){var ze;var u=(t&zn)!==0,l=!oe||(t&Zn)!==0,i=(t&Xn)!==0,c=(t&Jn)!==0,f=!1,s;i?[s,f]=Zt(()=>e[n]):s=e[n];var _=M in e||pn in e,o=i&&(((ze=V(e,n))==null?void 0:ze.set)??(_&&n in e&&(b=>e[n]=b)))||void 0,a=r,v=!0,w=!1,E=()=>(w=!0,v&&(v=!1,c?a=$(r):a=r),a);s===void 0&&r!==void 0&&(o&&l&&dt(),s=E(),o&&o(s));var x;if(l)x=()=>{var b=e[n];return b===void 0?E():(v=!0,w=!1,b)};else{var K=(u?fe:bt)(()=>e[n]);K.f|=vn,x=()=>{var b=g(K);return b!==void 0&&(a=void 0),b===void 0?a:b}}if((t&on)===0)return x;if(o){var k=e.$$legacy;return function(b,z){return arguments.length>0?((!l||!z||k||f)&&o(z?x():b),b):x()}}var O=!1,Ce=!1,_e=Ve(s),ue=fe(()=>{var b=x(),z=g(_e);return O?(O=!1,Ce=!0,z):(Ce=!1,_e.v=b)});return u||(ue.equals=Ue),function(b,z){if(B!==null&&(O=Ce,x(),g(_e)),arguments.length>0){const Re=z?g(ue):l&&i?J(b):b;return ue.equals(Re)||(O=!0,S(_e,Re),w&&a!==void 0&&(a=Re),$(()=>g(ue))),b}return g(ue)}}export{cr as $,$ as A,ft as B,Bt as C,p as D,hn as E,rn as F,or as G,oe as H,mr as I,xr as J,Nr as K,Lt as L,Vr as M,Yr as N,Hr as O,ar as P,gn as Q,ut as R,M as S,Ge as T,Oe as U,xe as V,G as W,Or as X,Sr as Y,Ar as Z,J as _,Fr as a,$r as a0,fe as a1,qr as a2,jr as a3,He as a4,ur as a5,un as a6,Te as a7,ee as a8,rt as a9,Dr as aA,Je as aB,nn as aC,vr as aD,br as aE,yr as aF,nr as aG,fr as aH,h as aa,tr as ab,Fe as ac,rr as ad,Ve as ae,P as af,lr as ag,Bn as ah,gr as ai,kt as aj,Ye as ak,sr as al,an as am,Be as an,et as ao,ir as ap,Vn as aq,le as ar,H as as,Y as at,d as au,Pr as av,Ie as aw,V as ax,Fn as ay,dr as az,Vt as b,Gr as c,Rr as d,Tr as e,hr as f,Mr as g,Er as h,Ur as i,pr as j,Lr as k,g as l,bt as m,Q as n,Kr as o,Ut as p,er as q,Cr as r,wr as s,Ir as t,kr as u,S as v,_r as w,Br as x,Mn as y,Ke as z};
