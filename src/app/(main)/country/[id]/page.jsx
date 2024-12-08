import { getCountryById } from "@/app/api/Country";
import CountryPage from "@/components/screen/CountryPage";

export default async function Page({ params }) {
  const id = (await params).id;
  let fetchedCountryById;

  try {
    fetchedCountryById = await getCountryById(id);
    return <CountryPage country={fetchedCountryById} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl">
        Not Found
      </div>
    );
  }
}
