import React, { FC } from "react";
import styled from "styled-components";
import { ISearchedUser } from "../../models/user/IUser";
import UserLink from "./UserLink";

interface UserSearchedDropdownProps {
  users: ISearchedUser[];
  isLoading: boolean;
}

const UserSearchedDropdown: FC<UserSearchedDropdownProps> = ({
  users,
  isLoading,
}: UserSearchedDropdownProps) => {
  return (
    <StyledUserSearchedDropdown>
      {isLoading ? (
        <StyledMessage>
          <h1>Spinner</h1>
        </StyledMessage>
      ) : (
        <>
          {users.length !== 0 ? (
            users.map((user) => (
              <UserLink
                key={user.user_id}
                id={user.user_id}
                name={user.display_name}
              />
            ))
          ) : (
            <StyledMessage>
              <h1>No Data T_T</h1>
            </StyledMessage>
          )}
        </>
      )}
    </StyledUserSearchedDropdown>
  );
};

export default UserSearchedDropdown;

const StyledUserSearchedDropdown = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 1;
  top: 85px;
  max-height: 150px;
  overflow-y: auto;
`;

const StyledMessage = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
