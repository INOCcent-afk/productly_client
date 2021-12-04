import React from "react";
import { Box } from "../styles/styled-elements";
import theme from "../utils/theme";

const Header = () => {
  console.log(theme.fontSizes);

  return (
    <header>
      <h1>Cafely</h1>
      <Box backgroundColor="">Hi</Box>
    </header>
  );
};

export default Header;
