import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MDX from "@mdx-js/runtime";

import MyArticleTable from "./cms/MyArticleTable";
import MyArticleImg from "./cms/MyArticleImg";
import MyArticleMore from "./cms/MyArticleMore";

const components = {
  img: MyArticleImg,
  More: MyArticleMore,
  table: MyArticleTable,
};

const Content = ({ content, className = "" }) => (
  <div className={className}>
    <MDXRenderer>{content}</MDXRenderer>
  </div>
);

export const ContentPreview = ({ content, className = "" }) => (
  <div className={className}>
    <MDX components={components}>{content}</MDX>
  </div>
);

Content.propTypes = {
  content: PropTypes.node,
};

export default Content;
