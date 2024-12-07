import { getPhotoById } from "@/app/api/Photo";
import { getFamilyById } from "@/app/api/Family"; // Updated import for family
import FamilyPage from "@/components/screen/FamilyPage"; // Updated component import

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedFamilyById = await getFamilyById(id); // Updated to fetch family

  return <FamilyPage photo={fetchedPhotoById} family={fetchedFamilyById} />; // Updated to pass family
}
