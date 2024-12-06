import { client } from "./instance";

export const getAllCountry = async () => {
  const response = await client.get("/api/Country/GetAll");
  return response.data;
};

export const getCountryById = async (id) => {
  const response = await client.get("/api/Country/GetById", {
    params: { id },
  });
  return response.data;
};

export const addCountry = async (countryData) => {
  const response = await client.post("/api/Country/add", countryData);
  return response.data;
};

export const deleteCountry = async (id) => {
  const response = await client.delete("/api/Country/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateCountry = async (id, countryData) => {
  const response = await client.put("/api/Country/Update", countryData, {
    params: { id },
  });
  return response.data;
};
