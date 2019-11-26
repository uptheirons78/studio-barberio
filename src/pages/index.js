import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import Content from "../components/Home/Content";
import Aside from "../components/Home/Aside";
import Background from "../components/Home/Background";
import Card from "../components/Global/Card";

const IndexPage = ({ data }) => {
  const descrizione =
    "Esperti e specializzati nel diritto dell'immigrazione, diritto di asilo, protezione internazionale e nel diritto di famiglia.";

  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Background>
        <Hero
          titleLeft="Studio Legale"
          titleRight="Barberio"
          descrizione={descrizione}
        />
      </Background>
      <div className="container">
        <div className="row">
          <Content data={data} />
          <Aside />
        </div>

        <div className="row">
          {data.allMdx.edges.map(post => (
            <Card key={post.node.id} post={post.node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
      }
      body
    }
    allMdx(
      limit: 3
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
