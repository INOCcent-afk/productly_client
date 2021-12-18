import styled from "styled-components";

interface IAvatarProps {
  size: number;
  backgroundColor?: string;
}

export const StyledAvatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  backgroundcolor: ${(props) => props.backgroundColor || "yellow"};
`;
