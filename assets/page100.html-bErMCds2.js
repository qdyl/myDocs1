import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-Lkt2yug4.js";const p={},e=t(`<h2 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段" aria-hidden="true">#</a> 代码片段</h2><h3 id="信息完善提示" tabindex="-1"><a class="header-anchor" href="#信息完善提示" aria-hidden="true">#</a> 信息完善提示</h3><blockquote><p>简历完善提示、关注公众号提示</p><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240206141504888.png" alt="image-20240206141504888" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240206141504888</figcaption></figure></blockquote><details><summary>折叠/展开</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showWxInfo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>globalInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innerBox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>扫码关注“xxx”公众号 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ccc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showWxInfo=false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>enterBtn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showXjyQrcode = true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>去关注<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.globalInfo</span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span>999<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span>15px<span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 12px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);</span>
      <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 0.02667rem solid #ff976a<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
      <span class="token selector">.innerBox</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token important">!important</span><span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span>40px<span class="token important">!important</span><span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 15px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token selector">.content1</span><span class="token punctuation">{</span>
          <span class="token property">color</span><span class="token punctuation">:</span>#678<span class="token punctuation">;</span>
          <span class="token property">color</span><span class="token punctuation">:</span>#1989fa<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span>13px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.btns</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
        <span class="token selector">.enterBtn</span><span class="token punctuation">{</span>
          <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.closeIcon</span><span class="token punctuation">{</span>
          <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
          <span class="token property">top</span><span class="token punctuation">:</span>-12px<span class="token punctuation">;</span>
          <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
          <span class="token property">border-radius</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
          <span class="token property">z-index</span><span class="token punctuation">:</span>88<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240206141504888.png" alt="image-20240206141504888" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240206141504888</figcaption></figure></details>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","page100.html.vue"]]);export{k as default};
