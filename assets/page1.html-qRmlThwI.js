import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as o,b as d,w as a,e as n,f as s,d as r}from"./app-Lkt2yug4.js";const u={},v=n("h2",{id:"常用-class-类名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用-class-类名","aria-hidden":"true"},"#"),s(" 常用 class 类名")],-1),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=r(`<h2 id="css-基础样式-重置" tabindex="-1"><a class="header-anchor" href="#css-基础样式-重置" aria-hidden="true">#</a> css 基础样式(重置)</h2><details><summary>点击折叠/展开</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 样式重置 */</span>
<span class="token selector">*</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul,ol,li</span><span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 工具类 */</span>

<span class="token selector">.fleft</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left
<span class="token punctuation">}</span>
<span class="token selector">.fright</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix:before,.clearfix:after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">// 单行省略号
.ellipsis</span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ellipsis2</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ellipsis3</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="形状" tabindex="-1"><a class="header-anchor" href="#形状" aria-hidden="true">#</a> 形状</h2><h3 id="下拉三角" tabindex="-1"><a class="header-anchor" href="#下拉三角" aria-hidden="true">#</a> 下拉三角</h3><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2><h3 id="渐变背景1" tabindex="-1"><a class="header-anchor" href="#渐变背景1" aria-hidden="true">#</a> 渐变背景1</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background:linear-gradient(180deg, #0193FE 0%, #F8F8F8 100%);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240206145751365.png" alt="image-20240206145751365" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240206145751365</figcaption></figure><h3 id="渐变背景2" tabindex="-1"><a class="header-anchor" href="#渐变背景2" aria-hidden="true">#</a> 渐变背景2</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div::before {
    background: linear-gradient(90deg, #fff, #4d95ef);
}
div::after{
    background: linear-gradient(270deg, #fff, #4d95ef);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240304230128583.png" alt="image-20240304230128406" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240304230128406</figcaption></figure>`,11);function g(f,y){const t=l("CodeTabs");return c(),o("div",null,[v,d(t,{id:"3",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:a(({value:e,isActive:i})=>[s("pnpm")]),title1:a(({value:e,isActive:i})=>[s("yarn")]),title2:a(({value:e,isActive:i})=>[s("npm")]),tab0:a(({value:e,isActive:i})=>[m]),tab1:a(({value:e,isActive:i})=>[k]),tab2:a(({value:e,isActive:i})=>[b]),_:1}),h])}const w=p(u,[["render",g],["__file","page1.html.vue"]]);export{w as default};
