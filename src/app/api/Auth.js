import { client } from "./instance";

export const registerUser = async (userData) => {
  const response = await client.post(
    "/api/Authentification/register",
    userData
  );
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await client.post("/api/Authentification/login", userData);
  return response.data;
};
