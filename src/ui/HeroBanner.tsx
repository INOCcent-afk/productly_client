import React from "react";
import Image from "next/image";
import styled from "styled-components";

const HeroBanner = () => {
  return <StyledHeroBanner></StyledHeroBanner>;
};

export default HeroBanner;

const StyledHeroBanner = styled.div`
  position: relative;
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://media2.giphy.com/media/3o7btSt2Et1GgIaDAY/giphy.gif?cid=ecf05e47cq1gf37yumhiu55zaph72simmmy59bjnuwo25zks&rid=giphy.gif&ct=g");
`;
