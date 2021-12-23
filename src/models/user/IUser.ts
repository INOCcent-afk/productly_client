export interface IUser {
  user_id: string;

  first_name: string;

  last_name: string;

  bio_description: string;

  email: string;

  password: string;

  cover_photo: string;

  display_picture: string;
}

export interface IUpdateUser {
  first_name: string;

  last_name: string;

  bio_description: string;

  display_picture?: string | null;

  cover_photo?: string | null;
}

export interface ISearchedUser {
  user_id: string;

  first_name: string;

  last_name: string;
}
