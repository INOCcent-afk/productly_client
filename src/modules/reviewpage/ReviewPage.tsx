import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { IProduct } from "../../models/products/product";
import { IReview } from "../../models/products/reviews";
import { AppState } from "../../redux/store";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import { createReview, getAllProducts } from "../../utils/api/products_api";

const ReviewPage = () => {
  const user = useSelector<AppState>((state) => state.auth.user.user_id);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [reviewData, setReviewData] = useState({
    review_message: "",
    rating: 1,
  });

  const { data: productData, isLoading } = useQuery<IProduct[]>(
    "products",
    getAllProducts
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

      createReview(reviewData, user, selectedProduct);
    } catch (error) {}
  };

  useEffect(() => {
    if (productData) {
      setSelectedProduct(productData[0].product_id);
    }
  }, [productData]);

  return (
    <StyledMainContainer>
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
              {productData ? (
                productData.map((product) => (
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
          <h1></h1>
        </StyledBox>
      </StyledPanelDominantLeft>
    </StyledMainContainer>
  );
};

export default ReviewPage;
