import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageDescription from "../components/PageDescription";
import SentenzaCard from "../components/SentenzaCard";
import PageContainer from "../components/PageContainer";
import ArticleContainer from "../components/ArticleContainer";

const Sentenze = ({ data }) => {
  const sentenze = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Decisioni rilevanti Studio Legale Barberio" />
      <PageContainer>
        <PageDescription>
          <p>
            Di seguito un elenco di provvedimenti con i quali sono stati decisi
            alcuni significativi e delicati casi di Protezione Internazionale,
            concessione dello Status di Rifugiato e della Protezione
            Internazionale in generale.
          </p>
          <p>
            Trattasi di casi seguiti in questi ultimi anni dall’ Avvocato Laura
            Barberio, esperto in diritto dell’immigrazione, o da alcuni
            collaboratori dello Studio Legale Barberio.
          </p>
        </PageDescription>
        <ArticleContainer>
          {sentenze.map(({ node }) => {
            return <SentenzaCard node={node} key={node.fields.slug} />;
          })}
        </ArticleContainer>
        <ul style={{ marginTop: "5rem" }}>
          <Link style={{ marginRight: "2rem" }} to="/">
            Home
          </Link>
          <Link style={{ marginRight: "2rem" }} to="/sentenze/">
            Sentenze
          </Link>
        </ul>
      </PageContainer>
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
