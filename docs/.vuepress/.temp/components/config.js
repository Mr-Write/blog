import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "D:/SoftwareEngineering/docs/blog/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import ArtPlayer from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import AudioPlayer from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import BiliBili from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import SiteInfo from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import VideoPlayer from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import XiGua from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import BackToTop from "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/SoftwareEngineering/docs/blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4186795_k24yzrtkzh.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
