import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MDXProvider } from "@mdx-js/react"
import Content from '../components/Content'

import MyArticleTable from '../components/cms/MyArticleTable'
import MyArticleImg from '../components/cms/MyArticleImg'
import MyArticleMore from '../components/cms/MyArticleMore'
import Sources from '../components/cms/Sources'
import Tags from '../components/cms/Tags'
import AuthorHeader from '../components/cms/AuthorHeader'


import "../styles/article.scss"


const components = {
  img: MyArticleImg,
  More: MyArticleMore,
  table: MyArticleTable
};

const ArticlePage = (props) => {
  const { title, toc = [], sources = [], date, author, authorsTitle, readingTime, tags } = props.data.mdx.frontmatter

  // console.log(title, description, keywords, new Date(date.split(".").reverse().join("-")).toISOString(), 'SEO')

  return (
    <MDXProvider components={components}>
      <Layout>
        <Helmet
          bodyAttributes={{
            "type": "article",
          }}
          title={title} />
        <div className="article_container">
          <div className="side_toc">
            <div className="sticky">
              <h4>Spis treści:</h4>
              {toc && toc.length && (<ol>
                <li>
                  <AnchorLink offset='100' href={`#intro`} title="Wstęp">Wstęp</AnchorLink>
                </li>
                {toc.map(item => (
                  <li key={item.label}>
                    <AnchorLink offset='60' href={`#${item.link}`} title={item.label}>{item.label}</AnchorLink>
                  </li>
                ))}
              </ol>)}
            </div>
          </div>
          <div className="article_content_wrapper">
            <span id="intro" />
            <h1>
              {title}
            </h1>
            <AuthorHeader author={author} authorsTitle={authorsTitle} date={date} readingTime={readingTime} />
            <Content content={props.data.mdx.body} className="article_content" />
            <Sources data={sources} />
            <Tags data={tags} />
          </div>
        </div>
      </Layout>
    </MDXProvider >
  )
}


export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        tags
        toc {
          link,
          label
        },
        sources {
          link,
          label
        },
        author,
        authorsTitle, 
        readingTime
      }
    }
  }
`