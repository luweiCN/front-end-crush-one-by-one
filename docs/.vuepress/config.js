module.exports = {
  dest: './dist',
  base: '/front-end-crush-one-by-one/dist/',
  title: '前端逐个击破',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Javascript', link: '/javascript/javascript.md' },
      { text: '布局', link: '/layout' },
    ],
    sidebarDepth: 2,
    sidebar: [
      '/',
      {
        title: '逻辑（javascript）',
        children: [
          '/javascript/function/function.md'
        ]
      }
    ]
  }
}