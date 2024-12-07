import { getPhotoById } from "@/app/api/Photo";
import { getTypeSeasonById } from "@/app/api/TypeSeason"; // Changed to getTypeSeasonById
import TypeSeasonPage from "@/components/screen/TypeSeasonPage"; // Changed to TypeSeasonPage

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedTypeSeasonById = await getTypeSeasonById(id); // Changed to fetchedTypeSeasonById

  return (
    <TypeSeasonPage
      photo={fetchedPhotoById}
      typeSeason={fetchedTypeSeasonById}
    />
  );
}
