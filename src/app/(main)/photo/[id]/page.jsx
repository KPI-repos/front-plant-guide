import { getPhotoById } from "@/app/api/Photo";
import PhotoPage from "@/components/screen/PhotoPage";

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedPhotoById;

  try {
    fetchedPhotoById = await getPhotoById(id);
    return <PhotoPage photo={fetchedPhotoById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
