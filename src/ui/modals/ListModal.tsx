import React from "react";
import styled from "styled-components";
import { ITextAndEvent } from "../../models/Modal/IModal";
import {
  ModalProps,
  StyledModal,
} from "../../styles/styled-elements/modal-elements";

interface ListModalProps extends ModalProps {
  items: ITextAndEvent[];
}

const ListModal = React.forwardRef<HTMLDivElement, ListModalProps>(
  (
    { backgroundColor, padding = "10px 0", bottom, left, right, top, items },
    ref
  ) => {
    return (
      <StyledListModal
        backgroundColor={backgroundColor}
        padding={padding}
        bottom={bottom}
        left={left}
        right={right}
        top={top}
        ref={ref}
      >
        {items.map((item, index) => (
          <StyledListModalItem key={index} onClick={item.event}>
            {item.icon}
            <span>{item.text}</span>
          </StyledListModalItem>
        ))}
      </StyledListModal>
    );
  }
);

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

  svg {
    min-width: 15px;
  }

  &:hover {
    background-color: ${(props) => props.theme.backgroundColors.linkHover};
  }

  span {
    white-space: nowrap;
  }
`;
