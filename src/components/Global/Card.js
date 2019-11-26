import React from "react";
import { Link } from "gatsby";
// Assets
import SentenzaImage from "../../../content/assets/banner-sentenze.jpg";

const Card = ({ post }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={SentenzaImage} alt="" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque sequi doloribus.
          </p>
        </div>
        <div className="card-footer">
          <Link
            to={`/sentenze/${post.fields.slug}`}
            className="btn btn-primary"
          >
            Leggi tutto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
