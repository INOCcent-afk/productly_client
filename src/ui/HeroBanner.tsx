import React from "react";
import Image from "next/image";
import styled from "styled-components";
import LinkIcon from "../icons/LinkIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import {
  StyledMainTitle,
  StyledTitle,
} from "../styles/styled-elements/common-elements";
import { lightYellow } from "../utils/theme/colors";

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <StyledBody>
        <div className="flex flex-col gap-8 px-5">
          <StyledMainTitle color={lightYellow}>
            What's the best for you?
          </StyledMainTitle>
          <StyledTitle className="italic text-yell" fontWeight="400">
            ☕ Defining the best coffee experience. In culture, in taste.
          </StyledTitle>
          <span className="animate-bounce flex gap-3 items-center text-sm">
            <LinkIcon />
            Browse Now
            <ArrowDownIcon />
          </span>
        </div>
        <div className="">
          <HeroBannerFloatingImage />
        </div>
      </StyledBody>

      <Image
        layout="fill"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
        alt="banner_image"
        objectFit="cover"
      />
      <StyledOverlay></StyledOverlay>
    </StyledHeroBanner>
  );
};

export default HeroBanner;

const StyledHeroBanner = styled.div`
  position: relative;
  height: 400px;
  background-color: ${(props) => props.theme.backgroundColors.grayLightBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #00000080;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1;
  position: relative;
  color: ${(props) => props.theme.colors.white};
`;

const HeroBannerFloatingImage = () => {
  return (
    <div className="hidden lg:block relative">
      <StyledFirstLayerOverlay className="z-20"></StyledFirstLayerOverlay>
      <StyledSecondLayerOverlay className="animate-pulse z-10"></StyledSecondLayerOverlay>
      <img className="w-80 z-30 relative" src="/coffee.svg" alt="brand_image" />
      <div className="floating-balls delay-700 top-0 z-20"></div>
      <div className="floating-balls !w-20 !h-20 delay-75 top-0 right-0 z-20"></div>
      <div className="floating-balls !w-24 !h-24 delay-700 top-56 z-20"></div>
    </div>
  );
};

const StyledFirstLayerOverlay = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  transform: rotate(10deg);
  height: 380px;
  width: 350px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.backgroundColors.white}90;
`;

const StyledSecondLayerOverlay = styled(StyledFirstLayerOverlay)`
  position: absolute;
  top: -20px;
  left: -20px;
  transform: rotate(30deg);
  background-color: ${(props) => props.theme.backgroundColors.primary}50;
`;
