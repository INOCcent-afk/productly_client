export interface IUser {
  user_id: string;

  first_name: string;

  last_name: string;

  email: string;

  password: string;

  cover_photo: string;

  display_picture: string;
}

export interface ISearchedUser {
  user_id: string;

  first_name: string;

  last_name: string;
}
