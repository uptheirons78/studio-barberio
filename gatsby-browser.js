import React from "react";

// Import Custom Typefaces
import "typeface-poppins";
import "typeface-fira-sans";

// Import Bootstrap
import "./node_modules/bootstrap/dist/css/bootstrap.css";

// Set Application to use AppProvider (React Context API)
import { AppProvider } from "./src/context";
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
