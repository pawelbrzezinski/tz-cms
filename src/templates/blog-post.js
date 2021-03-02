import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import { MDXProvider } from "@mdx-js/react"

import MyArticleTable from '../components/cms/MyArticleTable'
import MyArticleImg from '../components/cms/MyArticleImg'
import MyArticleMore from '../components/cms/MyArticleMore'
import YoutubePlayer from "../components/YoutubePlayer";
import Sources from '../components/cms/Sources'
import Tags from '../components/cms/Tags'
import AuthorHeader from '../components/cms/AuthorHeader'
import SEO from '../components/SEO';

import "../styles/blog-post.scss"

export const BlogPostTemplate = ({
  content,
  date,
  tags,
  title,
  sources,
  author,
  authorsTitle,
  readingTime,
  renderer
}) => {

  const Renderer = renderer || Content
  return (
    <div className="article_container">
      <div className="DO_NOT_REMOVE_ME" />
      <div className="article_content_wrapper">
        <span id="intro" />
        <h1>
          {title}
        </h1>
        <AuthorHeader author={author} authorsTitle={authorsTitle} date={date} readingTime={readingTime} />
        <Renderer content={content} className="article_content" />
        <Sources data={sources} />
        <Tags data={tags} />
      </div>
    </div>
  )
}

const components = {
  img: MyArticleImg,
  More: MyArticleMore,
  table: MyArticleTable,
  YoutubePlayer
};


const BlogPost = ({ data }) => {
  const { mdx: post } = data

  return (
    <MDXProvider components={components}>
      <Layout>
        <Helmet bodyAttributes={{
          "type": "blog",
        }} />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          keywords={post.frontmatter.keywords}
        />
        <BlogPostTemplate
          content={post.body}
          date={post.frontmatter.date}
          description={post.frontmatter.description}

          tags={post.frontmatter.tags}
          sources={post.frontmatter.sources}
          author={post.frontmatter.author}
          authorsTitle={post.frontmatter.authorsTitle}
          readingTime={post.frontmatter.readingTime}
          title={post.frontmatter.title}
        />
      </Layout>
    </MDXProvider>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        keywords
        tags
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
