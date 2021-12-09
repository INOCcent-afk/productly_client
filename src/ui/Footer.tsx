import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  text-align: center;
  color: white;
  background-color: red;
`;
