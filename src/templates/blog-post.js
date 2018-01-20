import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Labels from '../components/Labels'

export const BlogPostTemplate = ({ content, contentComponent, description, title, helmet, labels }) => {
  const PostContent = contentComponent || Content;
  return <section className="section">
    { helmet ? helmet : ""}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-5 has-text-weight-bold is-bold-light">{title}</h1>
          <p>{description}</p>
          <PostContent content={content} />
          <Labels data={labels} />
        </div>
      </div>
    </div>
  </section>;
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    labels={post.frontmatter}
    title={post.frontmatter.title}
    size={post.frontmatter.size}
    genre={post.frontmatter.genre}
    price={post.frontmatter.price}
  />;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        image
        price
        size
        genre
        description
      }
    }
  }
`;
