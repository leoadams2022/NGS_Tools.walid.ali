import{r as s,e as ye,R as I,_ as N,j as P}from"./index-QaPOaGOf.js";/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));const Z="popstate";function Ce(e){e===void 0&&(e={});function t(a,l){let{pathname:i="/",search:u="",hash:o=""}=O(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),q("",{pathname:i,search:u,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let i=a.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let o=a.location.href,c=o.indexOf("#");u=c===-1?o:o.slice(0,c)}return u+"#"+(typeof l=="string"?l:$(l))}function r(a,l){A(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Pe(t,n,r,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function A(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ee(){return Math.random().toString(36).substr(2,8)}function ee(e,t){return{usr:e.state,key:e.key,idx:t}}function q(e,t,n,r){return n===void 0&&(n=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||r||Ee()})}function $(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pe(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,u=w.Pop,o=null,c=h();c==null&&(c=0,i.replaceState(U({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function f(){u=w.Pop;let d=h(),m=d==null?null:d-c;c=d,o&&o({action:u,location:v.location,delta:m})}function p(d,m){u=w.Push;let C=q(v.location,d,m);n&&n(C,d),c=h()+1;let x=ee(C,c),R=v.createHref(C);try{i.pushState(x,"",R)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(R)}l&&o&&o({action:u,location:v.location,delta:1})}function E(d,m){u=w.Replace;let C=q(v.location,d,m);n&&n(C,d),c=h();let x=ee(C,c),R=v.createHref(C);i.replaceState(x,"",R),l&&o&&o({action:u,location:v.location,delta:0})}function g(d){let m=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof d=="string"?d:$(d);return y(m,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,m)}let v={get action(){return u},get location(){return e(a,i)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(Z,f),o=d,()=>{a.removeEventListener(Z,f),o=null}},createHref(d){return t(a,d)},createURL:g,encodeLocation(d){let m=g(d);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:E,go(d){return i.go(d)}};return v}var te;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(te||(te={}));function Re(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?O(t):t,a=T(r.pathname||"/",n);if(a==null)return null;let l=ie(e);be(l);let i=null;for(let u=0;i==null&&u<l.length;++u)i=Ie(l[u],ke(a));return i}function ie(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,i,u)=>{let o={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(y(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=S([r,o.relativePath]),h=n.concat(o);l.children&&l.children.length>0&&(y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ie(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Te(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))a(l,i);else for(let o of oe(l.path))a(l,i,o)}),t}function oe(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=oe(r.join("/")),u=[];return u.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function be(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:je(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const we=/^:\w+$/,Se=3,Le=2,_e=1,Oe=10,Ue=-2,ne=e=>e==="*";function Te(e,t){let n=e.split("/"),r=n.length;return n.some(ne)&&(r+=Ue),t&&(r+=Le),n.filter(a=>!ne(a)).reduce((a,l)=>a+(we.test(l)?Se:l===""?_e:Oe),r)}function je(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Ie(e,t){let{routesMeta:n}=e,r={},a="/",l=[];for(let i=0;i<n.length;++i){let u=n[i],o=i===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",h=G({path:u.relativePath,caseSensitive:u.caseSensitive,end:o},c);if(!h)return null;Object.assign(r,h.params);let f=u.route;l.push({params:r,pathname:S([a,h.pathname]),pathnameBase:Fe(S([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=S([a,h.pathnameBase]))}return l}function G(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ne(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:E}=h;if(p==="*"){let v=u[f]||"";i=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const g=u[f];return E&&!g?c[p]=void 0:c[p]=Be(g||"",p),c},{}),pathname:l,pathnameBase:i,pattern:e}}function Ne(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),A(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(i,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ke(e){try{return decodeURI(e)}catch(t){return A(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Be(e,t){try{return decodeURIComponent(e)}catch(n){return A(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function T(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function We(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:$e(n,t):t,search:Ae(r),hash:De(a)}}function $e(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function K(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Me(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function se(e,t){let n=Me(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ue(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=O(e):(a=U({},e),y(!a.pathname||!a.pathname.includes("?"),K("?","pathname","search",a)),y(!a.pathname||!a.pathname.includes("#"),K("#","pathname","hash",a)),y(!a.search||!a.search.includes("#"),K("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,u;if(i==null)u=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}u=f>=0?t[f]:"/"}let o=We(a,u),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const S=e=>e.join("/").replace(/\/\/+/g,"/"),Fe=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ae=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,De=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ve(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ce=["post","put","patch","delete"];new Set(ce);const ze=["get",...ce];new Set(ze);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}const D=s.createContext(null),he=s.createContext(null),L=s.createContext(null),V=s.createContext(null),_=s.createContext({outlet:null,matches:[],isDataRoute:!1}),fe=s.createContext(null);function Je(e,t){let{relative:n}=t===void 0?{}:t;k()||y(!1);let{basename:r,navigator:a}=s.useContext(L),{hash:l,pathname:i,search:u}=z(e,{relative:n}),o=i;return r!=="/"&&(o=i==="/"?r:S([r,i])),a.createHref({pathname:o,search:u,hash:l})}function k(){return s.useContext(V)!=null}function B(){return k()||y(!1),s.useContext(V).location}function de(e){s.useContext(L).static||s.useLayoutEffect(e)}function He(){let{isDataRoute:e}=s.useContext(_);return e?ot():Ke()}function Ke(){k()||y(!1);let e=s.useContext(D),{basename:t,future:n,navigator:r}=s.useContext(L),{matches:a}=s.useContext(_),{pathname:l}=B(),i=JSON.stringify(se(a,n.v7_relativeSplatPath)),u=s.useRef(!1);return de(()=>{u.current=!0}),s.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let f=ue(c,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:S([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,i,l,e])}const qe=s.createContext(null);function Ge(e){let t=s.useContext(_).outlet;return t&&s.createElement(qe.Provider,{value:e},t)}function z(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(L),{matches:a}=s.useContext(_),{pathname:l}=B(),i=JSON.stringify(se(a,r.v7_relativeSplatPath));return s.useMemo(()=>ue(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Xe(e,t){return Qe(e,t)}function Qe(e,t,n,r){k()||y(!1);let{navigator:a}=s.useContext(L),{matches:l}=s.useContext(_),i=l[l.length-1],u=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=B(),h;if(t){var f;let d=typeof t=="string"?O(t):t;o==="/"||(f=d.pathname)!=null&&f.startsWith(o)||y(!1),h=d}else h=c;let p=h.pathname||"/",E=o==="/"?p:p.slice(o.length)||"/",g=Re(e,{pathname:E}),v=nt(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},u,d.params),pathname:S([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:S([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,n,r);return t&&v?s.createElement(V.Provider,{value:{location:j({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:w.Pop}},v):v}function Ye(){let e=it(),t=Ve(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),n?s.createElement("pre",{style:a},n):null,l)}const Ze=s.createElement(Ye,null);class et extends s.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?s.createElement(_.Provider,{value:this.props.routeContext},s.createElement(fe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tt(e){let{routeContext:t,match:n,children:r}=e,a=s.useContext(D);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),s.createElement(_.Provider,{value:t},r)}function nt(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,u=(a=n)==null?void 0:a.errors;if(u!=null){let h=i.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id]));h>=0||y(!1),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:E}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||g){o=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,f,p)=>{let E,g=!1,v=null,d=null;n&&(E=u&&f.route.id?u[f.route.id]:void 0,v=f.route.errorElement||Ze,o&&(c<0&&p===0?(st("route-fallback",!1),g=!0,d=null):c===p&&(g=!0,d=f.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,p+1)),C=()=>{let x;return E?x=v:g?x=d:f.route.Component?x=s.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=h,s.createElement(tt,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?s.createElement(et,{location:n.location,revalidation:n.revalidation,component:v,error:E,children:C(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):C()},null)}var pe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pe||{}),M=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(M||{});function rt(e){let t=s.useContext(D);return t||y(!1),t}function at(e){let t=s.useContext(he);return t||y(!1),t}function lt(e){let t=s.useContext(_);return t||y(!1),t}function me(e){let t=lt(),n=t.matches[t.matches.length-1];return n.route.id||y(!1),n.route.id}function it(){var e;let t=s.useContext(fe),n=at(M.UseRouteError),r=me(M.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ot(){let{router:e}=rt(pe.UseNavigateStable),t=me(M.UseNavigateStable),n=s.useRef(!1);return de(()=>{n.current=!0}),s.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,j({fromRouteId:t},l)))},[e,t])}const re={};function st(e,t,n){!t&&!re[e]&&(re[e]=!0)}function jt(e){return Ge(e.context)}function W(e){y(!1)}function ut(e){let{basename:t="/",children:n=null,location:r,navigationType:a=w.Pop,navigator:l,static:i=!1,future:u}=e;k()&&y(!1);let o=t.replace(/^\/*/,"/"),c=s.useMemo(()=>({basename:o,navigator:l,static:i,future:j({v7_relativeSplatPath:!1},u)}),[o,u,l,i]);typeof r=="string"&&(r=O(r));let{pathname:h="/",search:f="",hash:p="",state:E=null,key:g="default"}=r,v=s.useMemo(()=>{let d=T(h,o);return d==null?null:{location:{pathname:d,search:f,hash:p,state:E,key:g},navigationType:a}},[o,h,f,p,E,g,a]);return v==null?null:s.createElement(L.Provider,{value:c},s.createElement(V.Provider,{children:n,value:v}))}function ct(e){let{children:t,location:n}=e;return Xe(X(t),n)}new Promise(()=>{});function X(e,t){t===void 0&&(t=[]);let n=[];return s.Children.forEach(e,(r,a)=>{if(!s.isValidElement(r))return;let l=[...t,a];if(r.type===s.Fragment){n.push.apply(n,X(r.props.children,l));return}r.type!==W&&y(!1),!r.props.index||!r.props.children||y(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=X(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ft(e,t){return e.button===0&&(!t||t==="_self")&&!ht(e)}const dt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pt=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],mt=s.createContext({isTransitioning:!1}),vt="startTransition",ae=ye[vt];function gt(e){let{basename:t,children:n,future:r,window:a}=e,l=s.useRef();l.current==null&&(l.current=Ce({window:a,v5Compat:!0}));let i=l.current,[u,o]=s.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},h=s.useCallback(f=>{c&&ae?ae(()=>o(f)):o(f)},[o,c]);return s.useLayoutEffect(()=>i.listen(h),[i,h]),s.createElement(ut,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,future:r})}const xt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ct=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:u,target:o,to:c,preventScrollReset:h,unstable_viewTransition:f}=t,p=ve(t,dt),{basename:E}=s.useContext(L),g,v=!1;if(typeof c=="string"&&yt.test(c)&&(g=c,xt))try{let x=new URL(window.location.href),R=c.startsWith("//")?new URL(x.protocol+c):new URL(c),b=T(R.pathname,E);R.origin===x.origin&&b!=null?c=b+R.search+R.hash:v=!0}catch{}let d=Je(c,{relative:a}),m=Pt(c,{replace:i,state:u,target:o,preventScrollReset:h,relative:a,unstable_viewTransition:f});function C(x){r&&r(x),x.defaultPrevented||m(x)}return s.createElement("a",F({},p,{href:g||d,onClick:v||l?r:C,ref:n,target:o}))}),It=s.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:i=!1,style:u,to:o,unstable_viewTransition:c,children:h}=t,f=ve(t,pt),p=z(o,{relative:f.relative}),E=B(),g=s.useContext(he),{navigator:v}=s.useContext(L),d=g!=null&&Rt(p)&&c===!0,m=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,C=E.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(C=C.toLowerCase(),x=x?x.toLowerCase():null,m=m.toLowerCase());const R=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let b=C===m||!i&&C.startsWith(m)&&C.charAt(R)==="/",Y=x!=null&&(x===m||!i&&x.startsWith(m)&&x.charAt(m.length)==="/"),J={isActive:b,isPending:Y,isTransitioning:d},ge=b?r:void 0,H;typeof l=="function"?H=l(J):H=[l,b?"active":null,Y?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let xe=typeof u=="function"?u(J):u;return s.createElement(Ct,F({},f,{"aria-current":ge,className:H,ref:n,style:xe,to:o,unstable_viewTransition:c}),typeof h=="function"?h(J):h)});var Q;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Q||(Q={}));var le;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(le||(le={}));function Et(e){let t=s.useContext(D);return t||y(!1),t}function Pt(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:u}=t===void 0?{}:t,o=He(),c=B(),h=z(e,{relative:i});return s.useCallback(f=>{if(ft(f,n)){f.preventDefault();let p=r!==void 0?r:$(c)===$(h);o(e,{replace:p,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:u})}},[c,o,h,r,a,n,e,l,i,u])}function Rt(e,t){t===void 0&&(t={});let n=s.useContext(mt);n==null&&y(!1);let{basename:r}=Et(Q.useViewTransitionState),a=z(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=T(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=T(n.nextLocation.pathname,r)||n.nextLocation.pathname;return G(a.pathname,i)!=null||G(a.pathname,l)!=null}const bt=I.lazy(()=>N(()=>import("./Home-dWYKWt-V.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),wt=I.lazy(()=>N(()=>import("./MedConditions-uXUwRSUp.js"),__vite__mapDeps([5,1,2,6]),import.meta.url)),St=I.lazy(()=>N(()=>import("./DupChecker-EW5dxdnI.js"),__vite__mapDeps([7,1,2,6]),import.meta.url)),Lt=I.lazy(()=>N(()=>import("./TestingPage-iiELrVtA.js"),__vite__mapDeps([8,1,2,4]),import.meta.url)),_t=[{title:"Home",path:"/",element:P.jsx(bt,{})},{title:"Testing Page",path:"/testingpage",element:P.jsx(Lt,{})},{title:"Tort Tools",gropedRoutes:[{title:"Duplicates Checker",path:"/dupchecker",element:P.jsx(St,{})},{title:"Medical Conditions",path:"/medconditions",element:P.jsx(wt,{})}]}],Ot=I.lazy(()=>N(()=>import("./Layout-yiF4U5Tt.js"),__vite__mapDeps([9,1,2]),import.meta.url));function Ut(){return P.jsx(P.Fragment,{children:P.jsx(gt,{children:P.jsx(ct,{children:P.jsx(W,{element:P.jsx(Ot,{}),children:_t.map((e,t)=>e.gropedRoutes?e.gropedRoutes.map((n,r)=>P.jsx(W,{path:n.path,element:P.jsx(s.Suspense,{fallback:P.jsx("div",{children:"Loading..."}),children:n.element})},r)):P.jsx(W,{path:e.path,element:P.jsx(s.Suspense,{fallback:P.jsx("div",{children:"Loading..."}),children:e.element})},t))})})})})}const Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"}));export{Nt as A,Ct as L,It as N,jt as O,_t as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Home-dWYKWt-V.js","./index-QaPOaGOf.js","./index-h_8Ytibf.css","./AuthContext-Qq-a2tIF.js","./firebase-w5wVbqtu.js","./MedConditions-uXUwRSUp.js","./localstorage-X86ulgJi.js","./DupChecker-EW5dxdnI.js","./TestingPage-iiELrVtA.js","./Layout-yiF4U5Tt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}