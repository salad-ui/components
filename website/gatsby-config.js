module.exports = {
  siteMetadata: {
    title: `WordPress Design System`,
    description: `An Open Design System for WordPress and Beyond`,
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
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`components/**/*`],
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
          default: require.resolve('./src/layouts/BaseLayout/index.tsx'),
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
