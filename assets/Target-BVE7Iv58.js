import{r as m,R as t,_ as a,j as r}from"./index-QaPOaGOf.js";const i=t.lazy(()=>a(()=>import("./FadeIn-wDWk9MU8.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),c=t.lazy(()=>a(()=>import("./ProgressBar-sdzELW7G.js"),__vite__mapDeps([4,1,2]),import.meta.url));function u({userProgress:o,targetCategories:s}){return r.jsx(i,{children:r.jsx("div",{className:"bg-black/40 p-4 rounded-md",children:s.map((e,l)=>r.jsx(c,{title:Object.keys(e)[0],cureentValue:o,color:e.color,maxValue:Object.values(e)[0]},l))})})}const n=m.memo(u);export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./FadeIn-wDWk9MU8.js","./index-QaPOaGOf.js","./index-h_8Ytibf.css","./transition-ppgtYZYb.js","./ProgressBar-sdzELW7G.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}