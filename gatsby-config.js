module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description: 'A site we built together during a full-day Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    }, {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'posts',
            path: 'posts',
          },
        },{
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'images',
            path: 'src/images',
          },
        }
      ],
    };
