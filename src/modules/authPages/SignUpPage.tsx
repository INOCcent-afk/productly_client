import React, { FC } from "react";
import { StyledMainContainer } from "../../styles/styled-elements/container-elements";
import UserFormComponent from "./UserFormComponent";

const SignUpPage: FC = () => {
  return (
    <StyledMainContainer>
      <UserFormComponent pageType="signup" />
    </StyledMainContainer>
  );
};

export default SignUpPage;
