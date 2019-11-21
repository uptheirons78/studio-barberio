import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageDescription from "../components/PageDescription";
import ArticoloCard from "../components/ArticoloCard";
import PageContainer from "../components/PageContainer";
import ArticleContainer from "../components/ArticleContainer";

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
      <PageContainer>
        <PageDescription>
          <p>
            Di seguito una raccolta di articoli tratti da quotidiani nazionali,
            siti e blogs italiani che si occupano di diritto dell’immigrazione,
            della concessione dello status di rifugiato, della protezione
            internazionale e di ogni altro aspetto dell’immigrazione.
          </p>
          <p>
            Gli articoli trattano del lavoro svolto dall’Avvocato Laura Barberio
            e dallo Studio Legale Barberio, nelle persone dei suoi
            collaboratori, in materia del diritto dell’immigrazione e della
            protezione internazionale.
          </p>
        </PageDescription>
        <ArticleContainer>
          {articoli.map(({ node }) => (
            <ArticoloCard node={node} key={node.fields.slug} />
          ))}
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
