import { getPhotoById } from "@/app/api/Photo";
import { getPlantById } from "@/app/api/Plant";
import AboutPage from "@/components/screen/AboutPage";

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedPlantById = await getPlantById(id);

  return <AboutPage photo={fetchedPhotoById} plant={fetchedPlantById} />;
}
