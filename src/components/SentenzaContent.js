import React from "react";
import thumbnailImg from "../../content/assets/banner-sentenze.jpg";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Bio from "./Bio";

export default function SentenzaContent({ post }) {
  return (
    <StyledArticle>
      <figure>
        <img src={thumbnailImg} alt={post.frontmatter.titolo} />
        <figcaption>sentenze e decisioni</figcaption>
      </figure>
      <h2 className="post-title">{post.frontmatter.titolo}</h2>
      <p className="description">{post.frontmatter.descrizione}</p>
      <p className="date">
        Pubblicato il: <span>{post.frontmatter.data}</span>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr />
      <Bio />
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  figure {
    position: relative;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 40vh;

    @media screen and (max-width: 600px) {
      height: 30vh;
    }
  }
  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.primaryColor};
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  .post-title {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    text-align: justify;
    margin-top: 2rem;
  }

  .description {
    font-weight: 800;
    text-align: justify;
    color: ${props => props.theme.black};
  }

  .date {
    span {
      text-transform: capitalize;
    }
  }

  p {
    text-align: justify;
  }

  hr {
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: ${props => props.theme.lightBlack};
  }
`;
