import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as l,d as e,w as t,b as o,e as n,f as s}from"./app-b_Dxr_FD.js";const u={},r=o(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="判断为空值" tabindex="-1"><a class="header-anchor" href="#判断为空值" aria-hidden="true">#</a> 判断为空值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_isEmpty</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 如果是基本数据烈性</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h2><h2 id="文本-字符解析" tabindex="-1"><a class="header-anchor" href="#文本-字符解析" aria-hidden="true">#</a> 文本/字符解析</h2><h3 id="从身份证中解析信息" tabindex="-1"><a class="header-anchor" href="#从身份证中解析信息" aria-hidden="true">#</a> 从身份证中解析信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移除富文本中的html标签" tabindex="-1"><a class="header-anchor" href="#移除富文本中的html标签" aria-hidden="true">#</a> 移除富文本中的html标签</h3>`,8),d=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("  "),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"stripHtmlTags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"htmlString"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" htmlString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"<[^>]*>"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"var"),s(" richText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"<p>我是富文本内容 <strong>加粗字体</strong>你好</p>"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" plainText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"stripHtmlTags"),n("span",{class:"token punctuation"},"("),s("richText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("plainText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("figure",null,[n("img",{src:"https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240227220318302.png",alt:"image-20240227220318302",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20240227220318302")],-1),m=n("h3",{id:"解析url参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解析url参数","aria-hidden":"true"},"#"),s(" 解析URL参数")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("    "),n("span",{class:"token keyword"},"const"),s(" pageHref "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"."),s("location"),n("span",{class:"token punctuation"},"."),s("href"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" url "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),s("pageHref"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" searchParams "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URLSearchParams"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"."),s("search"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 解析出 title 参数的值"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(" searchParams"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"adv"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 输出: hello"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=o(`<figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202160335798.png" alt="image-20240202160335798" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240202160335798</figcaption></figure><h2 id="拷贝" tabindex="-1"><a class="header-anchor" href="#拷贝" aria-hidden="true">#</a> 拷贝</h2><h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h3><h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>source <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> source <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error arguments&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;deepClone&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> targetObj <span class="token operator">=</span> source<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">keys</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>keys<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> source<span class="token punctuation">[</span>keys<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      targetObj<span class="token punctuation">[</span>keys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>keys<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      targetObj<span class="token punctuation">[</span>keys<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>keys<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> targetObj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function g(b,f){const a=c("CodeDemo");return i(),l("div",null,[r,e(a,{id:"code-demo-20",type:"normal",title:"%E7%A4%BA%E4%BE%8B",code:"eJyrVsoqVrJSUlBIK81LLsnMz1MoLinKLPAoyc0JSUwv1sgAMoKBInnpmgrVMXkKQFCUWlJalKeAkNErSi3ISUxO1dC3iY6zi9Wy00/XUVBX17QGqa+NyQNRZYlFCkWZyRkhqRUlCrYKMUo2BXbPOiY+m7H+6fqeZ9Pan81Z87St9em6nQo2QAfk56XbPe1a8HzT9Kdrpz/ZO9lGHyr4ZO+Cp0v32ugX2MUogY0HmQu0PDMPajCq62E2gpwCUp2cn1ecn5Oql5OfrgHXBZFUqgUAEYZp9Q=="},{default:t(()=>[d]),_:1}),k,m,e(a,{id:"code-demo-29",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsoqVrJSUgCC5Py84hKFgsT0VI+i1DQFW4XgkqLMvHSN8sy8lPxyvZz85MSSzPw8vQygrGZMHkJLaVEOUHVearlCaJCPBswATWtkNcWpiUXJGQGJRYm5xQjFwUiiGkBj9CDKYFr19RVeLF/8bN6Ep+27FEoyS3JSFZ72Nz2buuH5rJanDXuQzYfI2qLYo5eeWqIRo5SYUhajhOya/JxUoG/SNcB6NK3B1uybDLTDSiEjNScnPyZPqRYAL9tmTg=="},{default:t(()=>[v]),_:1}),h])}const x=p(u,[["render",g],["__file","page1.html.vue"]]);export{x as default};