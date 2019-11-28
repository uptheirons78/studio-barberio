import React from "react";
import styled from "styled-components";

// Components
import { MDXRenderer } from "gatsby-plugin-mdx";

const Content = ({ data }) => {
  return (
    <AboutContent className="col-md-8 mb-5">
      <h4 className="heading-2">Le Nostre Attività</h4>
      <hr />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </AboutContent>
  );
};

export default Content;

const AboutContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }
`;
