import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o,c as u,d as c,w as e,b as t,f as i,e as s}from"./app-1NjjKqHv.js";const p={},v=t('<h2 id="vue3-简介" tabindex="-1"><a class="header-anchor" href="#vue3-简介" aria-hidden="true">#</a> vue3 简介</h2><p>技术栈：vue3 + typescript + setup语法糖</p><h3 id="主要内容梳理" tabindex="-1"><a class="header-anchor" href="#主要内容梳理" aria-hidden="true">#</a> 主要内容梳理</h3><ul><li>核心：ref reactive computed watch 生命周期...</li><li>常用：hooks 自定义ref 路由 mitt...</li><li>面试：组件通信 响应式相关Api</li></ul><h3 id="vue3-优势" tabindex="-1"><a class="header-anchor" href="#vue3-优势" aria-hidden="true">#</a> vue3 优势</h3><ul><li>性能提升</li><li>源码的升级</li><li>拥抱 Typescript <ul><li>CompositionAPI ： setup、computed 与 watch</li><li>新的内置组件 ： Fragment 、Teleport 、Suspense</li><li>其他的改变： 新的生命周期钩子、移除keyCode</li></ul></li></ul><h2 id="工程创建" tabindex="-1"><a class="header-anchor" href="#工程创建" aria-hidden="true">#</a> 工程创建</h2><h3 id="创建的两种方式" tabindex="-1"><a class="header-anchor" href="#创建的两种方式" aria-hidden="true">#</a> 创建的两种方式</h3>',8),h=s("p",null,[i("npm create vue@latest "),s("br"),i(" // node 版本要大于 18 （node 安装信息查看：在 cmd 终端中输入 node）")],-1),m=s("p",null,"vue create xxx",-1),g=t(`<h3 id="vite-的优势" tabindex="-1"><a class="header-anchor" href="#vite-的优势" aria-hidden="true">#</a> vite 的优势</h3><ul><li>轻量块的热重载（HMR），能实现极速的服务启动</li><li>对 TypeScript 、JSX、CSS 等支持开箱即用</li><li>真正的按需编译，不再等待整个应用编译完成</li><li>webpack 构建禹 vite 的构建对比图如下： <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240323015040607.png" alt="image-20240323015040607" loading="lazy"></li></ul><h3 id="工程目录介绍" tabindex="-1"><a class="header-anchor" href="#工程目录介绍" aria-hidden="true">#</a> 工程目录介绍</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>─hello_vue3
    │  .gitignore
    │  env.d.ts // ts 不认识 .jpg .txt 文件。 env.d.ts 就是让 ts 去认识这些文件
    │  index.html // vite的入口文件(引入了src/main.ts 文件)。 和webpack 的main.js 有区别。
    │  package.json // 包管理的文件
    │  README.md
    │  tsconfig.app.json  // ts的配置文件
    │  tsconfig.json
    │  tsconfig.node.json
    │  vite.config.ts // 项目的配置文件 （插件、代理）
    │
    ├─.vscode
    │      extensions.json
    │
    ├─node_modules
    │  └─@vue
    │      └─babel-plugin-resolve-type
    ├─public
    │      favicon.ico // 页签图标
    │
    └─src // 源代码文杰夹
        │  App.vue
        │  main.ts
        │
        ├─assets
        │      base.css
        │      logo.svg
        │      main.css
        │
        └─components
            │  HelloWorld.vue
          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240323032241290.png" alt="image-20240323032241290" tabindex="0" loading="lazy"><figcaption>image-20240323032241290</figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>vite 项目中，index.html 是项目的入口文件，在项目的最外层</li><li>加载 index.html 之后，vite 解析 script 标签 指向的 javascript</li><li>vue3 中是通过 createApp 函数创建的应用实例</li></ul><h2 id="vue3-语法简单初探" tabindex="-1"><a class="header-anchor" href="#vue3-语法简单初探" aria-hidden="true">#</a> vue3 语法简单初探</h2><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><ul><li>OptionAPI 和 CompositionAPI,以及 优劣势</li><li>setup 概述</li><li>setup 与 OptionsAPI 疑问解答</li><li>setup 语法糖</li></ul><h3 id="optionapi-和-compositionapi" tabindex="-1"><a class="header-anchor" href="#optionapi-和-compositionapi" aria-hidden="true">#</a> OptionApi 和 CompositionApi</h3><ul><li>vue2 的 API 设计是 Options (配置|选项) 风格的</li><li>Vue3 的 API 设计是 Composition （组合）风格的</li></ul><p><strong>OptionsApi 的弊端</strong> Options 类型的 API ,数据、方法、计算属性等是分散在 ：data、methods、computed 中，若想新增一个功能，就需要分别修改：data 、methods、computed 不便于维护和复用 <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/2024.03.24 2259.gif" alt="2024.03.24 2259" loading="lazy"></p><p><strong>OptionsApi 的优势</strong> 可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。 <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/2024.03.24 2258.gif" alt="2024.03.24 2258" loading="lazy"></p><h3 id="setup-概述" tabindex="-1"><a class="header-anchor" href="#setup-概述" aria-hidden="true">#</a> setup 概述</h3><p>setup 是 Vue3 中一个新的配置项，值是一个函数。它是 CompositionApi “表演舞台”,组件中的所用到的 ：数据、方法、计算属性、监听... 等，均配置在 setup 中</p><p><strong>特点如下</strong></p><ul><li>setup 函数的返回的对象中内容，可以直接在模板中使用</li><li>setup 中访问的 this 是 undefined</li><li>setup 函数会在 beforeCreate 之前调用，它是 “领先”所有钩子函数执行的</li></ul><p><strong>注意：</strong></p><ul><li>setup 返回的还可以是一个函数（但是这种情况用的不多，绝大多数情况还是依靠模板进行渲染）</li></ul><h3 id="setup-与-optionsapi" tabindex="-1"><a class="header-anchor" href="#setup-与-optionsapi" aria-hidden="true">#</a> setup 与 OptionsAPI</h3><ul><li>setup 能与 data、mtehod 同时使用</li><li>data 可以读取 setup 中的数据</li></ul><blockquote><p>因为 setup 是在 data 之前执行的，所以 data 中可以读取 setup 中的值。</p></blockquote><ul><li>setup 不能读取 data 中的数据</li></ul><p><strong>总结：</strong> 不推荐在 vue3 中写 data、methods</p><h3 id="setup-语法糖" tabindex="-1"><a class="header-anchor" href="#setup-语法糖" aria-hidden="true">#</a> setup 语法糖</h3>`,26);function b(f,x){const l=r("Tabs");return o(),u("div",null,[v,c(l,{id:"69",data:[{id:"vite 推荐"},{id:"vue-cli 不推荐"}]},{title0:e(({value:a,isActive:n})=>[i("vite 推荐")]),title1:e(({value:a,isActive:n})=>[i("vue-cli 不推荐")]),tab0:e(({value:a,isActive:n})=>[h]),tab1:e(({value:a,isActive:n})=>[m]),_:1}),g])}const w=d(p,[["render",b],["__file","page1.html.vue"]]);export{w as default};
