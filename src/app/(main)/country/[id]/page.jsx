import { getPhotoById } from "@/app/api/Photo";
import { getCountryById } from "@/app/api/Country";
import CountryPage from "@/components/screen/CountryPage";

export default async function Page({ params }) {
  const id = (await params).id;
  const fetchedPhotoById = await getPhotoById(id);
  const fetchedCountryById = await getCountryById(id);

  return <CountryPage photo={fetchedPhotoById} country={fetchedCountryById} />;
}
