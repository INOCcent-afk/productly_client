import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  input {
    border: 1px solid;
  }
`;

export default GlobalStyles;
