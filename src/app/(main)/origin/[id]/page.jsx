import { getOriginById } from "@/app/api/Origin"; // Changed to getClimateById
import OriginPage from "@/components/screen/OriginPage"; // Changed to OriginPage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedOriginById;

  try {
    fetchedOriginById = await getOriginById(id); // Changed to fetch climate data
    return <OriginPage origin={fetchedOriginById} />; // Changed to use OriginPage
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
