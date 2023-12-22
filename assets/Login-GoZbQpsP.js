import{r as a,j as t,m as r,_ as o}from"./index-nFKbZDnU.js";import{u as n}from"./AuthContext-Ps5EcO_o.js";const _=r.lazy(()=>o(()=>import("./PopUpMenu-WamZpQI1.js"),__vite__mapDeps([0,1,2]),import.meta.url)),p=r.lazy(()=>o(()=>import("./Avatar-hV3RzR6V.js"),__vite__mapDeps([3,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-6afRZu1a.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-_9BcO6vW.js"),__vite__mapDeps([6,1,2,5]),import.meta.url));function E(){const{currentUser:e}=n(),[s,i]=a.useState(!1);return t.jsx(_,{isOpen:s,setIsOpen:i,popUpBtnContent:e?t.jsx(p,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{E as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu-WamZpQI1.js","./index-nFKbZDnU.js","./index--4Cq-eKz.css","./Avatar-hV3RzR6V.js","./LoginForm-6afRZu1a.js","./AuthContext-Ps5EcO_o.js","./Profile-_9BcO6vW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}