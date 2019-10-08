module.exports = {
  siteMetadata: {
    title: `salad-ui`,
    description: `A set of components for building rich user interfaces within wp-admin.`,
    social: {
      github: 'wordpress',
      twitter: 'wordpress',
    },
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
