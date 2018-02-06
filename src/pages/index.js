import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Labels from '../components/Labels'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-4">Latest Posts</h1>
          </div>
          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
            return (
              console.log(post),
              <div className="blogpost-box" key={post.id}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <Link to={post.frontmatter.path}>
                        <img src={post.frontmatter.image} />
                      </Link>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <Link className="has-text-primary" to={post.frontmatter.path}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                       
                      </p>
                      <p>
                        <Labels data={post.frontmatter} />
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          html
          fields { slug }
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            templateKey
            image
            price
            size
            genre
            category
            medium
          }
        }
      }
    }
  }
`;
