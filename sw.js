if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>n(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(r.map((s=>u[s]||t(s)))).then((s=>(i(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/App-1QZE4FZZ.js",revision:null},{url:"assets/AuthContext-BSooO72c.js",revision:null},{url:"assets/DropDownMenu-00gAO0Hi.js",revision:null},{url:"assets/DupChecker-VnUFYWbv.js",revision:null},{url:"assets/Footer-YClFgtMR.js",revision:null},{url:"assets/Header-2RBpQwiE.js",revision:null},{url:"assets/Home-WCn0Vqlz.js",revision:null},{url:"assets/index-6TWPNdMh.css",revision:null},{url:"assets/index-NJaKC54Q.js",revision:null},{url:"assets/Layout-7Ogr-4qE.js",revision:null},{url:"assets/MedConditons-qGgNsdTY.js",revision:null},{url:"assets/PreLoader-DJCkYAC_.js",revision:null},{url:"assets/Sidebar-g_srSBnB.js",revision:null},{url:"index.html",revision:"0144d37a279bdc01ea1488c16f7db354"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"9e73cb370a0c847c5d6bd8f4eaee88ba"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
