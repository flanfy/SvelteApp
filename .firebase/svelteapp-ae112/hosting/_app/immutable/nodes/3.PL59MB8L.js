import{s as L,a as C,e as f,l as M,f as o,g as k,c as d,b as g,m as D,o as r,p as H,q as P,i as b,h as u,n as w,k as N,t as O,d as j}from"../chunks/scheduler.B0JEHspW.js";import{S as B,i as F}from"../chunks/index.jKw0lUt7.js";import{u as J}from"../chunks/firebase.oGd3CV5t.js";function K(m){let e,n="Get Started",a,t,s="Phillip's Profile";return{c(){e=f("a"),e.textContent=n,a=C(),t=f("a"),t.textContent=s,this.h()},l(l){e=d(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(e)!=="svelte-izohf9"&&(e.textContent=n),a=k(l),t=d(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1367h37"&&(t.textContent=s),this.h()},h(){r(e,"href","/login"),r(e,"class","btn btn-primary"),r(t,"href","/flan"),r(t,"class","btn btn-secondary")},m(l,v){b(l,e,v),b(l,a,v),b(l,t,v)},p:w,d(l){l&&(o(e),o(a),o(t))}}}function Q(m){let e,n,a;return{c(){e=f("a"),n=O("Edit Profile"),this.h()},l(t){e=d(t,"A",{href:!0,class:!0});var s=g(e);n=j(s,"Edit Profile"),s.forEach(o),this.h()},h(){r(e,"href",a="/"+m[0].username+"/edit"),r(e,"class","btn btn-primary")},m(t,s){b(t,e,s),u(e,n)},p(t,s){s&1&&a!==(a="/"+t[0].username+"/edit")&&r(e,"href",a)},d(t){t&&o(e)}}}function R(m){let e,n,a,t,s,l,v="Linknest",I,h,z,A,p,S="One simple link to share your entire developer portfolio",q;function V(i,x){var y;return(y=i[0])!=null&&y.username?Q:K}let E=V(m),c=E(m);return{c(){e=C(),n=f("main"),a=f("div"),t=f("div"),s=f("div"),l=f("h1"),l.textContent=v,I=C(),h=f("img"),A=C(),p=f("p"),p.textContent=S,q=C(),c.c(),this.h()},l(i){M("svelte-5yegz7",document.head).forEach(o),e=k(i),n=d(i,"MAIN",{class:!0});var y=g(n);a=d(y,"DIV",{class:!0});var $=g(a);t=d($,"DIV",{class:!0});var G=g(t);s=d(G,"DIV",{class:!0});var _=g(s);l=d(_,"H1",{class:!0,"data-svelte-h":!0}),D(l)!=="svelte-14hezyr"&&(l.textContent=v),I=k(_),h=d(_,"IMG",{src:!0,alt:!0,style:!0}),A=k(_),p=d(_,"P",{class:!0,"data-svelte-h":!0}),D(p)!=="svelte-18180bf"&&(p.textContent=S),q=k(_),c.l(_),_.forEach(o),G.forEach(o),$.forEach(o),y.forEach(o),this.h()},h(){document.title="Linknest",r(l,"class","text-7xl font-bold"),H(h.src,z="chicken.png")||r(h,"src",z),r(h,"alt","chicken"),P(h,"width","100px"),P(h,"height","auto"),P(h,"display","block"),P(h,"margin","0 auto"),r(p,"class","py-6 text-2xl"),r(s,"class","w-full"),r(t,"class","hero-content text-center"),r(a,"class","hero bg-base-200"),r(n,"class","flex w-full min-h-screen")},m(i,x){b(i,e,x),b(i,n,x),u(n,a),u(a,t),u(t,s),u(s,l),u(s,I),u(s,h),u(s,A),u(s,p),u(s,q),c.m(s,null)},p(i,[x]){E===(E=V(i))&&c?c.p(i,x):(c.d(1),c=E(i),c&&(c.c(),c.m(s,null)))},i:w,o:w,d(i){i&&(o(e),o(n)),c.d()}}}function T(m,e,n){let a;return N(m,J,t=>n(0,a=t)),[a]}class Y extends B{constructor(e){super(),F(this,e,T,R,L,{})}}export{Y as component};