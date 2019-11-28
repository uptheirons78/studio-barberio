import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Sentenze/Background";
import Hero from "../components/Global/Hero";
import Card from "../components/Global/Card";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const Sentenze = ({ data }) => {
  const sentenze = data.allMdx.edges;
  const page = data.mdx.frontmatter;

  return (
    <Layout>
      <SEO
        title={page.seo.browserTitle}
        description={page.seo.description}
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
          titleLeft={findTitleLeft(page.heading)}
          titleRight={findTitleRight(page.heading)}
          descrizione={page.sub_heading}
        />
      </Background>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-justify">{page.descrizione}</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col md 12">
            <h4 className="heading-2">Decisioni importanti</h4>
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
    mdx(frontmatter: { templateKey: { eq: "decisioni-page" } }) {
      frontmatter {
        title
        heading
        sub_heading
        descrizione
        seo {
          title
          browserTitle
          description
        }
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
