import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as t,a as n,e,f as r,b as s}from"./app-LQCnbNa2.js";const d={},g=e("blockquote",null,[e("p",null,[r("以下针对 Vue CLI 3.x 项目"),e("br")])],-1),o=s(`<h2 id="vue2-项目创建" tabindex="-1"><a class="header-anchor" href="#vue2-项目创建" aria-hidden="true">#</a> vue2 项目创建</h2><h3 id="vue-cli-创建项目" tabindex="-1"><a class="header-anchor" href="#vue-cli-创建项目" aria-hidden="true">#</a> vue-cli 创建项目</h3><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240323013716536.png" alt="image-20240323013716536" tabindex="0" loading="lazy"><figcaption>image-20240323013716536</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create xxx // 创建 vue 项目

查看vue-cli 版本
vue --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><h3 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解" aria-hidden="true">#</a> 配置详解</h3><h3 id="跨域问题记录" tabindex="-1"><a class="header-anchor" href="#跨域问题记录" aria-hidden="true">#</a> 跨域问题记录</h3><p><strong>原因1：</strong> vue.config.js 中的 服务端口和 env.development 中配置的请求端口不一致 <br></p><blockquote><p>在没有配置DevServer的端口配置 8080 主要用于开发服务器本身的端口，而不会影响页面发出的请求使用的端口。</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312092725239.png" alt="image-20240312092725239" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312093844515.png" alt="image-20240312093844515" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311155826061.png" alt="image-20240311155826061" width="200" height="110" loading="lazy"></p><p><strong>解决方案:</strong> <br> 设置： VUE_APP_BASE_API = &#39;/&#39; 或 VUE_APP_BASE_API = &#39;&#39;</p><p><strong>正常效果</strong> <br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312095248530.png" alt="image-20240312095248530" loading="lazy"></p>`,12);function c(l,h){return i(),t("div",null,[g,n(" ## 开发环境搭建 "),o])}const p=a(d,[["render",c],["__file","page1 copy.html.vue"]]);export{p as default};