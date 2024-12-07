import { getPhotoById } from "@/app/api/Photo";
import { getOriginById } from "@/app/api/Origin"; // Changed to getClimateById
import OriginPage from "@/components/screen/OriginPage"; // Changed to OriginPage

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedOriginById = await getOriginById(id); // Changed to fetch climate data

  return <OriginPage photo={fetchedPhotoById} origin={fetchedOriginById} />; // Changed to use OriginPage
}
