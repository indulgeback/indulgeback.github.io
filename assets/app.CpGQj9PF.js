import{T as e}from"./chunks/theme.DCKCKknt.js";import{a4 as a,a5 as t,a6 as n,a7 as s,a8 as r,a9 as o,aa as p,ab as u,ac as c,ad as i,ae as l,R as m,z as d,o as h,af as f,ag as g,ah as A,ai as v,Z as j}from"./chunks/framework.BrC0DRXd.js";const y=function e(a){if(a.extends){const t=e(a.extends);return{...t,...a,async enhanceApp(e){t.enhanceApp&&await t.enhanceApp(e),a.enhanceApp&&await a.enhanceApp(e)}}}return a}(e),b=m({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return h((()=>{f((()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value}))})),e.value.router.prefetchLinks&&g(),A(),v(),y.setup&&y.setup(),()=>j(y.Layout)}});async function k(){globalThis.__VITEPRESS__=!0;const e=function(){let e,t=a;return i((n=>{let s=l(n),r=null;return s&&(t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),r=import(s)),a&&(t=!1),r}),y.NotFound)}(),t=c(b);t.provide(n,e);const m=s(e.route);return t.provide(r,m),t.component("Content",o),t.component("ClientOnly",p),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>m.frontmatter.value},$params:{get:()=>m.page.value.params}}),y.enhanceApp&&await y.enhanceApp({app:t,router:e,siteData:u}),{app:t,router:e,data:m}}a&&k().then((({app:e,router:a,data:n})=>{a.go().then((()=>{t(a.route,n.site),e.mount("#app")}))}));export{k as createApp};
