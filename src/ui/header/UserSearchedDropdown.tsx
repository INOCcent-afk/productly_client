import React, { FC } from "react";
import styled from "styled-components";
import { ISearchedUser } from "../../models/user/IUser";
import { StyledModal } from "../../styles/styled-elements/modal-elements";
import UserLink from "./UserLink";

interface UserSearchedDropdownProps {
  users: ISearchedUser[];
  isLoading: boolean;
  additionalClassName?: string;
}

const UserSearchedDropdown: FC<UserSearchedDropdownProps> = ({
  users,
  isLoading,
  additionalClassName,
}: UserSearchedDropdownProps) => {
  return (
    <>
      {isLoading ? (
        <StyledUserSearchedDropdown className={additionalClassName}>
          <StyledMessage>
            <h1>Spinner</h1>
          </StyledMessage>
        </StyledUserSearchedDropdown>
      ) : (
        <>
          {users && users.length !== 0 && (
            <StyledUserSearchedDropdown className={additionalClassName}>
              {users.map((user) => (
                <UserLink
                  key={user.user_id}
                  id={user.user_id}
                  name={`${user.first_name} ${user.last_name}`}
                  image={user.display_picture}
                />
              ))}
            </StyledUserSearchedDropdown>
          )}

          {users && users.length === 0 && (
            <StyledUserSearchedDropdown className={additionalClassName}>
              <StyledMessage>
                <h1>NO data</h1>
              </StyledMessage>
            </StyledUserSearchedDropdown>
          )}
        </>
      )}
    </>
  );
};

export default UserSearchedDropdown;

const StyledUserSearchedDropdown = styled(StyledModal)`
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 1;
  top: 95px;
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
