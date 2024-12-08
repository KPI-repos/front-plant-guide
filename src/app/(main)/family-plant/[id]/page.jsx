import { getFamilyPlantById } from "@/app/api/FamilyPlant"; // Updated to import getAllFamily
import FamilyPlantPage from "@/components/screen/FamilyPlantPage"; // Updated to use FamilyPlantPage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedFamilyPlant;

  try {
    fetchedFamilyPlant = await getFamilyPlantById(id); // Updated to fetch family plant data
    return <FamilyPlantPage familyPlant={fetchedFamilyPlant} />; // Updated to use FamilyPlantPage
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
