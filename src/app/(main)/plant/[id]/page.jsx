import { getPlantById } from "@/app/api/Plant";
import AboutPage from "@/components/screen/AboutPage";

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedPlantById;

  try {
    fetchedPlantById = await getPlantById(id);
    return <AboutPage plant={fetchedPlantById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
