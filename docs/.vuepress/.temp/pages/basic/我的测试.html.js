export const data = JSON.parse("{\"key\":\"v-e852fa00\",\"path\":\"/basic/%E6%88%91%E7%9A%84%E6%B5%8B%E8%AF%95.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"zhuye\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"将你的个人介绍和档案 放置 在此处。 标题1 标题2\"},\"headers\":[{\"level\":2,\"title\":\"标题1\",\"slug\":\"标题1\",\"link\":\"#标题1\",\"children\":[]},{\"level\":2,\"title\":\"标题2\",\"slug\":\"标题2\",\"link\":\"#标题2\",\"children\":[]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"basic/我的测试.md\",\"copyright\":{\"author\":\"狐狸半面添\"},\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
