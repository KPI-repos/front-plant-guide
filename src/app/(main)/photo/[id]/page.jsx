import { getPhotoById } from "@/app/api/Photo";
import PhotoPage from "@/components/screen/PhotoPage";

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);

  return <PhotoPage photo={fetchedPhotoById} />;
}
