// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Happy Docs',
  tagline: 'Docs for Happy',
  url: 'https://docs.wdsj.one/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Happy-clo', // Github组织/用户名称
  projectName: 'Happy-Docs', // 通常是项目仓库名
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Happy-clo/Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Happy Docs',
      logo: {
        alt: 'icon',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'home',
          label: '首页',
        },
        {
          href: 'https://free.happya.top/',
          label: 'ChatWeb',
          position: 'right',
        },
        {
          href: 'https://bingai.happya.top/',
          label: 'Bing',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Happy-clo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Happy, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: '9a34f1ab99b281b2863d5aa483bf4d6c',
      indexName: 'happy',
      appId: 'Z5WW3ZRWVZ',
      algoliaOptions: {},
    },
  },
};

module.exports = config;
