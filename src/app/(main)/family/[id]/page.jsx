import { getFamilyById } from "@/app/api/Family"; // Updated import for family
import FamilyPage from "@/components/screen/FamilyPage"; // Updated component import

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedFamilyById;

  try {
    fetchedFamilyById = await getFamilyById(id); // Updated to fetch family
    return <FamilyPage family={fetchedFamilyById} />; // Updated to pass family
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
