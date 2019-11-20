import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ArticoloPostTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.titolo}
        description={post.frontmatter.descrizione || post.excerpt}
      />
      <h1>{post.frontmatter.titolo}</h1>
      <p
        style={{
          display: `block`,
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        {post.frontmatter.data}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          marginBottom: "1rem",
        }}
      />
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default ArticoloPostTemplate;

export const pageQuery = graphql`
  query ArticoloPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        titolo
        data(formatString: "DD MMM YYYY", locale: "it")
        descrizione
      }
    }
  }
`;
