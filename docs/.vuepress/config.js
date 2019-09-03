module.exports = {
  title: "黄同学",
  description: 'A simple and beautiful vuepress blog theme .',
  dest: 'vuepress',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    base: '/',
    nav: require('./nav/index'),
    sidebar: {
      // git
      '/blog/git/': require('../blog/git/sideBar'),

      // linux
      '/blog/linux/': require('../blog/linux/sideBar'),

      // HTML && CSS 模块
      '/blog/html-css/': require('../blog/html-css/sideBar'),

      // javaScript 模块
      '/blog/javaScript/': require('../blog/javaScript/sideBar'),

      // jQuery 模块
      '/blog/jQuery/': require('../blog/jQuery/sideBar'),


      // vue.js 模块
      '/blog/vue/': require('../blog/vue/sideBar'),

      // react.js 模块
      '/blog/react/': require('../blog/react/sideBar'),

      // node.js 模块
      '/blog/node/': require('../blog/node/sideBar'),

      '/blog/frontend/': require('../blog/frontend/sideBar'),

      // record
      '/blog/life-record/': require('../blog/life-record/sideBar'),
      
      // other
      '/blog/others/': require('../blog/others/sideBar'),

      // project
      '/blog/project/': require('../blog/project/sideBar')
    },

    // 博客设置
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: 'Category' // 默认 “分类”
      // },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'jsmond1016',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'QO0eqpdAvsDn1jXdW7xbIzxu-gzGzoHsz',// your appId
      appKey: '8kmEruhxuy5hLbSCUWIgRGwn', // your appKey
    }
  },
  markdown: {
    lineNumbers: false
  },
  plugins: [
    ['@vuepress/pwa', {
      undatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }], 
    '@vuepress/medium-zoom', 
    'flowchart'
  ]
}  
