import{u as e,r as t}from"./index-CAJxG2ZI.js";const r=axios.create({baseURL:"https://api-production.example.com",timeout:5e3});r.interceptors.request.use((t=>{const{user:r}=e();return r.getToken&&(t.headers.Authorization=`Bearer ${r.getToken}`),t}),(e=>Promise.reject(e))),r.interceptors.response.use((async e=>{const{success:t,message:r,data:s}=e.data;return t?Promise.resolve(s):(ElementPlus.ElMessage.error(r),Promise.reject(new Error(r)))}),(r=>{const{user:s}=e();return r.response&&r.response.data&&401===r.response.data.code&&(s.outLogin(),t.replace("/login")),ElementPlus.ElMessage.error(r.message),Promise.reject(r)}));const s=Vue.defineComponent({__name:"index",setup(e){const{proxy:t}=Vue.getCurrentInstance(),s=()=>{r.get("/sss").then((e=>{}))},o=()=>{t.$ShowMessage({message:"消息",ok:()=>{},cancel:()=>{}})};return(e,t)=>{const r=Vue.resolveComponent("el-button"),n=Vue.resolveDirective("domDirective");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(r,{onClick:s},{default:Vue.withCtx((()=>[Vue.createTextVNode("axios调用")])),_:1})),[[n,["login"]]]),Vue.createVNode(r,{onClick:o},{default:Vue.withCtx((()=>[Vue.createTextVNode("函数式组件")])),_:1})])}}});export{s as default};
