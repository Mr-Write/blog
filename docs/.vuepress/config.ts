import { defineUserConfig } from "vuepress";
// 导入代码高亮插件
// import { shikiPlugin } from "@vuepress/plugin-shiki";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "狐狸半面添的客栈",
  description: "狐狸半面添的博客网站，分享技术",

  theme,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '是谢添啊,逐浪者,唐雨浪,博客' }],
    ['meta', { name: 'author', content: '狐狸半面添' }]
  ],

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    // 更准确代码高亮结果的 shiki 插件
    // shikiPlugin({
    //   // 你的选项
    //   theme: "one-dark-pro",
    // })

    // componentsPlugin({
    //   // 插件选项
    //   components: [
    //     "ArtPlayer",
    //   ],
    // }),

    // 搜索
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",

        },
        
      },
      hotKeys: [
        {
          ctrl: true,
          key: "k"
        }
      ],
      
    })
  ]
});
