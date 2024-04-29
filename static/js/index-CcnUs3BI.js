const __vite__fileDeps=["./Login-DwH03Dwm.js","../css/Login-p2HNKv-q.css","./index-rLg-G22l.js","../css/index-Bu0bqUIw.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import*as e from"@element-plus/icons-vue";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const t=Vue.defineComponent({__name:"App",setup:e=>(e,t)=>{const o=Vue.resolveComponent("router-view");return Vue.openBlock(),Vue.createBlock(o)}}),o={},n=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),i=(null==a?void 0:a.nonce)||(null==a?void 0:a.getAttribute("nonce"));r=Promise.all(t.map((t=>{if(t=function(e,t){return new URL(e,t).href}(t,n),t in o)return;o[t]=!0;const r=t.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(!!n)for(let o=e.length-1;o>=0;o--){const n=e[o];if(n.href===t&&(!r||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${a}`))return;const l=document.createElement("link");return l.rel=r?"stylesheet":"modulepreload",r||(l.as="script",l.crossOrigin=""),l.href=t,i&&l.setAttribute("nonce",i),document.head.appendChild(l),r?new Promise(((e,o)=>{l.addEventListener("load",e),l.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}return r.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},r=""+new URL("../img/123-BlDARnHq.png",import.meta.url).href,a=[{icon:"Sort",title:"首页",path:"/home"}],i=["/","/home","/404","/login"],l=[{path:"/user",redirect:"/user/one",name:"userOne",meta:{title:"功能区",icon:"Management"},children:[{path:"/user/one",component:"userOne/index",meta:{title:"函数式组件",icon:"Sort"}},{path:"/user/two",component:"userTwo/index",meta:{title:"国际化I18N",icon:"Sort"}},{path:"/user/getPicture",component:"getPicture/index",meta:{title:"视频截图    ",icon:"Sort"}},{path:"/user/export",component:"tableExport/index",meta:{title:"静态导出",icon:"Sort"}},{path:"/user/gpMap",component:"gdMap/index",meta:{title:"高德地图",icon:"Location"}}]}],s=Pinia.defineStore("user",{state:()=>({userData:{},token:"123"}),getters:{getUser:e=>e.userData,getToken:e=>e.token},actions:{setStoreThis(){return this},updateState(e){this.setStoreThis().userData={...e},localStorage.setItem("userData",JSON.stringify(this.setStoreThis().userData))},setToken(e){this.setStoreThis().token=e,localStorage.setItem("token",this.setStoreThis().token)},userLogin(){this.setToken("123123")},async getUserInfo(){return new Promise(((e,t)=>{const o={token:"123123123",name:"张三",id:"1",permission:{menus:l,points:["login"]}};this.updateState(o),e(o)}))},outLogin(){this.updateState({})}},persist:{key:"user",storage:sessionStorage}}),u=JSON.parse(sessionStorage.getItem("path")),c=Pinia.defineStore("routes",{state:()=>({path:u&&u.length?u:[{icon:"Sort",path:"/home",title:"首页"}],navList:[]}),getters:{},actions:{setStoreThis(){return this},updatePath(e){this.setStoreThis().path.push(e),this.setStoreThis().path=this.setStoreThis().path.filter(((e,t,o)=>o.findIndex((t=>t.path===e.path))===t)),sessionStorage.setItem("path",JSON.stringify(this.setStoreThis().path))},deletePath(e){var t;this.setStoreThis().path=null==(t=this.setStoreThis().path)?void 0:t.filter(((t,o)=>t.path!==e.path)),sessionStorage.setItem("path",JSON.stringify(this.setStoreThis().path))},setNavListData(e){this.setStoreThis().navList=[];let t=(e=>{const t=(e=>{const t=[];return e.forEach((e=>{e.children&&e.children.length>0&&t.push(...e.children)})),t})(e);return e.filter((e=>!t.find((t=>t.path===e.path))))})(T.getRoutes());t=t.filter((e=>!i.includes(e.path))),this.setStoreThis().navList=t.map((e=>({icon:e.meta.icon,title:e.meta.title,path:e.path,children:e.children&&e.children.length?e.children.map((e=>({icon:e.meta.icon,title:e.meta.title,path:e.path}))):[]}))),a.forEach((e=>{this.setStoreThis().navList.unshift(e)}))}},persist:{key:"routes",storage:sessionStorage}});function p(){return{user:s(),routes:c()}}const d={style:{display:"flex",width:"100%","align-items":"center","justify-content":"center","font-size":"3.125rem",color:"#409eff"}},m=Vue.createElementVNode("img",{src:r,alt:"",style:{width:"6.25rem"}},null,-1),h=Vue.defineComponent({__name:"Home",setup(e){Vue.getCurrentInstance();const{user:t}=p(),{userData:o}=Pinia.storeToRefs(t),n=VueRouter.useRouter(),r=()=>{t.userLogin(),n.replace("/a")};return(e,t)=>{const o=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",d,[Vue.createTextVNode(" admin通用架子 "),Vue.createVNode(o,{type:"primary",onClick:r},{default:Vue.withCtx((()=>[Vue.createTextVNode("登录")])),_:1}),m])}}}),V=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),f=e=>e.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),g=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o},v={class:"hover-text"},_={class:"hover-text"},k={class:"hover-text"},y=g(Vue.defineComponent({__name:"index",props:{data:{type:Array,required:!0},defaultActive:{type:String,default:""},router:{type:Boolean,default:!1},name:{type:String,default:"title"},index:{type:String,default:"index"},icon:{type:String,default:"icon"},children:{type:String,default:"children"}},setup(e){const{routes:t}=p();Pinia.storeToRefs(t);const o=(e,o)=>{Array.isArray(e)&&e.length?t.updatePath(e[o]):t.updatePath(e)};return(t,n)=>{const r=Vue.resolveComponent("el-menu-item"),a=Vue.resolveComponent("el-sub-menu"),i=Vue.resolveComponent("el-menu");return Vue.openBlock(),Vue.createBlock(i,Vue.mergeProps({defaultActive:e.defaultActive,router:e.router},t.$attrs,{"default-openeds":[t.$route.path]}),{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.data,((t,n)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:n},[t[e.children]&&t[e.children].length?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createBlock(r,{key:0,index:t[e.index],onClick:e=>o(t,void 0)},{default:Vue.withCtx((()=>[t[e.icon]?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(`el-icon-${Vue.unref(f)(t[e.icon])}`),{key:0})):Vue.createCommentVNode("",!0),Vue.createElementVNode("span",v,Vue.toDisplayString(t[e.name]),1)])),_:2},1032,["index","onClick"])),t[e.children]&&t[e.children].length?(Vue.openBlock(),Vue.createBlock(a,{key:1,index:t[e.index]},{title:Vue.withCtx((()=>[t[e.icon]?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(`el-icon-${Vue.unref(f)(t[e.icon])}`),{key:0})):Vue.createCommentVNode("",!0),Vue.createElementVNode("span",_,Vue.toDisplayString(t[e.name]),1)])),default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t[e.children],((n,a)=>(Vue.openBlock(),Vue.createBlock(r,{key:a,index:n[e.index],onClick:n=>o(t[e.children],a)},{default:Vue.withCtx((()=>[n[e.icon]?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(`el-icon-${Vue.unref(f)(n[e.icon])}`),{key:0})):Vue.createCommentVNode("",!0),Vue.createElementVNode("span",k,Vue.toDisplayString(n[e.name]),1)])),_:2},1032,["index","onClick"])))),128))])),_:2},1032,["index"])):Vue.createCommentVNode("",!0)],64)))),128))])),_:1},16,["defaultActive","router","default-openeds"])}}}),[["__scopeId","data-v-3c3a4ffc"]]),C=Vue.defineComponent({name:"navSide",props:{isCollapse:{type:Boolean,default:()=>!0}},setup(e){const{routes:t}=p(),{navList:o}=Pinia.storeToRefs(t),n=[{icon:"Sort",title:"首页",path:"/home"},{icon:"Sort",title:"菜单页",path:"/pages",children:[{i:"1",title:"菜单页1-1",path:"/pagesOne"}]}];return(e,t)=>(Vue.openBlock(),Vue.createBlock(y,{class:"el-menu-vertical-demo",data:Vue.unref(o).length?Vue.unref(o):n,"default-active":e.$route.path,router:"",collapse:e.isCollapse,"background-color":"#001529","active-text-color":"#fff","text-color":"#c0c4cc",index:"path",name:"title"},null,8,["data","default-active","collapse"]))}}),x={class:"header"},w=g(Vue.defineComponent({name:"navHeader",props:{isCollapse:{type:Boolean,default:()=>!0}},emits:["update:isCollapse"],setup(e,{emit:t}){const{routes:o}=p(),{path:n}=Pinia.storeToRefs(o),r=VueRouter.useRouter();VueRouter.useRoute();const a=e,i=t,l=()=>{i("update:isCollapse",!a.isCollapse)},s=Vue.ref("");return Vue.watch((()=>r.currentRoute.value),(e=>{s.value=e.path}),{immediate:!0}),(e,t)=>{const a=Vue.resolveComponent("el-icon-expand"),i=Vue.resolveComponent("el-icon-fold"),u=Vue.resolveComponent("el-icon-close"),c=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",x,[Vue.createElementVNode("span",{onClick:l},[e.isCollapse?(Vue.openBlock(),Vue.createBlock(a,{key:0,style:{"margin-right":"0.625rem"}})):(Vue.openBlock(),Vue.createBlock(i,{key:1}))]),Vue.createElementVNode("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(n),((e,t)=>(Vue.openBlock(),Vue.createBlock(c,{onClick:t=>(e=>{r.push({path:e.path})})(e),key:t,type:e.path===s.value?"primary":void 0,size:"small"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.title)+" ",1),0!==t?(Vue.openBlock(),Vue.createBlock(u,{key:0,onClick:Vue.withModifiers((t=>(e=>{const t=o.$state.path.findIndex((t=>e.path===t.path));0!==t&&(r.replace(o.$state.path[t-1].path),o.deletePath(e))})(e)),["stop"]),class:Vue.normalizeClass({"white-color":e.path===s.value}),style:{width:"0.875rem",height:"0.875rem","margin-left":"0.4375rem"}},null,8,["onClick","class"])):Vue.createCommentVNode("",!0)])),_:2},1032,["onClick","type"])))),128))])])}}}),[["__scopeId","data-v-058eaecd"]]),E=g(Vue.defineComponent({__name:"index",setup(e){const t=Vue.ref(!1);return(e,o)=>{const n=Vue.resolveComponent("el-aside"),r=Vue.resolveComponent("el-header"),a=Vue.resolveComponent("router-view"),i=Vue.resolveComponent("el-main"),l=Vue.resolveComponent("el-container");return Vue.openBlock(),Vue.createBlock(l,null,{default:Vue.withCtx((()=>[Vue.createVNode(n,{width:"auto"},{default:Vue.withCtx((()=>[Vue.createVNode(C,{"is-collapse":t.value,"onUpdate:isCollapse":o[0]||(o[0]=e=>t.value=e)},null,8,["is-collapse"])])),_:1}),Vue.createVNode(l,null,{default:Vue.withCtx((()=>[Vue.createVNode(r,null,{default:Vue.withCtx((()=>[Vue.createVNode(w,{"is-collapse":t.value,"onUpdate:isCollapse":o[1]||(o[1]=e=>t.value=e)},null,8,["is-collapse"])])),_:1}),Vue.createVNode(i,{style:{border:"0.5rem solid #F5F7FA",padding:"0px"}},{default:Vue.withCtx((()=>[Vue.createVNode(a,null,{default:Vue.withCtx((({Component:e})=>[Vue.createVNode(Vue.Transition,{name:"ranimate",mode:"out-in"},{default:Vue.withCtx((()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e),{style:{"border-radius":"0.625rem"}}))])),_:2},1024)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-71cc5b68"]]),S=[{path:"/",component:E,redirect:"/login",name:"login",meta:{title:"登录"},children:[{path:"/home",component:h,meta:{title:"首页"}}]},{path:"/login",component:()=>n((()=>import("./Login-DwH03Dwm.js")),__vite__mapDeps([0,1]),import.meta.url)},{path:"/:pathMatch(.*)*",component:()=>n((()=>import("./404-Da1A44e_.js")),[],import.meta.url)}],T=VueRouter.createRouter({routes:S,history:VueRouter.createWebHashHistory()});function B(e,t){const{user:o}=p(),{value:n}=t,r=o.getUser.permission.points;if(!(n&&n instanceof Array))throw new Error('v-domDirective value is ["admin","editor"]');r.some((e=>n.includes(e)))||e.parentNode&&e.parentNode.removeChild(e)}const P={mounted(e,t){B(e,t)},update(e,t){B(e,t)}};const N={class:"basic"},D={class:"modal"},L={class:"box"},b={style:{display:"flex","margin-top":"1.25rem",width:"100%","justify-content":"space-around"}},O=g(Vue.defineComponent({__name:"modal",props:{message:{default:""}},emits:["ok","cancel"],setup(e,{emit:t}){const o=t,n=()=>{o("ok")},r=()=>{o("cancel")};return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",N,[Vue.createElementVNode("div",D,[Vue.createElementVNode("div",L,Vue.toDisplayString(e.message),1),Vue.createElementVNode("div",b,[Vue.createVNode(Vue.unref(ElementPlus.ElButton),{onClick:r},{default:Vue.withCtx((()=>[Vue.createTextVNode("取消")])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElButton),{onClick:n,type:"primary"},{default:Vue.withCtx((()=>[Vue.createTextVNode("确认")])),_:1})])])]))}}),[["__scopeId","data-v-2d0adb5e"]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),A=({message:e,ok:t,cancel:o})=>{const n=Vue.createApp(O,{message:e,onOk(){t&&t(),n.unmount(),r.remove()},onCancel(){o&&o(),n.unmount(),r.remove()}}),r=document.createElement("div");document.body.appendChild(r),n.mount(r)};A.install=e=>{e.config.globalProperties.$ShowMessage=({message:e,ok:t,cancel:o})=>A({message:e,ok:t,cancel:o})};const I=VueI18n.createI18n({legacy:!1,locale:"zh",messages:{zh:{message:{user:"用户信息",language:"语言切换"}},en:{message:{user:"UserInfo",language:"language"}}}}),j=Object.assign({"./views/404.vue":()=>n((()=>import("./404-Da1A44e_.js")),[],import.meta.url),"./views/Home.vue":()=>n((()=>Promise.resolve().then((()=>V))),void 0,import.meta.url),"./views/gdMap/index.vue":()=>n((()=>import("./index-DpO0o2er.js")),[],import.meta.url),"./views/getPicture/index.vue":()=>n((()=>import("./index-rLg-G22l.js")),__vite__mapDeps([2,3]),import.meta.url),"./views/homeTwo/HomeTwo.vue":()=>n((()=>import("./HomeTwo-CCA899JC.js")),[],import.meta.url),"./views/login/Login.vue":()=>n((()=>import("./Login-DwH03Dwm.js")),__vite__mapDeps([0,1]),import.meta.url),"./views/modal.vue":()=>n((()=>Promise.resolve().then((()=>R))),void 0,import.meta.url),"./views/pages/pagesOne.vue":()=>n((()=>import("./pagesOne-C1w9y1rR.js")),[],import.meta.url),"./views/tableExport/index.vue":()=>n((()=>import("./index-CYO_VqOm.js")),[],import.meta.url),"./views/userOne/index.vue":()=>n((()=>import("./index-CuxagWou.js")),[],import.meta.url),"./views/userTwo/index.vue":()=>n((()=>import("./index-eCChOUbJ.js")),[],import.meta.url)}),M=["/login","/404"];T.beforeEach((async(e,t,o)=>{const{user:n,routes:r}=p(),{userData:a,token:i}=Pinia.storeToRefs(n);if(i)if("/"===e.path)o("/home");else if(n.getUser.name)o();else try{const t=await n.getUserInfo(),{menus:a}=t.permission;if(!a.length)return;a.forEach((e=>{T.addRoute({path:e.path,component:E,redirect:e.redirect,meta:{...e.meta},children:e.children&&e.children.length?e.children.map((e=>({path:e.path,component:j[`./views/${e.component}.vue`],meta:e.meta}))):[]})})),r.setNavListData(a),"/404"===e.path&&void 0!==e.redirectedFrom?o({path:e.redirectedFrom.fullPath,replace:!0}):o({...e,replace:!0})}catch(l){}else M.indexOf(e.path)>-1?o():o("/login")}));const $=Vue.createApp(t),F=Pinia.createPinia();for(let U in e)$.component(`el-icon-${f(U)}`,e[U]);$.directive("domDirective",P),$.use(T).use(ElementPlus,{locale:{name:"zh-cn",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tour:{next:"下一步",previous:"上一步",finish:"结束导览"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},carousel:{leftArrow:"上一张幻灯片",rightArrow:"下一张幻灯片",indicator:"幻灯片切换至索引 {index}"}}}}).use(F).use(A).use(I),$.mount("#app");export{g as _,r as a,n as b,T as r,p as u};
