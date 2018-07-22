(function(s){function n(n){for(var t,o,l=n[0],p=n[1],c=n[2],u=0,f=[];u<l.length;u++)o=l[u],e[o]&&f.push(e[o][0]),e[o]=0;for(t in p)Object.prototype.hasOwnProperty.call(p,t)&&(s[t]=p[t]);i&&i(n);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var s,n=0;n<r.length;n++){for(var a=r[n],t=!0,l=1;l<a.length;l++){var p=a[l];0!==e[p]&&(t=!1)}t&&(r.splice(n--,1),s=o(o.s=a[0]))}return s}var t={},e={0:0},r=[];function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return s[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=s,o.c=t,o.d=function(s,n,a){o.o(s,n)||Object.defineProperty(s,n,{enumerable:!0,get:a})},o.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,n){if(1&n&&(s=o(s)),8&n)return s;if(4&n&&"object"===typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&n&&"string"!=typeof s)for(var t in s)o.d(a,t,function(n){return s[n]}.bind(null,t));return a},o.n=function(s){var n=s&&s.__esModule?function(){return s["default"]}:function(){return s};return o.d(n,"a",n),n},o.o=function(s,n){return Object.prototype.hasOwnProperty.call(s,n)},o.p="/vue-await/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var i=p;r.push([0,1]),a()})({0:function(s,n,a){s.exports=a("Vtdi")},"BDa/":function(s,n,a){"use strict";var t=a("WL97"),e=a.n(t);e.a},Vtdi:function(s,n,a){"use strict";a.r(n);a("yt8O"),a("VRzm");var t=a("Kw5r"),e=function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{attrs:{id:"app"}},[a("h1",[s._v("vue-await")]),a("p",[s._v("\n    Render blocks based on the status of a Promise\n  ")]),a("div",{staticClass:"controls"},[a("button",{on:{click:function(n){s.kickoff(s.resOrRej)}}},[s._v("Start a "+s._s(s.seconds)+" second timer")]),s._v(", then...\n    "),a("div",{staticClass:"resolve-or-reject"},[a("label",{attrs:{for:"resolve"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.resOrRej,expression:"resOrRej"}],attrs:{type:"radio",id:"resolve",value:"resolve"},domProps:{checked:s._q(s.resOrRej,"resolve")},on:{change:function(n){s.resOrRej="resolve"}}}),s._v("\n        Resolve\n      ")]),a("label",{attrs:{for:"reject"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.resOrRej,expression:"resOrRej"}],attrs:{type:"radio",id:"reject",value:"reject"},domProps:{checked:s._q(s.resOrRej,"reject")},on:{change:function(n){s.resOrRej="reject"}}}),s._v("\n        Reject\n      ")])])]),a("Await",{attrs:{p:s.prom},scopedSlots:s._u([{key:"then",fn:function(n){var t=n[0];return a("p",{},[s._v("Success: "+s._s(t))])}},{key:"catch",fn:function(n){var t=n[0];return a("p",{},[s._v("Error: "+s._s(t))])}}])},[a("p",[s._v("Waiting...")]),a("p",{attrs:{slot:"none"},slot:"none"},[s._v("(no timer running)")])]),a("div",{staticClass:"clear"},[a("button",{on:{click:function(n){s.prom=null}}},[s._v("Clear")])]),a("div",{staticClass:"code",domProps:{innerHTML:s._s(s.code)}}),s._m(0)],1)},r=[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("footer",[s._v("\n    Learn more at\n    "),a("a",{attrs:{href:"https://github.com/bgschiller/vue-await"}},[s._v("\n      github.com/bgschiller/vue-await\n    ")])])}],o=function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"vue-await"},[s.awaiting?s._t("default"):s._e(),s.success?s._t("then",null,null,s.value):s._e(),s.error?s._t("catch",null,null,s.err):s._e(),s.none?s._t("none"):s._e()],2)},l=[];function p(s){return null===s||void 0===s?s:s.then&&s.catch?s:Promise.resolve(s)}var c={name:"Await",props:{p:Promise},data:function(){return{status:null,value:null,err:null}},computed:{awaiting:function(){return"awaiting"===this.status},success:function(){return"success"===this.status},error:function(){return"error"===this.status},none:function(){return null===this.status}},watch:{status:function(s,n){console.log("status changed from",n,"to",s)},p:{immediate:!0,handler:function(){var s=this,n=p(this.p);null===n||void 0===n?(this.status=null,this.value=null,this.err=null):(this.status="awaiting",console.log("about to then and catch prom",n),n.then(function(){s.status="success";for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];s.value=a}).catch(function(){s.status="error";for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];s.err=a}),console.log("finished with then and catch prom"))}}}},i=c,u=a("KHd+"),f=Object(u["a"])(i,o,l,!1,null,null,null),v=f.exports,d='<div class="syntax"><pre><span></span> <span class="p">&lt;</span><span class="nt">Await</span> <span class="na">:p</span><span class="o">=</span><span class="s">"prom"</span><span class="p">&gt;</span>\n  <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>Waiting...<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>\n  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"then"</span> <span class="na">slot-scope</span><span class="o">=</span><span class="s">"[result]"</span><span class="p">&gt;</span>\n    Success: {{result}}\n  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>\n  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"catch"</span> <span class="na">slot-scope</span><span class="o">=</span><span class="s">"[error]"</span><span class="p">&gt;</span>\n    Error: {{error}}\n  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>\n  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"none"</span><span class="p">&gt;</span>\n    (no timer running)\n  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>\n<span class="p">&lt;/</span><span class="nt">Await</span><span class="p">&gt;</span>\n</pre></div>',h={name:"app",components:{Await:v},data:function(){return{resOrRej:"resolve",prom:null,milliseconds:3e3,code:d}},methods:{kickoff:function(){var s=this;this.prom=new Promise(function(n,a){var t="resolve"===s.resOrRej?{func:n,value:"everything worked out!"}:{func:a,value:"uh, oh..."},e=t.func,r=t.value;setTimeout(function(){return e(r)},s.milliseconds)})}},computed:{seconds:function(){return this.milliseconds/1e3}}},m=h,g=(a("BDa/"),Object(u["a"])(m,e,r,!1,null,null,null)),_=g.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(s){return s(_)}}).$mount("#app")},WL97:function(s,n,a){}});
//# sourceMappingURL=app.56de8f28.js.map