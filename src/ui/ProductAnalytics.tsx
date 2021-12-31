import React, { FC } from "react";
import {
  StyledBody,
  StyledMainTitle,
  StyledTitle,
} from "../styles/styled-elements/common-elements";
import { StyledBox } from "../styles/styled-elements/container-elements";
import StarMeter from "./StarMeter";

interface ProductAnalyticsProps {
  rating: number;
  ratingCount: number;
  reviewCount: number;
}

const ProductAnalytics: FC<ProductAnalyticsProps> = ({
  rating,
  ratingCount,
  reviewCount,
}: ProductAnalyticsProps) => {
  return (
    <StyledBox className="mt-8 flex flex-wrap justify-between mx-10">
      <div className="flex flex-col justify-center gap-5 basis-full lg:basis-2/4 py-9 px-9">
        <div className="flex gap-5 items-center">
          <StyledTitle className="!text-6xl">{ratingCount}</StyledTitle>
          <StyledBody>people have rated this product</StyledBody>
        </div>
        <div className="flex gap-5 items-center">
          <StyledTitle className="!text-6xl">{reviewCount}</StyledTitle>
          <StyledBody>people have reviewed this product</StyledBody>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-end bg-yellow-600 basis-full lg:basis-2/4 py-5 px-9">
        <StarMeter rating={rating} starSize={50} innerColor="text-white" />
        <div>
          <StyledMainTitle className="!text-white text-center !text-6xl">
            {rating}
          </StyledMainTitle>
          <StyledTitle className="!text-white">Average Rating</StyledTitle>
        </div>
      </div>
    </StyledBox>
  );
};

export default ProductAnalytics;
