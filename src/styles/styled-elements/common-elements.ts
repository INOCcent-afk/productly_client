import styled from "styled-components";

interface IAvatarProps {
  size: number;
  backgroundColor?: string;
  color?: string;
  backgroundImage?: string;
}

interface ITitleProps {
  marginTop?: number;
  marginBottom?: number;
  fontWeight?: string;
  colors?: string;
}

export const StyledAvatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
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

export const StyledMainTitle = styled.h1<ITitleProps>`
  font-size: ${(props) => props.theme.fontSizes.mainTitle};
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  color: ${(props) => props.color || props.theme.colors.primary};
  line-height: 36px;
`;

export const StyledTitle = styled.h2<ITitleProps>`
  font-size: ${(props) => props.theme.fontSizes.sectionTitle};
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const StyledBody = styled.p`
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  color: ${(props) => props.theme.colors.fontGray};
`;
