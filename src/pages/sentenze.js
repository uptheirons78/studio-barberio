import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Sentenze/Background";
import Hero from "../components/Global/Hero";
import Card from "../components/Global/Card";

const Sentenze = ({ data }) => {
  const sentenze = data.allMdx.edges;
  const descrizione =
    "Da anni siamo impegnati con successo nel diritto dell'immigrazione, diritto di asilo e della protezione internazionale. Riportiamo alcune importanti decisioni relative a casi da noi personalmente seguiti.";

  return (
    <Layout>
      <SEO
        title="Sentenze e decisioni"
        description={descrizione}
        keywords={[
          `laura barberio`,
          `studio legale barberio`,
          `diritto immigrazione`,
          `asilo politico`,
          `protezione internazionale`,
          `gratuito patrocinio`,
          `diritto degli stranieri`,
        ]}
      />
      <Background>
        <Hero
          titleLeft="Sentenze"
          titleRight="Rilevanti"
          descrizione={descrizione}
        />
      </Background>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-justify">
              Di seguito un elenco di provvedimenti con i quali sono stati
              decisi alcuni significativi e delicati casi di Protezione
              Internazionale, concessione dello Status di Rifugiato e della
              Protezione Internazionale in generale. Trattasi di casi seguiti in
              questi ultimi anni dall’ Avvocato Laura Barberio, esperto in
              diritto dell’immigrazione, o da alcuni collaboratori dello Studio
              Legale Barberio.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col md 12">
            <h4 className="heading-2">Decisioni recenti</h4>
            <hr className="mb-4" />
          </div>
        </div>
        <div className="row">
          {sentenze.map(post => (
            <Card key={"sent_card" + post.node.id} post={post.node} />
          ))}
        </div>
      </div>
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
          id
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
