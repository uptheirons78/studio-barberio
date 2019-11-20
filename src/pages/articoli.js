import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Articoli = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Rassegna Stampa Studio Legale Barberio" />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.titolo || node.fields.slug;
          return (
            <div style={{ marginBottom: "3rem" }} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: "2rem",
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
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

export default Articoli;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/articoli/" } }
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
