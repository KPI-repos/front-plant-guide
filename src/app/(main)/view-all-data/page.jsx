import { getAllPhoto } from "@/app/api/Photo";
import { getAllClimate } from "@/app/api/Climate";
import { getAllCountry } from "@/app/api/Country";
import { getAllFamily } from "@/app/api/Family";
import { getAllOrigin } from "@/app/api/Origin";
import { getAllPlant } from "@/app/api/Plant";
import { getAllSource } from "@/app/api/Source";
import { getAllTypeSeason } from "@/app/api/TypeSeason";
import { getAllSourcePlant } from "@/app/api/SourcePlant";
import { getAllFloweringSeasonPlants } from "@/app/api/FloweringSeasonPlant";
import { getAllFamilyPlants } from "@/app/api/FamilyPlant";
import ViewAllData from "@/components/screen/ViewAllData";

export default async function Page() {
  const fetchedPhotos = await getAllPhoto();
  const fetchedClimate = await getAllClimate();
  const fetchedCountry = await getAllCountry();
  const fetchedFamily = await getAllFamily();
  const fetchedOrigin = await getAllOrigin();
  const fetchedPlant = await getAllPlant();
  const fetchedSource = await getAllSource();
  const fetchedTypeSeason = await getAllTypeSeason();
  const fetchedSourcePlant = await getAllSourcePlant();
  const fetchedFloweringSeasonPlant = await getAllFloweringSeasonPlants();
  const featchedFamilyPlant = await getAllFamilyPlants();

  return (
    <ViewAllData
      photos={fetchedPhotos}
      climates={fetchedClimate}
      countries={fetchedCountry}
      families={fetchedFamily}
      origins={fetchedOrigin}
      plants={fetchedPlant}
      sources={fetchedSource}
      typeSeasons={fetchedTypeSeason}
      sourcePlant={fetchedSourcePlant}
      floweringSeasonPlants={fetchedFloweringSeasonPlant}
      familyPlants={featchedFamilyPlant}
    />
  );
}
