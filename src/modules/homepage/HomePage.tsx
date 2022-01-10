import React, { FC, useEffect } from "react";
import styled from "styled-components";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import HeroBanner from "../../ui/HeroBanner";
import { usePopularProductsData } from "../../utils/reactQueryHooks/productsQueryHooks";
import { StyledTitle } from "../../styles/styled-elements/common-elements";
import LongProductDisplay from "../../ui/products/LongProductDisplay";

const HomePage: FC = () => {
  const { data: productsData, isLoading } = usePopularProductsData();

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <>
      <HeroBanner />
      <StyledHomepageContainer>
        <StyledMainContainer>
          <StyledPanelDominantLeft gridGap={30}>
            <div>
              <StyledTitle marginTop={20} marginBottom={30}>
                🔥 Top Rated Products Today
              </StyledTitle>
              <StyledBox className="overflow-hidden">
                {productsData &&
                  productsData.map((item) => (
                    <LongProductDisplay
                      key={item.product_id}
                      product_id={item.product_id}
                      product_name={item.product_name}
                      product_description={item.product_description}
                      product_reviews={item.count}
                      average_rating={item.average_rating}
                    />
                  ))}
              </StyledBox>
            </div>
            <div className="hidden lg:block">
              <StyledTitle marginTop={20} marginBottom={30}>
                📄 Latest Story
              </StyledTitle>
            </div>
          </StyledPanelDominantLeft>
        </StyledMainContainer>
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
