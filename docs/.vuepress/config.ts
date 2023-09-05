import { defineUserConfig } from "vuepress";
// 导入代码高亮插件
// import { shikiPlugin } from "@vuepress/plugin-shiki";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { gitPlugin } from '@vuepress/plugin-git'
import { readingTime } from "vuepress-theme-hope";



export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "狐狸半面添的客栈",
  description: "狐狸半面添的博客网站，分享技术",

  theme,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '是谢添啊,逐浪者,唐雨浪,编程初学者导航' }],
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

    }),
    gitPlugin({
      // 不显示文章创建时间
      createdTime: false,
      // 不显示文章贡献者
      contributors: false,
      // 不显示文章最近更新时间
      // updatedTime: false,
    }),
  ]
});
