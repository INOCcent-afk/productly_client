import React, { FC } from "react";
import { StyledContainer } from "../../styles/styled-elements";
import UserFormComponent from "./UserFormComponent";

const LoginPage: FC = () => {
  return (
    <StyledContainer>
      <UserFormComponent pageType="login" />
    </StyledContainer>
  );
};

export default LoginPage;
