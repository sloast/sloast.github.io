import{a1 as h,a3 as _,a4 as v,a5 as w,G as d,a7 as l,ap as y,aq as T,ar as g,h as s,c as o,e as x,ag as c,s as L}from"./adigBlXe.js";function b(r,t,e,f=!0){f&&e();for(var a of t)r.addEventListener(a,e);h(()=>{for(var u of t)r.removeEventListener(u,e)})}function A(r){var t=w,e=d;_(null),v(null);try{return r()}finally{_(t),v(e)}}function M(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=d;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function C(r,t){var e=(t&T)!==0,f=(t&g)!==0,a,u=!r.startsWith("<!>");return()=>{if(s)return n(o,null),o;a===void 0&&(a=M(u?r:"<!>"+r),e||(a=l(a)));var i=f||y?document.importNode(a,!0):a.cloneNode(!0);if(e){var p=l(i),E=i.lastChild;n(p,E)}else n(i,i);return i}}function I(r=""){if(!s){var t=c(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=c()),L(e)),n(e,e),e}function O(){if(s)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),n(t,e),r}function R(r,t){if(s){d.nodes_end=o,x();return}r!==null&&r.before(t)}const N="5";var m;typeof window<"u"&&((m=window.__svelte??(window.__svelte={})).v??(m.v=new Set)).add(N);export{R as a,n as b,O as c,I as d,b as l,C as t,A as w};
