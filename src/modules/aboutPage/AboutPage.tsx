import React from "react";
import { StyledBox } from "../../styles/styled-elements/container-elements";
import Image from "next/image";
import {
  StyledBody,
  StyledMainTitle,
} from "../../styles/styled-elements/common-elements";
import Creator from "./Creator";

const AboutPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <StyledBox className="relative !rounded-none" style={{ minHeight: 300 }}>
        <Image
          layout="fill"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
          alt="product_image"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="absolute bottom-10 about-title">
          <StyledMainTitle className="!text-white !text-5xl">
            What is Productly?
          </StyledMainTitle>
          <StyledBody className="!text-white mt-5 ">
            Defining the best product experience
          </StyledBody>
          <div className="absolute w-8 h-10 bg-yellow-600 bottom-24 about-tag"></div>
        </div>
      </StyledBox>
      <div className="flex items-center justify-center p-20">
        <Creator />
      </div>
    </div>
  );
};

export default AboutPage;
