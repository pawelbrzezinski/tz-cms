import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Content = ({ content, className = "" }) => (
  <div className={className}>
    <MDXRenderer>{content}</MDXRenderer>
  </div>
);


Content.propTypes = {
  content: PropTypes.node,
};

export default Content;
