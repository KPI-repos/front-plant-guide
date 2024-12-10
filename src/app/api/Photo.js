import { client } from "./instance";

export const getAllPhoto = async () => {
  const response = await client.get("/api/Photo/GetAll");
  return response.data;
};

export const getPhotoById = async (id) => {
  const response = await client.get("/api/Photo/GetById", {
    params: { id },
  });
  return response.data;
};

export const getPhotoByPlantId = async (plantId) => {
  const response = await client.get("/api/Photo/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addPhoto = async (photoData) => {
  const response = await client.post("/api/Photo/add", photoData);
  return response.data;
};

export const deletePhoto = async (id) => {
  const response = await client.delete("/api/Photo/Delete", {
    params: { id },
  });
  return response.data;
};

export const updatePhoto = async (id, photoData) => {
  const response = await client.put("/api/Photo/Update", photoData, {
    params: { id },
  });
  return response.data;
};
