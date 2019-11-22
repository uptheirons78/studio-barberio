import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

const Hamburger = ({ hamburgerStyle }) => {
  console.log(hamburgerStyle);
  const { handleSidebar } = React.useContext(AppContext);

  return (
    <HamburgerContainer className={hamburgerStyle} onClick={handleSidebar}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </HamburgerContainer>
  );
};

export default Hamburger;

const HamburgerContainer = styled.div`
  display: none;
  width: 3.6rem;
  height: 1.8rem;
  position: relative;
  right: 10px;
  cursor: pointer;
  line-height: 5;

  @media screen and (max-width: 900px) {
    display: block;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    display: block;
    right: 0;
    transition: all 650ms;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      margin-top: -1px;
      width: 2.8rem;
    }
    &:nth-child(3) {
      top: 100%;
      margin-top: -2px;
      width: 2rem;
    }
  }

  .hamburger.active {
    .logo {
      opacity: 0;
    }
    .line {
      &:nth-child(1) {
        transform: translateY(0.8rem) rotate(45deg);
        width: 2rem;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-0.8rem) rotate(-45deg);
        width: 2rem;
      }
    }
  }
`;
