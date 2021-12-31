import React from "react";
import { useRouter } from "next/router";
import { useProductData } from "../../utils/reactQueryHooks/productsQueryHooks";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import Image from "next/image";
import {
  StyledBody,
  StyledMainTitle,
} from "../../styles/styled-elements/common-elements";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import PencilAltIcon from "../../icons/PencilAltIcon";
import ProductAnalytics from "../../ui/ProductAnalytics";
import LongProductReview from "../../ui/products/LongProductReview";

const ProductDetailsPage = () => {
  const router = useRouter();

  let id;
  id = router.query.id;
  if (!id && typeof window !== "undefined") {
    id = window.location.pathname.split("/").pop();
  }

  const { data, isLoading, isError } = useProductData(id, true, id);

  !data && !isLoading && typeof window !== "undefined" && router.push("/404");

  return (
    <StyledMainContainer>
      <StyledPanelDominantLeft gridGap={30} gridColumnsDesktop="7fr 5fr">
        <StyledBox className="relative" style={{ minHeight: 500 }}>
          <Image
            layout="fill"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            alt="product_image"
            objectFit="cover"
            objectPosition="center"
          />
        </StyledBox>
        <StyledBox className="relative p-10">
          <StyledMainTitle color="black">{data?.product_name}</StyledMainTitle>
          <StyledBody className="mt-5">{data?.product_description}</StyledBody>
          <StyledButton
            borderRadius={10}
            className="!px-5 !py-3 flex gap-3 absolute bottom-5 left-8"
          >
            <PencilAltIcon fill="white" />
            <span>Rate This Product</span>
          </StyledButton>
        </StyledBox>
      </StyledPanelDominantLeft>
      <ProductAnalytics
        rating={data?.average_rating as number}
        ratingCount={data?.count as number}
        reviewCount={data?.count as number}
      />
      <div className="my-24 mx-auto" style={{ maxWidth: 800 }}>
        <StyledMainTitle className="!text-black text-center xx">
          Ratings & Reviews
        </StyledMainTitle>
        <div className="flex flex-col gap-8 mt-10">
          <LongProductReview
            date="12/04/21"
            user="Michael"
            description="asasasas"
            rating={5}
          />
        </div>
      </div>
    </StyledMainContainer>
  );
};

export default ProductDetailsPage;
