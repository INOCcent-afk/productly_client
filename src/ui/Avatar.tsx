import React, { FC } from "react";
import { StyledAvatar } from "../styles/styled-elements/common-elements";
import { getSingleUser } from "../utils/api/products_api";

interface AvatarProps {
  size: number;
  name?: string;
  additionalClassName?: string;
  backgroundImage?: string;
  userID?: string;
}

const Avatar: FC<AvatarProps> = ({
  size,
  name,
  userID,
  additionalClassName,
  backgroundImage,
}: AvatarProps) => {
  const [userImage, setUserImage] = React.useState("");
  const [userName, setuserName] = React.useState("");

  React.useEffect(() => {
    if (userID) {
      const fn = async () => {
        const { user } = await getSingleUser(userID);

        setUserImage(user.display_picture);
        setuserName(user.first_name);
      };

      fn();
    }
  }, []);

  const displayName = userID ? userName.charAt(0) : name?.charAt(0);

  return (
    <>
      <StyledAvatar
        backgroundImage={userID ? userImage : (backgroundImage as string)}
        size={size}
        className={additionalClassName}
      >
        {!backgroundImage && !userImage && displayName}
      </StyledAvatar>
    </>
  );
};

export default Avatar;
