import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import ArticoliCardImg from "../../content/assets/banner-rassegna-stampa.jpg";

const ArticoloCard = ({ node }) => {
  return (
    <ArticleCard style={{ background: "#fff" }}>
      <div className="thumbnail">
        <figure>
          <img src={ArticoliCardImg} alt={node.frontmatter.titolo} />
          <figcaption>{node.frontmatter.data}</figcaption>
        </figure>
      </div>
      <Link to={`/sentenze/${node.fields.slug}`}>
        <h4>{node.frontmatter.titolo}</h4>
      </Link>
      <p>{node.excerpt}</p>
      <Link className="read-more" to={`/sentenze/${node.fields.slug}`}>
        <span>Leggi tutto </span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </Link>
    </ArticleCard>
  );
};

export default ArticoloCard;

const ArticleCard = styled.article`
  margin-top: 2vh;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: ${props => props.theme.bsl};
  transition: all 0.35s ease;
  &:hover {
    box-shadow: ${props => props.theme.bsh};
  }
  .thumbnail {
    width: 100%;
    figure {
      position: relative;
    }
    img {
      width: 100%;
      height: 200px;
    }
    figcaption {
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.primaryColor};
      color: #fff;
      padding: 0.5rem;
      text-transform: capitalize;
    }
  }
  h4 {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${props => props.theme.lightBlack};
    text-align: justify;
    margin-top: 1rem;
  }
  .read-more {
    display: inline-block;
    margin-top: 1rem;
    background: ${props => props.theme.primaryColor};
    color: #fff;
    padding: 0.3rem 0.7rem;
    font-weight: 400;
    svg {
      transform: translate(20%, 15%);
    }
  }
`;
