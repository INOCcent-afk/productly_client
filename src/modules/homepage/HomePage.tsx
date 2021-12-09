import React, { FC } from "react";
import styled from "styled-components";
import HeroBanner from "../../ui/HeroBanner";

const HomePage: FC = () => {
  return (
    <>
      <HeroBanner />
      <StyledHomepageContainer>
        <h1>Review</h1>
      </StyledHomepageContainer>
    </>
  );
};

export default HomePage;

const StyledHomepageContainer = styled.div`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  z-index: 10;
`;
