import{r as a,j as t,m as r,_ as o}from"./index-e1bdRCO7.js";import{u as n}from"./AuthContext-b96g_5Dr.js";const _=r.lazy(()=>o(()=>import("./PopUpMenu-s-0PYN38.js"),__vite__mapDeps([0,1,2]),import.meta.url)),p=r.lazy(()=>o(()=>import("./Avatar-oKPOqYaQ.js"),__vite__mapDeps([3,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-a9mAfb4p.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-iDL0Tils.js"),__vite__mapDeps([6,1,2,5]),import.meta.url));function E(){const{currentUser:e}=n(),[s,i]=a.useState(!1);return t.jsx(_,{isOpen:s,setIsOpen:i,popUpBtnContent:e?t.jsx(p,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{E as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu-s-0PYN38.js","./index-e1bdRCO7.js","./index-_mBLfe8x.css","./Avatar-oKPOqYaQ.js","./LoginForm-a9mAfb4p.js","./AuthContext-b96g_5Dr.js","./Profile-iDL0Tils.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}