import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as n,c as o,d as e,f as a,b as l,e as r}from"./app-9j9ot_2h.js";const g={},m=r('<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3><ul><li>启动：net start Mysql</li><li>停止：net stop Mysql</li><li>登录进入：mysql -uroot -proot</li><li>退出：exit</li><li>\\c：终止一条sql语句</li></ul><blockquote><p>mysql不能启动（系统管理员） <br> 1、检查端口占用： netstat -aon|findstr &quot;3306&quot; <br> 2、强制终止进程 taskkill /F /pid xxx</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240228135138825.png" alt="image-20240228135138825" width="300" height="150" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240228165820128.png" alt="image-20240228165820128" width="300" height="150" loading="lazy"></p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><p><strong>数据库</strong></p><ul><li>展示数据库：show databases; // 以分号结尾</li><li>使用数据库：use test;</li><li>创建数据库：create databases mydb;</li><li>查看数据下的表： show tables</li></ul><h2 id="连接mysql" tabindex="-1"><a class="header-anchor" href="#连接mysql" aria-hidden="true">#</a> 连接mysql</h2><p><strong>Mysql Shell 连接mysql</strong><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240228142013600.png" alt="image-20240228142013600" loading="lazy"></p><p><strong>node 连接 mysql</strong></p><ul><li>原因1：权限不够：参考连接的 方法1 就解决了</li><li>原因2：将 host 修改为 localhost ,就可以连接成功 <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240228140245110.png" alt="image-20240228140245110" loading="lazy"></li></ul>',12),c={href:"https://waylau.com/node.js-mysql-client-does-not-support-authentication-protocol/",target:"_blank",rel:"noopener noreferrer"},d=e("br",null,null,-1),h={href:"https://segmentfault.com/a/1190000021876846",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("strong",null,"vscode 连接 mysql"),e("img",{src:"https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240228141339004.png",alt:"image-20240228141339004",loading:"lazy"})],-1);function u(_,q){const t=i("ExternalLinkIcon");return n(),o("div",null,[m,e("p",null,[e("a",c,[a("解决Node.js mysql客户端不支持认证协议引发的“ER_NOT_SUPPORTED_AUTH_MODE”问题"),l(t)]),a(),d,e("a",h,[a("mysql: consider upgrading MySQL client"),l(t)])]),p])}const b=s(g,[["render",u],["__file","page1.html.vue"]]);export{b as default};
