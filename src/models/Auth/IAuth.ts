import { IUser } from "../user/IUser";

export interface IAuth {
  token: string;
  user: IUser;
}
