import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "zhuye",
    link: "/",
  },
  {
    text: "基础",
    icon: "zhuye",
    prefix: "/basic/",
    children: [
      {
        text: "初学者指南",
        link: "beginner-guide-2023"
      },
      {
        text: "我的测试",
        link: 'the-test'
      }
    ]
  }
]);
