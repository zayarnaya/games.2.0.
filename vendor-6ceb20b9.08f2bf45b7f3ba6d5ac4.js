/*! For license information please see vendor-6ceb20b9.08f2bf45b7f3ba6d5ac4.js.LICENSE.txt */
"use strict";(self.webpackChunkGames=self.webpackChunkGames||[]).push([[317],{9655:(e,t,n)=>{var r,a;n.r(t),n.d(t,{AbortedDeferredError:()=>u.X3,Await:()=>s.KP,BrowserRouter:()=>N,Form:()=>M,HashRouter:()=>D,Link:()=>V,MemoryRouter:()=>s.VA,NavLink:()=>W,Navigate:()=>s.Fg,NavigationType:()=>u.aU,Outlet:()=>s.j3,Route:()=>s.AW,Router:()=>s.F0,RouterProvider:()=>A,Routes:()=>s.Z5,ScrollRestoration:()=>J,UNSAFE_DataRouterContext:()=>s.w3,UNSAFE_DataRouterStateContext:()=>s.FR,UNSAFE_FetchersContext:()=>L,UNSAFE_LocationContext:()=>s.gd,UNSAFE_NavigationContext:()=>s.Us,UNSAFE_RouteContext:()=>s.pW,UNSAFE_ViewTransitionContext:()=>_,UNSAFE_useRouteId:()=>s.Yi,UNSAFE_useScrollRestoration:()=>re,createBrowserRouter:()=>S,createHashRouter:()=>R,createMemoryRouter:()=>s.bi,createPath:()=>u.Ep,createRoutesFromChildren:()=>s.is,createRoutesFromElements:()=>s.i7,createSearchParams:()=>h,defer:()=>u.PQ,generatePath:()=>u.Gn,isRouteErrorResponse:()=>u.WK,json:()=>u.AV,matchPath:()=>u.LX,matchRoutes:()=>u.fp,parsePath:()=>u.cP,redirect:()=>u.uX,redirectDocument:()=>u.fZ,renderMatches:()=>s.Oe,resolvePath:()=>u.i3,unstable_HistoryRouter:()=>K,unstable_usePrompt:()=>oe,unstable_useViewTransitionState:()=>ie,useActionData:()=>s.nA,useAsyncError:()=>s.iG,useAsyncValue:()=>s.qv,useBeforeUnload:()=>ae,useBlocker:()=>s._Z,useFetcher:()=>$,useFetchers:()=>ee,useFormAction:()=>q,useHref:()=>s.oQ,useInRouterContext:()=>s.GV,useLinkClickHandler:()=>X,useLoaderData:()=>s.f_,useLocation:()=>s.TH,useMatch:()=>s.bS,useMatches:()=>s.SN,useNavigate:()=>s.s0,useNavigation:()=>s.HJ,useNavigationType:()=>s.ur,useOutlet:()=>s.pC,useOutletContext:()=>s.bx,useParams:()=>s.UO,useResolvedPath:()=>s.WU,useRevalidator:()=>s.xW,useRouteError:()=>s.lk,useRouteLoaderData:()=>s.V4,useRoutes:()=>s.V$,useSearchParams:()=>Y,useSubmit:()=>Q});var o=n(7294),i=n(3935),s=n(9250),u=n(2599);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}const f="get",d="application/x-www-form-urlencoded";function m(e){return null!=e&&"string"==typeof e.tagName}function h(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}let v=null;const p=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function w(e){return null==e||p.has(e)?e:null}const y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],g=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],b=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"];function S(e,t){return(0,u.p7)({basename:null==t?void 0:t.basename,future:l({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,u.lX)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:s.us,window:null==t?void 0:t.window}).initialize()}function R(e,t){return(0,u.p7)({basename:null==t?void 0:t.basename,future:l({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,u.q_)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:s.us,window:null==t?void 0:t.window}).initialize()}function E(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=l({},t,{errors:T(t.errors)})),t}function T(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new u.OF(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){if(r.__subType){let t=window[r.__subType];if("function"==typeof t)try{let a=new t(r.message);a.stack="",n[e]=a}catch(e){}}if(null==n[e]){let t=new Error(r.message);t.stack="",n[e]=t}}else n[e]=r;return n}const _=o.createContext({isTransitioning:!1}),L=o.createContext(new Map),C=(r||(r=n.t(o,2))).startTransition,x=(a||(a=n.t(i,2))).flushSync,F=(r||(r=n.t(o,2))).useId;function U(e){x?x(e):e()}class k{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function A(e){let{fallbackElement:t,router:n,future:r}=e,[a,i]=o.useState(n.state),[u,l]=o.useState(),[c,f]=o.useState({isTransitioning:!1}),[d,m]=o.useState(),[h,v]=o.useState(),[p,w]=o.useState(),y=o.useRef(new Map),{v7_startTransition:g}=r||{},b=o.useCallback((e=>{g?function(e){C?C(e):e()}(e):e()}),[g]),S=o.useCallback(((e,t)=>{let{deletedFetchers:r,unstable_flushSync:a,unstable_viewTransitionOpts:o}=t;r.forEach((e=>y.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&y.current.set(t,e.data)}));let s=null==n.window||"function"!=typeof n.window.document.startViewTransition;if(o&&!s){if(a){U((()=>{h&&(d&&d.resolve(),h.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:o.currentLocation,nextLocation:o.nextLocation})}));let t=n.window.document.startViewTransition((()=>{U((()=>i(e)))}));return t.finished.finally((()=>{U((()=>{m(void 0),v(void 0),l(void 0),f({isTransitioning:!1})}))})),void U((()=>v(t)))}h?(d&&d.resolve(),h.skipTransition(),w({state:e,currentLocation:o.currentLocation,nextLocation:o.nextLocation})):(l(e),f({isTransitioning:!0,flushSync:!1,currentLocation:o.currentLocation,nextLocation:o.nextLocation}))}else a?U((()=>i(e))):b((()=>i(e)))}),[n.window,h,d,y,b]);o.useLayoutEffect((()=>n.subscribe(S)),[n,S]),o.useEffect((()=>{c.isTransitioning&&!c.flushSync&&m(new k)}),[c]),o.useEffect((()=>{if(d&&u&&n.window){let e=u,t=d.promise,r=n.window.document.startViewTransition((async()=>{b((()=>i(e))),await t}));r.finished.finally((()=>{m(void 0),v(void 0),l(void 0),f({isTransitioning:!1})})),v(r)}}),[b,u,d,n.window]),o.useEffect((()=>{d&&u&&a.location.key===u.location.key&&d.resolve()}),[d,h,a.location,u]),o.useEffect((()=>{!c.isTransitioning&&p&&(l(p.state),f({isTransitioning:!0,flushSync:!1,currentLocation:p.currentLocation,nextLocation:p.nextLocation}),w(void 0))}),[c.isTransitioning,p]),o.useEffect((()=>{}),[]);let R=o.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),E=n.basename||"/",T=o.useMemo((()=>({router:n,navigator:R,static:!1,basename:E})),[n,R,E]);return o.createElement(o.Fragment,null,o.createElement(s.w3.Provider,{value:T},o.createElement(s.FR.Provider,{value:a},o.createElement(L.Provider,{value:y.current},o.createElement(_.Provider,{value:c},o.createElement(s.F0,{basename:E,location:a.location,navigationType:a.historyAction,navigator:R,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?o.createElement(P,{routes:n.routes,future:n.future,state:a}):t))))),null)}function P(e){let{routes:t,future:n,state:r}=e;return(0,s.DY)(t,void 0,r,n)}function N(e){let{basename:t,children:n,future:r,window:a}=e,i=o.useRef();null==i.current&&(i.current=(0,u.lX)({window:a,v5Compat:!0}));let l=i.current,[c,f]=o.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=o.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return o.useLayoutEffect((()=>l.listen(m)),[l,m]),o.createElement(s.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}function D(e){let{basename:t,children:n,future:r,window:a}=e,i=o.useRef();null==i.current&&(i.current=(0,u.q_)({window:a,v5Compat:!0}));let l=i.current,[c,f]=o.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=o.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return o.useLayoutEffect((()=>l.listen(m)),[l,m]),o.createElement(s.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}function K(e){let{basename:t,children:n,future:r,history:a}=e,[i,u]=o.useState({action:a.action,location:a.location}),{v7_startTransition:l}=r||{},c=o.useCallback((e=>{l&&C?C((()=>u(e))):u(e)}),[u,l]);return o.useLayoutEffect((()=>a.listen(c)),[a,c]),o.createElement(s.F0,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a,future:r})}const H="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,O=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=o.forwardRef((function(e,t){let n,{onClick:r,relative:a,reloadDocument:i,replace:f,state:d,target:m,to:h,preventScrollReset:v,unstable_viewTransition:p}=e,w=c(e,y),{basename:g}=o.useContext(s.Us),b=!1;if("string"==typeof h&&O.test(h)&&(n=h,H))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=(0,u.Zn)(t.pathname,g);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:b=!0}catch(e){}let S=(0,s.oQ)(h,{relative:a}),R=X(h,{replace:f,state:d,target:m,preventScrollReset:v,relative:a,unstable_viewTransition:p});return o.createElement("a",l({},w,{href:n||S,onClick:b||i?r:function(e){r&&r(e),e.defaultPrevented||R(e)},ref:t,target:m}))})),W=o.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:i=!1,style:u,to:f,unstable_viewTransition:d,children:m}=e,h=c(e,g),v=(0,s.WU)(f,{relative:h.relative}),p=(0,s.TH)(),w=o.useContext(s.FR),{navigator:y}=o.useContext(s.Us),b=null!=w&&ie(v)&&!0===d,S=y.encodeLocation?y.encodeLocation(v).pathname:v.pathname,R=p.pathname,E=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(R=R.toLowerCase(),E=E?E.toLowerCase():null,S=S.toLowerCase());const T="/"!==S&&S.endsWith("/")?S.length-1:S.length;let _,L=R===S||!i&&R.startsWith(S)&&"/"===R.charAt(T),C=null!=E&&(E===S||!i&&E.startsWith(S)&&"/"===E.charAt(S.length)),x={isActive:L,isPending:C,isTransitioning:b},F=L?n:void 0;_="function"==typeof a?a(x):[a,L?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let U="function"==typeof u?u(x):u;return o.createElement(V,l({},h,{"aria-current":F,className:_,ref:t,style:U,to:f,unstable_viewTransition:d}),"function"==typeof m?m(x):m)})),M=o.forwardRef(((e,t)=>{let{fetcherKey:n,navigate:r,reloadDocument:a,replace:i,state:s,method:u=f,action:d,onSubmit:m,relative:h,preventScrollReset:v,unstable_viewTransition:p}=e,w=c(e,b),y=Q(),g=q(d,{relative:h}),S="get"===u.toLowerCase()?"get":"post";return o.createElement("form",l({ref:t,method:S,action:g,onSubmit:a?m:e=>{if(m&&m(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,a=(null==t?void 0:t.getAttribute("formmethod"))||u;y(t||e.currentTarget,{fetcherKey:n,method:a,navigate:r,replace:i,state:s,relative:h,preventScrollReset:v,unstable_viewTransition:p})}},w))}));function J(e){let{getKey:t,storageKey:n}=e;return re({getKey:t,storageKey:n}),null}var j,Z;function I(e){let t=o.useContext(s.w3);return t||(0,u.J0)(!1),t}function B(e){let t=o.useContext(s.FR);return t||(0,u.J0)(!1),t}function X(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:c}=void 0===t?{}:t,f=(0,s.s0)(),d=(0,s.TH)(),m=(0,s.WU)(e,{relative:l});return o.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,u.Ep)(d)===(0,u.Ep)(m);f(e,{replace:n,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:c})}}),[d,f,m,r,a,n,e,i,l,c])}function Y(e){let t=o.useRef(h(e)),n=o.useRef(!1),r=(0,s.TH)(),a=o.useMemo((()=>function(e,t){let n=h(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(r.search,n.current?null:t.current)),[r.search]),i=(0,s.s0)(),u=o.useCallback(((e,t)=>{const r=h("function"==typeof e?e(a):e);n.current=!0,i("?"+r,t)}),[i,a]);return[a,u]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(j||(j={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Z||(Z={}));let z=0,G=()=>"__"+String(++z)+"__";function Q(){let{router:e}=I(j.UseSubmit),{basename:t}=o.useContext(s.Us),n=(0,s.Yi)();return o.useCallback((function(r,a){void 0===a&&(a={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:o,method:i,encType:s,formData:l,body:c}=function(e,t){let n,r,a,o,i;if(m(s=e)&&"form"===s.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?(0,u.Zn)(i,t):null,n=e.getAttribute("method")||f,a=w(e.getAttribute("enctype"))||d,o=new FormData(e)}else if(function(e){return m(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return m(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||i.getAttribute("action");if(r=s?(0,u.Zn)(s,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||f,a=w(e.getAttribute("formenctype"))||w(i.getAttribute("enctype"))||d,o=new FormData(i,e),!function(){if(null===v)try{new FormData(document.createElement("form"),0),v=!1}catch(e){v=!0}return v}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?t+".":"";o.append(e+"x","0"),o.append(e+"y","0")}else t&&o.append(t,r)}}else{if(m(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=f,r=null,a=d,i=e}var s;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}(r,t);if(!1===a.navigate){let t=a.fetcherKey||G();e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||i,formEncType:a.encType||s,unstable_flushSync:a.unstable_flushSync})}else e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||i,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,unstable_flushSync:a.unstable_flushSync,unstable_viewTransition:a.unstable_viewTransition})}),[e,t,n])}function q(e,t){let{relative:n}=void 0===t?{}:t,{basename:r}=o.useContext(s.Us),a=o.useContext(s.pW);a||(0,u.J0)(!1);let[i]=a.matches.slice(-1),c=l({},(0,s.WU)(e||".",{relative:n})),f=(0,s.TH)();if(null==e){c.search=f.search;let e=new URLSearchParams(c.search);e.has("index")&&""===e.get("index")&&(e.delete("index"),c.search=e.toString()?"?"+e.toString():"")}return e&&"."!==e||!i.route.index||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(c.pathname="/"===c.pathname?r:(0,u.RQ)([r,c.pathname])),(0,u.Ep)(c)}function $(e){var t;let{key:n}=void 0===e?{}:e,{router:r}=I(j.UseFetcher),a=B(Z.UseFetcher),i=o.useContext(L),c=o.useContext(s.pW),f=null==(t=c.matches[c.matches.length-1])?void 0:t.route.id;i||(0,u.J0)(!1),c||(0,u.J0)(!1),null==f&&(0,u.J0)(!1);let d=F?F():"",[m,h]=o.useState(n||d);n&&n!==m?h(n):m||h(G()),o.useEffect((()=>(r.getFetcher(m),()=>{r.deleteFetcher(m)})),[r,m]);let v=o.useCallback(((e,t)=>{f||(0,u.J0)(!1),r.fetch(m,f,e,t)}),[m,f,r]),p=Q(),w=o.useCallback(((e,t)=>{p(e,l({},t,{navigate:!1,fetcherKey:m}))}),[m,p]),y=o.useMemo((()=>o.forwardRef(((e,t)=>o.createElement(M,l({},e,{navigate:!1,fetcherKey:m,ref:t}))))),[m]),g=a.fetchers.get(m)||u.ov,b=i.get(m);return o.useMemo((()=>l({Form:y,submit:w,load:v},g,{data:b})),[y,w,v,g,b])}function ee(){let e=B(Z.UseFetchers);return Array.from(e.fetchers.entries()).map((e=>{let[t,n]=e;return l({},n,{key:t})}))}const te="react-router-scroll-positions";let ne={};function re(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:r}=I(j.UseScrollRestoration),{restoreScrollPosition:a,preventScrollReset:i}=B(Z.UseScrollRestoration),{basename:c}=o.useContext(s.Us),f=(0,s.TH)(),d=(0,s.SN)(),m=(0,s.HJ)();o.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e,t){let{capture:n}={};o.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,n])}(o.useCallback((()=>{if("idle"===m.state){let e=(t?t(f,d):null)||f.key;ne[e]=window.scrollY}try{sessionStorage.setItem(n||te,JSON.stringify(ne))}catch(e){}window.history.scrollRestoration="auto"}),[n,t,m.state,f,d])),"undefined"!=typeof document&&(o.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||te);e&&(ne=JSON.parse(e))}catch(e){}}),[n]),o.useLayoutEffect((()=>{let e=t&&"/"!==c?(e,n)=>t(l({},e,{pathname:(0,u.Zn)(e.pathname,c)||e.pathname}),n):t,n=null==r?void 0:r.enableScrollRestoration(ne,(()=>window.scrollY),e);return()=>n&&n()}),[r,c,t]),o.useLayoutEffect((()=>{if(!1!==a)if("number"!=typeof a){if(f.hash){let e=document.getElementById(decodeURIComponent(f.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==i&&window.scrollTo(0,0)}else window.scrollTo(0,a)}),[f,a,i]))}function ae(e,t){let{capture:n}=t||{};o.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,n])}function oe(e){let{when:t,message:n}=e,r=(0,s._Z)(t);o.useEffect((()=>{"blocked"===r.state&&(window.confirm(n)?setTimeout(r.proceed,0):r.reset())}),[r,n]),o.useEffect((()=>{"blocked"!==r.state||t||r.reset()}),[r,t])}function ie(e,t){void 0===t&&(t={});let n=o.useContext(_);null==n&&(0,u.J0)(!1);let{basename:r}=I(j.useViewTransitionState),a=(0,s.WU)(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=(0,u.Zn)(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=(0,u.Zn)(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=(0,u.LX)(a.pathname,l)||null!=(0,u.LX)(a.pathname,i)}}}]);