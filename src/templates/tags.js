import React from 'react'
import { Helmet } from 'react-helmet'
import { union } from 'lodash'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import AuthorHeader from "../components/cms/AuthorHeader";

import "../styles/tags.scss"

class TagRoute extends React.Component {
  render() {
    const articles = this.props.data.allMdx.edges

    const links = union(articles).map((post) => {
      const slug = `/${post.node.slug}`

      return (
        <Link key={slug} to={slug} className="tag-item-preview">
          <header>
            <h2 >{post.node.frontmatter.title}</h2>
            <AuthorHeader
              author={post.node.frontmatter.author}
              authorsTitle={post.node.frontmatter.authorsTitle}
              date={post.node.frontmatter.date}
              readingTime={post.node.frontmatter.readingTime}
            />
          </header>
          <div>
            {post.node.frontmatter.description}
          </div>
        </Link>
      )
    })
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <section className="tags-page">
          <Helmet title={`${tag} | ${title}`} />
          <div>
            <h1>Wyniki dla tagu: <span className="tag-name">{tag}</span></h1>
            <div className="article-tags-preview-wrapper">{links}</div>
            <div className="show_all" >
              <Button type="secondary" >
                <Link to="/tags/">Zobacz wszystkie tagi</Link>
              </Button>
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
            description
            author
            authorsTitle
            date(formatString: "DD.MM.YYYY")
            readingTime
          }
        }
      }
    }
  }
`
