import { getSourcePlantById } from "@/app/api/SourcePlant"; // Changed to getSourcePlantById
import SourcePlantPage from "@/components/screen/SourcePlantPage"; // Changed to SourcePlantPage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedSourcePlantById;

  try {
    fetchedSourcePlantById = await getSourcePlantById(id); // Changed to fetchedSourcePlantById
    return <SourcePlantPage sourcePlant={fetchedSourcePlantById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
