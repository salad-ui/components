module.exports = {
  siteMetadata: {
    title: `Design System Example`,
    menuLinks: [
      {
        name: 'home',
        href: '/',
      },
      {
        name: 'Button',
        href: '/components/button',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.tsx'),
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
};
