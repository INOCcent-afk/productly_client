import { IUser } from "./IUser";

export interface ISingleUser {
  user: IUser;
  userRatingsCount: ICount;
  userReviewsCount: ICount;
}

export interface ICount {
  count: number;
}
