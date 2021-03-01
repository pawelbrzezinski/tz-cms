import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

import { ContentPreview } from '../../components/Content'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const sources = entry.getIn(['data', 'sources'])

  console.log("PROBLEM Z FORMATOWANIEM", entry.getIn(['data', 'date']))
  
  return (
    <BlogPostTemplate
      content={entry.getIn(['data', 'body'])}
      description={entry.getIn(['data', 'description'])}
      // date={entry.getIn(['data', 'date'])}
      author={entry.getIn(['data', 'author'])}
      authorsTitle={entry.getIn(['data', 'authorsTitle'])}
      readingTime={entry.getIn(['data', 'readingTime'])}
      tags={tags && tags.toJS()}
      sources={sources && sources.toJS()}
      title={entry.getIn(['data', 'title'])}
      renderer={ContentPreview}
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
