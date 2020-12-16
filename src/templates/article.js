import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const ArticlePage = ({ children, ...props }) => {
  const { title, date, description, tags } = props.pageContext.frontmatter

  return (
    <Layout>
      <section className="section">
        <Helmet title={title} />

        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h2>
                {date}
              </h2>
              <p>{description}</p>
              {/* <PostContent content={content} /> */}
              <div>
                {children}
              </div>
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export default ArticlePage

export const pageQuery = graphql`
  query ArticleQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
    }
  }
`
