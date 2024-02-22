import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as i,a as c,b as o,w as p,e as u,d as n,f as s}from"./app-E2yLQ0Pc.js";const d={},r=u(`<h2 id="pc端-大屏-led屏幕" tabindex="-1"><a class="header-anchor" href="#pc端-大屏-led屏幕" aria-hidden="true">#</a> PC端|大屏|LED屏幕</h2><h3 id="led屏幕" tabindex="-1"><a class="header-anchor" href="#led屏幕" aria-hidden="true">#</a> LED屏幕</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 屏幕在缩小的情况下，使用如下 css 样式，让屏幕撑满全屏
body{
 transform: scale(0.5);
 transform-origin: 0 0;
 width: 200%!important;
 height: 200%!important;// 如果需要微调，推荐使用 vh 单位
 overflow:hidden;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240201172437102.png" alt="image-20240201172437102" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202103124118.png" alt="image-20240202103124118" width="200" height="110" loading="lazy"></p>`,4),m=n("h2",{id:"h5页面适配",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#h5页面适配","aria-hidden":"true"},"#"),s(" H5页面适配")],-1),k=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("code")]),n("span",{class:"token punctuation"},">")]),s("vuepress-theme-hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("code")]),n("span",{class:"token punctuation"},">")]),s(` is
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ message }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
const { ref } = Vue;

export default {
  setup() {
    const message = ref("powerful");

`),n("span",{class:"token code keyword"},`    const handler = () => {
      message.value = "very " + message.value;
    };`),s(`

`),n("span",{class:"token code keyword"},`    return {
      message,
      handler,
    };`),s(`
  },
};
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
.box span {
  color: red;
}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(g,b){const a=t("CodeDemo");return l(),i("div",null,[r,c(' [![VuePress Hope 图标](/favicon.ico "VuePress Hope 图标")](https://theme-hope.vuejs.press/) '),m,o(a,{id:"code-demo-14",type:"vue",title:"Vue%20%E6%BC%94%E7%A4%BA%201",code:"eJxlkctuwyAQRX9lyipRm3ifYqtf0RUbCpPaKjaIh5vI4t87YLsPdWMzzL3njoaFjZpdGI84OiMjdmIC4HqYQRkZQivYm70JVq+poazGbk7oPIZwij2OeOqtQ97UDgxhEwYnJ3hRZlAfxOjlpA164iwLjGSV7wg586bIVkf3UJMbiqYw3vwaiAflBxfppOwUIizg8QoZWnhN+CwIgDdnfQSNV5kMCQoqYEzucFwLgNW6Z7cFcRDM2U/012QEO1bQj3IbmZTEaLsdAzviPEuTCkiwGf2dfvD4t0fAos/fYE8T+ekf6Wmvt8itLj76UlVOtKp9CTzEuyl7OdPTQF10RSprrL9QiiZ9rpZNyPIXNPGg1Q=="},{default:p(()=>[k]),_:1})])}const w=e(d,[["render",v],["__file","page2.html.vue"]]);export{w as default};
