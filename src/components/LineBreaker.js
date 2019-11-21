import React from "react";

const breakerStyle = {
  marginBottom: "3rem",
  marginTop: "3rem",
  border: 0,
  height: "1px",
  backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    )`,
};

const LineBreaker = () => {
  return <hr style={breakerStyle} />;
};

export default LineBreaker;
