(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2040:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(6003)},3495:function(e,t,n){Promise.resolve().then(n.t.bind(n,5546,23)),Promise.resolve().then(n.bind(n,6433)),Promise.resolve().then(n.t.bind(n,4646,23)),Promise.resolve().then(n.t.bind(n,7365,23))},6433:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return i}});var r=n(9268),o=n(2040);function i(){let e=o.env.NEXT_PUBLIC_BEAM_TOKEN;return e?(0,r.jsx)("script",{src:"https://beamanalytics.b-cdn.net/beam.min.js","data-token":e,async:!0}):null}},5546:function(){},7365:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4",variable:"__variable_0ec1f4"}},4646:function(e){e.exports={style:{fontFamily:"'__calSans_95396e', '__calSans_Fallback_95396e'"},className:"__className_95396e",variable:"__variable_95396e"}},6003:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u=[],a=!1,l=-1;function f(){a&&r&&(a=!1,r.length?u=r.concat(u):l=-1,u.length&&_())}function _(){if(!a){var e=c(f);a=!0;for(var t=u.length;t;){for(r=u,u=[];++l<t;)r&&r[l].run();l=-1,t=u.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||a||c(_)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,u={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:s.current}}t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[667,139,744],function(){return e(e.s=3495)}),_N_E=e.O()}]);