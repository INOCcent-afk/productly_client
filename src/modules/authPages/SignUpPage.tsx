import React, { FC } from "react";
import { StyledContainer } from "../../styles/styled-elements";
import UserFormComponent from "./UserFormComponent";

const SignUpPage: FC = () => {
  return (
    <StyledContainer>
      <UserFormComponent pageType="signup" />
    </StyledContainer>
  );
};

export default SignUpPage;
