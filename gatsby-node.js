const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { union, trimEnd, trim } = require('lodash')



const pagesToBeCreated = {};

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            slug
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    createRedirect({ fromPath: '/poznan', toPath: '/poznan/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/warszawa', toPath: '/warszawa/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/lodz', toPath: '/lodz/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/szczecin', toPath: '/szczecin/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/krakow', toPath: '/krakow/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/wroclaw', toPath: '/wroclaw/badanie-znamion', isPermanent: true });
    createRedirect({ fromPath: '/bydgoszcz', toPath: '/bydgoszcz/badanie-znamion', isPermanent: true });


    const posts = result.data.allMdx.edges

    posts.forEach((edge) => {
      const id = edge.node.id

      const page = {
        path: trimEnd(edge.node.slug, "/"),
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      }
      
      //later on in onCreatePage
      pagesToBeCreated[page.path] = page;
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    union(posts).forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `allMdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const cleanPath = trim(page.path, "/");

  if (pagesToBeCreated[cleanPath]) {
    console.log(pagesToBeCreated[cleanPath].path, 'onCreatePage to be creeated path 3')

    deletePage(page)
    createPage(pagesToBeCreated[cleanPath])

    delete pagesToBeCreated[cleanPath]
  } else {
    const oldPage = Object.assign({}, page)

    // Remove trailing slash unless page is /
    page.path = replacePath(page.path)
    if (page.path !== oldPage.path) {
      // Replace old page with new page

      console.log(page.path, oldPage.path, 'REPLACMENET')
      deletePage(oldPage)
      createPage(page)
    }

  }

  //nieutworone jeszcze ma koniec?

  // console.log(pagesToBeCreated, "?????????")

}