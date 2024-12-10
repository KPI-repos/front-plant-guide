import { client } from "./instance";

export const getAllSourcePlant = async () => {
  const response = await client.get("/api/SourcePlant/GetAll");
  return response.data;
};

export const getSourcePlantById = async (id) => {
  const response = await client.get("/api/SourcePlant/GetById", {
    params: { id },
  });
  return response.data;
};

export const getSourcePlantByPlantId = async (plantId) => {
  const response = await client.get("/api/SourcePlant/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addSourcePlant = async (sourcePlantData) => {
  const response = await client.post("/api/SourcePlant/add", sourcePlantData);
  return response.data;
};

export const deleteSourcePlant = async (id) => {
  const response = await client.delete("/api/SourcePlant/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateSourcePlant = async (id, sourcePlantData) => {
  const response = await client.put(
    "/api/SourcePlant/Update",
    sourcePlantData,
    {
      params: { id },
    }
  );
  return response.data;
};
