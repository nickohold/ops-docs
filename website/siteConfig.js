/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'IronSource',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/is-video-white.png',
    infoLink: 'https://www.ironsrc.com/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'IronSource RTB Integration', // Title for your website.
  tagline: '',
  // baseUrl: '/',
  baseUrl: '/operations/',
  // Used for publishing and more
  projectName: 'ops-docs',
  // organizationName: 'Ironsource',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
   organizationName: 'nickohold',
   url:"https://nickohold.github.io/",
  //  baseUrl:"/ops-docs/",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'OnBoarding',label:'Docs'},
    {page:'testing_pages.html', label:'Integration_flow'},
    {page:'testing', label:'MyPage'},
    // {blog: true, label: 'Blog'},
    // {href:'https://connect.ironsrc.com/api-docs', label: 'Connect API', external: true},
  ],

  // If you have users set above, you add it here:
  // users,

  
  /* path to images for header/footer */
  headerIcon: 'img/is-video-white.png',
  footerIcon: 'img/is-video-white.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#260c89',
    secondaryColor: '#a3a3a3',
  },
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} IronSource LTD`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    wrapPagesHTML:true,
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;