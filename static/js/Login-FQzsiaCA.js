import{_ as e}from"./index-CEI3wZx-.js";const o={class:"login-container"},l=e(Vue.defineComponent({__name:"Login",setup(e){Vue.ref(null);const l=Vue.ref({username:"",password:""}),u=VueRouter.useRouter(),t=()=>{u.replace("/home")};return(e,u)=>{const a=Vue.resolveComponent("el-input"),r=Vue.resolveComponent("el-form-item"),n=Vue.resolveComponent("el-button"),d=Vue.resolveComponent("el-form"),V=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createElementBlock("div",o,[Vue.createVNode(V,{class:"login-card"},{default:Vue.withCtx((()=>[Vue.createVNode(d,{ref_key:"loginForm",ref:l,model:l.value},{default:Vue.withCtx((()=>[Vue.createVNode(r,{label:"用户名",prop:"username"},{default:Vue.withCtx((()=>[Vue.createVNode(a,{modelValue:l.value.username,"onUpdate:modelValue":u[0]||(u[0]=e=>l.value.username=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),Vue.createVNode(r,{label:"密码",prop:"password"},{default:Vue.withCtx((()=>[Vue.createVNode(a,{type:"password",modelValue:l.value.password,"onUpdate:modelValue":u[1]||(u[1]=e=>l.value.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),Vue.createVNode(r,null,{default:Vue.withCtx((()=>[Vue.createVNode(n,{type:"primary",class:"login-btn",onClick:t},{default:Vue.withCtx((()=>[Vue.createTextVNode("点我进首页")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}}}),[["__scopeId","data-v-6a47f3fd"]]);export{l as default};
