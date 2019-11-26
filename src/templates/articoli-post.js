import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import ArticoloContent from "../components/ArticoloContent";

const ArticoloTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.titolo}
        description={post.frontmatter.descrizione || post.excerpt}
      />
      <Container>
        <ArticoloContent post={post} />
      </Container>
    </Layout>
  );
};

export default ArticoloTemplate;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

export const pageQuery = graphql`
  query ArticoliBySlug($slug: String!) {
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
        link
      }
    }
  }
`;
