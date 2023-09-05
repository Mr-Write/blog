import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "zhuye",
    link: "/",
  },
  {
    text: "基础",
    icon: "jichu",
    prefix: "/basic/",
    children: [
      {
        text: "初学者指南(2022版)",
        link: 'beginner-guide-2022/',
        icon: "zhinan",
      },
      {
        text: "初学者指南(2023版)",
        link: "beginner-guide-2023/",
        icon: "remenhot",
      },
      // {
      //   text: "我的测试",
      //   link: 'the-test'
      // }
    ]
  },
  {
    text: "软件协会",
    link: "https://www.csuftsap.cn/",
    icon: "ruanjiankaifabao"
  },
  {
    text: "我的CSDN",
    link: "https://blog.csdn.net/qq_62982856",
    icon: "csdn"
  }
]);
