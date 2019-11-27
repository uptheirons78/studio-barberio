import React from "react";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import Background from "../components/About/Background";

const ChiSiamoPage = () => {
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
          <p>
            Welcome to your new Gatsby website. You are on your Chi Siamo page.
          </p>
          <p>
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.
          </p>
          <p>
            Global Styles, CSS Reset and Theme Provider are already there for
            you!{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ChiSiamoPage;
