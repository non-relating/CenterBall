function z_(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function vg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cu={exports:{}},Oa={},bu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function H_(){if(Yp)return mt;Yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function _(U,Z,Ie){this.props=U,this.context=Z,this.refs=w,this.updater=Ie||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=_.prototype;function I(U,Z,Ie){this.props=U,this.context=Z,this.refs=w,this.updater=Ie||S}var P=I.prototype=new g;P.constructor=I,E(P,_.prototype),P.isPureReactComponent=!0;var A=Array.isArray,O=Object.prototype.hasOwnProperty,k={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function q(U,Z,Ie){var Be,J={},me=null,he=null;if(Z!=null)for(Be in Z.ref!==void 0&&(he=Z.ref),Z.key!==void 0&&(me=""+Z.key),Z)O.call(Z,Be)&&!H.hasOwnProperty(Be)&&(J[Be]=Z[Be]);var Ce=arguments.length-2;if(Ce===1)J.children=Ie;else if(1<Ce){for(var be=Array(Ce),qe=0;qe<Ce;qe++)be[qe]=arguments[qe+2];J.children=be}if(U&&U.defaultProps)for(Be in Ce=U.defaultProps,Ce)J[Be]===void 0&&(J[Be]=Ce[Be]);return{$$typeof:s,type:U,key:me,ref:he,props:J,_owner:k.current}}function b(U,Z){return{$$typeof:s,type:U.type,key:Z,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return Z[Ie]})}var ae=/\/+/g;function Q(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):Z.toString(36)}function se(U,Z,Ie,Be,J){var me=typeof U;(me==="undefined"||me==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(me){case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case s:case e:he=!0}}if(he)return he=U,J=J(he),U=Be===""?"."+Q(he,0):Be,A(J)?(Ie="",U!=null&&(Ie=U.replace(ae,"$&/")+"/"),se(J,Z,Ie,"",function(qe){return qe})):J!=null&&(C(J)&&(J=b(J,Ie+(!J.key||he&&he.key===J.key?"":(""+J.key).replace(ae,"$&/")+"/")+U)),Z.push(J)),1;if(he=0,Be=Be===""?".":Be+":",A(U))for(var Ce=0;Ce<U.length;Ce++){me=U[Ce];var be=Be+Q(me,Ce);he+=se(me,Z,Ie,be,J)}else if(be=y(U),typeof be=="function")for(U=be.call(U),Ce=0;!(me=U.next()).done;)me=me.value,be=Be+Q(me,Ce++),he+=se(me,Z,Ie,be,J);else if(me==="object")throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return he}function le(U,Z,Ie){if(U==null)return U;var Be=[],J=0;return se(U,Be,"","",function(me){return Z.call(Ie,me,J++)}),Be}function ce(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var fe={current:null},V={transition:null},oe={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:le,forEach:function(U,Z,Ie){le(U,function(){Z.apply(this,arguments)},Ie)},count:function(U){var Z=0;return le(U,function(){Z++}),Z},toArray:function(U){return le(U,function(Z){return Z})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=_,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,mt.act=re,mt.cloneElement=function(U,Z,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Be=E({},U.props),J=U.key,me=U.ref,he=U._owner;if(Z!=null){if(Z.ref!==void 0&&(me=Z.ref,he=k.current),Z.key!==void 0&&(J=""+Z.key),U.type&&U.type.defaultProps)var Ce=U.type.defaultProps;for(be in Z)O.call(Z,be)&&!H.hasOwnProperty(be)&&(Be[be]=Z[be]===void 0&&Ce!==void 0?Ce[be]:Z[be])}var be=arguments.length-2;if(be===1)Be.children=Ie;else if(1<be){Ce=Array(be);for(var qe=0;qe<be;qe++)Ce[qe]=arguments[qe+2];Be.children=Ce}return{$$typeof:s,type:U.type,key:J,ref:me,props:Be,_owner:he}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},mt.createElement=q,mt.createFactory=function(U){var Z=q.bind(null,U);return Z.type=U,Z},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:f,render:U}},mt.isValidElement=C,mt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:ce}},mt.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},mt.startTransition=function(U){var Z=V.transition;V.transition={};try{U()}finally{V.transition=Z}},mt.unstable_act=re,mt.useCallback=function(U,Z){return fe.current.useCallback(U,Z)},mt.useContext=function(U){return fe.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return fe.current.useDeferredValue(U)},mt.useEffect=function(U,Z){return fe.current.useEffect(U,Z)},mt.useId=function(){return fe.current.useId()},mt.useImperativeHandle=function(U,Z,Ie){return fe.current.useImperativeHandle(U,Z,Ie)},mt.useInsertionEffect=function(U,Z){return fe.current.useInsertionEffect(U,Z)},mt.useLayoutEffect=function(U,Z){return fe.current.useLayoutEffect(U,Z)},mt.useMemo=function(U,Z){return fe.current.useMemo(U,Z)},mt.useReducer=function(U,Z,Ie){return fe.current.useReducer(U,Z,Ie)},mt.useRef=function(U){return fe.current.useRef(U)},mt.useState=function(U){return fe.current.useState(U)},mt.useSyncExternalStore=function(U,Z,Ie){return fe.current.useSyncExternalStore(U,Z,Ie)},mt.useTransition=function(){return fe.current.useTransition()},mt.version="18.3.1",mt}var $p;function od(){return $p||($p=1,bu.exports=H_()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function V_(){if(Kp)return Oa;Kp=1;var s=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var x,v={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(v[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)v[x]===void 0&&(v[x]=h[x]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=u,Oa.jsxs=u,Oa}var Zp;function G_(){return Zp||(Zp=1,Cu.exports=V_()),Cu.exports}var D=G_(),ye=od();const Wa=vg(ye),W_=z_({__proto__:null,default:Wa},[ye]);var fl={},Pu={exports:{}},Ln={},Lu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function j_(){return Qp||(Qp=1,(function(s){function e(V,oe){var re=V.length;V.push(oe);e:for(;0<re;){var U=re-1>>>1,Z=V[U];if(0<o(Z,oe))V[U]=oe,V[re]=Z,re=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var oe=V[0],re=V.pop();if(re!==oe){V[0]=re;e:for(var U=0,Z=V.length,Ie=Z>>>1;U<Ie;){var Be=2*(U+1)-1,J=V[Be],me=Be+1,he=V[me];if(0>o(J,re))me<Z&&0>o(he,J)?(V[U]=he,V[me]=re,U=me):(V[U]=J,V[Be]=re,U=Be);else if(me<Z&&0>o(he,re))V[U]=he,V[me]=re,U=me;else break e}}return oe}function o(V,oe){var re=V.sortIndex-oe.sortIndex;return re!==0?re:V.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],x=1,v=null,y=3,S=!1,E=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=V)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function A(V){if(w=!1,P(V),!E)if(t(h)!==null)E=!0,ce(O);else{var oe=t(p);oe!==null&&fe(A,oe.startTime-V)}}function O(V,oe){E=!1,w&&(w=!1,g(q),q=-1),S=!0;var re=y;try{for(P(oe),v=t(h);v!==null&&(!(v.expirationTime>oe)||V&&!F());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var Z=U(v.expirationTime<=oe);oe=s.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(h)&&r(h),P(oe)}else r(h);v=t(h)}if(v!==null)var Ie=!0;else{var Be=t(p);Be!==null&&fe(A,Be.startTime-oe),Ie=!1}return Ie}finally{v=null,y=re,S=!1}}var k=!1,H=null,q=-1,b=5,C=-1;function F(){return!(s.unstable_now()-C<b)}function ae(){if(H!==null){var V=s.unstable_now();C=V;var oe=!0;try{oe=H(!0,V)}finally{oe?Q():(k=!1,H=null)}}else k=!1}var Q;if(typeof I=="function")Q=function(){I(ae)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=ae,Q=function(){le.postMessage(null)}}else Q=function(){_(ae,0)};function ce(V){H=V,k||(k=!0,Q())}function fe(V,oe){q=_(function(){V(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ce(O))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var re=y;y=oe;try{return V()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,oe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=y;y=V;try{return oe()}finally{y=re}},s.unstable_scheduleCallback=function(V,oe,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,V){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=re+Z,V={id:x++,callback:oe,priorityLevel:V,startTime:re,expirationTime:Z,sortIndex:-1},re>U?(V.sortIndex=re,e(p,V),t(h)===null&&V===t(p)&&(w?(g(q),q=-1):w=!0,fe(A,re-U))):(V.sortIndex=Z,e(h,V),E||S||(E=!0,ce(O))),V},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(V){var oe=y;return function(){var re=y;y=oe;try{return V.apply(this,arguments)}finally{y=re}}}})(Nu)),Nu}var Jp;function X_(){return Jp||(Jp=1,Lu.exports=j_()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function q_(){if(em)return Ln;em=1;var s=od(),e=X_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return h.call(v,n)?!0:h.call(x,n)?!1:p.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,I);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,I);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,I);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),k=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),F=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),V=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function Z(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ie=!1;function Be(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=c.stack.split(`
`),M=d.length-1,N=m.length-1;1<=M&&0<=N&&d[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(d[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||d[M]!==m[N]){var z=`
`+d[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=N);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Z(n):""}function J(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case H:return"Fragment";case k:return"Portal";case b:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=qe(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Je(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ye(n,i){yt(n,i);var a=Ce(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ke(n,i.type,a):i.hasOwnProperty("defaultValue")&&ke(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ke(n,i,a){(i!=="number"||B(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ct=Array.isArray;function Ot(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Bt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function T(n,i){var a=Ce(i.value),c=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function we(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=we(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var rt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Re=null,Ue=null;function Se(n){if(n=Ma(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ao(i),Me(n.stateNode,n.type,i))}}function pe(n){Re?Ue?Ue.push(n):Ue=[n]:Re=n}function We(){if(Re){var n=Re,i=Ue;if(Ue=Re=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function lt(n,i){return n(i)}function Pt(){}var St=!1;function Wn(n,i,a){if(St)return n(i,a);St=!0;try{return lt(n,i,a)}finally{St=!1,(Re!==null||Ue!==null)&&(Pt(),We())}}function fn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ao(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var rs=!1;if(f)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{rs=!1}function sa(n,i,a,c,d,m,M,N,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(ve){this.onError(ve)}}var Wi=!1,Ar=null,wi=!1,ss=null,as={onError:function(n){Wi=!0,Ar=n}};function ro(n,i,a,c,d,m,M,N,z){Wi=!1,Ar=null,sa.apply(as,arguments)}function so(n,i,a,c,d,m,M,N,z){if(ro.apply(this,arguments),Wi){if(Wi){var ee=Ar;Wi=!1,Ar=null}else throw Error(t(198));wi||(wi=!0,ss=ee)}}function Ti(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ao(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oo(n){if(Ti(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return oo(d),n;if(m===c)return oo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var M=!1,N=d.child;N;){if(N===a){M=!0,a=d,c=m;break}if(N===c){M=!0,c=d,a=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===a){M=!0,a=m,c=d;break}if(N===c){M=!0,c=m,a=d;break}N=N.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function lo(n){return n=Zl(n),n!==null?co(n):null}function co(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=co(n);if(i!==null)return i;n=n.sibling}return null}var R=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,te=e.unstable_shouldYield,ie=e.unstable_requestPaint,W=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,it=e.unstable_LowPriority,st=e.unstable_IdlePriority,Qe=null,at=null;function Ct(n){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:et,It=Math.log,Lt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(It(n)/Lt|0)|0}var Nt=64,gt=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ei(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,M=a&268435455;if(M!==0){var N=M&~d;N!==0?c=Qt(N):(m&=M,m!==0&&(c=Qt(m)))}else M=a&~d,M!==0?c=Qt(M):m!==0&&(c=Qt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Mt(i),d=1<<a,c|=n[a],i&=~d;return c}function Sn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Mt(m),N=1<<M,z=d[M];z===-1?((N&a)===0||(N&c)!==0)&&(d[M]=Sn(N,i)):z<=i&&(n.expiredLanes|=N),m&=~N}}function Ut(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mn(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function dn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=a}function hn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Mt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Cr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Mt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var vt=0;function Ad(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rd,Ql,Cd,bd,Pd,Jl=!1,uo=[],ji=null,Xi=null,qi=null,aa=new Map,oa=new Map,Yi=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(n,i){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ma(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function cv(n,i,a,c,d){switch(i){case"focusin":return ji=la(ji,n,i,a,c,d),!0;case"dragenter":return Xi=la(Xi,n,i,a,c,d),!0;case"mouseover":return qi=la(qi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return aa.set(m,la(aa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,oa.set(m,la(oa.get(m)||null,n,i,a,c,d)),!0}return!1}function Nd(n){var i=br(n.target);if(i!==null){var a=Ti(i);if(a!==null){if(i=a.tag,i===13){if(i=ao(a),i!==null){n.blockedOn=i,Pd(n.priority,function(){Cd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ut=c,a.target.dispatchEvent(c),ut=null}else return i=Ma(a),i!==null&&Ql(i),n.blockedOn=a,!1;i.shift()}return!0}function Dd(n,i,a){fo(n)&&a.delete(i)}function uv(){Jl=!1,ji!==null&&fo(ji)&&(ji=null),Xi!==null&&fo(Xi)&&(Xi=null),qi!==null&&fo(qi)&&(qi=null),aa.forEach(Dd),oa.forEach(Dd)}function ca(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function ua(n){function i(d){return ca(d,n)}if(0<uo.length){ca(uo[0],n);for(var a=1;a<uo.length;a++){var c=uo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ji!==null&&ca(ji,n),Xi!==null&&ca(Xi,n),qi!==null&&ca(qi,n),aa.forEach(i),oa.forEach(i),a=0;a<Yi.length;a++)c=Yi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)Nd(a),a.blockedOn===null&&Yi.shift()}var os=A.ReactCurrentBatchConfig,ho=!0;function fv(n,i,a,c){var d=vt,m=os.transition;os.transition=null;try{vt=1,ec(n,i,a,c)}finally{vt=d,os.transition=m}}function dv(n,i,a,c){var d=vt,m=os.transition;os.transition=null;try{vt=4,ec(n,i,a,c)}finally{vt=d,os.transition=m}}function ec(n,i,a,c){if(ho){var d=tc(n,i,a,c);if(d===null)_c(n,i,c,po,a),Ld(n,c);else if(cv(d,n,i,a,c))c.stopPropagation();else if(Ld(n,c),i&4&&-1<lv.indexOf(n)){for(;d!==null;){var m=Ma(d);if(m!==null&&Rd(m),m=tc(n,i,a,c),m===null&&_c(n,i,c,po,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else _c(n,i,c,null,a)}}var po=null;function tc(n,i,a,c){if(po=null,n=G(c),n=br(n),n!==null)if(i=Ti(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ao(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return po=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Le:return 1;case Ve:return 4;case Fe:case it:return 16;case st:return 536870912;default:return 16}default:return 16}}var $i=null,nc=null,mo=null;function Ud(){if(mo)return mo;var n,i=nc,a=i.length,c,d="value"in $i?$i.value:$i.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===d[m-c];c++);return mo=d.slice(n,1<c?1-c:void 0)}function go(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function Fd(){return!1}function Fn(n){function i(a,c,d,m,M){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vo:Fd,this.isPropagationStopped=Fd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Fn(ls),fa=re({},ls,{view:0,detail:0}),hv=Fn(fa),rc,sc,da,_o=re({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==da&&(da&&n.type==="mousemove"?(rc=n.screenX-da.screenX,sc=n.screenY-da.screenY):sc=rc=0,da=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:sc}}),Od=Fn(_o),pv=re({},_o,{dataTransfer:0}),mv=Fn(pv),gv=re({},fa,{relatedTarget:0}),ac=Fn(gv),vv=re({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=Fn(vv),xv=re({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yv=Fn(xv),Sv=re({},ls,{data:0}),Bd=Fn(Sv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wv[n])?!!i[n]:!1}function oc(){return Tv}var Av=re({},fa,{key:function(n){if(n.key){var i=Mv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=go(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?go(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?go(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Rv=Fn(Av),Cv=re({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Fn(Cv),bv=re({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),Pv=Fn(bv),Lv=re({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=Fn(Lv),Dv=re({},_o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Fn(Dv),Uv=[9,13,27,32],lc=f&&"CompositionEvent"in window,ha=null;f&&"documentMode"in document&&(ha=document.documentMode);var Fv=f&&"TextEvent"in window&&!ha,zd=f&&(!lc||ha&&8<ha&&11>=ha),Hd=" ",Vd=!1;function Gd(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function Ov(n,i){switch(n){case"compositionend":return Wd(i);case"keypress":return i.which!==32?null:(Vd=!0,Hd);case"textInput":return n=i.data,n===Hd&&Vd?null:n;default:return null}}function Bv(n,i){if(cs)return n==="compositionend"||!lc&&Gd(n,i)?(n=Ud(),mo=nc=$i=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kv[n.type]:i==="textarea"}function Xd(n,i,a,c){pe(c),i=Eo(i,"onChange"),0<i.length&&(a=new ic("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var pa=null,ma=null;function zv(n){uh(n,0)}function xo(n){var i=ps(n);if(pt(i))return n}function Hv(n,i){if(n==="change")return i}var qd=!1;if(f){var cc;if(f){var uc="oninput"in document;if(!uc){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),uc=typeof Yd.oninput=="function"}cc=uc}else cc=!1;qd=cc&&(!document.documentMode||9<document.documentMode)}function $d(){pa&&(pa.detachEvent("onpropertychange",Kd),ma=pa=null)}function Kd(n){if(n.propertyName==="value"&&xo(ma)){var i=[];Xd(i,ma,n,G(n)),Wn(zv,i)}}function Vv(n,i,a){n==="focusin"?($d(),pa=i,ma=a,pa.attachEvent("onpropertychange",Kd)):n==="focusout"&&$d()}function Gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xo(ma)}function Wv(n,i){if(n==="click")return xo(i)}function jv(n,i){if(n==="input"||n==="change")return xo(i)}function Xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:Xv;function ga(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qd(n,i){var a=Zd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zd(a)}}function Jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var n=window,i=B();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=B(n.document)}return i}function fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function qv(n){var i=eh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Jd(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Qd(a,m);var M=Qd(a,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=f&&"documentMode"in document&&11>=document.documentMode,us=null,dc=null,va=null,hc=!1;function th(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||us==null||us!==B(c)||(c=us,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ga(va,c)||(va=c,c=Eo(dc,"onSelect"),0<c.length&&(i=new ic("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=us)))}function yo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var fs={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},pc={},nh={};f&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function So(n){if(pc[n])return pc[n];if(!fs[n])return n;var i=fs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in nh)return pc[n]=i[a];return n}var ih=So("animationend"),rh=So("animationiteration"),sh=So("animationstart"),ah=So("transitionend"),oh=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(n,i){oh.set(n,i),l(i,[n])}for(var mc=0;mc<lh.length;mc++){var gc=lh[mc],$v=gc.toLowerCase(),Kv=gc[0].toUpperCase()+gc.slice(1);Ki($v,"on"+Kv)}Ki(ih,"onAnimationEnd"),Ki(rh,"onAnimationIteration"),Ki(sh,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function ch(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,so(c,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var N=c[M],z=N.instance,ee=N.currentTarget;if(N=N.listener,z!==m&&d.isPropagationStopped())break e;ch(d,N,ee),m=z}else for(M=0;M<c.length;M++){if(N=c[M],z=N.instance,ee=N.currentTarget,N=N.listener,z!==m&&d.isPropagationStopped())break e;ch(d,N,ee),m=z}}}if(wi)throw n=ss,wi=!1,ss=null,n}function kt(n,i){var a=i[wc];a===void 0&&(a=i[wc]=new Set);var c=n+"__bubble";a.has(c)||(fh(i,n,2,!1),a.add(c))}function vc(n,i,a){var c=0;i&&(c|=4),fh(a,n,c,i)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function xa(n){if(!n[Mo]){n[Mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||vc(a,!1,n),vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Mo]||(i[Mo]=!0,vc("selectionchange",!1,i))}}function fh(n,i,a,c){switch(Id(i)){case 1:var d=fv;break;case 4:d=dv;break;default:d=ec}a=d.bind(null,i,a,n),d=void 0,!rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function _c(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var N=c.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;N!==null;){if(M=br(N),M===null)return;if(z=M.tag,z===5||z===6){c=m=M;continue e}N=N.parentNode}}c=c.return}Wn(function(){var ee=m,ve=G(a),xe=[];e:{var ge=oh.get(n);if(ge!==void 0){var Oe=ic,Ge=n;switch(n){case"keypress":if(go(a)===0)break e;case"keydown":case"keyup":Oe=Rv;break;case"focusin":Ge="focus",Oe=ac;break;case"focusout":Ge="blur",Oe=ac;break;case"beforeblur":case"afterblur":Oe=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Pv;break;case ih:case rh:case sh:Oe=_v;break;case ah:Oe=Nv;break;case"scroll":Oe=hv;break;case"wheel":Oe=Iv;break;case"copy":case"cut":case"paste":Oe=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=kd}var je=(i&4)!==0,Yt=!je&&n==="scroll",Y=je?ge!==null?ge+"Capture":null:ge;je=[];for(var j=ee,K;j!==null;){K=j;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=fn(j,Y),Te!=null&&je.push(ya(j,Te,K)))),Yt)break;j=j.return}0<je.length&&(ge=new Oe(ge,Ge,null,a,ve),xe.push({event:ge,listeners:je}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ge&&a!==ut&&(Ge=a.relatedTarget||a.fromElement)&&(br(Ge)||Ge[Ai]))break e;if((Oe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(Ge=a.relatedTarget||a.toElement,Oe=ee,Ge=Ge?br(Ge):null,Ge!==null&&(Yt=Ti(Ge),Ge!==Yt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=ee),Oe!==Ge)){if(je=Od,Te="onMouseLeave",Y="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(je=kd,Te="onPointerLeave",Y="onPointerEnter",j="pointer"),Yt=Oe==null?ge:ps(Oe),K=Ge==null?ge:ps(Ge),ge=new je(Te,j+"leave",Oe,a,ve),ge.target=Yt,ge.relatedTarget=K,Te=null,br(ve)===ee&&(je=new je(Y,j+"enter",Ge,a,ve),je.target=K,je.relatedTarget=Yt,Te=je),Yt=Te,Oe&&Ge)t:{for(je=Oe,Y=Ge,j=0,K=je;K;K=ds(K))j++;for(K=0,Te=Y;Te;Te=ds(Te))K++;for(;0<j-K;)je=ds(je),j--;for(;0<K-j;)Y=ds(Y),K--;for(;j--;){if(je===Y||Y!==null&&je===Y.alternate)break t;je=ds(je),Y=ds(Y)}je=null}else je=null;Oe!==null&&dh(xe,ge,Oe,je,!1),Ge!==null&&Yt!==null&&dh(xe,Yt,Ge,je,!0)}}e:{if(ge=ee?ps(ee):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var $e=Hv;else if(jd(ge))if(qd)$e=jv;else{$e=Gv;var tt=Vv}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=Wv);if($e&&($e=$e(n,ee))){Xd(xe,$e,a,ve);break e}tt&&tt(n,ge,ee),n==="focusout"&&(tt=ge._wrapperState)&&tt.controlled&&ge.type==="number"&&ke(ge,"number",ge.value)}switch(tt=ee?ps(ee):window,n){case"focusin":(jd(tt)||tt.contentEditable==="true")&&(us=tt,dc=ee,va=null);break;case"focusout":va=dc=us=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,th(xe,a,ve);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":th(xe,a,ve)}var nt;if(lc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else cs?Gd(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(zd&&a.locale!=="ko"&&(cs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&cs&&(nt=Ud()):($i=ve,nc="value"in $i?$i.value:$i.textContent,cs=!0)),tt=Eo(ee,ot),0<tt.length&&(ot=new Bd(ot,n,null,a,ve),xe.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Wd(a),nt!==null&&(ot.data=nt)))),(nt=Fv?Ov(n,a):Bv(n,a))&&(ee=Eo(ee,"onBeforeInput"),0<ee.length&&(ve=new Bd("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ve,listeners:ee}),ve.data=nt))}uh(xe,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Eo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=fn(n,a),m!=null&&c.unshift(ya(n,m,d)),m=fn(n,i),m!=null&&c.push(ya(n,m,d))),n=n.return}return c}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dh(n,i,a,c,d){for(var m=i._reactName,M=[];a!==null&&a!==c;){var N=a,z=N.alternate,ee=N.stateNode;if(z!==null&&z===c)break;N.tag===5&&ee!==null&&(N=ee,d?(z=fn(a,m),z!=null&&M.unshift(ya(a,z,N))):d||(z=fn(a,m),z!=null&&M.push(ya(a,z,N)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function hh(n){return(typeof n=="string"?n:""+n).replace(Qv,`
`).replace(Jv,"")}function wo(n,i,a){if(i=hh(i),hh(n)!==i&&a)throw Error(t(425))}function To(){}var xc=null,yc=null;function Sc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(n){return ph.resolve(null).then(n).catch(n_)}:Mc;function n_(n){setTimeout(function(){throw n})}function Ec(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ua(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ua(i)}function Zi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),pi="__reactFiber$"+hs,Sa="__reactProps$"+hs,Ai="__reactContainer$"+hs,wc="__reactEvents$"+hs,i_="__reactListeners$"+hs,r_="__reactHandles$"+hs;function br(n){var i=n[pi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ai]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=mh(n);n!==null;){if(a=n[pi])return a;n=mh(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){return n=n[pi]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ao(n){return n[Sa]||null}var Tc=[],ms=-1;function Qi(n){return{current:n}}function zt(n){0>ms||(n.current=Tc[ms],Tc[ms]=null,ms--)}function Ft(n,i){ms++,Tc[ms]=n.current,n.current=i}var Ji={},pn=Qi(Ji),An=Qi(!1),Pr=Ji;function gs(n,i){var a=n.type.contextTypes;if(!a)return Ji;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Ro(){zt(An),zt(pn)}function gh(n,i,a){if(pn.current!==Ji)throw Error(t(168));Ft(pn,i),Ft(An,a)}function vh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,he(n)||"Unknown",d));return re({},a,c)}function Co(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ji,Pr=pn.current,Ft(pn,n),Ft(An,An.current),!0}function _h(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vh(n,i,Pr),c.__reactInternalMemoizedMergedChildContext=n,zt(An),zt(pn),Ft(pn,n)):zt(An),Ft(An,a)}var Ri=null,bo=!1,Ac=!1;function xh(n){Ri===null?Ri=[n]:Ri.push(n)}function s_(n){bo=!0,xh(n)}function er(){if(!Ac&&Ri!==null){Ac=!0;var n=0,i=vt;try{var a=Ri;for(vt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ri=null,bo=!1}catch(d){throw Ri!==null&&(Ri=Ri.slice(n+1)),R(Le,er),d}finally{vt=i,Ac=!1}}return null}var vs=[],_s=0,Po=null,Lo=0,jn=[],Xn=0,Lr=null,Ci=1,bi="";function Nr(n,i){vs[_s++]=Lo,vs[_s++]=Po,Po=n,Lo=i}function yh(n,i,a){jn[Xn++]=Ci,jn[Xn++]=bi,jn[Xn++]=Lr,Lr=n;var c=Ci;n=bi;var d=32-Mt(c)-1;c&=~(1<<d),a+=1;var m=32-Mt(i)+d;if(30<m){var M=d-d%5;m=(c&(1<<M)-1).toString(32),c>>=M,d-=M,Ci=1<<32-Mt(i)+d|a<<d|c,bi=m+n}else Ci=1<<m|a<<d|c,bi=n}function Rc(n){n.return!==null&&(Nr(n,1),yh(n,1,0))}function Cc(n){for(;n===Po;)Po=vs[--_s],vs[_s]=null,Lo=vs[--_s],vs[_s]=null;for(;n===Lr;)Lr=jn[--Xn],jn[Xn]=null,bi=jn[--Xn],jn[Xn]=null,Ci=jn[--Xn],jn[Xn]=null}var On=null,Bn=null,Ht=!1,ni=null;function Sh(n,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Mh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,Bn=Zi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Lr!==null?{id:Ci,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,Bn=null,!0):!1;default:return!1}}function bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pc(n){if(Ht){var i=Bn;if(i){var a=i;if(!Mh(n,i)){if(bc(n))throw Error(t(418));i=Zi(a.nextSibling);var c=On;i&&Mh(n,i)?Sh(c,a):(n.flags=n.flags&-4097|2,Ht=!1,On=n)}}else{if(bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,On=n}}}function Eh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function No(n){if(n!==On)return!1;if(!Ht)return Eh(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Sc(n.type,n.memoizedProps)),i&&(i=Bn)){if(bc(n))throw wh(),Error(t(418));for(;i;)Sh(n,i),i=Zi(i.nextSibling)}if(Eh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=Zi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=On?Zi(n.stateNode.nextSibling):null;return!0}function wh(){for(var n=Bn;n;)n=Zi(n.nextSibling)}function xs(){Bn=On=null,Ht=!1}function Lc(n){ni===null?ni=[n]:ni.push(n)}var a_=A.ReactCurrentBatchConfig;function Ea(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=d.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Do(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function Ah(n){function i(Y,j){if(n){var K=Y.deletions;K===null?(Y.deletions=[j],Y.flags|=16):K.push(j)}}function a(Y,j){if(!n)return null;for(;j!==null;)i(Y,j),j=j.sibling;return null}function c(Y,j){for(Y=new Map;j!==null;)j.key!==null?Y.set(j.key,j):Y.set(j.index,j),j=j.sibling;return Y}function d(Y,j){return Y=lr(Y,j),Y.index=0,Y.sibling=null,Y}function m(Y,j,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<j?(Y.flags|=2,j):K):(Y.flags|=2,j)):(Y.flags|=1048576,j)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,j,K,Te){return j===null||j.tag!==6?(j=Mu(K,Y.mode,Te),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function z(Y,j,K,Te){var $e=K.type;return $e===H?ve(Y,j,K.props.children,Te,K.key):j!==null&&(j.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Th($e)===j.type)?(Te=d(j,K.props),Te.ref=Ea(Y,j,K),Te.return=Y,Te):(Te=il(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=Ea(Y,j,K),Te.return=Y,Te)}function ee(Y,j,K,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=Eu(K,Y.mode,Te),j.return=Y,j):(j=d(j,K.children||[]),j.return=Y,j)}function ve(Y,j,K,Te,$e){return j===null||j.tag!==7?(j=zr(K,Y.mode,Te,$e),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function xe(Y,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Mu(""+j,Y.mode,K),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return K=il(j.type,j.key,j.props,null,Y.mode,K),K.ref=Ea(Y,null,j),K.return=Y,K;case k:return j=Eu(j,Y.mode,K),j.return=Y,j;case ce:var Te=j._init;return xe(Y,Te(j._payload),K)}if(ct(j)||oe(j))return j=zr(j,Y.mode,K,null),j.return=Y,j;Do(Y,j)}return null}function ge(Y,j,K,Te){var $e=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return $e!==null?null:N(Y,j,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return K.key===$e?z(Y,j,K,Te):null;case k:return K.key===$e?ee(Y,j,K,Te):null;case ce:return $e=K._init,ge(Y,j,$e(K._payload),Te)}if(ct(K)||oe(K))return $e!==null?null:ve(Y,j,K,Te,null);Do(Y,K)}return null}function Oe(Y,j,K,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,N(j,Y,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return Y=Y.get(Te.key===null?K:Te.key)||null,z(j,Y,Te,$e);case k:return Y=Y.get(Te.key===null?K:Te.key)||null,ee(j,Y,Te,$e);case ce:var tt=Te._init;return Oe(Y,j,K,tt(Te._payload),$e)}if(ct(Te)||oe(Te))return Y=Y.get(K)||null,ve(j,Y,Te,$e,null);Do(j,Te)}return null}function Ge(Y,j,K,Te){for(var $e=null,tt=null,nt=j,ot=j=0,on=null;nt!==null&&ot<K.length;ot++){nt.index>ot?(on=nt,nt=null):on=nt.sibling;var Tt=ge(Y,nt,K[ot],Te);if(Tt===null){nt===null&&(nt=on);break}n&&nt&&Tt.alternate===null&&i(Y,nt),j=m(Tt,j,ot),tt===null?$e=Tt:tt.sibling=Tt,tt=Tt,nt=on}if(ot===K.length)return a(Y,nt),Ht&&Nr(Y,ot),$e;if(nt===null){for(;ot<K.length;ot++)nt=xe(Y,K[ot],Te),nt!==null&&(j=m(nt,j,ot),tt===null?$e=nt:tt.sibling=nt,tt=nt);return Ht&&Nr(Y,ot),$e}for(nt=c(Y,nt);ot<K.length;ot++)on=Oe(nt,Y,ot,K[ot],Te),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?ot:on.key),j=m(on,j,ot),tt===null?$e=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(cr){return i(Y,cr)}),Ht&&Nr(Y,ot),$e}function je(Y,j,K,Te){var $e=oe(K);if(typeof $e!="function")throw Error(t(150));if(K=$e.call(K),K==null)throw Error(t(151));for(var tt=$e=null,nt=j,ot=j=0,on=null,Tt=K.next();nt!==null&&!Tt.done;ot++,Tt=K.next()){nt.index>ot?(on=nt,nt=null):on=nt.sibling;var cr=ge(Y,nt,Tt.value,Te);if(cr===null){nt===null&&(nt=on);break}n&&nt&&cr.alternate===null&&i(Y,nt),j=m(cr,j,ot),tt===null?$e=cr:tt.sibling=cr,tt=cr,nt=on}if(Tt.done)return a(Y,nt),Ht&&Nr(Y,ot),$e;if(nt===null){for(;!Tt.done;ot++,Tt=K.next())Tt=xe(Y,Tt.value,Te),Tt!==null&&(j=m(Tt,j,ot),tt===null?$e=Tt:tt.sibling=Tt,tt=Tt);return Ht&&Nr(Y,ot),$e}for(nt=c(Y,nt);!Tt.done;ot++,Tt=K.next())Tt=Oe(nt,Y,ot,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&nt.delete(Tt.key===null?ot:Tt.key),j=m(Tt,j,ot),tt===null?$e=Tt:tt.sibling=Tt,tt=Tt);return n&&nt.forEach(function(k_){return i(Y,k_)}),Ht&&Nr(Y,ot),$e}function Yt(Y,j,K,Te){if(typeof K=="object"&&K!==null&&K.type===H&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case O:e:{for(var $e=K.key,tt=j;tt!==null;){if(tt.key===$e){if($e=K.type,$e===H){if(tt.tag===7){a(Y,tt.sibling),j=d(tt,K.props.children),j.return=Y,Y=j;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Th($e)===tt.type){a(Y,tt.sibling),j=d(tt,K.props),j.ref=Ea(Y,tt,K),j.return=Y,Y=j;break e}a(Y,tt);break}else i(Y,tt);tt=tt.sibling}K.type===H?(j=zr(K.props.children,Y.mode,Te,K.key),j.return=Y,Y=j):(Te=il(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=Ea(Y,j,K),Te.return=Y,Y=Te)}return M(Y);case k:e:{for(tt=K.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){a(Y,j.sibling),j=d(j,K.children||[]),j.return=Y,Y=j;break e}else{a(Y,j);break}else i(Y,j);j=j.sibling}j=Eu(K,Y.mode,Te),j.return=Y,Y=j}return M(Y);case ce:return tt=K._init,Yt(Y,j,tt(K._payload),Te)}if(ct(K))return Ge(Y,j,K,Te);if(oe(K))return je(Y,j,K,Te);Do(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,j!==null&&j.tag===6?(a(Y,j.sibling),j=d(j,K),j.return=Y,Y=j):(a(Y,j),j=Mu(K,Y.mode,Te),j.return=Y,Y=j),M(Y)):a(Y,j)}return Yt}var ys=Ah(!0),Rh=Ah(!1),Io=Qi(null),Uo=null,Ss=null,Nc=null;function Dc(){Nc=Ss=Uo=null}function Ic(n){var i=Io.current;zt(Io),n._currentValue=i}function Uc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ms(n,i){Uo=n,Nc=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Nc!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Uo===null)throw Error(t(308));Ss=n,Uo.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Dr=null;function Fc(n){Dr===null?Dr=[n]:Dr.push(n)}function Ch(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Fc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pi(n,c)}function Pi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var tr=!1;function Oc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Pi(n,a)}return d=c.interleaved,d===null?(i.next=i,Fc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Pi(n,a)}function Fo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cr(n,a)}}function Ph(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Oo(n,i,a,c){var d=n.updateQueue;tr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var z=N,ee=z.next;z.next=null,M===null?m=ee:M.next=ee,M=z;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==M&&(N===null?ve.firstBaseUpdate=ee:N.next=ee,ve.lastBaseUpdate=z))}if(m!==null){var xe=d.baseState;M=0,ve=ee=z=null,N=m;do{var ge=N.lane,Oe=N.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Oe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=n,je=N;switch(ge=i,Oe=a,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){xe=Ge.call(Oe,xe,ge);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,ge=typeof Ge=="function"?Ge.call(Oe,xe,ge):Ge,ge==null)break e;xe=re({},xe,ge);break e;case 2:tr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[N]:ge.push(N))}else Oe={eventTime:Oe,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(ee=ve=Oe,z=xe):ve=ve.next=Oe,M|=ge;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(z=xe),d.baseState=z,d.firstBaseUpdate=ee,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=M,n.lanes=M,n.memoizedState=xe}}function Lh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var wa={},mi=Qi(wa),Ta=Qi(wa),Aa=Qi(wa);function Ir(n){if(n===wa)throw Error(t(174));return n}function Bc(n,i){switch(Ft(Aa,i),Ft(Ta,n),Ft(mi,wa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}zt(mi),Ft(mi,i)}function Es(){zt(mi),zt(Ta),zt(Aa)}function Nh(n){Ir(Aa.current);var i=Ir(mi.current),a=_e(i,n.type);i!==a&&(Ft(Ta,n),Ft(mi,a))}function kc(n){Ta.current===n&&(zt(mi),zt(Ta))}var Vt=Qi(0);function Bo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zc=[];function Hc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var ko=A.ReactCurrentDispatcher,Vc=A.ReactCurrentBatchConfig,Ur=0,Gt=null,Jt=null,sn=null,zo=!1,Ra=!1,Ca=0,o_=0;function mn(){throw Error(t(321))}function Gc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ti(n[a],i[a]))return!1;return!0}function Wc(n,i,a,c,d,m){if(Ur=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=n===null||n.memoizedState===null?f_:d_,n=a(c,d),Ra){m=0;do{if(Ra=!1,Ca=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,ko.current=h_,n=a(c,d)}while(Ra)}if(ko.current=Go,i=Jt!==null&&Jt.next!==null,Ur=0,sn=Jt=Gt=null,zo=!1,i)throw Error(t(300));return n}function jc(){var n=Ca!==0;return Ca=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Yn(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function ba(n,i){return typeof i=="function"?i(n):i}function Xc(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Jt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var N=M=null,z=null,ee=m;do{var ve=ee.lane;if((Ur&ve)===ve)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var xe={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(N=z=xe,M=c):z=z.next=xe,Gt.lanes|=ve,Fr|=ve}ee=ee.next}while(ee!==null&&ee!==m);z===null?M=c:z.next=N,ti(c,i.memoizedState)||(Cn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function qc(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);ti(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Dh(){}function Ih(n,i){var a=Gt,c=Yn(),d=i(),m=!ti(c.memoizedState,d);if(m&&(c.memoizedState=d,Cn=!0),c=c.queue,Yc(Oh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Pa(9,Fh.bind(null,a,c,d,i),void 0,null),an===null)throw Error(t(349));(Ur&30)!==0||Uh(a,i,d)}return d}function Uh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fh(n,i,a,c){i.value=a,i.getSnapshot=c,Bh(i)&&kh(n)}function Oh(n,i,a){return a(function(){Bh(i)&&kh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ti(n,a)}catch{return!0}}function kh(n){var i=Pi(n,1);i!==null&&ai(i,n,1,-1)}function zh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},i.queue=n,n=n.dispatch=u_.bind(null,Gt,n),[i.memoizedState,n]}function Pa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hh(){return Yn().memoizedState}function Ho(n,i,a,c){var d=gi();Gt.flags|=n,d.memoizedState=Pa(1|i,a,void 0,c===void 0?null:c)}function Vo(n,i,a,c){var d=Yn();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,c!==null&&Gc(c,M.deps)){d.memoizedState=Pa(i,a,m,c);return}}Gt.flags|=n,d.memoizedState=Pa(1|i,a,m,c)}function Vh(n,i){return Ho(8390656,8,n,i)}function Yc(n,i){return Vo(2048,8,n,i)}function Gh(n,i){return Vo(4,2,n,i)}function Wh(n,i){return Vo(4,4,n,i)}function jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,a){return a=a!=null?a.concat([n]):null,Vo(4,4,jh.bind(null,i,n),a)}function $c(){}function qh(n,i){var a=Yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Yh(n,i){var a=Yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function $h(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a):(ti(a,i)||(a=Mn(),Gt.lanes|=a,Fr|=a,n.baseState=!0),i)}function l_(n,i){var a=vt;vt=a!==0&&4>a?a:4,n(!0);var c=Vc.transition;Vc.transition={};try{n(!1),i()}finally{vt=a,Vc.transition=c}}function Kh(){return Yn().memoizedState}function c_(n,i,a){var c=ar(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(n))Qh(i,a);else if(a=Ch(n,i,a,c),a!==null){var d=wn();ai(a,n,c,d),Jh(a,i,c)}}function u_(n,i,a){var c=ar(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))Qh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,a);if(d.hasEagerState=!0,d.eagerState=N,ti(N,M)){var z=i.interleaved;z===null?(d.next=d,Fc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Ch(n,i,d,c),a!==null&&(d=wn(),ai(a,n,c,d),Jh(a,i,c))}}function Zh(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Qh(n,i){Ra=zo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Jh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cr(n,a)}}var Go={readContext:qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},f_={readContext:qn,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Vh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ho(4194308,4,jh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ho(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ho(4,2,n,i)},useMemo:function(n,i){var a=gi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=gi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=c_.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:zh,useDebugValue:$c,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=zh(!1),i=n[0];return n=l_.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=gi();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(Ur&30)!==0||Uh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Vh(Oh.bind(null,c,m,n),[n]),c.flags|=2048,Pa(9,Fh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=gi(),i=an.identifierPrefix;if(Ht){var a=bi,c=Ci;a=(c&~(1<<32-Mt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=o_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},d_={readContext:qn,useCallback:qh,useContext:qn,useEffect:Yc,useImperativeHandle:Xh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Xc,useRef:Hh,useState:function(){return Xc(ba)},useDebugValue:$c,useDeferredValue:function(n){var i=Yn();return $h(i,Jt.memoizedState,n)},useTransition:function(){var n=Xc(ba)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1},h_={readContext:qn,useCallback:qh,useContext:qn,useEffect:Yc,useImperativeHandle:Xh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:Yh,useReducer:qc,useRef:Hh,useState:function(){return qc(ba)},useDebugValue:$c,useDeferredValue:function(n){var i=Yn();return Jt===null?i.memoizedState=n:$h(i,Jt.memoizedState,n)},useTransition:function(){var n=qc(ba)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Kc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wo={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),d=ar(n),m=Li(c,d);m.payload=i,a!=null&&(m.callback=a),i=nr(n,m,d),i!==null&&(ai(i,n,d,c),Fo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),d=ar(n),m=Li(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=nr(n,m,d),i!==null&&(ai(i,n,d,c),Fo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=ar(n),d=Li(a,c);d.tag=2,i!=null&&(d.callback=i),i=nr(n,d,c),i!==null&&(ai(i,n,c,a),Fo(i,n,c))}};function ep(n,i,a,c,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!ga(a,c)||!ga(d,m):!0}function tp(n,i,a){var c=!1,d=Ji,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=Rn(i)?Pr:pn.current,c=i.contextTypes,m=(c=c!=null)?gs(n,d):Ji),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function np(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Wo.enqueueReplaceState(i,i.state,null)}function Zc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Oc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=Rn(i)?Pr:pn.current,d.context=gs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Kc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wo.enqueueReplaceState(d,d.state,null),Oo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var a="",c=i;do a+=J(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Qc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Jc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function ip(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Zo||(Zo=!0,pu=c),Jc(n,i)},a}function rp(n,i,a){a=Li(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Jc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Jc(n,i),typeof c!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function sp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new p_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=C_.bind(null,n,i,a),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,nr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var m_=A.ReactCurrentOwner,Cn=!1;function En(n,i,a,c){i.child=n===null?Rh(i,null,a,c):ys(i,n.child,a,c)}function lp(n,i,a,c,d){a=a.render;var m=i.ref;return Ms(i,d),c=Wc(n,i,a,c,m,d),a=jc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ni(n,i,d)):(Ht&&a&&Rc(i),i.flags|=1,En(n,i,c,d),i.child)}function cp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Su(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,up(n,i,m,c,d)):(n=il(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(M,c)&&n.ref===i.ref)return Ni(n,i,d)}return i.flags|=1,n=lr(m,c),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ga(m,c)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Ni(n,i,d)}return eu(n,i,a,c,d)}function fp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(As,kn),kn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(As,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ft(As,kn),kn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ft(As,kn),kn|=c;return En(n,i,d,a),i.child}function dp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function eu(n,i,a,c,d){var m=Rn(a)?Pr:pn.current;return m=gs(i,m),Ms(i,d),a=Wc(n,i,a,c,m,d),c=jc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ni(n,i,d)):(Ht&&c&&Rc(i),i.flags|=1,En(n,i,a,d),i.child)}function hp(n,i,a,c,d){if(Rn(a)){var m=!0;Co(i)}else m=!1;if(Ms(i,d),i.stateNode===null)Xo(n,i),tp(i,a,c),Zc(i,a,c,d),c=!0;else if(n===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var z=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=qn(ee):(ee=Rn(a)?Pr:pn.current,ee=gs(i,ee));var ve=a.getDerivedStateFromProps,xe=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==c||z!==ee)&&np(i,M,c,ee),tr=!1;var ge=i.memoizedState;M.state=ge,Oo(i,c,M,d),z=i.memoizedState,N!==c||ge!==z||An.current||tr?(typeof ve=="function"&&(Kc(i,a,ve,c),z=i.memoizedState),(N=tr||ep(i,a,N,c,ge,z,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),M.props=c,M.state=z,M.context=ee,c=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,bh(n,i),N=i.memoizedProps,ee=i.type===i.elementType?N:ii(i.type,N),M.props=ee,xe=i.pendingProps,ge=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=qn(z):(z=Rn(a)?Pr:pn.current,z=gs(i,z));var Oe=a.getDerivedStateFromProps;(ve=typeof Oe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==xe||ge!==z)&&np(i,M,c,z),tr=!1,ge=i.memoizedState,M.state=ge,Oo(i,c,M,d);var Ge=i.memoizedState;N!==xe||ge!==Ge||An.current||tr?(typeof Oe=="function"&&(Kc(i,a,Oe,c),Ge=i.memoizedState),(ee=tr||ep(i,a,ee,c,ge,Ge,z)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ge,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ge,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),M.props=c,M.state=Ge,M.context=z,c=ee):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return tu(n,i,a,c,m,d)}function tu(n,i,a,c,d,m){dp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&_h(i,a,!1),Ni(n,i,m);c=i.stateNode,m_.current=i;var N=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=ys(i,n.child,null,m),i.child=ys(i,null,N,m)):En(n,i,N,m),i.memoizedState=c.state,d&&_h(i,a,!0),i.child}function pp(n){var i=n.stateNode;i.pendingContext?gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(n,i.context,!1),Bc(n,i.containerInfo)}function mp(n,i,a,c,d){return xs(),Lc(d),i.flags|=256,En(n,i,a,c),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function gp(n,i,a){var c=i.pendingProps,d=Vt.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Vt,d&1),n===null)return Pc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=rl(M,c,0,null),n=zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=iu(a),i.memoizedState=nu,n):ru(i,M));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return g_(n,i,M,c,N,d,a);if(m){m=c.fallback,M=i.mode,d=n.child,N=d.sibling;var z={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=lr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),N!==null?m=lr(N,m):(m=zr(m,M,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?iu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~a,i.memoizedState=nu,c}return m=n.child,n=m.sibling,c=lr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ru(n,i){return i=rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function jo(n,i,a,c){return c!==null&&Lc(c),ys(i,n.child,null,a),n=ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function g_(n,i,a,c,d,m,M){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),jo(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=rl({mode:"visible",children:c.children},d,0,null),m=zr(m,d,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,M),i.child.memoizedState=iu(M),i.memoizedState=nu,m);if((i.mode&1)===0)return jo(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=Qc(m,c,void 0),jo(n,i,M,c)}if(N=(M&n.childLanes)!==0,Cn||N){if(c=an,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pi(n,d),ai(c,n,d,-1))}return yu(),c=Qc(Error(t(421))),jo(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=b_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Bn=Zi(d.nextSibling),On=i,Ht=!0,ni=null,n!==null&&(jn[Xn++]=Ci,jn[Xn++]=bi,jn[Xn++]=Lr,Ci=n.id,bi=n.overflow,Lr=i),i=ru(i,c.children),i.flags|=4096,i)}function vp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Uc(n.return,i,a)}function su(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function _p(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(En(n,i,c.children,a),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,a,i);else if(n.tag===19)vp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Bo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),su(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Bo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}su(i,!0,a,null,m);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=lr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=lr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function v_(n,i,a){switch(i.tag){case 3:pp(i),xs();break;case 5:Nh(i);break;case 1:Rn(i.type)&&Co(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ft(Io,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Vt,Vt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gp(n,i,a):(Ft(Vt,Vt.current&1),n=Ni(n,i,a),n!==null?n.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return _p(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return Ni(n,i,a)}var xp,au,yp,Sp;xp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},au=function(){},yp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ir(mi.current);var m=null;switch(a){case"input":d=wt(n,d),c=wt(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Bt(n,d),c=Bt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=To)}Xe(a,c);var M;a=null;for(ee in d)if(!c.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var N=d[ee];for(M in N)N.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in c){var z=c[ee];if(N=d?.[ee],c.hasOwnProperty(ee)&&z!==N&&(z!=null||N!=null))if(ee==="style")if(N){for(M in N)!N.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&N[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(m||(m=[]),m.push(ee,a)),a=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(m=m||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&kt("scroll",n),m||N===z||(m=[])):(m=m||[]).push(ee,z))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Sp=function(n,i,a,c){a!==c&&(i.flags|=4)};function La(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function __(n,i,a){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Ro(),gn(i),null;case 3:return c=i.stateNode,Es(),zt(An),zt(pn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(No(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(vu(ni),ni=null))),au(n,i),gn(i),null;case 5:kc(i);var d=Ir(Aa.current);if(a=i.type,n!==null&&i.stateNode!=null)yp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Ir(mi.current),No(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[pi]=i,c[Sa]=m,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)kt(_a[d],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Je(c,m),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},kt("invalid",c);break;case"textarea":L(c,m),kt("invalid",c)}Xe(a,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&wo(c.textContent,N,n),d=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&wo(c.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&kt("scroll",c)}switch(a){case"input":Rt(c),bt(c,m,!0);break;case"textarea":Rt(c),$(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=To)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[pi]=i,n[Sa]=c,xp(n,i,!1,!1),i.stateNode=n;e:{switch(M=Pe(a,c),a){case"dialog":kt("cancel",n),kt("close",n),d=c;break;case"iframe":case"object":case"embed":kt("load",n),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)kt(_a[d],n);d=c;break;case"source":kt("error",n),d=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),d=c;break;case"details":kt("toggle",n),d=c;break;case"input":Je(n,c),d=wt(n,c),kt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),kt("invalid",n);break;case"textarea":L(n,c),d=Bt(n,c),kt("invalid",n);break;default:d=c}Xe(a,d),N=d;for(m in N)if(N.hasOwnProperty(m)){var z=N[m];m==="style"?De(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ke(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&kt("scroll",n):z!=null&&P(n,m,z,M))}switch(a){case"input":Rt(n),bt(n,c,!1);break;case"textarea":Rt(n),$(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ot(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=To)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Sp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ir(Aa.current),Ir(mi.current),No(i)){if(c=i.stateNode,a=i.memoizedProps,c[pi]=i,(m=c.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:wo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[pi]=i,i.stateNode=c}return gn(i),null;case 13:if(zt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)wh(),xs(),i.flags|=98560,m=!1;else if(m=No(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[pi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else ni!==null&&(vu(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?en===0&&(en=3):yu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Es(),au(n,i),n===null&&xa(i.stateNode.containerInfo),gn(i),null;case 10:return Ic(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Ro(),gn(i),null;case 19:if(zt(Vt),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)La(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Bo(n),M!==null){for(i.flags|=128,La(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&W()>Rs&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304)}else{if(!c)if(n=Bo(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),La(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ht)return gn(i),null}else 2*W()-m.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=W(),i.sibling=null,a=Vt.current,Ft(Vt,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return xu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function x_(n,i){switch(Cc(i),i.tag){case 1:return Rn(i.type)&&Ro(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),zt(An),zt(pn),Hc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return kc(i),null;case 13:if(zt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Vt),null;case 4:return Es(),null;case 10:return Ic(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var qo=!1,vn=!1,y_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ts(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Wt(n,i,c)}else a.current=null}function ou(n,i,a){try{a()}catch(c){Wt(n,i,c)}}var Mp=!1;function S_(n,i){if(xc=ho,n=eh(),fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,N=-1,z=-1,ee=0,ve=0,xe=n,ge=null;t:for(;;){for(var Oe;xe!==a||d!==0&&xe.nodeType!==3||(N=M+d),xe!==m||c!==0&&xe.nodeType!==3||(z=M+c),xe.nodeType===3&&(M+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)ge=xe,xe=Oe;for(;;){if(xe===n)break t;if(ge===a&&++ee===d&&(N=M),ge===m&&++ve===c&&(z=M),(Oe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Oe}a=N===-1||z===-1?null:{start:N,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yc={focusedElem:n,selectionRange:a},ho=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Yt=Ge.memoizedState,Y=i.stateNode,j=Y.getSnapshotBeforeUpdate(i.elementType===i.type?je:ii(i.type,je),Yt);Y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return Ge=Mp,Mp=!1,Ge}function Na(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&ou(i,a,m)}d=d.next}while(d!==c)}}function Yo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function lu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ep(n){var i=n.alternate;i!==null&&(n.alternate=null,Ep(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[Sa],delete i[wc],delete i[i_],delete i[r_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wp(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=To));else if(c!==4&&(n=n.child,n!==null))for(cu(n,i,a),n=n.sibling;n!==null;)cu(n,i,a),n=n.sibling}function uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(uu(n,i,a),n=n.sibling;n!==null;)uu(n,i,a),n=n.sibling}var cn=null,ri=!1;function ir(n,i,a){for(a=a.child;a!==null;)Ap(n,i,a),a=a.sibling}function Ap(n,i,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:vn||Ts(a,i);case 6:var c=cn,d=ri;cn=null,ir(n,i,a),cn=c,ri=d,cn!==null&&(ri?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ri?(n=cn,a=a.stateNode,n.nodeType===8?Ec(n.parentNode,a):n.nodeType===1&&Ec(n,a),ua(n)):Ec(cn,a.stateNode));break;case 4:c=cn,d=ri,cn=a.stateNode.containerInfo,ri=!0,ir(n,i,a),cn=c,ri=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&ou(a,i,M),d=d.next}while(d!==c)}ir(n,i,a);break;case 1:if(!vn&&(Ts(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(N){Wt(a,i,N)}ir(n,i,a);break;case 21:ir(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,ir(n,i,a),vn=c):ir(n,i,a);break;default:ir(n,i,a)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new y_),i.forEach(function(c){var d=P_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:cn=N.stateNode,ri=!1;break e;case 3:cn=N.stateNode.containerInfo,ri=!0;break e;case 4:cn=N.stateNode.containerInfo,ri=!0;break e}N=N.return}if(cn===null)throw Error(t(160));Ap(m,M,d),cn=null,ri=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ee){Wt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),vi(n),c&4){try{Na(3,n,n.return),Yo(3,n)}catch(je){Wt(n,n.return,je)}try{Na(5,n,n.return)}catch(je){Wt(n,n.return,je)}}break;case 1:si(i,n),vi(n),c&512&&a!==null&&Ts(a,a.return);break;case 5:if(si(i,n),vi(n),c&512&&a!==null&&Ts(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(je){Wt(n,n.return,je)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=a!==null?a.memoizedProps:m,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&yt(d,m),Pe(N,M);var ee=Pe(N,m);for(M=0;M<z.length;M+=2){var ve=z[M],xe=z[M+1];ve==="style"?De(d,xe):ve==="dangerouslySetInnerHTML"?Ke(d,xe):ve==="children"?Ae(d,xe):P(d,ve,xe,ee)}switch(N){case"input":Ye(d,m);break;case"textarea":T(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?Ot(d,!!m.multiple,Oe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?Ot(d,!!m.multiple,m.defaultValue,!0):Ot(d,!!m.multiple,m.multiple?[]:"",!1))}d[Sa]=m}catch(je){Wt(n,n.return,je)}}break;case 6:if(si(i,n),vi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(je){Wt(n,n.return,je)}}break;case 3:if(si(i,n),vi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(je){Wt(n,n.return,je)}break;case 4:si(i,n),vi(n);break;case 13:si(i,n),vi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(hu=W())),c&4&&Rp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ee=vn)||ve,si(i,n),vn=ee):si(i,n),vi(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&(n.mode&1)!==0)for(ze=n,ve=n.child;ve!==null;){for(xe=ze=ve;ze!==null;){switch(ge=ze,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Na(4,ge,ge.return);break;case 1:Ts(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){Wt(c,a,je)}}break;case 5:Ts(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Lp(xe);continue}}Oe!==null?(Oe.return=ge,ze=Oe):Lp(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{d=xe.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=xe.stateNode,z=xe.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=we("display",M))}catch(je){Wt(n,n.return,je)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(je){Wt(n,n.return,je)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:si(i,n),vi(n),c&4&&Rp(n);break;case 21:break;default:si(i,n),vi(n)}}function vi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var m=Tp(n);uu(n,m,d);break;case 3:case 4:var M=c.stateNode.containerInfo,N=Tp(n);cu(n,N,M);break;default:throw Error(t(161))}}catch(z){Wt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function M_(n,i,a){ze=n,bp(n)}function bp(n,i,a){for(var c=(n.mode&1)!==0;ze!==null;){var d=ze,m=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||qo;if(!M){var N=d.alternate,z=N!==null&&N.memoizedState!==null||vn;N=qo;var ee=vn;if(qo=M,(vn=z)&&!ee)for(ze=d;ze!==null;)M=ze,z=M.child,M.tag===22&&M.memoizedState!==null?Np(d):z!==null?(z.return=M,ze=z):Np(d);for(;m!==null;)ze=m,bp(m),m=m.sibling;ze=d,qo=N,vn=ee}Pp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ze=m):Pp(n)}}function Pp(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Yo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Lh(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lh(i,M,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&ua(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&lu(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Lp(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Np(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yo(4,i)}catch(z){Wt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Wt(i,d,z)}}var m=i.return;try{lu(i)}catch(z){Wt(i,m,z)}break;case 5:var M=i.return;try{lu(i)}catch(z){Wt(i,M,z)}}}catch(z){Wt(i,i.return,z)}if(i===n){ze=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ze=N;break}ze=i.return}}var E_=Math.ceil,$o=A.ReactCurrentDispatcher,fu=A.ReactCurrentOwner,$n=A.ReactCurrentBatchConfig,Et=0,an=null,Kt=null,un=0,kn=0,As=Qi(0),en=0,Da=null,Fr=0,Ko=0,du=0,Ia=null,bn=null,hu=0,Rs=1/0,Di=null,Zo=!1,pu=null,rr=null,Qo=!1,sr=null,Jo=0,Ua=0,mu=null,el=-1,tl=0;function wn(){return(Et&6)!==0?W():el!==-1?el:el=W()}function ar(n){return(n.mode&1)===0?1:(Et&2)!==0&&un!==0?un&-un:a_.transition!==null?(tl===0&&(tl=Mn()),tl):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function ai(n,i,a,c){if(50<Ua)throw Ua=0,mu=null,Error(t(185));qt(n,a,c),((Et&2)===0||n!==an)&&(n===an&&((Et&2)===0&&(Ko|=a),en===4&&or(n,un)),Pn(n,c),a===1&&Et===0&&(i.mode&1)===0&&(Rs=W()+500,bo&&er()))}function Pn(n,i){var a=n.callbackNode;Rr(n,i);var c=ei(n,n===an?un:0);if(c===0)a!==null&&X(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&X(a),i===1)n.tag===0?s_(Ip.bind(null,n)):xh(Ip.bind(null,n)),t_(function(){(Et&6)===0&&er()}),a=null;else{switch(Ad(c)){case 1:a=Le;break;case 4:a=Ve;break;case 16:a=Fe;break;case 536870912:a=st;break;default:a=Fe}a=Vp(a,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Dp(n,i){if(el=-1,tl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Cs()&&n.callbackNode!==a)return null;var c=ei(n,n===an?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=nl(n,c);else{i=c;var d=Et;Et|=2;var m=Fp();(an!==n||un!==i)&&(Di=null,Rs=W()+500,Br(n,i));do try{A_();break}catch(N){Up(n,N)}while(!0);Dc(),$o.current=m,Et=d,Kt!==null?i=0:(an=null,un=0,i=en)}if(i!==0){if(i===2&&(d=Ut(n),d!==0&&(c=d,i=gu(n,d))),i===1)throw a=Da,Br(n,0),or(n,c),Pn(n,W()),a;if(i===6)or(n,c);else{if(d=n.current.alternate,(c&30)===0&&!w_(d)&&(i=nl(n,c),i===2&&(m=Ut(n),m!==0&&(c=m,i=gu(n,m))),i===1))throw a=Da,Br(n,0),or(n,c),Pn(n,W()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:kr(n,bn,Di);break;case 3:if(or(n,c),(c&130023424)===c&&(i=hu+500-W(),10<i)){if(ei(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Mc(kr.bind(null,n,bn,Di),i);break}kr(n,bn,Di);break;case 4:if(or(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-Mt(c);m=1<<M,M=i[M],M>d&&(d=M),c&=~m}if(c=d,c=W()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*E_(c/1960))-c,10<c){n.timeoutHandle=Mc(kr.bind(null,n,bn,Di),c);break}kr(n,bn,Di);break;case 5:kr(n,bn,Di);break;default:throw Error(t(329))}}}return Pn(n,W()),n.callbackNode===a?Dp.bind(null,n):null}function gu(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=nl(n,i),n!==2&&(i=bn,bn=a,i!==null&&vu(i)),n}function vu(n){bn===null?bn=n:bn.push.apply(bn,n)}function w_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(n,i){for(i&=~du,i&=~Ko,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Mt(i),c=1<<a;n[a]=-1,i&=~c}}function Ip(n){if((Et&6)!==0)throw Error(t(327));Cs();var i=ei(n,0);if((i&1)===0)return Pn(n,W()),null;var a=nl(n,i);if(n.tag!==0&&a===2){var c=Ut(n);c!==0&&(i=c,a=gu(n,c))}if(a===1)throw a=Da,Br(n,0),or(n,i),Pn(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,bn,Di),Pn(n,W()),null}function _u(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Rs=W()+500,bo&&er())}}function Or(n){sr!==null&&sr.tag===0&&(Et&6)===0&&Cs();var i=Et;Et|=1;var a=$n.transition,c=vt;try{if($n.transition=null,vt=1,n)return n()}finally{vt=c,$n.transition=a,Et=i,(Et&6)===0&&er()}}function xu(){kn=As.current,zt(As)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,e_(a)),Kt!==null)for(a=Kt.return;a!==null;){var c=a;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ro();break;case 3:Es(),zt(An),zt(pn),Hc();break;case 5:kc(c);break;case 4:Es();break;case 13:zt(Vt);break;case 19:zt(Vt);break;case 10:Ic(c.type._context);break;case 22:case 23:xu()}a=a.return}if(an=n,Kt=n=lr(n.current,null),un=kn=i,en=0,Da=null,du=Ko=Fr=0,bn=Ia=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var M=m.next;m.next=d,c.next=M}a.pending=c}Dr=null}return n}function Up(n,i){do{var a=Kt;try{if(Dc(),ko.current=Go,zo){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}zo=!1}if(Ur=0,sn=Jt=Gt=null,Ra=!1,Ca=0,fu.current=null,a===null||a.return===null){en=1,Da=i,Kt=null;break}e:{var m=n,M=a.return,N=a,z=i;if(i=un,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,ve=N,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Oe=ap(M);if(Oe!==null){Oe.flags&=-257,op(Oe,M,N,m,i),Oe.mode&1&&sp(m,ee,i),i=Oe,z=ee;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(z),i.updateQueue=je}else Ge.add(z);break e}else{if((i&1)===0){sp(m,ee,i),yu();break e}z=Error(t(426))}}else if(Ht&&N.mode&1){var Yt=ap(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),op(Yt,M,N,m,i),Lc(ws(z,N));break e}}m=z=ws(z,N),en!==4&&(en=2),Ia===null?Ia=[m]:Ia.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=ip(m,z,i);Ph(m,Y);break e;case 1:N=z;var j=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(rr===null||!rr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=rp(m,N,i);Ph(m,Te);break e}}m=m.return}while(m!==null)}Bp(a)}catch($e){i=$e,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Fp(){var n=$o.current;return $o.current=Go,n===null?Go:n}function yu(){(en===0||en===3||en===2)&&(en=4),an===null||(Fr&268435455)===0&&(Ko&268435455)===0||or(an,un)}function nl(n,i){var a=Et;Et|=2;var c=Fp();(an!==n||un!==i)&&(Di=null,Br(n,i));do try{T_();break}catch(d){Up(n,d)}while(!0);if(Dc(),Et=a,$o.current=c,Kt!==null)throw Error(t(261));return an=null,un=0,en}function T_(){for(;Kt!==null;)Op(Kt)}function A_(){for(;Kt!==null&&!te();)Op(Kt)}function Op(n){var i=Hp(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Bp(n):Kt=i,fu.current=null}function Bp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=__(a,i,kn),a!==null){Kt=a;return}}else{if(a=x_(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);en===0&&(en=5)}function kr(n,i,a){var c=vt,d=$n.transition;try{$n.transition=null,vt=1,R_(n,i,a,c)}finally{$n.transition=d,vt=c}return null}function R_(n,i,a,c){do Cs();while(sr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(hn(n,m),n===an&&(Kt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qo||(Qo=!0,Vp(Fe,function(){return Cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=$n.transition,$n.transition=null;var M=vt;vt=1;var N=Et;Et|=4,fu.current=null,S_(n,a),Cp(a,n),qv(yc),ho=!!xc,yc=xc=null,n.current=a,M_(a),ie(),Et=N,vt=M,$n.transition=m}else n.current=a;if(Qo&&(Qo=!1,sr=n,Jo=d),m=n.pendingLanes,m===0&&(rr=null),Ct(a.stateNode),Pn(n,W()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Zo)throw Zo=!1,n=pu,pu=null,n;return(Jo&1)!==0&&n.tag!==0&&Cs(),m=n.pendingLanes,(m&1)!==0?n===mu?Ua++:(Ua=0,mu=n):Ua=0,er(),null}function Cs(){if(sr!==null){var n=Ad(Jo),i=$n.transition,a=vt;try{if($n.transition=null,vt=16>n?16:n,sr===null)var c=!1;else{if(n=sr,sr=null,Jo=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,ze=n.current;ze!==null;){var m=ze,M=m.child;if((ze.flags&16)!==0){var N=m.deletions;if(N!==null){for(var z=0;z<N.length;z++){var ee=N[z];for(ze=ee;ze!==null;){var ve=ze;switch(ve.tag){case 0:case 11:case 15:Na(8,ve,m)}var xe=ve.child;if(xe!==null)xe.return=ve,ze=xe;else for(;ze!==null;){ve=ze;var ge=ve.sibling,Oe=ve.return;if(Ep(ve),ve===ee){ze=null;break}if(ge!==null){ge.return=Oe,ze=ge;break}ze=Oe}}}var Ge=m.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Yt=je.sibling;je.sibling=null,je=Yt}while(je!==null)}}ze=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,ze=M;else e:for(;ze!==null;){if(m=ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Na(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,ze=Y;break e}ze=m.return}}var j=n.current;for(ze=j;ze!==null;){M=ze;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,ze=K;else e:for(M=j;ze!==null;){if(N=ze,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Yo(9,N)}}catch($e){Wt(N,N.return,$e)}if(N===M){ze=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,ze=Te;break e}ze=N.return}}if(Et=d,er(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Qe,n)}catch{}c=!0}return c}finally{vt=a,$n.transition=i}}return!1}function kp(n,i,a){i=ws(a,i),i=ip(n,i,1),n=nr(n,i,1),i=wn(),n!==null&&(qt(n,1,i),Pn(n,i))}function Wt(n,i,a){if(n.tag===3)kp(n,n,a);else for(;i!==null;){if(i.tag===3){kp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(rr===null||!rr.has(c))){n=ws(a,n),n=rp(i,n,1),i=nr(i,n,1),n=wn(),i!==null&&(qt(i,1,n),Pn(i,n));break}}i=i.return}}function C_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>W()-hu?Br(n,0):du|=a),Pn(n,i)}function zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var a=wn();n=Pi(n,i),n!==null&&(qt(n,i,a),Pn(n,a))}function b_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(n,a)}function P_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),zp(n,a)}var Hp;Hp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,v_(n,i,a);Cn=(n.flags&131072)!==0}else Cn=!1,Ht&&(i.flags&1048576)!==0&&yh(i,Lo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Xo(n,i),n=i.pendingProps;var d=gs(i,pn.current);Ms(i,a),d=Wc(null,i,c,n,d,a);var m=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(m=!0,Co(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Oc(i),d.updater=Wo,i.stateNode=d,d._reactInternals=i,Zc(i,c,n,a),i=tu(null,i,c,!0,m,a)):(i.tag=0,Ht&&m&&Rc(i),En(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Xo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=N_(c),n=ii(c,n),d){case 0:i=eu(null,i,c,n,a);break e;case 1:i=hp(null,i,c,n,a);break e;case 11:i=lp(null,i,c,n,a);break e;case 14:i=cp(null,i,c,ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),eu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),hp(n,i,c,d,a);case 3:e:{if(pp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,bh(n,i),Oo(i,c,null,a);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ws(Error(t(423)),i),i=mp(n,i,c,a,d);break e}else if(c!==d){d=ws(Error(t(424)),i),i=mp(n,i,c,a,d);break e}else for(Bn=Zi(i.stateNode.containerInfo.firstChild),On=i,Ht=!0,ni=null,a=Rh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===d){i=Ni(n,i,a);break e}En(n,i,c,a)}i=i.child}return i;case 5:return Nh(i),n===null&&Pc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Sc(c,d)?M=null:m!==null&&Sc(c,m)&&(i.flags|=32),dp(n,i),En(n,i,M,a),i.child;case 6:return n===null&&Pc(i),null;case 13:return gp(n,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,a):En(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),lp(n,i,c,d,a);case 7:return En(n,i,i.pendingProps,a),i.child;case 8:return En(n,i,i.pendingProps.children,a),i.child;case 12:return En(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Ft(Io,c._currentValue),c._currentValue=M,m!==null)if(ti(m.value,M)){if(m.children===d.children&&!An.current){i=Ni(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var z=N.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=Li(-1,a&-a),z.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ee.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),Uc(m.return,a,i),N.lanes|=a;break}z=z.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=a,N=M.alternate,N!==null&&(N.lanes|=a),Uc(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}En(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ms(i,a),d=qn(d),c=c(d),i.flags|=1,En(n,i,c,a),i.child;case 14:return c=i.type,d=ii(c,i.pendingProps),d=ii(c.type,d),cp(n,i,c,d,a);case 15:return up(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Xo(n,i),i.tag=1,Rn(c)?(n=!0,Co(i)):n=!1,Ms(i,a),tp(i,c,d),Zc(i,c,d,a),tu(null,i,c,!0,n,a);case 19:return _p(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Vp(n,i){return R(n,i)}function L_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,a,c){return new L_(n,i,a,c)}function Su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function N_(n){if(typeof n=="function")return Su(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===le)return 14}return 2}function lr(n,i){var a=n.alternate;return a===null?(a=Kn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function il(n,i,a,c,d,m){var M=2;if(c=n,typeof n=="function")Su(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case H:return zr(a.children,d,m,i);case q:M=8,d|=8;break;case b:return n=Kn(12,a,i,d|2),n.elementType=b,n.lanes=m,n;case Q:return n=Kn(13,a,i,d),n.elementType=Q,n.lanes=m,n;case se:return n=Kn(19,a,i,d),n.elementType=se,n.lanes=m,n;case fe:return rl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case F:M=9;break e;case ae:M=11;break e;case le:M=14;break e;case ce:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(M,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function zr(n,i,a,c){return n=Kn(7,n,c,i),n.lanes=a,n}function rl(n,i,a,c){return n=Kn(22,n,c,i),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Mu(n,i,a){return n=Kn(6,n,null,i),n.lanes=a,n}function Eu(n,i,a){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function D_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wu(n,i,a,c,d,m,M,N,z){return n=new D_(n,i,a,N,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(m),n}function I_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Gp(n){if(!n)return Ji;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return vh(n,a,i)}return i}function Wp(n,i,a,c,d,m,M,N,z){return n=wu(a,c,!0,n,d,m,M,N,z),n.context=Gp(null),a=n.current,c=wn(),d=ar(a),m=Li(c,d),m.callback=i??null,nr(a,m,d),n.current.lanes=d,qt(n,d,c),Pn(n,c),n}function sl(n,i,a,c){var d=i.current,m=wn(),M=ar(d);return a=Gp(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=nr(d,i,M),n!==null&&(ai(n,d,M,m),Fo(n,d,M)),M}function al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Tu(n,i){jp(n,i),(n=n.alternate)&&jp(n,i)}function U_(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Au(n){this._internalRoot=n}ol.prototype.render=Au.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));sl(n,i,null,null)},ol.prototype.unmount=Au.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){sl(null,n,null,null)}),i[Ai]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=bd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yi.length&&i!==0&&i<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&Nd(n)}};function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qp(){}function F_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ee=al(M);m.call(ee)}}var M=Wp(i,c,n,0,null,!1,!1,"",qp);return n._reactRootContainer=M,n[Ai]=M.current,xa(n.nodeType===8?n.parentNode:n),Or(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var N=c;c=function(){var ee=al(z);N.call(ee)}}var z=wu(n,0,!1,null,null,!1,!1,"",qp);return n._reactRootContainer=z,n[Ai]=z.current,xa(n.nodeType===8?n.parentNode:n),Or(function(){sl(i,z,a,c)}),z}function cl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var N=d;d=function(){var z=al(M);N.call(z)}}sl(i,M,n,d)}else M=F_(a,i,n,d,c);return al(M)}Rd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qt(i.pendingLanes);a!==0&&(Cr(i,a|1),Pn(i,W()),(Et&6)===0&&(Rs=W()+500,er()))}break;case 13:Or(function(){var c=Pi(n,1);if(c!==null){var d=wn();ai(c,n,1,d)}}),Tu(n,1)}},Ql=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var a=wn();ai(i,n,134217728,a)}Tu(n,134217728)}},Cd=function(n){if(n.tag===13){var i=ar(n),a=Pi(n,i);if(a!==null){var c=wn();ai(a,n,i,c)}Tu(n,i)}},bd=function(){return vt},Pd=function(n,i){var a=vt;try{return vt=n,i()}finally{vt=a}},Me=function(n,i,a){switch(i){case"input":if(Ye(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ao(c);if(!d)throw Error(t(90));pt(c),Ye(c,d)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},lt=_u,Pt=Or;var O_={usingClientEntryPoint:!1,Events:[Ma,ps,Ao,pe,We,_u]},Fa={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B_={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lo(n),n===null?null:n.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Qe=ul.inject(B_),at=ul}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,Ln.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(t(200));return I_(n,i,null,a)},Ln.createRoot=function(n,i){if(!Ru(n))throw Error(t(299));var a=!1,c="",d=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wu(n,1,!1,null,null,a,!1,c,d),n[Ai]=i.current,xa(n.nodeType===8?n.parentNode:n),new Au(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=lo(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return Or(n)},Ln.hydrate=function(n,i,a){if(!ll(i))throw Error(t(200));return cl(null,n,i,!0,a)},Ln.hydrateRoot=function(n,i,a){if(!Ru(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",M=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Wp(i,null,n,1,a??null,d,!1,m,M),n[Ai]=i.current,xa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ol(i)},Ln.render=function(n,i,a){if(!ll(i))throw Error(t(200));return cl(null,n,i,!1,a)},Ln.unmountComponentAtNode=function(n){if(!ll(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Ln.unstable_batchedUpdates=_u,Ln.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ll(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cl(n,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var tm;function _g(){if(tm)return Pu.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=q_(),Pu.exports}var nm;function Y_(){if(nm)return fl;nm=1;var s=_g();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var $_=Y_();const K_=vg($_);_g();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ja.apply(this,arguments)}var _r;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(_r||(_r={}));const im="popstate";function Z_(s){s===void 0&&(s={});function e(r,o){let{pathname:l,search:u,hash:f}=r.location;return mf("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:yg(o)}return J_(e,t,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function xg(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Q_(){return Math.random().toString(36).substr(2,8)}function rm(s,e){return{usr:s.state,key:s.key,idx:e}}function mf(s,e,t,r){return t===void 0&&(t=null),ja({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?ta(e):e,{state:t,key:e&&e.key||r||Q_()})}function yg(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ta(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function J_(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f=_r.Pop,h=null,p=x();p==null&&(p=0,u.replaceState(ja({},u.state,{idx:p}),""));function x(){return(u.state||{idx:null}).idx}function v(){f=_r.Pop;let _=x(),g=_==null?null:_-p;p=_,h&&h({action:f,location:w.location,delta:g})}function y(_,g){f=_r.Push;let I=mf(w.location,_,g);p=x()+1;let P=rm(I,p),A=w.createHref(I);try{u.pushState(P,"",A)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(A)}l&&h&&h({action:f,location:w.location,delta:1})}function S(_,g){f=_r.Replace;let I=mf(w.location,_,g);p=x();let P=rm(I,p),A=w.createHref(I);u.replaceState(P,"",A),l&&h&&h({action:f,location:w.location,delta:0})}function E(_){let g=o.location.origin!=="null"?o.location.origin:o.location.href,I=typeof _=="string"?_:yg(_);return I=I.replace(/ $/,"%20"),tn(g,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,g)}let w={get action(){return f},get location(){return s(o,u)},listen(_){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(im,v),h=_,()=>{o.removeEventListener(im,v),h=null}},createHref(_){return e(o,_)},createURL:E,encodeLocation(_){let g=E(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:S,go(_){return u.go(_)}};return w}var sm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(sm||(sm={}));function e0(s,e,t){return t===void 0&&(t="/"),t0(s,e,t)}function t0(s,e,t,r){let o=typeof e=="string"?ta(e):e,l=Eg(o.pathname||"/",t);if(l==null)return null;let u=Sg(s);n0(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=p0(l);f=f0(u[h],p)}return f}function Sg(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(tn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Jr([r,h.relativePath]),x=t.concat(h);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Sg(l.children,e,x,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:c0(p,l.index),routesMeta:x})};return s.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let h of Mg(l.path))o(l,u,h)}),e}function Mg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=Mg(r.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function n0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:u0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const i0=/^:[\w-]+$/,r0=3,s0=2,a0=1,o0=10,l0=-2,am=s=>s==="*";function c0(s,e){let t=s.split("/"),r=t.length;return t.some(am)&&(r+=l0),e&&(r+=s0),t.filter(o=>!am(o)).reduce((o,l)=>o+(i0.test(l)?r0:l===""?a0:o0),r)}function u0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function f0(s,e,t){let{routesMeta:r}=s,o={},l="/",u=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,x=l==="/"?e:e.slice(l.length)||"/",v=d0({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},x),y=h.route;if(!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Jr([l,v.pathname]),pathnameBase:y0(Jr([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=Jr([l,v.pathnameBase]))}return u}function d0(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=h0(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,x,v)=>{let{paramName:y,isOptional:S}=x;if(y==="*"){let w=f[v]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const E=f[v];return S&&!E?p[y]=void 0:p[y]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:s}}function h0(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),xg(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function p0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xg(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Eg(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function m0(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?ta(s):s;return{pathname:t?t.startsWith("/")?t:g0(t,e):e,search:S0(r),hash:M0(o)}}function g0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Du(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _0(s,e){let t=v0(s);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function x0(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=ta(s):(o=ja({},s),tn(!o.pathname||!o.pathname.includes("?"),Du("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),Du("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),Du("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}f=v>=0?e[v]:"/"}let h=m0(o,f),p=u&&u!=="/"&&u.endsWith("/"),x=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||x)&&(h.pathname+="/"),h}const Jr=s=>s.join("/").replace(/\/\/+/g,"/"),y0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),S0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,M0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function E0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const wg=["post","put","patch","delete"];new Set(wg);const w0=["get",...wg];new Set(w0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Xa.apply(this,arguments)}const ld=ye.createContext(null),T0=ye.createContext(null),Wl=ye.createContext(null),jl=ye.createContext(null),na=ye.createContext({outlet:null,matches:[],isDataRoute:!1}),Tg=ye.createContext(null);function Xl(){return ye.useContext(jl)!=null}function cd(){return Xl()||tn(!1),ye.useContext(jl).location}function Ag(s){ye.useContext(Wl).static||ye.useLayoutEffect(s)}function ud(){let{isDataRoute:s}=ye.useContext(na);return s?B0():A0()}function A0(){Xl()||tn(!1);let s=ye.useContext(ld),{basename:e,future:t,navigator:r}=ye.useContext(Wl),{matches:o}=ye.useContext(na),{pathname:l}=cd(),u=JSON.stringify(_0(o,t.v7_relativeSplatPath)),f=ye.useRef(!1);return Ag(()=>{f.current=!0}),ye.useCallback(function(p,x){if(x===void 0&&(x={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let v=x0(p,JSON.parse(u),l,x.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Jr([e,v.pathname])),(x.replace?r.replace:r.push)(v,x.state,x)},[e,r,u,l,s])}function R0(s,e){return C0(s,e)}function C0(s,e,t,r){Xl()||tn(!1);let{navigator:o}=ye.useContext(Wl),{matches:l}=ye.useContext(na),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let p=cd(),x;if(e){var v;let _=typeof e=="string"?ta(e):e;h==="/"||(v=_.pathname)!=null&&v.startsWith(h)||tn(!1),x=_}else x=p;let y=x.pathname||"/",S=y;if(h!=="/"){let _=h.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=e0(s,{pathname:S}),w=D0(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},f,_.params),pathname:Jr([h,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:Jr([h,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,t,r);return e&&w?ye.createElement(jl.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:_r.Pop}},w):w}function b0(){let s=O0(),e=E0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),t?ye.createElement("pre",{style:o},t):null,null)}const P0=ye.createElement(b0,null);class L0 extends ye.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ye.createElement(na.Provider,{value:this.props.routeContext},ye.createElement(Tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N0(s){let{routeContext:e,match:t,children:r}=s,o=ye.useContext(ld);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ye.createElement(na.Provider,{value:e},r)}function D0(s,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let u=s,f=(o=t)==null?void 0:o.errors;if(f!=null){let x=u.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);x>=0||tn(!1),u=u.slice(0,Math.min(u.length,x+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let x=0;x<u.length;x++){let v=u[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=x),v.route.id){let{loaderData:y,errors:S}=t,E=v.route.loader&&y[v.route.id]===void 0&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((x,v,y)=>{let S,E=!1,w=null,_=null;t&&(S=f&&v.route.id?f[v.route.id]:void 0,w=v.route.errorElement||P0,h&&(p<0&&y===0?(k0("route-fallback"),E=!0,_=null):p===y&&(E=!0,_=v.route.hydrateFallbackElement||null)));let g=e.concat(u.slice(0,y+1)),I=()=>{let P;return S?P=w:E?P=_:v.route.Component?P=ye.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=x,ye.createElement(N0,{match:v,routeContext:{outlet:x,matches:g,isDataRoute:t!=null},children:P})};return t&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?ye.createElement(L0,{location:t.location,revalidation:t.revalidation,component:w,error:S,children:I(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):I()},null)}var Rg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Rg||{}),Cg=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Cg||{});function I0(s){let e=ye.useContext(ld);return e||tn(!1),e}function U0(s){let e=ye.useContext(T0);return e||tn(!1),e}function F0(s){let e=ye.useContext(na);return e||tn(!1),e}function bg(s){let e=F0(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function O0(){var s;let e=ye.useContext(Tg),t=U0(),r=bg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function B0(){let{router:s}=I0(Rg.UseNavigateStable),e=bg(Cg.UseNavigateStable),t=ye.useRef(!1);return Ag(()=>{t.current=!0}),ye.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,Xa({fromRouteId:e},l)))},[s,e])}const om={};function k0(s,e,t){om[s]||(om[s]=!0)}function z0(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function gf(s){tn(!1)}function H0(s){let{basename:e="/",children:t=null,location:r,navigationType:o=_r.Pop,navigator:l,static:u=!1,future:f}=s;Xl()&&tn(!1);let h=e.replace(/^\/*/,"/"),p=ye.useMemo(()=>({basename:h,navigator:l,static:u,future:Xa({v7_relativeSplatPath:!1},f)}),[h,f,l,u]);typeof r=="string"&&(r=ta(r));let{pathname:x="/",search:v="",hash:y="",state:S=null,key:E="default"}=r,w=ye.useMemo(()=>{let _=Eg(x,h);return _==null?null:{location:{pathname:_,search:v,hash:y,state:S,key:E},navigationType:o}},[h,x,v,y,S,E,o]);return w==null?null:ye.createElement(Wl.Provider,{value:p},ye.createElement(jl.Provider,{children:t,value:w}))}function V0(s){let{children:e,location:t}=s;return R0(vf(e),t)}new Promise(()=>{});function vf(s,e){e===void 0&&(e=[]);let t=[];return ye.Children.forEach(s,(r,o)=>{if(!ye.isValidElement(r))return;let l=[...e,o];if(r.type===ye.Fragment){t.push.apply(t,vf(r.props.children,l));return}r.type!==gf&&tn(!1),!r.props.index||!r.props.children||tn(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=vf(r.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _f(s){return s===void 0&&(s=""),new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((e,t)=>{let r=s[t];return e.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}function G0(s,e){let t=_f(s);return e&&e.forEach((r,o)=>{t.has(o)||e.getAll(o).forEach(l=>{t.append(o,l)})}),t}const W0="6";try{window.__reactRouterVersion=W0}catch{}const j0="startTransition",lm=W_[j0];function X0(s){let{basename:e,children:t,future:r,window:o}=s,l=ye.useRef();l.current==null&&(l.current=Z_({window:o,v5Compat:!0}));let u=l.current,[f,h]=ye.useState({action:u.action,location:u.location}),{v7_startTransition:p}=r||{},x=ye.useCallback(v=>{p&&lm?lm(()=>h(v)):h(v)},[h,p]);return ye.useLayoutEffect(()=>u.listen(x),[u,x]),ye.useEffect(()=>z0(r),[r]),ye.createElement(H0,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:r})}var cm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(cm||(cm={}));var um;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(um||(um={}));function q0(s){let e=ye.useRef(_f(s)),t=ye.useRef(!1),r=cd(),o=ye.useMemo(()=>G0(r.search,t.current?null:e.current),[r.search]),l=ud(),u=ye.useCallback((f,h)=>{const p=_f(typeof f=="function"?f(o):f);t.current=!0,l("?"+p,h)},[l,o]);return[o,u]}let bs=[{id:"game-1",player1_name:"Alice",player2_name:"Bob",player1_score:0,player2_score:0,target_score:21,current_turn:1,game_status:"setup",round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(s,e)=>({x:0,y:150+e*30,active:!0,id:e+1})),player2_balls:Array.from({length:5},(s,e)=>({x:0,y:-150-e*30,active:!0,id:e+1}))}}];const Y0=()=>`game-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,$0={list:async(s="-created_date",e=10)=>(console.log("Mock API: list games",{sortBy:s,limit:e}),Promise.resolve(bs.slice(0,e))),create:async s=>{console.log("Mock API: create game",s);const e={id:Y0(),player1_name:s.player1_name||"Player 1",player2_name:s.player2_name||"Player 2",player1_score:s.player1_score||0,player2_score:s.player2_score||0,target_score:s.target_score||21,current_turn:s.current_turn||1,game_status:s.game_status||"setup",round_number:s.round_number||1,ball_positions:s.ball_positions||{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(t,r)=>({x:0,y:150+r*30,active:!0,id:r+1})),player2_balls:Array.from({length:5},(t,r)=>({x:0,y:-150-r*30,active:!0,id:r+1}))}};return bs.unshift(e),Promise.resolve(e)},get:async s=>{console.log("Mock API: get",s);const e=bs.find(t=>t.id===s);return Promise.resolve(e||null)},update:async(s,e)=>{console.log("Mock API: update",s,e),bs=bs.map(r=>r.id===s?{...r,...e}:r);const t=bs.find(r=>r.id===s)||null;return Promise.resolve(t)}},Ws=$0;function es({children:s,className:e="",variant:t,size:r,...o}){return D.jsx("button",{className:`inline-flex items-center justify-center rounded-md px-3 py-2 ${e}`,...o,children:s})}function fm(s){const{className:e="",...t}=s;return D.jsx("input",{className:`px-2 py-2 rounded-md bg-white/5 ${e}`,...t})}function xr({children:s,className:e=""}){return D.jsx("div",{className:`mb-2 ${e}`,children:s})}function yr({children:s,className:e=""}){return D.jsx("div",{className:`${e}`,children:s})}function Sr({children:s,className:e=""}){return D.jsx("div",{className:`${e} font-semibold`,children:s})}function gr({children:s,className:e="",variant:t}){return D.jsx("span",{className:`px-2 py-1 rounded ${e}`,children:s})}function js(s){return{Home:"/",Game:"/game",Leaderboard:"/leaderboard"}[s]||"/"}/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pg=(...s)=>s.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=ye.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>ye.createElement("svg",{ref:h,...Z0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Pg("lucide",o),...f},[...u.map(([p,x])=>ye.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=(s,e)=>{const t=ye.forwardRef(({className:r,...o},l)=>ye.createElement(Q0,{ref:l,iconNode:e,className:Pg(`lucide-${K0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=hi("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=hi("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=hi("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=hi("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=hi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=hi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=hi("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=hi("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=hi("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=hi("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=hi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function ix({children:s,value:e,onValueChange:t}){const r=Wa.Children.map(s,o=>Wa.isValidElement(o)?Wa.cloneElement(o,{value:e,onChange:l=>{t&&t(l&&l.target?l.target.value:l)}}):o);return D.jsx("div",{children:r})}function rx({children:s,className:e=""}){return D.jsx("div",{className:`inline-block ${e}`,children:s})}function sx({placeholder:s}){return D.jsx("span",{children:s})}function ax({children:s,className:e=""}){return D.jsx("div",{className:e,children:s})}function mm({children:s,value:e}){return D.jsx("div",{onClick:()=>{},children:s})}function ox(){const s=ud(),[e,t]=ye.useState([]),[r,o]=ye.useState(!1),[l,u]=ye.useState(""),[f,h]=ye.useState(""),[p,x]=ye.useState("21"),[v,y]=ye.useState(!1);ye.useEffect(()=>{S()},[]);const S=async()=>{const _=await Ws.list("-created_date",10);t(_)},E=async()=>{if(!(!l.trim()||!f.trim())){y(!0);try{const _=await Ws.create({player1_name:l.trim(),player2_name:f.trim(),target_score:parseInt(p),current_turn:1,game_status:"setup",ball_positions:{center_ball:{x:0,y:0,active:!0},player1_balls:Array.from({length:5},(g,I)=>({x:0,y:150+I*30,active:!0,id:I+1})),player2_balls:Array.from({length:5},(g,I)=>({x:0,y:-150-I*30,active:!0,id:I+1}))}});s(js("Game")+`?id=${_.id}`)}catch(_){console.error("Error creating game:",_)}y(!1)}},w=_=>{s(js("Game")+`?id=${_}`)};return D.jsx("div",{className:"min-h-screen p-4 md:p-8",children:D.jsxs("div",{className:"max-w-6xl mx-auto",children:[D.jsx("div",{className:"text-center mb-12",children:D.jsxs("div",{className:"glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden",children:[D.jsx("div",{className:"absolute inset-0 animated-gradient opacity-10"}),D.jsxs("div",{className:"relative z-10",children:[D.jsx("div",{className:"w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-magenta-500 flex items-center justify-center neon-glow",children:D.jsx(qa,{className:"w-12 h-12 text-white"})}),D.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent mb-4",children:"CenterBall"}),D.jsx("p",{className:"text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"A futuristic precision ball game where strategy meets skill. Get your ball closest to the center while controlling the arena."}),D.jsxs("div",{className:"flex flex-wrap justify-center gap-6 text-sm",children:[D.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[D.jsx(xf,{className:"w-5 h-5 neon-glow"}),D.jsx("span",{children:"Strategic Barriers"})]}),D.jsxs("div",{className:"flex items-center gap-2 text-magenta-400",children:[D.jsx(Ya,{className:"w-5 h-5 neon-glow"}),D.jsx("span",{children:"Center Ring Control"})]}),D.jsxs("div",{className:"flex items-center gap-2 text-yellow-400",children:[D.jsx(hm,{className:"w-5 h-5 neon-glow"}),D.jsx("span",{children:"3D Physics Arena"})]})]})]})]})}),D.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[D.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[D.jsx(xr,{className:"p-0 mb-6",children:D.jsxs(Sr,{className:"flex items-center gap-3 text-2xl text-white",children:[D.jsx(pm,{className:"w-6 h-6 text-cyan-400 neon-glow"}),"Start New Game"]})}),D.jsxs(yr,{className:"p-0 space-y-6",children:[D.jsxs("div",{className:"grid gap-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Red Player"}),D.jsx(fm,{placeholder:"Enter red player name",value:l,onChange:_=>u(_.target.value),className:"glass-panel border-red-400/30 text-white placeholder-gray-400 focus:border-red-400"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Blue Player"}),D.jsx(fm,{placeholder:"Enter blue player name",value:f,onChange:_=>h(_.target.value),className:"glass-panel border-blue-400/30 text-white placeholder-gray-400 focus:border-blue-400"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-sm font-medium text-gray-300 mb-2 block",children:"Game Mode"}),D.jsxs(ix,{value:p,onValueChange:x,children:[D.jsx(rx,{className:"glass-panel border-gray-400/30 text-white",children:D.jsx(sx,{})}),D.jsxs(ax,{className:"glass-panel border-gray-400/30",children:[D.jsx(mm,{value:"21",className:"text-white",children:D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(gr,{variant:"secondary",className:"bg-green-400/20 text-green-400 border-green-400/30",children:"Beginner"}),D.jsx("span",{children:"First to 21 points"})]})}),D.jsx(mm,{value:"11",className:"text-white",children:D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(gr,{variant:"secondary",className:"bg-red-400/20 text-red-400 border-red-400/30",children:"Veteran"}),D.jsx("span",{children:"First to 11 points"})]})})]})]})]})]}),D.jsx(es,{onClick:E,disabled:!l.trim()||!f.trim()||v,className:"w-full bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold py-3 rounded-xl neon-glow transition-all duration-300",children:v?D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("div",{className:"w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"}),D.jsx("span",{children:"Creating Game..."})]}):D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(pm,{className:"w-5 h-5"}),D.jsx("span",{children:"Start Battle"})]})})]})]}),D.jsxs("div",{className:"glass-panel rounded-2xl p-6",children:[D.jsx(xr,{className:"p-0 mb-6",children:D.jsxs(Sr,{className:"flex items-center gap-3 text-2xl text-white",children:[D.jsx(Ya,{className:"w-6 h-6 text-yellow-400 neon-glow"}),"Recent Games"]})}),D.jsx(yr,{className:"p-0",children:D.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:e.length>0?e.map(_=>D.jsxs("div",{className:"glass-panel rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group",children:[D.jsxs("div",{className:"flex items-center justify-between mb-3",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx(nx,{className:"w-5 h-5 text-purple-400"}),D.jsxs("div",{children:[D.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[D.jsx("span",{className:"text-red-400 font-medium",children:_.player1_name}),D.jsx("span",{className:"text-gray-400",children:"vs"}),D.jsx("span",{className:"text-blue-400 font-medium",children:_.player2_name})]}),D.jsx("div",{className:"text-xs text-gray-400",children:_.game_status==="finished"?"Completed":"In Progress"})]})]}),D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsxs("div",{className:"text-right",children:[D.jsxs("div",{className:"text-sm font-bold text-white",children:[_.player1_score," - ",_.player2_score]}),D.jsxs(gr,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:["to ",_.target_score]})]}),_.game_status!=="finished"&&D.jsx(es,{onClick:()=>w(_.id),size:"sm",className:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300",children:"Continue"})]})]}),_.winner&&D.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[D.jsx(hm,{className:"w-4 h-4 text-yellow-400 neon-glow"}),D.jsxs("span",{className:"text-yellow-400 font-medium",children:["Winner: ",_.winner]})]})]},_.id)):D.jsxs("div",{className:"text-center py-8 text-gray-400",children:[D.jsx(qa,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),D.jsx("p",{children:"No games yet. Start your first battle!"})]})})})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="179",lx=0,gm=1,cx=2,Ng=1,Dg=2,ki=3,wr=0,Dn=1,xi=2,Mr=0,qs=1,vm=2,_m=3,xm=4,ux=5,$r=100,fx=101,dx=102,hx=103,px=104,mx=200,gx=201,vx=202,_x=203,yf=204,Sf=205,xx=206,yx=207,Sx=208,Mx=209,Ex=210,wx=211,Tx=212,Ax=213,Rx=214,Mf=0,Ef=1,wf=2,Ks=3,Tf=4,Af=5,Rf=6,Cf=7,ql=0,Cx=1,bx=2,Er=0,Px=1,Lx=2,Nx=3,Ig=4,Dx=5,Ix=6,Ux=7,Ug=300,Zs=301,Qs=302,bf=303,Pf=304,Yl=306,Lf=1e3,Zr=1001,Nf=1002,di=1003,Fx=1004,dl=1005,yi=1006,Iu=1007,Qr=1008,Ei=1009,Fg=1010,Og=1011,$a=1012,dd=1013,ts=1014,zi=1015,Ja=1016,hd=1017,pd=1018,Ka=1020,Bg=35902,kg=1021,zg=1022,fi=1023,Za=1026,Qa=1027,Hg=1028,md=1029,Vg=1030,gd=1031,vd=1033,Il=33776,Ul=33777,Fl=33778,Ol=33779,Df=35840,If=35841,Uf=35842,Ff=35843,Of=36196,Bf=37492,kf=37496,zf=37808,Hf=37809,Vf=37810,Gf=37811,Wf=37812,jf=37813,Xf=37814,qf=37815,Yf=37816,$f=37817,Kf=37818,Zf=37819,Qf=37820,Jf=37821,Bl=36492,ed=36494,td=36495,Gg=36283,nd=36284,id=36285,rd=36286,Ox=3200,Bx=3201,$l=0,kx=1,vr="",Qn="srgb",Js="srgb-linear",zl="linear",Dt="srgb",Ps=7680,ym=519,zx=512,Hx=513,Vx=514,Wg=515,Gx=516,Wx=517,jx=518,Xx=519,Sm=35044,Mm="300 es",Si=2e3,Hl=2001;class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Vl=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function qx(s,e){return(s%e+e)%e}function Fu(s,e,t){return(1-t)*s+t*e}function Ba(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class to{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];const y=l[u+0],S=l[u+1],E=l[u+2],w=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||h!==y||p!==S||x!==E){let _=1-f;const g=h*y+p*S+x*E+v*w,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const O=Math.sqrt(P),k=Math.atan2(O,g*I);_=Math.sin(_*k)/O,f=Math.sin(f*k)/O}const A=f*I;if(h=h*_+y*A,p=p*_+S*A,x=x*_+E*A,v=v*_+w*A,_===1-f){const O=1/Math.sqrt(h*h+p*p+x*x+v*v);h*=O,p*=O,x*=O,v*=O}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],E=l[u+3];return e[t]=f*E+x*v+h*S-p*y,e[t+1]=h*E+x*y+p*v-f*S,e[t+2]=p*E+x*S+f*y-h*v,e[t+3]=x*E-f*v-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),x=f(o/2),v=f(l/2),y=h(r/2),S=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=y*x*v+p*S*E,this._y=p*S*v-y*x*E,this._z=p*x*E+y*S*v,this._w=p*x*v-y*S*E;break;case"YXZ":this._x=y*x*v+p*S*E,this._y=p*S*v-y*x*E,this._z=p*x*E-y*S*v,this._w=p*x*v+y*S*E;break;case"ZXY":this._x=y*x*v-p*S*E,this._y=p*S*v+y*x*E,this._z=p*x*E+y*S*v,this._w=p*x*v-y*S*E;break;case"ZYX":this._x=y*x*v-p*S*E,this._y=p*S*v+y*x*E,this._z=p*x*E-y*S*v,this._w=p*x*v+y*S*E;break;case"YZX":this._x=y*x*v+p*S*E,this._y=p*S*v+y*x*E,this._z=p*x*E-y*S*v,this._w=p*x*v-y*S*E;break;case"XZY":this._x=y*x*v-p*S*E,this._y=p*S*v-y*x*E,this._z=p*x*E+y*S*v,this._w=p*x*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],x=t[6],v=t[10],y=r+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(x-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+x)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,x=t._w;return this._x=r*x+u*f+o*p-l*h,this._y=o*x+u*h+l*f-r*p,this._z=l*x+u*p+r*h-o*f,this._w=u*x-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),x=Math.atan2(p,f),v=Math.sin((1-t)*x)/p,y=Math.sin(t*x)/p;return this._w=u*v+this._w*y,this._x=r*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),x=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+h*p+u*v-f*x,this.y=r+h*x+f*p-l*v,this.z=o+h*v+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new ne,Em=new to;class ft{constructor(e,t,r,o,l,u,f,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],x=r[4],v=r[7],y=r[2],S=r[5],E=r[8],w=o[0],_=o[3],g=o[6],I=o[1],P=o[4],A=o[7],O=o[2],k=o[5],H=o[8];return l[0]=u*w+f*I+h*O,l[3]=u*_+f*P+h*k,l[6]=u*g+f*A+h*H,l[1]=p*w+x*I+v*O,l[4]=p*_+x*P+v*k,l[7]=p*g+x*A+v*H,l[2]=y*w+S*I+E*O,l[5]=y*_+S*P+E*k,l[8]=y*g+S*A+E*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*f*p-r*l*x+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],v=x*u-f*p,y=f*h-x*l,S=p*l-u*h,E=t*v+r*y+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(o*p-x*r)*w,e[2]=(f*r-o*u)*w,e[3]=y*w,e[4]=(x*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Bu.makeScale(e,t)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new ft;function jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yx(){const s=Gl("canvas");return s.style.display="block",s}const wm={};function Ys(s){s in wm||(wm[s]=!0,console.warn(s))}function $x(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Tm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Am=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kx(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=Vi(o.r),o.g=Vi(o.g),o.b=Vi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=$s(o.r),o.g=$s(o.g),o.b=$s(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vr?zl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:zl,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const At=Kx();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class Zx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Gl("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Vi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Vi(t[r]/255)*255):t[r]=Vi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(ku(o[u].image)):l.push(ku(o[u]))}else l=ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jx=0;const zu=new ne;class In extends ia{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=Zr,o=Zr,l=yi,u=Qr,f=fi,h=Ei,p=In.DEFAULT_ANISOTROPY,x=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=eo(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ug;In.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],x=h[4],v=h[8],y=h[1],S=h[5],E=h[9],w=h[2],_=h[6],g=h[10];if(Math.abs(x-y)<.01&&Math.abs(v-w)<.01&&Math.abs(E-_)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+w)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,O=(g+1)/2,k=(x+y)/4,H=(v+w)/4,q=(E+_)/4;return P>A&&P>O?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=k/r,l=H/r):A>O?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=k/o,l=q/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=H/l,o=q/l),this.set(r,o,l,t),this}let I=Math.sqrt((_-E)*(_-E)+(v-w)*(v-w)+(y-x)*(y-x));return Math.abs(I)<.001&&(I=1),this.x=(_-E)/I,this.y=(v-w)/I,this.z=(y-x)/I,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends ia{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new In(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new _d(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends ey{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xg extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,oi):oi.fromBufferAttribute(l,u),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),pl.subVectors(this.max,ka),Ns.subVectors(e.a,ka),Ds.subVectors(e.b,ka),Is.subVectors(e.c,ka),ur.subVectors(Ds,Ns),fr.subVectors(Is,Ds),Hr.subVectors(Ns,Is);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Hr.z,Hr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Hr.z,0,-Hr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Hr.y,Hr.x,0];return!Hu(t,Ns,Ds,Is,pl)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,Ns,Ds,Is,pl))?!1:(ml.crossVectors(ur,fr),t=[ml.x,ml.y,ml.z],Hu(t,Ns,Ds,Is,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],oi=new ne,hl=new no,Ns=new ne,Ds=new ne,Is=new ne,ur=new ne,fr=new ne,Hr=new ne,ka=new ne,pl=new ne,ml=new ne,Vr=new ne;function Hu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Vr.fromArray(s,l);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),x=r.dot(Vr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const ny=new no,za=new ne,Vu=new ne;class xd{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ny.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(za,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(Vu)),this.expandByPoint(za.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new ne,Gu=new ne,gl=new ne,dr=new ne,Wu=new ne,vl=new ne,ju=new ne;class qg{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gu.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(Gu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(gl),f=dr.dot(this.direction),h=-dr.dot(gl),p=dr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,E;if(x>0)if(v=u*h-f,y=u*f-h,E=l*x,v>=0)if(y>=-E)if(y<=E){const w=1/x;v*=w,y*=w,S=v*(v+u*y+2*f)+y*(u*v+y+2*h)+p}else y=l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*h)+p;else y=-l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*h)+p;else y<=-E?(v=Math.max(0,-(-u*l+f)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(v=Math.max(0,-(u*l+f)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p);else y=u>0?-l:l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gu).addScaledVector(gl,y),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,o,l){Wu.subVectors(t,e),vl.subVectors(r,e),ju.crossVectors(Wu,vl);let u=this.direction.dot(ju),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;dr.subVectors(this.origin,e);const h=f*this.direction.dot(vl.crossVectors(dr,vl));if(h<0)return null;const p=f*this.direction.dot(Wu.cross(dr));if(p<0||h+p>u)return null;const x=-f*dr.dot(ju);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,r,o,l,u,f,h,p,x,v,y,S,E,w,_){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,x,v,y,S,E,w,_)}set(e,t,r,o,l,u,f,h,p,x,v,y,S,E,w,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=p,g[6]=x,g[10]=v,g[14]=y,g[3]=S,g[7]=E,g[11]=w,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),u=1/Us.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,E=f*x,w=f*v;t[0]=h*x,t[4]=-h*v,t[8]=p,t[1]=S+E*p,t[5]=y-w*p,t[9]=-f*h,t[2]=w-y*p,t[6]=E+S*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*x,S=h*v,E=p*x,w=p*v;t[0]=y+w*f,t[4]=E*f-S,t[8]=u*p,t[1]=u*v,t[5]=u*x,t[9]=-f,t[2]=S*f-E,t[6]=w+y*f,t[10]=u*h}else if(e.order==="ZXY"){const y=h*x,S=h*v,E=p*x,w=p*v;t[0]=y-w*f,t[4]=-u*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=u*x,t[9]=w-y*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const y=u*x,S=u*v,E=f*x,w=f*v;t[0]=h*x,t[4]=E*p-S,t[8]=y*p+w,t[1]=h*v,t[5]=w*p+y,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*p,E=f*h,w=f*p;t[0]=h*x,t[4]=w-y*v,t[8]=E*v+S,t[1]=v,t[5]=u*x,t[9]=-f*x,t[2]=-p*x,t[6]=S*v+E,t[10]=y-w*v}else if(e.order==="XZY"){const y=u*h,S=u*p,E=f*h,w=f*p;t[0]=h*x,t[4]=-v,t[8]=p*x,t[1]=y*v+w,t[5]=u*x,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*x,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ry)}lookAt(e,t,r){const o=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),hr.crossVectors(r,zn),hr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),hr.crossVectors(r,zn)),hr.normalize(),_l.crossVectors(zn,hr),o[0]=hr.x,o[4]=_l.x,o[8]=zn.x,o[1]=hr.y,o[5]=_l.y,o[9]=zn.y,o[2]=hr.z,o[6]=_l.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],x=r[1],v=r[5],y=r[9],S=r[13],E=r[2],w=r[6],_=r[10],g=r[14],I=r[3],P=r[7],A=r[11],O=r[15],k=o[0],H=o[4],q=o[8],b=o[12],C=o[1],F=o[5],ae=o[9],Q=o[13],se=o[2],le=o[6],ce=o[10],fe=o[14],V=o[3],oe=o[7],re=o[11],U=o[15];return l[0]=u*k+f*C+h*se+p*V,l[4]=u*H+f*F+h*le+p*oe,l[8]=u*q+f*ae+h*ce+p*re,l[12]=u*b+f*Q+h*fe+p*U,l[1]=x*k+v*C+y*se+S*V,l[5]=x*H+v*F+y*le+S*oe,l[9]=x*q+v*ae+y*ce+S*re,l[13]=x*b+v*Q+y*fe+S*U,l[2]=E*k+w*C+_*se+g*V,l[6]=E*H+w*F+_*le+g*oe,l[10]=E*q+w*ae+_*ce+g*re,l[14]=E*b+w*Q+_*fe+g*U,l[3]=I*k+P*C+A*se+O*V,l[7]=I*H+P*F+A*le+O*oe,l[11]=I*q+P*ae+A*ce+O*re,l[15]=I*b+P*Q+A*fe+O*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],x=e[2],v=e[6],y=e[10],S=e[14],E=e[3],w=e[7],_=e[11],g=e[15];return E*(+l*h*v-o*p*v-l*f*y+r*p*y+o*f*S-r*h*S)+w*(+t*h*S-t*p*y+l*u*y-o*u*S+o*p*x-l*h*x)+_*(+t*p*v-t*f*S-l*u*v+r*u*S+l*f*x-r*p*x)+g*(-o*f*x-t*h*v+t*f*y+o*u*v-r*u*y+r*h*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],v=e[9],y=e[10],S=e[11],E=e[12],w=e[13],_=e[14],g=e[15],I=v*_*p-w*y*p+w*h*S-f*_*S-v*h*g+f*y*g,P=E*y*p-x*_*p-E*h*S+u*_*S+x*h*g-u*y*g,A=x*w*p-E*v*p+E*f*S-u*w*S-x*f*g+u*v*g,O=E*v*h-x*w*h-E*f*y+u*w*y+x*f*_-u*v*_,k=t*I+r*P+o*A+l*O;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/k;return e[0]=I*H,e[1]=(w*y*l-v*_*l-w*o*S+r*_*S+v*o*g-r*y*g)*H,e[2]=(f*_*l-w*h*l+w*o*p-r*_*p-f*o*g+r*h*g)*H,e[3]=(v*h*l-f*y*l-v*o*p+r*y*p+f*o*S-r*h*S)*H,e[4]=P*H,e[5]=(x*_*l-E*y*l+E*o*S-t*_*S-x*o*g+t*y*g)*H,e[6]=(E*h*l-u*_*l-E*o*p+t*_*p+u*o*g-t*h*g)*H,e[7]=(u*y*l-x*h*l+x*o*p-t*y*p-u*o*S+t*h*S)*H,e[8]=A*H,e[9]=(E*v*l-x*w*l-E*r*S+t*w*S+x*r*g-t*v*g)*H,e[10]=(u*w*l-E*f*l+E*r*p-t*w*p-u*r*g+t*f*g)*H,e[11]=(x*f*l-u*v*l-x*r*p+t*v*p+u*r*S-t*f*S)*H,e[12]=O*H,e[13]=(x*w*o-E*v*o+E*r*y-t*w*y-x*r*_+t*v*_)*H,e[14]=(E*f*o-u*w*o-E*r*h+t*w*h+u*r*_-t*f*_)*H,e[15]=(u*v*o-x*f*o+x*r*h-t*v*h-u*r*y+t*f*y)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+r,x*h-o*u,0,p*h-o*f,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,x=u+u,v=f+f,y=l*p,S=l*x,E=l*v,w=u*x,_=u*v,g=f*v,I=h*p,P=h*x,A=h*v,O=r.x,k=r.y,H=r.z;return o[0]=(1-(w+g))*O,o[1]=(S+A)*O,o[2]=(E-P)*O,o[3]=0,o[4]=(S-A)*k,o[5]=(1-(y+g))*k,o[6]=(_+I)*k,o[7]=0,o[8]=(E+P)*H,o[9]=(_-I)*H,o[10]=(1-(y+w))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Us.set(o[0],o[1],o[2]).length();const u=Us.set(o[4],o[5],o[6]).length(),f=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const p=1/l,x=1/u,v=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=x,li.elements[5]*=x,li.elements[6]*=x,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,t.setFromRotationMatrix(li),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Si,h=!1){const p=this.elements,x=2*l/(t-e),v=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let E,w;if(h)E=l/(u-l),w=u*l/(u-l);else if(f===Si)E=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===Hl)E=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Si,h=!1){const p=this.elements,x=2/(t-e),v=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let E,w;if(h)E=1/(u-l),w=u/(u-l);else if(f===Si)E=-2/(u-l),w=-(u+l)/(u-l);else if(f===Hl)E=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Us=new ne,li=new Xt,iy=new ne(0,0,0),ry=new ne(1,1,1),hr=new ne,_l=new ne,zn=new ne,Rm=new Xt,Cm=new to;class Jn{constructor(e=0,t=0,r=0,o=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const bm=new ne,Fs=new to,Fi=new Xt,xl=new ne,Ha=new ne,ay=new ne,oy=new to,Pm=new ne(1,0,0),Lm=new ne(0,1,0),Nm=new ne(0,0,1),Dm={type:"added"},ly={type:"removed"},Os={type:"childadded",child:null},Xu={type:"childremoved",child:null};class yn extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new ne,t=new Jn,r=new to,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ft}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ha,xl,this.up):Fi.lookAt(xl,Ha,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ly),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yn.DEFAULT_UP=new ne(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ne,Oi=new ne,qu=new ne,Bi=new ne,Bs=new ne,ks=new ne,Im=new ne,Yu=new ne,$u=new ne,Ku=new ne,Zu=new jt,Qu=new jt,Ju=new jt;class ui{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),Oi.subVectors(r,t),qu.subVectors(e,t);const u=ci.dot(ci),f=ci.dot(Oi),h=ci.dot(qu),p=Oi.dot(Oi),x=Oi.dot(qu),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*h-f*x)*y,E=(u*x-f*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(u,Bi.y),h.addScaledVector(f,Bi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,t),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),Oi.subVectors(e,t),ci.cross(Oi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ci.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Bs.subVectors(o,r),ks.subVectors(l,r),Yu.subVectors(e,r);const h=Bs.dot(Yu),p=ks.dot(Yu);if(h<=0&&p<=0)return t.copy(r);$u.subVectors(e,o);const x=Bs.dot($u),v=ks.dot($u);if(x>=0&&v<=x)return t.copy(o);const y=h*v-x*p;if(y<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(Bs,u);Ku.subVectors(e,l);const S=Bs.dot(Ku),E=ks.dot(Ku);if(E>=0&&S<=E)return t.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(ks,f);const _=x*E-S*v;if(_<=0&&v-x>=0&&S-E>=0)return Im.subVectors(l,o),f=(v-x)/(v-x+(S-E)),t.copy(o).addScaledVector(Im,f);const g=1/(_+w+y);return u=w*g,f=y*g,t.copy(r).addScaledVector(Bs,u).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ef(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ht{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=qx(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ef(u,l,e+1/3),this.g=ef(u,l,e),this.b=ef(u,l,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const r=Yg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return At.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const x=(f+u)/2;if(f===u)h=0,p=0;else{const v=u-f;switch(p=x<=.5?v/(u+f):v/(2-u-f),u){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Qn){At.workingToColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(yl);const r=Fu(pr.h,yl.h,t),o=Fu(pr.s,yl.s,t),l=Fu(pr.l,yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ht;ht.NAMES=Yg;let cy=0;class is extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=qs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yf&&(r.blendSrc=this.blendSrc),this.blendDst!==Sf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sd extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new ne,Sl=new xt;let uy=0;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Sm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ba(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}}class $g extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kg extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fy=0;const Zn=new Xt,tf=new yn,zs=new ne,Hn=new no,Va=new no,ln=new ne;class Gi extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Kg:$g)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,r){return Zn.makeTranslation(e,t,r),this.applyMatrix4(Zn),this}scale(e,t,r){return Zn.makeScale(e,t,r),this.applyMatrix4(Zn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Hn.min,Va.min),Hn.expandByPoint(ln),ln.addVectors(Hn.max,Va.max),Hn.expandByPoint(ln)):(Hn.expandByPoint(Va.min),Hn.expandByPoint(Va.max))}Hn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)ln.fromBufferAttribute(f,p),h&&(zs.fromBufferAttribute(e,p),ln.add(zs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let q=0;q<r.count;q++)f[q]=new ne,h[q]=new ne;const p=new ne,x=new ne,v=new ne,y=new xt,S=new xt,E=new xt,w=new ne,_=new ne;function g(q,b,C){p.fromBufferAttribute(r,q),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),y.fromBufferAttribute(l,q),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),x.sub(p),v.sub(p),S.sub(y),E.sub(y);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(w.copy(x).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(F),_.copy(v).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(F),f[q].add(w),f[b].add(w),f[C].add(w),h[q].add(_),h[b].add(_),h[C].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,b=I.length;q<b;++q){const C=I[q],F=C.start,ae=C.count;for(let Q=F,se=F+ae;Q<se;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new ne,A=new ne,O=new ne,k=new ne;function H(q){O.fromBufferAttribute(o,q),k.copy(O);const b=f[q];P.copy(b),P.sub(O.multiplyScalar(O.dot(b))).normalize(),A.crossVectors(k,b);const F=A.dot(h[q])<0?-1:1;u.setXYZW(q,P.x,P.y,P.z,F)}for(let q=0,b=I.length;q<b;++q){const C=I[q],F=C.start,ae=C.count;for(let Q=F,se=F+ae;Q<se;Q+=3)H(e.getX(Q+0)),H(e.getX(Q+1)),H(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,p=new ne,x=new ne,v=new ne;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,_),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,_),f.add(x),h.add(x),p.add(x),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,v=f.normalized,y=new p.constructor(h.length*x);let S=0,E=0;for(let w=0,_=h.length;w<_;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*x;for(let g=0;g<x;g++)y[E++]=p[S++]}return new Mi(y,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,v=p.length;x<v;x++){const y=p[x],S=e(y,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];x.push(S.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],v=l[p];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new Xt,Gr=new qg,Ml=new xd,Fm=new ne,El=new ne,wl=new ne,Tl=new ne,nf=new ne,Al=new ne,Om=new ne,Rl=new ne;class $t extends yn{constructor(e=new Gi,t=new Sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Al.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],v=l[h];x!==0&&(nf.fromBufferAttribute(v,e),u?Al.addScaledVector(nf,x):Al.addScaledVector(nf.sub(t),x))}t.add(Al)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Ml,Fm)===null||Gr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(Um),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,w=y.length;E<w;E++){const _=y[E],g=u[_.materialIndex],I=Math.max(_.start,S.start),P=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let A=I,O=P;A<O;A+=3){const k=f.getX(A),H=f.getX(A+1),q=f.getX(A+2);o=Cl(this,g,e,r,p,x,v,k,H,q),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let _=E,g=w;_<g;_+=3){const I=f.getX(_),P=f.getX(_+1),A=f.getX(_+2);o=Cl(this,u,e,r,p,x,v,I,P,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,w=y.length;E<w;E++){const _=y[E],g=u[_.materialIndex],I=Math.max(_.start,S.start),P=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let A=I,O=P;A<O;A+=3){const k=A,H=A+1,q=A+2;o=Cl(this,g,e,r,p,x,v,k,H,q),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let _=E,g=w;_<g;_+=3){const I=_,P=_+1,A=_+2;o=Cl(this,u,e,r,p,x,v,I,P,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function dy(s,e,t,r,o,l,u,f){let h;if(e.side===Dn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===wr,f),h===null)return null;Rl.copy(f),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function Cl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,El),s.getVertexPosition(h,wl),s.getVertexPosition(p,Tl);const x=dy(s,e,t,r,El,wl,Tl,Om);if(x){const v=new ne;ui.getBarycoord(Om,El,wl,Tl,v),o&&(x.uv=ui.getInterpolatedAttribute(o,f,h,p,v,new xt)),l&&(x.uv1=ui.getInterpolatedAttribute(l,f,h,p,v,new xt)),u&&(x.normal=ui.getInterpolatedAttribute(u,f,h,p,v,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:f,b:h,c:p,normal:new ne,materialIndex:0};ui.getNormal(El,wl,Tl,y.normal),x.face=y,x.barycoord=v}return x}class Hi extends Gi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(v,2));function E(w,_,g,I,P,A,O,k,H,q,b){const C=A/H,F=O/q,ae=A/2,Q=O/2,se=k/2,le=H+1,ce=q+1;let fe=0,V=0;const oe=new ne;for(let re=0;re<ce;re++){const U=re*F-Q;for(let Z=0;Z<le;Z++){const Ie=Z*C-ae;oe[w]=Ie*I,oe[_]=U*P,oe[g]=se,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[_]=0,oe[g]=k>0?1:-1,x.push(oe.x,oe.y,oe.z),v.push(Z/H),v.push(1-re/q),fe+=1}}for(let re=0;re<q;re++)for(let U=0;U<H;U++){const Z=y+U+le*re,Ie=y+U+le*(re+1),Be=y+(U+1)+le*(re+1),J=y+(U+1)+le*re;h.push(Z,Ie,J),h.push(Ie,Be,J),V+=6}f.addGroup(S,V,b),S+=V,y+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=ea(s[t]);for(const o in r)e[o]=r[o]}return e}function hy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const py={clone:ea,merge:Tn};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Qg extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ne,Bm=new xt,km=new xt;class Vn extends Qg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,Bm,km),t.subVectors(km,Bm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class vy extends yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const l=new Vn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new Vn(Hs,Vs,e,t);u.layers=this.layers,this.add(u);const f=new Vn(Hs,Vs,e,t);f.layers=this.layers,this.add(f);const h=new Vn(Hs,Vs,e,t);h.layers=this.layers,this.add(h);const p=new Vn(Hs,Vs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Si)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Jg extends In{constructor(e=[],t=Zs,r,o,l,u,f,h,p,x){super(e,t,r,o,l,u,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _y extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Jg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hi(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:Mr});l.uniforms.tEquirect.value=t;const u=new $t(o,l),f=t.minFilter;return t.minFilter===Qr&&(t.minFilter=yi),new vy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class bl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),g=this._getHandJoint(p,w);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class yy extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sf=new ne,Sy=new ne,My=new ft;class qr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=sf.subVectors(r,t).cross(Sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(sf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||My.getNormalMatrix(e),o=this.coplanarPoint(sf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new xd,Ey=new xt(.5,.5),Pl=new ne;class Md{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Si,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],x=l[4],v=l[5],y=l[6],S=l[7],E=l[8],w=l[9],_=l[10],g=l[11],I=l[12],P=l[13],A=l[14],O=l[15];if(o[0].setComponents(p-u,S-x,g-E,O-I).normalize(),o[1].setComponents(p+u,S+x,g+E,O+I).normalize(),o[2].setComponents(p+f,S+v,g+w,O+P).normalize(),o[3].setComponents(p-f,S-v,g-w,O-P).normalize(),r)o[4].setComponents(h,y,_,A).normalize(),o[5].setComponents(p-h,S-y,g-_,O-A).normalize();else if(o[4].setComponents(p-h,S-y,g-_,O-A).normalize(),t===Si)o[5].setComponents(p+h,S+y,g+_,O+A).normalize();else if(t===Hl)o[5].setComponents(h,y,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=Ey.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Pl.x=o.normal.x>0?e.max.x:e.min.x,Pl.y=o.normal.y>0?e.max.y:e.min.y,Pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ev extends In{constructor(e,t,r=ts,o,l,u,f=di,h=di,p,x=Za,v=1){if(x!==Za&&x!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,o,l,u,f,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class io extends Gi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,x=h+1,v=e/f,y=t/h,S=[],E=[],w=[],_=[];for(let g=0;g<x;g++){const I=g*y-u;for(let P=0;P<p;P++){const A=P*v-l;E.push(A,-I,0),w.push(0,0,1),_.push(P/f),_.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<f;I++){const P=I+p*g,A=I+p*(g+1),O=I+1+p*(g+1),k=I+1+p*g;S.push(P,A,k),S.push(A,O,k)}this.setIndex(S),this.setAttribute("position",new Gn(E,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ed extends Gi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],x=[];let v=e;const y=(t-e)/o,S=new ne,E=new xt;for(let w=0;w<=o;w++){for(let _=0;_<=r;_++){const g=l+_/r*u;S.x=v*Math.cos(g),S.y=v*Math.sin(g),h.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,x.push(E.x,E.y)}v+=y}for(let w=0;w<o;w++){const _=w*(r+1);for(let g=0;g<r;g++){const I=g+_,P=I,A=I+r+1,O=I+r+2,k=I+1;f.push(P,A,k),f.push(A,O,k)}}this.setIndex(f),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wd extends Gi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const x=[],v=new ne,y=new ne,S=[],E=[],w=[],_=[];for(let g=0;g<=r;g++){const I=[],P=g/r;let A=0;g===0&&u===0?A=.5/t:g===r&&h===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){const k=O/t;v.x=-e*Math.cos(o+k*l)*Math.sin(u+P*f),v.y=e*Math.cos(u+P*f),v.z=e*Math.sin(o+k*l)*Math.sin(u+P*f),E.push(v.x,v.y,v.z),y.copy(v).normalize(),w.push(y.x,y.y,y.z),_.push(k+A,1-P),I.push(p++)}x.push(I)}for(let g=0;g<r;g++)for(let I=0;I<t;I++){const P=x[g][I+1],A=x[g][I],O=x[g+1][I],k=x[g+1][I+1];(g!==0||u>0)&&S.push(P,A,k),(g!==r-1||h<Math.PI)&&S.push(A,O,k)}this.setIndex(S),this.setAttribute("position",new Gn(E,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wy extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class af extends wy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends is{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zm extends is{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ty extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tv extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const lf=new Xt,Hm=new ne,Vm=new ne;class Ry{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Md,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cy extends Ry{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Vl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class by extends tv{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Cy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Py extends Qg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ly extends tv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ny extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gm=new Xt;class Dy{constructor(e,t,r=0,o=1/0){this.ray=new qg(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new yd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gm),this}intersectObject(e,t=!0,r=[]){return sd(e,this,r,t),r.sort(Wm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)sd(e[o],this,r,t);return r.sort(Wm),r}}function Wm(s,e){return s.distance-e.distance}function sd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)sd(l[u],e,t,!0)}}function jm(s,e,t,r){const o=Iy(r);switch(t){case kg:return s*e;case Hg:return s*e/o.components*o.byteLength;case md:return s*e/o.components*o.byteLength;case Vg:return s*e*2/o.components*o.byteLength;case gd:return s*e*2/o.components*o.byteLength;case zg:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case vd:return s*e*4/o.components*o.byteLength;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:case Ff:return Math.max(s,16)*Math.max(e,8)/4;case Df:case Uf:return Math.max(s,8)*Math.max(e,8)/2;case Of:case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case ed:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gg:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iy(s){switch(s){case Ei:case Fg:return{byteLength:1,components:1};case $a:case Og:case Ja:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case ts:case dd:case zi:return{byteLength:4,components:1};case Bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nv(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Uy(s){const e=new WeakMap;function t(f,h){const p=f.array,x=f.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,x),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const x=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,x);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,v[y]=w)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];s.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
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
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
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
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$y=`#ifdef USE_IRIDESCENCE
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
#endif`,Ky=`#ifdef USE_BUMPMAP
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sS=`#define PI 3.141592653589793
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
} // validated`,aS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oS=`vec3 transformedNormal = objectNormal;
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
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
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
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
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
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DS=`PhysicalMaterial material;
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
#endif`,IS=`struct PhysicalMaterial {
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
}`,US=`
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
#endif`,FS=`#if defined( RE_IndirectDiffuse )
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jS=`#if defined( USE_POINTS_UV )
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
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
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
#endif`,QS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
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
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,GM=`#define DISTANCE
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
}`,WM=`#define DISTANCE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
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
}`,YM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,KM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,JM=`#define MATCAP
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
}`,eE=`#define MATCAP
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
}`,tE=`#define NORMAL
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
}`,nE=`#define NORMAL
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
}`,iE=`#define PHONG
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
}`,rE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,aE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,lE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,uE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
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
}`,pE=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:By,alphamap_pars_fragment:ky,alphatest_fragment:zy,alphatest_pars_fragment:Hy,aomap_fragment:Vy,aomap_pars_fragment:Gy,batching_pars_vertex:Wy,batching_vertex:jy,begin_vertex:Xy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:$y,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:aS,defaultnormal_vertex:oS,displacementmap_pars_vertex:lS,displacementmap_vertex:cS,emissivemap_fragment:uS,emissivemap_pars_fragment:fS,colorspace_fragment:dS,colorspace_pars_fragment:hS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:CS,envmap_vertex:_S,fog_vertex:xS,fog_pars_vertex:yS,fog_fragment:SS,fog_pars_fragment:MS,gradientmap_pars_fragment:ES,lightmap_pars_fragment:wS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:AS,lights_pars_begin:RS,lights_toon_fragment:bS,lights_toon_pars_fragment:PS,lights_phong_fragment:LS,lights_phong_pars_fragment:NS,lights_physical_fragment:DS,lights_physical_pars_fragment:IS,lights_fragment_begin:US,lights_fragment_maps:FS,lights_fragment_end:OS,logdepthbuf_fragment:BS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:HS,map_fragment:VS,map_pars_fragment:GS,map_particle_fragment:WS,map_particle_pars_fragment:jS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:qS,morphinstance_vertex:YS,morphcolor_vertex:$S,morphnormal_vertex:KS,morphtarget_pars_vertex:ZS,morphtarget_vertex:QS,normal_fragment_begin:JS,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:fM,project_vertex:dM,dithering_fragment:hM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:_M,shadowmap_vertex:xM,shadowmask_pars_fragment:yM,skinbase_vertex:SM,skinning_pars_vertex:MM,skinning_vertex:EM,skinnormal_vertex:wM,specularmap_fragment:TM,specularmap_pars_fragment:AM,tonemapping_fragment:RM,tonemapping_pars_fragment:CM,transmission_fragment:bM,transmission_pars_fragment:PM,uv_pars_fragment:LM,uv_pars_vertex:NM,uv_vertex:DM,worldpos_vertex:IM,background_vert:UM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:BM,cube_vert:kM,cube_frag:zM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:GM,distanceRGBA_frag:WM,equirect_vert:jM,equirect_frag:XM,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:$M,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:QM,meshmatcap_vert:JM,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:rE,meshphysical_vert:sE,meshphysical_frag:aE,meshtoon_vert:oE,meshtoon_frag:lE,points_vert:cE,points_frag:uE,shadow_vert:fE,shadow_frag:dE,sprite_vert:hE,sprite_frag:pE},Ne={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Tn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Tn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Tn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Tn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ht(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Tn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Tn([Ne.points,Ne.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Tn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Tn([Ne.common,Ne.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Tn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Tn([Ne.sprite,Ne.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Tn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Tn([Ne.lights,Ne.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ll={r:0,b:0,g:0},jr=new Jn,mE=new Xt;function gE(s,e,t,r,o,l,u){const f=new ht(0);let h=l===!0?0:1,p,x,v=null,y=0,S=null;function E(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function w(P){let A=!1;const O=E(P);O===null?g(f,h):O&&O.isColor&&(g(O,1),A=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(P,A){const O=E(A);O&&(O.isCubeTexture||O.mapping===Yl)?(x===void 0&&(x=new $t(new Hi(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ea(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(k,H,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),jr.copy(A.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),x.material.uniforms.envMap.value=O,x.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(jr)),x.material.toneMapped=At.getTransfer(O.colorSpace)!==Dt,(v!==O||y!==O.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=O,y=O.version,S=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new $t(new io(2,2),new Tr({name:"BackgroundMaterial",uniforms:ea(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=At.getTransfer(O.colorSpace)!==Dt,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||y!==O.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=O,y=O.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function g(P,A){P.getRGB(Ll,Zg(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,A,u)}function I(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,A=1){f.set(P),h=A,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,g(f,h)},render:w,addToRenderList:_,dispose:I}}function vE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function f(C,F,ae,Q,se){let le=!1;const ce=v(Q,ae,F);l!==ce&&(l=ce,p(l.object)),le=S(C,Q,ae,se),le&&E(C,Q,ae,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,A(C,F,ae,Q),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function v(C,F,ae){const Q=ae.wireframe===!0;let se=r[C.id];se===void 0&&(se={},r[C.id]=se);let le=se[F.id];le===void 0&&(le={},se[F.id]=le);let ce=le[Q];return ce===void 0&&(ce=y(h()),le[Q]=ce),ce}function y(C){const F=[],ae=[],Q=[];for(let se=0;se<t;se++)F[se]=0,ae[se]=0,Q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ae,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,F,ae,Q){const se=l.attributes,le=F.attributes;let ce=0;const fe=ae.getAttributes();for(const V in fe)if(fe[V].location>=0){const re=se[V];let U=le[V];if(U===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Q}function E(C,F,ae,Q){const se={},le=F.attributes;let ce=0;const fe=ae.getAttributes();for(const V in fe)if(fe[V].location>=0){let re=le[V];re===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),se[V]=U,ce++}l.attributes=se,l.attributesNum=ce,l.index=Q}function w(){const C=l.newAttributes;for(let F=0,ae=C.length;F<ae;F++)C[F]=0}function _(C){g(C,0)}function g(C,F){const ae=l.newAttributes,Q=l.enabledAttributes,se=l.attributeDivisors;ae[C]=1,Q[C]===0&&(s.enableVertexAttribArray(C),Q[C]=1),se[C]!==F&&(s.vertexAttribDivisor(C,F),se[C]=F)}function I(){const C=l.newAttributes,F=l.enabledAttributes;for(let ae=0,Q=F.length;ae<Q;ae++)F[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),F[ae]=0)}function P(C,F,ae,Q,se,le,ce){ce===!0?s.vertexAttribIPointer(C,F,ae,se,le):s.vertexAttribPointer(C,F,ae,Q,se,le)}function A(C,F,ae,Q){w();const se=Q.attributes,le=ae.getAttributes(),ce=F.defaultAttributeValues;for(const fe in le){const V=le[fe];if(V.location>=0){let oe=se[fe];if(oe===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),oe!==void 0){const re=oe.normalized,U=oe.itemSize,Z=e.get(oe);if(Z===void 0)continue;const Ie=Z.buffer,Be=Z.type,J=Z.bytesPerElement,me=Be===s.INT||Be===s.UNSIGNED_INT||oe.gpuType===dd;if(oe.isInterleavedBufferAttribute){const he=oe.data,Ce=he.stride,be=oe.offset;if(he.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)g(V.location+qe,he.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let qe=0;qe<V.locationSize;qe++)_(V.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let qe=0;qe<V.locationSize;qe++)P(V.location+qe,U/V.locationSize,Be,re,Ce*J,(be+U/V.locationSize*qe)*J,me)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)g(V.location+he,oe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<V.locationSize;he++)_(V.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let he=0;he<V.locationSize;he++)P(V.location+he,U/V.locationSize,Be,re,U*J,U/V.locationSize*he*J,me)}}else if(ce!==void 0){const re=ce[fe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}I()}function O(){q();for(const C in r){const F=r[C];for(const ae in F){const Q=F[ae];for(const se in Q)x(Q[se].object),delete Q[se];delete F[ae]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const ae in F){const Q=F[ae];for(const se in Q)x(Q[se].object),delete Q[se];delete F[ae]}delete r[C.id]}function H(C){for(const F in r){const ae=r[F];if(ae[C.id]===void 0)continue;const Q=ae[C.id];for(const se in Q)x(Q[se].object),delete Q[se];delete ae[C.id]}}function q(){b(),u=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:k,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:_,disableUnusedAttributes:I}}function _E(s,e,t){let r;function o(p){r=p}function l(p,x){s.drawArrays(r,p,x),t.update(x,r,1)}function u(p,x,v){v!==0&&(s.drawArraysInstanced(r,p,x,v),t.update(x,r,v))}function f(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let S=0;for(let E=0;E<v;E++)S+=x[E];t.update(S,r,1)}function h(p,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],x[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,v);let E=0;for(let w=0;w<v;w++)E+=x[w]*y[w];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function xE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==fi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(H){const q=H===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Ei&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==zi&&!q)}function h(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:O,maxSamples:k}}function yE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,g=s.get(v);if(!o||E===null||E.length===0||l&&!_)l?x(null):p();else{const I=l?0:r,P=I*4;let A=g.clippingState||null;h.value=A,A=x(E,y,P,S);for(let O=0;O!==P;++O)A[O]=t[O];g.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,E){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=h.value,E!==!0||_===null){const g=S+w*4,I=y.matrixWorldInverse;f.getNormalMatrix(I),(_===null||_.length<g)&&(_=new Float32Array(g));for(let P=0,A=S;P!==w;++P,A+=4)u.copy(v[P]).applyMatrix4(I,f),u.normal.toArray(_,A),_[A+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function SE(s){let e=new WeakMap;function t(u,f){return f===bf?u.mapping=Zs:f===Pf&&(u.mapping=Qs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===bf||f===Pf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new _y(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xs=4,Xm=[.125,.215,.35,.446,.526,.582],Kr=20,cf=new Py,qm=new ht;let uf=null,ff=0,df=0,hf=!1;const Yr=(1+Math.sqrt(5))/2,Gs=1/Yr,Ym=[new ne(-Yr,Gs,0),new ne(Yr,Gs,0),new ne(-Gs,0,Yr),new ne(Gs,0,Yr),new ne(0,Yr,-Gs),new ne(0,Yr,Gs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],ME=new ne;class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=ME}=l;uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Ja,format:fi,colorSpace:Js,depthBuffer:!1},o=Km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(l)),this._blurMaterial=wE(l,e,t)}return o}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,cf)}_sceneToCubeUV(e,t,r,o,l){const h=new Vn(90,1,t,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(qm),v.toneMapping=Er,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const w=new Sd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new $t(new Hi,w);let g=!1;const I=e.background;I?I.isColor&&(w.color.copy(I),e.background=null,g=!0):(w.color.copy(qm),g=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[P],l.y,l.z)):A===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[P]));const O=this._cubeSize;Nl(o,A*O,P>2?O:0,O,O),v.setRenderTarget(o),g&&v.render(_,h),v.render(e,h)}_.geometry.dispose(),_.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zs||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new $t(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Nl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,cf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Ym[(o-l-1)%Ym.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new $t(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),w=l/E,_=isFinite(l)?1+Math.floor(x*w):Kr;_>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kr}`);const g=[];let I=0;for(let H=0;H<Kr;++H){const q=H/w,b=Math.exp(-q*q/2);g.push(b),H===0?I+=b:H<_&&(I+=2*b)}for(let H=0;H<g.length;H++)g[H]=g[H]/I;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const A=this._sizeLods[o],O=3*A*(o>P-Xs?o-P+Xs:0),k=4*(this._cubeSize-A);Nl(t,O,k,3*A,2*A),h.setRenderTarget(t),h.render(v,cf)}}function EE(s){const e=[],t=[],r=[];let o=s;const l=s-Xs+1+Xm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let h=1/f;u>s-Xs?h=Xm[u-s+Xs-1]:u===0&&(h=0),r.push(h);const p=1/(f-2),x=-p,v=1+p,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,E=6,w=3,_=2,g=1,I=new Float32Array(w*E*S),P=new Float32Array(_*E*S),A=new Float32Array(g*E*S);for(let k=0;k<S;k++){const H=k%3*2/3-1,q=k>2?0:-1,b=[H,q,0,H+2/3,q,0,H+2/3,q+1,0,H,q,0,H+2/3,q+1,0,H,q+1,0];I.set(b,w*E*k),P.set(y,_*E*k);const C=[k,k,k,k,k,k];A.set(C,g*E*k)}const O=new Gi;O.setAttribute("position",new Mi(I,w)),O.setAttribute("uv",new Mi(P,_)),O.setAttribute("faceIndex",new Mi(A,g)),e.push(O),o>Xs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Km(s,e,t){const r=new ns(s,e,t);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function wE(s,e,t){const r=new Float32Array(Kr),o=new ne(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Zm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Qm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function TE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===bf||h===Pf,x=h===Zs||h===Qs;if(p||x){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new $m(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new $m(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function AE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ys("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function RE(s,e,t,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let P=0,A=I.length;P<A;P+=3){const O=I[P+0],k=I[P+1],H=I[P+2];y.push(O,k,k,H,H,O)}}else if(E!==void 0){const I=E.array;w=E.version;for(let P=0,A=I.length/3-1;P<A;P+=3){const O=P+0,k=P+1,H=P+2;y.push(O,k,k,H,H,O)}}else return;const _=new(jg(y)?Kg:$g)(y,1);_.version=w;const g=l.get(v);g&&e.remove(g),l.set(v,_)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:x}}function CE(s,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function p(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,y*u,E),t.update(S,r,E))}function x(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,E);let _=0;for(let g=0;g<E;g++)_+=S[g];t.update(_,r,1)}function v(y,S,E,w){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<y.length;g++)p(y[g]/u,S[g],w[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,w,0,E);let g=0;for(let I=0;I<E;I++)g+=S[I]*w[I];t.update(g,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function bE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function PE(s,e,t){const r=new WeakMap,o=new jt;function l(u,f,h){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(f);if(y===void 0||y.count!==v){let C=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),w===!0&&(A=2),_===!0&&(A=3);let O=f.attributes.position.count*A,k=1;O>e.maxTextureSize&&(k=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const H=new Float32Array(O*k*4*v),q=new Xg(H,O,k,v);q.type=zi,q.needsUpdate=!0;const b=A*4;for(let F=0;F<v;F++){const ae=g[F],Q=I[F],se=P[F],le=O*k*4*F;for(let ce=0;ce<ae.count;ce++){const fe=ce*b;E===!0&&(o.fromBufferAttribute(ae,ce),H[le+fe+0]=o.x,H[le+fe+1]=o.y,H[le+fe+2]=o.z,H[le+fe+3]=0),w===!0&&(o.fromBufferAttribute(Q,ce),H[le+fe+4]=o.x,H[le+fe+5]=o.y,H[le+fe+6]=o.z,H[le+fe+7]=0),_===!0&&(o.fromBufferAttribute(se,ce),H[le+fe+8]=o.x,H[le+fe+9]=o.y,H[le+fe+10]=o.z,H[le+fe+11]=se.itemSize===4?o.w:1)}}y={count:v,texture:q,size:new xt(O,k)},r.set(f,y),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function LE(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,x=h.geometry,v=e.get(h,x);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return v}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const iv=new In,Jm=new ev(1,1),rv=new Xg,sv=new ty,av=new Jg,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function ra(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=eg[o];if(l===void 0&&(l=new Float32Array(o),eg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Kl(s,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function NE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function DE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function UE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function FE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;rg.set(r),s.uniformMatrix2fv(this.addr,!1,rg),rn(t,r)}}function OE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ig.set(r),s.uniformMatrix3fv(this.addr,!1,ig),rn(t,r)}}function BE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ng.set(r),s.uniformMatrix4fv(this.addr,!1,ng),rn(t,r)}}function kE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function GE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function WE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function jE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function XE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function qE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Jm.compareFunction=Wg,l=Jm):l=iv,t.setTexture2D(e||l,o)}function YE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||sv,o)}function $E(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||av,o)}function KE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||rv,o)}function ZE(s){switch(s){case 5126:return NE;case 35664:return DE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return BE;case 5124:case 35670:return kE;case 35667:case 35671:return zE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return jE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(s,e){s.uniform1fv(this.addr,e)}function JE(s,e){const t=ra(e,this.size,2);s.uniform2fv(this.addr,t)}function e1(s,e){const t=ra(e,this.size,3);s.uniform3fv(this.addr,t)}function t1(s,e){const t=ra(e,this.size,4);s.uniform4fv(this.addr,t)}function n1(s,e){const t=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function i1(s,e){const t=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r1(s,e){const t=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function s1(s,e){s.uniform1iv(this.addr,e)}function a1(s,e){s.uniform2iv(this.addr,e)}function o1(s,e){s.uniform3iv(this.addr,e)}function l1(s,e){s.uniform4iv(this.addr,e)}function c1(s,e){s.uniform1uiv(this.addr,e)}function u1(s,e){s.uniform2uiv(this.addr,e)}function f1(s,e){s.uniform3uiv(this.addr,e)}function d1(s,e){s.uniform4uiv(this.addr,e)}function h1(s,e,t){const r=this.cache,o=e.length,l=Kl(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||iv,l[u])}function p1(s,e,t){const r=this.cache,o=e.length,l=Kl(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||sv,l[u])}function m1(s,e,t){const r=this.cache,o=e.length,l=Kl(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||av,l[u])}function g1(s,e,t){const r=this.cache,o=e.length,l=Kl(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||rv,l[u])}function v1(s){switch(s){case 5126:return QE;case 35664:return JE;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class _1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ZE(t.type)}}class x1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function sg(s,e){s.seq.push(e),s.map[e.id]=e}function S1(s,e,t){const r=s.name,o=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),u=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){sg(t,p===void 0?new _1(f,s,e):new x1(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new y1(f),sg(t,v)),t=v}}}class kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);S1(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function ag(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const M1=37297;let E1=0;function w1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const og=new ft;function T1(s){At._getMatrix(og,At.workingColorSpace,s);const e=`mat3( ${og.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+w1(s.getShaderSource(e),f)}else return l}function A1(s,e){const t=T1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R1(s,e){let t;switch(e){case Px:t="Linear";break;case Lx:t="Reinhard";break;case Nx:t="Cineon";break;case Ig:t="ACESFilmic";break;case Ix:t="AgX";break;case Ux:t="Neutral";break;case Dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new ne;function C1(){At.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function P1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function L1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Ga(s){return s!==""}function cg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(s){return s.replace(N1,I1)}const D1=new Map;function I1(s,e){let t=dt[e];if(t===void 0){const r=D1.get(e);if(r!==void 0)t=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(s){return s.replace(U1,F1)}function F1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function dg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function O1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function B1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function z1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case bx:e="ENVMAP_BLENDING_ADD";break}return e}function H1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function V1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=O1(t),p=B1(t),x=k1(t),v=z1(t),y=H1(t),S=b1(t),E=P1(l),w=o.createProgram();let _,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ga).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ga).join(`
`),g.length>0&&(g+=`
`)):(_=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),g=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?dt.tonemapping_pars_fragment:"",t.toneMapping!==Er?R1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,A1("linearToOutputTexel",t.outputColorSpace),C1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),u=ad(u),u=cg(u,t),u=ug(u,t),f=ad(f),f=cg(f,t),f=ug(f,t),u=fg(u),f=fg(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+_+u,A=I+g+f,O=ag(o,o.VERTEX_SHADER,P),k=ag(o,o.FRAGMENT_SHADER,A);o.attachShader(w,O),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function H(F){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(w)||"",Q=o.getShaderInfoLog(O)||"",se=o.getShaderInfoLog(k)||"",le=ae.trim(),ce=Q.trim(),fe=se.trim();let V=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,O,k);else{const re=lg(o,O,"vertex"),U=lg(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+le+`
`+re+`
`+U)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ce===""||fe==="")&&(oe=!1);oe&&(F.diagnostics={runnable:V,programLog:le,vertexShader:{log:ce,prefix:_},fragmentShader:{log:fe,prefix:g}})}o.deleteShader(O),o.deleteShader(k),q=new kl(o,w),b=L1(o,w)}let q;this.getUniforms=function(){return q===void 0&&H(this),q};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,M1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=k,this}let G1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new j1(e),t.set(e,r)),r}}class j1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(s,e,t,r,o,l,u){const f=new yd,h=new W1,p=new Set,x=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function _(b,C,F,ae,Q){const se=ae.fog,le=Q.geometry,ce=b.isMeshStandardMaterial?ae.environment:null,fe=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),V=fe&&fe.mapping===Yl?fe.image.height:null,oe=E[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=re!==void 0?re.length:0;let Z=0;le.morphAttributes.position!==void 0&&(Z=1),le.morphAttributes.normal!==void 0&&(Z=2),le.morphAttributes.color!==void 0&&(Z=3);let Ie,Be,J,me;if(oe){const St=_i[oe];Ie=St.vertexShader,Be=St.fragmentShader}else Ie=b.vertexShader,Be=b.fragmentShader,h.update(b),J=h.getVertexShaderID(b),me=h.getFragmentShaderID(b);const he=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),be=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,Rt=!!b.map,pt=!!b.matcap,B=!!fe,wt=!!b.aoMap,Je=!!b.lightMap,yt=!!b.bumpMap,Ye=!!b.normalMap,bt=!!b.displacementMap,ke=!!b.emissiveMap,ct=!!b.metalnessMap,Ot=!!b.roughnessMap,Bt=b.anisotropy>0,L=b.clearcoat>0,T=b.dispersion>0,$=b.iridescence>0,de=b.sheen>0,_e=b.transmission>0,ue=Bt&&!!b.anisotropyMap,Ke=L&&!!b.clearcoatMap,Ae=L&&!!b.clearcoatNormalMap,He=L&&!!b.clearcoatRoughnessMap,Ze=$&&!!b.iridescenceMap,we=$&&!!b.iridescenceThicknessMap,De=de&&!!b.sheenColorMap,rt=de&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,Pe=!!b.specularColorMap,ut=!!b.specularIntensityMap,G=_e&&!!b.transmissionMap,Me=_e&&!!b.thicknessMap,Re=!!b.gradientMap,Ue=!!b.alphaMap,Se=b.alphaTest>0,pe=!!b.alphaHash,We=!!b.extensions;let lt=Er;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Pt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Be,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:be,instancingColor:be&&Q.instanceColor!==null,instancingMorph:be&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:pt,envMap:B,envMapMode:B&&fe.mapping,envMapCubeUVHeight:V,aoMap:wt,lightMap:Je,bumpMap:yt,normalMap:Ye,displacementMap:y&&bt,emissiveMap:ke,normalMapObjectSpace:Ye&&b.normalMapType===kx,normalMapTangentSpace:Ye&&b.normalMapType===$l,metalnessMap:ct,roughnessMap:Ot,anisotropy:Bt,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,dispersion:T,iridescence:$,iridescenceMap:Ze,iridescenceThicknessMap:we,sheen:de,sheenColorMap:De,sheenRoughnessMap:rt,specularMap:Xe,specularColorMap:Pe,specularIntensityMap:ut,transmission:_e,transmissionMap:G,thicknessMap:Me,gradientMap:Re,opaque:b.transparent===!1&&b.blending===qs&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:pe,combine:b.combine,mapUv:Rt&&w(b.map.channel),aoMapUv:wt&&w(b.aoMap.channel),lightMapUv:Je&&w(b.lightMap.channel),bumpMapUv:yt&&w(b.bumpMap.channel),normalMapUv:Ye&&w(b.normalMap.channel),displacementMapUv:bt&&w(b.displacementMap.channel),emissiveMapUv:ke&&w(b.emissiveMap.channel),metalnessMapUv:ct&&w(b.metalnessMap.channel),roughnessMapUv:Ot&&w(b.roughnessMap.channel),anisotropyMapUv:ue&&w(b.anisotropyMap.channel),clearcoatMapUv:Ke&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(b.sheenRoughnessMap.channel),specularMapUv:Xe&&w(b.specularMap.channel),specularColorMapUv:Pe&&w(b.specularColorMap.channel),specularIntensityMapUv:ut&&w(b.specularIntensityMap.channel),transmissionMapUv:G&&w(b.transmissionMap.channel),thicknessMapUv:Me&&w(b.thicknessMap.channel),alphaMapUv:Ue&&w(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ye||Bt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!le.attributes.uv&&(Rt||Ue),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:ke&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xi,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function g(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)C.push(F),C.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(I(C,b),P(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function I(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const C=E[b.type];let F;if(C){const ae=_i[C];F=py.clone(ae.uniforms)}else F=b.uniforms;return F}function O(b,C){let F;for(let ae=0,Q=x.length;ae<Q;ae++){const se=x[ae];if(se.cacheKey===C){F=se,++F.usedTimes;break}}return F===void 0&&(F=new V1(s,C,b,l),x.push(F)),F}function k(b){if(--b.usedTimes===0){const C=x.indexOf(b);x[C]=x[x.length-1],x.pop(),b.destroy()}}function H(b){h.remove(b)}function q(){h.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:O,releaseProgram:k,releaseShaderCache:H,programs:x,dispose:q}}function q1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Y1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,y,S,E,w,_){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:_},s[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=S,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=w,g.group=_),e++,g}function f(v,y,S,E,w,_){const g=u(v,y,S,E,w,_);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):t.push(g)}function h(v,y,S,E,w,_){const g=u(v,y,S,E,w,_);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):t.unshift(g)}function p(v,y){t.length>1&&t.sort(v||Y1),r.length>1&&r.sort(y||hg),o.length>1&&o.sort(y||hg)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:x,sort:p}}function $1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new pg,s.set(r,[u])):o>=l.length?(u=new pg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function K1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new ht};break;case"SpotLight":t={position:new ne,direction:new ne,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function Z1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Q1=0;function J1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ew(s){const e=new K1,t=Z1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,l=new Xt,u=new Xt;function f(p){let x=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,w=0,_=0,g=0,I=0,P=0,A=0,O=0,k=0,H=0;p.sort(J1);for(let b=0,C=p.length;b<C;b++){const F=p[b],ae=F.color,Q=F.intensity,se=F.distance,le=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=ae.r*Q,v+=ae.g*Q,y+=ae.b*Q;else if(F.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(F.sh.coefficients[ce],Q);H++}else if(F.isDirectionalLight){const ce=e.get(F);if(ce.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,V=t.get(F);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=F.shadow.matrix,I++}r.directional[S]=ce,S++}else if(F.isSpotLight){const ce=e.get(F);ce.position.setFromMatrixPosition(F.matrixWorld),ce.color.copy(ae).multiplyScalar(Q),ce.distance=se,ce.coneCos=Math.cos(F.angle),ce.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ce.decay=F.decay,r.spot[w]=ce;const fe=F.shadow;if(F.map&&(r.spotLightMap[O]=F.map,O++,fe.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[w]=fe.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,r.spotShadow[w]=V,r.spotShadowMap[w]=le,A++}w++}else if(F.isRectAreaLight){const ce=e.get(F);ce.color.copy(ae).multiplyScalar(Q),ce.halfWidth.set(F.width*.5,0,0),ce.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=ce,_++}else if(F.isPointLight){const ce=e.get(F);if(ce.color.copy(F.color).multiplyScalar(F.intensity),ce.distance=F.distance,ce.decay=F.decay,F.castShadow){const fe=F.shadow,V=t.get(F);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,V.shadowCameraNear=fe.camera.near,V.shadowCameraFar=fe.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=le,r.pointShadowMatrix[E]=F.shadow.matrix,P++}r.point[E]=ce,E++}else if(F.isHemisphereLight){const ce=e.get(F);ce.skyColor.copy(F.color).multiplyScalar(Q),ce.groundColor.copy(F.groundColor).multiplyScalar(Q),r.hemi[g]=ce,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==w||q.rectAreaLength!==_||q.hemiLength!==g||q.numDirectionalShadows!==I||q.numPointShadows!==P||q.numSpotShadows!==A||q.numSpotMaps!==O||q.numLightProbes!==H)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=_,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+O-k,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=H,q.directionalLength=S,q.pointLength=E,q.spotLength=w,q.rectAreaLength=_,q.hemiLength=g,q.numDirectionalShadows=I,q.numPointShadows=P,q.numSpotShadows=A,q.numSpotMaps=O,q.numLightProbes=H,r.version=Q1++)}function h(p,x){let v=0,y=0,S=0,E=0,w=0;const _=x.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const P=p[g];if(P.isDirectionalLight){const A=r.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(_),v++}else if(P.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(_),S++}else if(P.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(_),u.identity(),l.copy(P.matrixWorld),l.premultiply(_),u.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(_),y++}else if(P.isHemisphereLight){const A=r.hemi[w];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(_),w++}}}return{setup:f,setupView:h,state:r}}function mg(s){const e=new ew(s),t=[],r=[];function o(x){p.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function f(){e.setup(t)}function h(x){e.setupView(t,x)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function tw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new mg(s),e.set(o,[f])):l>=u.length?(f=new mg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
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
}`;function rw(s,e,t){let r=new Md;const o=new xt,l=new xt,u=new jt,f=new Ty({depthPacking:Bx}),h=new Ay,p={},x=t.maxTextureSize,v={[wr]:Dn,[Dn]:wr,[xi]:xi},y=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Gi;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $t(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ng;let g=this.type;this.render=function(k,H,q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Mr),ae.buffers.depth.getReversed()?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Q=g!==ki&&this.type===ki,se=g===ki&&this.type!==ki;for(let le=0,ce=k.length;le<ce;le++){const fe=k[le],V=fe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const oe=V.getFrameExtents();if(o.multiply(oe),l.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/oe.x),o.x=l.x*oe.x,V.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/oe.y),o.y=l.y*oe.y,V.mapSize.y=l.y)),V.map===null||Q===!0||se===!0){const U=this.type!==ki?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new ns(o.x,o.y,U),V.map.texture.name=fe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let U=0;U<re;U++){const Z=V.getViewport(U);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),ae.viewport(u),V.updateMatrices(fe,U),r=V.getFrustum(),A(H,q,V.camera,fe,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&I(V,q),V.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(b,C,F)};function I(k,H){const q=e.update(w);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ns(o.x,o.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(H,null,q,y,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(H,null,q,S,w,null)}function P(k,H,q,b){let C=null;const F=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)C=F;else if(C=q.isPointLight===!0?h:f,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ae=C.uuid,Q=H.uuid;let se=p[ae];se===void 0&&(se={},p[ae]=se);let le=se[Q];le===void 0&&(le=C.clone(),se[Q]=le,H.addEventListener("dispose",O)),C=le}if(C.visible=H.visible,C.wireframe=H.wireframe,b===ki?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:v[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=q}return C}function A(k,H,q,b,C){if(k.visible===!1)return;if(k.layers.test(H.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===ki)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const Q=e.update(k),se=k.material;if(Array.isArray(se)){const le=Q.groups;for(let ce=0,fe=le.length;ce<fe;ce++){const V=le[ce],oe=se[V.materialIndex];if(oe&&oe.visible){const re=P(k,oe,b,C);k.onBeforeShadow(s,k,H,q,Q,re,V),s.renderBufferDirect(q,null,Q,re,k,V),k.onAfterShadow(s,k,H,q,Q,re,V)}}}else if(se.visible){const le=P(k,se,b,C);k.onBeforeShadow(s,k,H,q,Q,le,null),s.renderBufferDirect(q,null,Q,le,k,null),k.onAfterShadow(s,k,H,q,Q,le,null)}}const ae=k.children;for(let Q=0,se=ae.length;Q<se;Q++)A(ae[Q],H,q,b,C)}function O(k){k.target.removeEventListener("dispose",O);for(const q in p){const b=p[q],C=k.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const sw={[Mf]:Ef,[wf]:Rf,[Tf]:Cf,[Ks]:Af,[Ef]:Mf,[Rf]:wf,[Cf]:Tf,[Af]:Ks};function aw(s,e){function t(){let G=!1;const Me=new jt;let Re=null;const Ue=new jt(0,0,0,0);return{setMask:function(Se){Re!==Se&&!G&&(s.colorMask(Se,Se,Se,Se),Re=Se)},setLocked:function(Se){G=Se},setClear:function(Se,pe,We,lt,Pt){Pt===!0&&(Se*=lt,pe*=lt,We*=lt),Me.set(Se,pe,We,lt),Ue.equals(Me)===!1&&(s.clearColor(Se,pe,We,lt),Ue.copy(Me))},reset:function(){G=!1,Re=null,Ue.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Re=null,Ue=null,Se=null;return{setReversed:function(pe){if(Me!==pe){const We=e.get("EXT_clip_control");pe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Me=pe;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Me},setTest:function(pe){pe?he(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!G&&(s.depthMask(pe),Re=pe)},setFunc:function(pe){if(Me&&(pe=sw[pe]),Ue!==pe){switch(pe){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case wf:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Tf:s.depthFunc(s.EQUAL);break;case Af:s.depthFunc(s.GEQUAL);break;case Rf:s.depthFunc(s.GREATER);break;case Cf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=pe}},setLocked:function(pe){G=pe},setClear:function(pe){Se!==pe&&(Me&&(pe=1-pe),s.clearDepth(pe),Se=pe)},reset:function(){G=!1,Re=null,Ue=null,Se=null,Me=!1}}}function o(){let G=!1,Me=null,Re=null,Ue=null,Se=null,pe=null,We=null,lt=null,Pt=null;return{setTest:function(St){G||(St?he(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(St){Me!==St&&!G&&(s.stencilMask(St),Me=St)},setFunc:function(St,Wn,fn){(Re!==St||Ue!==Wn||Se!==fn)&&(s.stencilFunc(St,Wn,fn),Re=St,Ue=Wn,Se=fn)},setOp:function(St,Wn,fn){(pe!==St||We!==Wn||lt!==fn)&&(s.stencilOp(St,Wn,fn),pe=St,We=Wn,lt=fn)},setLocked:function(St){G=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){G=!1,Me=null,Re=null,Ue=null,Se=null,pe=null,We=null,lt=null,Pt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let x={},v={},y=new WeakMap,S=[],E=null,w=!1,_=null,g=null,I=null,P=null,A=null,O=null,k=null,H=new ht(0,0,0),q=0,b=!1,C=null,F=null,ae=null,Q=null,se=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,fe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(V)[1]),ce=fe>=1):V.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ce=fe>=2);let oe=null,re={};const U=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),Ie=new jt().fromArray(U),Be=new jt().fromArray(Z);function J(G,Me,Re,Ue){const Se=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Re;We++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Me+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return pe}const me={};me[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(s.DEPTH_TEST),u.setFunc(Ks),yt(!1),Ye(gm),he(s.CULL_FACE),wt(Mr);function he(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Ce(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function be(G,Me){return v[G]!==Me?(s.bindFramebuffer(G,Me),v[G]=Me,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Me),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function qe(G,Me){let Re=S,Ue=!1;if(G){Re=y.get(Me),Re===void 0&&(Re=[],y.set(Me,Re));const Se=G.textures;if(Re.length!==Se.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,We=Se.length;pe<We;pe++)Re[pe]=s.COLOR_ATTACHMENT0+pe;Re.length=Se.length,Ue=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Re)}function Rt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const pt={[$r]:s.FUNC_ADD,[fx]:s.FUNC_SUBTRACT,[dx]:s.FUNC_REVERSE_SUBTRACT};pt[hx]=s.MIN,pt[px]=s.MAX;const B={[mx]:s.ZERO,[gx]:s.ONE,[vx]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[Ex]:s.SRC_ALPHA_SATURATE,[Sx]:s.DST_COLOR,[xx]:s.DST_ALPHA,[_x]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[Mx]:s.ONE_MINUS_DST_COLOR,[yx]:s.ONE_MINUS_DST_ALPHA,[wx]:s.CONSTANT_COLOR,[Tx]:s.ONE_MINUS_CONSTANT_COLOR,[Ax]:s.CONSTANT_ALPHA,[Rx]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(G,Me,Re,Ue,Se,pe,We,lt,Pt,St){if(G===Mr){w===!0&&(Ce(s.BLEND),w=!1);return}if(w===!1&&(he(s.BLEND),w=!0),G!==ux){if(G!==_||St!==b){if((g!==$r||A!==$r)&&(s.blendEquation(s.FUNC_ADD),g=$r,A=$r),St)switch(G){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFunc(s.ONE,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _m:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,P=null,O=null,k=null,H.set(0,0,0),q=0,_=G,b=St}return}Se=Se||Me,pe=pe||Re,We=We||Ue,(Me!==g||Se!==A)&&(s.blendEquationSeparate(pt[Me],pt[Se]),g=Me,A=Se),(Re!==I||Ue!==P||pe!==O||We!==k)&&(s.blendFuncSeparate(B[Re],B[Ue],B[pe],B[We]),I=Re,P=Ue,O=pe,k=We),(lt.equals(H)===!1||Pt!==q)&&(s.blendColor(lt.r,lt.g,lt.b,Pt),H.copy(lt),q=Pt),_=G,b=!1}function Je(G,Me){G.side===xi?Ce(s.CULL_FACE):he(s.CULL_FACE);let Re=G.side===Dn;Me&&(Re=!Re),yt(Re),G.blending===qs&&G.transparent===!1?wt(Mr):wt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ue=G.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function Ye(G){G!==lx?(he(s.CULL_FACE),G!==F&&(G===gm?s.cullFace(s.BACK):G===cx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),F=G}function bt(G){G!==ae&&(ce&&s.lineWidth(G),ae=G)}function ke(G,Me,Re){G?(he(s.POLYGON_OFFSET_FILL),(Q!==Me||se!==Re)&&(s.polygonOffset(Me,Re),Q=Me,se=Re)):Ce(s.POLYGON_OFFSET_FILL)}function ct(G){G?he(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ot(G){G===void 0&&(G=s.TEXTURE0+le-1),oe!==G&&(s.activeTexture(G),oe=G)}function Bt(G,Me,Re){Re===void 0&&(oe===null?Re=s.TEXTURE0+le-1:Re=oe);let Ue=re[Re];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[Re]=Ue),(Ue.type!==G||Ue.texture!==Me)&&(oe!==Re&&(s.activeTexture(Re),oe=Re),s.bindTexture(G,Me||me[G]),Ue.type=G,Ue.texture=Me)}function L(){const G=re[oe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(G){Ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function rt(G){Be.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Be.copy(G))}function Xe(G,Me){let Re=p.get(Me);Re===void 0&&(Re=new WeakMap,p.set(Me,Re));let Ue=Re.get(G);Ue===void 0&&(Ue=s.getUniformBlockIndex(Me,G.name),Re.set(G,Ue))}function Pe(G,Me){const Ue=p.get(Me).get(G);h.get(Me)!==Ue&&(s.uniformBlockBinding(Me,Ue,G.__bindingPointIndex),h.set(Me,Ue))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},oe=null,re={},v={},y=new WeakMap,S=[],E=null,w=!1,_=null,g=null,I=null,P=null,A=null,O=null,k=null,H=new ht(0,0,0),q=0,b=!1,C=null,F=null,ae=null,Q=null,se=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Ce,bindFramebuffer:be,drawBuffers:qe,useProgram:Rt,setBlending:wt,setMaterial:Je,setFlipSided:yt,setCullFace:Ye,setLineWidth:bt,setPolygonOffset:ke,setScissorTest:ct,activeTexture:Ot,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Ze,texImage3D:we,updateUBOMapping:Xe,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:He,texSubImage2D:de,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:De,viewport:rt,reset:ut}}function ow(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):Gl("canvas")}function w(L,T,$){let de=1;const _e=Bt(L);if((_e.width>$||_e.height>$)&&(de=$/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(de*_e.width),Ke=Math.floor(de*_e.height);v===void 0&&(v=E(ue,Ke));const Ae=T?E(ue,Ke):v;return Ae.width=ue,Ae.height=Ke,Ae.getContext("2d").drawImage(L,0,0,ue,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Ke+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function _(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,T,$,de,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=T;if(T===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),T===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),$===s.UNSIGNED_INT&&(ue=s.RGB32UI),$===s.BYTE&&(ue=s.RGB8I),$===s.SHORT&&(ue=s.RGB16I),$===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),$===s.UNSIGNED_INT&&(ue=s.RGBA32UI),$===s.BYTE&&(ue=s.RGBA8I),$===s.SHORT&&(ue=s.RGBA16I),$===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),T===s.RGBA){const Ke=_e?zl:At.getTransfer(de);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=Ke===Dt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function A(L,T){let $;return L?T===null||T===ts||T===Ka?$=s.DEPTH24_STENCIL8:T===zi?$=s.DEPTH32F_STENCIL8:T===$a&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===Ka?$=s.DEPTH_COMPONENT24:T===zi?$=s.DEPTH_COMPONENT32F:T===$a&&($=s.DEPTH_COMPONENT16),$}function O(L,T){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==di&&L.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function k(L){const T=L.target;T.removeEventListener("dispose",k),q(T),T.isVideoTexture&&x.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),C(T)}function q(L){const T=r.get(L);if(T.__webglInit===void 0)return;const $=L.source,de=y.get($);if(de){const _e=de[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(L),Object.keys(de).length===0&&y.delete($)}r.remove(L)}function b(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const $=L.source,de=y.get($);delete de[T.__cacheKey],u.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let _e=0;_e<T.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=L.textures;for(let de=0,_e=$.length;de<_e;de++){const ue=r.get($[de]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove($[de])}r.remove(L)}let F=0;function ae(){F=0}function Q(){const L=F;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function se(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function le(L,T){const $=r.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me($,L,T);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function ce(L,T){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){me($,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function fe(L,T){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){me($,L,T);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function V(L,T){const $=r.get(L);if(L.version>0&&$.__version!==L.version){he($,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const oe={[Lf]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[Nf]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[Fx]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},U={[zx]:s.NEVER,[Xx]:s.ALWAYS,[Hx]:s.LESS,[Wg]:s.LEQUAL,[Vx]:s.EQUAL,[jx]:s.GEQUAL,[Gx]:s.GREATER,[Wx]:s.NOTEQUAL};function Z(L,T){if(T.type===zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Iu||T.magFilter===dl||T.magFilter===Qr||T.minFilter===yi||T.minFilter===Iu||T.minFilter===dl||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==dl&&T.minFilter!==Qr||T.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(L,T){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const de=T.source;let _e=y.get(de);_e===void 0&&(_e={},y.set(de,_e));const ue=se(T);if(ue!==L.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),_e[ue].usedTimes++;const Ke=_e[L.__cacheKey];Ke!==void 0&&(_e[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(T)),L.__cacheKey=ue,L.__webglTexture=_e[ue].texture}return $}function Be(L,T,$){return Math.floor(Math.floor(L/$)/T)}function J(L,T,$,de){const ue=L.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,$,de,T.data);else{ue.sort((we,De)=>we.start-De.start);let Ke=0;for(let we=1;we<ue.length;we++){const De=ue[Ke],rt=ue[we],Xe=De.start+De.count,Pe=Be(rt.start,T.width,4),ut=Be(De.start,T.width,4);rt.start<=Xe+1&&Pe===ut&&Be(rt.start+rt.count-1,T.width,4)===Pe?De.count=Math.max(De.count,rt.start+rt.count-De.start):(++Ke,ue[Ke]=rt)}ue.length=Ke+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),Ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let we=0,De=ue.length;we<De;we++){const rt=ue[we],Xe=Math.floor(rt.start/4),Pe=Math.ceil(rt.count/4),ut=Xe%T.width,G=Math.floor(Xe/T.width),Me=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,ut,G,Me,Re,$,de,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ze)}}function me(L,T,$){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const _e=Ie(L,T),ue=T.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+$);const Ke=r.get(ue);if(ue.version!==Ke.__version||_e===!0){t.activeTexture(s.TEXTURE0+$);const Ae=At.getPrimaries(At.workingColorSpace),He=T.colorSpace===vr?null:At.getPrimaries(T.colorSpace),Ze=T.colorSpace===vr||Ae===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let we=w(T.image,!1,o.maxTextureSize);we=Ot(T,we);const De=l.convert(T.format,T.colorSpace),rt=l.convert(T.type);let Xe=P(T.internalFormat,De,rt,T.colorSpace,T.isVideoTexture);Z(de,T);let Pe;const ut=T.mipmaps,G=T.isVideoTexture!==!0,Me=Ke.__version===void 0||_e===!0,Re=ue.dataReady,Ue=O(T,we);if(T.isDepthTexture)Xe=A(T.format===Qa,T.type),Me&&(G?t.texStorage2D(s.TEXTURE_2D,1,Xe,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Xe,we.width,we.height,0,De,rt,null));else if(T.isDataTexture)if(ut.length>0){G&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ut[0].width,ut[0].height);for(let Se=0,pe=ut.length;Se<pe;Se++)Pe=ut[Se],G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,rt,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,De,rt,Pe.data);T.generateMipmaps=!1}else G?(Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,we.width,we.height),Re&&J(T,we,De,rt)):t.texImage2D(s.TEXTURE_2D,0,Xe,we.width,we.height,0,De,rt,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,ut[0].width,ut[0].height,we.depth);for(let Se=0,pe=ut.length;Se<pe;Se++)if(Pe=ut[Se],T.format!==fi)if(De!==null)if(G){if(Re)if(T.layerUpdates.size>0){const We=jm(Pe.width,Pe.height,T.format,T.type);for(const lt of T.layerUpdates){const Pt=Pe.data.subarray(lt*We/Pe.data.BYTES_PER_ELEMENT,(lt+1)*We/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,lt,Pe.width,Pe.height,1,De,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,De,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Xe,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,De,rt,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Xe,Pe.width,Pe.height,we.depth,0,De,rt,Pe.data)}else{G&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ut[0].width,ut[0].height);for(let Se=0,pe=ut.length;Se<pe;Se++)Pe=ut[Se],T.format!==fi?De!==null?G?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,De,rt,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Xe,Pe.width,Pe.height,0,De,rt,Pe.data)}else if(T.isDataArrayTexture)if(G){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,we.width,we.height,we.depth),Re)if(T.layerUpdates.size>0){const Se=jm(we.width,we.height,T.format,T.type);for(const pe of T.layerUpdates){const We=we.data.subarray(pe*Se/we.data.BYTES_PER_ELEMENT,(pe+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,we.width,we.height,1,De,rt,We)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,De,rt,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,we.width,we.height,we.depth,0,De,rt,we.data);else if(T.isData3DTexture)G?(Me&&t.texStorage3D(s.TEXTURE_3D,Ue,Xe,we.width,we.height,we.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,De,rt,we.data)):t.texImage3D(s.TEXTURE_3D,0,Xe,we.width,we.height,we.depth,0,De,rt,we.data);else if(T.isFramebufferTexture){if(Me)if(G)t.texStorage2D(s.TEXTURE_2D,Ue,Xe,we.width,we.height);else{let Se=we.width,pe=we.height;for(let We=0;We<Ue;We++)t.texImage2D(s.TEXTURE_2D,We,Xe,Se,pe,0,De,rt,null),Se>>=1,pe>>=1}}else if(ut.length>0){if(G&&Me){const Se=Bt(ut[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Xe,Se.width,Se.height)}for(let Se=0,pe=ut.length;Se<pe;Se++)Pe=ut[Se],G?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,De,rt,Pe):t.texImage2D(s.TEXTURE_2D,Se,Xe,De,rt,Pe);T.generateMipmaps=!1}else if(G){if(Me){const Se=Bt(we);t.texStorage2D(s.TEXTURE_2D,Ue,Xe,Se.width,Se.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,rt,we)}else t.texImage2D(s.TEXTURE_2D,0,Xe,De,rt,we);_(T)&&g(de),Ke.__version=ue.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function he(L,T,$){if(T.image.length!==6)return;const de=Ie(L,T),_e=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const ue=r.get(_e);if(_e.version!==ue.__version||de===!0){t.activeTexture(s.TEXTURE0+$);const Ke=At.getPrimaries(At.workingColorSpace),Ae=T.colorSpace===vr?null:At.getPrimaries(T.colorSpace),He=T.colorSpace===vr||Ke===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,De=[];for(let pe=0;pe<6;pe++)!Ze&&!we?De[pe]=w(T.image[pe],!0,o.maxCubemapSize):De[pe]=we?T.image[pe].image:T.image[pe],De[pe]=Ot(T,De[pe]);const rt=De[0],Xe=l.convert(T.format,T.colorSpace),Pe=l.convert(T.type),ut=P(T.internalFormat,Xe,Pe,T.colorSpace),G=T.isVideoTexture!==!0,Me=ue.__version===void 0||de===!0,Re=_e.dataReady;let Ue=O(T,rt);Z(s.TEXTURE_CUBE_MAP,T);let Se;if(Ze){G&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ut,rt.width,rt.height);for(let pe=0;pe<6;pe++){Se=De[pe].mipmaps;for(let We=0;We<Se.length;We++){const lt=Se[We];T.format!==fi?Xe!==null?G?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We,0,0,lt.width,lt.height,Xe,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We,0,0,lt.width,lt.height,Xe,Pe,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We,ut,lt.width,lt.height,0,Xe,Pe,lt.data)}}}else{if(Se=T.mipmaps,G&&Me){Se.length>0&&Ue++;const pe=Bt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ut,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(we){G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,De[pe].width,De[pe].height,Xe,Pe,De[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,De[pe].width,De[pe].height,0,Xe,Pe,De[pe].data);for(let We=0;We<Se.length;We++){const Pt=Se[We].image[pe].image;G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We+1,0,0,Pt.width,Pt.height,Xe,Pe,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We+1,ut,Pt.width,Pt.height,0,Xe,Pe,Pt.data)}}else{G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,Pe,De[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Xe,Pe,De[pe]);for(let We=0;We<Se.length;We++){const lt=Se[We];G?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We+1,0,0,Xe,Pe,lt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,We+1,ut,Xe,Pe,lt.image[pe])}}}_(T)&&g(s.TEXTURE_CUBE_MAP),ue.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ce(L,T,$,de,_e,ue){const Ke=l.convert($.format,$.colorSpace),Ae=l.convert($.type),He=P($.internalFormat,Ke,Ae,$.colorSpace),Ze=r.get(T),we=r.get($);if(we.__renderTarget=T,!Ze.__hasExternalTextures){const De=Math.max(1,T.width>>ue),rt=Math.max(1,T.height>>ue);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,He,De,rt,T.depth,0,Ke,Ae,null):t.texImage2D(_e,ue,He,De,rt,0,Ke,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,we.__webglTexture,0,bt(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,we.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(L,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const de=T.depthTexture,_e=de&&de.isDepthTexture?de.type:null,ue=A(T.stencilBuffer,_e),Ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=bt(T);ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ue,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,L)}else{const de=T.textures;for(let _e=0;_e<de.length;_e++){const ue=de[_e],Ke=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),He=P(ue.internalFormat,Ke,Ae,ue.colorSpace),Ze=bt(T);$&&ke(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,He,T.width,T.height):ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,He,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,He,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const _e=de.__webglTexture,ue=bt(T);if(T.depthTexture.format===Za)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===Qa)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Rt(L){const T=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=de}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?qe(T.__webglFramebuffer[0],L):qe(T.__webglFramebuffer,L)}else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),be(T.__webglDepthbuffer[de],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),be(T.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(L,T,$){const de=r.get(L);T!==void 0&&Ce(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Rt(L)}function B(L){const T=L.texture,$=r.get(L),de=r.get(T);L.addEventListener("dispose",H);const _e=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,u.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let He=0;He<T.mipmaps.length;He++)$.__webglFramebuffer[Ae][He]=s.createFramebuffer()}else $.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ae=0,He=_e.length;Ae<He;Ae++){const Ze=r.get(_e[Ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ke(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const He=_e[Ae];$.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Ze=l.convert(He.format,He.colorSpace),we=l.convert(He.type),De=P(He.internalFormat,Ze,we,He.colorSpace,L.isXRRenderTarget===!0),rt=bt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,De,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),be($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Z(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)Ce($.__webglFramebuffer[Ae][He],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,He);else Ce($.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);_(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,He=_e.length;Ae<He;Ae++){const Ze=_e[Ae],we=r.get(Ze);let De=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,we.__webglTexture),Z(De,Ze),Ce($.__webglFramebuffer,L,Ze,s.COLOR_ATTACHMENT0+Ae,De,0),_(Ze)&&g(De)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,de.__webglTexture),Z(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)Ce($.__webglFramebuffer[He],L,T,s.COLOR_ATTACHMENT0,Ae,He);else Ce($.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);_(T)&&g(Ae),t.unbindTexture()}L.depthBuffer&&Rt(L)}function wt(L){const T=L.textures;for(let $=0,de=T.length;$<de;$++){const _e=T[$];if(_(_e)){const ue=I(L),Ke=r.get(_e).__webglTexture;t.bindTexture(ue,Ke),g(ue),t.unbindTexture()}}}const Je=[],yt=[];function Ye(L){if(L.samples>0){if(ke(L)===!1){const T=L.textures,$=L.width,de=L.height;let _e=s.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(L),Ae=T.length>1;if(Ae)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=L.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const we=r.get(T[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,$,de,0,0,$,de,_e,s.NEAREST),h===!0&&(Je.length=0,yt.length=0,Je.push(s.COLOR_ATTACHMENT0+Ze),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Je.push(ue),yt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const we=r.get(T[Ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function bt(L){return Math.min(o.maxSamples,L.samples)}function ke(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(L){const T=u.render.frame;x.get(L)!==T&&(x.set(L,T),L.update())}function Ot(L,T){const $=L.colorSpace,de=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Js&&$!==vr&&(At.getTransfer($)===Dt?(de!==fi||_e!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ae,this.setTexture2D=le,this.setTexture2DArray=ce,this.setTexture3D=fe,this.setTextureCube=V,this.rebindTextures=pt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ke}function lw(s,e){function t(r,o=vr){let l;const u=At.getTransfer(o);if(r===Ei)return s.UNSIGNED_BYTE;if(r===hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Bg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fg)return s.BYTE;if(r===Og)return s.SHORT;if(r===$a)return s.UNSIGNED_SHORT;if(r===dd)return s.INT;if(r===ts)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Ja)return s.HALF_FLOAT;if(r===kg)return s.ALPHA;if(r===zg)return s.RGB;if(r===fi)return s.RGBA;if(r===Za)return s.DEPTH_COMPONENT;if(r===Qa)return s.DEPTH_STENCIL;if(r===Hg)return s.RED;if(r===md)return s.RED_INTEGER;if(r===Vg)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===vd)return s.RGBA_INTEGER;if(r===Il||r===Ul||r===Fl||r===Ol)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Df||r===If||r===Uf||r===Ff)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Df)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Of||r===Bf||r===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Of||r===Bf)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===$f||r===Kf||r===Zf||r===Qf||r===Jf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===zf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$f)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===ed||r===td)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gg||r===nd||r===id||r===rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===id)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ka?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class ov extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
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

}`;class fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ov(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:cw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends ia{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,x=null,v=null,y=null,S=null,E=null;const w=new fw,_={},g=t.getContextAttributes();let I=null,P=null;const A=[],O=[],k=new xt;let H=null;const q=new Vn;q.viewport=new jt;const b=new Vn;b.viewport=new jt;const C=[q,b],F=new Ny;let ae=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=A[J];return me===void 0&&(me=new rf,A[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=A[J];return me===void 0&&(me=new rf,A[J]=me),me.getGripSpace()},this.getHand=function(J){let me=A[J];return me===void 0&&(me=new rf,A[J]=me),me.getHandSpace()};function se(J){const me=O.indexOf(J.inputSource);if(me===-1)return;const he=A[me];he!==void 0&&(he.update(J.inputSource,J.frame,p||u),he.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",ce);for(let J=0;J<A.length;J++){const me=O[J];me!==null&&(O[J]=null,A[J].disconnect(me))}ae=null,Q=null,w.reset();for(const J in _)delete _[J];e.setRenderTarget(I),S=null,y=null,v=null,o=null,P=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",le),o.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(o,t)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ce=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Qa:Za,Ce=g.stencil?Ka:ts);const qe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};y=v.createProjectionLayer(qe),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ns(y.textureWidth,y.textureHeight,{format:fi,type:Ei,depthTexture:new ev(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new ns(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(J){for(let me=0;me<J.removed.length;me++){const he=J.removed[me],Ce=O.indexOf(he);Ce>=0&&(O[Ce]=null,A[Ce].disconnect(he))}for(let me=0;me<J.added.length;me++){const he=J.added[me];let Ce=O.indexOf(he);if(Ce===-1){for(let qe=0;qe<A.length;qe++)if(qe>=O.length){O.push(he),Ce=qe;break}else if(O[qe]===null){O[qe]=he,Ce=qe;break}if(Ce===-1)break}const be=A[Ce];be&&be.connect(he)}}const fe=new ne,V=new ne;function oe(J,me,he){fe.setFromMatrixPosition(me.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const Ce=fe.distanceTo(V),be=me.projectionMatrix.elements,qe=he.projectionMatrix.elements,Rt=be[14]/(be[10]-1),pt=be[14]/(be[10]+1),B=(be[9]+1)/be[5],wt=(be[9]-1)/be[5],Je=(be[8]-1)/be[0],yt=(qe[8]+1)/qe[0],Ye=Rt*Je,bt=Rt*yt,ke=Ce/(-Je+yt),ct=ke*-Je;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ct),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ot=Rt+ke,Bt=pt+ke,L=Ye-ct,T=bt+(Ce-ct),$=B*pt/Bt*Ot,de=wt*pt/Bt*Ot;J.projectionMatrix.makePerspective(L,T,$,de,Ot,Bt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let me=J.near,he=J.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(he=w.depthFar)),F.near=b.near=q.near=me,F.far=b.far=q.far=he,(ae!==F.near||Q!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),ae=F.near,Q=F.far),F.layers.mask=J.layers.mask|6,q.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;const Ce=J.parent,be=F.cameras;re(F,Ce);for(let qe=0;qe<be.length;qe++)re(be[qe],Ce);be.length===2?oe(F,q,b):F.projectionMatrix.copy(q.projectionMatrix),U(J,F,Ce)};function U(J,me,he){he===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(J){h=J,y!==null&&(y.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(F)},this.getCameraTexture=function(J){return _[J]};let Z=null;function Ie(J,me){if(x=me.getViewerPose(p||u),E=me,x!==null){const he=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ce=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let pt=0;pt<he.length;pt++){const B=he[pt];let wt=null;if(S!==null)wt=S.getViewport(B);else{const yt=v.getViewSubImage(y,B);wt=yt.viewport,pt===0&&(e.setRenderTargetTextures(P,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(P))}let Je=C[pt];Je===void 0&&(Je=new Vn,Je.layers.enable(pt),Je.viewport=new jt,C[pt]=Je),Je.matrix.fromArray(B.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(B.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(wt.x,wt.y,wt.width,wt.height),pt===0&&(F.matrix.copy(Je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(Je)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const pt=v.getDepthInformation(he[0]);pt&&pt.isValid&&pt.texture&&w.init(pt,o.renderState)}if(be&&be.includes("camera-access")&&(e.state.unbindTexture(),v))for(let pt=0;pt<he.length;pt++){const B=he[pt].camera;if(B){let wt=_[B];wt||(wt=new ov,_[B]=wt);const Je=v.getCameraImage(B);wt.sourceTexture=Je}}}for(let he=0;he<A.length;he++){const Ce=O[he],be=A[he];Ce!==null&&be!==void 0&&be.update(Ce,me,p||u)}Z&&Z(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Be=new nv;Be.setAnimationLoop(Ie),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}}const Xr=new Jn,hw=new Xt;function pw(s,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,Zg(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function o(_,g,I,P,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(_,g):g.isMeshToonMaterial?(l(_,g),v(_,g)):g.isMeshPhongMaterial?(l(_,g),x(_,g)):g.isMeshStandardMaterial?(l(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,A)):g.isMeshMatcapMaterial?(l(_,g),E(_,g)):g.isMeshDepthMaterial?l(_,g):g.isMeshDistanceMaterial?(l(_,g),w(_,g)):g.isMeshNormalMaterial?l(_,g):g.isLineBasicMaterial?(u(_,g),g.isLineDashedMaterial&&f(_,g)):g.isPointsMaterial?h(_,g,I,P):g.isSpriteMaterial?p(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Dn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Dn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,A=I.envMapRotation;P&&(_.envMap.value=P,Xr.copy(A),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.envMapRotation.value.setFromMatrix4(hw.makeRotationFromEuler(Xr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function f(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function h(_,g,I,P){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*I,_.scale.value=P*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function p(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function x(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function v(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,I){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,g){g.matcap&&(_.matcap.value=g.matcap)}function w(_,g){const I=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function mw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,P){const A=P.program;r.uniformBlockBinding(I,A)}function p(I,P){let A=o[I.id];A===void 0&&(E(I),A=x(I),o[I.id]=A,I.addEventListener("dispose",_));const O=P.program;r.updateUBOMapping(I,O);const k=e.render.frame;l[I.id]!==k&&(y(I),l[I.id]=k)}function x(I){const P=v();I.__bindingPointIndex=P;const A=s.createBuffer(),O=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,O,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,A),A}function v(){for(let I=0;I<f;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=o[I.id],A=I.uniforms,O=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let k=0,H=A.length;k<H;k++){const q=Array.isArray(A[k])?A[k]:[A[k]];for(let b=0,C=q.length;b<C;b++){const F=q[b];if(S(F,k,b,O)===!0){const ae=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let le=0;le<Q.length;le++){const ce=Q[le],fe=w(ce);typeof ce=="number"||typeof ce=="boolean"?(F.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ae+se,F.__data)):ce.isMatrix3?(F.__data[0]=ce.elements[0],F.__data[1]=ce.elements[1],F.__data[2]=ce.elements[2],F.__data[3]=0,F.__data[4]=ce.elements[3],F.__data[5]=ce.elements[4],F.__data[6]=ce.elements[5],F.__data[7]=0,F.__data[8]=ce.elements[6],F.__data[9]=ce.elements[7],F.__data[10]=ce.elements[8],F.__data[11]=0):(ce.toArray(F.__data,se),se+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,A,O){const k=I.value,H=P+"_"+A;if(O[H]===void 0)return typeof k=="number"||typeof k=="boolean"?O[H]=k:O[H]=k.clone(),!0;{const q=O[H];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return O[H]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function E(I){const P=I.uniforms;let A=0;const O=16;for(let H=0,q=P.length;H<q;H++){const b=Array.isArray(P[H])?P[H]:[P[H]];for(let C=0,F=b.length;C<F;C++){const ae=b[C],Q=Array.isArray(ae.value)?ae.value:[ae.value];for(let se=0,le=Q.length;se<le;se++){const ce=Q[se],fe=w(ce),V=A%O,oe=V%fe.boundary,re=V+oe;A+=oe,re!==0&&O-re<fe.storage&&(A+=O-re),ae.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=fe.storage}}}const k=A%O;return k>0&&(A+=O-k),I.__size=A,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function _(I){const P=I.target;P.removeEventListener("dispose",_);const A=u.indexOf(P.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function g(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:h,update:p,dispose:g}}class gw{constructor(e={}){const{canvas:t=Yx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),w=new Int32Array(4);let _=null,g=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let O=!1;this._outputColorSpace=Qn;let k=0,H=0,q=null,b=-1,C=null;const F=new jt,ae=new jt;let Q=null;const se=new ht(0);let le=0,ce=t.width,fe=t.height,V=1,oe=null,re=null;const U=new jt(0,0,ce,fe),Z=new jt(0,0,ce,fe);let Ie=!1;const Be=new Md;let J=!1,me=!1;const he=new Xt,Ce=new ne,be=new jt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function pt(){return q===null?V:1}let B=r;function wt(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),B===null){const X="webgl2";if(B=wt(X,R),B===null)throw wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,yt,Ye,bt,ke,ct,Ot,Bt,L,T,$,de,_e,ue,Ke,Ae,He,Ze,we,De,rt,Xe,Pe,ut;function G(){Je=new AE(B),Je.init(),Xe=new lw(B,Je),yt=new xE(B,Je,e,Xe),Ye=new aw(B,Je),yt.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),bt=new bE(B),ke=new q1,ct=new ow(B,Je,Ye,ke,yt,Xe,bt),Ot=new SE(A),Bt=new TE(A),L=new Uy(B),Pe=new vE(B,L),T=new RE(B,L,bt,Pe),$=new LE(B,T,L,bt),we=new PE(B,yt,ct),Ae=new yE(ke),de=new X1(A,Ot,Bt,Je,yt,Pe,Ae),_e=new pw(A,ke),ue=new $1,Ke=new tw(Je),Ze=new gE(A,Ot,Bt,Ye,$,S,h),He=new rw(A,$,yt),ut=new mw(B,bt,yt,Ye),De=new _E(B,Je,bt),rt=new CE(B,Je,bt),bt.programs=de.programs,A.capabilities=yt,A.extensions=Je,A.properties=ke,A.renderLists=ue,A.shadowMap=He,A.state=Ye,A.info=bt}G();const Me=new dw(A,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(ce,fe,!1))},this.getSize=function(R){return R.set(ce,fe)},this.setSize=function(R,X,te=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,fe=X,t.width=Math.floor(R*V),t.height=Math.floor(X*V),te===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ce*V,fe*V).floor()},this.setDrawingBufferSize=function(R,X,te){ce=R,fe=X,V=te,t.width=Math.floor(R*te),t.height=Math.floor(X*te),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,X,te,ie){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,X,te,ie),Ye.viewport(F.copy(U).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,X,te,ie){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,X,te,ie),Ye.scissor(ae.copy(Z).multiplyScalar(V).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){Ye.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,te=!0){let ie=0;if(R){let W=!1;if(q!==null){const Ee=q.texture.format;W=Ee===vd||Ee===gd||Ee===md}if(W){const Ee=q.texture.type,Le=Ee===Ei||Ee===ts||Ee===$a||Ee===Ka||Ee===hd||Ee===pd,Ve=Ze.getClearColor(),Fe=Ze.getClearAlpha(),it=Ve.r,st=Ve.g,Qe=Ve.b;Le?(E[0]=it,E[1]=st,E[2]=Qe,E[3]=Fe,B.clearBufferuiv(B.COLOR,0,E)):(w[0]=it,w[1]=st,w[2]=Qe,w[3]=Fe,B.clearBufferiv(B.COLOR,0,w))}else ie|=B.COLOR_BUFFER_BIT}X&&(ie|=B.DEPTH_BUFFER_BIT),te&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze.dispose(),ue.dispose(),Ke.dispose(),ke.dispose(),Ot.dispose(),Bt.dispose(),$.dispose(),Pe.dispose(),ut.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fn),Me.removeEventListener("sessionend",rs),Un.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=bt.autoReset,X=He.enabled,te=He.autoUpdate,ie=He.needsUpdate,W=He.type;G(),bt.autoReset=R,He.enabled=X,He.autoUpdate=te,He.needsUpdate=ie,He.type=W}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const X=R.target;X.removeEventListener("dispose",pe),We(X)}function We(R){lt(R),ke.remove(R)}function lt(R){const X=ke.get(R).programs;X!==void 0&&(X.forEach(function(te){de.releaseProgram(te)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,te,ie,W,Ee){X===null&&(X=qe);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Ti(R,X,te,ie,W);Ye.setMaterial(ie,Le);let Fe=te.index,it=1;if(ie.wireframe===!0){if(Fe=T.getWireframeAttribute(te),Fe===void 0)return;it=2}const st=te.drawRange,Qe=te.attributes.position;let at=st.start*it,Ct=(st.start+st.count)*it;Ee!==null&&(at=Math.max(at,Ee.start*it),Ct=Math.min(Ct,(Ee.start+Ee.count)*it)),Fe!==null?(at=Math.max(at,0),Ct=Math.min(Ct,Fe.count)):Qe!=null&&(at=Math.max(at,0),Ct=Math.min(Ct,Qe.count));const Mt=Ct-at;if(Mt<0||Mt===1/0)return;Pe.setup(W,ie,Ve,te,Fe);let It,Lt=De;if(Fe!==null&&(It=L.get(Fe),Lt=rt,Lt.setIndex(It)),W.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*pt()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(W.isLine){let et=ie.linewidth;et===void 0&&(et=1),Ye.setLineWidth(et*pt()),W.isLineSegments?Lt.setMode(B.LINES):W.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else W.isPoints?Lt.setMode(B.POINTS):W.isSprite&&Lt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const et=W._multiDrawStarts,Nt=W._multiDrawCounts,gt=W._multiDrawCount,Qt=Fe?L.get(Fe).bytesPerElement:1,ei=ke.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<gt;Sn++)ei.setValue(B,"_gl_DrawID",Sn),Lt.render(et[Sn]/Qt,Nt[Sn])}else if(W.isInstancedMesh)Lt.renderInstances(at,Mt,W.count);else if(te.isInstancedBufferGeometry){const et=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Nt=Math.min(te.instanceCount,et);Lt.renderInstances(at,Mt,Nt)}else Lt.render(at,Mt)};function Pt(R,X,te){R.transparent===!0&&R.side===xi&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,as(R,X,te),R.side=wr,R.needsUpdate=!0,as(R,X,te),R.side=xi):as(R,X,te)}this.compile=function(R,X,te=null){te===null&&(te=R),g=Ke.get(te),g.init(X),P.push(g),te.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==te&&R.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ie=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Ve=Ee[Le];Pt(Ve,te,W),ie.add(Ve)}else Pt(Ee,te,W),ie.add(Ee)}),g=P.pop(),ie},this.compileAsync=function(R,X,te=null){const ie=this.compile(R,X,te);return new Promise(W=>{function Ee(){if(ie.forEach(function(Le){ke.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){W(R);return}setTimeout(Ee,10)}Je.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function Wn(R){St&&St(R)}function fn(){Un.stop()}function rs(){Un.start()}const Un=new nv;Un.setAnimationLoop(Wn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(R){St=R,Me.setAnimationLoop(R),R===null?Un.stop():Un.start()},Me.addEventListener("sessionstart",fn),Me.addEventListener("sessionend",rs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(X),X=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,X,q),g=Ke.get(R,P.length),g.init(X),P.push(g),he.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Be.setFromProjectionMatrix(he,Si,X.reversedDepth),me=this.localClippingEnabled,J=Ae.init(this.clippingPlanes,me),_=ue.get(R,I.length),_.init(),I.push(_),Me.enabled===!0&&Me.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&sa(Ee,X,-1/0,A.sortObjects)}sa(R,X,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(oe,re),Rt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Rt&&Ze.addToRenderList(_,R),this.info.render.frame++,J===!0&&Ae.beginShadows();const te=g.state.shadowsArray;He.render(te,R,X),J===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=_.opaque,W=_.transmissive;if(g.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(W.length>0)for(let Le=0,Ve=Ee.length;Le<Ve;Le++){const Fe=Ee[Le];Ar(ie,W,R,Fe)}Rt&&Ze.render(R);for(let Le=0,Ve=Ee.length;Le<Ve;Le++){const Fe=Ee[Le];Wi(_,R,Fe,Fe.viewport)}}else W.length>0&&Ar(ie,W,R,X),Rt&&Ze.render(R),Wi(_,R,X);q!==null&&H===0&&(ct.updateMultisampleRenderTarget(q),ct.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(A,R,X),Pe.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(g=P[P.length-1],J===!0&&Ae.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function sa(R,X,te,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ie&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const Le=$.update(R),Ve=R.material;Ve.visible&&_.push(R,Le,Ve,te,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const Le=$.update(R),Ve=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),be.copy(Le.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Ve)){const Fe=Le.groups;for(let it=0,st=Fe.length;it<st;it++){const Qe=Fe[it],at=Ve[Qe.materialIndex];at&&at.visible&&_.push(R,Le,at,te,be.z,Qe)}}else Ve.visible&&_.push(R,Le,Ve,te,be.z,null)}}const Ee=R.children;for(let Le=0,Ve=Ee.length;Le<Ve;Le++)sa(Ee[Le],X,te,ie)}function Wi(R,X,te,ie){const W=R.opaque,Ee=R.transmissive,Le=R.transparent;g.setupLightsView(te),J===!0&&Ae.setGlobalState(A.clippingPlanes,te),ie&&Ye.viewport(F.copy(ie)),W.length>0&&wi(W,X,te),Ee.length>0&&wi(Ee,X,te),Le.length>0&&wi(Le,X,te),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ar(R,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new ns(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Ja:Ei,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[ie.id],Le=ie.viewport||F;Ee.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);const Ve=A.getRenderTarget(),Fe=A.getActiveCubeFace(),it=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(se),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&Ze.render(te);const st=A.toneMapping;A.toneMapping=Er;const Qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),J===!0&&Ae.setGlobalState(A.clippingPlanes,ie),wi(R,te,ie),ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee),Je.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ct=0,Mt=X.length;Ct<Mt;Ct++){const It=X[Ct],Lt=It.object,et=It.geometry,Nt=It.material,gt=It.group;if(Nt.side===xi&&Lt.layers.test(ie.layers)){const Qt=Nt.side;Nt.side=Dn,Nt.needsUpdate=!0,ss(Lt,te,ie,et,Nt,gt),Nt.side=Qt,Nt.needsUpdate=!0,at=!0}}at===!0&&(ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Ve,Fe,it),A.setClearColor(se,le),Qe!==void 0&&(ie.viewport=Qe),A.toneMapping=st}function wi(R,X,te){const ie=X.isScene===!0?X.overrideMaterial:null;for(let W=0,Ee=R.length;W<Ee;W++){const Le=R[W],Ve=Le.object,Fe=Le.geometry,it=Le.group;let st=Le.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ve.layers.test(te.layers)&&ss(Ve,X,te,Fe,st,it)}}function ss(R,X,te,ie,W,Ee){R.onBeforeRender(A,X,te,ie,W,Ee),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(A,X,te,ie,R,Ee),W.transparent===!0&&W.side===xi&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,A.renderBufferDirect(te,X,ie,W,R,Ee),W.side=wr,W.needsUpdate=!0,A.renderBufferDirect(te,X,ie,W,R,Ee),W.side=xi):A.renderBufferDirect(te,X,ie,W,R,Ee),R.onAfterRender(A,X,te,ie,W,Ee)}function as(R,X,te){X.isScene!==!0&&(X=qe);const ie=ke.get(R),W=g.state.lights,Ee=g.state.shadowsArray,Le=W.state.version,Ve=de.getParameters(R,W.state,Ee,X,te),Fe=de.getProgramCacheKey(Ve);let it=ie.programs;ie.environment=R.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(R.isMeshStandardMaterial?Bt:Ot).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",pe),it=new Map,ie.programs=it);let st=it.get(Fe);if(st!==void 0){if(ie.currentProgram===st&&ie.lightsStateVersion===Le)return so(R,Ve),st}else Ve.uniforms=de.getUniforms(R),R.onBeforeCompile(Ve,A),st=de.acquireProgram(Ve,Fe),it.set(Fe,st),ie.uniforms=Ve.uniforms;const Qe=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Ae.uniform),so(R,Ve),ie.needsLights=oo(R),ie.lightsStateVersion=Le,ie.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=st,ie.uniformsList=null,st}function ro(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=kl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function so(R,X){const te=ke.get(R);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Ti(R,X,te,ie,W){X.isScene!==!0&&(X=qe),ct.resetTextureUnits();const Ee=X.fog,Le=ie.isMeshStandardMaterial?X.environment:null,Ve=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Js,Fe=(ie.isMeshStandardMaterial?Bt:Ot).get(ie.envMap||Le),it=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!te.morphAttributes.position,at=!!te.morphAttributes.normal,Ct=!!te.morphAttributes.color;let Mt=Er;ie.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Mt=A.toneMapping);const It=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Lt=It!==void 0?It.length:0,et=ke.get(ie),Nt=g.state.lights;if(J===!0&&(me===!0||R!==C)){const qt=R===C&&ie.id===b;Ae.setState(ie,R,qt)}let gt=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Nt.state.version||et.outputColorSpace!==Ve||W.isBatchedMesh&&et.batching===!1||!W.isBatchedMesh&&et.batching===!0||W.isBatchedMesh&&et.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&et.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&et.instancing===!1||!W.isInstancedMesh&&et.instancing===!0||W.isSkinnedMesh&&et.skinning===!1||!W.isSkinnedMesh&&et.skinning===!0||W.isInstancedMesh&&et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&et.instancingMorph===!1&&W.morphTexture!==null||et.envMap!==Fe||ie.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==st||et.morphTargets!==Qe||et.morphNormals!==at||et.morphColors!==Ct||et.toneMapping!==Mt||et.morphTargetsCount!==Lt)&&(gt=!0):(gt=!0,et.__version=ie.version);let Qt=et.currentProgram;gt===!0&&(Qt=as(ie,X,W));let ei=!1,Sn=!1,Rr=!1;const Ut=Qt.getUniforms(),Mn=et.uniforms;if(Ye.useProgram(Qt.program)&&(ei=!0,Sn=!0,Rr=!0),ie.id!==b&&(b=ie.id,Sn=!0),ei||C!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(B,"projectionMatrix",R.projectionMatrix),Ut.setValue(B,"viewMatrix",R.matrixWorldInverse);const hn=Ut.map.cameraPosition;hn!==void 0&&hn.setValue(B,Ce.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Sn=!0,Rr=!0)}if(W.isSkinnedMesh){Ut.setOptional(B,W,"bindMatrix"),Ut.setOptional(B,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ut.setValue(B,"boneTexture",qt.boneTexture,ct))}W.isBatchedMesh&&(Ut.setOptional(B,W,"batchingTexture"),Ut.setValue(B,"batchingTexture",W._matricesTexture,ct),Ut.setOptional(B,W,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",W._indirectTexture,ct),Ut.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",W._colorsTexture,ct));const dn=te.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&we.update(W,te,Qt),(Sn||et.receiveShadow!==W.receiveShadow)&&(et.receiveShadow=W.receiveShadow,Ut.setValue(B,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=Fe,Mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),Sn&&(Ut.setValue(B,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&ao(Mn,Rr),Ee&&ie.fog===!0&&_e.refreshFogUniforms(Mn,Ee),_e.refreshMaterialUniforms(Mn,ie,V,fe,g.state.transmissionRenderTarget[R.id]),kl.upload(B,ro(et),Mn,ct)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(kl.upload(B,ro(et),Mn,ct),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ut.setValue(B,"center",W.center),Ut.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ut.setValue(B,"normalMatrix",W.normalMatrix),Ut.setValue(B,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let hn=0,Cr=qt.length;hn<Cr;hn++){const vt=qt[hn];ut.update(vt,Qt),ut.bind(vt,Qt)}}return Qt}function ao(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function oo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,X,te){const ie=ke.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ke.get(R.texture).__webglTexture=X,ke.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:te,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const te=ke.get(R);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Zl=B.createFramebuffer();this.setRenderTarget=function(R,X=0,te=0){q=R,k=X,H=te;let ie=!0,W=null,Ee=!1,Le=!1;if(R){const Fe=ke.get(R);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(Fe.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Fe.__hasExternalTextures)ct.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Fe.__boundDepthTexture!==Qe){if(Qe!==null&&ke.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const st=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[X])?W=st[X][te]:W=st[X],Ee=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?W=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?W=st[te]:W=st,F.copy(R.viewport),ae.copy(R.scissor),Q=R.scissorTest}else F.copy(U).multiplyScalar(V).floor(),ae.copy(Z).multiplyScalar(V).floor(),Q=Ie;if(te!==0&&(W=Zl),Ye.bindFramebuffer(B.FRAMEBUFFER,W)&&ie&&Ye.drawBuffers(R,W),Ye.viewport(F),Ye.scissor(ae),Ye.setScissorTest(Q),Ee){const Fe=ke.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,te)}else if(Le){const Fe=X;for(let it=0;it<R.textures.length;it++){const st=ke.get(R.textures[it]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+it,st.__webglTexture,te,Fe)}}else if(R!==null&&te!==0){const Fe=ke.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fe.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(R,X,te,ie,W,Ee,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){Ye.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const it=R.textures[Ve],st=it.format,Qe=it.type;if(!yt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&te>=0&&te<=R.height-W&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(X,te,ie,W,Xe.convert(st),Xe.convert(Qe),Ee))}finally{const it=q!==null?ke.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,X,te,ie,W,Ee,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(X>=0&&X<=R.width-ie&&te>=0&&te<=R.height-W){Ye.bindFramebuffer(B.FRAMEBUFFER,Fe);const it=R.textures[Ve],st=it.format,Qe=it.type;if(!yt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(X,te,ie,W,Xe.convert(st),Xe.convert(Qe),0);const Ct=q!==null?ke.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Ct);const Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $x(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(at),B.deleteSync(Mt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,te=0){const ie=Math.pow(2,-te),W=Math.floor(R.image.width*ie),Ee=Math.floor(R.image.height*ie),Le=X!==null?X.x:0,Ve=X!==null?X.y:0;ct.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Le,Ve,W,Ee),Ye.unbindTexture()};const lo=B.createFramebuffer(),co=B.createFramebuffer();this.copyTextureToTexture=function(R,X,te=null,ie=null,W=0,Ee=null){Ee===null&&(W!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=W,W=0):Ee=0);let Le,Ve,Fe,it,st,Qe,at,Ct,Mt;const It=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(te!==null)Le=te.max.x-te.min.x,Ve=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,st=te.min.y,Qe=te.isBox3?te.min.z:0;else{const dn=Math.pow(2,-W);Le=Math.floor(It.width*dn),Ve=Math.floor(It.height*dn),R.isDataArrayTexture?Fe=It.depth:R.isData3DTexture?Fe=Math.floor(It.depth*dn):Fe=1,it=0,st=0,Qe=0}ie!==null?(at=ie.x,Ct=ie.y,Mt=ie.z):(at=0,Ct=0,Mt=0);const Lt=Xe.convert(X.format),et=Xe.convert(X.type);let Nt;X.isData3DTexture?(ct.setTexture3D(X,0),Nt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ct.setTexture2DArray(X,0),Nt=B.TEXTURE_2D_ARRAY):(ct.setTexture2D(X,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ei=B.getParameter(B.UNPACK_SKIP_PIXELS),Sn=B.getParameter(B.UNPACK_SKIP_ROWS),Rr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,it),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);const Ut=R.isDataArrayTexture||R.isData3DTexture,Mn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const dn=ke.get(R),qt=ke.get(X),hn=ke.get(dn.__renderTarget),Cr=ke.get(qt.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let vt=0;vt<Fe;vt++)Ut&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(R).__webglTexture,W,Qe+vt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(X).__webglTexture,Ee,Mt+vt)),B.blitFramebuffer(it,st,Le,Ve,at,Ct,Le,Ve,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||ke.has(R)){const dn=ke.get(R),qt=ke.get(X);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,lo),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,co);for(let hn=0;hn<Fe;hn++)Ut?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dn.__webglTexture,W,Qe+hn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dn.__webglTexture,W),Mn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,Ee,Mt+hn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,Ee),W!==0?B.blitFramebuffer(it,st,Le,Ve,at,Ct,Le,Ve,B.COLOR_BUFFER_BIT,B.NEAREST):Mn?B.copyTexSubImage3D(Nt,Ee,at,Ct,Mt+hn,it,st,Le,Ve):B.copyTexSubImage2D(Nt,Ee,at,Ct,it,st,Le,Ve);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Nt,Ee,at,Ct,Mt,Le,Ve,Fe,Lt,et,It.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,Ee,at,Ct,Mt,Le,Ve,Fe,Lt,It.data):B.texSubImage3D(Nt,Ee,at,Ct,Mt,Le,Ve,Fe,Lt,et,It):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,at,Ct,Le,Ve,Lt,et,It.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,at,Ct,It.width,It.height,Lt,It.data):B.texSubImage2D(B.TEXTURE_2D,Ee,at,Ct,Le,Ve,Lt,et,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ei),B.pixelStorei(B.UNPACK_SKIP_ROWS,Sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Rr),Ee===0&&X.generateMipmaps&&B.generateMipmap(Nt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,X,te=null,ie=null,W=0){return Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,te,ie,W)},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){k=0,H=0,q=null,Ye.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function vw({ballPositions:s,onBallSelect:e,selectedBall:t,currentTurn:r}){const o=ye.useRef(null),l=ye.useRef(null),u=ye.useRef(null),f=ye.useRef(null),h=ye.useRef({}),[p,x]=ye.useState(null),[v,y]=ye.useState(!1),S=ye.useCallback(()=>{if(!s||!l.current)return;Object.values(h.current).forEach(P=>{l.current.remove(P)}),h.current={};const E=new wd(8,32,32),w=new af({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.95}),_=new $t(E,w);_.position.set(s.center_ball.x,s.center_ball.y,8),_.castShadow=!0,_.receiveShadow=!0,_.userData={id:"center",type:"center"},l.current.add(_),h.current.center=_;const g=new af({color:16724787,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:2228224,transparent:!0,opacity:.95});s.player1_balls.forEach(P=>{if(P.active){const A=new $t(E,g);A.position.set(P.x,P.y,8),A.castShadow=!0,A.receiveShadow=!0,A.userData={id:P.id,type:"player1",isPlayer1:!0},l.current.add(A),h.current[P.id]=A}});const I=new af({color:3355647,metalness:.4,roughness:.2,clearcoat:.8,clearcoatRoughness:.2,emissive:34,transparent:!0,opacity:.95});s.player2_balls.forEach(P=>{if(P.active){const A=new $t(E,I);A.position.set(P.x,P.y,8),A.castShadow=!0,A.receiveShadow=!0,A.userData={id:P.id,type:"player2",isPlayer1:!1},l.current.add(A),h.current[`p2_${P.id}`]=A}})},[s]);return ye.useCallback(()=>{const E=r;return Object.values(h.current).filter(w=>E===1?w.userData.type==="player1":w.userData.type==="player2")},[r]),ye.useCallback(E=>{if(!E)return!1;const w=r;if(!(w===1&&E.userData.type==="player1"||w===2&&E.userData.type==="player2"))return!1;const g=E.position.y;return w===1?g>=200:g<=-200},[r]),ye.useEffect(()=>{const E=o.current;if(!E)return;const w=new yy;w.background=new ht(526346);const _=new Vn(75,E.clientWidth/E.clientHeight,.1,1e3);_.position.set(0,0,450);const g=new gw({antialias:!0,alpha:!0});g.setSize(E.clientWidth,E.clientHeight),g.shadowMap.enabled=!0,g.shadowMap.type=Dg,g.physicallyCorrectLights=!0,g.toneMapping=Ig,g.toneMappingExposure=1.2,E.appendChild(g.domElement);const I=new Ly(16777215,.5);w.add(I);const P=new by(16777215,1.5,1e3,Math.PI/4,.5,2);P.position.set(0,0,500),P.castShadow=!0,P.shadow.mapSize.width=1024,P.shadow.mapSize.height=1024,w.add(P),l.current=w,u.current=g,f.current=_;const A=new Hi(420,620,20),O=new zm({color:1710618,transparent:!0,opacity:.9}),k=new $t(A,O);k.position.z=-10,k.receiveShadow=!0,w.add(k);const H=new io(400,600),q=new zm({color:678933,transparent:!0,opacity:.95}),b=new $t(H,q);b.receiveShadow=!0,w.add(b);const C=new of({color:5056015,shininess:30}),F=new Hi(440,20,25),ae=new $t(F,C);ae.position.set(0,310,12),ae.castShadow=!0,w.add(ae);const Q=new $t(F,C);Q.position.set(0,-310,12),Q.castShadow=!0,w.add(Q);const se=new Hi(20,600,25),le=new $t(se,C);le.position.set(-210,0,12),le.castShadow=!0,w.add(le);const ce=new $t(se,C);ce.position.set(210,0,12),ce.castShadow=!0,w.add(ce);const fe=new of({color:16729156,transparent:!0,opacity:.7,emissive:2228224}),V=new Hi(400,5,15),oe=new $t(V,fe);oe.position.set(0,200,8),w.add(oe);const re=new of({color:4474111,transparent:!0,opacity:.7,emissive:34}),U=new $t(V,re);U.position.set(0,-200,8),w.add(U);const Z=new Ed(48,52,64),Ie=new Sd({color:65535,side:xi,transparent:!0,opacity:.8}),Be=new $t(Z,Ie);Be.position.z=1,w.add(Be),S();const J=new Dy,me=new xt,he=qe=>{const Rt=g.domElement.getBoundingClientRect();me.x=(qe.clientX-Rt.left)/Rt.width*2-1,me.y=-((qe.clientY-Rt.top)/Rt.height)*2+1,J.setFromCamera(me,_);const pt=J.intersectObjects(Object.values(h.current));if(pt.length>0){const B=pt[0].object,wt=B.userData.id,Je=B.userData.isPlayer1===!0;if(e){const Ye=(Je?s.player1_balls:s.player2_balls).find(bt=>bt.id===wt);e(Ye,Je)}}};g.domElement.addEventListener("click",he);const Ce=()=>{requestAnimationFrame(Ce),g.render(w,_)};Ce();const be=()=>{E&&g&&_&&(_.aspect=E.clientWidth/E.clientHeight,_.updateProjectionMatrix(),g.setSize(E.clientWidth,E.clientHeight))};return window.addEventListener("resize",be),()=>{window.removeEventListener("resize",be),g.domElement.removeEventListener("click",he),E&&g.domElement&&E.removeChild(g.domElement)}},[s,S,r,e]),ye.useEffect(()=>{s&&h.current&&Object.values(h.current).forEach(E=>{let w;E.userData.type==="center"?w=s.center_ball:E.userData.type==="player1"?w=s.player1_balls.find(_=>_.id===E.userData.id):E.userData.type==="player2"&&(w=s.player2_balls.find(_=>_.id===E.userData.id)),w&&(E.position.set(w.x,w.y,8),E.visible=w.active)})},[s]),D.jsx("div",{ref:o,className:"w-full h-full rounded-lg overflow-hidden"})}function _w({game:s,gameMessage:e}){if(!s)return null;const{player1_name:t,player2_name:r,player1_score:o,player2_score:l,target_score:u,current_turn:f,round_number:h}=s,p=f===1;return D.jsxs("div",{className:"space-y-4 h-full",children:[D.jsx("div",{className:"glass-panel rounded-2xl p-4",children:D.jsxs("div",{className:"text-center",children:[D.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${p?"bg-cyan-400/20 shadow-lg":""}`,children:[D.jsx("p",{className:"text-lg font-bold text-white",children:t}),D.jsx("p",{className:"text-3xl font-bold text-cyan-400",children:o})]}),D.jsxs("div",{className:"text-center",children:[D.jsxs("p",{className:"text-sm text-slate-400",children:["Round ",h||1]}),D.jsx(Ya,{className:"w-8 h-8 text-yellow-400 mx-auto"}),D.jsxs("p",{className:"text-sm text-slate-400",children:["Target: ",u]})]}),D.jsxs("div",{className:`text-center p-3 rounded-lg transition-all duration-300 ${p?"":"bg-purple-400/20 shadow-lg"}`,children:[D.jsx("p",{className:"text-lg font-bold text-white",children:r}),D.jsx("p",{className:"text-3xl font-bold text-purple-400",children:l})]})]})}),D.jsx("div",{className:"text-center bg-slate-900/50 rounded-lg p-3 mt-4",children:D.jsx("p",{className:"text-white font-semibold animate-pulse",children:e})}),D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-4",children:D.jsxs(Sr,{className:"flex items-center gap-2 text-white",children:[D.jsx(Ya,{className:"w-5 h-5 text-yellow-400"}),"Score"]})}),D.jsxs(yr,{className:"p-0 space-y-4",children:[D.jsx("div",{className:`glass-panel rounded-xl p-3 ${f===1?"border-red-400/50":""}`,children:D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("div",{className:"w-4 h-4 rounded-full bg-red-400"}),D.jsx("span",{className:"text-white font-medium",children:t})]}),D.jsx("div",{className:"text-2xl font-bold text-red-400",children:o})]})}),D.jsx("div",{className:`glass-panel rounded-xl p-3 ${f===2?"border-blue-400/50":""}`,children:D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("div",{className:"w-4 h-4 rounded-full bg-blue-400"}),D.jsx("span",{className:"text-white font-medium",children:r})]}),D.jsx("div",{className:"text-2xl font-bold text-blue-400",children:l})]})}),D.jsx("div",{className:"text-center pt-2 border-t border-white/10",children:D.jsxs(gr,{variant:"outline",className:"border-gray-400/30 text-gray-300",children:[D.jsx(qa,{className:"w-3 h-3 mr-1"}),"First to ",u]})})]})]}),D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-2",children:D.jsxs(Sr,{className:"flex items-center gap-2 text-white text-lg",children:[D.jsx(J0,{className:"w-5 h-5 text-gray-300"}),"Current Ball"]})}),D.jsx(yr,{className:"p-0",children:D.jsxs("div",{className:"flex items-center justify-center gap-2",children:[D.jsx("div",{className:`w-8 h-8 rounded-full ${f===1?"bg-red-500":"bg-blue-500"} border-2 border-white/50 shadow-lg`}),D.jsx("span",{className:"text-gray-300 text-sm",children:"Ready to play"})]})})]}),D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-4",children:D.jsx(Sr,{className:"text-white text-lg",children:"CenterBall Rules"})}),D.jsx(yr,{className:"p-0 space-y-3",children:D.jsxs("div",{className:"text-xs text-gray-300 space-y-2",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{children:"Touch center + both in ring"}),D.jsx(gr,{className:"bg-green-400/20 text-green-400 border-green-400/30",children:"3 pts"})]}),D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{children:"In ring, not touching center"}),D.jsx(gr,{className:"bg-yellow-400/20 text-yellow-400 border-yellow-400/30",children:"2 pts"})]}),D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{children:"Closest outside ring"}),D.jsx(gr,{className:"bg-blue-400/20 text-blue-400 border-blue-400/30",children:"1 pt"})]})]})})]}),D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-4",children:D.jsx(Sr,{className:"text-white text-lg",children:"Arena Rules"})}),D.jsxs(yr,{className:"p-0 space-y-2 text-xs text-gray-300",children:[D.jsx("p",{children:"• Balls must stay behind start barriers"}),D.jsx("p",{children:"• Once past barrier, balls are in play"}),D.jsx("p",{children:"• In-play balls can only be moved by collisions"}),D.jsx("p",{children:"• All balls reset after each round"})]})]}),D.jsx("div",{className:"glass-panel rounded-2xl p-4",children:D.jsxs("div",{className:"space-y-2 text-sm",children:[D.jsxs("div",{className:"flex justify-between",children:[D.jsx("span",{className:"text-gray-300",children:"Round:"}),D.jsx("span",{className:"text-white font-medium",children:h||1})]}),D.jsxs("div",{className:"flex justify-between",children:[D.jsx("span",{className:"text-gray-300",children:"Mode:"}),D.jsx(gr,{variant:"outline",className:`border-gray-400/30 text-xs ${u===21?"text-green-400":"text-red-400"}`,children:u===21?"Beginner":"Veteran"})]})]})})]})}function gg({value:s=[0],onValueChange:e=()=>{},min:t=0,max:r=100,step:o=1,className:l=""}){const u=Array.isArray(s)?s[0]:s;return D.jsx("input",{type:"range",min:t,max:r,step:o,value:u,onChange:f=>e([Number(f.target.value)]),className:l})}function xw({game:s,selectedBall:e,onAimChange:t,onShoot:r,onCancel:o}){const[l,u]=ye.useState([0]),[f,h]=ye.useState([50]);ye.useEffect(()=>{t&&t({angle:l[0],power:f[0]})},[l,f,t]);const p=()=>s?.current_turn===1,x=()=>!e||!s?!1:p()===e.isPlayer1,v=()=>{u([0]),h([50]),o&&o()},y=()=>{r&&r({angle:l[0],power:f[0]})};return D.jsxs("div",{className:"space-y-4 h-full",children:[D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-4",children:D.jsxs(Sr,{className:"flex items-center gap-2 text-white",children:[D.jsx(qa,{className:"w-5 h-5 text-cyan-400"}),"Ball Control"]})}),D.jsx(yr,{className:"p-0",children:e?D.jsxs("div",{className:"space-y-3",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{className:"text-gray-300",children:"Selected Ball:"}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("div",{className:`w-4 h-4 rounded-full ${e.isPlayer1?"bg-cyan-400":"bg-purple-400"}`}),D.jsxs("span",{className:"text-white font-medium",children:["Ball #",e.id]})]})]}),D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{className:"text-gray-300",children:"Player:"}),D.jsx("span",{className:"text-white font-medium",children:e.isPlayer1?s?.player1_name:s?.player2_name})]}),!x()&&D.jsx("div",{className:"glass-panel bg-red-400/10 border-red-400/30 rounded-lg p-2",children:D.jsx("p",{className:"text-red-400 text-sm text-center",children:"Not your turn!"})})]}):D.jsxs("div",{className:"text-center py-6",children:[D.jsx(qa,{className:"w-8 h-8 text-gray-400 mx-auto mb-2 opacity-50"}),D.jsx("p",{className:"text-gray-400 text-sm",children:"Select a ball to control"})]})})]}),e&&x()&&D.jsxs("div",{className:"glass-panel rounded-2xl p-4",children:[D.jsx(xr,{className:"p-0 mb-4",children:D.jsxs(Sr,{className:"flex items-center gap-2 text-white",children:[D.jsx(ex,{className:"w-5 h-5 text-magenta-400"}),"Aim & Shoot"]})}),D.jsxs(yr,{className:"p-0 space-y-6",children:[D.jsxs("div",{children:[D.jsxs("div",{className:"flex items-center justify-between mb-3",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(tx,{className:"w-4 h-4 text-cyan-400"}),D.jsx("span",{className:"text-gray-300 text-sm",children:"Angle"})]}),D.jsxs("span",{className:"text-white font-medium",children:[l[0],"°"]})]}),D.jsx(gg,{value:l,onValueChange:u,max:360,min:0,step:5,className:"glass-slider"})]}),D.jsxs("div",{children:[D.jsxs("div",{className:"flex items-center justify-between mb-3",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(xf,{className:"w-4 h-4 text-yellow-400"}),D.jsx("span",{className:"text-gray-300 text-sm",children:"Power"})]}),D.jsxs("span",{className:"text-white font-medium",children:[f[0],"%"]})]}),D.jsx(gg,{value:f,onValueChange:h,max:100,min:10,className:"glass-slider"})]}),D.jsxs("div",{className:"flex gap-2",children:[D.jsxs(es,{onClick:v,variant:"outline",className:"w-full",children:[D.jsx(Lg,{className:"w-4 h-4 mr-2"}),"Cancel"]}),D.jsxs(es,{onClick:y,className:"w-full bg-green-500 hover:bg-green-600",children:[D.jsx(xf,{className:"w-4 h-4 mr-2"}),"Shoot"]})]})]})]})]})}function yw(){const s=ud(),[e]=q0(),[t,r]=ye.useState(null),[o,l]=ye.useState(!0),[u,f]=ye.useState(null),[h,p]=ye.useState({angle:0,power:50}),[x,v]=ye.useState(!1),[y,S]=ye.useState(""),E=ye.useCallback(async P=>{l(!0);try{const A=await Ws.get(P);if(r(A),A.game_status==="setup")S(`${A.player1_name} goes first!`),await Ws.update(P,{game_status:"playing"}),r(O=>({...O,game_status:"playing"}));else if(A.game_status==="playing"){const O=A.current_turn===1?A.player1_name:A.player2_name;S(`${O}'s turn`)}}catch(A){console.error("Error loading game:",A),s(js("Home"))}l(!1)},[s]);ye.useEffect(()=>{const P=e.get("id");P?E(P):s(js("Home"))},[e,s,E]);const w=ye.useCallback(P=>{if(!P)return{player1:0,player2:0};let A=0,O=0;const k=2.5,H=Math.sqrt(P.center_ball.x**2+P.center_ball.z**2)<=k,q=(Q,se)=>Q.filter(le=>le.active).map(le=>({...le,distance:Math.sqrt((le.x-P.center_ball.x)**2+(le.z-P.center_ball.z)**2),distanceFromCenter:Math.sqrt(le.x**2+le.z**2),player:se})),b=q(P.player1_balls,1),C=q(P.player2_balls,2),F=[...b,...C];F.forEach(Q=>{Q.distance<=.8&&Q.distanceFromCenter<=k&&H&&(Q.player===1?A+=3:O+=3)}),F.forEach(Q=>{!(Q.distance<=.8)&&Q.distanceFromCenter<=k&&(Q.player===1?A+=2:O+=2)});const ae=F.filter(Q=>Q.distanceFromCenter>k);return ae.length>0&&(ae.reduce((se,le)=>le.distance<se.distance?le:se).player===1?A+=1:O+=1),{player1:A,player2:O}},[]),_=ye.useCallback(async({angle:P,power:A})=>{if(!t||!u)return;const O=P*Math.PI/180,k=A/100*15,H={x:Math.sin(O)*k,z:Math.cos(O)*k},q={x:u.x+H.x*.5,y:u.y,z:u.z+H.z*.5};v(!1),f(null);try{const b=JSON.parse(JSON.stringify(t.ball_positions)),F=u.isPlayer1?b.player1_balls:b.player2_balls,ae=F.findIndex(Z=>Z.id===u.id);ae!==-1&&(F[ae].x=q.x,F[ae].z=q.z,F[ae].active=!1);const Q=t.current_turn===1?2:1,se=Q===1?t.player1_name:t.player2_name,le=b.player1_balls.every(Z=>!Z.active),ce=b.player2_balls.every(Z=>!Z.active),fe=le&&ce,V=w(b),oe=V.player1>=t.target_score||V.player2>=t.target_score,re=oe?V.player1>=t.target_score?t.player1_name:t.player2_name:null;let U={ball_positions:b,player1_score:V.player1,player2_score:V.player2,current_turn:Q,...oe&&{game_status:"finished",winner:re}};if(fe&&!oe&&(U.ball_positions={center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(Z,Ie)=>({x:0,y:.4,z:2.5+Ie*.3,active:!0,id:Ie+1})),player2_balls:Array.from({length:5},(Z,Ie)=>({x:0,y:.4,z:-2.5-Ie*.3,active:!0,id:Ie+1}))},U.round_number=(t.round_number||1)+1,U.current_turn=1),await Ws.update(t.id,U),r(Z=>({...Z,...U})),oe)S(`🎉 ${re} wins the game!`);else if(fe){const Z=U.current_turn===1?t.player1_name:t.player2_name;S(`Round complete! ${Z} starts round ${U.round_number}.`)}else S(`${se}'s turn`)}catch(b){console.error("Error updating game:",b)}},[t,u,w]),g=(P,A)=>{x||t.current_turn===(A?1:2)&&(f({...P,isPlayer1:A}),v(!0))},I=async()=>{if(!t)return;const P={player1_score:0,player2_score:0,current_turn:1,game_status:"playing",winner:null,round_number:1,ball_positions:{center_ball:{x:0,y:.4,z:0},player1_balls:Array.from({length:5},(A,O)=>({x:0,y:.4,z:2.5+O*.3,active:!0,id:O+1})),player2_balls:Array.from({length:5},(A,O)=>({x:0,y:.4,z:-2.5-O*.3,active:!0,id:O+1}))}};try{await Ws.update(t.id,P),r(A=>({...A,...P})),S(`${t.player1_name} goes first!`)}catch(A){console.error("Error resetting game:",A)}};return o?D.jsx("div",{className:"min-h-screen flex items-center justify-center",children:D.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center",children:[D.jsx("div",{className:"w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"}),D.jsx("p",{className:"text-white text-lg",children:"Loading game..."})]})}):t?D.jsxs("div",{className:"min-h-screen flex flex-col p-4 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white",children:[D.jsxs("header",{className:"flex items-center justify-between mb-4 flex-wrap gap-4",children:[D.jsxs(es,{onClick:()=>s(js("Home")),variant:"ghost",className:"text-slate-300 hover:text-white hover:bg-slate-700",children:[D.jsx(dm,{className:"w-5 h-5 mr-2"}),"Back to Lobby"]}),D.jsx("h1",{className:"text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent order-first sm:order-none w-full sm:w-auto",children:"CenterBall"}),D.jsxs(es,{onClick:I,variant:"outline",className:"text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white",children:[D.jsx(Lg,{className:"w-4 h-4 mr-2"}),"Reset Game"]})]}),D.jsxs("div",{className:"flex-grow grid grid-cols-1 lg:grid-cols-4 gap-6",children:[D.jsxs("div",{className:"lg:col-span-1 glass-panel rounded-2xl p-6 flex flex-col order-2 lg:order-1",children:[D.jsx(_w,{game:t}),D.jsxs("div",{className:"mt-auto pt-4 border-t border-slate-700",children:[D.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:"Game Status"}),D.jsx("p",{className:"text-center text-cyan-300 font-medium h-12 flex items-center justify-center",children:y})]})]}),D.jsxs("div",{className:"lg:col-span-3 relative glass-panel rounded-2xl overflow-hidden order-1 lg:order-2 aspect-video lg:aspect-auto",children:[D.jsx(vw,{ballPositions:t.ball_positions,onBallSelect:g,selectedBall:u,currentTurn:t.current_turn}),x&&u&&D.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-slate-900/50 backdrop-blur-sm",children:D.jsx(xw,{onShoot:_,onCancel:()=>{v(!1),f(null)}})})]})]})]}):D.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800",children:D.jsxs("div",{className:"glass-panel rounded-2xl p-8 text-center max-w-md mx-4",children:[D.jsx(Ya,{className:"w-16 h-16 text-yellow-400 mx-auto mb-4"}),D.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Game Not Found"}),D.jsx("p",{className:"text-slate-300 mb-6",children:"The game you're looking for doesn't exist or has been removed."}),D.jsxs(es,{onClick:()=>s(js("Home")),className:"bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors",children:[D.jsx(dm,{className:"w-4 h-4 mr-2"}),"Back to Home"]})]})})}function Sw(){return D.jsx(X0,{children:D.jsxs(V0,{children:[D.jsx(gf,{path:"/",element:D.jsx(ox,{})}),D.jsx(gf,{path:"/game",element:D.jsx(yw,{})})]})})}function Mw(){if(typeof window>"u")return;let s=document.getElementById("global-error-overlay");s||(s=document.createElement("div"),s.id="global-error-overlay",Object.assign(s.style,{position:"fixed",left:"12px",right:"12px",top:"12px",padding:"12px",background:"rgba(20,20,20,0.95)",color:"white",fontFamily:"monospace",fontSize:"12px",zIndex:999999,whiteSpace:"pre-wrap",borderRadius:"8px",display:"none",maxHeight:"60vh",overflow:"auto"}),document.body.appendChild(s));const e=t=>{s.style.display="block",s.textContent=t};window.addEventListener("error",t=>{try{const r=t.error||t;e(`${r&&r.stack?r.stack:String(r)}`),console.error(r)}catch(r){console.error("Error while displaying overlay",r)}}),window.addEventListener("unhandledrejection",t=>{try{const r=t.reason||t;e(`${r&&r.stack?r.stack:String(r)}`),console.error("Unhandled Rejection:",r)}catch(r){console.error("Error while displaying rejection",r)}})}Mw();K_.createRoot(document.getElementById("root")).render(D.jsx(Wa.StrictMode,{children:D.jsx(Sw,{})}));
