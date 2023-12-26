import{r as i,j as t,R as r,_ as o}from"./index-QaPOaGOf.js";import{u as n}from"./AuthContext-Qq-a2tIF.js";import"./firebase-w5wVbqtu.js";const p=r.lazy(()=>o(()=>import("./PopUpMenu-4H4FUVpx.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),_=r.lazy(()=>o(()=>import("./Avatar-qj9yhV3i.js"),__vite__mapDeps([4,1,2]),import.meta.url)),m=r.lazy(()=>o(()=>import("./LoginForm-xCTGWmjk.js"),__vite__mapDeps([5,1,2,6,7]),import.meta.url)),u=r.lazy(()=>o(()=>import("./Profile-wrx4daIG.js"),__vite__mapDeps([8,1,2,6,7]),import.meta.url));function d(){const{currentUser:e}=n(),[s,a]=i.useState(!1);return t.jsx(p,{isOpen:s,setIsOpen:a,popUpBtnContent:e?t.jsx(_,{name:e.displayName}):t.jsx("span",{children:"Log in"}),children:e?t.jsx(u,{}):t.jsx(m,{})})}export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PopUpMenu-4H4FUVpx.js","./index-QaPOaGOf.js","./index-h_8Ytibf.css","./transition-ppgtYZYb.js","./Avatar-qj9yhV3i.js","./LoginForm-xCTGWmjk.js","./AuthContext-Qq-a2tIF.js","./firebase-w5wVbqtu.js","./Profile-wrx4daIG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}