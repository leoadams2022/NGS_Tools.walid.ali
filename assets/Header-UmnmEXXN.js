import{r as s,j as e,m as a,_ as n}from"./index-nFKbZDnU.js";import{L as d}from"./App--7Wxxfm7.js";const c=a.lazy(()=>n(()=>import("./Login-GoZbQpsP.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),m=a.lazy(()=>n(()=>import("./Sidebar-j5yVUYlL.js"),__vite__mapDeps([4,1,2,5]),import.meta.url));function f(){const[o,r]=s.useState(!1),[t,i]=s.useState(1),l=s.useCallback(()=>{i(!t)},[t]);return document.body.classList.add("text-text-200","transition-color","duration-500","ease-in-out"),s.useEffect(()=>{t&&document.documentElement.classList.add("dark"),t||document.documentElement.classList.remove("dark")},[t]),e.jsxs("header",{children:[e.jsxs("nav",{className:"w-full h-full flex justify-between items-center px-4 py-2 shadow-md bg-primary-200/60 text-text-200",children:[e.jsx("div",{className:"w-28",children:e.jsx(d,{to:"/",children:e.jsx("p",{className:"text-5xl text-stroke-1 font-bold text-secondary-100",children:"NGS"})})}),e.jsxs("div",{className:"flex justify-evenly items-center gap-2",children:[e.jsx(c,{}),e.jsx("button",{className:"w-8 h-8 text-black dark:text-white",onClick:()=>{r(!o)},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"})})})]})]}),e.jsx(m,{isSidebarOpen:o,setIsSidebarOpen:r,toggleDarkMood:l})]})}export{f as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Login-GoZbQpsP.js","./index-nFKbZDnU.js","./index--4Cq-eKz.css","./AuthContext-Ps5EcO_o.js","./Sidebar-j5yVUYlL.js","./App--7Wxxfm7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}