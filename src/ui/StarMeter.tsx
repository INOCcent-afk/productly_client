import React, { FC } from "react";
import StarIcon from "../icons/StarIcon";

interface StarMeterProps {
  rating: number;
  innerColor?: string;
  outerColor?: string;
  starSize?: number;
}

const StarMeter: FC<StarMeterProps> = ({
  rating,
  innerColor = "text-gray-300",
  outerColor = "text-yellow-300",
  starSize = 30,
}: StarMeterProps) => {
  const ratingPercent = String((rating / 5) * 100) + "%";

  return (
    <div className="flex">
      <div className={`relative flex self-start ${innerColor}`}>
        <StarIcon width={starSize} height={starSize} />
        <StarIcon width={starSize} height={starSize} />
        <StarIcon width={starSize} height={starSize} />
        <StarIcon width={starSize} height={starSize} />
        <StarIcon width={starSize} height={starSize} />
        <div
          className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          style={{ width: ratingPercent }}
        >
          <div className={`flex w-max ${outerColor}`}>
            <StarIcon width={starSize} height={starSize} />
            <StarIcon width={starSize} height={starSize} />
            <StarIcon width={starSize} height={starSize} />
            <StarIcon width={starSize} height={starSize} />
            <StarIcon width={starSize} height={starSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarMeter;
