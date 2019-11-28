import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Components
import { MDXRenderer } from "gatsby-plugin-mdx";

const Content = ({ data }) => {
  return (
    <HomeContent className="col-md-8 mb-5">
      <h4 className="heading-2">{data.mdx.frontmatter.heading}</h4>
      <hr />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link className="btn btn-primary btn-lg leggi-tutto" to="/contatti">
        Richiedi un appuntamento &raquo;
      </Link>
    </HomeContent>
  );
};

export default Content;

const HomeContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }

  .btn {
    color: #fff !important;
    background-color: ${props => props.theme.primaryColor};
    border: ${props => props.theme.primaryColor};
  }
`;
