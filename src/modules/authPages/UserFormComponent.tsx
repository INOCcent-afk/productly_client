import React, { FC, FormEvent, SyntheticEvent, useState } from "react";
import Router from "next/router";
import { signIn, signUp } from "../../utils/api/products_api";
import { signInDispatch } from "../../redux/AuthSlice.slice";
import { useAppDispatch } from "../../redux/hooks";
import styled from "styled-components";
import LightingBoldIcon from "../../icons/LightingBoldIcon";
import { darkYellow } from "../../utils/theme/colors";
import { StyledInputText } from "../../styles/styled-elements/input-elements";
import { StyledButtonFullWidth } from "../../styles/styled-elements/button-elements";
import Link from "next/link";
import { toast } from "react-toastify";
import LoadingSpinner from "../../ui/LoadingSpinner";

interface Props {
  pageType: "Login" | "Register";
}

const UserFormComponent: FC<Props> = ({ pageType }: Props) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const [userSignInData, setUserSignInData] = useState({
    email: "",
    password: "",
  });

  const [userSignUpData, setUserSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const isLogInPage = pageType === "Login";

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

  const isSignInFieldsComplete =
    !userSignInData.email || !userSignInData.password;
  const isSignUpFIeldsComplete =
    !userSignUpData.first_name ||
    !userSignUpData.last_name ||
    !userSignUpData.email ||
    !userSignUpData.password;

  const submit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (isLogInPage && isSignInFieldsComplete) {
      toast.error("Failed to Login");
    } else if (!isLogInPage && isSignUpFIeldsComplete) {
      toast.error("Failed to Register");
    } else {
      setLoading(true);
      try {
        const authFn = isLogInPage
          ? signIn(userSignInData)
          : signUp(userSignUpData);

        const { data } = await authFn;

        const payload = {
          token: data.jwtToken,
          user: data.user,
        };

        isLogInPage &&
          (dispatch(signInDispatch(payload)),
          toast.success(`👋 Succesfully Login as ${data.user.first_name}`, {
            icon: false,
          }),
          Router.push("/productly-homepage"));

        !isLogInPage &&
          toast.success(`Registered Succesfully`) &&
          Router.push("/");
      } catch (error: any) {
        if (error.response.data) {
          setError(error.response.data);
        }
      }
      setLoading(false);
    }
  };

  return (
    <>
      <StyledUserFormComponent onSubmit={submit}>
        <StyledFormTitle>
          <LightingBoldIcon width={30} height={30} fill={darkYellow} />
          {pageType}
        </StyledFormTitle>

        <StyledFormBody className="">
          {!isLogInPage && (
            <>
              <label htmlFor="userFirstName">First Name</label>
              <StyledInputText
                borderRadius={4}
                name="first_name"
                id="userFirstName"
                type="text"
                value={userSignUpData.first_name}
                placeholder="Enter First Name"
                onChange={(e) => handleSignUpData(e)}
              />
              <label htmlFor="userLastName">Last Name</label>
              <StyledInputText
                borderRadius={4}
                name="last_name"
                id="userLastName"
                type="text"
                value={userSignUpData.last_name}
                placeholder="Enter Last Name"
                onChange={(e) => handleSignUpData(e)}
              />
            </>
          )}
          <label htmlFor="userEmail">Email</label>
          <StyledInputText
            borderRadius={4}
            name="email"
            id="userEmail"
            type="email"
            value={isLogInPage ? userSignInData.email : userSignUpData.email}
            placeholder="Enter your email here"
            onChange={(e) =>
              isLogInPage ? handleLogInData(e) : handleSignUpData(e)
            }
          />
          <label htmlFor="userPassword">password</label>
          <StyledInputText
            borderRadius={4}
            name="password"
            id="userPassword"
            type="password"
            value={
              isLogInPage ? userSignInData.password : userSignUpData.password
            }
            placeholder="Enter your password here"
            onChange={(e) =>
              isLogInPage ? handleLogInData(e) : handleSignUpData(e)
            }
          />
          <div className="mt-5">
            <StyledButtonFullWidth
              borderRadius={30}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-12">
                  <LoadingSpinner />
                  Loading...
                </span>
              ) : (
                pageType
              )}
            </StyledButtonFullWidth>
          </div>
        </StyledFormBody>
        {isLogInPage && (
          <StyledFormFooter>
            <Link href="/register">
              <span>CREATE ACCOUNT</span>
            </Link>
            <Link href="/register">
              <span>CAN'T SIGN IN?</span>
            </Link>
          </StyledFormFooter>
        )}
      </StyledUserFormComponent>
    </>
  );
};

export default UserFormComponent;

const StyledUserFormComponent = styled.form`
  padding: 50px 50px 80px 50px;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFormTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.theme.fontSizes.label};
  font-weight: bold;
`;

const StyledFormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -30px;

  span {
    font-size: ${(props) => props.theme.fontSizes.subLink};
    color: ${(props) => props.theme.colors.fontGray};
    font-weight: 500;
    cursor: pointer;
  }
`;
