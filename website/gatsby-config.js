module.exports = {
  siteMetadata: {
    title: `Design System Example`,
    description: `An example design system.`,
    social: {
      github: 'wordpress',
      twitter: 'wordpress',
    },
    menuLinks: [
      {
        name: 'home',
        href: '/',
      },
      {
        name: 'Button',
        href: '/components/button',
      },
      {
        name: 'ButtonGroup',
        href: '/components/button-group',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `foundations`,
        path: `${__dirname}/src/pages/foundations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/pages/components`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/DefaultLayout/index.tsx'),
          foundations: require.resolve(
            './src/layouts/FoundationLayout/index.tsx',
          ),
          components: require.resolve(
            './src/layouts/ComponentLayout/index.tsx',
          ),
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
};
