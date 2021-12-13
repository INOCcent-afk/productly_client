import React, { FC } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { IProduct } from "../../models/products/product";
import { StyledButtonOutlined } from "../../styles/styled-elements/button-elements";
import { StyledMainContainer } from "../../styles/styled-elements/container-elements";
import HeroBanner from "../../ui/HeroBanner";
import { getAllProducts } from "../../utils/api/products_api";

const HomePage: FC = () => {
  const { data: productData, isLoading } = useQuery<IProduct[]>(
    "products",
    getAllProducts
  );

  if (isLoading) {
    return <div>loading tnagina ka!!!!</div>;
  }

  return (
    <>
      <HeroBanner />
      <StyledHomepageContainer>
        <StyledMainContainer>
          {productData &&
            productData.map((item) => (
              <StyledButtonOutlined key={item.product_id}>
                {item.product_name}
              </StyledButtonOutlined>
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
