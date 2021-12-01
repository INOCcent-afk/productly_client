import React, { useEffect, useState } from "react";
import Router from "next/router";
import { verifyUser } from "../../utils/api/verify_user";

const HomePage = () => {
  const [user, setUser] = useState<boolean>(false);
  const [error, setError] = useState("");

  const checkAuthenticated = async () => {
    const data = await verifyUser();

    if (data === true) setUser(data);
    else Router.push("/");
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <div>
      <h1>{user && "Welcome to Homepage"}</h1>
    </div>
  );
};

export default HomePage;
