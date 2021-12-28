import styled from "styled-components";

interface InputTextProps {
  borderRadius?: number;
}

export const StyledInputText = styled.input<InputTextProps>`
  border-radius: ${(props) => props.borderRadius || 15}px;
  border: 1px solid ${(props) => props.theme.borderColors.grayBorder};
  color: ${(props) => props.theme.colors.fontGray};
  font-size: ${(props) => props.theme.fontSizes.input};
  padding: 10px;
`;

export const StyleSelectInput = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.borderColors.grayBorder};
  border-radius: 5px;
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid ${(props) => props.theme.borderColors.grayBorder};
  border-radius: 5px;
  min-height: 200px;
  padding: 10px;
`;
