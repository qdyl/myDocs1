import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,b as a}from"./app-1NjjKqHv.js";const s={},d=a(`<h2 id="frame" tabindex="-1"><a class="header-anchor" href="#frame" aria-hidden="true">#</a> Frame</h2><h2 id="window-方法" tabindex="-1"><a class="header-anchor" href="#window-方法" aria-hidden="true">#</a> window 方法</h2><h3 id="window-open弹窗" tabindex="-1"><a class="header-anchor" href="#window-open弹窗" aria-hidden="true">#</a> window.open弹窗</h3><p>打开一个弹窗的语法是 window.open(url, name, params)：</p><ul><li>url // 新窗口的 url</li><li>name // 窗口名字</li><li>params // 新窗口的配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>位置:
left/top（数字）—— 屏幕上窗口的左上角的坐标。这有一个限制：不能将新窗口置于屏幕外（offscreen）。
width/height（数字）—— 新窗口的宽度和高度。宽度/高度的最小值是有限制的，因此不可能创建一个不可见的窗口。

窗口功能：
menubar（yes/no）—— 显示或隐藏新窗口的浏览器菜单。
toolbar（yes/no）—— 显示或隐藏新窗口的浏览器导航栏（后退，前进，重新加载等）。
location（yes/no）—— 显示或隐藏新窗口的 URL 字段。Firefox 和 IE 浏览器不允许默认隐藏它。
status（yes/no）—— 显示或隐藏状态栏。同样，大多数浏览器都强制显示它。
resizable（yes/no）—— 允许禁用新窗口大小调整。不建议使用。
scrollbars（yes/no）—— 允许禁用新窗口的滚动条。不建议使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = \`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000\`;

open(&#39;/&#39;, &#39;标题&#39;, params);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240322153121539.png" alt="image-20240322153121539" tabindex="0" loading="lazy"><figcaption>image-20240322153121539</figcaption></figure>`,9),l=[d];function r(o,t){return i(),n("div",null,l)}const u=e(s,[["render",r],["__file","page2.html.vue"]]);export{u as default};
