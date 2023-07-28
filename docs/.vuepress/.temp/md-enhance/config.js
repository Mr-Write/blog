import { defineClientConfig } from "@vuepress/client";
import VPCard from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import ChartJS from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "D:/SoftwareEngineering/docs/blog/node_modules/reveal.js/dist/reveal.css";
import Presentation from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/SoftwareEngineering/docs/blog/node_modules/katex/dist/katex.min.css";
import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
  },
  setup: () => {

  }
});
