import{u as e,r as t}from"./index-CcnUs3BI.js";import"@element-plus/icons-vue";const s=axios.create({baseURL:"https://api-production.example.com",timeout:5e3});s.interceptors.request.use((t=>{const{user:s}=e();return s.getToken&&(t.headers.Authorization=`Bearer ${s.getToken}`),t}),(e=>Promise.reject(e))),s.interceptors.response.use((async e=>{const{success:t,message:s,data:o}=e.data;return t?Promise.resolve(o):(ElementPlus.ElMessage.error(s),Promise.reject(new Error(s)))}),(s=>{const{user:o}=e();return s.response&&s.response.data&&401===s.response.data.code&&(o.outLogin(),t.replace("/login")),ElementPlus.ElMessage.error(s.message),Promise.reject(s)}));const o=Vue.defineComponent({__name:"index",setup(e){const{proxy:t}=Vue.getCurrentInstance(),o=()=>{s.get("/sss").then((e=>{}))},r=()=>{t.$ShowMessage({message:"消息",ok:()=>{},cancel:()=>{}})};return(e,t)=>{const s=Vue.resolveComponent("el-button"),n=Vue.resolveDirective("domDirective");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(s,{onClick:o},{default:Vue.withCtx((()=>[Vue.createTextVNode("axios调用")])),_:1})),[[n,["login"]]]),Vue.createVNode(s,{onClick:r},{default:Vue.withCtx((()=>[Vue.createTextVNode("函数式组件")])),_:1})])}}});export{o as default};
