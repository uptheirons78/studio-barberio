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
