import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import { AppContext } from "../context";

// Our Theme with Styled Components
const theme = {
  primaryColor: "#701212",
  secondaryColor: "#FAA916",
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
  // Use React Context Api
  const { isSidebarOpen } = React.useContext(AppContext);
  const menu = isSidebarOpen ? "mobile-menu open" : "mobile-menu";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>{props.children}</main>
      </Wrapper>
      <MobileMenu menu={menu} />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default Layout;
