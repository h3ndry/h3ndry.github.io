import{S as p,i as m,s as _,w as f,a as u,k as d,q as y,x as h,c as $,l as g,m as v,r as x,h as i,y as j,b as c,F as w,B as H,f as P,t as b,z as q}from"../../../chunks/index-ca4017b2.js";import{P as A}from"../../../chunks/PageHead-baf97823.js";/* empty css                                                                 *//* empty css                                                                */function S(r){let e,a,s,o,l;return e=new A({props:{title:"Project",description:"List of projece"}}),{c(){f(e.$$.fragment),a=u(),s=d("h1"),o=y("Hello beautiful world")},l(t){h(e.$$.fragment,t),a=$(t),s=g(t,"H1",{});var n=v(s);o=x(n,"Hello beautiful world"),n.forEach(i)},m(t,n){j(e,t,n),c(t,a,n),c(t,s,n),w(s,o),l=!0},p:H,i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){q(e,t),t&&i(a),t&&i(s)}}}async function E({fetch:r}){return{props:{posts:await r("projects/list.json").then(a=>a.json())}}}function k(r,e,a){let{posts:s}=e;return console.log(s),r.$$set=o=>{"posts"in o&&a(0,s=o.posts)},[s]}class F extends p{constructor(e){super(),m(this,e,k,S,_,{posts:0})}}export{F as default,E as load};
