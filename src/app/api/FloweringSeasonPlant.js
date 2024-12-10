import { client } from "./instance";

export const getFloweringSeasonPlantByPlantId = async (plantId) => {
  const response = await client.get("/api/FloweringSeasonPlant/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const getAllFloweringSeasonPlants = async () => {
  const response = await client.get("/api/FloweringSeasonPlant/GetAll");
  return response.data;
};

export const getFloweringSeasonPlantById = async (id) => {
  const response = await client.get("/api/FloweringSeasonPlant/GetById", {
    params: { id },
  });
  return response.data;
};

export const addFloweringSeasonPlant = async (floweringSeasonPlantData) => {
  const response = await client.post(
    "/api/FloweringSeasonPlant/add",
    floweringSeasonPlantData
  );
  return response.data;
};

export const deleteFloweringSeasonPlant = async (id) => {
  const response = await client.delete("/api/FloweringSeasonPlant/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateFloweringSeasonPlant = async (
  id,
  floweringSeasonPlantData
) => {
  const response = await client.put(
    "/api/FloweringSeasonPlant/Update",
    floweringSeasonPlantData,
    {
      params: { id },
    }
  );
  return response.data;
};
