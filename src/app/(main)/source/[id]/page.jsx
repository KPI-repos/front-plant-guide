import { getSourceById } from "@/app/api/Source"; // Changed to getSourceById
import SourcePage from "@/components/screen/SourcePage"; // Changed to SourcePage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedSourceById;

  try {
    fetchedSourceById = await getSourceById(id);
    return <SourcePage source={fetchedSourceById} />; // Changed to SourcePage and source prop
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
