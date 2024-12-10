import { getPlantById } from "@/app/api/Plant";
import { getClimateByPlantId } from "@/app/api/Climate";
import { getFloweringSeasonPlantByPlantId } from "@/app/api/FloweringSeasonPlant";
import { getTypeSeasonByPlantId } from "@/app/api/TypeSeason";
import { getCountryByPlantId } from "@/app/api/Country";
import { getFamilyByPlantId } from "@/app/api/Family";
import { getPhotoByPlantId } from "@/app/api/Photo";
import { getSourceByPlantId } from "@/app/api/Source";

import ViewPage from "@/components/screen/view/ViewPage";

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedPlantById,
    fetchedClimate,
    fetchedFloweringSeasonPlant,
    fetchedSeasonPlant,
    fetchedCountry,
    fetchedFamily,
    fetchedPhoto,
    fetchedSource;

  try {
    fetchedPlantById = await getPlantById(id);
  } catch (error) {}

  try {
    fetchedClimate = await getClimateByPlantId(id);
  } catch (error) {}

  try {
    fetchedFloweringSeasonPlant = await getFloweringSeasonPlantByPlantId(id);
  } catch (error) {}

  try {
    fetchedSeasonPlant = await getTypeSeasonByPlantId(id);
  } catch (error) {}

  try {
    fetchedCountry = await getCountryByPlantId(id);
  } catch (error) {}

  try {
    fetchedFamily = await getFamilyByPlantId(id);
  } catch (error) {}

  try {
    fetchedPhoto = await getPhotoByPlantId(id);
  } catch (error) {}

  try {
    fetchedSource = await getSourceByPlantId(id);
  } catch (error) {}

  return (
    <ViewPage
      plant={fetchedPlantById}
      climate={fetchedClimate}
      floweringSeasonPlant={fetchedFloweringSeasonPlant}
      seasonPlant={fetchedSeasonPlant}
      country={fetchedCountry}
      family={fetchedFamily}
      photo={fetchedPhoto}
      source={fetchedSource}
    />
  );
}
