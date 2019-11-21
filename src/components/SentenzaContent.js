import React from "react";
import thumbnailImg from "../../content/assets/banner-sentenze.jpg";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Bio from "./Bio";
import LineBreaker from "./LineBreaker";
import Thumbnail from "./Thumbnail";

export default function SentenzaContent({ post }) {
  return (
    <StyledArticle>
      <Thumbnail
        src={thumbnailImg}
        figcaption="sentenze e decisioni"
        alt={post.frontmatter.titolo}
      />
      <h2 className="post-title">{post.frontmatter.titolo}</h2>
      <p className="description">{post.frontmatter.descrizione}</p>
      <p className="date">
        Pubblicato il: <span>{post.frontmatter.data}</span>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      {post.frontmatter.sentenza && (
        <a
          href={post.frontmatter.sentenza}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Leggi la sentenza
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

  .read-more {
    display: inline-block;
    color: #fff;
    font-weight: 400;
    background: ${props => props.theme.primaryColor};
    padding: 0.5rem 1rem;
    margin-top: 2rem;
  }
`;
