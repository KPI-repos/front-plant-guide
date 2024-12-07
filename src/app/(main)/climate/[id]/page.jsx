import { getPhotoById } from "@/app/api/Photo";
import { getClimateById } from "@/app/api/Climate";
import ClimatePage from "@/components/screen/ClimatePage";

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedClimateById = await getClimateById(id);

  return <ClimatePage photo={fetchedPhotoById} climate={fetchedClimateById} />;
}
