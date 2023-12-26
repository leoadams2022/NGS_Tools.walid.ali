import{r as i,j as t,R as r,_ as o}from"./index-BDSdgyNY.js";import{u as n}from"./AuthContext-X9F3SwBx.js";import"./firebase-w5wVbqtu.js";const p=r.lazy(()=>o(()=>import("./PopUpMenu--oYd0XCV.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),_=r.lazy(()=>o(()=>import("./Avatar-NsXExLVS.js"),__vite__mapDeps([4,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-X5QyHews.js"),__vite__mapDeps([5,1,2,6,7]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-3zAa6vBy.js"),__vite__mapDeps([8,1,2,6,7]),import.meta.url));function d(){const{currentUser:e}=n(),[s,a]=i.useState(!1);return t.jsx(p,{isOpen:s,setIsOpen:a,popUpBtnContent:e?t.jsx(_,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu--oYd0XCV.js","./index-BDSdgyNY.js","./index-ck899qSR.css","./transition-c7Mz0RU1.js","./Avatar-NsXExLVS.js","./LoginForm-X5QyHews.js","./AuthContext-X9F3SwBx.js","./firebase-w5wVbqtu.js","./Profile-3zAa6vBy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}