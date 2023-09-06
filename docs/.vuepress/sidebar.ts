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
                    text: "写在前面",
                    link: "README"
                },
                {
                    text: "1. 编程的几个基本概念",
                    link: "1-program-basic-concepts"
                },
                {
                    text: "2. 学习编程难吗",
                    link: "2-is-it-difficulty-to-learn-program"
                },
                {
                    text: "3. 英语和数学不好可以学编程吗",
                    link: "3-math-and-english-to-program"
                },
                {
                    text: "4. 我应该要学习很多编程语言吗",
                    link: "4-should-I-learn-many-programming-language"
                },
                {
                    text: "5. 世界上最好的编程语言是什么",
                    link: "5-what-is-the-best-programming-language"
                },
                {
                    text: "6. 大一上需要去纠结走哪个方向吗",
                    link: "6-do-I-need-to-struggle-in-which-direction-to-take-in-my-freshman-year"
                },
                {
                    text: "7. 初次刷题没思路没感觉正常吗",
                    link: "7-no-ideas-to-questions"
                },
                {
                    text: "8. 如果我在写代码时遇到问题怎么办",
                    link: "8-what-if-I-encounter-problems-while-writing-code"
                },
                {
                    text: "9. 学习编程是应该先看书还是先看视频呢",
                    link: "9-book-or-video-about-learning-program"
                },
                {
                    text: "10. 我是非计算机专业可以学好编程吗",
                    link: "10-can-I-learn-programming-well-if-I-am-not-a-computer-major"
                },
                {
                    text: "11. 我认认真真上好学校的课程就够了吗",
                    link: "11-am-I-serious-enough-to-attend-good-school-courses"
                },
                {
                    text: "12. 关于C语言",
                    link: "12-about-c-language"
                },
                {
                    text: "13. 编程学习的心得分享",
                    link: "13-sharing-of-experience-in-programming-learning"
                },
                {
                    text: "14. 程序员成长的三阶段",
                    link: "14-the-three-stages-of-programmer-growth"
                },
                {
                    text: "15. 计算机基础知识",
                    link: "15-computer-basics"
                },
                {
                    text: "16. 在大学",
                    link: "16-at-university"
                },
                {
                    text: "17. 编程相关的常见工作岗位",
                    link: "17-common-job-positions-related-to-programming"
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
        // {
        //     text: '我的测试',
        //     link: 'the-test'
        // }
    ],
});
