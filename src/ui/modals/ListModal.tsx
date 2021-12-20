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
  padding,
  bottom,
  left,
  right,
  top,
  items,
}: ListModalProps) => {
  return (
    <StyledModal
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
    </StyledModal>
  );
};

export default ListModal;

const StyledListModal = styled(StyledModal)`
  display: flex;
`;

const StyledListModalItem = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 0.8;
  }
`;
