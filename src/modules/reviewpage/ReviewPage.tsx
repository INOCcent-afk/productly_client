import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
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

const ReviewPage = () => {
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

    console.log(productsData);
  }, [productsData]);

  const tite = (num: number) => {
    setReviewData({
      ...reviewData,
      rating: num,
    });
  };

  return (
    <StyledMainContainer>
      <StyledPanelDominantLeft className="!items-start" gridGap={15}>
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
            <StarRating
              rating={reviewData.rating}
              setRating={tite}
              disabled={false}
            />
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
        <StyledBox>
          {singleProductIsLoading ? (
            <h1>Wait a minute kapeng mainit</h1>
          ) : (
            <h1>{singleProductData && singleProductData.product_name}</h1>
          )}
        </StyledBox>
      </StyledPanelDominantLeft>
    </StyledMainContainer>
  );
};

export default ReviewPage;
