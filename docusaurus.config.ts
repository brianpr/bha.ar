import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Banhaia Videovigilancia',
  tagline: 'Camaras de seguridad',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://camaras.bha.ar',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/menu.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banhaia-social.jpg',
    navbar: {
      title: 'bha.ar',
      logo: {
        alt: 'bha.ar',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'herramientasSidebar',
        //   position: 'left',
        //   label: 'Herramientas',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'videovigilanciaSidebar',
          position: 'left',
          label: 'Videovigilancia',
        },  
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Videovigilancia',
              to: '/docs/videovigilancia',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Banhaia',
              href: 'https://www.banhaia.com',
            },
            {
              label: 'NinoxNet',
              href: 'https://www.ninoxnet.com',
            },
            {
              label: 'Tienda Banhaia',
              href: 'https://tienda.banhaia.com',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Banhaia S.R.L.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
