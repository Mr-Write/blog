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
        text: "初学者指南",
        link: "beginner-guide-2023",
        icon: "zhinan",
      },
      {
        text: "我的测试",
        link: 'the-test'
      }
    ]
  }
]);
