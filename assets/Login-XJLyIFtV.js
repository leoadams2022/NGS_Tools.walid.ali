import{r as i,j as t,R as r,_ as o}from"./index-MVXd8x__.js";import{u as n}from"./AuthContext-8QpLSnmn.js";import"./firebase-w5wVbqtu.js";const p=r.lazy(()=>o(()=>import("./PopUpMenu-oQCNSctj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),_=r.lazy(()=>o(()=>import("./Avatar-BaxPgQd9.js"),__vite__mapDeps([4,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-LUBMT4Ex.js"),__vite__mapDeps([5,1,2,6,7]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-RteJzrFP.js"),__vite__mapDeps([8,1,2,6,7]),import.meta.url));function d(){const{currentUser:e}=n(),[s,a]=i.useState(!1);return t.jsx(p,{isOpen:s,setIsOpen:a,popUpBtnContent:e?t.jsx(_,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu-oQCNSctj.js","./index-MVXd8x__.js","./index-ck899qSR.css","./transition-ZCtd1ZxQ.js","./Avatar-BaxPgQd9.js","./LoginForm-LUBMT4Ex.js","./AuthContext-8QpLSnmn.js","./firebase-w5wVbqtu.js","./Profile-RteJzrFP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}