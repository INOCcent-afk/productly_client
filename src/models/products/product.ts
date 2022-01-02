import { IReview } from "./reviews";

export interface IProduct {
  average_rating: number;

  count: number;

  product_id: string;

  product_description: string;

  product_name: string;

  product_image: string;

  reviews_product_id: string;

  user_id: string;

  latest_review_date: string;
}

export interface IProductReviewCount {
  count: number;
}

export interface IProductSearched {
  products: IProduct[];
}

export interface IProductFullQuery {
  product: IProduct;
  productReviews: IReview[];
  productReviewCount: IProductReviewCount;
}
