import React, { FC } from "react";
import Link from "next/link";
import { StyledAvatar } from "../../styles/styled-elements/common-elements";
import styled from "styled-components";

interface UserLinkProps {
  id: string;
  name: string;
}

const UserLink: FC<UserLinkProps> = ({ id, name }: UserLinkProps) => {
  return (
    <Link href={`/user/profile/${id}`}>
      <StyledUserLink>
        <StyledAvatar size={30}>{name.charAt(0)}</StyledAvatar>
        <p>{name}</p>
      </StyledUserLink>
    </Link>
  );
};

export default UserLink;

const StyledUserLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 10px 15px;
  width: 100%;

  &:hover {
    background-color: #e7e7e7;
  }
`;
