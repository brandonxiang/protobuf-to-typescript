var Ke=Object.defineProperty;var ze=(r,e,t)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var he=(r,e,t)=>(ze(r,typeof e!="symbol"?e+"":e,t),t);import{p as W,c as We,C as Ae}from"./vendor-85139cef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function P(){}function Me(r){return r()}function _e(){return Object.create(null)}function j(r){r.forEach(Me)}function Pe(r){return typeof r=="function"}function ee(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Xe(r){return Object.keys(r).length===0}function h(r,e){r.appendChild(e)}function N(r,e,t){r.insertBefore(e,t||null)}function I(r){r.parentNode&&r.parentNode.removeChild(r)}function Ye(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function w(r){return document.createElement(r)}function Y(r){return document.createTextNode(r)}function L(){return Y(" ")}function O(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function y(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Qe(r){return Array.from(r.childNodes)}function Ze(r,e){e=""+e,r.data!==e&&(r.data=e)}function A(r,e){r.value=e??""}function Ve(r,e,t,n){t==null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function be(r,e,t){for(let n=0;n<r.options.length;n+=1){const i=r.options[n];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function et(r){const e=r.querySelector(":checked");return e&&e.__value}function tt(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}let Z;function Q(r){Z=r}function Ie(){if(!Z)throw new Error("Function called outside component initialization");return Z}function we(r){Ie().$$.on_mount.push(r)}function nt(){const r=Ie();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=tt(e,t,{cancelable:n});return i.slice().forEach(l=>{l.call(r,s)}),!s.defaultPrevented}return!0}}const H=[],ve=[];let F=[];const Ce=[],rt=Promise.resolve();let pe=!1;function it(){pe||(pe=!0,rt.then(Ne))}function ue(r){F.push(r)}const de=new Set;let J=0;function Ne(){if(J!==0)return;const r=Z;do{try{for(;J<H.length;){const e=H[J];J++,Q(e),st(e.$$)}}catch(e){throw H.length=0,J=0,e}for(Q(null),H.length=0,J=0;ve.length;)ve.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];de.has(t)||(de.add(t),t())}F.length=0}while(H.length);for(;Ce.length;)Ce.pop()();pe=!1,de.clear(),Q(r)}function st(r){if(r.fragment!==null){r.update(),j(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ue)}}function ot(r){const e=[],t=[];F.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),F=e}const oe=new Set;let B;function lt(){B={r:0,c:[],p:B}}function ut(){B.r||j(B.c),B=B.p}function G(r,e){r&&r.i&&(oe.delete(r),r.i(e))}function K(r,e,t,n){if(r&&r.o){if(oe.has(r))return;oe.add(r),B.c.push(()=>{oe.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function $e(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function fe(r){r&&r.c()}function te(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),ue(()=>{const s=r.$$.on_mount.map(Me).filter(Pe);r.$$.on_destroy?r.$$.on_destroy.push(...s):j(s),r.$$.on_mount=[]}),i.forEach(ue)}function ne(r,e){const t=r.$$;t.fragment!==null&&(ot(t.after_update),j(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function at(r,e){r.$$.dirty[0]===-1&&(H.push(r),it(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function re(r,e,t,n,i,s,l=null,u=[-1]){const o=Z;Q(r);const a=r.$$={fragment:null,ctx:[],props:s,update:P,not_equal:i,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:_e(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};l&&l(a.root);let c=!1;if(a.ctx=t?t(r,e.props||{},(f,v,...$)=>{const C=$.length?$[0]:v;return a.ctx&&i(a.ctx[f],a.ctx[f]=C)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](C),c&&at(r,f)),v}):[],a.update(),c=!0,j(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const f=Qe(e.target);a.fragment&&a.fragment.l(f),f.forEach(I)}else a.fragment&&a.fragment.c();e.intro&&G(r.$$.fragment),te(r,e.target,e.anchor),Ne()}Q(o)}class ie{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){ne(this,1),this.$destroy=P}$on(e,t){if(!Pe(t))return P;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);const z={INDEX_PAGE:0,MOCK_PAGE:1,AST_PAGE:2};function ft(r){let e,t,n,i,s,l,u,o,a,c,f,v,$,C,R,S,p,d;return{c(){e=w("header"),t=w("a"),n=Y("PB Converter"),s=L(),l=w("a"),u=Y("Mock"),a=L(),c=w("a"),f=Y("AST"),$=L(),C=w("a"),C.textContent="JSON Converter",R=L(),S=w("a"),S.textContent="Github",y(t,"href","/#"),y(t,"class",i=r[0]===0?"active":""),y(l,"href","/#mock"),y(l,"class",o=r[0]===1?"active":""),y(c,"href","/#ast"),y(c,"class",v=r[0]===2?"active":""),y(C,"href","http://www.jsontots.com/"),y(C,"target","_blank"),y(S,"class","github-link"),y(S,"href","https://github.com/brandonxiang/pb-to-typescript"),y(e,"class","header")},m(b,_){N(b,e,_),h(e,t),h(t,n),h(e,s),h(e,l),h(l,u),h(e,a),h(e,c),h(c,f),h(e,$),h(e,C),h(e,R),h(e,S),p||(d=[O(t,"click",r[2]),O(l,"click",r[3]),O(c,"click",r[4])],p=!0)},p(b,[_]){_&1&&i!==(i=b[0]===0?"active":"")&&y(t,"class",i),_&1&&o!==(o=b[0]===1?"active":"")&&y(l,"class",o),_&1&&v!==(v=b[0]===2?"active":"")&&y(c,"class",v)},i:P,o:P,d(b){b&&I(e),p=!1,j(d)}}}function ht(r,e,t){let{current:n=0}=e;const i=nt();function s(a){i("change",{route:a})}const l=()=>s(z.INDEX_PAGE),u=()=>s(z.MOCK_PAGE),o=()=>s(z.AST_PAGE);return r.$$set=a=>{"current"in a&&t(0,n=a.current)},[n,s,l,u,o]}class dt extends ie{constructor(e){super(),re(this,e,ht,ft,ee,{current:0})}}const{Service:je,MapField:pt,Enum:gt}=W;function xe(r){const e=r.nestedArray.find(t=>t instanceof je);return e?r.lookupService(e.name).methods:null}function mt(r){const e=W.parse(r,{keepCase:!0,alternateCommentMode:!0});if(e.package){const t=e.root.lookup(e.package);if(t)return xe(t)}return xe(e.root)}function se(r){switch(r){case"string":return"Hello";case"number":return 10;case"bool":return!0;case"int32":return 10;case"int64":return"20";case"uint32":return 100;case"uint64":return"100";case"sint32":return 100;case"sint64":return"-1200";case"fixed32":return 1400;case"fixed64":return"1500";case"sfixed32":return 1600;case"sfixed64":return"-1700";case"double":return 1.4;case"float":return 1.1;case"bytes":return new Buffer("Hello");default:return null}}function le(r,e){const t=r.lookupTypeOrEnum(e);return t instanceof gt?Object.values(t.values)[0]:t.fieldsArray&&t.fieldsArray.reduce((i,s)=>{if(s instanceof pt){const o=se(s.keyType),a=se(s.type),c=a?{[s.name]:{[o]:a}}:{[s.name]:{[o]:le(r,s.type)}};return{...i,...c}}if(s.repeated){const o=se(s.type),a=o?{[s.name]:[o]}:{[s.name]:[le(r,s.type)]};return{...i,...a}}const l=se(s.type),u=l?{[s.name]:l}:{[s.name]:le(r,s.type)};return{...i,...u}},{})}function ke(r,e){const t=r.nestedArray.find(l=>l instanceof je);if(!t)return null;const n=r.lookupService(t.name),{responseType:i}=n.methods[e];return le(r,i)}function yt(r,e){const t=W.parse(r,{keepCase:!0,alternateCommentMode:!0});if(t.package){const n=t.root.lookup(t.package);if(n)return ke(n,e)}return ke(t.root,e)}var ge={exports:{}};(function(r,e){(function(t,n){n(e)})(We,function(t){const n=",".charCodeAt(0),i=";".charCodeAt(0),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=new Uint8Array(64),u=new Uint8Array(128);for(let p=0;p<s.length;p++){const d=s.charCodeAt(p);l[p]=d,u[d]=p}const o=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(p){return Buffer.from(p.buffer,p.byteOffset,p.byteLength).toString()}}:{decode(p){let d="";for(let b=0;b<p.length;b++)d+=String.fromCharCode(p[b]);return d}};function a(p){const d=new Int32Array(5),b=[];let _=0;do{const g=c(p,_),T=[];let m=!0,x=0;d[0]=0;for(let k=_;k<g;k++){let E;k=f(p,k,d,0);const M=d[0];M<x&&(m=!1),x=M,v(p,k,g)?(k=f(p,k,d,1),k=f(p,k,d,2),k=f(p,k,d,3),v(p,k,g)?(k=f(p,k,d,4),E=[M,d[1],d[2],d[3],d[4]]):E=[M,d[1],d[2],d[3]]):E=[M],T.push(E)}m||$(T),b.push(T),_=g+1}while(_<=p.length);return b}function c(p,d){const b=p.indexOf(";",d);return b===-1?p.length:b}function f(p,d,b,_){let g=0,T=0,m=0;do{const k=p.charCodeAt(d++);m=u[k],g|=(m&31)<<T,T+=5}while(m&32);const x=g&1;return g>>>=1,x&&(g=-2147483648|-g),b[_]+=g,d}function v(p,d,b){return d>=b?!1:p.charCodeAt(d)!==n}function $(p){p.sort(C)}function C(p,d){return p[0]-d[0]}function R(p){const d=new Int32Array(5),b=1024*16,_=b-36,g=new Uint8Array(b),T=g.subarray(0,_);let m=0,x="";for(let k=0;k<p.length;k++){const E=p[k];if(k>0&&(m===b&&(x+=o.decode(g),m=0),g[m++]=i),E.length!==0){d[0]=0;for(let M=0;M<E.length;M++){const q=E[M];m>_&&(x+=o.decode(T),g.copyWithin(0,_,m),m-=_),M>0&&(g[m++]=n),m=S(g,m,d,q,0),q.length!==1&&(m=S(g,m,d,q,1),m=S(g,m,d,q,2),m=S(g,m,d,q,3),q.length!==4&&(m=S(g,m,d,q,4)))}}}return x+o.decode(g.subarray(0,m))}function S(p,d,b,_,g){const T=_[g];let m=T-b[g];b[g]=T,m=m<0?-m<<1|1:m<<1;do{let x=m&31;m>>>=5,m>0&&(x|=32),p[d++]=l[x]}while(m>0);return d}t.decode=a,t.encode=R,Object.defineProperty(t,"__esModule",{value:!0})})})(ge,ge.exports);var wt=ge.exports;class ae{constructor(e){this.bits=e instanceof ae?e.bits.slice():[]}add(e){this.bits[e>>5]|=1<<(e&31)}has(e){return!!(this.bits[e>>5]&1<<(e&31))}}class V{constructor(e,t,n){this.start=e,this.end=t,this.original=n,this.intro="",this.outro="",this.content=n,this.storeName=!1,this.edited=!1,this.previous=null,this.next=null}appendLeft(e){this.outro+=e}appendRight(e){this.intro=this.intro+e}clone(){const e=new V(this.start,this.end,this.original);return e.intro=this.intro,e.outro=this.outro,e.content=this.content,e.storeName=this.storeName,e.edited=this.edited,e}contains(e){return this.start<e&&e<this.end}eachNext(e){let t=this;for(;t;)e(t),t=t.next}eachPrevious(e){let t=this;for(;t;)e(t),t=t.previous}edit(e,t,n){return this.content=e,n||(this.intro="",this.outro=""),this.storeName=t,this.edited=!0,this}prependLeft(e){this.outro=e+this.outro}prependRight(e){this.intro=e+this.intro}split(e){const t=e-this.start,n=this.original.slice(0,t),i=this.original.slice(t);this.original=n;const s=new V(e,this.end,i);return s.outro=this.outro,this.outro="",this.end=e,this.edited?(s.edit("",!1),this.content=""):this.content=n,s.next=this.next,s.next&&(s.next.previous=s),s.previous=this,this.next=s,s}toString(){return this.intro+this.content+this.outro}trimEnd(e){if(this.outro=this.outro.replace(e,""),this.outro.length)return!0;const t=this.content.replace(e,"");if(t.length)return t!==this.content&&(this.split(this.start+t.length).edit("",void 0,!0),this.edited&&this.edit(t,this.storeName,!0)),!0;if(this.edit("",void 0,!0),this.intro=this.intro.replace(e,""),this.intro.length)return!0}trimStart(e){if(this.intro=this.intro.replace(e,""),this.intro.length)return!0;const t=this.content.replace(e,"");if(t.length){if(t!==this.content){const n=this.split(this.end-t.length);this.edited&&n.edit(t,this.storeName,!0),this.edit("",void 0,!0)}return!0}else if(this.edit("",void 0,!0),this.outro=this.outro.replace(e,""),this.outro.length)return!0}}function _t(){return typeof window<"u"&&typeof window.btoa=="function"?r=>window.btoa(unescape(encodeURIComponent(r))):typeof Buffer=="function"?r=>Buffer.from(r,"utf-8").toString("base64"):()=>{throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")}}const bt=_t();class vt{constructor(e){this.version=3,this.file=e.file,this.sources=e.sources,this.sourcesContent=e.sourcesContent,this.names=e.names,this.mappings=wt.encode(e.mappings),typeof e.x_google_ignoreList<"u"&&(this.x_google_ignoreList=e.x_google_ignoreList)}toString(){return JSON.stringify(this)}toUrl(){return"data:application/json;charset=utf-8;base64,"+bt(this.toString())}}function Ct(r){const e=r.split(`
`),t=e.filter(s=>/^\t+/.test(s)),n=e.filter(s=>/^ {2,}/.test(s));if(t.length===0&&n.length===0)return null;if(t.length>=n.length)return"	";const i=n.reduce((s,l)=>{const u=/^ +/.exec(l)[0].length;return Math.min(u,s)},1/0);return new Array(i+1).join(" ")}function $t(r,e){const t=r.split(/[/\\]/),n=e.split(/[/\\]/);for(t.pop();t[0]===n[0];)t.shift(),n.shift();if(t.length){let i=t.length;for(;i--;)t[i]=".."}return t.concat(n).join("/")}const xt=Object.prototype.toString;function kt(r){return xt.call(r)==="[object Object]"}function Se(r){const e=r.split(`
`),t=[];for(let n=0,i=0;n<e.length;n++)t.push(i),i+=e[n].length+1;return function(i){let s=0,l=t.length;for(;s<l;){const a=s+l>>1;i<t[a]?l=a:s=a+1}const u=s-1,o=i-t[u];return{line:u,column:o}}}const St=/\w/;class Et{constructor(e){this.hires=e,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null}addEdit(e,t,n,i){if(t.length){let s=t.indexOf(`
`,0),l=-1;for(;s>=0;){const o=[this.generatedCodeColumn,e,n.line,n.column];i>=0&&o.push(i),this.rawSegments.push(o),this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,l=s,s=t.indexOf(`
`,s+1)}const u=[this.generatedCodeColumn,e,n.line,n.column];i>=0&&u.push(i),this.rawSegments.push(u),this.advance(t.slice(l+1))}else this.pending&&(this.rawSegments.push(this.pending),this.advance(t));this.pending=null}addUneditedChunk(e,t,n,i,s){let l=t.start,u=!0,o=!1;for(;l<t.end;){if(this.hires||u||s.has(l)){const a=[this.generatedCodeColumn,e,i.line,i.column];this.hires==="boundary"?St.test(n[l])?o||(this.rawSegments.push(a),o=!0):(this.rawSegments.push(a),o=!1):this.rawSegments.push(a)}n[l]===`
`?(i.line+=1,i.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,u=!0):(i.column+=1,this.generatedCodeColumn+=1,u=!1),l+=1}this.pending=null}advance(e){if(!e)return;const t=e.split(`
`);if(t.length>1){for(let n=0;n<t.length-1;n++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0}this.generatedCodeColumn+=t[t.length-1].length}}const X=`
`,U={insertLeft:!1,insertRight:!1,storeName:!1};class D{constructor(e,t={}){const n=new V(0,e.length,e);Object.defineProperties(this,{original:{writable:!0,value:e},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:n},lastChunk:{writable:!0,value:n},lastSearchedChunk:{writable:!0,value:n},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:t.filename},indentExclusionRanges:{writable:!0,value:t.indentExclusionRanges},sourcemapLocations:{writable:!0,value:new ae},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:void 0},ignoreList:{writable:!0,value:t.ignoreList}}),this.byStart[0]=n,this.byEnd[e.length]=n}addSourcemapLocation(e){this.sourcemapLocations.add(e)}append(e){if(typeof e!="string")throw new TypeError("outro content must be a string");return this.outro+=e,this}appendLeft(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const n=this.byEnd[e];return n?n.appendLeft(t):this.intro+=t,this}appendRight(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const n=this.byStart[e];return n?n.appendRight(t):this.outro+=t,this}clone(){const e=new D(this.original,{filename:this.filename});let t=this.firstChunk,n=e.firstChunk=e.lastSearchedChunk=t.clone();for(;t;){e.byStart[n.start]=n,e.byEnd[n.end]=n;const i=t.next,s=i&&i.clone();s&&(n.next=s,s.previous=n,n=s),t=i}return e.lastChunk=n,this.indentExclusionRanges&&(e.indentExclusionRanges=this.indentExclusionRanges.slice()),e.sourcemapLocations=new ae(this.sourcemapLocations),e.intro=this.intro,e.outro=this.outro,e}generateDecodedMap(e){e=e||{};const t=0,n=Object.keys(this.storedNames),i=new Et(e.hires),s=Se(this.original);return this.intro&&i.advance(this.intro),this.firstChunk.eachNext(l=>{const u=s(l.start);l.intro.length&&i.advance(l.intro),l.edited?i.addEdit(t,l.content,u,l.storeName?n.indexOf(l.original):-1):i.addUneditedChunk(t,l,this.original,u,this.sourcemapLocations),l.outro.length&&i.advance(l.outro)}),{file:e.file?e.file.split(/[/\\]/).pop():void 0,sources:[e.source?$t(e.file||"",e.source):e.file||""],sourcesContent:e.includeContent?[this.original]:void 0,names:n,mappings:i.raw,x_google_ignoreList:this.ignoreList?[t]:void 0}}generateMap(e){return new vt(this.generateDecodedMap(e))}_ensureindentStr(){this.indentStr===void 0&&(this.indentStr=Ct(this.original))}_getRawIndentString(){return this._ensureindentStr(),this.indentStr}getIndentString(){return this._ensureindentStr(),this.indentStr===null?"	":this.indentStr}indent(e,t){const n=/^[^\r\n]/gm;if(kt(e)&&(t=e,e=void 0),e===void 0&&(this._ensureindentStr(),e=this.indentStr||"	"),e==="")return this;t=t||{};const i={};t.exclude&&(typeof t.exclude[0]=="number"?[t.exclude]:t.exclude).forEach(c=>{for(let f=c[0];f<c[1];f+=1)i[f]=!0});let s=t.indentStart!==!1;const l=a=>s?`${e}${a}`:(s=!0,a);this.intro=this.intro.replace(n,l);let u=0,o=this.firstChunk;for(;o;){const a=o.end;if(o.edited)i[u]||(o.content=o.content.replace(n,l),o.content.length&&(s=o.content[o.content.length-1]===`
`));else for(u=o.start;u<a;){if(!i[u]){const c=this.original[u];c===`
`?s=!0:c!=="\r"&&s&&(s=!1,u===o.start||(this._splitChunk(o,u),o=o.next),o.prependRight(e))}u+=1}u=o.end,o=o.next}return this.outro=this.outro.replace(n,l),this}insert(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")}insertLeft(e,t){return U.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),U.insertLeft=!0),this.appendLeft(e,t)}insertRight(e,t){return U.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),U.insertRight=!0),this.prependRight(e,t)}move(e,t,n){if(n>=e&&n<=t)throw new Error("Cannot move a selection inside itself");this._split(e),this._split(t),this._split(n);const i=this.byStart[e],s=this.byEnd[t],l=i.previous,u=s.next,o=this.byStart[n];if(!o&&s===this.lastChunk)return this;const a=o?o.previous:this.lastChunk;return l&&(l.next=u),u&&(u.previous=l),a&&(a.next=i),o&&(o.previous=s),i.previous||(this.firstChunk=s.next),s.next||(this.lastChunk=i.previous,this.lastChunk.next=null),i.previous=a,s.next=o||null,a||(this.firstChunk=i),o||(this.lastChunk=s),this}overwrite(e,t,n,i){return i=i||{},this.update(e,t,n,{...i,overwrite:!i.contentOnly})}update(e,t,n,i){if(typeof n!="string")throw new TypeError("replacement content must be a string");for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(t>this.original.length)throw new Error("end is out of bounds");if(e===t)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(e),this._split(t),i===!0&&(U.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),U.storeName=!0),i={storeName:!0});const s=i!==void 0?i.storeName:!1,l=i!==void 0?i.overwrite:!1;if(s){const a=this.original.slice(e,t);Object.defineProperty(this.storedNames,a,{writable:!0,value:!0,enumerable:!0})}const u=this.byStart[e],o=this.byEnd[t];if(u){let a=u;for(;a!==o;){if(a.next!==this.byStart[a.end])throw new Error("Cannot overwrite across a split point");a=a.next,a.edit("",!1)}u.edit(n,s,!l)}else{const a=new V(e,t,"").edit(n,s);o.next=a,a.previous=o}return this}prepend(e){if(typeof e!="string")throw new TypeError("outro content must be a string");return this.intro=e+this.intro,this}prependLeft(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const n=this.byEnd[e];return n?n.prependLeft(t):this.intro=t+this.intro,this}prependRight(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const n=this.byStart[e];return n?n.prependRight(t):this.outro=t+this.outro,this}remove(e,t){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(e===t)return this;if(e<0||t>this.original.length)throw new Error("Character is out of bounds");if(e>t)throw new Error("end must be greater than start");this._split(e),this._split(t);let n=this.byStart[e];for(;n;)n.intro="",n.outro="",n.edit(""),n=t>n.end?this.byStart[n.end]:null;return this}lastChar(){if(this.outro.length)return this.outro[this.outro.length-1];let e=this.lastChunk;do{if(e.outro.length)return e.outro[e.outro.length-1];if(e.content.length)return e.content[e.content.length-1];if(e.intro.length)return e.intro[e.intro.length-1]}while(e=e.previous);return this.intro.length?this.intro[this.intro.length-1]:""}lastLine(){let e=this.outro.lastIndexOf(X);if(e!==-1)return this.outro.substr(e+1);let t=this.outro,n=this.lastChunk;do{if(n.outro.length>0){if(e=n.outro.lastIndexOf(X),e!==-1)return n.outro.substr(e+1)+t;t=n.outro+t}if(n.content.length>0){if(e=n.content.lastIndexOf(X),e!==-1)return n.content.substr(e+1)+t;t=n.content+t}if(n.intro.length>0){if(e=n.intro.lastIndexOf(X),e!==-1)return n.intro.substr(e+1)+t;t=n.intro+t}}while(n=n.previous);return e=this.intro.lastIndexOf(X),e!==-1?this.intro.substr(e+1)+t:this.intro+t}slice(e=0,t=this.original.length){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;let n="",i=this.firstChunk;for(;i&&(i.start>e||i.end<=e);){if(i.start<t&&i.end>=t)return n;i=i.next}if(i&&i.edited&&i.start!==e)throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);const s=i;for(;i;){i.intro&&(s!==i||i.start===e)&&(n+=i.intro);const l=i.start<t&&i.end>=t;if(l&&i.edited&&i.end!==t)throw new Error(`Cannot use replaced character ${t} as slice end anchor.`);const u=s===i?e-i.start:0,o=l?i.content.length+t-i.end:i.content.length;if(n+=i.content.slice(u,o),i.outro&&(!l||i.end===t)&&(n+=i.outro),l)break;i=i.next}return n}snip(e,t){const n=this.clone();return n.remove(0,e),n.remove(t,n.original.length),n}_split(e){if(this.byStart[e]||this.byEnd[e])return;let t=this.lastSearchedChunk;const n=e>t.end;for(;t;){if(t.contains(e))return this._splitChunk(t,e);t=n?this.byStart[t.end]:this.byEnd[t.start]}}_splitChunk(e,t){if(e.edited&&e.content.length){const i=Se(this.original)(t);throw new Error(`Cannot split a chunk that has already been edited (${i.line}:${i.column} – "${e.original}")`)}const n=e.split(t);return this.byEnd[t]=e,this.byStart[t]=n,this.byEnd[n.end]=n,e===this.lastChunk&&(this.lastChunk=n),this.lastSearchedChunk=e,!0}toString(){let e=this.intro,t=this.firstChunk;for(;t;)e+=t.toString(),t=t.next;return e+this.outro}isEmpty(){let e=this.firstChunk;do if(e.intro.length&&e.intro.trim()||e.content.length&&e.content.trim()||e.outro.length&&e.outro.trim())return!1;while(e=e.next);return!0}length(){let e=this.firstChunk,t=0;do t+=e.intro.length+e.content.length+e.outro.length;while(e=e.next);return t}trimLines(){return this.trim("[\\r\\n]")}trim(e){return this.trimStart(e).trimEnd(e)}trimEndAborted(e){const t=new RegExp((e||"\\s")+"+$");if(this.outro=this.outro.replace(t,""),this.outro.length)return!0;let n=this.lastChunk;do{const i=n.end,s=n.trimEnd(t);if(n.end!==i&&(this.lastChunk===n&&(this.lastChunk=n.next),this.byEnd[n.end]=n,this.byStart[n.next.start]=n.next,this.byEnd[n.next.end]=n.next),s)return!0;n=n.previous}while(n);return!1}trimEnd(e){return this.trimEndAborted(e),this}trimStartAborted(e){const t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),this.intro.length)return!0;let n=this.firstChunk;do{const i=n.end,s=n.trimStart(t);if(n.end!==i&&(n===this.lastChunk&&(this.lastChunk=n.next),this.byEnd[n.end]=n,this.byStart[n.next.start]=n.next,this.byEnd[n.next.end]=n.next),s)return!0;n=n.next}while(n);return!1}trimStart(e){return this.trimStartAborted(e),this}hasChanged(){return this.original!==this.toString()}_replaceRegexp(e,t){function n(s,l){return typeof t=="string"?t.replace(/\$(\$|&|\d+)/g,(u,o)=>o==="$"?"$":o==="&"?s[0]:+o<s.length?s[+o]:`$${o}`):t(...s,s.index,l,s.groups)}function i(s,l){let u;const o=[];for(;u=s.exec(l);)o.push(u);return o}if(e.global)i(e,this.original).forEach(l=>{l.index!=null&&this.overwrite(l.index,l.index+l[0].length,n(l,this.original))});else{const s=this.original.match(e);s&&s.index!=null&&this.overwrite(s.index,s.index+s[0].length,n(s,this.original))}return this}_replaceString(e,t){const{original:n}=this,i=n.indexOf(e);return i!==-1&&this.overwrite(i,i+e.length,t),this}replace(e,t){return typeof e=="string"?this._replaceString(e,t):this._replaceRegexp(e,t)}_replaceAllString(e,t){const{original:n}=this,i=e.length;for(let s=n.indexOf(e);s!==-1;s=n.indexOf(e,s+i))this.overwrite(s,s+i,t);return this}replaceAll(e,t){if(typeof e=="string")return this._replaceAllString(e,t);if(!e.global)throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");return this._replaceRegexp(e,t)}}const De="  ",qe="index",ce="google.protobuf.Empty",me={double:"number",float:"number",int32:"number",int64:"string",uint32:"number",uint64:"string",sint32:"number",sint64:"string",fixed32:"number",fixed64:"string",sfixed32:"number",sfixed64:"string",bool:"boolean",string:"string",bytes:"string"};function Tt(r,e){const{values:t,comments:n,name:i}=r,s=Object.keys(t).map(o=>({name:o,id:t[o],comment:n[o]})).sort((o,a)=>o.id-a.id),l=new D("");s.forEach(o=>{l.append(`${o.name} = ${o.id}, //${o.comment}
`)});const u=e.isDefinition?"":"export ";return l.indent(De).prepend(`${u}enum ${i} {
`).append(`}

