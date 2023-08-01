import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    '/basic/': [
        {
            text: '初学者指南(2022版)',
            prefix: 'beginner-guide-2022/',
            icon: "zhinan",
            collapsible: true,
            children: [
                {
                    text: "总览",
                    link: "README"
                },
                {
                    text: "什么是编程语言",
                    link: "1-what-is-program-language"
                }
            ]
        },
        {
            text: '初学者指南',
            link: 'beginner-guide-2023',
            icon: "zhinan"
        },
        {
            text: '我的测试',
            link: 'the-test'
        }
    ],
});
