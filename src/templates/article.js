import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MDXProvider } from "@mdx-js/react"
import Content from '../components/Content'
import CloseIcon from "../img/close.svg";

import MyArticleTable from '../components/cms/MyArticleTable'
import MyArticleImg from '../components/cms/MyArticleImg'
import MyArticleMore from '../components/cms/MyArticleMore'
import YoutubePlayer from "../components/YoutubePlayer";
import YoutubeGif from "../components/YoutubeGif";
import TocIcon from "../img/toc_icon.svg";
import Sources from '../components/cms/Sources'
import Tags from '../components/cms/Tags'
import AuthorHeader from '../components/cms/AuthorHeader'


import "../styles/article.scss"
import SEO from '../components/SEO';


const hasWidederm = (text = "") => text.toLocaleLowerCase().indexOf("wideoderm") !== -1

const components = {
  img: MyArticleImg,
  More: MyArticleMore,
  table: MyArticleTable,
  h2: (props) => {
    const className = hasWidederm(props.children) ? "wideoderm" : "";

    return (
      <h2 className={className}>
        {props.children}
      </h2>
    )
  },
  h3: (props) => {
    const className = hasWidederm(props.children) ? "wideoderm" : "";

    return (
      <h3 className={className}>
        {props.children}
      </h3>
    )
  },
  YoutubePlayer,
  YoutubeGif
};

const Toc = ({ toc }) => {

  const [isMobileToc, setIsMobileToc] = useState(false);
  const openMobileToc = useCallback(() => {
    setIsMobileToc(true);
  }, [setIsMobileToc]);

  const closeMobileToc = useCallback(() => {
    setIsMobileToc(false);
  }, [setIsMobileToc]);


  return (
    <>
      <div className="mobile_toc_button" onClick={openMobileToc}>
        <img src={TocIcon} />
        <span>
          Spis treści
        </span>
      </div>
      <div className={"side_toc" + (isMobileToc ? " side_toc--mobile-opened" : "")}>
        <div className="side_toc_label_wrapper">
          <h4>Spis treści:</h4>
          <img className="closeIcon" src={CloseIcon} onClick={closeMobileToc} alt="Zamknij Spis trści" />
        </div>
        <div className="sticky">

          {toc && toc.length && (<ol>
            <li onClick={closeMobileToc}>
              <AnchorLink offset='100' href={`#intro`} title="Wstęp">Wstęp</AnchorLink>
            </li>
            {toc.map(item => (
              <li key={item.label} onClick={closeMobileToc}>
                <AnchorLink offset='60' href={`#${item.link}`} title={item.label}>{item.label}</AnchorLink>
              </li>
            ))}
          </ol>)}
        </div>
      </div>
    </>
  )
}

const ArticlePage = (props) => {
  const { title, description, keywords, rawDate, toc = [], sources = [], date, author, authorsTitle, readingTime, tags } = props.data.mdx.frontmatter

  return (
    <MDXProvider components={components}>
      <Layout location={props.location}>
        <Helmet
          bodyAttributes={{
            "type": "article",
          }}
        />
        <SEO
          title={title}
          description={description}
          keywords={keywords}
          date={rawDate}
        />

        <div className="article_container">
          <Toc toc={toc} />
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
        rawDate:date
        title
        description
        keywords,
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