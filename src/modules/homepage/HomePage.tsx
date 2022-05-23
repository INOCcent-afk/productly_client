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
import Image from "next/image";

const HomePage: FC = () => {
  const { data: productsData, isLoading } = usePopularProductsData();

  if (isLoading) {
    return <div className="h-screen w-full bg-white"></div>;
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
                      product_image={item.product_image}
                    />
                  ))}
              </StyledBox>
            </div>
            <div className="hidden lg:block">
              <StyledTitle marginTop={20} marginBottom={30}>
                📄 Latest Story
              </StyledTitle>
              <StyledBox>
                <div className="rounded-3xl bg-white flex justify-between items-center">
                  <p className="py-2 px-3 text-sm">
                    Wawas “Free Coffee Tuesday” Offer for Rewards Members
                    Returns this May with Enhancements
                  </p>
                  <div
                    className="relative"
                    style={{
                      width: "full",
                      flexBasis: "100%",
                      height: "140px",
                    }}
                  >
                    <Image
                      src="https://ml.globenewswire.com/Resource/Download/45f0eb60-9290-40f4-b9e5-0bb0b842747e?size=3"
                      alt="bg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </StyledBox>
              <StyledTitle marginTop={20} marginBottom={30}>
                📄 Newsletter
              </StyledTitle>
              <StyledBox>
                <div className="flex-col">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="https://static.wikia.nocookie.net/5ef5d627-c162-4309-ab47-e09f6b411883"
                      layout="fill"
                      alt="bg"
                    />
                  </div>
                  <div className="bg-white text-center p-3 text-sm">
                    <p>
                      Get the best new coffee products in your inbox, every day
                      👇
                    </p>
                  </div>
                </div>
              </StyledBox>
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
