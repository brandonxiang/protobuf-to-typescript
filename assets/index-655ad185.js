import{S as B,i as E,s as F,N as J,c as W,a as h,e as i,b as u,d as z,m as A,f as S,g as s,h as q,j,l as C,t as G,k as H,n as K,o as T,r as L,p as O,q as Q,C as U,u as V}from"./Navbar-63f86d31.js";function x(t){let n;return{c(){n=i("span"),n.textContent="Invald Protobuf",u(n,"class","rightcorner warning")},m(a,o){S(a,n,o)},d(a){a&&T(n)}}}function X(t){let n,a,o,l,d,v,c,M,P,f,b,p,g,y,N,_,D,w,k,R,I;n=new J({props:{current:0}});let r=t[3]&&x();return{c(){W(n.$$.fragment),a=h(),o=i("div"),l=i("div"),d=i("h3"),d.textContent="Protocol buffer",v=h(),c=i("textarea"),M=h(),r&&r.c(),P=h(),f=i("div"),b=i("div"),p=i("select"),g=i("option"),g.textContent="Typescript d.ts",y=i("option"),y.textContent="Typescript File",N=h(),_=i("textarea"),D=h(),w=i("span"),w.textContent="Copy to clipboard",u(c,"name",""),u(l,"class","col"),g.__value="1",g.value=g.__value,y.__value="0",y.value=y.__value,u(p,"class","type-selector"),t[2]===void 0&&z(()=>t[6].call(p)),u(b,"class","tool-bar"),u(_,"name",""),u(_,"id","typescript"),u(w,"class","rightcorner button"),u(w,"data-clipboard-target","#typescript"),u(f,"class","col"),u(o,"id","container")},m(e,m){A(n,e,m),S(e,a,m),S(e,o,m),s(o,l),s(l,d),s(l,v),s(l,c),q(c,t[0]),s(l,M),r&&r.m(l,null),s(o,P),s(o,f),s(f,b),s(b,p),s(p,g),s(p,y),j(p,t[2],!0),s(f,N),s(f,_),q(_,t[1]),s(f,D),s(f,w),k=!0,R||(I=[C(c,"input",t[5]),C(c,"input",t[4]),C(p,"change",t[6]),C(p,"change",t[4]),C(p,"blur",t[4]),C(_,"input",t[7])],R=!0)},p(e,[m]){m&1&&q(c,e[0]),e[3]?r||(r=x(),r.c(),r.m(l,null)):r&&(r.d(1),r=null),m&4&&j(p,e[2]),m&2&&q(_,e[1])},i(e){k||(G(n.$$.fragment,e),k=!0)},o(e){H(n.$$.fragment,e),k=!1},d(e){K(n,e),e&&T(a),e&&T(o),r&&r.d(),R=!1,L(I)}}}function Y(t,n,a){let o=`
syntax = "proto3";

service MyService {
    rpc MyMethod (MyRequest) returns (MyResponse);
}

message MyRequest {
    string path = 1;
}

message MyResponse {
    int32 status = 1;
}
  `,l="",d="0",v=!1;function c(){const b=!!Number(d);a(1,l=Q.parseProto('syntax = "proto3";'+o,{isDefinition:b})),a(3,v=!1)}O(()=>{window.onerror=()=>{a(3,v=!0)},c(),new U(".button")});function M(){o=this.value,a(0,o)}function P(){d=V(this),a(2,d)}function f(){l=this.value,a(1,l)}return[o,l,d,v,c,M,P,f]}class Z extends B{constructor(n){super(),E(this,n,Y,X,F,{})}}const $=new Z({target:document.getElementById("app")});window.app=$;
