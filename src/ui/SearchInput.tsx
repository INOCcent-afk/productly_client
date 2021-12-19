import React, { FC, SyntheticEvent } from "react";
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";

interface ISearchInputProps {
  borderRadius?: number;
  value: string;
  onChangeEvent: (event: SyntheticEvent<HTMLInputElement>) => void;
  closeButtonEvent: () => void;
  onFocusEvent: () => void;
  onBlurEvent: () => void;
  placeholder: string;
  additonalContainerClassname?: string;
  additonalInputClassname?: string;
}

const SearchInput: FC<ISearchInputProps> = ({
  value,
  onChangeEvent,
  closeButtonEvent,
  placeholder,
  additonalContainerClassname,
  additonalInputClassname,
  onFocusEvent,
  onBlurEvent,
}: ISearchInputProps) => {
  return (
    <StyledSearchInputContainer
      className={`${additonalContainerClassname}`}
      onBlur={onBlurEvent}
      onFocus={onFocusEvent}
      key="input-container"
    >
      <SearchIcon className="absolute left-2 top-3" fill="gray" />
      <StyledSearchInput
        type="text"
        value={value}
        onChange={onChangeEvent}
        placeholder={placeholder}
        className={`${additonalInputClassname} border-none`}
      />
      <CloseIcon
        className="absolute right-2 top-3 cursor-pointer"
        onClick={() => {
          closeButtonEvent();
          onFocusEvent();
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") closeButtonEvent();
        }}
        tabIndex={0}
        fill="gray"
      />
    </StyledSearchInputContainer>
  );
};

export default SearchInput;

const StyledSearchInputContainer = styled.div`
  position: relative;
`;

const StyledSearchInput = styled.input<Pick<ISearchInputProps, "borderRadius">>`
  border-radius: ${(props) => props.borderRadius || 15}px;
  border: 1px solid gray;
  color: black;
  padding: 10px 30px;
`;
