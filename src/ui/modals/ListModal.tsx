import React, { FC } from "react";
import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";
import { ITextAndEvent } from "../../models/Modal/IModal";
import {
  ModalProps,
  StyledModal,
} from "../../styles/styled-elements/modal-elements";

interface ListModalProps extends ModalProps {
  items: ITextAndEvent[];
}

const ListModal: FC<ListModalProps> = ({
  backgroundColor,
  padding = "10px 0",
  bottom,
  left,
  right,
  top,
  items,
}: ListModalProps) => {
  return (
    <StyledListModal
      backgroundColor={backgroundColor}
      padding={padding}
      bottom={bottom}
      left={left}
      right={right}
      top={top}
    >
      {items.map((item) => (
        <StyledListModalItem onClick={item.event}>
          {item.icon}
          <span>{item.text}</span>
        </StyledListModalItem>
      ))}
    </StyledListModal>
  );
};

export default ListModal;

const StyledListModal = styled(StyledModal)`
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
`;

const StyledListModalItem = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.fontGray};
  padding: 2px 80px 2px 15px;
  font-size: ${(props) => props.theme.fontSizes.link};

  &:hover {
    background-color: ${(props) => props.theme.backgroundColors.linkHover};
  }
`;
