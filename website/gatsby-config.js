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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`${__dirname}/src/pages/components/**/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/pages/components/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/layouts/BaseLayout/index.tsx'),
          components: require.resolve(
            './src/layouts/ComponentsLayout/index.tsx',
          ),
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
};
