import{S as D,i as F,s as K,N as L,c as Q,a as b,e as f,b as d,m as U,f as q,g as a,h as S,l as T,t as V,k as X,n as Y,o as N,v as Z,r as $,p as ee,w as te,x as ne,q as E,C as se}from"./Navbar-63f86d31.js";function G(r,t,s){const n=r.slice();return n[8]=t[s],n}function W(r){let t;return{c(){t=f("span"),t.textContent="Invald Protobuf",d(t,"class","rightcorner warning")},m(s,n){q(s,t,n)},d(s){s&&N(t)}}}function z(r){let t,s=r[8]+"",n,l,p;return{c(){t=f("li"),n=te(s),d(t,"class","method-item")},m(m,c){q(m,t,c),a(t,n),l||(p=T(t,"click",r[5]),l=!0)},p(m,c){c&8&&s!==(s=m[8]+"")&&ne(n,s)},d(m){m&&N(t),l=!1,p()}}}function le(r){let t,s,n,l,p,m,c,C,R,h,v,w,H,J,_,P,O,y,j,x,M,I,A;t=new L({props:{current:1}});let u=r[2]&&W(),k=r[3],i=[];for(let e=0;e<k.length;e+=1)i[e]=z(G(r,k,e));return{c(){Q(t.$$.fragment),s=b(),n=f("div"),l=f("div"),p=f("h3"),p.textContent="Protocol buffer",m=b(),c=f("textarea"),C=b(),u&&u.c(),R=b(),h=f("div"),v=f("h3"),v.textContent="Methods",w=b(),H=f("ul");for(let e=0;e<i.length;e+=1)i[e].c();J=b(),_=f("div"),P=f("h3"),P.textContent="Response Mock Result",O=b(),y=f("textarea"),j=b(),x=f("span"),x.textContent="Copy to clipboard",d(c,"name",""),d(l,"class","editor"),d(h,"class","selector"),d(y,"name",""),d(y,"id","typescript"),d(x,"class","rightcorner button"),d(x,"data-clipboard-target","#typescript"),d(_,"class","editor"),d(n,"id","container")},m(e,g){U(t,e,g),q(e,s,g),q(e,n,g),a(n,l),a(l,p),a(l,m),a(l,c),S(c,r[0]),a(l,C),u&&u.m(l,null),a(n,R),a(n,h),a(h,v),a(h,w),a(h,H);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(H,null);a(n,J),a(n,_),a(_,P),a(_,O),a(_,y),S(y,r[1]),a(_,j),a(_,x),M=!0,I||(A=[T(c,"input",r[6]),T(c,"input",r[4]),T(y,"input",r[7])],I=!0)},p(e,[g]){if(g&1&&S(c,e[0]),e[2]?u||(u=W(),u.c(),u.m(l,null)):u&&(u.d(1),u=null),g&40){k=e[3];let o;for(o=0;o<k.length;o+=1){const B=G(e,k,o);i[o]?i[o].p(B,g):(i[o]=z(B),i[o].c(),i[o].m(H,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=k.length}g&2&&S(y,e[1])},i(e){M||(V(t.$$.fragment,e),M=!0)},o(e){X(t.$$.fragment,e),M=!1},d(e){Y(t,e),e&&N(s),e&&N(n),u&&u.d(),Z(i,e),I=!1,$(A)}}}function ae(r,t,s){let n=` 
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
`,l,p=!1,m=[];function c(){const v=E.getAllMethods('syntax = "proto3";'+n);s(3,m=Object.keys(v)),s(2,p=!1)}function C(v){var w=E.mockResponse('syntax = "proto3";'+n,v.target.innerText);s(1,l=JSON.stringify(w,null,4)),s(2,p=!1)}ee(()=>{window.onerror=()=>{s(2,p=!0)},c(),new se(".button")});function R(){n=this.value,s(0,n)}function h(){l=this.value,s(1,l)}return[n,l,p,m,c,C,R,h]}class oe extends D{constructor(t){super(),F(this,t,ae,le,K,{})}}new oe({target:document.getElementById("app")});
