import{defineDisplay as n}from"@directus/extensions-sdk";import{defineComponent as e,resolveComponent as i,openBlock as t,createElementBlock as o,createElementVNode as l,withModifiers as r,createVNode as s,createTextVNode as a,toDisplayString as p}from"vue";var u=e({props:{value:{type:String,default:null}}});const c=["href"];u.render=function(n,e,u,d,f,v){const m=i("v-icon");return t(),o("div",null,[l("a",{href:n.value,target:"_blank",onClick:e[0]||(e[0]=r((()=>{}),["stop"]))},[s(m,{name:"open_in_new",left:""})],8,c),a(" "+p(n.value),1)])},u.__file="src/display.vue";var d=n({id:"extension-display-link",name:"Link",icon:"open_in_new",description:"Display URLs with an open in new tab icon link",component:u,options:null,types:["string"]});export{d as default};
