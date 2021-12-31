import React, { FC } from "react";
import { getSingleUser } from "../utils/api/products_api";

interface DisplayNameProps {
  id: string;
  singleLetter?: boolean;
}

const DisplayName: FC<DisplayNameProps> = ({
  id,
  singleLetter,
}: DisplayNameProps) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const fn = async () => {
      const { user } = await getSingleUser(id);

      setName(user.first_name);
    };

    fn();
  }, []);

  return (
    <span>{singleLetter ? name.charAt(0).toLocaleUpperCase() : name}</span>
  );
};

export default DisplayName;
