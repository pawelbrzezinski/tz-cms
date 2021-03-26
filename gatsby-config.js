module.exports = {
  siteMetadata: {
    siteUrl: 'https://twojeznamiona.pl',
    title: 'Twoje Znamiona',
    description:
      'Ogolnopolskie Centrum Badania Zanamion Twoje Znamiona',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-preload-fonts`,
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     analyzerMode: "static",
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WBSXV87",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "route-change",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-72225944-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/templates/article.js")
        },
        gatsbyRemarkPlugins: [
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
              maxWidth: 650,
              quality: 65,
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
      resolve: `gatsby-plugin-material-ui`,
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
          families: ['Poppins:Bold,400,600']
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
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: config => {
          config.node = {
            ...config.node,
            fs: "empty",
            child_process: "empty",
            module: "empty",
          };
        },
      },
    },
    // 'gatsby-plugin-client-side-redirect', // keep it in last in list
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
