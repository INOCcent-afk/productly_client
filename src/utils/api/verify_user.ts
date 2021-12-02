import axios from "axios";

const headers = {
  jwt_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZWE4ZDQxNmQtNWFlYy00ZmUxLWJjMWItYzFkNDJhYTIyZDIwIn0sImlhdCI6MTYzODQ1NDg4MCwiZXhwIjoxNjM4NDU4NDgwfQ.FnRzTW53FCf_XpY5KZ2hI_vP-j9jkNl4VVNoeY_c35U",
};

export const verifyUser = async (token: string) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/verify",
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
  } catch (error: any) {
    if (error.response.data) {
      return error.response.data.msg;
    }
  }
};
