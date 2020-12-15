import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'

const TestPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title
      }
    }
  },
}) => {

  return (
    <Layout>
      <section className="section">
        <Helmet title={title} />
        <h1>{title}</h1>

        <div>
          <HTMLContent content={html} />
        </div>
      </section>
    </Layout>
  )
}



export default TestPage

export const tagPageQuery = graphql`
  query ArticlePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
