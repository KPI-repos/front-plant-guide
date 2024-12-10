import { client } from "./instance";

export const getAllOrigin = async () => {
  const response = await client.get("/api/Origin/GetAll");
  return response.data;
};

export const getOriginById = async (id) => {
  const response = await client.get("/api/Origin/GetById", {
    params: { id },
  });
  return response.data;
};

export const getOriginByPlantId = async (plantId) => {
  const response = await client.get("/api/Origin/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addOrigin = async (originData) => {
  const response = await client.post("/api/Origin/add", originData);
  return response.data;
};

export const deleteOrigin = async (id) => {
  const response = await client.delete("/api/Origin/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateOrigin = async (id, originData) => {
  const response = await client.put("/api/Origin/Update", originData, {
    params: { id },
  });
  return response.data;
};
