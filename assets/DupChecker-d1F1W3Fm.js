import{r,j as e}from"./index-7gwWhuK-.js";import{g,d as _,b as v,s as j}from"./localstorage-X86ulgJi.js";function z(){const[x,i]=r.useState(null),[m,p]=r.useState(null),[l,c]=r.useState(null),[N,f]=r.useState(""),[n,o]=r.useState(null),[d,b]=r.useState(!1),u=async()=>{try{b(!0),o(null);const t=await g("dups_date_string"),s=await g("dups_array");let a=await fetch(_);if(a=await a.json(),t.dups_date_string!=a.dups_date_string||!s.dups_array){const h=await(await fetch(v)).json();await j("dups_array",h),await j("dups_date_string",a),p(a.dups_date_string),i(h.dups_array);return}p(a.dups_date_string),i(s.dups_array)}catch(t){i(null),console.error("DupChecker=>fetchData error:",t),o(t)}finally{b(!1)}},w=t=>{const s=String(t);return/^[0-9]{10}$/.test(s)},k=t=>{x.includes(t)?c(!0):c(!1)},y=t=>{const s=t.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1");if(!w(s)){o(String(s)!=""?"invalid":null),f(String(s)!=""?s:""),c(null);return}o(null),f(s),k(s)};return r.useEffect(()=>{u()},[]),x&&!d?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-cmap-lejune bg-center bg-cover bg-no-repeat transition-colors duration-500 ease-in-out -z-20"}),e.jsx("div",{className:"fixed top-0 left-0  -z-20 w-full h-full bg-background-100/10 dark:bg-background-100/20 transition-colors duration-500 ease-in-out"}),e.jsx("div",{className:`fixed top-0 left-0 w-full h-full -z-10 ${l!==null?l?"bg-red-500/10  animate-pulse":"bg-green-500/10  animate-pulse":""}`}),e.jsxs("div",{className:" w-full h-full box-border relative flex flex-col sm:flex-row justify-between items-start text-text-100",children:[e.jsxs("div",{className:"flex-1 w-full sm:h-full box-border pt-10 sm:pt-[10%] pl-6",children:[e.jsxs("p",{className:"text-2xl sm:text-3xl md:text-4xl font-[800] text-white dark:text-slate-300 text-stroke-1",children:["Check if the Phone",e.jsx("br",{})," Number is good or not",e.jsx("br",{})," For Tort"]}),e.jsx("input",{type:"text",maxLength:10,minLength:10,inputMode:"numeric",className:" w-[95%] mt-3 px-2 py-1 shadow-sm outline-0 box-border rounded-sm invalid:border-red-500 dark:invalid:border-red-500  border-2 text-sm sm:text-lg border-slate-800 dark:border-slate-500 bg-primary-300/65 focus:bg-accent-300/95 dark:bg-slate-800/65 focus:dark:bg-accent-100/95 text-black placeholder:text-gray-800 dark:placeholder:text-gray-300 dark:text-white transition-colors duration-300 ease-in-out",placeholder:"Enter a phone number to check",value:N,onChange:t=>{y(t.target.value)}})]}),e.jsx("div",{className:"flex-1 w-full sm:h-full box-border flex justify-center items-start sm:items-center",children:e.jsx("p",{className:"text-[80px] font-black text-stroke-1 uppercase text-center",children:l!==null?l?e.jsx("span",{className:"text-red-500",children:"Bad"}):e.jsx("span",{className:"text-green-500",children:"Good"}):""})}),e.jsxs("p",{className:"absolute bottom-0 left-0 bg-background-100/60 px-1 text-black dark:text-white flex items-center gap-1 rounded-sm",children:[m&&"Last update: "+m," ",e.jsx("button",{onClick:u,disabled:d,children:"update"})]})]})]}):n?e.jsxs("div",{className:"w-full h-full flex flex-col justify-center items-center text-3xl font-bold capitalize text-red-500",children:[e.jsxs("span",{children:["fetch data error:",e.jsx("br",{}),String(n==null?void 0:n.message)]}),e.jsx("button",{onClick:u,className:"btn-secondary text-lg",disabled:d,children:"retry"})]}):e.jsxs("div",{className:"w-full h-full  bg-background-100 relative flex flex-col sm:flex-row justify-between items-start",children:[e.jsxs("div",{className:"flex-1 w-full sm:h-full box-border pt-10 sm:pt-[10%] pl-6",children:[e.jsxs("p",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-transparent ",children:[e.jsx("span",{className:"bg-gray-500 animate-pulse",children:"Check if the Phone"}),e.jsx("br",{})," ",e.jsx("span",{className:"mt-2 inline-block bg-gray-500 animate-pulse",children:"Number is good or not"}),e.jsx("br",{})," ",e.jsx("span",{className:"mt-1 inline-block bg-gray-500 animate-pulse",children:"For Tort"})]}),e.jsx("div",{className:"w-[95%] h-8 mt-3 bg-gray-500 animate-pulse"})]}),e.jsx("div",{className:"flex-1 w-full sm:h-full box-border flex justify-center items-start sm:items-center"}),e.jsx("p",{className:"absolute bottom-0 left-0 h-[24px] w-[205px] bg-gray-500 animate-pulse"})]})}export{z as default};
