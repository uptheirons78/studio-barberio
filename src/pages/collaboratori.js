import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import { sitePages } from "../utils/pages";

const CollaboratoriPage = () => {
  return (
    <Layout>
      <SEO
        title="Collaboratori"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <p>
        Welcome to your new Gatsby website. You are on your Collaboratori page.
      </p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>
        Global Styles, CSS Reset and Theme Provider are already there for you!{" "}
      </p>
      <ul style={{ marginTop: "5rem" }}>
        {sitePages.map(page => (
          <Link key={page.name} style={{ marginRight: "2rem" }} to={page.path}>
            {page.name}
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export default CollaboratoriPage;
