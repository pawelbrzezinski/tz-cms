import React from 'react'
import { Helmet } from 'react-helmet'
import { union } from 'lodash'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const articles = this.props.data.allMdx.edges

    const links = union(posts, articles).map((post) => {
      const slug = post.node.slug ? `/${post.node.slug}` : post.node.fields.slug

      return (
        <li key={slug}>
          <Link to={slug}>
            <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
          </Link>
        </li>
      )
    })
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <ul className="taglist">{links}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`
