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
  background-color: ${(props) =>
    props.backgroundColor || props.theme.backgroundColors.primary};
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: 14px;
`;

export const StyledAnimatedAvatar = styled(StyledAvatar)`
  position: relative;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:after {
    content: "";
    display: none;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid
      ${(props) => props.backgroundColor || props.theme.borderColors.primary};
    border-radius: 50%;
    width: ${(props) => props.size + 8}px;
    height: ${(props) => props.size + 8}px;
    transition: none;
  }

  &:focus {
    transform: scale(0.8);

    &:after {
      display: block;
    }
  }
`;
