import { IProduct } from "../products/product";
import { IUser } from "./IUser";

export interface ISingleUser {
  user: IUser;
  userRatingsCount: ICount;
  userReviewsCount: ICount;
  user_activity: {
    activity: IProduct[];
  };
}

export interface ICount {
  count: number;
}
