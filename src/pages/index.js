import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Content from "../components/Home/Content";
import Aside from "../components/Home/Aside";

// Assets and Images
import bg from "../images/background-home.jpg";

const IndexPage = ({ data }) => {
  const descrizione =
    "Esperti e specializzati nel diritto dell'immigrazione, diritto di asilo, protezione internazionale e nel diritto di famiglia.";

  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Hero
        bg={bg}
        titleLeft="Studio Legale"
        titleRight="Barberio"
        descrizione={descrizione}
      />
      <div className="container">
        <div className="row">
          <Content data={data} />
          <Aside />
        </div>

        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus totam ut
                  praesentium aut.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
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
  }
`;
