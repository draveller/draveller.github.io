import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "AI",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "AI 助手",
        icon: "pen-to-square",
        prefix: "/",
        children: [
          { text: "智谱清言", icon: "pen-to-square", link: "https://chatglm.cn/main/alltoolsdetail" },
          { text: "Kimi", icon: "pen-to-square", link: "https://kimi.moonshot.cn/" },
          { text: "通义千问", icon: "pen-to-square", link: "https://tongyi.aliyun.com/qianwen/" },
        ],
      },
      {
        text: "AI 资讯",
        icon: "pen-to-square",
        prefix: "/",
        children: [
          { text: "AGI 知识库", icon: "pen-to-square", link: "https://km3dl0ffdl.feishu.cn/wiki/UvJPwhfkiitMzhkhEfycUnS9nAm" },
          { text: "AI 副业指南", icon: "pen-to-square", link: "https://17yongai.com/" },
          { text: "AI 工具集", icon: "pen-to-square", link: "https://ai-bot.cn/ai-app-store/" },
        ],
      },
    ],
  },
  {
    text: "It’s Only a Paper Moon",
    icon: "music",
    link: "/posts/media/paper-moon",
  },
  {
    text: "Somethin' Stupid",
    icon: "music",
    link: "/posts/media/something-stupid",
  },
  {
    text: "主题文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
