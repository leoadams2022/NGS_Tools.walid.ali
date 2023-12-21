import{r as a,j as t,m as r,_ as o}from"./index-7gwWhuK-.js";import{u as n}from"./AuthContext-Hk0xczTt.js";const _=r.lazy(()=>o(()=>import("./PopUpMenu-14YFkPZv.js"),__vite__mapDeps([0,1,2]),import.meta.url)),p=r.lazy(()=>o(()=>import("./Avatar-Ylke8JYG.js"),__vite__mapDeps([3,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-ntD5k4oC.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-09MbZUFv.js"),__vite__mapDeps([6,1,2,5]),import.meta.url));function E(){const{currentUser:e}=n(),[s,i]=a.useState(!1);return t.jsx(_,{isOpen:s,setIsOpen:i,popUpBtnContent:e?t.jsx(p,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{E as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu-14YFkPZv.js","./index-7gwWhuK-.js","./index-98iZiC3X.css","./Avatar-Ylke8JYG.js","./LoginForm-ntD5k4oC.js","./AuthContext-Hk0xczTt.js","./Profile-09MbZUFv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}