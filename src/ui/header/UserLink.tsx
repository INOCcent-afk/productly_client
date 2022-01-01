import React, { FC } from "react";
import { StyledAvatar } from "../../styles/styled-elements/common-elements";
import styled from "styled-components";
import { useRouter } from "next/router";

interface UserLinkProps {
  id: string;
  name: string;
}

const UserLink: FC<UserLinkProps> = ({ id, name }: UserLinkProps) => {
  const router = useRouter();
  return (
    <StyledUserLink onMouseDown={() => router.push(`/profile/${id}`)}>
      <StyledAvatar size={30}>{name.charAt(0)}</StyledAvatar>
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
