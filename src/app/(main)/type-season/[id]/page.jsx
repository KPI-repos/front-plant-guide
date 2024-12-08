import { getTypeSeasonById } from "@/app/api/TypeSeason"; // Changed to getTypeSeasonById
import TypeSeasonPage from "@/components/screen/TypeSeasonPage"; // Changed to TypeSeasonPage

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedTypeSeasonById;

  try {
    fetchedTypeSeasonById = await getTypeSeasonById(id); // Changed to fetchedTypeSeasonById
    return <TypeSeasonPage typeSeason={fetchedTypeSeasonById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
