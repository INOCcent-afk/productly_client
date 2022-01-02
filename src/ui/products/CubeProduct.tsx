import React, { FC } from "react";
import {
  StyledBody,
  StyledTitle,
} from "../../styles/styled-elements/common-elements";
import Image from "next/image";
import StarMeter from "../StarMeter";
import Link from "next/link";

interface CubeProductProps {
  rating: number;
  image?: string;
  productName: string;
  reviewsCount: number;
  id: string;
}

const CubeProduct: FC<CubeProductProps> = ({
  rating,
  image,
  productName,
  reviewsCount,
  id,
}: CubeProductProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col border cursor-pointer w-full">
        <div className="h-48 relative">
          <Image
            layout="fill"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            alt="product_image"
            objectFit="cover"
            objectPosition="center"
            blurDataURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            placeholder="blur"
          />
          <div className="flex items-center gap-2 absolute right-3 top-2">
            <StarMeter innerColor="text-white" rating={rating} />
            <StyledBody className="!text-white">
              ({rating ? rating : "0"})
            </StyledBody>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <StyledTitle className="!text-black">{productName}</StyledTitle>
          <div className="flex items-center gap-2 !text-black">
            <span>{reviewsCount ? reviewsCount : 0}</span>
            <span>Reviews</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CubeProduct;
