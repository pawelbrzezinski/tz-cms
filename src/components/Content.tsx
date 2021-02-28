import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from "gatsby-plugin-mdx"

export const HTMLContent = ({ content }) => (
  <MDXRenderer>{content}</MDXRenderer>
)

const Content = ({ content }) => (
  <MDXRenderer>{content}</MDXRenderer>
)

Content.propTypes = {
  content: PropTypes.node,
}

HTMLContent.propTypes = Content.propTypes

export default Content
