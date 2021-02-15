module.exports = {
  siteMetadata: {
    siteUrl: 'https://twojeznamiona.pl',
    title: 'Twoje Znamiona',
    description:
      'Ogolnopolskie Centrum Badania Zanamion Twoje Znamiona',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/article.js")
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          "gatsby-remark-lazy-load",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 1
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:Bold,Semi-Bold,Regular,400,600,700']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) => {
          const { allPages } = getNodes(allSitePage) || []

          return allPages.map(page => {
            const url = site.siteMetadata ? site.siteMetadata.siteUrl : ''
            return {
              url: `${url}${page.path}`,
              lastmodISO: new Date().toISOString(),
              priority: 0.9,
            }
          })
        },
      },
    },
    'gatsby-plugin-client-side-redirect', // keep it in last in list
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}

function getNodes(results) {
  if (`nodes` in results) {
    return { allPages: results.nodes, originalType: `nodes` }
  }

  if (`edges` in results) {

    return {
      allPages: results && results.edges ? results.edges.map(edge => edge.node) : [],
      originalType: `edges`,
    }
  }
  throw new Error(
    `[gatsby-plugin-sitemap]: Plugin is unsure how to handle the results of your query, you'll need to write custom page filter and serializer in your gatsby config`
  )
}