`),{definitions:l.toString(),imports:""}}function Rt(r,e){const{values:t,comments:n,name:i}=r,s=Object.keys(t).map(o=>({name:o,id:t[o],comment:n[o]})).sort((o,a)=>o.id-a.id),l=new D("");s.forEach(o=>{l.append(`${o.name} = ${o.id}, //${o.comment}
`)});const u="export ";return l.prepend(`${u} const ${i} = {
`).append(`}

`),l.prepend(`/** @enum {number}
`),{definitions:l.toString(),imports:""}}function Be(r,e){const t=r.split("/"),n=e.split("/");let i=[],s=[];for(;t.length>0;){const o=t.shift();if(n.length>0){const a=n.shift();o!==a&&a&&o&&(s.push(a),i.push(o))}else o&&i.push(o)}for(;n.length>0;){const o=n.shift();o&&s.push(o)}const u=new Array(i.length).fill("..").concat(s).join("/");return u.includes("/")||u.includes(".")?u:"./"+u}function Lt(r){const e=r.lastIndexOf("/");return r.substring(0,e)}function Ot(r){return r.keyType?me[r.keyType]||r.keyType:""}function Ge(r,e){let t=[];const n=Object.keys(e).map(i=>{const s=e[i],{type:l,repeated:u,id:o,comment:a,required:c}=s;return me[l]||t.push(l),{name:i,type:me[l]||l,keyType:Ot(s),repeated:u,id:o,comment:a,required:c}});return{name:r,params:n.sort((i,s)=>i.id-s.id),importItems:t}}function At(r,e){const{name:t,fields:n,comment:i,filename:s}=r,l=Ge(t,n),u=new D("");let o=l.importItems.map(c=>{const f=r.lookupTypeOrEnum(c);if(s&&f.filename){const v=Lt(s),$=f.filename,C=Be(v,$).replace(".proto","");return`import { ${c} } from '${C}';
`}return""}).filter(c=>c).join("");o&&(o=o+`
`),l.params.forEach(c=>{const f=c.required?"":"?";c.repeated?u.append(`${c.name}${f}: ${c.type}[];`):c.keyType?u.append(`${c.name}${f}: {[key: ${c.keyType}]: ${c.type}};`):u.append(`${c.name}${f}: ${c.type};`),c.comment&&u.append(` //${c.comment}`),u.append(`
`)});const a=e.isDefinition?"":"export ";return u.indent(De).prepend(`${a}interface ${l.name} {
`).append(`}

`),i&&u.prepend(`//${i}
`),{definitions:u.toString(),imports:o}}function Mt(r,e){const{name:t,fields:n,comment:i,filename:s}=r,l=Ge(t,n),u=new D("");return l.params.forEach(o=>{const a=o.required?"":"=",c=o.comment||"";o.repeated?u.append(` * @prop {${o.type}[]${a}} ${o.name} ${c}`):o.keyType?u.append(` * @prop {{[key: ${o.keyType}]: ${o.type}}${a}} ${o.name} ${c}`):u.append(` * @prop {${o.type}${a}} ${o.name} ${c}`),u.append(`
`)}),u.prepend(` * @typedef {Object} ${l.name}
`).prepend(` * ${i||""}
`).prepend(`/**
`).append(` */

