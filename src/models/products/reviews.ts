export interface IAverageRating {
  average_rating: string;
}

export interface IReview {
  rating: number;

  review_id: string;

  review_message: string;

  review_product_id: string;

  user_id: string;
}

export interface SingleProductReviews {
  avgRating: IAverageRating;

  reviews: IReview[];
}
