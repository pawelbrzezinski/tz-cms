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
            <Link
              key={post.slug}
              to={"/" + post.slug}
              className="blog-roll-item"
            >
              <article>
                <header>
                  <h2>{post.frontmatter.title}</h2>
                  <AuthorHeader
                    author={post.frontmatter.author}
                    authorsTitle={post.frontmatter.authorsTitle}
                    date={post.frontmatter.date}
                    readingTime={post.frontmatter.readingTime}
                  />
                </header>
                <div className="description">
                  {post.frontmatter.description}
                </div>
              </article>
            </Link>
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
