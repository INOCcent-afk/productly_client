import React, { FC, FormEvent, SyntheticEvent, useState } from "react";
import Router from "next/router";
import { signIn, signUp } from "../../utils/api/products_api";

interface Props {
  pageType: "login" | "signup";
}

const UserFormComponent: FC<Props> = ({ pageType }: Props) => {
  const [userSignInData, setUserSignInData] = useState({
    email: "",
    password: "",
  });

  const [userSignUpData, setUserSignUpData] = useState({
    display_name: "",
    email: "",
    password: "",
  });
  const isLogInPage = pageType === "login";

  const [error, setError] = useState("");

  const handleLogInData = (e: SyntheticEvent<HTMLInputElement>): void => {
    setUserSignInData({
      ...userSignInData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSignUpData = (e: SyntheticEvent<HTMLInputElement>): void => {
    setUserSignUpData({
      ...userSignUpData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submit = async (e: FormEvent): Promise<void> => {
    try {
      e.preventDefault();
      const authFn = isLogInPage
        ? (signIn(userSignInData), Router.push("/productly-homepage"))
        : (signUp(userSignUpData), Router.push("/"));

      // const { data } = await authFn;
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.data) {
        setError(error.response.data);
      }
    }
  };

  return (
    <>
      <h1>{pageType}</h1>

      <form onSubmit={submit}>
        {!isLogInPage && (
          <>
            <label htmlFor="userDisplayName">display name</label>
            <br />
            <input
              name="display_name"
              id="userDisplayName"
              type="text"
              value={userSignUpData.display_name}
              required
              placeholder="Enter your Display Name here"
              onChange={(e) => handleSignUpData(e)}
            />
            <br />
          </>
        )}
        <label htmlFor="userEmail">Email</label>
        <br />
        <input
          name="email"
          id="userEmail"
          type="email"
          value={isLogInPage ? userSignInData.email : userSignUpData.email}
          required
          placeholder="Enter your email here"
          onChange={(e) =>
            pageType === "login" ? handleLogInData(e) : handleSignUpData(e)
          }
        />
        <br />
        <label htmlFor="userPassword">password</label>
        <br />
        <input
          name="password"
          id="userPassword"
          type="password"
          value={
            isLogInPage ? userSignInData.password : userSignUpData.password
          }
          required
          placeholder="Enter your password here"
          onChange={(e) =>
            pageType === "login" ? handleLogInData(e) : handleSignUpData(e)
          }
        />
        <div className="">
          <button type="submit">{pageType}</button>
        </div>
      </form>

      <h1>{error}</h1>
    </>
  );
};

export default UserFormComponent;
