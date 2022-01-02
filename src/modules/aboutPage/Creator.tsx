import React from "react";
import Image from "next/image";
import { StyledTitle } from "../../styles/styled-elements/common-elements";

const Creator = () => {
  return (
    <div className="flex flex-col gap-5 w-full " style={{ maxWidth: 600 }}>
      <div
        className="bg-yellow-600 flex justify-center items-end w-full rounded-md"
        style={{ height: 500 }}
      >
        <div
          className="relative w-full"
          style={{ marginBottom: -1, height: 400, maxWidth: 400 }}
        >
          <Image
            layout="fill"
            src="/dave_inoc.png"
            blurDataURL="/dave_inoc.png"
            placeholder="blur"
          />
        </div>
      </div>
      <StyledTitle>Dave Inoc</StyledTitle>
      <StyledTitle className="!text-base">
        President of the Philippines
      </StyledTitle>
    </div>
  );
};

export default Creator;
