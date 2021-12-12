import React from "react";
import Link from "next/link";
import Router from "next/router";
import { signOutDispatch } from "../redux/AuthSlice.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styled from "styled-components";
import { StyledMainContainer } from "../styles/styled-elements/container-elements";

const Header = () => {
  const dispatch = useAppDispatch();
  const selectAuth = useAppSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    Router.push("/");
  };

  return (
    <StyledMainContainer>
      <StyledHeader>
        <StyledLeftNav>
          <StyledBranding>
            <h1>Productly</h1>
            <input type="text" placeholder="search" />
          </StyledBranding>
          <StyledMainNav>
            <li>
              <Link href="/productly-homepage">Review</Link>
            </li>
            <li>
              <Link href="/productly-homepage">Products</Link>
            </li>
            <li>
              <Link href="/productly-homepage">About</Link>
            </li>
          </StyledMainNav>
        </StyledLeftNav>
        <StyledRightNav>
          {selectAuth.token ? (
            <>
              {selectAuth.token && <h3>{selectAuth.user.display_name}</h3>}
              <span onClick={handleSignOut}>Log out</span>
            </>
          ) : (
            <>
              <span>
                <Link href="/">Login</Link>
              </span>
              <span>
                <Link href="/register">Register</Link>
              </span>
            </>
          )}
        </StyledRightNav>
      </StyledHeader>
    </StyledMainContainer>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 80px;
`;

const StyledBranding = styled.ul`
  display: flex;
  gap: 30px;

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
