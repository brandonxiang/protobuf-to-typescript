import{S as q,i as N,s as I,N as $,c as j,a as g,e as u,b as f,A,m as B,f as w,g as o,h as M,l as C,t as E,k as J,n as O,o as k,r as T,p as W,x as z}from"./nav-bar-183bf7d4.js";function S(l){let e;return{c(){e=u("span"),e.textContent="Invald Protobuf",f(e,"class","rightcorner warning")},m(r,n){w(r,e,n)},d(r){r&&k(e)}}}function D(l){let e,r,n,s,p,_,i,v,y,m,b,P,c,h,x,R;e=new $({props:{current:2}});let a=l[2]&&S();return{c(){j(e.$$.fragment),r=g(),n=u("div"),s=u("div"),p=u("h3"),p.textContent="Protocol buffer",_=g(),i=u("textarea"),v=g(),a&&a.c(),y=g(),m=u("div"),b=u("div"),P=g(),c=u("textarea"),f(i,"name",""),f(s,"class","col"),f(b,"class","tool-bar"),A(b,"height","40px"),f(c,"name",""),f(c,"id","typescript"),f(m,"class","col"),f(n,"id","container")},m(t,d){B(e,t,d),w(t,r,d),w(t,n,d),o(n,s),o(s,p),o(s,_),o(s,i),M(i,l[0]),o(s,v),a&&a.m(s,null),o(n,y),o(n,m),o(m,b),o(m,P),o(m,c),M(c,l[1]),h=!0,x||(R=[C(i,"input",l[4]),C(i,"input",l[3]),C(c,"input",l[5])],x=!0)},p(t,[d]){d&1&&M(i,t[0]),t[2]?a||(a=S(),a.c(),a.m(s,null)):a&&(a.d(1),a=null),d&2&&M(c,t[1])},i(t){h||(E(e.$$.fragment,t),h=!0)},o(t){J(e.$$.fragment,t),h=!1},d(t){O(e,t),t&&k(r),t&&k(n),a&&a.d(),x=!1,T(R)}}}function F(l,e,r){let n=`
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
  `,s="",p=!1;function _(){const y=z.parse(n,{alternateCommentMode:!0,preferTrailingComment:!0,keepCase:!0});r(1,s=JSON.stringify(y.root,null,2)),r(2,p=!1)}W(()=>{window.onerror=()=>{r(2,p=!0)},_()});function i(){n=this.value,r(0,n)}function v(){s=this.value,r(1,s)}return[n,s,p,_,i,v]}class G extends q{constructor(e){super(),N(this,e,F,D,I,{})}}new G({target:document.getElementById("app")});
