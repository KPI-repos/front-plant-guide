import { client } from "./instance";

export const getAllFamilyPlants = async () => {
  const response = await client.get("/api/FamilyPlant/GetAll");
  return response.data;
};

export const getFamilyPlantById = async (id) => {
  const response = await client.get("/api/FamilyPlant/GetById", {
    params: { id },
  });
  return response.data;
};

export const getFamilyPlantByPlantId = async (plantId) => {
  const response = await client.get("/api/FamilyPlant/GetByPlantId", {
    params: { plantId },
  });
  return response.data;
};

export const addFamilyPlant = async (familyPlantData) => {
  const response = await client.post("/api/FamilyPlant/add", familyPlantData);
  return response.data;
};

export const deleteFamilyPlant = async (id) => {
  const response = await client.delete("/api/FamilyPlant/Delete", {
    params: { id },
  });
  return response.data;
};

export const updateFamilyPlant = async (id, familyPlantData) => {
  const response = await client.put(
    "/api/FamilyPlant/Update",
    familyPlantData,
    {
      params: { id },
    }
  );
  return response.data;
};
