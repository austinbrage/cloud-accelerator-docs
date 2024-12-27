import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Cloud studio",
  description: "Terraform Client for fast devop",
  head: [
    ['link', { rel: "icon", type: 'image/svg+xml', href: "/cloudLogoHead.svg"}],
  ],

  themeConfig: {
    logo: { src: '/cloudLogoHead.svg', width: 24, height: 24 },

    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/austinbrage' }
    ],

    footer: {
      message: 'Released under a Personal use License.',
      copyright: 'Copyright © 2024-present Austin Brage'
    },
  }
})

function nav() {
  return [
    { 
      text: 'Home', 
      link: '/' 
    },
    {
      text: 'Guide',
      link: '/guide/what-is-cloudstudio',
      activeMatch: '/guide/'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is CloudStudio?', link: 'what-is-cloudstudio' },
        { text: 'Getting Started', link: 'getting-started' },
      ]
    }
  ]
}