import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as o,e as n,f as s,d as e,w as p}from"./app-xMrARyrX.js";const u={},r=n("h3",{id:"ui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ui","aria-hidden":"true"},"#"),s(" UI")],-1),d=n("h3",{id:"pc大屏相关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pc大屏相关","aria-hidden":"true"},"#"),s(" pc大屏相关")],-1),k=n("blockquote",null,[n("p",null,"vue2.x 适用")],-1),m={href:"http://xxx",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,'"vue-count-to": "^1.0.13", // 数字动画',-1),b=n("li",null,'"vue-particles": "^1.0.9",// 背景',-1),g=n("h2",{id:"swiper",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#swiper","aria-hidden":"true"},"#"),s(" Swiper")],-1),h=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`第一步，安装
npm i swiper@4.5.0
npm i vue-awesome-swiper@3.1.3
备注：以上是基本使用步骤，不同的版本号对应着不同的使用方法，而且连引入方法都不同，这是最坑爹的

第二部，全局引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /`),n("span",{class:"token italic"},[n("span",{class:"token punctuation"},"*"),n("span",{class:"token content"}," { default options with global component } "),n("span",{class:"token punctuation"},"*")]),s(`/)

第三步，使用
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("swiper")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mySwiper"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("swiper"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s("3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("swiper-slide")]),n("span",{class:"token punctuation"},">")]),s(`
    // 分页器，注意一定要加slot
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("swiper-pagination"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pagination"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("swiper")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
export default {
  data() {
    return {
      //配置项例子
      options: {
        loop: true,
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          // bulletClass: "my-bullet",
        },
      },
    };
  },
};
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(_,f){const t=a("ExternalLinkIcon"),l=a("CodeDemo");return c(),o("div",null,[r,d,k,n("ul",null,[n("li",null,[s('"echarts": "^4.8.0", // echart '),n("a",m,[s("链接"),e(t)])]),v,b]),g,e(l,{id:"code-demo-31",type:"vue",title:"swiper%20%E4%BD%BF%E7%94%A8",code:"eJyNU0tPGlEU/is3bKyGl9puKDVtuuqqiyZdzWaEi510mJnMQ2sMCa0iIFjRoFajba0vYhE09gEq+me4d2ZW/oWeOzMIqItu4NzvnPOd7zxmxpeM+yI+s1ptN9L0eP/mskhqeWs3w0mSkkQC0qYEBavPHwefBMMdbNLAAX4Ka3ISBzz/aHA4OMpJZC9Lzyo3l5vti/12Y4F+qZNv53Sr2m5dm+UK8NtHe1Ci3VgkpaK5OWfmc+AlS39JvUnOy+Z2+tblpaw16dkqpFhpyCpb11/J5SrJ7Lu4Pdty41nA9QaUo1tpsr1s5prAwEmcxBo7L9qzoKlIMhVymnbzOUlIKrKqo7cGfuG28sbpBCVUOYkG7rc4cJsy4AKhuKDpoZimhdx3EEwIAsKgoeFHd4n9KDSEZlAcJ3hD1JGs6IIsaWhK0N+hCVEe50UUk6GAhCUdpdBQaLCjv5F3F+NOhJOiOk4qIq/jMU5CKOpWRypOPON8yWm3GudDMZHXNIBcPwARryZgngWgw3HLEtBEIY7HhqNeT977oZiR/4gZfTAmFEIkN2/v/CYbbC1wMHRuCc6P1Datg49k4bsmyrpHFxcm7zQSUPgJQeKZfpDPQsHVi41FYTOTUKtT3DF7ZhbVYqqg6GDhD85COzuZYUXjvM4/GnRtBFPVDVXqvJh2O7Notmr2TrN9VSDHpY7Dm2ikG4qQKMtKBOmqgf1dkDd0GZRM90UyYlcszRfIQoVeLMNvu1kgpc9W9ghsq1WjK8dk75Su5uC2rcNdMn/mfgV+UszQQtU6PDB/nLCBFtYgAQzzU5NkL7qz8dvZRbp2Qkp1RujQAictX/UKgavmx0X8Wnol6VjlYywxghK8qPV24Wyxl4Ku/7HXf8GXT+s/zcOVPkbstDsSDod7GFI9dlfinalgMYI4X/CBzfdpiYlC7D1TfW/ajs5xQxSx/pKdEaNLTgdcpI+lq6djpZ6yf/Zili/1Dy/DP+0="},{default:p(()=>[h]),_:1})])}const y=i(u,[["render",w],["__file","Other.html.vue"]]);export{y as default};
