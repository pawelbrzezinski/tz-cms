import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MDXProvider } from "@mdx-js/react"
import Content from '../components/Content'
import MoreIcon from '../img/more-icon.png';
import Button from '../components/Button'

import Agnieszka from "../img/agnieszka-czyzewska.png"

import "../styles/article.scss"

const MyImg = (props) => {
  return (
    <>
      <img {...props} alt={props.alt} />
      <span className="image_caption">{props.alt}</span>
    </>
  )
}

const MyTable = (props) => {
  return (
    <div className="article-table-wrapper">
      <table {...props} />
    </div>
  )
}

const More = ({ link = "", cta = "", text = "" }) => {
  return (
    <Link to={link} alt={text} title={text} className="more-link">
      <div className="more-wrapper">
        <div className="more-container">
          <img src={MoreIcon} alt={text} />
          <div className="more-content">
            <p className="label">
              Zobacz również:
          </p>
            <div>
              {text}
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button type="secondary">

            <span>  {cta}</span>
          </Button>
        </div>
      </div>
    </Link>

  )
}

const components = {
  img: MyImg,
  More,
  table: MyTable
};


const ArticlePage = (props) => {
  console.log(props, "PROPS article")

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
            <div className="header">
              <div className="author">
                {author.indexOf("Agnieszka") !== -1 && <img src={Agnieszka} alt={author} />}
                <div>
                  <p className="author_name">
                    {author}
                  </p>
                  <p className="title">
                    {authorsTitle}
                  </p>
                  <p className="reading_time">{date} · {readingTime} min</p>
                </div>

              </div>
              <div className="social">

              </div>

            </div>
            <div className="article_content">
              <Content content={props.data.mdx.body} />
            </div>

            {sources && sources.length && (
              <div className="sources">
                <h4>Źródła:</h4>
                <ol>
                  <li>
                    <AnchorLink offset='100' href={`#intro`} title="Wstęp">Wstęp</AnchorLink>
                  </li>
                  {sources.map(item => (
                    <li key={`${item.label}_${item.link}`}>
                      {item.link ? <Link to={`${item.link}`} title={item.label}>{item.label}</Link> : item.label}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {tags && tags && tags.length ? (
              <div className="tags">
                {tags.map((tag) => (
                  <Link to={`/tags/${kebabCase(tag)}/`} key={tag + `tag`} className="tag_item">{tag}</Link>
                ))}
              </div>
            ) : null}
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