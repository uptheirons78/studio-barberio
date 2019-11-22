import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import Logo from "../../content/assets/logo-studio-barberio.png";

const Header = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <section className="upper-footer">Upper Footer here</section>
      <section className="lower-footer">
        <div className="lower-footer-inner footer-wrapper">
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li>
                <Link to="/">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookies Policy</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            © {year} Studio Legale Barberio. Sviluppo Web:{" "}
            <span>
              <a href="https://www.maurobono.com/" className="mauro">
                Mauro Bono
              </a>
            </span>
          </div>
        </div>
      </section>
    </StyledFooter>
  );
};
export default Header;

const StyledFooter = styled.header`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #202020;
  min-height: 15vh;
  color: #fff;
  font-size: 1.4rem;

  .footer-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .upper-footer {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .lower-footer {
    .lower-footer-inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      margin-top: 3rem;

      @media screen and (max-width: 900px) {
        flex-direction: column;
      }

      nav {
        margin-bottom: 0;
        @media screen and (max-width: 900px) {
          margin-bottom: 2rem;
        }
      }

      ul {
        display: flex;

        li {
          &:not(:last-child) {
            margin-right: 1rem;
          }
          a {
            color: ${props => props.theme.white};
            text-transform: capitalize;
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .mauro {
    text-transform: uppercase;
    font-size: 1.4rem;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
  }
`;
