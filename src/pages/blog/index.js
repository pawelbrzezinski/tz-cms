import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import "../../styles/blog-roll.scss"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet bodyAttributes={{
          "type": "blog",
        }} />
        <div className="blog-roll-wrapper">
          <h1>Blog</h1>
          <BlogRoll />
        </div>
      </Layout>
    )
  }
}
