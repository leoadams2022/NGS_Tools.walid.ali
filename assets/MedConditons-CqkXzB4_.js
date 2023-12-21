import{j as e,r as s}from"./index-7gwWhuK-.js";import{g as N,m as $,a as A,s as L}from"./localstorage-X86ulgJi.js";function M({data:o,copyToClipboard:i,skeleton:h=!1}){return e.jsx("ul",{className:"flex flex-wrap gap-2 justify-center items-center",children:o.map((l,n)=>e.jsx(E,{condition:l,i:n,copyToClipboard:i,skeleton:h,children:l},`${l}`))})}function E({children:o,condition:i,i:h,copyToClipboard:l,skeleton:n}){const[x,d]=s.useState(!1),[p,u]=s.useState(!1);let r=new SpeechSynthesisUtterance;function b(m){n||(r.speaking&&window.speechSynthesis.cancel(),r.text=m,r.voiceURI="Google US English",r.lang="en-US",u(!0),window.speechSynthesis.speak(r))}r.addEventListener("end",function(){u(!1)});function g(){n||(window.speechSynthesis.cancel(),u(!1))}function w(){n||(l(i),d(!0),setTimeout(()=>{d(!1)},1500))}return s.useEffect(()=>()=>{r.removeEventListener("end",()=>u(!1))},[]),e.jsxs("li",{className:`relative border rounded-sm border-text-100 p-2 font-bold text-sm ${n?"bg-gray-400 text-transparent  animate-pulse":`text-black ${h%2===0?"bg-accent-300/80 dark:bg-accent-100":"bg-secondary-100/30 dark:bg-secondary-200"}`}  flex items-center justify-between gap-2  shadow-sm `,children:[h+1,"-",o,e.jsxs("div",{className:"flex justify-evenly gap-4",children:[e.jsxs("span",{className:"relative cursor-pointer w-6 h-6",children:[e.jsx("span",{className:`${p?"hidden":""} cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,title:"play",onClick:()=>b(i),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})})}),e.jsx("span",{className:`${p?"":"hidden"} cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,title:"stop",onClick:()=>g(),children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"})]})})]}),e.jsx("span",{className:`cursor-pointer ${x?"hidden":""}`,title:"copy",onClick:w,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})})}),e.jsx("span",{className:`cursor-pointer ${x?"":"hidden"}`,title:"copied",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})]})}function z(){const[o,i]=s.useState(null),[h,l]=s.useState(null),[n,x]=s.useState(null),[d,p]=s.useState(!1),[u,r]=s.useState(!1),[b,g]=s.useState(""),[w,m]=s.useState(null),j=s.useRef(null),y=s.useRef(null),C=s.useRef(null),k=async()=>{try{p(!0),x(null);const t=await N("med_conditons_date_string"),a=await N("med_conditons_array");let c=await fetch($);if(c=await c.json(),t.med_conditons_date_string!=c.med_conditons_date_string||!a.med_conditons_array){const f=await(await fetch(A)).json();await L("med_conditons_array",f),await L("med_conditons_date_string",c),l(c.med_conditons_date_string),i(f.med_conditons_array),j.current=f.med_conditons_array.map(S=>S.conditions.map(T=>({title:S.title,condition:T}))).flat();return}l(c.med_conditons_date_string),i(a.med_conditons_array),j.current=a.med_conditons_array.map(_=>_.conditions.map(f=>({title:_.title,condition:f}))).flat()}catch(t){i(null),console.error("MedConditons=>fetchData error:",t),x(t)}finally{p(!1)}};function v(t){if(!y.current)return;y.current.value=t;const a=y.current.value;navigator.clipboard&&navigator.clipboard.writeText(a).then(()=>{}).catch(c=>{alert("Unable to copy to clipboard: "+c)})}function D(t){(t.ctrlKey||t.metaKey)&&t.key==="k"&&(t.preventDefault(),r(a=>!a),g(""),m([]),C.current.focus())}const R=t=>{if(g(t.target.value),t.target.value===""){m([]);return}m(j.current.filter(a=>a.condition.toLowerCase().trim().includes(t.target.value.toLowerCase().trim())))};return s.useEffect(()=>{k()},[]),s.useEffect(()=>{const t=a=>D(a);return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[]),o&&!d?e.jsxs("div",{className:"relative w-full h-full bg-background-100 text-text-100 pt-4 px-2 transition-colors duration-500 ease-in-out overflow-auto",children:[e.jsx("div",{className:`w-screen h-screen fixed top-0 left-0 z-10 bg-background-100/90 transition duration-500 ease-in-out ${u?"opacity-100 translate-y-0":"opacity-0 -translate-y-full"}`,onClick:()=>r(!1),children:e.jsxs("div",{className:"absolute top-0 left-0 w-full bg-primary-100 py-8 flex justify-center items-center shadow-md",onClick:t=>t.stopPropagation(),children:[e.jsx("input",{type:"text",ref:C,className:"w-[70%] h-8 px-2 box-border inline-block text-black border focus:outline-none focus:ring focus:border-blue-400 rounded-sm shadow-lg",value:b,onChange:R}),e.jsx("ul",{className:"absolute top-[104px] text-gray-500 w-[60%] max-h-[450px] overflow-y-auto overflow-x-hidden box-border flex flex-col gap-2 px-2",children:w?w.map((t,a)=>e.jsxs(E,{condition:t.condition,i:a,copyToClipboard:v,skeleton:!1,children:[t.condition," ",e.jsx("span",{className:"px-2 py-1 uppercase bg-secondary-100 rounded-sm font-bold text-white",children:t.title})]},`${t.condition}_${a}`)):""}),e.jsx("button",{className:"absolute top-2 left-2 w-8 h-8 flex justify-center items-center text-text-100 hover:text-red-500 transition-colors duration-300 ",onClick:()=>r(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"})})})]})}),e.jsx("textarea",{className:"fixed bottom-0 left-0 -translate-x-full",ref:y}),o.map((t,a)=>e.jsxs("div",{className:"mb-2 px-4 pb-2 bg-slate-900/20 dark:bg-slate-100/10 border border-gray-600 dark:border-gray-300 rounded-md shadow-sm",children:[e.jsx("h3",{className:"my-2 pl-2 py-1 text-2xl font-bold tracking-wider bg-primary-100 text-center uppercase shadow-xl",children:t.title}),e.jsx(M,{data:t.conditions,copyToClipboard:v})]},`${t.title}}`)),e.jsxs("p",{className:"sticky bottom-0 left-0 w-fit bg-background-100/60 px-1 text-black dark:text-white flex items-center gap-1 rounded-sm",children:[o&&o.dateStr," ",e.jsx("button",{onClick:k,disabled:d,children:"update"})]})]}):n?e.jsxs("div",{className:"w-full h-full flex flex-col justify-center items-center text-3xl font-bold capitalize text-red-500",children:[e.jsxs("span",{children:["fetch data error:",e.jsx("br",{}),String(n==null?void 0:n.message)]}),e.jsx("button",{onClick:k,className:"btn-secondary text-lg",disabled:d,children:"retry"})]}):e.jsx("div",{className:"relative w-full h-full bg-background-100 text-text-100 pt-4 px-2 overflow-auto",children:e.jsxs("div",{className:"mb-2 px-4 pb-2 bg-gray-400/20 animate-pulse border border-gray-600 dark:border-gray-300 rounded-md ",children:[e.jsx("h3",{className:"my-2 pl-2 py-1 text-2xl font-bold tracking-wider text-transparent bg-gray-400 animate-pulse ",children:"walid ali khan"}),e.jsx(M,{data:["Kidney cancer","Leukemia","Liver cancer","Non-Hodgkins lymphoma","Bladder cancer","Acute Myeloid Leukemia (AML)","Aplastic Anemia or myelodysplastic syndrome","Brain cancer","Blood cancer","Chronic Kidney Disease","Central nervous system cancer","End Stage Renal Disease","Esophageal Cancer","Multiple Myeloma","Parkinsons Disease","Rectal Cancer","Renal Toxicity","Systemic Scleroderma / Systemic Sclerosis","Male Breast Cancer","Miscarriage / Fetal Death - Is the facility where the miscarriage was treated on Camp Lejeune or in Jacksonville, North Carolina? – if no, disqualify"],copyToClipboard:v,skeleton:!0})]})})}export{z as default};
