import React from "react";
import { Link } from "gatsby";
import { FaLongArrowAltRight } from "react-icons/fa";
import ArticoliCardImg from "../../content/assets/banner-rassegna-stampa.jpg";
import Card from "./Card";

const ArticoloCard = ({ node }) => {
  return (
    <Card style={{ background: "#fff" }}>
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
    </Card>
  );
};

export default ArticoloCard;
