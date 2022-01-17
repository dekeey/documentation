const { config } = require("vuepress-theme-hope");

module.exports = config({
  locales: {
    "/": {
      lang: "en-UK",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!",
    },
    "/de/": {
      lang: "de",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    // "/id/": {
    //   lang: "id",
    //   title: "SubQuery Blog Posts",
    //   description:
    //     "Explore and transform your chain data to build intuitive dApps faster!.",
    // },
    "/ru/": {
      lang: "ru",
      title: "SubQuery Blog Posts",
      description: "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    // "/th/": {
    //   lang: "th",
    //   title: "SubQuery Blog Posts",
    //   description:
    //     "Explore and transform your chain data to build intuitive dApps faster!.",
    // },
    // "/tr/": {
    //   lang: "tr",
    //   title: "SubQuery Blog Posts",
    //   description:
    //     "Explore and transform your chain data to build intuitive dApps faster!.",
    // },
    // "/uk/": {
    //   lang: "uk",
    //   title: "SubQuery Blog Posts",
    //   description: "Explore and transform your chain data to build intuitive dApps faster!.",
    // },
    "/vi/": {
      lang: "vi",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    /*
    "/es/": {
      lang: "es",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    */
    /*
    "/it/": {
      lang: "it",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/ja/": {
      lang: "ja",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/ko/": {
      lang: "ko",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    */
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    logoLink: 'https://subquery.network',
    lastUpdated: true,
    nav: [
      { text: 'Explorer', link: 'https://explorer.subquery.network/', target: '_blank', rel: '' },
      { text: 'Projects', link: 'https://project.subquery.network/', target: '_blank', rel: '' },
      { text: 'Documentation', link: '/' },
      { text: 'GitHub', link: 'https://github.com/subquery/subql', target: '_blank', rel: '' },
    ],
    sidebarDepth: 4,
    themeColor: false,
    locales: {
      '/': getSidebar('', 'English'),
      '/zh/': getSidebar('/zh', 'Chinese'),
      '/de/': getSidebar('/de', 'German'),
      '/vi/': getSidebar('/vi', 'Vietnamese'),
      '/ru/': getSidebar('/ru', 'Russian')
      // '/uk/': getSidebar('/uk', 'Ukranian')
    },
    plugins: [
      [
        '@vuepress/plugin-google-analytics',
        {
          id: 'G-MY90N76MNK',
        },
        'fulltext-search',
      ],
    ],
    markdown: {
      extractHeaders: ['h2', 'h3'],
    }
  }
})

chainWebpack: config => {
  /** Webpack rule to handle some non-image assets that we'll use */
  config.module
    .rule('files')
    .test(/\.(pdf|zip|ait|log|txt)$/)
    .use('file-loader')
    .loader('file-loader')
    .options({
      name: `[path][name].[ext]`,
      limit: 10000,
      esModule: false,
    });
  /** Explicitly setting esModule:false
   * to avoid this issue https://github.com/vuejs/vue-loader/issues/1612
   */
  config.module
    .rule('images')
    .use('url-loader')
    .options({
      limit: 10000,
      esModule: false,
    });
}

function getSidebar(locale, language){ 
  return {
    selectLanguageName: language,
    sidebar: [
    {
      title: 'Welcome to SubQuery',
      path: `${locale === '' ? '/' : locale}`,
      collapsable: true,
    },
    {
      title: 'Quick Start',
      path: `${locale}/quickstart/quickstart`,
      collapsable: true,
      children: [
        `${locale}/quickstart/quickstart.md`,
        `${locale}/quickstart/helloworld-localhost.md`,
        `${locale}/quickstart/understanding-helloworld.md`,
        `${locale}/quickstart/helloworld-hosted.md`,
        {
          title: 'Hero Course',
          path: `${locale}/quickstart/herocourse`,
          collapsable: true,
          children: [
            `${locale}/quickstart/herocourse/modules/module1.md`,
            `${locale}/quickstart/herocourse/modules/module2.md`,
            `${locale}/quickstart/herocourse/modules/module3.md`,
            `${locale}/quickstart/herocourse/modules/module4.md`,
            `${locale}/quickstart/herocourse/modules/module5.md`,
            `${locale}/quickstart/herocourse/modules/module6.md`,
          ],
        },  
        {
          title: 'Tutorials & Examples',
          path: `${locale}/quickstart/tutorials_examples/`,
          collapsable: false,
          children: [
            `${locale}/quickstart/tutorials_examples/block-height.md`,
            `${locale}/quickstart/tutorials_examples/batch-size.md`,
            `${locale}/quickstart/tutorials_examples/run-indexer.md`,
            `${locale}/quickstart/tutorials_examples/dictionary.md`,
            `${locale}/quickstart/tutorials_examples/debug-projects.md`,
            `${locale}/quickstart/tutorials_examples/delete-projects.md`,
            `${locale}/quickstart/tutorials_examples/terminology.md`,
          ],
        },  
        `${locale}/quickstart/faqs.md`,
      ],
    },
    {
      title: 'Build',
      path: `${locale}/build/introduction`,
      collapsable: true,
      children: [
        `${locale}/build/introduction.md`,
        `${locale}/build/install.md`,
        `${locale}/build/manifest.md`,
        `${locale}/build/graphql.md`,
        `${locale}/build/mapping.md`,
        `${locale}/build/moonbeam.md`
      ]
    },
    {
      title: 'Run & Publish',
      path: `${locale}/run_publish/publish`,
      collapsable: true,
      children: [
        `${locale}/run_publish/publish.md`,
        `${locale}/run_publish/upgrade.md`,
        `${locale}/run_publish/connect.md`,
        `${locale}/run_publish/run.md`,
        `${locale}/run_publish/query.md`,
        `${locale}/run_publish/graphql.md`,
        `${locale}/run_publish/sandbox.md`,
      ]
    },
    {
      title: 'The SubQuery Network',
      path: `${locale}/subquery_network/indexers`,
      collapsable: true,
      children: [
        `${locale}/subquery_network/delegators.md`,
      ]
    },
    {
      title: 'Miscellaneous',
      path: `${locale}/miscellaneous/contributing`,
      collapsable: true,
      children: [
        `${locale}/miscellaneous/contributing.md`,
        `${locale}/miscellaneous/social_media.md`,
        `${locale}/miscellaneous/branding.md`,
        `${locale}/miscellaneous/ambassadors.md`,
      ]
    },
    {
      title: 'References',
      path: `${locale}/references/references`,
      collapsable: true,
      children: [
        `${locale}/references/references.md`,
      ]
    }
  ]}
}