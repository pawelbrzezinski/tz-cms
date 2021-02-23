import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";

import { MDXProvider } from "@mdx-js/react"


import Agnieszka from "../img/agnieszka-czyzewska.png"

import "../styles/article.scss"

const MyImg = (props) => {
  return (
    <>
      <img {...props} />
      <span className="image_caption">{props.alt}</span>
    </>
  )
}

const More = ({ link = "", text = "" }) => {
  return (
    <div>
      <Link to={link} >
        {text}
      </Link>
    </div>
  )
}

const components = {
  img: MyImg,
  More
};


const ArticlePage = ({ children, ...props }) => {
  const { title, toc = [], date, author, authorsTitle, readingTime, tags } = props.pageContext.frontmatter

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
              {toc.length && (<ol>
                <li>
                  <AnchorLink offset='100' href={`#intro`} title="Wstęp">Wstęp</AnchorLink>
                </li>
                {toc.map(item => (
                  <li key={item.label}>
                    <AnchorLink offset='100' href={`#${item.link}`} title={item.label}>{item.label}</AnchorLink>
                  </li>
                ))}
              </ol>)}
            </div>


          </div>
          <div className="article_content_wrapper">
            <a id="intro" />
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
              {children}
            </div>

            {tags && tags.length ? (
              <div className="tags">
                <h4>Tags</h4>
                <ul >
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

      </Layout>
    </MDXProvider >
  )
}


export default ArticlePage
