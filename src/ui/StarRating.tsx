import React, { FC, useState } from "react";
import StarIcon from "../icons/StarIcon";

interface StarRatingProps {
  rating: number;
  setRating: any;
  disabled: boolean;
}

const StarRating: FC<StarRatingProps> = ({
  rating,
  setRating,
  disabled = false,
}: StarRatingProps) => {
  const [hover, setHover] = useState(null) as any;

  return (
    <div className="flex space-x-2 items-center">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        let color;
        if (!disabled) {
          if (hover) {
            color =
              ratingValue <= (hover || rating)
                ? "text-yellow-500"
                : "text-gray-200";
          } else {
            color =
              ratingValue <= (hover || rating)
                ? "text-primary"
                : "text-gray-200";
          }
        } else {
          color = "text-gray-200 opacity-40";
        }
        return (
          <label
            key={i}
            className="transform transition hover:scale-125 ease-in-out"
          >
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              disabled={disabled}
              onClick={() => setRating(i + 1)}
            />
            <StarIcon
              width={50}
              height={50}
              className={
                `${
                  !disabled && "text-yellow-300"
                }  cursor-pointer transition ease-in-out ` + color
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
