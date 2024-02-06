import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,f as n}from"./app-c8wFea3_.js";const r={},s=n(`<h2 id="vuepress-theme-hope-问题汇总" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-问题汇总" aria-hidden="true">#</a> vuepress-theme-hope 问题汇总</h2><h3 id="图标-icon-显示不了" tabindex="-1"><a class="header-anchor" href="#图标-icon-显示不了" aria-hidden="true">#</a> 图标 icon 显示不了</h3><ul><li>原因1：icon</li></ul><h3 id="自动生成侧边栏失败" tabindex="-1"><a class="header-anchor" href="#自动生成侧边栏失败" aria-hidden="true">#</a> 自动生成侧边栏失败</h3><h3 id="外部图片显示不了" tabindex="-1"><a class="header-anchor" href="#外部图片显示不了" aria-hidden="true">#</a> 外部图片显示不了</h3><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202110753028.png" alt="image-20240202110753028" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202111114315.png" alt="image-20240202111114315" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202112421452.png" alt="image-20240202112421452" width="200" height="110" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 解决外部图片不显示的问题，图片报 302
  head: [
    [
      &#39;meta&#39;,
      {
        name: &#39;referrer&#39;,
        content: &#39;no-referrer&#39;
      }
    ]
  ],</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[s];function t(l,h){return a(),i("div",null,d)}const o=e(r,[["render",t],["__file","page1.html.vue"]]);export{o as default};
