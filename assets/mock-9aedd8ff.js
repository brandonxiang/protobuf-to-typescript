import{S as D,i as F,s as K,N as L,c as Q,a as b,e as f,b as d,m as U,f as N,g as o,h as S,l as T,t as V,k as X,n as Y,o as P,u as Z,r as $,p as ee,v as te,w as ne}from"./nav-bar-183bf7d4.js";import{p as E,C as se}from"./clipboard-c76970d9.js";function G(r,t,s){const n=r.slice();return n[8]=t[s],n}function W(r){let t;return{c(){t=f("span"),t.textContent="Invald Protobuf",d(t,"class","rightcorner warning")},m(s,n){N(s,t,n)},d(s){s&&P(t)}}}function z(r){let t,s=r[8]+"",n,l,p;return{c(){t=f("li"),n=te(s),d(t,"class","method-item")},m(m,c){N(m,t,c),o(t,n),l||(p=T(t,"click",r[5]),l=!0)},p(m,c){c&8&&s!==(s=m[8]+"")&&ne(n,s)},d(m){m&&P(t),l=!1,p()}}}function le(r){let t,s,n,l,p,m,c,C,R,h,v,w,H,J,_,q,O,y,j,x,M,I,A;t=new L({props:{current:1}});let u=r[2]&&W(),k=r[3],i=[];for(let e=0;e<k.length;e+=1)i[e]=z(G(r,k,e));return{c(){Q(t.$$.fragment),s=b(),n=f("div"),l=f("div"),p=f("h3"),p.textContent="Protocol buffer",m=b(),c=f("textarea"),C=b(),u&&u.c(),R=b(),h=f("div"),v=f("h3"),v.textContent="Methods",w=b(),H=f("ul");for(let e=0;e<i.length;e+=1)i[e].c();J=b(),_=f("div"),q=f("h3"),q.textContent="Response Mock Result",O=b(),y=f("textarea"),j=b(),x=f("span"),x.textContent="Copy to clipboard",d(c,"name",""),d(l,"class","editor"),d(h,"class","selector"),d(y,"name",""),d(y,"id","typescript"),d(x,"class","rightcorner button"),d(x,"data-clipboard-target","#typescript"),d(_,"class","editor"),d(n,"id","container")},m(e,g){U(t,e,g),N(e,s,g),N(e,n,g),o(n,l),o(l,p),o(l,m),o(l,c),S(c,r[0]),o(l,C),u&&u.m(l,null),o(n,R),o(n,h),o(h,v),o(h,w),o(h,H);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(H,null);o(n,J),o(n,_),o(_,q),o(_,O),o(_,y),S(y,r[1]),o(_,j),o(_,x),M=!0,I||(A=[T(c,"input",r[6]),T(c,"input",r[4]),T(y,"input",r[7])],I=!0)},p(e,[g]){if(g&1&&S(c,e[0]),e[2]?u||(u=W(),u.c(),u.m(l,null)):u&&(u.d(1),u=null),g&40){k=e[3];let a;for(a=0;a<k.length;a+=1){const B=G(e,k,a);i[a]?i[a].p(B,g):(i[a]=z(B),i[a].c(),i[a].m(H,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=k.length}g&2&&S(y,e[1])},i(e){M||(V(t.$$.fragment,e),M=!0)},o(e){X(t.$$.fragment,e),M=!1},d(e){Y(t,e),e&&P(s),e&&P(n),u&&u.d(),Z(i,e),I=!1,$(A)}}}function oe(r,t,s){let n=` 
syntax = "proto3";

service Greeter {
rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
string name = 1;
}

message Teacher {
string name = 1;
}

message HelloReply {
string message = 1;
number test = 2;
Teacher teacher = 3;
}
`,l,p=!1,m=[];function c(){const v=E.getAllMethods('syntax = "proto3";'+n);s(3,m=Object.keys(v)),s(2,p=!1)}function C(v){var w=E.mockResponse('syntax = "proto3";'+n,v.target.innerText);s(1,l=JSON.stringify(w,null,4)),s(2,p=!1)}ee(()=>{window.onerror=()=>{s(2,p=!0)},c(),new se(".button")});function R(){n=this.value,s(0,n)}function h(){l=this.value,s(1,l)}return[n,l,p,m,c,C,R,h]}class ae extends D{constructor(t){super(),F(this,t,oe,le,K,{})}}new ae({target:document.getElementById("app")});
