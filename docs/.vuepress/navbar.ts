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
        text: "给编程初学者的建议",
        link: "初学者值得一看：什么是C语言，学习建议，解疑与误区"
      }
    ]
  }
]);
