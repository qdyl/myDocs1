import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as n,b as s}from"./app-077SK_Xy.js";const t={},l=s(`<h2 id="keepalive-类问题" tabindex="-1"><a class="header-anchor" href="#keepalive-类问题" aria-hidden="true">#</a> keepAlive 类问题</h2><h3 id="keepalive-导致动态路由匹配的页面不能刷新。" tabindex="-1"><a class="header-anchor" href="#keepalive-导致动态路由匹配的页面不能刷新。" aria-hidden="true">#</a> keepAlive 导致动态路由匹配的页面不能刷新。</h3><p>问题复现： <br></p><blockquote><p>从企业列表跳转到详情页面，企业id 是变化的，但是企业详情的页面被缓存了。<br></p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240315120134174.png" alt="image-20240315120134174" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1118589615589666933888856895662358952ssss1.gif" alt="1118589615589666933888856895662358952ssss1" width="200" height="110" loading="lazy"></p><p>问题分析： <br></p><blockquote><p>按照 讯飞星火的解答试了下，还是会存在企业详情页面被缓存的问题。 GPT 解释的更准确。 <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1118583339615589666933888856895662358952ssss1.gif" alt="1118583339615589666933888856895662358952ssss1" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240315141720615.png" alt="image-20240315141720615" width="200" height="110" loading="lazy"></p></blockquote><details><summary>更多</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue2.x 项目中，
App.vue 的页面如下：
&lt; keep-alive &gt;
        &lt;router-view v-if=&quot;$route.meta.keepAlive&quot;&gt;&lt;/router-view&gt;
          &lt;!-- 这里是会被缓存的视图组件，比如 Home！ --&gt;
      &lt;/keep-alive&gt;

其中路由配置如下：
{
  path: &#39;/companyPosition&#39;,
  name: &#39;companyPosition&#39;,
  component: CompanyPosition,
  meta: {
    keepAlive: true // 设置 keep-alive 缓存
  }
}
通过   this.$router.push({ path: &#39;/companyPosition&#39;, query: { &#39;companyId&#39;: id }}) 跳转到详情页面
详情页面  /companyPosition?companyId=1313d5a38c5a4b389b61b6c796e7c1b7  和  /companyPosition?companyId=200054922    为啥companyId 不同，页面还是被缓存了？

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8);function d(r,m){return i(),a("div",null,[l,n(" end ")])}const v=e(t,[["render",d],["__file","page2.html.vue"]]);export{v as default};
