import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    '/basic/': [
        {
            text: '初学者指南(2023版)',
            prefix: 'beginner-guide-2023/',
            icon: "zhinan",
            collapsible: true,
            children: [
                {
                    text: "总览",
                    link: "README"
                },
                {
                    text: "1. 编程的几个基本概念",
                    link: "1-program-basic-concepts"
                }
            ]
        },
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
                    text: "1. 什么是编程语言",
                    link: "1-what-is-program-language"
                },
                {
                    text: "2. 什么是C语言与我的强烈建议 - 先学C,而不是c++,java等",
                    link: "2-What-is-C-and-my-suggestions"
                },
                {
                    text: "3. C语言的发展史",
                    link: "3-C-development-history"
                },
                {
                    text: "4. 学习编程和C语言难吗",
                    link: "4-is-programming-and-C-difficult"
                },
                {
                    text: "5. 英语和数学不好可以学编程吗",
                    link: "5-not-good-at-english-and-math-can-program"
                },
                {
                    text: "6. 各种编程语言间的鄙视链",
                    link: "6-contempt-chain-between-languages"
                },
                {
                    text: "7. 编程学习的心得分享",
                    link: "7-sharing-of-experience-in-programming-learning"
                },
                {
                    text: "8. 回答初学者的其它一些疑惑与理解误区",
                    link: "8-answer-some-other-questions"
                }
            ]
        },
        {
            text: '我的测试',
            link: 'the-test'
        }
    ],
});
