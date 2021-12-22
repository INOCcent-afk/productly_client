import React, { FC } from "react";
import styled from "styled-components";
import { StyledButtonOutlined } from "../../styles/styled-elements/button-elements";
import { StyledMainContainer } from "../../styles/styled-elements/container-elements";
import HeroBanner from "../../ui/HeroBanner";
import { useProductsData } from "../../utils/reactQueryHooks/productsQueryHooks";
import Link from "next/link";

const HomePage: FC = () => {
  const { data: productsData, isLoading } = useProductsData();

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <>
      <HeroBanner />
      <StyledHomepageContainer>
        <StyledMainContainer>
          {productsData &&
            productsData.map((item) => (
              <Link key={item.product_id} href={`/product/${item.product_id}`}>
                <StyledButtonOutlined>{item.product_name}</StyledButtonOutlined>
              </Link>
            ))}
        </StyledMainContainer>
      </StyledHomepageContainer>
    </>
  );
};

export default HomePage;

const StyledHomepageContainer = styled.div`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  z-index: 10;
`;
