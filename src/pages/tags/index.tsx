import React from 'react'
import { kebabCase, union, uniqBy } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

import "../../styles/tags.scss"

const TagsPage = ({
  data,
}) => {

  const {
    allMdx: { group: articleTags },
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout>
      <section className="tags-page">
        <Helmet title={`Tagi | ${title}`} />
        <div>
          <h1 className="title is-size-2 is-bold-light">Tagi</h1>
          <div className="article-tags">
            {uniqBy(union(articleTags), "fieldValue").map((tag) => (
              <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`} className="tag_item">
                {tag.fieldValue}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
