import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { AppContext } from "../context";
import { sitePages } from "../utils/pages";
import { infoSito } from "../utils/info";
import Logo from "../../content/assets/logo-studio-barberio.png";

export default function MobileMenu({ menu }) {
  const { handleSidebar } = React.useContext(AppContext);

  return (
    <Mobile className={menu}>
      <div className="logo-wrapper">
        <img src={Logo} alt="Studio Legale Barberio" />
      </div>
      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__link-list">
          {sitePages.map((page, index) => (
            <li
              key={index + page.name}
              className="mobile-menu__link-item"
              onClick={handleSidebar}
            >
              <Link className="mobile-menu__link" to={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="info-wrapper">
        <h3>info utili</h3>
        <p>{infoSito.indirizzo}</p>
        <p>
          {infoSito.cap} {infoSito.città.toUpperCase()}
        </p>
        <p>{infoSito.telefono}</p>
        <p>{infoSito.fax}</p>
        <p>{infoSito.email}</p>
      </div>
    </Mobile>
  );
}

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: -100%;
  opacity: 0;
  z-index: 10;
  width: 85vw;
  height: 100vh;
  background: #202020;
  color: #fff;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  transition: all 0.65s ease-in-out;

  &.open {
    left: 0;
    opacity: 1;
  }

  .logo-wrapper {
    max-width: 60vw;
    width: 100%;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  nav {
    ul {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 2rem;
      margin-left: 2rem;

      li {
        margin-top: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      a {
        display: block;
        color: rgba(255, 255, 255, 0.8);
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.35s ease;

        &:hover {
          letter-spacing: 2px;
          color: #fff;
        }
      }
    }
  }

  .info-wrapper {
    text-align: right;
    margin-right: 2rem;
    margin-left: 2rem;
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`;
