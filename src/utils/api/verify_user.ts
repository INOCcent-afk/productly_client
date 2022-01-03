import axios from "axios";

export const verifyUser = async (token: string) => {
  try {
    const res = await axios.post(
      "https://productlyserver.herokuapp.com/verify",
      // "http://localhost:5000/verify",
      {},
      {
        headers: {
          jwt_token: token,
        },
      }
    );

    if (res !== undefined) {
      return res.data;
    }
  } catch (error) {}
};
