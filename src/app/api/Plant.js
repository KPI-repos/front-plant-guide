import { client } from "./instance";

export const getAllPlant = async () => {
  const response = await client.get("/api/Plant/GetAll");
  return response.data;
};

export const getPlantById = async (id) => {
  const response = await client.get("/api/Plant/GetById", {
    params: { id },
  });
  return response.data;
};

export const addPlant = async (plantData) => {
  const response = await client.post("/api/Plant/add", plantData);
  return response.data;
};

export const deletePlant = async (id) => {
  const response = await client.delete("/api/Plant/Delete", {
    params: { id },
  });
  return response.data;
};

export const updatePlant = async (id, plantData) => {
  const response = await client.put("/api/Plant/Update", plantData, {
    params: { id },
  });
  return response.data;
};
