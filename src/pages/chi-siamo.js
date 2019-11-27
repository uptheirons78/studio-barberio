import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import Background from "../components/About/Background";
import Content from "../components/About/Content";

const ChiSiamoPage = ({ data }) => {
  const descrizione =
    "Esperti e specializzati nel diritto dell'immigrazione, diritto di asilo, protezione internazionale e nel diritto di famiglia.";

  return (
    <Layout>
      <SEO
        title="Chi Siamo"
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
        <Hero titleLeft="Chi" titleRight="Siamo" descrizione={descrizione} />
      </Background>
      <div className="container">
        <div className="row">
          <Content data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default ChiSiamoPage;

export const pageQuery = graphql`
  query AboutPage {
    mdx(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        heading
      }
      body
    }
  }
`;
