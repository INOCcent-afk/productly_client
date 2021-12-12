import React, { FC } from "react";
import { StyledMainContainer } from "../../styles/styled-elements/container-elements";
import UserFormComponent from "./UserFormComponent";

const LoginPage: FC = () => {
  return (
    <StyledMainContainer>
      <UserFormComponent pageType="login" />
    </StyledMainContainer>
  );
};

export default LoginPage;
