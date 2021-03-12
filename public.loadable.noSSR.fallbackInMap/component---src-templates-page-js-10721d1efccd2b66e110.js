/*! For license information please see component---src-templates-page-js-10721d1efccd2b66e110.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[565],{7880:function(e,t,r){"use strict";r.d(t,{ZP:function(){return w}});var n=r(7294);function o(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=r(3552),c=r(8812),u=r(5706),l=r.n(u);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var d=n.createContext();var p={initialChunks:{}},h="PENDING",y="REJECTED";var m=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?m:t,u=e.render,v=e.onLoad;function b(e,t){void 0===t&&(t={});var m=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),b={};function S(e){return t.cacheKey?t.cacheKey(e):m.resolve?m.resolve(e):"static"}function g(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,c.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var E,_=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:S(r)},f(!r.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(m.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(m.chunkName(r))),i(n)):(!1!==t.ssr&&(m.isReady&&m.isReady(r)||m.chunkName&&p.initialChunks[m.chunkName(r)])&&n.loadSync(),n)}(0,s.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=S(e);return a({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return S(this.props)},n.getCache=function(){return b[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;v&&setTimeout((function(){v(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=g(m.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:m.resolve(this.props),chunkName:m.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=g(t,e.props,{Loadable:k});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,o(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=m.requireAsync(r)).status=h,this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:m.resolve(e.props),chunkName:m.chunkName(e.props),error:t?t.message:t}),n.status=y}))),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,i=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,l=s.loading,f=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===h)throw this.loadAsync();if(c)throw c;var d=n||t.fallback||null;return l?d:u({fallback:d,result:f,options:t,props:a({},i,{ref:r})})},r}(n.Component),C=(E=_,function(e){return n.createElement(d.Consumer,null,(function(t){return n.createElement(E,Object.assign({__chunkExtractor:t},e))}))}),k=n.forwardRef((function(e,t){return n.createElement(C,Object.assign({forwardedRef:t},e))}));return k.preload=function(e){m.requireAsync(e)},k.load=function(e){return m.requireAsync(e)},k}return{loadable:b,lazy:function(e,t){return b(e,a({},t,{suspense:!0}))}}}var b=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),S=b.loadable,g=b.lazy,E=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),_=E.loadable,C=E.lazy;var k=S;k.lib=_,g.lib=C;var w=k},5706:function(e,t,r){"use strict";var n=r(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var s=c(t),y=c(r),m=0;m<i.length;++m){var v=i[m];if(!(a[v]||n&&n[v]||y&&y[v]||s&&s[v])){var b=d(r,v);try{u(t,v,b)}catch(S){}}}}return t}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case y:case c:return e;default:return t}}case o:return t}}}function _(e){return E(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||E(e)===l},t.isConcurrentMode=_,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===m},t.isMemo=function(e){return E(e)===y},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===s},t.isStrictMode=function(e){return E(e)===i},t.isSuspense=function(e){return E(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===i||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===S||e.$$typeof===g||e.$$typeof===v)},t.typeOf=E},8812:function(e,t,r){"use strict";e.exports=r(165)},246:function(e,t,r){"use strict";var n=r(7294),o=r(7880),a={One:(0,o.ZP)({resolved:{},chunkName:function(){return"one"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(255).then(r.bind(r,3823))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 3823}}),Two:(0,o.ZP)({resolved:{},chunkName:function(){return"two"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(804).then(r.bind(r,8744))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 8744}}),Three:(0,o.ZP)({resolved:{},chunkName:function(){return"three"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(841).then(r.bind(r,8926))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 8926}})},i=function(e){var t=e.sections;return(void 0===t?[]:t).map((function(e,t){var r=a[e.__typename];return n.createElement(r,{key:t,id:e.__typename,fallback:n.createElement("div",null,"this is a fallback")})}))};t.Z=i},9078:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),o=r(5127),a=r(5444),i=function(){return n.createElement("div",null,n.createElement(a.Link,{to:"/"},"First"),n.createElement(a.Link,{to:"/second"},"Second"),n.createElement(a.Link,{to:"/third"},"Third"))},s=r(3751),c=r(246),u=function(e){var t=e.pageContext,r=t.title,a=t.sections;return n.createElement(o.Z,null,n.createElement(s.Z,{title:r}),n.createElement("div",null,"content:"),n.createElement(c.Z,{sections:a}),n.createElement(i,null))}}}]);
//# sourceMappingURL=component---src-templates-page-js-10721d1efccd2b66e110.js.map