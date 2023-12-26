import{r as Ze,j as R}from"./index-BDSdgyNY.js";import{a as f,g as he,D as pt,_ as Gi,b as Vi,c as qi,d as Hi,e as Bi,C as ji,r as On,s as P,j as $t,f as B,h as Yi,S as zi,i as Qi,k as Ce,m as nt,l as gt,n as mt,L as Ki,o as je,p as $i,q as ys,t as Xi,u as Ji,v as Ln,w as Cs,x as Zi,y as er,z as tr,A as nr,B as sr,E as ir}from"./firebase-w5wVbqtu.js";var Fn={};const Wn="@firebase/database",Un="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="";function rr(n){Es=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$t(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return B(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new or(e)}}catch{}return new lr},ie=ws("localStorage"),Ft=ws("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Ki("@firebase/database"),ar=function(){let n=1;return function(){return n++}}(),Is=function(n){const e=Yi(n),t=new zi;t.update(e);const s=t.digest();return Qi.encodeByteArray(s)},Ye=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ye.apply(null,s):typeof s=="object"?e+=P(s):e+=s,e+=" "}return e};let re=null,Gn=!0;const cr=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(me.logLevel=$i.VERBOSE,re=me.log.bind(me),e&&Ft.set("logging_enabled",!0)):typeof n=="function"?re=n:(re=null,Ft.remove("logging_enabled"))},D=function(...n){if(Gn===!0&&(Gn=!1,re===null&&Ft.get("logging_enabled")===!0&&cr(!0)),re){const e=Ye.apply(null,n);re(e)}},ze=function(n){return function(...e){D(n,...e)}},Wt=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ye(...n);me.error(e)},Q=function(...n){const e=`FIREBASE FATAL ERROR: ${Ye(...n)}`;throw me.error(e),new Error(e)},L=function(...n){const e="FIREBASE WARNING: "+Ye(...n);me.warn(e)},hr=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xt=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ur=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ee="[MIN_NAME]",oe="[MAX_NAME]",ue=function(n,e){if(n===e)return 0;if(n===Ee||e===oe)return-1;if(e===Ee||n===oe)return 1;{const t=Vn(n),s=Vn(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},dr=function(n,e){return n===e?0:n<e?-1:1},xe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+P(e))},Jt=function(n){if(typeof n!="object"||n===null)return P(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=P(e[s]),t+=":",t+=Jt(n[e[s]]);return t+="}",t},Ts=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function M(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ss=function(n){f(!Xt(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},fr=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_r=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pr(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const gr=new RegExp("^-?(0*)\\d{1,10}$"),mr=-2147483648,vr=2147483647,Vn=function(n){if(gr.test(n)){const e=Number(n);if(e>=mr&&e<=vr)return e}return null},Ne=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw L("Exception was thrown by user callback.",t),e},Math.floor(0))}},yr=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},De=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){L(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(e)}}class ve{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ve.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="5",Ns="v",bs="s",Rs="r",xs="f",Ps=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ks="ls",As="p",Ut="ac",Ds="websocket",Ms="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ie.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ie.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function wr(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ls(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Ds)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ms)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wr(n)&&(t.ns=n.namespace);const i=[];return M(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.counters_={}}incrementCounter(e,t=1){B(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={},kt={};function en(n){const e=n.toString();return Pt[e]||(Pt[e]=new Ir),Pt[e]}function Tr(n,e){const t=n.toString();return kt[t]||(kt[t]=e()),kt[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ne(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="start",Nr="close",br="pLPCommand",Rr="pRTLPCB",Fs="id",Ws="pw",Us="ser",xr="cb",Pr="seg",kr="ts",Ar="d",Dr="dframe",Gs=1870,Vs=30,Mr=Gs-Vs,Or=25e3,Lr=3e4;class ge{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ze(e),this.stats_=en(t),this.urlFn=a=>(this.appCheckToken&&(a[Ut]=this.appCheckToken),Ls(t,Ms,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Sr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lr)),ur(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tn((...r)=>{const[o,l,a,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qn)this.id=l,this.password=a;else if(o===Nr)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[qn]="t",s[Us]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xr]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ns]=Zt,this.transportSessionId&&(s[bs]=this.transportSessionId),this.lastSessionId&&(s[ks]=this.lastSessionId),this.applicationId&&(s[As]=this.applicationId),this.appCheckToken&&(s[Ut]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ps.test(location.hostname)&&(s[Rs]=xs);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ge.forceAllow_=!0}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){return ge.forceAllow_?!0:!ge.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fr()&&!_r()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=sr(t),i=Ts(s,Mr);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Dr]="t",s[Fs]=e,s[Ws]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class tn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ar(),window[br+this.uniqueCallbackIdentifier]=e,window[Rr+this.uniqueCallbackIdentifier]=t,this.myIFrame=tn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){D("frame writing exception"),l.stack&&D(l.stack),D(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||D("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fs]=this.myID,e[Ws]=this.myPW,e[Us]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vs+s.length<=Gs;){const o=this.pendingSegs.shift();s=s+"&"+Pr+i+"="+o.seg+"&"+kr+i+"="+o.ts+"&"+Ar+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Or)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=16384,Wr=45e3;let st=null;typeof MozWebSocket<"u"?st=MozWebSocket:typeof WebSocket<"u"&&(st=WebSocket);class V{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ze(this.connId),this.stats_=en(t),this.connURL=V.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ns]=Zt,typeof location<"u"&&location.hostname&&Ps.test(location.hostname)&&(o[Rs]=xs),t&&(o[bs]=t),s&&(o[ks]=s),i&&(o[Ut]=i),r&&(o[As]=r),Ls(e,Ds,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ie.set("previous_websocket_failure",!0);try{let s;ys(),this.mySock=new st(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){V.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&st!==null&&!V.forceDisallow_}static previouslyFailed(){return ie.isInMemoryStorage||ie.get("previous_websocket_failure")===!0}markConnectionHealthy(){ie.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$t(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ts(t,Fr);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wr))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}V.responsesRequiredToBeHealthy=2;V.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ge,V]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=V&&V.isAvailable();let s=t&&!V.previouslyFailed();if(e.webSocketOnly&&(t||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[V];else{const i=this.transports_=[];for(const r of Fe.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Fe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fe.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=6e4,Gr=5e3,Vr=10*1024,qr=100*1024,At="t",Hn="d",Hr="s",Bn="r",Br="e",jn="o",Yn="a",zn="n",Qn="p",jr="h";class Yr{constructor(e,t,s,i,r,o,l,a,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ze("c:"+this.id+":"),this.transportManager_=new Fe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=De(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qr?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(At in e){const t=e[At];t===Yn?this.upgradeIfSecondaryHealthy_():t===Bn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=xe("t",e),s=xe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zn,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=xe("t",e),s=xe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=xe(At,e);if(Hn in e){const s=e[Hn];if(t===jr){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===zn){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Hr?this.onConnectionShutdown_(s):t===Bn?this.onReset_(s):t===Br?Wt("Server Error: "+s):t===jn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zt!==s&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),De(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ur))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):De(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gr))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ie.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Hs{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new it}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=32,$n=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function w(){return new I("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ee(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function nn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zr(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function We(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bs(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function N(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new I(t,0)}function y(n){return n.pieceNum_>=n.pieces_.length}function O(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return O(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qr(n,e){const t=We(n,0),s=We(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=ue(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function js(n,e){if(ee(n)!==ee(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function U(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ee(n)>ee(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Kr{constructor(e,t){this.errorPrefix_=t,this.parts_=We(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gt(this.parts_[s]);Ys(this)}}function $r(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gt(e),Ys(n)}function Xr(n){const e=n.parts_.pop();n.byteLength_-=gt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ys(n){if(n.byteLength_>$n)throw new Error(n.errorPrefix_+"has a key path longer than "+$n+" bytes ("+n.byteLength_+").");if(n.parts_.length>Kn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kn+") or object contains a cycle "+se(n))}function se(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Hs{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new sn}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1e3,Jr=60*5*1e3,Xn=30*1e3,Zr=1.3,eo=3e4,to="server_kill",Jn=3;class Y extends qs{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Y.nextPersistentConnectionId_++,this.log_=ze("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pe,this.maxReconnectDelay_=Jr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ys())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&it.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(P(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new pt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Y.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&B(e,"w")){const s=Ce(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();L(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ji(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wt("Unrecognized action received from server: "+P(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eo&&(this.reconnectDelay_=Pe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Y.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new Yr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{L(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(to)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&L(u),a())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ln(this.interruptReasons_)&&(this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Jt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new I(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){D("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jn&&(this.reconnectDelay_=Xn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){D("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Es.replace(/\./g,"-")]=1,Cs()?e["framework.cordova"]=1:Zi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=it.getInstance().currentlyOnline();return Ln(this.interruptReasons_)&&e}}Y.nextPersistentConnectionId_=0;Y.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new v(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new v(Ee,e),i=new v(Ee,t);return this.compare(s,i)!==0}minPost(){return v.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et;class zs extends vt{static get __EMPTY_NODE(){return et}static set __EMPTY_NODE(e){et=e}compare(e,t){return ue(e.name,t.name)}isDefinedOn(e){throw je("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return v.MIN}maxPost(){return new v(oe,et)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new v(e,et)}toString(){return".key"}}const ye=new zs;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class A{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??A.RED,this.left=i??F.EMPTY_NODE,this.right=r??F.EMPTY_NODE}copy(e,t,s,i,r){return new A(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return F.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return F.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,A.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,A.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}A.RED=!0;A.BLACK=!1;class no{copy(e,t,s,i,r){return this}insert(e,t,s){return new A(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class F{constructor(e,t=F.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new F(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,A.BLACK,null,null))}remove(e){return new F(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,A.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new tt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new tt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new tt(this.root_,null,this.comparator_,!0,e)}}F.EMPTY_NODE=new no;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n,e){return ue(n.name,e.name)}function rn(n,e){return ue(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function io(n){Gt=n}const Qs=function(n){return typeof n=="number"?"number:"+Ss(n):"string:"+n},Ks=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&B(e,".sv"),"Priority must be a string or number.")}else f(n===Gt||n.isEmpty(),"priority of unexpected type.");f(n===Gt||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;class k{constructor(e,t=k.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ks(this.priorityNode_)}static set __childrenNodeConstructor(e){Zn=e}static get __childrenNodeConstructor(){return Zn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new k(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:k.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:C(e)===".priority"?this.priorityNode_:k.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:k.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||ee(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,k.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ss(this.value_):e+=this.value_,this.lazyHash_=Is(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===k.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof k.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=k.VALUE_TYPE_ORDER.indexOf(t),r=k.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}k.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s,Xs;function ro(n){$s=n}function oo(n){Xs=n}class lo extends vt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ue(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return v.MIN}maxPost(){return new v(oe,new k("[PRIORITY-POST]",Xs))}makePost(e,t){const s=$s(e);return new v(t,new k("[PRIORITY-POST]",s))}toString(){return".priority"}}const b=new lo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=Math.log(2);class co{constructor(e){const t=r=>parseInt(Math.log(r)/ao,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rt=function(n,e,t,s){n.sort(e);const i=function(a,c){const d=c-a;let u,h;if(d===0)return null;if(d===1)return u=n[a],h=t?t(u):u,new A(h,u.node,A.BLACK,null,null);{const _=parseInt(d/2,10)+a,p=i(a,_),m=i(_+1,c);return u=n[_],h=t?t(u):u,new A(h,u.node,A.BLACK,p,m)}},r=function(a){let c=null,d=null,u=n.length;const h=function(p,m){const E=u-p,W=u;u-=p;const fe=i(E+1,W),_e=n[E],xt=t?t(_e):_e;_(new A(xt,_e.node,m,null,fe))},_=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<a.count;++p){const m=a.nextBitIsOne(),E=Math.pow(2,a.count-(p+1));m?h(E,A.BLACK):(h(E,A.BLACK),h(E,A.RED))}return d},o=new co(n.length),l=r(o);return new F(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dt;const pe={};class j{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(pe&&b,"ChildrenNode.ts has not been loaded"),Dt=Dt||new j({".priority":pe},{".priority":b}),Dt}get(e){const t=Ce(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof F?t:null}hasIndex(e){return B(this.indexSet_,e.toString())}addIndex(e,t){f(e!==ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(v.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=rt(s,e.getCompare()):l=pe;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new j(d,c)}addToIndexes(e,t){const s=nt(this.indexes_,(i,r)=>{const o=Ce(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===pe)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(v.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),rt(l,o.getCompare())}else return pe;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new v(e.name,l))),a.insert(e,e.node)}});return new j(s,this.indexSet_)}removeFromIndexes(e,t){const s=nt(this.indexes_,i=>{if(i===pe)return i;{const r=t.get(e.name);return r?i.remove(new v(e.name,r)):i}});return new j(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke;class g{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ks(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ke||(ke=new g(new F(rn),null,j.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ke}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ke:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new v(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ke:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{f(C(e)!==".priority"||ee(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(S(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(b,(o,l)=>{t[o]=l.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qs(this.getPriority().val())+":"),this.forEachChild(b,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Is(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new v(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new v(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new v(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qe?-1:0}withIndex(e){if(e===ye||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ye||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(b),i=t.getIterator(b);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ye?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ho extends g{constructor(){super(new F(rn),g.EMPTY_NODE,j.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Qe=new ho;Object.defineProperties(v,{MIN:{value:new v(Ee,g.EMPTY_NODE)},MAX:{value:new v(oe,Qe)}});zs.__EMPTY_NODE=g.EMPTY_NODE;k.__childrenNodeConstructor=g;io(Qe);oo(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=!0;function x(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new k(t,x(e))}if(!(n instanceof Array)&&uo){const t=[];let s=!1;if(M(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=x(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new v(o,a)))}}),t.length===0)return g.EMPTY_NODE;const r=rt(t,so,o=>o.name,rn);if(s){const o=rt(t,b.getCompare());return new g(r,x(e),new j({".priority":o},{".priority":b}))}else return new g(r,x(e),j.Default)}else{let t=g.EMPTY_NODE;return M(n,(s,i)=>{if(B(n,s)&&s.substring(0,1)!=="."){const r=x(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(x(e))}}ro(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends vt{constructor(e){super(),this.indexPath_=e,f(!y(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ue(e.name,t.name):r}makePost(e,t){const s=x(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new v(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Qe);return new v(oe,e)}toString(){return We(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends vt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ue(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return v.MIN}maxPost(){return v.MAX}makePost(e,t){const s=x(e);return new v(t,s)}toString(){return".value"}}const po=new _o;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){return{type:"value",snapshotNode:n}}function we(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ue(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ge(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function go(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Ue(t,l)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(we(t,s)):o.trackChildChange(Ge(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(b,(i,r)=>{t.hasChild(i)||s.trackChildChange(Ue(i,r))}),t.isLeafNode()||t.forEachChild(b,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ge(i,r,o))}else s.trackChildChange(we(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.indexedFilter_=new on(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ve.getStartPost_(e),this.endPost_=Ve.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new v(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(b,(o,l)=>{r.matches(new v(o,l))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ve(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new v(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,_)=>u(_,h)}else o=this.index_.getCompare();const l=e;f(l.numChildren()===this.limit_,"");const a=new v(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(t)){const u=l.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ge(t,s,u)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Ue(t,u));const m=l.updateImmediateChild(t,g.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(we(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return s.isEmpty()?e:d&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ue(c.name,c.node)),r.trackChildChange(we(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=b}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ee}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:oe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===b}copy(){const e=new ln;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vo(n){return n.loadsAllData()?new on(n.getIndex()):n.hasLimit()?new mo(n):new Ve(n)}function es(n){const e={};if(n.isDefault())return e;let t;if(n.index_===b?t="$priority":n.index_===po?t="$value":n.index_===ye?t="$key":(f(n.index_ instanceof fo,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=P(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=P(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+P(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=P(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+P(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ts(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==b&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends qs{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ze("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ot.getListenId_(e,s),l={};this.listens_[o]=l;const a=es(e._queryParams);this.restRequest_(r+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Ce(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,t){const s=ot.getListenId_(e,t);delete this.listens_[s]}get(e){const t=es(e._queryParams),s=e._path.toString(),i=new pt;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+er(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$t(l.responseText)}catch{L("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&L("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return{value:null,children:new Map}}function Zs(n,e,t){if(y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,lt());const i=n.children.get(s);e=S(e),Zs(i,e,t)}}function Vt(n,e,t){n.value!==null?t(e,n.value):Co(n,(s,i)=>{const r=new I(e.toString()+"/"+s);Vt(i,r,t)})}function Co(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&M(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=10*1e3,wo=30*1e3,Io=5*60*1e3;class To{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Eo(e);const s=ns+(wo-ns)*Math.random();De(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;M(e,(i,r)=>{r>0&&B(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),De(this.reportStats_.bind(this),Math.floor(Math.random()*2*Io))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(q||(q={}));function an(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=q.ACK_USER_WRITE,this.source=an()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new at(w(),t,this.revert)}}else return f(C(this.path)===e,"operationForChild called for unrelated child."),new at(S(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.source=e,this.path=t,this.type=q.LISTEN_COMPLETE}operationForChild(e){return y(this.path)?new qe(this.source,w()):new qe(this.source,S(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=q.OVERWRITE}operationForChild(e){return y(this.path)?new le(this.source,w(),this.snap.getImmediateChild(e)):new le(this.source,S(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=q.MERGE}operationForChild(e){if(y(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new le(this.source,w(),t.value):new Ie(this.source,w(),t)}else return f(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ie(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function No(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(go(o.childName,o.snapshotNode))}),Ae(n,i,"child_removed",e,s,t),Ae(n,i,"child_added",e,s,t),Ae(n,i,"child_moved",r,s,t),Ae(n,i,"child_changed",e,s,t),Ae(n,i,"value",e,s,t),i}function Ae(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Ro(n,l,a)),o.forEach(l=>{const a=bo(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function bo(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ro(n,e,t){if(e.childName==null||t.childName==null)throw je("Should only compare child_ events.");const s=new v(e.childName,e.snapshotNode),i=new v(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e){return{eventCache:n,serverCache:e}}function Me(n,e,t,s){return yt(new te(e,t,s),n.serverCache)}function ei(n,e,t,s){return yt(n.eventCache,new te(e,t,s))}function ct(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ae(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;const xo=()=>(Mt||(Mt=new F(dr)),Mt);class T{constructor(e,t=xo()){this.value=e,this.children=t}static fromObject(e){let t=new T(null);return M(e,(s,i)=>{t=t.set(new I(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:w(),value:this.value};if(y(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(S(e),t);return r!=null?{path:N(new I(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(S(e)):new T(null)}}set(e,t){if(y(e))return new T(t,this.children);{const s=C(e),r=(this.children.get(s)||new T(null)).set(S(e),t),o=this.children.insert(s,r);return new T(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(S(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(S(e)):null}}setTree(e,t){if(y(e))return t;{const s=C(e),r=(this.children.get(s)||new T(null)).setTree(S(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new T(this.value,o)}}fold(e){return this.fold_(w(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(N(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,w(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(y(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(S(e),N(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,w(),t)}foreachOnPath_(e,t,s){if(y(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(S(e),N(t,i),s):new T(null)}}foreach(e){this.foreach_(w(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(N(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.writeTree_=e}static empty(){return new H(new T(null))}}function Oe(n,e,t){if(y(e))return new H(new T(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=O(i,e);return r=r.updateChild(o,t),new H(n.writeTree_.set(i,r))}else{const i=new T(t),r=n.writeTree_.setTree(e,i);return new H(r)}}}function qt(n,e,t){let s=n;return M(t,(i,r)=>{s=Oe(s,N(e,i),r)}),s}function ss(n,e){if(y(e))return H.empty();{const t=n.writeTree_.setTree(e,new T(null));return new H(t)}}function Ht(n,e){return de(n,e)!=null}function de(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(O(t.path,e)):null}function is(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(b,(s,i)=>{e.push(new v(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new v(s,i.value))}),e}function X(n,e){if(y(e))return n;{const t=de(n,e);return t!=null?new H(new T(t)):new H(n.writeTree_.subtree(e))}}function Bt(n){return n.writeTree_.isEmpty()}function Te(n,e){return ti(w(),n.writeTree_,e)}function ti(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ti(N(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(N(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,e){return ri(e,n)}function Po(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Oe(n.visibleWrites,e,t)),n.lastWriteId=s}function ko(n,e,t,s){f(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=qt(n.visibleWrites,e,t),n.lastWriteId=s}function Ao(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Do(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Mo(l,s.path)?i=!1:U(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Oo(n),!0;if(s.snap)n.visibleWrites=ss(n.visibleWrites,s.path);else{const l=s.children;M(l,a=>{n.visibleWrites=ss(n.visibleWrites,N(s.path,a))})}return!0}else return!1}function Mo(n,e){if(n.snap)return U(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&U(N(n.path,t),e))return!0;return!1}function Oo(n){n.visibleWrites=ni(n.allWrites,Lo,w()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Lo(n){return n.visible}function ni(n,e,t){let s=H.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)U(t,o)?(l=O(t,o),s=Oe(s,l,r.snap)):U(o,t)&&(l=O(o,t),s=Oe(s,w(),r.snap.getChild(l)));else if(r.children){if(U(t,o))l=O(t,o),s=qt(s,l,r.children);else if(U(o,t))if(l=O(o,t),y(l))s=qt(s,w(),r.children);else{const a=Ce(r.children,C(l));if(a){const c=a.getChild(S(l));s=Oe(s,w(),c)}}}else throw je("WriteRecord should have .snap or .children")}}return s}function si(n,e,t,s,i){if(!s&&!i){const r=de(n.visibleWrites,e);if(r!=null)return r;{const o=X(n.visibleWrites,e);if(Bt(o))return t;if(t==null&&!Ht(o,w()))return null;{const l=t||g.EMPTY_NODE;return Te(o,l)}}}else{const r=X(n.visibleWrites,e);if(!i&&Bt(r))return t;if(!i&&t==null&&!Ht(r,w()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(U(c.path,e)||U(e,c.path))},l=ni(n.allWrites,o,e),a=t||g.EMPTY_NODE;return Te(l,a)}}}function Fo(n,e,t){let s=g.EMPTY_NODE;const i=de(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(b,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=X(n.visibleWrites,e);return t.forEachChild(b,(o,l)=>{const a=Te(X(r,new I(o)),l);s=s.updateImmediateChild(o,a)}),is(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=X(n.visibleWrites,e);return is(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wo(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,t);if(Ht(n.visibleWrites,r))return null;{const o=X(n.visibleWrites,r);return Bt(o)?i.getChild(t):Te(o,i.getChild(t))}}function Uo(n,e,t,s){const i=N(e,t),r=de(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=X(n.visibleWrites,i);return Te(o,s.getNode().getImmediateChild(t))}else return null}function Go(n,e){return de(n.visibleWrites,e)}function Vo(n,e,t,s,i,r,o){let l;const a=X(n.visibleWrites,e),c=de(a,w());if(c!=null)l=c;else if(t!=null)l=Te(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),h=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=h.getNext();for(;_&&d.length<i;)u(_,s)!==0&&d.push(_),_=h.getNext();return d}else return[]}function qo(){return{visibleWrites:H.empty(),allWrites:[],lastWriteId:-1}}function ht(n,e,t,s){return si(n.writeTree,n.treePath,e,t,s)}function un(n,e){return Fo(n.writeTree,n.treePath,e)}function rs(n,e,t,s){return Wo(n.writeTree,n.treePath,e,t,s)}function ut(n,e){return Go(n.writeTree,N(n.treePath,e))}function Ho(n,e,t,s,i,r){return Vo(n.writeTree,n.treePath,e,t,s,i,r)}function dn(n,e,t){return Uo(n.writeTree,n.treePath,e,t)}function ii(n,e){return ri(N(n.treePath,e),n.writeTree)}function ri(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ge(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ue(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,we(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ge(s,e.snapshotNode,i.oldSnap));else throw je("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const oi=new jo;class fn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new te(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ae(this.viewCache_),r=Ho(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){return{filter:n}}function zo(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Qo(n,e,t,s,i){const r=new Bo;let o,l;if(t.type===q.OVERWRITE){const c=t;c.source.fromUser?o=jt(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!y(c.path),o=dt(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===q.MERGE){const c=t;c.source.fromUser?o=$o(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Yt(n,e,c.path,c.children,s,i,l,r))}else if(t.type===q.ACK_USER_WRITE){const c=t;c.revert?o=Zo(n,e,c.path,s,i,r):o=Xo(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===q.LISTEN_COMPLETE)o=Jo(n,e,t.path,s,r);else throw je("Unknown operation type: "+t.type);const a=r.getChanges();return Ko(e,o,a),{viewCache:o,changes:a}}function Ko(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ct(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Js(ct(e)))}}function li(n,e,t,s,i,r){const o=e.eventCache;if(ut(s,t)!=null)return e;{let l,a;if(y(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ae(e),d=c instanceof g?c:g.EMPTY_NODE,u=un(s,d);l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ht(s,ae(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){f(ee(t)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=rs(s,t,d,a);u!=null?l=n.filter.updatePriority(d,u):l=o.getNode()}else{const d=S(t);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=rs(s,t,o.getNode(),a);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=dn(s,c,e.serverCache);u!=null?l=n.filter.updateChild(o.getNode(),c,u,d,i,r):l=o.getNode()}}return Me(e,l,o.isFullyInitialized()||y(t),n.filter.filtersNodes())}}function dt(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(y(t))c=d.updateFullNode(a.getNode(),s,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=d.updateFullNode(a.getNode(),_,null)}else{const _=C(t);if(!a.isCompleteForPath(t)&&ee(t)>1)return e;const p=S(t),E=a.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=d.updatePriority(a.getNode(),E):c=d.updateChild(a.getNode(),_,E,p,oi,null)}const u=ei(e,c,a.isFullyInitialized()||y(t),d.filtersNodes()),h=new fn(i,u,r);return li(n,u,t,i,h,l)}function jt(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const d=new fn(i,e,r);if(y(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Me(e,c,!0,n.filter.filtersNodes());else{const u=C(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Me(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=S(t),_=l.getNode().getImmediateChild(u);let p;if(y(h))p=s;else{const m=d.getCompleteChild(u);m!=null?nn(h)===".priority"&&m.getChild(Bs(h)).isEmpty()?p=m:p=m.updateChild(h,s):p=g.EMPTY_NODE}if(_.equals(p))a=e;else{const m=n.filter.updateChild(l.getNode(),u,p,h,d,o);a=Me(e,m,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function os(n,e){return n.eventCache.isCompleteForChild(e)}function $o(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const d=N(t,a);os(e,C(d))&&(l=jt(n,l,d,c,i,r,o))}),s.foreach((a,c)=>{const d=N(t,a);os(e,C(d))||(l=jt(n,l,d,c,i,r,o))}),l}function ls(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yt(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;y(t)?c=s:c=new T(null).setTree(t,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=ls(n,_,h);a=dt(n,a,new I(u),p,i,r,o,l)}}),c.children.inorderTraversal((u,h)=>{const _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),m=ls(n,p,h);a=dt(n,a,new I(u),m,i,r,o,l)}}),a}function Xo(n,e,t,s,i,r,o){if(ut(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(y(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return dt(n,e,t,a.getNode().getChild(t),i,r,l,o);if(y(t)){let c=new T(null);return a.getNode().forEachChild(ye,(d,u)=>{c=c.set(new I(d),u)}),Yt(n,e,t,c,i,r,l,o)}else return e}else{let c=new T(null);return s.foreach((d,u)=>{const h=N(t,d);a.isCompleteForPath(h)&&(c=c.set(d,a.getNode().getChild(h)))}),Yt(n,e,t,c,i,r,l,o)}}function Jo(n,e,t,s,i){const r=e.serverCache,o=ei(e,r.getNode(),r.isFullyInitialized()||y(t),r.isFiltered());return li(n,o,t,s,oi,i)}function Zo(n,e,t,s,i,r){let o;if(ut(s,t)!=null)return e;{const l=new fn(s,e,i),a=e.eventCache.getNode();let c;if(y(t)||C(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ht(s,ae(e));else{const u=e.serverCache.getNode();f(u instanceof g,"serverChildren would be complete if leaf node"),d=un(s,u)}d=d,c=n.filter.updateFullNode(a,d,r)}else{const d=C(t);let u=dn(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=n.filter.updateChild(a,d,u,S(t),l,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(a,d,g.EMPTY_NODE,S(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ht(s,ae(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ut(s,w())!=null,Me(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new on(s.getIndex()),r=vo(s);this.processor_=Yo(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,l.getNode(),null),d=new te(a,o.isFullyInitialized(),i.filtersNodes()),u=new te(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=yt(u,d),this.eventGenerator_=new So(this.query_)}get query(){return this.query_}}function tl(n){return n.viewCache_.serverCache.getNode()}function nl(n){return ct(n.viewCache_)}function sl(n,e){const t=ae(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!y(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function as(n){return n.eventRegistrations_.length===0}function il(n,e){n.eventRegistrations_.push(e)}function cs(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function hs(n,e,t,s){e.type===q.MERGE&&e.source.queryId!==null&&(f(ae(n.viewCache_),"We should always have a full cache before handling merges"),f(ct(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Qo(n.processor_,i,e,t,s);return zo(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ai(n,r.changes,r.viewCache.eventCache.getNode(),null)}function rl(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(b,(r,o)=>{s.push(we(r,o))}),t.isFullyInitialized()&&s.push(Js(t.getNode())),ai(n,s,t.getNode(),e)}function ai(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return No(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft;class ci{constructor(){this.views=new Map}}function ol(n){f(!ft,"__referenceConstructor has already been defined"),ft=n}function ll(){return f(ft,"Reference.ts has not been loaded"),ft}function al(n){return n.views.size===0}function _n(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),hs(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(hs(o,e,t,s));return r}}function hi(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=ht(t,i?s:null),a=!1;l?a=!0:s instanceof g?(l=un(t,s),a=!1):(l=g.EMPTY_NODE,a=!1);const c=yt(new te(l,a,!1),new te(s,i,!1));return new el(e,c)}return o}function cl(n,e,t,s,i,r){const o=hi(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),il(o,t),rl(o,t)}function hl(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=ne(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(cs(c,t,s)),as(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(cs(a,t,s)),as(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ne(n)&&r.push(new(ll())(e._repo,e._path)),{removed:r,events:o}}function ui(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function J(n,e){let t=null;for(const s of n.views.values())t=t||sl(s,e);return t}function di(n,e){if(e._queryParams.loadsAllData())return Et(n);{const s=e._queryIdentifier;return n.views.get(s)}}function fi(n,e){return di(n,e)!=null}function ne(n){return Et(n)!=null}function Et(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t;function ul(n){f(!_t,"__referenceConstructor has already been defined"),_t=n}function dl(){return f(_t,"Reference.ts has not been loaded"),_t}let fl=1;class us{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=qo(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _i(n,e,t,s,i){return Po(n.pendingWriteTree_,e,t,s,i),i?be(n,new le(an(),e,t)):[]}function _l(n,e,t,s){ko(n.pendingWriteTree_,e,t,s);const i=T.fromObject(t);return be(n,new Ie(an(),e,i))}function $(n,e,t=!1){const s=Ao(n.pendingWriteTree_,e);if(Do(n.pendingWriteTree_,e)){let r=new T(null);return s.snap!=null?r=r.set(w(),!0):M(s.children,o=>{r=r.set(new I(o),!0)}),be(n,new at(s.path,r,t))}else return[]}function Ke(n,e,t){return be(n,new le(cn(),e,t))}function pl(n,e,t){const s=T.fromObject(t);return be(n,new Ie(cn(),e,s))}function gl(n,e){return be(n,new qe(cn(),e))}function ml(n,e,t){const s=gn(n,t);if(s){const i=mn(s),r=i.path,o=i.queryId,l=O(r,e),a=new qe(hn(o),l);return vn(n,r,a)}else return[]}function pi(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||fi(o,e))){const a=hl(o,e,t,s);al(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,_)=>ne(_));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const _=El(h);for(let p=0;p<_.length;++p){const m=_[p],E=m.query,W=yi(n,m);n.listenProvider_.startListening(Le(E),He(n,E),W.hashFn,W.onComplete)}}}!u&&c.length>0&&!s&&(d?n.listenProvider_.stopListening(Le(e),null):c.forEach(h=>{const _=n.queryToTagMap.get(wt(h));n.listenProvider_.stopListening(Le(h),_)}))}wl(n,c)}return l}function gi(n,e,t,s){const i=gn(n,s);if(i!=null){const r=mn(i),o=r.path,l=r.queryId,a=O(o,e),c=new le(hn(l),a,t);return vn(n,o,c)}else return[]}function vl(n,e,t,s){const i=gn(n,s);if(i){const r=mn(i),o=r.path,l=r.queryId,a=O(o,e),c=T.fromObject(t),d=new Ie(hn(l),a,c);return vn(n,o,d)}else return[]}function yl(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,_)=>{const p=O(h,i);r=r||J(_,p),o=o||ne(_)});let l=n.syncPointTree_.get(i);l?(o=o||ne(l),r=r||J(l,w())):(l=new ci,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const m=J(p,w());m&&(r=r.updateImmediateChild(_,m))}));const c=fi(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=wt(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Il();n.queryToTagMap.set(h,_),n.tagToQueryMap.set(_,h)}const d=Ct(n.pendingWriteTree_,i);let u=cl(l,e,t,d,r,a);if(!c&&!o&&!s){const h=di(l,e);u=u.concat(Tl(n,e,h))}return u}function pn(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=O(o,e),c=J(l,a);if(c)return c});return si(i,e,r,t,!0)}function Cl(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const u=O(c,t);s=s||J(d,u)});let i=n.syncPointTree_.get(t);i?s=s||J(i,w()):(i=new ci,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new te(s,!0,!1):null,l=Ct(n.pendingWriteTree_,e._path),a=hi(i,e,l,r?o.getNode():g.EMPTY_NODE,r);return nl(a)}function be(n,e){return mi(e,n.syncPointTree_,null,Ct(n.pendingWriteTree_,w()))}function mi(n,e,t,s){if(y(n.path))return vi(n,e,t,s);{const i=e.get(w());t==null&&i!=null&&(t=J(i,w()));let r=[];const o=C(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,d=ii(s,o);r=r.concat(mi(l,a,c,d))}return i&&(r=r.concat(_n(i,n,s,t))),r}}function vi(n,e,t,s){const i=e.get(w());t==null&&i!=null&&(t=J(i,w()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ii(s,o),d=n.operationForChild(o);d&&(r=r.concat(vi(d,l,a,c)))}),i&&(r=r.concat(_n(i,n,s,t))),r}function yi(n,e){const t=e.query,s=He(n,t);return{hashFn:()=>(tl(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ml(n,t._path,s):gl(n,t._path);{const r=pr(i,t);return pi(n,t,null,r)}}}}function He(n,e){const t=wt(e);return n.queryToTagMap.get(t)}function wt(n){return n._path.toString()+"$"+n._queryIdentifier}function gn(n,e){return n.tagToQueryMap.get(e)}function mn(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function vn(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=Ct(n.pendingWriteTree_,e);return _n(s,t,i,null)}function El(n){return n.fold((e,t,s)=>{if(t&&ne(t))return[Et(t)];{let i=[];return t&&(i=ui(t)),M(s,(r,o)=>{i=i.concat(o)}),i}})}function Le(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(dl())(n._repo,n._path):n}function wl(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=wt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Il(){return fl++}function Tl(n,e,t){const s=e._path,i=He(n,e),r=yi(n,t),o=n.listenProvider_.startListening(Le(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)f(!ne(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!y(c)&&d&&ne(d))return[Et(d).query];{let h=[];return d&&(h=h.concat(ui(d).map(_=>_.query))),M(u,(_,p)=>{h=h.concat(p)}),h}});for(let c=0;c<a.length;++c){const d=a[c];n.listenProvider_.stopListening(Le(d),He(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yn(t)}node(){return this.node_}}class Cn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=N(this.path_,e);return new Cn(this.syncTree_,t)}node(){return pn(this.syncTree_,this.path_)}}const Sl=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ds=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Nl(n[".sv"],e,t);if(typeof n[".sv"]=="object")return bl(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Nl=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},bl=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ci=function(n,e,t,s){return En(e,new Cn(t,n),s)},Ei=function(n,e,t){return En(n,new yn(e),t)};function En(n,e,t){const s=n.getPriority().val(),i=ds(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ds(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new k(l,x(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new k(i))),o.forEachChild(b,(l,a)=>{const c=En(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function In(n,e){let t=e instanceof I?e:new I(e),s=n,i=C(t);for(;i!==null;){const r=Ce(s.node.children,i)||{children:{},childCount:0};s=new wn(i,s,r),t=S(t),i=C(t)}return s}function Re(n){return n.node.value}function wi(n,e){n.node.value=e,zt(n)}function Ii(n){return n.node.childCount>0}function Rl(n){return Re(n)===void 0&&!Ii(n)}function It(n,e){M(n.node.children,(t,s)=>{e(new wn(t,n,s))})}function Ti(n,e,t,s){t&&!s&&e(n),It(n,i=>{Ti(i,e,!0,s)}),t&&s&&e(n)}function xl(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $e(n){return new I(n.parent===null?n.name:$e(n.parent)+"/"+n.name)}function zt(n){n.parent!==null&&Pl(n.parent,n.name,n)}function Pl(n,e,t){const s=Rl(t),i=B(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,zt(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zt(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=/[\[\].#$\/\u0000-\u001F\u007F]/,Al=/[\[\].#$\u0000-\u001F\u007F]/,Ot=10*1024*1024,Tn=function(n){return typeof n=="string"&&n.length!==0&&!kl.test(n)},Si=function(n){return typeof n=="string"&&n.length!==0&&!Al.test(n)},Dl=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Si(n)},Ml=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xt(n)||n&&typeof n=="object"&&B(n,".sv")},Ni=function(n,e,t,s){s&&e===void 0||Tt(mt(n,"value"),e,t)},Tt=function(n,e,t){const s=t instanceof I?new Kr(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+se(s));if(typeof e=="function")throw new Error(n+"contains a function "+se(s)+" with contents = "+e.toString());if(Xt(e))throw new Error(n+"contains "+e.toString()+" "+se(s));if(typeof e=="string"&&e.length>Ot/3&&gt(e)>Ot)throw new Error(n+"contains a string greater than "+Ot+" utf8 bytes "+se(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(M(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tn(o)))throw new Error(n+" contains an invalid key ("+o+") "+se(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$r(s,o),Tt(n,l,s),Xr(s)}),i&&r)throw new Error(n+' contains ".value" child '+se(s)+" in addition to actual children.")}},Ol=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=We(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Tn(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Qr);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&U(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Ll=function(n,e,t,s){if(s&&e===void 0)return;const i=mt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];M(e,(o,l)=>{const a=new I(o);if(Tt(i,l,N(t,a)),nn(a)===".priority"&&!Ml(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Ol(i,r)},bi=function(n,e,t,s){if(!(s&&t===void 0)&&!Si(t))throw new Error(mt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fl=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bi(n,e,t,s)},Ri=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Wl=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Dl(t))throw new Error(mt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!js(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function G(n,e,t){Sn(n,t),Gl(n,s=>U(s,e)||U(e,s))}function Gl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Vl(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Vl(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();re&&D("event: "+t.toString()),Ne(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="repo_interrupt",Hl=25;class Bl{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ul,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lt(),this.transactionQueueTree_=new wn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jl(n,e,t){if(n.stats_=en(n.repoInfo_),n.forceRestClient_||yr())n.server_=new ot(n.repoInfo_,(s,i,r,o)=>{fs(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_s(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Y(n.repoInfo_,e,(s,i,r,o)=>{fs(n,s,i,r,o)},s=>{_s(n,s)},s=>{Yl(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Tr(n.repoInfo_,()=>new To(n.stats_,n.server_)),n.infoData_=new yo,n.infoSyncTree_=new us({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Ke(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Nn(n,"connected",!1),n.serverSyncTree_=new us({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);G(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function xi(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function St(n){return Sl({timestamp:xi(n)})}function fs(n,e,t,s,i){n.dataUpdateCount++;const r=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=nt(t,c=>x(c));o=vl(n.serverSyncTree_,r,a,i)}else{const a=x(t);o=gi(n.serverSyncTree_,r,a,i)}else if(s){const a=nt(t,c=>x(c));o=pl(n.serverSyncTree_,r,a)}else{const a=x(t);o=Ke(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Se(n,r)),G(n.eventQueue_,l,o)}function _s(n,e){Nn(n,"connected",e),e===!1&&$l(n)}function Yl(n,e){M(e,(t,s)=>{Nn(n,t,s)})}function Nn(n,e,t){const s=new I("/.info/"+e),i=x(t);n.infoData_.updateSnapshot(s,i);const r=Ke(n.infoSyncTree_,s,i);G(n.eventQueue_,s,r)}function bn(n){return n.nextWriteId_++}function zl(n,e,t){const s=Cl(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=x(i).withIndex(e._queryParams.getIndex());yl(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ke(n.serverSyncTree_,e._path,r);else{const l=He(n.serverSyncTree_,e);o=gi(n.serverSyncTree_,e._path,r,l)}return G(n.eventQueue_,e._path,o),pi(n.serverSyncTree_,e,t,null,!0),r},i=>(Xe(n,"get for query "+P(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ql(n,e,t,s,i){Xe(n,"set",{path:e.toString(),value:t,priority:s});const r=St(n),o=x(t,s),l=pn(n.serverSyncTree_,e),a=Ei(o,l,r),c=bn(n),d=_i(n.serverSyncTree_,e,a,c,!0);Sn(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||L("set at "+e+" failed: "+h);const m=$(n.serverSyncTree_,c,!p);G(n.eventQueue_,e,m),Qt(n,i,h,_)});const u=xn(n,e);Se(n,u),G(n.eventQueue_,u,[])}function Kl(n,e,t,s){Xe(n,"update",{path:e.toString(),value:t});let i=!0;const r=St(n),o={};if(M(t,(l,a)=>{i=!1,o[l]=Ci(N(e,l),x(a),n.serverSyncTree_,r)}),i)D("update() called with empty data.  Don't do anything."),Qt(n,s,"ok",void 0);else{const l=bn(n),a=_l(n.serverSyncTree_,e,o,l);Sn(n.eventQueue_,a),n.server_.merge(e.toString(),t,(c,d)=>{const u=c==="ok";u||L("update at "+e+" failed: "+c);const h=$(n.serverSyncTree_,l,!u),_=h.length>0?Se(n,e):e;G(n.eventQueue_,_,h),Qt(n,s,c,d)}),M(t,c=>{const d=xn(n,N(e,c));Se(n,d)}),G(n.eventQueue_,e,[])}}function $l(n){Xe(n,"onDisconnectEvents");const e=St(n),t=lt();Vt(n.onDisconnect_,w(),(i,r)=>{const o=Ci(i,r,n.serverSyncTree_,e);Zs(t,i,o)});let s=[];Vt(t,w(),(i,r)=>{s=s.concat(Ke(n.serverSyncTree_,i,r));const o=xn(n,i);Se(n,o)}),n.onDisconnect_=lt(),G(n.eventQueue_,w(),s)}function Xl(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ql)}function Xe(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),D(t,...e)}function Qt(n,e,t,s){e&&Ne(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Pi(n,e,t){return pn(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function Rn(n,e=n.transactionQueueTree_){if(e||Nt(n,e),Re(e)){const t=Ai(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Jl(n,$e(e),t)}else Ii(e)&&It(e,t=>{Rn(n,t)})}function Jl(n,e,t){const s=t.map(c=>c.currentWriteId),i=Pi(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=O(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Xe(n,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat($(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Nt(n,In(n.transactionQueueTree_,e)),Rn(n,n.transactionQueueTree_),G(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Ne(u[h])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{L("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Se(n,e)}},o)}function Se(n,e){const t=ki(n,e),s=$e(t),i=Ai(n,t);return Zl(n,i,s),s}function Zl(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=O(t,a.path);let d=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat($(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Hl)d=!0,u="maxretry",i=i.concat($(n.serverSyncTree_,a.currentWriteId,!0));else{const h=Pi(n,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Tt("transaction failed: Data returned ",_,a.path);let p=x(_);typeof _=="object"&&_!=null&&B(_,".priority")||(p=p.updatePriority(h.getPriority()));const E=a.currentWriteId,W=St(n),fe=Ei(p,h,W);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=fe,a.currentWriteId=bn(n),o.splice(o.indexOf(E),1),i=i.concat(_i(n.serverSyncTree_,a.path,fe,a.currentWriteId,a.applyLocally)),i=i.concat($(n.serverSyncTree_,E,!0))}else d=!0,u="nodata",i=i.concat($(n.serverSyncTree_,a.currentWriteId,!0))}G(n.eventQueue_,t,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Nt(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ne(s[l]);Rn(n,n.transactionQueueTree_)}function ki(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&Re(s)===void 0;)s=In(s,t),e=S(e),t=C(e);return s}function Ai(n,e){const t=[];return Di(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Di(n,e,t){const s=Re(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);It(e,i=>{Di(n,i,t)})}function Nt(n,e){const t=Re(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,wi(e,t.length>0?t:void 0)}It(e,s=>{Nt(n,s)})}function xn(n,e){const t=$e(ki(n,e)),s=In(n.transactionQueueTree_,e);return xl(s,i=>{Lt(n,i)}),Lt(n,s),Ti(s,i=>{Lt(n,i)}),t}function Lt(n,e){const t=Re(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat($(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wi(e,void 0):t.length=r+1,G(n.eventQueue_,$e(e),i);for(let o=0;o<s.length;o++)Ne(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ta(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):L(`Invalid query segment '${t}' in query '${n}'`)}return e}const ps=function(n,e){const t=na(n),s=t.namespace;t.domain==="firebase.com"&&Q(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||hr();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Os(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new I(t.pathString)}},na=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=ea(n.substring(d,u)));const h=ta(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sa=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=gs.charAt(t%64),t=Math.floor(t/64);f(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=gs.charAt(e[i]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())}}class ra{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return y(this._path)?null:nn(this._path)}get ref(){return new K(this._repo,this._path)}get _queryIdentifier(){const e=ts(this._queryParams),t=Jt(e);return t==="{}"?"default":t}get _queryObject(){return ts(this._queryParams)}isEqual(e){if(e=he(e),!(e instanceof Pn))return!1;const t=this._repo===e._repo,s=js(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zr(this._path)}}class K extends Pn{constructor(e,t){super(e,t,new ln,!1)}get parent(){const e=Bs(this._path);return e===null?null:new K(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Be{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new I(e),s=ce(this.ref,e);return new Be(this._node.getChild(t),s,b)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Be(i,ce(this.ref,s),b)))}hasChild(e){const t=new I(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function z(n,e){return n=he(n),n._checkNotDeleted("ref"),e!==void 0?ce(n._root,e):n._root}function ce(n,e){return n=he(n),C(n._path)===null?Fl("child","path",e,!1):bi("child","path",e,!1),new K(n._repo,N(n._path,e))}function la(n,e){n=he(n),Ri("push",n._path),Ni("push",e,n._path,!0);const t=xi(n._repo),s=sa(t),i=ce(n,s),r=ce(n,s);let o;return e!=null?o=Mi(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Mi(n,e){n=he(n),Ri("set",n._path),Ni("set",e,n._path,!1);const t=new pt;return Ql(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function kn(n,e){Ll("update",e,n._path,!1);const t=new pt;return Kl(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function bt(n){n=he(n);const e=new oa(()=>{}),t=new An(e);return zl(n._repo,n,t).then(s=>new Be(s,new K(n._repo,n._path),n._queryParams.getIndex()))}class An{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ia("value",this,new Be(e.snapshotNode,new K(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ra(this,e,t):null}matches(e){return e instanceof An?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ol(K);ul(K);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="FIREBASE_DATABASE_EMULATOR_HOST",Kt={};let ca=!1;function ha(n,e,t,s){n.repoInfo_=new Os(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function ua(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ps(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Fn&&(c=Fn[aa]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ps(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new ve(ve.OWNER):new Er(n.name,n.options,e);Wl("Invalid Firebase Database URL",o),y(o.path)||Q("Database URL must point to the root of a Firebase Database (not including a child path).");const u=fa(l,n,d,new Cr(n.name,t));return new _a(u,n)}function da(n,e){const t=Kt[e];(!t||t[n.key]!==n)&&Q(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Xl(n),delete t[n.key]}function fa(n,e,t,s){let i=Kt[e.name];i||(i={},Kt[e.name]=i);let r=i[n.toURLString()];return r&&Q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Bl(n,ca,t,s),i[n.toURLString()]=r,r}class _a{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new K(this._repo,w())),this._rootInternal}_delete(){return this._rootInternal!==null&&(da(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Q("Cannot call "+e+" on a deleted database.")}}function pa(n=qi(),e){const t=Gi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Vi("database");s&&ga(t,...s)}return t}function ga(n,e,t,s={}){n=he(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Q("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Q('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ve(ve.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Hi(s.mockUserToken,n.app.options.projectId);r=new ve(o)}ha(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){rr(nr),Bi(new ji("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ua(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),On(Wn,Un,n),On(Wn,Un,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={".sv":"timestamp"};function ya(){return va}Y.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Y.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ma();const Je=pa(ir),Ca=z(Je),Ea=async(n,e)=>{try{if(!n||!e)throw new Error("Invalid parameters. Please provide id and dataObject.");return await Mi(z(Je,n),e),console.log("realtimeDb createNewFileInDb: data added"),!0}catch(t){return console.error("realtimeDb createNewFileInDb: data not added",t.message),!1}},wa=async(n,e)=>{try{if(!e||!n)throw new Error("Invalid parameter. Please provide id.");const t=await bt(ce(Ca,n+"/"+e));if(t.exists()){const s=t.val();return console.log("realtimeDb getData:",s),s}else return console.error("realtimeDb getData: No data found at the specified location which is: ",n+"/"+e),null}catch(t){return console.error("realtimeDb getData",t.message),null}},Ia=async(n,e,t)=>{try{if(!n||!e||!t&&t!==0)throw new Error("Invalid parameters. Please provide treeKey, path, and dataObject.");const s=Je,i=z(s,n+"/"+e),r=t;if((await bt(i)).exists()){const l={[n+"/"+e]:r};return await kn(z(s),l),console.log("realtimeDb updateData: data updated"),!0}else return console.error("realtimeDB updateData: Data not found at "+n+"/"+e),!1}catch(s){return console.error("realtimeDb updateData: data not updated",s.message),!1}},Ta=async(n,e,t,s=null)=>{try{if(!n||!e||!t&&t!==0)throw new Error("Invalid parameters. Please provide treeKey, path, and dataObject.");const i=Je,r=t;if(s!==null&&typeof s!="string")throw new Error("Invalid newKey. It must be a string or null.");s=s===null?la(ce(z(i),n+"/"+e)).key:s;const o=z(i,n+"/"+e);if((await bt(o)).exists()){const a={[n+"/"+e+"/"+s]:r};return await kn(z(i),a),console.log("realtimeDb addData: data added"),s}else return console.error("realtimeDB addData: Data not found at "+n+"/"+e),!1}catch(i){return console.error("realtimeDb addData: data not added",i.message),!1}},Sa=async(n,e=null)=>{try{if(!n)throw new Error("Invalid parameters. Please provide id.");const t=Je,s=z(t,e?`${n}/${e}`:n);return(await bt(s)).exists()?(await kn(z(t),{[e?`${n}/${e}`:n]:null}),console.log("realtimeDB deleteData: Data deleted"),!0):(console.error("realtimeDB deleteData: Data not found at "+e?`${n}/${e}`:n),!1)}catch(t){return console.error("realtimeDB deleteData: Data not deleted",t.message),!1}},Na=()=>{const[n,e]=Ze.useState(null),[t,s]=Ze.useState(!1),[i,r]=Ze.useState(!0),o={latitude:30.119475,longitude:31.307701},l=100,a=(h,_)=>{if(typeof h!="number"||isNaN(h)||h<-180||h>180)throw new Error(`${_} should be a number between -180 and 180 degrees.`)},c=async()=>{try{if("geolocation"in navigator)return new Promise((h,_)=>{navigator.geolocation.getCurrentPosition(p=>{const{latitude:m,longitude:E,accuracy:W}=p.coords;h([m,E,W])},p=>{console.error("getGPSBasedLocation Error getting geolocation:",p.message),_(new Error("Geolocation failed"))},{enableHighAccuracy:!0})});throw console.error("getGPSBasedLocation Geolocation is not supported by your browser"),new Error("Geolocation not supported")}catch(h){throw console.error("Error getting GPS-based location:",h.message),h}},d=async()=>{try{const _=await(await fetch("https://ipapi.co/json/")).json();return console.log("getIpBasedLocation data:",_),[_.latitude,_.longitude]}catch(h){throw console.error("Error getting IP-based location:",h.message),h}},u=(h,_,p,m)=>{if(a(h,"latitude1"),a(_,"longitude1"),a(p,"latitude2"),a(m,"longitude2"),h===p&&_===m)return 0;const E=6371e3,W=h*Math.PI/180,fe=_*Math.PI/180,_e=p*Math.PI/180,xt=m*Math.PI/180,Fi=_e-W,Wi=xt-fe,Mn=Math.sin(Fi/2)**2+Math.cos(W)*Math.cos(_e)*Math.sin(Wi/2)**2,Ui=2*Math.atan2(Math.sqrt(Mn),Math.sqrt(1-Mn));return E*Ui};return Ze.useEffect(()=>{(async()=>{try{const[_,p,m]=await c();if(_!==null&&p!==null&&m!==null){e({latitude:_,longitude:p});const E=u(_,p,o.latitude,o.longitude);console.log(E),s(E<=l+m)}}catch(_){console.error("Error getting location:",_.message);try{const[p,m]=await d();if(p!==null&&m!==null){e({latitude:p,longitude:m});const E=u(p,m,o.latitude,o.longitude);console.log(E),s(E<=l)}}catch(p){console.error("Error getting IP-based location:",p.message)}}finally{r(!1)}})()},[]),R.jsx("div",{children:i?R.jsx("p",{children:"Loading..."}):n?R.jsxs("div",{children:[R.jsxs("p",{children:["Your current location is: ",n.latitude,", ",n.longitude]}),t?R.jsx("p",{className:"text-green-500",children:"You are in the specific area!"}):R.jsx("p",{className:"text-red-500",children:"You are not in the specific area."}),R.jsxs("div",{children:["default: latitude: ",o.latitude,", longitude:"," ",o.longitude,", radius: 100"]})]}):R.jsx("p",{children:"Failed to fetch location. Please enable location services."})})},ba=Na;var Dn={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.cyrb53=Z.javaHashCode=Z.murmurhash3_32_gc=void 0;function Ra(n,e){var t,s,i,r,o,l,a,c;for(t=n.length&3,s=n.length-t,i=e,o=3432918353,l=461845907,c=0;c<s;)a=n.charCodeAt(c)&255|(n.charCodeAt(++c)&255)<<8|(n.charCodeAt(++c)&255)<<16|(n.charCodeAt(++c)&255)<<24,++c,a=(a&65535)*o+(((a>>>16)*o&65535)<<16)&4294967295,a=a<<15|a>>>17,a=(a&65535)*l+(((a>>>16)*l&65535)<<16)&4294967295,i^=a,i=i<<13|i>>>19,r=(i&65535)*5+(((i>>>16)*5&65535)<<16)&4294967295,i=(r&65535)+27492+(((r>>>16)+58964&65535)<<16);switch(a=0,t){case 3:a^=(n.charCodeAt(c+2)&255)<<16;break;case 2:a^=(n.charCodeAt(c+1)&255)<<8;break;case 1:a^=n.charCodeAt(c)&255,a=(a&65535)*o+(((a>>>16)*o&65535)<<16)&4294967295,a=a<<15|a>>>17,a=(a&65535)*l+(((a>>>16)*l&65535)<<16)&4294967295,i^=a;break;default:return 0}return i^=n.length,i^=i>>>16,i=(i&65535)*2246822507+(((i>>>16)*2246822507&65535)<<16)&4294967295,i^=i>>>13,i=(i&65535)*3266489909+(((i>>>16)*3266489909&65535)<<16)&4294967295,i^=i>>>16,i>>>0}Z.murmurhash3_32_gc=Ra;const xa=(n,e)=>{var t=0;if(n.length===0)return t;let s;for(var i=0;i<n.length;i++)s=n.charCodeAt(i),t=e*((t<<5)-t)+s,t=t&t;return t};Z.javaHashCode=xa;const Pa=function(n,e=0){let t=3735928559^e,s=1103547991^e;for(let i=0,r;i<n.length;i++)r=n.charCodeAt(i),t=Math.imul(t^r,2654435761),s=Math.imul(s^r,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&s)+(t>>>0)};Z.cyrb53=Pa;var Oi={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCanvasFingerprint=n.isCanvasSupported=void 0;const e=()=>{var s=document.createElement("canvas");return!!(s.getContext&&s.getContext("2d"))};n.isCanvasSupported=e;const t=()=>{if(!(0,n.isCanvasSupported)())return"broprint.js";var s=document.createElement("canvas"),i=s.getContext("2d"),r="BroPrint.65@345876";return i.textBaseline="top",i.font="14px 'Arial'",i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",i.fillText(r,2,15),i.fillStyle="rgba(102, 204, 0, 0.7)",i.fillText(r,4,17),s.toDataURL()};n.getCanvasFingerprint=t})(Oi);var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.generateTheAudioFingerPrint=void 0;Rt.generateTheAudioFingerPrint=function(){var n=null,e=null,t=null,s=null,i=null,r=null;function o(p,m=!1){r=p;try{l(),t.connect(s),s.connect(n.destination),t.start(0),n.startRendering(),n.oncomplete=h}catch(E){if(m)throw E}}function l(){a(),e=n.currentTime,c(),d()}function a(){var p=window.OfflineAudioContext||window.webkitOfflineAudioContext;n=new p(1,44100,44100)}function c(){t=n.createOscillator(),t.type="triangle",t.frequency.setValueAtTime(1e4,e)}function d(){s=n.createDynamicsCompressor(),u("threshold",-50),u("knee",40),u("ratio",12),u("reduction",-20),u("attack",0),u("release",.25)}function u(p,m){s[p]!==void 0&&typeof s[p].setValueAtTime=="function"&&s[p].setValueAtTime(m,n.currentTime)}function h(p){_(p),s.disconnect()}function _(p){for(var m=null,E=4500;5e3>E;E++){var W=p.renderedBuffer.getChannelData(0)[E];m+=Math.abs(W)}if(i=m.toString(),typeof r=="function")return r(i)}return{run:o}}();Object.defineProperty(Dn,"__esModule",{value:!0});var Li=Dn.getCurrentBrowserFingerPrint=void 0;const ms=Z,vs=Oi,ka=Rt,Aa=()=>{const n=new Promise((t,s)=>{ka.generateTheAudioFingerPrint.run(function(i){t(i)})});return new Promise((t,s)=>{n.then(i=>{let r=window.btoa(i)+(0,vs.getCanvasFingerprint)();t((0,ms.cyrb53)(r,0))}).catch(()=>{try{t((0,ms.cyrb53)((0,vs.getCanvasFingerprint)()).toString())}catch{s("Failed to generate the finger print of this browser")}})})};Li=Dn.getCurrentBrowserFingerPrint=Aa;function La(){return Li().then(n=>{}),R.jsxs("div",{className:"w-full h-full text-text-100 px-4 py-2 bg-background-100 text-2xl",children:[R.jsx(ba,{}),R.jsx("br",{}),R.jsx("button",{onClick:()=>{Ea("users",{agents:{leo:"leo",mike:"mike",john:"john",jane:"jane"}})},children:"set data to realtimeDb"}),R.jsx("br",{}),R.jsx("button",{onClick:()=>wa("users","agents/walid"),children:"get data"}),R.jsx("br",{}),R.jsx("br",{}),R.jsx("button",{onClick:()=>Ta("users","agents",{timestampTest:ya()},"leo"),children:"Add data"}),R.jsx("br",{}),R.jsx("button",{onClick:()=>Ia("users","agents/leo","leo adams"),children:"update data"}),R.jsx("br",{}),R.jsx("button",{onClick:()=>Sa("users/agents/leo"),children:"delete data"})]})}export{La as default};
