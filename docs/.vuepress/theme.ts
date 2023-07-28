import { hopeTheme } from "vuepress-theme-hope";
import { headersPlugin } from '@mdit-vue/plugin-headers';
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const MR_HOPE_AVATAR =
  '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';

export default hopeTheme({

  hostname: "https://mister-hope.github.io",

  // 配置文章的作者，以及点击时的跳转链接
  author: {
    name: "狐狸半面添",
    url: "https://blog.zhulang.love",
    email: "3179167073@qq.com"
  },


  // 设置图标(这里是阿里的)
  iconAssets: "//at.alicdn.com/t/c/font_4186795_z0ely30n25.css",
  iconPrefix: "iconfont icon-",

  // 在深色模式，浅色模式和自动之间切换 (默认)
  darkmode: "switch",

  // 禁用打印功能，默认开启
  print: false,

  // 启用允许全局功能，默认关闭
  // fullscreen: true,

  // 启用纯净模式（默认关闭）：更干净的样式，会禁用一些花哨的动画以及一些色彩，只提供功能。
  // pure: true,


  // 显示在导航栏上的网站图标
  logo: "/logo.png",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  // 文档在仓库中的目录，默认为根目录
  docsDir: "docs",

  // navbar
  navbar,

  // navbarLayout: {
  //   start: ["Brand"],
  //   center: ["Links"],
  //   end: ["Language", "Repo", "Outlook", "Search"],
  // },

  // sidebar
  sidebar,


  // 开启脚注与版本信息显示
  displayFooter: true,
  // 页脚与版权信息,属性值都会以 v-html 指令形式进行渲染 
  footer: '<a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">湘ICP备2023007785号</a>',
  copyright: 'Copyright © 2023 狐狸半面添的客栈',

  // 在桌面模式下，文章的标题列表会自动显示在屏幕的右侧。(在移动视图下它们会放置在侧边栏里)
  // 如果你不希望在桌面模式下显示右侧的标题列表，则设置为 false，默认为 true。
  // 也可以在特定页面的 frontmatter 中通过 toc 来指定它。
  // toc: false,

  
  // 上一篇和下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。
  prevLink: true,
  nextLink: true,

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  plugins: {
    blog: true,

    // 代码复制
    copyCode: {
      // 默认情况下，按钮仅在桌面模式显示，如果你需要在移动端展示这个按钮，需要设置为 true
      showInMobile: true,
      // 在用户点击复制按钮后，屏幕上会显示一个复制成功的提示。默认的提示时长为 2000ms，自定义是单位 ms
      // 如果不需要提示则设置为 0
      duration: 2000
    },

    // 他人复制内容时，自动生成一段版权信息到剪切板中
    copyright: {
      // 全局开启，默认关闭
      global: true,
      // 默认配置下，仅当用户复制字符长度不小于 100 时，才会触发追加版权信息
      triggerWords: 80,
      // 作者
      author: '狐狸半面添'

      // 禁用复制，默认为 false，即允许复制
      // disableCopy: true,

    },

    // 页面正文内的图片在点击时进入浏览模式浏览，默认开启
    // photoSwipe: false,

    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "AudioPlayer",
        // "Badge",
        "BiliBili",
        // "CodePen",
        "PDF",
        // "Replit",
        // "Share",
        "SiteInfo",
        // "StackBlitz",
        // "VidStack",
        "VideoPlayer",
        "XiGua",
        // "YouTube",
      ],
    },




    // 评论模块
    // comment: {
    //   // You should generate and use your own comment service
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // 禁用 `@vuepress/plugin-prismjs` 插件（默认启用），Prism.js 快速且轻量，但它无法正确高亮所有语法。
    // prismjs: false,

    mdEnhance: {
      // 自定义对齐
      align: true,

      // 属性支持
      attrs: true,

      // 支持卡片
      card: true,

      // 支 chart 图标
      chart: true,

      // 代码块分组支持
      codetabs: true,

      // 主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。
      container: true,

      // 支持代码演示
      demo: true,

      // 支持 echarts 图标
      echarts: true,

      // 启用 figure，为图像添加描述，并将其单独展示在上下文中
      figure: true,

      // 流程图
      flowchart: true,

      // 支持脚注
      footnote: true,


      gfm: true,

      // 启用图片懒加载
      imgLazyload: true,

      // 启用图片标记
      imgSize: true,

      // 启用图片标记
      imgMark: true,

      // 支持导入文件
      include: true,

      // 使用 KaTeX 启用 TeX 支持
      katex: true,

      // 标记（高亮）
      mark: true,

      // 支持 Mermaid
      mermaid: true,

      // 支持任务列表
      tasklist: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 幻灯片支持
      presentation: ["highlight", "math", "search", "notes", "zoom"],

      // 样式化
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],

      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,

      // 添加选项卡支持
      tabs: true,

      vPre: true,

      // 启用 vue 交互演示，只有在严重依赖交互式 Vue Playground 时才应使用它。
      // vuePlayground: true,
    },

  },

});
