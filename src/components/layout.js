import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import MobileMenu from "./MobileMenu";
// import { AppContext } from "../context";

// Our Theme with Styled Components
const theme = {
  primaryColor: "#701212",
  black: "#393939",
  lightBlack: "#5D6769",
  grey: "#f7f7f7",
  meta: "#a7a7a7",
  white: "#edf0f1",
  maxWidth: "900px",
  bsl:
    "0px 70px 40px -50px rgba(0, 0, 0, 0.4), 0px 3px 20px 8px rgba(0, 0, 0, 0.2)",
  bsh:
    "0px 70px 40px -50px rgba(0, 0, 0, 0.6), 0px 3px 20px 8px rgba(0, 0, 0, 0.3)",
};

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // Use React Context Api
  // const { isSidebarOpen, handleSidebar } = React.useContext(AppContext);
  // const open = isSidebarOpen ? "OPEN" : "CLOSE";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
        </header>
        <main>{props.children}</main>
      </Wrapper>
      <MobileMenu />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const StyledTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  text-transform: uppercase;
  font-size: 2rem;
`;

export default Layout;
