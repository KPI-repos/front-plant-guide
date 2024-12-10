import { client } from "./instance";

export const getAllSource = async () => {
  const response = await client.get("/api/Source/GetAll");
  return response.data;
};

export const getSourceById = async (id) => {
  const response = await client.get("/api/Source/GetById", {
    params: { id },
  });
  return response.data;
};

export const getSourceByPlantId = async (plantId) => {
  const response = await client.get("/api/Source/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addSource = async (sourceData) => {
  const response = await client.post("/api/Source/add", sourceData);
  return response.data;
};

export const deleteSource = async (id) => {
  const response = await client.delete("/api/Source/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateSource = async (id, sourceData) => {
  const response = await client.put("/api/Source/Update", sourceData, {
    params: { id },
  });
  return response.data;
};
