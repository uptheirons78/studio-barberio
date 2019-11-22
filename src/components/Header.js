import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { AppContext } from "../context";
import Hamburger from "./Hamburger";
import Logo from "../../content/assets/logo-studio-barberio.png";
import { sitePages } from "../utils/pages";

const NavItem = ({ page }) => (
  <li key={page.name}>
    <Link activeStyle={{ color: "#FAA916" }} to={page.path}>
      {page.name}
    </Link>
  </li>
);

const Header = () => {
  const { isSidebarOpen } = React.useContext(AppContext);
  const sidebarClass = isSidebarOpen ? "hamburger active" : "hamburger";

  return (
    <StyledHeader>
      <div className="navigation">
        <Link to="/" className="logo">
          <img src={Logo} alt="Studio Legale Barberio" />
        </Link>
        <Hamburger hamburgerStyle={sidebarClass} />
        <nav>
          <ul className="nav-links">
            {sitePages.map(page => (
              <NavItem key={page.name} page={page} />
            ))}
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  background: #202020;
  min-height: 8vh;

  .navigation {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    transition: all 350ms ease-in-out;

    .logo {
      img {
        width: 30rem;
        @media (max-width: 1200px) {
          width: 27rem;
        }
      }
    }
  }
  nav {
    height: 100%;
    @media (max-width: 900px) {
      margin-top: 1rem;
      display: none;
    }
    .nav-links {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;
      @media (max-width: 900px) {
        flex-direction: column;
        padding: 1rem;
      }
      li {
        margin-right: 1rem;
        @media (max-width: 900px) {
          margin-right: 0;
          margin-top: 1rem;
        }
      }
      a {
        font-size: 1.3rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        transition: all 0.35s ease;

        &:hover {
          color: ${props => props.theme.secondaryColor};
        }
      }
    }
    .flag {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 900px) {
        margin-top: 2rem;
      }
      img {
        width: 24px;
        height: 16px;
      }
    }
  }
`;
