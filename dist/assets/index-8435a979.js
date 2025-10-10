function _v(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function im(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rm={exports:{}},ml={},sm={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),xv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),Sv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),gf=Symbol.iterator;function Lv(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},om=Object.assign,lm={};function Es(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=Es.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}var ad=sd.prototype=new um;ad.constructor=sd;om(ad,Es.prototype);ad.isPureReactComponent=!0;var vf=Array.isArray,cm=Object.prototype.hasOwnProperty,od={current:null},dm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cm.call(e,i)&&!dm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:od.current}}function Pv(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function Rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _f=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rv(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case xv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Hl(a,0):i,vf(r)?(n="",t!=null&&(n=t.replace(_f,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(ld(r)&&(r=Pv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(_f,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Hl(s,o);a+=Co(s,e,n,l,r)}else if(l=Lv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Hl(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Wa(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Ao={transition:null},Nv={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:od};Ne.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=Es;Ne.Fragment=yv;Ne.Profiler=Mv;Ne.PureComponent=sd;Ne.StrictMode=Sv;Ne.Suspense=Tv;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)cm.call(e,l)&&!dm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};Ne.createContext=function(t){return t={$$typeof:Ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};Ne.createElement=fm;Ne.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:bv,render:t}};Ne.isValidElement=ld;Ne.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Dv}};Ne.memo=function(t,e){return{$$typeof:Cv,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=Ao.transition;Ao.transition={};try{t()}finally{Ao.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(t,e){return Vt.current.useCallback(t,e)};Ne.useContext=function(t){return Vt.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return Vt.current.useEffect(t,e)};Ne.useId=function(){return Vt.current.useId()};Ne.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return Vt.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};Ne.useRef=function(t){return Vt.current.useRef(t)};Ne.useState=function(t){return Vt.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return Vt.current.useTransition()};Ne.version="18.2.0";sm.exports=Ne;var q=sm.exports;const hm=im(q),Iv=_v({__proto__:null,default:hm},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=q,zv=Symbol.for("react.element"),Fv=Symbol.for("react.fragment"),Ov=Object.prototype.hasOwnProperty,Uv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bv={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ov.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zv,type:t,key:s,ref:a,props:r,_owner:Uv.current}}ml.Fragment=Fv;ml.jsx=pm;ml.jsxs=pm;rm.exports=ml;var b=rm.exports,Qu={},mm={exports:{}},dn={},gm={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var U=D.length;D.push(G);e:for(;0<U;){var ie=U-1>>>1,N=D[ie];if(0<r(N,G))D[ie]=G,D[U]=N,U=ie;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],U=D.pop();if(U!==G){D[0]=U;e:for(var ie=0,N=D.length,J=N>>>1;ie<J;){var ne=2*(ie+1)-1,F=D[ne],oe=ne+1,le=D[oe];if(0>r(F,U))oe<N&&0>r(le,F)?(D[ie]=le,D[oe]=U,ie=oe):(D[ie]=F,D[ne]=U,ie=ne);else if(oe<N&&0>r(le,U))D[ie]=le,D[oe]=U,ie=oe;else break e}}return G}function r(D,G){var U=D.sortIndex-G.sortIndex;return U!==0?U:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,c=null,d=3,g=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=D)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function y(D){if(p=!1,_(D),!x)if(n(l)!==null)x=!0,K(w);else{var G=n(u);G!==null&&Q(y,G.startTime-D)}}function w(D,G){x=!1,p&&(p=!1,m(S),S=-1),g=!0;var U=d;try{for(_(G),c=n(l);c!==null&&(!(c.expirationTime>G)||D&&!V());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,d=c.priorityLevel;var N=ie(c.expirationTime<=G);G=t.unstable_now(),typeof N=="function"?c.callback=N:c===n(l)&&i(l),_(G)}else i(l);c=n(l)}if(c!==null)var J=!0;else{var ne=n(u);ne!==null&&Q(y,ne.startTime-G),J=!1}return J}finally{c=null,d=U,g=!1}}var A=!1,L=null,S=-1,C=5,P=-1;function V(){return!(t.unstable_now()-P<C)}function Y(){if(L!==null){var D=t.unstable_now();P=D;var G=!0;try{G=L(!0,D)}finally{G?z():(A=!1,L=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(Y)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=Y,z=function(){j.postMessage(null)}}else z=function(){h(Y,0)};function K(D){L=D,A||(A=!0,z())}function Q(D,G){S=h(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,K(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var U=d;d=G;try{return D()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=d;d=D;try{return G()}finally{d=U}},t.unstable_scheduleCallback=function(D,G,U){var ie=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,D){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,D={id:f++,callback:G,priorityLevel:D,startTime:U,expirationTime:N,sortIndex:-1},U>ie?(D.sortIndex=U,e(u,D),n(l)===null&&D===n(u)&&(p?(m(S),S=-1):p=!0,Q(y,U-ie))):(D.sortIndex=N,e(l,D),x||g||(x=!0,K(w))),D},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(D){var G=d;return function(){var U=d;d=G;try{return D.apply(this,arguments)}finally{d=U}}}})(vm);gm.exports=vm;var Gv=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=q,cn=Gv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xm=new Set,ca={};function br(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(ca[t]=e,t=0;t<e.length;t++)xm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},yf={};function Wv(t){return Ju.call(yf,t)?!0:Ju.call(xf,t)?!1:Vv.test(t)?yf[t]=!0:(xf[t]=!0,!1)}function Hv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Hv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,cd);bt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,cd);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,cd);bt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=_m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),ym=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,jl;function qs(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var Xl=!1;function $l(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function Xv(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case Wr:return"Portal";case ec:return"Profiler";case fd:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sm:return(t.displayName||"Context")+".Consumer";case ym:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=qv(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rc(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bm(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function sc(t,e){bm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Ys(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function Tm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zv=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(t,e){if(e){if(Zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,ss=null,as=null;function Tf(t){if(t=Fa(t)){if(typeof fc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=yl(e),fc(t.stateNode,t.type,e))}}function Rm(t){ss?as?as.push(t):as=[t]:ss=t}function Dm(){if(ss){var t=ss,e=as;if(as=ss=null,Tf(t),e)for(t=0;t<e.length;t++)Tf(e[t])}}function Nm(t,e){return t(e)}function Im(){}var ql=!1;function km(t,e,n){if(ql)return t(e,n);ql=!0;try{return Nm(t,e,n)}finally{ql=!1,(ss!==null||as!==null)&&(Im(),Dm())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var hc=!1;if(mi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{hc=!1}function Kv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ta=!1,Go=null,Vo=!1,pc=null,Qv={onError:function(t){ta=!0,Go=t}};function Jv(t,e,n,i,r,s,a,o,l){ta=!1,Go=null,Kv.apply(Qv,arguments)}function e_(t,e,n,i,r,s,a,o,l){if(Jv.apply(this,arguments),ta){if(ta){var u=Go;ta=!1,Go=null}else throw Error(ee(198));Vo||(Vo=!0,pc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cf(t){if(Tr(t)!==t)throw Error(ee(188))}function t_(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cf(r),t;if(s===i)return Cf(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Fm(t){return t=t_(t),t!==null?Om(t):null}function Om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Om(t);if(e!==null)return e;t=t.sibling}return null}var Um=cn.unstable_scheduleCallback,Af=cn.unstable_cancelCallback,n_=cn.unstable_shouldYield,i_=cn.unstable_requestPaint,nt=cn.unstable_now,r_=cn.unstable_getCurrentPriorityLevel,gd=cn.unstable_ImmediatePriority,Bm=cn.unstable_UserBlockingPriority,Wo=cn.unstable_NormalPriority,s_=cn.unstable_LowPriority,Gm=cn.unstable_IdlePriority,gl=null,Yn=null;function a_(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:u_,o_=Math.log,l_=Math.LN2;function u_(t){return t>>>=0,t===0?32:31-(o_(t)/l_|0)|0}var $a=64,qa=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ho(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Zs(o):(s&=a,s!==0&&(i=Zs(s)))}else a=n&~r,a!==0?i=Zs(a):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function c_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-In(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=c_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vm(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function f_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function Wm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hm,_d,jm,Xm,$m,gc=!1,Ya=[],Ii=null,ki=null,zi=null,ha=new Map,pa=new Map,Ai=[],h_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&_d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p_(t,e,n,i,r){switch(e){case"focusin":return Ii=Is(Ii,t,e,n,i,r),!0;case"dragenter":return ki=Is(ki,t,e,n,i,r),!0;case"mouseover":return zi=Is(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,Is(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Is(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function qm(t){var e=or(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=zm(n),e!==null){t.blockedOn=e,$m(t.priority,function(){jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dc=i,n.target.dispatchEvent(i),dc=null}else return e=Fa(n),e!==null&&_d(e),t.blockedOn=n,!1;e.shift()}return!0}function Pf(t,e,n){Lo(t)&&n.delete(e)}function m_(){gc=!1,Ii!==null&&Lo(Ii)&&(Ii=null),ki!==null&&Lo(ki)&&(ki=null),zi!==null&&Lo(zi)&&(zi=null),ha.forEach(Pf),pa.forEach(Pf)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,gc||(gc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,m_)))}function ma(t){function e(r){return ks(r,t)}if(0<Ya.length){ks(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&ks(Ii,t),ki!==null&&ks(ki,t),zi!==null&&ks(zi,t),ha.forEach(e),pa.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)qm(n),n.blockedOn===null&&Ai.shift()}var os=xi.ReactCurrentBatchConfig,jo=!0;function g_(t,e,n,i){var r=Ge,s=os.transition;os.transition=null;try{Ge=1,xd(t,e,n,i)}finally{Ge=r,os.transition=s}}function v_(t,e,n,i){var r=Ge,s=os.transition;os.transition=null;try{Ge=4,xd(t,e,n,i)}finally{Ge=r,os.transition=s}}function xd(t,e,n,i){if(jo){var r=vc(t,e,n,i);if(r===null)su(t,e,i,Xo,n),Lf(t,i);else if(p_(r,t,e,n,i))i.stopPropagation();else if(Lf(t,i),e&4&&-1<h_.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&Hm(s),s=vc(t,e,n,i),s===null&&su(t,e,i,Xo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(t,e,i,null,n)}}var Xo=null;function vc(t,e,n,i){if(Xo=null,t=md(i),t=or(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function Ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r_()){case gd:return 1;case Bm:return 4;case Wo:case s_:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var Pi=null,yd=null,Po=null;function Zm(){if(Po)return Po;var t,e=yd,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Po=r.slice(t,1<i?1-i:void 0)}function Ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Rf(){return!1}function fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Rf,this.isPropagationStopped=Rf,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=fn(bs),za=Je({},bs,{view:0,detail:0}),__=fn(za),Zl,Kl,zs,vl=Je({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Zl=t.screenX-zs.screenX,Kl=t.screenY-zs.screenY):Kl=Zl=0,zs=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Df=fn(vl),x_=Je({},vl,{dataTransfer:0}),y_=fn(x_),S_=Je({},za,{relatedTarget:0}),Ql=fn(S_),M_=Je({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=fn(M_),E_=Je({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=fn(E_),T_=Je({},bs,{data:0}),Nf=fn(T_),C_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L_[t])?!!e[t]:!1}function Md(){return P_}var R_=Je({},za,{key:function(t){if(t.key){var e=C_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D_=fn(R_),N_=Je({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=fn(N_),I_=Je({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),k_=fn(I_),z_=Je({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=fn(z_),O_=Je({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U_=fn(O_),B_=[9,13,27,32],wd=mi&&"CompositionEvent"in window,na=null;mi&&"documentMode"in document&&(na=document.documentMode);var G_=mi&&"TextEvent"in window&&!na,Km=mi&&(!wd||na&&8<na&&11>=na),kf=String.fromCharCode(32),zf=!1;function Qm(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function V_(t,e){switch(t){case"compositionend":return Jm(e);case"keypress":return e.which!==32?null:(zf=!0,kf);case"textInput":return t=e.data,t===kf&&zf?null:t;default:return null}}function W_(t,e){if(jr)return t==="compositionend"||!wd&&Qm(t,e)?(t=Zm(),Po=yd=Pi=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var H_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H_[t.type]:e==="textarea"}function eg(t,e,n,i){Rm(i),e=$o(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ia=null,ga=null;function j_(t){dg(t,0)}function _l(t){var e=qr(t);if(Em(e))return t}function X_(t,e){if(t==="change")return e}var tg=!1;if(mi){var Jl;if(mi){var eu="oninput"in document;if(!eu){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),eu=typeof Of.oninput=="function"}Jl=eu}else Jl=!1;tg=Jl&&(!document.documentMode||9<document.documentMode)}function Uf(){ia&&(ia.detachEvent("onpropertychange",ng),ga=ia=null)}function ng(t){if(t.propertyName==="value"&&_l(ga)){var e=[];eg(e,ga,t,md(t)),km(j_,e)}}function $_(t,e,n){t==="focusin"?(Uf(),ia=e,ga=n,ia.attachEvent("onpropertychange",ng)):t==="focusout"&&Uf()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(ga)}function Y_(t,e){if(t==="click")return _l(e)}function Z_(t,e){if(t==="input"||t==="change")return _l(e)}function K_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:K_;function va(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,e){var n=Bf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rg(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=rg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(i!==null&&Ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gf(n,s);var a=Gf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J_=mi&&"documentMode"in document&&11>=document.documentMode,Xr=null,_c=null,ra=null,xc=!1;function Vf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Xr==null||Xr!==Bo(i)||(i=Xr,"selectionStart"in i&&Ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&va(ra,i)||(ra=i,i=$o(_c,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xr)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},tu={},sg={};mi&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function xl(t){if(tu[t])return tu[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sg)return tu[t]=e[n];return t}var ag=xl("animationend"),og=xl("animationiteration"),lg=xl("animationstart"),ug=xl("transitionend"),cg=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){cg.set(t,e),br(e,[t])}for(var nu=0;nu<Wf.length;nu++){var iu=Wf[nu],ex=iu.toLowerCase(),tx=iu[0].toUpperCase()+iu.slice(1);Xi(ex,"on"+tx)}Xi(ag,"onAnimationEnd");Xi(og,"onAnimationIteration");Xi(lg,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(ug,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function Hf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e_(i,e,void 0,t),t.currentTarget=null}function dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,o,u),s=l}}}if(Vo)throw t=pc,Vo=!1,pc=null,t}function je(t,e){var n=e[Ec];n===void 0&&(n=e[Ec]=new Set);var i=t+"__bubble";n.has(i)||(fg(e,t,2,!1),n.add(i))}function ru(t,e,n){var i=0;e&&(i|=4),fg(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[Qa]){t[Qa]=!0,xm.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||ru(n,!1,t),ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,ru("selectionchange",!1,e))}}function fg(t,e,n,i){switch(Ym(e)){case 1:var r=g_;break;case 4:r=v_;break;default:r=xd}n=r.bind(null,e,n,t),r=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=or(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}km(function(){var u=s,f=md(n),c=[];e:{var d=cg.get(t);if(d!==void 0){var g=Sd,x=t;switch(t){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=D_;break;case"focusin":x="focus",g=Ql;break;case"focusout":x="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=k_;break;case ag:case og:case lg:g=w_;break;case ug:g=F_;break;case"scroll":g=__;break;case"wheel":g=U_;break;case"copy":case"cut":case"paste":g=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,m!==null&&(y=fa(v,m),y!=null&&p.push(xa(v,y,_)))),h)break;v=v.return}0<p.length&&(d=new g(d,x,null,n,f),c.push({event:d,listeners:p}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==dc&&(x=n.relatedTarget||n.fromElement)&&(or(x)||x[gi]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?or(x):null,x!==null&&(h=Tr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(p=Df,y="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=If,y="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:qr(g),_=x==null?d:qr(x),d=new p(y,v+"leave",g,n,f),d.target=h,d.relatedTarget=_,y=null,or(f)===u&&(p=new p(m,v+"enter",x,n,f),p.target=_,p.relatedTarget=h,y=p),h=y,g&&x)t:{for(p=g,m=x,v=0,_=p;_;_=Ar(_))v++;for(_=0,y=m;y;y=Ar(y))_++;for(;0<v-_;)p=Ar(p),v--;for(;0<_-v;)m=Ar(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Ar(p),m=Ar(m)}p=null}else p=null;g!==null&&jf(c,d,g,p,!1),x!==null&&h!==null&&jf(c,h,x,p,!0)}}e:{if(d=u?qr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var w=X_;else if(Ff(d))if(tg)w=Z_;else{w=q_;var A=$_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=Y_);if(w&&(w=w(t,u))){eg(c,w,n,f);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ac(d,"number",d.value)}switch(A=u?qr(u):window,t){case"focusin":(Ff(A)||A.contentEditable==="true")&&(Xr=A,_c=u,ra=null);break;case"focusout":ra=_c=Xr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Vf(c,n,f);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":Vf(c,n,f)}var L;if(wd)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else jr?Qm(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Km&&n.locale!=="ko"&&(jr||S!=="onCompositionStart"?S==="onCompositionEnd"&&jr&&(L=Zm()):(Pi=f,yd="value"in Pi?Pi.value:Pi.textContent,jr=!0)),A=$o(u,S),0<A.length&&(S=new Nf(S,t,null,n,f),c.push({event:S,listeners:A}),L?S.data=L:(L=Jm(n),L!==null&&(S.data=L)))),(L=G_?V_(t,n):W_(t,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(f=new Nf("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=L))}dg(c,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $o(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(xa(t,s,r)),s=fa(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=fa(n,s),l!=null&&a.unshift(xa(n,l,o))):r||(l=fa(n,s),l!=null&&a.push(xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function Ja(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(ee(425))}function qo(){}var yc=null,Sc=null;function Mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(ox)}:wc;function ox(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ts,ya="__reactProps$"+Ts,gi="__reactContainer$"+Ts,Ec="__reactEvents$"+Ts,lx="__reactListeners$"+Ts,ux="__reactHandles$"+Ts;function or(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qf(t);t!==null;){if(n=t[jn])return n;t=qf(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[jn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function yl(t){return t[ya]||null}var bc=[],Yr=-1;function $i(t){return{current:t}}function $e(t){0>Yr||(t.current=bc[Yr],bc[Yr]=null,Yr--)}function Ve(t,e){Yr++,bc[Yr]=t.current,t.current=e}var Hi={},Nt=$i(Hi),$t=$i(!1),gr=Hi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qt(t){return t=t.childContextTypes,t!=null}function Yo(){$e($t),$e(Nt)}function Yf(t,e,n){if(Nt.current!==Hi)throw Error(ee(168));Ve(Nt,e),Ve($t,n)}function hg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,$v(t)||"Unknown",r));return Je({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,gr=Nt.current,Ve(Nt,t),Ve($t,$t.current),!0}function Zf(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=hg(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,$e($t),$e(Nt),Ve(Nt,t)):$e($t),Ve($t,n)}var si=null,Sl=!1,ou=!1;function pg(t){si===null?si=[t]:si.push(t)}function cx(t){Sl=!0,pg(t)}function qi(){if(!ou&&si!==null){ou=!0;var t=0,e=Ge;try{var n=si;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Sl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Um(gd,qi),r}finally{Ge=e,ou=!1}}return null}var Zr=[],Kr=0,Ko=null,Qo=0,gn=[],vn=0,vr=null,li=1,ui="";function nr(t,e){Zr[Kr++]=Qo,Zr[Kr++]=Ko,Ko=t,Qo=e}function mg(t,e,n){gn[vn++]=li,gn[vn++]=ui,gn[vn++]=vr,vr=t;var i=li;t=ui;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-In(e)+r|n<<r|i,ui=s+t}else li=1<<s|n<<r|i,ui=t}function bd(t){t.return!==null&&(nr(t,1),mg(t,1,0))}function Td(t){for(;t===Ko;)Ko=Zr[--Kr],Zr[Kr]=null,Qo=Zr[--Kr],Zr[Kr]=null;for(;t===vr;)vr=gn[--vn],gn[vn]=null,ui=gn[--vn],gn[vn]=null,li=gn[--vn],gn[vn]=null}var an=null,sn=null,Ye=!1,Rn=null;function gg(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:li,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(Ye){var e=sn;if(e){var n=e;if(!Kf(t,e)){if(Tc(t))throw Error(ee(418));e=Fi(n.nextSibling);var i=an;e&&Kf(t,e)?gg(i,n):(t.flags=t.flags&-4097|2,Ye=!1,an=t)}}else{if(Tc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,Ye=!1,an=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function eo(t){if(t!==an)return!1;if(!Ye)return Qf(t),Ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mc(t.type,t.memoizedProps)),e&&(e=sn)){if(Tc(t))throw vg(),Error(ee(418));for(;e;)gg(t,e),e=Fi(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?Fi(t.stateNode.nextSibling):null;return!0}function vg(){for(var t=sn;t;)t=Fi(t.nextSibling)}function ms(){sn=an=null,Ye=!1}function Cd(t){Rn===null?Rn=[t]:Rn.push(t)}var dx=xi.ReactCurrentBatchConfig;function Ln(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jo=$i(null),el=null,Qr=null,Ad=null;function Ld(){Ad=Qr=el=null}function Pd(t){var e=Jo.current;$e(Jo),t._currentValue=e}function Ac(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){el=t,Ad=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(el===null)throw Error(ee(308));Qr=t,el.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var lr=null;function Rd(t){lr===null?lr=[t]:lr.push(t)}function _g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function Dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Fe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}function Jf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;a=0,f=u=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,p=o;switch(d=e,g=n,p.tag){case 1:if(x=p.payload,typeof x=="function"){c=x.call(g,c,d);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,d=typeof x=="function"?x.call(g,c,d):x,d==null)break e;c=Je({},c,d);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=c):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xr|=a,t.lanes=a,t.memoizedState=c}}function eh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var yg=new _m.Component().refs;function Lc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Bi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(kn(e,t,r,i),Do(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Bi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(kn(e,t,r,i),Do(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Bi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(kn(e,t,i,n),Do(e,t,i))}};function th(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function Sg(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=qt(e)?gr:Nt.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function nh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=yg,Dd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=qt(e)?gr:Nt.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ml.enqueueReplaceState(r,r.state,null),tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===yg&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ih(t){var e=t._init;return e(t._payload)}function Mg(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Gi(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function a(m){return t&&m.alternate===null&&(m.flags|=2),m}function o(m,v,_,y){return v===null||v.tag!==6?(v=pu(_,m.mode,y),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,y){var w=_.type;return w===Hr?f(m,v,_.props.children,y,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ti&&ih(w)===v.type)?(y=r(v,_.props),y.ref=Fs(m,v,_),y.return=m,y):(y=Oo(_.type,_.key,_.props,null,m.mode,y),y.ref=Fs(m,v,_),y.return=m,y)}function u(m,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=mu(_,m.mode,y),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function f(m,v,_,y,w){return v===null||v.tag!==7?(v=hr(_,m.mode,y,w),v.return=m,v):(v=r(v,_),v.return=m,v)}function c(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pu(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return _=Oo(v.type,v.key,v.props,null,m.mode,_),_.ref=Fs(m,null,v),_.return=m,_;case Wr:return v=mu(v,m.mode,_),v.return=m,v;case Ti:var y=v._init;return c(m,y(v._payload),_)}if(Ys(v)||Ds(v))return v=hr(v,m.mode,_,null),v.return=m,v;to(m,v)}return null}function d(m,v,_,y){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:o(m,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:return _.key===w?l(m,v,_,y):null;case Wr:return _.key===w?u(m,v,_,y):null;case Ti:return w=_._init,d(m,v,w(_._payload),y)}if(Ys(_)||Ds(_))return w!==null?null:f(m,v,_,y,null);to(m,_)}return null}function g(m,v,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(_)||null,o(v,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ha:return m=m.get(y.key===null?_:y.key)||null,l(v,m,y,w);case Wr:return m=m.get(y.key===null?_:y.key)||null,u(v,m,y,w);case Ti:var A=y._init;return g(m,v,_,A(y._payload),w)}if(Ys(y)||Ds(y))return m=m.get(_)||null,f(v,m,y,w,null);to(v,y)}return null}function x(m,v,_,y){for(var w=null,A=null,L=v,S=v=0,C=null;L!==null&&S<_.length;S++){L.index>S?(C=L,L=null):C=L.sibling;var P=d(m,L,_[S],y);if(P===null){L===null&&(L=C);break}t&&L&&P.alternate===null&&e(m,L),v=s(P,v,S),A===null?w=P:A.sibling=P,A=P,L=C}if(S===_.length)return n(m,L),Ye&&nr(m,S),w;if(L===null){for(;S<_.length;S++)L=c(m,_[S],y),L!==null&&(v=s(L,v,S),A===null?w=L:A.sibling=L,A=L);return Ye&&nr(m,S),w}for(L=i(m,L);S<_.length;S++)C=g(L,m,S,_[S],y),C!==null&&(t&&C.alternate!==null&&L.delete(C.key===null?S:C.key),v=s(C,v,S),A===null?w=C:A.sibling=C,A=C);return t&&L.forEach(function(V){return e(m,V)}),Ye&&nr(m,S),w}function p(m,v,_,y){var w=Ds(_);if(typeof w!="function")throw Error(ee(150));if(_=w.call(_),_==null)throw Error(ee(151));for(var A=w=null,L=v,S=v=0,C=null,P=_.next();L!==null&&!P.done;S++,P=_.next()){L.index>S?(C=L,L=null):C=L.sibling;var V=d(m,L,P.value,y);if(V===null){L===null&&(L=C);break}t&&L&&V.alternate===null&&e(m,L),v=s(V,v,S),A===null?w=V:A.sibling=V,A=V,L=C}if(P.done)return n(m,L),Ye&&nr(m,S),w;if(L===null){for(;!P.done;S++,P=_.next())P=c(m,P.value,y),P!==null&&(v=s(P,v,S),A===null?w=P:A.sibling=P,A=P);return Ye&&nr(m,S),w}for(L=i(m,L);!P.done;S++,P=_.next())P=g(L,m,S,P.value,y),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?S:P.key),v=s(P,v,S),A===null?w=P:A.sibling=P,A=P);return t&&L.forEach(function(Y){return e(m,Y)}),Ye&&nr(m,S),w}function h(m,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Hr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:e:{for(var w=_.key,A=v;A!==null;){if(A.key===w){if(w=_.type,w===Hr){if(A.tag===7){n(m,A.sibling),v=r(A,_.props.children),v.return=m,m=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ti&&ih(w)===A.type){n(m,A.sibling),v=r(A,_.props),v.ref=Fs(m,A,_),v.return=m,m=v;break e}n(m,A);break}else e(m,A);A=A.sibling}_.type===Hr?(v=hr(_.props.children,m.mode,y,_.key),v.return=m,m=v):(y=Oo(_.type,_.key,_.props,null,m.mode,y),y.ref=Fs(m,v,_),y.return=m,m=y)}return a(m);case Wr:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=mu(_,m.mode,y),v.return=m,m=v}return a(m);case Ti:return A=_._init,h(m,v,A(_._payload),y)}if(Ys(_))return x(m,v,_,y);if(Ds(_))return p(m,v,_,y);to(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=pu(_,m.mode,y),v.return=m,m=v),a(m)):n(m,v)}return h}var gs=Mg(!0),wg=Mg(!1),Oa={},Zn=$i(Oa),Sa=$i(Oa),Ma=$i(Oa);function ur(t){if(t===Oa)throw Error(ee(174));return t}function Nd(t,e){switch(Ve(Ma,e),Ve(Sa,t),Ve(Zn,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lc(e,t)}$e(Zn),Ve(Zn,e)}function vs(){$e(Zn),$e(Sa),$e(Ma)}function Eg(t){ur(Ma.current);var e=ur(Zn.current),n=lc(e,t.type);e!==n&&(Ve(Sa,t),Ve(Zn,n))}function Id(t){Sa.current===t&&($e(Zn),$e(Sa))}var Ke=$i(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lu=[];function kd(){for(var t=0;t<lu.length;t++)lu[t]._workInProgressVersionPrimary=null;lu.length=0}var No=xi.ReactCurrentDispatcher,uu=xi.ReactCurrentBatchConfig,_r=0,Qe=null,lt=null,xt=null,il=!1,sa=!1,wa=0,fx=0;function Ct(){throw Error(ee(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(_r=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?gx:vx,t=n(i,r),sa){s=0;do{if(sa=!1,wa=0,25<=s)throw Error(ee(301));s+=1,xt=lt=null,e.updateQueue=null,No.current=_x,t=n(i,r)}while(sa)}if(No.current=rl,e=lt!==null&&lt.next!==null,_r=0,xt=lt=Qe=null,il=!1,e)throw Error(ee(300));return t}function Od(){var t=wa!==0;return wa=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Qe.memoizedState=xt=t:xt=xt.next=t,xt}function Mn(){if(lt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=xt===null?Qe.memoizedState:xt.next;if(e!==null)xt=e,lt=t;else{if(t===null)throw Error(ee(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},xt===null?Qe.memoizedState=xt=t:xt=xt.next=t}return xt}function Ea(t,e){return typeof e=="function"?e(t):e}function cu(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((_r&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=c,a=i):l=l.next=c,Qe.lanes|=f,xr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,zn(i,e.memoizedState)||(Xt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Qe.lanes|=s,xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bg(){}function Tg(t,e){var n=Qe,i=Mn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Xt=!0),i=i.queue,Ud(Lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,ba(9,Ag.bind(null,n,i,r,e),void 0,null),St===null)throw Error(ee(349));_r&30||Cg(n,e,r)}return r}function Cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ag(t,e,n,i){e.value=n,e.getSnapshot=i,Pg(e)&&Rg(t)}function Lg(t,e,n){return n(function(){Pg(e)&&Rg(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Rg(t){var e=vi(t,1);e!==null&&kn(e,t,1,-1)}function rh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,Qe,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Dg(){return Mn().memoizedState}function Io(t,e,n,i){var r=Vn();Qe.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function wl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(lt!==null){var a=lt.memoizedState;if(s=a.destroy,i!==null&&zd(i,a.deps)){r.memoizedState=ba(e,n,s,i);return}}Qe.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function sh(t,e){return Io(8390656,8,t,e)}function Ud(t,e){return wl(2048,8,t,e)}function Ng(t,e){return wl(4,2,t,e)}function Ig(t,e){return wl(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,kg.bind(null,e,t),n)}function Bd(){}function Fg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Og(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ug(t,e,n){return _r&21?(zn(n,e)||(n=Vm(),Qe.lanes|=n,xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function hx(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=uu.transition;uu.transition={};try{t(!1),e()}finally{Ge=n,uu.transition=i}}function Bg(){return Mn().memoizedState}function px(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Vg(e,n);else if(n=_g(t,e,n,i),n!==null){var r=Gt();kn(n,t,i,r),Wg(n,e,i)}}function mx(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Vg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var l=e.interleaved;l===null?(r.next=r,Rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_g(t,e,r,i),n!==null&&(r=Gt(),kn(n,t,i,r),Wg(n,e,i))}}function Gg(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function Vg(t,e){sa=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}var rl={readContext:Sn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},gx={readContext:Sn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=px.bind(null,Qe,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:rh,useDebugValue:Bd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=rh(!1),e=t[0];return t=hx.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Qe,r=Vn();if(Ye){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),St===null)throw Error(ee(349));_r&30||Cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sh(Lg.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,Ag.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=St.identifierPrefix;if(Ye){var n=ui,i=li;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:Sn,useCallback:Fg,useContext:Sn,useEffect:Ud,useImperativeHandle:zg,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:Og,useReducer:cu,useRef:Dg,useState:function(){return cu(Ea)},useDebugValue:Bd,useDeferredValue:function(t){var e=Mn();return Ug(e,lt.memoizedState,t)},useTransition:function(){var t=cu(Ea)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Tg,useId:Bg,unstable_isNewReconciler:!1},_x={readContext:Sn,useCallback:Fg,useContext:Sn,useEffect:Ud,useImperativeHandle:zg,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:Og,useReducer:du,useRef:Dg,useState:function(){return du(Ea)},useDebugValue:Bd,useDeferredValue:function(t){var e=Mn();return lt===null?e.memoizedState=t:Ug(e,lt.memoizedState,t)},useTransition:function(){var t=du(Ea)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Tg,useId:Bg,unstable_isNewReconciler:!1};function _s(t,e){try{var n="",i=e;do n+=Xv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){al||(al=!0,Gc=i),Rc(t,e)},n}function jg(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var yx=xi.ReactCurrentOwner,Xt=!1;function Ot(t,e,n,i){e.child=t===null?wg(e,null,n,i):gs(e,t.child,n,i)}function uh(t,e,n,i,r){n=n.render;var s=e.ref;return ls(e,r),i=Fd(t,e,n,i,s,r),n=Od(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(Ye&&n&&bd(e),e.flags|=1,Ot(t,e,i,r),e.child)}function ch(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xg(t,e,s,i,r)):(t=Oo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Xg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Dc(t,e,n,i,r)}function $g(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(es,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(es,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ve(es,nn),nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ve(es,nn),nn|=i;return Ot(t,e,r,n),e.child}function qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dc(t,e,n,i,r){var s=qt(n)?gr:Nt.current;return s=ps(e,s),ls(e,r),n=Fd(t,e,n,i,s,r),i=Od(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(Ye&&i&&bd(e),e.flags|=1,Ot(t,e,n,r),e.child)}function dh(t,e,n,i,r){if(qt(n)){var s=!0;Zo(e)}else s=!1;if(ls(e,r),e.stateNode===null)ko(t,e),Sg(e,n,i),Pc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=qt(n)?gr:Nt.current,u=ps(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&nh(e,a,i,u),Ci=!1;var d=e.memoizedState;a.state=d,tl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||$t.current||Ci?(typeof f=="function"&&(Lc(e,n,f,i),l=e.memoizedState),(o=Ci||th(e,n,o,i,d,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,xg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,c=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=qt(n)?gr:Nt.current,l=ps(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==c||d!==l)&&nh(e,a,i,l),Ci=!1,d=e.memoizedState,a.state=d,tl(e,i,a,r);var x=e.memoizedState;o!==c||d!==x||$t.current||Ci?(typeof g=="function"&&(Lc(e,n,g,i),x=e.memoizedState),(u=Ci||th(e,n,u,i,d,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Nc(t,e,n,i,s,r)}function Nc(t,e,n,i,r,s){qg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zf(e,n,!1),_i(t,e,s);i=e.stateNode,yx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,o,s)):Ot(t,e,o,s),e.memoizedState=i.state,r&&Zf(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?Yf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yf(t,e.context,!1),Nd(t,e.containerInfo)}function fh(t,e,n,i,r){return ms(),Cd(r),e.flags|=256,Ot(t,e,n,i),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zg(t,e,n){var i=e.pendingProps,r=Ke.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ve(Ke,r&1),t===null)return Cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Tl(a,i,0,null),t=hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kc(n),e.memoizedState=Ic,t):Gd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=hr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?kc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ic,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gd(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&Cd(i),gs(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(ee(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tl({mode:"visible",children:i.children},r,0,null),s=hr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,a),e.child.memoizedState=kc(a),e.memoizedState=Ic,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=fu(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,Xt||o){if(i=St,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),kn(i,t,r,-1))}return $d(),i=fu(Error(ee(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,sn=Fi(r.nextSibling),an=e,Ye=!0,Rn=null,t!==null&&(gn[vn++]=li,gn[vn++]=ui,gn[vn++]=vr,li=t.id,ui=t.overflow,vr=e),e=Gd(e,i.children),e.flags|=4096,e)}function hh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ac(t.return,e,n)}function hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Kg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ot(t,e,i.children,n),i=Ke.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hh(t,n,e);else if(t.tag===19)hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ve(Ke,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hu(e,!0,n,null,s);break;case"together":hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:Yg(e),ms();break;case 5:Eg(e);break;case 1:qt(e.type)&&Zo(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Jo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?Zg(t,e,n):(Ve(Ke,Ke.current&1),t=_i(t,e,n),t!==null?t.sibling:null);Ve(Ke,Ke.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Kg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,$g(t,e,n)}return _i(t,e,n)}var Qg,zc,Jg,e0;Qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};Jg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Zn.current);var s=null;switch(n){case"input":r=rc(t,r),i=rc(t,i),s=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),s=[];break;case"textarea":r=oc(t,r),i=oc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qo)}uc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};e0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!Ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wx(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return qt(e.type)&&Yo(),At(e),null;case 3:return i=e.stateNode,vs(),$e($t),$e(Nt),kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Hc(Rn),Rn=null))),zc(t,e),At(e),null;case 5:Id(e);var r=ur(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Jg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return At(e),null}if(t=ur(Zn.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<Ks.length;r++)je(Ks[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":Mf(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":Ef(i,s),je("invalid",i)}uc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&je("scroll",i)}switch(n){case"input":ja(i),wf(i,s,!0);break;case"textarea":ja(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[jn]=e,t[ya]=i,Qg(t,e,!1,!1),e.stateNode=t;e:{switch(a=cc(n,i),n){case"dialog":je("cancel",t),je("close",t),r=i;break;case"iframe":case"object":case"embed":je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ks.length;r++)je(Ks[r],t);r=i;break;case"source":je("error",t),r=i;break;case"img":case"image":case"link":je("error",t),je("load",t),r=i;break;case"details":je("toggle",t),r=i;break;case"input":Mf(t,i),r=rc(t,i),je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),je("invalid",t);break;case"textarea":Ef(t,i),r=oc(t,i),je("invalid",t);break;default:r=i}uc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Am(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&dd(t,s,l,a))}switch(n){case"input":ja(t),wf(t,i,!1);break;case"textarea":ja(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=ur(Ma.current),ur(Zn.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return At(e),null;case 13:if($e(Ke),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&sn!==null&&e.mode&1&&!(e.flags&128))vg(),ms(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[jn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Rn!==null&&(Hc(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?ut===0&&(ut=3):$d())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return vs(),zc(t,e),t===null&&_a(e.stateNode.containerInfo),At(e),null;case 10:return Pd(e.type._context),At(e),null;case 17:return qt(e.type)&&Yo(),At(e),null;case 19:if($e(Ke),s=e.memoizedState,s===null)return At(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Os(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=nl(t),a!==null){for(e.flags|=128,Os(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>xs&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ye)return At(e),null}else 2*nt()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=Ke.current,Ve(Ke,i?n&1|2:n&1),e):(At(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?nn&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Ex(t,e){switch(Td(e),e.tag){case 1:return qt(e.type)&&Yo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),$e($t),$e(Nt),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if($e(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(Ke),null;case 4:return vs(),null;case 10:return Pd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var io=!1,Rt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,de=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){et(t,e,i)}else n.current=null}function Fc(t,e,n){try{n()}catch(i){et(t,e,i)}}var ph=!1;function Tx(t,e){if(yc=jo,t=rg(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var g;c!==n||r!==0&&c.nodeType!==3||(o=a+r),c!==s||i!==0&&c.nodeType!==3||(l=a+i),c.nodeType===3&&(a+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++f===i&&(l=a),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},jo=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Ln(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=ph,ph=!1,x}function aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fc(e,n,s)}r=r.next}while(r!==i)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[ya],delete e[Ec],delete e[lx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(i!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Bc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var wt=null,Pn=!1;function Si(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Rt||Jr(n,e);case 6:var i=wt,r=Pn;wt=null,Si(t,e,n),wt=i,Pn=r,wt!==null&&(Pn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Pn?(t=wt,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),ma(t)):au(wt,n.stateNode));break;case 4:i=wt,r=Pn,wt=n.stateNode.containerInfo,Pn=!0,Si(t,e,n),wt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fc(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Rt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){et(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Rt=(i=Rt)||n.memoizedState!==null,Si(t,e,n),Rt=i):Si(t,e,n);break;default:Si(t,e,n)}}function gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:wt=o.stateNode,Pn=!1;break e;case 3:wt=o.stateNode.containerInfo,Pn=!0;break e;case 4:wt=o.stateNode.containerInfo,Pn=!0;break e}o=o.return}if(wt===null)throw Error(ee(160));i0(s,a,r),wt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Bn(t),i&4){try{aa(3,t,t.return),El(3,t)}catch(p){et(t,t.return,p)}try{aa(5,t,t.return)}catch(p){et(t,t.return,p)}}break;case 1:bn(e,t),Bn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(bn(e,t),Bn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(p){et(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&bm(r,s),cc(o,a);var u=cc(o,s);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?Pm(r,c):f==="dangerouslySetInnerHTML"?Am(r,c):f==="children"?da(r,c):dd(r,f,c,u)}switch(o){case"input":sc(r,s);break;case"textarea":Tm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?rs(r,!!s.multiple,s.defaultValue,!0):rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(p){et(t,t.return,p)}}break;case 6:if(bn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){et(t,t.return,p)}}break;case 3:if(bn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(p){et(t,t.return,p)}break;case 4:bn(e,t),Bn(t);break;case 13:bn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=nt())),i&4&&gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||f,bn(e,t),Rt=u):bn(e,t),Bn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(c=de=f;de!==null;){switch(d=de,g=d.child,d.tag){case 0:case 11:case 14:case 15:aa(4,d,d.return);break;case 1:Jr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){et(i,n,p)}}break;case 5:Jr(d,d.return);break;case 22:if(d.memoizedState!==null){_h(c);continue}}g!==null?(g.return=d,de=g):_h(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Lm("display",a))}catch(p){et(t,t.return,p)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(p){et(t,t.return,p)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:bn(e,t),Bn(t),i&4&&gh(t);break;case 21:break;default:bn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=mh(t);Bc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mh(t);Uc(t,o,a);break;default:throw Error(ee(161))}}catch(l){et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t,e,n){de=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Rt;o=io;var u=Rt;if(io=a,(Rt=l)&&!u)for(de=r;de!==null;)a=de,l=a.child,a.tag===22&&a.memoizedState!==null?xh(r):l!==null?(l.return=a,de=l):xh(r);for(;s!==null;)de=s,s0(s),s=s.sibling;de=r,io=o,Rt=u}vh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):vh(t)}}function vh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||El(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&eh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}eh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ma(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Rt||e.flags&512&&Oc(e)}catch(d){et(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function _h(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function xh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){et(e,r,l)}}var s=e.return;try{Oc(e)}catch(l){et(e,s,l)}break;case 5:var a=e.return;try{Oc(e)}catch(l){et(e,a,l)}}}catch(l){et(e,e.return,l)}if(e===t){de=null;break}var o=e.sibling;if(o!==null){o.return=e.return,de=o;break}de=e.return}}var Ax=Math.ceil,sl=xi.ReactCurrentDispatcher,Vd=xi.ReactCurrentOwner,yn=xi.ReactCurrentBatchConfig,Fe=0,St=null,ot=null,Et=0,nn=0,es=$i(0),ut=0,Ta=null,xr=0,bl=0,Wd=0,oa=null,Ht=null,Hd=0,xs=1/0,ri=null,al=!1,Gc=null,Ui=null,ro=!1,Ri=null,ol=0,la=0,Vc=null,zo=-1,Fo=0;function Gt(){return Fe&6?nt():zo!==-1?zo:zo=nt()}function Bi(t){return t.mode&1?Fe&2&&Et!==0?Et&-Et:dx.transition!==null?(Fo===0&&(Fo=Vm()),Fo):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:Ym(t.type)),t):1}function kn(t,e,n,i){if(50<la)throw la=0,Vc=null,Error(ee(185));ka(t,n,i),(!(Fe&2)||t!==St)&&(t===St&&(!(Fe&2)&&(bl|=n),ut===4&&Li(t,Et)),Yt(t,i),n===1&&Fe===0&&!(e.mode&1)&&(xs=nt()+500,Sl&&qi()))}function Yt(t,e){var n=t.callbackNode;d_(t,e);var i=Ho(t,t===St?Et:0);if(i===0)n!==null&&Af(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Af(n),e===1)t.tag===0?cx(yh.bind(null,t)):pg(yh.bind(null,t)),ax(function(){!(Fe&6)&&qi()}),n=null;else{switch(Wm(i)){case 1:n=gd;break;case 4:n=Bm;break;case 16:n=Wo;break;case 536870912:n=Gm;break;default:n=Wo}n=h0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(zo=-1,Fo=0,Fe&6)throw Error(ee(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Ho(t,t===St?Et:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ll(t,i);else{e=i;var r=Fe;Fe|=2;var s=l0();(St!==t||Et!==e)&&(ri=null,xs=nt()+500,fr(t,e));do try{Rx();break}catch(o){o0(t,o)}while(1);Ld(),sl.current=s,Fe=r,ot!==null?e=0:(St=null,Et=0,e=ut)}if(e!==0){if(e===2&&(r=mc(t),r!==0&&(i=r,e=Wc(t,r))),e===1)throw n=Ta,fr(t,0),Li(t,i),Yt(t,nt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!Lx(r)&&(e=ll(t,i),e===2&&(s=mc(t),s!==0&&(i=s,e=Wc(t,s))),e===1))throw n=Ta,fr(t,0),Li(t,i),Yt(t,nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ir(t,Ht,ri);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Hd+500-nt(),10<e)){if(Ho(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wc(ir.bind(null,t,Ht,ri),e);break}ir(t,Ht,ri);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-In(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ax(i/1960))-i,10<i){t.timeoutHandle=wc(ir.bind(null,t,Ht,ri),i);break}ir(t,Ht,ri);break;case 5:ir(t,Ht,ri);break;default:throw Error(ee(329))}}}return Yt(t,nt()),t.callbackNode===n?a0.bind(null,t):null}function Wc(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&Hc(e)),t}function Hc(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function Lx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Wd,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function yh(t){if(Fe&6)throw Error(ee(327));us();var e=Ho(t,0);if(!(e&1))return Yt(t,nt()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var i=mc(t);i!==0&&(e=i,n=Wc(t,i))}if(n===1)throw n=Ta,fr(t,0),Li(t,e),Yt(t,nt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Ht,ri),Yt(t,nt()),null}function jd(t,e){var n=Fe;Fe|=1;try{return t(e)}finally{Fe=n,Fe===0&&(xs=nt()+500,Sl&&qi())}}function yr(t){Ri!==null&&Ri.tag===0&&!(Fe&6)&&us();var e=Fe;Fe|=1;var n=yn.transition,i=Ge;try{if(yn.transition=null,Ge=1,t)return t()}finally{Ge=i,yn.transition=n,Fe=e,!(Fe&6)&&qi()}}function Xd(){nn=es.current,$e(es)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),ot!==null)for(n=ot.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yo();break;case 3:vs(),$e($t),$e(Nt),kd();break;case 5:Id(i);break;case 4:vs();break;case 13:$e(Ke);break;case 19:$e(Ke);break;case 10:Pd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(St=t,ot=t=Gi(t.current,null),Et=nn=e,ut=0,Ta=null,Wd=bl=xr=0,Ht=oa=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}lr=null}return t}function o0(t,e){do{var n=ot;try{if(Ld(),No.current=rl,il){for(var i=Qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}il=!1}if(_r=0,xt=lt=Qe=null,sa=!1,wa=0,Vd.current=null,n===null||n.return===null){ut=1,Ta=e,ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Et,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=oh(a);if(g!==null){g.flags&=-257,lh(g,a,o,s,e),g.mode&1&&ah(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if(!(e&1)){ah(s,u,e),$d();break e}l=Error(ee(426))}}else if(Ye&&o.mode&1){var h=oh(a);if(h!==null){!(h.flags&65536)&&(h.flags|=256),lh(h,a,o,s,e),Cd(_s(l,o));break e}}s=l=_s(l,o),ut!==4&&(ut=2),oa===null?oa=[s]:oa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Hg(s,l,e);Jf(s,m);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ui===null||!Ui.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=jg(s,o,e);Jf(s,y);break e}}s=s.return}while(s!==null)}c0(n)}catch(w){e=w,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function l0(){var t=sl.current;return sl.current=rl,t===null?rl:t}function $d(){(ut===0||ut===3||ut===2)&&(ut=4),St===null||!(xr&268435455)&&!(bl&268435455)||Li(St,Et)}function ll(t,e){var n=Fe;Fe|=2;var i=l0();(St!==t||Et!==e)&&(ri=null,fr(t,e));do try{Px();break}catch(r){o0(t,r)}while(1);if(Ld(),Fe=n,sl.current=i,ot!==null)throw Error(ee(261));return St=null,Et=0,ut}function Px(){for(;ot!==null;)u0(ot)}function Rx(){for(;ot!==null&&!n_();)u0(ot)}function u0(t){var e=f0(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?c0(t):ot=e,Vd.current=null}function c0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,ot=null;return}}else if(n=wx(n,e,nn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ut===0&&(ut=5)}function ir(t,e,n){var i=Ge,r=yn.transition;try{yn.transition=null,Ge=1,Dx(t,e,n,i)}finally{yn.transition=r,Ge=i}return null}function Dx(t,e,n,i){do us();while(Ri!==null);if(Fe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f_(t,s),t===St&&(ot=St=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,h0(Wo,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var a=Ge;Ge=1;var o=Fe;Fe|=4,Vd.current=null,Tx(t,n),r0(n,t),Q_(Sc),jo=!!yc,Sc=yc=null,t.current=n,Cx(n),i_(),Fe=o,Ge=a,yn.transition=s}else t.current=n;if(ro&&(ro=!1,Ri=t,ol=r),s=t.pendingLanes,s===0&&(Ui=null),a_(n.stateNode),Yt(t,nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,t=Gc,Gc=null,t;return ol&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Vc?la++:(la=0,Vc=t):la=0,qi(),null}function us(){if(Ri!==null){var t=Wm(ol),e=yn.transition,n=Ge;try{if(yn.transition=null,Ge=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,ol=0,Fe&6)throw Error(ee(331));var r=Fe;for(Fe|=4,de=t.current;de!==null;){var s=de,a=s.child;if(de.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:aa(8,f,s)}var c=f.child;if(c!==null)c.return=f,de=c;else for(;de!==null;){f=de;var d=f.sibling,g=f.return;if(t0(f),f===u){de=null;break}if(d!==null){d.return=g,de=d;break}de=g}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}de=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,de=a;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:aa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){a=de;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,de=_;else e:for(a=v;de!==null;){if(o=de,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:El(9,o)}}catch(w){et(o,o.return,w)}if(o===a){de=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,de=y;break e}de=o.return}}if(Fe=r,qi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(gl,t)}catch{}i=!0}return i}finally{Ge=n,yn.transition=e}}return!1}function Sh(t,e,n){e=_s(n,e),e=Hg(t,e,1),t=Oi(t,e,1),e=Gt(),t!==null&&(ka(t,1,e),Yt(t,e))}function et(t,e,n){if(t.tag===3)Sh(t,t,n);else for(;e!==null;){if(e.tag===3){Sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=_s(n,t),t=jg(e,t,1),e=Oi(e,t,1),t=Gt(),e!==null&&(ka(e,1,t),Yt(e,t));break}}e=e.return}}function Nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Et&n)===n&&(ut===4||ut===3&&(Et&130023424)===Et&&500>nt()-Hd?fr(t,0):Wd|=n),Yt(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Gt();t=vi(t,e),t!==null&&(ka(t,e,n),Yt(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),d0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,Mx(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Ye&&e.flags&1048576&&mg(e,Qo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ko(t,e),t=e.pendingProps;var r=ps(e,Nt.current);ls(e,n),r=Fd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dd(e),r.updater=Ml,e.stateNode=r,r._reactInternals=e,Pc(e,i,t,n),e=Nc(null,e,i,!0,s,n)):(e.tag=0,Ye&&s&&bd(e),Ot(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),t=Ln(i,t),r){case 0:e=Dc(null,e,i,t,n);break e;case 1:e=dh(null,e,i,t,n);break e;case 11:e=uh(null,e,i,t,n);break e;case 14:e=ch(null,e,i,Ln(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Dc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dh(t,e,i,r,n);case 3:e:{if(Yg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xg(t,e),tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(ee(423)),e),e=fh(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(ee(424)),e),e=fh(t,e,i,n,r);break e}else for(sn=Fi(e.stateNode.containerInfo.firstChild),an=e,Ye=!0,Rn=null,n=wg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=_i(t,e,n);break e}Ot(t,e,i,n)}e=e.child}return e;case 5:return Eg(e),t===null&&Cc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Mc(i,r)?a=null:s!==null&&Mc(i,s)&&(e.flags|=32),qg(t,e),Ot(t,e,a,n),e.child;case 6:return t===null&&Cc(e),null;case 13:return Zg(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Ot(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),uh(t,e,i,r,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Ve(Jo,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!$t.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ac(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ac(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ot(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ls(e,n),r=Sn(r),i=i(r),e.flags|=1,Ot(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),ch(t,e,i,r,n);case 15:return Xg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),ko(t,e),e.tag=1,qt(i)?(t=!0,Zo(e)):t=!1,ls(e,n),Sg(e,i,r),Pc(e,i,r,n),Nc(null,e,i,!0,t,n);case 19:return Kg(t,e,n);case 22:return $g(t,e,n)}throw Error(ee(156,e.tag))};function h0(t,e){return Um(t,e)}function zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new zx(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===pd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Hr:return hr(n.children,r,s,e);case fd:a=8,r|=8;break;case ec:return t=xn(12,n,e,r|2),t.elementType=ec,t.lanes=s,t;case tc:return t=xn(13,n,e,r),t.elementType=tc,t.lanes=s,t;case nc:return t=xn(19,n,e,r),t.elementType=nc,t.lanes=s,t;case Mm:return Tl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ym:a=10;break e;case Sm:a=9;break e;case hd:a=11;break e;case pd:a=14;break e;case Ti:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=xn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hr(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function Tl(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Mm,t.lanes=n,t.stateNode={isHidden:!1},t}function pu(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function mu(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,a,o,l){return t=new Ox(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(s),t}function Ux(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return Hi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(qt(n))return hg(t,n,e)}return e}function m0(t,e,n,i,r,s,a,o,l){return t=Yd(n,i,!0,t,r,s,a,o,l),t.context=p0(null),n=t.current,i=Gt(),r=Bi(n),s=fi(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,ka(t,r,i),Yt(t,i),t}function Cl(t,e,n,i){var r=e.current,s=Gt(),a=Bi(r);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(kn(t,r,a,s),Do(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Mh(t,e),(t=t.alternate)&&Mh(t,e)}function Bx(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}Al.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Cl(t,e,null,null)};Al.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Cl(null,t,null,null)}),e[gi]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&qm(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wh(){}function Gx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}var a=m0(e,i,t,0,null,!1,!1,"",wh);return t._reactRootContainer=a,t[gi]=a.current,_a(t.nodeType===8?t.parentNode:t),yr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ul(l);o.call(u)}}var l=Yd(t,0,!1,null,null,!1,!1,"",wh);return t._reactRootContainer=l,t[gi]=l.current,_a(t.nodeType===8?t.parentNode:t),yr(function(){Cl(e,l,n,i)}),l}function Pl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ul(a);o.call(l)}}Cl(e,a,t,r)}else a=Gx(n,e,t,r,i);return ul(a)}Hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(vd(e,n|1),Yt(e,nt()),!(Fe&6)&&(xs=nt()+500,qi()))}break;case 13:yr(function(){var i=vi(t,1);if(i!==null){var r=Gt();kn(i,t,1,r)}}),Zd(t,1)}};_d=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Gt();kn(e,t,134217728,n)}Zd(t,134217728)}};jm=function(t){if(t.tag===13){var e=Bi(t),n=vi(t,e);if(n!==null){var i=Gt();kn(n,t,e,i)}Zd(t,e)}};Xm=function(){return Ge};$m=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};fc=function(t,e,n){switch(e){case"input":if(sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yl(i);if(!r)throw Error(ee(90));Em(i),sc(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};Nm=jd;Im=yr;var Vx={usingClientEntryPoint:!1,Events:[Fa,qr,yl,Rm,Dm,jd]},Us={findFiberByHostInstance:or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wx={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{gl=so.inject(Wx),Yn=so}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ee(200));return Ux(t,e,null,n)};dn.createRoot=function(t,e){if(!Qd(t))throw Error(ee(299));var n=!1,i="",r=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,_a(t.nodeType===8?t.parentNode:t),new Kd(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return yr(t)};dn.hydrate=function(t,e,n){if(!Ll(e))throw Error(ee(200));return Pl(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=g0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=m0(e,null,t,1,n??null,r,!1,s,a),t[gi]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Al(e)};dn.render=function(t,e,n){if(!Ll(e))throw Error(ee(200));return Pl(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(ee(40));return t._reactRootContainer?(yr(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};dn.unstable_batchedUpdates=jd;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Pl(t,e,n,!1,i)};dn.version="18.2.0-next-9e3b772b8-20220608";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),mm.exports=dn;var Hx=mm.exports,Eh=Hx;Qu.createRoot=Eh.createRoot,Qu.hydrateRoot=Eh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ca.apply(this,arguments)}var Di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Di||(Di={}));const bh="popstate";function jx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return jc("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:x0(r)}return $x(e,n,null,t)}function ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Xx(){return Math.random().toString(36).substr(2,8)}function Th(t,e){return{usr:t.state,key:t.key,idx:e}}function jc(t,e,n,i){return n===void 0&&(n=null),Ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cs(e):e,{state:n,key:e&&e.key||i||Xx()})}function x0(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function $x(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Di.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Ca({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){o=Di.Pop;let h=f(),m=h==null?null:h-u;u=h,l&&l({action:o,location:p.location,delta:m})}function d(h,m){o=Di.Push;let v=jc(p.location,h,m);n&&n(v,h),u=f()+1;let _=Th(v,u),y=p.createHref(v);try{a.pushState(_,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(y)}s&&l&&l({action:o,location:p.location,delta:1})}function g(h,m){o=Di.Replace;let v=jc(p.location,h,m);n&&n(v,h),u=f();let _=Th(v,u),y=p.createHref(v);a.replaceState(_,"",y),s&&l&&l({action:o,location:p.location,delta:0})}function x(h){let m=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof h=="string"?h:x0(h);return v=v.replace(/ $/,"%20"),ct(m,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,m)}let p={get action(){return o},get location(){return t(r,a)},listen(h){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(bh,c),l=h,()=>{r.removeEventListener(bh,c),l=null}},createHref(h){return e(r,h)},createURL:x,encodeLocation(h){let m=x(h);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(h){return a.go(h)}};return p}var Ch;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ch||(Ch={}));function qx(t,e,n){return n===void 0&&(n="/"),Yx(t,e,n,!1)}function Yx(t,e,n,i){let r=typeof e=="string"?Cs(e):e,s=M0(r.pathname||"/",n);if(s==null)return null;let a=y0(t);Zx(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=oy(s);o=sy(a[l],u,i)}return o}function y0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(ct(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=pr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(ct(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),y0(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iy(u,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of S0(s.path))r(s,a,l)}),e}function S0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=S0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Zx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ry(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Kx=/^:[\w-]+$/,Qx=3,Jx=2,ey=1,ty=10,ny=-2,Ah=t=>t==="*";function iy(t,e){let n=t.split("/"),i=n.length;return n.some(Ah)&&(i+=ny),e&&(i+=Jx),n.filter(r=>!Ah(r)).reduce((r,s)=>r+(Kx.test(s)?Qx:s===""?ey:ty),i)}function ry(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function sy(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",c=Lh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),d=l.route;if(!c&&u&&n&&!i[i.length-1].route.index&&(c=Lh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!c)return null;Object.assign(r,c.params),a.push({params:r,pathname:pr([s,c.pathname]),pathnameBase:hy(pr([s,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(s=pr([s,c.pathnameBase]))}return a}function Lh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ay(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,f,c)=>{let{paramName:d,isOptional:g}=f;if(d==="*"){let p=o[c]||"";a=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}const x=o[c];return g&&!x?u[d]=void 0:u[d]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function ay(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function oy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function M0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ly(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Cs(t):t;return{pathname:n?n.startsWith("/")?n:uy(n,e):e,search:py(i),hash:my(r)}}function uy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function gu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dy(t,e){let n=cy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function fy(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Cs(t):(r=Ca({},t),ct(!r.pathname||!r.pathname.includes("?"),gu("?","pathname","search",r)),ct(!r.pathname||!r.pathname.includes("#"),gu("#","pathname","hash",r)),ct(!r.search||!r.search.includes("#"),gu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let c=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c-=1;r.pathname=d.join("/")}o=c>=0?e[c]:"/"}let l=ly(r,o),u=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),hy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),py=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,my=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const w0=["post","put","patch","delete"];new Set(w0);const vy=["get",...w0];new Set(vy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aa.apply(this,arguments)}const Jd=q.createContext(null),_y=q.createContext(null),Rl=q.createContext(null),Dl=q.createContext(null),As=q.createContext({outlet:null,matches:[],isDataRoute:!1}),E0=q.createContext(null);function Nl(){return q.useContext(Dl)!=null}function ef(){return Nl()||ct(!1),q.useContext(Dl).location}function b0(t){q.useContext(Rl).static||q.useLayoutEffect(t)}function tf(){let{isDataRoute:t}=q.useContext(As);return t?Ry():xy()}function xy(){Nl()||ct(!1);let t=q.useContext(Jd),{basename:e,future:n,navigator:i}=q.useContext(Rl),{matches:r}=q.useContext(As),{pathname:s}=ef(),a=JSON.stringify(dy(r,n.v7_relativeSplatPath)),o=q.useRef(!1);return b0(()=>{o.current=!0}),q.useCallback(function(u,f){if(f===void 0&&(f={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let c=fy(u,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:pr([e,c.pathname])),(f.replace?i.replace:i.push)(c,f.state,f)},[e,i,a,s,t])}function yy(t,e){return Sy(t,e)}function Sy(t,e,n,i){Nl()||ct(!1);let{navigator:r}=q.useContext(Rl),{matches:s}=q.useContext(As),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=ef(),f;if(e){var c;let h=typeof e=="string"?Cs(e):e;l==="/"||(c=h.pathname)!=null&&c.startsWith(l)||ct(!1),f=h}else f=u;let d=f.pathname||"/",g=d;if(l!=="/"){let h=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=qx(t,{pathname:g}),p=Ty(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},o,h.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),s,n,i);return e&&p?q.createElement(Dl.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Di.Pop}},p):p}function My(){let t=Py(),e=gy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:r},n):null,s)}const wy=q.createElement(My,null);class Ey extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?q.createElement(As.Provider,{value:this.props.routeContext},q.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function by(t){let{routeContext:e,match:n,children:i}=t,r=q.useContext(Jd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(As.Provider,{value:e},i)}function Ty(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);f>=0||ct(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:d,errors:g}=n,x=c.route.loader&&d[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,d)=>{let g,x=!1,p=null,h=null;n&&(g=o&&c.route.id?o[c.route.id]:void 0,p=c.route.errorElement||wy,l&&(u<0&&d===0?(Dy("route-fallback",!1),x=!0,h=null):u===d&&(x=!0,h=c.route.hydrateFallbackElement||null)));let m=e.concat(a.slice(0,d+1)),v=()=>{let _;return g?_=p:x?_=h:c.route.Component?_=q.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=f,q.createElement(by,{match:c,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?q.createElement(Ey,{location:n.location,revalidation:n.revalidation,component:p,error:g,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var T0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(T0||{}),cl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cl||{});function Cy(t){let e=q.useContext(Jd);return e||ct(!1),e}function Ay(t){let e=q.useContext(_y);return e||ct(!1),e}function Ly(t){let e=q.useContext(As);return e||ct(!1),e}function C0(t){let e=Ly(),n=e.matches[e.matches.length-1];return n.route.id||ct(!1),n.route.id}function Py(){var t;let e=q.useContext(E0),n=Ay(cl.UseRouteError),i=C0(cl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Ry(){let{router:t}=Cy(T0.UseNavigateStable),e=C0(cl.UseNavigateStable),n=q.useRef(!1);return b0(()=>{n.current=!0}),q.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Aa({fromRouteId:e},s)))},[t,e])}const Ph={};function Dy(t,e,n){!e&&!Ph[t]&&(Ph[t]=!0)}function Ny(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Xc(t){ct(!1)}function Iy(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Di.Pop,navigator:s,static:a=!1,future:o}=t;Nl()&&ct(!1);let l=e.replace(/^\/*/,"/"),u=q.useMemo(()=>({basename:l,navigator:s,static:a,future:Aa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Cs(i));let{pathname:f="/",search:c="",hash:d="",state:g=null,key:x="default"}=i,p=q.useMemo(()=>{let h=M0(f,l);return h==null?null:{location:{pathname:h,search:c,hash:d,state:g,key:x},navigationType:r}},[l,f,c,d,g,x,r]);return p==null?null:q.createElement(Rl.Provider,{value:u},q.createElement(Dl.Provider,{children:n,value:p}))}function ky(t){let{children:e,location:n}=t;return yy($c(e),n)}new Promise(()=>{});function $c(t,e){e===void 0&&(e=[]);let n=[];return q.Children.forEach(t,(i,r)=>{if(!q.isValidElement(i))return;let s=[...e,r];if(i.type===q.Fragment){n.push.apply(n,$c(i.props.children,s));return}i.type!==Xc&&ct(!1),!i.props.index||!i.props.children||ct(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=$c(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qc(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function zy(t,e){let n=qc(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const Fy="6";try{window.__reactRouterVersion=Fy}catch{}const Oy="startTransition",Rh=Iv[Oy];function Uy(t){let{basename:e,children:n,future:i,window:r}=t,s=q.useRef();s.current==null&&(s.current=jx({window:r,v5Compat:!0}));let a=s.current,[o,l]=q.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},f=q.useCallback(c=>{u&&Rh?Rh(()=>l(c)):l(c)},[l,u]);return q.useLayoutEffect(()=>a.listen(f),[a,f]),q.useEffect(()=>Ny(i),[i]),q.createElement(Iy,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}var Dh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dh||(Dh={}));var Nh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nh||(Nh={}));function By(t){let e=q.useRef(qc(t)),n=q.useRef(!1),i=ef(),r=q.useMemo(()=>zy(i.search,n.current?null:e.current),[i.search]),s=tf(),a=q.useCallback((o,l)=>{const u=qc(typeof o=="function"?o(r):o);n.current=!0,s("?"+u,l)},[s,r]);return[r,a]}var A0={exports:{}},Gy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Vy=Gy,Wy=Vy;function L0(){}function P0(){}P0.resetWarningCache=L0;var Hy=function(){function t(i,r,s,a,o,l){if(l!==Wy){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:P0,resetWarningCache:L0};return n.PropTypes=n,n};A0.exports=Hy();var jy=A0.exports;const ye=im(jy);let Qi=[{id:"game-1",player1_name:"Alice",player2_name:"Bob",player1_score:0,player2_score:0,target_score:21,current_turn:1,game_status:"setup",round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:dl(1),player2_balls:dl(2)}}],Bs=0;function Xy(){Bs++;let t="";for(let e=0;e<7;e++){Bs=(Bs*9301+49297)%233280;const n=Bs/233280;t+=String.fromCharCode(97+Math.floor(n*26))}return"game-"+Bs+"-"+t}function dl(t){const e=[],n=t===1?150:-150,i=t===1?30:-30;for(let r=0;r<5;r++)e.push({x:0,y:.4,z:n+r*i,active:!0,id:r+1});return e}const $y={list:function(t){typeof t>"u"&&(t=10);const e=Qi.slice(0,t);return{then:function(n){return n(e),{catch:function(){}}}}},create:function(t){const e={id:Xy(),player1_name:(t==null?void 0:t.player1_name)??"Player 1",player2_name:(t==null?void 0:t.player2_name)??"Player 2",player1_score:(t==null?void 0:t.player1_score)??0,player2_score:(t==null?void 0:t.player2_score)??0,target_score:(t==null?void 0:t.target_score)??21,current_turn:(t==null?void 0:t.current_turn)??1,game_status:(t==null?void 0:t.game_status)??"setup",round_number:(t==null?void 0:t.round_number)??1,ball_positions:(t==null?void 0:t.ball_positions)??{center_ball:{x:0,y:.4,z:0},player1_balls:dl(1),player2_balls:dl(2)}};return Qi.unshift(e),{then:function(n){return n(e),{catch:function(){}}}}},get:function(t){const e=Qi.find(n=>n.id===t)||null;return{then:function(n){return n(e),{catch:function(){}}}}},update:function(t,e){for(let n=0;n<Qi.length;n++)if(Qi[n].id===t)return Object.assign(Qi[n],e),{then:function(i){return i(Qi[n]),{catch:function(){}}}};return{then:function(n){return n(null),{catch:function(){}}}}}},ts=$y;function ns(t){return{Home:"/",Game:"/game",Leaderboard:"/leaderboard"}[t]||"/"}function hn(...t){return t.filter(Boolean).join(" ")}const hi=q.forwardRef(({className:t,variant:e="default",size:n="default",...i},r)=>{const s={default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return b.jsx("button",{className:hn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",s[e],a[n],t),ref:r,...i})});hi.displayName="Button";hi.propTypes={className:ye.string,variant:ye.oneOf(["default","destructive","outline","secondary","ghost","link"]),size:ye.oneOf(["default","sm","lg","icon"])};const fl=q.forwardRef(({className:t,type:e,...n},i)=>b.jsx("input",{type:e,className:hn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...n}));fl.displayName="Input";fl.propTypes={className:ye.string,type:ye.string};const R0=q.forwardRef(({className:t,...e},n)=>b.jsx("div",{ref:n,className:hn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));R0.displayName="Card";R0.propTypes={className:ye.string};const Xn=q.forwardRef(({className:t,...e},n)=>b.jsx("div",{ref:n,className:hn("flex flex-col space-y-1.5 p-6",t),...e}));Xn.displayName="CardHeader";Xn.propTypes={className:ye.string};const $n=q.forwardRef(({className:t,...e},n)=>b.jsx("h3",{ref:n,className:hn("text-2xl font-semibold leading-none tracking-tight",t),...e}));$n.displayName="CardTitle";$n.propTypes={className:ye.string};const D0=q.forwardRef(({className:t,...e},n)=>b.jsx("p",{ref:n,className:hn("text-sm text-muted-foreground",t),...e}));D0.displayName="CardDescription";D0.propTypes={className:ye.string};const qn=q.forwardRef(({className:t,...e},n)=>b.jsx("div",{ref:n,className:hn("p-6 pt-0",t),...e}));qn.displayName="CardContent";qn.propTypes={className:ye.string};const N0=q.forwardRef(({className:t,...e},n)=>b.jsx("div",{ref:n,className:hn("flex items-center p-6 pt-0",t),...e}));N0.displayName="CardFooter";N0.propTypes={className:ye.string};function I0(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=I0(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function qy(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=I0(t))&&(i&&(i+=" "),i+=e);return i}const Ih=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,kh=qy,Yy=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return kh(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,a=Object.keys(r).map(u=>{const f=n==null?void 0:n[u],c=s==null?void 0:s[u];if(f===null)return null;const d=Ih(f)||Ih(c);return r[u][d]}),o=n&&Object.entries(n).reduce((u,f)=>{let[c,d]=f;return d===void 0||(u[c]=d),u},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((u,f)=>{let{class:c,className:d,...g}=f;return Object.entries(g).every(x=>{let[p,h]=x;return Array.isArray(h)?h.includes({...s,...o}[p]):{...s,...o}[p]===h})?[...u,c,d]:u},[]);return kh(t,a,l,n==null?void 0:n.class,n==null?void 0:n.className)},Zy=Yy("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ai({className:t,variant:e,...n}){return b.jsx("div",{className:hn(Zy({variant:e}),t),...n})}ai.propTypes={className:ye.string,variant:ye.oneOf(["default","secondary","destructive","outline"])};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),zh=t=>{const e=Qy(t);return e.charAt(0).toUpperCase()+e.slice(1)},k0=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),Jy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>q.createElement("svg",{ref:l,...e1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:k0("lucide",r),...!s&&!Jy(o)&&{"aria-hidden":"true"},...o},[...a.map(([u,f])=>q.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=(t,e)=>{const n=q.forwardRef(({className:i,...r},s)=>q.createElement(t1,{ref:s,iconNode:e,className:k0(`lucide-${Ky(zh(t))}`,`lucide-${t}`,i),...r}));return n.displayName=zh(t),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fh=wn("arrow-left",n1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],r1=wn("chevron-down",i1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Oh=wn("crown",s1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],o1=wn("disc-3",a1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],u1=wn("move",l1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Uh=wn("play",c1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],z0=wn("rotate-ccw",d1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Bh=wn("rotate-cw",f1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],La=wn("target",h1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Pa=wn("trophy",p1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],g1=wn("users",m1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yc=wn("zap",v1),Ua=q.createContext(),F0=({children:t,value:e,onValueChange:n})=>{const[i,r]=q.useState(!1),[s,a]=q.useState(e),o=l=>{a(l),n==null||n(l),r(!1)};return b.jsx(Ua.Provider,{value:{isOpen:i,setIsOpen:r,selectedValue:s,handleSelect:o},children:b.jsx("div",{className:"relative",children:t})})};F0.propTypes={children:ye.node.isRequired,value:ye.any,onValueChange:ye.func};const nf=q.forwardRef(({className:t,children:e,...n},i)=>{const{isOpen:r,setIsOpen:s}=q.useContext(Ua);return b.jsxs("button",{ref:i,type:"button",onClick:()=>s(!r),className:hn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:[e,b.jsx(r1,{className:"h-4 w-4 opacity-50"})]})});nf.displayName="SelectTrigger";nf.propTypes={className:ye.string,children:ye.node};const O0=({placeholder:t})=>{const{selectedValue:e}=q.useContext(Ua);return b.jsx("span",{children:e||t})};O0.propTypes={placeholder:ye.string};const rf=q.forwardRef(({className:t,children:e,...n},i)=>{const{isOpen:r}=q.useContext(Ua);return r?b.jsx("div",{ref:i,className:hn("absolute top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",t),...n,children:b.jsx("div",{className:"p-1",children:e})}):null});rf.displayName="SelectContent";rf.propTypes={className:ye.string,children:ye.node};const hl=q.forwardRef(({className:t,children:e,value:n,...i},r)=>{const{handleSelect:s}=q.useContext(Ua);return b.jsx("div",{ref:r,className:hn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",t),onClick:()=>s(n),...i,children:e})});hl.displayName="SelectItem";hl.propTypes={className:ye.string,children:ye.node,value:ye.any.isRequired};ye.node;ye.node,ye.string;ye.string;function U0(){const t=tf(),[e,n]=q.useState([]),[i,r]=q.useState(""),[s,a]=q.useState(""),[o,l]=q.useState("21"),[u,f]=q.useState(!1);q.useEffect(()=>{c()},[]);const c=async()=>{const x=await ts.list("-created_date",10);n(x)},d=async()=>{if(!(!i.trim()||!s.trim())){f(!0);try{const x=await ts.create({player1_name:i.trim(),player2_name:s.trim(),target_score:parseInt(o),current_turn:1,game_status:"setup",ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(p,h)=>({x:0,y:.4,z:150+h*30,active:!0,id:h+1})),player2_balls:Array.from({length:5},(p,h)=>({x:0,y:.4,z:-150-h*30,active:!0,id:h+1}))}});t(ns("Game")+`?id=${x.id}`)}catch(x){console.error("Error creating game:",x)}f(!1)}},g=x=>{t(ns("Game")+`?id=${x}`)};return b.jsx("div",{className:"min-h-screen p-4 md:p-8",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsx("div",{className:"text-center mb-12",children:b.jsxs("div",{className:"glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden",children:[b.jsx("div",{className:"absolute inset-0 animated-gradient opacity-10"}),b.jsxs("div",{className:"relative z-10",children:[b.jsx("div",{className:"w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-magenta-500 flex items-center justify-center neon-glow",children:b.jsx(La,{className:"w-12 h-12 text-white"})}),b.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent mb-4",children:"CenterBall"}),b.jsx("p",{className:"text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"A futuristic precision ball game where strategy meets skill. Get your ball closest to the center while controlling the arena."}),b.jsxs("div",{className:"flex flex-wrap justify-center gap-6 text-sm",children:[b.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[b.jsx(Yc,{className:"w-5 h-5 neon-glow"}),b.jsx("span",{children:"Strategic Barriers"})]}),b.jsxs("div",{className:"flex items-center gap-2 text-magenta-400",children:[b.jsx(Pa,{className:"w-5 h-5 neon-glow"}),b.jsx("span",{children:"Center Ring Control"})]}),b.jsxs("div",{className:"flex items-center gap-2 text-yellow-400",children:[b.jsx(Oh,{className:"w-5 h-5 neon-glow"}),b.jsx("span",{children:"3D Physics Arena"})]})]})]})]})}),b.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[b.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[b.jsx(Xn,{className:"p-0 mb-6",children:b.jsxs($n,{className:"flex items-center gap-3 text-2xl text-white",children:[b.jsx(Uh,{className:"w-6 h-6 text-cyan-400 neon-glow"}),"Start New Game"]})}),b.jsxs(qn,{className:"p-0 space-y-6",children:[b.jsxs("div",{className:"grid gap-4",children:[b.jsxs("div",{children:[b.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Red Player"}),b.jsx(fl,{placeholder:"Enter red player name",value:i,onChange:x=>r(x.target.value),className:"glass-panel border-red-400/30 text-white placeholder-gray-400 focus:border-red-400"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Blue Player"}),b.jsx(fl,{placeholder:"Enter blue player name",value:s,onChange:x=>a(x.target.value),className:"glass-panel border-blue-400/30 text-white placeholder-gray-400 focus:border-blue-400"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Game Mode"}),b.jsxs(F0,{value:o,onValueChange:l,children:[b.jsx(nf,{className:"glass-panel border-gray-400/30 text-white",children:b.jsx(O0,{})}),b.jsxs(rf,{className:"glass-panel border-gray-400/30",children:[b.jsx(hl,{value:"21",className:"text-white",children:b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(ai,{variant:"secondary",className:"bg-green-400/20 text-green-400 border-green-400/30",children:"Beginner"}),b.jsx("span",{children:"First to 21 points"})]})}),b.jsx(hl,{value:"11",className:"text-white",children:b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(ai,{variant:"secondary",className:"bg-red-400/20 text-red-400 border-red-400/30",children:"Veteran"}),b.jsx("span",{children:"First to 11 points"})]})})]})]})]})]}),b.jsx(hi,{onClick:d,disabled:!i.trim()||!s.trim()||u,className:"w-full bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold py-3 rounded-xl neon-glow transition-all duration-300",children:u?b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"}),b.jsx("span",{children:"Creating Game..."})]}):b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(Uh,{className:"w-5 h-5"}),b.jsx("span",{children:"Start Battle"})]})})]})]}),b.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[b.jsx(Xn,{className:"p-0 mb-6",children:b.jsxs($n,{className:"flex items-center gap-3 text-2xl text-white",children:[b.jsx(Pa,{className:"w-6 h-6 text-yellow-400 neon-glow"}),"Recent Games"]})}),b.jsx(qn,{className:"p-0",children:b.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:e.length>0?e.map(x=>b.jsxs("div",{className:"glass-panel rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group",children:[b.jsxs("div",{className:"flex items-center justify-between mb-3",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx(g1,{className:"w-5 h-5 text-purple-400"}),b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[b.jsx("span",{className:"text-red-400 font-medium",children:x.player1_name}),b.jsx("span",{className:"text-gray-400",children:"vs"}),b.jsx("span",{className:"text-blue-400 font-medium",children:x.player2_name})]}),b.jsx("div",{className:"text-xs text-gray-400",children:x.game_status==="finished"?"Completed":"In Progress"})]})]}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsxs("div",{className:"text-right",children:[b.jsxs("div",{className:"text-sm font-bold text-white",children:[x.player1_score," - ",x.player2_score]}),b.jsxs(ai,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:["to ",x.target_score]})]}),x.game_status!=="finished"&&b.jsx(hi,{onClick:()=>g(x.id),size:"sm",className:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300",children:"Continue"})]})]}),x.winner&&b.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[b.jsx(Oh,{className:"w-4 h-4 text-yellow-400 neon-glow"}),b.jsxs("span",{className:"text-yellow-400 font-medium",children:["Winner: ",x.winner]})]})]},x.id)):b.jsxs("div",{className:"text-center py-8 text-gray-400",children:[b.jsx(La,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),b.jsx("p",{children:"No games yet. Start your first battle!"})]})})})]})]})]})})}U0.propTypes={};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="150",_1=0,Gh=1,x1=2,B0=1,G0=2,Qs=3,ji=0,on=1,ci=2,Vi=0,cs=1,Vh=2,Wh=3,Hh=4,y1=5,Vr=100,S1=101,M1=102,jh=103,Xh=104,w1=200,E1=201,b1=202,T1=203,V0=204,W0=205,C1=206,A1=207,L1=208,P1=209,R1=210,D1=0,N1=1,I1=2,Zc=3,k1=4,z1=5,F1=6,O1=7,Il=0,U1=1,B1=2,pi=0,G1=1,V1=2,W1=3,H0=4,H1=5,j0=300,ys=301,Ss=302,Kc=303,Qc=304,kl=306,Jc=1e3,Dn=1001,ed=1002,Ut=1003,$h=1004,vu=1005,_n=1006,j1=1007,Ra=1008,Sr=1009,X1=1010,$1=1011,X0=1012,q1=1013,cr=1014,dr=1015,Da=1016,Y1=1017,Z1=1018,ds=1020,K1=1021,Nn=1023,Q1=1024,J1=1025,mr=1026,Ms=1027,eS=1028,tS=1029,nS=1030,iS=1031,rS=1033,_u=33776,xu=33777,yu=33778,Su=33779,qh=35840,Yh=35841,Zh=35842,Kh=35843,sS=36196,Qh=37492,Jh=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,ap=37814,op=37815,lp=37816,up=37817,cp=37818,dp=37819,fp=37820,hp=37821,Mu=36492,aS=36283,pp=36284,mp=36285,gp=36286,Mr=3e3,Xe=3001,oS=3200,lS=3201,zl=0,uS=1,Wn="srgb",Na="srgb-linear",$0="display-p3",wu=7680,cS=519,vp=35044,_p="300 es",td=1035;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=Math.PI/180,nd=180/Math.PI;function Ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function dS(t,e){return(t%e+e)%e}function bu(t,e,n){return(1-n)*t+n*e}function xp(t){return(t&t-1)===0&&t!==0}function fS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],g=i[5],x=i[8],p=r[0],h=r[3],m=r[6],v=r[1],_=r[4],y=r[7],w=r[2],A=r[5],L=r[8];return s[0]=a*p+o*v+l*w,s[3]=a*h+o*_+l*A,s[6]=a*m+o*y+l*L,s[1]=u*p+f*v+c*w,s[4]=u*h+f*_+c*A,s[7]=u*m+f*y+c*L,s[2]=d*p+g*v+x*w,s[5]=d*h+g*_+x*A,s[8]=d*m+g*y+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],c=f*a-o*u,d=o*l-f*s,g=u*s-a*l,x=n*c+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=c*p,e[1]=(r*u-f*i)*p,e[2]=(o*i-r*a)*p,e[3]=d*p,e[4]=(f*n-r*l)*p,e[5]=(r*s-o*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(a*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new Bt;function q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class Ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const d=s[a+0],g=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=p;return}if(c!==p||l!==d||u!==g||f!==x){let h=1-o;const m=l*d+u*g+f*x+c*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,m*v);h=Math.sin(h*A)/w,o=Math.sin(o*A)/w}const y=o*v;if(l=l*h+d*y,u=u*h+g*y,f=f*h+x*y,c=c*h+p*y,h===1-o){const w=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=w,u*=w,f*=w,c*=w}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[a],d=s[a+1],g=s[a+2],x=s[a+3];return e[n]=o*x+f*c+l*g-u*d,e[n+1]=l*x+f*d+u*c-o*g,e[n+2]=u*x+f*g+o*d-l*c,e[n+3]=f*x-o*c-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),c=o(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*f*c+u*g*x,this._y=u*g*c-d*f*x,this._z=u*f*x+d*g*c,this._w=u*f*c-d*g*x;break;case"YXZ":this._x=d*f*c+u*g*x,this._y=u*g*c-d*f*x,this._z=u*f*x-d*g*c,this._w=u*f*c+d*g*x;break;case"ZXY":this._x=d*f*c-u*g*x,this._y=u*g*c+d*f*x,this._z=u*f*x+d*g*c,this._w=u*f*c-d*g*x;break;case"ZYX":this._x=d*f*c-u*g*x,this._y=u*g*c+d*f*x,this._z=u*f*x-d*g*c,this._w=u*f*c+d*g*x;break;case"YZX":this._x=d*f*c+u*g*x,this._y=u*g*c+d*f*x,this._z=u*f*x-d*g*c,this._w=u*f*c-d*g*x;break;case"XZY":this._x=d*f*c-u*g*x,this._y=u*g*c-d*f*x,this._z=u*f*x+d*g*c,this._w=u*f*c+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],c=n[10],d=i+o+c;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>c){const g=2*Math.sqrt(1+i-o-c);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>c){const g=2*Math.sqrt(1+o-i-c);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+c-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),c=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=a*c+this._w*d,this._x=i*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*n+a*r-o*i,f=l*i+o*n-s*r,c=l*r+s*i-a*n,d=-s*n-a*i-o*r;return this.x=u*l+d*-s+f*-o-c*-a,this.y=f*l+d*-a+c*-s-u*-o,this.z=c*l+d*-o+u*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new B,yp=new Ga;function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const hS=new Bt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pS=new Bt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ni=new B;function mS(t){return t.convertSRGBToLinear(),Ni.set(t.r,t.g,t.b).applyMatrix3(pS),t.setRGB(Ni.x,Ni.y,Ni.z)}function gS(t){return Ni.set(t.r,t.g,t.b).applyMatrix3(hS),t.setRGB(Ni.x,Ni.y,Ni.z).convertLinearToSRGB()}const vS={[Na]:t=>t,[Wn]:t=>t.convertSRGBToLinear(),[$0]:mS},_S={[Na]:t=>t,[Wn]:t=>t.convertLinearToSRGB(),[$0]:gS},zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Na},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vS[e],r=_S[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Lr;class Y0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=pl("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Z0{constructor(e=null){this.isSource=!0,this.uuid=Ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Lu(r[a].image)):s.push(Lu(r[a]))}else s=Lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Y0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xS=0;class ln extends Ls{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Dn,r=Dn,s=_n,a=Ra,o=Nn,l=Sr,u=ln.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Ba(),this.name="",this.source=new Z0(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=j0;ln.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],g=l[5],x=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(g+1)/2,w=(m+1)/2,A=(f+d)/4,L=(c+p)/4,S=(x+h)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=L/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-x)*(h-x)+(c-p)*(c-p)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(h-x)/v,this.y=(c-p)/v,this.z=(d-f)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wr extends Ls{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Z0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class K0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],c=e[l+1],d=e[l+2];f<n&&(n=f),c<i&&(i=c),d<r&&(r=d),f>s&&(s=f),c>a&&(a=c),d>o&&(o=d)}return this.min.set(n,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),c=e.getY(l),d=e.getZ(l);f<n&&(n=f),c<i&&(i=c),d<r&&(r=d),f>s&&(s=f),c>a&&(a=c),d>o&&(o=d)}return this.min.set(n,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Ji.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ji)}else i.boundingBox===null&&i.computeBoundingBox(),Pu.copy(i.boundingBox),Pu.applyMatrix4(e.matrixWorld),this.union(Pu);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),oo.subVectors(this.max,Gs),Pr.subVectors(e.a,Gs),Rr.subVectors(e.b,Gs),Dr.subVectors(e.c,Gs),Mi.subVectors(Rr,Pr),wi.subVectors(Dr,Rr),er.subVectors(Pr,Dr);let n=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-er.z,er.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,er.z,0,-er.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-er.y,er.x,0];return!Ru(n,Pr,Rr,Dr,oo)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,Pr,Rr,Dr,oo))?!1:(lo.crossVectors(Mi,wi),n=[lo.x,lo.y,lo.z],Ru(n,Pr,Rr,Dr,oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],Ji=new B,Pu=new Va,Pr=new B,Rr=new B,Dr=new B,Mi=new B,wi=new B,er=new B,Gs=new B,oo=new B,lo=new B,tr=new B;function Ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),u=n.dot(tr),f=i.dot(tr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const SS=new Va,Vs=new B,Du=new B;class af{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Du)),this.expandByPoint(Vs.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new B,Nu=new B,uo=new B,Ei=new B,Iu=new B,co=new B,ku=new B;class Q0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=Ei.dot(this.direction),l=-Ei.dot(uo),u=Ei.lengthSq(),f=Math.abs(1-a*a);let c,d,g,x;if(f>0)if(c=a*l-o,d=a*o-l,x=s*f,c>=0)if(d>=-x)if(d<=x){const p=1/f;c*=p,d*=p,g=c*(c+a*d+2*o)+d*(a*c+d+2*l)+u}else d=s,c=Math.max(0,-(a*d+o)),g=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(a*d+o)),g=-c*c+d*(d+2*l)+u;else d<=-x?(c=Math.max(0,-(-a*s+o)),d=c>0?-s:Math.min(Math.max(-s,-l),s),g=-c*c+d*(d+2*l)+u):d<=x?(c=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(c=Math.max(0,-(a*s+o)),d=c>0?s:Math.min(Math.max(-s,-l),s),g=-c*c+d*(d+2*l)+u);else d=a>0?-s:s,c=Math.max(0,-(a*d+o)),g=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Nu).addScaledVector(uo,d),g}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),c>=0?(o=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(o=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),co.subVectors(i,e),ku.crossVectors(Iu,co);let a=this.direction.dot(ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(co.crossVectors(Ei,co));if(l<0)return null;const u=o*this.direction.dot(Iu.cross(Ei));if(u<0||l+u>a)return null;const f=-o*Ei.dot(ku);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,a,o,l,u,f,c,d,g,x,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=f,m[10]=c,m[14]=d,m[3]=g,m[7]=x,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*c,x=o*f,p=o*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=g+x*u,n[5]=d-p*u,n[9]=-o*l,n[2]=p-d*u,n[6]=x+g*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*c,x=u*f,p=u*c;n[0]=d+p*o,n[4]=x*o-g,n[8]=a*u,n[1]=a*c,n[5]=a*f,n[9]=-o,n[2]=g*o-x,n[6]=p+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*c,x=u*f,p=u*c;n[0]=d-p*o,n[4]=-a*c,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*f,n[9]=p-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*c,x=o*f,p=o*c;n[0]=l*f,n[4]=x*u-g,n[8]=d*u+p,n[1]=l*c,n[5]=p*u+d,n[9]=g*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*u,x=o*l,p=o*u;n[0]=l*f,n[4]=p-d*c,n[8]=x*c+g,n[1]=c,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*c+x,n[10]=d-p*c}else if(e.order==="XZY"){const d=a*l,g=a*u,x=o*l,p=o*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=d*c+p,n[5]=a*f,n[9]=g*c-x,n[2]=x*c-g,n[6]=o*f,n[10]=p*c+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,wS)}lookAt(e,n,i){const r=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),bi.crossVectors(i,en),bi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),bi.crossVectors(i,en)),bi.normalize(),fo.crossVectors(en,bi),r[0]=bi.x,r[4]=fo.x,r[8]=en.x,r[1]=bi.y,r[5]=fo.y,r[9]=en.y,r[2]=bi.z,r[6]=fo.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],g=i[13],x=i[2],p=i[6],h=i[10],m=i[14],v=i[3],_=i[7],y=i[11],w=i[15],A=r[0],L=r[4],S=r[8],C=r[12],P=r[1],V=r[5],Y=r[9],z=r[13],I=r[2],j=r[6],K=r[10],Q=r[14],D=r[3],G=r[7],U=r[11],ie=r[15];return s[0]=a*A+o*P+l*I+u*D,s[4]=a*L+o*V+l*j+u*G,s[8]=a*S+o*Y+l*K+u*U,s[12]=a*C+o*z+l*Q+u*ie,s[1]=f*A+c*P+d*I+g*D,s[5]=f*L+c*V+d*j+g*G,s[9]=f*S+c*Y+d*K+g*U,s[13]=f*C+c*z+d*Q+g*ie,s[2]=x*A+p*P+h*I+m*D,s[6]=x*L+p*V+h*j+m*G,s[10]=x*S+p*Y+h*K+m*U,s[14]=x*C+p*z+h*Q+m*ie,s[3]=v*A+_*P+y*I+w*D,s[7]=v*L+_*V+y*j+w*G,s[11]=v*S+_*Y+y*K+w*U,s[15]=v*C+_*z+y*Q+w*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],g=e[14],x=e[3],p=e[7],h=e[11],m=e[15];return x*(+s*l*c-r*u*c-s*o*d+i*u*d+r*o*g-i*l*g)+p*(+n*l*g-n*u*d+s*a*d-r*a*g+r*u*f-s*l*f)+h*(+n*u*c-n*o*g-s*a*c+i*a*g+s*o*f-i*u*f)+m*(-r*o*f-n*l*c+n*o*d+r*a*c-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],g=e[11],x=e[12],p=e[13],h=e[14],m=e[15],v=c*h*u-p*d*u+p*l*g-o*h*g-c*l*m+o*d*m,_=x*d*u-f*h*u-x*l*g+a*h*g+f*l*m-a*d*m,y=f*p*u-x*c*u+x*o*g-a*p*g-f*o*m+a*c*m,w=x*c*l-f*p*l-x*o*d+a*p*d+f*o*h-a*c*h,A=n*v+i*_+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(p*d*s-c*h*s-p*r*g+i*h*g+c*r*m-i*d*m)*L,e[2]=(o*h*s-p*l*s+p*r*u-i*h*u-o*r*m+i*l*m)*L,e[3]=(c*l*s-o*d*s-c*r*u+i*d*u+o*r*g-i*l*g)*L,e[4]=_*L,e[5]=(f*h*s-x*d*s+x*r*g-n*h*g-f*r*m+n*d*m)*L,e[6]=(x*l*s-a*h*s-x*r*u+n*h*u+a*r*m-n*l*m)*L,e[7]=(a*d*s-f*l*s+f*r*u-n*d*u-a*r*g+n*l*g)*L,e[8]=y*L,e[9]=(x*c*s-f*p*s-x*i*g+n*p*g+f*i*m-n*c*m)*L,e[10]=(a*p*s-x*o*s+x*i*u-n*p*u-a*i*m+n*o*m)*L,e[11]=(f*o*s-a*c*s-f*i*u+n*c*u+a*i*g-n*o*g)*L,e[12]=w*L,e[13]=(f*p*r-x*c*r+x*i*d-n*p*d-f*i*h+n*c*h)*L,e[14]=(x*o*r-a*p*r-x*i*l+n*p*l+a*i*h-n*o*h)*L,e[15]=(a*c*r-f*o*r+f*i*l-n*c*l-a*i*d+n*o*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,c=o+o,d=s*u,g=s*f,x=s*c,p=a*f,h=a*c,m=o*c,v=l*u,_=l*f,y=l*c,w=i.x,A=i.y,L=i.z;return r[0]=(1-(p+m))*w,r[1]=(g+y)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(g-y)*A,r[5]=(1-(d+m))*A,r[6]=(h+v)*A,r[7]=0,r[8]=(x+_)*L,r[9]=(h-v)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const a=Nr.set(r[4],r[5],r[6]).length(),o=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const u=1/s,f=1/a,c=1/o;return Tn.elements[0]*=u,Tn.elements[1]*=u,Tn.elements[2]*=u,Tn.elements[4]*=f,Tn.elements[5]*=f,Tn.elements[6]*=f,Tn.elements[8]*=c,Tn.elements[9]*=c,Tn.elements[10]*=c,n.setFromRotationMatrix(Tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a){const o=this.elements,l=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),c=(i+r)/(i-r),d=-(a+s)/(a-s),g=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=u,o[9]=c,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,r,s,a){const o=this.elements,l=1/(n-e),u=1/(i-r),f=1/(a-s),c=(n+e)*l,d=(i+r)*u,g=(a+s)*f;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-c,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*f,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new B,Tn=new dt,MS=new B(0,0,0),wS=new B(1,1,1),bi=new B,fo=new B,en=new B,Sp=new dt,Mp=new Ga;class Fl{constructor(e=0,n=0,i=0,r=Fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fl.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const wp=new B,Ir=new Ga,ti=new dt,ho=new B,Ws=new B,bS=new B,TS=new Ga,Ep=new B(1,0,0),bp=new B(0,1,0),Tp=new B(0,0,1),CS={type:"added"},Cp={type:"removed"};class Dt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,n=new Fl,i=new Ga,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Bt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,n){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ho.copy(e):ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ws,ho,this.up):ti.lookAt(ho,Ws,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ti),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(CS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Cp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),c=a(e.shapes),d=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new B,ni=new B,zu=new B,ii=new B,kr=new B,zr=new B,Ap=new B,Fu=new B,Ou=new B,Uu=new B;class oi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ni.subVectors(i,n),zu.subVectors(e,n);const a=Cn.dot(Cn),o=Cn.dot(ni),l=Cn.dot(zu),u=ni.dot(ni),f=ni.dot(zu),c=a*u-o*o;if(c===0)return s.set(-2,-1,-1);const d=1/c,g=(u*l-o*f)*d,x=(a*f-o*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ii),l.set(0,0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ni.subVectors(e,n),Cn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return oi.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,i),zr.subVectors(s,i),Fu.subVectors(e,i);const l=kr.dot(Fu),u=zr.dot(Fu);if(l<=0&&u<=0)return n.copy(i);Ou.subVectors(e,r);const f=kr.dot(Ou),c=zr.dot(Ou);if(f>=0&&c<=f)return n.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(kr,a);Uu.subVectors(e,s);const g=kr.dot(Uu),x=zr.dot(Uu);if(x>=0&&g<=x)return n.copy(s);const p=g*u-l*x;if(p<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(zr,o);const h=f*x-g*c;if(h<=0&&c-f>=0&&g-x>=0)return Ap.subVectors(s,r),o=(c-f)/(c-f+(g-x)),n.copy(r).addScaledVector(Ap,o);const m=1/(h+p+d);return a=p*m,o=d*m,n.copy(i).addScaledVector(kr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let AS=0;class Cr extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=cs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=V0,this.blendDst=W0,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wu,this.stencilZFail=wu,this.stencilZPass=wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},po={h:0,s:0,l:0};function Bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=zt.workingColorSpace){if(e=dS(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bu(a,s,e+1/3),this.g=Bu(a,s,e),this.b=Bu(a,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,zt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,zt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,f,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,zt.toWorkingColorSpace(this,n),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,zt.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=J0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Au(e.r),this.g=Au(e.g),this.b=Au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return zt.fromWorkingColorSpace(Pt.copy(this),e),jt(Pt.r*255,0,255)<<16^jt(Pt.g*255,0,255)<<8^jt(Pt.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.fromWorkingColorSpace(Pt.copy(this),n);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const c=a-o;switch(u=f<=.5?c/(a+o):c/(2-a-o),a){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=zt.workingColorSpace){return zt.fromWorkingColorSpace(Pt.copy(this),n),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Wn){zt.fromWorkingColorSpace(Pt.copy(this),e);const n=Pt.r,i=Pt.g,r=Pt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${n*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,n,i){return this.getHSL(An),An.h+=e,An.s+=n,An.l+=i,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(An),e.getHSL(po);const i=bu(An.h,po.h,n),r=bu(An.s,po.s,n),s=bu(An.l,po.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new De;De.NAMES=J0;class lf extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new B,mo=new Oe;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyMatrix3(e),this.setXYZ(n,st.x,st.y,st.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyMatrix4(e),this.setXYZ(n,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyNormalMatrix(e),this.setXYZ(n,st.x,st.y,st.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.transformDirection(e),this.setXYZ(n,st.x,st.y,st.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ev extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tv extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const mn=new dt,Gu=new Dt,Fr=new B,tn=new Va,Hs=new Va,_t=new B;class yi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?tv:ev)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(tn.min,Hs.min),tn.expandByPoint(_t),_t.addVectors(tn.max,Hs.max),tn.expandByPoint(_t)):(tn.expandByPoint(Hs.min),tn.expandByPoint(Hs.max))}tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)_t.fromBufferAttribute(o,u),l&&(Fr.fromBufferAttribute(e,u),_t.add(Fr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let P=0;P<o;P++)u[P]=new B,f[P]=new B;const c=new B,d=new B,g=new B,x=new Oe,p=new Oe,h=new Oe,m=new B,v=new B;function _(P,V,Y){c.fromArray(r,P*3),d.fromArray(r,V*3),g.fromArray(r,Y*3),x.fromArray(a,P*2),p.fromArray(a,V*2),h.fromArray(a,Y*2),d.sub(c),g.sub(c),p.sub(x),h.sub(x);const z=1/(p.x*h.y-h.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(z),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(z),u[P].add(m),u[V].add(m),u[Y].add(m),f[P].add(v),f[V].add(v),f[Y].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,V=y.length;P<V;++P){const Y=y[P],z=Y.start,I=Y.count;for(let j=z,K=z+I;j<K;j+=3)_(i[j+0],i[j+1],i[j+2])}const w=new B,A=new B,L=new B,S=new B;function C(P){L.fromArray(s,P*3),S.copy(L);const V=u[P];w.copy(V),w.sub(L.multiplyScalar(L.dot(V))).normalize(),A.crossVectors(S,V);const z=A.dot(f[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=z}for(let P=0,V=y.length;P<V;++P){const Y=y[P],z=Y.start,I=Y.count;for(let j=z,K=z+I;j<K;j+=3)C(i[j+0]),C(i[j+1]),C(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,f=new B,c=new B;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,h),f.subVectors(a,s),c.subVectors(r,s),f.cross(c),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),o.add(f),l.add(f),u.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,c=o.normalized,d=new u.constructor(l.length*f);let g=0,x=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?g=l[p]*o.data.stride+o.offset:g=l[p]*f;for(let m=0;m<f;m++)d[x++]=u[g++]}return new Kn(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,c=u.length;f<c;f++){const d=u[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const g=u[c];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,g=c.length;d<g;d++)f.push(c[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const c=a[u];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new dt,Gn=new Q0,go=new af,Pp=new B,js=new B,Xs=new B,$s=new B,Vu=new B,vo=new B,_o=new Oe,xo=new Oe,yo=new Oe,Wu=new B,So=new B;class at extends Dt{constructor(e=new yi,n=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],c=s[l];f!==0&&(Vu.fromBufferAttribute(c,e),a?vo.addScaledVector(Vu,f):vo.addScaledVector(Vu.sub(n),f))}n.add(vo)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),go.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(go,Pp)===null||Gn.origin.distanceToSquared(Pp)>(e.far-e.near)**2))||(Lp.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Lp),i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,u=i.attributes.uv,f=i.attributes.uv2,c=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=c.length;g<x;g++){const p=c[g],h=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,y=v;_<y;_+=3){const w=o.getX(_),A=o.getX(_+1),L=o.getX(_+2);a=Mo(this,h,e,Gn,u,f,w,A,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,n.push(a))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,h=x;p<h;p+=3){const m=o.getX(p),v=o.getX(p+1),_=o.getX(p+2);a=Mo(this,r,e,Gn,u,f,m,v,_),a&&(a.faceIndex=Math.floor(p/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=c.length;g<x;g++){const p=c[g],h=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,y=v;_<y;_+=3){const w=_,A=_+1,L=_+2;a=Mo(this,h,e,Gn,u,f,w,A,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,n.push(a))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,h=x;p<h;p+=3){const m=p,v=p+1,_=p+2;a=Mo(this,r,e,Gn,u,f,m,v,_),a&&(a.faceIndex=Math.floor(p/3),n.push(a))}}}}function PS(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ji,o),l===null)return null;So.copy(o),So.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(So);return u<n.near||u>n.far?null:{distance:u,point:So.clone(),object:t}}function Mo(t,e,n,i,r,s,a,o,l){t.getVertexPosition(a,js),t.getVertexPosition(o,Xs),t.getVertexPosition(l,$s);const u=PS(t,e,n,i,js,Xs,$s,Wu);if(u){r&&(_o.fromBufferAttribute(r,a),xo.fromBufferAttribute(r,o),yo.fromBufferAttribute(r,l),u.uv=oi.getUV(Wu,js,Xs,$s,_o,xo,yo,new Oe)),s&&(_o.fromBufferAttribute(s,a),xo.fromBufferAttribute(s,o),yo.fromBufferAttribute(s,l),u.uv2=oi.getUV(Wu,js,Xs,$s,_o,xo,yo,new Oe));const f={a,b:o,c:l,normal:new B,materialIndex:0};oi.getNormal(js,Xs,$s,f.normal),u.face=f}return u}class di extends yi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],c=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(c,2));function x(p,h,m,v,_,y,w,A,L,S,C){const P=y/L,V=w/S,Y=y/2,z=w/2,I=A/2,j=L+1,K=S+1;let Q=0,D=0;const G=new B;for(let U=0;U<K;U++){const ie=U*V-z;for(let N=0;N<j;N++){const J=N*P-Y;G[p]=J*v,G[h]=ie*_,G[m]=I,u.push(G.x,G.y,G.z),G[p]=0,G[h]=0,G[m]=A>0?1:-1,f.push(G.x,G.y,G.z),c.push(N/L),c.push(1-U/S),Q+=1}}for(let U=0;U<S;U++)for(let ie=0;ie<L;ie++){const N=d+ie+j*U,J=d+ie+j*(U+1),ne=d+(ie+1)+j*(U+1),F=d+(ie+1)+j*U;l.push(N,J,F),l.push(J,ne,F),D+=6}o.addGroup(g,D,C),g+=D,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ft(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function RS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nv(t){return t.getRenderTarget()===null&&t.outputEncoding===Xe?Wn:Na}const DS={clone:ws,merge:Ft};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iv extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends iv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Ur=1;class kS extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new rn(Or,Ur,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new rn(Or,Ur,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new rn(Or,Ur,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new rn(Or,Ur,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new rn(Or,Ur,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new rn(Or,Ur,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,u]=this.children,f=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=c,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class rv extends ln{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ys,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new di(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Vi});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===Ra&&(n.minFilter=_n),new kS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Hu=new B,FS=new B,OS=new Bt;class rr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(FS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OS.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new af,wo=new B;class uf{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],u=i[5],f=i[6],c=i[7],d=i[8],g=i[9],x=i[10],p=i[11],h=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(o-r,c-l,p-d,_-h).normalize(),n[1].setComponents(o+r,c+l,p+d,_+h).normalize(),n[2].setComponents(o+s,c+u,p+g,_+m).normalize(),n[3].setComponents(o-s,c-u,p-g,_-m).normalize(),n[4].setComponents(o-a,c-f,p-x,_-v).normalize(),n[5].setComponents(o+a,c+f,p+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function US(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const c=u.array,d=u.usage,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,c,d),u.onUploadCallback();let x;if(c instanceof Float32Array)x=5126;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(c instanceof Int16Array)x=5122;else if(c instanceof Uint32Array)x=5125;else if(c instanceof Int32Array)x=5124;else if(c instanceof Int8Array)x=5120;else if(c instanceof Uint8Array)x=5121;else if(c instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,c){const d=f.array,g=f.updateRange;t.bindBuffer(c,u),g.count===-1?t.bufferSubData(c,0,d):(n?t.bufferSubData(c,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(c,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c===void 0?i.set(u,r(u,f)):c.version<u.version&&(s(c.buffer,u,f),c.version=u.version)}return{get:a,remove:o,update:l}}class Ol extends yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,c=e/o,d=n/l,g=[],x=[],p=[],h=[];for(let m=0;m<f;m++){const v=m*d-a;for(let _=0;_<u;_++){const y=_*c-s;x.push(y,-v,0),p.push(0,0,1),h.push(_/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const _=v+u*m,y=v+u*(m+1),w=v+1+u*(m+1),A=v+1+u*m;g.push(_,y,A),g.push(y,w,A)}this.setIndex(g),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS="vec3 transformed = vec3( position );",$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,KM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ew=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Aw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Rw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Dw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Nw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Iw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$w=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,g2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:BS,alphamap_pars_fragment:GS,alphatest_fragment:VS,alphatest_pars_fragment:WS,aomap_fragment:HS,aomap_pars_fragment:jS,begin_vertex:XS,beginnormal_vertex:$S,bsdfs:qS,iridescence_fragment:YS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:KS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:eM,color_fragment:tM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:rM,common:sM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:oM,displacementmap_pars_vertex:lM,displacementmap_vertex:uM,emissivemap_fragment:cM,emissivemap_pars_fragment:dM,encodings_fragment:fM,encodings_pars_fragment:hM,envmap_fragment:pM,envmap_common_pars_fragment:mM,envmap_pars_fragment:gM,envmap_pars_vertex:vM,envmap_physical_pars_fragment:LM,envmap_vertex:_M,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:SM,fog_pars_fragment:MM,gradientmap_pars_fragment:wM,lightmap_fragment:EM,lightmap_pars_fragment:bM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:CM,lights_pars_begin:AM,lights_toon_fragment:PM,lights_toon_pars_fragment:RM,lights_phong_fragment:DM,lights_phong_pars_fragment:NM,lights_physical_fragment:IM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:FM,lights_fragment_end:OM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:VM,map_fragment:WM,map_pars_fragment:HM,map_particle_fragment:jM,map_particle_pars_fragment:XM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:qM,morphcolor_vertex:YM,morphnormal_vertex:ZM,morphtarget_pars_vertex:KM,morphtarget_vertex:QM,normal_fragment_begin:JM,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:rw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:lw,output_fragment:uw,packing:cw,premultiplied_alpha_fragment:dw,project_vertex:fw,dithering_fragment:hw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:_w,shadowmap_vertex:xw,shadowmask_pars_fragment:yw,skinbase_vertex:Sw,skinning_pars_vertex:Mw,skinning_vertex:ww,skinnormal_vertex:Ew,specularmap_fragment:bw,specularmap_pars_fragment:Tw,tonemapping_fragment:Cw,tonemapping_pars_fragment:Aw,transmission_fragment:Lw,transmission_pars_fragment:Pw,uv_pars_fragment:Rw,uv_pars_vertex:Dw,uv_vertex:Nw,uv2_pars_fragment:Iw,uv2_pars_vertex:kw,uv2_vertex:zw,worldpos_vertex:Fw,background_vert:Ow,background_frag:Uw,backgroundCube_vert:Bw,backgroundCube_frag:Gw,cube_vert:Vw,cube_frag:Ww,depth_vert:Hw,depth_frag:jw,distanceRGBA_vert:Xw,distanceRGBA_frag:$w,equirect_vert:qw,equirect_frag:Yw,linedashed_vert:Zw,linedashed_frag:Kw,meshbasic_vert:Qw,meshbasic_frag:Jw,meshlambert_vert:e2,meshlambert_frag:t2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:r2,meshnormal_frag:s2,meshphong_vert:a2,meshphong_frag:o2,meshphysical_vert:l2,meshphysical_frag:u2,meshtoon_vert:c2,meshtoon_frag:d2,points_vert:f2,points_frag:h2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:v2},ae={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},Hn={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Hn.physical={uniforms:Ft([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Eo={r:0,b:0,g:0};function _2(t,e,n,i,r,s,a){const o=new De(0);let l=s===!0?0:1,u,f,c=null,d=0,g=null;function x(h,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const y=t.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(o,l):_&&_.isColor&&(p(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===kl)?(f===void 0&&(f=new at(new di(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=_.encoding!==Xe,(c!==_||d!==_.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,c=_,d=_.version,g=t.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new at(new Ol(2,2),new Er({name:"BackgroundMaterial",uniforms:ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,c=_,d=_.version,g=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,m){h.getRGB(Eo,nv(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(h,m=1){o.set(h),l=m,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(o,l)},render:x}}function x2(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=h(null);let u=l,f=!1;function c(I,j,K,Q,D){let G=!1;if(a){const U=p(Q,K,j);u!==U&&(u=U,g(u.object)),G=m(I,Q,K,D),G&&v(I,Q,K,D)}else{const U=j.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==U)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=U,G=!0)}D!==null&&n.update(D,34963),(G||f)&&(f=!1,S(I,j,K,Q),D!==null&&t.bindBuffer(34963,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,j,K){const Q=K.wireframe===!0;let D=o[I.id];D===void 0&&(D={},o[I.id]=D);let G=D[j.id];G===void 0&&(G={},D[j.id]=G);let U=G[Q];return U===void 0&&(U=h(d()),G[Q]=U),U}function h(I){const j=[],K=[],Q=[];for(let D=0;D<r;D++)j[D]=0,K[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:Q,object:I,attributes:{},index:null}}function m(I,j,K,Q){const D=u.attributes,G=j.attributes;let U=0;const ie=K.getAttributes();for(const N in ie)if(ie[N].location>=0){const ne=D[N];let F=G[N];if(F===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),ne===void 0||ne.attribute!==F||F&&ne.data!==F.data)return!0;U++}return u.attributesNum!==U||u.index!==Q}function v(I,j,K,Q){const D={},G=j.attributes;let U=0;const ie=K.getAttributes();for(const N in ie)if(ie[N].location>=0){let ne=G[N];ne===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const F={};F.attribute=ne,ne&&ne.data&&(F.data=ne.data),D[N]=F,U++}u.attributes=D,u.attributesNum=U,u.index=Q}function _(){const I=u.newAttributes;for(let j=0,K=I.length;j<K;j++)I[j]=0}function y(I){w(I,0)}function w(I,j){const K=u.newAttributes,Q=u.enabledAttributes,D=u.attributeDivisors;K[I]=1,Q[I]===0&&(t.enableVertexAttribArray(I),Q[I]=1),D[I]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),D[I]=j)}function A(){const I=u.newAttributes,j=u.enabledAttributes;for(let K=0,Q=j.length;K<Q;K++)j[K]!==I[K]&&(t.disableVertexAttribArray(K),j[K]=0)}function L(I,j,K,Q,D,G){i.isWebGL2===!0&&(K===5124||K===5125)?t.vertexAttribIPointer(I,j,K,D,G):t.vertexAttribPointer(I,j,K,Q,D,G)}function S(I,j,K,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=Q.attributes,G=K.getAttributes(),U=j.defaultAttributeValues;for(const ie in G){const N=G[ie];if(N.location>=0){let J=D[ie];if(J===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ne=J.normalized,F=J.itemSize,oe=n.get(J);if(oe===void 0)continue;const le=oe.buffer,he=oe.type,pe=oe.bytesPerElement;if(J.isInterleavedBufferAttribute){const Se=J.data,be=Se.stride,we=J.offset;if(Se.isInstancedInterleavedBuffer){for(let Re=0;Re<N.locationSize;Re++)w(N.location+Re,Se.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Re=0;Re<N.locationSize;Re++)y(N.location+Re);t.bindBuffer(34962,le);for(let Re=0;Re<N.locationSize;Re++)L(N.location+Re,F/N.locationSize,he,ne,be*pe,(we+F/N.locationSize*Re)*pe)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<N.locationSize;Se++)w(N.location+Se,J.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<N.locationSize;Se++)y(N.location+Se);t.bindBuffer(34962,le);for(let Se=0;Se<N.locationSize;Se++)L(N.location+Se,F/N.locationSize,he,ne,F*pe,F/N.locationSize*Se*pe)}}else if(U!==void 0){const ne=U[ie];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(N.location,ne);break;case 3:t.vertexAttrib3fv(N.location,ne);break;case 4:t.vertexAttrib4fv(N.location,ne);break;default:t.vertexAttrib1fv(N.location,ne)}}}}A()}function C(){Y();for(const I in o){const j=o[I];for(const K in j){const Q=j[K];for(const D in Q)x(Q[D].object),delete Q[D];delete j[K]}delete o[I]}}function P(I){if(o[I.id]===void 0)return;const j=o[I.id];for(const K in j){const Q=j[K];for(const D in Q)x(Q[D].object),delete Q[D];delete j[K]}delete o[I.id]}function V(I){for(const j in o){const K=o[j];if(K[I.id]===void 0)continue;const Q=K[I.id];for(const D in Q)x(Q[D].object),delete Q[D];delete K[I.id]}}function Y(){z(),f=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:Y,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:y,disableUnusedAttributes:A}}function y2(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,c){if(c===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,c),n.update(f,s,c)}this.setMode=a,this.render=o,this.renderInstances=l}function S2(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,c=t.getParameter(34930),d=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=d>0,y=a||e.has("OES_texture_float"),w=_&&y,A=a?t.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function M2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const g=c.length!==0||d||i!==0||r;return r=d,i=c.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=f(c,d,0)},this.setState=function(c,d,g){const x=c.clippingPlanes,p=c.clipIntersection,h=c.clipShadows,m=t.get(c);if(!r||x===null||x.length===0||s&&!h)s?f(null):u();else{const v=s?0:i,_=v*4;let y=m.clippingState||null;l.value=y,y=f(x,d,_,g);for(let w=0;w!==_;++w)y[w]=n[w];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,g,x){const p=c!==null?c.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,y=g;_!==p;++_,y+=4)a.copy(c[_]).applyMatrix4(v,o),a.normal.toArray(h,y),h[y+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function w2(t){let e=new WeakMap;function n(a,o){return o===Kc?a.mapping=ys:o===Qc&&(a.mapping=Ss),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Kc||o===Qc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new zS(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class E2 extends iv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Rp=[.125,.215,.35,.446,.526,.582],ar=20,ju=new E2,Dp=new De;let Xu=null;const sr=(1+Math.sqrt(5))/2,Gr=1/sr,Np=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,sr,Gr),new B(0,sr,-Gr),new B(Gr,0,sr),new B(-Gr,0,sr),new B(sr,Gr,0),new B(-sr,Gr,0)];class Ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ys||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Da,format:Nn,encoding:Mr,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b2(s)),this._blurMaterial=T2(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,ju)}_sceneToCubeUV(e,n,i,r){const o=new rn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(Dp),f.toneMapping=pi,f.autoClear=!1;const g=new lf({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new at(new di,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Dp),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const _=this._cubeSize;bo(r,v*_,m>2?_:0,_,_),f.setRenderTarget(r),p&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=c,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ys||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ju)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Np[(r-1)%Np.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new at(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ar-1),p=s/x,h=isFinite(s)?1+Math.floor(f*p):ar;h>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ar}`);const m=[];let v=0;for(let L=0;L<ar;++L){const S=L/p,C=Math.exp(-S*S/2);m.push(C),L===0?v+=C:L<h&&(v+=2*C)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-is?r-_+is:0),A=4*(this._cubeSize-y);bo(n,w,A,3*y,2*y),l.setRenderTarget(n),l.render(c,ju)}}function b2(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Rp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=Rp[a-t+is-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],g=6,x=6,p=3,h=2,m=1,v=new Float32Array(p*x*g),_=new Float32Array(h*x*g),y=new Float32Array(m*x*g);for(let A=0;A<g;A++){const L=A%3*2/3-1,S=A>2?0:-1,C=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];v.set(C,p*x*A),_.set(d,h*x*A);const P=[A,A,A,A,A,A];y.set(P,m*x*A)}const w=new yi;w.setAttribute("position",new Kn(v,p)),w.setAttribute("uv",new Kn(_,h)),w.setAttribute("faceIndex",new Kn(y,m)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function T2(t,e,n){const i=new Float32Array(ar),r=new B(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zp(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Fp(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Kc||l===Qc,f=l===ys||l===Ss;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return n===null&&(n=new Ip(t)),c=u?n.fromEquirectangular(o,c):n.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(u&&c&&c.height>0||f&&c&&r(c)){n===null&&(n=new Ip(t));const d=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function A2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L2(t,e,n,i){const r={},s=new WeakMap;function a(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(c,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(c){const d=c.attributes;for(const x in d)e.update(d[x],34962);const g=c.morphAttributes;for(const x in g){const p=g[x];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(c){const d=[],g=c.index,x=c.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,y=v.length;_<y;_+=3){const w=v[_+0],A=v[_+1],L=v[_+2];d.push(w,A,A,L,L,w)}}else{const v=x.array;p=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const w=_+0,A=_+1,L=_+2;d.push(w,A,A,L,L,w)}}const h=new(q0(d)?tv:ev)(d,1);h.version=p;const m=s.get(c);m&&e.remove(m),s.set(c,h)}function f(c){const d=s.get(c);if(d){const g=c.index;g!==null&&d.version<g.version&&u(c)}else u(c);return s.get(c)}return{get:o,update:l,getWireframeAttribute:f}}function P2(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function f(d,g){t.drawElements(s,g,o,d*l),n.update(g,s,1)}function c(d,g,x){if(x===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,o,d*l,x),n.update(g,s,x)}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=c}function R2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case 4:n.triangles+=o*(s/3);break;case 1:n.lines+=o*(s/2);break;case 3:n.lines+=o*(s-1);break;case 2:n.lines+=o*s;break;case 0:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function D2(t,e){return t[0]-e[0]}function N2(t,e){return Math.abs(e[1])-Math.abs(t[1])}function I2(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new yt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,c){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=x!==void 0?x.length:0;let h=s.get(f);if(h===void 0||h.count!==p){let j=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var g=j;h!==void 0&&h.texture.dispose();const _=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],S=f.morphAttributes.color||[];let C=0;_===!0&&(C=1),y===!0&&(C=2),w===!0&&(C=3);let P=f.attributes.position.count*C,V=1;P>e.maxTextureSize&&(V=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Y=new Float32Array(P*V*4*p),z=new K0(Y,P,V,p);z.type=dr,z.needsUpdate=!0;const I=C*4;for(let K=0;K<p;K++){const Q=A[K],D=L[K],G=S[K],U=P*V*4*K;for(let ie=0;ie<Q.count;ie++){const N=ie*I;_===!0&&(a.fromBufferAttribute(Q,ie),Y[U+N+0]=a.x,Y[U+N+1]=a.y,Y[U+N+2]=a.z,Y[U+N+3]=0),y===!0&&(a.fromBufferAttribute(D,ie),Y[U+N+4]=a.x,Y[U+N+5]=a.y,Y[U+N+6]=a.z,Y[U+N+7]=0),w===!0&&(a.fromBufferAttribute(G,ie),Y[U+N+8]=a.x,Y[U+N+9]=a.y,Y[U+N+10]=a.z,Y[U+N+11]=G.itemSize===4?a.w:1)}}h={count:p,texture:z,size:new Oe(P,V)},s.set(f,h),f.addEventListener("dispose",j)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const v=f.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",d),c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}else{const x=d===void 0?0:d.length;let p=i[f.id];if(p===void 0||p.length!==x){p=[];for(let y=0;y<x;y++)p[y]=[y,0];i[f.id]=p}for(let y=0;y<x;y++){const w=p[y];w[0]=y,w[1]=d[y]}p.sort(N2);for(let y=0;y<8;y++)y<x&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(D2);const h=f.morphAttributes.position,m=f.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=o[y],A=w[0],L=w[1];A!==Number.MAX_SAFE_INTEGER&&L?(h&&f.getAttribute("morphTarget"+y)!==h[A]&&f.setAttribute("morphTarget"+y,h[A]),m&&f.getAttribute("morphNormal"+y)!==m[A]&&f.setAttribute("morphNormal"+y,m[A]),r[y]=L,v+=L):(h&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),m&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const _=f.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function k2(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);return r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),c}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const av=new ln,ov=new K0,lv=new yS,uv=new rv,Op=[],Up=[],Bp=new Float32Array(16),Gp=new Float32Array(9),Vp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ul(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2fv(this.addr,e),ht(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ft(n,e))return;t.uniform3fv(this.addr,e),ht(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4fv(this.addr,e),ht(n,e)}}function B2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ht(n,e)}else{if(ft(n,i))return;Vp.set(i),t.uniformMatrix2fv(this.addr,!1,Vp),ht(n,i)}}function G2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ht(n,e)}else{if(ft(n,i))return;Gp.set(i),t.uniformMatrix3fv(this.addr,!1,Gp),ht(n,i)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ht(n,e)}else{if(ft(n,i))return;Bp.set(i),t.uniformMatrix4fv(this.addr,!1,Bp),ht(n,i)}}function W2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2iv(this.addr,e),ht(n,e)}}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3iv(this.addr,e),ht(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4iv(this.addr,e),ht(n,e)}}function $2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2uiv(this.addr,e),ht(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3uiv(this.addr,e),ht(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4uiv(this.addr,e),ht(n,e)}}function K2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||av,r)}function Q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lv,r)}function J2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||uv,r)}function eE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ov,r)}function tE(t){switch(t){case 5126:return z2;case 35664:return F2;case 35665:return O2;case 35666:return U2;case 35674:return B2;case 35675:return G2;case 35676:return V2;case 5124:case 35670:return W2;case 35667:case 35671:return H2;case 35668:case 35672:return j2;case 35669:case 35673:return X2;case 5125:return $2;case 36294:return q2;case 36295:return Y2;case 36296:return Z2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return J2;case 36289:case 36303:case 36311:case 36292:return eE}}function nE(t,e){t.uniform1fv(this.addr,e)}function iE(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function rE(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function sE(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function aE(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oE(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lE(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uE(t,e){t.uniform1iv(this.addr,e)}function cE(t,e){t.uniform2iv(this.addr,e)}function dE(t,e){t.uniform3iv(this.addr,e)}function fE(t,e){t.uniform4iv(this.addr,e)}function hE(t,e){t.uniform1uiv(this.addr,e)}function pE(t,e){t.uniform2uiv(this.addr,e)}function mE(t,e){t.uniform3uiv(this.addr,e)}function gE(t,e){t.uniform4uiv(this.addr,e)}function vE(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);ft(i,s)||(t.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||av,s[a])}function _E(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);ft(i,s)||(t.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||lv,s[a])}function xE(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);ft(i,s)||(t.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||uv,s[a])}function yE(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);ft(i,s)||(t.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ov,s[a])}function SE(t){switch(t){case 5126:return nE;case 35664:return iE;case 35665:return rE;case 35666:return sE;case 35674:return aE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return uE;case 35667:case 35671:return cE;case 35668:case 35672:return dE;case 35669:case 35673:return fE;case 5125:return hE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return yE}}class ME{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=tE(n.type)}}class wE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=SE(n.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Wp(t,e){t.seq.push(e),t.map[e.id]=e}function bE(t,e,n){const i=t.name,r=i.length;for($u.lastIndex=0;;){const s=$u.exec(i),a=$u.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Wp(n,u===void 0?new ME(o,t,e):new wE(o,t,e));break}else{let c=n.map[o];c===void 0&&(c=new EE(o),Wp(n,c)),n=c}}}class Uo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);bE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Hp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let TE=0;function CE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function AE(t){switch(t){case Mr:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function jp(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CE(t.getShaderSource(e),a)}else return r}function LE(t,e){const n=AE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function PE(t,e){let n;switch(e){case G1:n="Linear";break;case V1:n="Reinhard";break;case W1:n="OptimizedCineon";break;case H0:n="ACESFilmic";break;case H1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function DE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NE(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Js(t){return t!==""}function Xp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(IE,kE)}function kE(t,e){const n=Ae[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return id(n)}const zE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(t){return t.replace(zE,FE)}function FE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qs&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ys:case Ss:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case U1:e="ENVMAP_BLENDING_MIX";break;case B1:e="ENVMAP_BLENDING_ADD";break}return e}function VE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=OE(n),u=UE(n),f=BE(n),c=GE(n),d=VE(n),g=n.isWebGL2?"":RE(n),x=DE(s),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[x].filter(Js).join(`
`),h.length>0&&(h+=`
`),m=[g,x].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(h=[Yp(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[g,Yp(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ae.tonemapping_pars_fragment:"",n.toneMapping!==pi?PE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,LE("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=id(a),a=Xp(a,n),a=$p(a,n),o=id(o),o=Xp(o,n),o=$p(o,n),a=qp(a),o=qp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+h+a,y=v+m+o,w=Hp(r,35633,_),A=Hp(r,35632,y);if(r.attachShader(p,w),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(w).trim(),V=r.getShaderInfoLog(A).trim();let Y=!0,z=!0;if(r.getProgramParameter(p,35714)===!1){Y=!1;const I=jp(r,w,"vertex"),j=jp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+I+`
`+j)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||V==="")&&(z=!1);z&&(this.diagnostics={runnable:Y,programLog:C,vertexShader:{log:P,prefix:h},fragmentShader:{log:V,prefix:m}})}r.deleteShader(w),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Uo(r,p)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=NE(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let HE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XE(e),n.set(e,i)),i}}class XE{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}}function $E(t,e,n,i,r,s,a){const o=new of,l=new jE,u=[],f=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,C,P,V,Y){const z=V.fog,I=Y.geometry,j=S.isMeshStandardMaterial?V.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||j),Q=K&&K.mapping===kl?K.image.height:null,D=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,U=G!==void 0?G.length:0;let ie=0;I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3);let N,J,ne,F;if(D){const be=Hn[D];N=be.vertexShader,J=be.fragmentShader}else N=S.vertexShader,J=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),le=S.alphaTest>0,he=S.clearcoat>0,pe=S.iridescence>0;return{isWebGL2:f,shaderID:D,shaderName:S.type,vertexShader:N,fragmentShader:J,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:oe===null?t.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:Mr,map:!!S.map,matcap:!!S.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===uS,tangentSpaceNormalMap:S.normalMapType===zl,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Xe,clearcoat:he,clearcoatMap:he&&!!S.clearcoatMap,clearcoatRoughnessMap:he&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!S.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!S.iridescenceMap,iridescenceThicknessMap:pe&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===cs,alphaMap:!!S.alphaMap,alphaTest:le,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:c,skinning:Y.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:pi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ci,flipSided:S.side===on,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)C.push(P),C.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(m(C,S),v(C,S),C.push(t.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function m(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),S.push(o.mask)}function _(S){const C=x[S.type];let P;if(C){const V=Hn[C];P=DS.clone(V.uniforms)}else P=S.uniforms;return P}function y(S,C){let P;for(let V=0,Y=u.length;V<Y;V++){const z=u[V];if(z.cacheKey===C){P=z,++P.usedTimes;break}}return P===void 0&&(P=new WE(t,C,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function qE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function YE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(c,d,g,x,p,h){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:g,groupOrder:x,renderOrder:c.renderOrder,z:p,group:h},t[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=g,m.groupOrder=x,m.renderOrder=c.renderOrder,m.z=p,m.group=h),e++,m}function o(c,d,g,x,p,h){const m=a(c,d,g,x,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(c,d,g,x,p,h){const m=a(c,d,g,x,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(c,d){n.length>1&&n.sort(c||YE),i.length>1&&i.sort(d||Zp),r.length>1&&r.sort(d||Zp)}function f(){for(let c=e,d=t.length;c<d;c++){const g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function ZE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Kp,t.set(i,[a])):r>=s.length?(a=new Kp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function KE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new De};break;case"SpotLight":n={position:new B,direction:new B,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function QE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JE=0;function e3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function t3(t,e){const n=new KE,i=QE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new B);const s=new B,a=new dt,o=new dt;function l(f,c){let d=0,g=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let p=0,h=0,m=0,v=0,_=0,y=0,w=0,A=0,L=0,S=0;f.sort(e3);const C=c===!0?Math.PI:1;for(let V=0,Y=f.length;V<Y;V++){const z=f[V],I=z.color,j=z.intensity,K=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=I.r*j*C,g+=I.g*j*C,x+=I.b*j*C;else if(z.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(z.sh.coefficients[D],j);else if(z.isDirectionalLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const G=z.shadow,U=i.get(z);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,r.directionalShadow[p]=U,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=z.shadow.matrix,y++}r.directional[p]=D,p++}else if(z.isSpotLight){const D=n.get(z);D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(I).multiplyScalar(j*C),D.distance=K,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,r.spot[m]=D;const G=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,G.updateMatrices(z),z.castShadow&&S++),r.spotLightMatrix[m]=G.matrix,z.castShadow){const U=i.get(z);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,r.spotShadow[m]=U,r.spotShadowMap[m]=Q,A++}m++}else if(z.isRectAreaLight){const D=n.get(z);D.color.copy(I).multiplyScalar(j),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=D,v++}else if(z.isPointLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),D.distance=z.distance,D.decay=z.decay,z.castShadow){const G=z.shadow,U=i.get(z);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,r.pointShadow[h]=U,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=z.shadow.matrix,w++}r.point[h]=D,h++}else if(z.isHemisphereLight){const D=n.get(z);D.skyColor.copy(z.color).multiplyScalar(j*C),D.groundColor.copy(z.groundColor).multiplyScalar(j*C),r.hemi[_]=D,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==p||P.pointLength!==h||P.spotLength!==m||P.rectAreaLength!==v||P.hemiLength!==_||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+L-S,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=S,P.directionalLength=p,P.pointLength=h,P.spotLength=m,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=L,r.version=JE++)}function u(f,c){let d=0,g=0,x=0,p=0,h=0;const m=c.matrixWorldInverse;for(let v=0,_=f.length;v<_;v++){const y=f[v];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),x++}else if(y.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),g++}else if(y.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Qp(t,e){const n=new t3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(c){i.push(c)}function o(c){r.push(c)}function l(c){n.setup(i,c)}function u(c){n.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function n3(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Qp(t,e),n.set(s,[l])):a>=o.length?(l=new Qp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class i3 extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r3 extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o3(t,e,n){let i=new uf;const r=new Oe,s=new Oe,a=new yt,o=new i3({depthPacking:lS}),l=new r3,u={},f=n.maxTextureSize,c={[ji]:on,[on]:ji,[ci]:ci},d=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:s3,fragmentShader:a3}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new yi;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new at(x,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0,this.render=function(y,w,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Vi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let V=0,Y=y.length;V<Y;V++){const z=y[V],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==Qs?{minFilter:Ut,magFilter:Ut}:{};I.map=new wr(r.x,r.y,Q),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let Q=0;Q<K;Q++){const D=I.getViewport(Q);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),P.viewport(a),I.updateMatrices(z,Q),i=I.getFrustum(),_(w,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Qs&&m(I,A),I.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(L,S,C)};function m(y,w){const A=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wr(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(w,null,A,d,p,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(w,null,A,g,p,null)}function v(y,w,A,L,S,C){let P=null;const V=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(V!==void 0)P=V;else if(P=A.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=P.uuid,z=w.uuid;let I=u[Y];I===void 0&&(I={},u[Y]=I);let j=I[z];j===void 0&&(j=P.clone(),I[z]=j),P=j}return P.visible=w.visible,P.wireframe=w.wireframe,C===Qs?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:c[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=S),P}function _(y,w,A,L,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Qs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const V=e.update(y),Y=y.material;if(Array.isArray(Y)){const z=V.groups;for(let I=0,j=z.length;I<j;I++){const K=z[I],Q=Y[K.materialIndex];if(Q&&Q.visible){const D=v(y,Q,L,A.near,A.far,S);t.renderBufferDirect(A,null,V,D,y,K)}}}else if(Y.visible){const z=v(y,Y,L,A.near,A.far,S);t.renderBufferDirect(A,null,V,z,y,null)}}const P=y.children;for(let V=0,Y=P.length;V<Y;V++)_(P[V],w,A,L,S)}}function l3(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const H=new yt;let te=null;const ce=new yt(0,0,0,0);return{setMask:function(me){te!==me&&!R&&(t.colorMask(me,me,me,me),te=me)},setLocked:function(me){R=me},setClear:function(me,He,gt,It,On){On===!0&&(me*=It,He*=It,gt*=It),H.set(me,He,gt,It),ce.equals(H)===!1&&(t.clearColor(me,He,gt,It),ce.copy(H))},reset:function(){R=!1,te=null,ce.set(-1,0,0,0)}}}function s(){let R=!1,H=null,te=null,ce=null;return{setTest:function(me){me?le(2929):he(2929)},setMask:function(me){H!==me&&!R&&(t.depthMask(me),H=me)},setFunc:function(me){if(te!==me){switch(me){case D1:t.depthFunc(512);break;case N1:t.depthFunc(519);break;case I1:t.depthFunc(513);break;case Zc:t.depthFunc(515);break;case k1:t.depthFunc(514);break;case z1:t.depthFunc(518);break;case F1:t.depthFunc(516);break;case O1:t.depthFunc(517);break;default:t.depthFunc(515)}te=me}},setLocked:function(me){R=me},setClear:function(me){ce!==me&&(t.clearDepth(me),ce=me)},reset:function(){R=!1,H=null,te=null,ce=null}}}function a(){let R=!1,H=null,te=null,ce=null,me=null,He=null,gt=null,It=null,On=null;return{setTest:function(tt){R||(tt?le(2960):he(2960))},setMask:function(tt){H!==tt&&!R&&(t.stencilMask(tt),H=tt)},setFunc:function(tt,pn,Un){(te!==tt||ce!==pn||me!==Un)&&(t.stencilFunc(tt,pn,Un),te=tt,ce=pn,me=Un)},setOp:function(tt,pn,Un){(He!==tt||gt!==pn||It!==Un)&&(t.stencilOp(tt,pn,Un),He=tt,gt=pn,It=Un)},setLocked:function(tt){R=tt},setClear:function(tt){On!==tt&&(t.clearStencil(tt),On=tt)},reset:function(){R=!1,H=null,te=null,ce=null,me=null,He=null,gt=null,It=null,On=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,c=new WeakMap;let d={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,w=null,A=null,L=null,S=null,C=!1,P=null,V=null,Y=null,z=null,I=null;const j=t.getParameter(35661);let K=!1,Q=0;const D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(D)[1]),K=Q>=1):D.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),K=Q>=2);let G=null,U={};const ie=t.getParameter(3088),N=t.getParameter(2978),J=new yt().fromArray(ie),ne=new yt().fromArray(N);function F(R,H,te){const ce=new Uint8Array(4),me=t.createTexture();t.bindTexture(R,me),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let He=0;He<te;He++)t.texImage2D(H+He,0,6408,1,1,0,6408,5121,ce);return me}const oe={};oe[3553]=F(3553,3553,1),oe[34067]=F(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),le(2929),l.setFunc(Zc),Mt(!1),Tt(Gh),le(2884),pt(Vi);function le(R){d[R]!==!0&&(t.enable(R),d[R]=!0)}function he(R){d[R]!==!1&&(t.disable(R),d[R]=!1)}function pe(R,H){return g[R]!==H?(t.bindFramebuffer(R,H),g[R]=H,i&&(R===36009&&(g[36160]=H),R===36160&&(g[36009]=H)),!0):!1}function Se(R,H){let te=p,ce=!1;if(R)if(te=x.get(H),te===void 0&&(te=[],x.set(H,te)),R.isWebGLMultipleRenderTargets){const me=R.texture;if(te.length!==me.length||te[0]!==36064){for(let He=0,gt=me.length;He<gt;He++)te[He]=36064+He;te.length=me.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function be(R){return h!==R?(t.useProgram(R),h=R,!0):!1}const we={[Vr]:32774,[S1]:32778,[M1]:32779};if(i)we[jh]=32775,we[Xh]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(we[jh]=R.MIN_EXT,we[Xh]=R.MAX_EXT)}const Re={[w1]:0,[E1]:1,[b1]:768,[V0]:770,[R1]:776,[L1]:774,[C1]:772,[T1]:769,[W0]:771,[P1]:775,[A1]:773};function pt(R,H,te,ce,me,He,gt,It){if(R===Vi){m===!0&&(he(3042),m=!1);return}if(m===!1&&(le(3042),m=!0),R!==y1){if(R!==v||It!==C){if((_!==Vr||A!==Vr)&&(t.blendEquation(32774),_=Vr,A=Vr),It)switch(R){case cs:t.blendFuncSeparate(1,771,1,771);break;case Vh:t.blendFunc(1,1);break;case Wh:t.blendFuncSeparate(0,769,0,1);break;case Hh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case cs:t.blendFuncSeparate(770,771,1,771);break;case Vh:t.blendFunc(770,1);break;case Wh:t.blendFuncSeparate(0,769,0,1);break;case Hh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,w=null,L=null,S=null,v=R,C=It}return}me=me||H,He=He||te,gt=gt||ce,(H!==_||me!==A)&&(t.blendEquationSeparate(we[H],we[me]),_=H,A=me),(te!==y||ce!==w||He!==L||gt!==S)&&(t.blendFuncSeparate(Re[te],Re[ce],Re[He],Re[gt]),y=te,w=ce,L=He,S=gt),v=R,C=!1}function Zt(R,H){R.side===ci?he(2884):le(2884);let te=R.side===on;H&&(te=!te),Mt(te),R.blending===cs&&R.transparent===!1?pt(Vi):pt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const ce=R.stencilWrite;u.setTest(ce),ce&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),We(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?le(32926):he(32926)}function Mt(R){P!==R&&(R?t.frontFace(2304):t.frontFace(2305),P=R)}function Tt(R){R!==_1?(le(2884),R!==V&&(R===Gh?t.cullFace(1029):R===x1?t.cullFace(1028):t.cullFace(1032))):he(2884),V=R}function qe(R){R!==Y&&(K&&t.lineWidth(R),Y=R)}function We(R,H,te){R?(le(32823),(z!==H||I!==te)&&(t.polygonOffset(H,te),z=H,I=te)):he(32823)}function Fn(R){R?le(3089):he(3089)}function En(R){R===void 0&&(R=33984+j-1),G!==R&&(t.activeTexture(R),G=R)}function T(R,H,te){te===void 0&&(G===null?te=33984+j-1:te=G);let ce=U[te];ce===void 0&&(ce={type:void 0,texture:void 0},U[te]=ce),(ce.type!==R||ce.texture!==H)&&(G!==te&&(t.activeTexture(te),G=te),t.bindTexture(R,H||oe[R]),ce.type=R,ce.texture=H)}function M(){const R=U[G];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(R){J.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ve(R){ne.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ne.copy(R))}function Ue(R,H){let te=c.get(H);te===void 0&&(te=new WeakMap,c.set(H,te));let ce=te.get(R);ce===void 0&&(ce=t.getUniformBlockIndex(H,R.name),te.set(R,ce))}function Ze(R,H){const ce=c.get(H).get(R);f.get(H)!==ce&&(t.uniformBlockBinding(H,ce,R.__bindingPointIndex),f.set(H,ce))}function mt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,U={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,w=null,A=null,L=null,S=null,C=!1,P=null,V=null,Y=null,z=null,I=null,J.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:le,disable:he,bindFramebuffer:pe,drawBuffers:Se,useProgram:be,setBlending:pt,setMaterial:Zt,setFlipSided:Mt,setCullFace:Tt,setLineWidth:qe,setPolygonOffset:We,setScissorTest:Fn,activeTexture:En,bindTexture:T,unbindTexture:M,compressedTexImage2D:X,compressedTexImage3D:re,texImage2D:ge,texImage3D:Te,updateUBOMapping:Ue,uniformBlockBinding:Ze,texStorage2D:Z,texStorage3D:Ee,texSubImage2D:se,texSubImage3D:ue,compressedTexSubImage2D:_e,compressedTexSubImage3D:fe,scissor:Me,viewport:ve,reset:mt}}function u3(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,c=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return m?new OffscreenCanvas(T,M):pl("canvas")}function _(T,M,X,re){let se=1;if((T.width>re||T.height>re)&&(se=re/Math.max(T.width,T.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=M?fS:Math.floor,_e=ue(se*T.width),fe=ue(se*T.height);p===void 0&&(p=v(_e,fe));const Z=X?v(_e,fe):p;return Z.width=_e,Z.height=fe,Z.getContext("2d").drawImage(T,0,0,_e,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+fe+")."),Z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return xp(T.width)&&xp(T.height)}function w(T){return o?!1:T.wrapS!==Dn||T.wrapT!==Dn||T.minFilter!==Ut&&T.minFilter!==_n}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ut&&T.minFilter!==_n}function L(T){t.generateMipmap(T)}function S(T,M,X,re,se=!1){if(o===!1)return M;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=M;return M===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),M===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),M===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=re===Xe&&se===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function C(T,M,X){return A(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){return T===Ut||T===$h||T===vu?9728:9729}function V(T){const M=T.target;M.removeEventListener("dispose",V),z(M),M.isVideoTexture&&x.delete(M)}function Y(T){const M=T.target;M.removeEventListener("dispose",Y),j(M)}function z(T){const M=i.get(T);if(M.__webglInit===void 0)return;const X=T.source,re=h.get(X);if(re){const se=re[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&I(T),Object.keys(re).length===0&&h.delete(X)}i.remove(T)}function I(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const X=T.source,re=h.get(X);delete re[M.__cacheKey],a.memory.textures--}function j(T){const M=T.texture,X=i.get(T),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)t.deleteFramebuffer(X.__webglFramebuffer[se]),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[se]);else{if(t.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,ue=M.length;se<ue;se++){const _e=i.get(M[se]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(T)}let K=0;function Q(){K=0}function D(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function G(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function U(T,M){const X=i.get(T);if(T.isVideoTexture&&Fn(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,T,M);return}}n.bindTexture(3553,X.__webglTexture,33984+M)}function ie(T,M){const X=i.get(T);if(T.version>0&&X.__version!==T.version){he(X,T,M);return}n.bindTexture(35866,X.__webglTexture,33984+M)}function N(T,M){const X=i.get(T);if(T.version>0&&X.__version!==T.version){he(X,T,M);return}n.bindTexture(32879,X.__webglTexture,33984+M)}function J(T,M){const X=i.get(T);if(T.version>0&&X.__version!==T.version){pe(X,T,M);return}n.bindTexture(34067,X.__webglTexture,33984+M)}const ne={[Jc]:10497,[Dn]:33071,[ed]:33648},F={[Ut]:9728,[$h]:9984,[vu]:9986,[_n]:9729,[j1]:9985,[Ra]:9987};function oe(T,M,X){if(X?(t.texParameteri(T,10242,ne[M.wrapS]),t.texParameteri(T,10243,ne[M.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,ne[M.wrapR]),t.texParameteri(T,10240,F[M.magFilter]),t.texParameteri(T,10241,F[M.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(M.wrapS!==Dn||M.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,P(M.magFilter)),t.texParameteri(T,10241,P(M.minFilter)),M.minFilter!==Ut&&M.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ut||M.minFilter!==vu&&M.minFilter!==Ra||M.type===dr&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function le(T,M){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",V));const re=M.source;let se=h.get(re);se===void 0&&(se={},h.set(re,se));const ue=G(M);if(ue!==T.__cacheKey){se[ue]===void 0&&(se[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),se[ue].usedTimes++;const _e=se[T.__cacheKey];_e!==void 0&&(se[T.__cacheKey].usedTimes--,_e.usedTimes===0&&I(M)),T.__cacheKey=ue,T.__webglTexture=se[ue].texture}return X}function he(T,M,X){let re=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=35866),M.isData3DTexture&&(re=32879);const se=le(T,M),ue=M.source;n.bindTexture(re,T.__webglTexture,33984+X);const _e=i.get(ue);if(ue.version!==_e.__version||se===!0){n.activeTexture(33984+X),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const fe=w(M)&&y(M.image)===!1;let Z=_(M.image,fe,!1,f);Z=En(M,Z);const Ee=y(Z)||o,ge=s.convert(M.format,M.encoding);let Te=s.convert(M.type),Me=S(M.internalFormat,ge,Te,M.encoding,M.isVideoTexture);oe(re,M,Ee);let ve;const Ue=M.mipmaps,Ze=o&&M.isVideoTexture!==!0,mt=_e.__version===void 0||se===!0,R=C(M,Z,Ee);if(M.isDepthTexture)Me=6402,o?M.type===dr?Me=36012:M.type===cr?Me=33190:M.type===ds?Me=35056:Me=33189:M.type===dr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===mr&&Me===6402&&M.type!==X0&&M.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=cr,Te=s.convert(M.type)),M.format===Ms&&Me===6402&&(Me=34041,M.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ds,Te=s.convert(M.type))),mt&&(Ze?n.texStorage2D(3553,1,Me,Z.width,Z.height):n.texImage2D(3553,0,Me,Z.width,Z.height,0,ge,Te,null));else if(M.isDataTexture)if(Ue.length>0&&Ee){Ze&&mt&&n.texStorage2D(3553,R,Me,Ue[0].width,Ue[0].height);for(let H=0,te=Ue.length;H<te;H++)ve=Ue[H],Ze?n.texSubImage2D(3553,H,0,0,ve.width,ve.height,ge,Te,ve.data):n.texImage2D(3553,H,Me,ve.width,ve.height,0,ge,Te,ve.data);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(3553,R,Me,Z.width,Z.height),n.texSubImage2D(3553,0,0,0,Z.width,Z.height,ge,Te,Z.data)):n.texImage2D(3553,0,Me,Z.width,Z.height,0,ge,Te,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&mt&&n.texStorage3D(35866,R,Me,Ue[0].width,Ue[0].height,Z.depth);for(let H=0,te=Ue.length;H<te;H++)ve=Ue[H],M.format!==Nn?ge!==null?Ze?n.compressedTexSubImage3D(35866,H,0,0,0,ve.width,ve.height,Z.depth,ge,ve.data,0,0):n.compressedTexImage3D(35866,H,Me,ve.width,ve.height,Z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(35866,H,0,0,0,ve.width,ve.height,Z.depth,ge,Te,ve.data):n.texImage3D(35866,H,Me,ve.width,ve.height,Z.depth,0,ge,Te,ve.data)}else{Ze&&mt&&n.texStorage2D(3553,R,Me,Ue[0].width,Ue[0].height);for(let H=0,te=Ue.length;H<te;H++)ve=Ue[H],M.format!==Nn?ge!==null?Ze?n.compressedTexSubImage2D(3553,H,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(3553,H,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(3553,H,0,0,ve.width,ve.height,ge,Te,ve.data):n.texImage2D(3553,H,Me,ve.width,ve.height,0,ge,Te,ve.data)}else if(M.isDataArrayTexture)Ze?(mt&&n.texStorage3D(35866,R,Me,Z.width,Z.height,Z.depth),n.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,ge,Te,Z.data)):n.texImage3D(35866,0,Me,Z.width,Z.height,Z.depth,0,ge,Te,Z.data);else if(M.isData3DTexture)Ze?(mt&&n.texStorage3D(32879,R,Me,Z.width,Z.height,Z.depth),n.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,ge,Te,Z.data)):n.texImage3D(32879,0,Me,Z.width,Z.height,Z.depth,0,ge,Te,Z.data);else if(M.isFramebufferTexture){if(mt)if(Ze)n.texStorage2D(3553,R,Me,Z.width,Z.height);else{let H=Z.width,te=Z.height;for(let ce=0;ce<R;ce++)n.texImage2D(3553,ce,Me,H,te,0,ge,Te,null),H>>=1,te>>=1}}else if(Ue.length>0&&Ee){Ze&&mt&&n.texStorage2D(3553,R,Me,Ue[0].width,Ue[0].height);for(let H=0,te=Ue.length;H<te;H++)ve=Ue[H],Ze?n.texSubImage2D(3553,H,0,0,ge,Te,ve):n.texImage2D(3553,H,Me,ge,Te,ve);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(3553,R,Me,Z.width,Z.height),n.texSubImage2D(3553,0,0,0,ge,Te,Z)):n.texImage2D(3553,0,Me,ge,Te,Z);A(M,Ee)&&L(re),_e.__version=ue.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pe(T,M,X){if(M.image.length!==6)return;const re=le(T,M),se=M.source;n.bindTexture(34067,T.__webglTexture,33984+X);const ue=i.get(se);if(se.version!==ue.__version||re===!0){n.activeTexture(33984+X),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let H=0;H<6;H++)!_e&&!fe?Z[H]=_(M.image[H],!1,!0,u):Z[H]=fe?M.image[H].image:M.image[H],Z[H]=En(M,Z[H]);const Ee=Z[0],ge=y(Ee)||o,Te=s.convert(M.format,M.encoding),Me=s.convert(M.type),ve=S(M.internalFormat,Te,Me,M.encoding),Ue=o&&M.isVideoTexture!==!0,Ze=ue.__version===void 0||re===!0;let mt=C(M,Ee,ge);oe(34067,M,ge);let R;if(_e){Ue&&Ze&&n.texStorage2D(34067,mt,ve,Ee.width,Ee.height);for(let H=0;H<6;H++){R=Z[H].mipmaps;for(let te=0;te<R.length;te++){const ce=R[te];M.format!==Nn?Te!==null?Ue?n.compressedTexSubImage2D(34069+H,te,0,0,ce.width,ce.height,Te,ce.data):n.compressedTexImage2D(34069+H,te,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(34069+H,te,0,0,ce.width,ce.height,Te,Me,ce.data):n.texImage2D(34069+H,te,ve,ce.width,ce.height,0,Te,Me,ce.data)}}}else{R=M.mipmaps,Ue&&Ze&&(R.length>0&&mt++,n.texStorage2D(34067,mt,ve,Z[0].width,Z[0].height));for(let H=0;H<6;H++)if(fe){Ue?n.texSubImage2D(34069+H,0,0,0,Z[H].width,Z[H].height,Te,Me,Z[H].data):n.texImage2D(34069+H,0,ve,Z[H].width,Z[H].height,0,Te,Me,Z[H].data);for(let te=0;te<R.length;te++){const me=R[te].image[H].image;Ue?n.texSubImage2D(34069+H,te+1,0,0,me.width,me.height,Te,Me,me.data):n.texImage2D(34069+H,te+1,ve,me.width,me.height,0,Te,Me,me.data)}}else{Ue?n.texSubImage2D(34069+H,0,0,0,Te,Me,Z[H]):n.texImage2D(34069+H,0,ve,Te,Me,Z[H]);for(let te=0;te<R.length;te++){const ce=R[te];Ue?n.texSubImage2D(34069+H,te+1,0,0,Te,Me,ce.image[H]):n.texImage2D(34069+H,te+1,ve,Te,Me,ce.image[H])}}}A(M,ge)&&L(34067),ue.__version=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Se(T,M,X,re,se){const ue=s.convert(X.format,X.encoding),_e=s.convert(X.type),fe=S(X.internalFormat,ue,_e,X.encoding);i.get(M).__hasExternalTextures||(se===32879||se===35866?n.texImage3D(se,0,fe,M.width,M.height,M.depth,0,ue,_e,null):n.texImage2D(se,0,fe,M.width,M.height,0,ue,_e,null)),n.bindFramebuffer(36160,T),We(M)?d.framebufferTexture2DMultisampleEXT(36160,re,se,i.get(X).__webglTexture,0,qe(M)):(se===3553||se>=34069&&se<=34074)&&t.framebufferTexture2D(36160,re,se,i.get(X).__webglTexture,0),n.bindFramebuffer(36160,null)}function be(T,M,X){if(t.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let re=33189;if(X||We(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===dr?re=36012:se.type===cr&&(re=33190));const ue=qe(M);We(M)?d.renderbufferStorageMultisampleEXT(36161,ue,re,M.width,M.height):t.renderbufferStorageMultisample(36161,ue,re,M.width,M.height)}else t.renderbufferStorage(36161,re,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const re=qe(M);X&&We(M)===!1?t.renderbufferStorageMultisample(36161,re,35056,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(36161,re,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<re.length;se++){const ue=re[se],_e=s.convert(ue.format,ue.encoding),fe=s.convert(ue.type),Z=S(ue.internalFormat,_e,fe,ue.encoding),Ee=qe(M);X&&We(M)===!1?t.renderbufferStorageMultisample(36161,Ee,Z,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(36161,Ee,Z,M.width,M.height):t.renderbufferStorage(36161,Z,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function we(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,se=qe(M);if(M.depthTexture.format===mr)We(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,se):t.framebufferTexture2D(36160,36096,3553,re,0);else if(M.depthTexture.format===Ms)We(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,se):t.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Re(T){const M=i.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,T)}else if(X){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(36160,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),be(M.__webglDepthbuffer[re],T,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),be(M.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function pt(T,M,X){const re=i.get(T);M!==void 0&&Se(re.__webglFramebuffer,T,T.texture,36064,3553),X!==void 0&&Re(T)}function Zt(T){const M=T.texture,X=i.get(T),re=i.get(M);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,_e=y(T)||o;if(se){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)X.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(X.__webglFramebuffer=t.createFramebuffer(),ue)if(r.drawBuffers){const fe=T.texture;for(let Z=0,Ee=fe.length;Z<Ee;Z++){const ge=i.get(fe[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&We(T)===!1){const fe=ue?M:[M];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Z=0;Z<fe.length;Z++){const Ee=fe[Z];X.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Z]);const ge=s.convert(Ee.format,Ee.encoding),Te=s.convert(Ee.type),Me=S(Ee.internalFormat,ge,Te,Ee.encoding,T.isXRRenderTarget===!0),ve=qe(T);t.renderbufferStorageMultisample(36161,ve,Me,T.width,T.height),t.framebufferRenderbuffer(36160,36064+Z,36161,X.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),be(X.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(se){n.bindTexture(34067,re.__webglTexture),oe(34067,M,_e);for(let fe=0;fe<6;fe++)Se(X.__webglFramebuffer[fe],T,M,36064,34069+fe);A(M,_e)&&L(34067),n.unbindTexture()}else if(ue){const fe=T.texture;for(let Z=0,Ee=fe.length;Z<Ee;Z++){const ge=fe[Z],Te=i.get(ge);n.bindTexture(3553,Te.__webglTexture),oe(3553,ge,_e),Se(X.__webglFramebuffer,T,ge,36064+Z,3553),A(ge,_e)&&L(3553)}n.unbindTexture()}else{let fe=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?fe=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,re.__webglTexture),oe(fe,M,_e),Se(X.__webglFramebuffer,T,M,36064,fe),A(M,_e)&&L(fe),n.unbindTexture()}T.depthBuffer&&Re(T)}function Mt(T){const M=y(T)||o,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,se=X.length;re<se;re++){const ue=X[re];if(A(ue,M)){const _e=T.isWebGLCubeRenderTarget?34067:3553,fe=i.get(ue).__webglTexture;n.bindTexture(_e,fe),L(_e),n.unbindTexture()}}}function Tt(T){if(o&&T.samples>0&&We(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],X=T.width,re=T.height;let se=16384;const ue=[],_e=T.stencilBuffer?33306:36096,fe=i.get(T),Z=T.isWebGLMultipleRenderTargets===!0;if(Z)for(let Ee=0;Ee<M.length;Ee++)n.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ee,36161,null),n.bindFramebuffer(36160,fe.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ee,3553,null,0);n.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){ue.push(36064+Ee),T.depthBuffer&&ue.push(_e);const ge=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ge===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),Z&&t.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Ee]),ge===!0&&(t.invalidateFramebuffer(36008,[_e]),t.invalidateFramebuffer(36009,[_e])),Z){const Te=i.get(M[Ee]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Te,0)}t.blitFramebuffer(0,0,X,re,0,0,X,re,se,9728),g&&t.invalidateFramebuffer(36008,ue)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Z)for(let Ee=0;Ee<M.length;Ee++){n.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ee,36161,fe.__webglColorRenderbuffer[Ee]);const ge=i.get(M[Ee]).__webglTexture;n.bindFramebuffer(36160,fe.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ee,3553,ge,0)}n.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function qe(T){return Math.min(c,T.samples)}function We(T){const M=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fn(T){const M=a.render.frame;x.get(T)!==M&&(x.set(T,M),T.update())}function En(T,M){const X=T.encoding,re=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===td||X!==Mr&&(X===Xe?o===!1?e.has("EXT_sRGB")===!0&&re===Nn?(T.format=td,T.minFilter=_n,T.generateMipmaps=!1):M=Y0.sRGBToLinear(M):(re!==Nn||se!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=U,this.setTexture2DArray=ie,this.setTexture3D=N,this.setTextureCube=J,this.rebindTextures=pt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=We}function c3(t,e,n){const i=n.isWebGL2;function r(s,a=null){let o;if(s===Sr)return 5121;if(s===Y1)return 32819;if(s===Z1)return 32820;if(s===X1)return 5120;if(s===$1)return 5122;if(s===X0)return 5123;if(s===q1)return 5124;if(s===cr)return 5125;if(s===dr)return 5126;if(s===Da)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===K1)return 6406;if(s===Nn)return 6408;if(s===Q1)return 6409;if(s===J1)return 6410;if(s===mr)return 6402;if(s===Ms)return 34041;if(s===td)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===eS)return 6403;if(s===tS)return 36244;if(s===nS)return 33319;if(s===iS)return 33320;if(s===rS)return 36249;if(s===_u||s===xu||s===yu||s===Su)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===_u)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===_u)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Su)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qh||s===Yh||s===Zh||s===Kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sS)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qh||s===Jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qh)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===up||s===cp||s===dp||s===fp||s===hp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ep)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hp)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mu)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===aS||s===pp||s===mp||s===gp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Mu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ds?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class d3 extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f3={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i),m=this._getHandJoint(u,p);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f3)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class h3 extends ln{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:mr,f!==mr&&f!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===mr&&(i=cr),i===void 0&&f===Ms&&(i=ds),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class p3 extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,c=null,d=null,g=null,x=null;const p=n.getContextAttributes();let h=null,m=null;const v=[],_=[],y=new Set,w=new Map,A=new rn;A.layers.enable(1),A.viewport=new yt;const L=new rn;L.layers.enable(2),L.viewport=new yt;const S=[A,L],C=new d3;C.layers.enable(1),C.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let J=v[N];return J===void 0&&(J=new qu,v[N]=J),J.getTargetRaySpace()},this.getControllerGrip=function(N){let J=v[N];return J===void 0&&(J=new qu,v[N]=J),J.getGripSpace()},this.getHand=function(N){let J=v[N];return J===void 0&&(J=new qu,v[N]=J),J.getHandSpace()};function Y(N){const J=_.indexOf(N.inputSource);if(J===-1)return;const ne=v[J];ne!==void 0&&ne.dispatchEvent({type:N.type,data:N.inputSource})}function z(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let N=0;N<v.length;N++){const J=_[N];J!==null&&(_[N]=null,v[N].disconnect(J))}P=null,V=null,e.setRenderTarget(h),g=null,d=null,c=null,r=null,m=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return c},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:g}),m=new wr(g.framebufferWidth,g.framebufferHeight,{format:Nn,type:Sr,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let J=null,ne=null,F=null;p.depth&&(F=p.stencil?35056:33190,J=p.stencil?Ms:mr,ne=p.stencil?ds:cr);const oe={colorFormat:32856,depthFormat:F,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),m=new wr(d.textureWidth,d.textureHeight,{format:Nn,type:Sr,depthTexture:new h3(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const le=e.properties.get(m);le.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(N){for(let J=0;J<N.removed.length;J++){const ne=N.removed[J],F=_.indexOf(ne);F>=0&&(_[F]=null,v[F].disconnect(ne))}for(let J=0;J<N.added.length;J++){const ne=N.added[J];let F=_.indexOf(ne);if(F===-1){for(let le=0;le<v.length;le++)if(le>=_.length){_.push(ne),F=le;break}else if(_[le]===null){_[le]=ne,F=le;break}if(F===-1)break}const oe=v[F];oe&&oe.connect(ne)}}const j=new B,K=new B;function Q(N,J,ne){j.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const F=j.distanceTo(K),oe=J.projectionMatrix.elements,le=ne.projectionMatrix.elements,he=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),Se=(oe[9]+1)/oe[5],be=(oe[9]-1)/oe[5],we=(oe[8]-1)/oe[0],Re=(le[8]+1)/le[0],pt=he*we,Zt=he*Re,Mt=F/(-we+Re),Tt=Mt*-we;J.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Tt),N.translateZ(Mt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const qe=he+Mt,We=pe+Mt,Fn=pt-Tt,En=Zt+(F-Tt),T=Se*pe/We*qe,M=be*pe/We*qe;N.projectionMatrix.makePerspective(Fn,En,T,M,qe,We)}function D(N,J){J===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(J.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=L.near=A.near=N.near,C.far=L.far=A.far=N.far,(P!==C.near||V!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,V=C.far);const J=N.parent,ne=C.cameras;D(C,J);for(let oe=0;oe<ne.length;oe++)D(ne[oe],J);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const F=N.children;for(let oe=0,le=F.length;oe<le;oe++)F[oe].updateMatrixWorld(!0);ne.length===2?Q(C,A,L):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=N)},this.getPlanes=function(){return y};let G=null;function U(N,J){if(f=J.getViewerPose(u||a),x=J,f!==null){const ne=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let F=!1;ne.length!==C.cameras.length&&(C.cameras.length=0,F=!0);for(let oe=0;oe<ne.length;oe++){const le=ne[oe];let he=null;if(g!==null)he=g.getViewport(le);else{const Se=c.getViewSubImage(d,le);he=Se.viewport,oe===0&&(e.setRenderTargetTextures(m,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let pe=S[oe];pe===void 0&&(pe=new rn,pe.layers.enable(oe),pe.viewport=new yt,S[oe]=pe),pe.matrix.fromArray(le.transform.matrix),pe.projectionMatrix.fromArray(le.projectionMatrix),pe.viewport.set(he.x,he.y,he.width,he.height),oe===0&&C.matrix.copy(pe.matrix),F===!0&&C.cameras.push(pe)}}for(let ne=0;ne<v.length;ne++){const F=_[ne],oe=v[ne];F!==null&&oe!==void 0&&oe.update(F,J,u||a)}if(G&&G(N,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ne=null;for(const F of y)J.detectedPlanes.has(F)||(ne===null&&(ne=[]),ne.push(F));if(ne!==null)for(const F of ne)y.delete(F),w.delete(F),i.dispatchEvent({type:"planeremoved",data:F});for(const F of J.detectedPlanes)if(!y.has(F))y.add(F),w.set(F,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:F});else{const oe=w.get(F);F.lastChangedTime>oe&&(w.set(F,F.lastChangedTime),i.dispatchEvent({type:"planechanged",data:F}))}}x=null}const ie=new sv;ie.setAnimationLoop(U),this.setAnimationLoop=function(N){G=N},this.dispose=function(){}}}function m3(t,e){function n(p,h){h.color.getRGB(p.fogColor.value,nv(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),c(p,h),h.isMeshPhysicalMaterial&&d(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===on&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===on&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function c(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===on&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g3(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",h));const w=_.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function f(v){const _=c();v.__bindingPointIndex=_;const y=t.createBuffer(),w=v.__size,A=v.usage;return t.bindBuffer(35345,y),t.bufferData(35345,w,A),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,y),y}function c(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(35345,_);for(let A=0,L=y.length;A<L;A++){const S=y[A];if(g(S,A,w)===!0){const C=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let Y=0;Y<P.length;Y++){const z=P[Y],I=p(z);typeof z=="number"?(S.__data[0]=z,t.bufferSubData(35345,C+V,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=z.elements[0],S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=z.elements[0],S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=z.elements[0]):(z.toArray(S.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,C,S.__data)}}t.bindBuffer(35345,null)}function g(v,_,y){const w=v.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{const A=Array.isArray(w)?w:[w],L=[];for(let S=0;S<A.length;S++)L.push(A[S].clone());y[_]=L}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const A=Array.isArray(y[_])?y[_]:[y[_]],L=Array.isArray(w)?w:[w];for(let S=0;S<A.length;S++){const C=A[S];if(C.equals(L[S])===!1)return C.copy(L[S]),!0}}return!1}function x(v){const _=v.uniforms;let y=0;const w=16;let A=0;for(let L=0,S=_.length;L<S;L++){const C=_[L],P={boundary:0,storage:0},V=Array.isArray(C.value)?C.value:[C.value];for(let Y=0,z=V.length;Y<z;Y++){const I=V[Y],j=p(I);P.boundary+=j.boundary,P.storage+=j.storage}if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,L>0){A=y%w;const Y=w-A;A!==0&&Y-P.boundary<0&&(y+=w-A,C.__offset=y)}y+=P.storage}return A=y%w,A>0&&(y+=w-A),v.__size=y,v.__cache={},this}function p(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function h(v){const _=v.target;_.removeEventListener("dispose",h);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:m}}function v3(){const t=pl("canvas");return t.style.display="block",t}function df(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:v3(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,o=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let f;n!==null?f=n.getContextAttributes().alpha:f=t.alpha!==void 0?t.alpha:!1;let c=null,d=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.useLegacyLights=!0,this.toneMapping=pi,this.toneMappingExposure=1;const p=this;let h=!1,m=0,v=0,_=null,y=-1,w=null;const A=new yt,L=new yt;let S=null,C=e.width,P=e.height,V=1,Y=null,z=null;const I=new yt(0,0,C,P),j=new yt(0,0,C,P);let K=!1;const Q=new uf;let D=!1,G=!1,U=null;const ie=new dt,N=new B,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return _===null?V:1}let F=n;function oe(E,O){for(let W=0;W<E.length;W++){const k=E[W],$=e.getContext(k,O);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sf}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",ve,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),F=oe(O,E),F===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let le,he,pe,Se,be,we,Re,pt,Zt,Mt,Tt,qe,We,Fn,En,T,M,X,re,se,ue,_e,fe,Z;function Ee(){le=new A2(F),he=new S2(F,le,t),le.init(he),_e=new c3(F,le,he),pe=new l3(F,le,he),Se=new R2,be=new qE,we=new u3(F,le,pe,be,he,_e,Se),Re=new w2(p),pt=new C2(p),Zt=new US(F,he),fe=new x2(F,le,Zt,he),Mt=new L2(F,Zt,Se,fe),Tt=new k2(F,Mt,Zt,Se),re=new I2(F,he,we),T=new M2(be),qe=new $E(p,Re,pt,le,he,fe,T),We=new m3(p,be),Fn=new ZE,En=new n3(le,he),X=new _2(p,Re,pt,pe,Tt,f,a),M=new o3(p,Tt,he),Z=new g3(F,Se,he,pe),se=new y2(F,le,Se,he),ue=new P2(F,le,Se,he),Se.programs=qe.programs,p.capabilities=he,p.extensions=le,p.properties=be,p.renderLists=Fn,p.shadowMap=M,p.state=pe,p.info=Se}Ee();const ge=new p3(p,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,O,W=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(C*V,P*V).floor()},this.setDrawingBufferSize=function(E,O,W){C=E,P=O,V=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,O,W,k){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,O,W,k),pe.viewport(A.copy(I).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,O,W,k){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,O,W,k),pe.scissor(L.copy(j).multiplyScalar(V).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){pe.setScissorTest(K=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E=!0,O=!0,W=!0){let k=0;E&&(k|=16384),O&&(k|=256),W&&(k|=1024),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),Fn.dispose(),En.dispose(),be.dispose(),Re.dispose(),pt.dispose(),Tt.dispose(),fe.dispose(),Z.dispose(),qe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",te),ge.removeEventListener("sessionend",ce),U&&(U.dispose(),U=null),me.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Se.autoReset,O=M.enabled,W=M.autoUpdate,k=M.needsUpdate,$=M.type;Ee(),Se.autoReset=E,M.enabled=O,M.autoUpdate=W,M.needsUpdate=k,M.type=$}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const O=E.target;O.removeEventListener("dispose",Ue),Ze(O)}function Ze(E){mt(E),be.remove(E)}function mt(E){const O=be.get(E).programs;O!==void 0&&(O.forEach(function(W){qe.releaseProgram(W)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,k,$,xe){O===null&&(O=J);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Le=pv(E,O,W,k,$);pe.setMaterial(k,Ce);let Pe=W.index,Be=1;k.wireframe===!0&&(Pe=Mt.getWireframeAttribute(W),Be=2);const Ie=W.drawRange,ke=W.attributes.position;let it=Ie.start*Be,Kt=(Ie.start+Ie.count)*Be;xe!==null&&(it=Math.max(it,xe.start*Be),Kt=Math.min(Kt,(xe.start+xe.count)*Be)),Pe!==null?(it=Math.max(it,0),Kt=Math.min(Kt,Pe.count)):ke!=null&&(it=Math.max(it,0),Kt=Math.min(Kt,ke.count));const Qn=Kt-it;if(Qn<0||Qn===1/0)return;fe.setup($,k,Le,W,Pe);let Yi,rt=se;if(Pe!==null&&(Yi=Zt.get(Pe),rt=ue,rt.setIndex(Yi)),$.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*ne()),rt.setMode(1)):rt.setMode(4);else if($.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*ne()),$.isLineSegments?rt.setMode(1):$.isLineLoop?rt.setMode(2):rt.setMode(3)}else $.isPoints?rt.setMode(0):$.isSprite&&rt.setMode(4);if($.isInstancedMesh)rt.renderInstances(it,Qn,$.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bl=Math.min(W.instanceCount,ze);rt.renderInstances(it,Qn,Bl)}else rt.render(it,Qn)},this.compile=function(E,O){function W(k,$,xe){k.transparent===!0&&k.side===ci&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,pn(k,$,xe),k.side=ji,k.needsUpdate=!0,pn(k,$,xe),k.side=ci):pn(k,$,xe)}d=En.get(E),d.init(),x.push(d),E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(p.useLegacyLights),E.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let xe=0;xe<$.length;xe++){const Ce=$[xe];W(Ce,E,k)}else W($,E,k)}),x.pop(),d=null};let R=null;function H(E){R&&R(E)}function te(){me.stop()}function ce(){me.start()}const me=new sv;me.setAnimationLoop(H),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(E){R=E,ge.setAnimationLoop(E),E===null?me.stop():me.start()},ge.addEventListener("sessionstart",te),ge.addEventListener("sessionend",ce),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(O),O=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,O,_),d=En.get(E,x.length),d.init(),x.push(d),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(ie),G=this.localClippingEnabled,D=T.init(this.clippingPlanes,G),c=Fn.get(E,g.length),c.init(),g.push(c),He(E,O,0,p.sortObjects),c.finish(),p.sortObjects===!0&&c.sort(Y,z),D===!0&&T.beginShadows();const W=d.state.shadowsArray;if(M.render(W,E,O),D===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(c,E),d.setupLights(p.useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let $=0,xe=k.length;$<xe;$++){const Ce=k[$];gt(c,E,Ce,Ce.viewport)}}else gt(c,E,O);_!==null&&(we.updateMultisampleRenderTarget(_),we.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,O),fe.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,g.pop(),g.length>0?c=g[g.length-1]:c=null};function He(E,O,W,k){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){k&&N.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ce=Tt.update(E),Le=E.material;Le.visible&&c.push(E,Ce,Le,W,N.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Se.render.frame&&(E.skeleton.update(),E.skeleton.frame=Se.render.frame),!E.frustumCulled||Q.intersectsObject(E))){k&&N.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ce=Tt.update(E),Le=E.material;if(Array.isArray(Le)){const Pe=Ce.groups;for(let Be=0,Ie=Pe.length;Be<Ie;Be++){const ke=Pe[Be],it=Le[ke.materialIndex];it&&it.visible&&c.push(E,Ce,it,W,N.z,ke)}}else Le.visible&&c.push(E,Ce,Le,W,N.z,null)}}const xe=E.children;for(let Ce=0,Le=xe.length;Ce<Le;Ce++)He(xe[Ce],O,W,k)}function gt(E,O,W,k){const $=E.opaque,xe=E.transmissive,Ce=E.transparent;d.setupLightsView(W),D===!0&&T.setGlobalState(p.clippingPlanes,W),xe.length>0&&It($,O,W),k&&pe.viewport(A.copy(k)),$.length>0&&On($,O,W),xe.length>0&&On(xe,O,W),Ce.length>0&&On(Ce,O,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function It(E,O,W){const k=he.isWebGL2;U===null&&(U=new wr(1024,1024,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Da:Sr,minFilter:Ra,samples:k&&s===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(U),p.clear();const xe=p.toneMapping;p.toneMapping=pi,On(E,O,W),p.toneMapping=xe,we.updateMultisampleRenderTarget(U),we.updateRenderTargetMipmap(U),p.setRenderTarget($)}function On(E,O,W){const k=O.isScene===!0?O.overrideMaterial:null;for(let $=0,xe=E.length;$<xe;$++){const Ce=E[$],Le=Ce.object,Pe=Ce.geometry,Be=k===null?Ce.material:k,Ie=Ce.group;Le.layers.test(W.layers)&&tt(Le,O,W,Pe,Be,Ie)}}function tt(E,O,W,k,$,xe){E.onBeforeRender(p,O,W,k,$,xe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,O,W,k,E,xe),$.transparent===!0&&$.side===ci&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,p.renderBufferDirect(W,O,k,$,E,xe),$.side=ji,$.needsUpdate=!0,p.renderBufferDirect(W,O,k,$,E,xe),$.side=ci):p.renderBufferDirect(W,O,k,$,E,xe),E.onAfterRender(p,O,W,k,$,xe)}function pn(E,O,W){O.isScene!==!0&&(O=J);const k=be.get(E),$=d.state.lights,xe=d.state.shadowsArray,Ce=$.state.version,Le=qe.getParameters(E,$.state,xe,O,W),Pe=qe.getProgramCacheKey(Le);let Be=k.programs;k.environment=E.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(E.isMeshStandardMaterial?pt:Re).get(E.envMap||k.environment),Be===void 0&&(E.addEventListener("dispose",Ue),Be=new Map,k.programs=Be);let Ie=Be.get(Pe);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===Ce)return Un(E,Le),Ie}else Le.uniforms=qe.getUniforms(E),E.onBuild(W,Le,p),E.onBeforeCompile(Le,p),Ie=qe.acquireProgram(Le,Pe),Be.set(Pe,Ie),k.uniforms=Le.uniforms;const ke=k.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=T.uniform),Un(E,Le),k.needsLights=gv(E),k.lightsStateVersion=Ce,k.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMap.value=$.state.directionalShadowMap,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotShadowMap.value=$.state.spotShadowMap,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMap.value=$.state.pointShadowMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix);const it=Ie.getUniforms(),Kt=Uo.seqWithValue(it.seq,ke);return k.currentProgram=Ie,k.uniformsList=Kt,Ie}function Un(E,O){const W=be.get(E);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function pv(E,O,W,k,$){O.isScene!==!0&&(O=J),we.resetTextureUnits();const xe=O.fog,Ce=k.isMeshStandardMaterial?O.environment:null,Le=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Mr,Pe=(k.isMeshStandardMaterial?pt:Re).get(k.envMap||Ce),Be=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!k.normalMap&&!!W.attributes.tangent,ke=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Kt=!!W.morphAttributes.color,Qn=k.toneMapped?p.toneMapping:pi,Yi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=Yi!==void 0?Yi.length:0,ze=be.get(k),Bl=d.state.lights;if(D===!0&&(G===!0||E!==w)){const Qt=E===w&&k.id===y;T.setState(k,E,Qt)}let vt=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Bl.state.version||ze.outputEncoding!==Le||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Pe||k.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==T.numPlanes||ze.numIntersection!==T.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Ie||ze.morphTargets!==ke||ze.morphNormals!==it||ze.morphColors!==Kt||ze.toneMapping!==Qn||he.isWebGL2===!0&&ze.morphTargetsCount!==rt)&&(vt=!0):(vt=!0,ze.__version=k.version);let Zi=ze.currentProgram;vt===!0&&(Zi=pn(k,O,$));let pf=!1,Rs=!1,Gl=!1;const kt=Zi.getUniforms(),Ki=ze.uniforms;if(pe.useProgram(Zi.program)&&(pf=!0,Rs=!0,Gl=!0),k.id!==y&&(y=k.id,Rs=!0),pf||w!==E){if(kt.setValue(F,"projectionMatrix",E.projectionMatrix),he.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,Rs=!0,Gl=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Qt=kt.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,N.setFromMatrixPosition(E.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&kt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&kt.setValue(F,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){kt.setOptional(F,$,"bindMatrix"),kt.setOptional(F,$,"bindMatrixInverse");const Qt=$.skeleton;Qt&&(he.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),kt.setValue(F,"boneTexture",Qt.boneTexture,we),kt.setValue(F,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vl=W.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&he.isWebGL2===!0)&&re.update($,W,Zi),(Rs||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,kt.setValue(F,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ki.envMap.value=Pe,Ki.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Rs&&(kt.setValue(F,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&mv(Ki,Gl),xe&&k.fog===!0&&We.refreshFogUniforms(Ki,xe),We.refreshMaterialUniforms(Ki,k,V,P,U),Uo.upload(F,ze.uniformsList,Ki,we)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Uo.upload(F,ze.uniformsList,Ki,we),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&kt.setValue(F,"center",$.center),kt.setValue(F,"modelViewMatrix",$.modelViewMatrix),kt.setValue(F,"normalMatrix",$.normalMatrix),kt.setValue(F,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Qt=k.uniformsGroups;for(let Wl=0,vv=Qt.length;Wl<vv;Wl++)if(he.isWebGL2){const mf=Qt[Wl];Z.update(mf,Zi),Z.bind(mf,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function mv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function gv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,W){be.get(E.texture).__webglTexture=O,be.get(E.depthTexture).__webglTexture=W;const k=be.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=W===void 0,k.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const W=be.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){_=E,m=O,v=W;let k=!0,$=null,xe=!1,Ce=!1;if(E){const Pe=be.get(E);Pe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),k=!1):Pe.__webglFramebuffer===void 0?we.setupRenderTarget(E):Pe.__hasExternalTextures&&we.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const Ie=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Ie[O],xe=!0):he.isWebGL2&&E.samples>0&&we.useMultisampledRTT(E)===!1?$=be.get(E).__webglMultisampledFramebuffer:$=Ie,A.copy(E.viewport),L.copy(E.scissor),S=E.scissorTest}else A.copy(I).multiplyScalar(V).floor(),L.copy(j).multiplyScalar(V).floor(),S=K;if(pe.bindFramebuffer(36160,$)&&he.drawBuffers&&k&&pe.drawBuffers(E,$),pe.viewport(A),pe.scissor(L),pe.setScissorTest(S),xe){const Pe=be.get(E.texture);F.framebufferTexture2D(36160,36064,34069+O,Pe.__webglTexture,W)}else if(Ce){const Pe=be.get(E.texture),Be=O||0;F.framebufferTextureLayer(36160,36064,Pe.__webglTexture,W||0,Be)}y=-1},this.readRenderTargetPixels=function(E,O,W,k,$,xe,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){pe.bindFramebuffer(36160,Le);try{const Pe=E.texture,Be=Pe.format,Ie=Pe.type;if(Be!==Nn&&_e.convert(Be)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ie===Da&&(le.has("EXT_color_buffer_half_float")||he.isWebGL2&&le.has("EXT_color_buffer_float"));if(Ie!==Sr&&_e.convert(Ie)!==F.getParameter(35738)&&!(Ie===dr&&(he.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-k&&W>=0&&W<=E.height-$&&F.readPixels(O,W,k,$,_e.convert(Be),_e.convert(Ie),xe)}finally{const Pe=_!==null?be.get(_).__webglFramebuffer:null;pe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,O,W=0){const k=Math.pow(2,-W),$=Math.floor(O.image.width*k),xe=Math.floor(O.image.height*k);we.setTexture2D(O,0),F.copyTexSubImage2D(3553,W,0,0,E.x,E.y,$,xe),pe.unbindTexture()},this.copyTextureToTexture=function(E,O,W,k=0){const $=O.image.width,xe=O.image.height,Ce=_e.convert(W.format),Le=_e.convert(W.type);we.setTexture2D(W,0),F.pixelStorei(37440,W.flipY),F.pixelStorei(37441,W.premultiplyAlpha),F.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?F.texSubImage2D(3553,k,E.x,E.y,$,xe,Ce,Le,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(3553,k,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):F.texSubImage2D(3553,k,E.x,E.y,Ce,Le,O.image),k===0&&W.generateMipmaps&&F.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W,k,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,Pe=_e.convert(k.format),Be=_e.convert(k.type);let Ie;if(k.isData3DTexture)we.setTexture3D(k,0),Ie=32879;else if(k.isDataArrayTexture)we.setTexture2DArray(k,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,k.flipY),F.pixelStorei(37441,k.premultiplyAlpha),F.pixelStorei(3317,k.unpackAlignment);const ke=F.getParameter(3314),it=F.getParameter(32878),Kt=F.getParameter(3316),Qn=F.getParameter(3315),Yi=F.getParameter(32877),rt=W.isCompressedTexture?W.mipmaps[0]:W.image;F.pixelStorei(3314,rt.width),F.pixelStorei(32878,rt.height),F.pixelStorei(3316,E.min.x),F.pixelStorei(3315,E.min.y),F.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Ie,$,O.x,O.y,O.z,xe,Ce,Le,Pe,Be,rt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,$,O.x,O.y,O.z,xe,Ce,Le,Pe,rt.data)):F.texSubImage3D(Ie,$,O.x,O.y,O.z,xe,Ce,Le,Pe,Be,rt),F.pixelStorei(3314,ke),F.pixelStorei(32878,it),F.pixelStorei(3316,Kt),F.pixelStorei(3315,Qn),F.pixelStorei(32877,Yi),$===0&&k.generateMipmaps&&F.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,pe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(df.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}});class _3 extends df{}_3.prototype.isWebGL1Renderer=!0;class x3 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ff extends yi{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],f=[];let c=e;const d=(n-e)/r,g=new B,x=new Oe;for(let p=0;p<=r;p++){for(let h=0;h<=i;h++){const m=s+h/i*a;g.x=c*Math.cos(m),g.y=c*Math.sin(m),l.push(g.x,g.y,g.z),u.push(0,0,1),x.x=(g.x/n+1)/2,x.y=(g.y/n+1)/2,f.push(x.x,x.y)}c+=d}for(let p=0;p<r;p++){const h=p*(i+1);for(let m=0;m<i;m++){const v=m+h,_=v,y=v+i+1,w=v+i+2,A=v+1;o.push(_,y,A),o.push(y,w,A)}}this.setIndex(o),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hf extends yi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],c=new B,d=new B,g=[],x=[],p=[],h=[];for(let m=0;m<=i;m++){const v=[],_=m/i;let y=0;m==0&&a==0?y=.5/n:m==i&&l==Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const A=w/n;c.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),c.y=e*Math.cos(a+_*o),c.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),x.push(c.x,c.y,c.z),d.copy(c).normalize(),p.push(d.x,d.y,d.z),h.push(A+y,1-_),v.push(u++)}f.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const _=f[m][v+1],y=f[m][v],w=f[m+1][v],A=f[m+1][v+1];(m!==0||a>0)&&g.push(_,y,A),(m!==i-1||l<Math.PI)&&g.push(y,w,A)}this.setIndex(g),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class y3 extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yu extends y3{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zu extends Cr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jp extends Cr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cv extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ku=new dt,em=new B,tm=new B;class S3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;em.setFromMatrixPosition(e.matrixWorld),n.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tm),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class M3 extends S3{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=nd*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class w3 extends cv{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new M3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class E3 extends cv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class b3{constructor(e,n,i=0,r=1/0){this.ray=new Q0(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return rd(e,this,i,n),i.sort(nm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rd(e[r],this,i,n);return i.sort(nm),i}}function nm(t,e){return t.distance-e.distance}function rd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)rd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);function T3({ballPositions:t,onBallSelect:e,selectedBall:n,currentTurn:i}){const r=q.useRef(null),s=q.useRef(null),a=q.useRef(null),o=q.useRef(null),l=q.useRef({});q.useState(null),q.useState(!1);const u=q.useCallback(()=>{if(!t||!s.current)return;Object.values(l.current).forEach(h=>{s.current.remove(h)}),l.current={};const c=new hf(8,32,32),d=new Yu({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.95}),g=new at(c,d);g.position.set(t.center_ball.x,t.center_ball.y,t.center_ball.z),g.castShadow=!0,g.receiveShadow=!0,g.userData={id:"center",type:"center"},s.current.add(g),l.current.center=g;const x=new Yu({color:16724787,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:2228224,transparent:!0,opacity:.95});t.player1_balls.forEach(h=>{if(h.active){const m=new at(c,x);m.position.set(h.x,h.y,h.z),m.castShadow=!0,m.receiveShadow=!0,m.userData={id:h.id,type:"player1",isPlayer1:!0},s.current.add(m),l.current[h.id]=m}});const p=new Yu({color:3355647,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:34,transparent:!0,opacity:.95});t.player2_balls.forEach(h=>{if(h.active){const m=new at(c,p);m.position.set(h.x,h.y,h.z),m.castShadow=!0,m.receiveShadow=!0,m.userData={id:h.id,type:"player2",isPlayer1:!1},s.current.add(m),l.current[`p2_${h.id}`]=m}})},[t]);q.useCallback(()=>{const c=i;return Object.values(l.current).filter(d=>c===1?d.userData.type==="player1":d.userData.type==="player2")},[i]),q.useCallback(c=>{if(!c)return!1;const d=i;if(!(d===1&&c.userData.type==="player1"||d===2&&c.userData.type==="player2"))return!1;const x=c.position.z;return d===1?x>=200:x<=-200},[i]),q.useEffect(()=>{const c=r.current;if(!c)return;const d=new x3;d.background=new De(526346);const g=window.matchMedia&&window.matchMedia("(max-width: 640px)").matches,x=g?500:450,p=g?85:75,h=new rn(p,c.clientWidth/c.clientHeight,.1,2e3);h.position.set(0,0,x);const m=new df({antialias:!0,alpha:!0}),v=Math.min(window.devicePixelRatio||1,2);m.setPixelRatio(v),m.setSize(c.clientWidth,c.clientHeight),m.shadowMap.enabled=!0,m.shadowMap.type=G0,m.physicallyCorrectLights=!0,m.toneMapping=H0,m.toneMappingExposure=1.2,c.appendChild(m.domElement);const _=new E3(16777215,.5);d.add(_);const y=new w3(16777215,1.5,1e3,Math.PI/4,.5,2);y.position.set(0,0,500),y.castShadow=!0,y.shadow.mapSize.width=1024,y.shadow.mapSize.height=1024,d.add(y),s.current=d,a.current=m,o.current=h;const w=new di(420,620,20),A=new Jp({color:1710618,transparent:!0,opacity:.9}),L=new at(w,A);L.position.z=-10,L.receiveShadow=!0,d.add(L);const S=new Ol(400,600),C=new Jp({color:678933,transparent:!0,opacity:.95}),P=new at(S,C);P.receiveShadow=!0,d.add(P);const V=new Zu({color:5056015,shininess:30}),Y=new di(440,20,25),z=new at(Y,V);z.position.set(0,310,12),z.castShadow=!0,d.add(z);const I=new at(Y,V);I.position.set(0,-310,12),I.castShadow=!0,d.add(I);const j=new di(20,600,25),K=new at(j,V);K.position.set(-210,0,12),K.castShadow=!0,d.add(K);const Q=new at(j,V);Q.position.set(210,0,12),Q.castShadow=!0,d.add(Q);const D=new Zu({color:16729156,transparent:!0,opacity:.7,emissive:2228224}),G=new di(400,5,15),U=new at(G,D);U.position.set(0,200,8),d.add(U);const ie=new Zu({color:4474111,transparent:!0,opacity:.7,emissive:34}),N=new at(G,ie);N.position.set(0,-200,8),d.add(N);const J=new ff(48,52,64),ne=new lf({color:65535,side:ci,transparent:!0,opacity:.8}),F=new at(J,ne);F.position.z=1,d.add(F),u();const oe=new b3,le=new Oe,he=be=>{const we=m.domElement.getBoundingClientRect();le.x=(be.clientX-we.left)/we.width*2-1,le.y=-((be.clientY-we.top)/we.height)*2+1,oe.setFromCamera(le,h);const Re=oe.intersectObjects(Object.values(l.current));if(Re.length>0){const pt=Re[0].object,Zt=pt.userData.id,Mt=pt.userData.isPlayer1===!0;if(e){const qe=(Mt?t.player1_balls:t.player2_balls).find(We=>We.id===Zt);e(qe,Mt)}}};m.domElement.addEventListener("click",he),m.domElement.addEventListener("touchstart",be=>{const we=be.touches&&be.touches[0];we&&he(we)},{passive:!0}),m.domElement.style.touchAction="manipulation";const pe=()=>{requestAnimationFrame(pe),m.render(d,h)};pe();const Se=()=>{if(c&&m&&h){const be=c.clientWidth,we=c.clientHeight;h.aspect=be/we,h.updateProjectionMatrix();const Re=Math.min(window.devicePixelRatio||1,2);m.setPixelRatio(Re),m.setSize(be,we)}};return window.addEventListener("resize",Se),()=>{window.removeEventListener("resize",Se),m.domElement.removeEventListener("click",he),m.domElement.removeEventListener("touchstart",he),c&&m.domElement&&c.removeChild(m.domElement)}},[u,i,e]),q.useEffect(()=>{t&&l.current&&Object.values(l.current).forEach(c=>{let d;c.userData.type==="center"?d=t.center_ball:c.userData.type==="player1"?d=t.player1_balls.find(g=>g.id===c.userData.id):c.userData.type==="player2"&&(d=t.player2_balls.find(g=>g.id===c.userData.id)),d&&(c.position.set(d.x,d.y,d.z),c.visible=d.active)})},[t]);const f=()=>{if(!t)return null;const c=t.center_ball,d=t.player1_balls||[],g=t.player2_balls||[];return b.jsx("div",{className:"absolute inset-0 pointer-events-none",children:b.jsxs("svg",{viewBox:"-200 -300 400 600",preserveAspectRatio:"xMidYMid meet",className:"w-full h-full",children:[b.jsx("rect",{x:"-200",y:"-300",width:"400",height:"600",fill:"rgba(10,92,21,0.06)",stroke:"rgba(255,255,255,0.03)"}),b.jsx("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#00ffff",strokeOpacity:"0.2"}),c&&b.jsx("circle",{cx:c.x,cy:c.z,r:"8",fill:"#ffffff",stroke:"#ddd",strokeWidth:"0.5",pointerEvents:"auto",onClick:()=>e&&e(c,!1)}),d.map(x=>b.jsx("g",{children:b.jsx("circle",{cx:x.x,cy:x.z,r:"8",fill:"#ff3333",pointerEvents:"auto",onClick:()=>e&&e(x,!0)})},`p1-${x.id}`)),g.map(x=>b.jsx("g",{children:b.jsx("circle",{cx:x.x,cy:x.z,r:"8",fill:"#3333ff",pointerEvents:"auto",onClick:()=>e&&e(x,!1)})},`p2-${x.id}`))]})})};return b.jsxs("div",{className:"w-full h-full rounded-lg overflow-hidden relative",children:[b.jsx("div",{ref:r,className:"w-full h-full"}),f()]})}function dv({game:t,gameMessage:e}){if(!t)return null;const{player1_name:n,player2_name:i,player1_score:r,player2_score:s,target_score:a,current_turn:o,round_number:l}=t,u=o===1;return b.jsxs("div",{className:"space-y-4 h-full",children:[b.jsx("div",{className:"glass-panel rounded-2xl p-4",children:b.jsxs("div",{className:"text-center",children:[b.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${u?"bg-cyan-400/20 shadow-lg":""}`,children:[b.jsx("p",{className:"text-lg font-bold text-white",children:n}),b.jsx("p",{className:"text-3xl font-bold text-cyan-400",children:r})]}),b.jsxs("div",{className:"text-center",children:[b.jsxs("p",{className:"text-sm text-slate-400",children:["Round ",l||1]}),b.jsx(Pa,{className:"w-8 h-8 text-yellow-400 mx-auto"}),b.jsxs("p",{className:"text-sm text-slate-400",children:["Target: ",a]})]}),b.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${u?"":"bg-purple-400/20 shadow-lg"}`,children:[b.jsx("p",{className:"text-lg font-bold text-white",children:i}),b.jsx("p",{className:"text-3xl font-bold text-purple-400",children:s})]})]})}),b.jsx("div",{className:"text-center bg-slate-900/50 rounded-lg p-3 mt-4",children:b.jsx("p",{className:"text-white font-semibold animate-pulse",children:e})}),b.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[b.jsx(Xn,{className:"p-0 mb-4",children:b.jsxs($n,{className:"flex items-center gap-2 text-white",children:[b.jsx(Pa,{className:"w-5 h-5 text-yellow-400"}),"Score"]})}),b.jsxs(qn,{className:"p-0 space-y-4",children:[b.jsx("div",{className:`glass-panel rounded-xl p-3 ${o===1?"border-red-400/50":""}`,children:b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-4 h-4 rounded-full bg-red-400"}),b.jsx("span",{className:"text-white font-medium",children:n})]}),b.jsx("div",{className:"text-2xl font-bold text-red-400",children:r})]})}),b.jsx("div",{className:`glass-panel rounded-xl p-3 ${o===2?"border-blue-400/50":""}`,children:b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-4 h-4 rounded-full bg-blue-400"}),b.jsx("span",{className:"text-white font-medium",children:i})]}),b.jsx("div",{className:"text-2xl font-bold text-blue-400",children:s})]})}),b.jsx("div",{className:"text-center pt-2 border-t border-white/10",children:b.jsxs(ai,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:[b.jsx(La,{className:"w-3 h-3 mr-1"}),"First to ",a]})})]})]}),b.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[b.jsx(Xn,{className:"p-0 mb-2",children:b.jsxs($n,{className:"flex items-center gap-2 text-white text-lg",children:[b.jsx(o1,{className:"w-5 h-5 text-gray-300"}),"Current Ball"]})}),b.jsx(qn,{className:"p-0",children:b.jsxs("div",{className:"flex items-center justify-center gap-2",children:[b.jsx("div",{className:`w-8 h-8 rounded-full ${o===1?"bg-red-500":"bg-blue-500"} border-2 border-white/50 shadow-lg`}),b.jsx("span",{className:"text-gray-300 text-sm",children:"Ready to play"})]})})]}),b.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[b.jsx(Xn,{className:"p-0 mb-4",children:b.jsx($n,{className:"text-white text-lg",children:"CenterBall Rules"})}),b.jsx(qn,{className:"p-0 space-y-3",children:b.jsxs("div",{className:"text-xs text-gray-300 space-y-2",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"Touch center + both in ring"}),b.jsx(ai,{className:"bg-green-400/20 text-green-400 border-green-400/30",children:"3 pts"})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"In ring, not touching center"}),b.jsx(ai,{className:"bg-yellow-400/20 text-yellow-400 border-yellow-400/30",children:"2 pts"})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"Closest outside ring"}),b.jsx(ai,{className:"bg-blue-400/20 text-blue-400 border-blue-400/30",children:"1 pt"})]})]})})]}),b.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[b.jsx(Xn,{className:"p-0 mb-4",children:b.jsx($n,{className:"text-white text-lg",children:"Arena Rules"})}),b.jsxs(qn,{className:"p-0 space-y-2 text-xs text-gray-300",children:[b.jsx("p",{children:"• Balls must stay behind start barriers"}),b.jsx("p",{children:"• Once past barrier, balls are in play"}),b.jsx("p",{children:"• In-play balls can only be moved by collisions"}),b.jsx("p",{children:"• All balls reset after each round"})]})]}),b.jsx("div",{className:"glass-panel rounded-2xl p-4",children:b.jsxs("div",{className:"space-y-2 text-sm",children:[b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-300",children:"Round:"}),b.jsx("span",{className:"text-white font-medium",children:l||1})]}),b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-300",children:"Mode:"}),b.jsx(ai,{variant:"outline",className:`border-gray-400/30 text-xs ${a===21?"text-green-400":"text-red-400"}`,children:a===21?"Beginner":"Veteran"})]})]})})]})}dv.propTypes={game:ye.shape({player1_name:ye.string,player2_name:ye.string,player1_score:ye.number,player2_score:ye.number,target_score:ye.number,current_turn:ye.number,round_number:ye.number}),gameMessage:ye.string};const ua=q.forwardRef(({className:t,value:e=[0],onValueChange:n,max:i=100,min:r=0,step:s=1,...a},o)=>{const l=u=>{const f=[parseFloat(u.target.value)];n&&n(f)};return b.jsx("input",{ref:o,type:"range",value:e[0],onChange:l,min:r,max:i,step:s,className:hn("w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",t),...a})});ua.displayName="Slider";ua.propTypes={className:ye.string,value:ye.arrayOf(ye.number),onValueChange:ye.func,max:ye.number,min:ye.number,step:ye.number};function fv({game:t,selectedBall:e,onAimChange:n,onShoot:i,onCancel:r}){const[s,a]=q.useState([0]),[o,l]=q.useState([50]);q.useEffect(()=>{n&&n({angle:s[0],power:o[0]})},[s,o,n]);const u=()=>(t==null?void 0:t.current_turn)===1,f=()=>!e||!t?!1:u()===e.isPlayer1,c=()=>{a([0]),l([50]),r&&r()},d=()=>{i&&i({angle:s[0],power:o[0]})};return b.jsxs("div",{className:"space-y-3 h-full text-sm",children:[b.jsxs("div",{className:"glass-panel rounded-2xl p-3 mobile-hit",children:[b.jsx(Xn,{className:"p-0 mb-4",children:b.jsxs($n,{className:"flex items-center gap-2 text-white",children:[b.jsx(La,{className:"w-5 h-5 text-cyan-400"}),"Ball Control"]})}),b.jsx(qn,{className:"p-0",children:e?b.jsxs("div",{className:"space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between mb-2",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(Bh,{className:"w-5 h-5 text-cyan-400"}),b.jsx("span",{className:"text-gray-300",children:"Angle"})]}),b.jsxs("span",{className:"text-white font-medium",children:[s[0],"°"]})]}),b.jsx("div",{className:"touch-slider",children:b.jsx(ua,{value:s,onValueChange:a,max:360,min:0,step:5,className:"glass-slider"})}),!f()&&b.jsx("div",{className:"glass-panel bg-red-400/10 border-red-400/30 rounded-lg p-2",children:b.jsx("p",{className:"text-red-400 text-sm text-center",children:"Not your turn!"})})]}):b.jsxs("div",{className:"text-center py-6",children:[b.jsx(La,{className:"w-8 h-8 text-gray-400 mx-auto mb-2 opacity-50"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Select a ball to control"})]})})]}),e&&f()&&b.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[b.jsx(Xn,{className:"p-0 mb-4",children:b.jsxs($n,{className:"flex items-center gap-2 text-white",children:[b.jsx(u1,{className:"w-5 h-5 text-magenta-400"}),"Aim & Shoot"]})}),b.jsxs(qn,{className:"p-0 space-y-6",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between mb-3",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(Bh,{className:"w-4 h-4 text-cyan-400"}),b.jsx("span",{className:"text-gray-300 text-sm",children:"Angle"})]}),b.jsxs("span",{className:"text-white font-medium",children:[s[0],"°"]})]}),b.jsx(ua,{value:s,onValueChange:a,max:360,min:0,step:5,className:"glass-slider"})]}),b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between mb-3",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(Yc,{className:"w-4 h-4 text-yellow-400"}),b.jsx("span",{className:"text-gray-300 text-sm",children:"Power"})]}),b.jsxs("span",{className:"text-white font-medium",children:[o[0],"%"]})]}),b.jsx(ua,{value:o,onValueChange:l,max:100,min:10,className:"glass-slider"})]}),b.jsxs("div",{className:"flex gap-2",children:[b.jsxs(hi,{onClick:c,variant:"outline",className:"w-1/2 mobile-hit",children:[b.jsx(z0,{className:"w-5 h-5 mr-2"}),"Cancel"]}),b.jsxs(hi,{onClick:d,className:"w-1/2 mobile-hit bg-green-500 hover:bg-green-600",children:[b.jsx(Yc,{className:"w-5 h-5 mr-2"}),"Shoot"]})]})]})]})]})}fv.propTypes={game:ye.shape({current_turn:ye.number}),selectedBall:ye.shape({isPlayer1:ye.bool}),onAimChange:ye.func,onShoot:ye.func,onCancel:ye.func};function hv(){const t=tf(),[e]=By(),[n,i]=q.useState(null),[r,s]=q.useState(!0),[a,o]=q.useState(null),[l,u]=q.useState(!1),[f,c]=q.useState(""),d=q.useCallback(async m=>{s(!0);try{const v=await ts.get(m);if(i(v),v.game_status==="setup")c(`${v.player1_name} goes first!`),await ts.update(m,{game_status:"playing"}),i(_=>({..._,game_status:"playing"}));else if(v.game_status==="playing"){const _=v.current_turn===1?v.player1_name:v.player2_name;c(`${_}&apos;s turn`)}}catch(v){console.error("Error loading game:",v),t(ns("Home"))}s(!1)},[t]);q.useEffect(()=>{const m=e.get("id");m?d(m):t(ns("Home"))},[e,t,d]);const g=q.useCallback(m=>{if(!m)return{player1:0,player2:0};let v=0,_=0;const y=2.5,w=Math.sqrt(m.center_ball.x**2+m.center_ball.z**2)<=y,A=(V,Y)=>V.filter(z=>z.active).map(z=>({...z,distance:Math.sqrt((z.x-m.center_ball.x)**2+(z.z-m.center_ball.z)**2),distanceFromCenter:Math.sqrt(z.x**2+z.z**2),player:Y})),L=A(m.player1_balls,1),S=A(m.player2_balls,2),C=[...L,...S];C.forEach(V=>{V.distance<=.8&&V.distanceFromCenter<=y&&w&&(V.player===1?v+=3:_+=3)}),C.forEach(V=>{!(V.distance<=.8)&&V.distanceFromCenter<=y&&(V.player===1?v+=2:_+=2)});const P=C.filter(V=>V.distanceFromCenter>y);return P.length>0&&(P.reduce((Y,z)=>z.distance<Y.distance?z:Y).player===1?v+=1:_+=1),{player1:v,player2:_}},[]),x=q.useCallback(async({angle:m,power:v})=>{if(!n||!a)return;const _=m*Math.PI/180,y=v/100*15,w={x:Math.sin(_)*y,y:0,z:Math.cos(_)*y},A={x:a.x+w.x*.5,y:a.y,z:a.z+w.z*.5};u(!1),o(null);try{const L=JSON.parse(JSON.stringify(n.ball_positions)),C=a.isPlayer1?L.player1_balls:L.player2_balls,P=C.findIndex(U=>U.id===a.id);P!==-1&&(C[P].x=A.x,C[P].z=A.z,C[P].active=!1);const V=n.current_turn===1?2:1,Y=V===1?n.player1_name:n.player2_name,z=L.player1_balls.every(U=>!U.active),I=L.player2_balls.every(U=>!U.active),j=z&&I,K=g(L),Q=K.player1>=n.target_score||K.player2>=n.target_score,D=Q?K.player1>=n.target_score?n.player1_name:n.player2_name:null;let G={ball_positions:L,player1_score:K.player1,player2_score:K.player2,current_turn:V,...Q&&{game_status:"finished",winner:D}};if(j&&!Q&&(G.ball_positions={center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(U,ie)=>({x:0,y:.4,z:2.5+ie*.3,active:!0,id:ie+1})),player2_balls:Array.from({length:5},(U,ie)=>({x:0,y:.4,z:-2.5-ie*.3,active:!0,id:ie+1}))},G.round_number=(n.round_number||1)+1,G.current_turn=1),await ts.update(n.id,G),i(U=>({...U,...G})),Q)c(`🎉 ${D} wins the game!`);else if(j){const U=G.current_turn===1?n.player1_name:n.player2_name;c(`Round complete! ${U} starts round ${G.round_number}.`)}else c(`${Y}&apos;s turn`)}catch(L){console.error("Error updating game:",L)}},[n,a,g]),p=(m,v)=>{l||n.current_turn===(v?1:2)&&(o({...m,isPlayer1:v}),u(!0))},h=async()=>{if(!n)return;const m={player1_score:0,player2_score:0,current_turn:1,game_status:"playing",winner:null,round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(v,_)=>({x:0,y:.4,z:2.5+_*.3,active:!0,id:_+1})),player2_balls:Array.from({length:5},(v,_)=>({x:0,y:.4,z:-2.5-_*.3,active:!0,id:_+1}))}};try{await ts.update(n.id,m),i(v=>({...v,...m})),c(`${n.player1_name} goes first!`)}catch(v){console.error("Error resetting game:",v)}};return r?b.jsx("div",{className:"min-h-screen flex items-center justify-center",children:b.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center",children:[b.jsx("div",{className:"w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"}),b.jsx("p",{className:"text-white text-lg",children:"Loading game..."})]})}):n?b.jsxs("div",{className:"min-h-screen flex flex-col p-3 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white safe-bottom",children:[b.jsxs("header",{className:"flex items-center justify-between mb-4 flex-wrap gap-4",children:[b.jsxs(hi,{onClick:()=>t(ns("Home")),variant:"ghost",className:"text-slate-300 hover:text-white hover:bg-slate-700",children:[b.jsx(Fh,{className:"w-5 h-5 mr-2"}),"Back to Lobby"]}),b.jsx("h1",{className:"text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent order-first sm:order-none w-full sm:w-auto",children:"CenterBall"}),b.jsxs(hi,{onClick:h,variant:"outline",className:"text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white",children:[b.jsx(z0,{className:"w-4 h-4 mr-2"}),"Reset Game"]})]}),b.jsxs("div",{className:"flex-grow flex flex-col gap-4",children:[b.jsx("div",{className:"w-full glass-panel rounded-2xl overflow-hidden relative game-full-mobile",children:b.jsx(T3,{ballPositions:n.ball_positions,onBallSelect:p,selectedBall:a,currentTurn:n.current_turn})}),b.jsxs("div",{className:"w-full glass-panel rounded-2xl p-4 flex flex-col",children:[b.jsx(dv,{game:n}),b.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-700",children:[b.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:"Game Status"}),b.jsx("p",{className:"text-center text-cyan-300 font-medium h-12 flex items-center justify-center",children:f})]})]}),l&&a&&b.jsx("div",{className:"w-full fixed bottom-0 left-0 right-0 p-3 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 safe-bottom",children:b.jsx("div",{className:"max-w-3xl mx-auto",children:b.jsx(fv,{game:n,selectedBall:a,onShoot:x,onCancel:()=>{u(!1),o(null)}})})})]})]}):b.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800",children:b.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center max-w-md mx-4",children:[b.jsx(Pa,{className:"w-16 h-16 text-yellow-400 mx-auto mb-4"}),b.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Game Not Found"}),b.jsx("p",{className:"text-slate-300 mb-6",children:"The game you're looking for doesn't exist or has been removed."}),b.jsxs(hi,{onClick:()=>t(ns("Home")),className:"bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors",children:[b.jsx(Fh,{className:"w-4 h-4 mr-2"}),"Back to Home"]})]})})}hv.propTypes={};function C3(){return b.jsx(Uy,{children:b.jsxs(ky,{children:[b.jsx(Xc,{path:"/",element:b.jsx(U0,{})}),b.jsx(Xc,{path:"/game",element:b.jsx(hv,{})})]})})}function A3(){if(typeof window>"u")return;let t=document.getElementById("global-error-overlay");t||(t=document.createElement("div"),t.id="global-error-overlay",Object.assign(t.style,{position:"fixed",left:"12px",right:"12px",top:"12px",padding:"12px",background:"rgba(20,20,20,0.95)",color:"white",fontFamily:"monospace",fontSize:"12px",zIndex:999999,whiteSpace:"pre-wrap",borderRadius:"8px",display:"none",maxHeight:"60vh",overflow:"auto"}),document.body.appendChild(t));const e=n=>{t.style.display="block",t.textContent=n};window.addEventListener("error",n=>{try{const i=n.error||n;e(`${i&&i.stack?i.stack:String(i)}`),console.error(i)}catch(i){console.error("Error while displaying overlay",i)}}),window.addEventListener("unhandledrejection",n=>{try{const i=n.reason||n;e(`${i&&i.stack?i.stack:String(i)}`),console.error("Unhandled Rejection:",i)}catch(i){console.error("Error while displaying rejection",i)}})}A3();Qu.createRoot(document.getElementById("root")).render(b.jsx(hm.StrictMode,{children:b.jsx(C3,{})}));
