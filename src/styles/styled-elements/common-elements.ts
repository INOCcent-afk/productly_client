import styled from "styled-components";

interface IAvatarProps {
  size: number;
  backgroundColor?: string;
  color?: string;
}

export const StyledAvatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.backgroundColor || "maroon"};
  color: ${(props) => props.color || "white"};
`;