`),console.log(66666,u.toString()),{definitions:u.toString(),imports:""}}function Je(r,e){const t=Object.keys(e).map(n=>{const i=e[n],{requestType:s,responseType:l,comment:u}=i;return{name:n,requestType:s,responseType:l,comment:u}});return{name:r,params:t}}function Pt(r,e){const{name:t,methods:n,comment:i}=r,s=Je(t,n),l=new D(`//Service: ${t}
`);return i&&l.prepend(`//${i}
`),s.params.forEach(u=>{const o=u.requestType===ce?"":`params: ${u.requestType}`,a=u.responseType===ce?"{}":u.responseType,c=e.isDefinition?"":"export ";u.comment&&l.append(`//${u.comment}
`),l.append(`${c}type ${u.name} = (${o}) => Promise<${a}>;`),l.append(`

`)}),{definitions:l.toString(),imports:""}}function It(r,e){const{name:t,methods:n,comment:i}=r,s=Je(t,n),l=new D("");return s.params.forEach(u=>{const o=u.requestType===ce?"*":u.requestType,a=u.responseType===ce?"*":u.responseType;u.comment&&l.append(` * ${u.comment}
`),l.append(` * @callback ${u.name}
`),l.append(` * @param {${o}} params
`),l.append(` * @returns {Promise<${a}>}
`),l.prepend(` * ${i||""}
`).prepend(`/**
`).prepend(`//Service: ${t}
`).append(` */

