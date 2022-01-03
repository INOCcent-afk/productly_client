import React, { FC } from "react";
import { StyledAvatar } from "../../styles/styled-elements/common-elements";
import styled from "styled-components";
import { useRouter } from "next/router";
import Avatar from "../Avatar";

interface UserLinkProps {
  id: string;
  name: string;
  image: string;
}

const UserLink: FC<UserLinkProps> = ({ id, name, image }: UserLinkProps) => {
  const router = useRouter();
  return (
    <StyledUserLink onMouseDown={() => router.push(`/profile/${id}`)}>
      <Avatar size={30} name={name.charAt(0)} backgroundImage={image}></Avatar>
      <span>{name}</span>
    </StyledUserLink>
  );
};

export default UserLink;

const StyledUserLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 10px 15px;
  width: 100%;
  color: ${(props) => props.theme.colors.fontColor};

  &:hover {
    background-color: ${(props) => props.theme.backgroundColors.linkHover};
  }
`;
