import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as d,e as n,f as a,d as l,b as s}from"./app-xMrARyrX.js";const c={},r=s(`<h2 id="baidumap" tabindex="-1"><a class="header-anchor" href="#baidumap" aria-hidden="true">#</a> BaiduMap</h2><h2 id="vue-baidu-map" tabindex="-1"><a class="header-anchor" href="#vue-baidu-map" aria-hidden="true">#</a> Vue-baidu-map</h2><h3 id="地址逆解析" tabindex="-1"><a class="header-anchor" href="#地址逆解析" aria-hidden="true">#</a> 地址逆解析</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myGeo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BMap<span class="token punctuation">.</span>Geocoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> pt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BMap<span class="token punctuation">.</span>Point</span><span class="token punctuation">(</span>lng<span class="token punctuation">,</span>lat<span class="token punctuation">)</span><span class="token punctuation">;</span>
    myGeo<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span>pt<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        that<span class="token punctuation">.</span>BAddress <span class="token operator">=</span> result<span class="token punctuation">.</span>address<span class="token punctuation">;</span> <span class="token comment">//获取到当前定位的详细地址信息</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地图坐标系转换" tabindex="-1"><a class="header-anchor" href="#地图坐标系转换" aria-hidden="true">#</a> 地图坐标系转换</h2>`,5),p={href:"https://github.com/hujiulong/gcoord?tab=readme-ov-file#crs",target:"_blank",rel:"noopener noreferrer"},u=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  安装：
  &quot;gcoord&quot;: &quot;^0.3.2&quot;

  引入：
  import gcoord from &#39;gcoord&#39;;

  使用：
  例如从手机的GPS得到一个经纬度坐标，需要将其展示在百度地图上，则应该将当前坐标从WGS-84坐标系转换为BD-09坐标系

  var result = gcoord.transform(
    [116.403988, 39.914266],    // 经纬度坐标
    gcoord.WGS84,               // 当前坐标系
    gcoord.BD09                 // 目标坐标系
  );

  console.log(result);  // [116.41661560068297, 39.92196580126834]

  | CRS          | 坐标格式  | 说明                                                                                     |
  | ------------ | --------- | ---------------------------------------------------------------------------------------- |
  | gcoord.WGS84 | [lng,lat] | WGS-84坐标系，GPS设备获取的经纬度坐标                                                    |
  | gcoord.GCJ02 | [lng,lat] | GCJ-02坐标系，google中国地图、soso地图、aliyun地图、mapabc地图和高德地图所用的经纬度坐标 |
  | gcoord.BD09  | [lng,lat] | BD-09坐标系，百度地图采用的经纬度坐标                                                    |
  | ...          | ...       | ...                                                                                      |


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>CRS</th><th>坐标格式</th><th>说明</th></tr></thead><tbody><tr><td>gcoord.WGS84</td><td>[lng,lat]</td><td>WGS-84坐标系，GPS设备获取的经纬度坐标</td></tr><tr><td>gcoord.GCJ02</td><td>[lng,lat]</td><td>GCJ-02坐标系，google中国地图、soso地图、aliyun地图、mapabc地图和高德地图所用的经纬度坐标</td></tr><tr><td>gcoord.BD09</td><td>[lng,lat]</td><td>BD-09坐标系，百度地图采用的经纬度坐标</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>使用说明 <br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/2024-03-12_145707.png" alt="2024-03-12_145707" loading="lazy"></p>`,3);function v(m,b){const e=i("ExternalLinkIcon");return o(),d("div",null,[r,n("p",null,[a("链接："),n("a",p,[a("gcoord"),l(e)])]),u])}const k=t(c,[["render",v],["__file","page3.html.vue"]]);export{k as default};
