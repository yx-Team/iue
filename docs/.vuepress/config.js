module.exports = {
  base:'/iue/',
  title: "iue 组件库官网",
  description: "一个基于vue的组件库！",
  lastUpdated: "Last Updated", // string | boolean
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "website", link: "http://iuehtml.cn" }
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: [
            "/introduction/install",
            "/introduction/quick"
        ]
      },
      {
        title: "基础",
        collapsable: false,
        children: [
          "/components/base/button"
        ]
      },
      {
        title: "布局",
        collapsable: false,
        children: [
          "/components/layout/grid",
          "/components/layout/layout"
        ]
      },
      {
        title: "导航",
        collapsable: false,
        children: [
          "/components/navigation/tabs"
        ]
      },
      {
        title: "通知",
        collapsable: false,
        children: [
          "/components/notice/alert",
          "/components/notice/message",
          "/components/notice/notify"
        ]
      }
    ],
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'yx-Team/iue',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebarDepth:2
  },
  markdown: {
    lineNumbers: true
  }
};
