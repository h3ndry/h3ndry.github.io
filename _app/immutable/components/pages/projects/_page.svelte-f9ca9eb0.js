import{S as W,i as J,s as O,k as g,a as E,q as H,l as v,m as j,h as _,c as S,r as I,Q,n as h,b as M,F as p,u as R,B as N,w as U,e as V,x as X,y as Y,f as y,d as $,t as A,z as Z,P as x,g as ee}from"../../../chunks/index-4b0fa43d.js";import{P as te}from"../../../chunks/PageHead-088eb989.js";/* empty css                                                                 */function ae(o){let e,l,a,f,u,r,i,t,s,n,b,w,P,C,d,q,k;return{c(){e=g("div"),l=g("div"),a=g("img"),r=E(),i=g("h1"),t=g("a"),s=H(o[0]),b=E(),w=g("p"),P=H(o[1]),C=E(),d=g("a"),q=H("Read More →"),this.h()},l(m){e=v(m,"DIV",{class:!0});var c=j(e);l=v(c,"DIV",{class:!0});var T=j(l);a=v(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(_),r=S(c),i=v(c,"H1",{class:!0});var z=j(i);t=v(z,"A",{href:!0});var B=j(t);s=I(B,o[0]),B.forEach(_),z.forEach(_),b=S(c),w=v(c,"P",{class:!0});var D=j(w);P=I(D,o[1]),D.forEach(_),C=S(c),d=v(c,"A",{class:!0,href:!0});var L=j(d);q=I(L,"Read More →"),L.forEach(_),c.forEach(_),this.h()},h(){Q(a.src,f="/img/"+o[3])||h(a,"src",f),h(a,"alt",u="Thubnaim for - "+o[0]),h(a,"class","svelte-1vcpao4"),h(l,"class","img svelte-1vcpao4"),h(t,"href",n=`/projects/${o[2]}`),h(i,"class","title svelte-1vcpao4"),h(w,"class","description svelte-1vcpao4"),h(d,"class","read-more svelte-1vcpao4"),h(d,"href",k=`/projects/${o[2]}`),h(e,"class","wraper svelte-1vcpao4")},m(m,c){M(m,e,c),p(e,l),p(l,a),p(e,r),p(e,i),p(i,t),p(t,s),p(e,b),p(e,w),p(w,P),p(e,C),p(e,d),p(d,q)},p(m,[c]){c&8&&!Q(a.src,f="/img/"+m[3])&&h(a,"src",f),c&1&&u!==(u="Thubnaim for - "+m[0])&&h(a,"alt",u),c&1&&R(s,m[0]),c&4&&n!==(n=`/projects/${m[2]}`)&&h(t,"href",n),c&2&&R(P,m[1]),c&4&&k!==(k=`/projects/${m[2]}`)&&h(d,"href",k)},i:N,o:N,d(m){m&&_(e)}}}function re(o,e,l){let{title:a}=e,{description:f}=e,{slug:u}=e,{thumbnail:r}=e;return o.$$set=i=>{"title"in i&&l(0,a=i.title),"description"in i&&l(1,f=i.description),"slug"in i&&l(2,u=i.slug),"thumbnail"in i&&l(3,r=i.thumbnail)},[a,f,u,r]}class le extends W{constructor(e){super(),J(this,e,re,ae,O,{title:0,description:1,slug:2,thumbnail:3})}}const F=[{title:"Carpentry Shop - Net Core Web Application",slug:"carpentry-shop-net-core-web-application",description:"Carpentry Shop is a full-stack web application built with a .Net core framework and SQLite database. The application allows users to order carpentry online and notify them when ready to collect.",author:"Hendry Khoza",date:"2021-04-21",thumbnail:"carpentry.png",published:!0}];function G(o,e,l){const a=o.slice();return a[0]=e[l].slug,a[1]=e[l].title,a[2]=e[l].author,a[3]=e[l].description,a[4]=e[l].thumbnail,a}function K(o){let e,l;return e=new le({props:{thumbnail:o[4],title:o[1],slug:o[0],description:o[3]}}),{c(){U(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,f){Y(e,a,f),l=!0},p:N,i(a){l||(y(e.$$.fragment,a),l=!0)},o(a){A(e.$$.fragment,a),l=!1},d(a){Z(e,a)}}}function se(o){let e,l,a,f;e=new te({props:{title:"Project",description:"List of projece"}});let u=F,r=[];for(let t=0;t<u.length;t+=1)r[t]=K(G(o,u,t));const i=t=>A(r[t],1,1,()=>{r[t]=null});return{c(){U(e.$$.fragment),l=E();for(let t=0;t<r.length;t+=1)r[t].c();a=V()},l(t){X(e.$$.fragment,t),l=S(t);for(let s=0;s<r.length;s+=1)r[s].l(t);a=V()},m(t,s){Y(e,t,s),M(t,l,s);for(let n=0;n<r.length;n+=1)r[n].m(t,s);M(t,a,s),f=!0},p(t,[s]){if(s&0){u=F;let n;for(n=0;n<u.length;n+=1){const b=G(t,u,n);r[n]?(r[n].p(b,s),y(r[n],1)):(r[n]=K(b),r[n].c(),y(r[n],1),r[n].m(a.parentNode,a))}for(ee(),n=u.length;n<r.length;n+=1)i(n);$()}},i(t){if(!f){y(e.$$.fragment,t);for(let s=0;s<u.length;s+=1)y(r[s]);f=!0}},o(t){A(e.$$.fragment,t),r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)A(r[s]);f=!1},d(t){Z(e,t),t&&_(l),x(r,t),t&&_(a)}}}class ce extends W{constructor(e){super(),J(this,e,null,se,O,{})}}export{ce as default};
