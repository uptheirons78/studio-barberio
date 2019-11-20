import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Sentenze = ({ data }) => {
  const sentenze = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Decisioni rilevanti Studio Legale Barberio" />
      <div style={{ margin: "20px 0 40px" }}>
        {sentenze.map(({ node }) => {
          const titolo = node.frontmatter.titolo || node.fields.slug;
          return (
            <div style={{ marginBottom: "3rem" }} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: "2rem",
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={`sentenze${node.fields.slug}`}
                >
                  {titolo}
                </Link>
              </h3>
              <small>{node.frontmatter.data}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.descrizione || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default Sentenze;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/sentenze/" } }
      sort: { fields: [frontmatter___data], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            data(formatString: "DD MMM YYYY", locale: "it")
            titolo
            descrizione
          }
        }
      }
    }
  }
`;
