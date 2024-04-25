import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as r,e,f as i,d,w as o,a as c,b as n}from"./app-b_Dxr_FD.js";const v={},m=e("h2",{id:"跨域经验",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#跨域经验","aria-hidden":"true"},"#"),i(" 跨域经验")],-1),u=n(`<h2 id="保留页面滚动条位置" tabindex="-1"><a class="header-anchor" href="#保留页面滚动条位置" aria-hidden="true">#</a> 保留页面滚动条位置</h2><h3 id="方式1-路由配置" tabindex="-1"><a class="header-anchor" href="#方式1-路由配置" aria-hidden="true">#</a> 方式1：路由配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件： src/router/index.js 
const createRouter = () =&gt;
  new Router({
    scrollBehavior: (to, from, savedPosition) =&gt; {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: constantRouterMap
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>正常效果</summary><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/111155655521.gif" alt="111155655521" tabindex="0" loading="lazy"><figcaption>111155655521</figcaption></figure></details><p><strong>存在的问题：</strong></p><blockquote><p>问题描述：页面的返回的时候，能正确打印出 savedPosition 的值，但是页面还是将滚动条置顶了？ <br> 原因：如果在页面切换过程中，列表页面的内容发生了变化（比如异步加载数据），可能会影响滚动条位置的保存和恢复。</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1119999911.gif" alt="1119999911" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311121050462.png" alt="image-20240311121050462" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311102458807.png" alt="image-20240311102458807" width="200" height="110" loading="lazy"></p>`,7),g=n(`<p><strong>解决方式1：</strong> 给页面加上一个高度 。</p><details><summary>解决后的效果</summary><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1111556895662355521.gif" alt="1111556895662355521" tabindex="0" loading="lazy"><figcaption>1111556895662355521</figcaption></figure></details><p><strong>解决方式2：</strong> 参照： 路由配置 + keep-alive （即方式3）</p><h3 id="方式2-keep-alive" tabindex="-1"><a class="header-anchor" href="#方式2-keep-alive" aria-hidden="true">#</a> 方式2： keep-alive</h3><blockquote><p>好像不能解决 缓存页面滚动条的的问题（这个问题待定）<br></p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311140143521.png" alt="image-20240311140143521" tabindex="0" loading="lazy"><figcaption>image-20240311140143521</figcaption></figure><h3 id="方式3-路由配置-keep-alive" tabindex="-1"><a class="header-anchor" href="#方式3-路由配置-keep-alive" aria-hidden="true">#</a> 方式3：路由配置 + keep-alive</h3><blockquote><p>这种方式，也不能 100% 缓存页面滚动条。 具体原因还在研究中 2024.03.11</p></blockquote><details><summary>详情</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件： src/router/index.js 
const createRouter = () =&gt;
  new Router({
    scrollBehavior: (to, from, savedPosition) =&gt; {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  },
  routes: constantRouterMap
})

// 文件： src/App.vue
  &lt;keep-alive :exclude=&quot;excludeRoutes&quot;&gt;
        &lt;router-view v-if=&quot;$route.meta.keepAlive&quot;&gt;&lt;/router-view&gt;
          &lt;!-- 这里是会被缓存的视图组件，比如 Home！ --&gt;
    &lt;/keep-alive&gt;
    &lt;router-view v-if=&quot;!$route.meta.keepAlive&quot;&gt;
        &lt;!-- 这里是不被缓存的视图组件，比如 Edit！ --&gt;
    &lt;/router-view&gt;

// 文件：路由配置

{
    path: &#39;/position&#39;,
    name: &#39;position&#39;,
    component: () =&gt; import(&#39;@/views/xxx/index.vue&#39;),
    meta: { title: &#39;找工作&#39;, keepAlive: true,  }
  },
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311141833764.png" alt="image-20240311141833764" tabindex="0" loading="lazy"><figcaption>image-20240311141833764</figcaption></figure></details>`,9);function p(b,h){const a=t("RouterLink");return l(),r("div",null,[m,e("p",null,[i("链接："),d(a,{to:"/WebEng/Dev_Debug/page1.html"},{default:o(()=>[i("参考链接")]),_:1})]),u,c(" - 页面内容变化：如果在页面切换过程中，列表页面的内容发生了变化（比如异步加载数据），可能会影响滚动条位置的保存和恢复。 "),g])}const k=s(v,[["render",p],["__file","page1.html.vue"]]);export{k as default};
