import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  StyledBody,
  StyledTitle,
} from "../../styles/styled-elements/common-elements";
import PencilAltIcon from "../../icons/PencilAltIcon";
import StarMeter from "../StarMeter";

interface LongProductDisplay {
  product_id: string;
  product_name: string;
  product_description: string;
  product_reviews: number;
}

const LongProductDisplay: FC<LongProductDisplay> = ({
  product_id,
  product_name,
  product_description,
  product_reviews,
}: LongProductDisplay) => {
  const checkLength = product_description.length > 130 ? 130 : 0;
  const checkElepsis = checkLength === 130 ? "..." : "";
  const cutText = product_description.substring(0, checkLength) + checkElepsis;

  return (
    <Link href={`/product/${product_id}`}>
      <StyledLongProductDisplay>
        <StyledVisual>
          <img src="" alt="" />
        </StyledVisual>
        <StyledContent>
          <div>
            <StyledTitle marginBottom={10}>{product_name}</StyledTitle>
            <StyledBody>{cutText}</StyledBody>
          </div>
          <Link href={`/review/${product_id}`}>
            <div className="p-3 bg-yellow-700 rounded-md cursor-pointer">
              <PencilAltIcon fill="white" />
            </div>
          </Link>
          <StyledFooter>
            <StyledBody>{product_reviews || 0} reviews</StyledBody>
            <StarMeter />
          </StyledFooter>
        </StyledContent>
      </StyledLongProductDisplay>
    </Link>
  );
};

export default LongProductDisplay;

const StyledLongProductDisplay = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: row;
    height: 200px;
    max-height: 200px;
  }
`;

const StyledVisual = styled.div`
  flex-basis: 30%;
  background-color: ${(props) => props.theme.backgroundColors.grayLightBg};
  min-height: 200px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  gap: 15px;
  padding: 15px 15px;
  flex-basis: 70%;
  border-bottom: 2px solid
    ${(props) => props.theme.borderColors.grayLightBorder};
  min-height: 200px;
`;

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  left: 0;
  padding: 0 15px;
`;
