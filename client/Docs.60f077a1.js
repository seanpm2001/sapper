import{S as t,i as e,s,e as n,H as l,k as i,c as o,p as r,A as a,o as c,h,b as f,B as u,g as m,u as d,w as g,j as v,m as p,r as $,x as w,y as E,C as _,D as b,E as y,l as j,F as k,G as B,I as A,J as I,K as L}from"./client.368d57f3.js";function D(t,e,s){const n=t.slice();return n[9]=e[s],n}function S(t,e,s){const n=t.slice();return n[12]=e[s],n}function C(t){let e,s,l;return s=new A({props:{name:"arrow-right"}}),{c(){e=n("div"),v(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var n=r(e);p(s.$$.fragment,n),n.forEach(h),this.h()},h(){f(e,"class","icon-container svelte-mm3tjv")},m(t,n){m(t,e,n),$(s,e,null),l=!0},i(t){l||(g(s.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),l=!1},d(t){t&&h(e),E(s)}}}function T(t){let e,s,l;return s=new A({props:{name:"arrow-right"}}),{c(){e=n("div"),v(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var n=r(e);p(s.$$.fragment,n),n.forEach(h),this.h()},h(){f(e,"class","icon-container svelte-mm3tjv")},m(t,n){m(t,e,n),$(s,e,null),l=!0},i(t){l||(g(s.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),l=!1},d(t){t&&h(e),E(s)}}}function N(t){let e,s,v,p,$,E,y=t[12].title+"",j=t[12].slug===t[2]&&T();return{c(){e=n("a"),s=new l(!1),v=i(),j&&j.c(),this.h()},l(t){e=o(t,"A",{class:!0,href:!0,"data-level":!0});var n=r(e);s=a(n,!1),v=c(n),j&&j.l(n),n.forEach(h),this.h()},h(){s.a=v,f(e,"class","subsection svelte-mm3tjv"),f(e,"href",p=t[3]+"#"+t[12].slug),f(e,"data-level",$=t[12].level),u(e,"active",t[12].slug===t[2])},m(t,n){m(t,e,n),s.m(y,e),d(e,v),j&&j.m(e,null),E=!0},p(t,n){(!E||2&n)&&y!==(y=t[12].title+"")&&s.p(y),t[12].slug===t[2]?j?6&n&&g(j,1):(j=T(),j.c(),g(j,1),j.m(e,null)):j&&(_(),w(j,1,1,(()=>{j=null})),b()),(!E||10&n&&p!==(p=t[3]+"#"+t[12].slug))&&f(e,"href",p),(!E||2&n&&$!==($=t[12].level))&&f(e,"data-level",$),6&n&&u(e,"active",t[12].slug===t[2])},i(t){E||(g(j),E=!0)},o(t){w(j),E=!1},d(t){t&&h(e),j&&j.d()}}}function x(t){let e,s,v,p,$,E,j,k,B=t[9].metadata.title+"",A=t[9].slug===t[2]&&C(),I=t[9].subsections,L=[];for(let e=0;e<I.length;e+=1)L[e]=N(S(t,I,e));const D=t=>w(L[t],1,1,(()=>{L[t]=null}));return{c(){e=n("li"),s=n("a"),v=new l(!1),p=i(),A&&A.c(),E=i();for(let t=0;t<L.length;t+=1)L[t].c();j=i(),this.h()},l(t){e=o(t,"LI",{class:!0});var n=r(e);s=o(n,"A",{class:!0,href:!0});var l=r(s);v=a(l,!1),p=c(l),A&&A.l(l),l.forEach(h),E=c(n);for(let t=0;t<L.length;t+=1)L[t].l(n);j=c(n),n.forEach(h),this.h()},h(){v.a=p,f(s,"class","section svelte-mm3tjv"),f(s,"href",$=t[3]+"#"+t[9].slug),u(s,"active",t[9].slug===t[2]),f(e,"class","svelte-mm3tjv")},m(t,n){m(t,e,n),d(e,s),v.m(B,s),d(s,p),A&&A.m(s,null),d(e,E);for(let t=0;t<L.length;t+=1)L[t].m(e,null);d(e,j),k=!0},p(t,n){if((!k||2&n)&&B!==(B=t[9].metadata.title+"")&&v.p(B),t[9].slug===t[2]?A?6&n&&g(A,1):(A=C(),A.c(),g(A,1),A.m(s,null)):A&&(_(),w(A,1,1,(()=>{A=null})),b()),(!k||10&n&&$!==($=t[3]+"#"+t[9].slug))&&f(s,"href",$),6&n&&u(s,"active",t[9].slug===t[2]),14&n){let s;for(I=t[9].subsections,s=0;s<I.length;s+=1){const l=S(t,I,s);L[s]?(L[s].p(l,n),g(L[s],1)):(L[s]=N(l),L[s].c(),g(L[s],1),L[s].m(e,j))}for(_(),s=I.length;s<L.length;s+=1)D(s);b()}},i(t){if(!k){g(A);for(let t=0;t<I.length;t+=1)g(L[t]);k=!0}},o(t){w(A),L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)w(L[t]);k=!1},d(t){t&&h(e),A&&A.d(),y(L,t)}}}function R(t){let e,s,l,i,a=t[1],c=[];for(let e=0;e<a.length;e+=1)c[e]=x(D(t,a,e));const u=t=>w(c[t],1,1,(()=>{c[t]=null}));return{c(){e=n("ul");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=o(t,"UL",{class:!0});var s=r(e);for(let t=0;t<c.length;t+=1)c[t].l(s);s.forEach(h),this.h()},h(){f(e,"class","reference-toc svelte-mm3tjv")},m(n,o){m(n,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);t[6](e),s=!0,l||(i=[j(e,"mouseenter",t[7]),j(e,"mouseleave",t[8])],l=!0)},p(t,[s]){if(14&s){let n;for(a=t[1],n=0;n<a.length;n+=1){const l=D(t,a,n);c[n]?(c[n].p(l,s),g(c[n],1)):(c[n]=x(l),c[n].c(),g(c[n],1),c[n].m(e,null))}for(_(),n=a.length;n<c.length;n+=1)u(n);b()}},i(t){if(!s){for(let t=0;t<a.length;t+=1)g(c[t]);s=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)w(c[t]);s=!1},d(s){s&&h(e),y(c,s),t[6](null),l=!1,k(i)}}}function V(t,e,s){let n,{sections:l=[]}=e,{active_section:i=null}=e,{show_contents:o}=e,{prevent_sidebar_scroll:r=!1}=e,{dir:a}=e;B((()=>{if(r||o&&window.innerWidth<832)return;const t=n.querySelector(".active");if(t){const{top:e,bottom:s}=t.getBoundingClientRect(),l=200,i=window.innerHeight-200;e>i?n.parentNode.scrollBy({top:e-i,left:0,behavior:"smooth"}):s<l&&n.parentNode.scrollBy({top:s-l,left:0,behavior:"smooth"})}}));return t.$$set=t=>{"sections"in t&&s(1,l=t.sections),"active_section"in t&&s(2,i=t.active_section),"show_contents"in t&&s(5,o=t.show_contents),"prevent_sidebar_scroll"in t&&s(0,r=t.prevent_sidebar_scroll),"dir"in t&&s(3,a=t.dir)},[r,l,i,a,n,o,function(t){I[t?"unshift":"push"]((()=>{n=t,s(4,n)}))},()=>s(0,r=!0),()=>s(0,r=!1)]}class H extends t{constructor(t){super(),e(this,t,V,R,s,{sections:1,active_section:2,show_contents:5,prevent_sidebar_scroll:0,dir:3})}}function q(t,e,s){const n=t.slice();return n[14]=e[s],n}function z(t){let e,s,u,_,b,y,j,k,B,I,L,D,S,C,T,N,x,R,V,H=t[14].metadata.title+"",q=t[14].html+"";return S=new A({props:{name:"edit"}}),{c(){e=n("section"),s=n("h2"),u=n("span"),b=i(),y=n("a"),k=i(),B=new l(!1),I=i(),L=n("small"),D=n("a"),v(S.$$.fragment),T=i(),N=new l(!1),x=i(),this.h()},l(t){e=o(t,"SECTION",{"data-id":!0,class:!0});var n=r(e);s=o(n,"H2",{class:!0});var l=r(s);u=o(l,"SPAN",{class:!0,id:!0}),r(u).forEach(h),b=c(l),y=o(l,"A",{href:!0,class:!0,"aria-hidden":!0}),r(y).forEach(h),k=c(l),B=a(l,!1),I=c(l),L=o(l,"SMALL",{class:!0});var i=r(L);D=o(i,"A",{href:!0,title:!0,class:!0});var f=r(D);p(S.$$.fragment,f),f.forEach(h),i.forEach(h),l.forEach(h),T=c(n),N=a(n,!1),x=c(n),n.forEach(h),this.h()},h(){f(u,"class","offset-anchor"),f(u,"id",_=t[14].slug),f(y,"href",j=t[3]+"#"+t[14].slug),f(y,"class","anchor"),f(y,"aria-hidden",""),B.a=I,f(D,"href",C="https://github.com/"+t[0]+"/"+t[1]+"/edit/master"+t[2]+"/"+t[3]+"/"+t[14].file),f(D,"title",t[4]),f(D,"class","svelte-1itkhys"),f(L,"class","svelte-1itkhys"),f(s,"class","svelte-1itkhys"),N.a=x,f(e,"data-id",R=t[14].slug),f(e,"class","svelte-1itkhys")},m(t,n){m(t,e,n),d(e,s),d(s,u),d(s,b),d(s,y),d(s,k),B.m(H,s),d(s,I),d(s,L),d(L,D),$(S,D,null),d(e,T),N.m(q,e),d(e,x),V=!0},p(t,s){(!V||32&s&&_!==(_=t[14].slug))&&f(u,"id",_),(!V||40&s&&j!==(j=t[3]+"#"+t[14].slug))&&f(y,"href",j),(!V||32&s)&&H!==(H=t[14].metadata.title+"")&&B.p(H),(!V||47&s&&C!==(C="https://github.com/"+t[0]+"/"+t[1]+"/edit/master"+t[2]+"/"+t[3]+"/"+t[14].file))&&f(D,"href",C),(!V||16&s)&&f(D,"title",t[4]),(!V||32&s)&&q!==(q=t[14].html+"")&&N.p(q),(!V||32&s&&R!==(R=t[14].slug))&&f(e,"data-id",R)},i(t){V||(g(S.$$.fragment,t),V=!0)},o(t){w(S.$$.fragment,t),V=!1},d(t){t&&h(e),E(S)}}}function O(t){let e,s,l,a,B,I,L,D,S,C,T,N=t[5],x=[];for(let e=0;e<N.length;e+=1)x[e]=z(q(t,N,e));const R=t=>w(x[t],1,1,(()=>{x[t]=null}));return B=new H({props:{sections:t[5],active_section:t[6],show_contents:t[9],dir:t[3]}}),D=new A({props:{name:t[9]?"close":"menu"}}),{c(){e=n("div");for(let t=0;t<x.length;t+=1)x[t].c();s=i(),l=n("aside"),a=n("div"),v(B.$$.fragment),I=i(),L=n("button"),v(D.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var n=r(e);for(let t=0;t<x.length;t+=1)x[t].l(n);n.forEach(h),s=c(t),l=o(t,"ASIDE",{class:!0});var i=r(l);a=o(i,"DIV",{class:!0});var f=r(a);p(B.$$.fragment,f),f.forEach(h),I=c(i),L=o(i,"BUTTON",{class:!0});var u=r(L);p(D.$$.fragment,u),u.forEach(h),i.forEach(h),this.h()},h(){f(e,"class","content listify svelte-1itkhys"),f(a,"class","sidebar svelte-1itkhys"),f(L,"class","svelte-1itkhys"),f(l,"class","sidebar-container svelte-1itkhys"),u(l,"open",t[9])},m(n,i){m(n,e,i);for(let t=0;t<x.length;t+=1)x[t].m(e,null);t[10](e),m(n,s,i),m(n,l,i),d(l,a),$(B,a,null),d(l,I),d(l,L),$(D,L,null),t[13](l),S=!0,C||(T=[j(a,"click",t[11]),j(L,"click",t[12])],C=!0)},p(t,[s]){if(63&s){let n;for(N=t[5],n=0;n<N.length;n+=1){const l=q(t,N,n);x[n]?(x[n].p(l,s),g(x[n],1)):(x[n]=z(l),x[n].c(),g(x[n],1),x[n].m(e,null))}for(_(),n=N.length;n<x.length;n+=1)R(n);b()}const n={};32&s&&(n.sections=t[5]),64&s&&(n.active_section=t[6]),512&s&&(n.show_contents=t[9]),8&s&&(n.dir=t[3]),B.$set(n);const i={};512&s&&(i.name=t[9]?"close":"menu"),D.$set(i),512&s&&u(l,"open",t[9])},i(t){if(!S){for(let t=0;t<N.length;t+=1)g(x[t]);g(B.$$.fragment,t),g(D.$$.fragment,t),S=!0}},o(t){x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)w(x[t]);w(B.$$.fragment,t),w(D.$$.fragment,t),S=!1},d(n){n&&h(e),y(x,n),t[10](null),n&&h(s),n&&h(l),E(B),E(D),t[13](null),C=!1,k(T)}}}function U(t,e,s){let n,l,i,{owner:o="sveltejs"}=e,{project:r="svelte"}=e,{path:a="/site/content"}=e,{dir:c="docs"}=e,{edit_title:h="edit this section"}=e,{sections:f}=e,u=!1;L((()=>{const t=l.querySelectorAll("[id]:not([data-scrollignore])");let e;const i=()=>{const{top:s}=l.getBoundingClientRect();e=[].map.call(t,(t=>t.getBoundingClientRect().top-s))};let o=window.location.hash.slice(1);const r=()=>{const{top:i}=l.getBoundingClientRect();let r=t.length;for(;r--;)if(e[r]+i<40){const e=t[r],{id:l}=e;return void(l!==o&&(s(6,n=l),o=l))}};window.addEventListener("scroll",r,!0),window.addEventListener("resize",i,!0);const a=[setTimeout(i,1e3),setTimeout(r,5e3)];return i(),r(),()=>{window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",i,!0),a.forEach((t=>clearTimeout(t)))}}));return t.$$set=t=>{"owner"in t&&s(0,o=t.owner),"project"in t&&s(1,r=t.project),"path"in t&&s(2,a=t.path),"dir"in t&&s(3,c=t.dir),"edit_title"in t&&s(4,h=t.edit_title),"sections"in t&&s(5,f=t.sections)},[o,r,a,c,h,f,n,l,i,u,function(t){I[t?"unshift":"push"]((()=>{l=t,s(7,l)}))},()=>s(9,u=!1),()=>s(9,u=!u),function(t){I[t?"unshift":"push"]((()=>{i=t,s(8,i)}))}]}class F extends t{constructor(t){super(),e(this,t,U,O,s,{owner:0,project:1,path:2,dir:3,edit_title:4,sections:5})}}export{F as D};
