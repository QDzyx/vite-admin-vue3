import{_ as t}from"./index-_cJysK9s.js";const e={class:"my-gantt"},a=[(t=>(Vue.pushScopeId("data-v-5e493415"),t=t(),Vue.popScopeId(),t))((()=>Vue.createElementVNode("div",{id:"gantt_here",class:"gantt-container"},null,-1)))],r=t({__name:"Login",setup(t,{expose:r}){const n={data:[{id:11,text:"Project #1",start_date:"28-03-2023",duration:"11",progress:.6,open:!0},{id:1,text:"Project #2",start_date:"01-04-2023",duration:"18",progress:.4,open:!0},{id:2,text:"Task #1",start_date:"02-04-2023",duration:"8",parent:"1",progress:.5,open:!0},{id:3,text:"Task #2",start_date:"11-04-2023",duration:"8",parent:"1",progress:.6,open:!0},{id:4,text:"Task #3",start_date:"13-04-2023",duration:"6",parent:"1",progress:.5,open:!0},{id:5,text:"Task #1.1",start_date:"02-04-2023",duration:"7",parent:"2",progress:.6,open:!0},{id:6,text:"Task #1.2",start_date:"03-04-2023",duration:"7",parent:"2",progress:.6,open:!0},{id:7,text:"Task #2.1",start_date:"11-04-2023",duration:"8",parent:"3",progress:.6,open:!0},{id:8,text:"Task #3.1",start_date:"14-04-2023",duration:"5",parent:"4",progress:.5,open:!0},{id:9,text:"Task #3.2",start_date:"14-04-2023",duration:"4",parent:"4",progress:.5,open:!0},{id:10,text:"Task #3.3",start_date:"14-04-2023",duration:"3",parent:"4",progress:.5,open:!0},{id:12,text:"Task #1",start_date:"03-04-2023",duration:"5",parent:"11",progress:1,open:!0},{id:13,text:"Task #2",start_date:"02-04-2023",duration:"7",parent:"11",progress:.5,open:!0},{id:14,text:"Task #3",start_date:"02-04-2023",duration:"6",parent:"11",progress:.8,open:!0},{id:15,text:"Task #4",start_date:"02-04-2023",duration:"5",parent:"11",progress:.2,open:!0},{id:16,text:"Task #5",start_date:"02-04-2023",duration:"7",parent:"11",progress:0,open:!0},{id:17,text:"Task #2.1",start_date:"03-04-2023",duration:"2",parent:"13",progress:1,open:!0},{id:18,text:"Task #2.2",start_date:"06-04-2023",duration:"3",parent:"13",progress:.8,open:!0},{id:19,text:"Task #2.3",start_date:"10-04-2023",duration:"4",parent:"13",progress:.2,open:!0},{id:20,text:"Task #2.4",start_date:"10-04-2023",duration:"4",parent:"13",progress:0,open:!0},{id:21,text:"Task #4.1",start_date:"03-04-2023",duration:"4",parent:"15",progress:.5,open:!0},{id:22,text:"Task #4.2",start_date:"03-04-2023",duration:"4",parent:"15",progress:.1,open:!0},{id:23,text:"Task #4.3",start_date:"03-04-2023",duration:"5",parent:"15",progress:0,open:!0}]},s=Vue.reactive({});return Vue.onBeforeMount((()=>{})),Vue.onMounted((()=>{gantt.gantt.config.grid_width=350,gantt.gantt.config.add_column=!1,gantt.gantt.config.autofit=!1,gantt.gantt.config.row_height=60,gantt.gantt.config.bar_height=34,gantt.gantt.config.auto_types=!0,gantt.gantt.config.readonly=!0,gantt.gantt.i18n.setLocale("cn"),gantt.gantt.init("gantt_here"),gantt.gantt.parse(n)})),Vue.watchEffect((()=>{})),r({...Vue.toRefs(s)}),(t,r)=>(Vue.openBlock(),Vue.createElementBlock("div",e,a))}},[["__scopeId","data-v-5e493415"]]);export{r as default};
