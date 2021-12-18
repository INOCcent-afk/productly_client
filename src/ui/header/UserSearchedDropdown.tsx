import React from "react";
import styled from "styled-components";
import { StyledAvatar } from "../../styles/styled-elements/common-elements";

const UserSearchedDropdown = ({}) => {
  return (
    <StyledUserSearchedDropdown>
      <StyledUserLink>
        <StyledAvatar size={30}></StyledAvatar>
      </StyledUserLink>
    </StyledUserSearchedDropdown>
  );
};

export default UserSearchedDropdown;

const StyledUserSearchedDropdown = styled.div`
  position: absolute;
  display: flex;
`;

const StyledUserLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 15px;
`;
