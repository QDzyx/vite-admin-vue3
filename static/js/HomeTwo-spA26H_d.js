import{u as e,a as t,b as o}from"./index-CAJxG2ZI.js";const n={style:{display:"flex",width:"100%","align-items":"center","justify-content":"center","font-size":"50px",color:"#409eff"}},r=Vue.createElementVNode("img",{src:t,alt:"",style:{width:"100px"}},null,-1),u=Vue.createElementVNode("img",{src:o,alt:"",style:{width:"100px"}},null,-1),a=Vue.defineComponent({__name:"HomeTwo",setup(t){const{user:o}=e(),{userData:a}=Pinia.storeToRefs(o),s=VueRouter.useRouter(),l=()=>{o.userLogin(),s.replace("/a")};return(e,t)=>{const o=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",n,[Vue.createTextVNode(" admin通用架子 "),Vue.createVNode(o,{type:"primary",onClick:l},{default:Vue.withCtx((()=>[Vue.createTextVNode("登录")])),_:1}),r,u])}}});export{a as default};
