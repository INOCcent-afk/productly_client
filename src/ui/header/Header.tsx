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
import ListModal from "../modals/ListModal";
import { ITextAndEvent } from "../../models/Modal/IModal";
import SearchIcon from "../../icons/SearchIcon";
import { darkYellow } from "../../utils/theme/colors";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const selectAuth = useAppSelector((state) => state.auth);
  const [searchUser, setSearchUser] = useState("");
  const [output, setOutput] = useState("");
  const [userSettingModal, setUserSettingModal] = useState(false);
  const debounced = useRef(debounce((value) => setOutput(value), 600));

  const [isInputFocus, setIsInputFocus] = useState(true);

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    setUserSettingModal(false);
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

  const userDropdownItems: ITextAndEvent[] = [
    {
      text: "Profile",
      event: handleSignOut,
      icon: <SearchIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Account Settings",
      event: handleSignOut,
      icon: <SearchIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Sign out",
      event: handleSignOut,
      icon: <SearchIcon fill={darkYellow} width={15} />,
    },
  ];

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
            <StyledHeaderSearchContainer
              className={`${isInputFocus ? "w-full" : ""}`}
            >
              <SearchInput
                value={searchUser}
                onChangeEvent={updateUserValue}
                placeholder={isInputFocus ? "search other users" : "search..."}
                onFocusEvent={() => setIsInputFocus(true)}
                onBlurEvent={() => setIsInputFocus(false)}
                closeButtonEvent={clearUserValue}
                additonalInputClassname={isInputFocus ? "w-full" : "w-52"}
                additonalContainerClassname={isInputFocus ? "w-full" : ""}
              />
              {searchUser && isInputFocus && (
                <UserSearchedDropdown
                  users={searchedUsers ? searchedUsers.users : []}
                  isLoading={isSearchedUsersLoading}
                />
              )}
            </StyledHeaderSearchContainer>
          </StyledBranding>
          {!isInputFocus && (
            <StyledMainNav>
              <Link href="/review">
                <li>Review</li>
              </Link>
              <Link href="/productly-homepage">
                <li>Products</li>
              </Link>
              <Link href="/productly-homepage">
                <li>About</li>
              </Link>
            </StyledMainNav>
          )}
        </StyledLeftNav>
        <StyledRightNav className={`${isInputFocus && "justify-end"}`}>
          {selectAuth.token ? (
            <>
              {selectAuth.token && <h3>{selectAuth.user.display_name}</h3>}
              <StyledAnimatedAvatar
                size={40}
                tabIndex={0}
                onClick={() => setUserSettingModal(!userSettingModal)}
                className="outline-none"
              >
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
        {userSettingModal && (
          <ListModal items={userDropdownItems} top={100} right={15} />
        )}
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;

const StyledHeaderContainer = styled.div`
  box-shadow: ${(props) => props.theme.boxShadows.bottomBoxShadow};
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 120px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.laptopL} {
    padding: 0;
  }
`;

const StyledBranding = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const StyledMainNav = styled.ul`
  display: flex;
  gap: 20px;

  li {
    font-size: ${(props) => props.theme.fontSizes.link};
    color: ${(props) => props.theme.colors.fontGray};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const StyledLeftNav = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const StyledRightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: ${(props) => props.theme.fontSizes.link};
`;

const StyledHeaderSearchContainer = styled.div`
  position: relative;
`;
