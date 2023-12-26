import{r as o,R as a,_ as n,j as s}from"./index-BDSdgyNY.js";const l=a.lazy(()=>n(()=>import("./ConditionLi--IfoOXPS.js"),__vite__mapDeps([0,1,2]),import.meta.url));function m({data:e,skeleton:r=!1}){return e?s.jsx("ul",{className:"flex flex-wrap gap-2 justify-center items-center",children:e.map((t,i)=>s.jsx(l,{condition:t,i,skeleton:r,children:t},`${t}`))}):(console.error("ConditionsList data is empty"),null)}const u=o.memo(m);export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ConditionLi--IfoOXPS.js","./index-BDSdgyNY.js","./index-ck899qSR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}