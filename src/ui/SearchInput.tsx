import React, { FC, SyntheticEvent } from "react";
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";
import { gray300 } from "../utils/theme/colors";

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
      <SearchIcon
        className="absolute left-2"
        style={{ top: 14 }}
        fill={gray300}
      />
      <StyledSearchInput
        type="text"
        value={value}
        onChange={onChangeEvent}
        placeholder={placeholder}
        className={`${additonalInputClassname} border-none`}
      />
      <CloseIcon
        className="absolute right-2 cursor-pointer"
        onClick={() => {
          closeButtonEvent();
          onFocusEvent();
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") closeButtonEvent();
        }}
        tabIndex={0}
        style={{ top: 13 }}
        fill={gray300}
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
  border: 1px solid ${(props) => props.theme.borderColors.grayBorder};
  color: ${(props) => props.theme.colors.fontGray};
  font-size: ${(props) => props.theme.fontSizes.link};
  padding: 10px 30px 10px 35px;
`;
