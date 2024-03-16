import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,a as t,b as e}from"./app-077SK_Xy.js";const n={},r=e(`<h2 id="mysql-安装和配置、使用" tabindex="-1"><a class="header-anchor" href="#mysql-安装和配置、使用" aria-hidden="true">#</a> Mysql 安装和配置、使用</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><blockquote><p>推荐 mysql5.7(稳定)。具体安装:略。</p></blockquote><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><blockquote><p>先启动 mysql 服务器，再登录连接 mysql 服务</p></blockquote><table><thead><tr><th>命令行</th><th>说明</th></tr></thead><tbody><tr><td><strong>启动(停止)：</strong></td><td>-</td></tr><tr><td>net start mysql</td><td>启动 mysql</td></tr><tr><td>net stop mysql</td><td>停止 mysql</td></tr><tr><td><strong>登录连接：</strong></td><td>-</td></tr><tr><td>mysql -h 主机IP -P 端口 -u 用户名 -p 密码</td><td>登录连接 mysql</td></tr><tr><td>mysql -u root -p xxx</td><td>登录本机 mysql(简写)</td></tr><tr><td><strong>退出：</strong></td><td>-</td></tr><tr><td>exit</td><td>退出 mysql 命令行</td></tr><tr><td><strong>其他：</strong></td><td>-</td></tr><tr><td>SELECT @@VERSION;</td><td>查看 mysql 版本</td></tr><tr><td>xxx</td><td>xxx</td></tr></tbody></table><details><summary>更多细节</summary><h4 id="启动-停止-mysql" tabindex="-1"><a class="header-anchor" href="#启动-停止-mysql" aria-hidden="true">#</a> 启动(停止) Mysql</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意 端口占用解决如下：（我本地的mysql服务，一般都是端口占用导致的）
 mysql不能启动（系统管理员）
 1、检查端口占用： netstat -aon|findstr &quot;3306&quot;
 2、强制终止进程 taskkill /F /pid xxx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="登录连接-mysql" tabindex="-1"><a class="header-anchor" href="#登录连接-mysql" aria-hidden="true">#</a> 登录连接 Mysql</h4><blockquote><p>注意：myql5版本，建议放置空格。 mysql 8版本，不需要有空格</p></blockquote><table><thead><tr><th>mysql 5.x</th><th>mysql 8.x</th><th>备注</th></tr></thead><tbody><tr><td>mysql -u root -p xxx（待核实）</td><td><s>mysql -u root -p xxx</s></td><td>mysql 8.x 的密码不能有空格</td></tr><tr><td>mysql -uroot -pxxx（待核实）</td><td>mysql -uroot -pxxx</td><td></td></tr><tr><td>mysql -u root -pxxx （待核实）</td><td>mysql -u root -pxxx</td><td></td></tr></tbody></table><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240307092537119.png" alt="image-20240307092537119" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240307092537119</figcaption></figure></details>`,7),s=e('<h2 id="数据库图形工具" tabindex="-1"><a class="header-anchor" href="#数据库图形工具" aria-hidden="true">#</a> 数据库图形工具</h2><ul><li>navicat</li><li>SQLyog</li></ul><h2 id="mysql-三层结构-sql语句分类" tabindex="-1"><a class="header-anchor" href="#mysql-三层结构-sql语句分类" aria-hidden="true">#</a> mysql 三层结构,SQL语句分类</h2><h2 id="数据库-database" tabindex="-1"><a class="header-anchor" href="#数据库-database" aria-hidden="true">#</a> 数据库(Database)</h2><h3 id="增删改查-备份" tabindex="-1"><a class="header-anchor" href="#增删改查-备份" aria-hidden="true">#</a> 增删改查,备份</h3><table><thead><tr><th>命令行</th><th>说明</th></tr></thead><tbody><tr><td><strong>增：</strong></td><td>-</td></tr><tr><td>CREATE DATABASE db_name;</td><td>创建数据库</td></tr><tr><td>CREATE DATABASE [IN NOT EXISTS] db_name ;</td><td>指定了 [IF NOT EXISTS] 如果存在就不创建</td></tr><tr><td>CREATE DATABASE hsp_db02 CHARACTER SET utf8;</td><td>创建一个使用 utf8字符集的 hsp_db02数据库</td></tr><tr><td>CREATE DATABASE hsp_db03 CHARACTER SET utf8 COLLATE utf8_bin;</td><td>创建一个使用utf8字符集，并带校对规则的hsp_db03数据库。</td></tr><tr><td><strong>删：</strong></td><td>-</td></tr><tr><td>DROP DATABASE db_name;</td><td>删除数据库</td></tr><tr><td>DROP DATABASE [IF EXISTS] db_name;</td><td>指定了 [IF NOT EXISTS] 如果存在就不删除</td></tr><tr><td><strong>改：</strong></td><td>-</td></tr><tr><td>ALTER DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</td><td>修改数据库的字符集、校对规则</td></tr><tr><td><strong>查：</strong></td><td>-</td></tr><tr><td>SHOW DATABASES;</td><td>查询数据库</td></tr><tr><td>SELECT DATABASE()</td><td>查询当前数据库的名称</td></tr><tr><td><strong>备份：</strong></td><td>-</td></tr><tr><td>mysqldump -u 用户名 -p -B 数据库1 数据库2 数据库n &gt; 文件名.sql</td><td>恢复数据库</td></tr><tr><td>直接将 bak.sql 放入到查询编辑器中执行</td><td>恢复数据库2</td></tr><tr><td>mysqldump -u 用户名 -p 数据库 表1 表2 表n -&gt; D:\\bak.sql</td><td>备份数据库的部分表</td></tr><tr><td>XX</td><td>xx</td></tr></tbody></table><details><summary>更多细节</summary><h4 id="字符集、校对规则" tabindex="-1"><a class="header-anchor" href="#字符集、校对规则" aria-hidden="true">#</a> 字符集、校对规则</h4><ul><li>1、CHARACTER SET：指定数据库采用的字符集，如果不指定字符集，默认 utf8</li><li>2、COLLATE：指定数据库字符集的校对规则（常用的 utf8_bin 区分大小写 、utf8_general_ci 不区分大小写 、注意 默认是 utf8_general_ci）</li></ul></details><h2 id="表-table" tabindex="-1"><a class="header-anchor" href="#表-table" aria-hidden="true">#</a> 表(Table)</h2><blockquote><p>数据库 -&gt; 表</p></blockquote><h3 id="增删改查" tabindex="-1"><a class="header-anchor" href="#增删改查" aria-hidden="true">#</a> 增删改查</h3><table><thead><tr><th>命令行</th><th>举例</th><th>说明</th></tr></thead><tbody><tr><td><strong>创建表：</strong></td><td>-</td><td>xx</td></tr><tr><td>CREATE TABLE tablename (<br> field datatype, field datatype <br>) character set 字符集 collate 校对规则 engine 存储引擎</td><td>CREATE TABLE tb_1 ( <br> id INT ,<code>name</code> VARCHAR(255) <br>) CHARACTER SET utf8 <br> COLLATE utf8_bin ENGINE INNODB</td><td>xx</td></tr><tr><td><strong>删除整个表：</strong></td><td>-</td><td>xx</td></tr><tr><td>DROP tablename</td><td>DROP tb_user</td><td>-</td></tr><tr><td><strong>修改表名/字符集：</strong></td><td>-</td><td>xx</td></tr><tr><td>rename table 表名 to 新表名</td><td>rename TABLE tb_0 to tb_1</td><td>-</td></tr><tr><td>ALTER TABLE 表名 CHARACTER SET 字符集</td><td>ALTER TABLE tb_1 CHARACTER SET utf8</td><td>修改字符集</td></tr><tr><td><strong>修改表的列(添加列/修改列/删除列)：</strong></td><td>-</td><td>xx</td></tr><tr><td>ALTER TABLE tablename <br> <strong>ADD</strong> column datatype [DEFAULT expr] [,column datatype ]...</td><td>ALTER TABLE tb_1 <br> ADD use_img VARCHAR(32) NOT NULL DEFAULT &#39;&#39;</td><td>添加列</td></tr><tr><td>ALTER TABLE tablename <br> <strong>MODIFY</strong> column datatype [DEFAULT expr]</td><td>ALTER TABLE tb_1 <br> MODIFY job VARCHAR(32) NOT NULL DEFAULT &#39;&#39;</td><td>修改列数据类型</td></tr><tr><td>ALTER TABLE tablename <br> <strong>MODIFY</strong> column1 CHANGE NAME column2 datatype [DEFAULT expr]</td><td>ALTER TABLE tb_1 <br> MODIFY job CHANGE NAME job2 VARCHAR(32) NOT NULL DEFAULT &#39;&#39;</td><td>修改列名</td></tr><tr><td>ALTER TABLE tablename <br> <strong>DROP</strong> column</td><td>ALTER TABLE tb_1 <br> DROP sex</td><td>删除列</td></tr><tr><td><strong>查：</strong></td><td>-</td><td>xx</td></tr><tr><td>desc tablename</td><td>查看表结构(表的所有列)</td><td>-</td></tr><tr><td><strong>其他：</strong></td><td>-</td><td>xx</td></tr><tr><td>xxx</td><td>xxx</td><td>xx</td></tr><tr><td>xxx</td><td>xxx</td><td>xx</td></tr></tbody></table>',11),l=e(`<details><summary>更多细节</summary><h4 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE \`tb_user\` (
  id INT,
  \`name\` VARCHAR(255),
  \`password\` VARCHAR(255),
  \`birthday\` DATE,
) CHARACTER SET utf8 COLLATE utf8_bin ENGINE INNODB;

filed ：指定列名  ， datatype : 指定列类型（字段类型）
character set： 如不指定则为所在数据库字符集
collate：如不指定则为所在数据库校对规则
engine：引擎（这个涉及的内容较多，后面详细讲解）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改表的列-添加列-修改列-删除列" tabindex="-1"><a class="header-anchor" href="#修改表的列-添加列-修改列-删除列" aria-hidden="true">#</a> 修改表的列(添加列/修改列/删除列)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE tablename
ADD column datatype [DEFAULT expr]
    [, column datatype]...;

// 在这种语法中，&quot;expr&quot; 代表默认值表达式，即在添加新列时，您可以指定该列的默认值。如果不提供默认值表达式，新列将被设置为NULL。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="综合题目" tabindex="-1"><a class="header-anchor" href="#综合题目" aria-hidden="true">#</a> 综合题目</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----------------题目-------------------------
# 修改变的操作练习
-- 员工表 emp 上增加一个 image 列，varchar 类型，要求在resume后面
-- 修改job列，使其长度为 60
-- 删除sex列
-- 表名改为 employee
-- 修改表的字符集Wieutf8
-- 列名name修改为 user_name

-- create table emp (
-- 	id int,
-- 	\`name\` varchar(32),
-- 	sex char(1),
-- 	birthday date,
-- 	entry_date datetime,
-- 	job varchar(32),
-- 	salary double,
-- 	\`resume\` text);
-- 
INSERT INTO emp VALUES(58,&#39;悟空&#39;,&#39;男&#39;,&#39;2021-12-02&#39;,&#39;2012-12-12 10:10:10&#39;,&#39;开发&#39;,5000.2,&#39;帅气的悟空&#39;);
-- INSERT INTO emp VALUES(100,&#39;悟空&#39;,&#39;男&#39;,&#39;2021-12-12&#39;,&#39;2012-12-12 11:22:22&#39;,&#39;开发&#39;,3000.6,&#39;帅气的小哥&#39;);
-- 
-- drop table emp;


ALTER TABLE emplyee 
ADD image VARCHAR(32) NOT NULL DEFAULT &#39;&#39; 
AFTER RESUME;

# 修改 job 列，使其长度为60
ALTER TABLE emplyee
MODIFY job VARCHAR(60) NOT NULL DEFAULT &#39;&#39;;

# 删除无用属性 sex
ALTER TABLE emplyee
DROP sex;

# 修改表的名称为 emplyee
RENAME TABLE emp TO emplyee;

# 修改表的字符集为 utf8
ALTER TABLE emplyee CHARACTER SET utf8;

# 查看表的所有列(字段)
DESC emplyee;

# 列名 name 修改为 user_name
ALTER TABLE emplyee CHANGE NAME user_name VARCHAR(32) NOT NULL DEFAULT &#39;&#39;;

SELECT * FROM emplyee;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),h=e('<h2 id="mysql-数据类型" tabindex="-1"><a class="header-anchor" href="#mysql-数据类型" aria-hidden="true">#</a> Mysql 数据类型</h2><table><thead><tr><th>列类型</th><th></th></tr></thead><tbody><tr><td><strong>数值/整数</strong></td><td>tinyint[1个字节]、smallint[2个字节]、mediumint[3个字节]、<strong>int[4个字节]</strong>、bigint[8个字节]</td></tr><tr><td><strong>数值/小数</strong></td><td>float [单精度 4个字节]、<strong>double [双精度 8个字节]、ecima[M,D] [大小不确定]</strong></td></tr><tr><td><strong>文本/字符</strong></td><td><strong>char [0-255]、varchar[0-2^16-1]、text [0-2^16-1]</strong>、longtext [0-2^32-1]</td></tr><tr><td><strong>日期</strong></td><td>year [年]、date [日期 年月日]、time [时间 时分秒]、<strong>datetime [年月日 时分秒]、timeStamp [可用于自动记录 insert update 操作的时间]</strong></td></tr><tr><td><strong>二进制</strong></td><td>略</td></tr><tr><td><strong>bit</strong></td><td>略</td></tr></tbody></table>',2),c=e(`<details><summary>数值：更多细节</summary><h4 id="数值-整数" tabindex="-1"><a class="header-anchor" href="#数值-整数" aria-hidden="true">#</a> 数值-整数</h4><blockquote><p>说明：使用规范 在能满足需求的情况下，尽量选择占用空间小的类型</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create tb_1 ( id tinyint, num  tinyint ); // 默认有符号

create tb_2 ( id tinyint unsiged, num  tinyint unsiged ) // 无符号

备注：使用 tinyint 来演示范围，有符号 -128-127 ，如果没有符号 0-255
说明：表的字符集、校验规则、存储引擎、使用默认
（ 如果没有指定 unsinged,则 TINYINT 就是有符号的）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数值-小数" tabindex="-1"><a class="header-anchor" href="#数值-小数" aria-hidden="true">#</a> 数值-小数</h4><blockquote><p>略</p></blockquote></details>`,1),u=e(`<details><summary>文本/字符：更多细节</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>细节01：
char(4) 是定长(固定的大小)，就是说，即使你插入 &#39;aa&#39; ，也会占用 4个字符的空间
varchar(4) 是变长的(变化的大小)，就是说，如果你插入了 &#39;aa&#39;，实际占用空间大小并不是4个字符，而是按照实际占用空间来分配


**细节03 什么时候使用 char ,什么时候使用 varchar。**

1、如果数据是定长的，推荐使用 char，比如md5的密码(固定32位)，邮编，手机号、身份证号码等。 char(32) 
2、如果一个字段的长度是不确定的，我们使用 varchar ，比如 留言、文章

细节4:
在存放文本的时候，也可以使用 Text 数据类型，可以将 TEXT 列视为 VARCHAR 列。注意 Text 不能有默认值，大小 0-2^16字节，如果希望存放更多的字符可以选择 MEDIUMTEXT 0-2^24 或 LONGTEXT 0-2^32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),m=e(`<details><summary>日期：更多细节</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tb_1 (
  birthday DATE, // 日期
  job_time TIMESTAMP, // 年月日
  login_time TIMESTAMP // 登录时间，如果希望 login_time 自动更新
    NOT NULL DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
)

INSERT INTO tb_1 (birthday ,job_time) VALUES(&#39;2022-12-15,&#39;2022-12-12 10:10:10&#39;)

备注：
日期类型的细节说明 TimeStamp 在 insert 和 update 的时候，会自动更新


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),b=e(`<h3 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h3><p><strong>整数</strong></p><ul><li>tinyint [1个字节]</li><li>smallint [2个字节]</li><li>mediumint [3个字节]</li><li><strong>int [4个字节]</strong></li><li>bigint [8个字节]</li></ul><p><strong>小数</strong></p><ul><li>float [单精度 4个字节]</li><li><strong>double [双精度 8个字节]</strong></li><li><strong>decima[M,D] [大小不确定]</strong></li></ul><h3 id="文本-字符" tabindex="-1"><a class="header-anchor" href="#文本-字符" aria-hidden="true">#</a> 文本/字符</h3><ul><li><strong>char [0-255]</strong></li><li><strong>varchar [0-65535]/[0-2^16-1]</strong></li><li><strong>text [0-2^16-1]</strong></li><li>longtext [0-2^32-1]</li></ul><h3 id="日期" tabindex="-1"><a class="header-anchor" href="#日期" aria-hidden="true">#</a> 日期</h3><ul><li>year [年]</li><li>date [日期 年月日]</li><li>time [时间 时分秒]</li><li><strong>datetime [年月日 时分秒]</strong></li><li><strong>timeStamp [可用于自动记录 insert update 操作的时间]</strong></li></ul><h3 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制" aria-hidden="true">#</a> 二进制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用的很少，实际开发中，不会把二进制文件存放在数据库。而是存放文件路径
- blob [0-2^16-1]
- longblob [0-2^32-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bit" tabindex="-1"><a class="header-anchor" href="#bit" aria-hidden="true">#</a> bit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; 略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="记录-数据-row-的-crud" tabindex="-1"><a class="header-anchor" href="#记录-数据-row-的-crud" aria-hidden="true">#</a> 记录|数据(Row)的 CRUD</h2><blockquote><p>记录也称为数据行。数据库 -&gt; 表 -&gt; 记录|数据行</p></blockquote><h3 id="增删改查-1" tabindex="-1"><a class="header-anchor" href="#增删改查-1" aria-hidden="true">#</a> 增删改查</h3><table><thead><tr><th>命令行</th><th>说明</th></tr></thead><tbody><tr><td>ctrl + p</td><td>快速查找文件</td></tr><tr><td>xxx</td><td>xxx</td></tr><tr><td>xxx</td><td>xxx</td></tr><tr><td>xxx</td><td>xxx</td></tr></tbody></table><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="统计函数" tabindex="-1"><a class="header-anchor" href="#统计函数" aria-hidden="true">#</a> 统计函数</h3><h3 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数" aria-hidden="true">#</a> 时间函数</h3><h3 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h3><h3 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h3><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3><h2 id="内-外连接" tabindex="-1"><a class="header-anchor" href="#内-外连接" aria-hidden="true">#</a> 内\\外连接</h2><h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h3><h3 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h3><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束 ？</h2><h3 id="not-null" tabindex="-1"><a class="header-anchor" href="#not-null" aria-hidden="true">#</a> not null</h3><h3 id="primary-key" tabindex="-1"><a class="header-anchor" href="#primary-key" aria-hidden="true">#</a> primary key</h3><h3 id="unique" tabindex="-1"><a class="header-anchor" href="#unique" aria-hidden="true">#</a> unique</h3><h3 id="foregn-key" tabindex="-1"><a class="header-anchor" href="#foregn-key" aria-hidden="true">#</a> foregn key ？</h3><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check" aria-hidden="true">#</a> check ？</h3><h3 id="自增长" tabindex="-1"><a class="header-anchor" href="#自增长" aria-hidden="true">#</a> 自增长</h3><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><h3 id="自主索引" tabindex="-1"><a class="header-anchor" href="#自主索引" aria-hidden="true">#</a> 自主索引</h3><h3 id="唯一索引-unique" tabindex="-1"><a class="header-anchor" href="#唯一索引-unique" aria-hidden="true">#</a> 唯一索引 UNIQUE</h3><h3 id="普通索引-index" tabindex="-1"><a class="header-anchor" href="#普通索引-index" aria-hidden="true">#</a> 普通索引 INDEX</h3><h3 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引" aria-hidden="true">#</a> 全文索引</h3><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>`,39);function o(v,x){return a(),i("div",null,[r,t(" end "),s,t(" start "),l,t(" end "),h,t(" start "),c,t(" end "),t(" start "),u,t(" end "),t(" start "),m,t(" end "),b])}const E=d(n,[["render",o],["__file","page1.html.vue"]]);export{E as default};
