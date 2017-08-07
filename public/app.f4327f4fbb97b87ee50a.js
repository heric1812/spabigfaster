webpackJsonp([8],{101:function(t,e,n){function i(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./InspireView.vue":[103,6],"./LandingView.vue":[104,0],"./ProfileView.vue":[105,2],"./ShoppingView.vue":[106,1],"./SingInView.vue":[107,5],"./SingUpView.vue":[108,4],"./WelcomeView.vue":[109,3]};i.keys=function(){return Object.keys(a)},t.exports=i,i.id=101},35:function(t,e){t.exports={"/":{title:"BigFaster | Landing Page",description:"Directorio Paname&ntilde;o de publicaciones de Autos, Inmuebles, Productos y Servicios",keywords:"Panama, autos, inmuebles, productos, servicios, mall, gratis, compras, ventas, alquiler, tienda, ofertas"},"/welcome":{title:"Vue.js 2 Material Component Framework",description:"My Vuetify.js Project",keywords:"vue 2.0, vuetify"},"/inspire":{title:"Create something amazing",description:"",keywords:""},"/shopping":{title:"Ir de compras",description:"Ir de compras",keywords:"compras, BigFaster, Panama"},"/profile":{title:"Profile",description:"Profile",keywords:"compras, BigFaster, Panama"}}},36:function(t,e,n){"use strict";function i(t){var e=n.i(v.a)(),i=n.i(m.a)();return n.i(h.sync)(e,i),{app:new s.a({router:i,store:e,ssrContext:t,render:function(t){return t(u.a)}}),router:i,store:e}}e.a=i;var a=n(48),r=n.n(a),o=n(7),s=n.n(o),c=n(87),u=n.n(c),l=n(97),p=n.n(l),f=n(41),d=n(40),v=n(47),m=n(46),h=n(98);n.n(h);s.a.use(p.a),r()(f.a).forEach(function(t){s.a.component(t,f.a[t])}),r()(d.a).forEach(function(t){s.a.component(t,d.a[t])})},39:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),a=n.n(i),r=n(7),o=(n.n(r),n(38)),s=(n.n(o),n(36)),c=n.i(s.a)(),u=c.app,l=c.router,p=c.store;window.__INITIAL_STATE__&&p.replaceState(window.__INITIAL_STATE__),l.onReady(function(){l.beforeResolve(function(t,e,n){var i=l.getMatchedComponents(t),r=l.getMatchedComponents(e),o=!1,s=i.filter(function(t,e){return o||(o=r[e]!==t)});if(!s.length)return n();a.a.all(s.map(function(e){if(e.asyncData)return e.asyncData({store:p,route:t})})).then(function(){n()}).catch(n)}),u.$mount("#app")})},40:function(t,e,n){"use strict";var i=n(88),a=n.n(i);e.a={Vuetify:a.a}},41:function(t,e,n){"use strict";var i=n(89),a=n.n(i),r=n(90),o=n.n(r);e.a={ContentOnly:a.a,VerticalLeftNavigationToolbar:o.a}},42:function(t,e,n){"use strict";var i=n(35);e.a={watch:{$route:function(){this.setMeta()}},created:function(){return},mounted:function(){this.$vuetify.load(this.setMeta)},methods:{setMeta:function(){if("undefined"!=typeof document){var t=i[this.$route.path]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42);e.default={mixins:[i.a],data:function(){return{theme:!1}},computed:{auth:function(){return this.$store.state.auth},layout:function(){switch(this.$route.name){case"Landing":case"SingIn":case"SingUp":return"ContentOnly";case"Profile":case"Welcome":case"Inspire":return"VerticalLeftNavigationToolbar";default:return"ContentOnly"}}},methods:{authChange:function(){this.$store.dispatch("authChange")}}}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{user_slug:"herick-ruiz"}},computed:{auth:function(){return this.$store.state.auth}}}},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{clipped:!0,drawer:!0,fixed:!1,items:[{icon:"home",title:"Landing",to:"/"},{icon:"apps",title:"Welcome",to:"/welcome"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}},46:function(t,e,n){"use strict";(function(t){function i(t,e){return{path:t,name:e,meta:c[t],component:function(t){return n(101)("./"+e+"View.vue").then(t)}}}function a(){var e=new s.a({base:t,mode:"history",scrollBehavior:function(){return{y:0}},routes:[i("/","Landing"),i("/sing-in","SingIn"),i("/sing-up","SingUp"),i("/profile/:slug","Profile"),i("/shopping","Shopping"),i("/welcome","Welcome"),i("/inspire","Inspire"),{path:"*",redirect:"/"}]});return e.beforeEach(function(t,e,n){"undefined"!=typeof ga&&(ga("set","page",t.path),ga("send","pageview")),n()}),e}e.a=a;var r=n(7),o=n.n(r),s=n(95),c=n(35);o.a.use(s.a)}).call(e,"/")},47:function(t,e,n){"use strict";function i(){return new o.a.Store({state:{auth:!1},actions:{authChange:function(t){t.commit("authChange")}},mutations:{authChange:function(t){t.auth=!t.auth}},getters:{}})}e.a=i;var a=n(7),r=n.n(a),o=n(99);r.a.use(o.a)},84:function(t,e){},85:function(t,e){},86:function(t,e){},87:function(t,e,n){function i(t){n(86)}var a=n(8)(n(43),n(94),i,null,null);t.exports=a.exports},88:function(t,e,n){var i=n(8)(null,n(93),null,null,null);t.exports=i.exports},89:function(t,e,n){function i(t){n(84)}var a=n(8)(n(44),n(91),i,null,null);t.exports=a.exports},90:function(t,e,n){function i(t){n(85)}var a=n(8)(n(45),n(92),i,null,null);t.exports=a.exports},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-only"},[n("v-toolbar",{attrs:{fixed:""}},[n("v-toolbar-items",[n("v-btn",{staticClass:"bf-logo",attrs:{flat:"",to:{name:"Landing"}}},[n("img",{staticClass:"img-responsive",attrs:{src:"/static/bigfaster/logo.png",alt:"BigFaster"}})])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{staticClass:"bf-shopping",attrs:{flat:"",to:{name:"Shopping"}}},[n("v-icon",[t._v("shopping_basket")]),t._v("  Ir de Compras")],1),t.auth?n("v-btn",{attrs:{flat:"",to:{name:"Profile",params:{slug:t.user_slug}},exact:""}},[t._v("Profile")]):n("v-btn",{attrs:{flat:"",to:{name:"SingIn"},exact:""}},[t._v("Iniciar Sesión")]),n("v-btn",{attrs:{flat:""}},[t._v("Publica con nosotros")])],1)],1),n("v-slide-y-transition",{attrs:{appear:"",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vertical-left-navigation-toolbar"},[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{router:"",exact:"",to:e.to}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{fixed:""}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-toolbar-side-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:"",mdi:""},nativeOn:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),n("section",[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{appear:"",mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),n("v-footer",{attrs:{fixed:t.fixed}},[n("span",[t._v("© 2017")])])],1)},staticRenderFns:[]}},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("Vuetify")])},staticRenderFns:[]}},94:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bigfaster application",class:{"application--light":t.theme,"application--dark":!t.theme},attrs:{id:"app","data-app":"true"}},[n(t.layout,{tag:"component"},[t._t("default")],2),n("v-btn",{class:["btn-auth",{indigo:t.auth,red:!t.auth}],attrs:{absolute:"",dark:"",fab:"",fixed:""},nativeOn:{click:function(e){t.authChange(e)}}},[n("v-icon",[t._v(t._s(t.auth?"lock_open":"lock"))])],1)],1)},staticRenderFns:[]}}},[39]);