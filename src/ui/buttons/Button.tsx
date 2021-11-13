import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, primary }: ButtonProps) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<{ primary?: boolean }>`
  font-size: 13px;
  padding: 10px 20px;
  background-color: ${({ primary }) => (primary ? "green" : "maroon")};
  color: white;
`;
