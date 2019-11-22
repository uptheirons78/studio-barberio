import React from "react";
import styled from "styled-components";

export default function MobileMenu() {
  return <Mobile>Mobile Menu</Mobile>;
}

const Mobile = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 70vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  color: #fff;
`;
