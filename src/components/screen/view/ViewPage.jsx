import Image from "next/image";
import { Fragment } from "react";
const ViewPage = ({
  plant,
  climate,
  floweringSeasonPlant,
  seasonPlant,
  country,
  family,
  photo,
  source,
}) => {
  console.log(country);

  return (
    <div className="my-7 max-w-[600px] m-auto flex-wrap">
      {photo && Array.isArray(photo) ? (
        <div className="flex gap-2">
          {photo.map((item) => (
            <div key={item.photoId}>
              <Image
                src={item?.url || "/placeholder.jpg"}
                alt={"Photo Image"}
                width={400}
                height={300}
                className="object-cover w-60 h-60 rounded-lg"
                style={{ aspectRatio: "400/300" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
          <Image
            src={photo?.url || "/placeholder.jpg"}
            alt={"Photo Image"}
            width={400}
            height={300}
            className="object-cover w-60 h-60 rounded-lg m-auto"
            style={{ aspectRatio: "400/300" }}
          />
        </div>
      )}

      {plant && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h1 className="text-2xl font-bold text-gray-800">
            {plant.commonName}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            {plant.scientificName}
          </h2>
          <p className="text-gray-500 mt-2">{plant.description}</p>
        </div>
      )}

      {climate && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Climate</h2>
          <p className="text-gray-600 mt-2">
            Description: {climate.description}
          </p>
          <div className="mt-2">
            <span className="block text-gray-700">
              Precipitation Max: <strong>{climate.precipitationMax}</strong>
            </span>
            <span className="block text-gray-700">
              Precipitation Min: <strong>{climate.precipitationMin}</strong>
            </span>
            <span className="block text-gray-700">
              Temperature Max: <strong>{climate.temperatureMax}</strong>
            </span>
            <span className="block text-gray-700">
              Temperature Min: <strong>{climate.temperatureMin}</strong>
            </span>
          </div>
        </div>
      )}

      {seasonPlant && seasonPlant.length > 0 && (
        <div className="mt-2 p-2 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Flowering Season</h2>
          <div className="mt-2">
            {seasonPlant.map((season) => (
              <Fragment key={season.typeSeasonId}>
                <h3 className="block text-gray-700">{season.name}</h3>
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {country && country.length > 0 && (
        <div className="mt-2 p-2 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Country Origin</h2>
          <div className="mt-2">
            {country.map((c) => (
              <Fragment key={c.countryId}>
                <h3 className="block text-gray-700">{c.name || "None"}</h3>
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {family && family.length > 0 && (
        <div className="mt-2 p-2 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Family Name</h2>
          <div className="mt-2">
            {family.map((f) => (
              <Fragment key={f.familyId}>
                <h3 className="block text-gray-700">{f.name}</h3>
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {source && source.length > 0 && (
        <div className="mt-2 p-2 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Sources</h2>
          <div className="mt-2">
            {source.map((s) => (
              <Fragment key={s.familyId}>
                <h3 className="block text-gray-700 font-semibold">{s.title}</h3>
                <div className="text-gray-600">
                  Author: <span className="font-medium">{s.author}</span>
                </div>
                <div className="text-gray-600">
                  URL:{" "}
                  <a
                    href={s.url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.url}
                  </a>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPage;
