import { getAllPhoto } from "@/app/api/Photo";
import MainPage from "@/components/screen/MainPage";

export default async function Page() {
  const fetchedPhotos = await getAllPhoto();

  return <MainPage photos={fetchedPhotos} />;
}
