import styled from "styled-components";

interface ButtonProps {
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props) => props.borderRadius || 0}px;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.backgroundColors.primary};
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: 14px;
  padding: 5px 15px;
  border: ${(props) => props.borderWidth || 2}px solid
    ${(props) => props.borderColor || props.theme.borderColors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    color: white;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.backgroundColor || props.theme.colors.primary};
    background-color: ${(props) =>
      props.color || props.theme.backgroundColors.white};
    outline: none;
  }
`;

export const StyledButtonOutlined = styled(StyledButton)`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.backgroundColors.white};
  border: ${(props) => props.borderWidth || 2}px solid
    ${(props) => props.borderColor || props.theme.borderColors.primary};
  color: ${(props) => props.color || props.theme.colors.primary};

  a {
    color: ${(props) => props.color || props.theme.colors.primary};
  }

  &:hover,
  &:focus {
    color: ${(props) => props.backgroundColor || props.theme.colors.white};
    background-color: ${(props) =>
      props.color || props.theme.backgroundColors.primary};
  }
`;

export const StyledButtonFullWidth = styled(StyledButton)`
  padding: 10px 20px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.button};
`;
