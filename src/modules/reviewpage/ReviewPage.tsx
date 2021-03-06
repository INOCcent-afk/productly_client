import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PencilAltIcon from "../../icons/PencilAltIcon";
import { AppState } from "../../redux/store";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import { StyledTitle } from "../../styles/styled-elements/common-elements";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import {
  StyledTextarea,
  StyleSelectInput,
} from "../../styles/styled-elements/input-elements";
import StarRating from "../../ui/StarRating";
import { createReview } from "../../utils/api/products_api";
import {
  useProductData,
  useProductsData,
} from "../../utils/reactQueryHooks/productsQueryHooks";
import { darkYellow } from "../../utils/theme/colors";
import Image from "next/image";
import StarMeter from "../../ui/StarMeter";
import Link from "next/link";
import { useRouter } from "next/router";

const ReviewPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const user: any = useSelector<AppState>((state) => state.auth.user);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [reviewData, setReviewData] = useState({
    review_message: "",
    rating: 1,
  });

  const userID = user && user.user_id;

  const mutation = useMutation(
    () => createReview(reviewData, userID, selectedProduct),
    {
      onSuccess: () => {
        router.push(`/product/${selectedProduct}`);
        queryClient.invalidateQueries("products");
        queryClient.invalidateQueries("popular-products");
        queryClient.invalidateQueries("product");
        toast.success("Review has been added!", {
          icon: false,
        });
      },
    }
  );

  const { data: productsData, isLoading } = useProductsData();

  const { data: singleProductData, isLoading: singleProductIsLoading } =
    useProductData(
      selectedProduct,
      selectedProduct ? true : false,
      selectedProduct
    );

  const handleReviewData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setReviewData({
      ...reviewData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submit = async (e: FormEvent): Promise<void> => {
    try {
      e.preventDefault();

      mutation.mutate();
    } catch (error) {}
  };

  useEffect(() => {
    if (productsData) {
      setSelectedProduct(productsData[0].product_id);
    }
  }, [productsData]);

  useEffect(() => {
    if (productsData) {
      const item = productsData.filter((x) => x.product_id === router.query.id);

      if (item.length) {
        setSelectedProduct(router.query.id as string);
      } else {
        setSelectedProduct(productsData[0].product_id);
      }
    }
  }, []);

  const setRating = (num: number) => {
    setReviewData({
      ...reviewData,
      rating: num,
    });
  };

  return (
    <StyledMainContainer>
      <StyledPanelDominantLeft
        gridColumnsDesktop="8fr 4fr"
        className="!items-start"
        gridGap={15}
      >
        <StyledBox className="p-5">
          <form className="flex flex-col gap-5" onSubmit={submit}>
            <div className="flex gap-2 items-cente mb-4">
              <PencilAltIcon fill={darkYellow} width={25} height={25} />
              <StyledTitle>Review</StyledTitle>
            </div>
            <StyledTitle className="text-gray-600">Product</StyledTitle>
            <StyleSelectInput
              name="review_product_id"
              value={selectedProduct}
              disabled={isLoading ? true : false}
              onChange={(e) => setSelectedProduct(e.currentTarget.value)}
              required
            >
              {productsData ? (
                productsData.map((product) => (
                  <option key={product.product_id} value={product.product_id}>
                    {product.product_name}
                  </option>
                ))
              ) : (
                <option>WAITING FOR PRODUCTS...</option>
              )}
            </StyleSelectInput>
            <StyledTitle className="text-gray-600">Star Rating</StyledTitle>
            <div className="flex items-center gap-5 flex-wrap">
              <StarRating
                rating={reviewData.rating}
                setRating={setRating}
                disabled={false}
              />
              {ratingLabel[reviewData.rating]}
            </div>
            <StyledTitle className="text-gray-600">Review</StyledTitle>
            <StyledTextarea
              name="review_message"
              value={reviewData.review_message}
              onChange={(e) => handleReviewData(e)}
            ></StyledTextarea>
            <div className="">
              <StyledButton borderRadius={15}>Post My Rating</StyledButton>
            </div>
          </form>
        </StyledBox>
        <Link
          href={`/product/${singleProductData?.product.reviews_product_id}`}
          passHref
        >
          <StyledBox className="hidden lg:block cursor-pointer">
            {singleProductIsLoading ? (
              <div className="px-20 py-48 bg-yellow-600 animate-pulse"></div>
            ) : (
              <div className="w-full">
                <div className="relative w-full h-48">
                  {singleProductData?.product && (
                    <Image
                      layout="fill"
                      src={singleProductData?.product.product_image}
                      blurDataURL={singleProductData?.product.product_image}
                      placeholder="blur"
                      objectFit="cover"
                      alt="bg"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3 p-8">
                  <StyledTitle>
                    {singleProductData?.product.product_name}
                  </StyledTitle>
                  <div className="flex items-center gap-1">
                    <StarMeter
                      rating={
                        singleProductData?.product.average_rating as number
                      }
                    />
                    <span className="text-gray-400">
                      (
                      {singleProductData?.product.average_rating
                        ? singleProductData?.product.average_rating
                        : 0}
                      )
                    </span>
                  </div>
                  <span>
                    (
                    {singleProductData?.product.count
                      ? singleProductData?.product.count
                      : 0}
                    ) Reviews
                  </span>
                </div>
              </div>
            )}
          </StyledBox>
        </Link>
      </StyledPanelDominantLeft>
    </StyledMainContainer>
  );
};

export default ReviewPage;

interface IRatingLabel {
  [key: number]: JSX.Element;
}

const ratingLabel: IRatingLabel = {
  1: <p className="text-red-500">Totally unsatisfied</p>,
  2: <p className="text-red-500">I don't like it</p>,
  3: <p className="text-gray-600">It's okay, I guess</p>,
  4: <p className="text-green-400">It's pretty good</p>,
  5: <p className="text-green-400">I love it!</p>,
};
