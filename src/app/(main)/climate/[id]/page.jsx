import { getPhotoById } from "@/app/api/Photo";
import { getClimateById } from "@/app/api/Climate";
import ClimatePage from "@/components/screen/ClimatePage";

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedClimateById;

  try {
    fetchedClimateById = await getClimateById(id);
    return <ClimatePage climate={fetchedClimateById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
