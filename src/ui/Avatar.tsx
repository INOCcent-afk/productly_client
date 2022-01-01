import React, { FC } from "react";
import { StyledAvatar } from "../styles/styled-elements/common-elements";

interface AvatarProps {
  size: number;
  name: string;
  additionalClassName: string;
  backgroundImage?: string;
}

const Avatar: FC<AvatarProps> = ({
  size,
  name,
  additionalClassName,
  backgroundImage,
}: AvatarProps) => {
  return (
    <>
      <StyledAvatar
        backgroundImage={backgroundImage}
        size={size}
        className={additionalClassName}
      >
        {!backgroundImage && name}
      </StyledAvatar>
    </>
  );
};

export default Avatar;
