import { client } from "./instance";

export const getAllClimate = async () => {
  const response = await client.get("/api/Climate/GetAll");
  return response.data;
};

export const getClimateById = async (id) => {
  const response = await client.get("/api/Climate/GetById", {
    params: { id },
  });
  return response.data;
};

export const addClimate = async (climateData) => {
  const response = await client.post("/api/Climate/add", climateData);
  return response.data;
};

export const deleteClimate = async (id) => {
  const response = await client.delete("/api/Climate/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateClimate = async (id, climateData) => {
  const response = await client.put("/api/Climate/Update", climateData, {
    params: { id },
  });
  return response.data;
};
