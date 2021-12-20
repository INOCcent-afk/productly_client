import styled from "styled-components";

export interface ModalProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  backgroundColor?: string;
  padding?: string;
}

export const StyledModal = styled.div<ModalProps>`
  position: absolute;
  border-radius: 8px;
  padding: ${(props) => props.padding};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  background-color: ${(props) => props.backgroundColor || "white"};
  box-shadow: ${(props) => props.theme.boxShadow.bottomBoxShadow};
`;
