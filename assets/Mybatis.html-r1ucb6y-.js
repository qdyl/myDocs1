const e=JSON.parse('{"key":"v-5713855b","path":"/More/MyStudy/SSM/Mybatis.html","title":"MyBatis 1-62","lang":"zh-CN","frontmatter":{"title":"MyBatis 1-62","order":10,"category":["分类"],"tag":["标签"],"description":"MyBatis 简介 简介|历史 特性|对比 下载 搭建框架 补充：mapper接口和映射文件\\r MyBatis 中的 mapper 接口相当于以前的 dao,但是区别在于，mapper接口仅仅是接口，我们不需要提供实现类。 ORM(Object Relation Mapping) 对象关系映射 Java概念 数据库概念 | -------- ----...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/myDocs1/More/MyStudy/SSM/Mybatis.html"}],["meta",{"property":"og:site_name","content":"前端文档"}],["meta",{"property":"og:title","content":"MyBatis 1-62"}],["meta",{"property":"og:description","content":"MyBatis 简介 简介|历史 特性|对比 下载 搭建框架 补充：mapper接口和映射文件\\r MyBatis 中的 mapper 接口相当于以前的 dao,但是区别在于，mapper接口仅仅是接口，我们不需要提供实现类。 ORM(Object Relation Mapping) 对象关系映射 Java概念 数据库概念 | -------- ----..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T15:20:09.000Z"}],["meta",{"property":"article:author","content":"Mochen"}],["meta",{"property":"article:tag","content":"标签"}],["meta",{"property":"article:modified_time","content":"2024-03-12T15:20:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis 1-62\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-12T15:20:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mochen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"MyBatis 简介","slug":"mybatis-简介","link":"#mybatis-简介","children":[{"level":3,"title":"简介|历史","slug":"简介-历史","link":"#简介-历史","children":[]},{"level":3,"title":"特性|对比","slug":"特性-对比","link":"#特性-对比","children":[]},{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]}]},{"level":2,"title":"搭建框架","slug":"搭建框架","link":"#搭建框架","children":[]},{"level":2,"title":"补充：mapper接口和映射文件","slug":"补充-mapper接口和映射文件","link":"#补充-mapper接口和映射文件","children":[{"level":3,"title":"ORM(Object Relation Mapping) 对象关系映射","slug":"orm-object-relation-mapping-对象关系映射","link":"#orm-object-relation-mapping-对象关系映射","children":[]},{"level":3,"title":"开发总结","slug":"开发总结","link":"#开发总结","children":[]}]},{"level":2,"title":"MyBatis 核心配置文件配置","slug":"mybatis-核心配置文件配置","link":"#mybatis-核心配置文件配置","children":[{"level":3,"title":"environment","slug":"environment","link":"#environment","children":[]},{"level":3,"title":"properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"typeAliases","slug":"typealiases","link":"#typealiases","children":[]},{"level":3,"title":"mappers","slug":"mappers","link":"#mappers","children":[]},{"level":3,"title":"在 idea 中配置 mybatis 核心配置文件","slug":"在-idea-中配置-mybatis-核心配置文件","link":"#在-idea-中配置-mybatis-核心配置文件","children":[]}]},{"level":2,"title":"获取参数值的方式","slug":"获取参数值的方式","link":"#获取参数值的方式","children":[{"level":3,"title":"两种方式 ${} 和 #{}","slug":"两种方式-和","link":"#两种方式-和","children":[]},{"level":3,"title":"案例1：单个字面量形式","slug":"案例1-单个字面量形式","link":"#案例1-单个字面量形式","children":[]},{"level":3,"title":"案例2：多个字面量形式","slug":"案例2-多个字面量形式","link":"#案例2-多个字面量形式","children":[]},{"level":3,"title":"案例3：从map集合中获取参数","slug":"案例3-从map集合中获取参数","link":"#案例3-从map集合中获取参数","children":[]},{"level":3,"title":"案例4：从实体类User中获取参数","slug":"案例4-从实体类user中获取参数","link":"#案例4-从实体类user中获取参数","children":[]},{"level":3,"title":"案例5：使用注解 @param()","slug":"案例5-使用注解-param","link":"#案例5-使用注解-param","children":[]},{"level":3,"title":"案例1-5总结","slug":"案例1-5总结","link":"#案例1-5总结","children":[]}]},{"level":2,"title":"CRUD","slug":"crud","link":"#crud","children":[{"level":3,"title":"常规查询","slug":"常规查询","link":"#常规查询","children":[]},{"level":3,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]},{"level":3,"title":"批量删除","slug":"批量删除","link":"#批量删除","children":[]},{"level":3,"title":"动态设置表名","slug":"动态设置表名","link":"#动态设置表名","children":[]},{"level":3,"title":"获取自增的主键","slug":"获取自增的主键","link":"#获取自增的主键","children":[]}]},{"level":2,"title":"自定义映射","slug":"自定义映射","link":"#自定义映射","children":[{"level":3,"title":"处理多对一的三种方式","slug":"处理多对一的三种方式","link":"#处理多对一的三种方式","children":[]},{"level":3,"title":"处理一对多的两种方式","slug":"处理一对多的两种方式","link":"#处理一对多的两种方式","children":[]}]},{"level":2,"title":"动态 SQL","slug":"动态-sql","link":"#动态-sql","children":[]},{"level":2,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":2,"title":"逆向工程","slug":"逆向工程","link":"#逆向工程","children":[]},{"level":2,"title":"分页插件","slug":"分页插件","link":"#分页插件","children":[]}],"git":{"createdTime":1709545414000,"updatedTime":1710256809000,"contributors":[{"name":"cn32166袁权","email":"yuanquan@powersi.com","commits":3},{"name":"yuanquan","email":"2187911790@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"More/MyStudy/SSM/Mybatis.md","localizedDate":"2024年3月4日","autoDesc":true,"excerpt":""}');export{e as data};