export const categoryMap = {"category":{"/":{"path":"/category/","map":{"HTML":{"path":"/category/html/","keys":["v-e852fa00"]},"Web":{"path":"/category/web/","keys":["v-e852fa00"]}}}},"tag":{"/":{"path":"/tag/","map":{"HTML":{"path":"/tag/html/","keys":["v-e852fa00"]},"Web":{"path":"/tag/web/","keys":["v-e852fa00"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


