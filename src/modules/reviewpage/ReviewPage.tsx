import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { AppState } from "../../redux/store";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import { createReview } from "../../utils/api/products_api";
import {
  useProductData,
  useProductsData,
} from "../../utils/reactQueryHooks/productsQueryHooks";

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
        toast("Review has been posted Suckah!");
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

  return (
    <StyledMainContainer>
      <ToastContainer theme="dark" />
      <StyledPanelDominantLeft>
        <StyledBox>
          <form onSubmit={submit}>
            <h1>Review a Product</h1>
            <select
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
                <option>Waiting for the data...</option>
              )}
            </select>
            <h1>Star Rating</h1>
            <select
              name="rating"
              value={reviewData.rating}
              required
              onChange={(e) => {
                setReviewData({
                  ...reviewData,
                  rating: +e.currentTarget.value,
                });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="">
              <h1>Description</h1>
              <textarea
                name="review_message"
                value={reviewData.review_message}
                onChange={(e) => handleReviewData(e)}
              ></textarea>
            </div>
            <StyledButton>Post My Rating</StyledButton>
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
