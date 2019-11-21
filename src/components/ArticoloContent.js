import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ArticoliImg from "../../content/assets/banner-rassegna-stampa.jpg";

import Bio from "./Bio";
import LineBreaker from "./LineBreaker";
import Thumbnail from "./Thumbnail";

export default function ArticoloContent({ post }) {
  return (
    <StyledArticle>
      <Thumbnail
        src={ArticoliImg}
        figcaption="rassegna stampa"
        alt={post.frontmatter.titolo}
      />
      <h2 className="post-title">{post.frontmatter.titolo}</h2>
      <p className="description">{post.frontmatter.descrizione}</p>
      <small className="date">
        Pubblicato il: <span>{post.frontmatter.data}</span>
      </small>
      <MDXRenderer>{post.body}</MDXRenderer>
      {post.frontmatter.link && (
        <a
          href={post.frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Leggi l'articolo
        </a>
      )}
      <LineBreaker />
      <Bio />
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .post-title {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    text-align: justify;
    margin-top: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 2.4rem;
    }
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
    margin-bottom: 3rem;
    margin-top: 3rem;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  .read-more {
    display: inline-block;
    color: #fff;
    font-weight: 400;
    background: ${props => props.theme.primaryColor};
    padding: 0.5rem 1rem;
    margin-top: 2rem;
  }
`;
