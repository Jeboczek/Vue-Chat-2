var hw=Object.defineProperty,fw=Object.defineProperties;var pw=Object.getOwnPropertyDescriptors;var Yh=Object.getOwnPropertySymbols;var gw=Object.prototype.hasOwnProperty,_w=Object.prototype.propertyIsEnumerable;var Qh=(t,e,n)=>e in t?hw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,le=(t,e)=>{for(var n in e||(e={}))gw.call(e,n)&&Qh(t,n,e[n]);if(Yh)for(var n of Yh(e))_w.call(e,n)&&Qh(t,n,e[n]);return t},Lo=(t,e)=>fw(t,pw(e));function Yc(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const mw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vw=Yc(mw);function ag(t){return!!t||t===""}function Qc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=nt(i)?bw(i):Qc(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(nt(t))return t;if(Qe(t))return t}}const yw=/;(?![^(]*\))/g,Ew=/:(.+)/;function bw(t){const e={};return t.split(yw).forEach(n=>{if(n){const i=n.split(Ew);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xc(t){let e="";if(nt(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const i=Xc(t[n]);i&&(e+=i+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rL=t=>nt(t)?t:t==null?"":se(t)||Qe(t)&&(t.toString===dg||!ce(t.toString))?JSON.stringify(t,lg,2):String(t),lg=(t,e)=>e&&e.__v_isRef?lg(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:cg(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!se(e)&&!hg(e)?String(e):e,Fe={},ss=[],qt=()=>{},ww=()=>!1,Cw=/^on[^a-z]/,Na=t=>Cw.test(t),Jc=t=>t.startsWith("onUpdate:"),_t=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tw=Object.prototype.hasOwnProperty,Ce=(t,e)=>Tw.call(t,e),se=Array.isArray,rs=t=>Pa(t)==="[object Map]",cg=t=>Pa(t)==="[object Set]",ce=t=>typeof t=="function",nt=t=>typeof t=="string",eu=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",ug=t=>Qe(t)&&ce(t.then)&&ce(t.catch),dg=Object.prototype.toString,Pa=t=>dg.call(t),Iw=t=>Pa(t).slice(8,-1),hg=t=>Pa(t)==="[object Object]",tu=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qo=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Aw=/-(\w)/g,cn=Ra(t=>t.replace(Aw,(e,n)=>n?n.toUpperCase():"")),Sw=/\B([A-Z])/g,ks=Ra(t=>t.replace(Sw,"-$1").toLowerCase()),ka=Ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Ra(t=>t?`on${ka(t)}`:""),Lr=(t,e)=>!Object.is(t,e),Ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xh;const Ow=()=>Xh||(Xh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let gn;class fg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gn&&(this.parent=gn,this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return gn=this,e()}finally{gn=this.parent}}on(){gn=this}off(){gn=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function pg(t){return new fg(t)}function Nw(t,e=gn){e&&e.active&&e.effects.push(t)}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gg=t=>(t.w&Xn)>0,_g=t=>(t.n&Xn)>0,Pw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},Rw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];gg(s)&&!_g(s)?s.delete(t):e[n++]=s,s.w&=~Xn,s.n&=~Xn}e.length=n}},Ql=new WeakMap;let pr=0,Xn=1;const Xl=30;let rn;const bi=Symbol(""),Jl=Symbol("");class iu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nw(this,i)}run(){if(!this.active)return this.fn();let e=rn,n=Kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,Kn=!0,Xn=1<<++pr,pr<=Xl?Pw(this):Jh(this),this.fn()}finally{pr<=Xl&&Rw(this),Xn=1<<--pr,rn=this.parent,Kn=n,this.parent=void 0}}stop(){this.active&&(Jh(this),this.onStop&&this.onStop(),this.active=!1)}}function Jh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kn=!0;const mg=[];function xs(){mg.push(Kn),Kn=!1}function Ds(){const t=mg.pop();Kn=t===void 0?!0:t}function Rt(t,e,n){if(Kn&&rn){let i=Ql.get(t);i||Ql.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=nu()),vg(s)}}function vg(t,e){let n=!1;pr<=Xl?_g(t)||(t.n|=Xn,n=!gg(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function In(t,e,n,i,s,r){const o=Ql.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t))o.forEach((c,u)=>{(u==="length"||u>=i)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?tu(n)&&a.push(o.get("length")):(a.push(o.get(bi)),rs(t)&&a.push(o.get(Jl)));break;case"delete":se(t)||(a.push(o.get(bi)),rs(t)&&a.push(o.get(Jl)));break;case"set":rs(t)&&a.push(o.get(bi));break}if(a.length===1)a[0]&&Zl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Zl(nu(c))}}function Zl(t,e){for(const n of se(t)?t:[...t])(n!==rn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kw=Yc("__proto__,__v_isRef,__isVue"),yg=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(eu)),xw=su(),Dw=su(!1,!0),Lw=su(!0),Zh=Mw();function Mw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ae(this);for(let r=0,o=this.length;r<o;r++)Rt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xs();const i=Ae(this)[e].apply(this,n);return Ds(),i}}),t}function su(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Jw:Tg:e?Cg:wg).get(i))return i;const o=se(i);if(!t&&o&&Ce(Zh,s))return Reflect.get(Zh,s,r);const a=Reflect.get(i,s,r);return(eu(s)?yg.has(s):kw(s))||(t||Rt(i,"get",s),e)?a:qe(a)?!o||!tu(s)?a.value:a:Qe(a)?t?Ig(a):Ls(a):a}}const $w=Eg(),Fw=Eg(!0);function Eg(t=!1){return function(n,i,s,r){let o=n[i];if(Mr(o)&&qe(o)&&!qe(s))return!1;if(!t&&!Mr(s)&&(Ag(s)||(s=Ae(s),o=Ae(o)),!se(n)&&qe(o)&&!qe(s)))return o.value=s,!0;const a=se(n)&&tu(i)?Number(i)<n.length:Ce(n,i),c=Reflect.set(n,i,s,r);return n===Ae(r)&&(a?Lr(s,o)&&In(n,"set",i,s):In(n,"add",i,s)),c}}function Bw(t,e){const n=Ce(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&In(t,"delete",e,void 0),i}function Uw(t,e){const n=Reflect.has(t,e);return(!eu(e)||!yg.has(e))&&Rt(t,"has",e),n}function Hw(t){return Rt(t,"iterate",se(t)?"length":bi),Reflect.ownKeys(t)}const bg={get:xw,set:$w,deleteProperty:Bw,has:Uw,ownKeys:Hw},Vw={get:Lw,set(t,e){return!0},deleteProperty(t,e){return!0}},Ww=_t({},bg,{get:Dw,set:Fw}),ru=t=>t,xa=t=>Reflect.getPrototypeOf(t);function Mo(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ae(t),r=Ae(e);e!==r&&!n&&Rt(s,"get",e),!n&&Rt(s,"get",r);const{has:o}=xa(s),a=i?ru:n?lu:$r;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function $o(t,e=!1){const n=this.__v_raw,i=Ae(n),s=Ae(t);return t!==s&&!e&&Rt(i,"has",t),!e&&Rt(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Fo(t,e=!1){return t=t.__v_raw,!e&&Rt(Ae(t),"iterate",bi),Reflect.get(t,"size",t)}function ef(t){t=Ae(t);const e=Ae(this);return xa(e).has.call(e,t)||(e.add(t),In(e,"add",t,t)),this}function tf(t,e){e=Ae(e);const n=Ae(this),{has:i,get:s}=xa(n);let r=i.call(n,t);r||(t=Ae(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Lr(e,o)&&In(n,"set",t,e):In(n,"add",t,e),this}function nf(t){const e=Ae(this),{has:n,get:i}=xa(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&In(e,"delete",t,void 0),r}function sf(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function Bo(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ae(o),c=e?ru:t?lu:$r;return!t&&Rt(a,"iterate",bi),o.forEach((u,d)=>i.call(s,c(u),c(d),r))}}function Uo(t,e,n){return function(...i){const s=this.__v_raw,r=Ae(s),o=rs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...i),d=n?ru:e?lu:$r;return!e&&Rt(r,"iterate",c?Jl:bi),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function jw(){const t={get(r){return Mo(this,r)},get size(){return Fo(this)},has:$o,add:ef,set:tf,delete:nf,clear:sf,forEach:Bo(!1,!1)},e={get(r){return Mo(this,r,!1,!0)},get size(){return Fo(this)},has:$o,add:ef,set:tf,delete:nf,clear:sf,forEach:Bo(!1,!0)},n={get(r){return Mo(this,r,!0)},get size(){return Fo(this,!0)},has(r){return $o.call(this,r,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Bo(!0,!1)},i={get(r){return Mo(this,r,!0,!0)},get size(){return Fo(this,!0)},has(r){return $o.call(this,r,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Uo(r,!1,!1),n[r]=Uo(r,!0,!1),e[r]=Uo(r,!1,!0),i[r]=Uo(r,!0,!0)}),[t,n,e,i]}const[qw,Kw,zw,Gw]=jw();function ou(t,e){const n=e?t?Gw:zw:t?Kw:qw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ce(n,s)&&s in i?n:i,s,r)}const Yw={get:ou(!1,!1)},Qw={get:ou(!1,!0)},Xw={get:ou(!0,!1)},wg=new WeakMap,Cg=new WeakMap,Tg=new WeakMap,Jw=new WeakMap;function Zw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eC(t){return t.__v_skip||!Object.isExtensible(t)?0:Zw(Iw(t))}function Ls(t){return Mr(t)?t:au(t,!1,bg,Yw,wg)}function tC(t){return au(t,!1,Ww,Qw,Cg)}function Ig(t){return au(t,!0,Vw,Xw,Tg)}function au(t,e,n,i,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=eC(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function zn(t){return Mr(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Mr(t){return!!(t&&t.__v_isReadonly)}function Ag(t){return!!(t&&t.__v_isShallow)}function Sg(t){return zn(t)||Mr(t)}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function fs(t){return Zo(t,"__v_skip",!0),t}const $r=t=>Qe(t)?Ls(t):t,lu=t=>Qe(t)?Ig(t):t;function Og(t){Kn&&rn&&(t=Ae(t),vg(t.dep||(t.dep=nu())))}function Ng(t,e){t=Ae(t),t.dep&&Zl(t.dep)}function qe(t){return!!(t&&t.__v_isRef===!0)}function cu(t){return Pg(t,!1)}function nC(t){return Pg(t,!0)}function Pg(t,e){return qe(t)?t:new iC(t,e)}class iC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:$r(e)}get value(){return Og(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:$r(e),Ng(this))}}function vr(t){return qe(t)?t.value:t}const sC={get:(t,e,n)=>vr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Rg(t){return zn(t)?t:new Proxy(t,sC)}function rC(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=aC(t,n);return e}class oC{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function aC(t,e,n){const i=t[e];return qe(i)?i:new oC(t,e,n)}class lC{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new iu(e,()=>{this._dirty||(this._dirty=!0,Ng(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ae(this);return Og(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cC(t,e,n=!1){let i,s;const r=ce(t);return r?(i=t,s=qt):(i=t.get,s=t.set),new lC(i,s,r||!s,n)}Promise.resolve();function Gn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Da(r,e,n)}return s}function Kt(t,e,n,i){if(ce(t)){const r=Gn(t,e,n,i);return r&&ug(r)&&r.catch(o=>{Da(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Kt(t[r],e,n,i));return s}function Da(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Gn(c,null,10,[t,o,a]);return}}uC(t,n,s,i)}function uC(t,e,n,i=!0){console.error(t)}let ea=!1,ec=!1;const Ot=[];let vn=0;const yr=[];let gr=null,Xi=0;const Er=[];let $n=null,Ji=0;const kg=Promise.resolve();let uu=null,tc=null;function du(t){const e=uu||kg;return t?e.then(this?t.bind(this):t):e}function dC(t){let e=vn+1,n=Ot.length;for(;e<n;){const i=e+n>>>1;Fr(Ot[i])<t?e=i+1:n=i}return e}function xg(t){(!Ot.length||!Ot.includes(t,ea&&t.allowRecurse?vn+1:vn))&&t!==tc&&(t.id==null?Ot.push(t):Ot.splice(dC(t.id),0,t),Dg())}function Dg(){!ea&&!ec&&(ec=!0,uu=kg.then($g))}function hC(t){const e=Ot.indexOf(t);e>vn&&Ot.splice(e,1)}function Lg(t,e,n,i){se(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Dg()}function fC(t){Lg(t,gr,yr,Xi)}function pC(t){Lg(t,$n,Er,Ji)}function hu(t,e=null){if(yr.length){for(tc=e,gr=[...new Set(yr)],yr.length=0,Xi=0;Xi<gr.length;Xi++)gr[Xi]();gr=null,Xi=0,tc=null,hu(t,e)}}function Mg(t){if(Er.length){const e=[...new Set(Er)];if(Er.length=0,$n){$n.push(...e);return}for($n=e,$n.sort((n,i)=>Fr(n)-Fr(i)),Ji=0;Ji<$n.length;Ji++)$n[Ji]();$n=null,Ji=0}}const Fr=t=>t.id==null?1/0:t.id;function $g(t){ec=!1,ea=!0,hu(t),Ot.sort((n,i)=>Fr(n)-Fr(i));const e=qt;try{for(vn=0;vn<Ot.length;vn++){const n=Ot[vn];n&&n.active!==!1&&Gn(n,null,14)}}finally{vn=0,Ot.length=0,Mg(),ea=!1,uu=null,(Ot.length||yr.length||Er.length)&&$g(t)}}function gC(t,e,...n){const i=t.vnode.props||Fe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=i[d]||Fe;p?s=n.map(v=>v.trim()):f&&(s=n.map(Yl))}let a,c=i[a=Al(e)]||i[a=Al(cn(e))];!c&&r&&(c=i[a=Al(ks(e))]),c&&Kt(c,t,6,s);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Kt(u,t,6,s)}}function Fg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ce(t)){const c=u=>{const d=Fg(u,e,!0);d&&(a=!0,_t(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(i.set(t,null),null):(se(r)?r.forEach(c=>o[c]=null):_t(o,r),i.set(t,o),o)}function fu(t,e){return!t||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,ks(e))||Ce(t,e))}let Mt=null,La=null;function ta(t){const e=Mt;return Mt=t,La=t&&t.type.__scopeId||null,e}function oL(t){La=t}function aL(){La=null}function _C(t,e=Mt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&pf(-1);const r=ta(e),o=t(...s);return ta(r),i._d&&pf(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Sl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:f,data:p,setupState:v,ctx:E,inheritAttrs:w}=t;let A,N;const M=ta(t);try{if(n.shapeFlag&4){const F=s||i;A=sn(d.call(F,F,f,r,v,p,E)),N=c}else{const F=e;A=sn(F.length>1?F(r,{attrs:c,slots:a,emit:u}):F(r,null)),N=e.props?c:mC(c)}}catch(F){wr.length=0,Da(F,t,1),A=Nt(Si)}let U=A;if(N&&w!==!1){const F=Object.keys(N),{shapeFlag:Y}=U;F.length&&Y&7&&(o&&F.some(Jc)&&(N=vC(N,o)),U=Br(U,N))}return n.dirs&&(U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,ta(M),A}const mC=t=>{let e;for(const n in t)(n==="class"||n==="style"||Na(n))&&((e||(e={}))[n]=t[n]);return e},vC=(t,e)=>{const n={};for(const i in t)(!Jc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function yC(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?rf(i,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==i[p]&&!fu(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?rf(i,o,u):!0:!!o;return!1}function rf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!fu(n,r))return!0}return!1}function EC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bC=t=>t.__isSuspense;function wC(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):pC(t)}function zo(t,e){if(et){let n=et.provides;const i=et.parent&&et.parent.provides;i===n&&(n=et.provides=Object.create(i)),n[t]=e}}function wn(t,e,n=!1){const i=et||Mt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(i.proxy):e}}const of={};function br(t,e,n){return Bg(t,e,n)}function Bg(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Fe){const a=et;let c,u=!1,d=!1;if(qe(t)?(c=()=>t.value,u=Ag(t)):zn(t)?(c=()=>t,i=!0):se(t)?(d=!0,u=t.some(zn),c=()=>t.map(N=>{if(qe(N))return N.value;if(zn(N))return yi(N);if(ce(N))return Gn(N,a,2)})):ce(t)?e?c=()=>Gn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Kt(t,a,3,[p])}:c=qt,e&&i){const N=c;c=()=>yi(N())}let f,p=N=>{f=A.onStop=()=>{Gn(N,a,4)}};if(Ur)return p=qt,e?n&&Kt(e,a,3,[c(),d?[]:void 0,p]):c(),qt;let v=d?[]:of;const E=()=>{if(!!A.active)if(e){const N=A.run();(i||u||(d?N.some((M,U)=>Lr(M,v[U])):Lr(N,v)))&&(f&&f(),Kt(e,a,3,[N,v===of?void 0:v,p]),v=N)}else A.run()};E.allowRecurse=!!e;let w;s==="sync"?w=E:s==="post"?w=()=>vt(E,a&&a.suspense):w=()=>{!a||a.isMounted?fC(E):E()};const A=new iu(c,w);return e?n?E():v=A.run():s==="post"?vt(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Zc(a.scope.effects,A)}}function CC(t,e,n){const i=this.proxy,s=nt(t)?t.includes(".")?Ug(i,t):()=>i[t]:t.bind(i,i);let r;ce(e)?r=e:(r=e.handler,n=e);const o=et;ps(this);const a=Bg(s,r.bind(i),n);return o?ps(o):Ci(),a}function Ug(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function yi(t,e){if(!Qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))yi(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)yi(t[n],e);else if(cg(t)||rs(t))t.forEach(n=>{yi(n,e)});else if(hg(t))for(const n in t)yi(t[n],e);return t}function Hg(t){return ce(t)?{setup:t,name:t.name}:t}const nc=t=>!!t.type.__asyncLoader,Vg=t=>t.type.__isKeepAlive;function TC(t,e){Wg(t,"a",e)}function IC(t,e){Wg(t,"da",e)}function Wg(t,e,n=et){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Vg(s.parent.vnode)&&AC(i,e,n,s),s=s.parent}}function AC(t,e,n,i){const s=Ma(e,t,i,!0);pu(()=>{Zc(i[e],s)},n)}function Ma(t,e,n=et,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xs(),ps(n);const a=Kt(e,n,t,o);return Ci(),Ds(),a});return i?s.unshift(r):s.push(r),r}}const On=t=>(e,n=et)=>(!Ur||t==="sp")&&Ma(t,e,n),SC=On("bm"),OC=On("m"),NC=On("bu"),PC=On("u"),RC=On("bum"),pu=On("um"),kC=On("sp"),xC=On("rtg"),DC=On("rtc");function LC(t,e=et){Ma("ec",t,e)}let ic=!0;function MC(t){const e=qg(t),n=t.proxy,i=t.ctx;ic=!1,e.beforeCreate&&af(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:v,updated:E,activated:w,deactivated:A,beforeDestroy:N,beforeUnmount:M,destroyed:U,unmounted:F,render:Y,renderTracked:H,renderTriggered:K,errorCaptured:ue,serverPrefetch:de,expose:X,inheritAttrs:oe,components:Te,directives:Oe,filters:Pe}=e;if(u&&$C(u,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const me=o[ae];ce(me)&&(i[ae]=me.bind(n))}if(s){const ae=s.call(n,n);Qe(ae)&&(t.data=Ls(ae))}if(ic=!0,r)for(const ae in r){const me=r[ae],He=ce(me)?me.bind(n,n):ce(me.get)?me.get.bind(n,n):qt,Ct=!ce(me)&&ce(me.set)?me.set.bind(n):qt,dt=Vt({get:He,set:Ct});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Ye=>dt.value=Ye})}if(a)for(const ae in a)jg(a[ae],i,n,ae);if(c){const ae=ce(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(me=>{zo(me,ae[me])})}d&&af(d,t,"c");function ve(ae,me){se(me)?me.forEach(He=>ae(He.bind(n))):me&&ae(me.bind(n))}if(ve(SC,f),ve(OC,p),ve(NC,v),ve(PC,E),ve(TC,w),ve(IC,A),ve(LC,ue),ve(DC,H),ve(xC,K),ve(RC,M),ve(pu,F),ve(kC,de),se(X))if(X.length){const ae=t.exposed||(t.exposed={});X.forEach(me=>{Object.defineProperty(ae,me,{get:()=>n[me],set:He=>n[me]=He})})}else t.exposed||(t.exposed={});Y&&t.render===qt&&(t.render=Y),oe!=null&&(t.inheritAttrs=oe),Te&&(t.components=Te),Oe&&(t.directives=Oe)}function $C(t,e,n=qt,i=!1){se(t)&&(t=sc(t));for(const s in t){const r=t[s];let o;Qe(r)?"default"in r?o=wn(r.from||s,r.default,!0):o=wn(r.from||s):o=wn(r),qe(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function af(t,e,n){Kt(se(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function jg(t,e,n,i){const s=i.includes(".")?Ug(n,i):()=>n[i];if(nt(t)){const r=e[t];ce(r)&&br(s,r)}else if(ce(t))br(s,t.bind(n));else if(Qe(t))if(se(t))t.forEach(r=>jg(r,e,n,i));else{const r=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(r)&&br(s,r,t)}}function qg(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(u=>na(c,u,o,!0)),na(c,e,o)),r.set(e,c),c}function na(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&na(t,r,n,!0),s&&s.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=FC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FC={data:lf,props:gi,emits:gi,methods:gi,computed:gi,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:gi,directives:gi,watch:UC,provide:lf,inject:BC};function lf(t,e){return e?t?function(){return _t(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function BC(t,e){return gi(sc(t),sc(e))}function sc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?_t(_t(Object.create(null),t),e):e}function UC(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const i in e)n[i]=ht(t[i],e[i]);return n}function HC(t,e,n,i=!1){const s={},r={};Zo(r,$a,1),t.propsDefaults=Object.create(null),Kg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:tC(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function VC(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ae(s),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];const v=e[p];if(c)if(Ce(r,p))v!==r[p]&&(r[p]=v,u=!0);else{const E=cn(p);s[E]=rc(c,a,E,v,t,!1)}else v!==r[p]&&(r[p]=v,u=!0)}}}else{Kg(t,e,s,r)&&(u=!0);let d;for(const f in a)(!e||!Ce(e,f)&&((d=ks(f))===f||!Ce(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=rc(c,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ce(e,f)&&!0)&&(delete r[f],u=!0)}u&&In(t,"set","$attrs")}function Kg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(qo(c))continue;const u=e[c];let d;s&&Ce(s,d=cn(c))?!r||!r.includes(d)?n[d]=u:(a||(a={}))[d]=u:fu(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=Ae(n),u=a||Fe;for(let d=0;d<r.length;d++){const f=r[d];n[f]=rc(s,c,f,u[f],t,!Ce(u,f))}}return o}function rc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&ce(c)){const{propsDefaults:u}=s;n in u?i=u[n]:(ps(s),i=u[n]=c.call(null,e),Ci())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ks(n))&&(i=!0))}return i}function zg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!ce(t)){const d=f=>{c=!0;const[p,v]=zg(f,e,!0);_t(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return i.set(t,ss),ss;if(se(r))for(let d=0;d<r.length;d++){const f=cn(r[d]);cf(f)&&(o[f]=Fe)}else if(r)for(const d in r){const f=cn(d);if(cf(f)){const p=r[d],v=o[f]=se(p)||ce(p)?{type:p}:p;if(v){const E=hf(Boolean,v.type),w=hf(String,v.type);v[0]=E>-1,v[1]=w<0||E<w,(E>-1||Ce(v,"default"))&&a.push(f)}}}const u=[o,a];return i.set(t,u),u}function cf(t){return t[0]!=="$"}function uf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function df(t,e){return uf(t)===uf(e)}function hf(t,e){return se(e)?e.findIndex(n=>df(n,t)):ce(e)&&df(e,t)?0:-1}const Gg=t=>t[0]==="_"||t==="$stable",gu=t=>se(t)?t.map(sn):[sn(t)],WC=(t,e,n)=>{const i=_C((...s)=>gu(e(...s)),n);return i._c=!1,i},Yg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Gg(s))continue;const r=t[s];if(ce(r))e[s]=WC(s,r,i);else if(r!=null){const o=gu(r);e[s]=()=>o}}},Qg=(t,e)=>{const n=gu(e);t.slots.default=()=>n},jC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ae(e),Zo(e,"_",n)):Yg(e,t.slots={})}else t.slots={},e&&Qg(t,e);Zo(t.slots,$a,1)},qC=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(_t(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Yg(e,s)),o=e}else e&&(Qg(t,e),o={default:1});if(r)for(const a in s)!Gg(a)&&!(a in o)&&delete s[a]};function lL(t,e){const n=Mt;if(n===null)return t;const i=n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,u=Fe]=e[r];ce(o)&&(o={mounted:o,updated:o}),o.deep&&yi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function hi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(xs(),Kt(c,n,8,[t.el,a,t,e]),Ds())}}function Xg(){return{app:null,config:{isNativeTag:ww,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KC=0;function zC(t,e){return function(i,s=null){s!=null&&!Qe(s)&&(s=null);const r=Xg(),o=new Set;let a=!1;const c=r.app={_uid:KC++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:mT,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...d)):ce(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!a){const p=Nt(i,s);return p.appContext=r,d&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,vu(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c}};return c}}function oc(t,e,n,i,s=!1){if(se(t)){t.forEach((p,v)=>oc(p,e&&(se(e)?e[v]:e),n,i,s));return}if(nc(i)&&!s)return;const r=i.shapeFlag&4?vu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,u=e&&e.r,d=a.refs===Fe?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(nt(u)?(d[u]=null,Ce(f,u)&&(f[u]=null)):qe(u)&&(u.value=null)),ce(c))Gn(c,a,12,[o,d]);else{const p=nt(c),v=qe(c);if(p||v){const E=()=>{if(t.f){const w=p?d[c]:c.value;s?se(w)&&Zc(w,r):se(w)?w.includes(r)||w.push(r):p?d[c]=[r]:(c.value=[r],t.k&&(d[t.k]=c.value))}else p?(d[c]=o,Ce(f,c)&&(f[c]=o)):qe(c)&&(c.value=o,t.k&&(d[t.k]=o))};o?(E.id=-1,vt(E,n)):E()}}}const vt=wC;function GC(t){return YC(t)}function YC(t,e){const n=Ow();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:v=qt,cloneNode:E,insertStaticContent:w}=t,A=(g,y,T,P=null,O=null,D=null,V=!1,k=null,$=!!y.dynamicChildren)=>{if(g===y)return;g&&!lr(g,y)&&(P=j(g),Ge(g,O,D,!0),g=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:R,ref:z,shapeFlag:q}=y;switch(R){case _u:N(g,y,T,P);break;case Si:M(g,y,T,P);break;case Ol:g==null&&U(y,T,P,V);break;case mn:Oe(g,y,T,P,O,D,V,k,$);break;default:q&1?H(g,y,T,P,O,D,V,k,$):q&6?Pe(g,y,T,P,O,D,V,k,$):(q&64||q&128)&&R.process(g,y,T,P,O,D,V,k,$,we)}z!=null&&O&&oc(z,g&&g.ref,D,y||g,!y)},N=(g,y,T,P)=>{if(g==null)i(y.el=a(y.children),T,P);else{const O=y.el=g.el;y.children!==g.children&&u(O,y.children)}},M=(g,y,T,P)=>{g==null?i(y.el=c(y.children||""),T,P):y.el=g.el},U=(g,y,T,P)=>{[g.el,g.anchor]=w(g.children,y,T,P,g.el,g.anchor)},F=({el:g,anchor:y},T,P)=>{let O;for(;g&&g!==y;)O=p(g),i(g,T,P),g=O;i(y,T,P)},Y=({el:g,anchor:y})=>{let T;for(;g&&g!==y;)T=p(g),s(g),g=T;s(y)},H=(g,y,T,P,O,D,V,k,$)=>{V=V||y.type==="svg",g==null?K(y,T,P,O,D,V,k,$):X(g,y,O,D,V,k,$)},K=(g,y,T,P,O,D,V,k)=>{let $,R;const{type:z,props:q,shapeFlag:G,transition:Q,patchFlag:fe,dirs:Re}=g;if(g.el&&E!==void 0&&fe===-1)$=g.el=E(g.el);else{if($=g.el=o(g.type,D,q&&q.is,q),G&8?d($,g.children):G&16&&de(g.children,$,null,P,O,D&&z!=="foreignObject",V,k),Re&&hi(g,null,P,"created"),q){for(const De in q)De!=="value"&&!qo(De)&&r($,De,null,q[De],D,g.children,P,O,B);"value"in q&&r($,"value",null,q.value),(R=q.onVnodeBeforeMount)&&nn(R,P,g)}ue($,g,g.scopeId,V,P)}Re&&hi(g,null,P,"beforeMount");const Ne=(!O||O&&!O.pendingBranch)&&Q&&!Q.persisted;Ne&&Q.beforeEnter($),i($,y,T),((R=q&&q.onVnodeMounted)||Ne||Re)&&vt(()=>{R&&nn(R,P,g),Ne&&Q.enter($),Re&&hi(g,null,P,"mounted")},O)},ue=(g,y,T,P,O)=>{if(T&&v(g,T),P)for(let D=0;D<P.length;D++)v(g,P[D]);if(O){let D=O.subTree;if(y===D){const V=O.vnode;ue(g,V,V.scopeId,V.slotScopeIds,O.parent)}}},de=(g,y,T,P,O,D,V,k,$=0)=>{for(let R=$;R<g.length;R++){const z=g[R]=k?Fn(g[R]):sn(g[R]);A(null,z,y,T,P,O,D,V,k)}},X=(g,y,T,P,O,D,V)=>{const k=y.el=g.el;let{patchFlag:$,dynamicChildren:R,dirs:z}=y;$|=g.patchFlag&16;const q=g.props||Fe,G=y.props||Fe;let Q;T&&fi(T,!1),(Q=G.onVnodeBeforeUpdate)&&nn(Q,T,y,g),z&&hi(y,g,T,"beforeUpdate"),T&&fi(T,!0);const fe=O&&y.type!=="foreignObject";if(R?oe(g.dynamicChildren,R,k,T,P,fe,D):V||He(g,y,k,null,T,P,fe,D,!1),$>0){if($&16)Te(k,y,q,G,T,P,O);else if($&2&&q.class!==G.class&&r(k,"class",null,G.class,O),$&4&&r(k,"style",q.style,G.style,O),$&8){const Re=y.dynamicProps;for(let Ne=0;Ne<Re.length;Ne++){const De=Re[Ne],It=q[De],pn=G[De];(pn!==It||De==="value")&&r(k,De,It,pn,O,g.children,T,P,B)}}$&1&&g.children!==y.children&&d(k,y.children)}else!V&&R==null&&Te(k,y,q,G,T,P,O);((Q=G.onVnodeUpdated)||z)&&vt(()=>{Q&&nn(Q,T,y,g),z&&hi(y,g,T,"updated")},P)},oe=(g,y,T,P,O,D,V)=>{for(let k=0;k<y.length;k++){const $=g[k],R=y[k],z=$.el&&($.type===mn||!lr($,R)||$.shapeFlag&70)?f($.el):T;A($,R,z,null,P,O,D,V,!0)}},Te=(g,y,T,P,O,D,V)=>{if(T!==P){for(const k in P){if(qo(k))continue;const $=P[k],R=T[k];$!==R&&k!=="value"&&r(g,k,R,$,V,y.children,O,D,B)}if(T!==Fe)for(const k in T)!qo(k)&&!(k in P)&&r(g,k,T[k],null,V,y.children,O,D,B);"value"in P&&r(g,"value",T.value,P.value)}},Oe=(g,y,T,P,O,D,V,k,$)=>{const R=y.el=g?g.el:a(""),z=y.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:Q}=y;Q&&(k=k?k.concat(Q):Q),g==null?(i(R,T,P),i(z,T,P),de(y.children,T,z,O,D,V,k,$)):q>0&&q&64&&G&&g.dynamicChildren?(oe(g.dynamicChildren,G,T,O,D,V,k),(y.key!=null||O&&y===O.subTree)&&Jg(g,y,!0)):He(g,y,T,z,O,D,V,k,$)},Pe=(g,y,T,P,O,D,V,k,$)=>{y.slotScopeIds=k,g==null?y.shapeFlag&512?O.ctx.activate(y,T,P,V,$):mt(y,T,P,O,D,V,$):ve(g,y,$)},mt=(g,y,T,P,O,D,V)=>{const k=g.component=uT(g,P,O);if(Vg(g)&&(k.ctx.renderer=we),dT(k),k.asyncDep){if(O&&O.registerDep(k,ae),!g.el){const $=k.subTree=Nt(Si);M(null,$,y,T)}return}ae(k,g,y,T,O,D,V)},ve=(g,y,T)=>{const P=y.component=g.component;if(yC(g,y,T))if(P.asyncDep&&!P.asyncResolved){me(P,y,T);return}else P.next=y,hC(P.update),P.update();else y.component=g.component,y.el=g.el,P.vnode=y},ae=(g,y,T,P,O,D,V)=>{const k=()=>{if(g.isMounted){let{next:z,bu:q,u:G,parent:Q,vnode:fe}=g,Re=z,Ne;fi(g,!1),z?(z.el=fe.el,me(g,z,V)):z=fe,q&&Ko(q),(Ne=z.props&&z.props.onVnodeBeforeUpdate)&&nn(Ne,Q,z,fe),fi(g,!0);const De=Sl(g),It=g.subTree;g.subTree=De,A(It,De,f(It.el),j(It),g,O,D),z.el=De.el,Re===null&&EC(g,De.el),G&&vt(G,O),(Ne=z.props&&z.props.onVnodeUpdated)&&vt(()=>nn(Ne,Q,z,fe),O)}else{let z;const{el:q,props:G}=y,{bm:Q,m:fe,parent:Re}=g,Ne=nc(y);if(fi(g,!1),Q&&Ko(Q),!Ne&&(z=G&&G.onVnodeBeforeMount)&&nn(z,Re,y),fi(g,!0),q&&te){const De=()=>{g.subTree=Sl(g),te(q,g.subTree,g,O,null)};Ne?y.type.__asyncLoader().then(()=>!g.isUnmounted&&De()):De()}else{const De=g.subTree=Sl(g);A(null,De,T,P,g,O,D),y.el=De.el}if(fe&&vt(fe,O),!Ne&&(z=G&&G.onVnodeMounted)){const De=y;vt(()=>nn(z,Re,De),O)}y.shapeFlag&256&&g.a&&vt(g.a,O),g.isMounted=!0,y=T=P=null}},$=g.effect=new iu(k,()=>xg(g.update),g.scope),R=g.update=$.run.bind($);R.id=g.uid,fi(g,!0),R()},me=(g,y,T)=>{y.component=g;const P=g.vnode.props;g.vnode=y,g.next=null,VC(g,y.props,P,T),qC(g,y.children,T),xs(),hu(void 0,g.update),Ds()},He=(g,y,T,P,O,D,V,k,$=!1)=>{const R=g&&g.children,z=g?g.shapeFlag:0,q=y.children,{patchFlag:G,shapeFlag:Q}=y;if(G>0){if(G&128){dt(R,q,T,P,O,D,V,k,$);return}else if(G&256){Ct(R,q,T,P,O,D,V,k,$);return}}Q&8?(z&16&&B(R,O,D),q!==R&&d(T,q)):z&16?Q&16?dt(R,q,T,P,O,D,V,k,$):B(R,O,D,!0):(z&8&&d(T,""),Q&16&&de(q,T,P,O,D,V,k,$))},Ct=(g,y,T,P,O,D,V,k,$)=>{g=g||ss,y=y||ss;const R=g.length,z=y.length,q=Math.min(R,z);let G;for(G=0;G<q;G++){const Q=y[G]=$?Fn(y[G]):sn(y[G]);A(g[G],Q,T,null,O,D,V,k,$)}R>z?B(g,O,D,!0,!1,q):de(y,T,P,O,D,V,k,$,q)},dt=(g,y,T,P,O,D,V,k,$)=>{let R=0;const z=y.length;let q=g.length-1,G=z-1;for(;R<=q&&R<=G;){const Q=g[R],fe=y[R]=$?Fn(y[R]):sn(y[R]);if(lr(Q,fe))A(Q,fe,T,null,O,D,V,k,$);else break;R++}for(;R<=q&&R<=G;){const Q=g[q],fe=y[G]=$?Fn(y[G]):sn(y[G]);if(lr(Q,fe))A(Q,fe,T,null,O,D,V,k,$);else break;q--,G--}if(R>q){if(R<=G){const Q=G+1,fe=Q<z?y[Q].el:P;for(;R<=G;)A(null,y[R]=$?Fn(y[R]):sn(y[R]),T,fe,O,D,V,k,$),R++}}else if(R>G)for(;R<=q;)Ge(g[R],O,D,!0),R++;else{const Q=R,fe=R,Re=new Map;for(R=fe;R<=G;R++){const it=y[R]=$?Fn(y[R]):sn(y[R]);it.key!=null&&Re.set(it.key,R)}let Ne,De=0;const It=G-fe+1;let pn=!1,Co=0;const Ht=new Array(It);for(R=0;R<It;R++)Ht[R]=0;for(R=Q;R<=q;R++){const it=g[R];if(De>=It){Ge(it,O,D,!0);continue}let ke;if(it.key!=null)ke=Re.get(it.key);else for(Ne=fe;Ne<=G;Ne++)if(Ht[Ne-fe]===0&&lr(it,y[Ne])){ke=Ne;break}ke===void 0?Ge(it,O,D,!0):(Ht[ke-fe]=R+1,ke>=Co?Co=ke:pn=!0,A(it,y[ke],T,null,O,D,V,k,$),De++)}const Ys=pn?QC(Ht):ss;for(Ne=Ys.length-1,R=It-1;R>=0;R--){const it=fe+R,ke=y[it],To=it+1<z?y[it+1].el:P;Ht[R]===0?A(null,ke,T,To,O,D,V,k,$):pn&&(Ne<0||R!==Ys[Ne]?Ye(ke,T,To,2):Ne--)}}},Ye=(g,y,T,P,O=null)=>{const{el:D,type:V,transition:k,children:$,shapeFlag:R}=g;if(R&6){Ye(g.component.subTree,y,T,P);return}if(R&128){g.suspense.move(y,T,P);return}if(R&64){V.move(g,y,T,we);return}if(V===mn){i(D,y,T);for(let q=0;q<$.length;q++)Ye($[q],y,T,P);i(g.anchor,y,T);return}if(V===Ol){F(g,y,T);return}if(P!==2&&R&1&&k)if(P===0)k.beforeEnter(D),i(D,y,T),vt(()=>k.enter(D),O);else{const{leave:q,delayLeave:G,afterLeave:Q}=k,fe=()=>i(D,y,T),Re=()=>{q(D,()=>{fe(),Q&&Q()})};G?G(D,fe,Re):Re()}else i(D,y,T)},Ge=(g,y,T,P=!1,O=!1)=>{const{type:D,props:V,ref:k,children:$,dynamicChildren:R,shapeFlag:z,patchFlag:q,dirs:G}=g;if(k!=null&&oc(k,null,T,g,!0),z&256){y.ctx.deactivate(g);return}const Q=z&1&&G,fe=!nc(g);let Re;if(fe&&(Re=V&&V.onVnodeBeforeUnmount)&&nn(Re,y,g),z&6)W(g.component,T,P);else{if(z&128){g.suspense.unmount(T,P);return}Q&&hi(g,null,y,"beforeUnmount"),z&64?g.type.remove(g,y,T,O,we,P):R&&(D!==mn||q>0&&q&64)?B(R,y,T,!1,!0):(D===mn&&q&384||!O&&z&16)&&B($,y,T),P&&Tt(g)}(fe&&(Re=V&&V.onVnodeUnmounted)||Q)&&vt(()=>{Re&&nn(Re,y,g),Q&&hi(g,null,y,"unmounted")},T)},Tt=g=>{const{type:y,el:T,anchor:P,transition:O}=g;if(y===mn){S(T,P);return}if(y===Ol){Y(g);return}const D=()=>{s(T),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:V,delayLeave:k}=O,$=()=>V(T,D);k?k(g.el,D,$):$()}else D()},S=(g,y)=>{let T;for(;g!==y;)T=p(g),s(g),g=T;s(y)},W=(g,y,T)=>{const{bum:P,scope:O,update:D,subTree:V,um:k}=g;P&&Ko(P),O.stop(),D&&(D.active=!1,Ge(V,g,y,T)),k&&vt(k,y),vt(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},B=(g,y,T,P=!1,O=!1,D=0)=>{for(let V=D;V<g.length;V++)Ge(g[V],y,T,P,O)},j=g=>g.shapeFlag&6?j(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),ye=(g,y,T)=>{g==null?y._vnode&&Ge(y._vnode,null,null,!0):A(y._vnode||null,g,y,null,null,null,T),Mg(),y._vnode=g},we={p:A,um:Ge,m:Ye,r:Tt,mt,mc:de,pc:He,pbc:oe,n:j,o:t};let re,te;return e&&([re,te]=e(we)),{render:ye,hydrate:re,createApp:zC(ye,re)}}function fi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jg(t,e,n=!1){const i=t.children,s=e.children;if(se(i)&&se(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fn(s[r]),a.el=o.el),n||Jg(o,a))}}function QC(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const XC=t=>t.__isTeleport,Zg="components",JC="directives";function cL(t,e){return e_(Zg,t,!0,e)||t}const ZC=Symbol();function uL(t){return e_(JC,t)}function e_(t,e,n=!0,i=!1){const s=Mt||et;if(s){const r=s.type;if(t===Zg){const a=gT(r);if(a&&(a===e||a===cn(e)||a===ka(cn(e))))return r}const o=ff(s[t]||r[t],e)||ff(s.appContext[t],e);return!o&&i?r:o}}function ff(t,e){return t&&(t[e]||t[cn(e)]||t[ka(cn(e))])}const mn=Symbol(void 0),_u=Symbol(void 0),Si=Symbol(void 0),Ol=Symbol(void 0),wr=[];let wi=null;function eT(t=!1){wr.push(wi=t?null:[])}function tT(){wr.pop(),wi=wr[wr.length-1]||null}let ia=1;function pf(t){ia+=t}function t_(t){return t.dynamicChildren=ia>0?wi||ss:null,tT(),ia>0&&wi&&wi.push(t),t}function dL(t,e,n,i,s,r){return t_(i_(t,e,n,i,s,r,!0))}function nT(t,e,n,i,s){return t_(Nt(t,e,n,i,s,!0))}function ac(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const $a="__vInternal",n_=({key:t})=>t!=null?t:null,Go=({ref:t,ref_key:e,ref_for:n})=>t!=null?nt(t)||qe(t)||ce(t)?{i:Mt,r:t,k:e,f:!!n}:t:null;function i_(t,e=null,n=null,i=0,s=null,r=t===mn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&n_(e),ref:e&&Go(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(mu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),ia>0&&!o&&wi&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&wi.push(c),c}const Nt=iT;function iT(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ZC)&&(t=Si),ac(t)){const a=Br(t,e,!0);return n&&mu(a,n),a}if(_T(t)&&(t=t.__vccOpts),e){e=sT(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=Xc(a)),Qe(c)&&(Sg(c)&&!se(c)&&(c=_t({},c)),e.style=Qc(c))}const o=nt(t)?1:bC(t)?128:XC(t)?64:Qe(t)?4:ce(t)?2:0;return i_(t,e,n,i,s,o,r,!0)}function sT(t){return t?Sg(t)||$a in t?_t({},t):t:null}function Br(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?oT(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&n_(a),ref:e&&e.ref?n&&s?se(s)?s.concat(Go(e)):[s,Go(e)]:Go(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mn?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),el:t.el,anchor:t.anchor}}function rT(t=" ",e=0){return Nt(_u,null,t,e)}function hL(t="",e=!1){return e?(eT(),nT(Si,null,t)):Nt(Si,null,t)}function sn(t){return t==null||typeof t=="boolean"?Nt(Si):se(t)?Nt(mn,null,t.slice()):typeof t=="object"?Fn(t):Nt(_u,null,String(t))}function Fn(t){return t.el===null||t.memo?t:Br(t)}function mu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($a in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),i&64?(n=16,e=[rT(e)]):n=8);t.children=e,t.shapeFlag|=n}function oT(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Xc([e.class,i.class]));else if(s==="style")e.style=Qc([e.style,i.style]);else if(Na(s)){const r=e[s],o=i[s];o&&r!==o&&!(se(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function nn(t,e,n,i=null){Kt(t,e,7,[n,i])}function fL(t,e,n,i){let s;const r=n&&n[i];if(se(t)||nt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const lc=t=>t?r_(t)?vu(t)||t.proxy:lc(t.parent):null,sa=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$emit:t=>t.emit,$options:t=>qg(t),$forceUpdate:t=>()=>xg(t.update),$nextTick:t=>du.bind(t.proxy),$watch:t=>CC.bind(t)}),aT={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==Fe&&Ce(i,e))return o[e]=1,i[e];if(s!==Fe&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,r[e];if(n!==Fe&&Ce(n,e))return o[e]=4,n[e];ic&&(o[e]=0)}}const d=sa[e];let f,p;if(d)return e==="$attrs"&&Rt(t,"get",e),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Ce(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ce(p,e))return p[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==Fe&&Ce(s,e)?(s[e]=n,!0):i!==Fe&&Ce(i,e)?(i[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&Ce(t,o)||e!==Fe&&Ce(e,o)||(a=r[0])&&Ce(a,o)||Ce(i,o)||Ce(sa,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},lT=Xg();let cT=0;function uT(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||lT,r={uid:cT++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zg(i,s),emitsOptions:Fg(i,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gC.bind(null,r),t.ce&&t.ce(r),r}let et=null;const s_=()=>et||Mt,ps=t=>{et=t,t.scope.on()},Ci=()=>{et&&et.scope.off(),et=null};function r_(t){return t.vnode.shapeFlag&4}let Ur=!1;function dT(t,e=!1){Ur=e;const{props:n,children:i}=t.vnode,s=r_(t);HC(t,n,s,e),jC(t,i);const r=s?hT(t,e):void 0;return Ur=!1,r}function hT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fs(new Proxy(t.ctx,aT));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?pT(t):null;ps(t),xs();const r=Gn(i,t,0,[t.props,s]);if(Ds(),Ci(),ug(r)){if(r.then(Ci,Ci),e)return r.then(o=>{gf(t,o,e)}).catch(o=>{Da(o,t,0)});t.asyncDep=r}else gf(t,r,e)}else o_(t,e)}function gf(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=Rg(e)),o_(t,n)}let _f;function o_(t,e,n){const i=t.type;if(!t.render){if(!e&&_f&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,u=_t(_t({isCustomElement:r,delimiters:a},o),c);i.render=_f(s,u)}}t.render=i.render||qt}ps(t),xs(),MC(t),Ds(),Ci()}function fT(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function pT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=fT(t))},slots:t.slots,emit:t.emit,expose:e}}function vu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rg(fs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sa)return sa[n](t)}}))}function gT(t){return ce(t)&&t.displayName||t.name}function _T(t){return ce(t)&&"__vccOpts"in t}const Vt=(t,e)=>cC(t,e,Ur);function a_(t,e,n){const i=arguments.length;return i===2?Qe(e)&&!se(e)?ac(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ac(n)&&(n=[n]),Nt(t,e,n))}const mT="3.2.31",vT="http://www.w3.org/2000/svg",vi=typeof document!="undefined"?document:null,mf=vi&&vi.createElement("template"),yT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?vi.createElementNS(vT,t):vi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>vi.createTextNode(t),createComment:t=>vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{mf.innerHTML=i?`<svg>${t}</svg>`:t;const a=mf.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ET(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bT(t,e,n){const i=t.style,s=nt(n);if(n&&!s){for(const r in n)cc(i,r,n[r]);if(e&&!nt(e))for(const r in e)n[r]==null&&cc(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const vf=/\s*!important$/;function cc(t,e,n){if(se(n))n.forEach(i=>cc(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=wT(t,e);vf.test(n)?t.setProperty(ks(i),n.replace(vf,""),"important"):t[i]=n}}const yf=["Webkit","Moz","ms"],Nl={};function wT(t,e){const n=Nl[e];if(n)return n;let i=cn(e);if(i!=="filter"&&i in t)return Nl[e]=i;i=ka(i);for(let s=0;s<yf.length;s++){const r=yf[s]+i;if(r in t)return Nl[e]=r}return e}const Ef="http://www.w3.org/1999/xlink";function CT(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ef,e.slice(6,e.length)):t.setAttributeNS(Ef,e,n);else{const r=vw(e);n==null||r&&!ag(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function TT(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ag(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ra=Date.now,l_=!1;if(typeof window!="undefined"){ra()>document.createEvent("Event").timeStamp&&(ra=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);l_=!!(t&&Number(t[1])<=53)}let uc=0;const IT=Promise.resolve(),AT=()=>{uc=0},ST=()=>uc||(IT.then(AT),uc=ra());function Zi(t,e,n,i){t.addEventListener(e,n,i)}function OT(t,e,n,i){t.removeEventListener(e,n,i)}function NT(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=PT(e);if(i){const u=r[e]=RT(i,s);Zi(t,a,u,c)}else o&&(OT(t,a,o,c),r[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function PT(t){let e;if(bf.test(t)){e={};let n;for(;n=t.match(bf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ks(t.slice(2)),e]}function RT(t,e){const n=i=>{const s=i.timeStamp||ra();(l_||s>=n.attached-1)&&Kt(kT(i,n.value),e,5,[i])};return n.value=t,n.attached=ST(),n}function kT(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const wf=/^on[a-z]/,xT=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?ET(t,i,s):e==="style"?bT(t,n,i):Na(e)?Jc(e)||NT(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DT(t,e,i,s))?TT(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),CT(t,e,i,s))};function DT(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&nt(n)?!1:e in t}const Cf=t=>{const e=t.props["onUpdate:modelValue"];return se(e)?n=>Ko(e,n):e};function LT(t){t.target.composing=!0}function Tf(t){const e=t.target;e.composing&&(e.composing=!1,MT(e,"input"))}function MT(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const pL={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Cf(s);const r=i||s.props&&s.props.type==="number";Zi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=Yl(a)),t._assign(a)}),n&&Zi(t,"change",()=>{t.value=t.value.trim()}),e||(Zi(t,"compositionstart",LT),Zi(t,"compositionend",Tf),Zi(t,"change",Tf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=Cf(r),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Yl(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},$T=["ctrl","shift","alt","meta"],FT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$T.some(n=>t[`${n}Key`]&&!e.includes(n))},gL=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=FT[e[s]];if(r&&r(n,e))return}return t(n,...i)},BT=_t({patchProp:xT},yT);let If;function UT(){return If||(If=GC(BT))}const _L=(...t)=>{const e=UT().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=HT(i);if(!s)return;const r=e._component;!ce(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function HT(t){return nt(t)?document.querySelector(t):t}var VT=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let c_;const Fa=t=>c_=t,u_=Symbol();function dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cr||(Cr={}));function mL(){const t=pg(!0),e=t.run(()=>cu({}));let n=[],i=[];const s=fs({install(r){Fa(s),s._a=r,r.provide(u_,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!VT?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const d_=()=>{};function Af(t,e,n,i=d_){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&s_()&&pu(s),s}function Gi(t,...e){t.slice().forEach(n=>{n(...e)})}function hc(t,e){for(const n in e){const i=e[n],s=t[n];dc(s)&&dc(i)&&!qe(i)&&!zn(i)?t[n]=hc(s,i):t[n]=i}return t}const WT=Symbol();function jT(t){return!dc(t)||!t.hasOwnProperty(WT)}const{assign:_n}=Object;function qT(t){return!!(qe(t)&&t.effect)}function KT(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const d=rC(n.state.value[t]);return _n(d,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=fs(Vt(()=>{Fa(n);const v=n._s.get(t);return o[p].call(v,v)})),f),{}))}return c=h_(t,u,e,n),c.$reset=function(){const f=s?s():{};this.$patch(p=>{_n(p,f)})},c}function h_(t,e,n={},i,s){let r;const o=n.state,a=_n({actions:{}},n),c={deep:!0};let u,d,f=fs([]),p=fs([]),v;const E=i.state.value[t];!o&&!E&&(i.state.value[t]={}),cu({});function w(H){let K;u=d=!1,typeof H=="function"?(H(i.state.value[t]),K={type:Cr.patchFunction,storeId:t,events:v}):(hc(i.state.value[t],H),K={type:Cr.patchObject,payload:H,storeId:t,events:v}),du().then(()=>{u=!0}),d=!0,Gi(f,K,i.state.value[t])}const A=d_;function N(){r.stop(),f=[],p=[],i._s.delete(t)}function M(H,K){return function(){Fa(i);const ue=Array.from(arguments),de=[],X=[];function oe(Pe){de.push(Pe)}function Te(Pe){X.push(Pe)}Gi(p,{args:ue,name:H,store:F,after:oe,onError:Te});let Oe;try{Oe=K.apply(this&&this.$id===t?this:F,ue)}catch(Pe){throw Gi(X,Pe),Pe}return Oe instanceof Promise?Oe.then(Pe=>(Gi(de,Pe),Pe)).catch(Pe=>(Gi(X,Pe),Promise.reject(Pe))):(Gi(de,Oe),Oe)}}const U={_p:i,$id:t,$onAction:Af.bind(null,p),$patch:w,$reset:A,$subscribe(H,K={}){const ue=Af(f,H,K.detached,()=>de()),de=r.run(()=>br(()=>i.state.value[t],X=>{(K.flush==="sync"?d:u)&&H({storeId:t,type:Cr.direct,events:v},X)},_n({},c,K)));return ue},$dispose:N},F=Ls(_n({},U));i._s.set(t,F);const Y=i._e.run(()=>(r=pg(),r.run(()=>e())));for(const H in Y){const K=Y[H];if(qe(K)&&!qT(K)||zn(K))o||(E&&jT(K)&&(qe(K)?K.value=E[H]:hc(K,E[H])),i.state.value[t][H]=K);else if(typeof K=="function"){const ue=M(H,K);Y[H]=ue,a.actions[H]=K}}return _n(F,Y),_n(Ae(F),Y),Object.defineProperty(F,"$state",{get:()=>i.state.value[t],set:H=>{w(K=>{_n(K,H)})}}),i._p.forEach(H=>{_n(F,r.run(()=>H({store:F,app:i._a,pinia:i,options:a})))}),E&&o&&n.hydrate&&n.hydrate(F.$state,E),u=!0,d=!0,F}function vL(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const u=s_();return a=a||u&&wn(u_),a&&Fa(a),a=c_,a._s.has(i)||(r?h_(i,e,s,a):KT(i,s,a)),a._s.get(i)}return o.$id=i,o}var fc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function zT(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),e}var f_={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(fc,function(){function n(){var E=!1;return typeof navigator!="undefined"&&(E=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),E}var i=0,s=["ms","moz","webkit","o"];typeof window=="undefined"&&(fc.window={});for(var r=0;r<s.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[s[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[r]+"CancelAnimationFrame"]||window[s[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(E,w){var A=new Date().getTime(),N=Math.max(0,16-(A-i)),M=window.setTimeout(function(){E(A+N)},N);return i=A+N,M}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(E){clearTimeout(E)});var o=window.requestAnimationFrame,a=window.cancelAnimationFrame;function c(E){E.__currentTarget__=this.__container__,this.__resize__handler__.call(this,{width:this.offsetWidth,height:this.offsetHeight},E)}function u(E){var w=E.currentTarget||E.srcElement;w.__requestAnimationFrameID__&&a(w.__requestAnimationFrameID__),w.__requestAnimationFrameID__=o(c.bind(this,E))}function d(){document.attachEvent?this.__container__.attachEvent("onresize",c.bind(this)):this.contentDocument.defaultView.addEventListener("resize",u.bind(this))}function f(){var E=document.createElement("object");E.setAttribute("aria-hidden","true"),E.setAttribute("tabindex",-1);var w=`
    display: block !important; 
    position: absolute !important; 
    top: 0 !important; 
    left: 0 !important; 
    width: 100% !important; 
    height: 100% !important; 
    overflow: hidden !important; 
    pointer-events: none !important; 
    z-index: -1 !important; 
    opacity: 0 !important;
  `;return E.setAttribute("style",w),E.type="text/html",E}var p={beforeMount:function(w,A,N,M){w.__resizeTrigger__=f(),w.__resizeTrigger__.__container__=w,w.__resizeTrigger__.__resize__handler__=A.value,w.__resizeTrigger__.onload=d;var U=n();U&&w.appendChild(w.__resizeTrigger__),w.__resizeTrigger__.data="about:blank",!U&&w.appendChild(w.__resizeTrigger__)},mounted:function(w,A,N,M){getComputedStyle(w).position==="static"&&w.style.setProperty("position","relative","important")},beforeUpdate:function(w,A,N,M){},updated:function(w,A,N,M){for(var U=!1,F=0,Y=w.children.length;F<Y;F++)w.children[F]===w.__resizeTrigger__&&(U=!0);if(!U){var H=n();H&&w.appendChild(w.__resizeTrigger__),w.__resizeTrigger__.data="about:blank",!H&&w.appendChild(w.__resizeTrigger__)}},beforeUnmount:function(w,A,N,M){},unmounted:function(w,A,N,M){document.attachEvent?w.detachEvent("onresize",c):w.__resizeTrigger__&&w.__resizeTrigger__.contentDocument&&(w.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",u),w.__resizeTrigger__=!w.removeChild(w.__resizeTrigger__))}},v=p;return p.install=function(E){E.directive("resize",p)},t.exports=v,v})})(f_);var yL=f_.exports,GT={exports:{}},ft="top",kt="bottom",xt="right",pt="left",Ba="auto",Ms=[ft,kt,xt,pt],Oi="start",gs="end",p_="clippingParents",yu="viewport",es="popper",g_="reference",pc=Ms.reduce(function(t,e){return t.concat([e+"-"+Oi,e+"-"+gs])},[]),Eu=[].concat(Ms,[Ba]).reduce(function(t,e){return t.concat([e,e+"-"+Oi,e+"-"+gs])},[]),__="beforeRead",m_="read",v_="afterRead",y_="beforeMain",E_="main",b_="afterMain",w_="beforeWrite",C_="write",T_="afterWrite",I_=[__,m_,v_,y_,E_,b_,w_,C_,T_];function un(t){return t?(t.nodeName||"").toLowerCase():null}function Xt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _s(t){var e=Xt(t).Element;return t instanceof e||t instanceof Element}function Ft(t){var e=Xt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function A_(t){if(typeof ShadowRoot=="undefined")return!1;var e=Xt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function YT(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!Ft(r)||!un(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function QT(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(c,u){return c[u]="",c},{});!Ft(s)||!un(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}var bu={name:"applyStyles",enabled:!0,phase:"write",fn:YT,effect:QT,requires:["computeStyles"]};function on(t){return t.split("-")[0]}var Ti=Math.max,oa=Math.min,ms=Math.round;function vs(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),i=1,s=1;if(Ft(t)&&e){var r=t.offsetHeight,o=t.offsetWidth;o>0&&(i=ms(n.width)/o||1),r>0&&(s=ms(n.height)/r||1)}return{width:n.width/i,height:n.height/s,top:n.top/s,right:n.right/i,bottom:n.bottom/s,left:n.left/i,x:n.left/i,y:n.top/s}}function wu(t){var e=vs(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function S_(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&A_(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function An(t){return Xt(t).getComputedStyle(t)}function XT(t){return["table","td","th"].indexOf(un(t))>=0}function ni(t){return((_s(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ua(t){return un(t)==="html"?t:t.assignedSlot||t.parentNode||(A_(t)?t.host:null)||ni(t)}function Sf(t){return!Ft(t)||An(t).position==="fixed"?null:t.offsetParent}function JT(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&Ft(t)){var i=An(t);if(i.position==="fixed")return null}for(var s=Ua(t);Ft(s)&&["html","body"].indexOf(un(s))<0;){var r=An(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function to(t){for(var e=Xt(t),n=Sf(t);n&&XT(n)&&An(n).position==="static";)n=Sf(n);return n&&(un(n)==="html"||un(n)==="body"&&An(n).position==="static")?e:n||JT(t)||e}function Cu(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Tr(t,e,n){return Ti(t,oa(e,n))}function ZT(t,e,n){var i=Tr(t,e,n);return i>n?n:i}function O_(){return{top:0,right:0,bottom:0,left:0}}function N_(t){return Object.assign({},O_(),t)}function P_(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var eI=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,N_(typeof e!="number"?e:P_(e,Ms))};function tI(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=on(n.placement),c=Cu(a),u=[pt,xt].indexOf(a)>=0,d=u?"height":"width";if(!(!r||!o)){var f=eI(s.padding,n),p=wu(r),v=c==="y"?ft:pt,E=c==="y"?kt:xt,w=n.rects.reference[d]+n.rects.reference[c]-o[c]-n.rects.popper[d],A=o[c]-n.rects.reference[c],N=to(r),M=N?c==="y"?N.clientHeight||0:N.clientWidth||0:0,U=w/2-A/2,F=f[v],Y=M-p[d]-f[E],H=M/2-p[d]/2+U,K=Tr(F,H,Y),ue=c;n.modifiersData[i]=(e={},e[ue]=K,e.centerOffset=K-H,e)}}function nI(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||!S_(e.elements.popper,s)||(e.elements.arrow=s))}var R_={name:"arrow",enabled:!0,phase:"main",fn:tI,effect:nI,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ys(t){return t.split("-")[1]}var iI={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sI(t){var e=t.x,n=t.y,i=window,s=i.devicePixelRatio||1;return{x:ms(e*s)/s||0,y:ms(n*s)/s||0}}function Of(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,f=t.isFixed,p=o.x,v=p===void 0?0:p,E=o.y,w=E===void 0?0:E,A=typeof d=="function"?d({x:v,y:w}):{x:v,y:w};v=A.x,w=A.y;var N=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),U=pt,F=ft,Y=window;if(u){var H=to(n),K="clientHeight",ue="clientWidth";if(H===Xt(n)&&(H=ni(n),An(H).position!=="static"&&a==="absolute"&&(K="scrollHeight",ue="scrollWidth")),H=H,s===ft||(s===pt||s===xt)&&r===gs){F=kt;var de=f&&Y.visualViewport?Y.visualViewport.height:H[K];w-=de-i.height,w*=c?1:-1}if(s===pt||(s===ft||s===kt)&&r===gs){U=xt;var X=f&&Y.visualViewport?Y.visualViewport.width:H[ue];v-=X-i.width,v*=c?1:-1}}var oe=Object.assign({position:a},u&&iI),Te=d===!0?sI({x:v,y:w}):{x:v,y:w};if(v=Te.x,w=Te.y,c){var Oe;return Object.assign({},oe,(Oe={},Oe[F]=M?"0":"",Oe[U]=N?"0":"",Oe.transform=(Y.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",Oe))}return Object.assign({},oe,(e={},e[F]=M?w+"px":"",e[U]=N?v+"px":"",e.transform="",e))}function rI(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,c=a===void 0?!0:a,u={placement:on(e.placement),variation:ys(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Of(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Of(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Tu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rI,data:{}},Ho={passive:!0};function oI(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,c=Xt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(d){d.addEventListener("scroll",n.update,Ho)}),a&&c.addEventListener("resize",n.update,Ho),function(){r&&u.forEach(function(d){d.removeEventListener("scroll",n.update,Ho)}),a&&c.removeEventListener("resize",n.update,Ho)}}var Iu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:oI,data:{}},aI={left:"right",right:"left",bottom:"top",top:"bottom"};function Yo(t){return t.replace(/left|right|bottom|top/g,function(e){return aI[e]})}var lI={start:"end",end:"start"};function Nf(t){return t.replace(/start|end/g,function(e){return lI[e]})}function Au(t){var e=Xt(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Su(t){return vs(ni(t)).left+Au(t).scrollLeft}function cI(t){var e=Xt(t),n=ni(t),i=e.visualViewport,s=n.clientWidth,r=n.clientHeight,o=0,a=0;return i&&(s=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:s,height:r,x:o+Su(t),y:a}}function uI(t){var e,n=ni(t),i=Au(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=Ti(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Ti(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Su(t),c=-i.scrollTop;return An(s||n).direction==="rtl"&&(a+=Ti(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function Ou(t){var e=An(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function k_(t){return["html","body","#document"].indexOf(un(t))>=0?t.ownerDocument.body:Ft(t)&&Ou(t)?t:k_(Ua(t))}function Ir(t,e){var n;e===void 0&&(e=[]);var i=k_(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=Xt(i),o=s?[r].concat(r.visualViewport||[],Ou(i)?i:[]):i,a=e.concat(o);return s?a:a.concat(Ir(Ua(o)))}function gc(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function dI(t){var e=vs(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Pf(t,e){return e===yu?gc(cI(t)):_s(e)?dI(e):gc(uI(ni(t)))}function hI(t){var e=Ir(Ua(t)),n=["absolute","fixed"].indexOf(An(t).position)>=0,i=n&&Ft(t)?to(t):t;return _s(i)?e.filter(function(s){return _s(s)&&S_(s,i)&&un(s)!=="body"}):[]}function fI(t,e,n){var i=e==="clippingParents"?hI(t):[].concat(e),s=[].concat(i,[n]),r=s[0],o=s.reduce(function(a,c){var u=Pf(t,c);return a.top=Ti(u.top,a.top),a.right=oa(u.right,a.right),a.bottom=oa(u.bottom,a.bottom),a.left=Ti(u.left,a.left),a},Pf(t,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function x_(t){var e=t.reference,n=t.element,i=t.placement,s=i?on(i):null,r=i?ys(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case ft:c={x:o,y:e.y-n.height};break;case kt:c={x:o,y:e.y+e.height};break;case xt:c={x:e.x+e.width,y:a};break;case pt:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var u=s?Cu(s):null;if(u!=null){var d=u==="y"?"height":"width";switch(r){case Oi:c[u]=c[u]-(e[d]/2-n[d]/2);break;case gs:c[u]=c[u]+(e[d]/2-n[d]/2);break}}return c}function Es(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.boundary,o=r===void 0?p_:r,a=n.rootBoundary,c=a===void 0?yu:a,u=n.elementContext,d=u===void 0?es:u,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,E=v===void 0?0:v,w=N_(typeof E!="number"?E:P_(E,Ms)),A=d===es?g_:es,N=t.rects.popper,M=t.elements[p?A:d],U=fI(_s(M)?M:M.contextElement||ni(t.elements.popper),o,c),F=vs(t.elements.reference),Y=x_({reference:F,element:N,strategy:"absolute",placement:s}),H=gc(Object.assign({},N,Y)),K=d===es?H:F,ue={top:U.top-K.top+w.top,bottom:K.bottom-U.bottom+w.bottom,left:U.left-K.left+w.left,right:K.right-U.right+w.right},de=t.modifiersData.offset;if(d===es&&de){var X=de[s];Object.keys(ue).forEach(function(oe){var Te=[xt,kt].indexOf(oe)>=0?1:-1,Oe=[ft,kt].indexOf(oe)>=0?"y":"x";ue[oe]+=X[Oe]*Te})}return ue}function pI(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?Eu:c,d=ys(i),f=d?a?pc:pc.filter(function(E){return ys(E)===d}):Ms,p=f.filter(function(E){return u.indexOf(E)>=0});p.length===0&&(p=f);var v=p.reduce(function(E,w){return E[w]=Es(t,{placement:w,boundary:s,rootBoundary:r,padding:o})[on(w)],E},{});return Object.keys(v).sort(function(E,w){return v[E]-v[w]})}function gI(t){if(on(t)===Ba)return[];var e=Yo(t);return[Nf(t),e,Nf(e)]}function _I(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,u=n.padding,d=n.boundary,f=n.rootBoundary,p=n.altBoundary,v=n.flipVariations,E=v===void 0?!0:v,w=n.allowedAutoPlacements,A=e.options.placement,N=on(A),M=N===A,U=c||(M||!E?[Yo(A)]:gI(A)),F=[A].concat(U).reduce(function(Tt,S){return Tt.concat(on(S)===Ba?pI(e,{placement:S,boundary:d,rootBoundary:f,padding:u,flipVariations:E,allowedAutoPlacements:w}):S)},[]),Y=e.rects.reference,H=e.rects.popper,K=new Map,ue=!0,de=F[0],X=0;X<F.length;X++){var oe=F[X],Te=on(oe),Oe=ys(oe)===Oi,Pe=[ft,kt].indexOf(Te)>=0,mt=Pe?"width":"height",ve=Es(e,{placement:oe,boundary:d,rootBoundary:f,altBoundary:p,padding:u}),ae=Pe?Oe?xt:pt:Oe?kt:ft;Y[mt]>H[mt]&&(ae=Yo(ae));var me=Yo(ae),He=[];if(r&&He.push(ve[Te]<=0),a&&He.push(ve[ae]<=0,ve[me]<=0),He.every(function(Tt){return Tt})){de=oe,ue=!1;break}K.set(oe,He)}if(ue)for(var Ct=E?3:1,dt=function(S){var W=F.find(function(B){var j=K.get(B);if(j)return j.slice(0,S).every(function(ye){return ye})});if(W)return de=W,"break"},Ye=Ct;Ye>0;Ye--){var Ge=dt(Ye);if(Ge==="break")break}e.placement!==de&&(e.modifiersData[i]._skip=!0,e.placement=de,e.reset=!0)}}var D_={name:"flip",enabled:!0,phase:"main",fn:_I,requiresIfExists:["offset"],data:{_skip:!1}};function Rf(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function kf(t){return[ft,xt,kt,pt].some(function(e){return t[e]>=0})}function mI(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=Es(e,{elementContext:"reference"}),a=Es(e,{altBoundary:!0}),c=Rf(o,i),u=Rf(a,s,r),d=kf(c),f=kf(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}var L_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mI};function vI(t,e,n){var i=on(t),s=[pt,ft].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[pt,xt].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function yI(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,o=Eu.reduce(function(d,f){return d[f]=vI(f,e.rects,r),d},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[i]=o}var M_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yI};function EI(t){var e=t.state,n=t.name;e.modifiersData[n]=x_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Nu={name:"popperOffsets",enabled:!0,phase:"read",fn:EI,data:{}};function bI(t){return t==="x"?"y":"x"}function wI(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,u=n.rootBoundary,d=n.altBoundary,f=n.padding,p=n.tether,v=p===void 0?!0:p,E=n.tetherOffset,w=E===void 0?0:E,A=Es(e,{boundary:c,rootBoundary:u,padding:f,altBoundary:d}),N=on(e.placement),M=ys(e.placement),U=!M,F=Cu(N),Y=bI(F),H=e.modifiersData.popperOffsets,K=e.rects.reference,ue=e.rects.popper,de=typeof w=="function"?w(Object.assign({},e.rects,{placement:e.placement})):w,X=typeof de=="number"?{mainAxis:de,altAxis:de}:Object.assign({mainAxis:0,altAxis:0},de),oe=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Te={x:0,y:0};if(!!H){if(r){var Oe,Pe=F==="y"?ft:pt,mt=F==="y"?kt:xt,ve=F==="y"?"height":"width",ae=H[F],me=ae+A[Pe],He=ae-A[mt],Ct=v?-ue[ve]/2:0,dt=M===Oi?K[ve]:ue[ve],Ye=M===Oi?-ue[ve]:-K[ve],Ge=e.elements.arrow,Tt=v&&Ge?wu(Ge):{width:0,height:0},S=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:O_(),W=S[Pe],B=S[mt],j=Tr(0,K[ve],Tt[ve]),ye=U?K[ve]/2-Ct-j-W-X.mainAxis:dt-j-W-X.mainAxis,we=U?-K[ve]/2+Ct+j+B+X.mainAxis:Ye+j+B+X.mainAxis,re=e.elements.arrow&&to(e.elements.arrow),te=re?F==="y"?re.clientTop||0:re.clientLeft||0:0,g=(Oe=oe==null?void 0:oe[F])!=null?Oe:0,y=ae+ye-g-te,T=ae+we-g,P=Tr(v?oa(me,y):me,ae,v?Ti(He,T):He);H[F]=P,Te[F]=P-ae}if(a){var O,D=F==="x"?ft:pt,V=F==="x"?kt:xt,k=H[Y],$=Y==="y"?"height":"width",R=k+A[D],z=k-A[V],q=[ft,pt].indexOf(N)!==-1,G=(O=oe==null?void 0:oe[Y])!=null?O:0,Q=q?R:k-K[$]-ue[$]-G+X.altAxis,fe=q?k+K[$]+ue[$]-G-X.altAxis:z,Re=v&&q?ZT(Q,k,fe):Tr(v?Q:R,k,v?fe:z);H[Y]=Re,Te[Y]=Re-k}e.modifiersData[i]=Te}}var $_={name:"preventOverflow",enabled:!0,phase:"main",fn:wI,requiresIfExists:["offset"]};function CI(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function TI(t){return t===Xt(t)||!Ft(t)?Au(t):CI(t)}function II(t){var e=t.getBoundingClientRect(),n=ms(e.width)/t.offsetWidth||1,i=ms(e.height)/t.offsetHeight||1;return n!==1||i!==1}function AI(t,e,n){n===void 0&&(n=!1);var i=Ft(e),s=Ft(e)&&II(e),r=ni(e),o=vs(t,s),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&((un(e)!=="body"||Ou(r))&&(a=TI(e)),Ft(e)?(c=vs(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Su(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function SI(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function OI(t){var e=SI(t);return I_.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function NI(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function PI(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var xf={placement:"bottom",modifiers:[],strategy:"absolute"};function Df(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Ha(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?xf:s;return function(a,c,u){u===void 0&&(u=r);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},xf,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],p=!1,v={state:d,setOptions:function(N){var M=typeof N=="function"?N(d.options):N;w(),d.options=Object.assign({},r,d.options,M),d.scrollParents={reference:_s(a)?Ir(a):a.contextElement?Ir(a.contextElement):[],popper:Ir(c)};var U=OI(PI([].concat(i,d.options.modifiers)));return d.orderedModifiers=U.filter(function(F){return F.enabled}),E(),v.update()},forceUpdate:function(){if(!p){var N=d.elements,M=N.reference,U=N.popper;if(!!Df(M,U)){d.rects={reference:AI(M,to(U),d.options.strategy==="fixed"),popper:wu(U)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(X){return d.modifiersData[X.name]=Object.assign({},X.data)});for(var F=0;F<d.orderedModifiers.length;F++){if(d.reset===!0){d.reset=!1,F=-1;continue}var Y=d.orderedModifiers[F],H=Y.fn,K=Y.options,ue=K===void 0?{}:K,de=Y.name;typeof H=="function"&&(d=H({state:d,options:ue,name:de,instance:v})||d)}}}},update:NI(function(){return new Promise(function(A){v.forceUpdate(),A(d)})}),destroy:function(){w(),p=!0}};if(!Df(a,c))return v;v.setOptions(u).then(function(A){!p&&u.onFirstUpdate&&u.onFirstUpdate(A)});function E(){d.orderedModifiers.forEach(function(A){var N=A.name,M=A.options,U=M===void 0?{}:M,F=A.effect;if(typeof F=="function"){var Y=F({state:d,name:N,instance:v,options:U}),H=function(){};f.push(Y||H)}})}function w(){f.forEach(function(A){return A()}),f=[]}return v}}var RI=Ha(),kI=[Iu,Nu,Tu,bu],xI=Ha({defaultModifiers:kI}),DI=[Iu,Nu,Tu,bu,M_,D_,$_,R_,L_],LI=Ha({defaultModifiers:DI}),MI=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Ha,detectOverflow:Es,createPopperBase:RI,createPopper:LI,createPopperLite:xI,top:ft,bottom:kt,right:xt,left:pt,auto:Ba,basePlacements:Ms,start:Oi,end:gs,clippingParents:p_,viewport:yu,popper:es,reference:g_,variationPlacements:pc,placements:Eu,beforeRead:__,read:m_,afterRead:v_,beforeMain:y_,main:E_,afterMain:b_,beforeWrite:w_,write:C_,afterWrite:T_,modifierPhases:I_,applyStyles:bu,arrow:R_,computeStyles:Tu,eventListeners:Iu,flip:D_,hide:L_,offset:M_,popperOffsets:Nu,preventOverflow:$_},Symbol.toStringTag,{value:"Module"})),$I=zT(MI);/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,i){t.exports=i($I)})(fc,function(n){function i(_){if(_&&_.__esModule)return _;const l=Object.create(null);if(_){for(const h in _)if(h!=="default"){const m=Object.getOwnPropertyDescriptor(_,h);Object.defineProperty(l,h,m.get?m:{enumerable:!0,get:()=>_[h]})}}return l.default=_,Object.freeze(l)}const s=i(n),r=1e6,o=1e3,a="transitionend",c=_=>_==null?`${_}`:{}.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase(),u=_=>{do _+=Math.floor(Math.random()*r);while(document.getElementById(_));return _},d=_=>{let l=_.getAttribute("data-bs-target");if(!l||l==="#"){let h=_.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),l=h&&h!=="#"?h.trim():null}return l},f=_=>{const l=d(_);return l&&document.querySelector(l)?l:null},p=_=>{const l=d(_);return l?document.querySelector(l):null},v=_=>{if(!_)return 0;let{transitionDuration:l,transitionDelay:h}=window.getComputedStyle(_);const m=Number.parseFloat(l),b=Number.parseFloat(h);return!m&&!b?0:(l=l.split(",")[0],h=h.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(h))*o)},E=_=>{_.dispatchEvent(new Event(a))},w=_=>!_||typeof _!="object"?!1:(typeof _.jquery!="undefined"&&(_=_[0]),typeof _.nodeType!="undefined"),A=_=>w(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(_):null,N=(_,l,h)=>{Object.keys(h).forEach(m=>{const b=h[m],C=l[m],x=C&&w(C)?"element":c(C);if(!new RegExp(b).test(x))throw new TypeError(`${_.toUpperCase()}: Option "${m}" provided type "${x}" but expected type "${b}".`)})},M=_=>!w(_)||_.getClientRects().length===0?!1:getComputedStyle(_).getPropertyValue("visibility")==="visible",U=_=>!_||_.nodeType!==Node.ELEMENT_NODE||_.classList.contains("disabled")?!0:typeof _.disabled!="undefined"?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false",F=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const l=_.getRootNode();return l instanceof ShadowRoot?l:null}return _ instanceof ShadowRoot?_:_.parentNode?F(_.parentNode):null},Y=()=>{},H=_=>{_.offsetHeight},K=()=>{const{jQuery:_}=window;return _&&!document.body.hasAttribute("data-bs-no-jquery")?_:null},ue=[],de=_=>{document.readyState==="loading"?(ue.length||document.addEventListener("DOMContentLoaded",()=>{ue.forEach(l=>l())}),ue.push(_)):_()},X=()=>document.documentElement.dir==="rtl",oe=_=>{de(()=>{const l=K();if(l){const h=_.NAME,m=l.fn[h];l.fn[h]=_.jQueryInterface,l.fn[h].Constructor=_,l.fn[h].noConflict=()=>(l.fn[h]=m,_.jQueryInterface)}})},Te=_=>{typeof _=="function"&&_()},Oe=(_,l,h=!0)=>{if(!h){Te(_);return}const m=5,b=v(l)+m;let C=!1;const x=({target:Z})=>{Z===l&&(C=!0,l.removeEventListener(a,x),Te(_))};l.addEventListener(a,x),setTimeout(()=>{C||E(l)},b)},Pe=(_,l,h,m)=>{let b=_.indexOf(l);if(b===-1)return _[!h&&m?_.length-1:0];const C=_.length;return b+=h?1:-1,m&&(b=(b+C)%C),_[Math.max(0,Math.min(b,C-1))]},mt=/[^.]*(?=\..*)\.|.*/,ve=/\..*/,ae=/::\d+$/,me={};let He=1;const Ct={mouseenter:"mouseover",mouseleave:"mouseout"},dt=/^(mouseenter|mouseleave)/i,Ye=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ge(_,l){return l&&`${l}::${He++}`||_.uidEvent||He++}function Tt(_){const l=Ge(_);return _.uidEvent=l,me[l]=me[l]||{},me[l]}function S(_,l){return function h(m){return m.delegateTarget=_,h.oneOff&&g.off(_,m.type,l),l.apply(_,[m])}}function W(_,l,h){return function m(b){const C=_.querySelectorAll(l);for(let{target:x}=b;x&&x!==this;x=x.parentNode)for(let Z=C.length;Z--;)if(C[Z]===x)return b.delegateTarget=x,m.oneOff&&g.off(_,b.type,l,h),h.apply(x,[b]);return null}}function B(_,l,h=null){const m=Object.keys(_);for(let b=0,C=m.length;b<C;b++){const x=_[m[b]];if(x.originalHandler===l&&x.delegationSelector===h)return x}return null}function j(_,l,h){const m=typeof l=="string",b=m?h:l;let C=te(_);return Ye.has(C)||(C=_),[m,b,C]}function ye(_,l,h,m,b){if(typeof l!="string"||!_)return;if(h||(h=m,m=null),dt.test(l)){const zi=Do=>function(kn){if(!kn.relatedTarget||kn.relatedTarget!==kn.delegateTarget&&!kn.delegateTarget.contains(kn.relatedTarget))return Do.call(this,kn)};m?m=zi(m):h=zi(h)}const[C,x,Z]=j(l,h,m),Ee=Tt(_),Le=Ee[Z]||(Ee[Z]={}),We=B(Le,x,C?h:null);if(We){We.oneOff=We.oneOff&&b;return}const Ve=Ge(x,l.replace(mt,"")),ze=C?W(_,h,m):S(_,h);ze.delegationSelector=C?h:null,ze.originalHandler=x,ze.oneOff=b,ze.uidEvent=Ve,Le[Ve]=ze,_.addEventListener(Z,ze,C)}function we(_,l,h,m,b){const C=B(l[h],m,b);!C||(_.removeEventListener(h,C,Boolean(b)),delete l[h][C.uidEvent])}function re(_,l,h,m){const b=l[h]||{};Object.keys(b).forEach(C=>{if(C.includes(m)){const x=b[C];we(_,l,h,x.originalHandler,x.delegationSelector)}})}function te(_){return _=_.replace(ve,""),Ct[_]||_}const g={on(_,l,h,m){ye(_,l,h,m,!1)},one(_,l,h,m){ye(_,l,h,m,!0)},off(_,l,h,m){if(typeof l!="string"||!_)return;const[b,C,x]=j(l,h,m),Z=x!==l,Ee=Tt(_),Le=l.startsWith(".");if(typeof C!="undefined"){if(!Ee||!Ee[x])return;we(_,Ee,x,C,b?h:null);return}Le&&Object.keys(Ee).forEach(Ve=>{re(_,Ee,Ve,l.slice(1))});const We=Ee[x]||{};Object.keys(We).forEach(Ve=>{const ze=Ve.replace(ae,"");if(!Z||l.includes(ze)){const zi=We[Ve];we(_,Ee,x,zi.originalHandler,zi.delegationSelector)}})},trigger(_,l,h){if(typeof l!="string"||!_)return null;const m=K(),b=te(l),C=l!==b,x=Ye.has(b);let Z,Ee=!0,Le=!0,We=!1,Ve=null;return C&&m&&(Z=m.Event(l,h),m(_).trigger(Z),Ee=!Z.isPropagationStopped(),Le=!Z.isImmediatePropagationStopped(),We=Z.isDefaultPrevented()),x?(Ve=document.createEvent("HTMLEvents"),Ve.initEvent(b,Ee,!0)):Ve=new CustomEvent(l,{bubbles:Ee,cancelable:!0}),typeof h!="undefined"&&Object.keys(h).forEach(ze=>{Object.defineProperty(Ve,ze,{get(){return h[ze]}})}),We&&Ve.preventDefault(),Le&&_.dispatchEvent(Ve),Ve.defaultPrevented&&typeof Z!="undefined"&&Z.preventDefault(),Ve}},y=new Map,T={set(_,l,h){y.has(_)||y.set(_,new Map);const m=y.get(_);if(!m.has(l)&&m.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`);return}m.set(l,h)},get(_,l){return y.has(_)&&y.get(_).get(l)||null},remove(_,l){if(!y.has(_))return;const h=y.get(_);h.delete(l),h.size===0&&y.delete(_)}},P="5.1.3";class O{constructor(l){l=A(l),l&&(this._element=l,T.set(this._element,this.constructor.DATA_KEY,this))}dispose(){T.remove(this._element,this.constructor.DATA_KEY),g.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(l=>{this[l]=null})}_queueCallback(l,h,m=!0){Oe(l,h,m)}static getInstance(l){return T.get(A(l),this.DATA_KEY)}static getOrCreateInstance(l,h={}){return this.getInstance(l)||new this(l,typeof h=="object"?h:null)}static get VERSION(){return P}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const D=(_,l="hide")=>{const h=`click.dismiss${_.EVENT_KEY}`,m=_.NAME;g.on(document,h,`[data-bs-dismiss="${m}"]`,function(b){if(["A","AREA"].includes(this.tagName)&&b.preventDefault(),U(this))return;const C=p(this)||this.closest(`.${m}`);_.getOrCreateInstance(C)[l]()})},V="alert",$=".bs.alert",R=`close${$}`,z=`closed${$}`,q="fade",G="show";class Q extends O{static get NAME(){return V}close(){if(g.trigger(this._element,R).defaultPrevented)return;this._element.classList.remove(G);const h=this._element.classList.contains(q);this._queueCallback(()=>this._destroyElement(),this._element,h)}_destroyElement(){this._element.remove(),g.trigger(this._element,z),this.dispose()}static jQueryInterface(l){return this.each(function(){const h=Q.getOrCreateInstance(this);if(typeof l=="string"){if(h[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}D(Q,"close"),oe(Q);const fe="button",Ne=".bs.button",De=".data-api",It="active",pn='[data-bs-toggle="button"]',Co=`click${Ne}${De}`;class Ht extends O{static get NAME(){return fe}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(It))}static jQueryInterface(l){return this.each(function(){const h=Ht.getOrCreateInstance(this);l==="toggle"&&h[l]()})}}g.on(document,Co,pn,_=>{_.preventDefault();const l=_.target.closest(pn);Ht.getOrCreateInstance(l).toggle()}),oe(Ht);function Ys(_){return _==="true"?!0:_==="false"?!1:_===Number(_).toString()?Number(_):_===""||_==="null"?null:_}function it(_){return _.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ke={setDataAttribute(_,l,h){_.setAttribute(`data-bs-${it(l)}`,h)},removeDataAttribute(_,l){_.removeAttribute(`data-bs-${it(l)}`)},getDataAttributes(_){if(!_)return{};const l={};return Object.keys(_.dataset).filter(h=>h.startsWith("bs")).forEach(h=>{let m=h.replace(/^bs/,"");m=m.charAt(0).toLowerCase()+m.slice(1,m.length),l[m]=Ys(_.dataset[h])}),l},getDataAttribute(_,l){return Ys(_.getAttribute(`data-bs-${it(l)}`))},offset(_){const l=_.getBoundingClientRect();return{top:l.top+window.pageYOffset,left:l.left+window.pageXOffset}},position(_){return{top:_.offsetTop,left:_.offsetLeft}}},To=3,ee={find(_,l=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(l,_))},findOne(_,l=document.documentElement){return Element.prototype.querySelector.call(l,_)},children(_,l){return[].concat(..._.children).filter(h=>h.matches(l))},parents(_,l){const h=[];let m=_.parentNode;for(;m&&m.nodeType===Node.ELEMENT_NODE&&m.nodeType!==To;)m.matches(l)&&h.push(m),m=m.parentNode;return h},prev(_,l){let h=_.previousElementSibling;for(;h;){if(h.matches(l))return[h];h=h.previousElementSibling}return[]},next(_,l){let h=_.nextElementSibling;for(;h;){if(h.matches(l))return[h];h=h.nextElementSibling}return[]},focusableChildren(_){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(", ");return this.find(l,_).filter(h=>!U(h)&&M(h))}},Gd="carousel",At=".bs.carousel",Yd=".data-api",yy="ArrowLeft",Ey="ArrowRight",by=500,wy=40,Qd={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Cy={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ii="next",si="prev",ri="left",Qs="right",Ty={[yy]:Qs,[Ey]:ri},Iy=`slide${At}`,Xd=`slid${At}`,Ay=`keydown${At}`,Sy=`mouseenter${At}`,Oy=`mouseleave${At}`,Ny=`touchstart${At}`,Py=`touchmove${At}`,Ry=`touchend${At}`,ky=`pointerdown${At}`,xy=`pointerup${At}`,Dy=`dragstart${At}`,Ly=`load${At}${Yd}`,My=`click${At}${Yd}`,$y="carousel",oi="active",Fy="slide",By="carousel-item-end",Uy="carousel-item-start",Hy="carousel-item-next",Vy="carousel-item-prev",Wy="pointer-event",jy=".active",Io=".active.carousel-item",qy=".carousel-item",Ky=".carousel-item img",zy=".carousel-item-next, .carousel-item-prev",Gy=".carousel-indicators",Yy="[data-bs-target]",Qy="[data-bs-slide], [data-bs-slide-to]",Xy='[data-bs-ride="carousel"]',Jy="touch",Zy="pen";class Zt extends O{constructor(l,h){super(l);this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(h),this._indicatorsElement=ee.findOne(Gy,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Qd}static get NAME(){return Gd}next(){this._slide(ii)}nextWhenVisible(){!document.hidden&&M(this._element)&&this.next()}prev(){this._slide(si)}pause(l){l||(this._isPaused=!0),ee.findOne(zy,this._element)&&(E(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(l){l||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(l){this._activeElement=ee.findOne(Io,this._element);const h=this._getItemIndex(this._activeElement);if(l>this._items.length-1||l<0)return;if(this._isSliding){g.one(this._element,Xd,()=>this.to(l));return}if(h===l){this.pause(),this.cycle();return}const m=l>h?ii:si;this._slide(m,this._items[l])}_getConfig(l){return l=le(le(le({},Qd),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(Gd,l,Cy),l}_handleSwipe(){const l=Math.abs(this.touchDeltaX);if(l<=wy)return;const h=l/this.touchDeltaX;this.touchDeltaX=0,h&&this._slide(h>0?Qs:ri)}_addEventListeners(){this._config.keyboard&&g.on(this._element,Ay,l=>this._keydown(l)),this._config.pause==="hover"&&(g.on(this._element,Sy,l=>this.pause(l)),g.on(this._element,Oy,l=>this.cycle(l))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const l=C=>this._pointerEvent&&(C.pointerType===Zy||C.pointerType===Jy),h=C=>{l(C)?this.touchStartX=C.clientX:this._pointerEvent||(this.touchStartX=C.touches[0].clientX)},m=C=>{this.touchDeltaX=C.touches&&C.touches.length>1?0:C.touches[0].clientX-this.touchStartX},b=C=>{l(C)&&(this.touchDeltaX=C.clientX-this.touchStartX),this._handleSwipe(),this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(x=>this.cycle(x),by+this._config.interval))};ee.find(Ky,this._element).forEach(C=>{g.on(C,Dy,x=>x.preventDefault())}),this._pointerEvent?(g.on(this._element,ky,C=>h(C)),g.on(this._element,xy,C=>b(C)),this._element.classList.add(Wy)):(g.on(this._element,Ny,C=>h(C)),g.on(this._element,Py,C=>m(C)),g.on(this._element,Ry,C=>b(C)))}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const h=Ty[l.key];h&&(l.preventDefault(),this._slide(h))}_getItemIndex(l){return this._items=l&&l.parentNode?ee.find(qy,l.parentNode):[],this._items.indexOf(l)}_getItemByOrder(l,h){const m=l===ii;return Pe(this._items,h,m,this._config.wrap)}_triggerSlideEvent(l,h){const m=this._getItemIndex(l),b=this._getItemIndex(ee.findOne(Io,this._element));return g.trigger(this._element,Iy,{relatedTarget:l,direction:h,from:b,to:m})}_setActiveIndicatorElement(l){if(this._indicatorsElement){const h=ee.findOne(jy,this._indicatorsElement);h.classList.remove(oi),h.removeAttribute("aria-current");const m=ee.find(Yy,this._indicatorsElement);for(let b=0;b<m.length;b++)if(Number.parseInt(m[b].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(l)){m[b].classList.add(oi),m[b].setAttribute("aria-current","true");break}}}_updateInterval(){const l=this._activeElement||ee.findOne(Io,this._element);if(!l)return;const h=Number.parseInt(l.getAttribute("data-bs-interval"),10);h?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=h):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(l,h){const m=this._directionToOrder(l),b=ee.findOne(Io,this._element),C=this._getItemIndex(b),x=h||this._getItemByOrder(m,b),Z=this._getItemIndex(x),Ee=Boolean(this._interval),Le=m===ii,We=Le?Uy:By,Ve=Le?Hy:Vy,ze=this._orderToDirection(m);if(x&&x.classList.contains(oi)){this._isSliding=!1;return}if(this._isSliding||this._triggerSlideEvent(x,ze).defaultPrevented||!b||!x)return;this._isSliding=!0,Ee&&this.pause(),this._setActiveIndicatorElement(x),this._activeElement=x;const Do=()=>{g.trigger(this._element,Xd,{relatedTarget:x,direction:ze,from:C,to:Z})};if(this._element.classList.contains(Fy)){x.classList.add(Ve),H(x),b.classList.add(We),x.classList.add(We);const kn=()=>{x.classList.remove(We,Ve),x.classList.add(oi),b.classList.remove(oi,Ve,We),this._isSliding=!1,setTimeout(Do,0)};this._queueCallback(kn,b,!0)}else b.classList.remove(oi),x.classList.add(oi),this._isSliding=!1,Do();Ee&&this.cycle()}_directionToOrder(l){return[Qs,ri].includes(l)?X()?l===ri?si:ii:l===ri?ii:si:l}_orderToDirection(l){return[ii,si].includes(l)?X()?l===si?ri:Qs:l===si?Qs:ri:l}static carouselInterface(l,h){const m=Zt.getOrCreateInstance(l,h);let{_config:b}=m;typeof h=="object"&&(b=le(le({},b),h));const C=typeof h=="string"?h:b.slide;if(typeof h=="number")m.to(h);else if(typeof C=="string"){if(typeof m[C]=="undefined")throw new TypeError(`No method named "${C}"`);m[C]()}else b.interval&&b.ride&&(m.pause(),m.cycle())}static jQueryInterface(l){return this.each(function(){Zt.carouselInterface(this,l)})}static dataApiClickHandler(l){const h=p(this);if(!h||!h.classList.contains($y))return;const m=le(le({},ke.getDataAttributes(h)),ke.getDataAttributes(this)),b=this.getAttribute("data-bs-slide-to");b&&(m.interval=!1),Zt.carouselInterface(h,m),b&&Zt.getInstance(h).to(b),l.preventDefault()}}g.on(document,My,Qy,Zt.dataApiClickHandler),g.on(window,Ly,()=>{const _=ee.find(Xy);for(let l=0,h=_.length;l<h;l++)Zt.carouselInterface(_[l],Zt.getInstance(_[l]))}),oe(Zt);const Jd="collapse",Zd="bs.collapse",Xs=`.${Zd}`,eE=".data-api",eh={toggle:!0,parent:null},tE={toggle:"boolean",parent:"(null|element)"},nE=`show${Xs}`,iE=`shown${Xs}`,sE=`hide${Xs}`,rE=`hidden${Xs}`,oE=`click${Xs}${eE}`,pl="show",ji="collapse",Ao="collapsing",th="collapsed",nh=`:scope .${ji} .${ji}`,aE="collapse-horizontal",lE="width",cE="height",uE=".collapse.show, .collapse.collapsing",gl='[data-bs-toggle="collapse"]';class ai extends O{constructor(l,h){super(l);this._isTransitioning=!1,this._config=this._getConfig(h),this._triggerArray=[];const m=ee.find(gl);for(let b=0,C=m.length;b<C;b++){const x=m[b],Z=f(x),Ee=ee.find(Z).filter(Le=>Le===this._element);Z!==null&&Ee.length&&(this._selector=Z,this._triggerArray.push(x))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return eh}static get NAME(){return Jd}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[],h;if(this._config.parent){const Le=ee.find(nh,this._config.parent);l=ee.find(uE,this._config.parent).filter(We=>!Le.includes(We))}const m=ee.findOne(this._selector);if(l.length){const Le=l.find(We=>m!==We);if(h=Le?ai.getInstance(Le):null,h&&h._isTransitioning)return}if(g.trigger(this._element,nE).defaultPrevented)return;l.forEach(Le=>{m!==Le&&ai.getOrCreateInstance(Le,{toggle:!1}).hide(),h||T.set(Le,Zd,null)});const C=this._getDimension();this._element.classList.remove(ji),this._element.classList.add(Ao),this._element.style[C]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const x=()=>{this._isTransitioning=!1,this._element.classList.remove(Ao),this._element.classList.add(ji,pl),this._element.style[C]="",g.trigger(this._element,iE)},Ee=`scroll${C[0].toUpperCase()+C.slice(1)}`;this._queueCallback(x,this._element,!0),this._element.style[C]=`${this._element[Ee]}px`}hide(){if(this._isTransitioning||!this._isShown()||g.trigger(this._element,sE).defaultPrevented)return;const h=this._getDimension();this._element.style[h]=`${this._element.getBoundingClientRect()[h]}px`,H(this._element),this._element.classList.add(Ao),this._element.classList.remove(ji,pl);const m=this._triggerArray.length;for(let C=0;C<m;C++){const x=this._triggerArray[C],Z=p(x);Z&&!this._isShown(Z)&&this._addAriaAndCollapsedClass([x],!1)}this._isTransitioning=!0;const b=()=>{this._isTransitioning=!1,this._element.classList.remove(Ao),this._element.classList.add(ji),g.trigger(this._element,rE)};this._element.style[h]="",this._queueCallback(b,this._element,!0)}_isShown(l=this._element){return l.classList.contains(pl)}_getConfig(l){return l=le(le(le({},eh),ke.getDataAttributes(this._element)),l),l.toggle=Boolean(l.toggle),l.parent=A(l.parent),N(Jd,l,tE),l}_getDimension(){return this._element.classList.contains(aE)?lE:cE}_initializeChildren(){if(!this._config.parent)return;const l=ee.find(nh,this._config.parent);ee.find(gl,this._config.parent).filter(h=>!l.includes(h)).forEach(h=>{const m=p(h);m&&this._addAriaAndCollapsedClass([h],this._isShown(m))})}_addAriaAndCollapsedClass(l,h){!l.length||l.forEach(m=>{h?m.classList.remove(th):m.classList.add(th),m.setAttribute("aria-expanded",h)})}static jQueryInterface(l){return this.each(function(){const h={};typeof l=="string"&&/show|hide/.test(l)&&(h.toggle=!1);const m=ai.getOrCreateInstance(this,h);if(typeof l=="string"){if(typeof m[l]=="undefined")throw new TypeError(`No method named "${l}"`);m[l]()}})}}g.on(document,oE,gl,function(_){(_.target.tagName==="A"||_.delegateTarget&&_.delegateTarget.tagName==="A")&&_.preventDefault();const l=f(this);ee.find(l).forEach(m=>{ai.getOrCreateInstance(m,{toggle:!1}).toggle()})}),oe(ai);const _l="dropdown",li=".bs.dropdown",ml=".data-api",So="Escape",ih="Space",sh="Tab",vl="ArrowUp",Oo="ArrowDown",dE=2,hE=new RegExp(`${vl}|${Oo}|${So}`),fE=`hide${li}`,pE=`hidden${li}`,gE=`show${li}`,_E=`shown${li}`,rh=`click${li}${ml}`,oh=`keydown${li}${ml}`,mE=`keyup${li}${ml}`,qi="show",vE="dropup",yE="dropend",EE="dropstart",bE="navbar",Js='[data-bs-toggle="dropdown"]',yl=".dropdown-menu",wE=".navbar-nav",CE=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",TE=X()?"top-end":"top-start",IE=X()?"top-start":"top-end",AE=X()?"bottom-end":"bottom-start",SE=X()?"bottom-start":"bottom-end",OE=X()?"left-start":"right-start",NE=X()?"right-start":"left-start",PE={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},RE={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class St extends O{constructor(l,h){super(l);this._popper=null,this._config=this._getConfig(h),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return PE}static get DefaultType(){return RE}static get NAME(){return _l}toggle(){return this._isShown()?this.hide():this.show()}show(){if(U(this._element)||this._isShown(this._menu))return;const l={relatedTarget:this._element};if(g.trigger(this._element,gE,l).defaultPrevented)return;const m=St.getParentFromElement(this._element);this._inNavbar?ke.setDataAttribute(this._menu,"popper","none"):this._createPopper(m),"ontouchstart"in document.documentElement&&!m.closest(wE)&&[].concat(...document.body.children).forEach(b=>g.on(b,"mouseover",Y)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(qi),this._element.classList.add(qi),g.trigger(this._element,_E,l)}hide(){if(U(this._element)||!this._isShown(this._menu))return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){g.trigger(this._element,fE,l).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(m=>g.off(m,"mouseover",Y)),this._popper&&this._popper.destroy(),this._menu.classList.remove(qi),this._element.classList.remove(qi),this._element.setAttribute("aria-expanded","false"),ke.removeDataAttribute(this._menu,"popper"),g.trigger(this._element,pE,l))}_getConfig(l){if(l=le(le(le({},this.constructor.Default),ke.getDataAttributes(this._element)),l),N(_l,l,this.constructor.DefaultType),typeof l.reference=="object"&&!w(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${_l.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(l){if(typeof s=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let h=this._element;this._config.reference==="parent"?h=l:w(this._config.reference)?h=A(this._config.reference):typeof this._config.reference=="object"&&(h=this._config.reference);const m=this._getPopperConfig(),b=m.modifiers.find(C=>C.name==="applyStyles"&&C.enabled===!1);this._popper=s.createPopper(h,this._menu,m),b&&ke.setDataAttribute(this._menu,"popper","static")}_isShown(l=this._element){return l.classList.contains(qi)}_getMenuElement(){return ee.next(this._element,yl)[0]}_getPlacement(){const l=this._element.parentNode;if(l.classList.contains(yE))return OE;if(l.classList.contains(EE))return NE;const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains(vE)?h?IE:TE:h?SE:AE}_detectNavbar(){return this._element.closest(`.${bE}`)!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(h=>Number.parseInt(h,10)):typeof l=="function"?h=>l(h,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(l.modifiers=[{name:"applyStyles",enabled:!1}]),le(le({},l),typeof this._config.popperConfig=="function"?this._config.popperConfig(l):this._config.popperConfig)}_selectMenuItem({key:l,target:h}){const m=ee.find(CE,this._menu).filter(M);!m.length||Pe(m,h,l===Oo,!m.includes(h)).focus()}static jQueryInterface(l){return this.each(function(){const h=St.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}static clearMenus(l){if(l&&(l.button===dE||l.type==="keyup"&&l.key!==sh))return;const h=ee.find(Js);for(let m=0,b=h.length;m<b;m++){const C=St.getInstance(h[m]);if(!C||C._config.autoClose===!1||!C._isShown())continue;const x={relatedTarget:C._element};if(l){const Z=l.composedPath(),Ee=Z.includes(C._menu);if(Z.includes(C._element)||C._config.autoClose==="inside"&&!Ee||C._config.autoClose==="outside"&&Ee||C._menu.contains(l.target)&&(l.type==="keyup"&&l.key===sh||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;l.type==="click"&&(x.clickEvent=l)}C._completeHide(x)}}static getParentFromElement(l){return p(l)||l.parentNode}static dataApiKeydownHandler(l){if(/input|textarea/i.test(l.target.tagName)?l.key===ih||l.key!==So&&(l.key!==Oo&&l.key!==vl||l.target.closest(yl)):!hE.test(l.key))return;const h=this.classList.contains(qi);if(!h&&l.key===So||(l.preventDefault(),l.stopPropagation(),U(this)))return;const m=this.matches(Js)?this:ee.prev(this,Js)[0],b=St.getOrCreateInstance(m);if(l.key===So){b.hide();return}if(l.key===vl||l.key===Oo){h||b.show(),b._selectMenuItem(l);return}(!h||l.key===ih)&&St.clearMenus()}}g.on(document,oh,Js,St.dataApiKeydownHandler),g.on(document,oh,yl,St.dataApiKeydownHandler),g.on(document,rh,St.clearMenus),g.on(document,mE,St.clearMenus),g.on(document,rh,Js,function(_){_.preventDefault(),St.getOrCreateInstance(this).toggle()}),oe(St);const ah=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",lh=".sticky-top";class El{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",h=>h+l),this._setElementAttributes(ah,"paddingRight",h=>h+l),this._setElementAttributes(lh,"marginRight",h=>h-l)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,h,m){const b=this.getWidth(),C=x=>{if(x!==this._element&&window.innerWidth>x.clientWidth+b)return;this._saveInitialAttribute(x,h);const Z=window.getComputedStyle(x)[h];x.style[h]=`${m(Number.parseFloat(Z))}px`};this._applyManipulationCallback(l,C)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(ah,"paddingRight"),this._resetElementAttributes(lh,"marginRight")}_saveInitialAttribute(l,h){const m=l.style[h];m&&ke.setDataAttribute(l,h,m)}_resetElementAttributes(l,h){const m=b=>{const C=ke.getDataAttribute(b,h);typeof C=="undefined"?b.style.removeProperty(h):(ke.removeDataAttribute(b,h),b.style[h]=C)};this._applyManipulationCallback(l,m)}_applyManipulationCallback(l,h){w(l)?h(l):ee.find(l,this._element).forEach(h)}isOverflowing(){return this.getWidth()>0}}const kE={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},xE={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},ch="backdrop",DE="fade",uh="show",dh=`mousedown.bs.${ch}`;class hh{constructor(l){this._config=this._getConfig(l),this._isAppended=!1,this._element=null}show(l){if(!this._config.isVisible){Te(l);return}this._append(),this._config.isAnimated&&H(this._getElement()),this._getElement().classList.add(uh),this._emulateAnimation(()=>{Te(l)})}hide(l){if(!this._config.isVisible){Te(l);return}this._getElement().classList.remove(uh),this._emulateAnimation(()=>{this.dispose(),Te(l)})}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add(DE),this._element=l}return this._element}_getConfig(l){return l=le(le({},kE),typeof l=="object"?l:{}),l.rootElement=A(l.rootElement),N(ch,l,xE),l}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),g.on(this._getElement(),dh,()=>{Te(this._config.clickCallback)}),this._isAppended=!0)}dispose(){!this._isAppended||(g.off(this._element,dh),this._element.remove(),this._isAppended=!1)}_emulateAnimation(l){Oe(l,this._getElement(),this._config.isAnimated)}}const LE={trapElement:null,autofocus:!0},ME={trapElement:"element",autofocus:"boolean"},$E="focustrap",No=".bs.focustrap",FE=`focusin${No}`,BE=`keydown.tab${No}`,UE="Tab",HE="forward",fh="backward";class ph{constructor(l){this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:l,autofocus:h}=this._config;this._isActive||(h&&l.focus(),g.off(document,No),g.on(document,FE,m=>this._handleFocusin(m)),g.on(document,BE,m=>this._handleKeydown(m)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,g.off(document,No))}_handleFocusin(l){const{target:h}=l,{trapElement:m}=this._config;if(h===document||h===m||m.contains(h))return;const b=ee.focusableChildren(m);b.length===0?m.focus():this._lastTabNavDirection===fh?b[b.length-1].focus():b[0].focus()}_handleKeydown(l){l.key===UE&&(this._lastTabNavDirection=l.shiftKey?fh:HE)}_getConfig(l){return l=le(le({},LE),typeof l=="object"?l:{}),N($E,l,ME),l}}const gh="modal",Lt=".bs.modal",VE=".data-api",_h="Escape",mh={backdrop:!0,keyboard:!0,focus:!0},WE={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},jE=`hide${Lt}`,qE=`hidePrevented${Lt}`,vh=`hidden${Lt}`,yh=`show${Lt}`,KE=`shown${Lt}`,Eh=`resize${Lt}`,bh=`click.dismiss${Lt}`,wh=`keydown.dismiss${Lt}`,zE=`mouseup.dismiss${Lt}`,Ch=`mousedown.dismiss${Lt}`,GE=`click${Lt}${VE}`,Th="modal-open",YE="fade",Ih="show",bl="modal-static",QE=".modal.show",XE=".modal-dialog",JE=".modal-body",ZE='[data-bs-toggle="modal"]';class ci extends O{constructor(l,h){super(l);this._config=this._getConfig(h),this._dialog=ee.findOne(XE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new El}static get Default(){return mh}static get NAME(){return gh}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||g.trigger(this._element,yh,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Th),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g.on(this._dialog,Ch,()=>{g.one(this._element,zE,m=>{m.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(l)))}hide(){if(!this._isShown||this._isTransitioning||g.trigger(this._element,jE).defaultPrevented)return;this._isShown=!1;const h=this._isAnimated();h&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(Ih),g.off(this._element,bh),g.off(this._dialog,Ch),this._queueCallback(()=>this._hideModal(),this._element,h)}dispose(){[window,this._dialog].forEach(l=>g.off(l,Lt)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new hh({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ph({trapElement:this._element})}_getConfig(l){return l=le(le(le({},mh),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(gh,l,WE),l}_showElement(l){const h=this._isAnimated(),m=ee.findOne(JE,this._dialog);(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,m&&(m.scrollTop=0),h&&H(this._element),this._element.classList.add(Ih);const b=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,g.trigger(this._element,KE,{relatedTarget:l})};this._queueCallback(b,this._dialog,h)}_setEscapeEvent(){this._isShown?g.on(this._element,wh,l=>{this._config.keyboard&&l.key===_h?(l.preventDefault(),this.hide()):!this._config.keyboard&&l.key===_h&&this._triggerBackdropTransition()}):g.off(this._element,wh)}_setResizeEvent(){this._isShown?g.on(window,Eh,()=>this._adjustDialog()):g.off(window,Eh)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Th),this._resetAdjustments(),this._scrollBar.reset(),g.trigger(this._element,vh)})}_showBackdrop(l){g.on(this._element,bh,h=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=!1;return}h.target===h.currentTarget&&(this._config.backdrop===!0?this.hide():this._config.backdrop==="static"&&this._triggerBackdropTransition())}),this._backdrop.show(l)}_isAnimated(){return this._element.classList.contains(YE)}_triggerBackdropTransition(){if(g.trigger(this._element,qE).defaultPrevented)return;const{classList:h,scrollHeight:m,style:b}=this._element,C=m>document.documentElement.clientHeight;!C&&b.overflowY==="hidden"||h.contains(bl)||(C||(b.overflowY="hidden"),h.add(bl),this._queueCallback(()=>{h.remove(bl),C||this._queueCallback(()=>{b.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),m=h>0;(!m&&l&&!X()||m&&!l&&X())&&(this._element.style.paddingLeft=`${h}px`),(m&&!l&&!X()||!m&&l&&X())&&(this._element.style.paddingRight=`${h}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,h){return this.each(function(){const m=ci.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]=="undefined")throw new TypeError(`No method named "${l}"`);m[l](h)}})}}g.on(document,GE,ZE,function(_){const l=p(this);["A","AREA"].includes(this.tagName)&&_.preventDefault(),g.one(l,yh,b=>{b.defaultPrevented||g.one(l,vh,()=>{M(this)&&this.focus()})});const h=ee.findOne(QE);h&&ci.getInstance(h).hide(),ci.getOrCreateInstance(l).toggle(this)}),D(ci),oe(ci);const Ah="offcanvas",ui=".bs.offcanvas",Sh=".data-api",eb=`load${ui}${Sh}`,tb="Escape",Oh={backdrop:!0,keyboard:!0,scroll:!1},nb={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Nh="show",ib="offcanvas-backdrop",Ph=".offcanvas.show",sb=`show${ui}`,rb=`shown${ui}`,ob=`hide${ui}`,Rh=`hidden${ui}`,ab=`click${ui}${Sh}`,lb=`keydown.dismiss${ui}`,cb='[data-bs-toggle="offcanvas"]';class Pn extends O{constructor(l,h){super(l);this._config=this._getConfig(h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Ah}static get Default(){return Oh}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){if(this._isShown||g.trigger(this._element,sb,{relatedTarget:l}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new El().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Nh);const m=()=>{this._config.scroll||this._focustrap.activate(),g.trigger(this._element,rb,{relatedTarget:l})};this._queueCallback(m,this._element,!0)}hide(){if(!this._isShown||g.trigger(this._element,ob).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Nh),this._backdrop.hide();const h=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||new El().reset(),g.trigger(this._element,Rh)};this._queueCallback(h,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(l){return l=le(le(le({},Oh),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(Ah,l,nb),l}_initializeBackDrop(){return new hh({className:ib,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new ph({trapElement:this._element})}_addEventListeners(){g.on(this._element,lb,l=>{this._config.keyboard&&l.key===tb&&this.hide()})}static jQueryInterface(l){return this.each(function(){const h=Pn.getOrCreateInstance(this,l);if(typeof l=="string"){if(h[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}g.on(document,ab,cb,function(_){const l=p(this);if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),U(this))return;g.one(l,Rh,()=>{M(this)&&this.focus()});const h=ee.findOne(Ph);h&&h!==l&&Pn.getInstance(h).hide(),Pn.getOrCreateInstance(l).toggle(this)}),g.on(window,eb,()=>ee.find(Ph).forEach(_=>Pn.getOrCreateInstance(_).show())),D(Pn),oe(Pn);const ub=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),db=/^aria-[\w-]*$/i,hb=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,fb=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,pb=(_,l)=>{const h=_.nodeName.toLowerCase();if(l.includes(h))return ub.has(h)?Boolean(hb.test(_.nodeValue)||fb.test(_.nodeValue)):!0;const m=l.filter(b=>b instanceof RegExp);for(let b=0,C=m.length;b<C;b++)if(m[b].test(h))return!0;return!1},gb={"*":["class","dir","id","lang","role",db],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function kh(_,l,h){if(!_.length)return _;if(h&&typeof h=="function")return h(_);const b=new window.DOMParser().parseFromString(_,"text/html"),C=[].concat(...b.body.querySelectorAll("*"));for(let x=0,Z=C.length;x<Z;x++){const Ee=C[x],Le=Ee.nodeName.toLowerCase();if(!Object.keys(l).includes(Le)){Ee.remove();continue}const We=[].concat(...Ee.attributes),Ve=[].concat(l["*"]||[],l[Le]||[]);We.forEach(ze=>{pb(ze,Ve)||Ee.removeAttribute(ze.nodeName)})}return b.body.innerHTML}const xh="tooltip",en=".bs.tooltip",_b="bs-tooltip",mb=new Set(["sanitize","allowList","sanitizeFn"]),vb={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},yb={AUTO:"auto",TOP:"top",RIGHT:X()?"left":"right",BOTTOM:"bottom",LEFT:X()?"right":"left"},Eb={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:gb,popperConfig:null},bb={HIDE:`hide${en}`,HIDDEN:`hidden${en}`,SHOW:`show${en}`,SHOWN:`shown${en}`,INSERTED:`inserted${en}`,CLICK:`click${en}`,FOCUSIN:`focusin${en}`,FOCUSOUT:`focusout${en}`,MOUSEENTER:`mouseenter${en}`,MOUSELEAVE:`mouseleave${en}`},Po="fade",wb="modal",Zs="show",er="show",wl="out",Dh=".tooltip-inner",Lh=`.${wb}`,Mh="hide.bs.modal",tr="hover",Cl="focus",Cb="click",Tb="manual";class di extends O{constructor(l,h){if(typeof s=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l);this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(h),this.tip=null,this._setListeners()}static get Default(){return Eb}static get NAME(){return xh}static get Event(){return bb}static get DefaultType(){return vb}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(l){if(!!this._isEnabled)if(l){const h=this._initializeOnDelegatedTarget(l);h._activeTrigger.click=!h._activeTrigger.click,h._isWithActiveTrigger()?h._enter(null,h):h._leave(null,h)}else{if(this.getTipElement().classList.contains(Zs)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),g.off(this._element.closest(Lh),Mh,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this.isWithContent()&&this._isEnabled))return;const l=g.trigger(this._element,this.constructor.Event.SHOW),h=F(this._element),m=h===null?this._element.ownerDocument.documentElement.contains(this._element):h.contains(this._element);if(l.defaultPrevented||!m)return;this.constructor.NAME==="tooltip"&&this.tip&&this.getTitle()!==this.tip.querySelector(Dh).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const b=this.getTipElement(),C=u(this.constructor.NAME);b.setAttribute("id",C),this._element.setAttribute("aria-describedby",C),this._config.animation&&b.classList.add(Po);const x=typeof this._config.placement=="function"?this._config.placement.call(this,b,this._element):this._config.placement,Z=this._getAttachment(x);this._addAttachmentClass(Z);const{container:Ee}=this._config;T.set(b,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(Ee.append(b),g.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=s.createPopper(this._element,b,this._getPopperConfig(Z)),b.classList.add(Zs);const Le=this._resolvePossibleFunction(this._config.customClass);Le&&b.classList.add(...Le.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(ze=>{g.on(ze,"mouseover",Y)});const We=()=>{const ze=this._hoverState;this._hoverState=null,g.trigger(this._element,this.constructor.Event.SHOWN),ze===wl&&this._leave(null,this)},Ve=this.tip.classList.contains(Po);this._queueCallback(We,this.tip,Ve)}hide(){if(!this._popper)return;const l=this.getTipElement(),h=()=>{this._isWithActiveTrigger()||(this._hoverState!==er&&l.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),g.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(g.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;l.classList.remove(Zs),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(C=>g.off(C,"mouseover",Y)),this._activeTrigger[Cb]=!1,this._activeTrigger[Cl]=!1,this._activeTrigger[tr]=!1;const b=this.tip.classList.contains(Po);this._queueCallback(h,this.tip,b),this._hoverState=""}update(){this._popper!==null&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const l=document.createElement("div");l.innerHTML=this._config.template;const h=l.children[0];return this.setContent(h),h.classList.remove(Po,Zs),this.tip=h,this.tip}setContent(l){this._sanitizeAndSetContent(l,this.getTitle(),Dh)}_sanitizeAndSetContent(l,h,m){const b=ee.findOne(m,l);if(!h&&b){b.remove();return}this.setElementContent(b,h)}setElementContent(l,h){if(l!==null){if(w(h)){h=A(h),this._config.html?h.parentNode!==l&&(l.innerHTML="",l.append(h)):l.textContent=h.textContent;return}this._config.html?(this._config.sanitize&&(h=kh(h,this._config.allowList,this._config.sanitizeFn)),l.innerHTML=h):l.textContent=h}}getTitle(){const l=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(l)}updateAttachment(l){return l==="right"?"end":l==="left"?"start":l}_initializeOnDelegatedTarget(l,h){return h||this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(h=>Number.parseInt(h,10)):typeof l=="function"?h=>l(h,this._element):l}_resolvePossibleFunction(l){return typeof l=="function"?l.call(this._element):l}_getPopperConfig(l){const h={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:m=>this._handlePopperPlacementChange(m)}],onFirstUpdate:m=>{m.options.placement!==m.placement&&this._handlePopperPlacementChange(m)}};return le(le({},h),typeof this._config.popperConfig=="function"?this._config.popperConfig(h):this._config.popperConfig)}_addAttachmentClass(l){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(l)}`)}_getAttachment(l){return yb[l.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(h=>{if(h==="click")g.on(this._element,this.constructor.Event.CLICK,this._config.selector,m=>this.toggle(m));else if(h!==Tb){const m=h===tr?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,b=h===tr?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;g.on(this._element,m,this._config.selector,C=>this._enter(C)),g.on(this._element,b,this._config.selector,C=>this._leave(C))}}),this._hideModalHandler=()=>{this._element&&this.hide()},g.on(this._element.closest(Lh),Mh,this._hideModalHandler),this._config.selector?this._config=Lo(le({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const l=this._element.getAttribute("title"),h=typeof this._element.getAttribute("data-bs-original-title");(l||h!=="string")&&(this._element.setAttribute("data-bs-original-title",l||""),l&&!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",l),this._element.setAttribute("title",""))}_enter(l,h){if(h=this._initializeOnDelegatedTarget(l,h),l&&(h._activeTrigger[l.type==="focusin"?Cl:tr]=!0),h.getTipElement().classList.contains(Zs)||h._hoverState===er){h._hoverState=er;return}if(clearTimeout(h._timeout),h._hoverState=er,!h._config.delay||!h._config.delay.show){h.show();return}h._timeout=setTimeout(()=>{h._hoverState===er&&h.show()},h._config.delay.show)}_leave(l,h){if(h=this._initializeOnDelegatedTarget(l,h),l&&(h._activeTrigger[l.type==="focusout"?Cl:tr]=h._element.contains(l.relatedTarget)),!h._isWithActiveTrigger()){if(clearTimeout(h._timeout),h._hoverState=wl,!h._config.delay||!h._config.delay.hide){h.hide();return}h._timeout=setTimeout(()=>{h._hoverState===wl&&h.hide()},h._config.delay.hide)}}_isWithActiveTrigger(){for(const l in this._activeTrigger)if(this._activeTrigger[l])return!0;return!1}_getConfig(l){const h=ke.getDataAttributes(this._element);return Object.keys(h).forEach(m=>{mb.has(m)&&delete h[m]}),l=le(le(le({},this.constructor.Default),h),typeof l=="object"&&l?l:{}),l.container=l.container===!1?document.body:A(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),N(xh,l,this.constructor.DefaultType),l.sanitize&&(l.template=kh(l.template,l.allowList,l.sanitizeFn)),l}_getDelegateConfig(){const l={};for(const h in this._config)this.constructor.Default[h]!==this._config[h]&&(l[h]=this._config[h]);return l}_cleanTipClass(){const l=this.getTipElement(),h=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),m=l.getAttribute("class").match(h);m!==null&&m.length>0&&m.map(b=>b.trim()).forEach(b=>l.classList.remove(b))}_getBasicClassPrefix(){return _b}_handlePopperPlacementChange(l){const{state:h}=l;!h||(this.tip=h.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(h.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(l){return this.each(function(){const h=di.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}oe(di);const Ib="popover",tn=".bs.popover",Ab="bs-popover",Sb=Lo(le({},di.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ob=Lo(le({},di.DefaultType),{content:"(string|element|function)"}),Nb={HIDE:`hide${tn}`,HIDDEN:`hidden${tn}`,SHOW:`show${tn}`,SHOWN:`shown${tn}`,INSERTED:`inserted${tn}`,CLICK:`click${tn}`,FOCUSIN:`focusin${tn}`,FOCUSOUT:`focusout${tn}`,MOUSEENTER:`mouseenter${tn}`,MOUSELEAVE:`mouseleave${tn}`},Pb=".popover-header",Rb=".popover-body";class Ro extends di{static get Default(){return Sb}static get NAME(){return Ib}static get Event(){return Nb}static get DefaultType(){return Ob}isWithContent(){return this.getTitle()||this._getContent()}setContent(l){this._sanitizeAndSetContent(l,this.getTitle(),Pb),this._sanitizeAndSetContent(l,this._getContent(),Rb)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return Ab}static jQueryInterface(l){return this.each(function(){const h=Ro.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}oe(Ro);const $h="scrollspy",ko=".bs.scrollspy",kb=".data-api",Fh={offset:10,method:"auto",target:""},xb={offset:"number",method:"string",target:"(string|element)"},Db=`activate${ko}`,Lb=`scroll${ko}`,Mb=`load${ko}${kb}`,Bh="dropdown-item",Ki="active",$b='[data-bs-spy="scroll"]',Fb=".nav, .list-group",Tl=".nav-link",Bb=".nav-item",Uh=".list-group-item",Il=`${Tl}, ${Uh}, .${Bh}`,Ub=".dropdown",Hb=".dropdown-toggle",Vb="offset",Hh="position";class nr extends O{constructor(l,h){super(l);this._scrollElement=this._element.tagName==="BODY"?window:this._element,this._config=this._getConfig(h),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g.on(this._scrollElement,Lb,()=>this._process()),this.refresh(),this._process()}static get Default(){return Fh}static get NAME(){return $h}refresh(){const l=this._scrollElement===this._scrollElement.window?Vb:Hh,h=this._config.method==="auto"?l:this._config.method,m=h===Hh?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),ee.find(Il,this._config.target).map(C=>{const x=f(C),Z=x?ee.findOne(x):null;if(Z){const Ee=Z.getBoundingClientRect();if(Ee.width||Ee.height)return[ke[h](Z).top+m,x]}return null}).filter(C=>C).sort((C,x)=>C[0]-x[0]).forEach(C=>{this._offsets.push(C[0]),this._targets.push(C[1])})}dispose(){g.off(this._scrollElement,ko),super.dispose()}_getConfig(l){return l=le(le(le({},Fh),ke.getDataAttributes(this._element)),typeof l=="object"&&l?l:{}),l.target=A(l.target)||document.documentElement,N($h,l,xb),l}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const l=this._getScrollTop()+this._config.offset,h=this._getScrollHeight(),m=this._config.offset+h-this._getOffsetHeight();if(this._scrollHeight!==h&&this.refresh(),l>=m){const b=this._targets[this._targets.length-1];this._activeTarget!==b&&this._activate(b);return}if(this._activeTarget&&l<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(let b=this._offsets.length;b--;)this._activeTarget!==this._targets[b]&&l>=this._offsets[b]&&(typeof this._offsets[b+1]=="undefined"||l<this._offsets[b+1])&&this._activate(this._targets[b])}_activate(l){this._activeTarget=l,this._clear();const h=Il.split(",").map(b=>`${b}[data-bs-target="${l}"],${b}[href="${l}"]`),m=ee.findOne(h.join(","),this._config.target);m.classList.add(Ki),m.classList.contains(Bh)?ee.findOne(Hb,m.closest(Ub)).classList.add(Ki):ee.parents(m,Fb).forEach(b=>{ee.prev(b,`${Tl}, ${Uh}`).forEach(C=>C.classList.add(Ki)),ee.prev(b,Bb).forEach(C=>{ee.children(C,Tl).forEach(x=>x.classList.add(Ki))})}),g.trigger(this._scrollElement,Db,{relatedTarget:l})}_clear(){ee.find(Il,this._config.target).filter(l=>l.classList.contains(Ki)).forEach(l=>l.classList.remove(Ki))}static jQueryInterface(l){return this.each(function(){const h=nr.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}g.on(window,Mb,()=>{ee.find($b).forEach(_=>new nr(_))}),oe(nr);const Wb="tab",ir=".bs.tab",jb=".data-api",qb=`hide${ir}`,Kb=`hidden${ir}`,zb=`show${ir}`,Gb=`shown${ir}`,Yb=`click${ir}${jb}`,Qb="dropdown-menu",sr="active",Vh="fade",Wh="show",Xb=".dropdown",Jb=".nav, .list-group",jh=".active",qh=":scope > li > .active",Zb='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ew=".dropdown-toggle",tw=":scope > .dropdown-menu .active";class rr extends O{static get NAME(){return Wb}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(sr))return;let l;const h=p(this._element),m=this._element.closest(Jb);if(m){const Z=m.nodeName==="UL"||m.nodeName==="OL"?qh:jh;l=ee.find(Z,m),l=l[l.length-1]}const b=l?g.trigger(l,qb,{relatedTarget:this._element}):null;if(g.trigger(this._element,zb,{relatedTarget:l}).defaultPrevented||b!==null&&b.defaultPrevented)return;this._activate(this._element,m);const x=()=>{g.trigger(l,Kb,{relatedTarget:this._element}),g.trigger(this._element,Gb,{relatedTarget:l})};h?this._activate(h,h.parentNode,x):x()}_activate(l,h,m){const C=(h&&(h.nodeName==="UL"||h.nodeName==="OL")?ee.find(qh,h):ee.children(h,jh))[0],x=m&&C&&C.classList.contains(Vh),Z=()=>this._transitionComplete(l,C,m);C&&x?(C.classList.remove(Wh),this._queueCallback(Z,l,!0)):Z()}_transitionComplete(l,h,m){if(h){h.classList.remove(sr);const C=ee.findOne(tw,h.parentNode);C&&C.classList.remove(sr),h.getAttribute("role")==="tab"&&h.setAttribute("aria-selected",!1)}l.classList.add(sr),l.getAttribute("role")==="tab"&&l.setAttribute("aria-selected",!0),H(l),l.classList.contains(Vh)&&l.classList.add(Wh);let b=l.parentNode;if(b&&b.nodeName==="LI"&&(b=b.parentNode),b&&b.classList.contains(Qb)){const C=l.closest(Xb);C&&ee.find(ew,C).forEach(x=>x.classList.add(sr)),l.setAttribute("aria-expanded",!0)}m&&m()}static jQueryInterface(l){return this.each(function(){const h=rr.getOrCreateInstance(this);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}g.on(document,Yb,Zb,function(_){if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),U(this))return;rr.getOrCreateInstance(this).show()}),oe(rr);const Kh="toast",Rn=".bs.toast",nw=`mouseover${Rn}`,iw=`mouseout${Rn}`,sw=`focusin${Rn}`,rw=`focusout${Rn}`,ow=`hide${Rn}`,aw=`hidden${Rn}`,lw=`show${Rn}`,cw=`shown${Rn}`,uw="fade",zh="hide",or="show",xo="showing",dw={animation:"boolean",autohide:"boolean",delay:"number"},Gh={animation:!0,autohide:!0,delay:5e3};class ar extends O{constructor(l,h){super(l);this._config=this._getConfig(h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return dw}static get Default(){return Gh}static get NAME(){return Kh}show(){if(g.trigger(this._element,lw).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(uw);const h=()=>{this._element.classList.remove(xo),g.trigger(this._element,cw),this._maybeScheduleHide()};this._element.classList.remove(zh),H(this._element),this._element.classList.add(or),this._element.classList.add(xo),this._queueCallback(h,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(or)||g.trigger(this._element,ow).defaultPrevented)return;const h=()=>{this._element.classList.add(zh),this._element.classList.remove(xo),this._element.classList.remove(or),g.trigger(this._element,aw)};this._element.classList.add(xo),this._queueCallback(h,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(or)&&this._element.classList.remove(or),super.dispose()}_getConfig(l){return l=le(le(le({},Gh),ke.getDataAttributes(this._element)),typeof l=="object"&&l?l:{}),N(Kh,l,this.constructor.DefaultType),l}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(l,h){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h;break}if(h){this._clearTimeout();return}const m=l.relatedTarget;this._element===m||this._element.contains(m)||this._maybeScheduleHide()}_setListeners(){g.on(this._element,nw,l=>this._onInteraction(l,!0)),g.on(this._element,iw,l=>this._onInteraction(l,!1)),g.on(this._element,sw,l=>this._onInteraction(l,!0)),g.on(this._element,rw,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const h=ar.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}return D(ar),oe(ar),{Alert:Q,Button:Ht,Carousel:Zt,Collapse:ai,Dropdown:St,Modal:ci,Offcanvas:Pn,Popover:Ro,ScrollSpy:nr,Tab:rr,Toast:ar,Tooltip:di}})})(GT);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw $s(e)},$s=function(t){return new Error("Firebase Database ("+F_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),i.push(n[d],n[f],n[p],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||f==null)throw Error();const p=r<<2|a>>4;if(i.push(p),u!==64){const v=a<<4&240|u>>2;if(i.push(v),f!==64){const E=u<<6&192|f;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ru=function(t){const e=B_(t);return Pu.encodeByteArray(e,!0)},_c=function(t){try{return Pu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return U_(void 0,t)}function U_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UI(n)||(t[n]=U_(t[n],e[n]));return t}function UI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ku(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function HI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V_(){return F_.NODE_ADMIN===!0}function WI(){return typeof indexedDB=="object"}function jI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="FirebaseError";class Fs extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=qI,Object.setPrototypeOf(this,Fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?KI(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fs(s,a,i)}}function KI(t,e){return t.replace(zI,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const zI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Hr(_c(r[0])||""),n=Hr(_c(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},GI=function(t){const e=W_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YI=function(t){const e=W_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function la(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Lf(r)&&Lf(o)){if(!la(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),d=1518500249):(u=r^o^a,d=1859775393):f<60?(u=r&o|a&(r|o),d=2400959708):(u=r^o^a,d=3395469782);const p=(s<<5|s>>>27)+u+c+d+i[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function XI(t,e){const n=new JI(t,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Pl),s.error===void 0&&(s.error=Pl),s.complete===void 0&&(s.complete=Pl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pl(){}function Va(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,L(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wa=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return t&&t._delegate?t._delegate:t}class Ni{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new no;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===_i?void 0:t}function iA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($e||($e={}));const rA={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},oA=$e.INFO,aA={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},lA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=aA[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=lA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}function cA(t){return Array.prototype.slice.call(t)}function j_(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Du(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),j_(i).then(r,o)});return s.request=i,s}function uA(t,e,n){var i=Du(t,e,n);return i.then(function(s){if(!!s)return new Vr(s,i.request)})}function Us(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function Lu(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Du(this[e],s,arguments)})})}function ja(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function q_(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return uA(this[e],s,arguments)})})}function Ui(t){this._index=t}Us(Ui,"_index",["name","keyPath","multiEntry","unique"]);Lu(Ui,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);q_(Ui,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Vr(t,e){this._cursor=t,this._request=e}Us(Vr,"_cursor",["direction","key","primaryKey","value"]);Lu(Vr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Vr.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),j_(e._request).then(function(i){if(!!i)return new Vr(i,e._request)})})})});function fn(t){this._store=t}fn.prototype.createIndex=function(){return new Ui(this._store.createIndex.apply(this._store,arguments))};fn.prototype.index=function(){return new Ui(this._store.index.apply(this._store,arguments))};Us(fn,"_store",["name","keyPath","indexNames","autoIncrement"]);Lu(fn,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);q_(fn,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ja(fn,"_store",IDBObjectStore,["deleteIndex"]);function so(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}so.prototype.objectStore=function(){return new fn(this._tx.objectStore.apply(this._tx,arguments))};Us(so,"_tx",["objectStoreNames","mode"]);ja(so,"_tx",IDBTransaction,["abort"]);function qa(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new so(n)}qa.prototype.createObjectStore=function(){return new fn(this._db.createObjectStore.apply(this._db,arguments))};Us(qa,"_db",["name","version","objectStoreNames"]);ja(qa,"_db",IDBDatabase,["deleteObjectStore","close"]);function Ka(t){this._db=t}Ka.prototype.transaction=function(){return new so(this._db.transaction.apply(this._db,arguments))};Us(Ka,"_db",["name","version","objectStoreNames"]);ja(Ka,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[fn,Ui].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=cA(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Ui,fn].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function dA(t,e,n){var i=Du(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new qa(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new Ka(r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fA(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function fA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Mf="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new xu("@firebase/app"),pA="@firebase/app-compat",gA="@firebase/analytics-compat",_A="@firebase/analytics",mA="@firebase/app-check-compat",vA="@firebase/app-check",yA="@firebase/auth",EA="@firebase/auth-compat",bA="@firebase/database",wA="@firebase/database-compat",CA="@firebase/functions",TA="@firebase/functions-compat",IA="@firebase/installations",AA="@firebase/installations-compat",SA="@firebase/messaging",OA="@firebase/messaging-compat",NA="@firebase/performance",PA="@firebase/performance-compat",RA="@firebase/remote-config",kA="@firebase/remote-config-compat",xA="@firebase/storage",DA="@firebase/storage-compat",LA="@firebase/firestore",MA="@firebase/firestore-compat",$A="firebase",FA="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="[DEFAULT]",BA={[vc]:"fire-core",[pA]:"fire-core-compat",[_A]:"fire-analytics",[gA]:"fire-analytics-compat",[vA]:"fire-app-check",[mA]:"fire-app-check-compat",[yA]:"fire-auth",[EA]:"fire-auth-compat",[bA]:"fire-rtdb",[wA]:"fire-rtdb-compat",[CA]:"fire-fn",[TA]:"fire-fn-compat",[IA]:"fire-iid",[AA]:"fire-iid-compat",[SA]:"fire-fcm",[OA]:"fire-fcm-compat",[NA]:"fire-perf",[PA]:"fire-perf-compat",[RA]:"fire-rc",[kA]:"fire-rc-compat",[xA]:"fire-gcs",[DA]:"fire-gcs-compat",[LA]:"fire-fst",[MA]:"fire-fst-compat","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map,yc=new Map;function UA(t,e){try{t.container.addComponent(e)}catch(n){Mu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(yc.has(e))return Mu.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of ca.values())UA(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Jn=new io("app","Firebase",HA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=FA;function EL(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:K_,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});const s=ca.get(i);if(s){if(la(t,s.options)&&la(n,s.config))return s;throw Jn.create("duplicate-app",{appName:i})}const r=new sA(i);for(const a of yc.values())r.addComponent(a);const o=new VA(t,n,r);return ca.set(i,o),o}function z_(t=K_){const e=ca.get(t);if(!e)throw Jn.create("no-app",{appName:t});return e}function Yn(t,e,n){var i;let s=(i=BA[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mu.warn(a.join(" "));return}ws(new Ni(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firebase-heartbeat-database",jA=1,Pi="firebase-heartbeat-store";let Rl=null;function Fu(){return Rl||(Rl=dA(WA,jA,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Pi)}}).catch(t=>{throw Jn.create("storage-open",{originalErrorMessage:t.message})})),Rl}async function qA(t){try{return(await Fu()).transaction(Pi).objectStore(Pi).get(Bu(t))}catch(e){throw Jn.create("storage-get",{originalErrorMessage:e.message})}}async function kl(t,e){try{const i=(await Fu()).transaction(Pi,"readwrite");return await i.objectStore(Pi).put(e,Bu(t)),i.complete}catch(n){throw Jn.create("storage-set",{originalErrorMessage:n.message})}}async function KA(t){try{const n=(await Fu()).transaction(Pi,"readwrite");return await n.objectStore(Pi).delete(Bu(t)),n.complete}catch(e){throw Jn.create("storage-delete",{originalErrorMessage:e.message})}}function Bu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=1024,GA=30*24*60*60*1e3;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=QA();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=GA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=XA(this._heartbeatsCache),i=Ru(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function QA(){return new Date().toISOString().substring(0,10)}function XA(t,e=zA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),$f(n)>e){r.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),$f(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class JA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qA(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return kl(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return KA(this.app)}}function $f(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){ws(new Ni("platform-logger",e=>new hA(e),"PRIVATE")),ws(new Ni("heartbeat",e=>new YA(e),"PRIVATE")),Yn(vc,Mf,t),Yn(vc,Mf,"esm2017"),Yn("fire-js","")}ZA("");var eS="firebase",tS="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(eS,tS,"app");/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const G_=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Hs=t=>G_?Symbol(t):"_vr_"+t,nS=Hs("rvlm"),Ff=Hs("rvd"),Uu=Hs("r"),Y_=Hs("rl"),Ec=Hs("rvl"),ts=typeof window!="undefined";function iS(t){return t.__esModule||G_&&t[Symbol.toStringTag]==="Module"}const Me=Object.assign;function xl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Array.isArray(s)?s.map(t):t(s)}return n}const Ar=()=>{},sS=/\/$/,rS=t=>t.replace(sS,"");function Dl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,c>-1?c:e.length),s=t(r)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=cS(i!=null?i:e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function oS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aS(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Cs(e.matched[i],n.matched[s])&&Q_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Q_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lS(t[n],e[n]))return!1;return!0}function lS(t,e){return Array.isArray(t)?Uf(t,e):Array.isArray(e)?Uf(e,t):t===e}function Uf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function cS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function uS(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rS(t)}const dS=/^[^#]+#/;function hS(t,e){return t.replace(dS,"#")+e}function fS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const za=()=>({left:window.pageXOffset,top:window.pageYOffset});function pS(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const bc=new Map;function gS(t,e){bc.set(t,e)}function _S(t){const e=bc.get(t);return bc.delete(t),e}let mS=()=>location.protocol+"//"+location.host;function X_(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Bf(c,"")}return Bf(n,t)+i+s}function vS(t,e,n,i){let s=[],r=[],o=null;const a=({state:p})=>{const v=X_(t,location),E=n.value,w=e.value;let A=0;if(p){if(n.value=v,e.value=p,o&&o===E){o=null;return}A=w?p.position-w.position:0}else i(v);s.forEach(N=>{N(n.value,E,{delta:A,type:Wr.pop,direction:A?A>0?Sr.forward:Sr.back:Sr.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return r.push(v),v}function d(){const{history:p}=window;!p.state||p.replaceState(Me({},p.state,{scroll:za()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Vf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?za():null}}function yS(t){const{history:e,location:n}=window,i={value:X_(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:mS()+t+c;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](p)}}function o(c,u){const d=Me({},e.state,Vf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});r(c,d,!0),i.value=c}function a(c,u){const d=Me({},s.value,e.state,{forward:c,scroll:za()});r(d.current,d,!0);const f=Me({},Vf(i.value,c,null),{position:d.position+1},u);r(c,f,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function bL(t){t=uS(t);const e=yS(t),n=vS(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Me({location:"",base:t,go:i,createHref:hS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ES(t){return typeof t=="string"||t&&typeof t=="object"}function J_(t){return typeof t=="string"||typeof t=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Z_=Hs("nf");var Wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wf||(Wf={}));function Ts(t,e){return Me(new Error,{type:t,[Z_]:!0},e)}function Ln(t,e){return t instanceof Error&&Z_ in t&&(e==null||!!(t.type&e))}const jf="[^/]+?",bS={sensitive:!1,strict:!1,start:!0,end:!0},wS=/[.+*?^${}()[\]/\\]/g;function CS(t,e){const n=Me({},bS,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let v=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(wS,"\\$&"),v+=40;else if(p.type===1){const{value:E,repeatable:w,optional:A,regexp:N}=p;r.push({name:E,repeatable:w,optional:A});const M=N||jf;if(M!==jf){v+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+F.message)}}let U=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=A&&u.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),s+=U,v+=20,A&&(v+=-8),w&&(v+=-20),M===".*"&&(v+=-50)}d.push(v)}i.push(d)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",E=r[p-1];f[E.name]=v&&E.repeatable?v.split("/"):v}return f}function c(u){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:E,repeatable:w,optional:A}=v,N=E in u?u[E]:"";if(Array.isArray(N)&&!w)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(N)?N.join("/"):N;if(!M)if(A)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);d+=M}}return d}return{re:o,score:i,keys:r,parse:a,stringify:c}}function TS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function IS(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=TS(i[n],s[n]);if(r)return r;n++}return s.length-i.length}const AS={type:0,value:""},SS=/[a-zA-Z0-9_]/;function OS(t){if(!t)return[[]];if(t==="/")return[[AS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,u="",d="";function f(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=i;break;case 1:c==="("?n=2:SS.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function NS(t,e,n){const i=CS(OS(t.path),n),s=Me(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PS(t,e){const n=[],i=new Map;e=Kf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,p){const v=!p,E=kS(d);E.aliasOf=p&&p.record;const w=Kf(e,d),A=[E];if("alias"in d){const U=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of U)A.push(Me({},E,{components:p?p.record.components:E.components,path:F,aliasOf:p?p.record:E}))}let N,M;for(const U of A){const{path:F}=U;if(f&&F[0]!=="/"){const Y=f.record.path,H=Y[Y.length-1]==="/"?"":"/";U.path=f.record.path+(F&&H+F)}if(N=NS(U,f,w),p?p.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),v&&d.name&&!qf(N)&&o(d.name)),"children"in E){const Y=E.children;for(let H=0;H<Y.length;H++)r(Y[H],N,p&&p.children[H])}p=p||N,c(N)}return M?()=>{o(M)}:Ar}function o(d){if(J_(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){let f=0;for(;f<n.length&&IS(d,n[f])>=0&&(d.record.path!==n[f].record.path||!em(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!qf(d)&&i.set(d.record.name,d)}function u(d,f){let p,v={},E,w;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw Ts(1,{location:d});w=p.record.name,v=Me(RS(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),d.params),E=p.stringify(v)}else if("path"in d)E=d.path,p=n.find(M=>M.re.test(E)),p&&(v=p.parse(E),w=p.record.name);else{if(p=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw Ts(1,{location:d,currentLocation:f});w=p.record.name,v=Me({},f.params,d.params),E=p.stringify(v)}const A=[];let N=p;for(;N;)A.unshift(N.record),N=N.parent;return{name:w,path:E,params:v,matched:A,meta:DS(A)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function RS(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function kS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function xS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function qf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function DS(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function Kf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function em(t,e){return e.children.some(n=>n===t||em(t,n))}const tm=/#/g,LS=/&/g,MS=/\//g,$S=/=/g,FS=/\?/g,nm=/\+/g,BS=/%5B/g,US=/%5D/g,im=/%5E/g,HS=/%60/g,sm=/%7B/g,VS=/%7C/g,rm=/%7D/g,WS=/%20/g;function Hu(t){return encodeURI(""+t).replace(VS,"|").replace(BS,"[").replace(US,"]")}function jS(t){return Hu(t).replace(sm,"{").replace(rm,"}").replace(im,"^")}function wc(t){return Hu(t).replace(nm,"%2B").replace(WS,"+").replace(tm,"%23").replace(LS,"%26").replace(HS,"`").replace(sm,"{").replace(rm,"}").replace(im,"^")}function qS(t){return wc(t).replace($S,"%3D")}function KS(t){return Hu(t).replace(tm,"%23").replace(FS,"%3F")}function zS(t){return t==null?"":KS(t).replace(MS,"%2F")}function ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function GS(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(nm," "),o=r.indexOf("="),a=ua(o<0?r:r.slice(0,o)),c=o<0?null:ua(r.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function zf(t){let e="";for(let n in t){const i=t[n];if(n=qS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&wc(r)):[i&&wc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function YS(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function cr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Ts(4,{from:n,to:e})):f instanceof Error?a(f):ES(f)?a(Ts(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},u=t.call(i&&i.instances[s],e,n,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Ll(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(QS(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Bn(u,n,i,r,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const d=iS(u)?u.default:u;r.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&Bn(p,n,i,r,o)()}))}}return s}function QS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gf(t){const e=wn(Uu),n=wn(Y_),i=Vt(()=>e.resolve(vr(t.to))),s=Vt(()=>{const{matched:c}=i.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(Cs.bind(null,d));if(p>-1)return p;const v=Yf(c[u-2]);return u>1&&Yf(d)===v&&f[f.length-1].path!==v?f.findIndex(Cs.bind(null,c[u-2])):p}),r=Vt(()=>s.value>-1&&eO(n.params,i.value.params)),o=Vt(()=>s.value>-1&&s.value===n.matched.length-1&&Q_(n.params,i.value.params));function a(c={}){return ZS(c)?e[vr(t.replace)?"replace":"push"](vr(t.to)).catch(Ar):Promise.resolve()}return{route:i,href:Vt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const XS=Hg({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gf,setup(t,{slots:e}){const n=Ls(Gf(t)),{options:i}=wn(Uu),s=Vt(()=>({[Qf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:a_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),JS=XS;function ZS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eO(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qf=(t,e,n)=>t!=null?t:e!=null?e:n,tO=Hg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=wn(Ec),s=Vt(()=>t.route||i.value),r=wn(Ff,0),o=Vt(()=>s.value.matched[r]);zo(Ff,r+1),zo(nS,o),zo(Ec,s);const a=cu();return br(()=>[a.value,o.value,t.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Cs(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,d=u&&u.components[t.name],f=t.name;if(!d)return Xf(n.default,{Component:d,route:c});const p=u.props[t.name],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,w=a_(d,Me({},v,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Xf(n.default,{Component:w,route:c})||w}}});function Xf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nO=tO;function wL(t){const e=PS(t.routes,t),n=t.parseQuery||GS,i=t.stringifyQuery||zf,s=t.history,r=cr(),o=cr(),a=cr(),c=nC(Dn);let u=Dn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xl.bind(null,S=>""+S),f=xl.bind(null,zS),p=xl.bind(null,ua);function v(S,W){let B,j;return J_(S)?(B=e.getRecordMatcher(S),j=W):j=S,e.addRoute(j,B)}function E(S){const W=e.getRecordMatcher(S);W&&e.removeRoute(W)}function w(){return e.getRoutes().map(S=>S.record)}function A(S){return!!e.getRecordMatcher(S)}function N(S,W){if(W=Me({},W||c.value),typeof S=="string"){const te=Dl(n,S,W.path),g=e.resolve({path:te.path},W),y=s.createHref(te.fullPath);return Me(te,g,{params:p(g.params),hash:ua(te.hash),redirectedFrom:void 0,href:y})}let B;if("path"in S)B=Me({},S,{path:Dl(n,S.path,W.path).path});else{const te=Me({},S.params);for(const g in te)te[g]==null&&delete te[g];B=Me({},S,{params:f(S.params)}),W.params=f(W.params)}const j=e.resolve(B,W),ye=S.hash||"";j.params=d(p(j.params));const we=oS(i,Me({},S,{hash:jS(ye),path:j.path})),re=s.createHref(we);return Me({fullPath:we,hash:ye,query:i===zf?YS(S.query):S.query||{}},j,{redirectedFrom:void 0,href:re})}function M(S){return typeof S=="string"?Dl(n,S,c.value.path):Me({},S)}function U(S,W){if(u!==S)return Ts(8,{from:W,to:S})}function F(S){return K(S)}function Y(S){return F(Me(M(S),{replace:!0}))}function H(S){const W=S.matched[S.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let j=typeof B=="function"?B(S):B;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=M(j):{path:j},j.params={}),Me({query:S.query,hash:S.hash,params:S.params},j)}}function K(S,W){const B=u=N(S),j=c.value,ye=S.state,we=S.force,re=S.replace===!0,te=H(B);if(te)return K(Me(M(te),{state:ye,force:we,replace:re}),W||B);const g=B;g.redirectedFrom=W;let y;return!we&&aS(i,j,B)&&(y=Ts(16,{to:g,from:j}),Ct(j,j,!0,!1)),(y?Promise.resolve(y):de(g,j)).catch(T=>Ln(T)?Ln(T,2)?T:He(T):ae(T,g,j)).then(T=>{if(T){if(Ln(T,2))return K(Me(M(T.to),{state:ye,force:we,replace:re}),W||g)}else T=oe(g,j,!0,re,ye);return X(g,j,T),T})}function ue(S,W){const B=U(S,W);return B?Promise.reject(B):Promise.resolve()}function de(S,W){let B;const[j,ye,we]=iO(S,W);B=Ll(j.reverse(),"beforeRouteLeave",S,W);for(const te of j)te.leaveGuards.forEach(g=>{B.push(Bn(g,S,W))});const re=ue.bind(null,S,W);return B.push(re),Yi(B).then(()=>{B=[];for(const te of r.list())B.push(Bn(te,S,W));return B.push(re),Yi(B)}).then(()=>{B=Ll(ye,"beforeRouteUpdate",S,W);for(const te of ye)te.updateGuards.forEach(g=>{B.push(Bn(g,S,W))});return B.push(re),Yi(B)}).then(()=>{B=[];for(const te of S.matched)if(te.beforeEnter&&!W.matched.includes(te))if(Array.isArray(te.beforeEnter))for(const g of te.beforeEnter)B.push(Bn(g,S,W));else B.push(Bn(te.beforeEnter,S,W));return B.push(re),Yi(B)}).then(()=>(S.matched.forEach(te=>te.enterCallbacks={}),B=Ll(we,"beforeRouteEnter",S,W),B.push(re),Yi(B))).then(()=>{B=[];for(const te of o.list())B.push(Bn(te,S,W));return B.push(re),Yi(B)}).catch(te=>Ln(te,8)?te:Promise.reject(te))}function X(S,W,B){for(const j of a.list())j(S,W,B)}function oe(S,W,B,j,ye){const we=U(S,W);if(we)return we;const re=W===Dn,te=ts?history.state:{};B&&(j||re?s.replace(S.fullPath,Me({scroll:re&&te&&te.scroll},ye)):s.push(S.fullPath,ye)),c.value=S,Ct(S,W,B,re),He()}let Te;function Oe(){Te=s.listen((S,W,B)=>{const j=N(S),ye=H(j);if(ye){K(Me(ye,{replace:!0}),j).catch(Ar);return}u=j;const we=c.value;ts&&gS(Hf(we.fullPath,B.delta),za()),de(j,we).catch(re=>Ln(re,12)?re:Ln(re,2)?(K(re.to,j).then(te=>{Ln(te,20)&&!B.delta&&B.type===Wr.pop&&s.go(-1,!1)}).catch(Ar),Promise.reject()):(B.delta&&s.go(-B.delta,!1),ae(re,j,we))).then(re=>{re=re||oe(j,we,!1),re&&(B.delta?s.go(-B.delta,!1):B.type===Wr.pop&&Ln(re,20)&&s.go(-1,!1)),X(j,we,re)}).catch(Ar)})}let Pe=cr(),mt=cr(),ve;function ae(S,W,B){He(S);const j=mt.list();return j.length?j.forEach(ye=>ye(S,W,B)):console.error(S),Promise.reject(S)}function me(){return ve&&c.value!==Dn?Promise.resolve():new Promise((S,W)=>{Pe.add([S,W])})}function He(S){return ve||(ve=!S,Oe(),Pe.list().forEach(([W,B])=>S?B(S):W()),Pe.reset()),S}function Ct(S,W,B,j){const{scrollBehavior:ye}=t;if(!ts||!ye)return Promise.resolve();const we=!B&&_S(Hf(S.fullPath,0))||(j||!B)&&history.state&&history.state.scroll||null;return du().then(()=>ye(S,W,we)).then(re=>re&&pS(re)).catch(re=>ae(re,S,W))}const dt=S=>s.go(S);let Ye;const Ge=new Set;return{currentRoute:c,addRoute:v,removeRoute:E,hasRoute:A,getRoutes:w,resolve:N,options:t,push:F,replace:Y,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:mt.add,isReady:me,install(S){const W=this;S.component("RouterLink",JS),S.component("RouterView",nO),S.config.globalProperties.$router=W,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(c)}),ts&&!Ye&&c.value===Dn&&(Ye=!0,F(s.location).catch(ye=>{}));const B={};for(const ye in Dn)B[ye]=Vt(()=>c.value[ye]);S.provide(Uu,W),S.provide(Y_,Ls(B)),S.provide(Ec,c);const j=S.unmount;Ge.add(S),S.unmount=function(){Ge.delete(S),Ge.size<1&&(u=Dn,Te&&Te(),c.value=Dn,Ye=!1,ve=!1),j()}}}}function Yi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iO(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Cs(u,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Cs(u,c))||s.push(c))}return[n,i,s]}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Vu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function om(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sO=om,am=new io("auth","Firebase",om());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new xu("@firebase/auth");function Qo(t,...e){Jf.logLevel<=$e.ERROR&&Jf.error(`Auth (${ro}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw Wu(t,...e)}function an(t,...e){return Wu(t,...e)}function rO(t,e,n){const i=Object.assign(Object.assign({},sO()),{[e]:n});return new io("auth","Firebase",i).create(e,{appName:t.name})}function Wu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return am.create(t,...e)}function ne(t,e,...n){if(!t)throw Wu(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Sn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new Map;function En(t){Sn(t instanceof Function,"Expected a class definition");let e=Zf.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e){const n=$u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(la(r,e!=null?e:{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function aO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lO(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lO()||HI()||"connection"in navigator)?navigator.onLine:!0}function uO(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=ku()||H_()}get(){return cO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=new oo(3e4,6e4);function ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lo(t,e,n,i,s={}){return cm(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Bs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lm.fetch()(um(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function cm(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},dO),e);try{const s=new fO(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rO(t,d,u);Gt(t,d)}}catch(s){if(s instanceof Fs)throw s;Gt(t,"network-request-failed")}}async function co(t,e,n,i,s={}){const r=await lo(t,e,n,i,s);return"mfaPendingCredential"in r&&Gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function um(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?ju(t.config,s):`${t.config.apiScheme}://${s}`}class fO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(an(this.auth,"network-request-failed")),hO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=an(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(t,e){return lo(t,"POST","/v1/accounts:delete",e)}async function gO(t,e){return lo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _O(t,e=!1){const n=Jt(t),i=await n.getIdToken(e),s=qu(i);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Or($l(s.auth_time)),issuedAtTime:Or($l(s.iat)),expirationTime:Or($l(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $l(t){return Number(t)*1e3}function qu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=_c(n);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s),null}}function mO(t){const e=qu(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Fs&&vO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function vO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(t){var e;const n=t.auth,i=await t.getIdToken(),s=await jr(t,gO(n,{idToken:i}));ne(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wO(r.providerUserInfo):[],a=bO(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new dm(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function EO(t){const e=Jt(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bO(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function wO(t){return t.map(e=>{var{providerId:n}=e,i=Vu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e){const n=await cm(t,{},async()=>{const i=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=um(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lm.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):mO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await CO(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new qr;return i&&(ne(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new dm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _O(this,e)}reload(){return EO(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,pO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,u,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:F,isAnonymous:Y,providerData:H,stsTokenManager:K}=n;ne(U&&K,e,"internal-error");const ue=qr.fromJSON(this.name,K);ne(typeof U=="string",e,"internal-error"),Mn(f,e.name),Mn(p,e.name),ne(typeof F=="boolean",e,"internal-error"),ne(typeof Y=="boolean",e,"internal-error"),Mn(v,e.name),Mn(E,e.name),Mn(w,e.name),Mn(A,e.name),Mn(N,e.name),Mn(M,e.name);const de=new Ii({uid:U,auth:e,email:p,emailVerified:F,displayName:f,isAnonymous:Y,photoURL:E,phoneNumber:v,tenantId:w,stsTokenManager:ue,createdAt:N,lastLoginAt:M});return H&&Array.isArray(H)&&(de.providerData=H.map(X=>Object.assign({},X))),A&&(de._redirectEventId=A),de}static async _fromIdTokenResponse(e,n,i=!1){const s=new qr;s.updateFromServerResponse(n);const r=new Ii({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await da(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hm.type="NONE";const tp=hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Xo(this.userKey,s.apiKey,r),this.fullPersistenceKey=Xo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new os(En(tp),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||En(tp);const o=Xo(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=Ii._fromJSON(e,d);u!==r&&(a=f),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new os(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new os(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mm(e))return"Blackberry";if(vm(e))return"Webos";if(Ku(e))return"Safari";if((e.includes("chrome/")||pm(e))&&!e.includes("edge/"))return"Chrome";if(_m(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fm(t=lt()){return/firefox\//i.test(t)}function Ku(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pm(t=lt()){return/crios\//i.test(t)}function gm(t=lt()){return/iemobile/i.test(t)}function _m(t=lt()){return/android/i.test(t)}function mm(t=lt()){return/blackberry/i.test(t)}function vm(t=lt()){return/webos/i.test(t)}function Ga(t=lt()){return/iphone|ipad|ipod/i.test(t)}function TO(t=lt()){var e;return Ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IO(){return VI()&&document.documentMode===10}function ym(t=lt()){return Ga(t)||_m(t)||vm(t)||mm(t)||/windows phone/i.test(t)||gm(t)}function AO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e=[]){let n;switch(t){case"Browser":n=np(lt());break;case"Worker":n=`${np(lt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=am,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ya(t){return Jt(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function OO(t,e){return lo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return co(t,"POST","/v1/accounts:signInWithPassword",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}async function RO(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends zu{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Kr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PO(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RO(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return co(t,"POST","/v1/accounts:signInWithIdp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO="http://localhost";class Ri extends zu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Vu(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ri(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,as(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:kO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DO(t){const e=_r(mr(t)).link,n=e?_r(mr(e)).deep_link_id:null,i=_r(mr(t)).deep_link_id;return(i?_r(mr(i)).link:null)||i||n||e||t}class Gu{constructor(e){var n,i,s,r,o,a;const c=_r(mr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,f=xO((s=c.mode)!==null&&s!==void 0?s:null);ne(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=DO(e);try{return new Gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Kr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Gu.parseLink(n);return ne(i,"argument-error"),Kr._fromEmailAndCode(e,i.code,i.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends bm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends uo{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends uo{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Hn.credential(n,i)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends uo{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends uo{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Wn.credential(n,i)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return co(t,"POST","/v1/accounts:signUp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ii._fromIdTokenResponse(e,i,s),o=sp(i);return new ki({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=sp(i);return new ki({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function sp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Fs{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ha(e,n,i,s)}}function wm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,r,e,i):r})}async function MO(t,e,n=!1){const i=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await jr(t,wm(i,s,e,t),n);ne(r.idToken,i,"internal-error");const o=qu(r.idToken);ne(o,i,"internal-error");const{sub:a}=o;return ne(t.uid===a,i,"user-mismatch"),ki._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Gt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t,e,n=!1){const i="signIn",s=await wm(t,i,e),r=await ki._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function FO(t,e){return Cm(Ya(t),e)}async function CL(t,e,n){const i=Ya(t),s=await LO(i,{returnSecureToken:!0,email:e,password:n}),r=await ki._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function TL(t,e,n){return FO(Jt(t),Vs.credential(e,n))}function IL(t){return Jt(t).signOut()}const fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(){const t=lt();return Ku(t)||Ga(t)}const UO=1e3,HO=10;class Im extends Tm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BO()&&AO(),this.fallbackToPolling=ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);IO()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HO):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},UO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Im.type="LOCAL";const VO=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Tm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Am.type="SESSION";const Sm=Am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Qa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await WO(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Yu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function qO(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){return typeof ln().WorkerGlobalScope!="undefined"&&typeof ln().importScripts=="function"}async function KO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GO(){return Om()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="firebaseLocalStorageDb",YO=1,pa="firebaseLocalStorage",Pm="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function QO(){const t=indexedDB.deleteDatabase(Nm);return new ho(t).toPromise()}function Tc(){const t=indexedDB.open(Nm,YO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(pa,{keyPath:Pm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(pa)?e(i):(i.close(),await QO(),e(await Tc()))})})}async function rp(t,e,n){const i=Xa(t,!0).put({[Pm]:e,value:n});return new ho(i).toPromise()}async function XO(t,e){const n=Xa(t,!1).get(e),i=await new ho(n).toPromise();return i===void 0?null:i.value}function op(t,e){const n=Xa(t,!0).delete(e);return new ho(n).toPromise()}const JO=800,ZO=3;class Rm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>ZO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(GO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KO(),!this.activeServiceWorker)return;this.sender=new jO(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await rp(e,fa,"1"),await op(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>rp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>XO(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Xa(s,!1).getAll();return new ho(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rm.type="LOCAL";const eN=Rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nN(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=an("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",tN().appendChild(i)})}function iN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e){return e?En(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends zu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rN(t){return Cm(t.auth,new Qu(t),t.bypassAuthState)}function oN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),$O(n,new Qu(t),t.bypassAuthState)}async function aN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),MO(n,new Qu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rN;case"linkViaPopup":case"linkViaRedirect":return aN;case"reauthViaPopup":case"reauthViaRedirect":return oN;default:Gt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new oo(2e3,1e4);class ns extends km{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lN.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="pendingRedirect",Fl=new Map;class uN extends km{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const i=await dN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dN(t,e){const n=fN(e),i=hN(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function hN(t){return En(t._redirectPersistence)}function fN(t){return Xo(cN,t.config.apiKey,t.name)}async function pN(t,e,n=!1){const i=Ya(t),s=sN(i,e),o=await new uN(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=10*60*1e3;class _N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!xm(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gN&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(e))}saveEventToCache(e){this.cachedEventUids.add(ap(e)),this.lastProcessedEventTime=Date.now()}}function ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e={}){return lo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EN=/^https?/;async function bN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vN(t);for(const n of e)try{if(wN(n))return}catch{}Gt(t,"unauthorized-domain")}function wN(t){const e=Cc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!EN.test(n))return!1;if(yN.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=new oo(3e4,6e4);function lp(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TN(t){return new Promise((e,n)=>{var i,s,r;function o(){lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lp(),n(an(t,"network-request-failed"))},timeout:CN.get()})}if(!((s=(i=ln().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ln().gapi)===null||r===void 0)&&r.load)o();else{const a=iN("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},nN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function IN(t){return Jo=Jo||TN(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=new oo(5e3,15e3),SN="__/auth/iframe",ON="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RN(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ju(e,ON):`https://${t.config.authDomain}/${SN}`,i={apiKey:e.apiKey,appName:t.name,v:ro},s=PN.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Bs(i).slice(1)}`}async function kN(t){const e=await IN(t),n=ln().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:RN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{r(o)},AN.get());function c(){ln().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DN=500,LN=600,MN="_blank",$N="http://localhost";class cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FN(t,e,n,i=DN,s=LN){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xN),{width:i.toString(),height:s.toString(),top:r,left:o}),u=lt().toLowerCase();n&&(a=pm(u)?MN:n),fm(u)&&(e=e||$N,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[v,E])=>`${p}${v}=${E},`,"");if(TO(u)&&a!=="_self")return BN(e||"",a),new cp(null);const f=window.open(e||"",a,d);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new cp(f)}function BN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="__/auth/handler",HN="emulator/auth/handler";function up(t,e,n,i,s,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ro,eventId:s};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof uo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${VN(t)}?${Bs(a).slice(1)}`}function VN({config:t}){return t.emulator?ju(t,HN):`https://${t.authDomain}/${UN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="webStorageSupport";class WN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sm,this._completeRedirectFn=pN}async _openPopup(e,n,i,s){var r;Sn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=up(e,n,i,Cc(),s);return FN(e,o,Yu())}async _openRedirect(e,n,i,s){return await this._originValidation(e),qO(up(e,n,i,Cc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await kN(e),i=new _N(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bl,{type:Bl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Bl];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ym()||Ku()||Ga()}}const jN=WN;var dp="@firebase/auth",hp="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zN(t){ws(new Ni("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{ne(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),ne(!(r!=null&&r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Em(t)},c=new SO(o,a);return aO(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ws(new Ni("auth-internal",e=>{const n=Ya(e.getProvider("auth").getImmediate());return(i=>new qN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(dp,hp,KN(t)),Yn(dp,hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t=z_()){const e=$u(t,"auth");return e.isInitialized()?e.getImmediate():oO(t,{popupRedirectResolver:jN,persistence:[eN,VO,Sm]})}zN("Browser");const Dm="SweetAlert2:",GN=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Xu=t=>t.charAt(0).toUpperCase()+t.slice(1),Dt=t=>Array.prototype.slice.call(t),wt=t=>{console.warn(`${Dm} ${typeof t=="object"?t.join(" "):t}`)},Hi=t=>{console.error(`${Dm} ${t}`)},fp=[],YN=t=>{fp.includes(t)||(fp.push(t),wt(t))},QN=(t,e)=>{YN(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Ja=t=>typeof t=="function"?t():t,Ju=t=>t&&typeof t.toPromise=="function",fo=t=>Ju(t)?t.toPromise():Promise.resolve(t),Zu=t=>t&&Promise.resolve(t)===t,ls={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},XN=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],JN={},ZN=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Lm=t=>Object.prototype.hasOwnProperty.call(ls,t),Mm=t=>XN.indexOf(t)!==-1,Ic=t=>JN[t],e0=t=>{Lm(t)||wt(`Unknown parameter "${t}"`)},t0=t=>{ZN.includes(t)&&wt(`The parameter "${t}" is incompatible with toasts`)},n0=t=>{Ic(t)&&QN(t,Ic(t))},i0=t=>{!t.backdrop&&t.allowOutsideClick&&wt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)e0(e),t.toast&&t0(e),n0(e)},s0="swal2-",$m=t=>{const e={};for(const n in t)e[t[n]]=s0+t[n];return e},I=$m(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Nr=$m(["success","warning","info","question","error"]),ct=()=>document.body.querySelector(`.${I.container}`),po=t=>{const e=ct();return e?e.querySelector(t):null},Ut=t=>po(`.${t}`),Se=()=>Ut(I.popup),go=()=>Ut(I.icon),Fm=()=>Ut(I.title),ga=()=>Ut(I["html-container"]),Bm=()=>Ut(I.image),Um=()=>Ut(I["progress-steps"]),Za=()=>Ut(I["validation-message"]),Yt=()=>po(`.${I.actions} .${I.confirm}`),Zn=()=>po(`.${I.actions} .${I.deny}`),r0=()=>Ut(I["input-label"]),Ws=()=>po(`.${I.loader}`),xi=()=>po(`.${I.actions} .${I.cancel}`),_o=()=>Ut(I.actions),Hm=()=>Ut(I.footer),el=()=>Ut(I["timer-progress-bar"]),ed=()=>Ut(I.close),o0=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,td=()=>{const t=Dt(Se().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,i)=>{const s=parseInt(n.getAttribute("tabindex")),r=parseInt(i.getAttribute("tabindex"));return s>r?1:s<r?-1:0}),e=Dt(Se().querySelectorAll(o0)).filter(n=>n.getAttribute("tabindex")!=="-1");return GN(t.concat(e)).filter(n=>Pt(n))},nd=()=>Cn(document.body,I.shown)&&!Cn(document.body,I["toast-shown"])&&!Cn(document.body,I["no-backdrop"]),tl=()=>Se()&&Cn(Se(),I.toast),a0=()=>Se().hasAttribute("data-loading"),cs={previousBodyPadding:null},at=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html");Dt(i.querySelector("head").childNodes).forEach(s=>{t.appendChild(s)}),Dt(i.querySelector("body").childNodes).forEach(s=>{t.appendChild(s)})}},Cn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},l0=(t,e)=>{Dt(t.classList).forEach(n=>{!Object.values(I).includes(n)&&!Object.values(Nr).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Bt=(t,e,n)=>{if(l0(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return wt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);be(t,e.customClass[n])}},id=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${I.popup} > .${I[e]}`);case"checkbox":return t.querySelector(`.${I.popup} > .${I.checkbox} input`);case"radio":return t.querySelector(`.${I.popup} > .${I.radio} input:checked`)||t.querySelector(`.${I.popup} > .${I.radio} input:first-child`);case"range":return t.querySelector(`.${I.popup} > .${I.range} input`);default:return t.querySelector(`.${I.popup} > .${I.input}`)}},Vm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Wm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},be=(t,e)=>{Wm(t,e,!0)},dn=(t,e)=>{Wm(t,e,!1)},jn=(t,e)=>{const n=Dt(t.childNodes);for(let i=0;i<n.length;i++)if(Cn(n[i],e))return n[i]},Pr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},rt=(t,e="flex")=>{t.style.display=e},ut=t=>{t.style.display="none"},pp=(t,e,n,i)=>{const s=t.querySelector(e);s&&(s.style[n]=i)},nl=(t,e,n)=>{e?rt(t,n):ut(t)},Pt=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),c0=()=>!Pt(Yt())&&!Pt(Zn())&&!Pt(xi()),gp=t=>t.scrollHeight>t.clientHeight,jm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},sd=(t,e=!1)=>{const n=el();Pt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},u0=()=>{const t=el(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.removeProperty("transition"),t.style.width=`${i}%`},qm=()=>typeof window=="undefined"||typeof document=="undefined",d0=100,ie={},h0=()=>{ie.previousActiveElement&&ie.previousActiveElement.focus?(ie.previousActiveElement.focus(),ie.previousActiveElement=null):document.body&&document.body.focus()},f0=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;ie.restoreFocusTimeout=setTimeout(()=>{h0(),e()},d0),window.scrollTo(n,i)}),p0=`
 <div aria-labelledby="${I.title}" aria-describedby="${I["html-container"]}" class="${I.popup}" tabindex="-1">
   <button type="button" class="${I.close}"></button>
   <ul class="${I["progress-steps"]}"></ul>
   <div class="${I.icon}"></div>
   <img class="${I.image}" />
   <h2 class="${I.title}" id="${I.title}"></h2>
   <div class="${I["html-container"]}" id="${I["html-container"]}"></div>
   <input class="${I.input}" />
   <input type="file" class="${I.file}" />
   <div class="${I.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${I.select}"></select>
   <div class="${I.radio}"></div>
   <label for="${I.checkbox}" class="${I.checkbox}">
     <input type="checkbox" />
     <span class="${I.label}"></span>
   </label>
   <textarea class="${I.textarea}"></textarea>
   <div class="${I["validation-message"]}" id="${I["validation-message"]}"></div>
   <div class="${I.actions}">
     <div class="${I.loader}"></div>
     <button type="button" class="${I.confirm}"></button>
     <button type="button" class="${I.deny}"></button>
     <button type="button" class="${I.cancel}"></button>
   </div>
   <div class="${I.footer}"></div>
   <div class="${I["timer-progress-bar-container"]}">
     <div class="${I["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),g0=()=>{const t=ct();return t?(t.remove(),dn([document.documentElement,document.body],[I["no-backdrop"],I["toast-shown"],I["has-column"]]),!0):!1},pi=()=>{ie.currentInstance.resetValidationMessage()},_0=()=>{const t=Se(),e=jn(t,I.input),n=jn(t,I.file),i=t.querySelector(`.${I.range} input`),s=t.querySelector(`.${I.range} output`),r=jn(t,I.select),o=t.querySelector(`.${I.checkbox} input`),a=jn(t,I.textarea);e.oninput=pi,n.onchange=pi,r.onchange=pi,o.onchange=pi,a.oninput=pi,i.oninput=()=>{pi(),s.value=i.value},i.onchange=()=>{pi(),i.nextSibling.value=i.value}},m0=t=>typeof t=="string"?document.querySelector(t):t,v0=t=>{const e=Se();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},y0=t=>{window.getComputedStyle(t).direction==="rtl"&&be(ct(),I.rtl)},E0=t=>{const e=g0();if(qm()){Hi("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=I.container,e&&be(n,I["no-transition"]),at(n,p0);const i=m0(t.target);i.appendChild(n),v0(t),y0(i),_0()},rd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?b0(t,e):t&&at(e,t)},b0=(t,e)=>{t.jquery?w0(e,t):at(e,t.toString())},w0=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},zr=(()=>{if(qm())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]!="undefined")return e[n];return!1})(),C0=()=>{const t=document.createElement("div");t.className=I["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},T0=(t,e)=>{const n=_o(),i=Ws();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ut(n):rt(n),Bt(n,e,"actions"),I0(n,i,e),at(i,e.loaderHtml),Bt(i,e,"loader")};function I0(t,e,n){const i=Yt(),s=Zn(),r=xi();Ul(i,"confirm",n),Ul(s,"deny",n),Ul(r,"cancel",n),A0(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e)))}function A0(t,e,n,i){if(!i.buttonsStyling)return dn([t,e,n],I.styled);be([t,e,n],I.styled),i.confirmButtonColor&&(t.style.backgroundColor=i.confirmButtonColor,be(t,I["default-outline"])),i.denyButtonColor&&(e.style.backgroundColor=i.denyButtonColor,be(e,I["default-outline"])),i.cancelButtonColor&&(n.style.backgroundColor=i.cancelButtonColor,be(n,I["default-outline"]))}function Ul(t,e,n){nl(t,n[`show${Xu(e)}Button`],"inline-block"),at(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=I[e],Bt(t,n,`${e}Button`),be(t,n[`${e}ButtonClass`])}function S0(t,e){typeof e=="string"?t.style.background=e:e||be([document.documentElement,document.body],I["no-backdrop"])}function O0(t,e){e in I?be(t,I[e]):(wt('The "position" parameter is not valid, defaulting to "center"'),be(t,I.center))}function N0(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in I&&be(t,I[n])}}const P0=(t,e)=>{const n=ct();!n||(S0(n,e.backdrop),O0(n,e.position),N0(n,e.grow),Bt(n,e,"container"))};var he={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const R0=["input","file","range","select","radio","checkbox","textarea"],k0=(t,e)=>{const n=Se(),i=he.innerParams.get(t),s=!i||e.input!==i.input;R0.forEach(r=>{const o=I[r],a=jn(n,o);L0(r,e.inputAttributes),a.className=o,s&&ut(a)}),e.input&&(s&&x0(e),M0(e))},x0=t=>{if(!yt[t.input])return Hi(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Km(t.input),n=yt[t.input](e,t);rt(n),setTimeout(()=>{Vm(n)})},D0=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},L0=(t,e)=>{const n=id(Se(),t);if(!!n){D0(n);for(const i in e)n.setAttribute(i,e[i])}},M0=t=>{const e=Km(t.input);t.customClass&&be(e,t.customClass.input)},od=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},mo=(t,e,n)=>{if(n.inputLabel){t.id=I.input;const i=document.createElement("label"),s=I["input-label"];i.setAttribute("for",t.id),i.className=s,be(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},Km=t=>{const e=I[t]?I[t]:I.input;return jn(Se(),e)},yt={};yt.text=yt.email=yt.password=yt.number=yt.tel=yt.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Zu(e.inputValue)||wt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),mo(t,t,e),od(t,e),t.type=e.input,t);yt.file=(t,e)=>(mo(t,t,e),od(t,e),t);yt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,i.value=e.inputValue,mo(n,t,e),t};yt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");at(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return mo(t,t,e),t};yt.radio=t=>(t.textContent="",t);yt.checkbox=(t,e)=>{const n=id(Se(),"checkbox");n.value="1",n.id=I.checkbox,n.checked=Boolean(e.inputValue);const i=t.querySelector("span");return at(i,e.inputPlaceholder),t};yt.textarea=(t,e)=>{t.value=e.inputValue,od(t,e),mo(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Se()).width),s=()=>{const r=t.offsetWidth+n(t);r>i?Se().style.width=`${r}px`:Se().style.width=null};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const $0=(t,e)=>{const n=ga();Bt(n,e,"htmlContainer"),e.html?(rd(e.html,n),rt(n,"block")):e.text?(n.textContent=e.text,rt(n,"block")):ut(n),k0(t,e)},F0=(t,e)=>{const n=Hm();nl(n,e.footer),e.footer&&rd(e.footer,n),Bt(n,e,"footer")},B0=(t,e)=>{const n=ed();at(n,e.closeButtonHtml),Bt(n,e,"closeButton"),nl(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},U0=(t,e)=>{const n=he.innerParams.get(t),i=go();if(n&&e.icon===n.icon){mp(i,e),_p(i,e);return}if(!e.icon&&!e.iconHtml)return ut(i);if(e.icon&&Object.keys(Nr).indexOf(e.icon)===-1)return Hi(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ut(i);rt(i),mp(i,e),_p(i,e),be(i,e.showClass.icon)},_p=(t,e)=>{for(const n in Nr)e.icon!==n&&dn(t,Nr[n]);be(t,Nr[e.icon]),j0(t,e),H0(),Bt(t,e,"icon")},H0=()=>{const t=Se(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},V0=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,W0=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,mp=(t,e)=>{t.textContent="",e.iconHtml?at(t,vp(e.iconHtml)):e.icon==="success"?at(t,V0):e.icon==="error"?at(t,W0):at(t,vp({question:"?",warning:"!",info:"i"}[e.icon]))},j0=(t,e)=>{if(!!e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])pp(t,n,"backgroundColor",e.iconColor);pp(t,".swal2-success-ring","borderColor",e.iconColor)}},vp=t=>`<div class="${I["icon-content"]}">${t}</div>`,q0=(t,e)=>{const n=Bm();if(!e.imageUrl)return ut(n);rt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Pr(n,"width",e.imageWidth),Pr(n,"height",e.imageHeight),n.className=I.image,Bt(n,e,"image")},K0=t=>{const e=document.createElement("li");return be(e,I["progress-step"]),at(e,t),e},z0=t=>{const e=document.createElement("li");return be(e,I["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},G0=(t,e)=>{const n=Um();if(!e.progressSteps||e.progressSteps.length===0)return ut(n);rt(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&wt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((i,s)=>{const r=K0(i);if(n.appendChild(r),s===e.currentProgressStep&&be(r,I["active-progress-step"]),s!==e.progressSteps.length-1){const o=z0(e);n.appendChild(o)}})},Y0=(t,e)=>{const n=Fm();nl(n,e.title||e.titleText,"block"),e.title&&rd(e.title,n),e.titleText&&(n.innerText=e.titleText),Bt(n,e,"title")},Q0=(t,e)=>{const n=ct(),i=Se();e.toast?(Pr(n,"width",e.width),i.style.width="100%",i.insertBefore(Ws(),go())):Pr(i,"width",e.width),Pr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),ut(Za()),X0(i,e)},X0=(t,e)=>{t.className=`${I.popup} ${Pt(t)?e.showClass.popup:""}`,e.toast?(be([document.documentElement,document.body],I["toast-shown"]),be(t,I.toast)):be(t,I.modal),Bt(t,e,"popup"),typeof e.customClass=="string"&&be(t,e.customClass),e.icon&&be(t,I[`icon-${e.icon}`])},zm=(t,e)=>{Q0(t,e),P0(t,e),G0(t,e),U0(t,e),q0(t,e),Y0(t,e),B0(t,e),$0(t,e),T0(t,e),F0(t,e),typeof e.didRender=="function"&&e.didRender(Se())},js=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),J0=()=>{Dt(document.body.children).forEach(e=>{e===ct()||e.contains(ct())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Gm=()=>{Dt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Ym=["swal-title","swal-html","swal-footer"],Z0=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return oP(n),Object.assign(eP(n),tP(n),nP(n),iP(n),sP(n),rP(n,Ym))},eP=t=>{const e={};return Dt(t.querySelectorAll("swal-param")).forEach(n=>{Di(n,["name","value"]);const i=n.getAttribute("name"),s=n.getAttribute("value");typeof ls[i]=="boolean"&&s==="false"&&(e[i]=!1),typeof ls[i]=="object"&&(e[i]=JSON.parse(s))}),e},tP=t=>{const e={};return Dt(t.querySelectorAll("swal-button")).forEach(n=>{Di(n,["type","color","aria-label"]);const i=n.getAttribute("type");e[`${i}ButtonText`]=n.innerHTML,e[`show${Xu(i)}Button`]=!0,n.hasAttribute("color")&&(e[`${i}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},nP=t=>{const e={},n=t.querySelector("swal-image");return n&&(Di(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},iP=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Di(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},sP=t=>{const e={},n=t.querySelector("swal-input");n&&(Di(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=t.querySelectorAll("swal-input-option");return i.length&&(e.inputOptions={},Dt(i).forEach(s=>{Di(s,["value"]);const r=s.getAttribute("value"),o=s.innerHTML;e.inputOptions[r]=o})),e},rP=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Di(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},oP=t=>{const e=Ym.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Dt(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.indexOf(i)===-1&&wt(`Unrecognized element <${i}>`)})},Di=(t,e)=>{Dt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&wt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})};var yp={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function aP(t){t.inputValidator||Object.keys(yp).forEach(e=>{t.input===e&&(t.inputValidator=yp[e])})}function lP(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(wt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function cP(t){aP(t),t.showLoaderOnConfirm&&!t.preConfirm&&wt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),lP(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),E0(t)}class uP{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const dP=()=>{cs.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(cs.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${cs.previousBodyPadding+C0()}px`)},hP=()=>{cs.previousBodyPadding!==null&&(document.body.style.paddingRight=`${cs.previousBodyPadding}px`,cs.previousBodyPadding=null)},fP=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Cn(document.body,I.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,be(document.body,I.iosfix),gP(),pP()}},pP=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Se().scrollHeight>window.innerHeight-44&&(ct().style.paddingBottom=`${44}px`)},gP=()=>{const t=ct();let e;t.ontouchstart=n=>{e=_P(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},_P=t=>{const e=t.target,n=ct();return mP(t)||vP(t)?!1:e===n||!gp(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(gp(ga())&&ga().contains(e))},mP=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",vP=t=>t.touches&&t.touches.length>1,yP=()=>{if(Cn(document.body,I.iosfix)){const t=parseInt(document.body.style.top,10);dn(document.body,I.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Qm=10,EP=t=>{const e=ct(),n=Se();typeof t.willOpen=="function"&&t.willOpen(n);const s=window.getComputedStyle(document.body).overflowY;CP(e,n,t),setTimeout(()=>{bP(e,n)},Qm),nd()&&(wP(e,t.scrollbarPadding,s),J0()),!tl()&&!ie.previousActiveElement&&(ie.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),dn(e,I["no-transition"])},Xm=t=>{const e=Se();if(t.target!==e)return;const n=ct();e.removeEventListener(zr,Xm),n.style.overflowY="auto"},bP=(t,e)=>{zr&&jm(e)?(t.style.overflowY="hidden",e.addEventListener(zr,Xm)):t.style.overflowY="auto"},wP=(t,e,n)=>{fP(),e&&n!=="hidden"&&dP(),setTimeout(()=>{t.scrollTop=0})},CP=(t,e,n)=>{be(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),rt(e,"grid"),setTimeout(()=>{be(e,n.showClass.popup),e.style.removeProperty("opacity")},Qm),be([document.documentElement,document.body],I.shown),n.heightAuto&&n.backdrop&&!n.toast&&be([document.documentElement,document.body],I["height-auto"])},Is=t=>{let e=Se();e||new Pc,e=Se();const n=Ws();tl()?ut(go()):TP(e,t),rt(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},TP=(t,e)=>{const n=_o(),i=Ws();!e&&Pt(Yt())&&(e=Yt()),rt(n),e&&(ut(e),i.setAttribute("data-button-to-replace",e.className)),i.parentNode.insertBefore(i,e),be([t,n],I.loading)},IP=(t,e)=>{e.input==="select"||e.input==="radio"?PP(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ju(e.inputValue)||Zu(e.inputValue))&&(Is(Yt()),RP(t,e))},AP=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return SP(n);case"radio":return OP(n);case"file":return NP(n);default:return e.inputAutoTrim?n.value.trim():n.value}},SP=t=>t.checked?1:0,OP=t=>t.checked?t.value:null,NP=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,PP=(t,e)=>{const n=Se(),i=s=>kP[e.input](n,Ac(s),e);Ju(e.inputOptions)||Zu(e.inputOptions)?(Is(Yt()),fo(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Hi(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},RP=(t,e)=>{const n=t.getInput();ut(n),fo(e.inputValue).then(i=>{n.value=e.input==="number"?parseFloat(i)||0:`${i}`,rt(n),n.focus(),t.hideLoading()}).catch(i=>{Hi(`Error in inputValue promise: ${i}`),n.value="",rt(n),n.focus(),t.hideLoading()})},kP={select:(t,e,n)=>{const i=jn(t,I.select),s=(r,o,a)=>{const c=document.createElement("option");c.value=a,at(c,o),c.selected=Ep(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,i.appendChild(c),a.forEach(u=>s(c,u[1],u[0]))}else s(i,a,o)}),i.focus()},radio:(t,e,n)=>{const i=jn(t,I.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),u=document.createElement("label");c.type="radio",c.name=I.radio,c.value=o,Ep(o,n.inputValue)&&(c.checked=!0);const d=document.createElement("span");at(d,a),d.className=I.label,u.appendChild(c),u.appendChild(d),i.appendChild(u)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}},Ac=t=>{const e=[];return typeof Map!="undefined"&&t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Ac(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Ac(i)),e.push([n,i])}),e},Ep=(t,e)=>e&&e.toString()===t.toString();function bp(){const t=he.innerParams.get(this);if(!t)return;const e=he.domCache.get(this);ut(e.loader),tl()?t.icon&&rt(go()):xP(e),dn([e.popup,e.actions],I.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const xP=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?rt(e[0],"inline-block"):c0()&&ut(t.actions)};function DP(t){const e=he.innerParams.get(t||this),n=he.domCache.get(t||this);return n?id(n.popup,e.input):null}var Gr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function Jm(t,e,n,i){tl()?wp(t,i):(f0(n).then(()=>wp(t,i)),ie.keydownTarget.removeEventListener("keydown",ie.keydownHandler,{capture:ie.keydownListenerCapture}),ie.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),nd()&&(hP(),yP(),Gm()),LP()}function LP(){dn([document.documentElement,document.body],[I.shown,I["height-auto"],I["no-backdrop"],I["toast-shown"]])}function Vo(t){t=BP(t);const e=Gr.swalPromiseResolve.get(this),n=$P(this);this.isAwaitingPromise()?t.isDismissed||(vo(this),e(t)):n&&e(t)}function MP(){return!!he.awaitingPromise.get(this)}const $P=t=>{const e=Se();if(!e)return!1;const n=he.innerParams.get(t);if(!n||Cn(e,n.hideClass.popup))return!1;dn(e,n.showClass.popup),be(e,n.hideClass.popup);const i=ct();return dn(i,n.showClass.backdrop),be(i,n.hideClass.backdrop),UP(t,e,n),!0};function FP(t){const e=Gr.swalPromiseReject.get(this);vo(this),e&&e(t)}const vo=t=>{t.isAwaitingPromise()&&(he.awaitingPromise.delete(t),he.innerParams.get(t)||t._destroy())},BP=t=>typeof t=="undefined"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),UP=(t,e,n)=>{const i=ct(),s=zr&&jm(e);typeof n.willClose=="function"&&n.willClose(e),s?HP(t,e,i,n.returnFocus,n.didClose):Jm(t,i,n.returnFocus,n.didClose)},HP=(t,e,n,i,s)=>{ie.swalCloseEventFinishedCallback=Jm.bind(null,t,n,i,s),e.addEventListener(zr,function(r){r.target===e&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback)})},wp=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Zm(t,e,n){const i=he.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function ev(t,e){if(!t)return!1;if(t.type==="radio"){const i=t.parentNode.parentNode.querySelectorAll("input");for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function VP(){Zm(this,["confirmButton","denyButton","cancelButton"],!1)}function WP(){Zm(this,["confirmButton","denyButton","cancelButton"],!0)}function jP(){return ev(this.getInput(),!1)}function qP(){return ev(this.getInput(),!0)}function KP(t){const e=he.domCache.get(this),n=he.innerParams.get(this);at(e.validationMessage,t),e.validationMessage.className=I["validation-message"],n.customClass&&n.customClass.validationMessage&&be(e.validationMessage,n.customClass.validationMessage),rt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid",!0),i.setAttribute("aria-describedby",I["validation-message"]),Vm(i),be(i,I.inputerror))}function zP(){const t=he.domCache.get(this);t.validationMessage&&ut(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),dn(e,I.inputerror))}function GP(){return he.domCache.get(this).progressSteps}function YP(t){const e=Se(),n=he.innerParams.get(this);if(!e||Cn(e,n.hideClass.popup))return wt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const i=QP(t),s=Object.assign({},n,i);zm(this,s),he.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const QP=t=>{const e={};return Object.keys(t).forEach(n=>{Mm(n)?e[n]=t[n]:wt(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function XP(){const t=he.domCache.get(this),e=he.innerParams.get(this);if(!e){tv(this);return}t.popup&&ie.swalCloseEventFinishedCallback&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback),ie.deferDisposalTimer&&(clearTimeout(ie.deferDisposalTimer),delete ie.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),JP(this)}const JP=t=>{tv(t),delete t.params,delete ie.keydownHandler,delete ie.keydownTarget,delete ie.currentInstance},tv=t=>{t.isAwaitingPromise()?(Hl(he,t),he.awaitingPromise.set(t,!0)):(Hl(Gr,t),Hl(he,t))},Hl=(t,e)=>{for(const n in t)t[n].delete(e)};var nv=Object.freeze(Object.defineProperty({__proto__:null,hideLoading:bp,disableLoading:bp,getInput:DP,close:Vo,isAwaitingPromise:MP,rejectPromise:FP,handleAwaitingPromise:vo,closePopup:Vo,closeModal:Vo,closeToast:Vo,enableButtons:VP,disableButtons:WP,enableInput:jP,disableInput:qP,showValidationMessage:KP,resetValidationMessage:zP,getProgressSteps:GP,update:YP,_destroy:XP},Symbol.toStringTag,{value:"Module"}));const ZP=t=>{const e=he.innerParams.get(t);t.disableButtons(),e.input?iv(t,"confirm"):ld(t,!0)},eR=t=>{const e=he.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?iv(t,"deny"):ad(t,!1)},tR=(t,e)=>{t.disableButtons(),e(js.cancel)},iv=(t,e)=>{const n=he.innerParams.get(t);if(!n.input)return Hi(`The "input" parameter is needed to be set when using returnInputValueOn${Xu(e)}`);const i=AP(t,n);n.inputValidator?nR(t,i,e):t.getInput().checkValidity()?e==="deny"?ad(t,i):ld(t,i):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},nR=(t,e,n)=>{const i=he.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>fo(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?ad(t,e):ld(t,e)})},ad=(t,e)=>{const n=he.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Is(Zn()),n.preDeny?(he.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>fo(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),vo(t)):t.closePopup({isDenied:!0,value:typeof s=="undefined"?e:s})}).catch(s=>sv(t||globalThis,s))):t.closePopup({isDenied:!0,value:e})},Cp=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},sv=(t,e)=>{t.rejectPromise(e)},ld=(t,e)=>{const n=he.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Is(),n.preConfirm?(t.resetValidationMessage(),he.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>fo(n.preConfirm(e,n.validationMessage))).then(s=>{Pt(Za())||s===!1?(t.hideLoading(),vo(t)):Cp(t,typeof s=="undefined"?e:s)}).catch(s=>sv(t||globalThis,s))):Cp(t,e)},iR=(t,e,n)=>{he.innerParams.get(t).toast?sR(t,e,n):(oR(e),aR(e),lR(t,e,n))},sR=(t,e,n)=>{e.popup.onclick=()=>{const i=he.innerParams.get(t);i&&(rR(i)||i.timer||i.input)||n(js.close)}},rR=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let _a=!1;const oR=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(_a=!0)}}},aR=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(_a=!0)}}},lR=(t,e,n)=>{e.container.onclick=i=>{const s=he.innerParams.get(t);if(_a){_a=!1;return}i.target===e.container&&Ja(s.allowOutsideClick)&&n(js.backdrop)}},cR=()=>Pt(Se()),rv=()=>Yt()&&Yt().click(),uR=()=>Zn()&&Zn().click(),dR=()=>xi()&&xi().click(),hR=(t,e,n,i)=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1),n.toast||(e.keydownHandler=s=>pR(t,s,i),e.keydownTarget=n.keydownListenerCapture?window:Se(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Sc=(t,e,n)=>{const i=td();if(i.length)return e=e+n,e===i.length?e=0:e===-1&&(e=i.length-1),i[e].focus();Se().focus()},ov=["ArrowRight","ArrowDown"],fR=["ArrowLeft","ArrowUp"],pR=(t,e,n)=>{const i=he.innerParams.get(t);!i||e.isComposing||e.keyCode===229||(i.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?gR(t,e,i):e.key==="Tab"?_R(e,i):[...ov,...fR].includes(e.key)?mR(e.key):e.key==="Escape"&&vR(e,i,n))},gR=(t,e,n)=>{if(!!Ja(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;rv(),e.preventDefault()}},_R=(t,e)=>{const n=t.target,i=td();let s=-1;for(let r=0;r<i.length;r++)if(n===i[r]){s=r;break}t.shiftKey?Sc(e,s,-1):Sc(e,s,1),t.stopPropagation(),t.preventDefault()},mR=t=>{const e=Yt(),n=Zn(),i=xi();if(![e,n,i].includes(document.activeElement))return;const s=ov.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<_o().children.length;o++){if(r=r[s],!r)return;if(Pt(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},vR=(t,e,n)=>{Ja(e.allowEscapeKey)&&(t.preventDefault(),n(js.esc))},yR=t=>typeof t=="object"&&t.jquery,Tp=t=>t instanceof Element||yR(t),ER=t=>{const e={};return typeof t[0]=="object"&&!Tp(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||Tp(s)?e[n]=s:s!==void 0&&Hi(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function bR(...t){const e=this;return new e(...t)}function wR(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const CR=()=>ie.timeout&&ie.timeout.getTimerLeft(),av=()=>{if(ie.timeout)return u0(),ie.timeout.stop()},lv=()=>{if(ie.timeout){const t=ie.timeout.start();return sd(t),t}},TR=()=>{const t=ie.timeout;return t&&(t.running?av():lv())},IR=t=>{if(ie.timeout){const e=ie.timeout.increase(t);return sd(e,!0),e}},AR=()=>ie.timeout&&ie.timeout.isRunning();let Ip=!1;const Oc={};function SR(t="data-swal-template"){Oc[t]=this,Ip||(document.body.addEventListener("click",OR),Ip=!0)}const OR=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Oc){const i=e.getAttribute(n);if(i){Oc[n].fire({template:i});return}}};var NR=Object.freeze(Object.defineProperty({__proto__:null,isValidParameter:Lm,isUpdatableParameter:Mm,isDeprecatedParameter:Ic,argsToParams:ER,getContainer:ct,getPopup:Se,getTitle:Fm,getHtmlContainer:ga,getImage:Bm,getIcon:go,getInputLabel:r0,getCloseButton:ed,getActions:_o,getConfirmButton:Yt,getDenyButton:Zn,getCancelButton:xi,getLoader:Ws,getFooter:Hm,getTimerProgressBar:el,getFocusableElements:td,getValidationMessage:Za,isLoading:a0,isVisible:cR,clickConfirm:rv,clickDeny:uR,clickCancel:dR,fire:bR,mixin:wR,showLoading:Is,enableLoading:Is,getTimerLeft:CR,stopTimer:av,resumeTimer:lv,toggleTimer:TR,increaseTimer:IR,isTimerRunning:AR,bindClickHandler:SR},Symbol.toStringTag,{value:"Module"}));let Nc;class qs{constructor(...e){if(typeof window=="undefined")return;Nc=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const i=this._main(this.params);he.promise.set(this,i)}_main(e,n={}){i0(Object.assign({},n,e)),ie.currentInstance&&(ie.currentInstance._destroy(),nd()&&Gm()),ie.currentInstance=this;const i=RR(e,n);cP(i),Object.freeze(i),ie.timeout&&(ie.timeout.stop(),delete ie.timeout),clearTimeout(ie.restoreFocusTimeout);const s=kR(this);return zm(this,i),he.innerParams.set(this,i),PR(this,s,i)}then(e){return he.promise.get(this).then(e)}finally(e){return he.promise.get(this).finally(e)}}const PR=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Gr.swalPromiseResolve.set(t,i),Gr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>ZP(t),e.denyButton.onclick=()=>eR(t),e.cancelButton.onclick=()=>tR(t,r),e.closeButton.onclick=()=>r(js.close),iR(t,e,r),hR(t,ie,n,r),IP(t,n),EP(n),xR(ie,n,r),DR(e,n),setTimeout(()=>{e.container.scrollTop=0})}),RR=(t,e)=>{const n=Z0(t),i=Object.assign({},ls,e,n,t);return i.showClass=Object.assign({},ls.showClass,i.showClass),i.hideClass=Object.assign({},ls.hideClass,i.hideClass),i},kR=t=>{const e={popup:Se(),container:ct(),actions:_o(),confirmButton:Yt(),denyButton:Zn(),cancelButton:xi(),loader:Ws(),closeButton:ed(),validationMessage:Za(),progressSteps:Um()};return he.domCache.set(t,e),e},xR=(t,e,n)=>{const i=el();ut(i),e.timer&&(t.timeout=new uP(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(rt(i),Bt(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&sd(e.timer)})))},DR=(t,e)=>{if(!e.toast){if(!Ja(e.allowEnterKey))return MR();LR(t,e)||Sc(e,-1,1)}},LR=(t,e)=>e.focusDeny&&Pt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Pt(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Pt(t.confirmButton)?(t.confirmButton.focus(),!0):!1,MR=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(qs.prototype,nv);Object.assign(qs,NR);Object.keys(nv).forEach(t=>{qs[t]=function(...e){if(Nc)return Nc[t](...e)}});qs.DismissReason=js;qs.version="11.4.4";const Pc=qs;Pc.default=Pc;const Ap="@firebase/database",Sp="0.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv="";function $R(t){cv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FR(e)}}catch{}return new BR},Ei=uv("localStorage"),Rc=uv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new xu("@firebase/database"),UR=function(){let t=1;return function(){return t++}}(),dv=function(t){const e=eA(t),n=new QI;n.update(e);const i=n.digest();return Pu.encodeByteArray(i)},yo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=yo.apply(null,i):typeof i=="object"?e+=tt(i):e+=i,e+=" "}return e};let Ai=null,Op=!0;const HR=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(us.logLevel=$e.VERBOSE,Ai=us.log.bind(us),e&&Rc.set("logging_enabled",!0)):typeof t=="function"?Ai=t:(Ai=null,Rc.remove("logging_enabled"))},st=function(...t){if(Op===!0&&(Op=!1,Ai===null&&Rc.get("logging_enabled")===!0&&HR(!0)),Ai){const e=yo.apply(null,t);Ai(e)}},Eo=function(t){return function(...e){st(t,...e)}},kc=function(...t){const e="FIREBASE INTERNAL ERROR: "+yo(...t);us.error(e)},Li=function(...t){const e=`FIREBASE FATAL ERROR: ${yo(...t)}`;throw us.error(e),new Error(e)},gt=function(...t){const e="FIREBASE WARNING: "+yo(...t);us.warn(e)},VR=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",Mi="[MAX_NAME]",Vi=function(t,e){if(t===e)return 0;if(t===As||e===Mi)return-1;if(e===As||t===Mi)return 1;{const n=Np(t),i=Np(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},jR=function(t,e){return t===e?0:t<e?-1:1},ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},ud=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=tt(e[i]),n+=":",n+=ud(t[e[i]]);return n+="}",n},hv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fv=function(t){L(!cd(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(d.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},qR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const GR=new RegExp("^-?(0*)\\d{1,10}$"),YR=-2147483648,QR=2147483647,Np=function(t){if(GR.test(t)){const e=Number(t);if(e>=YR&&e<=QR)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},XR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rr=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class xc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",pv="v",gv="s",_v="r",mv="f",vv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yv="ls",ek="p",Dc="ac",Ev="websocket",bv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wv(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let i;if(e===Ev)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nk(t)&&(n.ns=t.namespace);const s=[];return ot(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.counters_={}}incrementCounter(e,n=1){hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return BI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={},Wl={};function hd(t){const e=t.toString();return Vl[e]||(Vl[e]=new ik),Vl[e]}function sk(t,e){const n=t.toString();return Wl[n]||(Wl[n]=e()),Wl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ks(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="start",ok="close",ak="pLPCommand",lk="pRTLPCB",Cv="id",Tv="pw",Iv="ser",ck="cb",uk="seg",dk="ts",hk="d",fk="dframe",Av=1870,Sv=30,pk=Av-Sv,gk=25e3,_k=3e4;class is{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Eo(e),this.stats_=hd(n),this.urlFn=c=>(this.appCheckToken&&(c[Dc]=this.appCheckToken),wv(n,bv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_k)),WR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fd((...r)=>{const[o,a,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pp)this.id=a,this.password=c;else if(o===ok)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Pp]="t",i[Iv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ck]=this.scriptTagHolder.uniqueCallbackIdentifier),i[pv]=dd,this.transportSessionId&&(i[gv]=this.transportSessionId),this.lastSessionId&&(i[yv]=this.lastSessionId),this.applicationId&&(i[ek]=this.applicationId),this.appCheckToken&&(i[Dc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&vv.test(location.hostname)&&(i[_v]=mv);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!qR()&&!KR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ru(n),s=hv(i,pk);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[fk]="t",i[Cv]=e,i[Tv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fd{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UR(),window[ak+this.uniqueCallbackIdentifier]=e,window[lk+this.uniqueCallbackIdentifier]=n,this.myIFrame=fd.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cv]=this.myID,e[Tv]=this.myPW,e[Iv]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sv+i.length<=Av;){const o=this.pendingSegs.shift();i=i+"&"+uk+s+"="+o.seg+"&"+dk+s+"="+o.ts+"&"+hk+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(gk)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=16384,vk=45e3;let ma=null;typeof MozWebSocket!="undefined"?ma=MozWebSocket:typeof WebSocket!="undefined"&&(ma=WebSocket);class Wt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Eo(this.connId),this.stats_=hd(n),this.connURL=Wt.connectionURL_(n,o,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[pv]=dd,typeof location!="undefined"&&location.hostname&&vv.test(location.hostname)&&(r[_v]=mv),n&&(r[gv]=n),i&&(r[yv]=i),s&&(r[Dc]=s),wv(e,Ev,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{if(!V_()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ma(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ma!==null&&!Wt.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Hr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hv(n,mk);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[is,Wt]}initTransports_(e){const n=Wt&&Wt.isAvailable();let i=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Wt];else{const s=this.transports_=[];for(const r of pd.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=6e4,Ek=5e3,bk=10*1024,wk=100*1024,jl="t",Rp="d",Ck="s",kp="r",Tk="e",xp="o",Dp="a",Lp="n",Mp="p",Ik="h";class Ak{constructor(e,n,i,s,r,o,a,c,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Eo("c:"+this.id+":"),this.transportManager_=new pd(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jl in e){const n=e[jl];n===Dp?this.upgradeIfSecondaryHealthy_():n===kp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ur("t",e),i=ur("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ur("t",e),i=ur("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ur(jl,e);if(Rp in e){const i=e[Rp];if(n===Ik)this.onHandshake_(i);else if(n===Lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ck?this.onConnectionShutdown_(i):n===kp?this.onReset_(i):n===Tk?kc("Server Error: "+i):n===xp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dd!==i&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ek))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Nv{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ku()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=32,Fp=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new xe("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ei(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function gd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function je(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof xe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new xe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function Et(t,e){const n=pe(t),i=pe(e);if(n===null)return e;if(n===i)return Et(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ok(t,e){const n=Yr(t,0),i=Yr(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Vi(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function _d(t,e){if(ei(t)!==ei(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function $t(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ei(t)>ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Nk{constructor(e,n){this.errorPrefix_=n,this.parts_=Yr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Wa(this.parts_[i]);Rv(this)}}function Pk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wa(e),Rv(t)}function Rk(t){const e=t.parts_.pop();t.byteLength_-=Wa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rv(t){if(t.byteLength_>Fp)throw new Error(t.errorPrefix_+"has a key path longer than "+Fp+" bytes ("+t.byteLength_+").");if(t.parts_.length>$p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$p+") or object contains a cycle "+mi(t))}function mi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends Nv{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new md}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=1e3,kk=60*5*1e3,xk=3*1e3,Bp=30*1e3,Dk=1.3,Lk=3e4,Mk="server_kill",Up=3;class Tn extends Ov{constructor(e,n,i,s,r,o,a,c){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Tn.nextPersistentConnectionId_++,this.log_=Eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=kk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!V_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(tt(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new no,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},xk),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;Tn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hn(e,"w")){const i=bs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=GI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kc("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lk&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Tn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},u=function(f){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new Ak(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,v=>{gt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mk)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&gt(f),c())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mc(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ud(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new xe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Up&&(this.reconnectDelay_=Bp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Up&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cv.replace(/\./g,"-")]=1,ku()?e["framework.cordova"]=1:H_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return mc(this.interruptReasons_)&&e}}Tn.nextPersistentConnectionId_=0;Tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ge(As,e),s=new ge(As,n);return this.compare(i,s)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class kv extends il{static get __EMPTY_NODE(){return Wo}static set __EMPTY_NODE(e){Wo=e}compare(e,n){return Vi(e.name,n.name)}isDefinedOn(e){throw $s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Mi,Wo)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Wo)}toString(){return".key"}}const ds=new kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Je.RED,this.left=s!=null?s:bt.EMPTY_NODE,this.right=r!=null?r:bt.EMPTY_NODE}copy(e,n,i,s,r){return new Je(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class $k{copy(e,n,i,s,r){return this}insert(e,n,i){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jo(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new $k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){return Vi(t.name,e.name)}function vd(t,e){return Vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;function Bk(t){Lc=t}const xv=function(t){return typeof t=="number"?"number:"+fv(t):"string:"+t},Dv=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hn(e,".sv"),"Priority must be a string or number.")}else L(t===Lc||t.isEmpty(),"priority of unexpected type.");L(t===Lc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hp;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dv(this.priorityNode_)}static set __childrenNodeConstructor(e){Hp=e}static get __childrenNodeConstructor(){return Hp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:pe(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=pe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(L(i!==".priority"||ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fv(this.value_):e+=this.value_,this.lazyHash_=dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),r=Xe.VALUE_TYPE_ORDER.indexOf(i);return L(s>=0,"Unknown leaf type: "+n),L(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lv,Mv;function Uk(t){Lv=t}function Hk(t){Mv=t}class Vk extends il{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Mi,new Xe("[PRIORITY-POST]",Mv))}makePost(e,n){const i=Lv(e);return new ge(n,new Xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ke=new Vk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=Math.log(2);class jk{constructor(e){const n=r=>parseInt(Math.log(r)/Wk,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(t,e,n,i){t.sort(e);const s=function(c,u){const d=u-c;let f,p;if(d===0)return null;if(d===1)return f=t[c],p=n?n(f):f,new Je(p,f.node,Je.BLACK,null,null);{const v=parseInt(d/2,10)+c,E=s(c,v),w=s(v+1,u);return f=t[v],p=n?n(f):f,new Je(p,f.node,Je.BLACK,E,w)}},r=function(c){let u=null,d=null,f=t.length;const p=function(E,w){const A=f-E,N=f;f-=E;const M=s(A+1,N),U=t[A],F=n?n(U):U;v(new Je(F,U.node,w,null,M))},v=function(E){u?(u.left=E,u=E):(d=E,u=E)};for(let E=0;E<c.count;++E){const w=c.nextBitIsOne(),A=Math.pow(2,c.count-(E+1));w?p(A,Je.BLACK):(p(A,Je.BLACK),p(A,Je.RED))}return d},o=new jk(t.length),a=r(o);return new bt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;const Qi={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Qi&&Ke,"ChildrenNode.ts has not been loaded"),ql=ql||new bn({".priority":Qi},{".priority":Ke}),ql}get(e){const n=bs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return hn(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ya(i,e.getCompare()):a=Qi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new bn(d,u)}addToIndexes(e,n){const i=aa(this.indexes_,(s,r)=>{const o=bs(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),s===Qi)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ge.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),ya(a,o.getCompare())}else return Qi;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ge(e.name,a))),c.insert(e,e.node)}});return new bn(i,this.indexSet_)}removeFromIndexes(e,n){const i=aa(this.indexes_,s=>{if(s===Qi)return s;{const r=n.get(e.name);return r?s.remove(new ge(e.name,r)):s}});return new bn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;class J{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dv(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hr||(hr=new J(new bt(vd),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hr:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ge(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?hr:this.priorityNode_;return new J(s,o,r)}}updateChild(e,n){const i=pe(e);if(i===null)return n;{L(pe(e)!==".priority"||ei(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ue(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ke,(o,a)=>{n[o]=a.val(e),i++,r&&J.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xv(this.getPriority().val())+":"),this.forEachChild(Ke,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bo?-1:0}withIndex(e){if(e===ds||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ds||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ke),s=n.getIterator(Ke);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ds?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qk extends J{constructor(){super(new bt(vd),J.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const bo=new qk;Object.defineProperties(ge,{MIN:{value:new ge(As,J.EMPTY_NODE)},MAX:{value:new ge(Mi,bo)}});kv.__EMPTY_NODE=J.EMPTY_NODE;Xe.__childrenNodeConstructor=J;Bk(bo);Hk(bo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=!0;function Ze(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Ze(e))}if(!(t instanceof Array)&&Kk){const n=[];let i=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ze(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ge(o,c)))}}),n.length===0)return J.EMPTY_NODE;const r=ya(n,Fk,o=>o.name,vd);if(i){const o=ya(n,Ke.getCompare());return new J(r,Ze(e),new bn({".priority":o},{".priority":Ke}))}else return new J(r,Ze(e),bn.Default)}else{let n=J.EMPTY_NODE;return ot(t,(i,s)=>{if(hn(t,i)&&i.substring(0,1)!=="."){const r=Ze(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ze(e))}}Uk(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk extends il{constructor(e){super();this.indexPath_=e,L(!_e(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Vi(e.name,n.name):r}makePost(e,n){const i=Ze(e),s=J.EMPTY_NODE.updateChild(this.indexPath_,i);return new ge(n,s)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,bo);return new ge(Mi,e)}toString(){return Yr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk extends il{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Vi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const i=Ze(e);return new ge(n,i)}toString(){return".value"}}const Yk=new Gk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Qk=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Vp.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vp.charAt(e[s]);return L(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){return{type:"value",snapshotNode:t}}function Ss(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qr(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ss(n,i)):o.trackChildChange(Xr(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ke,(s,r)=>{n.hasChild(s)||i.trackChildChange(Qr(s,r))}),n.isLeafNode()||n.forEachChild(Ke,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Xr(s,r,o))}else i.trackChildChange(Ss(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.indexedFilter_=new yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jr.getStartPost_(e),this.endPost_=Jr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new ge(n,i))||(i=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=J.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(J.EMPTY_NODE);const r=this;return n.forEachChild(Ke,(o,a)=>{r.matches(new ge(o,a))||(s=s.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.rangedFilter_=new Jr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new ge(n,i))||(i=J.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=J.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(J.EMPTY_NODE);let r,o,a,c;if(this.reverse_){c=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(p,v)=>f(v,p)}else c=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,d=!1;for(;c.hasNext();){const f=c.getNext();!d&&a(r,f)<=0&&(d=!0),d&&u<this.limit_&&a(f,o)<=0?u++:s=s.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,v)=>f(v,p)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const c=new ge(n,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=s.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const v=p==null?1:o(p,c);if(d&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(Xr(n,i,f)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Qr(n,f));const w=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Ss(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return i.isEmpty()?e:d&&o(u,c)>=0?(r!=null&&(r.trackChildChange(Qr(u.name,u.node)),r.trackChildChange(Ss(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const e=new Ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zk(t){return t.loadsAllData()?new yd(t.getIndex()):t.hasLimit()?new Jk(t):new Jr(t)}function Wp(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ke?n="$priority":t.index_===Yk?n="$value":t.index_===ds?n="$key":(L(t.index_ instanceof zk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_&&(e.startAt=tt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+tt(t.indexStartName_))),t.endSet_&&(e.endAt=tt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+tt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Ov{constructor(e,n,i,s){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Eo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ea.getListenId_(e,i),a={};this.listens_[o]=a;const c=Wp(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,i),bs(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const i=Ea.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Wp(e._queryParams),i=e._path.toString(),s=new no;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Hr(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){return{value:null,children:new Map}}function Fv(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=pe(e);t.children.has(i)||t.children.set(i,ba());const s=t.children.get(i);e=Ue(e),Fv(s,e,n)}}function Mc(t,e,n){t.value!==null?n(e,t.value):tx(t,(i,s)=>{const r=new xe(e.toString()+"/"+i);Mc(s,r,n)})}function tx(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=10*1e3,ix=30*1e3,sx=5*60*1e3;class rx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nx(e);const i=qp+(ix-qp)*Math.random();Rr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ot(e,(s,r)=>{r>0&&hn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*sx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jt||(jt={}));function bd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=jt.ACK_USER_WRITE,this.source=bd()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new wa(Ie(),n,this.revert)}}else return L(pe(this.path)===e,"operationForChild called for unrelated child."),new wa(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.source=e,this.path=n,this.type=jt.LISTEN_COMPLETE}operationForChild(e){return _e(this.path)?new Zr(this.source,Ie()):new Zr(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=jt.OVERWRITE}operationForChild(e){return _e(this.path)?new $i(this.source,Ie(),this.snap.getImmediateChild(e)):new $i(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=jt.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new $i(this.source,Ie(),n.value):new Os(this.source,Ie(),n)}else return L(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ax(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xk(o.childName,o.snapshotNode))}),fr(t,s,"child_removed",e,i,n),fr(t,s,"child_added",e,i,n),fr(t,s,"child_moved",r,i,n),fr(t,s,"child_changed",e,i,n),fr(t,s,"value",e,i,n),s}function fr(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>cx(t,a,c)),o.forEach(a=>{const c=lx(t,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function lx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cx(t,e,n){if(e.childName==null||n.childName==null)throw $s("Should only compare child_ events.");const i=new ge(e.childName,e.snapshotNode),s=new ge(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e){return{eventCache:t,serverCache:e}}function kr(t,e,n,i){return sl(new Fi(e,n,i),t.serverCache)}function Bv(t,e,n,i){return sl(t.eventCache,new Fi(e,n,i))}function $c(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;const ux=()=>(Kl||(Kl=new bt(jR)),Kl);class Be{constructor(e,n=ux()){this.value=e,this.children=n}static fromObject(e){let n=new Be(null);return ot(e,(i,s)=>{n=n.set(new xe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(_e(e))return null;{const i=pe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ue(e),n);return r!=null?{path:je(new xe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=pe(e),i=this.children.get(n);return i!==null?i.subtree(Ue(e)):new Be(null)}}set(e,n){if(_e(e))return new Be(n,this.children);{const i=pe(e),r=(this.children.get(i)||new Be(null)).set(Ue(e),n),o=this.children.insert(i,r);return new Be(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const n=pe(e),i=this.children.get(n);if(i){const s=i.remove(Ue(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Be(null):new Be(this.value,r)}else return this}}get(e){if(_e(e))return this.value;{const n=pe(e),i=this.children.get(n);return i?i.get(Ue(e)):null}}setTree(e,n){if(_e(e))return n;{const i=pe(e),r=(this.children.get(i)||new Be(null)).setTree(Ue(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Be(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(je(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(_e(e))return null;{const r=pe(e),o=this.children.get(r);return o?o.findOnPath_(Ue(e),je(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,i){if(_e(e))return this;{this.value&&i(n,this.value);const s=pe(e),r=this.children.get(s);return r?r.foreachOnPath_(Ue(e),je(n,s),i):new Be(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(je(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Be(null))}}function xr(t,e,n){if(_e(e))return new zt(new Be(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Et(s,e);return r=r.updateChild(o,n),new zt(t.writeTree_.set(s,r))}else{const s=new Be(n),r=t.writeTree_.setTree(e,s);return new zt(r)}}}function Fc(t,e,n){let i=t;return ot(n,(s,r)=>{i=xr(i,je(e,s),r)}),i}function Kp(t,e){if(_e(e))return zt.empty();{const n=t.writeTree_.setTree(e,new Be(null));return new zt(n)}}function Bc(t,e){return Wi(t,e)!=null}function Wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Et(n.path,e)):null}function zp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ke,(i,s)=>{e.push(new ge(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ge(i,s.value))}),e}function Qn(t,e){if(_e(e))return t;{const n=Wi(t,e);return n!=null?new zt(new Be(n)):new zt(t.writeTree_.subtree(e))}}function Uc(t){return t.writeTree_.isEmpty()}function Ns(t,e){return Uv(Ie(),t.writeTree_,e)}function Uv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Uv(je(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(je(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){return jv(e,t)}function dx(t,e,n,i,s){L(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=xr(t.visibleWrites,e,n)),t.lastWriteId=i}function hx(t,e,n,i){L(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Fc(t.visibleWrites,e,n),t.lastWriteId=i}function fx(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function px(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gx(a,i.path)?s=!1:$t(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return _x(t),!0;if(i.snap)t.visibleWrites=Kp(t.visibleWrites,i.path);else{const a=i.children;ot(a,c=>{t.visibleWrites=Kp(t.visibleWrites,je(i.path,c))})}return!0}else return!1}function gx(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(je(t.path,n),e))return!0;return!1}function _x(t){t.visibleWrites=Hv(t.allWrites,mx,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mx(t){return t.visible}function Hv(t,e,n){let i=zt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)$t(n,o)?(a=Et(n,o),i=xr(i,a,r.snap)):$t(o,n)&&(a=Et(o,n),i=xr(i,Ie(),r.snap.getChild(a)));else if(r.children){if($t(n,o))a=Et(n,o),i=Fc(i,a,r.children);else if($t(o,n))if(a=Et(o,n),_e(a))i=Fc(i,Ie(),r.children);else{const c=bs(r.children,pe(a));if(c){const u=c.getChild(Ue(a));i=xr(i,Ie(),u)}}}else throw $s("WriteRecord should have .snap or .children")}}return i}function Vv(t,e,n,i,s){if(!i&&!s){const r=Wi(t.visibleWrites,e);if(r!=null)return r;{const o=Qn(t.visibleWrites,e);if(Uc(o))return n;if(n==null&&!Bc(o,Ie()))return null;{const a=n||J.EMPTY_NODE;return Ns(o,a)}}}else{const r=Qn(t.visibleWrites,e);if(!s&&Uc(r))return n;if(!s&&n==null&&!Bc(r,Ie()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&($t(u.path,e)||$t(e,u.path))},a=Hv(t.allWrites,o,e),c=n||J.EMPTY_NODE;return Ns(a,c)}}}function vx(t,e,n){let i=J.EMPTY_NODE;const s=Wi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ke,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Qn(t.visibleWrites,e);return n.forEachChild(Ke,(o,a)=>{const c=Ns(Qn(r,new xe(o)),a);i=i.updateImmediateChild(o,c)}),zp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Qn(t.visibleWrites,e);return zp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yx(t,e,n,i,s){L(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=je(e,n);if(Bc(t.visibleWrites,r))return null;{const o=Qn(t.visibleWrites,r);return Uc(o)?s.getChild(n):Ns(o,s.getChild(n))}}function Ex(t,e,n,i){const s=je(e,n),r=Wi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Qn(t.visibleWrites,s);return Ns(o,i.getNode().getImmediateChild(n))}else return null}function bx(t,e){return Wi(t.visibleWrites,e)}function wx(t,e,n,i,s,r,o){let a;const c=Qn(t.visibleWrites,e),u=Wi(c,Ie());if(u!=null)a=u;else if(n!=null)a=Ns(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),p=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let v=p.getNext();for(;v&&d.length<s;)f(v,i)!==0&&d.push(v),v=p.getNext();return d}else return[]}function Cx(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Ca(t,e,n,i){return Vv(t.writeTree,t.treePath,e,n,i)}function Id(t,e){return vx(t.writeTree,t.treePath,e)}function Gp(t,e,n,i){return yx(t.writeTree,t.treePath,e,n,i)}function Ta(t,e){return bx(t.writeTree,je(t.treePath,e))}function Tx(t,e,n,i,s,r){return wx(t.writeTree,t.treePath,e,n,i,s,r)}function Ad(t,e,n){return Ex(t.writeTree,t.treePath,e,n)}function Wv(t,e){return jv(je(t.treePath,e),t.writeTree)}function jv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Xr(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Qr(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ss(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Xr(i,e.snapshotNode,s.oldSnap));else throw $s("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const qv=new Ax;class Sd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ad(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bi(this.viewCache_),r=Tx(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){return{filter:t}}function Ox(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nx(t,e,n,i,s){const r=new Ix;let o,a;if(n.type===jt.OVERWRITE){const u=n;u.source.fromUser?o=Hc(t,e,u.path,u.snap,i,s,r):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=Ia(t,e,u.path,u.snap,i,s,a,r))}else if(n.type===jt.MERGE){const u=n;u.source.fromUser?o=Rx(t,e,u.path,u.children,i,s,r):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Vc(t,e,u.path,u.children,i,s,a,r))}else if(n.type===jt.ACK_USER_WRITE){const u=n;u.revert?o=Dx(t,e,u.path,i,s,r):o=kx(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===jt.LISTEN_COMPLETE)o=xx(t,e,n.path,i,r);else throw $s("Unknown operation type: "+n.type);const c=r.getChanges();return Px(e,o,c),{viewCache:o,changes:c}}function Px(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=$c(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push($v($c(e)))}}function Kv(t,e,n,i,s,r){const o=e.eventCache;if(Ta(i,n)!=null)return e;{let a,c;if(_e(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Bi(e),d=u instanceof J?u:J.EMPTY_NODE,f=Id(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=Ca(i,Bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=pe(n);if(u===".priority"){L(ei(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Gp(i,n,d,c);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ue(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=Gp(i,n,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(d,p):f=o.getNode().getImmediateChild(u)}else f=Ad(i,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,d,s,r):a=o.getNode()}}return kr(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Ia(t,e,n,i,s,r,o,a){const c=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(n,i);u=d.updateFullNode(c.getNode(),v,null)}else{const v=pe(n);if(!c.isCompleteForPath(n)&&ei(n)>1)return e;const E=Ue(n),A=c.getNode().getImmediateChild(v).updateChild(E,i);v===".priority"?u=d.updatePriority(c.getNode(),A):u=d.updateChild(c.getNode(),v,A,E,qv,null)}const f=Bv(e,u,c.isFullyInitialized()||_e(n),d.filtersNodes()),p=new Sd(s,f,r);return Kv(t,f,n,s,p,a)}function Hc(t,e,n,i,s,r,o){const a=e.eventCache;let c,u;const d=new Sd(s,e,r);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=kr(e,u,!0,t.filter.filtersNodes());else{const f=pe(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=kr(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ue(n),v=a.getNode().getImmediateChild(f);let E;if(_e(p))E=i;else{const w=d.getCompleteChild(f);w!=null?gd(p)===".priority"&&w.getChild(Pv(p)).isEmpty()?E=w:E=w.updateChild(p,i):E=J.EMPTY_NODE}if(v.equals(E))c=e;else{const w=t.filter.updateChild(a.getNode(),f,E,p,d,o);c=kr(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Yp(t,e){return t.eventCache.isCompleteForChild(e)}function Rx(t,e,n,i,s,r,o){let a=e;return i.foreach((c,u)=>{const d=je(n,c);Yp(e,pe(d))&&(a=Hc(t,a,d,u,s,r,o))}),i.foreach((c,u)=>{const d=je(n,c);Yp(e,pe(d))||(a=Hc(t,a,d,u,s,r,o))}),a}function Qp(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;_e(n)?u=i:u=new Be(null).setTree(n,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),E=Qp(t,v,p);c=Ia(t,c,new xe(f),E,s,r,o,a)}}),u.children.inorderTraversal((f,p)=>{const v=!e.serverCache.isCompleteForChild(f)&&p.value===void 0;if(!d.hasChild(f)&&!v){const E=e.serverCache.getNode().getImmediateChild(f),w=Qp(t,E,p);c=Ia(t,c,new xe(f),w,s,r,o,a)}}),c}function kx(t,e,n,i,s,r,o){if(Ta(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(_e(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ia(t,e,n,c.getNode().getChild(n),s,r,a,o);if(_e(n)){let u=new Be(null);return c.getNode().forEachChild(ds,(d,f)=>{u=u.set(new xe(d),f)}),Vc(t,e,n,u,s,r,a,o)}else return e}else{let u=new Be(null);return i.foreach((d,f)=>{const p=je(n,d);c.isCompleteForPath(p)&&(u=u.set(d,c.getNode().getChild(p)))}),Vc(t,e,n,u,s,r,a,o)}}function xx(t,e,n,i,s){const r=e.serverCache,o=Bv(e,r.getNode(),r.isFullyInitialized()||_e(n),r.isFiltered());return Kv(t,o,n,i,qv,s)}function Dx(t,e,n,i,s,r){let o;if(Ta(i,n)!=null)return e;{const a=new Sd(i,e,s),c=e.eventCache.getNode();let u;if(_e(n)||pe(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ca(i,Bi(e));else{const f=e.serverCache.getNode();L(f instanceof J,"serverChildren would be complete if leaf node"),d=Id(i,f)}d=d,u=t.filter.updateFullNode(c,d,r)}else{const d=pe(n);let f=Ad(i,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=t.filter.updateChild(c,d,f,Ue(n),a,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(c,d,J.EMPTY_NODE,Ue(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ca(i,Bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ta(i,Ie())!=null,kr(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new yd(i.getIndex()),r=Zk(i);this.processor_=Sx(r);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(J.EMPTY_NODE,a.getNode(),null),d=new Fi(c,o.isFullyInitialized(),s.filtersNodes()),f=new Fi(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=sl(f,d),this.eventGenerator_=new ox(this.query_)}get query(){return this.query_}}function Mx(t){return t.viewCache_.serverCache.getNode()}function $x(t,e){const n=Bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function Xp(t){return t.eventRegistrations_.length===0}function Fx(t,e){t.eventRegistrations_.push(e)}function Jp(t,e,n){const i=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Zp(t,e,n,i){e.type===jt.MERGE&&e.source.queryId!==null&&(L(Bi(t.viewCache_),"We should always have a full cache before handling merges"),L($c(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Nx(t.processor_,s,e,n,i);return Ox(t.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zv(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Bx(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ke,(r,o)=>{i.push(Ss(r,o))}),n.isFullyInitialized()&&i.push($v(n.getNode())),zv(t,i,n.getNode(),e)}function zv(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return ax(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class Ux{constructor(){this.views=new Map}}function Hx(t){L(!Aa,"__referenceConstructor has already been defined"),Aa=t}function Vx(){return L(Aa,"Reference.ts has not been loaded"),Aa}function Wx(t){return t.views.size===0}function Od(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return L(r!=null,"SyncTree gave us an op for an invalid query."),Zp(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Zp(o,e,n,i));return r}}function jx(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ca(n,s?i:null),c=!1;a?c=!0:i instanceof J?(a=Id(n,i),c=!1):(a=J.EMPTY_NODE,c=!1);const u=sl(new Fi(a,c,!1),new Fi(i,s,!1));return new Lx(e,u)}return o}function qx(t,e,n,i,s,r){const o=jx(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fx(o,n),Bx(o,n)}function Kx(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=ti(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(Jp(u,n,i)),Xp(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(Jp(c,n,i)),Xp(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!ti(t)&&r.push(new(Vx())(e._repo,e._path)),{removed:r,events:o}}function Gv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hs(t,e){let n=null;for(const i of t.views.values())n=n||$x(i,e);return n}function Yv(t,e){if(e._queryParams.loadsAllData())return rl(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Qv(t,e){return Yv(t,e)!=null}function ti(t){return rl(t)!=null}function rl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa;function zx(t){L(!Sa,"__referenceConstructor has already been defined"),Sa=t}function Gx(){return L(Sa,"Reference.ts has not been loaded"),Sa}let Yx=1;class eg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=Cx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xv(t,e,n,i,s){return dx(t.pendingWriteTree_,e,n,i,s),s?zs(t,new $i(bd(),e,n)):[]}function Qx(t,e,n,i){hx(t.pendingWriteTree_,e,n,i);const s=Be.fromObject(n);return zs(t,new Os(bd(),e,s))}function qn(t,e,n=!1){const i=fx(t.pendingWriteTree_,e);if(px(t.pendingWriteTree_,e)){let r=new Be(null);return i.snap!=null?r=r.set(Ie(),!0):ot(i.children,o=>{r=r.set(new xe(o),!0)}),zs(t,new wa(i.path,r,n))}else return[]}function ol(t,e,n){return zs(t,new $i(wd(),e,n))}function Xx(t,e,n){const i=Be.fromObject(n);return zs(t,new Os(wd(),e,i))}function Jx(t,e){return zs(t,new Zr(wd(),e))}function Zx(t,e,n){const i=Pd(t,n);if(i){const s=Rd(i),r=s.path,o=s.queryId,a=Et(r,e),c=new Zr(Cd(o),a);return kd(t,r,c)}else return[]}function Wc(t,e,n,i){const s=e._path,r=t.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Qv(r,e))){const a=Kx(r,e,n,i);Wx(r)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;o=a.events;const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>ti(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=nD(f);for(let v=0;v<p.length;++v){const E=p[v],w=E.query,A=ey(t,E);t.listenProvider_.startListening(Dr(w),Oa(t,w),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Dr(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(al(f));t.listenProvider_.stopListening(Dr(f),p)})),iD(t,c)}return o}function eD(t,e,n,i){const s=Pd(t,i);if(s!=null){const r=Rd(s),o=r.path,a=r.queryId,c=Et(o,e),u=new $i(Cd(a),c,n);return kd(t,o,u)}else return[]}function tD(t,e,n,i){const s=Pd(t,i);if(s){const r=Rd(s),o=r.path,a=r.queryId,c=Et(o,e),u=Be.fromObject(n),d=new Os(Cd(a),c,u);return kd(t,o,d)}else return[]}function tg(t,e,n){const i=e._path;let s=null,r=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=Et(f,i);s=s||hs(p,v),r=r||ti(p)});let o=t.syncPointTree_.get(i);o?(r=r||ti(o),s=s||hs(o,Ie())):(o=new Ux,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const E=hs(v,Ie());E&&(s=s.updateImmediateChild(p,E))}));const c=Qv(o,e);if(!c&&!e._queryParams.loadsAllData()){const f=al(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=sD();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=Td(t.pendingWriteTree_,i);let d=qx(o,e,n,u,s,a);if(!c&&!r){const f=Yv(o,e);d=d.concat(rD(t,e,f))}return d}function Nd(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Et(o,e),u=hs(a,c);if(u)return u});return Vv(s,e,r,n,!0)}function zs(t,e){return Jv(e,t.syncPointTree_,null,Td(t.pendingWriteTree_,Ie()))}function Jv(t,e,n,i){if(_e(t.path))return Zv(t,e,n,i);{const s=e.get(Ie());n==null&&s!=null&&(n=hs(s,Ie()));let r=[];const o=pe(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,d=Wv(i,o);r=r.concat(Jv(a,c,u,d))}return s&&(r=r.concat(Od(s,t,i,n))),r}}function Zv(t,e,n,i){const s=e.get(Ie());n==null&&s!=null&&(n=hs(s,Ie()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=Wv(i,o),d=t.operationForChild(o);d&&(r=r.concat(Zv(d,a,c,u)))}),s&&(r=r.concat(Od(s,t,i,n))),r}function ey(t,e){const n=e.query,i=Oa(t,n);return{hashFn:()=>(Mx(e)||J.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Zx(t,n._path,i):Jx(t,n._path);{const r=zR(s,n);return Wc(t,n,null,r)}}}}function Oa(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function Pd(t,e){return t.tagToQueryMap.get(e)}function Rd(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function kd(t,e,n){const i=t.syncPointTree_.get(e);L(i,"Missing sync point for query tag that we're tracking");const s=Td(t.pendingWriteTree_,e);return Od(i,n,s,null)}function nD(t){return t.fold((e,n,i)=>{if(n&&ti(n))return[rl(n)];{let s=[];return n&&(s=Gv(n)),ot(i,(r,o)=>{s=s.concat(o)}),s}})}function Dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gx())(t._repo,t._path):t}function iD(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=al(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function sD(){return Yx++}function rD(t,e,n){const i=e._path,s=Oa(t,e),r=ey(t,n),o=t.listenProvider_.startListening(Dr(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)L(!ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,d,f)=>{if(!_e(u)&&d&&ti(d))return[rl(d).query];{let p=[];return d&&(p=p.concat(Gv(d).map(v=>v.query))),ot(f,(v,E)=>{p=p.concat(E)}),p}});for(let u=0;u<c.length;++u){const d=c[u];t.listenProvider_.stopListening(Dr(d),Oa(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xd(n)}node(){return this.node_}}class Dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new Dd(this.syncTree_,n)}node(){return Nd(this.syncTree_,this.path_)}}const oD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ng=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lD(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},lD=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&L(!1,"Unexpected increment value: "+i);const s=e.node();if(L(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ty=function(t,e,n,i){return Ld(e,new Dd(n,t),i)},ny=function(t,e,n){return Ld(t,new xd(e),n)};function Ld(t,e,n){const i=t.getPriority().val(),s=ng(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ng(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Xe(a,Ze(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Xe(s))),o.forEachChild(Ke,(a,c)=>{const u=Ld(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function $d(t,e){let n=e instanceof xe?e:new xe(e),i=t,s=pe(n);for(;s!==null;){const r=bs(i.node.children,s)||{children:{},childCount:0};i=new Md(s,i,r),n=Ue(n),s=pe(n)}return i}function Gs(t){return t.node.value}function iy(t,e){t.node.value=e,jc(t)}function sy(t){return t.node.childCount>0}function cD(t){return Gs(t)===void 0&&!sy(t)}function ll(t,e){ot(t.node.children,(n,i)=>{e(new Md(n,t,i))})}function ry(t,e,n,i){n&&!i&&e(t),ll(t,s=>{ry(s,e,!0,i)}),n&&i&&e(t)}function uD(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function wo(t){return new xe(t.parent===null?t.name:wo(t.parent)+"/"+t.name)}function jc(t){t.parent!==null&&dD(t.parent,t.name,t)}function dD(t,e,n){const i=cD(n),s=hn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,jc(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,jc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/[\[\].#$\/\u0000-\u001F\u007F]/,fD=/[\[\].#$\u0000-\u001F\u007F]/,zl=10*1024*1024,Fd=function(t){return typeof t=="string"&&t.length!==0&&!hD.test(t)},oy=function(t){return typeof t=="string"&&t.length!==0&&!fD.test(t)},pD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oy(t)},gD=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!cd(t)||t&&typeof t=="object"&&hn(t,".sv")},ay=function(t,e,n,i){i&&e===void 0||cl(Va(t,"value"),e,n)},cl=function(t,e,n){const i=n instanceof xe?new Nk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mi(i));if(typeof e=="function")throw new Error(t+"contains a function "+mi(i)+" with contents = "+e.toString());if(cd(e))throw new Error(t+"contains "+e.toString()+" "+mi(i));if(typeof e=="string"&&e.length>zl/3&&Wa(e)>zl)throw new Error(t+"contains a string greater than "+zl+" utf8 bytes "+mi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ot(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fd(o)))throw new Error(t+" contains an invalid key ("+o+") "+mi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pk(i,o),cl(t,a,i),Rk(i)}),s&&r)throw new Error(t+' contains ".value" child '+mi(i)+" in addition to actual children.")}},_D=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Yr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Fd(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ok);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&$t(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},mD=function(t,e,n,i){if(i&&e===void 0)return;const s=Va(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];ot(e,(o,a)=>{const c=new xe(o);if(cl(s,a,je(n,c)),gd(c)===".priority"&&!gD(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),_D(s,r)},ly=function(t,e,n,i){if(!(i&&n===void 0)&&!oy(n))throw new Error(Va(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ly(t,e,n,i)},Bd=function(t,e){if(pe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pD(n))throw new Error(Va(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ul(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!_d(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function cy(t,e,n){ul(t,n),uy(t,i=>_d(i,e))}function Qt(t,e,n){ul(t,n),uy(t,i=>$t(i,e)||$t(e,i))}function uy(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(bD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ai&&st("event: "+n.toString()),Ks(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="repo_interrupt",CD=25;class TD{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ED,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ID(t,e,n){if(t.stats_=hd(t.repoInfo_),t.forceRestClient_||XR())t.server_=new Ea(t.repoInfo_,(i,s,r,o)=>{ig(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sg(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Tn(t.repoInfo_,e,(i,s,r,o)=>{ig(t,i,s,r,o)},i=>{sg(t,i)},i=>{AD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=sk(t.repoInfo_,()=>new rx(t.stats_,t.server_)),t.infoData_=new ex,t.infoSyncTree_=new eg({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=ol(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ud(t,"connected",!1),t.serverSyncTree_=new eg({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const u=o(a,c);Qt(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function dy(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dl(t){return oD({timestamp:dy(t)})}function ig(t,e,n,i,s){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=aa(n,u=>Ze(u));o=tD(t.serverSyncTree_,r,c,s)}else{const c=Ze(n);o=eD(t.serverSyncTree_,r,c,s)}else if(i){const c=aa(n,u=>Ze(u));o=Xx(t.serverSyncTree_,r,c)}else{const c=Ze(n);o=ol(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ps(t,r)),Qt(t.eventQueue_,a,o)}function sg(t,e){Ud(t,"connected",e),e===!1&&ND(t)}function AD(t,e){ot(e,(n,i)=>{Ud(t,n,i)})}function Ud(t,e,n){const i=new xe("/.info/"+e),s=Ze(n);t.infoData_.updateSnapshot(i,s);const r=ol(t.infoSyncTree_,i,s);Qt(t.eventQueue_,i,r)}function Hd(t){return t.nextWriteId_++}function SD(t,e,n,i,s){hl(t,"set",{path:e.toString(),value:n,priority:i});const r=dl(t),o=Ze(n,i),a=Nd(t.serverSyncTree_,e),c=ny(o,a,r),u=Hd(t),d=Xv(t.serverSyncTree_,e,c,u,!0);ul(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(p,v)=>{const E=p==="ok";E||gt("set at "+e+" failed: "+p);const w=qn(t.serverSyncTree_,u,!E);Qt(t.eventQueue_,e,w),qc(t,s,p,v)});const f=Wd(t,e);Ps(t,f),Qt(t.eventQueue_,f,[])}function OD(t,e,n,i){hl(t,"update",{path:e.toString(),value:n});let s=!0;const r=dl(t),o={};if(ot(n,(a,c)=>{s=!1,o[a]=ty(je(e,a),Ze(c),t.serverSyncTree_,r)}),s)st("update() called with empty data.  Don't do anything."),qc(t,i,"ok",void 0);else{const a=Hd(t),c=Qx(t.serverSyncTree_,e,o,a);ul(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,d)=>{const f=u==="ok";f||gt("update at "+e+" failed: "+u);const p=qn(t.serverSyncTree_,a,!f),v=p.length>0?Ps(t,e):e;Qt(t.eventQueue_,v,p),qc(t,i,u,d)}),ot(n,u=>{const d=Wd(t,je(e,u));Ps(t,d)}),Qt(t.eventQueue_,e,[])}}function ND(t){hl(t,"onDisconnectEvents");const e=dl(t),n=ba();Mc(t.onDisconnect_,Ie(),(s,r)=>{const o=ty(s,r,t.serverSyncTree_,e);Fv(n,s,o)});let i=[];Mc(n,Ie(),(s,r)=>{i=i.concat(ol(t.serverSyncTree_,s,r));const o=Wd(t,s);Ps(t,o)}),t.onDisconnect_=ba(),Qt(t.eventQueue_,Ie(),i)}function PD(t,e,n){let i;pe(e._path)===".info"?i=tg(t.infoSyncTree_,e,n):i=tg(t.serverSyncTree_,e,n),cy(t.eventQueue_,e._path,i)}function rg(t,e,n){let i;pe(e._path)===".info"?i=Wc(t.infoSyncTree_,e,n):i=Wc(t.serverSyncTree_,e,n),cy(t.eventQueue_,e._path,i)}function RD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wD)}function hl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function qc(t,e,n,i){e&&Ks(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function hy(t,e,n){return Nd(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Vd(t,e=t.transactionQueueTree_){if(e||fl(t,e),Gs(e)){const n=py(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&kD(t,wo(e),n)}else sy(e)&&ll(e,n=>{Vd(t,n)})}function kD(t,e,n){const i=n.map(u=>u.currentWriteId),s=hy(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];L(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Et(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{hl(t,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,d=d.concat(qn(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();fl(t,$d(t.transactionQueueTree_,e)),Vd(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,d);for(let p=0;p<f.length;p++)Ks(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{gt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Ps(t,e)}},o)}function Ps(t,e){const n=fy(t,e),i=wo(n),s=py(t,n);return xD(t,s,i),i}function xD(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Et(n,c.path);let d=!1,f;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,s=s.concat(qn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=CD)d=!0,f="maxretry",s=s.concat(qn(t.serverSyncTree_,c.currentWriteId,!0));else{const p=hy(t,c.path,o);c.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){cl("transaction failed: Data returned ",v,c.path);let E=Ze(v);typeof v=="object"&&v!=null&&hn(v,".priority")||(E=E.updatePriority(p.getPriority()));const A=c.currentWriteId,N=dl(t),M=ny(E,p,N);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=M,c.currentWriteId=Hd(t),o.splice(o.indexOf(A),1),s=s.concat(Xv(t.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),s=s.concat(qn(t.serverSyncTree_,A,!0))}else d=!0,f="nodata",s=s.concat(qn(t.serverSyncTree_,c.currentWriteId,!0))}Qt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}fl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ks(i[a]);Vd(t,t.transactionQueueTree_)}function fy(t,e){let n,i=t.transactionQueueTree_;for(n=pe(e);n!==null&&Gs(i)===void 0;)i=$d(i,n),e=Ue(e),n=pe(e);return i}function py(t,e){const n=[];return gy(t,e,n),n.sort((i,s)=>i.order-s.order),n}function gy(t,e,n){const i=Gs(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ll(e,s=>{gy(t,s,n)})}function fl(t,e){const n=Gs(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,iy(e,n.length>0?n:void 0)}ll(e,i=>{fl(t,i)})}function Wd(t,e){const n=wo(fy(t,e)),i=$d(t.transactionQueueTree_,e);return uD(i,s=>{Gl(t,s)}),Gl(t,i),ry(i,s=>{Gl(t,s)}),n}function Gl(t,e){const n=Gs(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?iy(e,void 0):n.length=r+1,Qt(t.eventQueue_,wo(e),s);for(let o=0;o<i.length;o++)Ks(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function LD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const og=function(t,e){const n=MD(t),i=n.namespace;n.domain==="firebase.com"&&Li(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Li("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VR();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tk(n.host,n.secure,i,e,s,"",i!==n.subdomain),path:new xe(n.pathString)}},MD=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=DD(t.substring(d,f)));const p=LD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=i}"ns"in p&&(r=p.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class my{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return _e(this._path)?null:gd(this._path)}get ref(){return new Nn(this._repo,this._path)}get _queryIdentifier(){const e=jp(this._queryParams),n=ud(e);return n==="{}"?"default":n}get _queryObject(){return jp(this._queryParams)}isEqual(e){if(e=Jt(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,i=_d(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sk(this._path)}}class Nn extends jd{constructor(e,n){super(e,n,new Ed,!1)}get parent(){const e=Pv(this._path);return e===null?null:new Nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class eo{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),i=Rs(this.ref,e);return new eo(this._node.getChild(n),i,Ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new eo(s,Rs(this.ref,i),Ke)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function SL(t,e){return t=Jt(t),t._checkNotDeleted("ref"),e!==void 0?Rs(t._root,e):t._root}function Rs(t,e){return t=Jt(t),pe(t._path)===null?vD("child","path",e,!1):ly("child","path",e,!1),new Nn(t._repo,je(t._path,e))}function OL(t,e){t=Jt(t),Bd("push",t._path),ay("push",e,t._path,!0);const n=dy(t._repo),i=Qk(n),s=Rs(t,i),r=Rs(t,i);let o;return e!=null?o=vy(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function NL(t){return Bd("remove",t._path),vy(t,null)}function vy(t,e){t=Jt(t),Bd("set",t._path),ay("set",e,t._path,!1);const n=new no;return SD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function PL(t,e){mD("update",e,t._path,!1);const n=new no;return OD(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class qd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new _y("value",this,new eo(e.snapshotNode,new Nn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}matches(e){return e instanceof qd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Kd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const i=Rs(new Nn(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new _y(e.type,this,new eo(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Kd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function zd(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=n,u=(d,f)=>{rg(t._repo,t,a),c(d,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new $D(n,r||void 0),a=e==="value"?new qd(o):new Kd(e,o);return PD(t._repo,t,a),()=>rg(t._repo,t,a)}function RL(t,e,n,i){return zd(t,"child_added",e,n,i)}function kL(t,e,n,i){return zd(t,"child_changed",e,n,i)}function xL(t,e,n,i){return zd(t,"child_removed",e,n,i)}Hx(Nn);zx(Nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="FIREBASE_DATABASE_EMULATOR_HOST",Kc={};let BD=!1;function UD(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Li("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=og(r,s),a=o.repoInfo,c,u;typeof process!="undefined"&&(u=process.env[FD]),u?(c=!0,r=`http://${u}?ns=${a.namespace}`,o=og(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const d=s&&c?new xc(xc.OWNER):new ZR(t.name,t.options,e);yD("Invalid Firebase Database URL",o),_e(o.path)||Li("Database URL must point to the root of a Firebase Database (not including a child path).");const f=VD(a,t,d,new JR(t.name,n));return new WD(f,t)}function HD(t,e){const n=Kc[e];(!n||n[t.key]!==t)&&Li(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RD(t),delete n[t.key]}function VD(t,e,n,i){let s=Kc[e.name];s||(s={},Kc[e.name]=s);let r=s[t.toURLString()];return r&&Li("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new TD(t,BD,n,i),s[t.toURLString()]=r,r}class WD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ID(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nn(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Li("Cannot call "+e+" on a deleted database.")}}function DL(t=z_(),e){return $u(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){$R(ro),ws(new Ni("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return UD(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Yn(Ap,Sp,t),Yn(Ap,Sp,"esm2017")}Tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jD();var zc={exports:{}};(function(t,e){e=t.exports=n,e.getSerialize=i;function n(s,r,o,a){return JSON.stringify(s,i(r,a),o)}function i(s,r){var o=[],a=[];return r==null&&(r=function(c,u){return o[0]===u?"[Circular ~]":"[Circular ~."+a.slice(0,o.indexOf(u)).join(".")+"]"}),function(c,u){if(o.length>0){var d=o.indexOf(this);~d?o.splice(d+1):o.push(this),~d?a.splice(d,1/0,c):a.push(c),~o.indexOf(u)&&(u=r.call(this,c,u))}else o.push(u);return s==null?u:s.call(this,c,u)}}})(zc,zc.exports);var qD=zc.exports,KD=function(){var t=4022871197,e=function(n){if(n){n=n.toString();for(var i=0;i<n.length;i++){t+=n.charCodeAt(i);var s=.02519603282416938*t;t=s>>>0,s-=t,s*=t,t=s>>>0,s-=t,t+=s*4294967296}return(t>>>0)*23283064365386963e-26}else t=4022871197};return e},Gc=function(t){return function(){var e=48,n=1,i=e,s=new Array(e),r,o,a=0,c=new KD;for(r=0;r<e;r++)s[r]=c(Math.random());var u=function(){++i>=e&&(i=0);var p=1768863*s[i]+n*23283064365386963e-26;return s[i]=p-(n=p|0)},d=function(p){return Math.floor(p*(u()+(u()*2097152|0)*11102230246251565e-32))};d.string=function(p){var v,E="";for(v=0;v<p;v++)E+=String.fromCharCode(33+d(94));return E};var f=function(){var p=Array.prototype.slice.call(arguments);for(r=0;r<p.length;r++)for(o=0;o<e;o++)s[o]-=c(p[r]),s[o]<0&&(s[o]+=1)};return d.cleanString=function(p){return p=p.replace(/(^\s*)|(\s*$)/gi,""),p=p.replace(/[\x00-\x1F]/gi,""),p=p.replace(/\n /,`
`),p},d.hashString=function(p){for(p=d.cleanString(p),c(p),r=0;r<p.length;r++)for(a=p.charCodeAt(r),o=0;o<e;o++)s[o]-=c(a),s[o]<0&&(s[o]+=1)},d.seed=function(p){(typeof p=="undefined"||p===null)&&(p=Math.random()),typeof p!="string"&&(p=qD(p,function(v,E){return typeof E=="function"?E.toString():E})),d.initState(),d.hashString(p)},d.addEntropy=function(){var p=[];for(r=0;r<arguments.length;r++)p.push(arguments[r]);f(a+++new Date().getTime()+p.join("")+Math.random())},d.initState=function(){for(c(),r=0;r<e;r++)s[r]=c(" ");n=1,i=e},d.done=function(){c=null},typeof t!="undefined"&&d.seed(t),d.range=function(p){return d(p)},d.random=function(){return d(Number.MAX_VALUE-1)/Number.MAX_VALUE},d.floatBetween=function(p,v){return d.random()*(v-p)+p},d.intBetween=function(p,v){return Math.floor(d.random()*(v-p+1))+p},d}()};Gc.create=function(t){return new Gc(t)};var LL=Gc;export{OL as A,rL as B,fL as C,oL as D,aL as E,mn as F,hL as G,uL as H,LL as I,wL as J,bL as K,EL as L,_L as M,mL as N,Pc as S,yL as V,dL as a,i_ as b,nT as c,gL as d,Nt as e,_C as f,rT as g,Hg as h,vL as i,AL as j,IL as k,CL as l,Qc as m,Xc as n,eT as o,DL as p,SL as q,cL as r,TL as s,RL as t,xL as u,pL as v,lL as w,kL as x,NL as y,PL as z};
