/*! For license information please see vendor-3609f88d.c52e0073553bc1957eab.js.LICENSE.txt */
"use strict";(self.webpackChunkGames=self.webpackChunkGames||[]).push([[953],{250:(e,t,r)=>{var n;r.d(t,{AW:()=>te,DY:()=>D,F0:()=>re,FR:()=>u,Fg:()=>$,GV:()=>v,HJ:()=>A,KP:()=>ae,Oe:()=>ce,SN:()=>T,TH:()=>f,UO:()=>P,Us:()=>c,V$:()=>U,V4:()=>W,VA:()=>X,WU:()=>R,Yi:()=>I,Z5:()=>ne,_Z:()=>Y,bS:()=>E,bi:()=>pe,bx:()=>b,f_:()=>H,gd:()=>d,i7:()=>se,iG:()=>z,is:()=>se,j3:()=>ee,lk:()=>V,nA:()=>Q,oQ:()=>m,pC:()=>k,pW:()=>p,qv:()=>Z,s0:()=>C,ur:()=>g,us:()=>de,w3:()=>i,xW:()=>M});var a=r(294),o=r(599);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const i=a.createContext(null),u=a.createContext(null),s=a.createContext(null),c=a.createContext(null),d=a.createContext(null),p=a.createContext({outlet:null,matches:[],isDataRoute:!1}),h=a.createContext(null);function m(e,t){let{relative:r}=void 0===t?{}:t;v()||(0,o.J0)(!1);let{basename:n,navigator:l}=a.useContext(c),{hash:i,pathname:u,search:s}=R(e,{relative:r}),d=u;return"/"!==n&&(d="/"===u?n:(0,o.RQ)([n,u])),l.createHref({pathname:d,search:s,hash:i})}function v(){return null!=a.useContext(d)}function f(){return v()||(0,o.J0)(!1),a.useContext(d).location}function g(){return a.useContext(d).navigationType}function E(e){v()||(0,o.J0)(!1);let{pathname:t}=f();return a.useMemo((()=>(0,o.LX)(e,t)),[t,e])}function y(e){a.useContext(c).static||a.useLayoutEffect(e)}function C(){let{isDataRoute:e}=a.useContext(p);return e?function(){let{router:e}=N(L.UseNavigateStable),t=w(j.UseNavigateStable),r=a.useRef(!1);return y((()=>{r.current=!0})),a.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,l({fromRouteId:t},a)))}),[e,t])}():function(){v()||(0,o.J0)(!1);let e=a.useContext(i),{basename:t,future:r,navigator:n}=a.useContext(c),{matches:l}=a.useContext(p),{pathname:u}=f(),s=JSON.stringify((0,o.cm)(l,r.v7_relativeSplatPath)),d=a.useRef(!1);return y((()=>{d.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!d.current)return;if("number"==typeof r)return void n.go(r);let l=(0,o.pC)(r,JSON.parse(s),u,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,o.RQ)([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,s,u,e])}()}const x=a.createContext(null);function b(){return a.useContext(x)}function k(e){let t=a.useContext(p).outlet;return t?a.createElement(x.Provider,{value:e},t):t}function P(){let{matches:e}=a.useContext(p),t=e[e.length-1];return t?t.params:{}}function R(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=a.useContext(c),{matches:l}=a.useContext(p),{pathname:i}=f(),u=JSON.stringify((0,o.cm)(l,n.v7_relativeSplatPath));return a.useMemo((()=>(0,o.pC)(e,JSON.parse(u),i,"path"===r)),[e,u,i,r])}function U(e,t){return D(e,t)}function D(e,t,r,n){v()||(0,o.J0)(!1);let{navigator:i}=a.useContext(c),{matches:u}=a.useContext(p),s=u[u.length-1],h=s?s.params:{},m=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let g,E=f();if(t){var y;let e="string"==typeof t?(0,o.cP)(t):t;"/"===m||(null==(y=e.pathname)?void 0:y.startsWith(m))||(0,o.J0)(!1),g=e}else g=E;let C=g.pathname||"/",x="/"===m?C:C.slice(m.length)||"/",b=(0,o.fp)(e,{pathname:x}),k=_(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,o.RQ)([m,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,o.RQ)([m,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,n);return t&&k?a.createElement(d.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:o.aU.Pop}},k):k}function S(){let e=V(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:n},r):null,null)}const B=a.createElement(S,null);class O extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?a.createElement(p.Provider,{value:this.props.routeContext},a.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(p.Provider,{value:t},n)}function _(e,t,r,n){var l;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var i;if(null==(i=r)||!i.errors)return null;e=r.matches}let u=e,s=null==(l=r)?void 0:l.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,o.J0)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){c=!0,u=d>=0?u.slice(0,d+1):[u[0]];break}}}return u.reduceRight(((e,n,o)=>{let l,i=!1,p=null,h=null;var m;r&&(l=s&&n.route.id?s[n.route.id]:void 0,p=n.route.errorElement||B,c&&(d<0&&0===o?(q[m="route-fallback"]||(q[m]=!0),i=!0,h=null):d===o&&(i=!0,h=n.route.hydrateFallbackElement||null)));let v=t.concat(u.slice(0,o+1)),f=()=>{let t;return t=l?p:i?h:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(J,{match:n,routeContext:{outlet:e,matches:v,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(O,{location:r.location,revalidation:r.revalidation,component:p,error:l,children:f(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):f()}),null)}var L=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(L||{}),j=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(j||{});function N(e){let t=a.useContext(i);return t||(0,o.J0)(!1),t}function F(e){let t=a.useContext(u);return t||(0,o.J0)(!1),t}function w(e){let t=function(e){let t=a.useContext(p);return t||(0,o.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.J0)(!1),r.route.id}function I(){return w(j.UseRouteId)}function A(){return F(j.UseNavigation).navigation}function M(){let e=N(L.UseRevalidator),t=F(j.UseRevalidator);return a.useMemo((()=>({revalidate:e.router.revalidate,state:t.revalidation})),[e.router.revalidate,t.revalidation])}function T(){let{matches:e,loaderData:t}=F(j.UseMatches);return a.useMemo((()=>e.map((e=>(0,o.WS)(e,t)))),[e,t])}function H(){let e=F(j.UseLoaderData),t=w(j.UseLoaderData);if(!e.errors||null==e.errors[t])return e.loaderData[t];console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")")}function W(e){return F(j.UseRouteLoaderData).loaderData[e]}function Q(){let e=F(j.UseActionData),t=w(j.UseLoaderData);return e.actionData?e.actionData[t]:void 0}function V(){var e;let t=a.useContext(h),r=F(j.UseRouteError),n=w(j.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[n]}function Z(){let e=a.useContext(s);return null==e?void 0:e._data}function z(){let e=a.useContext(s);return null==e?void 0:e._error}let G=0;function Y(e){let{router:t,basename:r}=N(L.UseBlocker),n=F(j.UseBlocker),[i,u]=a.useState(""),s=a.useCallback((t=>{if("function"!=typeof e)return!!e;if("/"===r)return e(t);let{currentLocation:n,nextLocation:a,historyAction:i}=t;return e({currentLocation:l({},n,{pathname:(0,o.Zn)(n.pathname,r)||n.pathname}),nextLocation:l({},a,{pathname:(0,o.Zn)(a.pathname,r)||a.pathname}),historyAction:i})}),[r,e]);return a.useEffect((()=>{let e=String(++G);return u(e),()=>t.deleteBlocker(e)}),[t]),a.useEffect((()=>{""!==i&&t.getBlocker(i,s)}),[t,i,s]),i&&n.blockers.has(i)?n.blockers.get(i):o.qp}const q={},K=(n||(n=r.t(a,2))).startTransition;function X(e){let{basename:t,children:r,initialEntries:n,initialIndex:l,future:i}=e,u=a.useRef();null==u.current&&(u.current=(0,o.PP)({initialEntries:n,initialIndex:l,v5Compat:!0}));let s=u.current,[c,d]=a.useState({action:s.action,location:s.location}),{v7_startTransition:p}=i||{},h=a.useCallback((e=>{p&&K?K((()=>d(e))):d(e)}),[d,p]);return a.useLayoutEffect((()=>s.listen(h)),[s,h]),a.createElement(re,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}function $(e){let{to:t,replace:r,state:n,relative:l}=e;v()||(0,o.J0)(!1);let{future:i,static:u}=a.useContext(c),{matches:s}=a.useContext(p),{pathname:d}=f(),h=C(),m=(0,o.pC)(t,(0,o.cm)(s,i.v7_relativeSplatPath),d,"path"===l),g=JSON.stringify(m);return a.useEffect((()=>h(JSON.parse(g),{replace:r,state:n,relative:l})),[h,g,l,r,n]),null}function ee(e){return k(e.context)}function te(e){(0,o.J0)(!1)}function re(e){let{basename:t="/",children:r=null,location:n,navigationType:i=o.aU.Pop,navigator:u,static:s=!1,future:p}=e;v()&&(0,o.J0)(!1);let h=t.replace(/^\/*/,"/"),m=a.useMemo((()=>({basename:h,navigator:u,static:s,future:l({v7_relativeSplatPath:!1},p)})),[h,p,u,s]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:f="/",search:g="",hash:E="",state:y=null,key:C="default"}=n,x=a.useMemo((()=>{let e=(0,o.Zn)(f,h);return null==e?null:{location:{pathname:e,search:g,hash:E,state:y,key:C},navigationType:i}}),[h,f,g,E,y,C,i]);return null==x?null:a.createElement(c.Provider,{value:m},a.createElement(d.Provider,{children:r,value:x}))}function ne(e){let{children:t,location:r}=e;return U(se(t),r)}function ae(e){let{children:t,errorElement:r,resolve:n}=e;return a.createElement(ie,{resolve:n,errorElement:r},a.createElement(ue,null,t))}var oe=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(oe||{});const le=new Promise((()=>{}));class ie extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,l=oe.pending;if(r instanceof Promise)if(this.state.error){l=oe.error;let e=this.state.error;n=Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(n=r,l=void 0!==n._error?oe.error:void 0!==n._data?oe.success:oe.pending):(l=oe.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),n=r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else l=oe.success,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(l===oe.error&&n._error instanceof o.X3)throw le;if(l===oe.error&&!t)throw n._error;if(l===oe.error)return a.createElement(s.Provider,{value:n,children:t});if(l===oe.success)return a.createElement(s.Provider,{value:n,children:e});throw n}}function ue(e){let{children:t}=e,r=Z(),n="function"==typeof t?t(r):t;return a.createElement(a.Fragment,null,n)}function se(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let l=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,se(e.props.children,l));e.type!==te&&(0,o.J0)(!1),e.props.index&&e.props.children&&(0,o.J0)(!1);let i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=se(e.props.children,l)),r.push(i)})),r}function ce(e){return _(e)}function de(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:a.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:a.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:a.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function pe(e,t){return(0,o.p7)({basename:null==t?void 0:t.basename,future:l({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,o.PP)({initialEntries:null==t?void 0:t.initialEntries,initialIndex:null==t?void 0:t.initialIndex}),hydrationData:null==t?void 0:t.hydrationData,routes:e,mapRouteProperties:de}).initialize()}}}]);