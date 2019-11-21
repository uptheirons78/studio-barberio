import React from "react";
import styled from "styled-components";

const Thumbnail = ({ src, figcaption, alt }) => {
  return (
    <Figure>
      <img src={src} alt={alt} />
      <figcaption>{figcaption}</figcaption>
    </Figure>
  );
};

export default Thumbnail;

const Figure = styled.figure`
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

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
`;
