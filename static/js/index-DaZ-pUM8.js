import{u as e,r as o}from"./index-DcPZCZAn.js";const t=axios.create({baseURL:"https://api-test.example.com",timeout:5e3});t.interceptors.request.use((o=>{const{user:t}=e();return console.log("===================================="),console.log(t.getToken),console.log("===================================="),t.getToken&&(o.headers.Authorization=`Bearer ${t.getToken}`,console.log(o,"config")),o}),(e=>Promise.reject(e))),t.interceptors.response.use((async e=>{const{success:o,message:t,data:s}=e.data;return o?Promise.resolve(s):(ElementPlus.ElMessage.error(t),Promise.reject(new Error(t)))}),(t=>{const{user:s}=e();return t.response&&t.response.data&&401===t.response.data.code&&(s.outLogin(),o.replace("/login")),ElementPlus.ElMessage.error(t.message),Promise.reject(t)}));const s=Vue.defineComponent({__name:"index",setup(e){const o=()=>{t.get("https://www.baidu.com").then((e=>{}))};return(e,t)=>{const s=Vue.resolveComponent("el-button"),r=Vue.resolveDirective("domDirective");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(s,{onClick:o},{default:Vue.withCtx((()=>[Vue.createTextVNode("用户1")])),_:1})),[[r,["login"]]])])}}});export{s as default};
