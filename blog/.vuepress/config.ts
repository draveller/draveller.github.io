import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "主页",
  description: "基于 VuePress 构建的静态博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
