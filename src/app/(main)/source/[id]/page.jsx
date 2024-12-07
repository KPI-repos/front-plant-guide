import { getPhotoById } from "@/app/api/Photo";
import { getSourceById } from "@/app/api/Source"; // Changed to getSourceById
import SourcePage from "@/components/screen/SourcePage"; // Changed to SourcePage

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedSourceById = await getSourceById(id); // Changed to fetchedSourceById

  return <SourcePage photo={fetchedPhotoById} source={fetchedSourceById} />; // Changed to SourcePage and source prop
}
