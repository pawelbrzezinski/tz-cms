import React from 'react'
import MDX from "@mdx-js/runtime";
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

import MyArticleTable from "../../components/cms/MyArticleTable";
import MyArticleMore from "../../components/cms/MyArticleMore";

const BlogPostPreview = ({ entry, getAsset }) => {
  const tags = entry.getIn(['data', 'tags'])
  const sources = entry.getIn(['data', 'sources'])

  const components = {
    img: (props) => {
      return (
        <>
          <img {...props} alt={props.alt} src={getAsset(props.src).url} />
          <span className="image_caption2">{props.alt}</span>
        </>
      )
    },
    More: MyArticleMore,
    table: MyArticleTable,
  };

  return (
    <BlogPostTemplate
      content={entry.getIn(['data', 'body'])}
      description={entry.getIn(['data', 'description'])}
      date={entry.getIn(['data', 'date']).toLocaleDateString()}
      author={entry.getIn(['data', 'author'])}
      authorsTitle={entry.getIn(['data', 'authorsTitle'])}
      readingTime={entry.getIn(['data', 'readingTime'])}
      tags={tags && tags.toJS()}
      sources={sources && sources.toJS()}
      title={entry.getIn(['data', 'title'])}
      renderer={({ content, className = "" }) => (
        <div className={className}>
          <MDX components={components}>{content}</MDX>
        </div>
      )}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
