import{r as e,j as l}from"./index-MVXd8x__.js";import{t as i}from"./transition-ZCtd1ZxQ.js";function p({children:a,direction:r="top"}){const[s,o]=e.useState(!1);let t="";switch(r){case"bottom":t="translate-y-[50px]";break;case"left":t="translate-x-[-50px]";break;case"right":t="translate-x-[50px]";break;default:t="translate-y-[-50px]"}return e.useEffect(()=>{const n=setTimeout(()=>{o(!0)},500);return()=>clearTimeout(n)},[]),l.jsx(i,{as:e.Fragment,enter:"transition-all ease-out duration-500",enterFrom:`${t} opacity-0 scale-95`,enterTo:"translate-y-0 translate-x-0 opacity-100 scale-100",show:s,children:a})}export{p as default};
