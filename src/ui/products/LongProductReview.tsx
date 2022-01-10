import React, { FC } from "react";
import Moment from "react-moment";
import {
  StyledAvatar,
  StyledBody,
} from "../../styles/styled-elements/common-elements";
import { StyledBox } from "../../styles/styled-elements/container-elements";
import StarMeter from "../StarMeter";
import Link from "next/link";

interface LongProductReviewProps {
  rating: number;
  description: string;
  date: string;
  user: string;
  display_picture: string;
  first_name: string;
}

const LongProductReview: FC<LongProductReviewProps> = ({
  rating,
  description,
  date,
  user,
  display_picture,
  first_name,
}: LongProductReviewProps) => {
  return (
    <Link href={`/profile/${user}`}>
      <StyledBox className="cursor-pointer">
        <div className="flex gap-2 py-4 px-2 border-b">
          <StyledAvatar backgroundImage={display_picture} size={60}>
            {!display_picture && first_name.charAt(0)}
          </StyledAvatar>
          <div className="flex flex-col gap-1">
            <span className="ml-2 font-bold text-gray-600">{first_name}</span>
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
    </Link>
  );
};

export default LongProductReview;
