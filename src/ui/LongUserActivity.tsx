import React, { FC } from "react";
import {
  StyledBox,
  StyledPanelDominantRight,
} from "../styles/styled-elements/container-elements";
import Image from "next/image";
import StarMeter from "./StarMeter";
import { StyledTitle } from "../styles/styled-elements/common-elements";
import Moment from "react-moment";
import Link from "next/link";

interface LongUserActivity {
  productImage: string;
  productTitle: string;
  rating: number;
  date: string;
  productID: string;
}

const LongUserActivity: FC<LongUserActivity> = ({
  productImage,
  productTitle,
  rating,
  date,
  productID,
}: LongUserActivity) => {
  return (
    <Link href={`/product/${productID}`}>
      <StyledBox className="cursor-pointer">
        <StyledPanelDominantRight>
          <div className="relative h-24">
            <Image
              src={productImage}
              blurDataURL={productImage}
              placeholder="blur"
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
              <Moment format="MM/DD/YYYY, h:mm:ss a">{date}</Moment>
            </div>
          </div>
        </StyledPanelDominantRight>
      </StyledBox>
    </Link>
  );
};

export default LongUserActivity;
