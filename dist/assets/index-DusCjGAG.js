function K_(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Eg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lu={exports:{}},ka={},Du={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Z_(){if(em)return gt;em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function v(F,Z,Ie){this.props=F,this.context=Z,this.refs=E,this.updater=Ie||S}v.prototype.isReactComponent={},v.prototype.setState=function(F,Z){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Z,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(F,Z,Ie){this.props=F,this.context=Z,this.refs=E,this.updater=Ie||S}var P=I.prototype=new g;P.constructor=I,T(P,v.prototype),P.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,B={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function X(F,Z,Ie){var ke,Q={},ge=null,me=null;if(Z!=null)for(ke in Z.ref!==void 0&&(me=Z.ref),Z.key!==void 0&&(ge=""+Z.key),Z)D.call(Z,ke)&&!H.hasOwnProperty(ke)&&(Q[ke]=Z[ke]);var Ce=arguments.length-2;if(Ce===1)Q.children=Ie;else if(1<Ce){for(var be=Array(Ce),$e=0;$e<Ce;$e++)be[$e]=arguments[$e+2];Q.children=be}if(F&&F.defaultProps)for(ke in Ce=F.defaultProps,Ce)Q[ke]===void 0&&(Q[ke]=Ce[ke]);return{$$typeof:s,type:F,key:ge,ref:me,props:Q,_owner:B.current}}function C(F,Z){return{$$typeof:s,type:F.type,key:Z,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function O(F){var Z={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return Z[Ie]})}var ae=/\/+/g;function J(F,Z){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):Z.toString(36)}function se(F,Z,Ie,ke,Q){var ge=typeof F;(ge==="undefined"||ge==="boolean")&&(F=null);var me=!1;if(F===null)me=!0;else switch(ge){case"string":case"number":me=!0;break;case"object":switch(F.$$typeof){case s:case e:me=!0}}if(me)return me=F,Q=Q(me),F=ke===""?"."+J(me,0):ke,A(Q)?(Ie="",F!=null&&(Ie=F.replace(ae,"$&/")+"/"),se(Q,Z,Ie,"",function($e){return $e})):Q!=null&&(b(Q)&&(Q=C(Q,Ie+(!Q.key||me&&me.key===Q.key?"":(""+Q.key).replace(ae,"$&/")+"/")+F)),Z.push(Q)),1;if(me=0,ke=ke===""?".":ke+":",A(F))for(var Ce=0;Ce<F.length;Ce++){ge=F[Ce];var be=ke+J(ge,Ce);me+=se(ge,Z,Ie,be,Q)}else if(be=y(F),typeof be=="function")for(F=be.call(F),Ce=0;!(ge=F.next()).done;)ge=ge.value,be=ke+J(ge,Ce++),me+=se(ge,Z,Ie,be,Q);else if(ge==="object")throw Z=String(F),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return me}function le(F,Z,Ie){if(F==null)return F;var ke=[],Q=0;return se(F,ke,"","",function(ge){return Z.call(Ie,ge,Q++)}),ke}function ce(F){if(F._status===-1){var Z=F._result;Z=Z(),Z.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=Z)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},z={transition:null},oe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:le,forEach:function(F,Z,Ie){le(F,function(){Z.apply(this,arguments)},Ie)},count:function(F){var Z=0;return le(F,function(){Z++}),Z},toArray:function(F){return le(F,function(Z){return Z})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=v,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=I,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,gt.act=re,gt.cloneElement=function(F,Z,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ke=T({},F.props),Q=F.key,ge=F.ref,me=F._owner;if(Z!=null){if(Z.ref!==void 0&&(ge=Z.ref,me=B.current),Z.key!==void 0&&(Q=""+Z.key),F.type&&F.type.defaultProps)var Ce=F.type.defaultProps;for(be in Z)D.call(Z,be)&&!H.hasOwnProperty(be)&&(ke[be]=Z[be]===void 0&&Ce!==void 0?Ce[be]:Z[be])}var be=arguments.length-2;if(be===1)ke.children=Ie;else if(1<be){Ce=Array(be);for(var $e=0;$e<be;$e++)Ce[$e]=arguments[$e+2];ke.children=Ce}return{$$typeof:s,type:F.type,key:Q,ref:ge,props:ke,_owner:me}},gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=X,gt.createFactory=function(F){var Z=X.bind(null,F);return Z.type=F,Z},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:f,render:F}},gt.isValidElement=b,gt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ce}},gt.memo=function(F,Z){return{$$typeof:p,type:F,compare:Z===void 0?null:Z}},gt.startTransition=function(F){var Z=z.transition;z.transition={};try{F()}finally{z.transition=Z}},gt.unstable_act=re,gt.useCallback=function(F,Z){return ue.current.useCallback(F,Z)},gt.useContext=function(F){return ue.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},gt.useEffect=function(F,Z){return ue.current.useEffect(F,Z)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(F,Z,Ie){return ue.current.useImperativeHandle(F,Z,Ie)},gt.useInsertionEffect=function(F,Z){return ue.current.useInsertionEffect(F,Z)},gt.useLayoutEffect=function(F,Z){return ue.current.useLayoutEffect(F,Z)},gt.useMemo=function(F,Z){return ue.current.useMemo(F,Z)},gt.useReducer=function(F,Z,Ie){return ue.current.useReducer(F,Z,Ie)},gt.useRef=function(F){return ue.current.useRef(F)},gt.useState=function(F){return ue.current.useState(F)},gt.useSyncExternalStore=function(F,Z,Ie){return ue.current.useSyncExternalStore(F,Z,Ie)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var tm;function hd(){return tm||(tm=1,Du.exports=Z_()),Du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Q_(){if(nm)return ka;nm=1;var s=hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var x,_={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(_[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)_[x]===void 0&&(_[x]=h[x]);return{$$typeof:e,type:f,key:y,ref:S,props:_,_owner:o.current}}return ka.Fragment=t,ka.jsx=u,ka.jsxs=u,ka}var im;function J_(){return im||(im=1,Lu.exports=Q_()),Lu.exports}var N=J_(),he=hd();const wg=Eg(he),e0=K_({__proto__:null,default:wg},[he]);var hl={},Iu={exports:{}},Nn={},Uu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function t0(){return rm||(rm=1,(function(s){function e(z,oe){var re=z.length;z.push(oe);e:for(;0<re;){var F=re-1>>>1,Z=z[F];if(0<o(Z,oe))z[F]=oe,z[re]=Z,re=F;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var oe=z[0],re=z.pop();if(re!==oe){z[0]=re;e:for(var F=0,Z=z.length,Ie=Z>>>1;F<Ie;){var ke=2*(F+1)-1,Q=z[ke],ge=ke+1,me=z[ge];if(0>o(Q,re))ge<Z&&0>o(me,Q)?(z[F]=me,z[ge]=re,F=ge):(z[F]=Q,z[ke]=re,F=ke);else if(ge<Z&&0>o(me,re))z[F]=me,z[ge]=re,F=ge;else break e}}return oe}function o(z,oe){var re=z.sortIndex-oe.sortIndex;return re!==0?re:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],x=1,_=null,y=3,S=!1,T=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=z)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function A(z){if(E=!1,P(z),!T)if(t(h)!==null)T=!0,ce(D);else{var oe=t(p);oe!==null&&ue(A,oe.startTime-z)}}function D(z,oe){T=!1,E&&(E=!1,g(X),X=-1),S=!0;var re=y;try{for(P(oe),_=t(h);_!==null&&(!(_.expirationTime>oe)||z&&!O());){var F=_.callback;if(typeof F=="function"){_.callback=null,y=_.priorityLevel;var Z=F(_.expirationTime<=oe);oe=s.unstable_now(),typeof Z=="function"?_.callback=Z:_===t(h)&&r(h),P(oe)}else r(h);_=t(h)}if(_!==null)var Ie=!0;else{var ke=t(p);ke!==null&&ue(A,ke.startTime-oe),Ie=!1}return Ie}finally{_=null,y=re,S=!1}}var B=!1,H=null,X=-1,C=5,b=-1;function O(){return!(s.unstable_now()-b<C)}function ae(){if(H!==null){var z=s.unstable_now();b=z;var oe=!0;try{oe=H(!0,z)}finally{oe?J():(B=!1,H=null)}}else B=!1}var J;if(typeof I=="function")J=function(){I(ae)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=ae,J=function(){le.postMessage(null)}}else J=function(){v(ae,0)};function ce(z){H=z,B||(B=!0,J())}function ue(z,oe){X=v(function(){z(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ce(D))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var re=y;y=oe;try{return z()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=y;y=z;try{return oe()}finally{y=re}},s.unstable_scheduleCallback=function(z,oe,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=re+Z,z={id:x++,callback:oe,priorityLevel:z,startTime:re,expirationTime:Z,sortIndex:-1},re>F?(z.sortIndex=re,e(p,z),t(h)===null&&z===t(p)&&(E?(g(X),X=-1):E=!0,ue(A,re-F))):(z.sortIndex=Z,e(h,z),T||S||(T=!0,ce(D))),z},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(z){var oe=y;return function(){var re=y;y=oe;try{return z.apply(this,arguments)}finally{y=re}}}})(Fu)),Fu}var sm;function n0(){return sm||(sm=1,Uu.exports=t0()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function i0(){if(am)return Nn;am=1;var s=hd(),e=n0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return h.call(_,n)?!0:h.call(x,n)?!1:p.test(n)?_[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,I);v[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,I);v[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,I);v[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),B=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),O=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,F;function Z(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ie=!1;function ke(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=c.stack.split(`
`),M=d.length-1,U=m.length-1;1<=M&&0<=U&&d[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==m[U]){var V=`
`+d[M].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=M&&0<=U);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Z(n):""}function Q(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case H:return"Fragment";case B:return"Portal";case C:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=$e(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function k(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function We(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function je(n,i){ut(n,i);var a=Ce(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Be(n,i.type,a):i.hasOwnProperty("defaultValue")&&Be(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ct(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Be(n,i,a){(i!=="number"||k(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function Ot(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function w(n,i){var a=Ce(i.value),c=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){Qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function we(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=we(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var rt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Re=null,Ue=null;function Se(n){if(n=Ea(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Co(i),Me(n.stateNode,n.type,i))}}function pe(n){Re?Ue?Ue.push(n):Ue=[n]:Re=n}function Xe(){if(Re){var n=Re,i=Ue;if(Ue=Re=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function ct(n,i){return n(i)}function Pt(){}var St=!1;function jn(n,i,a){if(St)return n(i,a);St=!0;try{return ct(n,i,a)}finally{St=!1,(Re!==null||Ue!==null)&&(Pt(),Xe())}}function fn(n,i){var a=n.stateNode;if(a===null)return null;var c=Co(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var as=!1;if(f)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){as=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{as=!1}function aa(n,i,a,c,d,m,M,U,V){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var Yi=!1,Cr=null,Ti=!1,os=null,ls={onError:function(n){Yi=!0,Cr=n}};function ao(n,i,a,c,d,m,M,U,V){Yi=!1,Cr=null,aa.apply(ls,arguments)}function oo(n,i,a,c,d,m,M,U,V){if(ao.apply(this,arguments),Yi){if(Yi){var ee=Cr;Yi=!1,Cr=null}else throw Error(t(198));Ti||(Ti=!0,os=ee)}}function Ai(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function lo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function co(n){if(Ai(n)!==n)throw Error(t(188))}function tc(n){var i=n.alternate;if(!i){if(i=Ai(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return co(d),n;if(m===c)return co(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var M=!1,U=d.child;U;){if(U===a){M=!0,a=d,c=m;break}if(U===c){M=!0,c=d,a=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===a){M=!0,a=m,c=d;break}if(U===c){M=!0,c=m,a=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function uo(n){return n=tc(n),n!==null?fo(n):null}function fo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fo(n);if(i!==null)return i;n=n.sibling}return null}var R=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,te=e.unstable_shouldYield,ie=e.unstable_requestPaint,W=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,it=e.unstable_LowPriority,st=e.unstable_IdlePriority,Je=null,ot=null;function bt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:et,Ut=Math.log,Nt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Ut(n)/Nt|0)|0}var Lt=64,vt=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ni(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~d;U!==0?c=Qt(U):(m&=M,m!==0&&(c=Qt(m)))}else M=a&~d,M!==0?c=Qt(M):m!==0&&(c=Qt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Mt(i),d=1<<a,c|=n[a],i&=~d;return c}function Sn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Mt(m),U=1<<M,V=d[M];V===-1?((U&a)===0||(U&c)!==0)&&(d[M]=Sn(U,i)):V<=i&&(n.expiredLanes|=U),m&=~U}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mn(){var n=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),n}function dn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=a}function hn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Mt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Pr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Mt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function Ld(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dd,nc,Id,Ud,Fd,ic=!1,ho=[],$i=null,Ki=null,Zi=null,oa=new Map,la=new Map,Qi=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Od(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":oa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(i.pointerId)}}function ca(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ea(i),i!==null&&nc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function xv(n,i,a,c,d){switch(i){case"focusin":return $i=ca($i,n,i,a,c,d),!0;case"dragenter":return Ki=ca(Ki,n,i,a,c,d),!0;case"mouseover":return Zi=ca(Zi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return oa.set(m,ca(oa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,la.set(m,ca(la.get(m)||null,n,i,a,c,d)),!0}return!1}function kd(n){var i=Nr(n.target);if(i!==null){var a=Ai(i);if(a!==null){if(i=a.tag,i===13){if(i=lo(a),i!==null){n.blockedOn=i,Fd(n.priority,function(){Id(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ft=c,a.target.dispatchEvent(c),ft=null}else return i=Ea(a),i!==null&&nc(i),n.blockedOn=a,!1;i.shift()}return!0}function Bd(n,i,a){po(n)&&a.delete(i)}function yv(){ic=!1,$i!==null&&po($i)&&($i=null),Ki!==null&&po(Ki)&&(Ki=null),Zi!==null&&po(Zi)&&(Zi=null),oa.forEach(Bd),la.forEach(Bd)}function ua(n,i){n.blockedOn===i&&(n.blockedOn=null,ic||(ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function fa(n){function i(d){return ua(d,n)}if(0<ho.length){ua(ho[0],n);for(var a=1;a<ho.length;a++){var c=ho[a];c.blockedOn===n&&(c.blockedOn=null)}}for($i!==null&&ua($i,n),Ki!==null&&ua(Ki,n),Zi!==null&&ua(Zi,n),oa.forEach(i),la.forEach(i),a=0;a<Qi.length;a++)c=Qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)kd(a),a.blockedOn===null&&Qi.shift()}var cs=A.ReactCurrentBatchConfig,mo=!0;function Sv(n,i,a,c){var d=_t,m=cs.transition;cs.transition=null;try{_t=1,rc(n,i,a,c)}finally{_t=d,cs.transition=m}}function Mv(n,i,a,c){var d=_t,m=cs.transition;cs.transition=null;try{_t=4,rc(n,i,a,c)}finally{_t=d,cs.transition=m}}function rc(n,i,a,c){if(mo){var d=sc(n,i,a,c);if(d===null)Mc(n,i,c,go,a),Od(n,c);else if(xv(d,n,i,a,c))c.stopPropagation();else if(Od(n,c),i&4&&-1<_v.indexOf(n)){for(;d!==null;){var m=Ea(d);if(m!==null&&Dd(m),m=sc(n,i,a,c),m===null&&Mc(n,i,c,go,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Mc(n,i,c,null,a)}}var go=null;function sc(n,i,a,c){if(go=null,n=G(c),n=Nr(n),n!==null)if(i=Ai(n),i===null)n=null;else if(a=i.tag,a===13){if(n=lo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function zd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ne:return 1;case He:return 4;case Fe:case it:return 16;case st:return 536870912;default:return 16}default:return 16}}var Ji=null,ac=null,vo=null;function Vd(){if(vo)return vo;var n,i=ac,a=i.length,c,d="value"in Ji?Ji.value:Ji.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===d[m-c];c++);return vo=d.slice(n,1<c?1-c:void 0)}function _o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xo(){return!0}function Hd(){return!1}function Fn(n){function i(a,c,d,m,M){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xo:Hd,this.isPropagationStopped=Hd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Fn(us),da=re({},us,{view:0,detail:0}),Ev=Fn(da),lc,cc,ha,yo=re({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ha&&(ha&&n.type==="mousemove"?(lc=n.screenX-ha.screenX,cc=n.screenY-ha.screenY):cc=lc=0,ha=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),Gd=Fn(yo),wv=re({},yo,{dataTransfer:0}),Tv=Fn(wv),Av=re({},da,{relatedTarget:0}),uc=Fn(Av),Rv=re({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Fn(Rv),bv=re({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pv=Fn(bv),Nv=re({},us,{data:0}),Wd=Fn(Nv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Iv[n])?!!i[n]:!1}function fc(){return Uv}var Fv=re({},da,{key:function(n){if(n.key){var i=Lv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?_o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ov=Fn(Fv),kv=re({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Fn(kv),Bv=re({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),zv=Fn(Bv),Vv=re({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=Fn(Vv),Gv=re({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Fn(Gv),jv=[9,13,27,32],dc=f&&"CompositionEvent"in window,pa=null;f&&"documentMode"in document&&(pa=document.documentMode);var Xv=f&&"TextEvent"in window&&!pa,Xd=f&&(!dc||pa&&8<pa&&11>=pa),qd=" ",Yd=!1;function $d(n,i){switch(n){case"keyup":return jv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function qv(n,i){switch(n){case"compositionend":return Kd(i);case"keypress":return i.which!==32?null:(Yd=!0,qd);case"textInput":return n=i.data,n===qd&&Yd?null:n;default:return null}}function Yv(n,i){if(fs)return n==="compositionend"||!dc&&$d(n,i)?(n=Vd(),vo=ac=Ji=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xd&&i.locale!=="ko"?null:i.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!$v[n.type]:i==="textarea"}function Qd(n,i,a,c){pe(c),i=To(i,"onChange"),0<i.length&&(a=new oc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ma=null,ga=null;function Kv(n){gh(n,0)}function So(n){var i=gs(n);if(dt(i))return n}function Zv(n,i){if(n==="change")return i}var Jd=!1;if(f){var hc;if(f){var pc="oninput"in document;if(!pc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),pc=typeof eh.oninput=="function"}hc=pc}else hc=!1;Jd=hc&&(!document.documentMode||9<document.documentMode)}function th(){ma&&(ma.detachEvent("onpropertychange",nh),ga=ma=null)}function nh(n){if(n.propertyName==="value"&&So(ga)){var i=[];Qd(i,ga,n,G(n)),jn(Kv,i)}}function Qv(n,i,a){n==="focusin"?(th(),ma=i,ga=a,ma.attachEvent("onpropertychange",nh)):n==="focusout"&&th()}function Jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So(ga)}function e_(n,i){if(n==="click")return So(i)}function t_(n,i){if(n==="input"||n==="change")return So(i)}function n_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:n_;function va(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ii(n[d],i[d]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,i){var a=ih(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ih(a)}}function sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ah(){for(var n=window,i=k();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=k(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function i_(n){var i=ah(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sh(a.ownerDocument.documentElement,a)){if(c!==null&&mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=rh(a,m);var M=rh(a,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r_=f&&"documentMode"in document&&11>=document.documentMode,ds=null,gc=null,_a=null,vc=!1;function oh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||ds==null||ds!==k(c)||(c=ds,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&va(_a,c)||(_a=c,c=To(gc,"onSelect"),0<c.length&&(i=new oc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ds)))}function Mo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var hs={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},_c={},lh={};f&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Eo(n){if(_c[n])return _c[n];if(!hs[n])return n;var i=hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lh)return _c[n]=i[a];return n}var ch=Eo("animationend"),uh=Eo("animationiteration"),fh=Eo("animationstart"),dh=Eo("transitionend"),hh=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){hh.set(n,i),l(i,[n])}for(var xc=0;xc<ph.length;xc++){var yc=ph[xc],s_=yc.toLowerCase(),a_=yc[0].toUpperCase()+yc.slice(1);er(s_,"on"+a_)}er(ch,"onAnimationEnd"),er(uh,"onAnimationIteration"),er(fh,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(dh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function mh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,oo(c,i,void 0,n),n.currentTarget=null}function gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var U=c[M],V=U.instance,ee=U.currentTarget;if(U=U.listener,V!==m&&d.isPropagationStopped())break e;mh(d,U,ee),m=V}else for(M=0;M<c.length;M++){if(U=c[M],V=U.instance,ee=U.currentTarget,U=U.listener,V!==m&&d.isPropagationStopped())break e;mh(d,U,ee),m=V}}}if(Ti)throw n=os,Ti=!1,os=null,n}function Bt(n,i){var a=i[Cc];a===void 0&&(a=i[Cc]=new Set);var c=n+"__bubble";a.has(c)||(vh(i,n,2,!1),a.add(c))}function Sc(n,i,a){var c=0;i&&(c|=4),vh(a,n,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[wo]){n[wo]=!0,r.forEach(function(a){a!=="selectionchange"&&(o_.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wo]||(i[wo]=!0,Sc("selectionchange",!1,i))}}function vh(n,i,a,c){switch(zd(i)){case 1:var d=Sv;break;case 4:d=Mv;break;default:d=rc}a=d.bind(null,i,a,n),d=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Mc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var V=M.tag;if((V===3||V===4)&&(V=M.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;M=M.return}for(;U!==null;){if(M=Nr(U),M===null)return;if(V=M.tag,V===5||V===6){c=m=M;continue e}U=U.parentNode}}c=c.return}jn(function(){var ee=m,_e=G(a),ye=[];e:{var ve=hh.get(n);if(ve!==void 0){var Oe=oc,Ge=n;switch(n){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":Oe=Ov;break;case"focusin":Ge="focus",Oe=uc;break;case"focusout":Ge="blur",Oe=uc;break;case"beforeblur":case"afterblur":Oe=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=zv;break;case ch:case uh:case fh:Oe=Cv;break;case dh:Oe=Hv;break;case"scroll":Oe=Ev;break;case"wheel":Oe=Wv;break;case"copy":case"cut":case"paste":Oe=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=jd}var qe=(i&4)!==0,Yt=!qe&&n==="scroll",Y=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var j=ee,K;j!==null;){K=j;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=fn(j,Y),Te!=null&&qe.push(Sa(j,Te,K)))),Yt)break;j=j.return}0<qe.length&&(ve=new Oe(ve,Ge,null,a,_e),ye.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ve&&a!==ft&&(Ge=a.relatedTarget||a.fromElement)&&(Nr(Ge)||Ge[Ri]))break e;if((Oe||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(Ge=a.relatedTarget||a.toElement,Oe=ee,Ge=Ge?Nr(Ge):null,Ge!==null&&(Yt=Ai(Ge),Ge!==Yt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=ee),Oe!==Ge)){if(qe=Gd,Te="onMouseLeave",Y="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(qe=jd,Te="onPointerLeave",Y="onPointerEnter",j="pointer"),Yt=Oe==null?ve:gs(Oe),K=Ge==null?ve:gs(Ge),ve=new qe(Te,j+"leave",Oe,a,_e),ve.target=Yt,ve.relatedTarget=K,Te=null,Nr(_e)===ee&&(qe=new qe(Y,j+"enter",Ge,a,_e),qe.target=K,qe.relatedTarget=Yt,Te=qe),Yt=Te,Oe&&Ge)t:{for(qe=Oe,Y=Ge,j=0,K=qe;K;K=ps(K))j++;for(K=0,Te=Y;Te;Te=ps(Te))K++;for(;0<j-K;)qe=ps(qe),j--;for(;0<K-j;)Y=ps(Y),K--;for(;j--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=ps(qe),Y=ps(Y)}qe=null}else qe=null;Oe!==null&&_h(ye,ve,Oe,qe,!1),Ge!==null&&Yt!==null&&_h(ye,Yt,Ge,qe,!0)}}e:{if(ve=ee?gs(ee):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Ke=Zv;else if(Zd(ve))if(Jd)Ke=t_;else{Ke=Jv;var tt=Qv}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=e_);if(Ke&&(Ke=Ke(n,ee))){Qd(ye,Ke,a,_e);break e}tt&&tt(n,ve,ee),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Be(ve,"number",ve.value)}switch(tt=ee?gs(ee):window,n){case"focusin":(Zd(tt)||tt.contentEditable==="true")&&(ds=tt,gc=ee,_a=null);break;case"focusout":_a=gc=ds=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,oh(ye,a,_e);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":oh(ye,a,_e)}var nt;if(dc)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else fs?$d(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(Xd&&a.locale!=="ko"&&(fs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&fs&&(nt=Vd()):(Ji=_e,ac="value"in Ji?Ji.value:Ji.textContent,fs=!0)),tt=To(ee,lt),0<tt.length&&(lt=new Wd(lt,n,null,a,_e),ye.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=Kd(a),nt!==null&&(lt.data=nt)))),(nt=Xv?qv(n,a):Yv(n,a))&&(ee=To(ee,"onBeforeInput"),0<ee.length&&(_e=new Wd("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:ee}),_e.data=nt))}gh(ye,i)})}function Sa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=fn(n,a),m!=null&&c.unshift(Sa(n,m,d)),m=fn(n,i),m!=null&&c.push(Sa(n,m,d))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,a,c,d){for(var m=i._reactName,M=[];a!==null&&a!==c;){var U=a,V=U.alternate,ee=U.stateNode;if(V!==null&&V===c)break;U.tag===5&&ee!==null&&(U=ee,d?(V=fn(a,m),V!=null&&M.unshift(Sa(a,V,U))):d||(V=fn(a,m),V!=null&&M.push(Sa(a,V,U)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var l_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(l_,`
`).replace(c_,"")}function Ao(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Ro(){}var Ec=null,wc=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,u_=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(d_)}:Ac;function d_(n){setTimeout(function(){throw n})}function Rc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),fa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);fa(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),mi="__reactFiber$"+ms,Ma="__reactProps$"+ms,Ri="__reactContainer$"+ms,Cc="__reactEvents$"+ms,h_="__reactListeners$"+ms,p_="__reactHandles$"+ms;function Nr(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Sh(n);n!==null;){if(a=n[mi])return a;n=Sh(n)}return i}n=a,a=n.parentNode}return null}function Ea(n){return n=n[mi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Co(n){return n[Ma]||null}var bc=[],vs=-1;function nr(n){return{current:n}}function zt(n){0>vs||(n.current=bc[vs],bc[vs]=null,vs--)}function kt(n,i){vs++,bc[vs]=n.current,n.current=i}var ir={},pn=nr(ir),An=nr(!1),Lr=ir;function _s(n,i){var a=n.type.contextTypes;if(!a)return ir;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function bo(){zt(An),zt(pn)}function Mh(n,i,a){if(pn.current!==ir)throw Error(t(168));kt(pn,i),kt(An,a)}function Eh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return re({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Lr=pn.current,kt(pn,n),kt(An,An.current),!0}function wh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Eh(n,i,Lr),c.__reactInternalMemoizedMergedChildContext=n,zt(An),zt(pn),kt(pn,n)):zt(An),kt(An,a)}var Ci=null,No=!1,Pc=!1;function Th(n){Ci===null?Ci=[n]:Ci.push(n)}function m_(n){No=!0,Th(n)}function rr(){if(!Pc&&Ci!==null){Pc=!0;var n=0,i=_t;try{var a=Ci;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ci=null,No=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(n+1)),R(Ne,rr),d}finally{_t=i,Pc=!1}}return null}var xs=[],ys=0,Lo=null,Do=0,Xn=[],qn=0,Dr=null,bi=1,Pi="";function Ir(n,i){xs[ys++]=Do,xs[ys++]=Lo,Lo=n,Do=i}function Ah(n,i,a){Xn[qn++]=bi,Xn[qn++]=Pi,Xn[qn++]=Dr,Dr=n;var c=bi;n=Pi;var d=32-Mt(c)-1;c&=~(1<<d),a+=1;var m=32-Mt(i)+d;if(30<m){var M=d-d%5;m=(c&(1<<M)-1).toString(32),c>>=M,d-=M,bi=1<<32-Mt(i)+d|a<<d|c,Pi=m+n}else bi=1<<m|a<<d|c,Pi=n}function Nc(n){n.return!==null&&(Ir(n,1),Ah(n,1,0))}function Lc(n){for(;n===Lo;)Lo=xs[--ys],xs[ys]=null,Do=xs[--ys],xs[ys]=null;for(;n===Dr;)Dr=Xn[--qn],Xn[qn]=null,Pi=Xn[--qn],Xn[qn]=null,bi=Xn[--qn],Xn[qn]=null}var On=null,kn=null,Vt=!1,ri=null;function Rh(n,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ch(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Dr!==null?{id:bi,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,kn=null,!0):!1;default:return!1}}function Dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(Vt){var i=kn;if(i){var a=i;if(!Ch(n,i)){if(Dc(n))throw Error(t(418));i=tr(a.nextSibling);var c=On;i&&Ch(n,i)?Rh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,On=n)}}else{if(Dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,On=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Io(n){if(n!==On)return!1;if(!Vt)return bh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=kn)){if(Dc(n))throw Ph(),Error(t(418));for(;i;)Rh(n,i),i=tr(i.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kn=tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?tr(n.stateNode.nextSibling):null;return!0}function Ph(){for(var n=kn;n;)n=tr(n.nextSibling)}function Ss(){kn=On=null,Vt=!1}function Uc(n){ri===null?ri=[n]:ri.push(n)}var g_=A.ReactCurrentBatchConfig;function wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=d.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Nh(n){var i=n._init;return i(n._payload)}function Lh(n){function i(Y,j){if(n){var K=Y.deletions;K===null?(Y.deletions=[j],Y.flags|=16):K.push(j)}}function a(Y,j){if(!n)return null;for(;j!==null;)i(Y,j),j=j.sibling;return null}function c(Y,j){for(Y=new Map;j!==null;)j.key!==null?Y.set(j.key,j):Y.set(j.index,j),j=j.sibling;return Y}function d(Y,j){return Y=dr(Y,j),Y.index=0,Y.sibling=null,Y}function m(Y,j,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<j?(Y.flags|=2,j):K):(Y.flags|=2,j)):(Y.flags|=1048576,j)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,j,K,Te){return j===null||j.tag!==6?(j=Au(K,Y.mode,Te),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function V(Y,j,K,Te){var Ke=K.type;return Ke===H?_e(Y,j,K.props.children,Te,K.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&Nh(Ke)===j.type)?(Te=d(j,K.props),Te.ref=wa(Y,j,K),Te.return=Y,Te):(Te=sl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=wa(Y,j,K),Te.return=Y,Te)}function ee(Y,j,K,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=Ru(K,Y.mode,Te),j.return=Y,j):(j=d(j,K.children||[]),j.return=Y,j)}function _e(Y,j,K,Te,Ke){return j===null||j.tag!==7?(j=Hr(K,Y.mode,Te,Ke),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function ye(Y,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Au(""+j,Y.mode,K),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return K=sl(j.type,j.key,j.props,null,Y.mode,K),K.ref=wa(Y,null,j),K.return=Y,K;case B:return j=Ru(j,Y.mode,K),j.return=Y,j;case ce:var Te=j._init;return ye(Y,Te(j._payload),K)}if(at(j)||oe(j))return j=Hr(j,Y.mode,K,null),j.return=Y,j;Uo(Y,j)}return null}function ve(Y,j,K,Te){var Ke=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:U(Y,j,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case D:return K.key===Ke?V(Y,j,K,Te):null;case B:return K.key===Ke?ee(Y,j,K,Te):null;case ce:return Ke=K._init,ve(Y,j,Ke(K._payload),Te)}if(at(K)||oe(K))return Ke!==null?null:_e(Y,j,K,Te,null);Uo(Y,K)}return null}function Oe(Y,j,K,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,U(j,Y,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return Y=Y.get(Te.key===null?K:Te.key)||null,V(j,Y,Te,Ke);case B:return Y=Y.get(Te.key===null?K:Te.key)||null,ee(j,Y,Te,Ke);case ce:var tt=Te._init;return Oe(Y,j,K,tt(Te._payload),Ke)}if(at(Te)||oe(Te))return Y=Y.get(K)||null,_e(j,Y,Te,Ke,null);Uo(j,Te)}return null}function Ge(Y,j,K,Te){for(var Ke=null,tt=null,nt=j,lt=j=0,on=null;nt!==null&&lt<K.length;lt++){nt.index>lt?(on=nt,nt=null):on=nt.sibling;var Tt=ve(Y,nt,K[lt],Te);if(Tt===null){nt===null&&(nt=on);break}n&&nt&&Tt.alternate===null&&i(Y,nt),j=m(Tt,j,lt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt,nt=on}if(lt===K.length)return a(Y,nt),Vt&&Ir(Y,lt),Ke;if(nt===null){for(;lt<K.length;lt++)nt=ye(Y,K[lt],Te),nt!==null&&(j=m(nt,j,lt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Vt&&Ir(Y,lt),Ke}for(nt=c(Y,nt);lt<K.length;lt++)on=Oe(nt,Y,lt,K[lt],Te),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?lt:on.key),j=m(on,j,lt),tt===null?Ke=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(hr){return i(Y,hr)}),Vt&&Ir(Y,lt),Ke}function qe(Y,j,K,Te){var Ke=oe(K);if(typeof Ke!="function")throw Error(t(150));if(K=Ke.call(K),K==null)throw Error(t(151));for(var tt=Ke=null,nt=j,lt=j=0,on=null,Tt=K.next();nt!==null&&!Tt.done;lt++,Tt=K.next()){nt.index>lt?(on=nt,nt=null):on=nt.sibling;var hr=ve(Y,nt,Tt.value,Te);if(hr===null){nt===null&&(nt=on);break}n&&nt&&hr.alternate===null&&i(Y,nt),j=m(hr,j,lt),tt===null?Ke=hr:tt.sibling=hr,tt=hr,nt=on}if(Tt.done)return a(Y,nt),Vt&&Ir(Y,lt),Ke;if(nt===null){for(;!Tt.done;lt++,Tt=K.next())Tt=ye(Y,Tt.value,Te),Tt!==null&&(j=m(Tt,j,lt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt);return Vt&&Ir(Y,lt),Ke}for(nt=c(Y,nt);!Tt.done;lt++,Tt=K.next())Tt=Oe(nt,Y,lt,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&nt.delete(Tt.key===null?lt:Tt.key),j=m(Tt,j,lt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt);return n&&nt.forEach(function($_){return i(Y,$_)}),Vt&&Ir(Y,lt),Ke}function Yt(Y,j,K,Te){if(typeof K=="object"&&K!==null&&K.type===H&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case D:e:{for(var Ke=K.key,tt=j;tt!==null;){if(tt.key===Ke){if(Ke=K.type,Ke===H){if(tt.tag===7){a(Y,tt.sibling),j=d(tt,K.props.children),j.return=Y,Y=j;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&Nh(Ke)===tt.type){a(Y,tt.sibling),j=d(tt,K.props),j.ref=wa(Y,tt,K),j.return=Y,Y=j;break e}a(Y,tt);break}else i(Y,tt);tt=tt.sibling}K.type===H?(j=Hr(K.props.children,Y.mode,Te,K.key),j.return=Y,Y=j):(Te=sl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=wa(Y,j,K),Te.return=Y,Y=Te)}return M(Y);case B:e:{for(tt=K.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){a(Y,j.sibling),j=d(j,K.children||[]),j.return=Y,Y=j;break e}else{a(Y,j);break}else i(Y,j);j=j.sibling}j=Ru(K,Y.mode,Te),j.return=Y,Y=j}return M(Y);case ce:return tt=K._init,Yt(Y,j,tt(K._payload),Te)}if(at(K))return Ge(Y,j,K,Te);if(oe(K))return qe(Y,j,K,Te);Uo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,j!==null&&j.tag===6?(a(Y,j.sibling),j=d(j,K),j.return=Y,Y=j):(a(Y,j),j=Au(K,Y.mode,Te),j.return=Y,Y=j),M(Y)):a(Y,j)}return Yt}var Ms=Lh(!0),Dh=Lh(!1),Fo=nr(null),Oo=null,Es=null,Fc=null;function Oc(){Fc=Es=Oo=null}function kc(n){var i=Fo.current;zt(Fo),n._currentValue=i}function Bc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ws(n,i){Oo=n,Fc=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Oo===null)throw Error(t(308));Es=n,Oo.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Ur=null;function zc(n){Ur===null?Ur=[n]:Ur.push(n)}function Ih(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ni(n,c)}function Ni(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var sr=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ni(n,a)}return d=c.interleaved,d===null?(i.next=i,zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ni(n,a)}function ko(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Pr(n,a)}}function Fh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bo(n,i,a,c){var d=n.updateQueue;sr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var V=U,ee=V.next;V.next=null,M===null?m=ee:M.next=ee,M=V;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=V))}if(m!==null){var ye=d.baseState;M=0,_e=ee=V=null,U=m;do{var ve=U.lane,Oe=U.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ge=n,qe=U;switch(ve=i,Oe=a,qe.tag){case 1:if(Ge=qe.payload,typeof Ge=="function"){ye=Ge.call(Oe,ye,ve);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=qe.payload,ve=typeof Ge=="function"?Ge.call(Oe,ye,ve):Ge,ve==null)break e;ye=re({},ye,ve);break e;case 2:sr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[U]:ve.push(U))}else Oe={eventTime:Oe,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=Oe,V=ye):_e=_e.next=Oe,M|=ve;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(V=ye),d.baseState=V,d.firstBaseUpdate=ee,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);kr|=M,n.lanes=M,n.memoizedState=ye}}function Oh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ta={},gi=nr(Ta),Aa=nr(Ta),Ra=nr(Ta);function Fr(n){if(n===Ta)throw Error(t(174));return n}function Hc(n,i){switch(kt(Ra,i),kt(Aa,n),kt(gi,Ta),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}zt(gi),kt(gi,i)}function Ts(){zt(gi),zt(Aa),zt(Ra)}function kh(n){Fr(Ra.current);var i=Fr(gi.current),a=xe(i,n.type);i!==a&&(kt(Aa,n),kt(gi,a))}function Gc(n){Aa.current===n&&(zt(gi),zt(Aa))}var Ht=nr(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function jc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var Vo=A.ReactCurrentDispatcher,Xc=A.ReactCurrentBatchConfig,Or=0,Gt=null,Jt=null,sn=null,Ho=!1,Ca=!1,ba=0,v_=0;function mn(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function Yc(n,i,a,c,d,m){if(Or=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=n===null||n.memoizedState===null?S_:M_,n=a(c,d),Ca){m=0;do{if(Ca=!1,ba=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,Vo.current=E_,n=a(c,d)}while(Ca)}if(Vo.current=jo,i=Jt!==null&&Jt.next!==null,Or=0,sn=Jt=Gt=null,Ho=!1,i)throw Error(t(300));return n}function $c(){var n=ba!==0;return ba=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Pa(n,i){return typeof i=="function"?i(n):i}function Kc(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Jt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=M=null,V=null,ee=m;do{var _e=ee.lane;if((Or&_e)===_e)V!==null&&(V=V.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};V===null?(U=V=ye,M=c):V=V.next=ye,Gt.lanes|=_e,kr|=_e}ee=ee.next}while(ee!==null&&ee!==m);V===null?M=c:V.next=U,ii(c,i.memoizedState)||(Cn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,kr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Zc(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);ii(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Bh(){}function zh(n,i){var a=Gt,c=$n(),d=i(),m=!ii(c.memoizedState,d);if(m&&(c.memoizedState=d,Cn=!0),c=c.queue,Qc(Gh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Na(9,Hh.bind(null,a,c,d,i),void 0,null),an===null)throw Error(t(349));(Or&30)!==0||Vh(a,i,d)}return d}function Vh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Hh(n,i,a,c){i.value=a,i.getSnapshot=c,Wh(i)&&jh(n)}function Gh(n,i,a){return a(function(){Wh(i)&&jh(n)})}function Wh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function jh(n){var i=Ni(n,1);i!==null&&li(i,n,1,-1)}function Xh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},i.queue=n,n=n.dispatch=y_.bind(null,Gt,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function qh(){return $n().memoizedState}function Go(n,i,a,c){var d=vi();Gt.flags|=n,d.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function Wo(n,i,a,c){var d=$n();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,c!==null&&qc(c,M.deps)){d.memoizedState=Na(i,a,m,c);return}}Gt.flags|=n,d.memoizedState=Na(1|i,a,m,c)}function Yh(n,i){return Go(8390656,8,n,i)}function Qc(n,i){return Wo(2048,8,n,i)}function $h(n,i){return Wo(4,2,n,i)}function Kh(n,i){return Wo(4,4,n,i)}function Zh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4,4,Zh.bind(null,i,n),a)}function Jc(){}function Jh(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ep(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tp(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a):(ii(a,i)||(a=Mn(),Gt.lanes|=a,kr|=a,n.baseState=!0),i)}function __(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{_t=a,Xc.transition=c}}function np(){return $n().memoizedState}function x_(n,i,a){var c=ur(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,a);else if(a=Ih(n,i,a,c),a!==null){var d=wn();li(a,n,c,d),sp(a,i,c)}}function y_(n,i,a){var c=ur(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,a);if(d.hasEagerState=!0,d.eagerState=U,ii(U,M)){var V=i.interleaved;V===null?(d.next=d,zc(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=Ih(n,i,d,c),a!==null&&(d=wn(),li(a,n,c,d),sp(a,i,c))}}function ip(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function rp(n,i){Ca=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Pr(n,a)}}var jo={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},S_={readContext:Yn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Yh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,Zh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=x_.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:Jc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=__.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=vi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(Or&30)!==0||Vh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Yh(Gh.bind(null,c,m,n),[n]),c.flags|=2048,Na(9,Hh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=vi(),i=an.identifierPrefix;if(Vt){var a=Pi,c=bi;a=(c&~(1<<32-Mt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=v_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},M_={readContext:Yn,useCallback:Jh,useContext:Yn,useEffect:Qc,useImperativeHandle:Qh,useInsertionEffect:$h,useLayoutEffect:Kh,useMemo:ep,useReducer:Kc,useRef:qh,useState:function(){return Kc(Pa)},useDebugValue:Jc,useDeferredValue:function(n){var i=$n();return tp(i,Jt.memoizedState,n)},useTransition:function(){var n=Kc(Pa)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:zh,useId:np,unstable_isNewReconciler:!1},E_={readContext:Yn,useCallback:Jh,useContext:Yn,useEffect:Qc,useImperativeHandle:Qh,useInsertionEffect:$h,useLayoutEffect:Kh,useMemo:ep,useReducer:Zc,useRef:qh,useState:function(){return Zc(Pa)},useDebugValue:Jc,useDeferredValue:function(n){var i=$n();return Jt===null?i.memoizedState=n:tp(i,Jt.memoizedState,n)},useTransition:function(){var n=Zc(Pa)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:zh,useId:np,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function eu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xo={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),d=ur(n),m=Li(c,d);m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,d),i!==null&&(li(i,n,d,c),ko(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),d=ur(n),m=Li(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,d),i!==null&&(li(i,n,d,c),ko(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=ur(n),d=Li(a,c);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,c),i!==null&&(li(i,n,c,a),ko(i,n,c))}};function ap(n,i,a,c,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!va(a,c)||!va(d,m):!0}function op(n,i,a){var c=!1,d=ir,m=i.contextType;return typeof m=="object"&&m!==null?m=Yn(m):(d=Rn(i)?Lr:pn.current,c=i.contextTypes,m=(c=c!=null)?_s(n,d):ir),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xo.enqueueReplaceState(i,i.state,null)}function tu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Vc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Yn(m):(m=Rn(i)?Lr:pn.current,d.context=_s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(eu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xo.enqueueReplaceState(d,d.state,null),Bo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var a="",c=i;do a+=Q(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function nu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function iu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,_u=c),iu(n,i)},a}function up(n,i,a){a=Li(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){iu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){iu(n,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new w_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=k_.bind(null,n,i,a),i.then(n,n))}function dp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var T_=A.ReactCurrentOwner,Cn=!1;function En(n,i,a,c){i.child=n===null?Dh(i,null,a,c):Ms(i,n.child,a,c)}function pp(n,i,a,c,d){a=a.render;var m=i.ref;return ws(i,d),c=Yc(n,i,a,c,m,d),a=$c(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(Vt&&a&&Nc(i),i.flags|=1,En(n,i,c,d),i.child)}function mp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Tu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,gp(n,i,m,c,d)):(n=sl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(M,c)&&n.ref===i.ref)return Di(n,i,d)}return i.flags|=1,n=dr(m,c),n.ref=i.ref,n.return=i,i.child=n}function gp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(va(m,c)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Di(n,i,d)}return ru(n,i,a,c,d)}function vp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Cs,Bn),Bn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Cs,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Cs,Bn),Bn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Cs,Bn),Bn|=c;return En(n,i,d,a),i.child}function _p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ru(n,i,a,c,d){var m=Rn(a)?Lr:pn.current;return m=_s(i,m),ws(i,d),a=Yc(n,i,a,c,m,d),c=$c(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(Vt&&c&&Nc(i),i.flags|=1,En(n,i,a,d),i.child)}function xp(n,i,a,c,d){if(Rn(a)){var m=!0;Po(i)}else m=!1;if(ws(i,d),i.stateNode===null)Yo(n,i),op(i,a,c),tu(i,a,c,d),c=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var V=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Yn(ee):(ee=Rn(a)?Lr:pn.current,ee=_s(i,ee));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==c||V!==ee)&&lp(i,M,c,ee),sr=!1;var ve=i.memoizedState;M.state=ve,Bo(i,c,M,d),V=i.memoizedState,U!==c||ve!==V||An.current||sr?(typeof _e=="function"&&(eu(i,a,_e,c),V=i.memoizedState),(U=sr||ap(i,a,U,c,ve,V,ee))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),M.props=c,M.state=V,M.context=ee,c=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Uh(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:si(i.type,U),M.props=ee,ye=i.pendingProps,ve=M.context,V=a.contextType,typeof V=="object"&&V!==null?V=Yn(V):(V=Rn(a)?Lr:pn.current,V=_s(i,V));var Oe=a.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ve!==V)&&lp(i,M,c,V),sr=!1,ve=i.memoizedState,M.state=ve,Bo(i,c,M,d);var Ge=i.memoizedState;U!==ye||ve!==Ge||An.current||sr?(typeof Oe=="function"&&(eu(i,a,Oe,c),Ge=i.memoizedState),(ee=sr||ap(i,a,ee,c,ve,Ge,V)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ge,V),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ge,V)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),M.props=c,M.state=Ge,M.context=V,c=ee):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return su(n,i,a,c,m,d)}function su(n,i,a,c,d,m){_p(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&wh(i,a,!1),Di(n,i,m);c=i.stateNode,T_.current=i;var U=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,U,m)):En(n,i,U,m),i.memoizedState=c.state,d&&wh(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mh(n,i.context,!1),Hc(n,i.containerInfo)}function Sp(n,i,a,c,d){return Ss(),Uc(d),i.flags|=256,En(n,i,a,c),i.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ou(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mp(n,i,a){var c=i.pendingProps,d=Ht.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Ht,d&1),n===null)return Ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=al(M,c,0,null),n=Hr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ou(a),i.memoizedState=au,n):lu(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return A_(n,i,M,c,U,d,a);if(m){m=c.fallback,M=i.mode,d=n.child,U=d.sibling;var V={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=dr(d,V),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=dr(U,m):(m=Hr(m,M,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?ou(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~a,i.memoizedState=au,c}return m=n.child,n=m.sibling,c=dr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function lu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qo(n,i,a,c){return c!==null&&Uc(c),Ms(i,n.child,null,a),n=lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function A_(n,i,a,c,d,m,M){if(a)return i.flags&256?(i.flags&=-257,c=nu(Error(t(422))),qo(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),m=Hr(m,d,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,M),i.child.memoizedState=ou(M),i.memoizedState=au,m);if((i.mode&1)===0)return qo(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=nu(m,c,void 0),qo(n,i,M,c)}if(U=(M&n.childLanes)!==0,Cn||U){if(c=an,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ni(n,d),li(c,n,d,-1))}return wu(),c=nu(Error(t(421))),qo(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=B_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=tr(d.nextSibling),On=i,Vt=!0,ri=null,n!==null&&(Xn[qn++]=bi,Xn[qn++]=Pi,Xn[qn++]=Dr,bi=n.id,Pi=n.overflow,Dr=i),i=lu(i,c.children),i.flags|=4096,i)}function Ep(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Bc(n.return,i,a)}function cu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function wp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(En(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ep(n,a,i);else if(n.tag===19)Ep(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&zo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),cu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}cu(i,!0,a,null,m);break;case"together":cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=dr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=dr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function R_(n,i,a){switch(i.tag){case 3:yp(i),Ss();break;case 5:kh(i);break;case 1:Rn(i.type)&&Po(i);break;case 4:Hc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Fo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mp(n,i,a):(kt(Ht,Ht.current&1),n=Di(n,i,a),n!==null?n.sibling:null);kt(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,a)}return Di(n,i,a)}var Tp,uu,Ap,Rp;Tp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uu=function(){},Ap=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Fr(gi.current);var m=null;switch(a){case"input":d=Et(n,d),c=Et(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=It(n,d),c=It(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}Ye(a,c);var M;a=null;for(ee in d)if(!c.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in c){var V=c[ee];if(U=d?.[ee],c.hasOwnProperty(ee)&&V!==U&&(V!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||V&&V.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in V)V.hasOwnProperty(M)&&U[M]!==V[M]&&(a||(a={}),a[M]=V[M])}else a||(m||(m=[]),m.push(ee,a)),a=V;else ee==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(m=m||[]).push(ee,V)):ee==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ee,""+V):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(V!=null&&ee==="onScroll"&&Bt("scroll",n),m||U===V||(m=[])):(m=m||[]).push(ee,V))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Rp=function(n,i,a,c){a!==c&&(i.flags|=4)};function La(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function C_(n,i,a){var c=i.pendingProps;switch(Lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&bo(),gn(i),null;case 3:return c=i.stateNode,Ts(),zt(An),zt(pn),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(Su(ri),ri=null))),uu(n,i),gn(i),null;case 5:Gc(i);var d=Fr(Ra.current);if(a=i.type,n!==null&&i.stateNode!=null)Ap(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Fr(gi.current),Io(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[mi]=i,c[Ma]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<xa.length;d++)Bt(xa[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":We(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":L(c,m),Bt("invalid",c)}Ye(a,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Rt(c),Ct(c,m,!0);break;case"textarea":Rt(c),$(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ro)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[mi]=i,n[Ma]=c,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(M=Pe(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<xa.length;d++)Bt(xa[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":We(n,c),d=Et(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":L(n,c),d=It(n,c),Bt("invalid",n);break;default:d=c}Ye(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var V=U[m];m==="style"?De(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ze(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ae(n,V):typeof V=="number"&&Ae(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Bt("scroll",n):V!=null&&P(n,m,V,M))}switch(a){case"input":Rt(n),Ct(n,c,!1);break;case"textarea":Rt(n),$(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ot(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Rp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Ra.current),Fr(gi.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[mi]=i,(m=c.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:Ao(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return gn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ph(),Ss(),i.flags|=98560,m=!1;else if(m=Io(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[mi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else ri!==null&&(Su(ri),ri=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?en===0&&(en=3):wu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ts(),uu(n,i),n===null&&ya(i.stateNode.containerInfo),gn(i),null;case 10:return kc(i.type._context),gn(i),null;case 17:return Rn(i.type)&&bo(),gn(i),null;case 19:if(zt(Ht),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)La(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=zo(n),M!==null){for(i.flags|=128,La(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&W()>bs&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304)}else{if(!c)if(n=zo(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),La(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Vt)return gn(i),null}else 2*W()-m.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=W(),i.sibling=null,a=Ht.current,kt(Ht,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Eu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function b_(n,i){switch(Lc(i),i.tag){case 1:return Rn(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),zt(An),zt(pn),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Ts(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var $o=!1,vn=!1,P_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Wt(n,i,c)}else a.current=null}function fu(n,i,a){try{a()}catch(c){Wt(n,i,c)}}var Cp=!1;function N_(n,i){if(Ec=mo,n=ah(),mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,U=-1,V=-1,ee=0,_e=0,ye=n,ve=null;t:for(;;){for(var Oe;ye!==a||d!==0&&ye.nodeType!==3||(U=M+d),ye!==m||c!==0&&ye.nodeType!==3||(V=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)ve=ye,ye=Oe;for(;;){if(ye===n)break t;if(ve===a&&++ee===d&&(U=M),ve===m&&++_e===c&&(V=M),(Oe=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Oe}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:n,selectionRange:a},mo=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var qe=Ge.memoizedProps,Yt=Ge.memoizedState,Y=i.stateNode,j=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:si(i.type,qe),Yt);Y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return Ge=Cp,Cp=!1,Ge}function Da(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&fu(i,a,m)}d=d.next}while(d!==c)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bp(n){var i=n.alternate;i!==null&&(n.alternate=null,bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[Ma],delete i[Cc],delete i[h_],delete i[p_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pp(n){return n.tag===5||n.tag===3||n.tag===4}function Np(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,a),n=n.sibling;n!==null;)hu(n,i,a),n=n.sibling}function pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,a),n=n.sibling;n!==null;)pu(n,i,a),n=n.sibling}var cn=null,ai=!1;function or(n,i,a){for(a=a.child;a!==null;)Lp(n,i,a),a=a.sibling}function Lp(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:vn||Rs(a,i);case 6:var c=cn,d=ai;cn=null,or(n,i,a),cn=c,ai=d,cn!==null&&(ai?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ai?(n=cn,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),fa(n)):Rc(cn,a.stateNode));break;case 4:c=cn,d=ai,cn=a.stateNode.containerInfo,ai=!0,or(n,i,a),cn=c,ai=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&fu(a,i,M),d=d.next}while(d!==c)}or(n,i,a);break;case 1:if(!vn&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Wt(a,i,U)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,or(n,i,a),vn=c):or(n,i,a);break;default:or(n,i,a)}}function Dp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new P_),i.forEach(function(c){var d=z_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ai=!1;break e;case 3:cn=U.stateNode.containerInfo,ai=!0;break e;case 4:cn=U.stateNode.containerInfo,ai=!0;break e}U=U.return}if(cn===null)throw Error(t(160));Lp(m,M,d),cn=null,ai=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ee){Wt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),_i(n),c&4){try{Da(3,n,n.return),Ko(3,n)}catch(qe){Wt(n,n.return,qe)}try{Da(5,n,n.return)}catch(qe){Wt(n,n.return,qe)}}break;case 1:oi(i,n),_i(n),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(oi(i,n),_i(n),c&512&&a!==null&&Rs(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(qe){Wt(n,n.return,qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=a!==null?a.memoizedProps:m,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),Pe(U,M);var ee=Pe(U,m);for(M=0;M<V.length;M+=2){var _e=V[M],ye=V[M+1];_e==="style"?De(d,ye):_e==="dangerouslySetInnerHTML"?Ze(d,ye):_e==="children"?Ae(d,ye):P(d,_e,ye,ee)}switch(U){case"input":je(d,m);break;case"textarea":w(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?Ot(d,!!m.multiple,Oe,!1):ve!==!!m.multiple&&(m.defaultValue!=null?Ot(d,!!m.multiple,m.defaultValue,!0):Ot(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ma]=m}catch(qe){Wt(n,n.return,qe)}}break;case 6:if(oi(i,n),_i(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Wt(n,n.return,qe)}}break;case 3:if(oi(i,n),_i(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{fa(i.containerInfo)}catch(qe){Wt(n,n.return,qe)}break;case 4:oi(i,n),_i(n);break;case 13:oi(i,n),_i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(vu=W())),c&4&&Dp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ee=vn)||_e,oi(i,n),vn=ee):oi(i,n),_i(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(ze=n,_e=n.child;_e!==null;){for(ye=ze=_e;ze!==null;){switch(ve=ze,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Da(4,ve,ve.return);break;case 1:Rs(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(qe){Wt(c,a,qe)}}break;case 5:Rs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Op(ye);continue}}Oe!==null?(Oe.return=ve,ze=Oe):Op(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,V=ye.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=we("display",M))}catch(qe){Wt(n,n.return,qe)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(qe){Wt(n,n.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,n),_i(n),c&4&&Dp(n);break;case 21:break;default:oi(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var m=Np(n);pu(n,m,d);break;case 3:case 4:var M=c.stateNode.containerInfo,U=Np(n);hu(n,U,M);break;default:throw Error(t(161))}}catch(V){Wt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function L_(n,i,a){ze=n,Up(n)}function Up(n,i,a){for(var c=(n.mode&1)!==0;ze!==null;){var d=ze,m=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||$o;if(!M){var U=d.alternate,V=U!==null&&U.memoizedState!==null||vn;U=$o;var ee=vn;if($o=M,(vn=V)&&!ee)for(ze=d;ze!==null;)M=ze,V=M.child,M.tag===22&&M.memoizedState!==null?kp(d):V!==null?(V.return=M,ze=V):kp(d);for(;m!==null;)ze=m,Up(m),m=m.sibling;ze=d,$o=U,vn=ee}Fp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ze=m):Fp(n)}}function Fp(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Oh(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Oh(i,M,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&fa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&du(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Op(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function kp(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(V){Wt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){Wt(i,d,V)}}var m=i.return;try{du(i)}catch(V){Wt(i,m,V)}break;case 5:var M=i.return;try{du(i)}catch(V){Wt(i,M,V)}}}catch(V){Wt(i,i.return,V)}if(i===n){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var D_=Math.ceil,Zo=A.ReactCurrentDispatcher,mu=A.ReactCurrentOwner,Kn=A.ReactCurrentBatchConfig,wt=0,an=null,Kt=null,un=0,Bn=0,Cs=nr(0),en=0,Ia=null,kr=0,Qo=0,gu=0,Ua=null,bn=null,vu=0,bs=1/0,Ii=null,Jo=!1,_u=null,lr=null,el=!1,cr=null,tl=0,Fa=0,xu=null,nl=-1,il=0;function wn(){return(wt&6)!==0?W():nl!==-1?nl:nl=W()}function ur(n){return(n.mode&1)===0?1:(wt&2)!==0&&un!==0?un&-un:g_.transition!==null?(il===0&&(il=Mn()),il):(n=_t,n!==0||(n=window.event,n=n===void 0?16:zd(n.type)),n)}function li(n,i,a,c){if(50<Fa)throw Fa=0,xu=null,Error(t(185));qt(n,a,c),((wt&2)===0||n!==an)&&(n===an&&((wt&2)===0&&(Qo|=a),en===4&&fr(n,un)),Pn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(bs=W()+500,No&&rr()))}function Pn(n,i){var a=n.callbackNode;br(n,i);var c=ni(n,n===an?un:0);if(c===0)a!==null&&q(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&q(a),i===1)n.tag===0?m_(zp.bind(null,n)):Th(zp.bind(null,n)),f_(function(){(wt&6)===0&&rr()}),a=null;else{switch(Ld(c)){case 1:a=Ne;break;case 4:a=He;break;case 16:a=Fe;break;case 536870912:a=st;break;default:a=Fe}a=Yp(a,Bp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Bp(n,i){if(nl=-1,il=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ps()&&n.callbackNode!==a)return null;var c=ni(n,n===an?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=rl(n,c);else{i=c;var d=wt;wt|=2;var m=Hp();(an!==n||un!==i)&&(Ii=null,bs=W()+500,zr(n,i));do try{F_();break}catch(U){Vp(n,U)}while(!0);Oc(),Zo.current=m,wt=d,Kt!==null?i=0:(an=null,un=0,i=en)}if(i!==0){if(i===2&&(d=Ft(n),d!==0&&(c=d,i=yu(n,d))),i===1)throw a=Ia,zr(n,0),fr(n,c),Pn(n,W()),a;if(i===6)fr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!I_(d)&&(i=rl(n,c),i===2&&(m=Ft(n),m!==0&&(c=m,i=yu(n,m))),i===1))throw a=Ia,zr(n,0),fr(n,c),Pn(n,W()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,bn,Ii);break;case 3:if(fr(n,c),(c&130023424)===c&&(i=vu+500-W(),10<i)){if(ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(Vr.bind(null,n,bn,Ii),i);break}Vr(n,bn,Ii);break;case 4:if(fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-Mt(c);m=1<<M,M=i[M],M>d&&(d=M),c&=~m}if(c=d,c=W()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*D_(c/1960))-c,10<c){n.timeoutHandle=Ac(Vr.bind(null,n,bn,Ii),c);break}Vr(n,bn,Ii);break;case 5:Vr(n,bn,Ii);break;default:throw Error(t(329))}}}return Pn(n,W()),n.callbackNode===a?Bp.bind(null,n):null}function yu(n,i){var a=Ua;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=bn,bn=a,i!==null&&Su(i)),n}function Su(n){bn===null?bn=n:bn.push.apply(bn,n)}function I_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ii(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~gu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Mt(i),c=1<<a;n[a]=-1,i&=~c}}function zp(n){if((wt&6)!==0)throw Error(t(327));Ps();var i=ni(n,0);if((i&1)===0)return Pn(n,W()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var c=Ft(n);c!==0&&(i=c,a=yu(n,c))}if(a===1)throw a=Ia,zr(n,0),fr(n,i),Pn(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,bn,Ii),Pn(n,W()),null}function Mu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(bs=W()+500,No&&rr())}}function Br(n){cr!==null&&cr.tag===0&&(wt&6)===0&&Ps();var i=wt;wt|=1;var a=Kn.transition,c=_t;try{if(Kn.transition=null,_t=1,n)return n()}finally{_t=c,Kn.transition=a,wt=i,(wt&6)===0&&rr()}}function Eu(){Bn=Cs.current,zt(Cs)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,u_(a)),Kt!==null)for(a=Kt.return;a!==null;){var c=a;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bo();break;case 3:Ts(),zt(An),zt(pn),jc();break;case 5:Gc(c);break;case 4:Ts();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:kc(c.type._context);break;case 22:case 23:Eu()}a=a.return}if(an=n,Kt=n=dr(n.current,null),un=Bn=i,en=0,Ia=null,gu=Qo=kr=0,bn=Ua=null,Ur!==null){for(i=0;i<Ur.length;i++)if(a=Ur[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var M=m.next;m.next=d,c.next=M}a.pending=c}Ur=null}return n}function Vp(n,i){do{var a=Kt;try{if(Oc(),Vo.current=jo,Ho){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(Or=0,sn=Jt=Gt=null,Ca=!1,ba=0,mu.current=null,a===null||a.return===null){en=1,Ia=i,Kt=null;break}e:{var m=n,M=a.return,U=a,V=i;if(i=un,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ee=V,_e=U,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=dp(M);if(Oe!==null){Oe.flags&=-257,hp(Oe,M,U,m,i),Oe.mode&1&&fp(m,ee,i),i=Oe,V=ee;var Ge=i.updateQueue;if(Ge===null){var qe=new Set;qe.add(V),i.updateQueue=qe}else Ge.add(V);break e}else{if((i&1)===0){fp(m,ee,i),wu();break e}V=Error(t(426))}}else if(Vt&&U.mode&1){var Yt=dp(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),hp(Yt,M,U,m,i),Uc(As(V,U));break e}}m=V=As(V,U),en!==4&&(en=2),Ua===null?Ua=[m]:Ua.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=cp(m,V,i);Fh(m,Y);break e;case 1:U=V;var j=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(lr===null||!lr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=up(m,U,i);Fh(m,Te);break e}}m=m.return}while(m!==null)}Wp(a)}catch(Ke){i=Ke,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Hp(){var n=Zo.current;return Zo.current=jo,n===null?jo:n}function wu(){(en===0||en===3||en===2)&&(en=4),an===null||(kr&268435455)===0&&(Qo&268435455)===0||fr(an,un)}function rl(n,i){var a=wt;wt|=2;var c=Hp();(an!==n||un!==i)&&(Ii=null,zr(n,i));do try{U_();break}catch(d){Vp(n,d)}while(!0);if(Oc(),wt=a,Zo.current=c,Kt!==null)throw Error(t(261));return an=null,un=0,en}function U_(){for(;Kt!==null;)Gp(Kt)}function F_(){for(;Kt!==null&&!te();)Gp(Kt)}function Gp(n){var i=qp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Wp(n):Kt=i,mu.current=null}function Wp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=C_(a,i,Bn),a!==null){Kt=a;return}}else{if(a=b_(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);en===0&&(en=5)}function Vr(n,i,a){var c=_t,d=Kn.transition;try{Kn.transition=null,_t=1,O_(n,i,a,c)}finally{Kn.transition=d,_t=c}return null}function O_(n,i,a,c){do Ps();while(cr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(hn(n,m),n===an&&(Kt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Yp(Fe,function(){return Ps(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Kn.transition,Kn.transition=null;var M=_t;_t=1;var U=wt;wt|=4,mu.current=null,N_(n,a),Ip(a,n),i_(wc),mo=!!Ec,wc=Ec=null,n.current=a,L_(a),ie(),wt=U,_t=M,Kn.transition=m}else n.current=a;if(el&&(el=!1,cr=n,tl=d),m=n.pendingLanes,m===0&&(lr=null),bt(a.stateNode),Pn(n,W()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jo)throw Jo=!1,n=_u,_u=null,n;return(tl&1)!==0&&n.tag!==0&&Ps(),m=n.pendingLanes,(m&1)!==0?n===xu?Fa++:(Fa=0,xu=n):Fa=0,rr(),null}function Ps(){if(cr!==null){var n=Ld(tl),i=Kn.transition,a=_t;try{if(Kn.transition=null,_t=16>n?16:n,cr===null)var c=!1;else{if(n=cr,cr=null,tl=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,ze=n.current;ze!==null;){var m=ze,M=m.child;if((ze.flags&16)!==0){var U=m.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ee=U[V];for(ze=ee;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Da(8,_e,m)}var ye=_e.child;if(ye!==null)ye.return=_e,ze=ye;else for(;ze!==null;){_e=ze;var ve=_e.sibling,Oe=_e.return;if(bp(_e),_e===ee){ze=null;break}if(ve!==null){ve.return=Oe,ze=ve;break}ze=Oe}}}var Ge=m.alternate;if(Ge!==null){var qe=Ge.child;if(qe!==null){Ge.child=null;do{var Yt=qe.sibling;qe.sibling=null,qe=Yt}while(qe!==null)}}ze=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,ze=M;else e:for(;ze!==null;){if(m=ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Da(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,ze=Y;break e}ze=m.return}}var j=n.current;for(ze=j;ze!==null;){M=ze;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,ze=K;else e:for(M=j;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ko(9,U)}}catch(Ke){Wt(U,U.return,Ke)}if(U===M){ze=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ze=Te;break e}ze=U.return}}if(wt=d,rr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Je,n)}catch{}c=!0}return c}finally{_t=a,Kn.transition=i}}return!1}function jp(n,i,a){i=As(a,i),i=cp(n,i,1),n=ar(n,i,1),i=wn(),n!==null&&(qt(n,1,i),Pn(n,i))}function Wt(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){n=As(a,n),n=up(i,n,1),i=ar(i,n,1),n=wn(),i!==null&&(qt(i,1,n),Pn(i,n));break}}i=i.return}}function k_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>W()-vu?zr(n,0):gu|=a),Pn(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var a=wn();n=Ni(n,i),n!==null&&(qt(n,i,a),Pn(n,a))}function B_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function z_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var qp;qp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,R_(n,i,a);Cn=(n.flags&131072)!==0}else Cn=!1,Vt&&(i.flags&1048576)!==0&&Ah(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(n,i),n=i.pendingProps;var d=_s(i,pn.current);ws(i,a),d=Yc(null,i,c,n,d,a);var m=$c();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(m=!0,Po(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Vc(i),d.updater=Xo,i.stateNode=d,d._reactInternals=i,tu(i,c,n,a),i=su(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Nc(i),En(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=H_(c),n=si(c,n),d){case 0:i=ru(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=pp(null,i,c,n,a);break e;case 14:i=mp(null,i,c,si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:si(c,d),ru(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:si(c,d),xp(n,i,c,d,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Uh(n,i),Bo(i,c,null,a);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=Sp(n,i,c,a,d);break e}else if(c!==d){d=As(Error(t(424)),i),i=Sp(n,i,c,a,d);break e}else for(kn=tr(i.stateNode.containerInfo.firstChild),On=i,Vt=!0,ri=null,a=Dh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===d){i=Di(n,i,a);break e}En(n,i,c,a)}i=i.child}return i;case 5:return kh(i),n===null&&Ic(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Tc(c,d)?M=null:m!==null&&Tc(c,m)&&(i.flags|=32),_p(n,i),En(n,i,M,a),i.child;case 6:return n===null&&Ic(i),null;case 13:return Mp(n,i,a);case 4:return Hc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,a):En(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:si(c,d),pp(n,i,c,d,a);case 7:return En(n,i,i.pendingProps,a),i.child;case 8:return En(n,i,i.pendingProps.children,a),i.child;case 12:return En(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,kt(Fo,c._currentValue),c._currentValue=M,m!==null)if(ii(m.value,M)){if(m.children===d.children&&!An.current){i=Di(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var V=U.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=Li(-1,a&-a),V.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ee.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),Bc(m.return,a,i),U.lanes|=a;break}V=V.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),Bc(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}En(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ws(i,a),d=Yn(d),c=c(d),i.flags|=1,En(n,i,c,a),i.child;case 14:return c=i.type,d=si(c,i.pendingProps),d=si(c.type,d),mp(n,i,c,d,a);case 15:return gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:si(c,d),Yo(n,i),i.tag=1,Rn(c)?(n=!0,Po(i)):n=!1,ws(i,a),op(i,c,d),tu(i,c,d,a),su(null,i,c,!0,n,a);case 19:return wp(n,i,a);case 22:return vp(n,i,a)}throw Error(t(156,i.tag))};function Yp(n,i){return R(n,i)}function V_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,a,c){return new V_(n,i,a,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function H_(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===le)return 14}return 2}function dr(n,i){var a=n.alternate;return a===null?(a=Zn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,c,d,m){var M=2;if(c=n,typeof n=="function")Tu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case H:return Hr(a.children,d,m,i);case X:M=8,d|=8;break;case C:return n=Zn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case J:return n=Zn(13,a,i,d),n.elementType=J,n.lanes=m,n;case se:return n=Zn(19,a,i,d),n.elementType=se,n.lanes=m,n;case ue:return al(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:M=10;break e;case O:M=9;break e;case ae:M=11;break e;case le:M=14;break e;case ce:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(M,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Hr(n,i,a,c){return n=Zn(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=Zn(22,n,c,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Au(n,i,a){return n=Zn(6,n,null,i),n.lanes=a,n}function Ru(n,i,a){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function G_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cu(n,i,a,c,d,m,M,U,V){return n=new G_(n,i,a,U,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(m),n}function W_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $p(n){if(!n)return ir;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Eh(n,a,i)}return i}function Kp(n,i,a,c,d,m,M,U,V){return n=Cu(a,c,!0,n,d,m,M,U,V),n.context=$p(null),a=n.current,c=wn(),d=ur(a),m=Li(c,d),m.callback=i??null,ar(a,m,d),n.current.lanes=d,qt(n,d,c),Pn(n,c),n}function ol(n,i,a,c){var d=i.current,m=wn(),M=ur(d);return a=$p(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ar(d,i,M),n!==null&&(li(n,d,M,m),ko(n,d,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function bu(n,i){Zp(n,i),(n=n.alternate)&&Zp(n,i)}function j_(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pu(n){this._internalRoot=n}cl.prototype.render=Pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=Pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){ol(null,n,null,null)}),i[Ri]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ud();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&kd(n)}};function Nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function X_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ee=ll(M);m.call(ee)}}var M=Kp(i,c,n,0,null,!1,!1,"",Jp);return n._reactRootContainer=M,n[Ri]=M.current,ya(n.nodeType===8?n.parentNode:n),Br(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ee=ll(V);U.call(ee)}}var V=Cu(n,0,!1,null,null,!1,!1,"",Jp);return n._reactRootContainer=V,n[Ri]=V.current,ya(n.nodeType===8?n.parentNode:n),Br(function(){ol(i,V,a,c)}),V}function fl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var U=d;d=function(){var V=ll(M);U.call(V)}}ol(i,M,n,d)}else M=X_(a,i,n,d,c);return ll(M)}Dd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qt(i.pendingLanes);a!==0&&(Pr(i,a|1),Pn(i,W()),(wt&6)===0&&(bs=W()+500,rr()))}break;case 13:Br(function(){var c=Ni(n,1);if(c!==null){var d=wn();li(c,n,1,d)}}),bu(n,1)}},nc=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var a=wn();li(i,n,134217728,a)}bu(n,134217728)}},Id=function(n){if(n.tag===13){var i=ur(n),a=Ni(n,i);if(a!==null){var c=wn();li(a,n,i,c)}bu(n,i)}},Ud=function(){return _t},Fd=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},Me=function(n,i,a){switch(i){case"input":if(je(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Co(c);if(!d)throw Error(t(90));dt(c),je(c,d)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},ct=Mu,Pt=Br;var q_={usingClientEntryPoint:!1,Events:[Ea,gs,Co,pe,Xe,Mu]},Oa={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y_={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=uo(n),n===null?null:n.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Je=dl.inject(Y_),ot=dl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(i))throw Error(t(200));return W_(n,i,null,a)},Nn.createRoot=function(n,i){if(!Nu(n))throw Error(t(299));var a=!1,c="",d=Qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cu(n,1,!1,null,null,a,!1,c,d),n[Ri]=i.current,ya(n.nodeType===8?n.parentNode:n),new Pu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=uo(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Br(n)},Nn.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return fl(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!Nu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",M=Qp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Kp(i,null,n,1,a??null,d,!1,m,M),n[Ri]=i.current,ya(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new cl(i)},Nn.render=function(n,i,a){if(!ul(i))throw Error(t(200));return fl(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Nn.unstable_batchedUpdates=Mu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var om;function Tg(){if(om)return Iu.exports;om=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Iu.exports=i0(),Iu.exports}var lm;function r0(){if(lm)return hl;lm=1;var s=Tg();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var s0=r0();const a0=Eg(s0);Tg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Xa.apply(this,arguments)}var Mr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Mr||(Mr={}));const cm="popstate";function o0(s){s===void 0&&(s={});function e(r,o){let{pathname:l,search:u,hash:f}=r.location;return xf("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Rg(o)}return c0(e,t,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ag(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function um(s,e){return{usr:s.state,key:s.key,idx:e}}function xf(s,e,t,r){return t===void 0&&(t=null),Xa({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:t,key:e&&e.key||r||l0()})}function Rg(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function na(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function c0(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f=Mr.Pop,h=null,p=x();p==null&&(p=0,u.replaceState(Xa({},u.state,{idx:p}),""));function x(){return(u.state||{idx:null}).idx}function _(){f=Mr.Pop;let v=x(),g=v==null?null:v-p;p=v,h&&h({action:f,location:E.location,delta:g})}function y(v,g){f=Mr.Push;let I=xf(E.location,v,g);p=x()+1;let P=um(I,p),A=E.createHref(I);try{u.pushState(P,"",A)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(A)}l&&h&&h({action:f,location:E.location,delta:1})}function S(v,g){f=Mr.Replace;let I=xf(E.location,v,g);p=x();let P=um(I,p),A=E.createHref(I);u.replaceState(P,"",A),l&&h&&h({action:f,location:E.location,delta:0})}function T(v){let g=o.location.origin!=="null"?o.location.origin:o.location.href,I=typeof v=="string"?v:Rg(v);return I=I.replace(/ $/,"%20"),tn(g,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,g)}let E={get action(){return f},get location(){return s(o,u)},listen(v){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(cm,_),h=v,()=>{o.removeEventListener(cm,_),h=null}},createHref(v){return e(o,v)},createURL:T,encodeLocation(v){let g=T(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:S,go(v){return u.go(v)}};return E}var fm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(fm||(fm={}));function u0(s,e,t){return t===void 0&&(t="/"),f0(s,e,t)}function f0(s,e,t,r){let o=typeof e=="string"?na(e):e,l=Pg(o.pathname||"/",t);if(l==null)return null;let u=Cg(s);d0(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=w0(l);f=S0(u[h],p)}return f}function Cg(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(tn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=ns([r,h.relativePath]),x=t.concat(h);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Cg(l.children,e,x,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:x0(p,l.index),routesMeta:x})};return s.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let h of bg(l.path))o(l,u,h)}),e}function bg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=bg(r.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function d0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:y0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:[\w-]+$/,p0=3,m0=2,g0=1,v0=10,_0=-2,dm=s=>s==="*";function x0(s,e){let t=s.split("/"),r=t.length;return t.some(dm)&&(r+=_0),e&&(r+=m0),t.filter(o=>!dm(o)).reduce((o,l)=>o+(h0.test(l)?p0:l===""?g0:v0),r)}function y0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function S0(s,e,t){let{routesMeta:r}=s,o={},l="/",u=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,x=l==="/"?e:e.slice(l.length)||"/",_=M0({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},x),y=h.route;if(!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:ns([l,_.pathname]),pathnameBase:P0(ns([l,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(l=ns([l,_.pathnameBase]))}return u}function M0(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=E0(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,x,_)=>{let{paramName:y,isOptional:S}=x;if(y==="*"){let E=f[_]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const T=f[_];return S&&!T?p[y]=void 0:p[y]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:s}}function E0(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ag(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function w0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ag(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Pg(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function T0(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?na(s):s;return{pathname:t?t.startsWith("/")?t:A0(t,e):e,search:N0(r),hash:L0(o)}}function A0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ou(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function C0(s,e){let t=R0(s);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function b0(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=na(s):(o=Xa({},s),tn(!o.pathname||!o.pathname.includes("?"),Ou("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),Ou("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),Ou("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!r&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),_-=1;o.pathname=y.join("/")}f=_>=0?e[_]:"/"}let h=T0(o,f),p=u&&u!=="/"&&u.endsWith("/"),x=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||x)&&(h.pathname+="/"),h}const ns=s=>s.join("/").replace(/\/\/+/g,"/"),P0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),N0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,L0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function D0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ng=["post","put","patch","delete"];new Set(Ng);const I0=["get",...Ng];new Set(I0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},qa.apply(this,arguments)}const pd=he.createContext(null),U0=he.createContext(null),Yl=he.createContext(null),$l=he.createContext(null),ia=he.createContext({outlet:null,matches:[],isDataRoute:!1}),Lg=he.createContext(null);function Kl(){return he.useContext($l)!=null}function md(){return Kl()||tn(!1),he.useContext($l).location}function Dg(s){he.useContext(Yl).static||he.useLayoutEffect(s)}function gd(){let{isDataRoute:s}=he.useContext(ia);return s?Y0():F0()}function F0(){Kl()||tn(!1);let s=he.useContext(pd),{basename:e,future:t,navigator:r}=he.useContext(Yl),{matches:o}=he.useContext(ia),{pathname:l}=md(),u=JSON.stringify(C0(o,t.v7_relativeSplatPath)),f=he.useRef(!1);return Dg(()=>{f.current=!0}),he.useCallback(function(p,x){if(x===void 0&&(x={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let _=b0(p,JSON.parse(u),l,x.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ns([e,_.pathname])),(x.replace?r.replace:r.push)(_,x.state,x)},[e,r,u,l,s])}function O0(s,e){return k0(s,e)}function k0(s,e,t,r){Kl()||tn(!1);let{navigator:o}=he.useContext(Yl),{matches:l}=he.useContext(ia),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let p=md(),x;if(e){var _;let v=typeof e=="string"?na(e):e;h==="/"||(_=v.pathname)!=null&&_.startsWith(h)||tn(!1),x=v}else x=p;let y=x.pathname||"/",S=y;if(h!=="/"){let v=h.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(v.length).join("/")}let T=u0(s,{pathname:S}),E=G0(T&&T.map(v=>Object.assign({},v,{params:Object.assign({},f,v.params),pathname:ns([h,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?h:ns([h,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,t,r);return e&&E?he.createElement($l.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Mr.Pop}},E):E}function B0(){let s=q0(),e=D0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:o},t):null,null)}const z0=he.createElement(B0,null);class V0 extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?he.createElement(ia.Provider,{value:this.props.routeContext},he.createElement(Lg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H0(s){let{routeContext:e,match:t,children:r}=s,o=he.useContext(pd);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),he.createElement(ia.Provider,{value:e},r)}function G0(s,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let u=s,f=(o=t)==null?void 0:o.errors;if(f!=null){let x=u.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);x>=0||tn(!1),u=u.slice(0,Math.min(u.length,x+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let x=0;x<u.length;x++){let _=u[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=x),_.route.id){let{loaderData:y,errors:S}=t,T=_.route.loader&&y[_.route.id]===void 0&&(!S||S[_.route.id]===void 0);if(_.route.lazy||T){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((x,_,y)=>{let S,T=!1,E=null,v=null;t&&(S=f&&_.route.id?f[_.route.id]:void 0,E=_.route.errorElement||z0,h&&(p<0&&y===0?($0("route-fallback"),T=!0,v=null):p===y&&(T=!0,v=_.route.hydrateFallbackElement||null)));let g=e.concat(u.slice(0,y+1)),I=()=>{let P;return S?P=E:T?P=v:_.route.Component?P=he.createElement(_.route.Component,null):_.route.element?P=_.route.element:P=x,he.createElement(H0,{match:_,routeContext:{outlet:x,matches:g,isDataRoute:t!=null},children:P})};return t&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?he.createElement(V0,{location:t.location,revalidation:t.revalidation,component:E,error:S,children:I(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):I()},null)}var Ig=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Ig||{}),Ug=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Ug||{});function W0(s){let e=he.useContext(pd);return e||tn(!1),e}function j0(s){let e=he.useContext(U0);return e||tn(!1),e}function X0(s){let e=he.useContext(ia);return e||tn(!1),e}function Fg(s){let e=X0(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function q0(){var s;let e=he.useContext(Lg),t=j0(),r=Fg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function Y0(){let{router:s}=W0(Ig.UseNavigateStable),e=Fg(Ug.UseNavigateStable),t=he.useRef(!1);return Dg(()=>{t.current=!0}),he.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,qa({fromRouteId:e},l)))},[s,e])}const hm={};function $0(s,e,t){hm[s]||(hm[s]=!0)}function K0(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function yf(s){tn(!1)}function Z0(s){let{basename:e="/",children:t=null,location:r,navigationType:o=Mr.Pop,navigator:l,static:u=!1,future:f}=s;Kl()&&tn(!1);let h=e.replace(/^\/*/,"/"),p=he.useMemo(()=>({basename:h,navigator:l,static:u,future:qa({v7_relativeSplatPath:!1},f)}),[h,f,l,u]);typeof r=="string"&&(r=na(r));let{pathname:x="/",search:_="",hash:y="",state:S=null,key:T="default"}=r,E=he.useMemo(()=>{let v=Pg(x,h);return v==null?null:{location:{pathname:v,search:_,hash:y,state:S,key:T},navigationType:o}},[h,x,_,y,S,T,o]);return E==null?null:he.createElement(Yl.Provider,{value:p},he.createElement($l.Provider,{children:t,value:E}))}function Q0(s){let{children:e,location:t}=s;return O0(Sf(e),t)}new Promise(()=>{});function Sf(s,e){e===void 0&&(e=[]);let t=[];return he.Children.forEach(s,(r,o)=>{if(!he.isValidElement(r))return;let l=[...e,o];if(r.type===he.Fragment){t.push.apply(t,Sf(r.props.children,l));return}r.type!==yf&&tn(!1),!r.props.index||!r.props.children||tn(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Sf(r.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mf(s){return s===void 0&&(s=""),new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((e,t)=>{let r=s[t];return e.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}function J0(s,e){let t=Mf(s);return e&&e.forEach((r,o)=>{t.has(o)||e.getAll(o).forEach(l=>{t.append(o,l)})}),t}const ex="6";try{window.__reactRouterVersion=ex}catch{}const tx="startTransition",pm=e0[tx];function nx(s){let{basename:e,children:t,future:r,window:o}=s,l=he.useRef();l.current==null&&(l.current=o0({window:o,v5Compat:!0}));let u=l.current,[f,h]=he.useState({action:u.action,location:u.location}),{v7_startTransition:p}=r||{},x=he.useCallback(_=>{p&&pm?pm(()=>h(_)):h(_)},[h,p]);return he.useLayoutEffect(()=>u.listen(x),[u,x]),he.useEffect(()=>K0(r),[r]),he.createElement(Z0,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:r})}var mm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(mm||(mm={}));var gm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function ix(s){let e=he.useRef(Mf(s)),t=he.useRef(!1),r=md(),o=he.useMemo(()=>J0(r.search,t.current?null:e.current),[r.search]),l=gd(),u=he.useCallback((f,h)=>{const p=Mf(typeof f=="function"?f(o):f);t.current=!0,l("?"+p,h)},[l,o]);return[o,u]}let Gr=[{id:"game-1",player1_name:"Alice",player2_name:"Bob",player1_score:0,player2_score:0,target_score:21,current_turn:1,game_status:"setup",round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Gl(1),player2_balls:Gl(2)}}],Ba=0;function rx(){Ba++;let s="";for(let e=0;e<7;e++){Ba=(Ba*9301+49297)%233280;const t=Ba/233280;s+=String.fromCharCode(97+Math.floor(t*26))}return"game-"+Ba+"-"+s}function Gl(s){const e=[],t=s===1?150:-150,r=s===1?30:-30;for(let o=0;o<5;o++)e.push({x:0,y:t+o*r,active:!0,id:o+1});return e}const sx={list:function(s){typeof s>"u"&&(s=10);const e=Gr.slice(0,s);return{then:function(t){return t(e),{catch:function(){}}}}},create:function(s){const e={id:rx(),player1_name:s?.player1_name??"Player 1",player2_name:s?.player2_name??"Player 2",player1_score:s?.player1_score??0,player2_score:s?.player2_score??0,target_score:s?.target_score??21,current_turn:s?.current_turn??1,game_status:s?.game_status??"setup",round_number:s?.round_number??1,ball_positions:s?.ball_positions??{center_ball:{x:0,y:.4,z:0},player1_balls:Gl(1),player2_balls:Gl(2)}};return Gr.unshift(e),{then:function(t){return t(e),{catch:function(){}}}}},get:function(s){const e=Gr.find(t=>t.id===s)||null;return{then:function(t){return t(e),{catch:function(){}}}}},update:function(s,e){for(let t=0;t<Gr.length;t++)if(Gr[t].id===s)return Object.assign(Gr[t],e),{then:function(r){return r(Gr[t]),{catch:function(){}}}};return{then:function(t){return t(null),{catch:function(){}}}}}},js=sx;function Xs(s){return{Home:"/",Game:"/game",Leaderboard:"/leaderboard"}[s]||"/"}function Wn(...s){return s.filter(Boolean).join(" ")}const Er=he.forwardRef(({className:s,variant:e="default",size:t="default",...r},o)=>{const l={default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return N.jsx("button",{className:Wn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",l[e],u[t],s),ref:o,...r})});Er.displayName="Button";const Ef=he.forwardRef(({className:s,type:e,...t},r)=>N.jsx("input",{type:e,className:Wn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:r,...t}));Ef.displayName="Input";const ax=he.forwardRef(({className:s,...e},t)=>N.jsx("div",{ref:t,className:Wn("rounded-lg border bg-card text-card-foreground shadow-sm",s),...e}));ax.displayName="Card";const Vi=he.forwardRef(({className:s,...e},t)=>N.jsx("div",{ref:t,className:Wn("flex flex-col space-y-1.5 p-6",s),...e}));Vi.displayName="CardHeader";const Hi=he.forwardRef(({className:s,...e},t)=>N.jsx("h3",{ref:t,className:Wn("text-2xl font-semibold leading-none tracking-tight",s),...e}));Hi.displayName="CardTitle";const ox=he.forwardRef(({className:s,...e},t)=>N.jsx("p",{ref:t,className:Wn("text-sm text-muted-foreground",s),...e}));ox.displayName="CardDescription";const Gi=he.forwardRef(({className:s,...e},t)=>N.jsx("div",{ref:t,className:Wn("p-6 pt-0",s),...e}));Gi.displayName="CardContent";const lx=he.forwardRef(({className:s,...e},t)=>N.jsx("div",{ref:t,className:Wn("flex items-center p-6 pt-0",s),...e}));lx.displayName="CardFooter";function Og(s){var e,t,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(e=0;e<o;e++)s[e]&&(t=Og(s[e]))&&(r&&(r+=" "),r+=t)}else for(t in s)s[t]&&(r&&(r+=" "),r+=t);return r}function cx(){for(var s,e,t=0,r="",o=arguments.length;t<o;t++)(s=arguments[t])&&(e=Og(s))&&(r&&(r+=" "),r+=e);return r}const vm=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,_m=cx,ux=(s,e)=>t=>{var r;if(e?.variants==null)return _m(s,t?.class,t?.className);const{variants:o,defaultVariants:l}=e,u=Object.keys(o).map(p=>{const x=t?.[p],_=l?.[p];if(x===null)return null;const y=vm(x)||vm(_);return o[p][y]}),f=t&&Object.entries(t).reduce((p,x)=>{let[_,y]=x;return y===void 0||(p[_]=y),p},{}),h=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((p,x)=>{let{class:_,className:y,...S}=x;return Object.entries(S).every(T=>{let[E,v]=T;return Array.isArray(v)?v.includes({...l,...f}[E]):{...l,...f}[E]===v})?[...p,_,y]:p},[]);return _m(s,u,h,t?.class,t?.className)},fx=ux("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function yr({className:s,variant:e,...t}){return N.jsx("div",{className:Wn(fx({variant:e}),s),...t})}/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kg=(...s)=>s.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=he.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>he.createElement("svg",{ref:h,...hx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:kg("lucide",o),...f},[...u.map(([p,x])=>he.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=(s,e)=>{const t=he.forwardRef(({className:r,...o},l)=>he.createElement(px,{ref:l,iconNode:e,className:kg(`lucide-${dx(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ti("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=ti("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ti("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=ti("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ti("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ti("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=ti("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ti("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=ti("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ti("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ti("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=ti("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),eo=he.createContext(),xx=({children:s,value:e,onValueChange:t})=>{const[r,o]=he.useState(!1),[l,u]=he.useState(e),f=h=>{u(h),t?.(h),o(!1)};return N.jsx(eo.Provider,{value:{isOpen:r,setIsOpen:o,selectedValue:l,handleSelect:f},children:N.jsx("div",{className:"relative",children:s})})},zg=he.forwardRef(({className:s,children:e,...t},r)=>{const{isOpen:o,setIsOpen:l}=he.useContext(eo);return N.jsxs("button",{ref:r,type:"button",onClick:()=>l(!o),className:Wn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),...t,children:[e,N.jsx(mx,{className:"h-4 w-4 opacity-50"})]})});zg.displayName="SelectTrigger";const yx=({placeholder:s})=>{const{selectedValue:e}=he.useContext(eo);return N.jsx("span",{children:e||s})},Vg=he.forwardRef(({className:s,children:e,...t},r)=>{const{isOpen:o}=he.useContext(eo);return o?N.jsx("div",{ref:r,className:Wn("absolute top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",s),...t,children:N.jsx("div",{className:"p-1",children:e})}):null});Vg.displayName="SelectContent";const Tf=he.forwardRef(({className:s,children:e,value:t,...r},o)=>{const{handleSelect:l}=he.useContext(eo);return N.jsx("div",{ref:o,className:Wn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",s),onClick:()=>l(t),...r,children:e})});Tf.displayName="SelectItem";function Sx(){const s=gd(),[e,t]=he.useState([]),[r,o]=he.useState(!1),[l,u]=he.useState(""),[f,h]=he.useState(""),[p,x]=he.useState("21"),[_,y]=he.useState(!1);he.useEffect(()=>{S()},[]);const S=async()=>{const v=await js.list("-created_date",10);t(v)},T=async()=>{if(!(!l.trim()||!f.trim())){y(!0);try{const v=await js.create({player1_name:l.trim(),player2_name:f.trim(),target_score:parseInt(p),current_turn:1,game_status:"setup",ball_positions:{center_ball:{x:0,y:0,active:!0},player1_balls:Array.from({length:5},(g,I)=>({x:0,y:150+I*30,active:!0,id:I+1})),player2_balls:Array.from({length:5},(g,I)=>({x:0,y:-150-I*30,active:!0,id:I+1}))}});s(Xs("Game")+`?id=${v.id}`)}catch(v){console.error("Error creating game:",v)}y(!1)}},E=v=>{s(Xs("Game")+`?id=${v}`)};return N.jsx("div",{className:"min-h-screen p-4 md:p-8",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("div",{className:"text-center mb-12",children:N.jsxs("div",{className:"glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden",children:[N.jsx("div",{className:"absolute inset-0 animated-gradient opacity-10"}),N.jsxs("div",{className:"relative z-10",children:[N.jsx("div",{className:"w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-magenta-500 flex items-center justify-center neon-glow",children:N.jsx(Ya,{className:"w-12 h-12 text-white"})}),N.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent mb-4",children:"CenterBall"}),N.jsx("p",{className:"text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"A futuristic precision ball game where strategy meets skill. Get your ball closest to the center while controlling the arena."}),N.jsxs("div",{className:"flex flex-wrap justify-center gap-6 text-sm",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[N.jsx(wf,{className:"w-5 h-5 neon-glow"}),N.jsx("span",{children:"Strategic Barriers"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-magenta-400",children:[N.jsx($a,{className:"w-5 h-5 neon-glow"}),N.jsx("span",{children:"Center Ring Control"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-yellow-400",children:[N.jsx(ym,{className:"w-5 h-5 neon-glow"}),N.jsx("span",{children:"3D Physics Arena"})]})]})]})]})}),N.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[N.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[N.jsx(Vi,{className:"p-0 mb-6",children:N.jsxs(Hi,{className:"flex items-center gap-3 text-2xl text-white",children:[N.jsx(Sm,{className:"w-6 h-6 text-cyan-400 neon-glow"}),"Start New Game"]})}),N.jsxs(Gi,{className:"p-0 space-y-6",children:[N.jsxs("div",{className:"grid gap-4",children:[N.jsxs("div",{children:[N.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Red Player"}),N.jsx(Ef,{placeholder:"Enter red player name",value:l,onChange:v=>u(v.target.value),className:"glass-panel border-red-400/30 text-white placeholder-gray-400 focus:border-red-400"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Blue Player"}),N.jsx(Ef,{placeholder:"Enter blue player name",value:f,onChange:v=>h(v.target.value),className:"glass-panel border-blue-400/30 text-white placeholder-gray-400 focus:border-blue-400"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Game Mode"}),N.jsxs(xx,{value:p,onValueChange:x,children:[N.jsx(zg,{className:"glass-panel border-gray-400/30 text-white",children:N.jsx(yx,{})}),N.jsxs(Vg,{className:"glass-panel border-gray-400/30",children:[N.jsx(Tf,{value:"21",className:"text-white",children:N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(yr,{variant:"secondary",className:"bg-green-400/20 text-green-400 border-green-400/30",children:"Beginner"}),N.jsx("span",{children:"First to 21 points"})]})}),N.jsx(Tf,{value:"11",className:"text-white",children:N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(yr,{variant:"secondary",className:"bg-red-400/20 text-red-400 border-red-400/30",children:"Veteran"}),N.jsx("span",{children:"First to 11 points"})]})})]})]})]})]}),N.jsx(Er,{onClick:T,disabled:!l.trim()||!f.trim()||_,className:"w-full bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold py-3 rounded-xl neon-glow transition-all duration-300",children:_?N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("div",{className:"w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"}),N.jsx("span",{children:"Creating Game..."})]}):N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(Sm,{className:"w-5 h-5"}),N.jsx("span",{children:"Start Battle"})]})})]})]}),N.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[N.jsx(Vi,{className:"p-0 mb-6",children:N.jsxs(Hi,{className:"flex items-center gap-3 text-2xl text-white",children:[N.jsx($a,{className:"w-6 h-6 text-yellow-400 neon-glow"}),"Recent Games"]})}),N.jsx(Gi,{className:"p-0",children:N.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:e.length>0?e.map(v=>N.jsxs("div",{className:"glass-panel rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group",children:[N.jsxs("div",{className:"flex items-center justify-between mb-3",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx(_x,{className:"w-5 h-5 text-purple-400"}),N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[N.jsx("span",{className:"text-red-400 font-medium",children:v.player1_name}),N.jsx("span",{className:"text-gray-400",children:"vs"}),N.jsx("span",{className:"text-blue-400 font-medium",children:v.player2_name})]}),N.jsx("div",{className:"text-xs text-gray-400",children:v.game_status==="finished"?"Completed":"In Progress"})]})]}),N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsxs("div",{className:"text-right",children:[N.jsxs("div",{className:"text-sm font-bold text-white",children:[v.player1_score," - ",v.player2_score]}),N.jsxs(yr,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:["to ",v.target_score]})]}),v.game_status!=="finished"&&N.jsx(Er,{onClick:()=>E(v.id),size:"sm",className:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300",children:"Continue"})]})]}),v.winner&&N.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[N.jsx(ym,{className:"w-4 h-4 text-yellow-400 neon-glow"}),N.jsxs("span",{className:"text-yellow-400 font-medium",children:["Winner: ",v.winner]})]})]},v.id)):N.jsxs("div",{className:"text-center py-8 text-gray-400",children:[N.jsx(Ya,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),N.jsx("p",{children:"No games yet. Start your first battle!"})]})})})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="179",Mx=0,Em=1,Ex=2,Hg=1,Gg=2,zi=3,Ar=0,Dn=1,yi=2,wr=0,Ys=1,wm=2,Tm=3,Am=4,wx=5,Qr=100,Tx=101,Ax=102,Rx=103,Cx=104,bx=200,Px=201,Nx=202,Lx=203,Af=204,Rf=205,Dx=206,Ix=207,Ux=208,Fx=209,Ox=210,kx=211,Bx=212,zx=213,Vx=214,Cf=0,bf=1,Pf=2,Zs=3,Nf=4,Lf=5,Df=6,If=7,Zl=0,Hx=1,Gx=2,Tr=0,Wx=1,jx=2,Xx=3,Wg=4,qx=5,Yx=6,$x=7,jg=300,Qs=301,Js=302,Uf=303,Ff=304,Ql=306,Of=1e3,es=1001,kf=1002,pi=1003,Kx=1004,pl=1005,Si=1006,ku=1007,ts=1008,wi=1009,Xg=1010,qg=1011,Ka=1012,_d=1013,is=1014,Wi=1015,to=1016,xd=1017,yd=1018,Za=1020,Yg=35902,$g=1021,Kg=1022,hi=1023,Qa=1026,Ja=1027,Zg=1028,Sd=1029,Qg=1030,Md=1031,Ed=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Bf=35840,zf=35841,Vf=35842,Hf=35843,Gf=36196,Wf=37492,jf=37496,Xf=37808,qf=37809,Yf=37810,$f=37811,Kf=37812,Zf=37813,Qf=37814,Jf=37815,ed=37816,td=37817,nd=37818,id=37819,rd=37820,sd=37821,zl=36492,ad=36494,od=36495,Jg=36283,ld=36284,cd=36285,ud=36286,Zx=3200,Qx=3201,Jl=0,Jx=1,Sr="",Jn="srgb",ea="srgb-linear",Wl="linear",Dt="srgb",Ns=7680,Rm=519,ey=512,ty=513,ny=514,ev=515,iy=516,ry=517,sy=518,ay=519,Cm=35044,bm="300 es",Mi=2e3,jl=2001;class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,Xl=180/Math.PI;function no(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function oy(s,e){return(s%e+e)%e}function zu(s,e,t){return(1-t)*s+t*e}function za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];const y=l[u+0],S=l[u+1],T=l[u+2],E=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=T,e[t+3]=E;return}if(_!==E||h!==y||p!==S||x!==T){let v=1-f;const g=h*y+p*S+x*T+_*E,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const D=Math.sqrt(P),B=Math.atan2(D,g*I);v=Math.sin(v*B)/D,f=Math.sin(f*B)/D}const A=f*I;if(h=h*v+y*A,p=p*v+S*A,x=x*v+T*A,_=_*v+E*A,v===1-f){const D=1/Math.sqrt(h*h+p*p+x*x+_*_);h*=D,p*=D,x*=D,_*=D}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],x=r[o+3],_=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+x*_+h*S-p*y,e[t+1]=h*T+x*y+p*_-f*S,e[t+2]=p*T+x*S+f*y-h*_,e[t+3]=x*T-f*_-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),x=f(o/2),_=f(l/2),y=h(r/2),S=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=y*x*_+p*S*T,this._y=p*S*_-y*x*T,this._z=p*x*T+y*S*_,this._w=p*x*_-y*S*T;break;case"YXZ":this._x=y*x*_+p*S*T,this._y=p*S*_-y*x*T,this._z=p*x*T-y*S*_,this._w=p*x*_+y*S*T;break;case"ZXY":this._x=y*x*_-p*S*T,this._y=p*S*_+y*x*T,this._z=p*x*T+y*S*_,this._w=p*x*_-y*S*T;break;case"ZYX":this._x=y*x*_-p*S*T,this._y=p*S*_+y*x*T,this._z=p*x*T-y*S*_,this._w=p*x*_+y*S*T;break;case"YZX":this._x=y*x*_+p*S*T,this._y=p*S*_+y*x*T,this._z=p*x*T-y*S*_,this._w=p*x*_-y*S*T;break;case"XZY":this._x=y*x*_-p*S*T,this._y=p*S*_-y*x*T,this._z=p*x*T+y*S*_,this._w=p*x*_+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],x=t[6],_=t[10],y=r+f+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(x-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+x)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,x=t._w;return this._x=r*x+u*f+o*p-l*h,this._y=o*x+u*h+l*f-r*p,this._z=l*x+u*p+r*h-o*f,this._w=u*x-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),x=Math.atan2(p,f),_=Math.sin((1-t)*x)/p,y=Math.sin(t*x)/p;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),x=2*(f*t-l*o),_=2*(l*r-u*t);return this.x=t+h*p+u*_-f*x,this.y=r+h*x+f*p-l*_,this.z=o+h*_+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new ne,Pm=new io;class ht{constructor(e,t,r,o,l,u,f,h,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],x=r[4],_=r[7],y=r[2],S=r[5],T=r[8],E=o[0],v=o[3],g=o[6],I=o[1],P=o[4],A=o[7],D=o[2],B=o[5],H=o[8];return l[0]=u*E+f*I+h*D,l[3]=u*v+f*P+h*B,l[6]=u*g+f*A+h*H,l[1]=p*E+x*I+_*D,l[4]=p*v+x*P+_*B,l[7]=p*g+x*A+_*H,l[2]=y*E+S*I+T*D,l[5]=y*v+S*P+T*B,l[8]=y*g+S*A+T*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*f*p-r*l*x+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],_=x*u-f*p,y=f*h-x*l,S=p*l-u*h,T=t*_+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=_*E,e[1]=(o*p-x*r)*E,e[2]=(f*r-o*u)*E,e[3]=y*E,e[4]=(x*t-o*h)*E,e[5]=(o*l-f*t)*E,e[6]=S*E,e[7]=(r*h-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hu=new ht;function tv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ly(){const s=ql("canvas");return s.style.display="block",s}const Nm={};function $s(s){s in Nm||(Nm[s]=!0,console.warn(s))}function cy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Lm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const s={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Ks(o.r),o.g=Ks(o.g),o.b=Ks(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?Wl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ea]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const At=uy();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=ql("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Gu(o[u].image)):l.push(Gu(o[u]))}else l=Gu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;const Wu=new ne;class In extends ra{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=es,o=es,l=Si,u=ts,f=hi,h=wi,p=In.DEFAULT_ANISOTROPY,x=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=no(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=jg;In.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],x=h[4],_=h[8],y=h[1],S=h[5],T=h[9],E=h[2],v=h[6],g=h[10];if(Math.abs(x-y)<.01&&Math.abs(_-E)<.01&&Math.abs(T-v)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+E)<.1&&Math.abs(T+v)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,D=(g+1)/2,B=(x+y)/4,H=(_+E)/4,X=(T+v)/4;return P>A&&P>D?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=B/r,l=H/r):A>D?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=B/o,l=X/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=H/l,o=X/l),this.set(r,o,l,t),this}let I=Math.sqrt((v-T)*(v-T)+(_-E)*(_-E)+(y-x)*(y-x));return Math.abs(I)<.001&&(I=1),this.x=(v-T)/I,this.y=(_-E)/I,this.z=(y-x)/I,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends ra{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new In(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends py{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class nv extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(l,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),gl.subVectors(this.max,Va),Ds.subVectors(e.a,Va),Is.subVectors(e.b,Va),Us.subVectors(e.c,Va),pr.subVectors(Is,Ds),mr.subVectors(Us,Is),Wr.subVectors(Ds,Us);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Wr.z,Wr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Wr.z,0,-Wr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Wr.y,Wr.x,0];return!ju(t,Ds,Is,Us,gl)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,Ds,Is,Us,gl))?!1:(vl.crossVectors(pr,mr),t=[vl.x,vl.y,vl.z],ju(t,Ds,Is,Us,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ci=new ne,ml=new ro,Ds=new ne,Is=new ne,Us=new ne,pr=new ne,mr=new ne,Wr=new ne,Va=new ne,gl=new ne,vl=new ne,jr=new ne;function ju(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){jr.fromArray(s,l);const f=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),h=e.dot(jr),p=t.dot(jr),x=r.dot(jr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const gy=new ro,Ha=new ne,Xu=new ne;class Td{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ha,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Xu)),this.expandByPoint(Ha.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new ne,qu=new ne,_l=new ne,gr=new ne,Yu=new ne,xl=new ne,$u=new ne;class iv{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){qu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(qu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(_l),f=gr.dot(this.direction),h=-gr.dot(_l),p=gr.lengthSq(),x=Math.abs(1-u*u);let _,y,S,T;if(x>0)if(_=u*h-f,y=u*f-h,T=l*x,_>=0)if(y>=-T)if(y<=T){const E=1/x;_*=E,y*=E,S=_*(_+u*y+2*f)+y*(u*_+y+2*h)+p}else y=l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+p;else y=-l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+p;else y<=-T?(_=Math.max(0,-(-u*l+f)),y=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+y*(y+2*h)+p):y<=T?(_=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(_=Math.max(0,-(u*l+f)),y=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+y*(y+2*h)+p);else y=u>0?-l:l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(qu).addScaledVector(_l,y),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,l){Yu.subVectors(t,e),xl.subVectors(r,e),$u.crossVectors(Yu,xl);let u=this.direction.dot($u),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(xl.crossVectors(gr,xl));if(h<0)return null;const p=f*this.direction.dot(Yu.cross(gr));if(p<0||h+p>u)return null;const x=-f*gr.dot($u);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,r,o,l,u,f,h,p,x,_,y,S,T,E,v){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,x,_,y,S,T,E,v)}set(e,t,r,o,l,u,f,h,p,x,_,y,S,T,E,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=p,g[6]=x,g[10]=_,g[14]=y,g[3]=S,g[7]=T,g[11]=E,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*_,T=f*x,E=f*_;t[0]=h*x,t[4]=-h*_,t[8]=p,t[1]=S+T*p,t[5]=y-E*p,t[9]=-f*h,t[2]=E-y*p,t[6]=T+S*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*x,S=h*_,T=p*x,E=p*_;t[0]=y+E*f,t[4]=T*f-S,t[8]=u*p,t[1]=u*_,t[5]=u*x,t[9]=-f,t[2]=S*f-T,t[6]=E+y*f,t[10]=u*h}else if(e.order==="ZXY"){const y=h*x,S=h*_,T=p*x,E=p*_;t[0]=y-E*f,t[4]=-u*_,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*x,t[9]=E-y*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const y=u*x,S=u*_,T=f*x,E=f*_;t[0]=h*x,t[4]=T*p-S,t[8]=y*p+E,t[1]=h*_,t[5]=E*p+y,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*p,T=f*h,E=f*p;t[0]=h*x,t[4]=E-y*_,t[8]=T*_+S,t[1]=_,t[5]=u*x,t[9]=-f*x,t[2]=-p*x,t[6]=S*_+T,t[10]=y-E*_}else if(e.order==="XZY"){const y=u*h,S=u*p,T=f*h,E=f*p;t[0]=h*x,t[4]=-_,t[8]=p*x,t[1]=y*_+E,t[5]=u*x,t[9]=S*_-T,t[2]=T*_-S,t[6]=f*x,t[10]=E*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,_y)}lookAt(e,t,r){const o=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),vr.crossVectors(r,zn),vr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),vr.crossVectors(r,zn)),vr.normalize(),yl.crossVectors(zn,vr),o[0]=vr.x,o[4]=yl.x,o[8]=zn.x,o[1]=vr.y,o[5]=yl.y,o[9]=zn.y,o[2]=vr.z,o[6]=yl.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],x=r[1],_=r[5],y=r[9],S=r[13],T=r[2],E=r[6],v=r[10],g=r[14],I=r[3],P=r[7],A=r[11],D=r[15],B=o[0],H=o[4],X=o[8],C=o[12],b=o[1],O=o[5],ae=o[9],J=o[13],se=o[2],le=o[6],ce=o[10],ue=o[14],z=o[3],oe=o[7],re=o[11],F=o[15];return l[0]=u*B+f*b+h*se+p*z,l[4]=u*H+f*O+h*le+p*oe,l[8]=u*X+f*ae+h*ce+p*re,l[12]=u*C+f*J+h*ue+p*F,l[1]=x*B+_*b+y*se+S*z,l[5]=x*H+_*O+y*le+S*oe,l[9]=x*X+_*ae+y*ce+S*re,l[13]=x*C+_*J+y*ue+S*F,l[2]=T*B+E*b+v*se+g*z,l[6]=T*H+E*O+v*le+g*oe,l[10]=T*X+E*ae+v*ce+g*re,l[14]=T*C+E*J+v*ue+g*F,l[3]=I*B+P*b+A*se+D*z,l[7]=I*H+P*O+A*le+D*oe,l[11]=I*X+P*ae+A*ce+D*re,l[15]=I*C+P*J+A*ue+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],x=e[2],_=e[6],y=e[10],S=e[14],T=e[3],E=e[7],v=e[11],g=e[15];return T*(+l*h*_-o*p*_-l*f*y+r*p*y+o*f*S-r*h*S)+E*(+t*h*S-t*p*y+l*u*y-o*u*S+o*p*x-l*h*x)+v*(+t*p*_-t*f*S-l*u*_+r*u*S+l*f*x-r*p*x)+g*(-o*f*x-t*h*_+t*f*y+o*u*_-r*u*y+r*h*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],_=e[9],y=e[10],S=e[11],T=e[12],E=e[13],v=e[14],g=e[15],I=_*v*p-E*y*p+E*h*S-f*v*S-_*h*g+f*y*g,P=T*y*p-x*v*p-T*h*S+u*v*S+x*h*g-u*y*g,A=x*E*p-T*_*p+T*f*S-u*E*S-x*f*g+u*_*g,D=T*_*h-x*E*h-T*f*y+u*E*y+x*f*v-u*_*v,B=t*I+r*P+o*A+l*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return e[0]=I*H,e[1]=(E*y*l-_*v*l-E*o*S+r*v*S+_*o*g-r*y*g)*H,e[2]=(f*v*l-E*h*l+E*o*p-r*v*p-f*o*g+r*h*g)*H,e[3]=(_*h*l-f*y*l-_*o*p+r*y*p+f*o*S-r*h*S)*H,e[4]=P*H,e[5]=(x*v*l-T*y*l+T*o*S-t*v*S-x*o*g+t*y*g)*H,e[6]=(T*h*l-u*v*l-T*o*p+t*v*p+u*o*g-t*h*g)*H,e[7]=(u*y*l-x*h*l+x*o*p-t*y*p-u*o*S+t*h*S)*H,e[8]=A*H,e[9]=(T*_*l-x*E*l-T*r*S+t*E*S+x*r*g-t*_*g)*H,e[10]=(u*E*l-T*f*l+T*r*p-t*E*p-u*r*g+t*f*g)*H,e[11]=(x*f*l-u*_*l-x*r*p+t*_*p+u*r*S-t*f*S)*H,e[12]=D*H,e[13]=(x*E*o-T*_*o+T*r*y-t*E*y-x*r*v+t*_*v)*H,e[14]=(T*f*o-u*E*o-T*r*h+t*E*h+u*r*v-t*f*v)*H,e[15]=(u*_*o-x*f*o+x*r*h-t*_*h-u*r*y+t*f*y)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+r,x*h-o*u,0,p*h-o*f,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,x=u+u,_=f+f,y=l*p,S=l*x,T=l*_,E=u*x,v=u*_,g=f*_,I=h*p,P=h*x,A=h*_,D=r.x,B=r.y,H=r.z;return o[0]=(1-(E+g))*D,o[1]=(S+A)*D,o[2]=(T-P)*D,o[3]=0,o[4]=(S-A)*B,o[5]=(1-(y+g))*B,o[6]=(v+I)*B,o[7]=0,o[8]=(T+P)*H,o[9]=(v-I)*H,o[10]=(1-(y+E))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Fs.set(o[0],o[1],o[2]).length();const u=Fs.set(o[4],o[5],o[6]).length(),f=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,x=1/u,_=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=x,ui.elements[5]*=x,ui.elements[6]*=x,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,t.setFromRotationMatrix(ui),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Mi,h=!1){const p=this.elements,x=2*l/(t-e),_=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let T,E;if(h)T=l/(u-l),E=u*l/(u-l);else if(f===Mi)T=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===jl)T=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Mi,h=!1){const p=this.elements,x=2/(t-e),_=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let T,E;if(h)T=1/(u-l),E=u/(u-l);else if(f===Mi)T=-2/(u-l),E=-(u+l)/(u-l);else if(f===jl)T=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new ne,ui=new Xt,vy=new ne(0,0,0),_y=new ne(1,1,1),vr=new ne,yl=new ne,zn=new ne,Im=new Xt,Um=new io;class ei{constructor(e=0,t=0,r=0,o=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],_=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const Fm=new ne,Os=new io,Oi=new Xt,Sl=new ne,Ga=new ne,yy=new ne,Sy=new io,Om=new ne(1,0,0),km=new ne(0,1,0),Bm=new ne(0,0,1),zm={type:"added"},My={type:"removed"},ks={type:"childadded",child:null},Ku={type:"childremoved",child:null};class yn extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new ne,t=new ei,r=new io,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ga,Sl,this.up):Oi.lookAt(Sl,Ga,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Oi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(My),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),_=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yn.DEFAULT_UP=new ne(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ne,ki=new ne,Zu=new ne,Bi=new ne,Bs=new ne,zs=new ne,Vm=new ne,Qu=new ne,Ju=new ne,ef=new ne,tf=new jt,nf=new jt,rf=new jt;class di{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){fi.subVectors(o,t),ki.subVectors(r,t),Zu.subVectors(e,t);const u=fi.dot(fi),f=fi.dot(ki),h=fi.dot(Zu),p=ki.dot(ki),x=ki.dot(Zu),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const y=1/_,S=(p*h-f*x)*y,T=(u*x-f*h)*y;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(u,Bi.y),h.addScaledVector(f,Bi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,t),nf.fromBufferAttribute(e,r),rf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(tf,l.x),u.addScaledVector(nf,l.y),u.addScaledVector(rf,l.z),u}static isFrontFacing(e,t,r,o){return fi.subVectors(r,t),ki.subVectors(e,t),fi.cross(ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),fi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Bs.subVectors(o,r),zs.subVectors(l,r),Qu.subVectors(e,r);const h=Bs.dot(Qu),p=zs.dot(Qu);if(h<=0&&p<=0)return t.copy(r);Ju.subVectors(e,o);const x=Bs.dot(Ju),_=zs.dot(Ju);if(x>=0&&_<=x)return t.copy(o);const y=h*_-x*p;if(y<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(Bs,u);ef.subVectors(e,l);const S=Bs.dot(ef),T=zs.dot(ef);if(T>=0&&S<=T)return t.copy(l);const E=S*p-h*T;if(E<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(zs,f);const v=x*T-S*_;if(v<=0&&_-x>=0&&S-T>=0)return Vm.subVectors(l,o),f=(_-x)/(_-x+(S-T)),t.copy(o).addScaledVector(Vm,f);const g=1/(v+E+y);return u=E*g,f=y*g,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function sf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=oy(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=sf(u,l,e+1/3),this.g=sf(u,l,e),this.b=sf(u,l,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=Jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const r=rv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return At.workingToColorSpace(xn.copy(this),e),Math.round(xt(xn.r*255,0,255))*65536+Math.round(xt(xn.g*255,0,255))*256+Math.round(xt(xn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const x=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=x<=.5?_/(u+f):_/(2-u-f),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Jn){At.workingToColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Ml);const r=zu(_r.h,Ml.h,t),o=zu(_r.s,Ml.s,t),l=zu(_r.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new mt;mt.NAMES=rv;let Ey=0;class ss extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Ys,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Rf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Af&&(r.blendSrc=this.blendSrc),this.blendDst!==Rf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rd extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new ne,El=new yt;let wy=0;class Ei{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Cm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=za(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class sv extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class av extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ty=0;const Qn=new Xt,af=new yn,Vs=new ne,Vn=new ro,Wa=new ro,ln=new ne;class qi extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?av:sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Wa.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Wa.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Wa.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Wa.min),Vn.expandByPoint(Wa.max))}Vn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)ln.fromBufferAttribute(f,p),h&&(Vs.fromBufferAttribute(e,p),ln.add(Vs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<r.count;X++)f[X]=new ne,h[X]=new ne;const p=new ne,x=new ne,_=new ne,y=new yt,S=new yt,T=new yt,E=new ne,v=new ne;function g(X,C,b){p.fromBufferAttribute(r,X),x.fromBufferAttribute(r,C),_.fromBufferAttribute(r,b),y.fromBufferAttribute(l,X),S.fromBufferAttribute(l,C),T.fromBufferAttribute(l,b),x.sub(p),_.sub(p),S.sub(y),T.sub(y);const O=1/(S.x*T.y-T.x*S.y);isFinite(O)&&(E.copy(x).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(O),v.copy(_).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(O),f[X].add(E),f[C].add(E),f[b].add(E),h[X].add(v),h[C].add(v),h[b].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,C=I.length;X<C;++X){const b=I[X],O=b.start,ae=b.count;for(let J=O,se=O+ae;J<se;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ne,A=new ne,D=new ne,B=new ne;function H(X){D.fromBufferAttribute(o,X),B.copy(D);const C=f[X];P.copy(C),P.sub(D.multiplyScalar(D.dot(C))).normalize(),A.crossVectors(B,C);const O=A.dot(h[X])<0?-1:1;u.setXYZW(X,P.x,P.y,P.z,O)}for(let X=0,C=I.length;X<C;++X){const b=I[X],O=b.start,ae=b.count;for(let J=O,se=O+ae;J<se;J+=3)H(e.getX(J+0)),H(e.getX(J+1)),H(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,p=new ne,x=new ne,_=new ne;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),E=e.getX(y+1),v=e.getX(y+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,v),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,v),f.add(x),h.add(x),p.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,_=f.normalized,y=new p.constructor(h.length*x);let S=0,T=0;for(let E=0,v=h.length;E<v;E++){f.isInterleavedBufferAttribute?S=h[E]*f.data.stride+f.offset:S=h[E]*x;for(let g=0;g<x;g++)y[T++]=p[S++]}return new Ei(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,_=p.length;x<_;x++){const y=p[x],S=e(y,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];x.push(S.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],_=l[p];for(let y=0,S=_.length;y<S;y++)x.push(_[y].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hm=new Xt,Xr=new iv,wl=new Td,Gm=new ne,Tl=new ne,Al=new ne,Rl=new ne,of=new ne,Cl=new ne,Wm=new ne,bl=new ne;class $t extends yn{constructor(e=new qi,t=new Rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],_=l[h];x!==0&&(of.fromBufferAttribute(_,e),u?Cl.addScaledVector(of,x):Cl.addScaledVector(of.sub(t),x))}t.add(Cl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(wl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(wl,Gm)===null||Xr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Hm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,E=y.length;T<E;T++){const v=y[T],g=u[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let A=I,D=P;A<D;A+=3){const B=f.getX(A),H=f.getX(A+1),X=f.getX(A+2);o=Pl(this,g,e,r,p,x,_,B,H,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let v=T,g=E;v<g;v+=3){const I=f.getX(v),P=f.getX(v+1),A=f.getX(v+2);o=Pl(this,u,e,r,p,x,_,I,P,A),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,E=y.length;T<E;T++){const v=y[T],g=u[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let A=I,D=P;A<D;A+=3){const B=A,H=A+1,X=A+2;o=Pl(this,g,e,r,p,x,_,B,H,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let v=T,g=E;v<g;v+=3){const I=v,P=v+1,A=v+2;o=Pl(this,u,e,r,p,x,_,I,P,A),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Ay(s,e,t,r,o,l,u,f){let h;if(e.side===Dn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Ar,f),h===null)return null;bl.copy(f),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function Pl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Tl),s.getVertexPosition(h,Al),s.getVertexPosition(p,Rl);const x=Ay(s,e,t,r,Tl,Al,Rl,Wm);if(x){const _=new ne;di.getBarycoord(Wm,Tl,Al,Rl,_),o&&(x.uv=di.getInterpolatedAttribute(o,f,h,p,_,new yt)),l&&(x.uv1=di.getInterpolatedAttribute(l,f,h,p,_,new yt)),u&&(x.normal=di.getInterpolatedAttribute(u,f,h,p,_,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:f,b:h,c:p,normal:new ne,materialIndex:0};di.getNormal(Tl,Al,Rl,y.normal),x.face=y,x.barycoord=_}return x}class ji extends qi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],_=[];let y=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(_,2));function T(E,v,g,I,P,A,D,B,H,X,C){const b=A/H,O=D/X,ae=A/2,J=D/2,se=B/2,le=H+1,ce=X+1;let ue=0,z=0;const oe=new ne;for(let re=0;re<ce;re++){const F=re*O-J;for(let Z=0;Z<le;Z++){const Ie=Z*b-ae;oe[E]=Ie*I,oe[v]=F*P,oe[g]=se,p.push(oe.x,oe.y,oe.z),oe[E]=0,oe[v]=0,oe[g]=B>0?1:-1,x.push(oe.x,oe.y,oe.z),_.push(Z/H),_.push(1-re/X),ue+=1}}for(let re=0;re<X;re++)for(let F=0;F<H;F++){const Z=y+F+le*re,Ie=y+F+le*(re+1),ke=y+(F+1)+le*(re+1),Q=y+(F+1)+le*re;h.push(Z,Ie,Q),h.push(Ie,ke,Q),z+=6}f.addGroup(S,z,C),S+=z,y+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=ta(s[t]);for(const o in r)e[o]=r[o]}return e}function Ry(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ov(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Cy={clone:ta,merge:Tn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class lv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ne,jm=new yt,Xm=new yt;class Hn extends lv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,jm,Xm),t.subVectors(Xm,jm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class Ny extends yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new Hn(Hs,Gs,e,t);u.layers=this.layers,this.add(u);const f=new Hn(Hs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new Hn(Hs,Gs,e,t);h.layers=this.layers,this.add(h);const p=new Hn(Hs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Mi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(_,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class cv extends In{constructor(e=[],t=Qs,r,o,l,u,f,h,p,x){super(e,t,r,o,l,u,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new cv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ji(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:wr});l.uniforms.tEquirect.value=t;const u=new $t(o,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=Si),new Ny(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Nl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dy={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,r),g=this._getHandJoint(p,E);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Nl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Iy extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cf=new ne,Uy=new ne,Fy=new ht;class Kr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=cf.subVectors(r,t).cross(Uy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(cf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Fy.getNormalMatrix(e),o=this.coplanarPoint(cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Td,Oy=new yt(.5,.5),Ll=new ne;class Cd{constructor(e=new Kr,t=new Kr,r=new Kr,o=new Kr,l=new Kr,u=new Kr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Mi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],x=l[4],_=l[5],y=l[6],S=l[7],T=l[8],E=l[9],v=l[10],g=l[11],I=l[12],P=l[13],A=l[14],D=l[15];if(o[0].setComponents(p-u,S-x,g-T,D-I).normalize(),o[1].setComponents(p+u,S+x,g+T,D+I).normalize(),o[2].setComponents(p+f,S+_,g+E,D+P).normalize(),o[3].setComponents(p-f,S-_,g-E,D-P).normalize(),r)o[4].setComponents(h,y,v,A).normalize(),o[5].setComponents(p-h,S-y,g-v,D-A).normalize();else if(o[4].setComponents(p-h,S-y,g-v,D-A).normalize(),t===Mi)o[5].setComponents(p+h,S+y,g+v,D+A).normalize();else if(t===jl)o[5].setComponents(h,y,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const t=Oy.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends In{constructor(e,t,r=is,o,l,u,f=pi,h=pi,p,x=Qa,_=1){if(x!==Qa&&x!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:_};super(y,o,l,u,f,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class so extends qi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,x=h+1,_=e/f,y=t/h,S=[],T=[],E=[],v=[];for(let g=0;g<x;g++){const I=g*y-u;for(let P=0;P<p;P++){const A=P*_-l;T.push(A,-I,0),E.push(0,0,1),v.push(P/f),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<f;I++){const P=I+p*g,A=I+p*(g+1),D=I+1+p*(g+1),B=I+1+p*g;S.push(P,A,B),S.push(A,D,B)}this.setIndex(S),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}class bd extends qi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],x=[];let _=e;const y=(t-e)/o,S=new ne,T=new yt;for(let E=0;E<=o;E++){for(let v=0;v<=r;v++){const g=l+v/r*u;S.x=_*Math.cos(g),S.y=_*Math.sin(g),h.push(S.x,S.y,S.z),p.push(0,0,1),T.x=(S.x/t+1)/2,T.y=(S.y/t+1)/2,x.push(T.x,T.y)}_+=y}for(let E=0;E<o;E++){const v=E*(r+1);for(let g=0;g<r;g++){const I=g+v,P=I,A=I+r+1,D=I+r+2,B=I+1;f.push(P,A,B),f.push(A,D,B)}}this.setIndex(f),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pd extends qi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const x=[],_=new ne,y=new ne,S=[],T=[],E=[],v=[];for(let g=0;g<=r;g++){const I=[],P=g/r;let A=0;g===0&&u===0?A=.5/t:g===r&&h===Math.PI&&(A=-.5/t);for(let D=0;D<=t;D++){const B=D/t;_.x=-e*Math.cos(o+B*l)*Math.sin(u+P*f),_.y=e*Math.cos(u+P*f),_.z=e*Math.sin(o+B*l)*Math.sin(u+P*f),T.push(_.x,_.y,_.z),y.copy(_).normalize(),E.push(y.x,y.y,y.z),v.push(B+A,1-P),I.push(p++)}x.push(I)}for(let g=0;g<r;g++)for(let I=0;I<t;I++){const P=x[g][I+1],A=x[g][I],D=x[g+1][I],B=x[g+1][I+1];(g!==0||u>0)&&S.push(P,A,B),(g!==r-1||h<Math.PI)&&S.push(A,D,B)}this.setIndex(S),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ky extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uf extends ky{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ff extends ss{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qm extends ss{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class By extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zy extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fv extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const df=new Xt,Ym=new ne,$m=new ne;class Vy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($m),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hy extends Vy{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Xl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gy extends fv{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Hy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wy extends lv{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jy extends fv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xy extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Km=new Xt;class qy{constructor(e,t,r=0,o=1/0){this.ray=new iv(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Ad,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,t=!0,r=[]){return fd(e,this,r,t),r.sort(Zm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)fd(e[o],this,r,t);return r.sort(Zm),r}}function Zm(s,e){return s.distance-e.distance}function fd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)fd(l[u],e,t,!0)}}function Qm(s,e,t,r){const o=Yy(r);switch(t){case $g:return s*e;case Zg:return s*e/o.components*o.byteLength;case Sd:return s*e/o.components*o.byteLength;case Qg:return s*e*2/o.components*o.byteLength;case Md:return s*e*2/o.components*o.byteLength;case Kg:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case Ed:return s*e*4/o.components*o.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:case Hf:return Math.max(s,16)*Math.max(e,8)/4;case Bf:case Vf:return Math.max(s,8)*Math.max(e,8)/2;case Gf:case Wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $f:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case ad:case od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jg:case ld:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cd:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yy(s){switch(s){case wi:case Xg:return{byteLength:1,components:1};case Ka:case qg:case to:return{byteLength:2,components:1};case xd:case yd:return{byteLength:2,components:4};case is:case _d:case Wi:return{byteLength:4,components:1};case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function $y(s){const e=new WeakMap;function t(f,h){const p=f.array,x=f.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,x),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const x=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,x);else{_.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<_.length;S++){const T=_[y],E=_[S];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++y,_[y]=E)}_.length=y+1;for(let S=0,T=_.length;S<T;S++){const E=_[S];s.bufferSubData(p,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cS=`#ifdef USE_IRIDESCENCE
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
#endif`,uS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xS=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,SS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
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
}`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,HS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$S=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kM=`#ifdef USE_SKINNING
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
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WM=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,rE=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pE=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_E=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,AE=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:rS,batching_vertex:sS,begin_vertex:aS,beginnormal_vertex:oS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:hS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:gS,color_pars_vertex:vS,color_vertex:_S,common:xS,cube_uv_reflection_fragment:yS,defaultnormal_vertex:SS,displacementmap_pars_vertex:MS,displacementmap_vertex:ES,emissivemap_fragment:wS,emissivemap_pars_fragment:TS,colorspace_fragment:AS,colorspace_pars_fragment:RS,envmap_fragment:CS,envmap_common_pars_fragment:bS,envmap_pars_fragment:PS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:HS,envmap_vertex:LS,fog_vertex:DS,fog_pars_vertex:IS,fog_fragment:US,fog_pars_fragment:FS,gradientmap_pars_fragment:OS,lightmap_pars_fragment:kS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:zS,lights_pars_begin:VS,lights_toon_fragment:GS,lights_toon_pars_fragment:WS,lights_phong_fragment:jS,lights_phong_pars_fragment:XS,lights_physical_fragment:qS,lights_physical_pars_fragment:YS,lights_fragment_begin:$S,lights_fragment_maps:KS,lights_fragment_end:ZS,logdepthbuf_fragment:QS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:eM,logdepthbuf_vertex:tM,map_fragment:nM,map_pars_fragment:iM,map_particle_fragment:rM,map_particle_pars_fragment:sM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:oM,morphinstance_vertex:lM,morphcolor_vertex:cM,morphnormal_vertex:uM,morphtarget_pars_vertex:fM,morphtarget_vertex:dM,normal_fragment_begin:hM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:gM,normal_vertex:vM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:MM,opaque_fragment:EM,packing:wM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:RM,dithering_pars_fragment:CM,roughnessmap_fragment:bM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:LM,shadowmap_vertex:DM,shadowmask_pars_fragment:IM,skinbase_vertex:UM,skinning_pars_vertex:FM,skinning_vertex:OM,skinnormal_vertex:kM,specularmap_fragment:BM,specularmap_pars_fragment:zM,tonemapping_fragment:VM,tonemapping_pars_fragment:HM,transmission_fragment:GM,transmission_pars_fragment:WM,uv_pars_fragment:jM,uv_pars_vertex:XM,uv_vertex:qM,worldpos_vertex:YM,background_vert:$M,background_frag:KM,backgroundCube_vert:ZM,backgroundCube_frag:QM,cube_vert:JM,cube_frag:eE,depth_vert:tE,depth_frag:nE,distanceRGBA_vert:iE,distanceRGBA_frag:rE,equirect_vert:sE,equirect_frag:aE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:fE,meshlambert_frag:dE,meshmatcap_vert:hE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:vE,meshphong_frag:_E,meshphysical_vert:xE,meshphysical_frag:yE,meshtoon_vert:SE,meshtoon_frag:ME,points_vert:EE,points_frag:wE,shadow_vert:TE,shadow_frag:AE,sprite_vert:RE,sprite_frag:CE},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},xi={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};xi.physical={uniforms:Tn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Dl={r:0,b:0,g:0},Yr=new ei,bE=new Xt;function PE(s,e,t,r,o,l,u){const f=new mt(0);let h=l===!0?0:1,p,x,_=null,y=0,S=null;function T(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function E(P){let A=!1;const D=T(P);D===null?g(f,h):D&&D.isColor&&(g(D,1),A=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(P,A){const D=T(A);D&&(D.isCubeTexture||D.mapping===Ql)?(x===void 0&&(x=new $t(new ji(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:ta(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,H,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Yr.copy(A.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),x.material.uniforms.envMap.value=D,x.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(Yr)),x.material.toneMapped=At.getTransfer(D.colorSpace)!==Dt,(_!==D||y!==D.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,_=D,y=D.version,S=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new $t(new so(2,2),new Rr({name:"BackgroundMaterial",uniforms:ta(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=At.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||y!==D.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=D,y=D.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function g(P,A){P.getRGB(Dl,ov(s)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,A,u)}function I(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,A=1){f.set(P),h=A,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,g(f,h)},render:E,addToRenderList:v,dispose:I}}function NE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function f(b,O,ae,J,se){let le=!1;const ce=_(J,ae,O);l!==ce&&(l=ce,p(l.object)),le=S(b,J,ae,se),le&&T(b,J,ae,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,A(b,O,ae,J),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return s.createVertexArray()}function p(b){return s.bindVertexArray(b)}function x(b){return s.deleteVertexArray(b)}function _(b,O,ae){const J=ae.wireframe===!0;let se=r[b.id];se===void 0&&(se={},r[b.id]=se);let le=se[O.id];le===void 0&&(le={},se[O.id]=le);let ce=le[J];return ce===void 0&&(ce=y(h()),le[J]=ce),ce}function y(b){const O=[],ae=[],J=[];for(let se=0;se<t;se++)O[se]=0,ae[se]=0,J[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ae,attributeDivisors:J,object:b,attributes:{},index:null}}function S(b,O,ae,J){const se=l.attributes,le=O.attributes;let ce=0;const ue=ae.getAttributes();for(const z in ue)if(ue[z].location>=0){const re=se[z];let F=le[z];if(F===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==J}function T(b,O,ae,J){const se={},le=O.attributes;let ce=0;const ue=ae.getAttributes();for(const z in ue)if(ue[z].location>=0){let re=le[z];re===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),se[z]=F,ce++}l.attributes=se,l.attributesNum=ce,l.index=J}function E(){const b=l.newAttributes;for(let O=0,ae=b.length;O<ae;O++)b[O]=0}function v(b){g(b,0)}function g(b,O){const ae=l.newAttributes,J=l.enabledAttributes,se=l.attributeDivisors;ae[b]=1,J[b]===0&&(s.enableVertexAttribArray(b),J[b]=1),se[b]!==O&&(s.vertexAttribDivisor(b,O),se[b]=O)}function I(){const b=l.newAttributes,O=l.enabledAttributes;for(let ae=0,J=O.length;ae<J;ae++)O[ae]!==b[ae]&&(s.disableVertexAttribArray(ae),O[ae]=0)}function P(b,O,ae,J,se,le,ce){ce===!0?s.vertexAttribIPointer(b,O,ae,se,le):s.vertexAttribPointer(b,O,ae,J,se,le)}function A(b,O,ae,J){E();const se=J.attributes,le=ae.getAttributes(),ce=O.defaultAttributeValues;for(const ue in le){const z=le[ue];if(z.location>=0){let oe=se[ue];if(oe===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const re=oe.normalized,F=oe.itemSize,Z=e.get(oe);if(Z===void 0)continue;const Ie=Z.buffer,ke=Z.type,Q=Z.bytesPerElement,ge=ke===s.INT||ke===s.UNSIGNED_INT||oe.gpuType===_d;if(oe.isInterleavedBufferAttribute){const me=oe.data,Ce=me.stride,be=oe.offset;if(me.isInstancedInterleavedBuffer){for(let $e=0;$e<z.locationSize;$e++)g(z.location+$e,me.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<z.locationSize;$e++)v(z.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let $e=0;$e<z.locationSize;$e++)P(z.location+$e,F/z.locationSize,ke,re,Ce*Q,(be+F/z.locationSize*$e)*Q,ge)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<z.locationSize;me++)g(z.location+me,oe.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<z.locationSize;me++)v(z.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let me=0;me<z.locationSize;me++)P(z.location+me,F/z.locationSize,ke,re,F*Q,F/z.locationSize*me*Q,ge)}}else if(ce!==void 0){const re=ce[ue];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(z.location,re);break;case 3:s.vertexAttrib3fv(z.location,re);break;case 4:s.vertexAttrib4fv(z.location,re);break;default:s.vertexAttrib1fv(z.location,re)}}}}I()}function D(){X();for(const b in r){const O=r[b];for(const ae in O){const J=O[ae];for(const se in J)x(J[se].object),delete J[se];delete O[ae]}delete r[b]}}function B(b){if(r[b.id]===void 0)return;const O=r[b.id];for(const ae in O){const J=O[ae];for(const se in J)x(J[se].object),delete J[se];delete O[ae]}delete r[b.id]}function H(b){for(const O in r){const ae=r[O];if(ae[b.id]===void 0)continue;const J=ae[b.id];for(const se in J)x(J[se].object),delete J[se];delete ae[b.id]}}function X(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:C,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:v,disableUnusedAttributes:I}}function LE(s,e,t){let r;function o(p){r=p}function l(p,x){s.drawArrays(r,p,x),t.update(x,r,1)}function u(p,x,_){_!==0&&(s.drawArraysInstanced(r,p,x,_),t.update(x,r,_))}function f(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let S=0;for(let T=0;T<_;T++)S+=x[T];t.update(S,r,1)}function h(p,x,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)u(p[T],x[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,_);let T=0;for(let E=0;E<_;E++)T+=x[E]*y[E];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function DE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==hi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(H){const X=H===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==wi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Wi&&!X)}function h(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=T>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:D,maxSamples:B}}function IE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Kr,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,S){const T=_.clippingPlanes,E=_.clipIntersection,v=_.clipShadows,g=s.get(_);if(!o||T===null||T.length===0||l&&!v)l?x(null):p();else{const I=l?0:r,P=I*4;let A=g.clippingState||null;h.value=A,A=x(T,y,P,S);for(let D=0;D!==P;++D)A[D]=t[D];g.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,S,T){const E=_!==null?_.length:0;let v=null;if(E!==0){if(v=h.value,T!==!0||v===null){const g=S+E*4,I=y.matrixWorldInverse;f.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,A=S;P!==E;++P,A+=4)u.copy(_[P]).applyMatrix4(I,f),u.normal.toArray(v,A),v[A+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function UE(s){let e=new WeakMap;function t(u,f){return f===Uf?u.mapping=Qs:f===Ff&&(u.mapping=Js),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Uf||f===Ff)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Ly(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const qs=4,Jm=[.125,.215,.35,.446,.526,.582],Jr=20,hf=new Wy,eg=new mt;let pf=null,mf=0,gf=0,vf=!1;const Zr=(1+Math.sqrt(5))/2,Ws=1/Zr,tg=[new ne(-Zr,Ws,0),new ne(Zr,Ws,0),new ne(-Ws,0,Zr),new ne(Ws,0,Zr),new ne(0,Zr,-Ws),new ne(0,Zr,Ws),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],FE=new ne;class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=FE}=l;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=vf,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:to,format:hi,colorSpace:ea,depthBuffer:!1},o=ig(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OE(l)),this._blurMaterial=kE(l,e,t)}return o}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,r,o,l){const h=new Hn(90,1,t,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(eg),_.toneMapping=Tr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const E=new Rd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),v=new $t(new ji,E);let g=!1;const I=e.background;I?I.isColor&&(E.color.copy(I),e.background=null,g=!0):(E.color.copy(eg),g=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[P],l.y,l.z)):A===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[P]));const D=this._cubeSize;Il(o,A*D,P>2?D:0,D,D),_.setRenderTarget(o),g&&_.render(v,h),_.render(e,h)}v.geometry.dispose(),v.material.dispose(),_.toneMapping=S,_.autoClear=y,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Qs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new $t(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,hf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=tg[(o-l-1)%tg.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new $t(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),E=l/T,v=isFinite(l)?1+Math.floor(x*E):Jr;v>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Jr}`);const g=[];let I=0;for(let H=0;H<Jr;++H){const X=H/E,C=Math.exp(-X*X/2);g.push(C),H===0?I+=C:H<v&&(I+=2*C)}for(let H=0;H<g.length;H++)g[H]=g[H]/I;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=g,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-r;const A=this._sizeLods[o],D=3*A*(o>P-qs?o-P+qs:0),B=4*(this._cubeSize-A);Il(t,D,B,3*A,2*A),h.setRenderTarget(t),h.render(_,hf)}}function OE(s){const e=[],t=[],r=[];let o=s;const l=s-qs+1+Jm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let h=1/f;u>s-qs?h=Jm[u-s+qs-1]:u===0&&(h=0),r.push(h);const p=1/(f-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,T=6,E=3,v=2,g=1,I=new Float32Array(E*T*S),P=new Float32Array(v*T*S),A=new Float32Array(g*T*S);for(let B=0;B<S;B++){const H=B%3*2/3-1,X=B>2?0:-1,C=[H,X,0,H+2/3,X,0,H+2/3,X+1,0,H,X,0,H+2/3,X+1,0,H,X+1,0];I.set(C,E*T*B),P.set(y,v*T*B);const b=[B,B,B,B,B,B];A.set(b,g*T*B)}const D=new qi;D.setAttribute("position",new Ei(I,E)),D.setAttribute("uv",new Ei(P,v)),D.setAttribute("faceIndex",new Ei(A,g)),e.push(D),o>qs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ig(s,e,t){const r=new rs(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function kE(s,e,t){const r=new Float32Array(Jr),o=new ne(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function rg(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function sg(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function BE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Uf||h===Ff,x=h===Qs||h===Js;if(p||x){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new ng(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new ng(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let h=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function zE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&$s("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function VE(s,e,t,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function h(_){const y=_.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,T=_.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let P=0,A=I.length;P<A;P+=3){const D=I[P+0],B=I[P+1],H=I[P+2];y.push(D,B,B,H,H,D)}}else if(T!==void 0){const I=T.array;E=T.version;for(let P=0,A=I.length/3-1;P<A;P+=3){const D=P+0,B=P+1,H=P+2;y.push(D,B,B,H,H,D)}}else return;const v=new(tv(y)?av:sv)(y,1);v.version=E;const g=l.get(_);g&&e.remove(g),l.set(_,v)}function x(_){const y=l.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:x}}function HE(s,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function p(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,y*u,T),t.update(S,r,T))}function x(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,T);let v=0;for(let g=0;g<T;g++)v+=S[g];t.update(v,r,1)}function _(y,S,T,E){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<y.length;g++)p(y[g]/u,S[g],E[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,E,0,T);let g=0;for(let I=0;I<T;I++)g+=S[I]*E[I];t.update(g,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function GE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function WE(s,e,t){const r=new WeakMap,o=new jt;function l(u,f,h){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let b=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",b)};var S=b;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let A=0;T===!0&&(A=1),E===!0&&(A=2),v===!0&&(A=3);let D=f.attributes.position.count*A,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const H=new Float32Array(D*B*4*_),X=new nv(H,D,B,_);X.type=Wi,X.needsUpdate=!0;const C=A*4;for(let O=0;O<_;O++){const ae=g[O],J=I[O],se=P[O],le=D*B*4*O;for(let ce=0;ce<ae.count;ce++){const ue=ce*C;T===!0&&(o.fromBufferAttribute(ae,ce),H[le+ue+0]=o.x,H[le+ue+1]=o.y,H[le+ue+2]=o.z,H[le+ue+3]=0),E===!0&&(o.fromBufferAttribute(J,ce),H[le+ue+4]=o.x,H[le+ue+5]=o.y,H[le+ue+6]=o.z,H[le+ue+7]=0),v===!0&&(o.fromBufferAttribute(se,ce),H[le+ue+8]=o.x,H[le+ue+9]=o.y,H[le+ue+10]=o.z,H[le+ue+11]=se.itemSize===4?o.w:1)}}y={count:_,texture:X,size:new yt(D,B)},r.set(f,y),f.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let v=0;v<p.length;v++)T+=p[v];const E=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function jE(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,x=h.geometry,_=e.get(h,x);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const hv=new In,ag=new uv(1,1),pv=new nv,mv=new my,gv=new cv,og=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),fg=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=og[o];if(l===void 0&&(l=new Float32Array(o),og[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ec(s,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function XE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function KE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;fg.set(r),s.uniformMatrix2fv(this.addr,!1,fg),rn(t,r)}}function ZE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ug.set(r),s.uniformMatrix3fv(this.addr,!1,ug),rn(t,r)}}function QE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;cg.set(r),s.uniformMatrix4fv(this.addr,!1,cg),rn(t,r)}}function JE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function ow(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ag.compareFunction=ev,l=ag):l=hv,t.setTexture2D(e||l,o)}function lw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||mv,o)}function cw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||gv,o)}function uw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||pv,o)}function fw(s){switch(s){case 5126:return XE;case 35664:return qE;case 35665:return YE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function dw(s,e){s.uniform1fv(this.addr,e)}function hw(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function pw(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function mw(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function gw(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vw(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _w(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xw(s,e){s.uniform1iv(this.addr,e)}function yw(s,e){s.uniform2iv(this.addr,e)}function Sw(s,e){s.uniform3iv(this.addr,e)}function Mw(s,e){s.uniform4iv(this.addr,e)}function Ew(s,e){s.uniform1uiv(this.addr,e)}function ww(s,e){s.uniform2uiv(this.addr,e)}function Tw(s,e){s.uniform3uiv(this.addr,e)}function Aw(s,e){s.uniform4uiv(this.addr,e)}function Rw(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||hv,l[u])}function Cw(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||mv,l[u])}function bw(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||gv,l[u])}function Pw(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||pv,l[u])}function Nw(s){switch(s){case 5126:return dw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Lw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=fw(t.type)}}class Dw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nw(t.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function dg(s,e){s.seq.push(e),s.map[e.id]=e}function Uw(s,e,t){const r=s.name,o=r.length;for(_f.lastIndex=0;;){const l=_f.exec(r),u=_f.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){dg(t,p===void 0?new Lw(f,s,e):new Dw(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new Iw(f),dg(t,_)),t=_}}}class Vl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Uw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function hg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Fw=37297;let Ow=0;function kw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const pg=new ht;function Bw(s){At._getMatrix(pg,At.workingColorSpace,s);const e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+kw(s.getShaderSource(e),f)}else return l}function zw(s,e){const t=Bw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vw(s,e){let t;switch(e){case Wx:t="Linear";break;case jx:t="Reinhard";break;case Xx:t="Cineon";break;case Wg:t="ACESFilmic";break;case Yx:t="AgX";break;case $x:t="Neutral";break;case qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new ne;function Hw(){At.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function Ww(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ja(s){return s!==""}function gg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(s){return s.replace(Xw,Yw)}const qw=new Map;function Yw(s,e){let t=pt[e];if(t===void 0){const r=qw.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return dd(t)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(s){return s.replace($w,Kw)}function Kw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function xg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Qw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function e1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case Gx:e="ENVMAP_BLENDING_ADD";break}return e}function t1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function n1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=Zw(t),p=Qw(t),x=Jw(t),_=e1(t),y=t1(t),S=Gw(t),T=Ww(l),E=o.createProgram();let v,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ja).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ja).join(`
`),g.length>0&&(g+=`
`)):(v=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),g=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?Vw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,zw("linearToOutputTexel",t.outputColorSpace),Hw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),u=dd(u),u=gg(u,t),u=vg(u,t),f=dd(f),f=gg(f,t),f=vg(f,t),u=_g(u),f=_g(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+v+u,A=I+g+f,D=hg(o,o.VERTEX_SHADER,P),B=hg(o,o.FRAGMENT_SHADER,A);o.attachShader(E,D),o.attachShader(E,B),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function H(O){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(E)||"",J=o.getShaderInfoLog(D)||"",se=o.getShaderInfoLog(B)||"",le=ae.trim(),ce=J.trim(),ue=se.trim();let z=!0,oe=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,D,B);else{const re=mg(o,D,"vertex"),F=mg(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+le+`
`+re+`
`+F)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ce===""||ue==="")&&(oe=!1);oe&&(O.diagnostics={runnable:z,programLog:le,vertexShader:{log:ce,prefix:v},fragmentShader:{log:ue,prefix:g}})}o.deleteShader(D),o.deleteShader(B),X=new Vl(o,E),C=jw(o,E)}let X;this.getUniforms=function(){return X===void 0&&H(this),X};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(E,Fw)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=B,this}let i1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new s1(e),t.set(e,r)),r}}class s1{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}}function a1(s,e,t,r,o,l,u){const f=new Ad,h=new r1,p=new Set,x=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function v(C,b,O,ae,J){const se=ae.fog,le=J.geometry,ce=C.isMeshStandardMaterial?ae.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||ce),z=ue&&ue.mapping===Ql?ue.image.height:null,oe=T[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,F=re!==void 0?re.length:0;let Z=0;le.morphAttributes.position!==void 0&&(Z=1),le.morphAttributes.normal!==void 0&&(Z=2),le.morphAttributes.color!==void 0&&(Z=3);let Ie,ke,Q,ge;if(oe){const St=xi[oe];Ie=St.vertexShader,ke=St.fragmentShader}else Ie=C.vertexShader,ke=C.fragmentShader,h.update(C),Q=h.getVertexShaderID(C),ge=h.getFragmentShaderID(C);const me=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),be=J.isInstancedMesh===!0,$e=J.isBatchedMesh===!0,Rt=!!C.map,dt=!!C.matcap,k=!!ue,Et=!!C.aoMap,We=!!C.lightMap,ut=!!C.bumpMap,je=!!C.normalMap,Ct=!!C.displacementMap,Be=!!C.emissiveMap,at=!!C.metalnessMap,Ot=!!C.roughnessMap,It=C.anisotropy>0,L=C.clearcoat>0,w=C.dispersion>0,$=C.iridescence>0,de=C.sheen>0,xe=C.transmission>0,fe=It&&!!C.anisotropyMap,Ze=L&&!!C.clearcoatMap,Ae=L&&!!C.clearcoatNormalMap,Ve=L&&!!C.clearcoatRoughnessMap,Qe=$&&!!C.iridescenceMap,we=$&&!!C.iridescenceThicknessMap,De=de&&!!C.sheenColorMap,rt=de&&!!C.sheenRoughnessMap,Ye=!!C.specularMap,Pe=!!C.specularColorMap,ft=!!C.specularIntensityMap,G=xe&&!!C.transmissionMap,Me=xe&&!!C.thicknessMap,Re=!!C.gradientMap,Ue=!!C.alphaMap,Se=C.alphaTest>0,pe=!!C.alphaHash,Xe=!!C.extensions;let ct=Tr;C.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ct=s.toneMapping);const Pt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:ke,defines:C.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:$e,batchingColor:$e&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ea,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:dt,envMap:k,envMapMode:k&&ue.mapping,envMapCubeUVHeight:z,aoMap:Et,lightMap:We,bumpMap:ut,normalMap:je,displacementMap:y&&Ct,emissiveMap:Be,normalMapObjectSpace:je&&C.normalMapType===Jx,normalMapTangentSpace:je&&C.normalMapType===Jl,metalnessMap:at,roughnessMap:Ot,anisotropy:It,anisotropyMap:fe,clearcoat:L,clearcoatMap:Ze,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:$,iridescenceMap:Qe,iridescenceThicknessMap:we,sheen:de,sheenColorMap:De,sheenRoughnessMap:rt,specularMap:Ye,specularColorMap:Pe,specularIntensityMap:ft,transmission:xe,transmissionMap:G,thicknessMap:Me,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Ys&&C.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:pe,combine:C.combine,mapUv:Rt&&E(C.map.channel),aoMapUv:Et&&E(C.aoMap.channel),lightMapUv:We&&E(C.lightMap.channel),bumpMapUv:ut&&E(C.bumpMap.channel),normalMapUv:je&&E(C.normalMap.channel),displacementMapUv:Ct&&E(C.displacementMap.channel),emissiveMapUv:Be&&E(C.emissiveMap.channel),metalnessMapUv:at&&E(C.metalnessMap.channel),roughnessMapUv:Ot&&E(C.roughnessMap.channel),anisotropyMapUv:fe&&E(C.anisotropyMap.channel),clearcoatMapUv:Ze&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&E(C.sheenRoughnessMap.channel),specularMapUv:Ye&&E(C.specularMap.channel),specularColorMapUv:Pe&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:G&&E(C.transmissionMap.channel),thicknessMapUv:Me&&E(C.thicknessMap.channel),alphaMapUv:Ue&&E(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(je||It),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(Rt||Ue),fog:!!se,useFog:C.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ce,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Dt,decodeVideoTextureEmissive:Be&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Dt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yi,flipSided:C.side===Dn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xe&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&C.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function g(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)b.push(O),b.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(I(b,C),P(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function P(C,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),b.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.reversedDepthBuffer&&f.enable(4),b.skinning&&f.enable(5),b.morphTargets&&f.enable(6),b.morphNormals&&f.enable(7),b.morphColors&&f.enable(8),b.premultipliedAlpha&&f.enable(9),b.shadowMapEnabled&&f.enable(10),b.doubleSided&&f.enable(11),b.flipSided&&f.enable(12),b.useDepthPacking&&f.enable(13),b.dithering&&f.enable(14),b.transmission&&f.enable(15),b.sheen&&f.enable(16),b.opaque&&f.enable(17),b.pointsUvs&&f.enable(18),b.decodeVideoTexture&&f.enable(19),b.decodeVideoTextureEmissive&&f.enable(20),b.alphaToCoverage&&f.enable(21),C.push(f.mask)}function A(C){const b=T[C.type];let O;if(b){const ae=xi[b];O=Cy.clone(ae.uniforms)}else O=C.uniforms;return O}function D(C,b){let O;for(let ae=0,J=x.length;ae<J;ae++){const se=x[ae];if(se.cacheKey===b){O=se,++O.usedTimes;break}}return O===void 0&&(O=new n1(s,b,C,l),x.push(O)),O}function B(C){if(--C.usedTimes===0){const b=x.indexOf(C);x[b]=x[x.length-1],x.pop(),C.destroy()}}function H(C){h.remove(C)}function X(){h.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:D,releaseProgram:B,releaseShaderCache:H,programs:x,dispose:X}}function o1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function l1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,y,S,T,E,v){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:y,material:S,groupOrder:T,renderOrder:_.renderOrder,z:E,group:v},s[e]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=S,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=E,g.group=v),e++,g}function f(_,y,S,T,E,v){const g=u(_,y,S,T,E,v);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):t.push(g)}function h(_,y,S,T,E,v){const g=u(_,y,S,T,E,v);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):t.unshift(g)}function p(_,y){t.length>1&&t.sort(_||l1),r.length>1&&r.sort(y||yg),o.length>1&&o.sort(y||yg)}function x(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:x,sort:p}}function c1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Sg,s.set(r,[u])):o>=l.length?(u=new Sg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function u1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new mt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function f1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let d1=0;function h1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p1(s){const e=new u1,t=f1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,l=new Xt,u=new Xt;function f(p){let x=0,_=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,E=0,v=0,g=0,I=0,P=0,A=0,D=0,B=0,H=0;p.sort(h1);for(let C=0,b=p.length;C<b;C++){const O=p[C],ae=O.color,J=O.intensity,se=O.distance,le=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)x+=ae.r*J,_+=ae.g*J,y+=ae.b*J;else if(O.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(O.sh.coefficients[ce],J);H++}else if(O.isDirectionalLight){const ce=e.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ue=O.shadow,z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=O.shadow.matrix,I++}r.directional[S]=ce,S++}else if(O.isSpotLight){const ce=e.get(O);ce.position.setFromMatrixPosition(O.matrixWorld),ce.color.copy(ae).multiplyScalar(J),ce.distance=se,ce.coneCos=Math.cos(O.angle),ce.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ce.decay=O.decay,r.spot[E]=ce;const ue=O.shadow;if(O.map&&(r.spotLightMap[D]=O.map,D++,ue.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[E]=ue.matrix,O.castShadow){const z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.spotShadow[E]=z,r.spotShadowMap[E]=le,A++}E++}else if(O.isRectAreaLight){const ce=e.get(O);ce.color.copy(ae).multiplyScalar(J),ce.halfWidth.set(O.width*.5,0,0),ce.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=ce,v++}else if(O.isPointLight){const ce=e.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity),ce.distance=O.distance,ce.decay=O.decay,O.castShadow){const ue=O.shadow,z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=O.shadow.matrix,P++}r.point[T]=ce,T++}else if(O.isHemisphereLight){const ce=e.get(O);ce.skyColor.copy(O.color).multiplyScalar(J),ce.groundColor.copy(O.groundColor).multiplyScalar(J),r.hemi[g]=ce,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const X=r.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==E||X.rectAreaLength!==v||X.hemiLength!==g||X.numDirectionalShadows!==I||X.numPointShadows!==P||X.numSpotShadows!==A||X.numSpotMaps!==D||X.numLightProbes!==H)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=v,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+D-B,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=H,X.directionalLength=S,X.pointLength=T,X.spotLength=E,X.rectAreaLength=v,X.hemiLength=g,X.numDirectionalShadows=I,X.numPointShadows=P,X.numSpotShadows=A,X.numSpotMaps=D,X.numLightProbes=H,r.version=d1++)}function h(p,x){let _=0,y=0,S=0,T=0,E=0;const v=x.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const P=p[g];if(P.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(v),_++}else if(P.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const A=r.rectArea[T];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(v),u.identity(),l.copy(P.matrixWorld),l.premultiply(v),u.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(v),y++}else if(P.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(v),E++}}}return{setup:f,setupView:h,state:r}}function Mg(s){const e=new p1(s),t=[],r=[];function o(x){p.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function f(){e.setup(t)}function h(x){e.setupView(t,x)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function m1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Mg(s),e.set(o,[f])):l>=u.length?(f=new Mg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`;function _1(s,e,t){let r=new Cd;const o=new yt,l=new yt,u=new jt,f=new By({depthPacking:Qx}),h=new zy,p={},x=t.maxTextureSize,_={[Ar]:Dn,[Dn]:Ar,[yi]:yi},y=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:g1,fragmentShader:v1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new qi;T.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $t(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let g=this.type;this.render=function(B,H,X){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(wr),ae.buffers.depth.getReversed()?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=g!==zi&&this.type===zi,se=g===zi&&this.type!==zi;for(let le=0,ce=B.length;le<ce;le++){const ue=B[le],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const oe=z.getFrameExtents();if(o.multiply(oe),l.copy(z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/oe.x),o.x=l.x*oe.x,z.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/oe.y),o.y=l.y*oe.y,z.mapSize.y=l.y)),z.map===null||J===!0||se===!0){const F=this.type!==zi?{minFilter:pi,magFilter:pi}:{};z.map!==null&&z.map.dispose(),z.map=new rs(o.x,o.y,F),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const re=z.getViewportCount();for(let F=0;F<re;F++){const Z=z.getViewport(F);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),ae.viewport(u),z.updateMatrices(ue,F),r=z.getFrustum(),A(H,X,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===zi&&I(z,X),z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(C,b,O)};function I(B,H){const X=e.update(E);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new rs(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(H,null,X,y,E,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(H,null,X,S,E,null)}function P(B,H,X,C){let b=null;const O=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)b=O;else if(b=X.isPointLight===!0?h:f,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ae=b.uuid,J=H.uuid;let se=p[ae];se===void 0&&(se={},p[ae]=se);let le=se[J];le===void 0&&(le=b.clone(),se[J]=le,H.addEventListener("dispose",D)),b=le}if(b.visible=H.visible,b.wireframe=H.wireframe,C===zi?b.side=H.shadowSide!==null?H.shadowSide:H.side:b.side=H.shadowSide!==null?H.shadowSide:_[H.side],b.alphaMap=H.alphaMap,b.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,b.map=H.map,b.clipShadows=H.clipShadows,b.clippingPlanes=H.clippingPlanes,b.clipIntersection=H.clipIntersection,b.displacementMap=H.displacementMap,b.displacementScale=H.displacementScale,b.displacementBias=H.displacementBias,b.wireframeLinewidth=H.wireframeLinewidth,b.linewidth=H.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=s.properties.get(b);ae.light=X}return b}function A(B,H,X,C,b){if(B.visible===!1)return;if(B.layers.test(H.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&b===zi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const J=e.update(B),se=B.material;if(Array.isArray(se)){const le=J.groups;for(let ce=0,ue=le.length;ce<ue;ce++){const z=le[ce],oe=se[z.materialIndex];if(oe&&oe.visible){const re=P(B,oe,C,b);B.onBeforeShadow(s,B,H,X,J,re,z),s.renderBufferDirect(X,null,J,re,B,z),B.onAfterShadow(s,B,H,X,J,re,z)}}}else if(se.visible){const le=P(B,se,C,b);B.onBeforeShadow(s,B,H,X,J,le,null),s.renderBufferDirect(X,null,J,le,B,null),B.onAfterShadow(s,B,H,X,J,le,null)}}const ae=B.children;for(let J=0,se=ae.length;J<se;J++)A(ae[J],H,X,C,b)}function D(B){B.target.removeEventListener("dispose",D);for(const X in p){const C=p[X],b=B.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const x1={[Cf]:bf,[Pf]:Df,[Nf]:If,[Zs]:Lf,[bf]:Cf,[Df]:Pf,[If]:Nf,[Lf]:Zs};function y1(s,e){function t(){let G=!1;const Me=new jt;let Re=null;const Ue=new jt(0,0,0,0);return{setMask:function(Se){Re!==Se&&!G&&(s.colorMask(Se,Se,Se,Se),Re=Se)},setLocked:function(Se){G=Se},setClear:function(Se,pe,Xe,ct,Pt){Pt===!0&&(Se*=ct,pe*=ct,Xe*=ct),Me.set(Se,pe,Xe,ct),Ue.equals(Me)===!1&&(s.clearColor(Se,pe,Xe,ct),Ue.copy(Me))},reset:function(){G=!1,Re=null,Ue.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Re=null,Ue=null,Se=null;return{setReversed:function(pe){if(Me!==pe){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Me=pe;const ct=Se;Se=null,this.setClear(ct)}},getReversed:function(){return Me},setTest:function(pe){pe?me(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!G&&(s.depthMask(pe),Re=pe)},setFunc:function(pe){if(Me&&(pe=x1[pe]),Ue!==pe){switch(pe){case Cf:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Pf:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Nf:s.depthFunc(s.EQUAL);break;case Lf:s.depthFunc(s.GEQUAL);break;case Df:s.depthFunc(s.GREATER);break;case If:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=pe}},setLocked:function(pe){G=pe},setClear:function(pe){Se!==pe&&(Me&&(pe=1-pe),s.clearDepth(pe),Se=pe)},reset:function(){G=!1,Re=null,Ue=null,Se=null,Me=!1}}}function o(){let G=!1,Me=null,Re=null,Ue=null,Se=null,pe=null,Xe=null,ct=null,Pt=null;return{setTest:function(St){G||(St?me(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(St){Me!==St&&!G&&(s.stencilMask(St),Me=St)},setFunc:function(St,jn,fn){(Re!==St||Ue!==jn||Se!==fn)&&(s.stencilFunc(St,jn,fn),Re=St,Ue=jn,Se=fn)},setOp:function(St,jn,fn){(pe!==St||Xe!==jn||ct!==fn)&&(s.stencilOp(St,jn,fn),pe=St,Xe=jn,ct=fn)},setLocked:function(St){G=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){G=!1,Me=null,Re=null,Ue=null,Se=null,pe=null,Xe=null,ct=null,Pt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let x={},_={},y=new WeakMap,S=[],T=null,E=!1,v=null,g=null,I=null,P=null,A=null,D=null,B=null,H=new mt(0,0,0),X=0,C=!1,b=null,O=null,ae=null,J=null,se=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),ce=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ce=ue>=2);let oe=null,re={};const F=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),Ie=new jt().fromArray(F),ke=new jt().fromArray(Z);function Q(G,Me,Re,Ue){const Se=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Re;Xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Me+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return pe}const ge={};ge[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(s.DEPTH_TEST),u.setFunc(Zs),ut(!1),je(Em),me(s.CULL_FACE),Et(wr);function me(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Ce(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function be(G,Me){return _[G]!==Me?(s.bindFramebuffer(G,Me),_[G]=Me,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Me),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function $e(G,Me){let Re=S,Ue=!1;if(G){Re=y.get(Me),Re===void 0&&(Re=[],y.set(Me,Re));const Se=G.textures;if(Re.length!==Se.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Xe=Se.length;pe<Xe;pe++)Re[pe]=s.COLOR_ATTACHMENT0+pe;Re.length=Se.length,Ue=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Re)}function Rt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const dt={[Qr]:s.FUNC_ADD,[Tx]:s.FUNC_SUBTRACT,[Ax]:s.FUNC_REVERSE_SUBTRACT};dt[Rx]=s.MIN,dt[Cx]=s.MAX;const k={[bx]:s.ZERO,[Px]:s.ONE,[Nx]:s.SRC_COLOR,[Af]:s.SRC_ALPHA,[Ox]:s.SRC_ALPHA_SATURATE,[Ux]:s.DST_COLOR,[Dx]:s.DST_ALPHA,[Lx]:s.ONE_MINUS_SRC_COLOR,[Rf]:s.ONE_MINUS_SRC_ALPHA,[Fx]:s.ONE_MINUS_DST_COLOR,[Ix]:s.ONE_MINUS_DST_ALPHA,[kx]:s.CONSTANT_COLOR,[Bx]:s.ONE_MINUS_CONSTANT_COLOR,[zx]:s.CONSTANT_ALPHA,[Vx]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(G,Me,Re,Ue,Se,pe,Xe,ct,Pt,St){if(G===wr){E===!0&&(Ce(s.BLEND),E=!1);return}if(E===!1&&(me(s.BLEND),E=!0),G!==wx){if(G!==v||St!==C){if((g!==Qr||A!==Qr)&&(s.blendEquation(s.FUNC_ADD),g=Qr,A=Qr),St)switch(G){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.ONE,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,P=null,D=null,B=null,H.set(0,0,0),X=0,v=G,C=St}return}Se=Se||Me,pe=pe||Re,Xe=Xe||Ue,(Me!==g||Se!==A)&&(s.blendEquationSeparate(dt[Me],dt[Se]),g=Me,A=Se),(Re!==I||Ue!==P||pe!==D||Xe!==B)&&(s.blendFuncSeparate(k[Re],k[Ue],k[pe],k[Xe]),I=Re,P=Ue,D=pe,B=Xe),(ct.equals(H)===!1||Pt!==X)&&(s.blendColor(ct.r,ct.g,ct.b,Pt),H.copy(ct),X=Pt),v=G,C=!1}function We(G,Me){G.side===yi?Ce(s.CULL_FACE):me(s.CULL_FACE);let Re=G.side===Dn;Me&&(Re=!Re),ut(Re),G.blending===Ys&&G.transparent===!1?Et(wr):Et(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ue=G.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){b!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),b=G)}function je(G){G!==Mx?(me(s.CULL_FACE),G!==O&&(G===Em?s.cullFace(s.BACK):G===Ex?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),O=G}function Ct(G){G!==ae&&(ce&&s.lineWidth(G),ae=G)}function Be(G,Me,Re){G?(me(s.POLYGON_OFFSET_FILL),(J!==Me||se!==Re)&&(s.polygonOffset(Me,Re),J=Me,se=Re)):Ce(s.POLYGON_OFFSET_FILL)}function at(G){G?me(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ot(G){G===void 0&&(G=s.TEXTURE0+le-1),oe!==G&&(s.activeTexture(G),oe=G)}function It(G,Me,Re){Re===void 0&&(oe===null?Re=s.TEXTURE0+le-1:Re=oe);let Ue=re[Re];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[Re]=Ue),(Ue.type!==G||Ue.texture!==Me)&&(oe!==Re&&(s.activeTexture(Re),oe=Re),s.bindTexture(G,Me||ge[G]),Ue.type=G,Ue.texture=Me)}function L(){const G=re[oe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(G){Ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function rt(G){ke.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ke.copy(G))}function Ye(G,Me){let Re=p.get(Me);Re===void 0&&(Re=new WeakMap,p.set(Me,Re));let Ue=Re.get(G);Ue===void 0&&(Ue=s.getUniformBlockIndex(Me,G.name),Re.set(G,Ue))}function Pe(G,Me){const Ue=p.get(Me).get(G);h.get(Me)!==Ue&&(s.uniformBlockBinding(Me,Ue,G.__bindingPointIndex),h.set(Me,Ue))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},oe=null,re={},_={},y=new WeakMap,S=[],T=null,E=!1,v=null,g=null,I=null,P=null,A=null,D=null,B=null,H=new mt(0,0,0),X=0,C=!1,b=null,O=null,ae=null,J=null,se=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Ce,bindFramebuffer:be,drawBuffers:$e,useProgram:Rt,setBlending:Et,setMaterial:We,setFlipSided:ut,setCullFace:je,setLineWidth:Ct,setPolygonOffset:Be,setScissorTest:at,activeTexture:Ot,bindTexture:It,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:$,texImage2D:Qe,texImage3D:we,updateUBOMapping:Ye,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:Ve,texSubImage2D:de,texSubImage3D:xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:De,viewport:rt,reset:ft}}function S1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,x=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return S?new OffscreenCanvas(L,w):ql("canvas")}function E(L,w,$){let de=1;const xe=It(L);if((xe.width>$||xe.height>$)&&(de=$/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(de*xe.width),Ze=Math.floor(de*xe.height);_===void 0&&(_=T(fe,Ze));const Ae=w?T(fe,Ze):_;return Ae.width=fe,Ae.height=Ze,Ae.getContext("2d").drawImage(L,0,0,fe,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Ze+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function v(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,w,$,de,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),w===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RG8UI),$===s.UNSIGNED_SHORT&&(fe=s.RG16UI),$===s.UNSIGNED_INT&&(fe=s.RG32UI),$===s.BYTE&&(fe=s.RG8I),$===s.SHORT&&(fe=s.RG16I),$===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),$===s.UNSIGNED_INT&&(fe=s.RGB32UI),$===s.BYTE&&(fe=s.RGB8I),$===s.SHORT&&(fe=s.RGB16I),$===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),$===s.UNSIGNED_INT&&(fe=s.RGBA32UI),$===s.BYTE&&(fe=s.RGBA8I),$===s.SHORT&&(fe=s.RGBA16I),$===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),w===s.RGBA){const Ze=xe?Wl:At.getTransfer(de);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=Ze===Dt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(L,w){let $;return L?w===null||w===is||w===Za?$=s.DEPTH24_STENCIL8:w===Wi?$=s.DEPTH32F_STENCIL8:w===Ka&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===is||w===Za?$=s.DEPTH_COMPONENT24:w===Wi?$=s.DEPTH_COMPONENT32F:w===Ka&&($=s.DEPTH_COMPONENT16),$}function D(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function B(L){const w=L.target;w.removeEventListener("dispose",B),X(w),w.isVideoTexture&&x.delete(w)}function H(L){const w=L.target;w.removeEventListener("dispose",H),b(w)}function X(L){const w=r.get(L);if(w.__webglInit===void 0)return;const $=L.source,de=y.get($);if(de){const xe=de[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(L),Object.keys(de).length===0&&y.delete($)}r.remove(L)}function C(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const $=L.source,de=y.get($);delete de[w.__cacheKey],u.memory.textures--}function b(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let xe=0;xe<w.__webglFramebuffer[de].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[de][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)s.deleteFramebuffer(w.__webglFramebuffer[de]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let de=0,xe=$.length;de<xe;de++){const fe=r.get($[de]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove($[de])}r.remove(L)}let O=0;function ae(){O=0}function J(){const L=O;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),O+=1,L}function se(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function le(L,w){const $=r.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge($,L,w);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function ce(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ge($,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function ue(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ge($,L,w);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function z(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){me($,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const oe={[Of]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[kf]:s.MIRRORED_REPEAT},re={[pi]:s.NEAREST,[Kx]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[ku]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},F={[ey]:s.NEVER,[ay]:s.ALWAYS,[ty]:s.LESS,[ev]:s.LEQUAL,[ny]:s.EQUAL,[sy]:s.GEQUAL,[iy]:s.GREATER,[ry]:s.NOTEQUAL};function Z(L,w){if(w.type===Wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===ku||w.magFilter===pl||w.magFilter===ts||w.minFilter===Si||w.minFilter===ku||w.minFilter===pl||w.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pi||w.minFilter!==pl&&w.minFilter!==ts||w.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",B));const de=w.source;let xe=y.get(de);xe===void 0&&(xe={},y.set(de,xe));const fe=se(w);if(fe!==L.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),xe[fe].usedTimes++;const Ze=xe[L.__cacheKey];Ze!==void 0&&(xe[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&C(w)),L.__cacheKey=fe,L.__webglTexture=xe[fe].texture}return $}function ke(L,w,$){return Math.floor(Math.floor(L/$)/w)}function Q(L,w,$,de){const fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,$,de,w.data);else{fe.sort((we,De)=>we.start-De.start);let Ze=0;for(let we=1;we<fe.length;we++){const De=fe[Ze],rt=fe[we],Ye=De.start+De.count,Pe=ke(rt.start,w.width,4),ft=ke(De.start,w.width,4);rt.start<=Ye+1&&Pe===ft&&ke(rt.start+rt.count-1,w.width,4)===Pe?De.count=Math.max(De.count,rt.start+rt.count-De.start):(++Ze,fe[Ze]=rt)}fe.length=Ze+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let we=0,De=fe.length;we<De;we++){const rt=fe[we],Ye=Math.floor(rt.start/4),Pe=Math.ceil(rt.count/4),ft=Ye%w.width,G=Math.floor(Ye/w.width),Me=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,ft,G,Me,Re,$,de,w.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function ge(L,w,$){let de=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=s.TEXTURE_3D);const xe=Ie(L,w),fe=w.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+$);const Ze=r.get(fe);if(fe.version!==Ze.__version||xe===!0){t.activeTexture(s.TEXTURE0+$);const Ae=At.getPrimaries(At.workingColorSpace),Ve=w.colorSpace===Sr?null:At.getPrimaries(w.colorSpace),Qe=w.colorSpace===Sr||Ae===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let we=E(w.image,!1,o.maxTextureSize);we=Ot(w,we);const De=l.convert(w.format,w.colorSpace),rt=l.convert(w.type);let Ye=P(w.internalFormat,De,rt,w.colorSpace,w.isVideoTexture);Z(de,w);let Pe;const ft=w.mipmaps,G=w.isVideoTexture!==!0,Me=Ze.__version===void 0||xe===!0,Re=fe.dataReady,Ue=D(w,we);if(w.isDepthTexture)Ye=A(w.format===Ja,w.type),Me&&(G?t.texStorage2D(s.TEXTURE_2D,1,Ye,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Ye,we.width,we.height,0,De,rt,null));else if(w.isDataTexture)if(ft.length>0){G&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Ye,ft[0].width,ft[0].height);for(let Se=0,pe=ft.length;Se<pe;Se++)Pe=ft[Se],G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,rt,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Ye,Pe.width,Pe.height,0,De,rt,Pe.data);w.generateMipmaps=!1}else G?(Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Ye,we.width,we.height),Re&&Q(w,we,De,rt)):t.texImage2D(s.TEXTURE_2D,0,Ye,we.width,we.height,0,De,rt,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ye,ft[0].width,ft[0].height,we.depth);for(let Se=0,pe=ft.length;Se<pe;Se++)if(Pe=ft[Se],w.format!==hi)if(De!==null)if(G){if(Re)if(w.layerUpdates.size>0){const Xe=Qm(Pe.width,Pe.height,w.format,w.type);for(const ct of w.layerUpdates){const Pt=Pe.data.subarray(ct*Xe/Pe.data.BYTES_PER_ELEMENT,(ct+1)*Xe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,ct,Pe.width,Pe.height,1,De,Pt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,De,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ye,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,De,rt,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ye,Pe.width,Pe.height,we.depth,0,De,rt,Pe.data)}else{G&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Ye,ft[0].width,ft[0].height);for(let Se=0,pe=ft.length;Se<pe;Se++)Pe=ft[Se],w.format!==hi?De!==null?G?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Ye,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,rt,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Ye,Pe.width,Pe.height,0,De,rt,Pe.data)}else if(w.isDataArrayTexture)if(G){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ye,we.width,we.height,we.depth),Re)if(w.layerUpdates.size>0){const Se=Qm(we.width,we.height,w.format,w.type);for(const pe of w.layerUpdates){const Xe=we.data.subarray(pe*Se/we.data.BYTES_PER_ELEMENT,(pe+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,we.width,we.height,1,De,rt,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,De,rt,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,we.width,we.height,we.depth,0,De,rt,we.data);else if(w.isData3DTexture)G?(Me&&t.texStorage3D(s.TEXTURE_3D,Ue,Ye,we.width,we.height,we.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,De,rt,we.data)):t.texImage3D(s.TEXTURE_3D,0,Ye,we.width,we.height,we.depth,0,De,rt,we.data);else if(w.isFramebufferTexture){if(Me)if(G)t.texStorage2D(s.TEXTURE_2D,Ue,Ye,we.width,we.height);else{let Se=we.width,pe=we.height;for(let Xe=0;Xe<Ue;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,Ye,Se,pe,0,De,rt,null),Se>>=1,pe>>=1}}else if(ft.length>0){if(G&&Me){const Se=It(ft[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Ye,Se.width,Se.height)}for(let Se=0,pe=ft.length;Se<pe;Se++)Pe=ft[Se],G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,De,rt,Pe):t.texImage2D(s.TEXTURE_2D,Se,Ye,De,rt,Pe);w.generateMipmaps=!1}else if(G){if(Me){const Se=It(we);t.texStorage2D(s.TEXTURE_2D,Ue,Ye,Se.width,Se.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,rt,we)}else t.texImage2D(s.TEXTURE_2D,0,Ye,De,rt,we);v(w)&&g(de),Ze.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function me(L,w,$){if(w.image.length!==6)return;const de=Ie(L,w),xe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const fe=r.get(xe);if(xe.version!==fe.__version||de===!0){t.activeTexture(s.TEXTURE0+$);const Ze=At.getPrimaries(At.workingColorSpace),Ae=w.colorSpace===Sr?null:At.getPrimaries(w.colorSpace),Ve=w.colorSpace===Sr||Ze===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,De=[];for(let pe=0;pe<6;pe++)!Qe&&!we?De[pe]=E(w.image[pe],!0,o.maxCubemapSize):De[pe]=we?w.image[pe].image:w.image[pe],De[pe]=Ot(w,De[pe]);const rt=De[0],Ye=l.convert(w.format,w.colorSpace),Pe=l.convert(w.type),ft=P(w.internalFormat,Ye,Pe,w.colorSpace),G=w.isVideoTexture!==!0,Me=fe.__version===void 0||de===!0,Re=xe.dataReady;let Ue=D(w,rt);Z(s.TEXTURE_CUBE_MAP,w);let Se;if(Qe){G&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ft,rt.width,rt.height);for(let pe=0;pe<6;pe++){Se=De[pe].mipmaps;for(let Xe=0;Xe<Se.length;Xe++){const ct=Se[Xe];w.format!==hi?Ye!==null?G?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ct.width,ct.height,Ye,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ct.width,ct.height,Ye,Pe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,ft,ct.width,ct.height,0,Ye,Pe,ct.data)}}}else{if(Se=w.mipmaps,G&&Me){Se.length>0&&Ue++;const pe=It(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(we){G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,De[pe].width,De[pe].height,Ye,Pe,De[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,De[pe].width,De[pe].height,0,Ye,Pe,De[pe].data);for(let Xe=0;Xe<Se.length;Xe++){const Pt=Se[Xe].image[pe].image;G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Pt.width,Pt.height,Ye,Pe,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,ft,Pt.width,Pt.height,0,Ye,Pe,Pt.data)}}else{G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Pe,De[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ye,Pe,De[pe]);for(let Xe=0;Xe<Se.length;Xe++){const ct=Se[Xe];G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Ye,Pe,ct.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,ft,Ye,Pe,ct.image[pe])}}}v(w)&&g(s.TEXTURE_CUBE_MAP),fe.__version=xe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ce(L,w,$,de,xe,fe){const Ze=l.convert($.format,$.colorSpace),Ae=l.convert($.type),Ve=P($.internalFormat,Ze,Ae,$.colorSpace),Qe=r.get(w),we=r.get($);if(we.__renderTarget=w,!Qe.__hasExternalTextures){const De=Math.max(1,w.width>>fe),rt=Math.max(1,w.height>>fe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Ve,De,rt,w.depth,0,Ze,Ae,null):t.texImage2D(xe,fe,Ve,De,rt,0,Ze,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Be(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,xe,we.__webglTexture,0,Ct(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,xe,we.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(L,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const de=w.depthTexture,xe=de&&de.isDepthTexture?de.type:null,fe=A(w.stencilBuffer,xe),Ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=Ct(w);Be(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,L)}else{const de=w.textures;for(let xe=0;xe<de.length;xe++){const fe=de[xe],Ze=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Ve=P(fe.internalFormat,Ze,Ae,fe.colorSpace),Qe=Ct(w);$&&Be(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ve,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const xe=de.__webglTexture,fe=Ct(w);if(w.depthTexture.format===Qa)Be(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Ja)Be(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Rt(L){const w=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=de}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?$e(w.__webglFramebuffer[0],L):$e(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=s.createRenderbuffer(),be(w.__webglDepthbuffer[de],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),be(w.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(L,w,$){const de=r.get(L);w!==void 0&&Ce(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Rt(L)}function k(L){const w=L.texture,$=r.get(L),de=r.get(w);L.addEventListener("dispose",H);const xe=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=w.version,u.memory.textures++),fe){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)$.__webglFramebuffer[Ae][Ve]=s.createFramebuffer()}else $.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ae=0,Ve=xe.length;Ae<Ve;Ae++){const Qe=r.get(xe[Ae]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Be(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Ve=xe[Ae];$.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Qe=l.convert(Ve.format,Ve.colorSpace),we=l.convert(Ve.type),De=P(Ve.internalFormat,Qe,we,Ve.colorSpace,L.isXRRenderTarget===!0),rt=Ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,De,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),be($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Z(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ce($.__webglFramebuffer[Ae][Ve],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ve);else Ce($.__webglFramebuffer[Ae],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(w)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ae=0,Ve=xe.length;Ae<Ve;Ae++){const Qe=xe[Ae],we=r.get(Qe);let De=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,we.__webglTexture),Z(De,Qe),Ce($.__webglFramebuffer,L,Qe,s.COLOR_ATTACHMENT0+Ae,De,0),v(Qe)&&g(De)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,de.__webglTexture),Z(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ce($.__webglFramebuffer[Ve],L,w,s.COLOR_ATTACHMENT0,Ae,Ve);else Ce($.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ae,0);v(w)&&g(Ae),t.unbindTexture()}L.depthBuffer&&Rt(L)}function Et(L){const w=L.textures;for(let $=0,de=w.length;$<de;$++){const xe=w[$];if(v(xe)){const fe=I(L),Ze=r.get(xe).__webglTexture;t.bindTexture(fe,Ze),g(fe),t.unbindTexture()}}}const We=[],ut=[];function je(L){if(L.samples>0){if(Be(L)===!1){const w=L.textures,$=L.width,de=L.height;let xe=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(L),Ae=w.length>1;if(Ae)for(let Qe=0;Qe<w.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Qe=0;Qe<w.length;Qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Qe]);const we=r.get(w[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,$,de,0,0,$,de,xe,s.NEAREST),h===!0&&(We.length=0,ut.length=0,We.push(s.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(We.push(fe),ut.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Qe=0;Qe<w.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Qe]);const we=r.get(w[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ct(L){return Math.min(o.maxSamples,L.samples)}function Be(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(L){const w=u.render.frame;x.get(L)!==w&&(x.set(L,w),L.update())}function Ot(L,w){const $=L.colorSpace,de=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ea&&$!==Sr&&(At.getTransfer($)===Dt?(de!==hi||xe!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=le,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=dt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Be}function M1(s,e){function t(r,o=Sr){let l;const u=At.getTransfer(o);if(r===wi)return s.UNSIGNED_BYTE;if(r===xd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Yg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xg)return s.BYTE;if(r===qg)return s.SHORT;if(r===Ka)return s.UNSIGNED_SHORT;if(r===_d)return s.INT;if(r===is)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===to)return s.HALF_FLOAT;if(r===$g)return s.ALPHA;if(r===Kg)return s.RGB;if(r===hi)return s.RGBA;if(r===Qa)return s.DEPTH_COMPONENT;if(r===Ja)return s.DEPTH_STENCIL;if(r===Zg)return s.RED;if(r===Sd)return s.RED_INTEGER;if(r===Qg)return s.RG;if(r===Md)return s.RG_INTEGER;if(r===Ed)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===kl||r===Bl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bf||r===zf||r===Vf||r===Hf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gf||r===Wf||r===jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gf||r===Wf)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xf||r===qf||r===Yf||r===$f||r===Kf||r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$f)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ed)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===td)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===id)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===ad||r===od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jg||r===ld||r===cd||r===ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Za?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class vv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new vv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:E1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new so(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends ra{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,x=null,_=null,y=null,S=null,T=null;const E=new T1,v={},g=t.getContextAttributes();let I=null,P=null;const A=[],D=[],B=new yt;let H=null;const X=new Hn;X.viewport=new jt;const C=new Hn;C.viewport=new jt;const b=[X,C],O=new Xy;let ae=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=A[Q];return ge===void 0&&(ge=new lf,A[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=A[Q];return ge===void 0&&(ge=new lf,A[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=A[Q];return ge===void 0&&(ge=new lf,A[Q]=ge),ge.getHandSpace()};function se(Q){const ge=D.indexOf(Q.inputSource);if(ge===-1)return;const me=A[ge];me!==void 0&&(me.update(Q.inputSource,Q.frame,p||u),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function le(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<A.length;Q++){const ge=D[Q];ge!==null&&(D[Q]=null,A[Q].disconnect(ge))}ae=null,J=null,E.reset();for(const Q in v)delete v[Q];e.setRenderTarget(I),S=null,y=null,_=null,o=null,P=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",le),o.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(o,t)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ce=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=g.stencil?Ja:Qa,Ce=g.stencil?Za:is);const $e={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};y=_.createProjectionLayer($e),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new rs(y.textureWidth,y.textureHeight,{format:hi,type:wi,depthTexture:new uv(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rs(S.framebufferWidth,S.framebufferHeight,{format:hi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),ke.setContext(o),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ce(Q){for(let ge=0;ge<Q.removed.length;ge++){const me=Q.removed[ge],Ce=D.indexOf(me);Ce>=0&&(D[Ce]=null,A[Ce].disconnect(me))}for(let ge=0;ge<Q.added.length;ge++){const me=Q.added[ge];let Ce=D.indexOf(me);if(Ce===-1){for(let $e=0;$e<A.length;$e++)if($e>=D.length){D.push(me),Ce=$e;break}else if(D[$e]===null){D[$e]=me,Ce=$e;break}if(Ce===-1)break}const be=A[Ce];be&&be.connect(me)}}const ue=new ne,z=new ne;function oe(Q,ge,me){ue.setFromMatrixPosition(ge.matrixWorld),z.setFromMatrixPosition(me.matrixWorld);const Ce=ue.distanceTo(z),be=ge.projectionMatrix.elements,$e=me.projectionMatrix.elements,Rt=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),k=(be[9]+1)/be[5],Et=(be[9]-1)/be[5],We=(be[8]-1)/be[0],ut=($e[8]+1)/$e[0],je=Rt*We,Ct=Rt*ut,Be=Ce/(-We+ut),at=Be*-We;if(ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(at),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ot=Rt+Be,It=dt+Be,L=je-at,w=Ct+(Ce-at),$=k*dt/It*Ot,de=Et*dt/It*Ot;Q.projectionMatrix.makePerspective(L,w,$,de,Ot,It),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ge=Q.near,me=Q.far;E.texture!==null&&(E.depthNear>0&&(ge=E.depthNear),E.depthFar>0&&(me=E.depthFar)),O.near=C.near=X.near=ge,O.far=C.far=X.far=me,(ae!==O.near||J!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),ae=O.near,J=O.far),O.layers.mask=Q.layers.mask|6,X.layers.mask=O.layers.mask&3,C.layers.mask=O.layers.mask&5;const Ce=Q.parent,be=O.cameras;re(O,Ce);for(let $e=0;$e<be.length;$e++)re(be[$e],Ce);be.length===2?oe(O,X,C):O.projectionMatrix.copy(X.projectionMatrix),F(Q,O,Ce)};function F(Q,ge,me){me===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Q){h=Q,y!==null&&(y.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(O)},this.getCameraTexture=function(Q){return v[Q]};let Z=null;function Ie(Q,ge){if(x=ge.getViewerPose(p||u),T=ge,x!==null){const me=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ce=!1;me.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let dt=0;dt<me.length;dt++){const k=me[dt];let Et=null;if(S!==null)Et=S.getViewport(k);else{const ut=_.getViewSubImage(y,k);Et=ut.viewport,dt===0&&(e.setRenderTargetTextures(P,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(P))}let We=b[dt];We===void 0&&(We=new Hn,We.layers.enable(dt),We.viewport=new jt,b[dt]=We),We.matrix.fromArray(k.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(k.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Et.x,Et.y,Et.width,Et.height),dt===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(We)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const dt=_.getDepthInformation(me[0]);dt&&dt.isValid&&dt.texture&&E.init(dt,o.renderState)}if(be&&be.includes("camera-access")&&(e.state.unbindTexture(),_))for(let dt=0;dt<me.length;dt++){const k=me[dt].camera;if(k){let Et=v[k];Et||(Et=new vv,v[k]=Et);const We=_.getCameraImage(k);Et.sourceTexture=We}}}for(let me=0;me<A.length;me++){const Ce=D[me],be=A[me];Ce!==null&&be!==void 0&&be.update(Ce,ge,p||u)}Z&&Z(Q,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),T=null}const ke=new dv;ke.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){Z=Q},this.dispose=function(){}}}const $r=new ei,R1=new Xt;function C1(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,ov(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function o(v,g,I,P,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(v,g):g.isMeshToonMaterial?(l(v,g),_(v,g)):g.isMeshPhongMaterial?(l(v,g),x(v,g)):g.isMeshStandardMaterial?(l(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,A)):g.isMeshMatcapMaterial?(l(v,g),T(v,g)):g.isMeshDepthMaterial?l(v,g):g.isMeshDistanceMaterial?(l(v,g),E(v,g)):g.isMeshNormalMaterial?l(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?h(v,g,I,P):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Dn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Dn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,A=I.envMapRotation;P&&(v.envMap.value=P,$r.copy(A),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),v.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler($r)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,I,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=P*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function x(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function _(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function E(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function b1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,P){const A=P.program;r.uniformBlockBinding(I,A)}function p(I,P){let A=o[I.id];A===void 0&&(T(I),A=x(I),o[I.id]=A,I.addEventListener("dispose",v));const D=P.program;r.updateUBOMapping(I,D);const B=e.render.frame;l[I.id]!==B&&(y(I),l[I.id]=B)}function x(I){const P=_();I.__bindingPointIndex=P;const A=s.createBuffer(),D=I.__size,B=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,D,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,A),A}function _(){for(let I=0;I<f;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=o[I.id],A=I.uniforms,D=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let B=0,H=A.length;B<H;B++){const X=Array.isArray(A[B])?A[B]:[A[B]];for(let C=0,b=X.length;C<b;C++){const O=X[C];if(S(O,B,C,D)===!0){const ae=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let le=0;le<J.length;le++){const ce=J[le],ue=E(ce);typeof ce=="number"||typeof ce=="boolean"?(O.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ae+se,O.__data)):ce.isMatrix3?(O.__data[0]=ce.elements[0],O.__data[1]=ce.elements[1],O.__data[2]=ce.elements[2],O.__data[3]=0,O.__data[4]=ce.elements[3],O.__data[5]=ce.elements[4],O.__data[6]=ce.elements[5],O.__data[7]=0,O.__data[8]=ce.elements[6],O.__data[9]=ce.elements[7],O.__data[10]=ce.elements[8],O.__data[11]=0):(ce.toArray(O.__data,se),se+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,A,D){const B=I.value,H=P+"_"+A;if(D[H]===void 0)return typeof B=="number"||typeof B=="boolean"?D[H]=B:D[H]=B.clone(),!0;{const X=D[H];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return D[H]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function T(I){const P=I.uniforms;let A=0;const D=16;for(let H=0,X=P.length;H<X;H++){const C=Array.isArray(P[H])?P[H]:[P[H]];for(let b=0,O=C.length;b<O;b++){const ae=C[b],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let se=0,le=J.length;se<le;se++){const ce=J[se],ue=E(ce),z=A%D,oe=z%ue.boundary,re=z+oe;A+=oe,re!==0&&D-re<ue.storage&&(A+=D-re),ae.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=ue.storage}}}const B=A%D;return B>0&&(A+=D-B),I.__size=A,I.__cache={},this}function E(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const A=u.indexOf(P.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function g(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:h,update:p,dispose:g}}class P1{constructor(e={}){const{canvas:t=ly(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const T=new Uint32Array(4),E=new Int32Array(4);let v=null,g=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=Jn;let B=0,H=0,X=null,C=-1,b=null;const O=new jt,ae=new jt;let J=null;const se=new mt(0);let le=0,ce=t.width,ue=t.height,z=1,oe=null,re=null;const F=new jt(0,0,ce,ue),Z=new jt(0,0,ce,ue);let Ie=!1;const ke=new Cd;let Q=!1,ge=!1;const me=new Xt,Ce=new ne,be=new jt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function dt(){return X===null?z:1}let k=r;function Et(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vd}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){const q="webgl2";if(k=Et(q,R),k===null)throw Et(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,ut,je,Ct,Be,at,Ot,It,L,w,$,de,xe,fe,Ze,Ae,Ve,Qe,we,De,rt,Ye,Pe,ft;function G(){We=new zE(k),We.init(),Ye=new M1(k,We),ut=new DE(k,We,e,Ye),je=new y1(k,We),ut.reversedDepthBuffer&&y&&je.buffers.depth.setReversed(!0),Ct=new GE(k),Be=new o1,at=new S1(k,We,je,Be,ut,Ye,Ct),Ot=new UE(A),It=new BE(A),L=new $y(k),Pe=new NE(k,L),w=new VE(k,L,Ct,Pe),$=new jE(k,w,L,Ct),we=new WE(k,ut,at),Ae=new IE(Be),de=new a1(A,Ot,It,We,ut,Pe,Ae),xe=new C1(A,Be),fe=new c1,Ze=new m1(We),Qe=new PE(A,Ot,It,je,$,S,h),Ve=new _1(A,$,ut),ft=new b1(k,Ct,ut,je),De=new LE(k,We,Ct),rt=new HE(k,We,Ct),Ct.programs=de.programs,A.capabilities=ut,A.extensions=We,A.properties=Be,A.renderLists=fe,A.shadowMap=Ve,A.state=je,A.info=Ct}G();const Me=new A1(A,k);this.xr=Me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ce,ue,!1))},this.getSize=function(R){return R.set(ce,ue)},this.setSize=function(R,q,te=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,ue=q,t.width=Math.floor(R*z),t.height=Math.floor(q*z),te===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ce*z,ue*z).floor()},this.setDrawingBufferSize=function(R,q,te){ce=R,ue=q,z=te,t.width=Math.floor(R*te),t.height=Math.floor(q*te),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,q,te,ie){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,q,te,ie),je.viewport(O.copy(F).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,q,te,ie){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,q,te,ie),je.scissor(ae.copy(Z).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){je.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,te=!0){let ie=0;if(R){let W=!1;if(X!==null){const Ee=X.texture.format;W=Ee===Ed||Ee===Md||Ee===Sd}if(W){const Ee=X.texture.type,Ne=Ee===wi||Ee===is||Ee===Ka||Ee===Za||Ee===xd||Ee===yd,He=Qe.getClearColor(),Fe=Qe.getClearAlpha(),it=He.r,st=He.g,Je=He.b;Ne?(T[0]=it,T[1]=st,T[2]=Je,T[3]=Fe,k.clearBufferuiv(k.COLOR,0,T)):(E[0]=it,E[1]=st,E[2]=Je,E[3]=Fe,k.clearBufferiv(k.COLOR,0,E))}else ie|=k.COLOR_BUFFER_BIT}q&&(ie|=k.DEPTH_BUFFER_BIT),te&&(ie|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Qe.dispose(),fe.dispose(),Ze.dispose(),Be.dispose(),Ot.dispose(),It.dispose(),$.dispose(),Pe.dispose(),ft.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fn),Me.removeEventListener("sessionend",as),Un.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const R=Ct.autoReset,q=Ve.enabled,te=Ve.autoUpdate,ie=Ve.needsUpdate,W=Ve.type;G(),Ct.autoReset=R,Ve.enabled=q,Ve.autoUpdate=te,Ve.needsUpdate=ie,Ve.type=W}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const q=R.target;q.removeEventListener("dispose",pe),Xe(q)}function Xe(R){ct(R),Be.remove(R)}function ct(R){const q=Be.get(R).programs;q!==void 0&&(q.forEach(function(te){de.releaseProgram(te)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,te,ie,W,Ee){q===null&&(q=$e);const Ne=W.isMesh&&W.matrixWorld.determinant()<0,He=Ai(R,q,te,ie,W);je.setMaterial(ie,Ne);let Fe=te.index,it=1;if(ie.wireframe===!0){if(Fe=w.getWireframeAttribute(te),Fe===void 0)return;it=2}const st=te.drawRange,Je=te.attributes.position;let ot=st.start*it,bt=(st.start+st.count)*it;Ee!==null&&(ot=Math.max(ot,Ee.start*it),bt=Math.min(bt,(Ee.start+Ee.count)*it)),Fe!==null?(ot=Math.max(ot,0),bt=Math.min(bt,Fe.count)):Je!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,Je.count));const Mt=bt-ot;if(Mt<0||Mt===1/0)return;Pe.setup(W,ie,He,te,Fe);let Ut,Nt=De;if(Fe!==null&&(Ut=L.get(Fe),Nt=rt,Nt.setIndex(Ut)),W.isMesh)ie.wireframe===!0?(je.setLineWidth(ie.wireframeLinewidth*dt()),Nt.setMode(k.LINES)):Nt.setMode(k.TRIANGLES);else if(W.isLine){let et=ie.linewidth;et===void 0&&(et=1),je.setLineWidth(et*dt()),W.isLineSegments?Nt.setMode(k.LINES):W.isLineLoop?Nt.setMode(k.LINE_LOOP):Nt.setMode(k.LINE_STRIP)}else W.isPoints?Nt.setMode(k.POINTS):W.isSprite&&Nt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const et=W._multiDrawStarts,Lt=W._multiDrawCounts,vt=W._multiDrawCount,Qt=Fe?L.get(Fe).bytesPerElement:1,ni=Be.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<vt;Sn++)ni.setValue(k,"_gl_DrawID",Sn),Nt.render(et[Sn]/Qt,Lt[Sn])}else if(W.isInstancedMesh)Nt.renderInstances(ot,Mt,W.count);else if(te.isInstancedBufferGeometry){const et=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Lt=Math.min(te.instanceCount,et);Nt.renderInstances(ot,Mt,Lt)}else Nt.render(ot,Mt)};function Pt(R,q,te){R.transparent===!0&&R.side===yi&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,ls(R,q,te),R.side=Ar,R.needsUpdate=!0,ls(R,q,te),R.side=yi):ls(R,q,te)}this.compile=function(R,q,te=null){te===null&&(te=R),g=Ze.get(te),g.init(q),P.push(g),te.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==te&&R.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ie=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){const He=Ee[Ne];Pt(He,te,W),ie.add(He)}else Pt(Ee,te,W),ie.add(Ee)}),g=P.pop(),ie},this.compileAsync=function(R,q,te=null){const ie=this.compile(R,q,te);return new Promise(W=>{function Ee(){if(ie.forEach(function(Ne){Be.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){W(R);return}setTimeout(Ee,10)}We.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function jn(R){St&&St(R)}function fn(){Un.stop()}function as(){Un.start()}const Un=new dv;Un.setAnimationLoop(jn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(R){St=R,Me.setAnimationLoop(R),R===null?Un.stop():Un.start()},Me.addEventListener("sessionstart",fn),Me.addEventListener("sessionend",as),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,q,X),g=Ze.get(R,P.length),g.init(q),P.push(g),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ke.setFromProjectionMatrix(me,Mi,q.reversedDepth),ge=this.localClippingEnabled,Q=Ae.init(this.clippingPlanes,ge),v=fe.get(R,I.length),v.init(),I.push(v),Me.enabled===!0&&Me.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&aa(Ee,q,-1/0,A.sortObjects)}aa(R,q,0,A.sortObjects),v.finish(),A.sortObjects===!0&&v.sort(oe,re),Rt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Rt&&Qe.addToRenderList(v,R),this.info.render.frame++,Q===!0&&Ae.beginShadows();const te=g.state.shadowsArray;Ve.render(te,R,q),Q===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=v.opaque,W=v.transmissive;if(g.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(W.length>0)for(let Ne=0,He=Ee.length;Ne<He;Ne++){const Fe=Ee[Ne];Cr(ie,W,R,Fe)}Rt&&Qe.render(R);for(let Ne=0,He=Ee.length;Ne<He;Ne++){const Fe=Ee[Ne];Yi(v,R,Fe,Fe.viewport)}}else W.length>0&&Cr(ie,W,R,q),Rt&&Qe.render(R),Yi(v,R,q);X!==null&&H===0&&(at.updateMultisampleRenderTarget(X),at.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(A,R,q),Pe.resetDefaultState(),C=-1,b=null,P.pop(),P.length>0?(g=P[P.length-1],Q===!0&&Ae.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function aa(R,q,te,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){ie&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const Ne=$.update(R),He=R.material;He.visible&&v.push(R,Ne,He,te,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const Ne=$.update(R),He=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),be.copy(Ne.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(He)){const Fe=Ne.groups;for(let it=0,st=Fe.length;it<st;it++){const Je=Fe[it],ot=He[Je.materialIndex];ot&&ot.visible&&v.push(R,Ne,ot,te,be.z,Je)}}else He.visible&&v.push(R,Ne,He,te,be.z,null)}}const Ee=R.children;for(let Ne=0,He=Ee.length;Ne<He;Ne++)aa(Ee[Ne],q,te,ie)}function Yi(R,q,te,ie){const W=R.opaque,Ee=R.transmissive,Ne=R.transparent;g.setupLightsView(te),Q===!0&&Ae.setGlobalState(A.clippingPlanes,te),ie&&je.viewport(O.copy(ie)),W.length>0&&Ti(W,q,te),Ee.length>0&&Ti(Ee,q,te),Ne.length>0&&Ti(Ne,q,te),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Cr(R,q,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new rs(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?to:wi,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||O;Ee.setSize(Ne.z*A.transmissionResolutionScale,Ne.w*A.transmissionResolutionScale);const He=A.getRenderTarget(),Fe=A.getActiveCubeFace(),it=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(se),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&Qe.render(te);const st=A.toneMapping;A.toneMapping=Tr;const Je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),Q===!0&&Ae.setGlobalState(A.clippingPlanes,ie),Ti(R,te,ie),at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let bt=0,Mt=q.length;bt<Mt;bt++){const Ut=q[bt],Nt=Ut.object,et=Ut.geometry,Lt=Ut.material,vt=Ut.group;if(Lt.side===yi&&Nt.layers.test(ie.layers)){const Qt=Lt.side;Lt.side=Dn,Lt.needsUpdate=!0,os(Nt,te,ie,et,Lt,vt),Lt.side=Qt,Lt.needsUpdate=!0,ot=!0}}ot===!0&&(at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee))}A.setRenderTarget(He,Fe,it),A.setClearColor(se,le),Je!==void 0&&(ie.viewport=Je),A.toneMapping=st}function Ti(R,q,te){const ie=q.isScene===!0?q.overrideMaterial:null;for(let W=0,Ee=R.length;W<Ee;W++){const Ne=R[W],He=Ne.object,Fe=Ne.geometry,it=Ne.group;let st=Ne.material;st.allowOverride===!0&&ie!==null&&(st=ie),He.layers.test(te.layers)&&os(He,q,te,Fe,st,it)}}function os(R,q,te,ie,W,Ee){R.onBeforeRender(A,q,te,ie,W,Ee),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(A,q,te,ie,R,Ee),W.transparent===!0&&W.side===yi&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,A.renderBufferDirect(te,q,ie,W,R,Ee),W.side=Ar,W.needsUpdate=!0,A.renderBufferDirect(te,q,ie,W,R,Ee),W.side=yi):A.renderBufferDirect(te,q,ie,W,R,Ee),R.onAfterRender(A,q,te,ie,W,Ee)}function ls(R,q,te){q.isScene!==!0&&(q=$e);const ie=Be.get(R),W=g.state.lights,Ee=g.state.shadowsArray,Ne=W.state.version,He=de.getParameters(R,W.state,Ee,q,te),Fe=de.getProgramCacheKey(He);let it=ie.programs;ie.environment=R.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(R.isMeshStandardMaterial?It:Ot).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",pe),it=new Map,ie.programs=it);let st=it.get(Fe);if(st!==void 0){if(ie.currentProgram===st&&ie.lightsStateVersion===Ne)return oo(R,He),st}else He.uniforms=de.getUniforms(R),R.onBeforeCompile(He,A),st=de.acquireProgram(He,Fe),it.set(Fe,st),ie.uniforms=He.uniforms;const Je=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=Ae.uniform),oo(R,He),ie.needsLights=co(R),ie.lightsStateVersion=Ne,ie.needsLights&&(Je.ambientLightColor.value=W.state.ambient,Je.lightProbe.value=W.state.probe,Je.directionalLights.value=W.state.directional,Je.directionalLightShadows.value=W.state.directionalShadow,Je.spotLights.value=W.state.spot,Je.spotLightShadows.value=W.state.spotShadow,Je.rectAreaLights.value=W.state.rectArea,Je.ltc_1.value=W.state.rectAreaLTC1,Je.ltc_2.value=W.state.rectAreaLTC2,Je.pointLights.value=W.state.point,Je.pointLightShadows.value=W.state.pointShadow,Je.hemisphereLights.value=W.state.hemi,Je.directionalShadowMap.value=W.state.directionalShadowMap,Je.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Je.spotShadowMap.value=W.state.spotShadowMap,Je.spotLightMatrix.value=W.state.spotLightMatrix,Je.spotLightMap.value=W.state.spotLightMap,Je.pointShadowMap.value=W.state.pointShadowMap,Je.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=st,ie.uniformsList=null,st}function ao(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Vl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function oo(R,q){const te=Be.get(R);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function Ai(R,q,te,ie,W){q.isScene!==!0&&(q=$e),at.resetTextureUnits();const Ee=q.fog,Ne=ie.isMeshStandardMaterial?q.environment:null,He=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ea,Fe=(ie.isMeshStandardMaterial?It:Ot).get(ie.envMap||Ne),it=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,bt=!!te.morphAttributes.color;let Mt=Tr;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Mt=A.toneMapping);const Ut=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Nt=Ut!==void 0?Ut.length:0,et=Be.get(ie),Lt=g.state.lights;if(Q===!0&&(ge===!0||R!==b)){const qt=R===b&&ie.id===C;Ae.setState(ie,R,qt)}let vt=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==He||W.isBatchedMesh&&et.batching===!1||!W.isBatchedMesh&&et.batching===!0||W.isBatchedMesh&&et.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&et.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&et.instancing===!1||!W.isInstancedMesh&&et.instancing===!0||W.isSkinnedMesh&&et.skinning===!1||!W.isSkinnedMesh&&et.skinning===!0||W.isInstancedMesh&&et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&et.instancingMorph===!1&&W.morphTexture!==null||et.envMap!==Fe||ie.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==st||et.morphTargets!==Je||et.morphNormals!==ot||et.morphColors!==bt||et.toneMapping!==Mt||et.morphTargetsCount!==Nt)&&(vt=!0):(vt=!0,et.__version=ie.version);let Qt=et.currentProgram;vt===!0&&(Qt=ls(ie,q,W));let ni=!1,Sn=!1,br=!1;const Ft=Qt.getUniforms(),Mn=et.uniforms;if(je.useProgram(Qt.program)&&(ni=!0,Sn=!0,br=!0),ie.id!==C&&(C=ie.id,Sn=!0),ni||b!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(k,"projectionMatrix",R.projectionMatrix),Ft.setValue(k,"viewMatrix",R.matrixWorldInverse);const hn=Ft.map.cameraPosition;hn!==void 0&&hn.setValue(k,Ce.setFromMatrixPosition(R.matrixWorld)),ut.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Sn=!0,br=!0)}if(W.isSkinnedMesh){Ft.setOptional(k,W,"bindMatrix"),Ft.setOptional(k,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(k,"boneTexture",qt.boneTexture,at))}W.isBatchedMesh&&(Ft.setOptional(k,W,"batchingTexture"),Ft.setValue(k,"batchingTexture",W._matricesTexture,at),Ft.setOptional(k,W,"batchingIdTexture"),Ft.setValue(k,"batchingIdTexture",W._indirectTexture,at),Ft.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(k,"batchingColorTexture",W._colorsTexture,at));const dn=te.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&we.update(W,te,Qt),(Sn||et.receiveShadow!==W.receiveShadow)&&(et.receiveShadow=W.receiveShadow,Ft.setValue(k,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=Fe,Mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Sn&&(Ft.setValue(k,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&lo(Mn,br),Ee&&ie.fog===!0&&xe.refreshFogUniforms(Mn,Ee),xe.refreshMaterialUniforms(Mn,ie,z,ue,g.state.transmissionRenderTarget[R.id]),Vl.upload(k,ao(et),Mn,at)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Vl.upload(k,ao(et),Mn,at),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(k,"center",W.center),Ft.setValue(k,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(k,"normalMatrix",W.normalMatrix),Ft.setValue(k,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let hn=0,Pr=qt.length;hn<Pr;hn++){const _t=qt[hn];ft.update(_t,Qt),ft.bind(_t,Qt)}}return Qt}function lo(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function co(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,te){const ie=Be.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Be.get(R.texture).__webglTexture=q,Be.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:te,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const te=Be.get(R);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0};const tc=k.createFramebuffer();this.setRenderTarget=function(R,q=0,te=0){X=R,B=q,H=te;let ie=!0,W=null,Ee=!1,Ne=!1;if(R){const Fe=Be.get(R);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),ie=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Fe.__hasExternalTextures)at.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Fe.__boundDepthTexture!==Je){if(Je!==null&&Be.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ne=!0);const st=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[q])?W=st[q][te]:W=st[q],Ee=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?W=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?W=st[te]:W=st,O.copy(R.viewport),ae.copy(R.scissor),J=R.scissorTest}else O.copy(F).multiplyScalar(z).floor(),ae.copy(Z).multiplyScalar(z).floor(),J=Ie;if(te!==0&&(W=tc),je.bindFramebuffer(k.FRAMEBUFFER,W)&&ie&&je.drawBuffers(R,W),je.viewport(O),je.scissor(ae),je.setScissorTest(J),Ee){const Fe=Be.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,te)}else if(Ne){const Fe=q;for(let it=0;it<R.textures.length;it++){const st=Be.get(R.textures[it]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+it,st.__webglTexture,te,Fe)}}else if(R!==null&&te!==0){const Fe=Be.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fe.__webglTexture,te)}C=-1},this.readRenderTargetPixels=function(R,q,te,ie,W,Ee,Ne,He=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){je.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const it=R.textures[He],st=it.format,Je=it.type;if(!ut.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&te>=0&&te<=R.height-W&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(q,te,ie,W,Ye.convert(st),Ye.convert(Je),Ee))}finally{const it=X!==null?Be.get(X).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,q,te,ie,W,Ee,Ne,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(q>=0&&q<=R.width-ie&&te>=0&&te<=R.height-W){je.bindFramebuffer(k.FRAMEBUFFER,Fe);const it=R.textures[He],st=it.format,Je=it.type;if(!ut.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(q,te,ie,W,Ye.convert(st),Ye.convert(Je),0);const bt=X!==null?Be.get(X).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,bt);const Mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await cy(k,Mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(ot),k.deleteSync(Mt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,te=0){const ie=Math.pow(2,-te),W=Math.floor(R.image.width*ie),Ee=Math.floor(R.image.height*ie),Ne=q!==null?q.x:0,He=q!==null?q.y:0;at.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,Ne,He,W,Ee),je.unbindTexture()};const uo=k.createFramebuffer(),fo=k.createFramebuffer();this.copyTextureToTexture=function(R,q,te=null,ie=null,W=0,Ee=null){Ee===null&&(W!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=W,W=0):Ee=0);let Ne,He,Fe,it,st,Je,ot,bt,Mt;const Ut=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(te!==null)Ne=te.max.x-te.min.x,He=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,st=te.min.y,Je=te.isBox3?te.min.z:0;else{const dn=Math.pow(2,-W);Ne=Math.floor(Ut.width*dn),He=Math.floor(Ut.height*dn),R.isDataArrayTexture?Fe=Ut.depth:R.isData3DTexture?Fe=Math.floor(Ut.depth*dn):Fe=1,it=0,st=0,Je=0}ie!==null?(ot=ie.x,bt=ie.y,Mt=ie.z):(ot=0,bt=0,Mt=0);const Nt=Ye.convert(q.format),et=Ye.convert(q.type);let Lt;q.isData3DTexture?(at.setTexture3D(q,0),Lt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),Lt=k.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),Qt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ni=k.getParameter(k.UNPACK_SKIP_PIXELS),Sn=k.getParameter(k.UNPACK_SKIP_ROWS),br=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const Ft=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const dn=Be.get(R),qt=Be.get(q),hn=Be.get(dn.__renderTarget),Pr=Be.get(qt.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,hn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let _t=0;_t<Fe;_t++)Ft&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.get(R).__webglTexture,W,Je+_t),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.get(q).__webglTexture,Ee,Mt+_t)),k.blitFramebuffer(it,st,Ne,He,ot,bt,Ne,He,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Be.has(R)){const dn=Be.get(R),qt=Be.get(q);je.bindFramebuffer(k.READ_FRAMEBUFFER,uo),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,fo);for(let hn=0;hn<Fe;hn++)Ft?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dn.__webglTexture,W,Je+hn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dn.__webglTexture,W),Mn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,Ee,Mt+hn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,Ee),W!==0?k.blitFramebuffer(it,st,Ne,He,ot,bt,Ne,He,k.COLOR_BUFFER_BIT,k.NEAREST):Mn?k.copyTexSubImage3D(Lt,Ee,ot,bt,Mt+hn,it,st,Ne,He):k.copyTexSubImage2D(Lt,Ee,ot,bt,it,st,Ne,He);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Lt,Ee,ot,bt,Mt,Ne,He,Fe,Nt,et,Ut.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,Ee,ot,bt,Mt,Ne,He,Fe,Nt,Ut.data):k.texSubImage3D(Lt,Ee,ot,bt,Mt,Ne,He,Fe,Nt,et,Ut):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,ot,bt,Ne,He,Nt,et,Ut.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,ot,bt,Ut.width,Ut.height,Nt,Ut.data):k.texSubImage2D(k.TEXTURE_2D,Ee,ot,bt,Ne,He,Nt,et,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ni),k.pixelStorei(k.UNPACK_SKIP_ROWS,Sn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,br),Ee===0&&q.generateMipmaps&&k.generateMipmap(Lt),je.unbindTexture()},this.copyTextureToTexture3D=function(R,q,te=null,ie=null,W=0){return $s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,te,ie,W)},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){B=0,H=0,X=null,je.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function N1({ballPositions:s,onBallSelect:e,selectedBall:t,currentTurn:r}){const o=he.useRef(null),l=he.useRef(null),u=he.useRef(null),f=he.useRef(null),h=he.useRef({}),[p,x]=he.useState(null),[_,y]=he.useState(!1),S=he.useCallback(()=>{if(!s||!l.current)return;Object.values(h.current).forEach(A=>{l.current.remove(A)}),h.current={};const E=new Pd(8,32,32),v=new uf({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.95}),g=new $t(E,v);g.position.set(s.center_ball.x,s.center_ball.y,8),g.castShadow=!0,g.receiveShadow=!0,g.userData={id:"center",type:"center"},l.current.add(g),h.current.center=g;const I=new uf({color:16724787,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:2228224,transparent:!0,opacity:.95});s.player1_balls.forEach(A=>{if(A.active){const D=new $t(E,I);D.position.set(A.x,A.y,8),D.castShadow=!0,D.receiveShadow=!0,D.userData={id:A.id,type:"player1",isPlayer1:!0},l.current.add(D),h.current[A.id]=D}});const P=new uf({color:3355647,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:34,transparent:!0,opacity:.95});s.player2_balls.forEach(A=>{if(A.active){const D=new $t(E,P);D.position.set(A.x,A.y,8),D.castShadow=!0,D.receiveShadow=!0,D.userData={id:A.id,type:"player2",isPlayer1:!1},l.current.add(D),h.current[`p2_${A.id}`]=D}})},[s]);he.useCallback(()=>{const E=r;return Object.values(h.current).filter(v=>E===1?v.userData.type==="player1":v.userData.type==="player2")},[r]),he.useCallback(E=>{if(!E)return!1;const v=r;if(!(v===1&&E.userData.type==="player1"||v===2&&E.userData.type==="player2"))return!1;const I=E.position.y;return v===1?I>=200:I<=-200},[r]),he.useEffect(()=>{const E=o.current;if(!E)return;const v=new Iy;v.background=new mt(526346);const g=window.matchMedia&&window.matchMedia("(max-width: 640px)").matches,I=g?500:450,P=g?85:75,A=new Hn(P,E.clientWidth/E.clientHeight,.1,2e3);A.position.set(0,0,I);const D=new P1({antialias:!0,alpha:!0}),B=Math.min(window.devicePixelRatio||1,2);D.setPixelRatio(B),D.setSize(E.clientWidth,E.clientHeight),D.shadowMap.enabled=!0,D.shadowMap.type=Gg,D.physicallyCorrectLights=!0,D.toneMapping=Wg,D.toneMappingExposure=1.2,E.appendChild(D.domElement);const H=new jy(16777215,.5);v.add(H);const X=new Gy(16777215,1.5,1e3,Math.PI/4,.5,2);X.position.set(0,0,500),X.castShadow=!0,X.shadow.mapSize.width=1024,X.shadow.mapSize.height=1024,v.add(X),l.current=v,u.current=D,f.current=A;const C=new ji(420,620,20),b=new qm({color:1710618,transparent:!0,opacity:.9}),O=new $t(C,b);O.position.z=-10,O.receiveShadow=!0,v.add(O);const ae=new so(400,600),J=new qm({color:678933,transparent:!0,opacity:.95}),se=new $t(ae,J);se.receiveShadow=!0,v.add(se);const le=new ff({color:5056015,shininess:30}),ce=new ji(440,20,25),ue=new $t(ce,le);ue.position.set(0,310,12),ue.castShadow=!0,v.add(ue);const z=new $t(ce,le);z.position.set(0,-310,12),z.castShadow=!0,v.add(z);const oe=new ji(20,600,25),re=new $t(oe,le);re.position.set(-210,0,12),re.castShadow=!0,v.add(re);const F=new $t(oe,le);F.position.set(210,0,12),F.castShadow=!0,v.add(F);const Z=new ff({color:16729156,transparent:!0,opacity:.7,emissive:2228224}),Ie=new ji(400,5,15),ke=new $t(Ie,Z);ke.position.set(0,200,8),v.add(ke);const Q=new ff({color:4474111,transparent:!0,opacity:.7,emissive:34}),ge=new $t(Ie,Q);ge.position.set(0,-200,8),v.add(ge);const me=new bd(48,52,64),Ce=new Rd({color:65535,side:yi,transparent:!0,opacity:.8}),be=new $t(me,Ce);be.position.z=1,v.add(be),S();const $e=new qy,Rt=new yt,dt=We=>{const ut=D.domElement.getBoundingClientRect();Rt.x=(We.clientX-ut.left)/ut.width*2-1,Rt.y=-((We.clientY-ut.top)/ut.height)*2+1,$e.setFromCamera(Rt,A);const je=$e.intersectObjects(Object.values(h.current));if(je.length>0){const Ct=je[0].object,Be=Ct.userData.id,at=Ct.userData.isPlayer1===!0;if(e){const It=(at?s.player1_balls:s.player2_balls).find(L=>L.id===Be);e(It,at)}}};D.domElement.addEventListener("click",dt),D.domElement.addEventListener("touchstart",We=>{const ut=We.touches&&We.touches[0];ut&&dt(ut)},{passive:!0}),D.domElement.style.touchAction="manipulation";const k=()=>{requestAnimationFrame(k),D.render(v,A)};k();const Et=()=>{if(E&&D&&A){const We=E.clientWidth,ut=E.clientHeight;A.aspect=We/ut,A.updateProjectionMatrix();const je=Math.min(window.devicePixelRatio||1,2);D.setPixelRatio(je),D.setSize(We,ut)}};return window.addEventListener("resize",Et),()=>{window.removeEventListener("resize",Et),D.domElement.removeEventListener("click",dt),D.domElement.removeEventListener("touchstart",dt),E&&D.domElement&&E.removeChild(D.domElement)}},[s,S,r,e]),he.useEffect(()=>{s&&h.current&&Object.values(h.current).forEach(E=>{let v;E.userData.type==="center"?v=s.center_ball:E.userData.type==="player1"?v=s.player1_balls.find(g=>g.id===E.userData.id):E.userData.type==="player2"&&(v=s.player2_balls.find(g=>g.id===E.userData.id)),v&&(E.position.set(v.x,v.y,8),E.visible=v.active)})},[s]);const T=()=>{if(!s)return null;const E=s.center_ball,v=s.player1_balls||[],g=s.player2_balls||[];return N.jsx("div",{className:"absolute inset-0 pointer-events-none",children:N.jsxs("svg",{viewBox:"-200 -300 400 600",preserveAspectRatio:"xMidYMid meet",className:"w-full h-full",children:[N.jsx("rect",{x:"-200",y:"-300",width:"400",height:"600",fill:"rgba(10,92,21,0.06)",stroke:"rgba(255,255,255,0.03)"}),N.jsx("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#00ffff",strokeOpacity:"0.2"}),E&&N.jsx("circle",{cx:E.x,cy:E.y,r:"8",fill:"#ffffff",stroke:"#ddd",strokeWidth:"0.5",pointerEvents:"auto",onClick:()=>e&&e(E,!1)}),v.map(I=>N.jsx("g",{children:N.jsx("circle",{cx:I.x,cy:I.y,r:"8",fill:"#ff3333",pointerEvents:"auto",onClick:()=>e&&e(I,!0)})},`p1-${I.id}`)),g.map(I=>N.jsx("g",{children:N.jsx("circle",{cx:I.x,cy:I.y,r:"8",fill:"#3333ff",pointerEvents:"auto",onClick:()=>e&&e(I,!1)})},`p2-${I.id}`))]})})};return N.jsxs("div",{className:"w-full h-full rounded-lg overflow-hidden relative",children:[N.jsx("div",{ref:o,className:"w-full h-full"}),T()]})}function L1({game:s,gameMessage:e}){if(!s)return null;const{player1_name:t,player2_name:r,player1_score:o,player2_score:l,target_score:u,current_turn:f,round_number:h}=s,p=f===1;return N.jsxs("div",{className:"space-y-4 h-full",children:[N.jsx("div",{className:"glass-panel rounded-2xl p-4",children:N.jsxs("div",{className:"text-center",children:[N.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${p?"bg-cyan-400/20 shadow-lg":""}`,children:[N.jsx("p",{className:"text-lg font-bold text-white",children:t}),N.jsx("p",{className:"text-3xl font-bold text-cyan-400",children:o})]}),N.jsxs("div",{className:"text-center",children:[N.jsxs("p",{className:"text-sm text-slate-400",children:["Round ",h||1]}),N.jsx($a,{className:"w-8 h-8 text-yellow-400 mx-auto"}),N.jsxs("p",{className:"text-sm text-slate-400",children:["Target: ",u]})]}),N.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${p?"":"bg-purple-400/20 shadow-lg"}`,children:[N.jsx("p",{className:"text-lg font-bold text-white",children:r}),N.jsx("p",{className:"text-3xl font-bold text-purple-400",children:l})]})]})}),N.jsx("div",{className:"text-center bg-slate-900/50 rounded-lg p-3 mt-4",children:N.jsx("p",{className:"text-white font-semibold animate-pulse",children:e})}),N.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[N.jsx(Vi,{className:"p-0 mb-4",children:N.jsxs(Hi,{className:"flex items-center gap-2 text-white",children:[N.jsx($a,{className:"w-5 h-5 text-yellow-400"}),"Score"]})}),N.jsxs(Gi,{className:"p-0 space-y-4",children:[N.jsx("div",{className:`glass-panel rounded-xl p-3 ${f===1?"border-red-400/50":""}`,children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("div",{className:"w-4 h-4 rounded-full bg-red-400"}),N.jsx("span",{className:"text-white font-medium",children:t})]}),N.jsx("div",{className:"text-2xl font-bold text-red-400",children:o})]})}),N.jsx("div",{className:`glass-panel rounded-xl p-3 ${f===2?"border-blue-400/50":""}`,children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("div",{className:"w-4 h-4 rounded-full bg-blue-400"}),N.jsx("span",{className:"text-white font-medium",children:r})]}),N.jsx("div",{className:"text-2xl font-bold text-blue-400",children:l})]})}),N.jsx("div",{className:"text-center pt-2 border-t border-white/10",children:N.jsxs(yr,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:[N.jsx(Ya,{className:"w-3 h-3 mr-1"}),"First to ",u]})})]})]}),N.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[N.jsx(Vi,{className:"p-0 mb-2",children:N.jsxs(Hi,{className:"flex items-center gap-2 text-white text-lg",children:[N.jsx(gx,{className:"w-5 h-5 text-gray-300"}),"Current Ball"]})}),N.jsx(Gi,{className:"p-0",children:N.jsxs("div",{className:"flex items-center justify-center gap-2",children:[N.jsx("div",{className:`w-8 h-8 rounded-full ${f===1?"bg-red-500":"bg-blue-500"} border-2 border-white/50 shadow-lg`}),N.jsx("span",{className:"text-gray-300 text-sm",children:"Ready to play"})]})})]}),N.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[N.jsx(Vi,{className:"p-0 mb-4",children:N.jsx(Hi,{className:"text-white text-lg",children:"CenterBall Rules"})}),N.jsx(Gi,{className:"p-0 space-y-3",children:N.jsxs("div",{className:"text-xs text-gray-300 space-y-2",children:[N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{children:"Touch center + both in ring"}),N.jsx(yr,{className:"bg-green-400/20 text-green-400 border-green-400/30",children:"3 pts"})]}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{children:"In ring, not touching center"}),N.jsx(yr,{className:"bg-yellow-400/20 text-yellow-400 border-yellow-400/30",children:"2 pts"})]}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{children:"Closest outside ring"}),N.jsx(yr,{className:"bg-blue-400/20 text-blue-400 border-blue-400/30",children:"1 pt"})]})]})})]}),N.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[N.jsx(Vi,{className:"p-0 mb-4",children:N.jsx(Hi,{className:"text-white text-lg",children:"Arena Rules"})}),N.jsxs(Gi,{className:"p-0 space-y-2 text-xs text-gray-300",children:[N.jsx("p",{children:"• Balls must stay behind start barriers"}),N.jsx("p",{children:"• Once past barrier, balls are in play"}),N.jsx("p",{children:"• In-play balls can only be moved by collisions"}),N.jsx("p",{children:"• All balls reset after each round"})]})]}),N.jsx("div",{className:"glass-panel rounded-2xl p-4",children:N.jsxs("div",{className:"space-y-2 text-sm",children:[N.jsxs("div",{className:"flex justify-between",children:[N.jsx("span",{className:"text-gray-300",children:"Round:"}),N.jsx("span",{className:"text-white font-medium",children:h||1})]}),N.jsxs("div",{className:"flex justify-between",children:[N.jsx("span",{className:"text-gray-300",children:"Mode:"}),N.jsx(yr,{variant:"outline",className:`border-gray-400/30 text-xs ${u===21?"text-green-400":"text-red-400"}`,children:u===21?"Beginner":"Veteran"})]})]})})]})}const Hl=he.forwardRef(({className:s,value:e=[0],onValueChange:t,max:r=100,min:o=0,step:l=1,...u},f)=>{const h=p=>{const x=[parseFloat(p.target.value)];t&&t(x)};return N.jsx("input",{ref:f,type:"range",value:e[0],onChange:h,min:o,max:r,step:l,className:Wn("w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",s),...u})});Hl.displayName="Slider";function D1({game:s,selectedBall:e,onAimChange:t,onShoot:r,onCancel:o}){const[l,u]=he.useState([0]),[f,h]=he.useState([50]);he.useEffect(()=>{t&&t({angle:l[0],power:f[0]})},[l,f,t]);const p=()=>s?.current_turn===1,x=()=>!e||!s?!1:p()===e.isPlayer1,_=()=>{u([0]),h([50]),o&&o()},y=()=>{r&&r({angle:l[0],power:f[0]})};return N.jsxs("div",{className:"space-y-3 h-full text-sm",children:[N.jsxs("div",{className:"glass-panel rounded-2xl p-3 mobile-hit",children:[N.jsx(Vi,{className:"p-0 mb-4",children:N.jsxs(Hi,{className:"flex items-center gap-2 text-white",children:[N.jsx(Ya,{className:"w-5 h-5 text-cyan-400"}),"Ball Control"]})}),N.jsx(Gi,{className:"p-0",children:e?N.jsxs("div",{className:"space-y-3",children:[N.jsxs("div",{className:"flex items-center justify-between mb-2",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(Mm,{className:"w-5 h-5 text-cyan-400"}),N.jsx("span",{className:"text-gray-300",children:"Angle"})]}),N.jsxs("span",{className:"text-white font-medium",children:[l[0],"\v0"]})]}),N.jsx("div",{className:"touch-slider",children:N.jsx(Hl,{value:l,onValueChange:u,max:360,min:0,step:5,className:"glass-slider"})}),!x()&&N.jsx("div",{className:"glass-panel bg-red-400/10 border-red-400/30 rounded-lg p-2",children:N.jsx("p",{className:"text-red-400 text-sm text-center",children:"Not your turn!"})})]}):N.jsxs("div",{className:"text-center py-6",children:[N.jsx(Ya,{className:"w-8 h-8 text-gray-400 mx-auto mb-2 opacity-50"}),N.jsx("p",{className:"text-gray-400 text-sm",children:"Select a ball to control"})]})})]}),e&&x()&&N.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[N.jsx(Vi,{className:"p-0 mb-4",children:N.jsxs(Hi,{className:"flex items-center gap-2 text-white",children:[N.jsx(vx,{className:"w-5 h-5 text-magenta-400"}),"Aim & Shoot"]})}),N.jsxs(Gi,{className:"p-0 space-y-6",children:[N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center justify-between mb-3",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(Mm,{className:"w-4 h-4 text-cyan-400"}),N.jsx("span",{className:"text-gray-300 text-sm",children:"Angle"})]}),N.jsxs("span",{className:"text-white font-medium",children:[l[0],"°"]})]}),N.jsx(Hl,{value:l,onValueChange:u,max:360,min:0,step:5,className:"glass-slider"})]}),N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center justify-between mb-3",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(wf,{className:"w-4 h-4 text-yellow-400"}),N.jsx("span",{className:"text-gray-300 text-sm",children:"Power"})]}),N.jsxs("span",{className:"text-white font-medium",children:[f[0],"%"]})]}),N.jsx(Hl,{value:f,onValueChange:h,max:100,min:10,className:"glass-slider"})]}),N.jsxs("div",{className:"flex gap-2",children:[N.jsxs(Er,{onClick:_,variant:"outline",className:"w-1/2 mobile-hit",children:[N.jsx(Bg,{className:"w-5 h-5 mr-2"}),"Cancel"]}),N.jsxs(Er,{onClick:y,className:"w-1/2 mobile-hit bg-green-500 hover:bg-green-600",children:[N.jsx(wf,{className:"w-5 h-5 mr-2"}),"Shoot"]})]})]})]})]})}function I1(){const s=gd(),[e]=ix(),[t,r]=he.useState(null),[o,l]=he.useState(!0),[u,f]=he.useState(null),[h,p]=he.useState({angle:0,power:50}),[x,_]=he.useState(!1),[y,S]=he.useState(""),T=he.useCallback(async P=>{l(!0);try{const A=await js.get(P);if(r(A),A.game_status==="setup")S(`${A.player1_name} goes first!`),await js.update(P,{game_status:"playing"}),r(D=>({...D,game_status:"playing"}));else if(A.game_status==="playing"){const D=A.current_turn===1?A.player1_name:A.player2_name;S(`${D}'s turn`)}}catch(A){console.error("Error loading game:",A),s(Xs("Home"))}l(!1)},[s]);he.useEffect(()=>{const P=e.get("id");P?T(P):s(Xs("Home"))},[e,s,T]);const E=he.useCallback(P=>{if(!P)return{player1:0,player2:0};let A=0,D=0;const B=2.5,H=Math.sqrt(P.center_ball.x**2+P.center_ball.z**2)<=B,X=(J,se)=>J.filter(le=>le.active).map(le=>({...le,distance:Math.sqrt((le.x-P.center_ball.x)**2+(le.z-P.center_ball.z)**2),distanceFromCenter:Math.sqrt(le.x**2+le.z**2),player:se})),C=X(P.player1_balls,1),b=X(P.player2_balls,2),O=[...C,...b];O.forEach(J=>{J.distance<=.8&&J.distanceFromCenter<=B&&H&&(J.player===1?A+=3:D+=3)}),O.forEach(J=>{!(J.distance<=.8)&&J.distanceFromCenter<=B&&(J.player===1?A+=2:D+=2)});const ae=O.filter(J=>J.distanceFromCenter>B);return ae.length>0&&(ae.reduce((se,le)=>le.distance<se.distance?le:se).player===1?A+=1:D+=1),{player1:A,player2:D}},[]),v=he.useCallback(async({angle:P,power:A})=>{if(!t||!u)return;const D=P*Math.PI/180,B=A/100*15,H={x:Math.sin(D)*B,z:Math.cos(D)*B},X={x:u.x+H.x*.5,y:u.y,z:u.z+H.z*.5};_(!1),f(null);try{const C=JSON.parse(JSON.stringify(t.ball_positions)),O=u.isPlayer1?C.player1_balls:C.player2_balls,ae=O.findIndex(Z=>Z.id===u.id);ae!==-1&&(O[ae].x=X.x,O[ae].z=X.z,O[ae].active=!1);const J=t.current_turn===1?2:1,se=J===1?t.player1_name:t.player2_name,le=C.player1_balls.every(Z=>!Z.active),ce=C.player2_balls.every(Z=>!Z.active),ue=le&&ce,z=E(C),oe=z.player1>=t.target_score||z.player2>=t.target_score,re=oe?z.player1>=t.target_score?t.player1_name:t.player2_name:null;let F={ball_positions:C,player1_score:z.player1,player2_score:z.player2,current_turn:J,...oe&&{game_status:"finished",winner:re}};if(ue&&!oe&&(F.ball_positions={center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(Z,Ie)=>({x:0,y:.4,z:2.5+Ie*.3,active:!0,id:Ie+1})),player2_balls:Array.from({length:5},(Z,Ie)=>({x:0,y:.4,z:-2.5-Ie*.3,active:!0,id:Ie+1}))},F.round_number=(t.round_number||1)+1,F.current_turn=1),await js.update(t.id,F),r(Z=>({...Z,...F})),oe)S(`🎉 ${re} wins the game!`);else if(ue){const Z=F.current_turn===1?t.player1_name:t.player2_name;S(`Round complete! ${Z} starts round ${F.round_number}.`)}else S(`${se}'s turn`)}catch(C){console.error("Error updating game:",C)}},[t,u,E]),g=(P,A)=>{x||t.current_turn===(A?1:2)&&(f({...P,isPlayer1:A}),_(!0))},I=async()=>{if(!t)return;const P={player1_score:0,player2_score:0,current_turn:1,game_status:"playing",winner:null,round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(A,D)=>({x:0,y:.4,z:2.5+D*.3,active:!0,id:D+1})),player2_balls:Array.from({length:5},(A,D)=>({x:0,y:.4,z:-2.5-D*.3,active:!0,id:D+1}))}};try{await js.update(t.id,P),r(A=>({...A,...P})),S(`${t.player1_name} goes first!`)}catch(A){console.error("Error resetting game:",A)}};return o?N.jsx("div",{className:"min-h-screen flex items-center justify-center",children:N.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center",children:[N.jsx("div",{className:"w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"}),N.jsx("p",{className:"text-white text-lg",children:"Loading game..."})]})}):t?N.jsxs("div",{className:"min-h-screen flex flex-col p-3 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white safe-bottom",children:[N.jsxs("header",{className:"flex items-center justify-between mb-4 flex-wrap gap-4",children:[N.jsxs(Er,{onClick:()=>s(Xs("Home")),variant:"ghost",className:"text-slate-300 hover:text-white hover:bg-slate-700",children:[N.jsx(xm,{className:"w-5 h-5 mr-2"}),"Back to Lobby"]}),N.jsx("h1",{className:"text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent order-first sm:order-none w-full sm:w-auto",children:"CenterBall"}),N.jsxs(Er,{onClick:I,variant:"outline",className:"text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white",children:[N.jsx(Bg,{className:"w-4 h-4 mr-2"}),"Reset Game"]})]}),N.jsxs("div",{className:"flex-grow flex flex-col gap-4",children:[N.jsx("div",{className:"w-full glass-panel rounded-2xl overflow-hidden relative game-full-mobile",children:N.jsx(N1,{ballPositions:t.ball_positions,onBallSelect:g,selectedBall:u,currentTurn:t.current_turn})}),N.jsxs("div",{className:"w-full glass-panel rounded-2xl p-4 flex flex-col",children:[N.jsx(L1,{game:t}),N.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-700",children:[N.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:"Game Status"}),N.jsx("p",{className:"text-center text-cyan-300 font-medium h-12 flex items-center justify-center",children:y})]})]}),x&&u&&N.jsx("div",{className:"w-full fixed bottom-0 left-0 right-0 p-3 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 safe-bottom",children:N.jsx("div",{className:"max-w-3xl mx-auto",children:N.jsx(D1,{game:t,selectedBall:u,onAimChange:P=>p(P),onShoot:v,onCancel:()=>{_(!1),f(null)}})})})]})]}):N.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800",children:N.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center max-w-md mx-4",children:[N.jsx($a,{className:"w-16 h-16 text-yellow-400 mx-auto mb-4"}),N.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Game Not Found"}),N.jsx("p",{className:"text-slate-300 mb-6",children:"The game you're looking for doesn't exist or has been removed."}),N.jsxs(Er,{onClick:()=>s(Xs("Home")),className:"bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors",children:[N.jsx(xm,{className:"w-4 h-4 mr-2"}),"Back to Home"]})]})})}function U1(){return N.jsx(nx,{children:N.jsxs(Q0,{children:[N.jsx(yf,{path:"/",element:N.jsx(Sx,{})}),N.jsx(yf,{path:"/game",element:N.jsx(I1,{})})]})})}function F1(){if(typeof window>"u")return;let s=document.getElementById("global-error-overlay");s||(s=document.createElement("div"),s.id="global-error-overlay",Object.assign(s.style,{position:"fixed",left:"12px",right:"12px",top:"12px",padding:"12px",background:"rgba(20,20,20,0.95)",color:"white",fontFamily:"monospace",fontSize:"12px",zIndex:999999,whiteSpace:"pre-wrap",borderRadius:"8px",display:"none",maxHeight:"60vh",overflow:"auto"}),document.body.appendChild(s));const e=t=>{s.style.display="block",s.textContent=t};window.addEventListener("error",t=>{try{const r=t.error||t;e(`${r&&r.stack?r.stack:String(r)}`),console.error(r)}catch(r){console.error("Error while displaying overlay",r)}}),window.addEventListener("unhandledrejection",t=>{try{const r=t.reason||t;e(`${r&&r.stack?r.stack:String(r)}`),console.error("Unhandled Rejection:",r)}catch(r){console.error("Error while displaying rejection",r)}})}F1();a0.createRoot(document.getElementById("root")).render(N.jsx(wg.StrictMode,{children:N.jsx(U1,{})}));
