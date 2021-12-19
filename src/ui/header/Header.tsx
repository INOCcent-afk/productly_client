import React, {
  FC,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Router from "next/router";
import { signOutDispatch } from "../../redux/AuthSlice.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styled from "styled-components";
import { useUsersSearchedData } from "../../utils/reactQueryHooks/productsQueryHooks";
import UserSearchedDropdown from "./UserSearchedDropdown";
import debounce from "lodash.debounce";
import {
  StyledButton,
  StyledButtonOutlined,
} from "../../styles/styled-elements/button-elements";
import SearchInput from "../SearchInput";
import { StyledAnimatedAvatar } from "../../styles/styled-elements/common-elements";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const selectAuth = useAppSelector((state) => state.auth);
  const [searchUser, setSearchUser] = useState("");
  const [output, setOutput] = useState("");
  const debounced = useRef(debounce((value) => setOutput(value), 600));

  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    Router.push("/");
  };

  const { data: searchedUsers, isFetching: isSearchedUsersLoading } =
    useUsersSearchedData(
      searchUser,
      selectAuth.token,
      searchUser === "" ? false : true,
      output,
      true
    );

  const updateUserValue = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      setSearchUser(event.currentTarget.value);
      debounced.current(event.currentTarget.value);
    },
    []
  );

  const clearUserValue = useCallback(() => {
    setSearchUser("");
    debounced.current("");
  }, []);

  return (
    <StyledHeaderContainer>
      <StyledHeader
        className={`${isInputFocus && "!grid grid-cols-3frAnd1fr gap-4"}`}
      >
        <StyledLeftNav>
          <StyledBranding className={`${isInputFocus && "basis-full"}`}>
            <Link href="/productly-homepage">
              <a className="text-red-900 cursor-pointer">Productly</a>
            </Link>
            <SearchInput
              value={searchUser}
              onChangeEvent={updateUserValue}
              placeholder="search"
              onFocusEvent={() => setIsInputFocus(true)}
              onBlurEvent={() => setIsInputFocus(false)}
              closeButtonEvent={clearUserValue}
              additonalInputClassname={isInputFocus ? "w-full" : ""}
              additonalContainerClassname={isInputFocus ? "w-full" : ""}
            />
          </StyledBranding>
          {!isInputFocus && (
            <StyledMainNav>
              <li>
                <Link href="/review">Review</Link>
              </li>
              <li>
                <Link href="/productly-homepage">Products</Link>
              </li>
              <li>
                <Link href="/productly-homepage">About</Link>
              </li>
            </StyledMainNav>
          )}
        </StyledLeftNav>
        <StyledRightNav className={`${isInputFocus && "justify-end"}`}>
          {selectAuth.token ? (
            <>
              {selectAuth.token && <h3>{selectAuth.user.display_name}</h3>}
              <StyledAnimatedAvatar size={40} tabIndex={0}>
                {selectAuth.user.display_name.charAt(0)}
              </StyledAnimatedAvatar>
            </>
          ) : (
            <>
              <Link href="/">
                <StyledButton>Login</StyledButton>
              </Link>
              <Link href="/register">
                <StyledButtonOutlined>Register</StyledButtonOutlined>
              </Link>
            </>
          )}
        </StyledRightNav>
        {output && isInputFocus && (
          <UserSearchedDropdown
            users={searchedUsers ? searchedUsers.users : []}
            isLoading={isSearchedUsersLoading}
          />
        )}
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;

const StyledHeaderContainer = styled.div`
  box-shadow: 0 2px 10px -2px gray;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

const StyledBranding = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 20px;
  }
`;

const StyledMainNav = styled.ul`
  display: flex;
  gap: 20px;
`;

const StyledLeftNav = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const StyledRightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
