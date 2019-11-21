import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ArticoliPage = ({ data }) => {
  const articoli = data.allMdx.edges;

  return (
    <Layout>
      <SEO
        title="Rassegna Stampa"
        keywords={[
          `studio legale barberio`,
          `asilo politico`,
          `diritto internazionale`,
          `protezione internazionale`,
        ]}
      />
      <p>RASSEGNA STAMPA</p>
      <div>
        {articoli.map(({ node }) => (
          <article key={node.fields.slug}>
            <h2>{node.frontmatter.titolo}</h2>
            <small>{node.frontmatter.data}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.descrizione || node.excerpt,
              }}
            />
          </article>
        ))}
      </div>
      <hr style={{ marginTop: "5rem" }} />
      <ul style={{ marginTop: "5rem" }}>
        <Link style={{ marginRight: "2rem" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "2rem" }} to="/sentenze/">
          Sentenze
        </Link>
      </ul>
    </Layout>
  );
};

export default ArticoliPage;

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
