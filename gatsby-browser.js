import React from "react";
// custom typefaces
import "typeface-poppins";
import "typeface-fira-sans";

import { AppProvider } from "./src/context";
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
