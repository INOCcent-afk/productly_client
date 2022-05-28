import React, { FC } from "react";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantRight,
} from "../../styles/styled-elements/container-elements";
import UserFormComponent from "./UserFormComponent";
import Image from "next/image";

const LoginPage: FC = () => {
  return (
    <StyledMainContainer>
      <StyledBox>
        <StyledPanelDominantRight gridColumnsDesktop="4fr 8fr">
          <UserFormComponent pageType="Login" />
          <div
            className="hidden lg:block relative w-full bg-yellow-600"
            style={{ minHeight: 400 }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
              blurDataURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
              placeholder="blur"
              alt="login-bg"
            />
          </div>
        </StyledPanelDominantRight>
      </StyledBox>
    </StyledMainContainer>
  );
};

export default LoginPage;
