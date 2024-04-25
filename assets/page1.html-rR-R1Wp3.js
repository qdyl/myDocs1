import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as r,d as u,w as s,a as n,e as p,f as t,b as d}from"./app-b_Dxr_FD.js";const k={},v=p("h2",{id:"webpack-优化介绍",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#webpack-优化介绍","aria-hidden":"true"},"#"),t(" webpack 优化介绍")],-1),m=p("p",null,"configureWebpack 配置的两种方式",-1),b=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对象方式：
module.exports = {
  configureWebpack: {
    // 在这里可以直接配置 webpack
  }
}

函数方式：
module.exports = {
  configureWebpack: config =&gt; {
    // 在这里可以通过函数来配置 webpack
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包优化" tabindex="-1"><a class="header-anchor" href="#打包优化" aria-hidden="true">#</a> 打包优化</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基本路径</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 构建时的输出目录</span>
  <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 静态资源目录 (js, css, img, fonts)</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否开启eslint保存检测，有效值：true | false | &#39;error&#39;</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用包含运行时编译器的Vue核心的构建</span>
  <span class="token literal-property property">runtimeCompiler</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 生产环境是否生成 sourceMap 文件</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 开发环境配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动打开浏览器页面</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定使用一个 host。默认是 localhost，这里默认值即可</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8020</span><span class="token punctuation">,</span> <span class="token comment">// 端口地址</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用https提供服务</span>
    <span class="token comment">// string | Object 代理设置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 服务1</span>
      <span class="token string-property property">&#39;/apiMock&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apiMock&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 这里的目标地址可以是您的接口地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/apiMock&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 这里的 /mock 是您放置假的 JSON 数据的目录</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 服务2</span>
      <span class="token string-property property">&#39;/hrss/si/its&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://172.xxx.xxx.65:9105/hrss/si/its&#39;</span><span class="token punctuation">,</span> <span class="token comment">// </span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/hrss/si/its&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// webpack配置</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭 webpack 的性能提示</span>
    <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 任何大于20KB的文件都会被拆分成单独的文件。</span>
    <span class="token comment">// maxAsyncRequests和maxInitialRequests分别控制异步加载的文件和初始加载的文件的最大数量。将它们都设置为90将确保总文件数不超过90个</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// minSize: 20 * 1000,</span>
        <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">90</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 压缩配置：方式1</span>
      <span class="token comment">// new CompressionPlugin({</span>
      <span class="token comment">//   filename: &#39;[path].gz&#39;,</span>
      <span class="token comment">//   test: /\\.(js|css)$/i,</span>
      <span class="token comment">//   threshold: 10240, // 只有大于10KB的文件才会被压缩</span>
      <span class="token comment">//   deleteOriginalAssets: false // 是否删除原文件</span>
      <span class="token comment">// }),</span>
      <span class="token comment">// 打包文件数</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>LimitChunkCountPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxChunks</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token comment">// 最大打包文件数</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// 压缩配置 ：方式2</span>
    <span class="token comment">// config.plugins.push(new CompressionPlugin({</span>
    <span class="token comment">//   filename: &#39;[path].gz&#39;,</span>
    <span class="token comment">//   test: /\\.(js|css)$/i</span>
    <span class="token comment">// }))</span>
    <span class="token comment">// 2021.09.17 结束</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vue-loader 配置项</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">options</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修改它的选项...</span>
        <span class="token keyword">return</span> options
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// css相关配置</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不支持HMR</span>
    <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否开启 CSS source maps</span>
    <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// css预设器配置项</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// prependData: \`@import &quot;./src/styles/varibled.scss&quot;;\`</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 是否启用 CSS modules for all css / pre-processor files.</span>
    <span class="token comment">// requireModuleExtension: false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> tree-shaking</h3><h3 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h3><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,6);function y(h,g){const o=i("Tabs");return c(),r("div",null,[v,m,u(o,{id:"6",data:[{id:"标题 1"},{id:"值 2"}]},{title0:s(({value:a,isActive:e})=>[t("标题 1")]),title1:s(({value:a,isActive:e})=>[t("标题 2")]),tab0:s(({value:a,isActive:e})=>[n(" 此处，选项卡 1 的标题“标题 1”将用作值。 "),n(" tab 1 内容 ")]),tab1:s(({value:a,isActive:e})=>[n(" 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值"),n(" tab 2 内容 ")]),_:1}),n(" end "),b])}const w=l(k,[["render",y],["__file","page1.html.vue"]]);export{w as default};