`)}),{definitions:l.toString(),imports:""}}function Ue(r){console.log(r),process.exit(1)}const{Root:Nt,Enum:jt,Service:Dt,Type:qt}=W,Bt={isDefinition:!1};function He(r,e){const t=new Map;let n=[r],i;for(;i=n.shift();){let s=qe;if(i.filename&&e.inputDir&&(s=Be(e.inputDir,i.filename).replace("proto","ts")),i.nested)n=n.concat(Object.values(i.nested));else{let l=null;i instanceof jt?e.isJsdoc?l=Rt(i):l=Tt(i,e):i instanceof qt?e.isJsdoc?l=Mt(i):l=At(i,e):i instanceof Dt&&(e.isJsdoc?l=It(i):l=Pt(i,e)),l&&Jt(t,s,l)}}return t}function Fe(r,e,t){let n=r;if(t){const s=r.lookup(t);s&&(n=s)}const i=He(n,e);if(i.size===0)return"";if(i.size===1){const s=i.get(qe);if(s){let l="";return s.imports&&(l=l+s.imports.join("")),l=l+s.definitions.join(""),l}}return Ue("More than one protobuf files, please use parseProtoFiles"),""}function Gt(r,e){const t={...Bt,...e},n=W.parse(r,{alternateCommentMode:!0,preferTrailingComment:!0,keepCase:!0});return Fe(n.root,t,n.package)}function Jt(r,e,t){const n=r.get(e);n?r.set(e,{definitions:[...n.definitions,t.definitions],imports:[...n.imports,t.imports]}):r.set(e,{definitions:[t.definitions],imports:[t.imports]})}function Ut(r,e){try{const t=new Nt;return r.forEach(n=>{t.loadSync(n,{alternateCommentMode:!0,preferTrailingComment:!0,keepCase:!0})}),He(t,e)}catch(t){Ue(t)}}const ye={getAllMethods:mt,mockResponse:yt,parseProto:Gt,parseProtoRoot:Fe,parseProtoFiles:Ut};function Ee(r){let e;return{c(){e=w("span"),e.textContent="Invalid Protobuf",y(e,"class","rightcorner warning")},m(t,n){N(t,e,n)},d(t){t&&I(e)}}}function Ht(r){let e,t,n,i,s,l,u,o,a,c,f,v,$,C,R,S,p,d,b,_=r[3]&&Ee();return{c(){e=w("div"),t=w("div"),n=w("h3"),n.textContent="Protocol buffer",i=L(),s=w("textarea"),l=L(),_&&_.c(),u=L(),o=w("div"),a=w("div"),c=w("select"),f=w("option"),f.textContent="Typescript d.ts",v=w("option"),v.textContent="Typescript File",$=w("option"),$.textContent="Jsdoc",C=L(),R=w("textarea"),S=L(),p=w("span"),p.textContent="Copy to clipboard",y(s,"name",""),y(t,"class","col"),f.__value="1",A(f,f.__value),v.__value="0",A(v,v.__value),$.__value="2",A($,$.__value),y(c,"class","type-selector"),r[2]===void 0&&ue(()=>r[6].call(c)),y(a,"class","tool-bar"),y(R,"name",""),y(R,"id","typescript"),y(p,"class","rightcorner button"),y(p,"data-clipboard-target","#typescript"),y(o,"class","col"),y(e,"id","container")},m(g,T){N(g,e,T),h(e,t),h(t,n),h(t,i),h(t,s),A(s,r[0]),h(t,l),_&&_.m(t,null),h(e,u),h(e,o),h(o,a),h(a,c),h(c,f),h(c,v),h(c,$),be(c,r[2],!0),h(o,C),h(o,R),A(R,r[1]),h(o,S),h(o,p),d||(b=[O(s,"input",r[5]),O(s,"input",r[4]),O(c,"change",r[6]),O(c,"change",r[4]),O(c,"blur",r[4]),O(R,"input",r[7])],d=!0)},p(g,[T]){T&1&&A(s,g[0]),g[3]?_||(_=Ee(),_.c(),_.m(t,null)):_&&(_.d(1),_=null),T&4&&be(c,g[2]),T&2&&A(R,g[1])},i:P,o:P,d(g){g&&I(e),_&&_.d(),d=!1,j(b)}}}function Ft(r,e,t){let n=`
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
  `,i="",s="0",l=!1;function u(){const f=s==="1",v=s==="2";t(1,i=ye.parseProto('syntax = "proto3";'+n,{isDefinition:f,isJsdoc:v})),t(3,l=!1)}we(()=>{window.onerror=()=>{t(3,l=!0)},u(),new Ae(".button")});function o(){n=this.value,t(0,n)}function a(){s=et(this),t(2,s)}function c(){i=this.value,t(1,i)}return[n,i,s,l,u,o,a,c]}class Kt extends ie{constructor(e){super(),re(this,e,Ft,Ht,ee,{})}}function Te(r,e,t){const n=r.slice();return n[8]=e[t],n}function Re(r){let e;return{c(){e=w("span"),e.textContent="Invalid Protobuf",y(e,"class","rightcorner warning")},m(t,n){N(t,e,n)},d(t){t&&I(e)}}}function Le(r){let e,t=r[8]+"",n,i,s;return{c(){e=w("li"),n=Y(t),y(e,"class","method-item")},m(l,u){N(l,e,u),h(e,n),i||(s=O(e,"click",r[5]),i=!0)},p(l,u){u&8&&t!==(t=l[8]+"")&&Ze(n,t)},d(l){l&&I(e),i=!1,s()}}}function zt(r){let e,t,n,i,s,l,u,o,a,c,f,v,$,C,R,S,p,d,b,_,g=r[2]&&Re(),T=$e(r[3]),m=[];for(let x=0;x<T.length;x+=1)m[x]=Le(Te(r,T,x));return{c(){e=w("div"),t=w("div"),n=w("h3"),n.textContent="Protocol buffer",i=L(),s=w("textarea"),l=L(),g&&g.c(),u=L(),o=w("div"),a=w("h3"),a.textContent="Methods",c=L(),f=w("ul");for(let x=0;x<m.length;x+=1)m[x].c();v=L(),$=w("div"),C=w("h3"),C.textContent="Response Mock Result",R=L(),S=w("textarea"),p=L(),d=w("span"),d.textContent="Copy to clipboard",y(s,"name",""),y(t,"class","editor"),y(o,"class","selector"),y(S,"name",""),y(S,"id","typescript"),y(d,"class","rightcorner button"),y(d,"data-clipboard-target","#typescript"),y($,"class","editor"),y(e,"id","container")},m(x,k){N(x,e,k),h(e,t),h(t,n),h(t,i),h(t,s),A(s,r[0]),h(t,l),g&&g.m(t,null),h(e,u),h(e,o),h(o,a),h(o,c),h(o,f);for(let E=0;E<m.length;E+=1)m[E]&&m[E].m(f,null);h(e,v),h(e,$),h($,C),h($,R),h($,S),A(S,r[1]),h($,p),h($,d),b||(_=[O(s,"input",r[6]),O(s,"input",r[4]),O(S,"input",r[7])],b=!0)},p(x,[k]){if(k&1&&A(s,x[0]),x[2]?g||(g=Re(),g.c(),g.m(t,null)):g&&(g.d(1),g=null),k&40){T=$e(x[3]);let E;for(E=0;E<T.length;E+=1){const M=Te(x,T,E);m[E]?m[E].p(M,k):(m[E]=Le(M),m[E].c(),m[E].m(f,null))}for(;E<m.length;E+=1)m[E].d(1);m.length=T.length}k&2&&A(S,x[1])},i:P,o:P,d(x){x&&I(e),g&&g.d(),Ye(m,x),b=!1,j(_)}}}function Wt(r,e,t){let n=` 
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
`,i,s=!1,l=[];function u(){const f=ye.getAllMethods('syntax = "proto3";'+n);t(3,l=Object.keys(f)),t(2,s=!1)}function o(f){var v=ye.mockResponse('syntax = "proto3";'+n,f.target.innerText);t(1,i=JSON.stringify(v,null,4)),t(2,s=!1)}we(()=>{window.onerror=()=>{t(2,s=!0)},u(),new Ae(".button")});function a(){n=this.value,t(0,n)}function c(){i=this.value,t(1,i)}return[n,i,s,l,u,o,a,c]}class Xt extends ie{constructor(e){super(),re(this,e,Wt,zt,ee,{})}}function Oe(r){let e;return{c(){e=w("span"),e.textContent="Invalid Protobuf",y(e,"class","rightcorner warning")},m(t,n){N(t,e,n)},d(t){t&&I(e)}}}function Yt(r){let e,t,n,i,s,l,u,o,a,c,f,v,$,C=r[2]&&Oe();return{c(){e=w("div"),t=w("div"),n=w("h3"),n.textContent="Protocol buffer",i=L(),s=w("textarea"),l=L(),C&&C.c(),u=L(),o=w("div"),a=w("div"),a.innerHTML="",c=L(),f=w("textarea"),y(s,"name",""),y(t,"class","col"),y(a,"class","tool-bar"),Ve(a,"height","40px"),y(f,"name",""),y(f,"id","typescript"),y(o,"class","col"),y(e,"id","container")},m(R,S){N(R,e,S),h(e,t),h(t,n),h(t,i),h(t,s),A(s,r[0]),h(t,l),C&&C.m(t,null),h(e,u),h(e,o),h(o,a),h(o,c),h(o,f),A(f,r[1]),v||($=[O(s,"input",r[4]),O(s,"input",r[3]),O(f,"input",r[5])],v=!0)},p(R,[S]){S&1&&A(s,R[0]),R[2]?C||(C=Oe(),C.c(),C.m(t,null)):C&&(C.d(1),C=null),S&2&&A(f,R[1])},i:P,o:P,d(R){R&&I(e),C&&C.d(),v=!1,j($)}}}function Qt(r,e,t){let n=`
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
  `,i="",s=!1;function l(){const a=W.parse(n,{alternateCommentMode:!0,preferTrailingComment:!0,keepCase:!0});t(1,i=JSON.stringify(a.root,null,2)),t(2,s=!1)}we(()=>{window.onerror=()=>{t(2,s=!0)},l()});function u(){n=this.value,t(0,n)}function o(){i=this.value,t(1,i)}return[n,i,s,l,u,o]}class Zt extends ie{constructor(e){super(),re(this,e,Qt,Yt,ee,{})}}function Vt(r){let e,t;return e=new Kt({}),{c(){fe(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function en(r){let e,t;return e=new Zt({}),{c(){fe(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function tn(r){let e,t;return e=new Xt({}),{c(){fe(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function nn(r){let e,t,n,i,s,l;e=new dt({props:{current:r[0]}}),e.$on("change",r[1]);const u=[tn,en,Vt],o=[];function a(c,f){return c[0]===z.MOCK_PAGE?0:c[0]===z.AST_PAGE?1:2}return i=a(r),s=o[i]=u[i](r),{c(){fe(e.$$.fragment),t=L(),n=w("div"),s.c()},m(c,f){te(e,c,f),N(c,t,f),N(c,n,f),o[i].m(n,null),l=!0},p(c,[f]){const v={};f&1&&(v.current=c[0]),e.$set(v);let $=i;i=a(c),i!==$&&(lt(),K(o[$],1,1,()=>{o[$]=null}),ut(),s=o[i],s||(s=o[i]=u[i](c),s.c()),G(s,1),s.m(n,null))},i(c){l||(G(e.$$.fragment,c),G(s),l=!0)},o(c){K(e.$$.fragment,c),K(s),l=!1},d(c){c&&(I(t),I(n)),ne(e,c),o[i].d()}}}function rn(r,e,t){let n=z.INDEX_PAGE;function i(s){t(0,n=s.detail.route||0)}return[n,i]}class sn extends ie{constructor(e){super(),re(this,e,rn,nn,ee,{})}}new sn({target:document.getElementById("app")});
