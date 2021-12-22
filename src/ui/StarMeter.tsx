import React from "react";
import StarIcon from "../icons/StarIcon";

const StarMeter = () => {
  const ratingPercent = String((3.5 / 5) * 100) + "%";

  return (
    <div className="flex">
      <div className={`relative flex self-start text-gray-300`}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        {/* Stars Inner */}
        <div
          className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          style={{ width: ratingPercent }}
        >
          <div className={`flex w-max text-yellow-300`}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarMeter;
