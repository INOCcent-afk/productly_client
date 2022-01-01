import React, { FC } from "react";
import {
  StyledBox,
  StyledPanelDominantRight,
} from "../styles/styled-elements/container-elements";
import Image from "next/image";
import StarMeter from "./StarMeter";
import { StyledTitle } from "../styles/styled-elements/common-elements";
import Moment from "react-moment";

interface LongUserActivity {
  productImage?: string;
  productTitle: string;
  rating: number;
  date: string;
}

const LongUserActivity: FC<LongUserActivity> = ({
  productImage,
  productTitle,
  rating,
  date,
}: LongUserActivity) => {
  return (
    <StyledBox>
      <StyledPanelDominantRight>
        <div className="relative">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-5 py-2 flex flex-col gap-5">
          <div className="flex justify-between">
            <StyledTitle>{productTitle}</StyledTitle>
            <div className="flex items-center gap-2">
              <StarMeter rating={rating} /> ({rating})
            </div>
          </div>
          <div className="">
            <Moment format="MM/DD/YYYY">{date}</Moment>
          </div>
        </div>
      </StyledPanelDominantRight>
    </StyledBox>
  );
};

export default LongUserActivity;
