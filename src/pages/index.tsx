import React from "react";
import styled from "styled-components";
import Button from "../ui/buttons/Button";

const LoginPage = () => {
  return (
    <div>
      <Heading>Log in Page</Heading>
      <Button>Click Me!</Button>
    </div>
  );
};

export default LoginPage;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.red};
`;
