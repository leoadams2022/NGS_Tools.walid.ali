import{r as m,R as t,_ as a,j as r}from"./index-MVXd8x__.js";const i=t.lazy(()=>a(()=>import("./FadeIn-bZ6byliF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),c=t.lazy(()=>a(()=>import("./ProgressBar-EziV5PHn.js"),__vite__mapDeps([4,1,2]),import.meta.url));function u({userProgress:o,targetCategories:s}){return r.jsx(i,{children:r.jsx("div",{className:"bg-black/40 p-4 rounded-md",children:s.map((e,l)=>r.jsx(c,{title:Object.keys(e)[0],cureentValue:o,color:e.color,maxValue:Object.values(e)[0]},l))})})}const n=m.memo(u);export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./FadeIn-bZ6byliF.js","./index-MVXd8x__.js","./index-ck899qSR.css","./transition-ZCtd1ZxQ.js","./ProgressBar-EziV5PHn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}