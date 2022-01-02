import React, { FC } from "react";
import Moment from "react-moment";
import {
  StyledAvatar,
  StyledBody,
} from "../../styles/styled-elements/common-elements";
import { StyledBox } from "../../styles/styled-elements/container-elements";
import DisplayName from "../DisplayName";
import StarMeter from "../StarMeter";

interface LongProductReviewProps {
  rating: number;
  description: string;
  date: string;
  user: string;
}

const LongProductReview: FC<LongProductReviewProps> = ({
  rating,
  description,
  date,
  user,
}: LongProductReviewProps) => {
  return (
    <StyledBox>
      <div className="flex gap-2 py-4 px-2 border-b">
        <StyledAvatar size={60} className="!text-xl">
          <DisplayName singleLetter={true} id={user} />
        </StyledAvatar>
        <div className="flex flex-col gap-1">
          <span className="ml-2 font-bold text-gray-600">
            <DisplayName id={user} />
          </span>
          <div className="flex gap-2">
            <StarMeter starSize={25} rating={rating} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-2 px-4 gap-3">
        <StyledBody className="font-bold">{description}</StyledBody>
        <StyledBody className="!text-xs !text-gray-500">
          <Moment format="MM/DD/YYYY, h:mm:ss a">{date}</Moment>
        </StyledBody>
      </div>
    </StyledBox>
  );
};

export default LongProductReview;
