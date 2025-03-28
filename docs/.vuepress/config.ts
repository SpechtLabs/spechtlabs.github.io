import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import {path} from '@vuepress/utils'
//import pkg from '@vuepress/plugin-register-components';
//const { registerComponentsPlugin } = pkg;

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'Specht Labs',
  description: 'SpechtLabs is dedicated to building robust, scalable, and high-performance software.',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/specht.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

//  plugins: [
//      registerComponentsPlugin({
//          componentsDir: path.resolve(__dirname, './components'),
//      }),
//  ],

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
     docsRepo: 'https://github.com/spechtlbas/spechtlabs.github.io',
     docsDir: 'docs',
     docsBranch: 'main',

    /* 页内信息 */
     editLink: false,
     lastUpdated: true,
     contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    cache: 'filesystem',
    search: { provider: 'local' },

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
     markdown: {
    //   abbr: true,         // 启用 abbr 语法  *[label]: content
    //   annotation: true,   // 启用 annotation 语法  [+label]: content
    //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
    //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
    //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    //   icons: true,        // 启用内置图标语法  :[icon-name]:
    //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
    //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
    //   demo: true,         // 启用 demo 容器  ::: demo
       repl: {             // 启用 代码演示容器
         go: true,         // ::: go-repl
         rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
       },
    //   math: {             // 启用数学公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
       mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
       image: {
         figure: true,     // 启用 figure
         lazyload: true,   // 启用图片懒加载
         mark: true,       // 启用图片标记
         size: true,       // 启用图片大小
       },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
     },

    watermark: false,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
