(function(e){function t(t){for(var s,a,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],r[a]&&f.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4ae876ee":"ac1ebd2d","chunk-4fb38ae2":"893582a9"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4ae876ee":1,"chunk-4fb38ae2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-4ae876ee":"f393bbde","chunk-4fb38ae2":"a814189d"}[e]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===s||d===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],d=u.getAttribute("data-href");if(d===s||d===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)}).then(function(){a[e]=0}));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise(function(t,n){s=r[e]=[t,n]});t.push(s[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,n[1](o)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ea9":function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u});n("7514");var s=n("bc3a"),a=n.n(s),r="https://api.nytimes.com/svc/books/v3/lists/names.json",o="https://api.nytimes.com/svc/books/v3/lists",c=function(){return a.a.get(r,{params:{"api-key":"6chEmyuXSiNKO0uxjvCWz5B9WOIar1Kg"}}).then(function(e){return 200===e.status?e.data.results:[]})},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"current";return a.a.get("".concat(o,"/").concat(t,"/").concat(e,".json"),{params:{"api-key":"6chEmyuXSiNKO0uxjvCWz5B9WOIar1Kg"}}).then(function(e){return 200===e.status?e.data.results:[]})},u=function(e,t){return a.a.get("".concat(o,"/current/").concat(e,".json"),{params:{"api-key":"6chEmyuXSiNKO0uxjvCWz5B9WOIar1Kg"}}).then(function(e){if(200===e.status){var n=e.data.results;if(n&&n.books&&n.books.length>0){var s=n.books.find(function(e){return e.primary_isbn13===t});return s}}return null})}},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("f23d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},u=Object(c["a"])(i,r,o,!1,null,null,null),d=u.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"book-categories-container"},[n("span",{staticClass:"book-categories-title"},[e._v("Book Categories")]),n("div",{staticClass:"book-categories"},[n("a-table",{attrs:{bordered:"",size:"small",columns:e.columns,dataSource:e.tableData,loading:e.loading,pagination:e.pagination,rowKey:function(e){return e.list_name_encoded}},scopedSlots:e._u([{key:"goBestSellersBooks",fn:function(t){return[n("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.goToBestSellersBooks(t)}}},[e._v("\n          Go Best Seller Books\n          "),n("a-icon",{attrs:{type:"right"}})],1)]}}])})],1)])},b=[],j=n("0ea9"),h=[{title:"Name",dataIndex:"display_name"},{title:"Oldest Published Data",dataIndex:"oldest_published_date",width:"20%"},{title:"Newest Published Data",dataIndex:"newest_published_date",width:"20%"},{title:"Updated",dataIndex:"updated",width:"20%"},{title:"Actions",dataIndex:"list_name_encoded",width:"20%",scopedSlots:{customRender:"goBestSellersBooks"}}],p={data:function(){return{pagination:{showSizeChanger:!0,showQuickJumper:!0},tableData:[],loading:!1,columns:h}},mounted:function(){this.fetchBookCategories()},methods:{fetchBookCategories:function(){var e=this;this.loading=!0,Object(j["b"])().then(function(t){e.loading=!1,e.tableData=t}).catch(function(){e.loading=!1})},goToBestSellersBooks:function(e){this.$router.push({path:"/category/".concat(e)})}},name:"book-categories"},m=p,g=(n("d626"),Object(c["a"])(m,l,b,!1,null,"727effe5",null)),v=g.exports;s["a"].use(f["a"]);var k=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"book-categories",component:v},{path:"/category/:name",name:"category",component:function(){return n.e("chunk-4fb38ae2").then(n.bind(null,"0e8c"))}},{path:"/category/:name/:isbn",name:"book-details",props:!0,component:function(){return n.e("chunk-4ae876ee").then(n.bind(null,"4ba2"))}}]});n("202f");s["a"].config.productionTip=!1,s["a"].use(a["a"]),new s["a"]({router:k,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(e,t,n){},d626:function(e,t,n){"use strict";var s=n("fa10"),a=n.n(s);a.a},fa10:function(e,t,n){}});
//# sourceMappingURL=app.9a020dc4.js.map