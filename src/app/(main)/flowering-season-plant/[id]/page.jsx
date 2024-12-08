import { getFloweringSeasonPlantById } from "@/app/api/FloweringSeasonPlant"; // Updated to import getFloweringSeasonPlantById
import FloweringSeasonPlantPage from "@/components/screen/FloweringSeasonPlantPage"; // Updated to use FloweringSeasonPlantPage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedFloweringSeasonPlant;

  try {
    fetchedFloweringSeasonPlant = await getFloweringSeasonPlantById(id); // Updated to fetch flowering season plant data
    return (
      <FloweringSeasonPlantPage
        floweringSeasonPlant={fetchedFloweringSeasonPlant}
      />
    ); // Updated to use FloweringSeasonPlantPage
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
