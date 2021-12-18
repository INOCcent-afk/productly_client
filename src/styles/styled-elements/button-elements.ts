import styled from "styled-components";

interface ButtonProps {
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled.button`
  border-radius: 15px;
  background-color: maroon;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid maroon;
  cursor: pointer;

  a {
    color: white;
  }
`;

export const StyledButtonOutlined = styled(StyledButton)<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: ${(props) => props.borderWidth || 2}px solid
    ${(props) => props.borderColor || "maroon"};
  color: ${(props) => props.color || "maroon"};

  a {
    color: ${(props) => props.color || "maroon"};
  }
`;
