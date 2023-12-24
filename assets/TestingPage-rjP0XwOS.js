import{r as xn,j as M}from"./index-MVXd8x__.js";import{a as f,g as ae,D as dt,_ as xi,b as ki,c as Pi,d as Ai,e as Di,C as Mi,r as kn,s as b,j as jt,f as H,h as Oi,S as Li,i as Fi,k as me,m as Ze,l as ft,n as _t,L as Wi,o as qe,p as Ui,q as ds,t as Gi,u as Vi,v as Pn,w as fs,x as qi,y as Hi,z as Bi,A as Yi,B as ji,E as zi}from"./firebase-w5wVbqtu.js";var An={};const Dn="@firebase/database",Mn="1.0.2";/**
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
 */let _s="";function Qi(n){_s=n}/**
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
 */class Ki{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),b(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:jt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $i{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return H(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ps=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ki(e)}}catch{}return new $i},ne=ps("localStorage"),Dt=ps("sessionStorage");/**
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
 */const _e=new Wi("@firebase/database"),Xi=function(){let n=1;return function(){return n++}}(),gs=function(n){const e=Oi(n),t=new Li;t.update(e);const s=t.digest();return Fi.encodeByteArray(s)},He=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=He.apply(null,s):typeof s=="object"?e+=b(s):e+=s,e+=" "}return e};let se=null,On=!0;const Ji=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(_e.logLevel=Ui.VERBOSE,se=_e.log.bind(_e),e&&Dt.set("logging_enabled",!0)):typeof n=="function"?se=n:(se=null,Dt.remove("logging_enabled"))},P=function(...n){if(On===!0&&(On=!1,se===null&&Dt.get("logging_enabled")===!0&&Ji(!0)),se){const e=He.apply(null,n);se(e)}},Be=function(n){return function(...e){P(n,...e)}},Mt=function(...n){const e="FIREBASE INTERNAL ERROR: "+He(...n);_e.error(e)},z=function(...n){const e=`FIREBASE FATAL ERROR: ${He(...n)}`;throw _e.error(e),new Error(e)},L=function(...n){const e="FIREBASE WARNING: "+He(...n);_e.warn(e)},Zi=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zt=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},er=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ye="[MIN_NAME]",ie="[MAX_NAME]",ce=function(n,e){if(n===e)return 0;if(n===ye||e===ie)return-1;if(e===ye||n===ie)return 1;{const t=Ln(n),s=Ln(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},tr=function(n,e){return n===e?0:n<e?-1:1},Ne=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+b(e))},Qt=function(n){if(typeof n!="object"||n===null)return b(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=b(e[s]),t+=":",t+=Qt(n[e[s]]);return t+="}",t},ms=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function A(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ys=function(n){f(!zt(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},nr=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sr=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ir(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const rr=new RegExp("^-?(0*)\\d{1,10}$"),or=-2147483648,lr=2147483647,Ln=function(n){if(rr.test(n)){const e=Number(n);if(e>=or&&e<=lr)return e}return null},Ie=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw L("Exception was thrown by user callback.",t),e},Math.floor(0))}},ar=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ke=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class cr{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){L(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hr{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(P("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(e)}}class pe{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pe.OWNER="owner";/**
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
 */const Kt="5",vs="v",Cs="s",Es="r",ws="f",Is=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ts="ls",Ss="p",Ot="ac",Ns="websocket",Rs="long_polling";/**
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
 */class bs{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ne.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ne.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ur(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xs(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Ns)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Rs)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ur(n)&&(t.ns=n.namespace);const i=[];return A(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class dr{constructor(){this.counters_={}}incrementCounter(e,t=1){H(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bi(this.counters_)}}/**
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
 */const Nt={},Rt={};function $t(n){const e=n.toString();return Nt[e]||(Nt[e]=new dr),Nt[e]}function fr(n,e){const t=n.toString();return Rt[t]||(Rt[t]=e()),Rt[t]}/**
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
 */class _r{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ie(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fn="start",pr="close",gr="pLPCommand",mr="pRTLPCB",ks="id",Ps="pw",As="ser",yr="cb",vr="seg",Cr="ts",Er="d",wr="dframe",Ds=1870,Ms=30,Ir=Ds-Ms,Tr=25e3,Sr=3e4;class fe{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Be(e),this.stats_=$t(t),this.urlFn=a=>(this.appCheckToken&&(a[Ot]=this.appCheckToken),xs(t,Rs,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _r(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sr)),er(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xt((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fn)this.id=l,this.password=a;else if(o===pr)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fn]="t",s[As]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yr]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vs]=Kt,this.transportSessionId&&(s[Cs]=this.transportSessionId),this.lastSessionId&&(s[Ts]=this.lastSessionId),this.applicationId&&(s[Ss]=this.applicationId),this.appCheckToken&&(s[Ot]=this.appCheckToken),typeof location<"u"&&location.hostname&&Is.test(location.hostname)&&(s[Es]=ws);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fe.forceAllow_=!0}static forceDisallow(){fe.forceDisallow_=!0}static isAvailable(){return fe.forceAllow_?!0:!fe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nr()&&!sr()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=b(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ji(t),i=ms(s,Ir);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[wr]="t",s[ks]=e,s[Ps]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=b(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xt{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xi(),window[gr+this.uniqueCallbackIdentifier]=e,window[mr+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xt.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){P("frame writing exception"),l.stack&&P(l.stack),P(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||P("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ks]=this.myID,e[Ps]=this.myPW,e[As]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ms+s.length<=Ds;){const o=this.pendingSegs.shift();s=s+"&"+vr+i+"="+o.seg+"&"+Cr+i+"="+o.ts+"&"+Er+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Tr)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{P("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Nr=16384,Rr=45e3;let et=null;typeof MozWebSocket<"u"?et=MozWebSocket:typeof WebSocket<"u"&&(et=WebSocket);class G{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Be(this.connId),this.stats_=$t(t),this.connURL=G.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[vs]=Kt,typeof location<"u"&&location.hostname&&Is.test(location.hostname)&&(o[Es]=ws),t&&(o[Cs]=t),s&&(o[Ts]=s),i&&(o[Ot]=i),r&&(o[Ss]=r),xs(e,Ns,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ne.set("previous_websocket_failure",!0);try{let s;ds(),this.mySock=new et(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){G.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&et!==null&&!G.forceDisallow_}static previouslyFailed(){return ne.isInMemoryStorage||ne.get("previous_websocket_failure")===!0}markConnectionHealthy(){ne.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=jt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=b(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ms(t,Nr);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rr))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}G.responsesRequiredToBeHealthy=2;G.healthyTimeout=3e4;/**
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
 */class Me{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fe,G]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=G&&G.isAvailable();let s=t&&!G.previouslyFailed();if(e.webSocketOnly&&(t||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[G];else{const i=this.transports_=[];for(const r of Me.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Me.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Me.globalTransportInitialized_=!1;/**
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
 */const br=6e4,xr=5e3,kr=10*1024,Pr=100*1024,bt="t",Wn="d",Ar="s",Un="r",Dr="e",Gn="o",Vn="a",qn="n",Hn="p",Mr="h";class Or{constructor(e,t,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Be("c:"+this.id+":"),this.transportManager_=new Me(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ke(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pr?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bt in e){const t=e[bt];t===Vn?this.upgradeIfSecondaryHealthy_():t===Un?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ne("t",e),s=Ne("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qn,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ne("t",e),s=Ne("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ne(bt,e);if(Wn in e){const s=e[Wn];if(t===Mr){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===qn){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ar?this.onConnectionShutdown_(s):t===Un?this.onReset_(s):t===Dr?Mt("Server Error: "+s):t===Gn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Kt!==s&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ke(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(br))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ke(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xr))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ne.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Os{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ls{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class tt extends Ls{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tt}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bn=32,Yn=768;class E{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new E("")}function v(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function J(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new E(n.pieces_,e)}function Jt(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lr(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Oe(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Fs(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new E(e,0)}function S(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof E)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new E(t,0)}function y(n){return n.pieceNum_>=n.pieces_.length}function O(n,e){const t=v(n),s=v(e);if(t===null)return e;if(t===s)return O(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Fr(n,e){const t=Oe(n,0),s=Oe(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=ce(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Ws(n,e){if(J(n)!==J(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function W(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(J(n)>J(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Wr{constructor(e,t){this.errorPrefix_=t,this.parts_=Oe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ft(this.parts_[s]);Us(this)}}function Ur(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ft(e),Us(n)}function Gr(n){const e=n.parts_.pop();n.byteLength_-=ft(e),n.parts_.length>0&&(n.byteLength_-=1)}function Us(n){if(n.byteLength_>Yn)throw new Error(n.errorPrefix_+"has a key path longer than "+Yn+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bn+") or object contains a cycle "+te(n))}function te(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Zt extends Ls{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Zt}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Re=1e3,Vr=60*5*1e3,jn=30*1e3,qr=1.3,Hr=3e4,Br="server_kill",zn=3;class Y extends Os{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Y.nextPersistentConnectionId_++,this.log_=Be("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Re,this.maxReconnectDelay_=Vr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ds())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zt.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(b(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new dt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Y.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&H(e,"w")){const s=me(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();L(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Vi(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+b(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Mt("Unrecognized action received from server: "+b(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hr&&(this.reconnectDelay_=Re),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Y.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?P("getToken() completed but was canceled"):(P("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new Or(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{L(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Br)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&L(u),a())}}}interrupt(e){P("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){P("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pn(this.interruptReasons_)&&(this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Qt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new E(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){P("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zn&&(this.reconnectDelay_=jn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){P("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+_s.replace(/\./g,"-")]=1,fs()?e["framework.cordova"]=1:qi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tt.getInstance().currentlyOnline();return Pn(this.interruptReasons_)&&e}}Y.nextPersistentConnectionId_=0;Y.nextConnectionId_=0;/**
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
 */class m{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new m(e,t)}}/**
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
 */class pt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new m(ye,e),i=new m(ye,t);return this.compare(s,i)!==0}minPost(){return m.MIN}}/**
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
 */let Xe;class Gs extends pt{static get __EMPTY_NODE(){return Xe}static set __EMPTY_NODE(e){Xe=e}compare(e,t){return ce(e.name,t.name)}isDefinedOn(e){throw qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return m.MIN}maxPost(){return new m(ie,Xe)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new m(e,Xe)}toString(){return".key"}}const ge=new Gs;/**
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
 */class Je{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class k{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??k.RED,this.left=i??F.EMPTY_NODE,this.right=r??F.EMPTY_NODE}copy(e,t,s,i,r){return new k(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return F.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return F.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}k.RED=!0;k.BLACK=!1;class Yr{copy(e,t,s,i,r){return this}insert(e,t,s){return new k(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class F{constructor(e,t=F.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new F(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,k.BLACK,null,null))}remove(e){return new F(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,k.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Je(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Je(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Je(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Je(this.root_,null,this.comparator_,!0,e)}}F.EMPTY_NODE=new Yr;/**
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
 */function jr(n,e){return ce(n.name,e.name)}function en(n,e){return ce(n,e)}/**
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
 */let Lt;function zr(n){Lt=n}const Vs=function(n){return typeof n=="number"?"number:"+ys(n):"string:"+n},qs=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&H(e,".sv"),"Priority must be a string or number.")}else f(n===Lt||n.isEmpty(),"priority of unexpected type.");f(n===Lt||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qn;class x{constructor(e,t=x.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qs(this.priorityNode_)}static set __childrenNodeConstructor(e){Qn=e}static get __childrenNodeConstructor(){return Qn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new x(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:v(e)===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:x.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=v(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||J(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,x.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ys(this.value_):e+=this.value_,this.lazyHash_=gs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===x.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof x.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=x.VALUE_TYPE_ORDER.indexOf(t),r=x.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}x.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hs,Bs;function Qr(n){Hs=n}function Kr(n){Bs=n}class $r extends pt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ce(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return m.MIN}maxPost(){return new m(ie,new x("[PRIORITY-POST]",Bs))}makePost(e,t){const s=Hs(e);return new m(t,new x("[PRIORITY-POST]",s))}toString(){return".priority"}}const N=new $r;/**
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
 */const Xr=Math.log(2);class Jr{constructor(e){const t=r=>parseInt(Math.log(r)/Xr,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nt=function(n,e,t,s){n.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=n[a],d=t?t(u):u,new k(d,u.node,k.BLACK,null,null);{const _=parseInt(h/2,10)+a,p=i(a,_),w=i(_+1,c);return u=n[_],d=t?t(u):u,new k(d,u.node,k.BLACK,p,w)}},r=function(a){let c=null,h=null,u=n.length;const d=function(p,w){const D=u-p,ue=u;u-=p;const $e=i(D+1,ue),St=n[D],bi=t?t(St):St;_(new k(bi,St.node,w,null,$e))},_=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<a.count;++p){const w=a.nextBitIsOne(),D=Math.pow(2,a.count-(p+1));w?d(D,k.BLACK):(d(D,k.BLACK),d(D,k.RED))}return h},o=new Jr(n.length),l=r(o);return new F(s||e,l)};/**
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
 */let xt;const de={};class B{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(de&&N,"ChildrenNode.ts has not been loaded"),xt=xt||new B({".priority":de},{".priority":N}),xt}get(e){const t=me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof F?t:null}hasIndex(e){return H(this.indexSet_,e.toString())}addIndex(e,t){f(e!==ge,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(m.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=nt(s,e.getCompare()):l=de;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new B(h,c)}addToIndexes(e,t){const s=Ze(this.indexes_,(i,r)=>{const o=me(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===de)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(m.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),nt(l,o.getCompare())}else return de;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new m(e.name,l))),a.insert(e,e.node)}});return new B(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ze(this.indexes_,i=>{if(i===de)return i;{const r=t.get(e.name);return r?i.remove(new m(e.name,r)):i}});return new B(s,this.indexSet_)}}/**
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
 */let be;class g{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qs(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return be||(be=new g(new F(en),null,B.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||be}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?be:t}}getChild(e){const t=v(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new m(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?be:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=v(e);if(s===null)return t;{f(v(e)!==".priority"||J(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(N,(o,l)=>{t[o]=l.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vs(this.getPriority().val())+":"),this.forEachChild(N,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":gs(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new m(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new m(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new m(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,m.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,m.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ye?-1:0}withIndex(e){if(e===ge||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ge||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(N),i=t.getIterator(N);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ge?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zr extends g{constructor(){super(new F(en),g.EMPTY_NODE,B.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Ye=new Zr;Object.defineProperties(m,{MIN:{value:new m(ye,g.EMPTY_NODE)},MAX:{value:new m(ie,Ye)}});Gs.__EMPTY_NODE=g.EMPTY_NODE;x.__childrenNodeConstructor=g;zr(Ye);Kr(Ye);/**
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
 */const eo=!0;function R(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new x(t,R(e))}if(!(n instanceof Array)&&eo){const t=[];let s=!1;if(A(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=R(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new m(o,a)))}}),t.length===0)return g.EMPTY_NODE;const r=nt(t,jr,o=>o.name,en);if(s){const o=nt(t,N.getCompare());return new g(r,R(e),new B({".priority":o},{".priority":N}))}else return new g(r,R(e),B.Default)}else{let t=g.EMPTY_NODE;return A(n,(s,i)=>{if(H(n,s)&&s.substring(0,1)!=="."){const r=R(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(R(e))}}Qr(R);/**
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
 */class to extends pt{constructor(e){super(),this.indexPath_=e,f(!y(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ce(e.name,t.name):r}makePost(e,t){const s=R(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new m(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Ye);return new m(ie,e)}toString(){return Oe(this.indexPath_,0).join("/")}}/**
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
 */class no extends pt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ce(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return m.MIN}maxPost(){return m.MAX}makePost(e,t){const s=R(e);return new m(t,s)}toString(){return".value"}}const so=new no;/**
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
 */function Ys(n){return{type:"value",snapshotNode:n}}function ve(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Le(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fe(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function io(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class tn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Le(t,l)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ve(t,s)):o.trackChildChange(Fe(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(N,(i,r)=>{t.hasChild(i)||s.trackChildChange(Le(i,r))}),t.isLeafNode()||t.forEachChild(N,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fe(i,r,o))}else s.trackChildChange(ve(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class We{constructor(e){this.indexedFilter_=new tn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=We.getStartPost_(e),this.endPost_=We.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new m(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(N,(o,l)=>{r.matches(new m(o,l))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ro{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new We(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new m(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const l=e;f(l.numChildren()===this.limit_,"");const a=new m(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(t)){const u=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Fe(t,s,u)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Le(t,u));const w=l.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ve(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Le(c.name,c.node)),r.trackChildChange(ve(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
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
 */class nn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=N}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ye}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ie}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===N}copy(){const e=new nn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oo(n){return n.loadsAllData()?new tn(n.getIndex()):n.hasLimit()?new ro(n):new We(n)}function Kn(n){const e={};if(n.isDefault())return e;let t;if(n.index_===N?t="$priority":n.index_===so?t="$value":n.index_===ge?t="$key":(f(n.index_ instanceof to,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=b(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=b(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+b(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=b(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+b(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $n(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==N&&(e.i=n.index_.toString()),e}/**
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
 */class st extends Os{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Be("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=st.getListenId_(e,s),l={};this.listens_[o]=l;const a=Kn(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),me(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=st.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Kn(e._queryParams),s=e._path.toString(),i=new dt;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=jt(l.responseText)}catch{L("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&L("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class lo{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function it(){return{value:null,children:new Map}}function js(n,e,t){if(y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=v(e);n.children.has(s)||n.children.set(s,it());const i=n.children.get(s);e=T(e),js(i,e,t)}}function Ft(n,e,t){n.value!==null?t(e,n.value):ao(n,(s,i)=>{const r=new E(e.toString()+"/"+s);Ft(i,r,t)})}function ao(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class co{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&A(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Xn=10*1e3,ho=30*1e3,uo=5*60*1e3;class fo{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new co(e);const s=Xn+(ho-Xn)*Math.random();ke(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;A(e,(i,r)=>{r>0&&H(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),ke(this.reportStats_.bind(this),Math.floor(Math.random()*2*uo))}}/**
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
 */var V;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(V||(V={}));function sn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function on(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class rt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=V.ACK_USER_WRITE,this.source=sn()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new E(e));return new rt(C(),t,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new rt(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ue{constructor(e,t){this.source=e,this.path=t,this.type=V.LISTEN_COMPLETE}operationForChild(e){return y(this.path)?new Ue(this.source,C()):new Ue(this.source,T(this.path))}}/**
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
 */class re{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=V.OVERWRITE}operationForChild(e){return y(this.path)?new re(this.source,C(),this.snap.getImmediateChild(e)):new re(this.source,T(this.path),this.snap)}}/**
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
 */class Ce{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=V.MERGE}operationForChild(e){if(y(this.path)){const t=this.children.subtree(new E(e));return t.isEmpty()?null:t.value?new re(this.source,C(),t.value):new Ce(this.source,C(),t)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ce(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Z{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const t=v(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _o{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function po(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(io(o.childName,o.snapshotNode))}),xe(n,i,"child_removed",e,s,t),xe(n,i,"child_added",e,s,t),xe(n,i,"child_moved",r,s,t),xe(n,i,"child_changed",e,s,t),xe(n,i,"value",e,s,t),i}function xe(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>mo(n,l,a)),o.forEach(l=>{const a=go(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function go(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function mo(n,e,t){if(e.childName==null||t.childName==null)throw qe("Should only compare child_ events.");const s=new m(e.childName,e.snapshotNode),i=new m(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function gt(n,e){return{eventCache:n,serverCache:e}}function Pe(n,e,t,s){return gt(new Z(e,t,s),n.serverCache)}function zs(n,e,t,s){return gt(n.eventCache,new Z(e,t,s))}function ot(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function oe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let kt;const yo=()=>(kt||(kt=new F(tr)),kt);class I{constructor(e,t=yo()){this.value=e,this.children=t}static fromObject(e){let t=new I(null);return A(e,(s,i)=>{t=t.set(new E(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(y(e))return null;{const s=v(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:S(new E(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const t=v(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new I(null)}}set(e,t){if(y(e))return new I(t,this.children);{const s=v(e),r=(this.children.get(s)||new I(null)).set(T(e),t),o=this.children.insert(s,r);return new I(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new I(null):new I(null,this.children);{const t=v(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new I(null):new I(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const t=v(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(y(e))return t;{const s=v(e),r=(this.children.get(s)||new I(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new I(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(S(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(y(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(T(e),S(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(y(e))return this;{this.value&&s(t,this.value);const i=v(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),S(t,i),s):new I(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(S(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class q{constructor(e){this.writeTree_=e}static empty(){return new q(new I(null))}}function Ae(n,e,t){if(y(e))return new q(new I(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=O(i,e);return r=r.updateChild(o,t),new q(n.writeTree_.set(i,r))}else{const i=new I(t),r=n.writeTree_.setTree(e,i);return new q(r)}}}function Wt(n,e,t){let s=n;return A(t,(i,r)=>{s=Ae(s,S(e,i),r)}),s}function Jn(n,e){if(y(e))return q.empty();{const t=n.writeTree_.setTree(e,new I(null));return new q(t)}}function Ut(n,e){return he(n,e)!=null}function he(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(O(t.path,e)):null}function Zn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(N,(s,i)=>{e.push(new m(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new m(s,i.value))}),e}function $(n,e){if(y(e))return n;{const t=he(n,e);return t!=null?new q(new I(t)):new q(n.writeTree_.subtree(e))}}function Gt(n){return n.writeTree_.isEmpty()}function Ee(n,e){return Qs(C(),n.writeTree_,e)}function Qs(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Qs(S(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(S(n,".priority"),s)),t}}/**
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
 */function mt(n,e){return Js(e,n)}function vo(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ae(n.visibleWrites,e,t)),n.lastWriteId=s}function Co(n,e,t,s){f(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Wt(n.visibleWrites,e,t),n.lastWriteId=s}function Eo(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wo(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Io(l,s.path)?i=!1:W(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return To(n),!0;if(s.snap)n.visibleWrites=Jn(n.visibleWrites,s.path);else{const l=s.children;A(l,a=>{n.visibleWrites=Jn(n.visibleWrites,S(s.path,a))})}return!0}else return!1}function Io(n,e){if(n.snap)return W(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&W(S(n.path,t),e))return!0;return!1}function To(n){n.visibleWrites=Ks(n.allWrites,So,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function So(n){return n.visible}function Ks(n,e,t){let s=q.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)W(t,o)?(l=O(t,o),s=Ae(s,l,r.snap)):W(o,t)&&(l=O(o,t),s=Ae(s,C(),r.snap.getChild(l)));else if(r.children){if(W(t,o))l=O(t,o),s=Wt(s,l,r.children);else if(W(o,t))if(l=O(o,t),y(l))s=Wt(s,C(),r.children);else{const a=me(r.children,v(l));if(a){const c=a.getChild(T(l));s=Ae(s,C(),c)}}}else throw qe("WriteRecord should have .snap or .children")}}return s}function $s(n,e,t,s,i){if(!s&&!i){const r=he(n.visibleWrites,e);if(r!=null)return r;{const o=$(n.visibleWrites,e);if(Gt(o))return t;if(t==null&&!Ut(o,C()))return null;{const l=t||g.EMPTY_NODE;return Ee(o,l)}}}else{const r=$(n.visibleWrites,e);if(!i&&Gt(r))return t;if(!i&&t==null&&!Ut(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(W(c.path,e)||W(e,c.path))},l=Ks(n.allWrites,o,e),a=t||g.EMPTY_NODE;return Ee(l,a)}}}function No(n,e,t){let s=g.EMPTY_NODE;const i=he(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(N,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=$(n.visibleWrites,e);return t.forEachChild(N,(o,l)=>{const a=Ee($(r,new E(o)),l);s=s.updateImmediateChild(o,a)}),Zn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$(n.visibleWrites,e);return Zn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ro(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=S(e,t);if(Ut(n.visibleWrites,r))return null;{const o=$(n.visibleWrites,r);return Gt(o)?i.getChild(t):Ee(o,i.getChild(t))}}function bo(n,e,t,s){const i=S(e,t),r=he(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=$(n.visibleWrites,i);return Ee(o,s.getNode().getImmediateChild(t))}else return null}function xo(n,e){return he(n.visibleWrites,e)}function ko(n,e,t,s,i,r,o){let l;const a=$(n.visibleWrites,e),c=he(a,C());if(c!=null)l=c;else if(t!=null)l=Ee(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=d.getNext();return h}else return[]}function Po(){return{visibleWrites:q.empty(),allWrites:[],lastWriteId:-1}}function lt(n,e,t,s){return $s(n.writeTree,n.treePath,e,t,s)}function ln(n,e){return No(n.writeTree,n.treePath,e)}function es(n,e,t,s){return Ro(n.writeTree,n.treePath,e,t,s)}function at(n,e){return xo(n.writeTree,S(n.treePath,e))}function Ao(n,e,t,s,i,r){return ko(n.writeTree,n.treePath,e,t,s,i,r)}function an(n,e,t){return bo(n.writeTree,n.treePath,e,t)}function Xs(n,e){return Js(S(n.treePath,e),n.writeTree)}function Js(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Do{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Fe(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Le(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ve(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fe(s,e.snapshotNode,i.oldSnap));else throw qe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mo{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Zs=new Mo;class cn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Z(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return an(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:oe(this.viewCache_),r=Ao(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Oo(n){return{filter:n}}function Lo(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Fo(n,e,t,s,i){const r=new Do;let o,l;if(t.type===V.OVERWRITE){const c=t;c.source.fromUser?o=Vt(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!y(c.path),o=ct(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===V.MERGE){const c=t;c.source.fromUser?o=Uo(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=qt(n,e,c.path,c.children,s,i,l,r))}else if(t.type===V.ACK_USER_WRITE){const c=t;c.revert?o=qo(n,e,c.path,s,i,r):o=Go(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===V.LISTEN_COMPLETE)o=Vo(n,e,t.path,s,r);else throw qe("Unknown operation type: "+t.type);const a=r.getChanges();return Wo(e,o,a),{viewCache:o,changes:a}}function Wo(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ot(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ys(ot(e)))}}function ei(n,e,t,s,i,r){const o=e.eventCache;if(at(s,t)!=null)return e;{let l,a;if(y(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=oe(e),h=c instanceof g?c:g.EMPTY_NODE,u=ln(s,h);l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=lt(s,oe(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=v(t);if(c===".priority"){f(J(t)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=es(s,t,h,a);u!=null?l=n.filter.updatePriority(h,u):l=o.getNode()}else{const h=T(t);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=es(s,t,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=an(s,c,e.serverCache);u!=null?l=n.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Pe(e,l,o.isFullyInitialized()||y(t),n.filter.filtersNodes())}}function ct(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(y(t))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=v(t);if(!a.isCompleteForPath(t)&&J(t)>1)return e;const p=T(t),D=a.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=h.updatePriority(a.getNode(),D):c=h.updateChild(a.getNode(),_,D,p,Zs,null)}const u=zs(e,c,a.isFullyInitialized()||y(t),h.filtersNodes()),d=new cn(i,u,r);return ei(n,u,t,i,d,l)}function Vt(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const h=new cn(i,e,r);if(y(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Pe(e,c,!0,n.filter.filtersNodes());else{const u=v(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Pe(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=T(t),_=l.getNode().getImmediateChild(u);let p;if(y(d))p=s;else{const w=h.getCompleteChild(u);w!=null?Jt(d)===".priority"&&w.getChild(Fs(d)).isEmpty()?p=w:p=w.updateChild(d,s):p=g.EMPTY_NODE}if(_.equals(p))a=e;else{const w=n.filter.updateChild(l.getNode(),u,p,d,h,o);a=Pe(e,w,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function ts(n,e){return n.eventCache.isCompleteForChild(e)}function Uo(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=S(t,a);ts(e,v(h))&&(l=Vt(n,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=S(t,a);ts(e,v(h))||(l=Vt(n,l,h,c,i,r,o))}),l}function ns(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function qt(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;y(t)?c=s:c=new I(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=ns(n,_,d);a=ct(n,a,new E(u),p,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),w=ns(n,p,d);a=ct(n,a,new E(u),w,i,r,o,l)}}),a}function Go(n,e,t,s,i,r,o){if(at(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(y(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return ct(n,e,t,a.getNode().getChild(t),i,r,l,o);if(y(t)){let c=new I(null);return a.getNode().forEachChild(ge,(h,u)=>{c=c.set(new E(h),u)}),qt(n,e,t,c,i,r,l,o)}else return e}else{let c=new I(null);return s.foreach((h,u)=>{const d=S(t,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),qt(n,e,t,c,i,r,l,o)}}function Vo(n,e,t,s,i){const r=e.serverCache,o=zs(e,r.getNode(),r.isFullyInitialized()||y(t),r.isFiltered());return ei(n,o,t,s,Zs,i)}function qo(n,e,t,s,i,r){let o;if(at(s,t)!=null)return e;{const l=new cn(s,e,i),a=e.eventCache.getNode();let c;if(y(t)||v(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=lt(s,oe(e));else{const u=e.serverCache.getNode();f(u instanceof g,"serverChildren would be complete if leaf node"),h=ln(s,u)}h=h,c=n.filter.updateFullNode(a,h,r)}else{const h=v(t);let u=an(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=n.filter.updateChild(a,h,u,T(t),l,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(a,h,g.EMPTY_NODE,T(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lt(s,oe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||at(s,C())!=null,Pe(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ho{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tn(s.getIndex()),r=oo(s);this.processor_=Oo(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,l.getNode(),null),h=new Z(a,o.isFullyInitialized(),i.filtersNodes()),u=new Z(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=gt(u,h),this.eventGenerator_=new _o(this.query_)}get query(){return this.query_}}function Bo(n){return n.viewCache_.serverCache.getNode()}function Yo(n){return ot(n.viewCache_)}function jo(n,e){const t=oe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!y(e)&&!t.getImmediateChild(v(e)).isEmpty())?t.getChild(e):null}function ss(n){return n.eventRegistrations_.length===0}function zo(n,e){n.eventRegistrations_.push(e)}function is(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function rs(n,e,t,s){e.type===V.MERGE&&e.source.queryId!==null&&(f(oe(n.viewCache_),"We should always have a full cache before handling merges"),f(ot(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Fo(n.processor_,i,e,t,s);return Lo(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ti(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Qo(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(N,(r,o)=>{s.push(ve(r,o))}),t.isFullyInitialized()&&s.push(Ys(t.getNode())),ti(n,s,t.getNode(),e)}function ti(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return po(n.eventGenerator_,e,t,i)}/**
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
 */let ht;class ni{constructor(){this.views=new Map}}function Ko(n){f(!ht,"__referenceConstructor has already been defined"),ht=n}function $o(){return f(ht,"Reference.ts has not been loaded"),ht}function Xo(n){return n.views.size===0}function hn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),rs(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(rs(o,e,t,s));return r}}function si(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=lt(t,i?s:null),a=!1;l?a=!0:s instanceof g?(l=ln(t,s),a=!1):(l=g.EMPTY_NODE,a=!1);const c=gt(new Z(l,a,!1),new Z(s,i,!1));return new Ho(e,c)}return o}function Jo(n,e,t,s,i,r){const o=si(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),zo(o,t),Qo(o,t)}function Zo(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=ee(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(is(c,t,s)),ss(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(is(a,t,s)),ss(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ee(n)&&r.push(new($o())(e._repo,e._path)),{removed:r,events:o}}function ii(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function X(n,e){let t=null;for(const s of n.views.values())t=t||jo(s,e);return t}function ri(n,e){if(e._queryParams.loadsAllData())return yt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function oi(n,e){return ri(n,e)!=null}function ee(n){return yt(n)!=null}function yt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ut;function el(n){f(!ut,"__referenceConstructor has already been defined"),ut=n}function tl(){return f(ut,"Reference.ts has not been loaded"),ut}let nl=1;class os{constructor(e){this.listenProvider_=e,this.syncPointTree_=new I(null),this.pendingWriteTree_=Po(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function li(n,e,t,s,i){return vo(n.pendingWriteTree_,e,t,s,i),i?Te(n,new re(sn(),e,t)):[]}function sl(n,e,t,s){Co(n.pendingWriteTree_,e,t,s);const i=I.fromObject(t);return Te(n,new Ce(sn(),e,i))}function K(n,e,t=!1){const s=Eo(n.pendingWriteTree_,e);if(wo(n.pendingWriteTree_,e)){let r=new I(null);return s.snap!=null?r=r.set(C(),!0):A(s.children,o=>{r=r.set(new E(o),!0)}),Te(n,new rt(s.path,r,t))}else return[]}function je(n,e,t){return Te(n,new re(rn(),e,t))}function il(n,e,t){const s=I.fromObject(t);return Te(n,new Ce(rn(),e,s))}function rl(n,e){return Te(n,new Ue(rn(),e))}function ol(n,e,t){const s=dn(n,t);if(s){const i=fn(s),r=i.path,o=i.queryId,l=O(r,e),a=new Ue(on(o),l);return _n(n,r,a)}else return[]}function ai(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||oi(o,e))){const a=Zo(o,e,t,s);Xo(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,_)=>ee(_));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=hl(d);for(let p=0;p<_.length;++p){const w=_[p],D=w.query,ue=di(n,w);n.listenProvider_.startListening(De(D),Ge(n,D),ue.hashFn,ue.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(De(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(vt(d));n.listenProvider_.stopListening(De(d),_)}))}ul(n,c)}return l}function ci(n,e,t,s){const i=dn(n,s);if(i!=null){const r=fn(i),o=r.path,l=r.queryId,a=O(o,e),c=new re(on(l),a,t);return _n(n,o,c)}else return[]}function ll(n,e,t,s){const i=dn(n,s);if(i){const r=fn(i),o=r.path,l=r.queryId,a=O(o,e),c=I.fromObject(t),h=new Ce(on(l),a,c);return _n(n,o,h)}else return[]}function al(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const p=O(d,i);r=r||X(_,p),o=o||ee(_)});let l=n.syncPointTree_.get(i);l?(o=o||ee(l),r=r||X(l,C())):(l=new ni,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const w=X(p,C());w&&(r=r.updateImmediateChild(_,w))}));const c=oi(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=vt(e);f(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=dl();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const h=mt(n.pendingWriteTree_,i);let u=Jo(l,e,t,h,r,a);if(!c&&!o&&!s){const d=ri(l,e);u=u.concat(fl(n,e,d))}return u}function un(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=O(o,e),c=X(l,a);if(c)return c});return $s(i,e,r,t,!0)}function cl(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=O(c,t);s=s||X(h,u)});let i=n.syncPointTree_.get(t);i?s=s||X(i,C()):(i=new ni,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Z(s,!0,!1):null,l=mt(n.pendingWriteTree_,e._path),a=si(i,e,l,r?o.getNode():g.EMPTY_NODE,r);return Yo(a)}function Te(n,e){return hi(e,n.syncPointTree_,null,mt(n.pendingWriteTree_,C()))}function hi(n,e,t,s){if(y(n.path))return ui(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=X(i,C()));let r=[];const o=v(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,h=Xs(s,o);r=r.concat(hi(l,a,c,h))}return i&&(r=r.concat(hn(i,n,s,t))),r}}function ui(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=X(i,C()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Xs(s,o),h=n.operationForChild(o);h&&(r=r.concat(ui(h,l,a,c)))}),i&&(r=r.concat(hn(i,n,s,t))),r}function di(n,e){const t=e.query,s=Ge(n,t);return{hashFn:()=>(Bo(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ol(n,t._path,s):rl(n,t._path);{const r=ir(i,t);return ai(n,t,null,r)}}}}function Ge(n,e){const t=vt(e);return n.queryToTagMap.get(t)}function vt(n){return n._path.toString()+"$"+n._queryIdentifier}function dn(n,e){return n.tagToQueryMap.get(e)}function fn(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new E(n.substr(0,e))}}function _n(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=mt(n.pendingWriteTree_,e);return hn(s,t,i,null)}function hl(n){return n.fold((e,t,s)=>{if(t&&ee(t))return[yt(t)];{let i=[];return t&&(i=ii(t)),A(s,(r,o)=>{i=i.concat(o)}),i}})}function De(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(tl())(n._repo,n._path):n}function ul(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=vt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function dl(){return nl++}function fl(n,e,t){const s=e._path,i=Ge(n,e),r=di(n,t),o=n.listenProvider_.startListening(De(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)f(!ee(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!y(c)&&h&&ee(h))return[yt(h).query];{let d=[];return h&&(d=d.concat(ii(h).map(_=>_.query))),A(u,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const h=a[c];n.listenProvider_.stopListening(De(h),Ge(n,h))}}return o}/**
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
 */class pn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pn(t)}node(){return this.node_}}class gn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=S(this.path_,e);return new gn(this.syncTree_,t)}node(){return un(this.syncTree_,this.path_)}}const _l=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ls=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pl(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gl(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pl=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},gl=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},fi=function(n,e,t,s){return mn(e,new gn(t,n),s)},_i=function(n,e,t){return mn(n,new pn(e),t)};function mn(n,e,t){const s=n.getPriority().val(),i=ls(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ls(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new x(l,R(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new x(i))),o.forEachChild(N,(l,a)=>{const c=mn(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class yn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function vn(n,e){let t=e instanceof E?e:new E(e),s=n,i=v(t);for(;i!==null;){const r=me(s.node.children,i)||{children:{},childCount:0};s=new yn(i,s,r),t=T(t),i=v(t)}return s}function Se(n){return n.node.value}function pi(n,e){n.node.value=e,Ht(n)}function gi(n){return n.node.childCount>0}function ml(n){return Se(n)===void 0&&!gi(n)}function Ct(n,e){A(n.node.children,(t,s)=>{e(new yn(t,n,s))})}function mi(n,e,t,s){t&&!s&&e(n),Ct(n,i=>{mi(i,e,!0,s)}),t&&s&&e(n)}function yl(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ze(n){return new E(n.parent===null?n.name:ze(n.parent)+"/"+n.name)}function Ht(n){n.parent!==null&&vl(n.parent,n.name,n)}function vl(n,e,t){const s=ml(t),i=H(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ht(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ht(n))}/**
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
 */const Cl=/[\[\].#$\/\u0000-\u001F\u007F]/,El=/[\[\].#$\u0000-\u001F\u007F]/,Pt=10*1024*1024,Cn=function(n){return typeof n=="string"&&n.length!==0&&!Cl.test(n)},yi=function(n){return typeof n=="string"&&n.length!==0&&!El.test(n)},wl=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yi(n)},Il=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!zt(n)||n&&typeof n=="object"&&H(n,".sv")},vi=function(n,e,t,s){s&&e===void 0||Et(_t(n,"value"),e,t)},Et=function(n,e,t){const s=t instanceof E?new Wr(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+te(s));if(typeof e=="function")throw new Error(n+"contains a function "+te(s)+" with contents = "+e.toString());if(zt(e))throw new Error(n+"contains "+e.toString()+" "+te(s));if(typeof e=="string"&&e.length>Pt/3&&ft(e)>Pt)throw new Error(n+"contains a string greater than "+Pt+" utf8 bytes "+te(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(A(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Cn(o)))throw new Error(n+" contains an invalid key ("+o+") "+te(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ur(s,o),Et(n,l,s),Gr(s)}),i&&r)throw new Error(n+' contains ".value" child '+te(s)+" in addition to actual children.")}},Tl=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Oe(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Cn(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fr);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&W(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Sl=function(n,e,t,s){if(s&&e===void 0)return;const i=_t(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];A(e,(o,l)=>{const a=new E(o);if(Et(i,l,S(t,a)),Jt(a)===".priority"&&!Il(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Tl(i,r)},Ci=function(n,e,t,s){if(!(s&&t===void 0)&&!yi(t))throw new Error(_t(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nl=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ci(n,e,t,s)},Ei=function(n,e){if(v(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Rl=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!wl(t))throw new Error(_t(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class bl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function En(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ws(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function U(n,e,t){En(n,t),xl(n,s=>W(s,e)||W(e,s))}function xl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(kl(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function kl(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();se&&P("event: "+t.toString()),Ie(s)}}}/**
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
 */const Pl="repo_interrupt",Al=25;class Dl{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=it(),this.transactionQueueTree_=new yn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ml(n,e,t){if(n.stats_=$t(n.repoInfo_),n.forceRestClient_||ar())n.server_=new st(n.repoInfo_,(s,i,r,o)=>{as(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{b(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Y(n.repoInfo_,e,(s,i,r,o)=>{as(n,s,i,r,o)},s=>{cs(n,s)},s=>{Ol(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=fr(n.repoInfo_,()=>new fo(n.stats_,n.server_)),n.infoData_=new lo,n.infoSyncTree_=new os({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=je(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),wn(n,"connected",!1),n.serverSyncTree_=new os({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);U(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function wi(n){const t=n.infoData_.getNode(new E(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wt(n){return _l({timestamp:wi(n)})}function as(n,e,t,s,i){n.dataUpdateCount++;const r=new E(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ze(t,c=>R(c));o=ll(n.serverSyncTree_,r,a,i)}else{const a=R(t);o=ci(n.serverSyncTree_,r,a,i)}else if(s){const a=Ze(t,c=>R(c));o=il(n.serverSyncTree_,r,a)}else{const a=R(t);o=je(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=we(n,r)),U(n.eventQueue_,l,o)}function cs(n,e){wn(n,"connected",e),e===!1&&Ul(n)}function Ol(n,e){A(e,(t,s)=>{wn(n,t,s)})}function wn(n,e,t){const s=new E("/.info/"+e),i=R(t);n.infoData_.updateSnapshot(s,i);const r=je(n.infoSyncTree_,s,i);U(n.eventQueue_,s,r)}function In(n){return n.nextWriteId_++}function Ll(n,e,t){const s=cl(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=R(i).withIndex(e._queryParams.getIndex());al(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=je(n.serverSyncTree_,e._path,r);else{const l=Ge(n.serverSyncTree_,e);o=ci(n.serverSyncTree_,e._path,r,l)}return U(n.eventQueue_,e._path,o),ai(n.serverSyncTree_,e,t,null,!0),r},i=>(Qe(n,"get for query "+b(e)+" failed: "+i),Promise.reject(new Error(i))))}function Fl(n,e,t,s,i){Qe(n,"set",{path:e.toString(),value:t,priority:s});const r=wt(n),o=R(t,s),l=un(n.serverSyncTree_,e),a=_i(o,l,r),c=In(n),h=li(n.serverSyncTree_,e,a,c,!0);En(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const p=d==="ok";p||L("set at "+e+" failed: "+d);const w=K(n.serverSyncTree_,c,!p);U(n.eventQueue_,e,w),Bt(n,i,d,_)});const u=Sn(n,e);we(n,u),U(n.eventQueue_,u,[])}function Wl(n,e,t,s){Qe(n,"update",{path:e.toString(),value:t});let i=!0;const r=wt(n),o={};if(A(t,(l,a)=>{i=!1,o[l]=fi(S(e,l),R(a),n.serverSyncTree_,r)}),i)P("update() called with empty data.  Don't do anything."),Bt(n,s,"ok",void 0);else{const l=In(n),a=sl(n.serverSyncTree_,e,o,l);En(n.eventQueue_,a),n.server_.merge(e.toString(),t,(c,h)=>{const u=c==="ok";u||L("update at "+e+" failed: "+c);const d=K(n.serverSyncTree_,l,!u),_=d.length>0?we(n,e):e;U(n.eventQueue_,_,d),Bt(n,s,c,h)}),A(t,c=>{const h=Sn(n,S(e,c));we(n,h)}),U(n.eventQueue_,e,[])}}function Ul(n){Qe(n,"onDisconnectEvents");const e=wt(n),t=it();Ft(n.onDisconnect_,C(),(i,r)=>{const o=fi(i,r,n.serverSyncTree_,e);js(t,i,o)});let s=[];Ft(t,C(),(i,r)=>{s=s.concat(je(n.serverSyncTree_,i,r));const o=Sn(n,i);we(n,o)}),n.onDisconnect_=it(),U(n.eventQueue_,C(),s)}function Gl(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Pl)}function Qe(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),P(t,...e)}function Bt(n,e,t,s){e&&Ie(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ii(n,e,t){return un(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function Tn(n,e=n.transactionQueueTree_){if(e||It(n,e),Se(e)){const t=Si(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Vl(n,ze(e),t)}else gi(e)&&Ct(e,t=>{Tn(n,t)})}function Vl(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ii(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=O(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Qe(n,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(K(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();It(n,vn(n.transactionQueueTree_,e)),Tn(n,n.transactionQueueTree_),U(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Ie(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{L("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}we(n,e)}},o)}function we(n,e){const t=Ti(n,e),s=ze(t),i=Si(n,t);return ql(n,i,s),s}function ql(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=O(t,a.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(K(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Al)h=!0,u="maxretry",i=i.concat(K(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Ii(n,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Et("transaction failed: Data returned ",_,a.path);let p=R(_);typeof _=="object"&&_!=null&&H(_,".priority")||(p=p.updatePriority(d.getPriority()));const D=a.currentWriteId,ue=wt(n),$e=_i(p,d,ue);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=$e,a.currentWriteId=In(n),o.splice(o.indexOf(D),1),i=i.concat(li(n.serverSyncTree_,a.path,$e,a.currentWriteId,a.applyLocally)),i=i.concat(K(n.serverSyncTree_,D,!0))}else h=!0,u="nodata",i=i.concat(K(n.serverSyncTree_,a.currentWriteId,!0))}U(n.eventQueue_,t,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}It(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ie(s[l]);Tn(n,n.transactionQueueTree_)}function Ti(n,e){let t,s=n.transactionQueueTree_;for(t=v(e);t!==null&&Se(s)===void 0;)s=vn(s,t),e=T(e),t=v(e);return s}function Si(n,e){const t=[];return Ni(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ni(n,e,t){const s=Se(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Ct(e,i=>{Ni(n,i,t)})}function It(n,e){const t=Se(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,pi(e,t.length>0?t:void 0)}Ct(e,s=>{It(n,s)})}function Sn(n,e){const t=ze(Ti(n,e)),s=vn(n.transactionQueueTree_,e);return yl(s,i=>{At(n,i)}),At(n,s),mi(s,i=>{At(n,i)}),t}function At(n,e){const t=Se(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(K(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pi(e,void 0):t.length=r+1,U(n.eventQueue_,ze(e),i);for(let o=0;o<s.length;o++)Ie(s[o])}}/**
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
 */function Hl(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Bl(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):L(`Invalid query segment '${t}' in query '${n}'`)}return e}const hs=function(n,e){const t=Yl(n),s=t.namespace;t.domain==="firebase.com"&&z(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&z("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zi();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new bs(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new E(t.pathString)}},Yl=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=Hl(n.substring(h,u)));const d=Bl(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const us="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jl=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=us.charAt(t%64),t=Math.floor(t/64);f(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=us.charAt(e[i]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class zl{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+b(this.snapshot.exportVal())}}class Ql{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Kl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return y(this._path)?null:Jt(this._path)}get ref(){return new Q(this._repo,this._path)}get _queryIdentifier(){const e=$n(this._queryParams),t=Qt(e);return t==="{}"?"default":t}get _queryObject(){return $n(this._queryParams)}isEqual(e){if(e=ae(e),!(e instanceof Nn))return!1;const t=this._repo===e._repo,s=Ws(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lr(this._path)}}class Q extends Nn{constructor(e,t){super(e,t,new nn,!1)}get parent(){const e=Fs(this._path);return e===null?null:new Q(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ve{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new E(e),s=le(this.ref,e);return new Ve(this._node.getChild(t),s,N)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ve(i,le(this.ref,s),N)))}hasChild(e){const t=new E(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function j(n,e){return n=ae(n),n._checkNotDeleted("ref"),e!==void 0?le(n._root,e):n._root}function le(n,e){return n=ae(n),v(n._path)===null?Nl("child","path",e,!1):Ci("child","path",e,!1),new Q(n._repo,S(n._path,e))}function $l(n,e){n=ae(n),Ei("push",n._path),vi("push",e,n._path,!0);const t=wi(n._repo),s=jl(t),i=le(n,s),r=le(n,s);let o;return e!=null?o=Ri(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ri(n,e){n=ae(n),Ei("set",n._path),vi("set",e,n._path,!1);const t=new dt;return Fl(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Rn(n,e){Sl("update",e,n._path,!1);const t=new dt;return Wl(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Tt(n){n=ae(n);const e=new Kl(()=>{}),t=new bn(e);return Ll(n._repo,n,t).then(s=>new Ve(s,new Q(n._repo,n._path),n._queryParams.getIndex()))}class bn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new zl("value",this,new Ve(e.snapshotNode,new Q(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ql(this,e,t):null}matches(e){return e instanceof bn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ko(Q);el(Q);/**
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
 */const Xl="FIREBASE_DATABASE_EMULATOR_HOST",Yt={};let Jl=!1;function Zl(n,e,t,s){n.repoInfo_=new bs(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function ea(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||z("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),P("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=hs(r,i),l=o.repoInfo,a,c;typeof process<"u"&&An&&(c=An[Xl]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=hs(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new pe(pe.OWNER):new hr(n.name,n.options,e);Rl("Invalid Firebase Database URL",o),y(o.path)||z("Database URL must point to the root of a Firebase Database (not including a child path).");const u=na(l,n,h,new cr(n.name,t));return new sa(u,n)}function ta(n,e){const t=Yt[e];(!t||t[n.key]!==n)&&z(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Gl(n),delete t[n.key]}function na(n,e,t,s){let i=Yt[e.name];i||(i={},Yt[e.name]=i);let r=i[n.toURLString()];return r&&z("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Dl(n,Jl,t,s),i[n.toURLString()]=r,r}class sa{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ml(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Q(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ta(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&z("Cannot call "+e+" on a deleted database.")}}function ia(n=Pi(),e){const t=xi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ki("database");s&&ra(t,...s)}return t}function ra(n,e,t,s={}){n=ae(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&z("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&z('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new pe(pe.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ai(s.mockUserToken,n.app.options.projectId);r=new pe(o)}Zl(i,e,t,r)}/**
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
 */function oa(n){Qi(Yi),Di(new Mi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ea(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),kn(Dn,Mn,n),kn(Dn,Mn,"esm2017")}/**
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
 */const la={".sv":"timestamp"};function aa(){return la}Y.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Y.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};oa();const Ke=ia(zi),ca=j(Ke),ha=async(n,e)=>{try{if(!n||!e)throw new Error("Invalid parameters. Please provide id and dataObject.");return await Ri(j(Ke,n),e),console.log("realtimeDb createNewFileInDb: data added"),!0}catch(t){return console.error("realtimeDb createNewFileInDb: data not added",t.message),!1}},ua=async(n,e)=>{try{if(!e||!n)throw new Error("Invalid parameter. Please provide id.");const t=await Tt(le(ca,n+"/"+e));if(t.exists()){const s=t.val();return console.log("realtimeDb getData:",s),s}else return console.error("realtimeDb getData: No data found at the specified location which is: ",n+"/"+e),null}catch(t){return console.error("realtimeDb getData",t.message),null}},da=async(n,e,t)=>{try{if(!n||!e||!t&&t!==0)throw new Error("Invalid parameters. Please provide treeKey, path, and dataObject.");const s=Ke,i=j(s,n+"/"+e),r=t;if((await Tt(i)).exists()){const l={[n+"/"+e]:r};return await Rn(j(s),l),console.log("realtimeDb updateData: data updated"),!0}else return console.error("realtimeDB updateData: Data not found at "+n+"/"+e),!1}catch(s){return console.error("realtimeDb updateData: data not updated",s.message),!1}},fa=async(n,e,t,s=null)=>{try{if(!n||!e||!t&&t!==0)throw new Error("Invalid parameters. Please provide treeKey, path, and dataObject.");const i=Ke,r=t;if(s!==null&&typeof s!="string")throw new Error("Invalid newKey. It must be a string or null.");s=s===null?$l(le(j(i),n+"/"+e)).key:s;const o=j(i,n+"/"+e);if((await Tt(o)).exists()){const a={[n+"/"+e+"/"+s]:r};return await Rn(j(i),a),console.log("realtimeDb addData: data added"),s}else return console.error("realtimeDB addData: Data not found at "+n+"/"+e),!1}catch(i){return console.error("realtimeDb addData: data not added",i.message),!1}},_a=async(n,e=null)=>{try{if(!n)throw new Error("Invalid parameters. Please provide id.");const t=Ke,s=j(t,e?`${n}/${e}`:n);return(await Tt(s)).exists()?(await Rn(j(t),{[e?`${n}/${e}`:n]:null}),console.log("realtimeDB deleteData: Data deleted"),!0):(console.error("realtimeDB deleteData: Data not found at "+e?`${n}/${e}`:n),!1)}catch(t){return console.error("realtimeDB deleteData: Data not deleted",t.message),!1}},pa=()=>{const[n,e]=xn.useState(null);return xn.useEffect(()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:i}=t.coords;e({latitude:s,longitude:i})},t=>{console.error("Error getting geolocation:",t.message),alert("Error getting geolocation:",t.message)}):(console.error("Geolocation is not supported by your browser"),alert("Geolocation is not supported by your browser"))},[]),M.jsx("div",{children:n?M.jsxs("p",{children:["Your current location is: ",n.latitude,", ",n.longitude]}):M.jsx("p",{children:"Fetching location..."})})},ga=pa;function va(){return M.jsxs("div",{className:"w-full h-full text-text-100 px-4 py-2 bg-background-100 text-2xl",children:[M.jsx(ga,{}),M.jsx("br",{}),M.jsx("button",{onClick:()=>{ha("users",{agents:{leo:"leo",mike:"mike",john:"john",jane:"jane"}})},children:"set data to realtimeDb"}),M.jsx("br",{}),M.jsx("button",{onClick:()=>ua("users","agents/walid"),children:"get data"}),M.jsx("br",{}),M.jsx("br",{}),M.jsx("button",{onClick:()=>fa("users","agents",{timestampTest:aa()},"leo"),children:"Add data"}),M.jsx("br",{}),M.jsx("button",{onClick:()=>da("users","agents/leo","leo adams"),children:"update data"}),M.jsx("br",{}),M.jsx("button",{onClick:()=>_a("users/agents/leo"),children:"delete data"})]})}export{va as default};
