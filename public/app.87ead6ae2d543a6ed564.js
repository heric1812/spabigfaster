webpackJsonp([4],{35:function(t,e){t.exports={"/":{title:"Vue.js 2 Material Component Framework",description:"My Vuetify.js Project",keywords:"vue 2.0, vuetify"},"/inspire":{title:"Create something amazing",description:"",keywords:""},"/landing":{title:"BigFaster | Landing Page",description:"Directorio Paname&ntilde;o de publicaciones de Autos, Inmuebles, Productos y Servicios",keywords:"Panama, autos, inmuebles, productos, servicios, mall, gratis, compras, ventas, alquiler, tienda, ofertas"}}},36:function(t,e,n){"use strict";function i(t){var e=n.i(p.a)(),i=n.i(v.a)();return n.i(m.sync)(e,i),{app:new s.a({router:i,store:e,ssrContext:t,render:function(t){return t(u.a)}}),router:i,store:e}}e.a=i;var r=n(46),o=n.n(r),a=n(7),s=n.n(a),c=n(83),u=n.n(c),l=n(89),d=n.n(l),f=n(41),p=n(45),v=n(44),m=n(90);n.n(m);s.a.use(d.a),o()(f.a).forEach(function(t){s.a.component(t,f.a[t])})},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),r=n.n(i),o=n(7),a=(n.n(o),n(38)),s=(n.n(a),n(36)),c=n.i(s.a)(),u=c.app,l=c.router,d=c.store;window.__INITIAL_STATE__&&d.replaceState(window.__INITIAL_STATE__),l.onReady(function(){l.beforeResolve(function(t,e,n){var i=l.getMatchedComponents(t),o=l.getMatchedComponents(e),a=!1,s=i.filter(function(t,e){return a||(a=o[e]!==t)});if(!s.length)return n();r.a.all(s.map(function(e){if(e.asyncData)return e.asyncData({store:d,route:t})})).then(function(){n()}).catch(n)}),u.$mount("#app")})},41:function(t,e,n){"use strict";var i=n(84),r=n.n(i);e.a={Vuetify:r.a}},42:function(t,e,n){"use strict";var i=n(35);e.a={watch:{$route:function(){this.setMeta()}},created:function(){return},mounted:function(){this.$vuetify.load(this.setMeta)},methods:{setMeta:function(){if("undefined"!=typeof document){var t=i[this.$route.path]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42);e.default={mixins:[i.a],data:function(){return{clipped:!0,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"},{icon:"home",title:"Landing",to:"/landing"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}},44:function(t,e,n){"use strict";(function(t){function i(t,e){return{path:t,meta:c[t],component:function(t){return n(93)("./"+e+"View.vue").then(t)}}}function r(){var e=new s.a({base:t,mode:"history",scrollBehavior:function(){return{y:0}},routes:[i("/","Welcome"),i("/inspire","Inspire"),{path:"/landing",meta:["/landing"],component:function(t){return n.e(0).then(n.bind(null,39)).then(t)}},{path:"*",redirect:"/"}]});return e.beforeEach(function(t,e,n){"undefined"!=typeof ga&&(ga("set","page",t.path),ga("send","pageview")),n()}),e}e.a=r;var o=n(7),a=n.n(o),s=n(87),c=n(35);a.a.use(s.a)}).call(e,"/")},45:function(t,e,n){"use strict";function i(){return new a.a.Store({state:{},actions:{},mutations:{},getters:{}})}e.a=i;var r=n(7),o=n.n(r),a=n(91);o.a.use(a.a)},82:function(t,e){},83:function(t,e,n){function i(t){n(82)}var r=n(22)(n(43),n(86),i,null,null);t.exports=r.exports},84:function(t,e,n){var i=n(22)(null,n(85),null,null,null);t.exports=i.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("Vuetify")])},staticRenderFns:[]}},86:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{router:"",to:e.to}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{fixed:""}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-toolbar-side-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),n("main",[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{appear:"",mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),n("v-footer",{attrs:{fixed:t.fixed}},[n("span",[t._v("© 2017")])])],1)},staticRenderFns:[]}},93:function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./InspireView.vue":[95,2],"./LandingView.vue":[39,0],"./WelcomeView.vue":[96,1]};i.keys=function(){return Object.keys(r)},t.exports=i,i.id=93}},[40]);