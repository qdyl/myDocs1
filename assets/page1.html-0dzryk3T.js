import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as p,a as n,b as s}from"./app-xMrARyrX.js";const t={},o=s(`<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><h3 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解" aria-hidden="true">#</a> 配置详解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9528</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">// 配置 1</span>
       <span class="token string-property property">&#39;/hrss/rc/employ&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8092/hrss/rc/employ&#39;</span><span class="token punctuation">,</span> <span class="token comment">//</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/hrss/rc/employ&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置2.1 （如果都是  /hrss/rc/operate 服务，其中一个接口想联调本地的，其他的都联调线上的服务，可以将 单独的某一个接口的正则配置更加详细，放在上面）</span>
      <span class="token string-property property">&#39;/hrss/rc/operate/web/bigscreen/getHireFairHandlingBusinessStatistics&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8098/hrss/rc/operate/web/bigscreen/getHireFairHandlingBusinessStatistics&#39;</span><span class="token punctuation">,</span> <span class="token comment">//</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/hrss/rc/operate/web/bigscreen/getHireFairHandlingBusinessStatistics&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置2.2</span>
      <span class="token string-property property">&#39;/hrss/rc/operate&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// target: &#39;http://82.xx.xx.12/hrss/rc/operate&#39;, //</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/hrss/rc/operate&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨域问题记录" tabindex="-1"><a class="header-anchor" href="#跨域问题记录" aria-hidden="true">#</a> 跨域问题记录</h3><blockquote><p>以下针对 Vue CLI 3.x 项目</p></blockquote><h4 id="原因1-vue-config-js-中的-服务端口和-env-development-中配置的请求端口不一致" tabindex="-1"><a class="header-anchor" href="#原因1-vue-config-js-中的-服务端口和-env-development-中配置的请求端口不一致" aria-hidden="true">#</a> 原因1：vue.config.js 中的 服务端口和 env.development 中配置的请求端口不一致</h4><blockquote><p>在没有配置 DevServer的端口配置 8080 主要用于开发服务器本身的端口，而不会影响页面发出的请求使用的端口。</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312092725239.png" alt="image-20240312092725239" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312093844515.png" alt="image-20240312093844515" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311155826061.png" alt="image-20240311155826061" width="200" height="110" loading="lazy"></p><p><strong>解决方案:</strong> <br> 设置： VUE_APP_BASE_API = &#39;/&#39; 或 VUE_APP_BASE_API = &#39;&#39;</p><p><strong>正常效果</strong> <br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312095248530.png" alt="image-20240312095248530" loading="lazy"></p><h2 id="vue-config-js-配置" tabindex="-1"><a class="header-anchor" href="#vue-config-js-配置" aria-hidden="true">#</a> vue.config.js 配置</h2>`,11),l=s(`<details><summary>更多</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const CompressionPlugin = require(&#39;compression-webpack-plugin&#39;)</span>
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
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">6400</span><span class="token punctuation">,</span> <span class="token comment">// 端口地址</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用https提供服务</span>
    <span class="token comment">// string | Object 代理设置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/apiMock&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apiMock&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 这里的目标地址可以是您的接口地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/apiMock&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 这里的 /mock 是您放置假的 JSON 数据的目录</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 码表</span>
      <span class="token string-property property">&#39;/hrss/si/its&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://172.16.37.65:9105/hrss/si/its&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 华勇</span>
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
        <span class="token keyword">return</span> options<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function i(r,c){return e(),p("div",null,[o,n(" start "),l,n(" end ")])}const d=a(t,[["render",i],["__file","page1.html.vue"]]);export{d as default};
