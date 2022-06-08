import React from "react";
import styled from "styled-components";
import NewsPaperIcon from "../icons/NewsPaperIcon";
import { StyledBody } from "../styles/styled-elements/common-elements";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter className="bg-gray-800 py-6">
      <Link
        href="https://github.com/INOCcent-afk/productly_client"
        passHref={true}
      >
        <a
          target="_blank"
          className="flex justify-center items-center gap-5 text-yellow-600 my-5"
        >
          <NewsPaperIcon width={40} height={40} />
          <span className="text-lg">Github Source Code</span>
        </a>
      </Link>
      <StyledBody className="!text-base !text-yellow-600">
        2021 © Product.ly • All Rights Reserved.
      </StyledBody>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  text-align: center;
  color: white;
`;
