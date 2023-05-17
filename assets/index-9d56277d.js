import{S as B,i as E,s as F,N as J,c as W,a as h,e as i,b as u,d as z,m as A,f as S,g as s,h as q,j,l as C,t as G,k as H,n as K,o as T,r as L,p as O,q as Q}from"./nav-bar-183bf7d4.js";import{p as U,C as V}from"./clipboard-c76970d9.js";function x(t){let n;return{c(){n=i("span"),n.textContent="Invald Protobuf",u(n,"class","rightcorner warning")},m(a,o){S(a,n,o)},d(a){a&&T(n)}}}function X(t){let n,a,o,r,_,v,c,w,P,f,b,p,g,y,N,d,D,M,k,R,I;n=new J({props:{current:0}});let l=t[3]&&x();return{c(){W(n.$$.fragment),a=h(),o=i("div"),r=i("div"),_=i("h3"),_.textContent="Protocol buffer",v=h(),c=i("textarea"),w=h(),l&&l.c(),P=h(),f=i("div"),b=i("div"),p=i("select"),g=i("option"),g.textContent="Typescript d.ts",y=i("option"),y.textContent="Typescript File",N=h(),d=i("textarea"),D=h(),M=i("span"),M.textContent="Copy to clipboard",u(c,"name",""),u(r,"class","col"),g.__value="1",g.value=g.__value,y.__value="0",y.value=y.__value,u(p,"class","type-selector"),t[2]===void 0&&z(()=>t[6].call(p)),u(b,"class","tool-bar"),u(d,"name",""),u(d,"id","typescript"),u(M,"class","rightcorner button"),u(M,"data-clipboard-target","#typescript"),u(f,"class","col"),u(o,"id","container")},m(e,m){A(n,e,m),S(e,a,m),S(e,o,m),s(o,r),s(r,_),s(r,v),s(r,c),q(c,t[0]),s(r,w),l&&l.m(r,null),s(o,P),s(o,f),s(f,b),s(b,p),s(p,g),s(p,y),j(p,t[2],!0),s(f,N),s(f,d),q(d,t[1]),s(f,D),s(f,M),k=!0,R||(I=[C(c,"input",t[5]),C(c,"input",t[4]),C(p,"change",t[6]),C(p,"change",t[4]),C(p,"blur",t[4]),C(d,"input",t[7])],R=!0)},p(e,[m]){m&1&&q(c,e[0]),e[3]?l||(l=x(),l.c(),l.m(r,null)):l&&(l.d(1),l=null),m&4&&j(p,e[2]),m&2&&q(d,e[1])},i(e){k||(G(n.$$.fragment,e),k=!0)},o(e){H(n.$$.fragment,e),k=!1},d(e){K(n,e),e&&T(a),e&&T(o),l&&l.d(),R=!1,L(I)}}}function Y(t,n,a){let o=`
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
  `,r="",_="0",v=!1;function c(){const b=!!Number(_);a(1,r=U.parseProto('syntax = "proto3";'+o,{isDefinition:b})),a(3,v=!1)}O(()=>{window.onerror=()=>{a(3,v=!0)},c(),new V(".button")});function w(){o=this.value,a(0,o)}function P(){_=Q(this),a(2,_)}function f(){r=this.value,a(1,r)}return[o,r,_,v,c,w,P,f]}class Z extends B{constructor(n){super(),E(this,n,Y,X,F,{})}}new Z({target:document.getElementById("app")});
