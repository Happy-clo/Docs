// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Happy Wiki',
  tagline: 'Wiki for Happy',
  url: 'https://help.1145.one/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // @ts-ignore
  onBrokenLinks: 'ignore',
  organizationName: 'Happy-clo', // Usually your GitHub org/user name.
  projectName: 'happy-clo.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Happy-clo/Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Happy Wiki',
        logo: {
          alt: 'icon',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'right',
            label: '主页',
          },
          {
            href: 'https://github.com/Happy-clo/Docs',
            label: '帮助我们改进文档',
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
                label: '进入维基',
                to: '/docs/main',
              },
            ],
                  copyright: `Simpfun Wiki Team 版权所有 由 Docusaurus 构建。`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // @ts-ignore
  onBrokenLinks: 'ignore',
  organizationName: 'Happy-clo', // Usually your GitHub org/user name.
  projectName: 'happy-clo.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Happy-clo/Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Happy Wiki',
        logo: {
          alt: 'icon',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'right',
            label: '主页',
          },
          {
            href: 'https://github.com/Happy-clo/Docs',
            label: '帮助我们改进文档',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '9a34f1ab99b281b2863d5aa483bf4d6c',
        indexName: 'happy',
        appId: 'Z5WW3ZRWVZ', // Optional, if you run the DocSearch crawler on your own
        algoliaOptions: {} Optional, if provided by Algolia
      },
    }),
};


module.exports = config;},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '9a34f1ab99b281b2863d5aa483bf4d6c',
        indexName: 'happy',
        appId: 'Z5WW3ZRWVZ', // Optional, if you run the DocSearch crawler on your own
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;
