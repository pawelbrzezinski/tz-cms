import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import AuthorHeader from "../components/cms/AuthorHeader";

class BlogRoll extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMdx;

    return (
      <div className="blog-roll">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="blog-roll-item">
              <header>
                <h2>
                  <Link to={"/" + post.slug}>{post.frontmatter.title}</Link>
                </h2>
                <AuthorHeader
                  author={post.frontmatter.author}
                  authorsTitle={post.frontmatter.authorsTitle}
                  date={post.frontmatter.date}
                  readingTime={post.frontmatter.readingTime}
                />
              </header>
              <div className="description">{post.frontmatter.description}</div>
            </article>
          ))}
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              slug
              frontmatter {
                title
                author
                authorsTitle
                description
                templateKey
                date(formatString: "DD.MM.YYYY")
                readingTime
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
