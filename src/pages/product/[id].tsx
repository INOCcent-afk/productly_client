import React, { useEffect } from "react";
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
import { NextPage } from "next";
import Link from "next/link";

const ProductDetailsPage: NextPage = () => {
  const router = useRouter();

  let id;
  id = router.query.id;

  if (!id && typeof window !== "undefined") {
    id = window.location.pathname.split("/").pop();
  }

  const { data, isLoading, isError, refetch } = useProductData(id, true, id);

  if (isError) {
    router.push("/404");
  }

  useEffect(() => {
    refetch();
  }, []);

  return (
    <StyledMainContainer>
      <StyledPanelDominantLeft className="!gap-5" gridColumnsDesktop="7fr 5fr">
        <StyledBox className="relative" style={{ minHeight: 500 }}>
          <Image
            layout="fill"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            blurDataURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
            placeholder="blur"
            alt="product_image"
            objectFit="cover"
            objectPosition="center"
          />
        </StyledBox>
        <StyledBox className="relative p-10">
          <StyledMainTitle color="black">
            {data?.product.product_name}
          </StyledMainTitle>
          <StyledBody className="mt-5 mb-20">
            {data?.product.product_description}
          </StyledBody>
          <StyledButton
            borderRadius={10}
            className="!px-5 !py-3 flex gap-3 absolute bottom-5 left-8"
          >
            <PencilAltIcon fill="white" />
            <Link href={`/review/${id}`}>
              <span>Rate This Product</span>
            </Link>
          </StyledButton>
        </StyledBox>
      </StyledPanelDominantLeft>
      <ProductAnalytics
        rating={data?.product.average_rating as number}
        ratingCount={data?.product.count as number}
        reviewCount={data?.productReviewCount.count as number}
      />
      <div className="my-24 mx-auto" style={{ maxWidth: 800 }}>
        <StyledMainTitle className="!text-black text-center xx">
          Ratings & Reviews
        </StyledMainTitle>
        <div className="flex flex-col gap-8 mt-10">
          {data?.productReviews.map((review) => (
            <LongProductReview
              date={review.created_at}
              user={review.user_id}
              description={review.review_message}
              rating={review.rating}
              key={review.review_id}
            />
          ))}
        </div>
      </div>
    </StyledMainContainer>
  );
};

export default ProductDetailsPage;
