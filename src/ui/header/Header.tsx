import React, {
  FC,
  MutableRefObject,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
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
import { darkYellow } from "../../utils/theme/colors";
import LogoutIcon from "../../icons/LogoutIcon";
import CogIcon from "../../icons/CogIcon";
import { navItems } from "./HeaderItemList";
import DotsVertical from "../../icons/DotsVertical";
import LinkIcon from "../../icons/LinkIcon";
import UserIcon from "../../icons/UserIcon";
import useWindowDimensions from "../../utils/hooks/UseWindowDimensions";
import { tablet } from "../../utils/theme/breakpoints";
import useClickOutsideHook from "../../utils/hooks/useClickOutsideHook";
import { toast } from "react-toastify";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const selectAuth = useAppSelector((state) => state.auth);
  const router = useRouter();

  const [searchUser, setSearchUser] = useState("");
  const [output, setOutput] = useState("");
  const [userSettingModal, setUserSettingModal] = useState(false);
  const [mobileNavModal, setMobileNavModal] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  const { width } = useWindowDimensions();
  const debounced = useRef(debounce((value) => setOutput(value), 600));

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    setUserSettingModal(false);
    toast.warn("👋 You have logged out. See you later!", {
      icon: false,
    });
    Router.push("/");
  };

  const { data: searchedUsers, isFetching: isSearchedUsersLoading } =
    useUsersSearchedData(searchUser, true, output, true);

  let userSettingNode = useClickOutsideHook(() => {
    setUserSettingModal(false);
  });

  let mobileNavNode = useClickOutsideHook(() => {
    setMobileNavModal(false);
  });

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
      event: () => {
        Router.push(`/profile/${selectAuth.user.user_id}`);
        setUserSettingModal(false);
      },
      icon: <UserIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Account Settings",
      event: () => {
        Router.push("/user/account-settings");
        setUserSettingModal(false);
      },
      icon: <CogIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Sign out",
      event: handleSignOut,

      icon: <LogoutIcon fill={darkYellow} width={15} />,
    },
  ];

  const mobileLoginRegisterItems: ITextAndEvent[] = [
    {
      text: "Login",
      event: () => Router.push("/"),
      icon: <LinkIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Register",
      event: () => Router.push("/register"),
      icon: <LinkIcon fill={darkYellow} width={15} />,
    },
  ];

  const mobileDropdownItems: ITextAndEvent[] = [
    {
      text: "Reviews",
      event: () => Router.push("/review"),
      icon: <LinkIcon fill={darkYellow} width={15} />,
    },
    {
      text: "Products",
      event: () => {
        Router.push("/productly-homepage");
      },
      icon: <LinkIcon fill={darkYellow} width={15} />,
    },
    {
      text: "About",
      event: () => Router.push("/about-us"),
      icon: <LinkIcon fill={darkYellow} width={15} />,
    },
    ...(router.pathname === "/" ? mobileLoginRegisterItems : userDropdownItems),
  ];

  React.useEffect(() => {
    setSearchUser("");
  }, [router]);

  return (
    <StyledHeaderContainer>
      <StyledHeader
        className={`${
          isInputFocus && "smd:!grid smd:grid-cols-3frAnd1fr smd:gap-4"
        }`}
      >
        <StyledLeftNav>
          <StyledBranding className={`${isInputFocus && "basis-full"}`}>
            <Link href="/productly-homepage">
              <a className="cursor-pointer">
                <img className="w-24" src="/brand.png" alt="" />
              </a>
            </Link>
            <div className={`relative ${isInputFocus ? "w-full" : ""}`}>
              <SearchInput
                value={searchUser}
                onChangeEvent={updateUserValue}
                placeholder={isInputFocus ? "search other users" : "search..."}
                onFocusEvent={() => setIsInputFocus(true)}
                onBlurEvent={() => setIsInputFocus(false)}
                closeButtonEvent={clearUserValue}
                additonalInputClassname={`w-52 ${
                  isInputFocus && "smd:w-full md:w-full"
                }`}
                additonalContainerClassname={isInputFocus ? "w-full" : ""}
              />
              {searchUser && isInputFocus && (
                <UserSearchedDropdown
                  users={searchedUsers && searchedUsers.users}
                  isLoading={isSearchedUsersLoading}
                />
              )}
            </div>
          </StyledBranding>
          {!isInputFocus && (
            <StyledMainNav>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <li tabIndex={0}>{item.text}</li>
                </Link>
              ))}
            </StyledMainNav>
          )}
        </StyledLeftNav>
        <StyledRightNav className={`${isInputFocus && "justify-end"}`}>
          {selectAuth.token ? (
            <>
              <h3 className="text-center">{selectAuth.user.first_name}</h3>
              <div className="" ref={userSettingNode}>
                <StyledAnimatedAvatar
                  size={40}
                  tabIndex={0}
                  onClick={() => setUserSettingModal(!userSettingModal)}
                  className="outline-none"
                >
                  {selectAuth.user.first_name.charAt(0)}
                </StyledAnimatedAvatar>
                {userSettingModal && width > +tablet && (
                  <ListModal items={userDropdownItems} top={100} right={15} />
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/">
                <StyledButton borderRadius={15}>Login</StyledButton>
              </Link>
              <Link href="/register">
                <StyledButtonOutlined borderRadius={15}>
                  Register
                </StyledButtonOutlined>
              </Link>
            </>
          )}
        </StyledRightNav>
        <div
          className="relative md:hidden cursor-pointer"
          onClick={() => setMobileNavModal(!mobileNavModal)}
          ref={mobileNavNode}
        >
          <DotsVertical className="ml-auto" fill={darkYellow} />
          {mobileNavModal && width < +tablet && (
            <ListModal items={mobileDropdownItems} top={40} right={15} />
          )}
        </div>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;

const StyledHeaderContainer = styled.div`
  box-shadow: ${(props) => props.theme.boxShadows.bottomBoxShadow};
  z-index: 100;
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
  gap: 10px;

  @media ${(props) => props.theme.mediaQueries.laptopL} {
    padding: 0;
  }
`;

const StyledBranding = styled.ul`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const StyledMainNav = styled.ul`
  display: none;
  gap: 20px;

  li {
    font-size: ${(props) => props.theme.fontSizes.link};
    color: ${(props) => props.theme.colors.fontGray};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: flex;
    align-items: center;
  }
`;

const StyledLeftNav = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const StyledRightNav = styled.div`
  display: none;
  gap: 20px;
  font-size: ${(props) => props.theme.fontSizes.link};

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: flex;
    align-items: center;
  }
`;
