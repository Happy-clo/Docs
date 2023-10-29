// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Happy Docs',
  tagline: 'Docs for Happy',
  url: 'https://docs.wdsj.one/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // @ts-ignore
  onBrokenLinks: 'ignore',
  organizationName: 'Happy-clo', // Usually your GitHub org/user name.
  projectName: 'Happy-Docs', // Usually your repo name.
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
        title: 'Happy Docs',
        logo: {
          alt: 'icon',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://ai.maoyuan.us/',
            label: 'ChatWeb',
            position: 'right',
          },
          {
            href: 'https://bingai.maoyuan.us/',
            label: 'Bing',
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
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;
