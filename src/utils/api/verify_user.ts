import axios from "axios";

const headers = {
  jwt_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZWE4ZDQxNmQtNWFlYy00ZmUxLWJjMWItYzFkNDJhYTIyZDIwIn0sImlhdCI6MTYzODMzNDA1MywiZXhwIjoxNjM4MzM3NjUzfQ.iDfc4uPYjYr5uOi57Hy5wQVovA3-5IiJGbw2vS2DFTk",
};

export const verifyUser = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/verify",
      {},
      {
        headers,
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
