var zb=Object.defineProperty,Kb=Object.defineProperties;var Gb=Object.getOwnPropertyDescriptors;var xh=Object.getOwnPropertySymbols;var Yb=Object.prototype.hasOwnProperty,Qb=Object.prototype.propertyIsEnumerable;var Dh=(t,e,n)=>e in t?zb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,le=(t,e)=>{for(var n in e||(e={}))Yb.call(e,n)&&Dh(t,n,e[n]);if(xh)for(var n of xh(e))Qb.call(e,n)&&Dh(t,n,e[n]);return t},Oo=(t,e)=>Kb(t,Gb(e));function Fc(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Xb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jb=Fc(Xb);function jp(t){return!!t||t===""}function Bc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=nt(i)?tw(i):Bc(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(nt(t))return t;if(Qe(t))return t}}const Zb=/;(?![^(]*\))/g,ew=/:(.+)/;function tw(t){const e={};return t.split(Zb).forEach(n=>{if(n){const i=n.split(ew);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Uc(t){let e="";if(nt(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const i=Uc(t[n]);i&&(e+=i+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ID=t=>nt(t)?t:t==null?"":se(t)||Qe(t)&&(t.toString===Gp||!ce(t.toString))?JSON.stringify(t,qp,2):String(t),qp=(t,e)=>e&&e.__v_isRef?qp(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:zp(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!se(e)&&!Yp(e)?String(e):e,Fe={},Zi=[],qt=()=>{},nw=()=>!1,iw=/^on[^a-z]/,Ca=t=>iw.test(t),Hc=t=>t.startsWith("onUpdate:"),_t=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sw=Object.prototype.hasOwnProperty,Ce=(t,e)=>sw.call(t,e),se=Array.isArray,es=t=>Ta(t)==="[object Map]",zp=t=>Ta(t)==="[object Set]",ce=t=>typeof t=="function",nt=t=>typeof t=="string",Wc=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",Kp=t=>Qe(t)&&ce(t.then)&&ce(t.catch),Gp=Object.prototype.toString,Ta=t=>Gp.call(t),rw=t=>Ta(t).slice(8,-1),Yp=t=>Ta(t)==="[object Object]",jc=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ow=/-(\w)/g,cn=Ia(t=>t.replace(ow,(e,n)=>n?n.toUpperCase():"")),aw=/\B([A-Z])/g,Ss=Ia(t=>t.replace(aw,"-$1").toLowerCase()),Aa=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=Ia(t=>t?`on${Aa(t)}`:""),Nr=(t,e)=>!Object.is(t,e),Bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lh;const lw=()=>Lh||(Lh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pn;class Qp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&pn&&(this.parent=pn,this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return pn=this,e()}finally{pn=this.parent}}on(){pn=this}off(){pn=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Xp(t){return new Qp(t)}function cw(t,e=pn){e&&e.active&&e.effects.push(t)}const qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jp=t=>(t.w&Yn)>0,Zp=t=>(t.n&Yn)>0,uw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yn},dw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Jp(s)&&!Zp(s)?s.delete(t):e[n++]=s,s.w&=~Yn,s.n&=~Yn}e.length=n}},Bl=new WeakMap;let lr=0,Yn=1;const Ul=30;let rn;const yi=Symbol(""),Hl=Symbol("");class zc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cw(this,i)}run(){if(!this.active)return this.fn();let e=rn,n=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,jn=!0,Yn=1<<++lr,lr<=Ul?uw(this):Mh(this),this.fn()}finally{lr<=Ul&&dw(this),Yn=1<<--lr,rn=this.parent,jn=n,this.parent=void 0}}stop(){this.active&&(Mh(this),this.onStop&&this.onStop(),this.active=!1)}}function Mh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jn=!0;const eg=[];function Os(){eg.push(jn),jn=!1}function Ns(){const t=eg.pop();jn=t===void 0?!0:t}function Pt(t,e,n){if(jn&&rn){let i=Bl.get(t);i||Bl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=qc()),tg(s)}}function tg(t,e){let n=!1;lr<=Ul?Zp(t)||(t.n|=Yn,n=!Jp(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function Tn(t,e,n,i,s,r){const o=Bl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t))o.forEach((c,u)=>{(u==="length"||u>=i)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(yi)),es(t)&&a.push(o.get(Hl)));break;case"delete":se(t)||(a.push(o.get(yi)),es(t)&&a.push(o.get(Hl)));break;case"set":es(t)&&a.push(o.get(yi));break}if(a.length===1)a[0]&&Vl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Vl(qc(c))}}function Vl(t,e){for(const n of se(t)?t:[...t])(n!==rn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const hw=Fc("__proto__,__v_isRef,__isVue"),ng=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Wc)),fw=Kc(),pw=Kc(!1,!0),gw=Kc(!0),$h=_w();function _w(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ae(this);for(let r=0,o=this.length;r<o;r++)Pt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os();const i=Ae(this)[e].apply(this,n);return Ns(),i}}),t}function Kc(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?kw:ag:e?og:rg).get(i))return i;const o=se(i);if(!t&&o&&Ce($h,s))return Reflect.get($h,s,r);const a=Reflect.get(i,s,r);return(Wc(s)?ng.has(s):hw(s))||(t||Pt(i,"get",s),e)?a:qe(a)?!o||!jc(s)?a.value:a:Qe(a)?t?lg(a):Rs(a):a}}const mw=ig(),vw=ig(!0);function ig(t=!1){return function(n,i,s,r){let o=n[i];if(Rr(o)&&qe(o)&&!qe(s))return!1;if(!t&&!Rr(s)&&(cg(s)||(s=Ae(s),o=Ae(o)),!se(n)&&qe(o)&&!qe(s)))return o.value=s,!0;const a=se(n)&&jc(i)?Number(i)<n.length:Ce(n,i),c=Reflect.set(n,i,s,r);return n===Ae(r)&&(a?Nr(s,o)&&Tn(n,"set",i,s):Tn(n,"add",i,s)),c}}function yw(t,e){const n=Ce(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Tn(t,"delete",e,void 0),i}function Ew(t,e){const n=Reflect.has(t,e);return(!Wc(e)||!ng.has(e))&&Pt(t,"has",e),n}function bw(t){return Pt(t,"iterate",se(t)?"length":yi),Reflect.ownKeys(t)}const sg={get:fw,set:mw,deleteProperty:yw,has:Ew,ownKeys:bw},ww={get:gw,set(t,e){return!0},deleteProperty(t,e){return!0}},Cw=_t({},sg,{get:pw,set:vw}),Gc=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function No(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ae(t),r=Ae(e);e!==r&&!n&&Pt(s,"get",e),!n&&Pt(s,"get",r);const{has:o}=Sa(s),a=i?Gc:n?Xc:Pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ro(t,e=!1){const n=this.__v_raw,i=Ae(n),s=Ae(t);return t!==s&&!e&&Pt(i,"has",t),!e&&Pt(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Po(t,e=!1){return t=t.__v_raw,!e&&Pt(Ae(t),"iterate",yi),Reflect.get(t,"size",t)}function Fh(t){t=Ae(t);const e=Ae(this);return Sa(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Bh(t,e){e=Ae(e);const n=Ae(this),{has:i,get:s}=Sa(n);let r=i.call(n,t);r||(t=Ae(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Nr(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Uh(t){const e=Ae(this),{has:n,get:i}=Sa(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Tn(e,"delete",t,void 0),r}function Hh(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function ko(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ae(o),c=e?Gc:t?Xc:Pr;return!t&&Pt(a,"iterate",yi),o.forEach((u,d)=>i.call(s,c(u),c(d),r))}}function xo(t,e,n){return function(...i){const s=this.__v_raw,r=Ae(s),o=es(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...i),d=n?Gc:e?Xc:Pr;return!e&&Pt(r,"iterate",c?Hl:yi),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function kn(t){return function(...e){return t==="delete"?!1:this}}function Tw(){const t={get(r){return No(this,r)},get size(){return Po(this)},has:Ro,add:Fh,set:Bh,delete:Uh,clear:Hh,forEach:ko(!1,!1)},e={get(r){return No(this,r,!1,!0)},get size(){return Po(this)},has:Ro,add:Fh,set:Bh,delete:Uh,clear:Hh,forEach:ko(!1,!0)},n={get(r){return No(this,r,!0)},get size(){return Po(this,!0)},has(r){return Ro.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ko(!0,!1)},i={get(r){return No(this,r,!0,!0)},get size(){return Po(this,!0)},has(r){return Ro.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=xo(r,!1,!1),n[r]=xo(r,!0,!1),e[r]=xo(r,!1,!0),i[r]=xo(r,!0,!0)}),[t,n,e,i]}const[Iw,Aw,Sw,Ow]=Tw();function Yc(t,e){const n=e?t?Ow:Sw:t?Aw:Iw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ce(n,s)&&s in i?n:i,s,r)}const Nw={get:Yc(!1,!1)},Rw={get:Yc(!1,!0)},Pw={get:Yc(!0,!1)},rg=new WeakMap,og=new WeakMap,ag=new WeakMap,kw=new WeakMap;function xw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dw(t){return t.__v_skip||!Object.isExtensible(t)?0:xw(rw(t))}function Rs(t){return Rr(t)?t:Qc(t,!1,sg,Nw,rg)}function Lw(t){return Qc(t,!1,Cw,Rw,og)}function lg(t){return Qc(t,!0,ww,Pw,ag)}function Qc(t,e,n,i,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Dw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function qn(t){return Rr(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function cg(t){return!!(t&&t.__v_isShallow)}function ug(t){return qn(t)||Rr(t)}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function ls(t){return zo(t,"__v_skip",!0),t}const Pr=t=>Qe(t)?Rs(t):t,Xc=t=>Qe(t)?lg(t):t;function dg(t){jn&&rn&&(t=Ae(t),tg(t.dep||(t.dep=qc())))}function hg(t,e){t=Ae(t),t.dep&&Vl(t.dep)}function qe(t){return!!(t&&t.__v_isRef===!0)}function Jc(t){return fg(t,!1)}function Mw(t){return fg(t,!0)}function fg(t,e){return qe(t)?t:new $w(t,e)}class $w{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:Pr(e)}get value(){return dg(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pr(e),hg(this))}}function hr(t){return qe(t)?t.value:t}const Fw={get:(t,e,n)=>hr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function pg(t){return qn(t)?t:new Proxy(t,Fw)}function Bw(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Hw(t,n);return e}class Uw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Hw(t,e,n){const i=t[e];return qe(i)?i:new Uw(t,e,n)}class Vw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new zc(e,()=>{this._dirty||(this._dirty=!0,hg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ae(this);return dg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ww(t,e,n=!1){let i,s;const r=ce(t);return r?(i=t,s=qt):(i=t.get,s=t.set),new Vw(i,s,r||!s,n)}Promise.resolve();function zn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Oa(r,e,n)}return s}function zt(t,e,n,i){if(ce(t)){const r=zn(t,e,n,i);return r&&Kp(r)&&r.catch(o=>{Oa(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(zt(t[r],e,n,i));return s}function Oa(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){zn(c,null,10,[t,o,a]);return}}jw(t,n,s,i)}function jw(t,e,n,i=!0){console.error(t)}let Ko=!1,Wl=!1;const Ot=[];let mn=0;const fr=[];let cr=null,zi=0;const pr=[];let Ln=null,Ki=0;const gg=Promise.resolve();let Zc=null,jl=null;function eu(t){const e=Zc||gg;return t?e.then(this?t.bind(this):t):e}function qw(t){let e=mn+1,n=Ot.length;for(;e<n;){const i=e+n>>>1;kr(Ot[i])<t?e=i+1:n=i}return e}function _g(t){(!Ot.length||!Ot.includes(t,Ko&&t.allowRecurse?mn+1:mn))&&t!==jl&&(t.id==null?Ot.push(t):Ot.splice(qw(t.id),0,t),mg())}function mg(){!Ko&&!Wl&&(Wl=!0,Zc=gg.then(Eg))}function zw(t){const e=Ot.indexOf(t);e>mn&&Ot.splice(e,1)}function vg(t,e,n,i){se(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),mg()}function Kw(t){vg(t,cr,fr,zi)}function Gw(t){vg(t,Ln,pr,Ki)}function tu(t,e=null){if(fr.length){for(jl=e,cr=[...new Set(fr)],fr.length=0,zi=0;zi<cr.length;zi++)cr[zi]();cr=null,zi=0,jl=null,tu(t,e)}}function yg(t){if(pr.length){const e=[...new Set(pr)];if(pr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((n,i)=>kr(n)-kr(i)),Ki=0;Ki<Ln.length;Ki++)Ln[Ki]();Ln=null,Ki=0}}const kr=t=>t.id==null?1/0:t.id;function Eg(t){Wl=!1,Ko=!0,tu(t),Ot.sort((n,i)=>kr(n)-kr(i));const e=qt;try{for(mn=0;mn<Ot.length;mn++){const n=Ot[mn];n&&n.active!==!1&&zn(n,null,14)}}finally{mn=0,Ot.length=0,yg(),Ko=!1,Zc=null,(Ot.length||fr.length||pr.length)&&Eg(t)}}function Yw(t,e,...n){const i=t.vnode.props||Fe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=i[d]||Fe;p?s=n.map(v=>v.trim()):f&&(s=n.map(Fl))}let a,c=i[a=ml(e)]||i[a=ml(cn(e))];!c&&r&&(c=i[a=ml(Ss(e))]),c&&zt(c,t,6,s);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(u,t,6,s)}}function bg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ce(t)){const c=u=>{const d=bg(u,e,!0);d&&(a=!0,_t(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(i.set(t,null),null):(se(r)?r.forEach(c=>o[c]=null):_t(o,r),i.set(t,o),o)}function nu(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Ss(e))||Ce(t,e))}let Mt=null,Na=null;function Go(t){const e=Mt;return Mt=t,Na=t&&t.type.__scopeId||null,e}function AD(t){Na=t}function SD(){Na=null}function Qw(t,e=Mt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Xh(-1);const r=Go(e),o=t(...s);return Go(r),i._d&&Xh(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function vl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:f,data:p,setupState:v,ctx:E,inheritAttrs:w}=t;let A,N;const M=Go(t);try{if(n.shapeFlag&4){const F=s||i;A=sn(d.call(F,F,f,r,v,p,E)),N=c}else{const F=e;A=sn(F.length>1?F(r,{attrs:c,slots:a,emit:u}):F(r,null)),N=e.props?c:Xw(c)}}catch(F){_r.length=0,Oa(F,t,1),A=Nt(Ii)}let U=A;if(N&&w!==!1){const F=Object.keys(N),{shapeFlag:Y}=U;F.length&&Y&7&&(o&&F.some(Hc)&&(N=Jw(N,o)),U=xr(U,N))}return n.dirs&&(U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,Go(M),A}const Xw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},Jw=(t,e)=>{const n={};for(const i in t)(!Hc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Zw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Vh(i,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==i[p]&&!nu(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vh(i,o,u):!0:!!o;return!1}function Vh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!nu(n,r))return!0}return!1}function eC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tC=t=>t.__isSuspense;function nC(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Gw(t)}function Uo(t,e){if(et){let n=et.provides;const i=et.parent&&et.parent.provides;i===n&&(n=et.provides=Object.create(i)),n[t]=e}}function bn(t,e,n=!1){const i=et||Mt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(i.proxy):e}}const Wh={};function gr(t,e,n){return wg(t,e,n)}function wg(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Fe){const a=et;let c,u=!1,d=!1;if(qe(t)?(c=()=>t.value,u=cg(t)):qn(t)?(c=()=>t,i=!0):se(t)?(d=!0,u=t.some(qn),c=()=>t.map(N=>{if(qe(N))return N.value;if(qn(N))return mi(N);if(ce(N))return zn(N,a,2)})):ce(t)?e?c=()=>zn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),zt(t,a,3,[p])}:c=qt,e&&i){const N=c;c=()=>mi(N())}let f,p=N=>{f=A.onStop=()=>{zn(N,a,4)}};if(Dr)return p=qt,e?n&&zt(e,a,3,[c(),d?[]:void 0,p]):c(),qt;let v=d?[]:Wh;const E=()=>{if(!!A.active)if(e){const N=A.run();(i||u||(d?N.some((M,U)=>Nr(M,v[U])):Nr(N,v)))&&(f&&f(),zt(e,a,3,[N,v===Wh?void 0:v,p]),v=N)}else A.run()};E.allowRecurse=!!e;let w;s==="sync"?w=E:s==="post"?w=()=>vt(E,a&&a.suspense):w=()=>{!a||a.isMounted?Kw(E):E()};const A=new zc(c,w);return e?n?E():v=A.run():s==="post"?vt(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Vc(a.scope.effects,A)}}function iC(t,e,n){const i=this.proxy,s=nt(t)?t.includes(".")?Cg(i,t):()=>i[t]:t.bind(i,i);let r;ce(e)?r=e:(r=e.handler,n=e);const o=et;cs(this);const a=wg(s,r.bind(i),n);return o?cs(o):bi(),a}function Cg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function mi(t,e){if(!Qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))mi(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)mi(t[n],e);else if(zp(t)||es(t))t.forEach(n=>{mi(n,e)});else if(Yp(t))for(const n in t)mi(t[n],e);return t}function Tg(t){return ce(t)?{setup:t,name:t.name}:t}const ql=t=>!!t.type.__asyncLoader,Ig=t=>t.type.__isKeepAlive;function sC(t,e){Ag(t,"a",e)}function rC(t,e){Ag(t,"da",e)}function Ag(t,e,n=et){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ra(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ig(s.parent.vnode)&&oC(i,e,n,s),s=s.parent}}function oC(t,e,n,i){const s=Ra(e,t,i,!0);iu(()=>{Vc(i[e],s)},n)}function Ra(t,e,n=et,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os(),cs(n);const a=zt(e,n,t,o);return bi(),Ns(),a});return i?s.unshift(r):s.push(r),r}}const Sn=t=>(e,n=et)=>(!Dr||t==="sp")&&Ra(t,e,n),aC=Sn("bm"),lC=Sn("m"),cC=Sn("bu"),uC=Sn("u"),dC=Sn("bum"),iu=Sn("um"),hC=Sn("sp"),fC=Sn("rtg"),pC=Sn("rtc");function gC(t,e=et){Ra("ec",t,e)}let zl=!0;function _C(t){const e=Og(t),n=t.proxy,i=t.ctx;zl=!1,e.beforeCreate&&jh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:v,updated:E,activated:w,deactivated:A,beforeDestroy:N,beforeUnmount:M,destroyed:U,unmounted:F,render:Y,renderTracked:H,renderTriggered:z,errorCaptured:ue,serverPrefetch:de,expose:X,inheritAttrs:oe,components:Te,directives:Oe,filters:Re}=e;if(u&&mC(u,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const me=o[ae];ce(me)&&(i[ae]=me.bind(n))}if(s){const ae=s.call(n,n);Qe(ae)&&(t.data=Rs(ae))}if(zl=!0,r)for(const ae in r){const me=r[ae],Ve=ce(me)?me.bind(n,n):ce(me.get)?me.get.bind(n,n):qt,Ct=!ce(me)&&ce(me.set)?me.set.bind(n):qt,dt=Vt({get:Ve,set:Ct});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Ye=>dt.value=Ye})}if(a)for(const ae in a)Sg(a[ae],i,n,ae);if(c){const ae=ce(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(me=>{Uo(me,ae[me])})}d&&jh(d,t,"c");function ve(ae,me){se(me)?me.forEach(Ve=>ae(Ve.bind(n))):me&&ae(me.bind(n))}if(ve(aC,f),ve(lC,p),ve(cC,v),ve(uC,E),ve(sC,w),ve(rC,A),ve(gC,ue),ve(pC,H),ve(fC,z),ve(dC,M),ve(iu,F),ve(hC,de),se(X))if(X.length){const ae=t.exposed||(t.exposed={});X.forEach(me=>{Object.defineProperty(ae,me,{get:()=>n[me],set:Ve=>n[me]=Ve})})}else t.exposed||(t.exposed={});Y&&t.render===qt&&(t.render=Y),oe!=null&&(t.inheritAttrs=oe),Te&&(t.components=Te),Oe&&(t.directives=Oe)}function mC(t,e,n=qt,i=!1){se(t)&&(t=Kl(t));for(const s in t){const r=t[s];let o;Qe(r)?"default"in r?o=bn(r.from||s,r.default,!0):o=bn(r.from||s):o=bn(r),qe(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function jh(t,e,n){zt(se(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,i){const s=i.includes(".")?Cg(n,i):()=>n[i];if(nt(t)){const r=e[t];ce(r)&&gr(s,r)}else if(ce(t))gr(s,t.bind(n));else if(Qe(t))if(se(t))t.forEach(r=>Sg(r,e,n,i));else{const r=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(r)&&gr(s,r,t)}}function Og(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(u=>Yo(c,u,o,!0)),Yo(c,e,o)),r.set(e,c),c}function Yo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Yo(t,r,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=vC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vC={data:qh,props:fi,emits:fi,methods:fi,computed:fi,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:fi,directives:fi,watch:EC,provide:qh,inject:yC};function qh(t,e){return e?t?function(){return _t(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function yC(t,e){return fi(Kl(t),Kl(e))}function Kl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?_t(_t(Object.create(null),t),e):e}function EC(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const i in e)n[i]=ht(t[i],e[i]);return n}function bC(t,e,n,i=!1){const s={},r={};zo(r,Pa,1),t.propsDefaults=Object.create(null),Ng(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Lw(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function wC(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ae(s),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];const v=e[p];if(c)if(Ce(r,p))v!==r[p]&&(r[p]=v,u=!0);else{const E=cn(p);s[E]=Gl(c,a,E,v,t,!1)}else v!==r[p]&&(r[p]=v,u=!0)}}}else{Ng(t,e,s,r)&&(u=!0);let d;for(const f in a)(!e||!Ce(e,f)&&((d=Ss(f))===f||!Ce(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Gl(c,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ce(e,f)&&!0)&&(delete r[f],u=!0)}u&&Tn(t,"set","$attrs")}function Ng(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fo(c))continue;const u=e[c];let d;s&&Ce(s,d=cn(c))?!r||!r.includes(d)?n[d]=u:(a||(a={}))[d]=u:nu(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=Ae(n),u=a||Fe;for(let d=0;d<r.length;d++){const f=r[d];n[f]=Gl(s,c,f,u[f],t,!Ce(u,f))}}return o}function Gl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&ce(c)){const{propsDefaults:u}=s;n in u?i=u[n]:(cs(s),i=u[n]=c.call(null,e),bi())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(n))&&(i=!0))}return i}function Rg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!ce(t)){const d=f=>{c=!0;const[p,v]=Rg(f,e,!0);_t(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return i.set(t,Zi),Zi;if(se(r))for(let d=0;d<r.length;d++){const f=cn(r[d]);zh(f)&&(o[f]=Fe)}else if(r)for(const d in r){const f=cn(d);if(zh(f)){const p=r[d],v=o[f]=se(p)||ce(p)?{type:p}:p;if(v){const E=Yh(Boolean,v.type),w=Yh(String,v.type);v[0]=E>-1,v[1]=w<0||E<w,(E>-1||Ce(v,"default"))&&a.push(f)}}}const u=[o,a];return i.set(t,u),u}function zh(t){return t[0]!=="$"}function Kh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Gh(t,e){return Kh(t)===Kh(e)}function Yh(t,e){return se(e)?e.findIndex(n=>Gh(n,t)):ce(e)&&Gh(e,t)?0:-1}const Pg=t=>t[0]==="_"||t==="$stable",su=t=>se(t)?t.map(sn):[sn(t)],CC=(t,e,n)=>{const i=Qw((...s)=>su(e(...s)),n);return i._c=!1,i},kg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Pg(s))continue;const r=t[s];if(ce(r))e[s]=CC(s,r,i);else if(r!=null){const o=su(r);e[s]=()=>o}}},xg=(t,e)=>{const n=su(e);t.slots.default=()=>n},TC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ae(e),zo(e,"_",n)):kg(e,t.slots={})}else t.slots={},e&&xg(t,e);zo(t.slots,Pa,1)},IC=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(_t(s,e),!n&&a===1&&delete s._):(r=!e.$stable,kg(e,s)),o=e}else e&&(xg(t,e),o={default:1});if(r)for(const a in s)!Pg(a)&&!(a in o)&&delete s[a]};function OD(t,e){const n=Mt;if(n===null)return t;const i=n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,u=Fe]=e[r];ce(o)&&(o={mounted:o,updated:o}),o.deep&&mi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function ci(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Os(),zt(c,n,8,[t.el,a,t,e]),Ns())}}function Dg(){return{app:null,config:{isNativeTag:nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AC=0;function SC(t,e){return function(i,s=null){s!=null&&!Qe(s)&&(s=null);const r=Dg(),o=new Set;let a=!1;const c=r.app={_uid:AC++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:XC,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...d)):ce(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!a){const p=Nt(i,s);return p.appContext=r,d&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,au(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c}};return c}}function Yl(t,e,n,i,s=!1){if(se(t)){t.forEach((p,v)=>Yl(p,e&&(se(e)?e[v]:e),n,i,s));return}if(ql(i)&&!s)return;const r=i.shapeFlag&4?au(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,u=e&&e.r,d=a.refs===Fe?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(nt(u)?(d[u]=null,Ce(f,u)&&(f[u]=null)):qe(u)&&(u.value=null)),ce(c))zn(c,a,12,[o,d]);else{const p=nt(c),v=qe(c);if(p||v){const E=()=>{if(t.f){const w=p?d[c]:c.value;s?se(w)&&Vc(w,r):se(w)?w.includes(r)||w.push(r):p?d[c]=[r]:(c.value=[r],t.k&&(d[t.k]=c.value))}else p?(d[c]=o,Ce(f,c)&&(f[c]=o)):qe(c)&&(c.value=o,t.k&&(d[t.k]=o))};o?(E.id=-1,vt(E,n)):E()}}}const vt=nC;function OC(t){return NC(t)}function NC(t,e){const n=lw();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:v=qt,cloneNode:E,insertStaticContent:w}=t,A=(g,y,T,R=null,S=null,D=null,V=!1,k=null,$=!!y.dynamicChildren)=>{if(g===y)return;g&&!nr(g,y)&&(R=j(g),Ge(g,S,D,!0),g=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:P,ref:K,shapeFlag:q}=y;switch(P){case ru:N(g,y,T,R);break;case Ii:M(g,y,T,R);break;case yl:g==null&&U(y,T,R,V);break;case _n:Oe(g,y,T,R,S,D,V,k,$);break;default:q&1?H(g,y,T,R,S,D,V,k,$):q&6?Re(g,y,T,R,S,D,V,k,$):(q&64||q&128)&&P.process(g,y,T,R,S,D,V,k,$,we)}K!=null&&S&&Yl(K,g&&g.ref,D,y||g,!y)},N=(g,y,T,R)=>{if(g==null)i(y.el=a(y.children),T,R);else{const S=y.el=g.el;y.children!==g.children&&u(S,y.children)}},M=(g,y,T,R)=>{g==null?i(y.el=c(y.children||""),T,R):y.el=g.el},U=(g,y,T,R)=>{[g.el,g.anchor]=w(g.children,y,T,R,g.el,g.anchor)},F=({el:g,anchor:y},T,R)=>{let S;for(;g&&g!==y;)S=p(g),i(g,T,R),g=S;i(y,T,R)},Y=({el:g,anchor:y})=>{let T;for(;g&&g!==y;)T=p(g),s(g),g=T;s(y)},H=(g,y,T,R,S,D,V,k,$)=>{V=V||y.type==="svg",g==null?z(y,T,R,S,D,V,k,$):X(g,y,S,D,V,k,$)},z=(g,y,T,R,S,D,V,k)=>{let $,P;const{type:K,props:q,shapeFlag:G,transition:Q,patchFlag:fe,dirs:Pe}=g;if(g.el&&E!==void 0&&fe===-1)$=g.el=E(g.el);else{if($=g.el=o(g.type,D,q&&q.is,q),G&8?d($,g.children):G&16&&de(g.children,$,null,R,S,D&&K!=="foreignObject",V,k),Pe&&ci(g,null,R,"created"),q){for(const De in q)De!=="value"&&!Fo(De)&&r($,De,null,q[De],D,g.children,R,S,B);"value"in q&&r($,"value",null,q.value),(P=q.onVnodeBeforeMount)&&nn(P,R,g)}ue($,g,g.scopeId,V,R)}Pe&&ci(g,null,R,"beforeMount");const Ne=(!S||S&&!S.pendingBranch)&&Q&&!Q.persisted;Ne&&Q.beforeEnter($),i($,y,T),((P=q&&q.onVnodeMounted)||Ne||Pe)&&vt(()=>{P&&nn(P,R,g),Ne&&Q.enter($),Pe&&ci(g,null,R,"mounted")},S)},ue=(g,y,T,R,S)=>{if(T&&v(g,T),R)for(let D=0;D<R.length;D++)v(g,R[D]);if(S){let D=S.subTree;if(y===D){const V=S.vnode;ue(g,V,V.scopeId,V.slotScopeIds,S.parent)}}},de=(g,y,T,R,S,D,V,k,$=0)=>{for(let P=$;P<g.length;P++){const K=g[P]=k?Mn(g[P]):sn(g[P]);A(null,K,y,T,R,S,D,V,k)}},X=(g,y,T,R,S,D,V)=>{const k=y.el=g.el;let{patchFlag:$,dynamicChildren:P,dirs:K}=y;$|=g.patchFlag&16;const q=g.props||Fe,G=y.props||Fe;let Q;T&&ui(T,!1),(Q=G.onVnodeBeforeUpdate)&&nn(Q,T,y,g),K&&ci(y,g,T,"beforeUpdate"),T&&ui(T,!0);const fe=S&&y.type!=="foreignObject";if(P?oe(g.dynamicChildren,P,k,T,R,fe,D):V||Ve(g,y,k,null,T,R,fe,D,!1),$>0){if($&16)Te(k,y,q,G,T,R,S);else if($&2&&q.class!==G.class&&r(k,"class",null,G.class,S),$&4&&r(k,"style",q.style,G.style,S),$&8){const Pe=y.dynamicProps;for(let Ne=0;Ne<Pe.length;Ne++){const De=Pe[Ne],It=q[De],fn=G[De];(fn!==It||De==="value")&&r(k,De,It,fn,S,g.children,T,R,B)}}$&1&&g.children!==y.children&&d(k,y.children)}else!V&&P==null&&Te(k,y,q,G,T,R,S);((Q=G.onVnodeUpdated)||K)&&vt(()=>{Q&&nn(Q,T,y,g),K&&ci(y,g,T,"updated")},R)},oe=(g,y,T,R,S,D,V)=>{for(let k=0;k<y.length;k++){const $=g[k],P=y[k],K=$.el&&($.type===_n||!nr($,P)||$.shapeFlag&70)?f($.el):T;A($,P,K,null,R,S,D,V,!0)}},Te=(g,y,T,R,S,D,V)=>{if(T!==R){for(const k in R){if(Fo(k))continue;const $=R[k],P=T[k];$!==P&&k!=="value"&&r(g,k,P,$,V,y.children,S,D,B)}if(T!==Fe)for(const k in T)!Fo(k)&&!(k in R)&&r(g,k,T[k],null,V,y.children,S,D,B);"value"in R&&r(g,"value",T.value,R.value)}},Oe=(g,y,T,R,S,D,V,k,$)=>{const P=y.el=g?g.el:a(""),K=y.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:Q}=y;Q&&(k=k?k.concat(Q):Q),g==null?(i(P,T,R),i(K,T,R),de(y.children,T,K,S,D,V,k,$)):q>0&&q&64&&G&&g.dynamicChildren?(oe(g.dynamicChildren,G,T,S,D,V,k),(y.key!=null||S&&y===S.subTree)&&Lg(g,y,!0)):Ve(g,y,T,K,S,D,V,k,$)},Re=(g,y,T,R,S,D,V,k,$)=>{y.slotScopeIds=k,g==null?y.shapeFlag&512?S.ctx.activate(y,T,R,V,$):mt(y,T,R,S,D,V,$):ve(g,y,$)},mt=(g,y,T,R,S,D,V)=>{const k=g.component=jC(g,R,S);if(Ig(g)&&(k.ctx.renderer=we),qC(k),k.asyncDep){if(S&&S.registerDep(k,ae),!g.el){const $=k.subTree=Nt(Ii);M(null,$,y,T)}return}ae(k,g,y,T,S,D,V)},ve=(g,y,T)=>{const R=y.component=g.component;if(Zw(g,y,T))if(R.asyncDep&&!R.asyncResolved){me(R,y,T);return}else R.next=y,zw(R.update),R.update();else y.component=g.component,y.el=g.el,R.vnode=y},ae=(g,y,T,R,S,D,V)=>{const k=()=>{if(g.isMounted){let{next:K,bu:q,u:G,parent:Q,vnode:fe}=g,Pe=K,Ne;ui(g,!1),K?(K.el=fe.el,me(g,K,V)):K=fe,q&&Bo(q),(Ne=K.props&&K.props.onVnodeBeforeUpdate)&&nn(Ne,Q,K,fe),ui(g,!0);const De=vl(g),It=g.subTree;g.subTree=De,A(It,De,f(It.el),j(It),g,S,D),K.el=De.el,Pe===null&&eC(g,De.el),G&&vt(G,S),(Ne=K.props&&K.props.onVnodeUpdated)&&vt(()=>nn(Ne,Q,K,fe),S)}else{let K;const{el:q,props:G}=y,{bm:Q,m:fe,parent:Pe}=g,Ne=ql(y);if(ui(g,!1),Q&&Bo(Q),!Ne&&(K=G&&G.onVnodeBeforeMount)&&nn(K,Pe,y),ui(g,!0),q&&te){const De=()=>{g.subTree=vl(g),te(q,g.subTree,g,S,null)};Ne?y.type.__asyncLoader().then(()=>!g.isUnmounted&&De()):De()}else{const De=g.subTree=vl(g);A(null,De,T,R,g,S,D),y.el=De.el}if(fe&&vt(fe,S),!Ne&&(K=G&&G.onVnodeMounted)){const De=y;vt(()=>nn(K,Pe,De),S)}y.shapeFlag&256&&g.a&&vt(g.a,S),g.isMounted=!0,y=T=R=null}},$=g.effect=new zc(k,()=>_g(g.update),g.scope),P=g.update=$.run.bind($);P.id=g.uid,ui(g,!0),P()},me=(g,y,T)=>{y.component=g;const R=g.vnode.props;g.vnode=y,g.next=null,wC(g,y.props,R,T),IC(g,y.children,T),Os(),tu(void 0,g.update),Ns()},Ve=(g,y,T,R,S,D,V,k,$=!1)=>{const P=g&&g.children,K=g?g.shapeFlag:0,q=y.children,{patchFlag:G,shapeFlag:Q}=y;if(G>0){if(G&128){dt(P,q,T,R,S,D,V,k,$);return}else if(G&256){Ct(P,q,T,R,S,D,V,k,$);return}}Q&8?(K&16&&B(P,S,D),q!==P&&d(T,q)):K&16?Q&16?dt(P,q,T,R,S,D,V,k,$):B(P,S,D,!0):(K&8&&d(T,""),Q&16&&de(q,T,R,S,D,V,k,$))},Ct=(g,y,T,R,S,D,V,k,$)=>{g=g||Zi,y=y||Zi;const P=g.length,K=y.length,q=Math.min(P,K);let G;for(G=0;G<q;G++){const Q=y[G]=$?Mn(y[G]):sn(y[G]);A(g[G],Q,T,null,S,D,V,k,$)}P>K?B(g,S,D,!0,!1,q):de(y,T,R,S,D,V,k,$,q)},dt=(g,y,T,R,S,D,V,k,$)=>{let P=0;const K=y.length;let q=g.length-1,G=K-1;for(;P<=q&&P<=G;){const Q=g[P],fe=y[P]=$?Mn(y[P]):sn(y[P]);if(nr(Q,fe))A(Q,fe,T,null,S,D,V,k,$);else break;P++}for(;P<=q&&P<=G;){const Q=g[q],fe=y[G]=$?Mn(y[G]):sn(y[G]);if(nr(Q,fe))A(Q,fe,T,null,S,D,V,k,$);else break;q--,G--}if(P>q){if(P<=G){const Q=G+1,fe=Q<K?y[Q].el:R;for(;P<=G;)A(null,y[P]=$?Mn(y[P]):sn(y[P]),T,fe,S,D,V,k,$),P++}}else if(P>G)for(;P<=q;)Ge(g[P],S,D,!0),P++;else{const Q=P,fe=P,Pe=new Map;for(P=fe;P<=G;P++){const it=y[P]=$?Mn(y[P]):sn(y[P]);it.key!=null&&Pe.set(it.key,P)}let Ne,De=0;const It=G-fe+1;let fn=!1,_o=0;const Ht=new Array(It);for(P=0;P<It;P++)Ht[P]=0;for(P=Q;P<=q;P++){const it=g[P];if(De>=It){Ge(it,S,D,!0);continue}let ke;if(it.key!=null)ke=Pe.get(it.key);else for(Ne=fe;Ne<=G;Ne++)if(Ht[Ne-fe]===0&&nr(it,y[Ne])){ke=Ne;break}ke===void 0?Ge(it,S,D,!0):(Ht[ke-fe]=P+1,ke>=_o?_o=ke:fn=!0,A(it,y[ke],T,null,S,D,V,k,$),De++)}const Ws=fn?RC(Ht):Zi;for(Ne=Ws.length-1,P=It-1;P>=0;P--){const it=fe+P,ke=y[it],mo=it+1<K?y[it+1].el:R;Ht[P]===0?A(null,ke,T,mo,S,D,V,k,$):fn&&(Ne<0||P!==Ws[Ne]?Ye(ke,T,mo,2):Ne--)}}},Ye=(g,y,T,R,S=null)=>{const{el:D,type:V,transition:k,children:$,shapeFlag:P}=g;if(P&6){Ye(g.component.subTree,y,T,R);return}if(P&128){g.suspense.move(y,T,R);return}if(P&64){V.move(g,y,T,we);return}if(V===_n){i(D,y,T);for(let q=0;q<$.length;q++)Ye($[q],y,T,R);i(g.anchor,y,T);return}if(V===yl){F(g,y,T);return}if(R!==2&&P&1&&k)if(R===0)k.beforeEnter(D),i(D,y,T),vt(()=>k.enter(D),S);else{const{leave:q,delayLeave:G,afterLeave:Q}=k,fe=()=>i(D,y,T),Pe=()=>{q(D,()=>{fe(),Q&&Q()})};G?G(D,fe,Pe):Pe()}else i(D,y,T)},Ge=(g,y,T,R=!1,S=!1)=>{const{type:D,props:V,ref:k,children:$,dynamicChildren:P,shapeFlag:K,patchFlag:q,dirs:G}=g;if(k!=null&&Yl(k,null,T,g,!0),K&256){y.ctx.deactivate(g);return}const Q=K&1&&G,fe=!ql(g);let Pe;if(fe&&(Pe=V&&V.onVnodeBeforeUnmount)&&nn(Pe,y,g),K&6)W(g.component,T,R);else{if(K&128){g.suspense.unmount(T,R);return}Q&&ci(g,null,y,"beforeUnmount"),K&64?g.type.remove(g,y,T,S,we,R):P&&(D!==_n||q>0&&q&64)?B(P,y,T,!1,!0):(D===_n&&q&384||!S&&K&16)&&B($,y,T),R&&Tt(g)}(fe&&(Pe=V&&V.onVnodeUnmounted)||Q)&&vt(()=>{Pe&&nn(Pe,y,g),Q&&ci(g,null,y,"unmounted")},T)},Tt=g=>{const{type:y,el:T,anchor:R,transition:S}=g;if(y===_n){O(T,R);return}if(y===yl){Y(g);return}const D=()=>{s(T),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:V,delayLeave:k}=S,$=()=>V(T,D);k?k(g.el,D,$):$()}else D()},O=(g,y)=>{let T;for(;g!==y;)T=p(g),s(g),g=T;s(y)},W=(g,y,T)=>{const{bum:R,scope:S,update:D,subTree:V,um:k}=g;R&&Bo(R),S.stop(),D&&(D.active=!1,Ge(V,g,y,T)),k&&vt(k,y),vt(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},B=(g,y,T,R=!1,S=!1,D=0)=>{for(let V=D;V<g.length;V++)Ge(g[V],y,T,R,S)},j=g=>g.shapeFlag&6?j(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),ye=(g,y,T)=>{g==null?y._vnode&&Ge(y._vnode,null,null,!0):A(y._vnode||null,g,y,null,null,null,T),yg(),y._vnode=g},we={p:A,um:Ge,m:Ye,r:Tt,mt,mc:de,pc:Ve,pbc:oe,n:j,o:t};let re,te;return e&&([re,te]=e(we)),{render:ye,hydrate:re,createApp:SC(ye,re)}}function ui({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lg(t,e,n=!1){const i=t.children,s=e.children;if(se(i)&&se(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Mn(s[r]),a.el=o.el),n||Lg(o,a))}}function RC(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const PC=t=>t.__isTeleport,Mg="components",kC="directives";function ND(t,e){return $g(Mg,t,!0,e)||t}const xC=Symbol();function RD(t){return $g(kC,t)}function $g(t,e,n=!0,i=!1){const s=Mt||et;if(s){const r=s.type;if(t===Mg){const a=YC(r);if(a&&(a===e||a===cn(e)||a===Aa(cn(e))))return r}const o=Qh(s[t]||r[t],e)||Qh(s.appContext[t],e);return!o&&i?r:o}}function Qh(t,e){return t&&(t[e]||t[cn(e)]||t[Aa(cn(e))])}const _n=Symbol(void 0),ru=Symbol(void 0),Ii=Symbol(void 0),yl=Symbol(void 0),_r=[];let Ei=null;function DC(t=!1){_r.push(Ei=t?null:[])}function LC(){_r.pop(),Ei=_r[_r.length-1]||null}let Qo=1;function Xh(t){Qo+=t}function Fg(t){return t.dynamicChildren=Qo>0?Ei||Zi:null,LC(),Qo>0&&Ei&&Ei.push(t),t}function PD(t,e,n,i,s,r){return Fg(Ug(t,e,n,i,s,r,!0))}function MC(t,e,n,i,s){return Fg(Nt(t,e,n,i,s,!0))}function Ql(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const Pa="__vInternal",Bg=({key:t})=>t!=null?t:null,Ho=({ref:t,ref_key:e,ref_for:n})=>t!=null?nt(t)||qe(t)||ce(t)?{i:Mt,r:t,k:e,f:!!n}:t:null;function Ug(t,e=null,n=null,i=0,s=null,r=t===_n?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bg(e),ref:e&&Ho(e),scopeId:Na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ou(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Qo>0&&!o&&Ei&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ei.push(c),c}const Nt=$C;function $C(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===xC)&&(t=Ii),Ql(t)){const a=xr(t,e,!0);return n&&ou(a,n),a}if(QC(t)&&(t=t.__vccOpts),e){e=FC(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=Uc(a)),Qe(c)&&(ug(c)&&!se(c)&&(c=_t({},c)),e.style=Bc(c))}const o=nt(t)?1:tC(t)?128:PC(t)?64:Qe(t)?4:ce(t)?2:0;return Ug(t,e,n,i,s,o,r,!0)}function FC(t){return t?ug(t)||Pa in t?_t({},t):t:null}function xr(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?UC(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bg(a),ref:e&&e.ref?n&&s?se(s)?s.concat(Ho(e)):[s,Ho(e)]:Ho(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_n?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xr(t.ssContent),ssFallback:t.ssFallback&&xr(t.ssFallback),el:t.el,anchor:t.anchor}}function BC(t=" ",e=0){return Nt(ru,null,t,e)}function kD(t="",e=!1){return e?(DC(),MC(Ii,null,t)):Nt(Ii,null,t)}function sn(t){return t==null||typeof t=="boolean"?Nt(Ii):se(t)?Nt(_n,null,t.slice()):typeof t=="object"?Mn(t):Nt(ru,null,String(t))}function Mn(t){return t.el===null||t.memo?t:xr(t)}function ou(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pa in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),i&64?(n=16,e=[BC(e)]):n=8);t.children=e,t.shapeFlag|=n}function UC(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Uc([e.class,i.class]));else if(s==="style")e.style=Bc([e.style,i.style]);else if(Ca(s)){const r=e[s],o=i[s];o&&r!==o&&!(se(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function nn(t,e,n,i=null){zt(t,e,7,[n,i])}function xD(t,e,n,i){let s;const r=n&&n[i];if(se(t)||nt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Xl=t=>t?Vg(t)?au(t)||t.proxy:Xl(t.parent):null,Xo=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$emit:t=>t.emit,$options:t=>Og(t),$forceUpdate:t=>()=>_g(t.update),$nextTick:t=>eu.bind(t.proxy),$watch:t=>iC.bind(t)}),HC={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==Fe&&Ce(i,e))return o[e]=1,i[e];if(s!==Fe&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,r[e];if(n!==Fe&&Ce(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const d=Xo[e];let f,p;if(d)return e==="$attrs"&&Pt(t,"get",e),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Ce(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ce(p,e))return p[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==Fe&&Ce(s,e)?(s[e]=n,!0):i!==Fe&&Ce(i,e)?(i[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&Ce(t,o)||e!==Fe&&Ce(e,o)||(a=r[0])&&Ce(a,o)||Ce(i,o)||Ce(Xo,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},VC=Dg();let WC=0;function jC(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||VC,r={uid:WC++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rg(i,s),emitsOptions:bg(i,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yw.bind(null,r),t.ce&&t.ce(r),r}let et=null;const Hg=()=>et||Mt,cs=t=>{et=t,t.scope.on()},bi=()=>{et&&et.scope.off(),et=null};function Vg(t){return t.vnode.shapeFlag&4}let Dr=!1;function qC(t,e=!1){Dr=e;const{props:n,children:i}=t.vnode,s=Vg(t);bC(t,n,s,e),TC(t,i);const r=s?zC(t,e):void 0;return Dr=!1,r}function zC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ls(new Proxy(t.ctx,HC));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?GC(t):null;cs(t),Os();const r=zn(i,t,0,[t.props,s]);if(Ns(),bi(),Kp(r)){if(r.then(bi,bi),e)return r.then(o=>{Jh(t,o,e)}).catch(o=>{Oa(o,t,0)});t.asyncDep=r}else Jh(t,r,e)}else Wg(t,e)}function Jh(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=pg(e)),Wg(t,n)}let Zh;function Wg(t,e,n){const i=t.type;if(!t.render){if(!e&&Zh&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,u=_t(_t({isCustomElement:r,delimiters:a},o),c);i.render=Zh(s,u)}}t.render=i.render||qt}cs(t),Os(),_C(t),Ns(),bi()}function KC(t){return new Proxy(t.attrs,{get(e,n){return Pt(t,"get","$attrs"),e[n]}})}function GC(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=KC(t))},slots:t.slots,emit:t.emit,expose:e}}function au(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pg(ls(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xo)return Xo[n](t)}}))}function YC(t){return ce(t)&&t.displayName||t.name}function QC(t){return ce(t)&&"__vccOpts"in t}const Vt=(t,e)=>Ww(t,e,Dr);function jg(t,e,n){const i=arguments.length;return i===2?Qe(e)&&!se(e)?Ql(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ql(n)&&(n=[n]),Nt(t,e,n))}const XC="3.2.31",JC="http://www.w3.org/2000/svg",_i=typeof document!="undefined"?document:null,ef=_i&&_i.createElement("template"),ZC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?_i.createElementNS(JC,t):_i.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>_i.createTextNode(t),createComment:t=>_i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ef.innerHTML=i?`<svg>${t}</svg>`:t;const a=ef.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eT(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tT(t,e,n){const i=t.style,s=nt(n);if(n&&!s){for(const r in n)Jl(i,r,n[r]);if(e&&!nt(e))for(const r in e)n[r]==null&&Jl(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const tf=/\s*!important$/;function Jl(t,e,n){if(se(n))n.forEach(i=>Jl(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=nT(t,e);tf.test(n)?t.setProperty(Ss(i),n.replace(tf,""),"important"):t[i]=n}}const nf=["Webkit","Moz","ms"],El={};function nT(t,e){const n=El[e];if(n)return n;let i=cn(e);if(i!=="filter"&&i in t)return El[e]=i;i=Aa(i);for(let s=0;s<nf.length;s++){const r=nf[s]+i;if(r in t)return El[e]=r}return e}const sf="http://www.w3.org/1999/xlink";function iT(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sf,e.slice(6,e.length)):t.setAttributeNS(sf,e,n);else{const r=Jb(e);n==null||r&&!jp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function sT(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=jp(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Jo=Date.now,qg=!1;if(typeof window!="undefined"){Jo()>document.createEvent("Event").timeStamp&&(Jo=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);qg=!!(t&&Number(t[1])<=53)}let Zl=0;const rT=Promise.resolve(),oT=()=>{Zl=0},aT=()=>Zl||(rT.then(oT),Zl=Jo());function Gi(t,e,n,i){t.addEventListener(e,n,i)}function lT(t,e,n,i){t.removeEventListener(e,n,i)}function cT(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=uT(e);if(i){const u=r[e]=dT(i,s);Gi(t,a,u,c)}else o&&(lT(t,a,o,c),r[e]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function uT(t){let e;if(rf.test(t)){e={};let n;for(;n=t.match(rf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ss(t.slice(2)),e]}function dT(t,e){const n=i=>{const s=i.timeStamp||Jo();(qg||s>=n.attached-1)&&zt(hT(i,n.value),e,5,[i])};return n.value=t,n.attached=aT(),n}function hT(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const of=/^on[a-z]/,fT=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?eT(t,i,s):e==="style"?tT(t,n,i):Ca(e)?Hc(e)||cT(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pT(t,e,i,s))?sT(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),iT(t,e,i,s))};function pT(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&of.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||of.test(e)&&nt(n)?!1:e in t}const af=t=>{const e=t.props["onUpdate:modelValue"];return se(e)?n=>Bo(e,n):e};function gT(t){t.target.composing=!0}function lf(t){const e=t.target;e.composing&&(e.composing=!1,_T(e,"input"))}function _T(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const DD={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=af(s);const r=i||s.props&&s.props.type==="number";Gi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=Fl(a)),t._assign(a)}),n&&Gi(t,"change",()=>{t.value=t.value.trim()}),e||(Gi(t,"compositionstart",gT),Gi(t,"compositionend",lf),Gi(t,"change",lf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=af(r),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Fl(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},mT=["ctrl","shift","alt","meta"],vT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mT.some(n=>t[`${n}Key`]&&!e.includes(n))},LD=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=vT[e[s]];if(r&&r(n,e))return}return t(n,...i)},yT=_t({patchProp:fT},ZC);let cf;function ET(){return cf||(cf=OC(yT))}const MD=(...t)=>{const e=ET().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=bT(i);if(!s)return;const r=e._component;!ce(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bT(t){return nt(t)?document.querySelector(t):t}var wT=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let zg;const ka=t=>zg=t,Kg=Symbol();function ec(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var mr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mr||(mr={}));function $D(){const t=Xp(!0),e=t.run(()=>Jc({}));let n=[],i=[];const s=ls({install(r){ka(s),s._a=r,r.provide(Kg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!wT?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gg=()=>{};function uf(t,e,n,i=Gg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Hg()&&iu(s),s}function Wi(t,...e){t.slice().forEach(n=>{n(...e)})}function tc(t,e){for(const n in e){const i=e[n],s=t[n];ec(s)&&ec(i)&&!qe(i)&&!qn(i)?t[n]=tc(s,i):t[n]=i}return t}const CT=Symbol();function TT(t){return!ec(t)||!t.hasOwnProperty(CT)}const{assign:gn}=Object;function IT(t){return!!(qe(t)&&t.effect)}function AT(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const d=Bw(n.state.value[t]);return gn(d,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=ls(Vt(()=>{ka(n);const v=n._s.get(t);return o[p].call(v,v)})),f),{}))}return c=Yg(t,u,e,n),c.$reset=function(){const f=s?s():{};this.$patch(p=>{gn(p,f)})},c}function Yg(t,e,n={},i,s){let r;const o=n.state,a=gn({actions:{}},n),c={deep:!0};let u,d,f=ls([]),p=ls([]),v;const E=i.state.value[t];!o&&!E&&(i.state.value[t]={}),Jc({});function w(H){let z;u=d=!1,typeof H=="function"?(H(i.state.value[t]),z={type:mr.patchFunction,storeId:t,events:v}):(tc(i.state.value[t],H),z={type:mr.patchObject,payload:H,storeId:t,events:v}),eu().then(()=>{u=!0}),d=!0,Wi(f,z,i.state.value[t])}const A=Gg;function N(){r.stop(),f=[],p=[],i._s.delete(t)}function M(H,z){return function(){ka(i);const ue=Array.from(arguments),de=[],X=[];function oe(Re){de.push(Re)}function Te(Re){X.push(Re)}Wi(p,{args:ue,name:H,store:F,after:oe,onError:Te});let Oe;try{Oe=z.apply(this&&this.$id===t?this:F,ue)}catch(Re){throw Wi(X,Re),Re}return Oe instanceof Promise?Oe.then(Re=>(Wi(de,Re),Re)).catch(Re=>(Wi(X,Re),Promise.reject(Re))):(Wi(de,Oe),Oe)}}const U={_p:i,$id:t,$onAction:uf.bind(null,p),$patch:w,$reset:A,$subscribe(H,z={}){const ue=uf(f,H,z.detached,()=>de()),de=r.run(()=>gr(()=>i.state.value[t],X=>{(z.flush==="sync"?d:u)&&H({storeId:t,type:mr.direct,events:v},X)},gn({},c,z)));return ue},$dispose:N},F=Rs(gn({},U));i._s.set(t,F);const Y=i._e.run(()=>(r=Xp(),r.run(()=>e())));for(const H in Y){const z=Y[H];if(qe(z)&&!IT(z)||qn(z))o||(E&&TT(z)&&(qe(z)?z.value=E[H]:tc(z,E[H])),i.state.value[t][H]=z);else if(typeof z=="function"){const ue=M(H,z);Y[H]=ue,a.actions[H]=z}}return gn(F,Y),gn(Ae(F),Y),Object.defineProperty(F,"$state",{get:()=>i.state.value[t],set:H=>{w(z=>{gn(z,H)})}}),i._p.forEach(H=>{gn(F,r.run(()=>H({store:F,app:i._a,pinia:i,options:a})))}),E&&o&&n.hydrate&&n.hydrate(F.$state,E),u=!0,d=!0,F}function FD(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const u=Hg();return a=a||u&&bn(Kg),a&&ka(a),a=zg,a._s.has(i)||(r?Yg(i,e,s,a):AT(i,s,a)),a._s.get(i)}return o.$id=i,o}var nc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ST(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),e}var Qg={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(nc,function(){function n(){var E=!1;return typeof navigator!="undefined"&&(E=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),E}var i=0,s=["ms","moz","webkit","o"];typeof window=="undefined"&&(nc.window={});for(var r=0;r<s.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[s[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[r]+"CancelAnimationFrame"]||window[s[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(E,w){var A=new Date().getTime(),N=Math.max(0,16-(A-i)),M=window.setTimeout(function(){E(A+N)},N);return i=A+N,M}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(E){clearTimeout(E)});var o=window.requestAnimationFrame,a=window.cancelAnimationFrame;function c(E){E.__currentTarget__=this.__container__,this.__resize__handler__.call(this,{width:this.offsetWidth,height:this.offsetHeight},E)}function u(E){var w=E.currentTarget||E.srcElement;w.__requestAnimationFrameID__&&a(w.__requestAnimationFrameID__),w.__requestAnimationFrameID__=o(c.bind(this,E))}function d(){document.attachEvent?this.__container__.attachEvent("onresize",c.bind(this)):this.contentDocument.defaultView.addEventListener("resize",u.bind(this))}function f(){var E=document.createElement("object");E.setAttribute("aria-hidden","true"),E.setAttribute("tabindex",-1);var w=`
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
  `;return E.setAttribute("style",w),E.type="text/html",E}var p={beforeMount:function(w,A,N,M){w.__resizeTrigger__=f(),w.__resizeTrigger__.__container__=w,w.__resizeTrigger__.__resize__handler__=A.value,w.__resizeTrigger__.onload=d;var U=n();U&&w.appendChild(w.__resizeTrigger__),w.__resizeTrigger__.data="about:blank",!U&&w.appendChild(w.__resizeTrigger__)},mounted:function(w,A,N,M){getComputedStyle(w).position==="static"&&w.style.setProperty("position","relative","important")},beforeUpdate:function(w,A,N,M){},updated:function(w,A,N,M){for(var U=!1,F=0,Y=w.children;F<Y;F++)w.children[F]===w.__resizeTrigger__&&(U=!0);if(!U){var H=n();H&&w.appendChild(w.__resizeTrigger__),w.__resizeTrigger__.data="about:blank",!H&&w.appendChild(w.__resizeTrigger__)}},beforeUnmount:function(w,A,N,M){},unmounted:function(w,A,N,M){document.attachEvent?w.detachEvent("onresize",c):w.__resizeTrigger__&&w.__resizeTrigger__.contentDocument&&(w.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",u),w.__resizeTrigger__=!w.removeChild(w.__resizeTrigger__))}},v={install:function(w){w.directive("resize",p)}};return t.exports=v,v})})(Qg);var BD=Qg.exports,OT={exports:{}},ft="top",kt="bottom",xt="right",pt="left",xa="auto",Ps=[ft,kt,xt,pt],Ai="start",us="end",Xg="clippingParents",lu="viewport",Yi="popper",Jg="reference",ic=Ps.reduce(function(t,e){return t.concat([e+"-"+Ai,e+"-"+us])},[]),cu=[].concat(Ps,[xa]).reduce(function(t,e){return t.concat([e,e+"-"+Ai,e+"-"+us])},[]),Zg="beforeRead",e_="read",t_="afterRead",n_="beforeMain",i_="main",s_="afterMain",r_="beforeWrite",o_="write",a_="afterWrite",l_=[Zg,e_,t_,n_,i_,s_,r_,o_,a_];function un(t){return t?(t.nodeName||"").toLowerCase():null}function Xt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ds(t){var e=Xt(t).Element;return t instanceof e||t instanceof Element}function Ft(t){var e=Xt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function c_(t){if(typeof ShadowRoot=="undefined")return!1;var e=Xt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function NT(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!Ft(r)||!un(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function RT(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(c,u){return c[u]="",c},{});!Ft(s)||!un(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}var uu={name:"applyStyles",enabled:!0,phase:"write",fn:NT,effect:RT,requires:["computeStyles"]};function on(t){return t.split("-")[0]}var wi=Math.max,Zo=Math.min,hs=Math.round;function fs(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),i=1,s=1;if(Ft(t)&&e){var r=t.offsetHeight,o=t.offsetWidth;o>0&&(i=hs(n.width)/o||1),r>0&&(s=hs(n.height)/r||1)}return{width:n.width/i,height:n.height/s,top:n.top/s,right:n.right/i,bottom:n.bottom/s,left:n.left/i,x:n.left/i,y:n.top/s}}function du(t){var e=fs(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function u_(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&c_(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function In(t){return Xt(t).getComputedStyle(t)}function PT(t){return["table","td","th"].indexOf(un(t))>=0}function Zn(t){return((ds(t)?t.ownerDocument:t.document)||window.document).documentElement}function Da(t){return un(t)==="html"?t:t.assignedSlot||t.parentNode||(c_(t)?t.host:null)||Zn(t)}function df(t){return!Ft(t)||In(t).position==="fixed"?null:t.offsetParent}function kT(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&Ft(t)){var i=In(t);if(i.position==="fixed")return null}for(var s=Da(t);Ft(s)&&["html","body"].indexOf(un(s))<0;){var r=In(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Yr(t){for(var e=Xt(t),n=df(t);n&&PT(n)&&In(n).position==="static";)n=df(n);return n&&(un(n)==="html"||un(n)==="body"&&In(n).position==="static")?e:n||kT(t)||e}function hu(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function vr(t,e,n){return wi(t,Zo(e,n))}function xT(t,e,n){var i=vr(t,e,n);return i>n?n:i}function d_(){return{top:0,right:0,bottom:0,left:0}}function h_(t){return Object.assign({},d_(),t)}function f_(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var DT=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,h_(typeof e!="number"?e:f_(e,Ps))};function LT(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=on(n.placement),c=hu(a),u=[pt,xt].indexOf(a)>=0,d=u?"height":"width";if(!(!r||!o)){var f=DT(s.padding,n),p=du(r),v=c==="y"?ft:pt,E=c==="y"?kt:xt,w=n.rects.reference[d]+n.rects.reference[c]-o[c]-n.rects.popper[d],A=o[c]-n.rects.reference[c],N=Yr(r),M=N?c==="y"?N.clientHeight||0:N.clientWidth||0:0,U=w/2-A/2,F=f[v],Y=M-p[d]-f[E],H=M/2-p[d]/2+U,z=vr(F,H,Y),ue=c;n.modifiersData[i]=(e={},e[ue]=z,e.centerOffset=z-H,e)}}function MT(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||!u_(e.elements.popper,s)||(e.elements.arrow=s))}var p_={name:"arrow",enabled:!0,phase:"main",fn:LT,effect:MT,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ps(t){return t.split("-")[1]}var $T={top:"auto",right:"auto",bottom:"auto",left:"auto"};function FT(t){var e=t.x,n=t.y,i=window,s=i.devicePixelRatio||1;return{x:hs(e*s)/s||0,y:hs(n*s)/s||0}}function hf(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,f=t.isFixed,p=o.x,v=p===void 0?0:p,E=o.y,w=E===void 0?0:E,A=typeof d=="function"?d({x:v,y:w}):{x:v,y:w};v=A.x,w=A.y;var N=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),U=pt,F=ft,Y=window;if(u){var H=Yr(n),z="clientHeight",ue="clientWidth";if(H===Xt(n)&&(H=Zn(n),In(H).position!=="static"&&a==="absolute"&&(z="scrollHeight",ue="scrollWidth")),H=H,s===ft||(s===pt||s===xt)&&r===us){F=kt;var de=f&&Y.visualViewport?Y.visualViewport.height:H[z];w-=de-i.height,w*=c?1:-1}if(s===pt||(s===ft||s===kt)&&r===us){U=xt;var X=f&&Y.visualViewport?Y.visualViewport.width:H[ue];v-=X-i.width,v*=c?1:-1}}var oe=Object.assign({position:a},u&&$T),Te=d===!0?FT({x:v,y:w}):{x:v,y:w};if(v=Te.x,w=Te.y,c){var Oe;return Object.assign({},oe,(Oe={},Oe[F]=M?"0":"",Oe[U]=N?"0":"",Oe.transform=(Y.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",Oe))}return Object.assign({},oe,(e={},e[F]=M?w+"px":"",e[U]=N?v+"px":"",e.transform="",e))}function BT(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,c=a===void 0?!0:a,u={placement:on(e.placement),variation:ps(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,hf(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,hf(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var fu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:BT,data:{}},Do={passive:!0};function UT(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,c=Xt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(d){d.addEventListener("scroll",n.update,Do)}),a&&c.addEventListener("resize",n.update,Do),function(){r&&u.forEach(function(d){d.removeEventListener("scroll",n.update,Do)}),a&&c.removeEventListener("resize",n.update,Do)}}var pu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:UT,data:{}},HT={left:"right",right:"left",bottom:"top",top:"bottom"};function Vo(t){return t.replace(/left|right|bottom|top/g,function(e){return HT[e]})}var VT={start:"end",end:"start"};function ff(t){return t.replace(/start|end/g,function(e){return VT[e]})}function gu(t){var e=Xt(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function _u(t){return fs(Zn(t)).left+gu(t).scrollLeft}function WT(t){var e=Xt(t),n=Zn(t),i=e.visualViewport,s=n.clientWidth,r=n.clientHeight,o=0,a=0;return i&&(s=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:s,height:r,x:o+_u(t),y:a}}function jT(t){var e,n=Zn(t),i=gu(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=wi(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=wi(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+_u(t),c=-i.scrollTop;return In(s||n).direction==="rtl"&&(a+=wi(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function mu(t){var e=In(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function g_(t){return["html","body","#document"].indexOf(un(t))>=0?t.ownerDocument.body:Ft(t)&&mu(t)?t:g_(Da(t))}function yr(t,e){var n;e===void 0&&(e=[]);var i=g_(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=Xt(i),o=s?[r].concat(r.visualViewport||[],mu(i)?i:[]):i,a=e.concat(o);return s?a:a.concat(yr(Da(o)))}function sc(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function qT(t){var e=fs(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function pf(t,e){return e===lu?sc(WT(t)):ds(e)?qT(e):sc(jT(Zn(t)))}function zT(t){var e=yr(Da(t)),n=["absolute","fixed"].indexOf(In(t).position)>=0,i=n&&Ft(t)?Yr(t):t;return ds(i)?e.filter(function(s){return ds(s)&&u_(s,i)&&un(s)!=="body"}):[]}function KT(t,e,n){var i=e==="clippingParents"?zT(t):[].concat(e),s=[].concat(i,[n]),r=s[0],o=s.reduce(function(a,c){var u=pf(t,c);return a.top=wi(u.top,a.top),a.right=Zo(u.right,a.right),a.bottom=Zo(u.bottom,a.bottom),a.left=wi(u.left,a.left),a},pf(t,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function __(t){var e=t.reference,n=t.element,i=t.placement,s=i?on(i):null,r=i?ps(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case ft:c={x:o,y:e.y-n.height};break;case kt:c={x:o,y:e.y+e.height};break;case xt:c={x:e.x+e.width,y:a};break;case pt:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var u=s?hu(s):null;if(u!=null){var d=u==="y"?"height":"width";switch(r){case Ai:c[u]=c[u]-(e[d]/2-n[d]/2);break;case us:c[u]=c[u]+(e[d]/2-n[d]/2);break}}return c}function gs(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.boundary,o=r===void 0?Xg:r,a=n.rootBoundary,c=a===void 0?lu:a,u=n.elementContext,d=u===void 0?Yi:u,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,E=v===void 0?0:v,w=h_(typeof E!="number"?E:f_(E,Ps)),A=d===Yi?Jg:Yi,N=t.rects.popper,M=t.elements[p?A:d],U=KT(ds(M)?M:M.contextElement||Zn(t.elements.popper),o,c),F=fs(t.elements.reference),Y=__({reference:F,element:N,strategy:"absolute",placement:s}),H=sc(Object.assign({},N,Y)),z=d===Yi?H:F,ue={top:U.top-z.top+w.top,bottom:z.bottom-U.bottom+w.bottom,left:U.left-z.left+w.left,right:z.right-U.right+w.right},de=t.modifiersData.offset;if(d===Yi&&de){var X=de[s];Object.keys(ue).forEach(function(oe){var Te=[xt,kt].indexOf(oe)>=0?1:-1,Oe=[ft,kt].indexOf(oe)>=0?"y":"x";ue[oe]+=X[Oe]*Te})}return ue}function GT(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?cu:c,d=ps(i),f=d?a?ic:ic.filter(function(E){return ps(E)===d}):Ps,p=f.filter(function(E){return u.indexOf(E)>=0});p.length===0&&(p=f);var v=p.reduce(function(E,w){return E[w]=gs(t,{placement:w,boundary:s,rootBoundary:r,padding:o})[on(w)],E},{});return Object.keys(v).sort(function(E,w){return v[E]-v[w]})}function YT(t){if(on(t)===xa)return[];var e=Vo(t);return[ff(t),e,ff(e)]}function QT(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,u=n.padding,d=n.boundary,f=n.rootBoundary,p=n.altBoundary,v=n.flipVariations,E=v===void 0?!0:v,w=n.allowedAutoPlacements,A=e.options.placement,N=on(A),M=N===A,U=c||(M||!E?[Vo(A)]:YT(A)),F=[A].concat(U).reduce(function(Tt,O){return Tt.concat(on(O)===xa?GT(e,{placement:O,boundary:d,rootBoundary:f,padding:u,flipVariations:E,allowedAutoPlacements:w}):O)},[]),Y=e.rects.reference,H=e.rects.popper,z=new Map,ue=!0,de=F[0],X=0;X<F.length;X++){var oe=F[X],Te=on(oe),Oe=ps(oe)===Ai,Re=[ft,kt].indexOf(Te)>=0,mt=Re?"width":"height",ve=gs(e,{placement:oe,boundary:d,rootBoundary:f,altBoundary:p,padding:u}),ae=Re?Oe?xt:pt:Oe?kt:ft;Y[mt]>H[mt]&&(ae=Vo(ae));var me=Vo(ae),Ve=[];if(r&&Ve.push(ve[Te]<=0),a&&Ve.push(ve[ae]<=0,ve[me]<=0),Ve.every(function(Tt){return Tt})){de=oe,ue=!1;break}z.set(oe,Ve)}if(ue)for(var Ct=E?3:1,dt=function(O){var W=F.find(function(B){var j=z.get(B);if(j)return j.slice(0,O).every(function(ye){return ye})});if(W)return de=W,"break"},Ye=Ct;Ye>0;Ye--){var Ge=dt(Ye);if(Ge==="break")break}e.placement!==de&&(e.modifiersData[i]._skip=!0,e.placement=de,e.reset=!0)}}var m_={name:"flip",enabled:!0,phase:"main",fn:QT,requiresIfExists:["offset"],data:{_skip:!1}};function gf(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function _f(t){return[ft,xt,kt,pt].some(function(e){return t[e]>=0})}function XT(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=gs(e,{elementContext:"reference"}),a=gs(e,{altBoundary:!0}),c=gf(o,i),u=gf(a,s,r),d=_f(c),f=_f(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}var v_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:XT};function JT(t,e,n){var i=on(t),s=[pt,ft].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[pt,xt].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function ZT(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,o=cu.reduce(function(d,f){return d[f]=JT(f,e.rects,r),d},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[i]=o}var y_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ZT};function eI(t){var e=t.state,n=t.name;e.modifiersData[n]=__({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var vu={name:"popperOffsets",enabled:!0,phase:"read",fn:eI,data:{}};function tI(t){return t==="x"?"y":"x"}function nI(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,u=n.rootBoundary,d=n.altBoundary,f=n.padding,p=n.tether,v=p===void 0?!0:p,E=n.tetherOffset,w=E===void 0?0:E,A=gs(e,{boundary:c,rootBoundary:u,padding:f,altBoundary:d}),N=on(e.placement),M=ps(e.placement),U=!M,F=hu(N),Y=tI(F),H=e.modifiersData.popperOffsets,z=e.rects.reference,ue=e.rects.popper,de=typeof w=="function"?w(Object.assign({},e.rects,{placement:e.placement})):w,X=typeof de=="number"?{mainAxis:de,altAxis:de}:Object.assign({mainAxis:0,altAxis:0},de),oe=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Te={x:0,y:0};if(!!H){if(r){var Oe,Re=F==="y"?ft:pt,mt=F==="y"?kt:xt,ve=F==="y"?"height":"width",ae=H[F],me=ae+A[Re],Ve=ae-A[mt],Ct=v?-ue[ve]/2:0,dt=M===Ai?z[ve]:ue[ve],Ye=M===Ai?-ue[ve]:-z[ve],Ge=e.elements.arrow,Tt=v&&Ge?du(Ge):{width:0,height:0},O=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:d_(),W=O[Re],B=O[mt],j=vr(0,z[ve],Tt[ve]),ye=U?z[ve]/2-Ct-j-W-X.mainAxis:dt-j-W-X.mainAxis,we=U?-z[ve]/2+Ct+j+B+X.mainAxis:Ye+j+B+X.mainAxis,re=e.elements.arrow&&Yr(e.elements.arrow),te=re?F==="y"?re.clientTop||0:re.clientLeft||0:0,g=(Oe=oe==null?void 0:oe[F])!=null?Oe:0,y=ae+ye-g-te,T=ae+we-g,R=vr(v?Zo(me,y):me,ae,v?wi(Ve,T):Ve);H[F]=R,Te[F]=R-ae}if(a){var S,D=F==="x"?ft:pt,V=F==="x"?kt:xt,k=H[Y],$=Y==="y"?"height":"width",P=k+A[D],K=k-A[V],q=[ft,pt].indexOf(N)!==-1,G=(S=oe==null?void 0:oe[Y])!=null?S:0,Q=q?P:k-z[$]-ue[$]-G+X.altAxis,fe=q?k+z[$]+ue[$]-G-X.altAxis:K,Pe=v&&q?xT(Q,k,fe):vr(v?Q:P,k,v?fe:K);H[Y]=Pe,Te[Y]=Pe-k}e.modifiersData[i]=Te}}var E_={name:"preventOverflow",enabled:!0,phase:"main",fn:nI,requiresIfExists:["offset"]};function iI(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function sI(t){return t===Xt(t)||!Ft(t)?gu(t):iI(t)}function rI(t){var e=t.getBoundingClientRect(),n=hs(e.width)/t.offsetWidth||1,i=hs(e.height)/t.offsetHeight||1;return n!==1||i!==1}function oI(t,e,n){n===void 0&&(n=!1);var i=Ft(e),s=Ft(e)&&rI(e),r=Zn(e),o=fs(t,s),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&((un(e)!=="body"||mu(r))&&(a=sI(e)),Ft(e)?(c=fs(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=_u(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function aI(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function lI(t){var e=aI(t);return l_.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function cI(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function uI(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var mf={placement:"bottom",modifiers:[],strategy:"absolute"};function vf(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function La(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?mf:s;return function(a,c,u){u===void 0&&(u=r);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},mf,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],p=!1,v={state:d,setOptions:function(N){var M=typeof N=="function"?N(d.options):N;w(),d.options=Object.assign({},r,d.options,M),d.scrollParents={reference:ds(a)?yr(a):a.contextElement?yr(a.contextElement):[],popper:yr(c)};var U=lI(uI([].concat(i,d.options.modifiers)));return d.orderedModifiers=U.filter(function(F){return F.enabled}),E(),v.update()},forceUpdate:function(){if(!p){var N=d.elements,M=N.reference,U=N.popper;if(!!vf(M,U)){d.rects={reference:oI(M,Yr(U),d.options.strategy==="fixed"),popper:du(U)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(X){return d.modifiersData[X.name]=Object.assign({},X.data)});for(var F=0;F<d.orderedModifiers.length;F++){if(d.reset===!0){d.reset=!1,F=-1;continue}var Y=d.orderedModifiers[F],H=Y.fn,z=Y.options,ue=z===void 0?{}:z,de=Y.name;typeof H=="function"&&(d=H({state:d,options:ue,name:de,instance:v})||d)}}}},update:cI(function(){return new Promise(function(A){v.forceUpdate(),A(d)})}),destroy:function(){w(),p=!0}};if(!vf(a,c))return v;v.setOptions(u).then(function(A){!p&&u.onFirstUpdate&&u.onFirstUpdate(A)});function E(){d.orderedModifiers.forEach(function(A){var N=A.name,M=A.options,U=M===void 0?{}:M,F=A.effect;if(typeof F=="function"){var Y=F({state:d,name:N,instance:v,options:U}),H=function(){};f.push(Y||H)}})}function w(){f.forEach(function(A){return A()}),f=[]}return v}}var dI=La(),hI=[pu,vu,fu,uu],fI=La({defaultModifiers:hI}),pI=[pu,vu,fu,uu,y_,m_,E_,p_,v_],gI=La({defaultModifiers:pI}),_I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",popperGenerator:La,detectOverflow:gs,createPopperBase:dI,createPopper:gI,createPopperLite:fI,top:ft,bottom:kt,right:xt,left:pt,auto:xa,basePlacements:Ps,start:Ai,end:us,clippingParents:Xg,viewport:lu,popper:Yi,reference:Jg,variationPlacements:ic,placements:cu,beforeRead:Zg,read:e_,afterRead:t_,beforeMain:n_,main:i_,afterMain:s_,beforeWrite:r_,write:o_,afterWrite:a_,modifierPhases:l_,applyStyles:uu,arrow:p_,computeStyles:fu,eventListeners:pu,flip:m_,hide:v_,offset:y_,popperOffsets:vu,preventOverflow:E_}),mI=ST(_I);/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,i){t.exports=i(mI)})(nc,function(n){function i(_){if(_&&_.__esModule)return _;const l=Object.create(null);if(_){for(const h in _)if(h!=="default"){const m=Object.getOwnPropertyDescriptor(_,h);Object.defineProperty(l,h,m.get?m:{enumerable:!0,get:()=>_[h]})}}return l.default=_,Object.freeze(l)}const s=i(n),r=1e6,o=1e3,a="transitionend",c=_=>_==null?`${_}`:{}.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase(),u=_=>{do _+=Math.floor(Math.random()*r);while(document.getElementById(_));return _},d=_=>{let l=_.getAttribute("data-bs-target");if(!l||l==="#"){let h=_.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),l=h&&h!=="#"?h.trim():null}return l},f=_=>{const l=d(_);return l&&document.querySelector(l)?l:null},p=_=>{const l=d(_);return l?document.querySelector(l):null},v=_=>{if(!_)return 0;let{transitionDuration:l,transitionDelay:h}=window.getComputedStyle(_);const m=Number.parseFloat(l),b=Number.parseFloat(h);return!m&&!b?0:(l=l.split(",")[0],h=h.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(h))*o)},E=_=>{_.dispatchEvent(new Event(a))},w=_=>!_||typeof _!="object"?!1:(typeof _.jquery!="undefined"&&(_=_[0]),typeof _.nodeType!="undefined"),A=_=>w(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(_):null,N=(_,l,h)=>{Object.keys(h).forEach(m=>{const b=h[m],C=l[m],x=C&&w(C)?"element":c(C);if(!new RegExp(b).test(x))throw new TypeError(`${_.toUpperCase()}: Option "${m}" provided type "${x}" but expected type "${b}".`)})},M=_=>!w(_)||_.getClientRects().length===0?!1:getComputedStyle(_).getPropertyValue("visibility")==="visible",U=_=>!_||_.nodeType!==Node.ELEMENT_NODE||_.classList.contains("disabled")?!0:typeof _.disabled!="undefined"?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false",F=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const l=_.getRootNode();return l instanceof ShadowRoot?l:null}return _ instanceof ShadowRoot?_:_.parentNode?F(_.parentNode):null},Y=()=>{},H=_=>{_.offsetHeight},z=()=>{const{jQuery:_}=window;return _&&!document.body.hasAttribute("data-bs-no-jquery")?_:null},ue=[],de=_=>{document.readyState==="loading"?(ue.length||document.addEventListener("DOMContentLoaded",()=>{ue.forEach(l=>l())}),ue.push(_)):_()},X=()=>document.documentElement.dir==="rtl",oe=_=>{de(()=>{const l=z();if(l){const h=_.NAME,m=l.fn[h];l.fn[h]=_.jQueryInterface,l.fn[h].Constructor=_,l.fn[h].noConflict=()=>(l.fn[h]=m,_.jQueryInterface)}})},Te=_=>{typeof _=="function"&&_()},Oe=(_,l,h=!0)=>{if(!h){Te(_);return}const m=5,b=v(l)+m;let C=!1;const x=({target:Z})=>{Z===l&&(C=!0,l.removeEventListener(a,x),Te(_))};l.addEventListener(a,x),setTimeout(()=>{C||E(l)},b)},Re=(_,l,h,m)=>{let b=_.indexOf(l);if(b===-1)return _[!h&&m?_.length-1:0];const C=_.length;return b+=h?1:-1,m&&(b=(b+C)%C),_[Math.max(0,Math.min(b,C-1))]},mt=/[^.]*(?=\..*)\.|.*/,ve=/\..*/,ae=/::\d+$/,me={};let Ve=1;const Ct={mouseenter:"mouseover",mouseleave:"mouseout"},dt=/^(mouseenter|mouseleave)/i,Ye=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ge(_,l){return l&&`${l}::${Ve++}`||_.uidEvent||Ve++}function Tt(_){const l=Ge(_);return _.uidEvent=l,me[l]=me[l]||{},me[l]}function O(_,l){return function h(m){return m.delegateTarget=_,h.oneOff&&g.off(_,m.type,l),l.apply(_,[m])}}function W(_,l,h){return function m(b){const C=_.querySelectorAll(l);for(let{target:x}=b;x&&x!==this;x=x.parentNode)for(let Z=C.length;Z--;)if(C[Z]===x)return b.delegateTarget=x,m.oneOff&&g.off(_,b.type,l,h),h.apply(x,[b]);return null}}function B(_,l,h=null){const m=Object.keys(_);for(let b=0,C=m.length;b<C;b++){const x=_[m[b]];if(x.originalHandler===l&&x.delegationSelector===h)return x}return null}function j(_,l,h){const m=typeof l=="string",b=m?h:l;let C=te(_);return Ye.has(C)||(C=_),[m,b,C]}function ye(_,l,h,m,b){if(typeof l!="string"||!_)return;if(h||(h=m,m=null),dt.test(l)){const Vi=So=>function(Pn){if(!Pn.relatedTarget||Pn.relatedTarget!==Pn.delegateTarget&&!Pn.delegateTarget.contains(Pn.relatedTarget))return So.call(this,Pn)};m?m=Vi(m):h=Vi(h)}const[C,x,Z]=j(l,h,m),Ee=Tt(_),Le=Ee[Z]||(Ee[Z]={}),We=B(Le,x,C?h:null);if(We){We.oneOff=We.oneOff&&b;return}const He=Ge(x,l.replace(mt,"")),Ke=C?W(_,h,m):O(_,h);Ke.delegationSelector=C?h:null,Ke.originalHandler=x,Ke.oneOff=b,Ke.uidEvent=He,Le[He]=Ke,_.addEventListener(Z,Ke,C)}function we(_,l,h,m,b){const C=B(l[h],m,b);!C||(_.removeEventListener(h,C,Boolean(b)),delete l[h][C.uidEvent])}function re(_,l,h,m){const b=l[h]||{};Object.keys(b).forEach(C=>{if(C.includes(m)){const x=b[C];we(_,l,h,x.originalHandler,x.delegationSelector)}})}function te(_){return _=_.replace(ve,""),Ct[_]||_}const g={on(_,l,h,m){ye(_,l,h,m,!1)},one(_,l,h,m){ye(_,l,h,m,!0)},off(_,l,h,m){if(typeof l!="string"||!_)return;const[b,C,x]=j(l,h,m),Z=x!==l,Ee=Tt(_),Le=l.startsWith(".");if(typeof C!="undefined"){if(!Ee||!Ee[x])return;we(_,Ee,x,C,b?h:null);return}Le&&Object.keys(Ee).forEach(He=>{re(_,Ee,He,l.slice(1))});const We=Ee[x]||{};Object.keys(We).forEach(He=>{const Ke=He.replace(ae,"");if(!Z||l.includes(Ke)){const Vi=We[He];we(_,Ee,x,Vi.originalHandler,Vi.delegationSelector)}})},trigger(_,l,h){if(typeof l!="string"||!_)return null;const m=z(),b=te(l),C=l!==b,x=Ye.has(b);let Z,Ee=!0,Le=!0,We=!1,He=null;return C&&m&&(Z=m.Event(l,h),m(_).trigger(Z),Ee=!Z.isPropagationStopped(),Le=!Z.isImmediatePropagationStopped(),We=Z.isDefaultPrevented()),x?(He=document.createEvent("HTMLEvents"),He.initEvent(b,Ee,!0)):He=new CustomEvent(l,{bubbles:Ee,cancelable:!0}),typeof h!="undefined"&&Object.keys(h).forEach(Ke=>{Object.defineProperty(He,Ke,{get(){return h[Ke]}})}),We&&He.preventDefault(),Le&&_.dispatchEvent(He),He.defaultPrevented&&typeof Z!="undefined"&&Z.preventDefault(),He}},y=new Map,T={set(_,l,h){y.has(_)||y.set(_,new Map);const m=y.get(_);if(!m.has(l)&&m.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`);return}m.set(l,h)},get(_,l){return y.has(_)&&y.get(_).get(l)||null},remove(_,l){if(!y.has(_))return;const h=y.get(_);h.delete(l),h.size===0&&y.delete(_)}},R="5.1.3";class S{constructor(l){l=A(l),!!l&&(this._element=l,T.set(this._element,this.constructor.DATA_KEY,this))}dispose(){T.remove(this._element,this.constructor.DATA_KEY),g.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(l=>{this[l]=null})}_queueCallback(l,h,m=!0){Oe(l,h,m)}static getInstance(l){return T.get(A(l),this.DATA_KEY)}static getOrCreateInstance(l,h={}){return this.getInstance(l)||new this(l,typeof h=="object"?h:null)}static get VERSION(){return R}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const D=(_,l="hide")=>{const h=`click.dismiss${_.EVENT_KEY}`,m=_.NAME;g.on(document,h,`[data-bs-dismiss="${m}"]`,function(b){if(["A","AREA"].includes(this.tagName)&&b.preventDefault(),U(this))return;const C=p(this)||this.closest(`.${m}`);_.getOrCreateInstance(C)[l]()})},V="alert",$=".bs.alert",P=`close${$}`,K=`closed${$}`,q="fade",G="show";class Q extends S{static get NAME(){return V}close(){if(g.trigger(this._element,P).defaultPrevented)return;this._element.classList.remove(G);const h=this._element.classList.contains(q);this._queueCallback(()=>this._destroyElement(),this._element,h)}_destroyElement(){this._element.remove(),g.trigger(this._element,K),this.dispose()}static jQueryInterface(l){return this.each(function(){const h=Q.getOrCreateInstance(this);if(typeof l=="string"){if(h[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}D(Q,"close"),oe(Q);const fe="button",Ne=".bs.button",De=".data-api",It="active",fn='[data-bs-toggle="button"]',_o=`click${Ne}${De}`;class Ht extends S{static get NAME(){return fe}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(It))}static jQueryInterface(l){return this.each(function(){const h=Ht.getOrCreateInstance(this);l==="toggle"&&h[l]()})}}g.on(document,_o,fn,_=>{_.preventDefault();const l=_.target.closest(fn);Ht.getOrCreateInstance(l).toggle()}),oe(Ht);function Ws(_){return _==="true"?!0:_==="false"?!1:_===Number(_).toString()?Number(_):_===""||_==="null"?null:_}function it(_){return _.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ke={setDataAttribute(_,l,h){_.setAttribute(`data-bs-${it(l)}`,h)},removeDataAttribute(_,l){_.removeAttribute(`data-bs-${it(l)}`)},getDataAttributes(_){if(!_)return{};const l={};return Object.keys(_.dataset).filter(h=>h.startsWith("bs")).forEach(h=>{let m=h.replace(/^bs/,"");m=m.charAt(0).toLowerCase()+m.slice(1,m.length),l[m]=Ws(_.dataset[h])}),l},getDataAttribute(_,l){return Ws(_.getAttribute(`data-bs-${it(l)}`))},offset(_){const l=_.getBoundingClientRect();return{top:l.top+window.pageYOffset,left:l.left+window.pageXOffset}},position(_){return{top:_.offsetTop,left:_.offsetLeft}}},mo=3,ee={find(_,l=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(l,_))},findOne(_,l=document.documentElement){return Element.prototype.querySelector.call(l,_)},children(_,l){return[].concat(..._.children).filter(h=>h.matches(l))},parents(_,l){const h=[];let m=_.parentNode;for(;m&&m.nodeType===Node.ELEMENT_NODE&&m.nodeType!==mo;)m.matches(l)&&h.push(m),m=m.parentNode;return h},prev(_,l){let h=_.previousElementSibling;for(;h;){if(h.matches(l))return[h];h=h.previousElementSibling}return[]},next(_,l){let h=_.nextElementSibling;for(;h;){if(h.matches(l))return[h];h=h.nextElementSibling}return[]},focusableChildren(_){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(", ");return this.find(l,_).filter(h=>!U(h)&&M(h))}},kd="carousel",At=".bs.carousel",xd=".data-api",Zv="ArrowLeft",ey="ArrowRight",ty=500,ny=40,Dd={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},iy={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ei="next",ti="prev",ni="left",js="right",sy={[Zv]:js,[ey]:ni},ry=`slide${At}`,Ld=`slid${At}`,oy=`keydown${At}`,ay=`mouseenter${At}`,ly=`mouseleave${At}`,cy=`touchstart${At}`,uy=`touchmove${At}`,dy=`touchend${At}`,hy=`pointerdown${At}`,fy=`pointerup${At}`,py=`dragstart${At}`,gy=`load${At}${xd}`,_y=`click${At}${xd}`,my="carousel",ii="active",vy="slide",yy="carousel-item-end",Ey="carousel-item-start",by="carousel-item-next",wy="carousel-item-prev",Cy="pointer-event",Ty=".active",vo=".active.carousel-item",Iy=".carousel-item",Ay=".carousel-item img",Sy=".carousel-item-next, .carousel-item-prev",Oy=".carousel-indicators",Ny="[data-bs-target]",Ry="[data-bs-slide], [data-bs-slide-to]",Py='[data-bs-ride="carousel"]',ky="touch",xy="pen";class Zt extends S{constructor(l,h){super(l);this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(h),this._indicatorsElement=ee.findOne(Oy,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Dd}static get NAME(){return kd}next(){this._slide(ei)}nextWhenVisible(){!document.hidden&&M(this._element)&&this.next()}prev(){this._slide(ti)}pause(l){l||(this._isPaused=!0),ee.findOne(Sy,this._element)&&(E(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(l){l||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(l){this._activeElement=ee.findOne(vo,this._element);const h=this._getItemIndex(this._activeElement);if(l>this._items.length-1||l<0)return;if(this._isSliding){g.one(this._element,Ld,()=>this.to(l));return}if(h===l){this.pause(),this.cycle();return}const m=l>h?ei:ti;this._slide(m,this._items[l])}_getConfig(l){return l=le(le(le({},Dd),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(kd,l,iy),l}_handleSwipe(){const l=Math.abs(this.touchDeltaX);if(l<=ny)return;const h=l/this.touchDeltaX;this.touchDeltaX=0,!!h&&this._slide(h>0?js:ni)}_addEventListeners(){this._config.keyboard&&g.on(this._element,oy,l=>this._keydown(l)),this._config.pause==="hover"&&(g.on(this._element,ay,l=>this.pause(l)),g.on(this._element,ly,l=>this.cycle(l))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const l=C=>this._pointerEvent&&(C.pointerType===xy||C.pointerType===ky),h=C=>{l(C)?this.touchStartX=C.clientX:this._pointerEvent||(this.touchStartX=C.touches[0].clientX)},m=C=>{this.touchDeltaX=C.touches&&C.touches.length>1?0:C.touches[0].clientX-this.touchStartX},b=C=>{l(C)&&(this.touchDeltaX=C.clientX-this.touchStartX),this._handleSwipe(),this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(x=>this.cycle(x),ty+this._config.interval))};ee.find(Ay,this._element).forEach(C=>{g.on(C,py,x=>x.preventDefault())}),this._pointerEvent?(g.on(this._element,hy,C=>h(C)),g.on(this._element,fy,C=>b(C)),this._element.classList.add(Cy)):(g.on(this._element,cy,C=>h(C)),g.on(this._element,uy,C=>m(C)),g.on(this._element,dy,C=>b(C)))}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const h=sy[l.key];h&&(l.preventDefault(),this._slide(h))}_getItemIndex(l){return this._items=l&&l.parentNode?ee.find(Iy,l.parentNode):[],this._items.indexOf(l)}_getItemByOrder(l,h){const m=l===ei;return Re(this._items,h,m,this._config.wrap)}_triggerSlideEvent(l,h){const m=this._getItemIndex(l),b=this._getItemIndex(ee.findOne(vo,this._element));return g.trigger(this._element,ry,{relatedTarget:l,direction:h,from:b,to:m})}_setActiveIndicatorElement(l){if(this._indicatorsElement){const h=ee.findOne(Ty,this._indicatorsElement);h.classList.remove(ii),h.removeAttribute("aria-current");const m=ee.find(Ny,this._indicatorsElement);for(let b=0;b<m.length;b++)if(Number.parseInt(m[b].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(l)){m[b].classList.add(ii),m[b].setAttribute("aria-current","true");break}}}_updateInterval(){const l=this._activeElement||ee.findOne(vo,this._element);if(!l)return;const h=Number.parseInt(l.getAttribute("data-bs-interval"),10);h?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=h):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(l,h){const m=this._directionToOrder(l),b=ee.findOne(vo,this._element),C=this._getItemIndex(b),x=h||this._getItemByOrder(m,b),Z=this._getItemIndex(x),Ee=Boolean(this._interval),Le=m===ei,We=Le?Ey:yy,He=Le?by:wy,Ke=this._orderToDirection(m);if(x&&x.classList.contains(ii)){this._isSliding=!1;return}if(this._isSliding||this._triggerSlideEvent(x,Ke).defaultPrevented||!b||!x)return;this._isSliding=!0,Ee&&this.pause(),this._setActiveIndicatorElement(x),this._activeElement=x;const So=()=>{g.trigger(this._element,Ld,{relatedTarget:x,direction:Ke,from:C,to:Z})};if(this._element.classList.contains(vy)){x.classList.add(He),H(x),b.classList.add(We),x.classList.add(We);const Pn=()=>{x.classList.remove(We,He),x.classList.add(ii),b.classList.remove(ii,He,We),this._isSliding=!1,setTimeout(So,0)};this._queueCallback(Pn,b,!0)}else b.classList.remove(ii),x.classList.add(ii),this._isSliding=!1,So();Ee&&this.cycle()}_directionToOrder(l){return[js,ni].includes(l)?X()?l===ni?ti:ei:l===ni?ei:ti:l}_orderToDirection(l){return[ei,ti].includes(l)?X()?l===ti?ni:js:l===ti?js:ni:l}static carouselInterface(l,h){const m=Zt.getOrCreateInstance(l,h);let{_config:b}=m;typeof h=="object"&&(b=le(le({},b),h));const C=typeof h=="string"?h:b.slide;if(typeof h=="number")m.to(h);else if(typeof C=="string"){if(typeof m[C]=="undefined")throw new TypeError(`No method named "${C}"`);m[C]()}else b.interval&&b.ride&&(m.pause(),m.cycle())}static jQueryInterface(l){return this.each(function(){Zt.carouselInterface(this,l)})}static dataApiClickHandler(l){const h=p(this);if(!h||!h.classList.contains(my))return;const m=le(le({},ke.getDataAttributes(h)),ke.getDataAttributes(this)),b=this.getAttribute("data-bs-slide-to");b&&(m.interval=!1),Zt.carouselInterface(h,m),b&&Zt.getInstance(h).to(b),l.preventDefault()}}g.on(document,_y,Ry,Zt.dataApiClickHandler),g.on(window,gy,()=>{const _=ee.find(Py);for(let l=0,h=_.length;l<h;l++)Zt.carouselInterface(_[l],Zt.getInstance(_[l]))}),oe(Zt);const Md="collapse",$d="bs.collapse",qs=`.${$d}`,Dy=".data-api",Fd={toggle:!0,parent:null},Ly={toggle:"boolean",parent:"(null|element)"},My=`show${qs}`,$y=`shown${qs}`,Fy=`hide${qs}`,By=`hidden${qs}`,Uy=`click${qs}${Dy}`,rl="show",Bi="collapse",yo="collapsing",Bd="collapsed",Ud=`:scope .${Bi} .${Bi}`,Hy="collapse-horizontal",Vy="width",Wy="height",jy=".collapse.show, .collapse.collapsing",ol='[data-bs-toggle="collapse"]';class si extends S{constructor(l,h){super(l);this._isTransitioning=!1,this._config=this._getConfig(h),this._triggerArray=[];const m=ee.find(ol);for(let b=0,C=m.length;b<C;b++){const x=m[b],Z=f(x),Ee=ee.find(Z).filter(Le=>Le===this._element);Z!==null&&Ee.length&&(this._selector=Z,this._triggerArray.push(x))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Fd}static get NAME(){return Md}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[],h;if(this._config.parent){const Le=ee.find(Ud,this._config.parent);l=ee.find(jy,this._config.parent).filter(We=>!Le.includes(We))}const m=ee.findOne(this._selector);if(l.length){const Le=l.find(We=>m!==We);if(h=Le?si.getInstance(Le):null,h&&h._isTransitioning)return}if(g.trigger(this._element,My).defaultPrevented)return;l.forEach(Le=>{m!==Le&&si.getOrCreateInstance(Le,{toggle:!1}).hide(),h||T.set(Le,$d,null)});const C=this._getDimension();this._element.classList.remove(Bi),this._element.classList.add(yo),this._element.style[C]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const x=()=>{this._isTransitioning=!1,this._element.classList.remove(yo),this._element.classList.add(Bi,rl),this._element.style[C]="",g.trigger(this._element,$y)},Ee=`scroll${C[0].toUpperCase()+C.slice(1)}`;this._queueCallback(x,this._element,!0),this._element.style[C]=`${this._element[Ee]}px`}hide(){if(this._isTransitioning||!this._isShown()||g.trigger(this._element,Fy).defaultPrevented)return;const h=this._getDimension();this._element.style[h]=`${this._element.getBoundingClientRect()[h]}px`,H(this._element),this._element.classList.add(yo),this._element.classList.remove(Bi,rl);const m=this._triggerArray.length;for(let C=0;C<m;C++){const x=this._triggerArray[C],Z=p(x);Z&&!this._isShown(Z)&&this._addAriaAndCollapsedClass([x],!1)}this._isTransitioning=!0;const b=()=>{this._isTransitioning=!1,this._element.classList.remove(yo),this._element.classList.add(Bi),g.trigger(this._element,By)};this._element.style[h]="",this._queueCallback(b,this._element,!0)}_isShown(l=this._element){return l.classList.contains(rl)}_getConfig(l){return l=le(le(le({},Fd),ke.getDataAttributes(this._element)),l),l.toggle=Boolean(l.toggle),l.parent=A(l.parent),N(Md,l,Ly),l}_getDimension(){return this._element.classList.contains(Hy)?Vy:Wy}_initializeChildren(){if(!this._config.parent)return;const l=ee.find(Ud,this._config.parent);ee.find(ol,this._config.parent).filter(h=>!l.includes(h)).forEach(h=>{const m=p(h);m&&this._addAriaAndCollapsedClass([h],this._isShown(m))})}_addAriaAndCollapsedClass(l,h){!l.length||l.forEach(m=>{h?m.classList.remove(Bd):m.classList.add(Bd),m.setAttribute("aria-expanded",h)})}static jQueryInterface(l){return this.each(function(){const h={};typeof l=="string"&&/show|hide/.test(l)&&(h.toggle=!1);const m=si.getOrCreateInstance(this,h);if(typeof l=="string"){if(typeof m[l]=="undefined")throw new TypeError(`No method named "${l}"`);m[l]()}})}}g.on(document,Uy,ol,function(_){(_.target.tagName==="A"||_.delegateTarget&&_.delegateTarget.tagName==="A")&&_.preventDefault();const l=f(this);ee.find(l).forEach(m=>{si.getOrCreateInstance(m,{toggle:!1}).toggle()})}),oe(si);const al="dropdown",ri=".bs.dropdown",ll=".data-api",Eo="Escape",Hd="Space",Vd="Tab",cl="ArrowUp",bo="ArrowDown",qy=2,zy=new RegExp(`${cl}|${bo}|${Eo}`),Ky=`hide${ri}`,Gy=`hidden${ri}`,Yy=`show${ri}`,Qy=`shown${ri}`,Wd=`click${ri}${ll}`,jd=`keydown${ri}${ll}`,Xy=`keyup${ri}${ll}`,Ui="show",Jy="dropup",Zy="dropend",eE="dropstart",tE="navbar",zs='[data-bs-toggle="dropdown"]',ul=".dropdown-menu",nE=".navbar-nav",iE=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",sE=X()?"top-end":"top-start",rE=X()?"top-start":"top-end",oE=X()?"bottom-end":"bottom-start",aE=X()?"bottom-start":"bottom-end",lE=X()?"left-start":"right-start",cE=X()?"right-start":"left-start",uE={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},dE={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class St extends S{constructor(l,h){super(l);this._popper=null,this._config=this._getConfig(h),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return uE}static get DefaultType(){return dE}static get NAME(){return al}toggle(){return this._isShown()?this.hide():this.show()}show(){if(U(this._element)||this._isShown(this._menu))return;const l={relatedTarget:this._element};if(g.trigger(this._element,Yy,l).defaultPrevented)return;const m=St.getParentFromElement(this._element);this._inNavbar?ke.setDataAttribute(this._menu,"popper","none"):this._createPopper(m),"ontouchstart"in document.documentElement&&!m.closest(nE)&&[].concat(...document.body.children).forEach(b=>g.on(b,"mouseover",Y)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ui),this._element.classList.add(Ui),g.trigger(this._element,Qy,l)}hide(){if(U(this._element)||!this._isShown(this._menu))return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){g.trigger(this._element,Ky,l).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(m=>g.off(m,"mouseover",Y)),this._popper&&this._popper.destroy(),this._menu.classList.remove(Ui),this._element.classList.remove(Ui),this._element.setAttribute("aria-expanded","false"),ke.removeDataAttribute(this._menu,"popper"),g.trigger(this._element,Gy,l))}_getConfig(l){if(l=le(le(le({},this.constructor.Default),ke.getDataAttributes(this._element)),l),N(al,l,this.constructor.DefaultType),typeof l.reference=="object"&&!w(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${al.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(l){if(typeof s=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let h=this._element;this._config.reference==="parent"?h=l:w(this._config.reference)?h=A(this._config.reference):typeof this._config.reference=="object"&&(h=this._config.reference);const m=this._getPopperConfig(),b=m.modifiers.find(C=>C.name==="applyStyles"&&C.enabled===!1);this._popper=s.createPopper(h,this._menu,m),b&&ke.setDataAttribute(this._menu,"popper","static")}_isShown(l=this._element){return l.classList.contains(Ui)}_getMenuElement(){return ee.next(this._element,ul)[0]}_getPlacement(){const l=this._element.parentNode;if(l.classList.contains(Zy))return lE;if(l.classList.contains(eE))return cE;const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains(Jy)?h?rE:sE:h?aE:oE}_detectNavbar(){return this._element.closest(`.${tE}`)!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(h=>Number.parseInt(h,10)):typeof l=="function"?h=>l(h,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(l.modifiers=[{name:"applyStyles",enabled:!1}]),le(le({},l),typeof this._config.popperConfig=="function"?this._config.popperConfig(l):this._config.popperConfig)}_selectMenuItem({key:l,target:h}){const m=ee.find(iE,this._menu).filter(M);!m.length||Re(m,h,l===bo,!m.includes(h)).focus()}static jQueryInterface(l){return this.each(function(){const h=St.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}static clearMenus(l){if(l&&(l.button===qy||l.type==="keyup"&&l.key!==Vd))return;const h=ee.find(zs);for(let m=0,b=h.length;m<b;m++){const C=St.getInstance(h[m]);if(!C||C._config.autoClose===!1||!C._isShown())continue;const x={relatedTarget:C._element};if(l){const Z=l.composedPath(),Ee=Z.includes(C._menu);if(Z.includes(C._element)||C._config.autoClose==="inside"&&!Ee||C._config.autoClose==="outside"&&Ee||C._menu.contains(l.target)&&(l.type==="keyup"&&l.key===Vd||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;l.type==="click"&&(x.clickEvent=l)}C._completeHide(x)}}static getParentFromElement(l){return p(l)||l.parentNode}static dataApiKeydownHandler(l){if(/input|textarea/i.test(l.target.tagName)?l.key===Hd||l.key!==Eo&&(l.key!==bo&&l.key!==cl||l.target.closest(ul)):!zy.test(l.key))return;const h=this.classList.contains(Ui);if(!h&&l.key===Eo||(l.preventDefault(),l.stopPropagation(),U(this)))return;const m=this.matches(zs)?this:ee.prev(this,zs)[0],b=St.getOrCreateInstance(m);if(l.key===Eo){b.hide();return}if(l.key===cl||l.key===bo){h||b.show(),b._selectMenuItem(l);return}(!h||l.key===Hd)&&St.clearMenus()}}g.on(document,jd,zs,St.dataApiKeydownHandler),g.on(document,jd,ul,St.dataApiKeydownHandler),g.on(document,Wd,St.clearMenus),g.on(document,Xy,St.clearMenus),g.on(document,Wd,zs,function(_){_.preventDefault(),St.getOrCreateInstance(this).toggle()}),oe(St);const qd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zd=".sticky-top";class dl{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",h=>h+l),this._setElementAttributes(qd,"paddingRight",h=>h+l),this._setElementAttributes(zd,"marginRight",h=>h-l)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,h,m){const b=this.getWidth(),C=x=>{if(x!==this._element&&window.innerWidth>x.clientWidth+b)return;this._saveInitialAttribute(x,h);const Z=window.getComputedStyle(x)[h];x.style[h]=`${m(Number.parseFloat(Z))}px`};this._applyManipulationCallback(l,C)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(qd,"paddingRight"),this._resetElementAttributes(zd,"marginRight")}_saveInitialAttribute(l,h){const m=l.style[h];m&&ke.setDataAttribute(l,h,m)}_resetElementAttributes(l,h){const m=b=>{const C=ke.getDataAttribute(b,h);typeof C=="undefined"?b.style.removeProperty(h):(ke.removeDataAttribute(b,h),b.style[h]=C)};this._applyManipulationCallback(l,m)}_applyManipulationCallback(l,h){w(l)?h(l):ee.find(l,this._element).forEach(h)}isOverflowing(){return this.getWidth()>0}}const hE={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},fE={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Kd="backdrop",pE="fade",Gd="show",Yd=`mousedown.bs.${Kd}`;class Qd{constructor(l){this._config=this._getConfig(l),this._isAppended=!1,this._element=null}show(l){if(!this._config.isVisible){Te(l);return}this._append(),this._config.isAnimated&&H(this._getElement()),this._getElement().classList.add(Gd),this._emulateAnimation(()=>{Te(l)})}hide(l){if(!this._config.isVisible){Te(l);return}this._getElement().classList.remove(Gd),this._emulateAnimation(()=>{this.dispose(),Te(l)})}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add(pE),this._element=l}return this._element}_getConfig(l){return l=le(le({},hE),typeof l=="object"?l:{}),l.rootElement=A(l.rootElement),N(Kd,l,fE),l}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),g.on(this._getElement(),Yd,()=>{Te(this._config.clickCallback)}),this._isAppended=!0)}dispose(){!this._isAppended||(g.off(this._element,Yd),this._element.remove(),this._isAppended=!1)}_emulateAnimation(l){Oe(l,this._getElement(),this._config.isAnimated)}}const gE={trapElement:null,autofocus:!0},_E={trapElement:"element",autofocus:"boolean"},mE="focustrap",wo=".bs.focustrap",vE=`focusin${wo}`,yE=`keydown.tab${wo}`,EE="Tab",bE="forward",Xd="backward";class Jd{constructor(l){this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:l,autofocus:h}=this._config;this._isActive||(h&&l.focus(),g.off(document,wo),g.on(document,vE,m=>this._handleFocusin(m)),g.on(document,yE,m=>this._handleKeydown(m)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,g.off(document,wo))}_handleFocusin(l){const{target:h}=l,{trapElement:m}=this._config;if(h===document||h===m||m.contains(h))return;const b=ee.focusableChildren(m);b.length===0?m.focus():this._lastTabNavDirection===Xd?b[b.length-1].focus():b[0].focus()}_handleKeydown(l){l.key===EE&&(this._lastTabNavDirection=l.shiftKey?Xd:bE)}_getConfig(l){return l=le(le({},gE),typeof l=="object"?l:{}),N(mE,l,_E),l}}const Zd="modal",Lt=".bs.modal",wE=".data-api",eh="Escape",th={backdrop:!0,keyboard:!0,focus:!0},CE={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},TE=`hide${Lt}`,IE=`hidePrevented${Lt}`,nh=`hidden${Lt}`,ih=`show${Lt}`,AE=`shown${Lt}`,sh=`resize${Lt}`,rh=`click.dismiss${Lt}`,oh=`keydown.dismiss${Lt}`,SE=`mouseup.dismiss${Lt}`,ah=`mousedown.dismiss${Lt}`,OE=`click${Lt}${wE}`,lh="modal-open",NE="fade",ch="show",hl="modal-static",RE=".modal.show",PE=".modal-dialog",kE=".modal-body",xE='[data-bs-toggle="modal"]';class oi extends S{constructor(l,h){super(l);this._config=this._getConfig(h),this._dialog=ee.findOne(PE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new dl}static get Default(){return th}static get NAME(){return Zd}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||g.trigger(this._element,ih,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(lh),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g.on(this._dialog,ah,()=>{g.one(this._element,SE,m=>{m.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(l)))}hide(){if(!this._isShown||this._isTransitioning||g.trigger(this._element,TE).defaultPrevented)return;this._isShown=!1;const h=this._isAnimated();h&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ch),g.off(this._element,rh),g.off(this._dialog,ah),this._queueCallback(()=>this._hideModal(),this._element,h)}dispose(){[window,this._dialog].forEach(l=>g.off(l,Lt)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qd({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Jd({trapElement:this._element})}_getConfig(l){return l=le(le(le({},th),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(Zd,l,CE),l}_showElement(l){const h=this._isAnimated(),m=ee.findOne(kE,this._dialog);(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,m&&(m.scrollTop=0),h&&H(this._element),this._element.classList.add(ch);const b=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,g.trigger(this._element,AE,{relatedTarget:l})};this._queueCallback(b,this._dialog,h)}_setEscapeEvent(){this._isShown?g.on(this._element,oh,l=>{this._config.keyboard&&l.key===eh?(l.preventDefault(),this.hide()):!this._config.keyboard&&l.key===eh&&this._triggerBackdropTransition()}):g.off(this._element,oh)}_setResizeEvent(){this._isShown?g.on(window,sh,()=>this._adjustDialog()):g.off(window,sh)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(lh),this._resetAdjustments(),this._scrollBar.reset(),g.trigger(this._element,nh)})}_showBackdrop(l){g.on(this._element,rh,h=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=!1;return}h.target===h.currentTarget&&(this._config.backdrop===!0?this.hide():this._config.backdrop==="static"&&this._triggerBackdropTransition())}),this._backdrop.show(l)}_isAnimated(){return this._element.classList.contains(NE)}_triggerBackdropTransition(){if(g.trigger(this._element,IE).defaultPrevented)return;const{classList:h,scrollHeight:m,style:b}=this._element,C=m>document.documentElement.clientHeight;!C&&b.overflowY==="hidden"||h.contains(hl)||(C||(b.overflowY="hidden"),h.add(hl),this._queueCallback(()=>{h.remove(hl),C||this._queueCallback(()=>{b.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),m=h>0;(!m&&l&&!X()||m&&!l&&X())&&(this._element.style.paddingLeft=`${h}px`),(m&&!l&&!X()||!m&&l&&X())&&(this._element.style.paddingRight=`${h}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,h){return this.each(function(){const m=oi.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]=="undefined")throw new TypeError(`No method named "${l}"`);m[l](h)}})}}g.on(document,OE,xE,function(_){const l=p(this);["A","AREA"].includes(this.tagName)&&_.preventDefault(),g.one(l,ih,b=>{b.defaultPrevented||g.one(l,nh,()=>{M(this)&&this.focus()})});const h=ee.findOne(RE);h&&oi.getInstance(h).hide(),oi.getOrCreateInstance(l).toggle(this)}),D(oi),oe(oi);const uh="offcanvas",ai=".bs.offcanvas",dh=".data-api",DE=`load${ai}${dh}`,LE="Escape",hh={backdrop:!0,keyboard:!0,scroll:!1},ME={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},fh="show",$E="offcanvas-backdrop",ph=".offcanvas.show",FE=`show${ai}`,BE=`shown${ai}`,UE=`hide${ai}`,gh=`hidden${ai}`,HE=`click${ai}${dh}`,VE=`keydown.dismiss${ai}`,WE='[data-bs-toggle="offcanvas"]';class Nn extends S{constructor(l,h){super(l);this._config=this._getConfig(h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return uh}static get Default(){return hh}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){if(this._isShown||g.trigger(this._element,FE,{relatedTarget:l}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new dl().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fh);const m=()=>{this._config.scroll||this._focustrap.activate(),g.trigger(this._element,BE,{relatedTarget:l})};this._queueCallback(m,this._element,!0)}hide(){if(!this._isShown||g.trigger(this._element,UE).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(fh),this._backdrop.hide();const h=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||new dl().reset(),g.trigger(this._element,gh)};this._queueCallback(h,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(l){return l=le(le(le({},hh),ke.getDataAttributes(this._element)),typeof l=="object"?l:{}),N(uh,l,ME),l}_initializeBackDrop(){return new Qd({className:$E,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Jd({trapElement:this._element})}_addEventListeners(){g.on(this._element,VE,l=>{this._config.keyboard&&l.key===LE&&this.hide()})}static jQueryInterface(l){return this.each(function(){const h=Nn.getOrCreateInstance(this,l);if(typeof l=="string"){if(h[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}g.on(document,HE,WE,function(_){const l=p(this);if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),U(this))return;g.one(l,gh,()=>{M(this)&&this.focus()});const h=ee.findOne(ph);h&&h!==l&&Nn.getInstance(h).hide(),Nn.getOrCreateInstance(l).toggle(this)}),g.on(window,DE,()=>ee.find(ph).forEach(_=>Nn.getOrCreateInstance(_).show())),D(Nn),oe(Nn);const jE=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qE=/^aria-[\w-]*$/i,zE=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,KE=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,GE=(_,l)=>{const h=_.nodeName.toLowerCase();if(l.includes(h))return jE.has(h)?Boolean(zE.test(_.nodeValue)||KE.test(_.nodeValue)):!0;const m=l.filter(b=>b instanceof RegExp);for(let b=0,C=m.length;b<C;b++)if(m[b].test(h))return!0;return!1},YE={"*":["class","dir","id","lang","role",qE],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function _h(_,l,h){if(!_.length)return _;if(h&&typeof h=="function")return h(_);const b=new window.DOMParser().parseFromString(_,"text/html"),C=[].concat(...b.body.querySelectorAll("*"));for(let x=0,Z=C.length;x<Z;x++){const Ee=C[x],Le=Ee.nodeName.toLowerCase();if(!Object.keys(l).includes(Le)){Ee.remove();continue}const We=[].concat(...Ee.attributes),He=[].concat(l["*"]||[],l[Le]||[]);We.forEach(Ke=>{GE(Ke,He)||Ee.removeAttribute(Ke.nodeName)})}return b.body.innerHTML}const mh="tooltip",en=".bs.tooltip",QE="bs-tooltip",XE=new Set(["sanitize","allowList","sanitizeFn"]),JE={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ZE={AUTO:"auto",TOP:"top",RIGHT:X()?"left":"right",BOTTOM:"bottom",LEFT:X()?"right":"left"},eb={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:YE,popperConfig:null},tb={HIDE:`hide${en}`,HIDDEN:`hidden${en}`,SHOW:`show${en}`,SHOWN:`shown${en}`,INSERTED:`inserted${en}`,CLICK:`click${en}`,FOCUSIN:`focusin${en}`,FOCUSOUT:`focusout${en}`,MOUSEENTER:`mouseenter${en}`,MOUSELEAVE:`mouseleave${en}`},Co="fade",nb="modal",Ks="show",Gs="show",fl="out",vh=".tooltip-inner",yh=`.${nb}`,Eh="hide.bs.modal",Ys="hover",pl="focus",ib="click",sb="manual";class li extends S{constructor(l,h){if(typeof s=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l);this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(h),this.tip=null,this._setListeners()}static get Default(){return eb}static get NAME(){return mh}static get Event(){return tb}static get DefaultType(){return JE}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(l){if(!!this._isEnabled)if(l){const h=this._initializeOnDelegatedTarget(l);h._activeTrigger.click=!h._activeTrigger.click,h._isWithActiveTrigger()?h._enter(null,h):h._leave(null,h)}else{if(this.getTipElement().classList.contains(Ks)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),g.off(this._element.closest(yh),Eh,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this.isWithContent()&&this._isEnabled))return;const l=g.trigger(this._element,this.constructor.Event.SHOW),h=F(this._element),m=h===null?this._element.ownerDocument.documentElement.contains(this._element):h.contains(this._element);if(l.defaultPrevented||!m)return;this.constructor.NAME==="tooltip"&&this.tip&&this.getTitle()!==this.tip.querySelector(vh).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const b=this.getTipElement(),C=u(this.constructor.NAME);b.setAttribute("id",C),this._element.setAttribute("aria-describedby",C),this._config.animation&&b.classList.add(Co);const x=typeof this._config.placement=="function"?this._config.placement.call(this,b,this._element):this._config.placement,Z=this._getAttachment(x);this._addAttachmentClass(Z);const{container:Ee}=this._config;T.set(b,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(Ee.append(b),g.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=s.createPopper(this._element,b,this._getPopperConfig(Z)),b.classList.add(Ks);const Le=this._resolvePossibleFunction(this._config.customClass);Le&&b.classList.add(...Le.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(Ke=>{g.on(Ke,"mouseover",Y)});const We=()=>{const Ke=this._hoverState;this._hoverState=null,g.trigger(this._element,this.constructor.Event.SHOWN),Ke===fl&&this._leave(null,this)},He=this.tip.classList.contains(Co);this._queueCallback(We,this.tip,He)}hide(){if(!this._popper)return;const l=this.getTipElement(),h=()=>{this._isWithActiveTrigger()||(this._hoverState!==Gs&&l.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),g.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(g.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;l.classList.remove(Ks),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(C=>g.off(C,"mouseover",Y)),this._activeTrigger[ib]=!1,this._activeTrigger[pl]=!1,this._activeTrigger[Ys]=!1;const b=this.tip.classList.contains(Co);this._queueCallback(h,this.tip,b),this._hoverState=""}update(){this._popper!==null&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const l=document.createElement("div");l.innerHTML=this._config.template;const h=l.children[0];return this.setContent(h),h.classList.remove(Co,Ks),this.tip=h,this.tip}setContent(l){this._sanitizeAndSetContent(l,this.getTitle(),vh)}_sanitizeAndSetContent(l,h,m){const b=ee.findOne(m,l);if(!h&&b){b.remove();return}this.setElementContent(b,h)}setElementContent(l,h){if(l!==null){if(w(h)){h=A(h),this._config.html?h.parentNode!==l&&(l.innerHTML="",l.append(h)):l.textContent=h.textContent;return}this._config.html?(this._config.sanitize&&(h=_h(h,this._config.allowList,this._config.sanitizeFn)),l.innerHTML=h):l.textContent=h}}getTitle(){const l=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(l)}updateAttachment(l){return l==="right"?"end":l==="left"?"start":l}_initializeOnDelegatedTarget(l,h){return h||this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(h=>Number.parseInt(h,10)):typeof l=="function"?h=>l(h,this._element):l}_resolvePossibleFunction(l){return typeof l=="function"?l.call(this._element):l}_getPopperConfig(l){const h={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:m=>this._handlePopperPlacementChange(m)}],onFirstUpdate:m=>{m.options.placement!==m.placement&&this._handlePopperPlacementChange(m)}};return le(le({},h),typeof this._config.popperConfig=="function"?this._config.popperConfig(h):this._config.popperConfig)}_addAttachmentClass(l){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(l)}`)}_getAttachment(l){return ZE[l.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(h=>{if(h==="click")g.on(this._element,this.constructor.Event.CLICK,this._config.selector,m=>this.toggle(m));else if(h!==sb){const m=h===Ys?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,b=h===Ys?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;g.on(this._element,m,this._config.selector,C=>this._enter(C)),g.on(this._element,b,this._config.selector,C=>this._leave(C))}}),this._hideModalHandler=()=>{this._element&&this.hide()},g.on(this._element.closest(yh),Eh,this._hideModalHandler),this._config.selector?this._config=Oo(le({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const l=this._element.getAttribute("title"),h=typeof this._element.getAttribute("data-bs-original-title");(l||h!=="string")&&(this._element.setAttribute("data-bs-original-title",l||""),l&&!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",l),this._element.setAttribute("title",""))}_enter(l,h){if(h=this._initializeOnDelegatedTarget(l,h),l&&(h._activeTrigger[l.type==="focusin"?pl:Ys]=!0),h.getTipElement().classList.contains(Ks)||h._hoverState===Gs){h._hoverState=Gs;return}if(clearTimeout(h._timeout),h._hoverState=Gs,!h._config.delay||!h._config.delay.show){h.show();return}h._timeout=setTimeout(()=>{h._hoverState===Gs&&h.show()},h._config.delay.show)}_leave(l,h){if(h=this._initializeOnDelegatedTarget(l,h),l&&(h._activeTrigger[l.type==="focusout"?pl:Ys]=h._element.contains(l.relatedTarget)),!h._isWithActiveTrigger()){if(clearTimeout(h._timeout),h._hoverState=fl,!h._config.delay||!h._config.delay.hide){h.hide();return}h._timeout=setTimeout(()=>{h._hoverState===fl&&h.hide()},h._config.delay.hide)}}_isWithActiveTrigger(){for(const l in this._activeTrigger)if(this._activeTrigger[l])return!0;return!1}_getConfig(l){const h=ke.getDataAttributes(this._element);return Object.keys(h).forEach(m=>{XE.has(m)&&delete h[m]}),l=le(le(le({},this.constructor.Default),h),typeof l=="object"&&l?l:{}),l.container=l.container===!1?document.body:A(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),N(mh,l,this.constructor.DefaultType),l.sanitize&&(l.template=_h(l.template,l.allowList,l.sanitizeFn)),l}_getDelegateConfig(){const l={};for(const h in this._config)this.constructor.Default[h]!==this._config[h]&&(l[h]=this._config[h]);return l}_cleanTipClass(){const l=this.getTipElement(),h=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),m=l.getAttribute("class").match(h);m!==null&&m.length>0&&m.map(b=>b.trim()).forEach(b=>l.classList.remove(b))}_getBasicClassPrefix(){return QE}_handlePopperPlacementChange(l){const{state:h}=l;!h||(this.tip=h.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(h.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(l){return this.each(function(){const h=li.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}oe(li);const rb="popover",tn=".bs.popover",ob="bs-popover",ab=Oo(le({},li.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),lb=Oo(le({},li.DefaultType),{content:"(string|element|function)"}),cb={HIDE:`hide${tn}`,HIDDEN:`hidden${tn}`,SHOW:`show${tn}`,SHOWN:`shown${tn}`,INSERTED:`inserted${tn}`,CLICK:`click${tn}`,FOCUSIN:`focusin${tn}`,FOCUSOUT:`focusout${tn}`,MOUSEENTER:`mouseenter${tn}`,MOUSELEAVE:`mouseleave${tn}`},ub=".popover-header",db=".popover-body";class To extends li{static get Default(){return ab}static get NAME(){return rb}static get Event(){return cb}static get DefaultType(){return lb}isWithContent(){return this.getTitle()||this._getContent()}setContent(l){this._sanitizeAndSetContent(l,this.getTitle(),ub),this._sanitizeAndSetContent(l,this._getContent(),db)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return ob}static jQueryInterface(l){return this.each(function(){const h=To.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}oe(To);const bh="scrollspy",Io=".bs.scrollspy",hb=".data-api",wh={offset:10,method:"auto",target:""},fb={offset:"number",method:"string",target:"(string|element)"},pb=`activate${Io}`,gb=`scroll${Io}`,_b=`load${Io}${hb}`,Ch="dropdown-item",Hi="active",mb='[data-bs-spy="scroll"]',vb=".nav, .list-group",gl=".nav-link",yb=".nav-item",Th=".list-group-item",_l=`${gl}, ${Th}, .${Ch}`,Eb=".dropdown",bb=".dropdown-toggle",wb="offset",Ih="position";class Qs extends S{constructor(l,h){super(l);this._scrollElement=this._element.tagName==="BODY"?window:this._element,this._config=this._getConfig(h),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g.on(this._scrollElement,gb,()=>this._process()),this.refresh(),this._process()}static get Default(){return wh}static get NAME(){return bh}refresh(){const l=this._scrollElement===this._scrollElement.window?wb:Ih,h=this._config.method==="auto"?l:this._config.method,m=h===Ih?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),ee.find(_l,this._config.target).map(C=>{const x=f(C),Z=x?ee.findOne(x):null;if(Z){const Ee=Z.getBoundingClientRect();if(Ee.width||Ee.height)return[ke[h](Z).top+m,x]}return null}).filter(C=>C).sort((C,x)=>C[0]-x[0]).forEach(C=>{this._offsets.push(C[0]),this._targets.push(C[1])})}dispose(){g.off(this._scrollElement,Io),super.dispose()}_getConfig(l){return l=le(le(le({},wh),ke.getDataAttributes(this._element)),typeof l=="object"&&l?l:{}),l.target=A(l.target)||document.documentElement,N(bh,l,fb),l}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const l=this._getScrollTop()+this._config.offset,h=this._getScrollHeight(),m=this._config.offset+h-this._getOffsetHeight();if(this._scrollHeight!==h&&this.refresh(),l>=m){const b=this._targets[this._targets.length-1];this._activeTarget!==b&&this._activate(b);return}if(this._activeTarget&&l<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(let b=this._offsets.length;b--;)this._activeTarget!==this._targets[b]&&l>=this._offsets[b]&&(typeof this._offsets[b+1]=="undefined"||l<this._offsets[b+1])&&this._activate(this._targets[b])}_activate(l){this._activeTarget=l,this._clear();const h=_l.split(",").map(b=>`${b}[data-bs-target="${l}"],${b}[href="${l}"]`),m=ee.findOne(h.join(","),this._config.target);m.classList.add(Hi),m.classList.contains(Ch)?ee.findOne(bb,m.closest(Eb)).classList.add(Hi):ee.parents(m,vb).forEach(b=>{ee.prev(b,`${gl}, ${Th}`).forEach(C=>C.classList.add(Hi)),ee.prev(b,yb).forEach(C=>{ee.children(C,gl).forEach(x=>x.classList.add(Hi))})}),g.trigger(this._scrollElement,pb,{relatedTarget:l})}_clear(){ee.find(_l,this._config.target).filter(l=>l.classList.contains(Hi)).forEach(l=>l.classList.remove(Hi))}static jQueryInterface(l){return this.each(function(){const h=Qs.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}g.on(window,_b,()=>{ee.find(mb).forEach(_=>new Qs(_))}),oe(Qs);const Cb="tab",Xs=".bs.tab",Tb=".data-api",Ib=`hide${Xs}`,Ab=`hidden${Xs}`,Sb=`show${Xs}`,Ob=`shown${Xs}`,Nb=`click${Xs}${Tb}`,Rb="dropdown-menu",Js="active",Ah="fade",Sh="show",Pb=".dropdown",kb=".nav, .list-group",Oh=".active",Nh=":scope > li > .active",xb='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Db=".dropdown-toggle",Lb=":scope > .dropdown-menu .active";class Zs extends S{static get NAME(){return Cb}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Js))return;let l;const h=p(this._element),m=this._element.closest(kb);if(m){const Z=m.nodeName==="UL"||m.nodeName==="OL"?Nh:Oh;l=ee.find(Z,m),l=l[l.length-1]}const b=l?g.trigger(l,Ib,{relatedTarget:this._element}):null;if(g.trigger(this._element,Sb,{relatedTarget:l}).defaultPrevented||b!==null&&b.defaultPrevented)return;this._activate(this._element,m);const x=()=>{g.trigger(l,Ab,{relatedTarget:this._element}),g.trigger(this._element,Ob,{relatedTarget:l})};h?this._activate(h,h.parentNode,x):x()}_activate(l,h,m){const C=(h&&(h.nodeName==="UL"||h.nodeName==="OL")?ee.find(Nh,h):ee.children(h,Oh))[0],x=m&&C&&C.classList.contains(Ah),Z=()=>this._transitionComplete(l,C,m);C&&x?(C.classList.remove(Sh),this._queueCallback(Z,l,!0)):Z()}_transitionComplete(l,h,m){if(h){h.classList.remove(Js);const C=ee.findOne(Lb,h.parentNode);C&&C.classList.remove(Js),h.getAttribute("role")==="tab"&&h.setAttribute("aria-selected",!1)}l.classList.add(Js),l.getAttribute("role")==="tab"&&l.setAttribute("aria-selected",!0),H(l),l.classList.contains(Ah)&&l.classList.add(Sh);let b=l.parentNode;if(b&&b.nodeName==="LI"&&(b=b.parentNode),b&&b.classList.contains(Rb)){const C=l.closest(Pb);C&&ee.find(Db,C).forEach(x=>x.classList.add(Js)),l.setAttribute("aria-expanded",!0)}m&&m()}static jQueryInterface(l){return this.each(function(){const h=Zs.getOrCreateInstance(this);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l]()}})}}g.on(document,Nb,xb,function(_){if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),U(this))return;Zs.getOrCreateInstance(this).show()}),oe(Zs);const Rh="toast",Rn=".bs.toast",Mb=`mouseover${Rn}`,$b=`mouseout${Rn}`,Fb=`focusin${Rn}`,Bb=`focusout${Rn}`,Ub=`hide${Rn}`,Hb=`hidden${Rn}`,Vb=`show${Rn}`,Wb=`shown${Rn}`,jb="fade",Ph="hide",er="show",Ao="showing",qb={animation:"boolean",autohide:"boolean",delay:"number"},kh={animation:!0,autohide:!0,delay:5e3};class tr extends S{constructor(l,h){super(l);this._config=this._getConfig(h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return qb}static get Default(){return kh}static get NAME(){return Rh}show(){if(g.trigger(this._element,Vb).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(jb);const h=()=>{this._element.classList.remove(Ao),g.trigger(this._element,Wb),this._maybeScheduleHide()};this._element.classList.remove(Ph),H(this._element),this._element.classList.add(er),this._element.classList.add(Ao),this._queueCallback(h,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(er)||g.trigger(this._element,Ub).defaultPrevented)return;const h=()=>{this._element.classList.add(Ph),this._element.classList.remove(Ao),this._element.classList.remove(er),g.trigger(this._element,Hb)};this._element.classList.add(Ao),this._queueCallback(h,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(er)&&this._element.classList.remove(er),super.dispose()}_getConfig(l){return l=le(le(le({},kh),ke.getDataAttributes(this._element)),typeof l=="object"&&l?l:{}),N(Rh,l,this.constructor.DefaultType),l}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(l,h){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h;break}if(h){this._clearTimeout();return}const m=l.relatedTarget;this._element===m||this._element.contains(m)||this._maybeScheduleHide()}_setListeners(){g.on(this._element,Mb,l=>this._onInteraction(l,!0)),g.on(this._element,$b,l=>this._onInteraction(l,!1)),g.on(this._element,Fb,l=>this._onInteraction(l,!0)),g.on(this._element,Bb,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const h=tr.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof h[l]=="undefined")throw new TypeError(`No method named "${l}"`);h[l](this)}})}}return D(tr),oe(tr),{Alert:Q,Button:Ht,Carousel:Zt,Collapse:si,Dropdown:St,Modal:oi,Offcanvas:Nn,Popover:To,ScrollSpy:Qs,Tab:Zs,Toast:tr,Tooltip:li}})})(OT);/**
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
 */const b_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(t,e){if(!t)throw ks(e)},ks=function(t){return new Error("Firebase Database ("+b_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const w_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),i.push(n[d],n[f],n[p],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||f==null)throw Error();const p=r<<2|a>>4;if(i.push(p),u!==64){const v=a<<4&240|u>>2;if(i.push(v),f!==64){const E=u<<6&192|f;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yI=function(t){const e=w_(t);return yu.encodeByteArray(e,!0)},rc=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EI(t){return C_(void 0,t)}function C_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bI(n)||(t[n]=C_(t[n],e[n]));return t}function bI(t){return t!=="__proto__"}/**
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
 */class Qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function wI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I_(){return b_.NODE_ADMIN===!0}/**
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
 */const TI="FirebaseError";class xs extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=TI,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?II(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xs(s,a,i)}}function II(t,e){return t.replace(AI,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const AI=/\{\$([^}]+)}/g;/**
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
 */function Lr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
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
 */const A_=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Lr(rc(r[0])||""),n=Lr(rc(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},SI=function(t){const e=A_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OI=function(t){const e=A_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ea(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(yf(r)&&yf(o)){if(!ta(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ds(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ur(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class NI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),d=1518500249):(u=r^o^a,d=1859775393):f<60?(u=r&o|a&(r|o),d=2400959708):(u=r^o^a,d=3395469782);const p=(s<<5|s>>>27)+u+c+d+i[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function RI(t,e){const n=new PI(t,e);return n.subscribe.bind(n)}class PI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");kI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=bl),s.error===void 0&&(s.error=bl),s.complete===void 0&&(s.complete=bl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bl(){}function Ma(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,L(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$a=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class ms{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class DI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Qr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MI(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:LI(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LI(t){return t===pi?void 0:t}function MI(t){return t.instantiationMode==="EAGER"}/**
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
 */class $I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($e||($e={}));const FI={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},BI=$e.INFO,UI={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},HI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=UI[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=BI,this._logHandler=HI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}/**
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
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WI(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function WI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Ef="0.7.17";/**
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
 */const wu=new bu("@firebase/app"),jI="@firebase/app-compat",qI="@firebase/analytics-compat",zI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",YI="@firebase/auth",QI="@firebase/auth-compat",XI="@firebase/database",JI="@firebase/database-compat",ZI="@firebase/functions",eA="@firebase/functions-compat",tA="@firebase/installations",nA="@firebase/installations-compat",iA="@firebase/messaging",sA="@firebase/messaging-compat",rA="@firebase/performance",oA="@firebase/performance-compat",aA="@firebase/remote-config",lA="@firebase/remote-config-compat",cA="@firebase/storage",uA="@firebase/storage-compat",dA="@firebase/firestore",hA="@firebase/firestore-compat",fA="firebase",pA="9.6.7";/**
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
 */const S_="[DEFAULT]",gA={[ac]:"fire-core",[jI]:"fire-core-compat",[zI]:"fire-analytics",[qI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[YI]:"fire-auth",[QI]:"fire-auth-compat",[XI]:"fire-rtdb",[JI]:"fire-rtdb-compat",[ZI]:"fire-fn",[eA]:"fire-fn-compat",[tA]:"fire-iid",[nA]:"fire-iid-compat",[iA]:"fire-fcm",[sA]:"fire-fcm-compat",[rA]:"fire-perf",[oA]:"fire-perf-compat",[aA]:"fire-rc",[lA]:"fire-rc-compat",[cA]:"fire-gcs",[uA]:"fire-gcs-compat",[dA]:"fire-fst",[hA]:"fire-fst-compat","fire-js":"fire-js",[fA]:"fire-js-all"};/**
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
 */const na=new Map,lc=new Map;function _A(t,e){try{t.container.addComponent(e)}catch(n){wu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(lc.has(e))return wu.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of na.values())_A(n,t);return!0}function Cu(t,e){return t.container.getProvider(e)}/**
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
 */const mA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ia=new Xr("app","Firebase",mA);/**
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
 */class vA{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=pA;function UD(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:S_,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ia.create("bad-app-name",{appName:String(i)});const s=na.get(i);if(s){if(ta(t,s.options)&&ta(n,s.config))return s;throw ia.create("duplicate-app",{appName:i})}const r=new $I(i);for(const a of lc.values())r.addComponent(a);const o=new vA(t,n,r);return na.set(i,o),o}function O_(t=S_){const e=na.get(t);if(!e)throw ia.create("no-app",{appName:t});return e}function Kn(t,e,n){var i;let s=(i=gA[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wu.warn(a.join(" "));return}Mr(new ms(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function yA(t){Mr(new ms("platform-logger",e=>new VI(e),"PRIVATE")),Kn(ac,Ef,t),Kn(ac,Ef,"esm2017"),Kn("fire-js","")}yA("");var EA="firebase",bA="9.6.7";/**
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
 */Kn(EA,bA,"app");/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const N_=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ls=t=>N_?Symbol(t):"_vr_"+t,wA=Ls("rvlm"),bf=Ls("rvd"),Tu=Ls("r"),R_=Ls("rl"),cc=Ls("rvl"),Qi=typeof window!="undefined";function CA(t){return t.__esModule||N_&&t[Symbol.toStringTag]==="Module"}const Me=Object.assign;function wl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Array.isArray(s)?s.map(t):t(s)}return n}const Er=()=>{},TA=/\/$/,IA=t=>t.replace(TA,"");function Cl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,c>-1?c:e.length),s=t(r)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=NA(i!=null?i:e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function AA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SA(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&vs(e.matched[i],n.matched[s])&&P_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function P_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OA(t[n],e[n]))return!1;return!0}function OA(t,e){return Array.isArray(t)?Cf(t,e):Array.isArray(e)?Cf(e,t):t===e}function Cf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function NA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var $r;(function(t){t.pop="pop",t.push="push"})($r||($r={}));var br;(function(t){t.back="back",t.forward="forward",t.unknown=""})(br||(br={}));function RA(t){if(!t)if(Qi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IA(t)}const PA=/^[^#]+#/;function kA(t,e){return t.replace(PA,"#")+e}function xA(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function DA(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tf(t,e){return(history.state?history.state.position-e:-1)+t}const uc=new Map;function LA(t,e){uc.set(t,e)}function MA(t){const e=uc.get(t);return uc.delete(t),e}let $A=()=>location.protocol+"//"+location.host;function k_(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),wf(c,"")}return wf(n,t)+i+s}function FA(t,e,n,i){let s=[],r=[],o=null;const a=({state:p})=>{const v=k_(t,location),E=n.value,w=e.value;let A=0;if(p){if(n.value=v,e.value=p,o&&o===E){o=null;return}A=w?p.position-w.position:0}else i(v);s.forEach(N=>{N(n.value,E,{delta:A,type:$r.pop,direction:A?A>0?br.forward:br.back:br.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return r.push(v),v}function d(){const{history:p}=window;!p.state||p.replaceState(Me({},p.state,{scroll:Fa()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function If(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Fa():null}}function BA(t){const{history:e,location:n}=window,i={value:k_(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:$A()+t+c;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](p)}}function o(c,u){const d=Me({},e.state,If(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});r(c,d,!0),i.value=c}function a(c,u){const d=Me({},s.value,e.state,{forward:c,scroll:Fa()});r(d.current,d,!0);const f=Me({},If(i.value,c,null),{position:d.position+1},u);r(c,f,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function HD(t){t=RA(t);const e=BA(t),n=FA(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Me({location:"",base:t,go:i,createHref:kA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function UA(t){return typeof t=="string"||t&&typeof t=="object"}function x_(t){return typeof t=="string"||typeof t=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},D_=Ls("nf");var Af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Af||(Af={}));function ys(t,e){return Me(new Error,{type:t,[D_]:!0},e)}function di(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Sf="[^/]+?",HA={sensitive:!1,strict:!1,start:!0,end:!0},VA=/[.+*?^${}()[\]/\\]/g;function WA(t,e){const n=Me({},HA,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let v=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(VA,"\\$&"),v+=40;else if(p.type===1){const{value:E,repeatable:w,optional:A,regexp:N}=p;r.push({name:E,repeatable:w,optional:A});const M=N||Sf;if(M!==Sf){v+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+F.message)}}let U=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=A&&u.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),s+=U,v+=20,A&&(v+=-8),w&&(v+=-20),M===".*"&&(v+=-50)}d.push(v)}i.push(d)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",E=r[p-1];f[E.name]=v&&E.repeatable?v.split("/"):v}return f}function c(u){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:E,repeatable:w,optional:A}=v,N=E in u?u[E]:"";if(Array.isArray(N)&&!w)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(N)?N.join("/"):N;if(!M)if(A)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);d+=M}}return d}return{re:o,score:i,keys:r,parse:a,stringify:c}}function jA(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qA(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=jA(i[n],s[n]);if(r)return r;n++}return s.length-i.length}const zA={type:0,value:""},KA=/[a-zA-Z0-9_]/;function GA(t){if(!t)return[[]];if(t==="/")return[[zA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,u="",d="";function f(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=i;break;case 1:c==="("?n=2:KA.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function YA(t,e,n){const i=WA(GA(t.path),n),s=Me(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function QA(t,e){const n=[],i=new Map;e=Nf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,p){const v=!p,E=JA(d);E.aliasOf=p&&p.record;const w=Nf(e,d),A=[E];if("alias"in d){const U=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of U)A.push(Me({},E,{components:p?p.record.components:E.components,path:F,aliasOf:p?p.record:E}))}let N,M;for(const U of A){const{path:F}=U;if(f&&F[0]!=="/"){const Y=f.record.path,H=Y[Y.length-1]==="/"?"":"/";U.path=f.record.path+(F&&H+F)}if(N=YA(U,f,w),p?p.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),v&&d.name&&!Of(N)&&o(d.name)),"children"in E){const Y=E.children;for(let H=0;H<Y.length;H++)r(Y[H],N,p&&p.children[H])}p=p||N,c(N)}return M?()=>{o(M)}:Er}function o(d){if(x_(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){let f=0;for(;f<n.length&&qA(d,n[f])>=0;)f++;n.splice(f,0,d),d.record.name&&!Of(d)&&i.set(d.record.name,d)}function u(d,f){let p,v={},E,w;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw ys(1,{location:d});w=p.record.name,v=Me(XA(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),d.params),E=p.stringify(v)}else if("path"in d)E=d.path,p=n.find(M=>M.re.test(E)),p&&(v=p.parse(E),w=p.record.name);else{if(p=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw ys(1,{location:d,currentLocation:f});w=p.record.name,v=Me({},f.params,d.params),E=p.stringify(v)}const A=[];let N=p;for(;N;)A.unshift(N.record),N=N.parent;return{name:w,path:E,params:v,matched:A,meta:eS(A)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function XA(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function JA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ZA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ZA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eS(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function Nf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const L_=/#/g,tS=/&/g,nS=/\//g,iS=/=/g,sS=/\?/g,M_=/\+/g,rS=/%5B/g,oS=/%5D/g,$_=/%5E/g,aS=/%60/g,F_=/%7B/g,lS=/%7C/g,B_=/%7D/g,cS=/%20/g;function Iu(t){return encodeURI(""+t).replace(lS,"|").replace(rS,"[").replace(oS,"]")}function uS(t){return Iu(t).replace(F_,"{").replace(B_,"}").replace($_,"^")}function dc(t){return Iu(t).replace(M_,"%2B").replace(cS,"+").replace(L_,"%23").replace(tS,"%26").replace(aS,"`").replace(F_,"{").replace(B_,"}").replace($_,"^")}function dS(t){return dc(t).replace(iS,"%3D")}function hS(t){return Iu(t).replace(L_,"%23").replace(sS,"%3F")}function fS(t){return t==null?"":hS(t).replace(nS,"%2F")}function sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pS(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(M_," "),o=r.indexOf("="),a=sa(o<0?r:r.slice(0,o)),c=o<0?null:sa(r.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Rf(t){let e="";for(let n in t){const i=t[n];if(n=dS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&dc(r)):[i&&dc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function gS(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function ir(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $n(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(ys(4,{from:n,to:e})):f instanceof Error?a(f):UA(f)?a(ys(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},u=t.call(i&&i.instances[s],e,n,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Tl(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_S(a)){const u=(a.__vccOpts||a)[e];u&&s.push($n(u,n,i,r,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const d=CA(u)?u.default:u;r.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&$n(p,n,i,r,o)()}))}}return s}function _S(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pf(t){const e=bn(Tu),n=bn(R_),i=Vt(()=>e.resolve(hr(t.to))),s=Vt(()=>{const{matched:c}=i.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(vs.bind(null,d));if(p>-1)return p;const v=kf(c[u-2]);return u>1&&kf(d)===v&&f[f.length-1].path!==v?f.findIndex(vs.bind(null,c[u-2])):p}),r=Vt(()=>s.value>-1&&ES(n.params,i.value.params)),o=Vt(()=>s.value>-1&&s.value===n.matched.length-1&&P_(n.params,i.value.params));function a(c={}){return yS(c)?e[hr(t.replace)?"replace":"push"](hr(t.to)).catch(Er):Promise.resolve()}return{route:i,href:Vt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const mS=Tg({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pf,setup(t,{slots:e}){const n=Rs(Pf(t)),{options:i}=bn(Tu),s=Vt(()=>({[xf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:jg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),vS=mS;function yS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ES(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t!=null?t:e!=null?e:n,bS=Tg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=bn(cc),s=Vt(()=>t.route||i.value),r=bn(bf,0),o=Vt(()=>s.value.matched[r]);Uo(bf,r+1),Uo(wA,o),Uo(cc,s);const a=Jc();return gr(()=>[a.value,o.value,t.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!vs(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,d=u&&u.components[t.name],f=t.name;if(!d)return Df(n.default,{Component:d,route:c});const p=u.props[t.name],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,w=jg(d,Me({},v,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Df(n.default,{Component:w,route:c})||w}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wS=bS;function VD(t){const e=QA(t.routes,t),n=t.parseQuery||pS,i=t.stringifyQuery||Rf,s=t.history,r=ir(),o=ir(),a=ir(),c=Mw(xn);let u=xn;Qi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wl.bind(null,O=>""+O),f=wl.bind(null,fS),p=wl.bind(null,sa);function v(O,W){let B,j;return x_(O)?(B=e.getRecordMatcher(O),j=W):j=O,e.addRoute(j,B)}function E(O){const W=e.getRecordMatcher(O);W&&e.removeRoute(W)}function w(){return e.getRoutes().map(O=>O.record)}function A(O){return!!e.getRecordMatcher(O)}function N(O,W){if(W=Me({},W||c.value),typeof O=="string"){const te=Cl(n,O,W.path),g=e.resolve({path:te.path},W),y=s.createHref(te.fullPath);return Me(te,g,{params:p(g.params),hash:sa(te.hash),redirectedFrom:void 0,href:y})}let B;if("path"in O)B=Me({},O,{path:Cl(n,O.path,W.path).path});else{const te=Me({},O.params);for(const g in te)te[g]==null&&delete te[g];B=Me({},O,{params:f(O.params)}),W.params=f(W.params)}const j=e.resolve(B,W),ye=O.hash||"";j.params=d(p(j.params));const we=AA(i,Me({},O,{hash:uS(ye),path:j.path})),re=s.createHref(we);return Me({fullPath:we,hash:ye,query:i===Rf?gS(O.query):O.query||{}},j,{redirectedFrom:void 0,href:re})}function M(O){return typeof O=="string"?Cl(n,O,c.value.path):Me({},O)}function U(O,W){if(u!==O)return ys(8,{from:W,to:O})}function F(O){return z(O)}function Y(O){return F(Me(M(O),{replace:!0}))}function H(O){const W=O.matched[O.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let j=typeof B=="function"?B(O):B;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=M(j):{path:j},j.params={}),Me({query:O.query,hash:O.hash,params:O.params},j)}}function z(O,W){const B=u=N(O),j=c.value,ye=O.state,we=O.force,re=O.replace===!0,te=H(B);if(te)return z(Me(M(te),{state:ye,force:we,replace:re}),W||B);const g=B;g.redirectedFrom=W;let y;return!we&&SA(i,j,B)&&(y=ys(16,{to:g,from:j}),Ct(j,j,!0,!1)),(y?Promise.resolve(y):de(g,j)).catch(T=>di(T)?T:ae(T,g,j)).then(T=>{if(T){if(di(T,2))return z(Me(M(T.to),{state:ye,force:we,replace:re}),W||g)}else T=oe(g,j,!0,re,ye);return X(g,j,T),T})}function ue(O,W){const B=U(O,W);return B?Promise.reject(B):Promise.resolve()}function de(O,W){let B;const[j,ye,we]=CS(O,W);B=Tl(j.reverse(),"beforeRouteLeave",O,W);for(const te of j)te.leaveGuards.forEach(g=>{B.push($n(g,O,W))});const re=ue.bind(null,O,W);return B.push(re),ji(B).then(()=>{B=[];for(const te of r.list())B.push($n(te,O,W));return B.push(re),ji(B)}).then(()=>{B=Tl(ye,"beforeRouteUpdate",O,W);for(const te of ye)te.updateGuards.forEach(g=>{B.push($n(g,O,W))});return B.push(re),ji(B)}).then(()=>{B=[];for(const te of O.matched)if(te.beforeEnter&&!W.matched.includes(te))if(Array.isArray(te.beforeEnter))for(const g of te.beforeEnter)B.push($n(g,O,W));else B.push($n(te.beforeEnter,O,W));return B.push(re),ji(B)}).then(()=>(O.matched.forEach(te=>te.enterCallbacks={}),B=Tl(we,"beforeRouteEnter",O,W),B.push(re),ji(B))).then(()=>{B=[];for(const te of o.list())B.push($n(te,O,W));return B.push(re),ji(B)}).catch(te=>di(te,8)?te:Promise.reject(te))}function X(O,W,B){for(const j of a.list())j(O,W,B)}function oe(O,W,B,j,ye){const we=U(O,W);if(we)return we;const re=W===xn,te=Qi?history.state:{};B&&(j||re?s.replace(O.fullPath,Me({scroll:re&&te&&te.scroll},ye)):s.push(O.fullPath,ye)),c.value=O,Ct(O,W,B,re),Ve()}let Te;function Oe(){Te=s.listen((O,W,B)=>{const j=N(O),ye=H(j);if(ye){z(Me(ye,{replace:!0}),j).catch(Er);return}u=j;const we=c.value;Qi&&LA(Tf(we.fullPath,B.delta),Fa()),de(j,we).catch(re=>di(re,12)?re:di(re,2)?(z(re.to,j).then(te=>{di(te,20)&&!B.delta&&B.type===$r.pop&&s.go(-1,!1)}).catch(Er),Promise.reject()):(B.delta&&s.go(-B.delta,!1),ae(re,j,we))).then(re=>{re=re||oe(j,we,!1),re&&(B.delta?s.go(-B.delta,!1):B.type===$r.pop&&di(re,20)&&s.go(-1,!1)),X(j,we,re)}).catch(Er)})}let Re=ir(),mt=ir(),ve;function ae(O,W,B){Ve(O);const j=mt.list();return j.length?j.forEach(ye=>ye(O,W,B)):console.error(O),Promise.reject(O)}function me(){return ve&&c.value!==xn?Promise.resolve():new Promise((O,W)=>{Re.add([O,W])})}function Ve(O){ve||(ve=!0,Oe(),Re.list().forEach(([W,B])=>O?B(O):W()),Re.reset())}function Ct(O,W,B,j){const{scrollBehavior:ye}=t;if(!Qi||!ye)return Promise.resolve();const we=!B&&MA(Tf(O.fullPath,0))||(j||!B)&&history.state&&history.state.scroll||null;return eu().then(()=>ye(O,W,we)).then(re=>re&&DA(re)).catch(re=>ae(re,O,W))}const dt=O=>s.go(O);let Ye;const Ge=new Set;return{currentRoute:c,addRoute:v,removeRoute:E,hasRoute:A,getRoutes:w,resolve:N,options:t,push:F,replace:Y,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:mt.add,isReady:me,install(O){const W=this;O.component("RouterLink",vS),O.component("RouterView",wS),O.config.globalProperties.$router=W,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>hr(c)}),Qi&&!Ye&&c.value===xn&&(Ye=!0,F(s.location).catch(ye=>{}));const B={};for(const ye in xn)B[ye]=Vt(()=>c.value[ye]);O.provide(Tu,W),O.provide(R_,Rs(B)),O.provide(cc,c);const j=O.unmount;Ge.add(O),O.unmount=function(){Ge.delete(O),Ge.size<1&&(u=xn,Te&&Te(),c.value=xn,Ye=!1,ve=!1),j()}}}}function ji(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function CS(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>vs(u,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>vs(u,c))||s.push(c))}return[n,i,s]}/*! *****************************************************************************
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
***************************************************************************** */function Au(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function U_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TS=U_,H_=new Xr("auth","Firebase",U_());/**
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
 */const Lf=new bu("@firebase/auth");function Wo(t,...e){Lf.logLevel<=$e.ERROR&&Lf.error(`Auth (${Jr}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw Su(t,...e)}function an(t,...e){return Su(t,...e)}function IS(t,e,n){const i=Object.assign(Object.assign({},TS()),{[e]:n});return new Xr("auth","Firebase",i).create(e,{appName:t.name})}function Su(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return H_.create(t,...e)}function ne(t,e,...n){if(!t)throw Su(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function An(t,e){t||vn(e)}/**
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
 */const Mf=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
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
 */function AS(t,e){const n=Cu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ta(r,e!=null?e:{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function SS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(yn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OS(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NS(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||wI()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Eu()||T_()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class V_{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const kS=new Zr(3e4,6e4);function eo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function to(t,e,n,i,s={}){return W_(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ds(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),V_.fetch()(j_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function W_(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},PS),e);try{const s=new xS(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw IS(t,d,u);Gt(t,d)}}catch(s){if(s instanceof xs)throw s;Gt(t,"network-request-failed")}}async function no(t,e,n,i,s={}){const r=await to(t,e,n,i,s);return"mfaPendingCredential"in r&&Gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function j_(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`}class xS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(an(this.auth,"network-request-failed")),kS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Il(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=an(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function DS(t,e){return to(t,"POST","/v1/accounts:delete",e)}async function LS(t,e){return to(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MS(t,e=!1){const n=Jt(t),i=await n.getIdToken(e),s=Nu(i);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:wr(Al(s.auth_time)),issuedAtTime:wr(Al(s.iat)),expirationTime:wr(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Nu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=rc(n);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s),null}}function $S(t){const e=Nu(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof xs&&FS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function FS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class q_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ra(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Fr(t,LS(n,{idToken:i}));ne(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?VS(r.providerUserInfo):[],a=HS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),d=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new q_(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function US(t){const e=Jt(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HS(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function VS(t){return t.map(e=>{var{providerId:n}=e,i=Au(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function WS(t,e){const n=await W_(t,{},async()=>{const i=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=j_(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",V_.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$S(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await WS(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Br;return i&&(ne(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Dn(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new q_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MS(this,e)}reload(){return US(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,u,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:F,isAnonymous:Y,providerData:H,stsTokenManager:z}=n;ne(U&&z,e,"internal-error");const ue=Br.fromJSON(this.name,z);ne(typeof U=="string",e,"internal-error"),Dn(f,e.name),Dn(p,e.name),ne(typeof F=="boolean",e,"internal-error"),ne(typeof Y=="boolean",e,"internal-error"),Dn(v,e.name),Dn(E,e.name),Dn(w,e.name),Dn(A,e.name),Dn(N,e.name),Dn(M,e.name);const de=new Ci({uid:U,auth:e,email:p,emailVerified:F,displayName:f,isAnonymous:Y,photoURL:E,phoneNumber:v,tenantId:w,stsTokenManager:ue,createdAt:N,lastLoginAt:M});return H&&Array.isArray(H)&&(de.providerData=H.map(X=>Object.assign({},X))),A&&(de._redirectEventId=A),de}static async _fromIdTokenResponse(e,n,i=!1){const s=new Br;s.updateFromServerResponse(n);const r=new Ci({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ra(r),r}}/**
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
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const Ff=z_;/**
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
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,r),this.fullPersistenceKey=jo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ts(yn(Ff),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||yn(Ff);const o=jo(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=Ci._fromJSON(e,d);u!==r&&(a=f),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ts(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ts(r,e,i))}}/**
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
 */function Bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(J_(e))return"Webos";if(Ru(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function K_(t=lt()){return/firefox\//i.test(t)}function Ru(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=lt()){return/crios\//i.test(t)}function Y_(t=lt()){return/iemobile/i.test(t)}function Q_(t=lt()){return/android/i.test(t)}function X_(t=lt()){return/blackberry/i.test(t)}function J_(t=lt()){return/webos/i.test(t)}function Ba(t=lt()){return/iphone|ipad|ipod/i.test(t)}function jS(t=lt()){var e;return Ba(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function qS(){return CI()&&document.documentMode===10}function Z_(t=lt()){return Ba(t)||Q_(t)||J_(t)||X_(t)||/windows phone/i.test(t)||Y_(t)}function zS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function em(t,e=[]){let n;switch(t){case"Browser":n=Bf(lt());break;case"Worker":n=`${Bf(lt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${i}`}/**
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
 */class KS{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ua(t){return Jt(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=RI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Pu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function GS(t,e){return to(t,"POST","/v1/accounts:update",e)}/**
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
 */async function YS(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",eo(t,e))}/**
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
 */async function QS(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",eo(t,e))}async function XS(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",eo(t,e))}/**
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
 */class Ur extends Pu{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ur(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ur(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return YS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QS(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return GS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XS(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ns(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",eo(t,e))}/**
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
 */const JS="http://localhost";class Si extends Pu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Au(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Si(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ns(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:JS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ds(n)}return e}}/**
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
 */function ZS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(t){const e=ur(dr(t)).link,n=e?ur(dr(e)).deep_link_id:null,i=ur(dr(t)).deep_link_id;return(i?ur(dr(i)).link:null)||i||n||e||t}class ku{constructor(e){var n,i,s,r,o,a;const c=ur(dr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,f=ZS((s=c.mode)!==null&&s!==void 0?s:null);ne(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eO(e);try{return new ku(n)}catch{return null}}}/**
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
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ku.parseLink(n);return ne(i,"argument-error"),Ur._fromEmailAndCode(e,i.code,i.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class io extends tm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends io{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends io{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Bn.credential(n,i)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Un extends io{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Hn extends io{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Hn.credential(n,i)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function tO(t,e){return no(t,"POST","/v1/accounts:signUp",eo(t,e))}/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ci._fromIdTokenResponse(e,i,s),o=Hf(i);return new Oi({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Hf(i);return new Oi({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends xs{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new oa(e,n,i,s)}}function nm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,r,e,i):r})}async function nO(t,e,n=!1){const i=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",i)}/**
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
 */async function iO(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Fr(t,nm(i,s,e,t),n);ne(r.idToken,i,"internal-error");const o=Nu(r.idToken);ne(o,i,"internal-error");const{sub:a}=o;return ne(t.uid===a,i,"user-mismatch"),Oi._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Gt(i,"user-mismatch"),r}}/**
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
 */async function im(t,e,n=!1){const i="signIn",s=await nm(t,i,e),r=await Oi._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function sO(t,e){return im(Ua(t),e)}async function WD(t,e,n){const i=Ua(t),s=await tO(i,{returnSecureToken:!0,email:e,password:n}),r=await Oi._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function jD(t,e,n){return sO(Jt(t),Ms.credential(e,n))}function qD(t){return Jt(t).signOut()}const aa="__sak";/**
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
 */class sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rO(){const t=lt();return Ru(t)||Ba(t)}const oO=1e3,aO=10;class rm extends sm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rO()&&zS(),this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);qS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aO):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const lO=rm;/**
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
 */class om extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}om.type="SESSION";const am=om;/**
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
 */function cO(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ha(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await cO(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=xu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function dO(t){ln().location.href=t}/**
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
 */function lm(){return typeof ln().WorkerGlobalScope!="undefined"&&typeof ln().importScripts=="function"}async function hO(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return lm()?self:null}/**
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
 */const cm="firebaseLocalStorageDb",gO=1,la="firebaseLocalStorage",um="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function _O(){const t=indexedDB.deleteDatabase(cm);return new so(t).toPromise()}function fc(){const t=indexedDB.open(cm,gO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(la,{keyPath:um})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(la)?e(i):(i.close(),await _O(),e(await fc()))})})}async function Vf(t,e,n){const i=Va(t,!0).put({[um]:e,value:n});return new so(i).toPromise()}async function mO(t,e){const n=Va(t,!1).get(e),i=await new so(n).toPromise();return i===void 0?null:i.value}function Wf(t,e){const n=Va(t,!0).delete(e);return new so(n).toPromise()}const vO=800,yO=3;class dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>yO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Vf(e,aa,"1"),await Wf(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vf(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>mO(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Va(s,!1).getAll();return new so(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dm.type="LOCAL";const EO=dm;/**
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
 */function bO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wO(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=an("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",bO().appendChild(i)})}function CO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zr(3e4,6e4);/**
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
 */function TO(t,e){return e?yn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Pu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IO(t){return im(t.auth,new Du(t),t.bypassAuthState)}function AO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),iO(n,new Du(t),t.bypassAuthState)}async function SO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),nO(n,new Du(t),t.bypassAuthState)}/**
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
 */class hm{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IO;case"linkViaPopup":case"linkViaRedirect":return SO;case"reauthViaPopup":case"reauthViaRedirect":return AO;default:Gt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OO=new Zr(2e3,1e4);class Xi extends hm{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OO.get())};e()}}Xi.currentPopupAction=null;/**
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
 */const NO="pendingRedirect",Sl=new Map;class RO extends hm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const i=await PO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PO(t,e){const n=xO(e),i=kO(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function kO(t){return yn(t._redirectPersistence)}function xO(t){return jo(NO,t.config.apiKey,t.name)}async function DO(t,e,n=!1){const i=Ua(t),s=TO(i,e),o=await new RO(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const LO=10*60*1e3;class MO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$O(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!fm(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LO&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $O(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
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
 */async function FO(t,e={}){return to(t,"GET","/v1/projects",e)}/**
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
 */const BO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UO=/^https?/;async function HO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FO(t);for(const n of e)try{if(VO(n))return}catch{}Gt(t,"unauthorized-domain")}function VO(t){const e=hc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!UO.test(n))return!1;if(BO.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const WO=new Zr(3e4,6e4);function qf(){const t=ln().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jO(t){return new Promise((e,n)=>{var i,s,r;function o(){qf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qf(),n(an(t,"network-request-failed"))},timeout:WO.get()})}if((s=(i=ln().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=ln().gapi)===null||r===void 0?void 0:r.load)o();else{const a=CO("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},wO(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function qO(t){return qo=qo||jO(t),qo}/**
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
 */const zO=new Zr(5e3,15e3),KO="__/auth/iframe",GO="emulator/auth/iframe",YO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XO(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,GO):`https://${t.config.authDomain}/${KO}`,i={apiKey:e.apiKey,appName:t.name,v:Jr},s=QO.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ds(i).slice(1)}`}async function JO(t){const e=await qO(t),n=ln().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:XO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{r(o)},zO.get());function c(){ln().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const ZO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eN=500,tN=600,nN="_blank",iN="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sN(t,e,n,i=eN,s=tN){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ZO),{width:i.toString(),height:s.toString(),top:r,left:o}),u=lt().toLowerCase();n&&(a=G_(u)?nN:n),K_(u)&&(e=e||iN,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[v,E])=>`${p}${v}=${E},`,"");if(jS(u)&&a!=="_self")return rN(e||"",a),new zf(null);const f=window.open(e||"",a,d);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new zf(f)}function rN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const oN="__/auth/handler",aN="emulator/auth/handler";function Kf(t,e,n,i,s,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Jr,eventId:s};if(e instanceof tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof io){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lN(t)}?${Ds(a).slice(1)}`}function lN({config:t}){return t.emulator?Ou(t,aN):`https://${t.authDomain}/${oN}`}/**
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
 */const Ol="webStorageSupport";class cN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=am,this._completeRedirectFn=DO}async _openPopup(e,n,i,s){var r;An((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Kf(e,n,i,hc(),s);return sN(e,o,xu())}async _openRedirect(e,n,i,s){return await this._originValidation(e),dO(Kf(e,n,i,hc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(An(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await JO(e),i=new MO(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ol,{type:Ol},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ol];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||Ru()||Ba()}}const uN=cN;var Gf="@firebase/auth",Yf="0.19.9";/**
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
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fN(t){Mr(new ms("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{ne(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),ne(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:em(t)},c=new KS(o,a);return SS(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Mr(new ms("auth-internal",e=>{const n=Ua(e.getProvider("auth").getImmediate());return(i=>new dN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Gf,Yf,hN(t)),Kn(Gf,Yf,"esm2017")}/**
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
 */function zD(t=O_()){const e=Cu(t,"auth");return e.isInitialized()?e.getImmediate():AS(t,{popupRedirectResolver:uN,persistence:[EO,lO,am]})}fN("Browser");const pm="SweetAlert2:",pN=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Lu=t=>t.charAt(0).toUpperCase()+t.slice(1),Dt=t=>Array.prototype.slice.call(t),wt=t=>{console.warn(`${pm} ${typeof t=="object"?t.join(" "):t}`)},Mi=t=>{console.error(`${pm} ${t}`)},Qf=[],gN=t=>{Qf.includes(t)||(Qf.push(t),wt(t))},_N=(t,e)=>{gN(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Wa=t=>typeof t=="function"?t():t,Mu=t=>t&&typeof t.toPromise=="function",ro=t=>Mu(t)?t.toPromise():Promise.resolve(t),$u=t=>t&&Promise.resolve(t)===t,is={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},mN=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],vN={},yN=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],gm=t=>Object.prototype.hasOwnProperty.call(is,t),_m=t=>mN.indexOf(t)!==-1,pc=t=>vN[t],EN=t=>{gm(t)||wt(`Unknown parameter "${t}"`)},bN=t=>{yN.includes(t)&&wt(`The parameter "${t}" is incompatible with toasts`)},wN=t=>{pc(t)&&_N(t,pc(t))},CN=t=>{!t.backdrop&&t.allowOutsideClick&&wt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)EN(e),t.toast&&bN(e),wN(e)},TN="swal2-",mm=t=>{const e={};for(const n in t)e[t[n]]=TN+t[n];return e},I=mm(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Cr=mm(["success","warning","info","question","error"]),ct=()=>document.body.querySelector(`.${I.container}`),oo=t=>{const e=ct();return e?e.querySelector(t):null},Ut=t=>oo(`.${t}`),Se=()=>Ut(I.popup),ao=()=>Ut(I.icon),vm=()=>Ut(I.title),ca=()=>Ut(I["html-container"]),ym=()=>Ut(I.image),Em=()=>Ut(I["progress-steps"]),ja=()=>Ut(I["validation-message"]),Yt=()=>oo(`.${I.actions} .${I.confirm}`),Qn=()=>oo(`.${I.actions} .${I.deny}`),IN=()=>Ut(I["input-label"]),$s=()=>oo(`.${I.loader}`),Ni=()=>oo(`.${I.actions} .${I.cancel}`),lo=()=>Ut(I.actions),bm=()=>Ut(I.footer),qa=()=>Ut(I["timer-progress-bar"]),Fu=()=>Ut(I.close),AN=`
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
`,Bu=()=>{const t=Dt(Se().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,i)=>{const s=parseInt(n.getAttribute("tabindex")),r=parseInt(i.getAttribute("tabindex"));return s>r?1:s<r?-1:0}),e=Dt(Se().querySelectorAll(AN)).filter(n=>n.getAttribute("tabindex")!=="-1");return pN(t.concat(e)).filter(n=>Rt(n))},Uu=()=>wn(document.body,I.shown)&&!wn(document.body,I["toast-shown"])&&!wn(document.body,I["no-backdrop"]),za=()=>Se()&&wn(Se(),I.toast),SN=()=>Se().hasAttribute("data-loading"),ss={previousBodyPadding:null},at=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html");Dt(i.querySelector("head").childNodes).forEach(s=>{t.appendChild(s)}),Dt(i.querySelector("body").childNodes).forEach(s=>{t.appendChild(s)})}},wn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},ON=(t,e)=>{Dt(t.classList).forEach(n=>{!Object.values(I).includes(n)&&!Object.values(Cr).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Bt=(t,e,n)=>{if(ON(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return wt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);be(t,e.customClass[n])}},Hu=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${I.popup} > .${I[e]}`);case"checkbox":return t.querySelector(`.${I.popup} > .${I.checkbox} input`);case"radio":return t.querySelector(`.${I.popup} > .${I.radio} input:checked`)||t.querySelector(`.${I.popup} > .${I.radio} input:first-child`);case"range":return t.querySelector(`.${I.popup} > .${I.range} input`);default:return t.querySelector(`.${I.popup} > .${I.input}`)}},wm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Cm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},be=(t,e)=>{Cm(t,e,!0)},dn=(t,e)=>{Cm(t,e,!1)},Vn=(t,e)=>{const n=Dt(t.childNodes);for(let i=0;i<n.length;i++)if(wn(n[i],e))return n[i]},Tr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},rt=(t,e="flex")=>{t.style.display=e},ut=t=>{t.style.display="none"},Xf=(t,e,n,i)=>{const s=t.querySelector(e);s&&(s.style[n]=i)},Ka=(t,e,n)=>{e?rt(t,n):ut(t)},Rt=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),NN=()=>!Rt(Yt())&&!Rt(Qn())&&!Rt(Ni()),Jf=t=>t.scrollHeight>t.clientHeight,Tm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Vu=(t,e=!1)=>{const n=qa();Rt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},RN=()=>{const t=qa(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.removeProperty("transition"),t.style.width=`${i}%`},Im=()=>typeof window=="undefined"||typeof document=="undefined",PN=100,ie={},kN=()=>{ie.previousActiveElement&&ie.previousActiveElement.focus?(ie.previousActiveElement.focus(),ie.previousActiveElement=null):document.body&&document.body.focus()},xN=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;ie.restoreFocusTimeout=setTimeout(()=>{kN(),e()},PN),window.scrollTo(n,i)}),DN=`
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
`.replace(/(^|\n)\s*/g,""),LN=()=>{const t=ct();return t?(t.remove(),dn([document.documentElement,document.body],[I["no-backdrop"],I["toast-shown"],I["has-column"]]),!0):!1},hi=()=>{ie.currentInstance.resetValidationMessage()},MN=()=>{const t=Se(),e=Vn(t,I.input),n=Vn(t,I.file),i=t.querySelector(`.${I.range} input`),s=t.querySelector(`.${I.range} output`),r=Vn(t,I.select),o=t.querySelector(`.${I.checkbox} input`),a=Vn(t,I.textarea);e.oninput=hi,n.onchange=hi,r.onchange=hi,o.onchange=hi,a.oninput=hi,i.oninput=()=>{hi(),s.value=i.value},i.onchange=()=>{hi(),i.nextSibling.value=i.value}},$N=t=>typeof t=="string"?document.querySelector(t):t,FN=t=>{const e=Se();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},BN=t=>{window.getComputedStyle(t).direction==="rtl"&&be(ct(),I.rtl)},UN=t=>{const e=LN();if(Im()){Mi("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=I.container,e&&be(n,I["no-transition"]),at(n,DN);const i=$N(t.target);i.appendChild(n),FN(t),BN(i),MN()},Wu=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?HN(t,e):t&&at(e,t)},HN=(t,e)=>{t.jquery?VN(e,t):at(e,t.toString())},VN=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Hr=(()=>{if(Im())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]!="undefined")return e[n];return!1})(),WN=()=>{const t=document.createElement("div");t.className=I["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},jN=(t,e)=>{const n=lo(),i=$s();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ut(n):rt(n),Bt(n,e,"actions"),qN(n,i,e),at(i,e.loaderHtml),Bt(i,e,"loader")};function qN(t,e,n){const i=Yt(),s=Qn(),r=Ni();Nl(i,"confirm",n),Nl(s,"deny",n),Nl(r,"cancel",n),zN(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e)))}function zN(t,e,n,i){if(!i.buttonsStyling)return dn([t,e,n],I.styled);be([t,e,n],I.styled),i.confirmButtonColor&&(t.style.backgroundColor=i.confirmButtonColor,be(t,I["default-outline"])),i.denyButtonColor&&(e.style.backgroundColor=i.denyButtonColor,be(e,I["default-outline"])),i.cancelButtonColor&&(n.style.backgroundColor=i.cancelButtonColor,be(n,I["default-outline"]))}function Nl(t,e,n){Ka(t,n[`show${Lu(e)}Button`],"inline-block"),at(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=I[e],Bt(t,n,`${e}Button`),be(t,n[`${e}ButtonClass`])}function KN(t,e){typeof e=="string"?t.style.background=e:e||be([document.documentElement,document.body],I["no-backdrop"])}function GN(t,e){e in I?be(t,I[e]):(wt('The "position" parameter is not valid, defaulting to "center"'),be(t,I.center))}function YN(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in I&&be(t,I[n])}}const QN=(t,e)=>{const n=ct();!n||(KN(n,e.backdrop),GN(n,e.position),YN(n,e.grow),Bt(n,e,"container"))};var he={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const XN=["input","file","range","select","radio","checkbox","textarea"],JN=(t,e)=>{const n=Se(),i=he.innerParams.get(t),s=!i||e.input!==i.input;XN.forEach(r=>{const o=I[r],a=Vn(n,o);t0(r,e.inputAttributes),a.className=o,s&&ut(a)}),e.input&&(s&&ZN(e),n0(e))},ZN=t=>{if(!yt[t.input])return Mi(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Am(t.input),n=yt[t.input](e,t);rt(n),setTimeout(()=>{wm(n)})},e0=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},t0=(t,e)=>{const n=Hu(Se(),t);if(!!n){e0(n);for(const i in e)n.setAttribute(i,e[i])}},n0=t=>{const e=Am(t.input);t.customClass&&be(e,t.customClass.input)},ju=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},co=(t,e,n)=>{if(n.inputLabel){t.id=I.input;const i=document.createElement("label"),s=I["input-label"];i.setAttribute("for",t.id),i.className=s,be(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},Am=t=>{const e=I[t]?I[t]:I.input;return Vn(Se(),e)},yt={};yt.text=yt.email=yt.password=yt.number=yt.tel=yt.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:$u(e.inputValue)||wt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),co(t,t,e),ju(t,e),t.type=e.input,t);yt.file=(t,e)=>(co(t,t,e),ju(t,e),t);yt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,i.value=e.inputValue,co(n,t,e),t};yt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");at(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return co(t,t,e),t};yt.radio=t=>(t.textContent="",t);yt.checkbox=(t,e)=>{const n=Hu(Se(),"checkbox");n.value="1",n.id=I.checkbox,n.checked=Boolean(e.inputValue);const i=t.querySelector("span");return at(i,e.inputPlaceholder),t};yt.textarea=(t,e)=>{t.value=e.inputValue,ju(t,e),co(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Se()).width),s=()=>{const r=t.offsetWidth+n(t);r>i?Se().style.width=`${r}px`:Se().style.width=null};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const i0=(t,e)=>{const n=ca();Bt(n,e,"htmlContainer"),e.html?(Wu(e.html,n),rt(n,"block")):e.text?(n.textContent=e.text,rt(n,"block")):ut(n),JN(t,e)},s0=(t,e)=>{const n=bm();Ka(n,e.footer),e.footer&&Wu(e.footer,n),Bt(n,e,"footer")},r0=(t,e)=>{const n=Fu();at(n,e.closeButtonHtml),Bt(n,e,"closeButton"),Ka(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},o0=(t,e)=>{const n=he.innerParams.get(t),i=ao();if(n&&e.icon===n.icon){ep(i,e),Zf(i,e);return}if(!e.icon&&!e.iconHtml)return ut(i);if(e.icon&&Object.keys(Cr).indexOf(e.icon)===-1)return Mi(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ut(i);rt(i),ep(i,e),Zf(i,e),be(i,e.showClass.icon)},Zf=(t,e)=>{for(const n in Cr)e.icon!==n&&dn(t,Cr[n]);be(t,Cr[e.icon]),u0(t,e),a0(),Bt(t,e,"icon")},a0=()=>{const t=Se(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},l0=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,c0=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ep=(t,e)=>{t.textContent="",e.iconHtml?at(t,tp(e.iconHtml)):e.icon==="success"?at(t,l0):e.icon==="error"?at(t,c0):at(t,tp({question:"?",warning:"!",info:"i"}[e.icon]))},u0=(t,e)=>{if(!!e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Xf(t,n,"backgroundColor",e.iconColor);Xf(t,".swal2-success-ring","borderColor",e.iconColor)}},tp=t=>`<div class="${I["icon-content"]}">${t}</div>`,d0=(t,e)=>{const n=ym();if(!e.imageUrl)return ut(n);rt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Tr(n,"width",e.imageWidth),Tr(n,"height",e.imageHeight),n.className=I.image,Bt(n,e,"image")},h0=t=>{const e=document.createElement("li");return be(e,I["progress-step"]),at(e,t),e},f0=t=>{const e=document.createElement("li");return be(e,I["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},p0=(t,e)=>{const n=Em();if(!e.progressSteps||e.progressSteps.length===0)return ut(n);rt(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&wt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((i,s)=>{const r=h0(i);if(n.appendChild(r),s===e.currentProgressStep&&be(r,I["active-progress-step"]),s!==e.progressSteps.length-1){const o=f0(e);n.appendChild(o)}})},g0=(t,e)=>{const n=vm();Ka(n,e.title||e.titleText,"block"),e.title&&Wu(e.title,n),e.titleText&&(n.innerText=e.titleText),Bt(n,e,"title")},_0=(t,e)=>{const n=ct(),i=Se();e.toast?(Tr(n,"width",e.width),i.style.width="100%",i.insertBefore($s(),ao())):Tr(i,"width",e.width),Tr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),ut(ja()),m0(i,e)},m0=(t,e)=>{t.className=`${I.popup} ${Rt(t)?e.showClass.popup:""}`,e.toast?(be([document.documentElement,document.body],I["toast-shown"]),be(t,I.toast)):be(t,I.modal),Bt(t,e,"popup"),typeof e.customClass=="string"&&be(t,e.customClass),e.icon&&be(t,I[`icon-${e.icon}`])},Sm=(t,e)=>{_0(t,e),QN(t,e),p0(t,e),o0(t,e),d0(t,e),g0(t,e),r0(t,e),i0(t,e),jN(t,e),s0(t,e),typeof e.didRender=="function"&&e.didRender(Se())},Fs=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),v0=()=>{Dt(document.body.children).forEach(e=>{e===ct()||e.contains(ct())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Om=()=>{Dt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Nm=["swal-title","swal-html","swal-footer"],y0=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return A0(n),Object.assign(E0(n),b0(n),w0(n),C0(n),T0(n),I0(n,Nm))},E0=t=>{const e={};return Dt(t.querySelectorAll("swal-param")).forEach(n=>{Ri(n,["name","value"]);const i=n.getAttribute("name"),s=n.getAttribute("value");typeof is[i]=="boolean"&&s==="false"&&(e[i]=!1),typeof is[i]=="object"&&(e[i]=JSON.parse(s))}),e},b0=t=>{const e={};return Dt(t.querySelectorAll("swal-button")).forEach(n=>{Ri(n,["type","color","aria-label"]);const i=n.getAttribute("type");e[`${i}ButtonText`]=n.innerHTML,e[`show${Lu(i)}Button`]=!0,n.hasAttribute("color")&&(e[`${i}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},w0=t=>{const e={},n=t.querySelector("swal-image");return n&&(Ri(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},C0=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Ri(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},T0=t=>{const e={},n=t.querySelector("swal-input");n&&(Ri(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=t.querySelectorAll("swal-input-option");return i.length&&(e.inputOptions={},Dt(i).forEach(s=>{Ri(s,["value"]);const r=s.getAttribute("value"),o=s.innerHTML;e.inputOptions[r]=o})),e},I0=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Ri(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},A0=t=>{const e=Nm.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Dt(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.indexOf(i)===-1&&wt(`Unrecognized element <${i}>`)})},Ri=(t,e)=>{Dt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&wt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})};var np={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function S0(t){t.inputValidator||Object.keys(np).forEach(e=>{t.input===e&&(t.inputValidator=np[e])})}function O0(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(wt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function N0(t){S0(t),t.showLoaderOnConfirm&&!t.preConfirm&&wt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),O0(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),UN(t)}class R0{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const P0=()=>{ss.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(ss.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ss.previousBodyPadding+WN()}px`)},k0=()=>{ss.previousBodyPadding!==null&&(document.body.style.paddingRight=`${ss.previousBodyPadding}px`,ss.previousBodyPadding=null)},x0=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!wn(document.body,I.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,be(document.body,I.iosfix),L0(),D0()}},D0=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Se().scrollHeight>window.innerHeight-44&&(ct().style.paddingBottom=`${44}px`)},L0=()=>{const t=ct();let e;t.ontouchstart=n=>{e=M0(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},M0=t=>{const e=t.target,n=ct();return $0(t)||F0(t)?!1:e===n||!Jf(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Jf(ca())&&ca().contains(e))},$0=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",F0=t=>t.touches&&t.touches.length>1,B0=()=>{if(wn(document.body,I.iosfix)){const t=parseInt(document.body.style.top,10);dn(document.body,I.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Rm=10,U0=t=>{const e=ct(),n=Se();typeof t.willOpen=="function"&&t.willOpen(n);const s=window.getComputedStyle(document.body).overflowY;W0(e,n,t),setTimeout(()=>{H0(e,n)},Rm),Uu()&&(V0(e,t.scrollbarPadding,s),v0()),!za()&&!ie.previousActiveElement&&(ie.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),dn(e,I["no-transition"])},Pm=t=>{const e=Se();if(t.target!==e)return;const n=ct();e.removeEventListener(Hr,Pm),n.style.overflowY="auto"},H0=(t,e)=>{Hr&&Tm(e)?(t.style.overflowY="hidden",e.addEventListener(Hr,Pm)):t.style.overflowY="auto"},V0=(t,e,n)=>{x0(),e&&n!=="hidden"&&P0(),setTimeout(()=>{t.scrollTop=0})},W0=(t,e,n)=>{be(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),rt(e,"grid"),setTimeout(()=>{be(e,n.showClass.popup),e.style.removeProperty("opacity")},Rm),be([document.documentElement,document.body],I.shown),n.heightAuto&&n.backdrop&&!n.toast&&be([document.documentElement,document.body],I["height-auto"])},Es=t=>{let e=Se();e||new yc,e=Se();const n=$s();za()?ut(ao()):j0(e,t),rt(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},j0=(t,e)=>{const n=lo(),i=$s();!e&&Rt(Yt())&&(e=Yt()),rt(n),e&&(ut(e),i.setAttribute("data-button-to-replace",e.className)),i.parentNode.insertBefore(i,e),be([t,n],I.loading)},q0=(t,e)=>{e.input==="select"||e.input==="radio"?Q0(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Mu(e.inputValue)||$u(e.inputValue))&&(Es(Yt()),X0(t,e))},z0=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return K0(n);case"radio":return G0(n);case"file":return Y0(n);default:return e.inputAutoTrim?n.value.trim():n.value}},K0=t=>t.checked?1:0,G0=t=>t.checked?t.value:null,Y0=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Q0=(t,e)=>{const n=Se(),i=s=>J0[e.input](n,gc(s),e);Mu(e.inputOptions)||$u(e.inputOptions)?(Es(Yt()),ro(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Mi(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},X0=(t,e)=>{const n=t.getInput();ut(n),ro(e.inputValue).then(i=>{n.value=e.input==="number"?parseFloat(i)||0:`${i}`,rt(n),n.focus(),t.hideLoading()}).catch(i=>{Mi(`Error in inputValue promise: ${i}`),n.value="",rt(n),n.focus(),t.hideLoading()})},J0={select:(t,e,n)=>{const i=Vn(t,I.select),s=(r,o,a)=>{const c=document.createElement("option");c.value=a,at(c,o),c.selected=ip(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,i.appendChild(c),a.forEach(u=>s(c,u[1],u[0]))}else s(i,a,o)}),i.focus()},radio:(t,e,n)=>{const i=Vn(t,I.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),u=document.createElement("label");c.type="radio",c.name=I.radio,c.value=o,ip(o,n.inputValue)&&(c.checked=!0);const d=document.createElement("span");at(d,a),d.className=I.label,u.appendChild(c),u.appendChild(d),i.appendChild(u)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}},gc=t=>{const e=[];return typeof Map!="undefined"&&t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=gc(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=gc(i)),e.push([n,i])}),e},ip=(t,e)=>e&&e.toString()===t.toString();function sp(){const t=he.innerParams.get(this);if(!t)return;const e=he.domCache.get(this);ut(e.loader),za()?t.icon&&rt(ao()):Z0(e),dn([e.popup,e.actions],I.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Z0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?rt(e[0],"inline-block"):NN()&&ut(t.actions)};function eR(t){const e=he.innerParams.get(t||this),n=he.domCache.get(t||this);return n?Hu(n.popup,e.input):null}var Vr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function km(t,e,n,i){za()?rp(t,i):(xN(n).then(()=>rp(t,i)),ie.keydownTarget.removeEventListener("keydown",ie.keydownHandler,{capture:ie.keydownListenerCapture}),ie.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Uu()&&(k0(),B0(),Om()),tR()}function tR(){dn([document.documentElement,document.body],[I.shown,I["height-auto"],I["no-backdrop"],I["toast-shown"]])}function Lo(t){t=rR(t);const e=Vr.swalPromiseResolve.get(this),n=iR(this);this.isAwaitingPromise()?t.isDismissed||(uo(this),e(t)):n&&e(t)}function nR(){return!!he.awaitingPromise.get(this)}const iR=t=>{const e=Se();if(!e)return!1;const n=he.innerParams.get(t);if(!n||wn(e,n.hideClass.popup))return!1;dn(e,n.showClass.popup),be(e,n.hideClass.popup);const i=ct();return dn(i,n.showClass.backdrop),be(i,n.hideClass.backdrop),oR(t,e,n),!0};function sR(t){const e=Vr.swalPromiseReject.get(this);uo(this),e&&e(t)}const uo=t=>{t.isAwaitingPromise()&&(he.awaitingPromise.delete(t),he.innerParams.get(t)||t._destroy())},rR=t=>typeof t=="undefined"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),oR=(t,e,n)=>{const i=ct(),s=Hr&&Tm(e);typeof n.willClose=="function"&&n.willClose(e),s?aR(t,e,i,n.returnFocus,n.didClose):km(t,i,n.returnFocus,n.didClose)},aR=(t,e,n,i,s)=>{ie.swalCloseEventFinishedCallback=km.bind(null,t,n,i,s),e.addEventListener(Hr,function(r){r.target===e&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback)})},rp=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function xm(t,e,n){const i=he.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Dm(t,e){if(!t)return!1;if(t.type==="radio"){const i=t.parentNode.parentNode.querySelectorAll("input");for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function lR(){xm(this,["confirmButton","denyButton","cancelButton"],!1)}function cR(){xm(this,["confirmButton","denyButton","cancelButton"],!0)}function uR(){return Dm(this.getInput(),!1)}function dR(){return Dm(this.getInput(),!0)}function hR(t){const e=he.domCache.get(this),n=he.innerParams.get(this);at(e.validationMessage,t),e.validationMessage.className=I["validation-message"],n.customClass&&n.customClass.validationMessage&&be(e.validationMessage,n.customClass.validationMessage),rt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid",!0),i.setAttribute("aria-describedby",I["validation-message"]),wm(i),be(i,I.inputerror))}function fR(){const t=he.domCache.get(this);t.validationMessage&&ut(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),dn(e,I.inputerror))}function pR(){return he.domCache.get(this).progressSteps}function gR(t){const e=Se(),n=he.innerParams.get(this);if(!e||wn(e,n.hideClass.popup))return wt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const i=_R(t),s=Object.assign({},n,i);Sm(this,s),he.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const _R=t=>{const e={};return Object.keys(t).forEach(n=>{_m(n)?e[n]=t[n]:wt(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function mR(){const t=he.domCache.get(this),e=he.innerParams.get(this);if(!e){Lm(this);return}t.popup&&ie.swalCloseEventFinishedCallback&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback),ie.deferDisposalTimer&&(clearTimeout(ie.deferDisposalTimer),delete ie.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),vR(this)}const vR=t=>{Lm(t),delete t.params,delete ie.keydownHandler,delete ie.keydownTarget,delete ie.currentInstance},Lm=t=>{t.isAwaitingPromise()?(Rl(he,t),he.awaitingPromise.set(t,!0)):(Rl(Vr,t),Rl(he,t))},Rl=(t,e)=>{for(const n in t)t[n].delete(e)};var Mm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",hideLoading:sp,disableLoading:sp,getInput:eR,close:Lo,isAwaitingPromise:nR,rejectPromise:sR,handleAwaitingPromise:uo,closePopup:Lo,closeModal:Lo,closeToast:Lo,enableButtons:lR,disableButtons:cR,enableInput:uR,disableInput:dR,showValidationMessage:hR,resetValidationMessage:fR,getProgressSteps:pR,update:gR,_destroy:mR});const yR=t=>{const e=he.innerParams.get(t);t.disableButtons(),e.input?$m(t,"confirm"):zu(t,!0)},ER=t=>{const e=he.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?$m(t,"deny"):qu(t,!1)},bR=(t,e)=>{t.disableButtons(),e(Fs.cancel)},$m=(t,e)=>{const n=he.innerParams.get(t);if(!n.input)return Mi(`The "input" parameter is needed to be set when using returnInputValueOn${Lu(e)}`);const i=z0(t,n);n.inputValidator?wR(t,i,e):t.getInput().checkValidity()?e==="deny"?qu(t,i):zu(t,i):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},wR=(t,e,n)=>{const i=he.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ro(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?qu(t,e):zu(t,e)})},qu=(t,e)=>{const n=he.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Es(Qn()),n.preDeny?(he.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>ro(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),uo(t)):t.closePopup({isDenied:!0,value:typeof s=="undefined"?e:s})}).catch(s=>Fm(t||globalThis,s))):t.closePopup({isDenied:!0,value:e})},op=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Fm=(t,e)=>{t.rejectPromise(e)},zu=(t,e)=>{const n=he.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Es(),n.preConfirm?(t.resetValidationMessage(),he.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>ro(n.preConfirm(e,n.validationMessage))).then(s=>{Rt(ja())||s===!1?(t.hideLoading(),uo(t)):op(t,typeof s=="undefined"?e:s)}).catch(s=>Fm(t||globalThis,s))):op(t,e)},CR=(t,e,n)=>{he.innerParams.get(t).toast?TR(t,e,n):(AR(e),SR(e),OR(t,e,n))},TR=(t,e,n)=>{e.popup.onclick=()=>{const i=he.innerParams.get(t);i&&(IR(i)||i.timer||i.input)||n(Fs.close)}},IR=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let ua=!1;const AR=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(ua=!0)}}},SR=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(ua=!0)}}},OR=(t,e,n)=>{e.container.onclick=i=>{const s=he.innerParams.get(t);if(ua){ua=!1;return}i.target===e.container&&Wa(s.allowOutsideClick)&&n(Fs.backdrop)}},NR=()=>Rt(Se()),Bm=()=>Yt()&&Yt().click(),RR=()=>Qn()&&Qn().click(),PR=()=>Ni()&&Ni().click(),kR=(t,e,n,i)=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1),n.toast||(e.keydownHandler=s=>DR(t,s,i),e.keydownTarget=n.keydownListenerCapture?window:Se(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},_c=(t,e,n)=>{const i=Bu();if(i.length)return e=e+n,e===i.length?e=0:e===-1&&(e=i.length-1),i[e].focus();Se().focus()},Um=["ArrowRight","ArrowDown"],xR=["ArrowLeft","ArrowUp"],DR=(t,e,n)=>{const i=he.innerParams.get(t);!i||e.isComposing||e.keyCode===229||(i.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?LR(t,e,i):e.key==="Tab"?MR(e,i):[...Um,...xR].includes(e.key)?$R(e.key):e.key==="Escape"&&FR(e,i,n))},LR=(t,e,n)=>{if(!!Wa(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Bm(),e.preventDefault()}},MR=(t,e)=>{const n=t.target,i=Bu();let s=-1;for(let r=0;r<i.length;r++)if(n===i[r]){s=r;break}t.shiftKey?_c(e,s,-1):_c(e,s,1),t.stopPropagation(),t.preventDefault()},$R=t=>{const e=Yt(),n=Qn(),i=Ni();if(![e,n,i].includes(document.activeElement))return;const s=Um.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<lo().children.length;o++){if(r=r[s],!r)return;if(Rt(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},FR=(t,e,n)=>{Wa(e.allowEscapeKey)&&(t.preventDefault(),n(Fs.esc))},BR=t=>typeof t=="object"&&t.jquery,ap=t=>t instanceof Element||BR(t),UR=t=>{const e={};return typeof t[0]=="object"&&!ap(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||ap(s)?e[n]=s:s!==void 0&&Mi(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function HR(...t){const e=this;return new e(...t)}function VR(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const WR=()=>ie.timeout&&ie.timeout.getTimerLeft(),Hm=()=>{if(ie.timeout)return RN(),ie.timeout.stop()},Vm=()=>{if(ie.timeout){const t=ie.timeout.start();return Vu(t),t}},jR=()=>{const t=ie.timeout;return t&&(t.running?Hm():Vm())},qR=t=>{if(ie.timeout){const e=ie.timeout.increase(t);return Vu(e,!0),e}},zR=()=>ie.timeout&&ie.timeout.isRunning();let lp=!1;const mc={};function KR(t="data-swal-template"){mc[t]=this,lp||(document.body.addEventListener("click",GR),lp=!0)}const GR=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in mc){const i=e.getAttribute(n);if(i){mc[n].fire({template:i});return}}};var YR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",isValidParameter:gm,isUpdatableParameter:_m,isDeprecatedParameter:pc,argsToParams:UR,getContainer:ct,getPopup:Se,getTitle:vm,getHtmlContainer:ca,getImage:ym,getIcon:ao,getInputLabel:IN,getCloseButton:Fu,getActions:lo,getConfirmButton:Yt,getDenyButton:Qn,getCancelButton:Ni,getLoader:$s,getFooter:bm,getTimerProgressBar:qa,getFocusableElements:Bu,getValidationMessage:ja,isLoading:SN,isVisible:NR,clickConfirm:Bm,clickDeny:RR,clickCancel:PR,fire:HR,mixin:VR,showLoading:Es,enableLoading:Es,getTimerLeft:WR,stopTimer:Hm,resumeTimer:Vm,toggleTimer:jR,increaseTimer:qR,isTimerRunning:zR,bindClickHandler:KR});let vc;class Bs{constructor(...e){if(typeof window=="undefined")return;vc=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const i=this._main(this.params);he.promise.set(this,i)}_main(e,n={}){CN(Object.assign({},n,e)),ie.currentInstance&&(ie.currentInstance._destroy(),Uu()&&Om()),ie.currentInstance=this;const i=XR(e,n);N0(i),Object.freeze(i),ie.timeout&&(ie.timeout.stop(),delete ie.timeout),clearTimeout(ie.restoreFocusTimeout);const s=JR(this);return Sm(this,i),he.innerParams.set(this,i),QR(this,s,i)}then(e){return he.promise.get(this).then(e)}finally(e){return he.promise.get(this).finally(e)}}const QR=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Vr.swalPromiseResolve.set(t,i),Vr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>yR(t),e.denyButton.onclick=()=>ER(t),e.cancelButton.onclick=()=>bR(t,r),e.closeButton.onclick=()=>r(Fs.close),CR(t,e,r),kR(t,ie,n,r),q0(t,n),U0(n),ZR(ie,n,r),eP(e,n),setTimeout(()=>{e.container.scrollTop=0})}),XR=(t,e)=>{const n=y0(t),i=Object.assign({},is,e,n,t);return i.showClass=Object.assign({},is.showClass,i.showClass),i.hideClass=Object.assign({},is.hideClass,i.hideClass),i},JR=t=>{const e={popup:Se(),container:ct(),actions:lo(),confirmButton:Yt(),denyButton:Qn(),cancelButton:Ni(),loader:$s(),closeButton:Fu(),validationMessage:ja(),progressSteps:Em()};return he.domCache.set(t,e),e},ZR=(t,e,n)=>{const i=qa();ut(i),e.timer&&(t.timeout=new R0(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(rt(i),Bt(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Vu(e.timer)})))},eP=(t,e)=>{if(!e.toast){if(!Wa(e.allowEnterKey))return nP();tP(t,e)||_c(e,-1,1)}},tP=(t,e)=>e.focusDeny&&Rt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Rt(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Rt(t.confirmButton)?(t.confirmButton.focus(),!0):!1,nP=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Bs.prototype,Mm);Object.assign(Bs,YR);Object.keys(Mm).forEach(t=>{Bs[t]=function(...e){if(vc)return vc[t](...e)}});Bs.DismissReason=Fs;Bs.version="11.4.4";const yc=Bs;yc.default=yc;const cp="@firebase/database",up="0.12.5";/**
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
 */let Wm="";function iP(t){Wm=t}/**
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
 */class sP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Lr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jm=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sP(e)}}catch{}return new rP},vi=jm("localStorage"),Ec=jm("sessionStorage");/**
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
 */const rs=new bu("@firebase/database"),oP=function(){let t=1;return function(){return t++}}(),qm=function(t){const e=xI(t),n=new NI;n.update(e);const i=n.digest();return yu.encodeByteArray(i)},ho=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ho.apply(null,i):typeof i=="object"?e+=tt(i):e+=i,e+=" "}return e};let Ti=null,dp=!0;const aP=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(rs.logLevel=$e.VERBOSE,Ti=rs.log.bind(rs),e&&Ec.set("logging_enabled",!0)):typeof t=="function"?Ti=t:(Ti=null,Ec.remove("logging_enabled"))},st=function(...t){if(dp===!0&&(dp=!1,Ti===null&&Ec.get("logging_enabled")===!0&&aP(!0)),Ti){const e=ho.apply(null,t);Ti(e)}},fo=function(t){return function(...e){st(t,...e)}},bc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ho(...t);rs.error(e)},Pi=function(...t){const e=`FIREBASE FATAL ERROR: ${ho(...t)}`;throw rs.error(e),new Error(e)},gt=function(...t){const e="FIREBASE WARNING: "+ho(...t);rs.warn(e)},lP=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ku=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",ki="[MAX_NAME]",$i=function(t,e){if(t===e)return 0;if(t===bs||e===ki)return-1;if(e===bs||t===ki)return 1;{const n=hp(t),i=hp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},uP=function(t,e){return t===e?0:t<e?-1:1},sr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},Gu=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=tt(e[i]),n+=":",n+=Gu(t[e[i]]);return n+="}",n},zm=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Km=function(t){L(!Ku(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(d.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},dP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const pP=new RegExp("^-?(0*)\\d{1,10}$"),gP=-2147483648,_P=2147483647,hp=function(t){if(pP.test(t)){const e=Number(t);if(e>=gP&&e<=_P)return e}return null},Us=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},mP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ir=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yP{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class wc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wc.OWNER="owner";/**
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
 */const Yu="5",Gm="v",Ym="s",Qm="r",Xm="f",Jm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zm="ls",EP="p",Cc="ac",ev="websocket",tv="long_polling";/**
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
 */class bP{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nv(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let i;if(e===ev)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wP(t)&&(n.ns=t.namespace);const s=[];return ot(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class CP{constructor(){this.counters_={}}incrementCounter(e,n=1){hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return EI(this.counters_)}}/**
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
 */const Pl={},kl={};function Qu(t){const e=t.toString();return Pl[e]||(Pl[e]=new CP),Pl[e]}function TP(t,e){const n=t.toString();return kl[n]||(kl[n]=e()),kl[n]}/**
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
 */class IP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Us(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fp="start",AP="close",SP="pLPCommand",OP="pRTLPCB",iv="id",sv="pw",rv="ser",NP="cb",RP="seg",PP="ts",kP="d",xP="dframe",ov=1870,av=30,DP=ov-av,LP=25e3,MP=3e4;class Ji{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fo(e),this.stats_=Qu(n),this.urlFn=c=>(this.appCheckToken&&(c[Cc]=this.appCheckToken),nv(n,tv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MP)),cP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xu((...r)=>{const[o,a,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fp)this.id=a,this.password=c;else if(o===AP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fp]="t",i[rv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[NP]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Gm]=Yu,this.transportSessionId&&(i[Ym]=this.transportSessionId),this.lastSessionId&&(i[Zm]=this.lastSessionId),this.applicationId&&(i[EP]=this.applicationId),this.appCheckToken&&(i[Cc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Jm.test(location.hostname)&&(i[Qm]=Xm);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ji.forceAllow_=!0}static forceDisallow(){Ji.forceDisallow_=!0}static isAvailable(){return Ji.forceAllow_?!0:!Ji.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!dP()&&!hP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yI(n),s=zm(i,DP);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[xP]="t",i[iv]=e,i[sv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xu{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oP(),window[SP+this.uniqueCallbackIdentifier]=e,window[OP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xu.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iv]=this.myID,e[sv]=this.myPW,e[rv]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+av+i.length<=ov;){const o=this.pendingSegs.shift();i=i+"&"+RP+s+"="+o.seg+"&"+PP+s+"="+o.ts+"&"+kP+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(LP)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const $P=16384,FP=45e3;let da=null;typeof MozWebSocket!="undefined"?da=MozWebSocket:typeof WebSocket!="undefined"&&(da=WebSocket);class Wt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fo(this.connId),this.stats_=Qu(n),this.connURL=Wt.connectionURL_(n,o,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[Gm]=Yu,typeof location!="undefined"&&location.hostname&&Jm.test(location.hostname)&&(r[Qm]=Xm),n&&(r[Ym]=n),i&&(r[Zm]=i),s&&(r[Cc]=s),nv(e,ev,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vi.set("previous_websocket_failure",!0);try{if(!I_()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new da(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&da!==null&&!Wt.forceDisallow_}static previouslyFailed(){return vi.isInMemoryStorage||vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Lr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zm(n,$P);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
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
 */class Ju{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ji,Wt]}initTransports_(e){const n=Wt&&Wt.isAvailable();let i=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Wt];else{const s=this.transports_=[];for(const r of Ju.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const BP=6e4,UP=5e3,HP=10*1024,VP=100*1024,xl="t",pp="d",WP="s",gp="r",jP="e",_p="o",mp="a",vp="n",yp="p",qP="h";class zP{constructor(e,n,i,s,r,o,a,c,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fo("c:"+this.id+":"),this.transportManager_=new Ju(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ir(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xl in e){const n=e[xl];n===mp?this.upgradeIfSecondaryHealthy_():n===gp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=sr("t",e),i=sr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=sr("t",e),i=sr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=sr(xl,e);if(pp in e){const i=e[pp];if(n===qP)this.onHandshake_(i);else if(n===vp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WP?this.onConnectionShutdown_(i):n===gp?this.onReset_(i):n===jP?bc("Server Error: "+i):n===_p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yu!==i&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ir(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ir(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lv{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class cv{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ha extends cv{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ha}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ep=32,bp=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new xe("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xn(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function Zu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function KP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function je(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof xe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new xe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function Et(t,e){const n=pe(t),i=pe(e);if(n===null)return e;if(n===i)return Et(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GP(t,e){const n=Wr(t,0),i=Wr(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=$i(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function ed(t,e){if(Xn(t)!==Xn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function $t(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Xn(t)>Xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class YP{constructor(e,n){this.errorPrefix_=n,this.parts_=Wr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$a(this.parts_[i]);dv(this)}}function QP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$a(e),dv(t)}function XP(t){const e=t.parts_.pop();t.byteLength_-=$a(e),t.parts_.length>0&&(t.byteLength_-=1)}function dv(t){if(t.byteLength_>bp)throw new Error(t.errorPrefix_+"has a key path longer than "+bp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ep)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ep+") or object contains a cycle "+gi(t))}function gi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class td extends cv{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new td}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const rr=1e3,JP=60*5*1e3,ZP=3*1e3,wp=30*1e3,ek=1.3,tk=3e4,nk="server_kill",Cp=3;class Cn extends lv{constructor(e,n,i,s,r,o,a,c){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Cn.nextPersistentConnectionId_++,this.log_=fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rr,this.maxReconnectDelay_=JP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!I_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ha.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(tt(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Qr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},ZP),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;Cn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hn(e,"w")){const i=_s(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bc("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tk&&(this.reconnectDelay_=rr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ek)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Cn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},u=function(f){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new zP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,v=>{gt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(nk)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&gt(f),c())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oc(this.interruptReasons_)&&(this.reconnectDelay_=rr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Gu(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new xe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cp&&(this.reconnectDelay_=wp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wm.replace(/\./g,"-")]=1,Eu()?e["framework.cordova"]=1:T_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ha.getInstance().currentlyOnline();return oc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
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
 */class Ga{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ge(bs,e),s=new ge(bs,n);return this.compare(i,s)!==0}minPost(){return ge.MIN}}/**
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
 */let Mo;class hv extends Ga{static get __EMPTY_NODE(){return Mo}static set __EMPTY_NODE(e){Mo=e}compare(e,n){return $i(e.name,n.name)}isDefinedOn(e){throw ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(ki,Mo)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Mo)}toString(){return".key"}}const os=new hv;/**
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
 */class $o{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Je.RED,this.left=s!=null?s:bt.EMPTY_NODE,this.right=r!=null?r:bt.EMPTY_NODE}copy(e,n,i,s,r){return new Je(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class ik{copy(e,n,i,s,r){return this}insert(e,n,i){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $o(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $o(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new ik;/**
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
 */function sk(t,e){return $i(t.name,e.name)}function nd(t,e){return $i(t,e)}/**
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
 */let Tc;function rk(t){Tc=t}const fv=function(t){return typeof t=="number"?"number:"+Km(t):"string:"+t},pv=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hn(e,".sv"),"Priority must be a string or number.")}else L(t===Tc||t.isEmpty(),"priority of unexpected type.");L(t===Tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tp;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pv(this.priorityNode_)}static set __childrenNodeConstructor(e){Tp=e}static get __childrenNodeConstructor(){return Tp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:pe(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=pe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(L(i!==".priority"||Xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Km(this.value_):e+=this.value_,this.lazyHash_=qm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),r=Xe.VALUE_TYPE_ORDER.indexOf(i);return L(s>=0,"Unknown leaf type: "+n),L(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gv,_v;function ok(t){gv=t}function ak(t){_v=t}class lk extends Ga{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?$i(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(ki,new Xe("[PRIORITY-POST]",_v))}makePost(e,n){const i=gv(e);return new ge(n,new Xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ze=new lk;/**
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
 */const ck=Math.log(2);class uk{constructor(e){const n=r=>parseInt(Math.log(r)/ck,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fa=function(t,e,n,i){t.sort(e);const s=function(c,u){const d=u-c;let f,p;if(d===0)return null;if(d===1)return f=t[c],p=n?n(f):f,new Je(p,f.node,Je.BLACK,null,null);{const v=parseInt(d/2,10)+c,E=s(c,v),w=s(v+1,u);return f=t[v],p=n?n(f):f,new Je(p,f.node,Je.BLACK,E,w)}},r=function(c){let u=null,d=null,f=t.length;const p=function(E,w){const A=f-E,N=f;f-=E;const M=s(A+1,N),U=t[A],F=n?n(U):U;v(new Je(F,U.node,w,null,M))},v=function(E){u?(u.left=E,u=E):(d=E,u=E)};for(let E=0;E<c.count;++E){const w=c.nextBitIsOne(),A=Math.pow(2,c.count-(E+1));w?p(A,Je.BLACK):(p(A,Je.BLACK),p(A,Je.RED))}return d},o=new uk(t.length),a=r(o);return new bt(i||e,a)};/**
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
 */let Dl;const qi={};class En{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(qi&&ze,"ChildrenNode.ts has not been loaded"),Dl=Dl||new En({".priority":qi},{".priority":ze}),Dl}get(e){const n=_s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return hn(this.indexSet_,e.toString())}addIndex(e,n){L(e!==os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=fa(i,e.getCompare()):a=qi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new En(d,u)}addToIndexes(e,n){const i=ea(this.indexes_,(s,r)=>{const o=_s(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),s===qi)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ge.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),fa(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ge(e.name,a))),c.insert(e,e.node)}});return new En(i,this.indexSet_)}removeFromIndexes(e,n){const i=ea(this.indexes_,s=>{if(s===qi)return s;{const r=n.get(e.name);return r?s.remove(new ge(e.name,r)):s}});return new En(i,this.indexSet_)}}/**
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
 */let or;class J{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&pv(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return or||(or=new J(new bt(nd),null,En.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||or}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?or:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ge(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?or:this.priorityNode_;return new J(s,o,r)}}updateChild(e,n){const i=pe(e);if(i===null)return n;{L(pe(e)!==".priority"||Xn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ue(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ze,(o,a)=>{n[o]=a.val(e),i++,r&&J.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fv(this.getPriority().val())+":"),this.forEachChild(ze,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":qm(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ze),s=n.getIterator(ze);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===os?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dk extends J{constructor(){super(new bt(nd),J.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const po=new dk;Object.defineProperties(ge,{MIN:{value:new ge(bs,J.EMPTY_NODE)},MAX:{value:new ge(ki,po)}});hv.__EMPTY_NODE=J.EMPTY_NODE;Xe.__childrenNodeConstructor=J;rk(po);ak(po);/**
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
 */const hk=!0;function Ze(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Ze(e))}if(!(t instanceof Array)&&hk){const n=[];let i=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ze(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ge(o,c)))}}),n.length===0)return J.EMPTY_NODE;const r=fa(n,sk,o=>o.name,nd);if(i){const o=fa(n,ze.getCompare());return new J(r,Ze(e),new En({".priority":o},{".priority":ze}))}else return new J(r,Ze(e),En.Default)}else{let n=J.EMPTY_NODE;return ot(t,(i,s)=>{if(hn(t,i)&&i.substring(0,1)!=="."){const r=Ze(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ze(e))}}ok(Ze);/**
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
 */class fk extends Ga{constructor(e){super();this.indexPath_=e,L(!_e(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?$i(e.name,n.name):r}makePost(e,n){const i=Ze(e),s=J.EMPTY_NODE.updateChild(this.indexPath_,i);return new ge(n,s)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,po);return new ge(ki,e)}toString(){return Wr(this.indexPath_,0).join("/")}}/**
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
 */class pk extends Ga{compare(e,n){const i=e.node.compareTo(n.node);return i===0?$i(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const i=Ze(e);return new ge(n,i)}toString(){return".value"}}const gk=new pk;/**
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
 */const Ip="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_k=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Ip.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ip.charAt(e[s]);return L(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function mv(t){return{type:"value",snapshotNode:t}}function ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function jr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class id{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(jr(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ws(n,i)):o.trackChildChange(qr(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ze,(s,r)=>{n.hasChild(s)||i.trackChildChange(jr(s,r))}),n.isLeafNode()||n.forEachChild(ze,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(qr(s,r,o))}else i.trackChildChange(ws(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class zr{constructor(e){this.indexedFilter_=new id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zr.getStartPost_(e),this.endPost_=zr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new ge(n,i))||(i=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=J.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(J.EMPTY_NODE);const r=this;return n.forEachChild(ze,(o,a)=>{r.matches(new ge(o,a))||(s=s.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vk{constructor(e){this.rangedFilter_=new zr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new ge(n,i))||(i=J.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=J.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(J.EMPTY_NODE);let r,o,a,c;if(this.reverse_){c=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(p,v)=>f(v,p)}else c=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,d=!1;for(;c.hasNext();){const f=c.getNext();!d&&a(r,f)<=0&&(d=!0),d&&u<this.limit_&&a(f,o)<=0?u++:s=s.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,v)=>f(v,p)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const c=new ge(n,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=s.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const v=p==null?1:o(p,c);if(d&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(qr(n,i,f)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(jr(n,f));const w=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(ws(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return i.isEmpty()?e:d&&o(u,c)>=0?(r!=null&&(r.trackChildChange(jr(u.name,u.node)),r.trackChildChange(ws(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
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
 */class sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ki}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yk(t){return t.loadsAllData()?new id(t.getIndex()):t.hasLimit()?new vk(t):new zr(t)}function Ap(t){const e={};if(t.isDefault())return e;let n;return t.index_===ze?n="$priority":t.index_===gk?n="$value":t.index_===os?n="$key":(L(t.index_ instanceof fk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_&&(e.startAt=tt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+tt(t.indexStartName_))),t.endSet_&&(e.endAt=tt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+tt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
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
 */class pa extends lv{constructor(e,n,i,s){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=fo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pa.getListenId_(e,i),a={};this.listens_[o]=a;const c=Ap(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,i),_s(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const i=pa.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ap(e._queryParams),i=e._path.toString(),s=new Qr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Lr(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ek{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ga(){return{value:null,children:new Map}}function vv(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=pe(e);t.children.has(i)||t.children.set(i,ga());const s=t.children.get(i);e=Ue(e),vv(s,e,n)}}function Ic(t,e,n){t.value!==null?n(e,t.value):bk(t,(i,s)=>{const r=new xe(e.toString()+"/"+i);Ic(s,r,n)})}function bk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class wk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Op=10*1e3,Ck=30*1e3,Tk=5*60*1e3;class Ik{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wk(e);const i=Op+(Ck-Op)*Math.random();Ir(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ot(e,(s,r)=>{r>0&&hn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ir(this.reportStats_.bind(this),Math.floor(Math.random()*2*Tk))}}/**
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
 */var jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jt||(jt={}));function rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function od(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ad(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _a{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=jt.ACK_USER_WRITE,this.source=rd()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new _a(Ie(),n,this.revert)}}else return L(pe(this.path)===e,"operationForChild called for unrelated child."),new _a(Ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class Kr{constructor(e,n){this.source=e,this.path=n,this.type=jt.LISTEN_COMPLETE}operationForChild(e){return _e(this.path)?new Kr(this.source,Ie()):new Kr(this.source,Ue(this.path))}}/**
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
 */class xi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=jt.OVERWRITE}operationForChild(e){return _e(this.path)?new xi(this.source,Ie(),this.snap.getImmediateChild(e)):new xi(this.source,Ue(this.path),this.snap)}}/**
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
 */class Cs{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=jt.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new xi(this.source,Ie(),n.value):new Cs(this.source,Ie(),n)}else return L(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Di{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ak{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mk(o.childName,o.snapshotNode))}),ar(t,s,"child_removed",e,i,n),ar(t,s,"child_added",e,i,n),ar(t,s,"child_moved",r,i,n),ar(t,s,"child_changed",e,i,n),ar(t,s,"value",e,i,n),s}function ar(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Nk(t,a,c)),o.forEach(a=>{const c=Ok(t,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function Ok(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nk(t,e,n){if(e.childName==null||n.childName==null)throw ks("Should only compare child_ events.");const i=new ge(e.childName,e.snapshotNode),s=new ge(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Ya(t,e){return{eventCache:t,serverCache:e}}function Ar(t,e,n,i){return Ya(new Di(e,n,i),t.serverCache)}function yv(t,e,n,i){return Ya(t.eventCache,new Di(e,n,i))}function Ac(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ll;const Rk=()=>(Ll||(Ll=new bt(uP)),Ll);class Be{constructor(e,n=Rk()){this.value=e,this.children=n}static fromObject(e){let n=new Be(null);return ot(e,(i,s)=>{n=n.set(new xe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(_e(e))return null;{const i=pe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ue(e),n);return r!=null?{path:je(new xe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=pe(e),i=this.children.get(n);return i!==null?i.subtree(Ue(e)):new Be(null)}}set(e,n){if(_e(e))return new Be(n,this.children);{const i=pe(e),r=(this.children.get(i)||new Be(null)).set(Ue(e),n),o=this.children.insert(i,r);return new Be(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const n=pe(e),i=this.children.get(n);if(i){const s=i.remove(Ue(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Be(null):new Be(this.value,r)}else return this}}get(e){if(_e(e))return this.value;{const n=pe(e),i=this.children.get(n);return i?i.get(Ue(e)):null}}setTree(e,n){if(_e(e))return n;{const i=pe(e),r=(this.children.get(i)||new Be(null)).setTree(Ue(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Be(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(je(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(_e(e))return null;{const r=pe(e),o=this.children.get(r);return o?o.findOnPath_(Ue(e),je(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,i){if(_e(e))return this;{this.value&&i(n,this.value);const s=pe(e),r=this.children.get(s);return r?r.foreachOnPath_(Ue(e),je(n,s),i):new Be(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(je(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new Be(null))}}function Sr(t,e,n){if(_e(e))return new Kt(new Be(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Et(s,e);return r=r.updateChild(o,n),new Kt(t.writeTree_.set(s,r))}else{const s=new Be(n),r=t.writeTree_.setTree(e,s);return new Kt(r)}}}function Sc(t,e,n){let i=t;return ot(n,(s,r)=>{i=Sr(i,je(e,s),r)}),i}function Np(t,e){if(_e(e))return Kt.empty();{const n=t.writeTree_.setTree(e,new Be(null));return new Kt(n)}}function Oc(t,e){return Fi(t,e)!=null}function Fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Et(n.path,e)):null}function Rp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(i,s)=>{e.push(new ge(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ge(i,s.value))}),e}function Gn(t,e){if(_e(e))return t;{const n=Fi(t,e);return n!=null?new Kt(new Be(n)):new Kt(t.writeTree_.subtree(e))}}function Nc(t){return t.writeTree_.isEmpty()}function Ts(t,e){return Ev(Ie(),t.writeTree_,e)}function Ev(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Ev(je(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(je(t,".priority"),i)),n}}/**
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
 */function ld(t,e){return Tv(e,t)}function Pk(t,e,n,i,s){L(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Sr(t.visibleWrites,e,n)),t.lastWriteId=i}function kk(t,e,n,i){L(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Sc(t.visibleWrites,e,n),t.lastWriteId=i}function xk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Dk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Lk(a,i.path)?s=!1:$t(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Mk(t),!0;if(i.snap)t.visibleWrites=Np(t.visibleWrites,i.path);else{const a=i.children;ot(a,c=>{t.visibleWrites=Np(t.visibleWrites,je(i.path,c))})}return!0}else return!1}function Lk(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(je(t.path,n),e))return!0;return!1}function Mk(t){t.visibleWrites=bv(t.allWrites,$k,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $k(t){return t.visible}function bv(t,e,n){let i=Kt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)$t(n,o)?(a=Et(n,o),i=Sr(i,a,r.snap)):$t(o,n)&&(a=Et(o,n),i=Sr(i,Ie(),r.snap.getChild(a)));else if(r.children){if($t(n,o))a=Et(n,o),i=Sc(i,a,r.children);else if($t(o,n))if(a=Et(o,n),_e(a))i=Sc(i,Ie(),r.children);else{const c=_s(r.children,pe(a));if(c){const u=c.getChild(Ue(a));i=Sr(i,Ie(),u)}}}else throw ks("WriteRecord should have .snap or .children")}}return i}function wv(t,e,n,i,s){if(!i&&!s){const r=Fi(t.visibleWrites,e);if(r!=null)return r;{const o=Gn(t.visibleWrites,e);if(Nc(o))return n;if(n==null&&!Oc(o,Ie()))return null;{const a=n||J.EMPTY_NODE;return Ts(o,a)}}}else{const r=Gn(t.visibleWrites,e);if(!s&&Nc(r))return n;if(!s&&n==null&&!Oc(r,Ie()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&($t(u.path,e)||$t(e,u.path))},a=bv(t.allWrites,o,e),c=n||J.EMPTY_NODE;return Ts(a,c)}}}function Fk(t,e,n){let i=J.EMPTY_NODE;const s=Fi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ze,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Gn(t.visibleWrites,e);return n.forEachChild(ze,(o,a)=>{const c=Ts(Gn(r,new xe(o)),a);i=i.updateImmediateChild(o,c)}),Rp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Gn(t.visibleWrites,e);return Rp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Bk(t,e,n,i,s){L(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=je(e,n);if(Oc(t.visibleWrites,r))return null;{const o=Gn(t.visibleWrites,r);return Nc(o)?s.getChild(n):Ts(o,s.getChild(n))}}function Uk(t,e,n,i){const s=je(e,n),r=Fi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Gn(t.visibleWrites,s);return Ts(o,i.getNode().getImmediateChild(n))}else return null}function Hk(t,e){return Fi(t.visibleWrites,e)}function Vk(t,e,n,i,s,r,o){let a;const c=Gn(t.visibleWrites,e),u=Fi(c,Ie());if(u!=null)a=u;else if(n!=null)a=Ts(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),p=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let v=p.getNext();for(;v&&d.length<s;)f(v,i)!==0&&d.push(v),v=p.getNext();return d}else return[]}function Wk(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function ma(t,e,n,i){return wv(t.writeTree,t.treePath,e,n,i)}function cd(t,e){return Fk(t.writeTree,t.treePath,e)}function Pp(t,e,n,i){return Bk(t.writeTree,t.treePath,e,n,i)}function va(t,e){return Hk(t.writeTree,je(t.treePath,e))}function jk(t,e,n,i,s,r){return Vk(t.writeTree,t.treePath,e,n,i,s,r)}function ud(t,e,n){return Uk(t.writeTree,t.treePath,e,n)}function Cv(t,e){return Tv(je(t.treePath,e),t.writeTree)}function Tv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,qr(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,jr(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ws(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,qr(i,e.snapshotNode,s.oldSnap));else throw ks("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Iv=new zk;class dd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ud(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Li(this.viewCache_),r=jk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Kk(t){return{filter:t}}function Gk(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yk(t,e,n,i,s){const r=new qk;let o,a;if(n.type===jt.OVERWRITE){const u=n;u.source.fromUser?o=Rc(t,e,u.path,u.snap,i,s,r):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=ya(t,e,u.path,u.snap,i,s,a,r))}else if(n.type===jt.MERGE){const u=n;u.source.fromUser?o=Xk(t,e,u.path,u.children,i,s,r):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Pc(t,e,u.path,u.children,i,s,a,r))}else if(n.type===jt.ACK_USER_WRITE){const u=n;u.revert?o=ex(t,e,u.path,i,s,r):o=Jk(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===jt.LISTEN_COMPLETE)o=Zk(t,e,n.path,i,r);else throw ks("Unknown operation type: "+n.type);const c=r.getChanges();return Qk(e,o,c),{viewCache:o,changes:c}}function Qk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ac(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(mv(Ac(e)))}}function Av(t,e,n,i,s,r){const o=e.eventCache;if(va(i,n)!=null)return e;{let a,c;if(_e(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Li(e),d=u instanceof J?u:J.EMPTY_NODE,f=cd(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=ma(i,Li(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=pe(n);if(u===".priority"){L(Xn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Pp(i,n,d,c);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ue(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=Pp(i,n,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(d,p):f=o.getNode().getImmediateChild(u)}else f=ud(i,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,d,s,r):a=o.getNode()}}return Ar(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function ya(t,e,n,i,s,r,o,a){const c=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(n,i);u=d.updateFullNode(c.getNode(),v,null)}else{const v=pe(n);if(!c.isCompleteForPath(n)&&Xn(n)>1)return e;const E=Ue(n),A=c.getNode().getImmediateChild(v).updateChild(E,i);v===".priority"?u=d.updatePriority(c.getNode(),A):u=d.updateChild(c.getNode(),v,A,E,Iv,null)}const f=yv(e,u,c.isFullyInitialized()||_e(n),d.filtersNodes()),p=new dd(s,f,r);return Av(t,f,n,s,p,a)}function Rc(t,e,n,i,s,r,o){const a=e.eventCache;let c,u;const d=new dd(s,e,r);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ar(e,u,!0,t.filter.filtersNodes());else{const f=pe(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ar(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ue(n),v=a.getNode().getImmediateChild(f);let E;if(_e(p))E=i;else{const w=d.getCompleteChild(f);w!=null?Zu(p)===".priority"&&w.getChild(uv(p)).isEmpty()?E=w:E=w.updateChild(p,i):E=J.EMPTY_NODE}if(v.equals(E))c=e;else{const w=t.filter.updateChild(a.getNode(),f,E,p,d,o);c=Ar(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function kp(t,e){return t.eventCache.isCompleteForChild(e)}function Xk(t,e,n,i,s,r,o){let a=e;return i.foreach((c,u)=>{const d=je(n,c);kp(e,pe(d))&&(a=Rc(t,a,d,u,s,r,o))}),i.foreach((c,u)=>{const d=je(n,c);kp(e,pe(d))||(a=Rc(t,a,d,u,s,r,o))}),a}function xp(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Pc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;_e(n)?u=i:u=new Be(null).setTree(n,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),E=xp(t,v,p);c=ya(t,c,new xe(f),E,s,r,o,a)}}),u.children.inorderTraversal((f,p)=>{const v=!e.serverCache.isCompleteForChild(f)&&p.value===void 0;if(!d.hasChild(f)&&!v){const E=e.serverCache.getNode().getImmediateChild(f),w=xp(t,E,p);c=ya(t,c,new xe(f),w,s,r,o,a)}}),c}function Jk(t,e,n,i,s,r,o){if(va(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(_e(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ya(t,e,n,c.getNode().getChild(n),s,r,a,o);if(_e(n)){let u=new Be(null);return c.getNode().forEachChild(os,(d,f)=>{u=u.set(new xe(d),f)}),Pc(t,e,n,u,s,r,a,o)}else return e}else{let u=new Be(null);return i.foreach((d,f)=>{const p=je(n,d);c.isCompleteForPath(p)&&(u=u.set(d,c.getNode().getChild(p)))}),Pc(t,e,n,u,s,r,a,o)}}function Zk(t,e,n,i,s){const r=e.serverCache,o=yv(e,r.getNode(),r.isFullyInitialized()||_e(n),r.isFiltered());return Av(t,o,n,i,Iv,s)}function ex(t,e,n,i,s,r){let o;if(va(i,n)!=null)return e;{const a=new dd(i,e,s),c=e.eventCache.getNode();let u;if(_e(n)||pe(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ma(i,Li(e));else{const f=e.serverCache.getNode();L(f instanceof J,"serverChildren would be complete if leaf node"),d=cd(i,f)}d=d,u=t.filter.updateFullNode(c,d,r)}else{const d=pe(n);let f=ud(i,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=t.filter.updateChild(c,d,f,Ue(n),a,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(c,d,J.EMPTY_NODE,Ue(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ma(i,Li(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||va(i,Ie())!=null,Ar(e,u,o,t.filter.filtersNodes())}}/**
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
 */class tx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new id(i.getIndex()),r=yk(i);this.processor_=Kk(r);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(J.EMPTY_NODE,a.getNode(),null),d=new Di(c,o.isFullyInitialized(),s.filtersNodes()),f=new Di(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ya(f,d),this.eventGenerator_=new Ak(this.query_)}get query(){return this.query_}}function nx(t){return t.viewCache_.serverCache.getNode()}function ix(t,e){const n=Li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function Dp(t){return t.eventRegistrations_.length===0}function sx(t,e){t.eventRegistrations_.push(e)}function Lp(t,e,n){const i=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Mp(t,e,n,i){e.type===jt.MERGE&&e.source.queryId!==null&&(L(Li(t.viewCache_),"We should always have a full cache before handling merges"),L(Ac(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Yk(t.processor_,s,e,n,i);return Gk(t.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Sv(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rx(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(r,o)=>{i.push(ws(r,o))}),n.isFullyInitialized()&&i.push(mv(n.getNode())),Sv(t,i,n.getNode(),e)}function Sv(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Sk(t.eventGenerator_,e,n,s)}/**
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
 */let Ea;class ox{constructor(){this.views=new Map}}function ax(t){L(!Ea,"__referenceConstructor has already been defined"),Ea=t}function lx(){return L(Ea,"Reference.ts has not been loaded"),Ea}function cx(t){return t.views.size===0}function hd(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return L(r!=null,"SyncTree gave us an op for an invalid query."),Mp(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Mp(o,e,n,i));return r}}function ux(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ma(n,s?i:null),c=!1;a?c=!0:i instanceof J?(a=cd(n,i),c=!1):(a=J.EMPTY_NODE,c=!1);const u=Ya(new Di(a,c,!1),new Di(i,s,!1));return new tx(e,u)}return o}function dx(t,e,n,i,s,r){const o=ux(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),sx(o,n),rx(o,n)}function hx(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Jn(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(Lp(u,n,i)),Dp(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(Lp(c,n,i)),Dp(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Jn(t)&&r.push(new(lx())(e._repo,e._path)),{removed:r,events:o}}function Ov(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function as(t,e){let n=null;for(const i of t.views.values())n=n||ix(i,e);return n}function Nv(t,e){if(e._queryParams.loadsAllData())return Qa(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Rv(t,e){return Nv(t,e)!=null}function Jn(t){return Qa(t)!=null}function Qa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ba;function fx(t){L(!ba,"__referenceConstructor has already been defined"),ba=t}function px(){return L(ba,"Reference.ts has not been loaded"),ba}let gx=1;class $p{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=Wk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pv(t,e,n,i,s){return Pk(t.pendingWriteTree_,e,n,i,s),s?Hs(t,new xi(rd(),e,n)):[]}function _x(t,e,n,i){kk(t.pendingWriteTree_,e,n,i);const s=Be.fromObject(n);return Hs(t,new Cs(rd(),e,s))}function Wn(t,e,n=!1){const i=xk(t.pendingWriteTree_,e);if(Dk(t.pendingWriteTree_,e)){let r=new Be(null);return i.snap!=null?r=r.set(Ie(),!0):ot(i.children,o=>{r=r.set(new xe(o),!0)}),Hs(t,new _a(i.path,r,n))}else return[]}function Xa(t,e,n){return Hs(t,new xi(od(),e,n))}function mx(t,e,n){const i=Be.fromObject(n);return Hs(t,new Cs(od(),e,i))}function vx(t,e){return Hs(t,new Kr(od(),e))}function yx(t,e,n){const i=pd(t,n);if(i){const s=gd(i),r=s.path,o=s.queryId,a=Et(r,e),c=new Kr(ad(o),a);return _d(t,r,c)}else return[]}function kc(t,e,n,i){const s=e._path,r=t.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Rv(r,e))){const a=hx(r,e,n,i);cx(r)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;o=a.events;const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>Jn(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=wx(f);for(let v=0;v<p.length;++v){const E=p[v],w=E.query,A=Dv(t,E);t.listenProvider_.startListening(Or(w),wa(t,w),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Or(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(Ja(f));t.listenProvider_.stopListening(Or(f),p)})),Cx(t,c)}return o}function Ex(t,e,n,i){const s=pd(t,i);if(s!=null){const r=gd(s),o=r.path,a=r.queryId,c=Et(o,e),u=new xi(ad(a),c,n);return _d(t,o,u)}else return[]}function bx(t,e,n,i){const s=pd(t,i);if(s){const r=gd(s),o=r.path,a=r.queryId,c=Et(o,e),u=Be.fromObject(n),d=new Cs(ad(a),c,u);return _d(t,o,d)}else return[]}function Fp(t,e,n){const i=e._path;let s=null,r=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=Et(f,i);s=s||as(p,v),r=r||Jn(p)});let o=t.syncPointTree_.get(i);o?(r=r||Jn(o),s=s||as(o,Ie())):(o=new ox,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const E=as(v,Ie());E&&(s=s.updateImmediateChild(p,E))}));const c=Rv(o,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ja(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Tx();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ld(t.pendingWriteTree_,i);let d=dx(o,e,n,u,s,a);if(!c&&!r){const f=Nv(o,e);d=d.concat(Ix(t,e,f))}return d}function fd(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Et(o,e),u=as(a,c);if(u)return u});return wv(s,e,r,n,!0)}function Hs(t,e){return kv(e,t.syncPointTree_,null,ld(t.pendingWriteTree_,Ie()))}function kv(t,e,n,i){if(_e(t.path))return xv(t,e,n,i);{const s=e.get(Ie());n==null&&s!=null&&(n=as(s,Ie()));let r=[];const o=pe(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,d=Cv(i,o);r=r.concat(kv(a,c,u,d))}return s&&(r=r.concat(hd(s,t,i,n))),r}}function xv(t,e,n,i){const s=e.get(Ie());n==null&&s!=null&&(n=as(s,Ie()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=Cv(i,o),d=t.operationForChild(o);d&&(r=r.concat(xv(d,a,c,u)))}),s&&(r=r.concat(hd(s,t,i,n))),r}function Dv(t,e){const n=e.query,i=wa(t,n);return{hashFn:()=>(nx(e)||J.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?yx(t,n._path,i):vx(t,n._path);{const r=fP(s,n);return kc(t,n,null,r)}}}}function wa(t,e){const n=Ja(e);return t.queryToTagMap.get(n)}function Ja(t){return t._path.toString()+"$"+t._queryIdentifier}function pd(t,e){return t.tagToQueryMap.get(e)}function gd(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function _d(t,e,n){const i=t.syncPointTree_.get(e);L(i,"Missing sync point for query tag that we're tracking");const s=ld(t.pendingWriteTree_,e);return hd(i,n,s,null)}function wx(t){return t.fold((e,n,i)=>{if(n&&Jn(n))return[Qa(n)];{let s=[];return n&&(s=Ov(n)),ot(i,(r,o)=>{s=s.concat(o)}),s}})}function Or(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(px())(t._repo,t._path):t}function Cx(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Ja(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Tx(){return gx++}function Ix(t,e,n){const i=e._path,s=wa(t,e),r=Dv(t,n),o=t.listenProvider_.startListening(Or(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)L(!Jn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,d,f)=>{if(!_e(u)&&d&&Jn(d))return[Qa(d).query];{let p=[];return d&&(p=p.concat(Ov(d).map(v=>v.query))),ot(f,(v,E)=>{p=p.concat(E)}),p}});for(let u=0;u<c.length;++u){const d=c[u];t.listenProvider_.stopListening(Or(d),wa(t,d))}}return o}/**
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
 */class md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new md(n)}node(){return this.node_}}class vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new vd(this.syncTree_,n)}node(){return fd(this.syncTree_,this.path_)}}const Ax=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bp=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Sx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ox(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Sx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},Ox=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&L(!1,"Unexpected increment value: "+i);const s=e.node();if(L(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Lv=function(t,e,n,i){return yd(e,new vd(n,t),i)},Mv=function(t,e,n){return yd(t,new md(e),n)};function yd(t,e,n){const i=t.getPriority().val(),s=Bp(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Bp(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Xe(a,Ze(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Xe(s))),o.forEachChild(ze,(a,c)=>{const u=yd(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
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
 */class Ed{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function bd(t,e){let n=e instanceof xe?e:new xe(e),i=t,s=pe(n);for(;s!==null;){const r=_s(i.node.children,s)||{children:{},childCount:0};i=new Ed(s,i,r),n=Ue(n),s=pe(n)}return i}function Vs(t){return t.node.value}function $v(t,e){t.node.value=e,xc(t)}function Fv(t){return t.node.childCount>0}function Nx(t){return Vs(t)===void 0&&!Fv(t)}function Za(t,e){ot(t.node.children,(n,i)=>{e(new Ed(n,t,i))})}function Bv(t,e,n,i){n&&!i&&e(t),Za(t,s=>{Bv(s,e,!0,i)}),n&&i&&e(t)}function Rx(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function go(t){return new xe(t.parent===null?t.name:go(t.parent)+"/"+t.name)}function xc(t){t.parent!==null&&Px(t.parent,t.name,t)}function Px(t,e,n){const i=Nx(n),s=hn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,xc(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xc(t))}/**
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
 */const kx=/[\[\].#$\/\u0000-\u001F\u007F]/,xx=/[\[\].#$\u0000-\u001F\u007F]/,Ml=10*1024*1024,wd=function(t){return typeof t=="string"&&t.length!==0&&!kx.test(t)},Uv=function(t){return typeof t=="string"&&t.length!==0&&!xx.test(t)},Dx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uv(t)},Lx=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ku(t)||t&&typeof t=="object"&&hn(t,".sv")},Hv=function(t,e,n,i){i&&e===void 0||el(Ma(t,"value"),e,n)},el=function(t,e,n){const i=n instanceof xe?new YP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gi(i));if(typeof e=="function")throw new Error(t+"contains a function "+gi(i)+" with contents = "+e.toString());if(Ku(e))throw new Error(t+"contains "+e.toString()+" "+gi(i));if(typeof e=="string"&&e.length>Ml/3&&$a(e)>Ml)throw new Error(t+"contains a string greater than "+Ml+" utf8 bytes "+gi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ot(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wd(o)))throw new Error(t+" contains an invalid key ("+o+") "+gi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QP(i,o),el(t,a,i),XP(i)}),s&&r)throw new Error(t+' contains ".value" child '+gi(i)+" in addition to actual children.")}},Mx=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Wr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!wd(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(GP);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&$t(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},$x=function(t,e,n,i){if(i&&e===void 0)return;const s=Ma(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];ot(e,(o,a)=>{const c=new xe(o);if(el(s,a,je(n,c)),Zu(c)===".priority"&&!Lx(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Mx(s,r)},Vv=function(t,e,n,i){if(!(i&&n===void 0)&&!Uv(n))throw new Error(Ma(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fx=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vv(t,e,n,i)},Cd=function(t,e){if(pe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Bx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Dx(n))throw new Error(Ma(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ux{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tl(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!ed(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Wv(t,e,n){tl(t,n),jv(t,i=>ed(i,e))}function Qt(t,e,n){tl(t,n),jv(t,i=>$t(i,e)||$t(e,i))}function jv(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Hx(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Hx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ti&&st("event: "+n.toString()),Us(i)}}}/**
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
 */const Vx="repo_interrupt",Wx=25;class jx{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ux,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ga(),this.transactionQueueTree_=new Ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qx(t,e,n){if(t.stats_=Qu(t.repoInfo_),t.forceRestClient_||mP())t.server_=new pa(t.repoInfo_,(i,s,r,o)=>{Up(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hp(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Cn(t.repoInfo_,e,(i,s,r,o)=>{Up(t,i,s,r,o)},i=>{Hp(t,i)},i=>{zx(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=TP(t.repoInfo_,()=>new Ik(t.stats_,t.server_)),t.infoData_=new Ek,t.infoSyncTree_=new $p({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Xa(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Td(t,"connected",!1),t.serverSyncTree_=new $p({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const u=o(a,c);Qt(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function qv(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nl(t){return Ax({timestamp:qv(t)})}function Up(t,e,n,i,s){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=ea(n,u=>Ze(u));o=bx(t.serverSyncTree_,r,c,s)}else{const c=Ze(n);o=Ex(t.serverSyncTree_,r,c,s)}else if(i){const c=ea(n,u=>Ze(u));o=mx(t.serverSyncTree_,r,c)}else{const c=Ze(n);o=Xa(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Is(t,r)),Qt(t.eventQueue_,a,o)}function Hp(t,e){Td(t,"connected",e),e===!1&&Yx(t)}function zx(t,e){ot(e,(n,i)=>{Td(t,n,i)})}function Td(t,e,n){const i=new xe("/.info/"+e),s=Ze(n);t.infoData_.updateSnapshot(i,s);const r=Xa(t.infoSyncTree_,i,s);Qt(t.eventQueue_,i,r)}function Id(t){return t.nextWriteId_++}function Kx(t,e,n,i,s){il(t,"set",{path:e.toString(),value:n,priority:i});const r=nl(t),o=Ze(n,i),a=fd(t.serverSyncTree_,e),c=Mv(o,a,r),u=Id(t),d=Pv(t.serverSyncTree_,e,c,u,!0);tl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(p,v)=>{const E=p==="ok";E||gt("set at "+e+" failed: "+p);const w=Wn(t.serverSyncTree_,u,!E);Qt(t.eventQueue_,e,w),Dc(t,s,p,v)});const f=Sd(t,e);Is(t,f),Qt(t.eventQueue_,f,[])}function Gx(t,e,n,i){il(t,"update",{path:e.toString(),value:n});let s=!0;const r=nl(t),o={};if(ot(n,(a,c)=>{s=!1,o[a]=Lv(je(e,a),Ze(c),t.serverSyncTree_,r)}),s)st("update() called with empty data.  Don't do anything."),Dc(t,i,"ok",void 0);else{const a=Id(t),c=_x(t.serverSyncTree_,e,o,a);tl(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,d)=>{const f=u==="ok";f||gt("update at "+e+" failed: "+u);const p=Wn(t.serverSyncTree_,a,!f),v=p.length>0?Is(t,e):e;Qt(t.eventQueue_,v,p),Dc(t,i,u,d)}),ot(n,u=>{const d=Sd(t,je(e,u));Is(t,d)}),Qt(t.eventQueue_,e,[])}}function Yx(t){il(t,"onDisconnectEvents");const e=nl(t),n=ga();Ic(t.onDisconnect_,Ie(),(s,r)=>{const o=Lv(s,r,t.serverSyncTree_,e);vv(n,s,o)});let i=[];Ic(n,Ie(),(s,r)=>{i=i.concat(Xa(t.serverSyncTree_,s,r));const o=Sd(t,s);Is(t,o)}),t.onDisconnect_=ga(),Qt(t.eventQueue_,Ie(),i)}function Qx(t,e,n){let i;pe(e._path)===".info"?i=Fp(t.infoSyncTree_,e,n):i=Fp(t.serverSyncTree_,e,n),Wv(t.eventQueue_,e._path,i)}function Vp(t,e,n){let i;pe(e._path)===".info"?i=kc(t.infoSyncTree_,e,n):i=kc(t.serverSyncTree_,e,n),Wv(t.eventQueue_,e._path,i)}function Xx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vx)}function il(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function Dc(t,e,n,i){e&&Us(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function zv(t,e,n){return fd(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Ad(t,e=t.transactionQueueTree_){if(e||sl(t,e),Vs(e)){const n=Gv(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Jx(t,go(e),n)}else Fv(e)&&Za(e,n=>{Ad(t,n)})}function Jx(t,e,n){const i=n.map(u=>u.currentWriteId),s=zv(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];L(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Et(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{il(t,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,d=d.concat(Wn(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();sl(t,bd(t.transactionQueueTree_,e)),Ad(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,d);for(let p=0;p<f.length;p++)Us(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{gt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Is(t,e)}},o)}function Is(t,e){const n=Kv(t,e),i=go(n),s=Gv(t,n);return Zx(t,s,i),i}function Zx(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Et(n,c.path);let d=!1,f;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,s=s.concat(Wn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Wx)d=!0,f="maxretry",s=s.concat(Wn(t.serverSyncTree_,c.currentWriteId,!0));else{const p=zv(t,c.path,o);c.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){el("transaction failed: Data returned ",v,c.path);let E=Ze(v);typeof v=="object"&&v!=null&&hn(v,".priority")||(E=E.updatePriority(p.getPriority()));const A=c.currentWriteId,N=nl(t),M=Mv(E,p,N);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=M,c.currentWriteId=Id(t),o.splice(o.indexOf(A),1),s=s.concat(Pv(t.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),s=s.concat(Wn(t.serverSyncTree_,A,!0))}else d=!0,f="nodata",s=s.concat(Wn(t.serverSyncTree_,c.currentWriteId,!0))}Qt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}sl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Us(i[a]);Ad(t,t.transactionQueueTree_)}function Kv(t,e){let n,i=t.transactionQueueTree_;for(n=pe(e);n!==null&&Vs(i)===void 0;)i=bd(i,n),e=Ue(e),n=pe(e);return i}function Gv(t,e){const n=[];return Yv(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Yv(t,e,n){const i=Vs(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Za(e,s=>{Yv(t,s,n)})}function sl(t,e){const n=Vs(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,$v(e,n.length>0?n:void 0)}Za(e,i=>{sl(t,i)})}function Sd(t,e){const n=go(Kv(t,e)),i=bd(t.transactionQueueTree_,e);return Rx(i,s=>{$l(t,s)}),$l(t,i),Bv(i,s=>{$l(t,s)}),n}function $l(t,e){const n=Vs(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$v(e,void 0):n.length=r+1,Qt(t.eventQueue_,go(e),s);for(let o=0;o<i.length;o++)Us(i[o])}}/**
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
 */function eD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function tD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wp=function(t,e){const n=nD(t),i=n.namespace;n.domain==="firebase.com"&&Pi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Pi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lP();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bP(n.host,n.secure,i,e,s,"",i!==n.subdomain),path:new xe(n.pathString)}},nD=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=eD(t.substring(d,f)));const p=tD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=i}"ns"in p&&(r=p.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Qv{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class Xv{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class iD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Od{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return _e(this._path)?null:Zu(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=Sp(this._queryParams),n=Gu(e);return n==="{}"?"default":n}get _queryObject(){return Sp(this._queryParams)}isEqual(e){if(e=Jt(e),!(e instanceof Od))return!1;const n=this._repo===e._repo,i=ed(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+KP(this._path)}}class On extends Od{constructor(e,n){super(e,n,new sd,!1)}get parent(){const e=uv(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),i=As(this.ref,e);return new Gr(this._node.getChild(n),i,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Gr(s,As(this.ref,i),ze)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function KD(t,e){return t=Jt(t),t._checkNotDeleted("ref"),e!==void 0?As(t._root,e):t._root}function As(t,e){return t=Jt(t),pe(t._path)===null?Fx("child","path",e,!1):Vv("child","path",e,!1),new On(t._repo,je(t._path,e))}function GD(t,e){t=Jt(t),Cd("push",t._path),Hv("push",e,t._path,!0);const n=qv(t._repo),i=_k(n),s=As(t,i),r=As(t,i);let o;return e!=null?o=Jv(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function YD(t){return Cd("remove",t._path),Jv(t,null)}function Jv(t,e){t=Jt(t),Cd("set",t._path),Hv("set",e,t._path,!1);const n=new Qr;return Kx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QD(t,e){$x("update",e,t._path,!1);const n=new Qr;return Gx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Nd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Qv("value",this,new Gr(e.snapshotNode,new On(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xv(this,e,n):null}matches(e){return e instanceof Nd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Rd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xv(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const i=As(new On(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Qv(e.type,this,new Gr(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Rd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Pd(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=n,u=(d,f)=>{Vp(t._repo,t,a),c(d,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new iD(n,r||void 0),a=e==="value"?new Nd(o):new Rd(e,o);return Qx(t._repo,t,a),()=>Vp(t._repo,t,a)}function XD(t,e,n,i){return Pd(t,"child_added",e,n,i)}function JD(t,e,n,i){return Pd(t,"child_changed",e,n,i)}function ZD(t,e,n,i){return Pd(t,"child_removed",e,n,i)}ax(On);fx(On);/**
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
 */const sD="FIREBASE_DATABASE_EMULATOR_HOST",Lc={};let rD=!1;function oD(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Pi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wp(r,s),a=o.repoInfo,c,u;typeof process!="undefined"&&(u=process.env[sD]),u?(c=!0,r=`http://${u}?ns=${a.namespace}`,o=Wp(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const d=s&&c?new wc(wc.OWNER):new yP(t.name,t.options,e);Bx("Invalid Firebase Database URL",o),_e(o.path)||Pi("Database URL must point to the root of a Firebase Database (not including a child path).");const f=lD(a,t,d,new vP(t.name,n));return new cD(f,t)}function aD(t,e){const n=Lc[e];(!n||n[t.key]!==t)&&Pi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xx(t),delete n[t.key]}function lD(t,e,n,i){let s=Lc[e.name];s||(s={},Lc[e.name]=s);let r=s[t.toURLString()];return r&&Pi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jx(t,rD,n,i),s[t.toURLString()]=r,r}class cD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pi("Cannot call "+e+" on a deleted database.")}}function eL(t=O_(),e){return Cu(t,"database").getImmediate({identifier:e})}/**
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
 */function uD(t){iP(Jr),Mr(new ms("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return oD(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Kn(cp,up,t),Kn(cp,up,"esm2017")}Cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uD();var Mc={exports:{}};(function(t,e){e=t.exports=n,e.getSerialize=i;function n(s,r,o,a){return JSON.stringify(s,i(r,a),o)}function i(s,r){var o=[],a=[];return r==null&&(r=function(c,u){return o[0]===u?"[Circular ~]":"[Circular ~."+a.slice(0,o.indexOf(u)).join(".")+"]"}),function(c,u){if(o.length>0){var d=o.indexOf(this);~d?o.splice(d+1):o.push(this),~d?a.splice(d,1/0,c):a.push(c),~o.indexOf(u)&&(u=r.call(this,c,u))}else o.push(u);return s==null?u:s.call(this,c,u)}}})(Mc,Mc.exports);var dD=Mc.exports,hD=function(){var t=4022871197,e=function(n){if(n){n=n.toString();for(var i=0;i<n.length;i++){t+=n.charCodeAt(i);var s=.02519603282416938*t;t=s>>>0,s-=t,s*=t,t=s>>>0,s-=t,t+=s*4294967296}return(t>>>0)*23283064365386963e-26}else t=4022871197};return e},$c=function(t){return function(){var e=48,n=1,i=e,s=new Array(e),r,o,a=0,c=new hD;for(r=0;r<e;r++)s[r]=c(Math.random());var u=function(){++i>=e&&(i=0);var p=1768863*s[i]+n*23283064365386963e-26;return s[i]=p-(n=p|0)},d=function(p){return Math.floor(p*(u()+(u()*2097152|0)*11102230246251565e-32))};d.string=function(p){var v,E="";for(v=0;v<p;v++)E+=String.fromCharCode(33+d(94));return E};var f=function(){var p=Array.prototype.slice.call(arguments);for(r=0;r<p.length;r++)for(o=0;o<e;o++)s[o]-=c(p[r]),s[o]<0&&(s[o]+=1)};return d.cleanString=function(p){return p=p.replace(/(^\s*)|(\s*$)/gi,""),p=p.replace(/[\x00-\x1F]/gi,""),p=p.replace(/\n /,`
`),p},d.hashString=function(p){for(p=d.cleanString(p),c(p),r=0;r<p.length;r++)for(a=p.charCodeAt(r),o=0;o<e;o++)s[o]-=c(a),s[o]<0&&(s[o]+=1)},d.seed=function(p){(typeof p=="undefined"||p===null)&&(p=Math.random()),typeof p!="string"&&(p=dD(p,function(v,E){return typeof E=="function"?E.toString():E})),d.initState(),d.hashString(p)},d.addEntropy=function(){var p=[];for(r=0;r<arguments.length;r++)p.push(arguments[r]);f(a+++new Date().getTime()+p.join("")+Math.random())},d.initState=function(){for(c(),r=0;r<e;r++)s[r]=c(" ");n=1,i=e},d.done=function(){c=null},typeof t!="undefined"&&d.seed(t),d.range=function(p){return d(p)},d.random=function(){return d(Number.MAX_VALUE-1)/Number.MAX_VALUE},d.floatBetween=function(p,v){return d.random()*(v-p)+p},d.intBetween=function(p,v){return Math.floor(d.random()*(v-p+1))+p},d}()};$c.create=function(t){return new $c(t)};var tL=$c;export{GD as A,ID as B,xD as C,AD as D,SD as E,_n as F,kD as G,RD as H,tL as I,VD as J,HD as K,UD as L,MD as M,$D as N,yc as S,BD as V,PD as a,Ug as b,MC as c,LD as d,Nt as e,Qw as f,BC as g,Tg as h,FD as i,zD as j,qD as k,WD as l,Bc as m,Uc as n,DC as o,eL as p,KD as q,ND as r,jD as s,XD as t,ZD as u,DD as v,OD as w,JD as x,YD as y,QD as z};
