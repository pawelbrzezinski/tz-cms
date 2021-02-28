import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'



import { MDXProvider } from "@mdx-js/react"

import MoreIcon from '../img/more-icon.png';
import Button from '../components/Button'
import "../styles/article.scss"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
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
            <PostContent content={content} />
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
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}


////COPY PASTA!!!!!


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


/////

const BlogPost = ({ data, ...rest }) => {

  console.log(data, rest, "PROPS blog")
  const { mdx: post } = data
  return (
    <MDXProvider components={components}>
      <Layout>
        <BlogPostTemplate
          content={post.body}
          date={post.frontmatter.date}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog" bodyAttributes={{
              "type": "article",
            }}>
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
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
        tags
      }
    }
  }
`
