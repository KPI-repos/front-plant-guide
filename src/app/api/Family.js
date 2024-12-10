import { client } from "./instance";

export const getAllFamily = async () => {
  const response = await client.get("/api/Family/GetAll");
  return response.data;
};

export const getFamilyById = async (id) => {
  const response = await client.get("/api/Family/GetById", {
    params: { id },
  });
  return response.data;
};

export const getFamilyByPlantId = async (plantId) => {
  const response = await client.get("/api/Family/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addFamily = async (familyData) => {
  const response = await client.post("/api/Family/add", familyData);
  return response.data;
};

export const deleteFamily = async (id) => {
  const response = await client.delete("/api/Family/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateFamily = async (id, familyData) => {
  const response = await client.put("/api/Family/Update", familyData, {
    params: { id },
  });
  return response.data;
};
