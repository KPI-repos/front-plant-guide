import { client } from "./instance";

export const getAllTypeSeason = async () => {
  const response = await client.get("/api/TypeSeason/GetAll");
  return response.data;
};

export const getTypeSeasonById = async (id) => {
  const response = await client.get("/api/TypeSeason/GetById", {
    params: { id },
  });
  return response.data;
};

export const getTypeSeasonByPlantId = async (plantId) => {
  const response = await client.get("/api/TypeSeason/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addTypeSeason = async (typeSeasonData) => {
  const response = await client.post("/api/TypeSeason/add", typeSeasonData);
  return response.data;
};

export const deleteTypeSeason = async (id) => {
  const response = await client.delete("/api/TypeSeason/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateTypeSeason = async (id, typeSeasonData) => {
  const response = await client.put("/api/TypeSeason/Update", typeSeasonData, {
    params: { id },
  });
  return response.data;
};
