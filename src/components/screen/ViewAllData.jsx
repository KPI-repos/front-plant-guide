"use client";
import { Button } from "../ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import React from "react";
import { useRouter } from "next/navigation";
import { deletePhoto } from "@/app/api/Photo";
import { deleteClimate } from "@/app/api/Climate";
import { deleteCountry } from "@/app/api/Country";
import { deleteFamily } from "@/app/api/Family";
import { deleteOrigin } from "@/app/api/Origin";
import { deletePlant } from "@/app/api/Plant";
import { deleteSource } from "@/app/api/Source";
import { deleteTypeSeason } from "@/app/api/TypeSeason";
import { deleteSourcePlant } from "@/app/api/SourcePlant";
import { deleteFloweringSeasonPlant } from "@/app/api/FloweringSeasonPlant";
import { deleteFamilyPlant } from "@/app/api/FamilyPlant";
const ViewAllData = ({
  photos,
  climates,
  countries,
  families,
  origins,
  plants,
  sources,
  typeSeasons,
  sourcePlant,
  floweringSeasonPlants,
  familyPlants,
}) => {
  const handleDelete = async (deleteFunction, id) => {
    try {
      await deleteFunction(id);
      window.location.reload();
    } catch (error) {
      console.error(`Error deleting: ${error}`);
    }
  };
  console.log(sourcePlant);

  const router = useRouter(); // Initialize useRouter

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Photo Gallery
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/photo");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo ID</TableHead>
            <TableHead>Photo URL</TableHead>
            <TableHead>Photo Author</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {photos.map((p) => (
            <TableRow key={p.photoId}>
              <TableCell>{p.photoId}</TableCell>
              <TableCell>
                <img
                  src={p.url}
                  alt={p.description}
                  className="w-16 h-16 object-cover"
                />
              </TableCell>
              <TableCell>{p.author}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deletePhoto, p.photoId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/photo/${p.photoId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Climate Data{" "}
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/climate");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Climate ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Temperature Min</TableHead>
            <TableHead>Temperature Max</TableHead>
            <TableHead>Precipitation Min</TableHead>
            <TableHead>Precipitation Max</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {climates.map((c) => (
            <TableRow key={c.climateId}>
              <TableCell>{c.climateId}</TableCell>
              <TableCell>{c.description}</TableCell>
              <TableCell>{c.temperatureMin}</TableCell>
              <TableCell>{c.temperatureMax}</TableCell>
              <TableCell>{c.precipitationMin}</TableCell>
              <TableCell>{c.precipitationMax}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deleteClimate, c.climateId)}
                >
                  Delete
                </Button>
                <Button
                  className="mt-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/climate/${c.climateId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Countries
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/country");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Country ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((c) => (
            <TableRow key={c.countryId}>
              <TableCell>{c.countryId}</TableCell>
              <TableCell>{c.name}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deleteCountry, c.countryId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/country/${c.countryId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Families
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/family");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Family ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Family Plant ID</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {families.map((c) => (
            <TableRow key={c.familyId}>
              <TableCell>{c.familyId}</TableCell>
              <TableCell>{c.name}</TableCell>
              {c?.familyPlants?.length > 0 && (
                <TableCell>
                  {c.familyPlants
                    .map((family) => family.familyPlantId)
                    .join(", ")}
                </TableCell>
              )}
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deleteFamily, c.familyId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/family/${c.familyId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Origin Details
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/origin");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Origin ID</TableHead>
            <TableHead>Country ID</TableHead>
            <TableHead>Plant ID</TableHead>
            <TableHead>Years</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {origins.map((origin) => (
            <TableRow key={origin.originId}>
              <TableCell>{origin.originId}</TableCell>
              <TableCell>{origin.countryId}</TableCell>
              <TableCell>{origin.plantId}</TableCell>
              <TableCell>{origin.years}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deleteOrigin, origin.originId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/origin/${origin.originId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Plant Details
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/plant");
          }}
        >
          Create New
        </Button>
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plant ID</TableHead>
            <TableHead>Common Name</TableHead>
            <TableHead>Scientific Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.plantId}>
              <TableCell>{plant.plantId}</TableCell>
              <TableCell>{plant.commonName}</TableCell>
              <TableCell>{plant.scientificName}</TableCell>
              <TableCell>{plant.description}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deletePlant, plant.plantId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/plant/${plant.plantId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Source Details
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/source");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Source ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sources.map((source) => (
            <TableRow key={source.sourceId}>
              <TableCell>{source.sourceId}</TableCell>
              <TableCell>{source.title}</TableCell>
              <TableCell>{source.author}</TableCell>
              <TableCell>{source.url}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(deleteSource, source.sourceId)}
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/source/${source.sourceId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Type Season
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/type-season");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type Season ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Flowering Season ID</TableHead>
            <TableHead>Plant ID</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {typeSeasons.map((plant) => (
            <TableRow key={plant.typeSeasonId}>
              <TableCell>{plant.typeSeasonId}</TableCell>
              <TableCell>{plant.name}</TableCell>
              {plant?.floweringSeasonPlants?.length > 0 && (
                <TableCell>
                  {plant.floweringSeasonPlants
                    .map((flowering) => flowering.floweringSeasonPlantId)
                    .join(", ")}
                </TableCell>
              )}
              {plant?.floweringSeasonPlants?.length > 0 && (
                <TableCell>
                  {plant.floweringSeasonPlants
                    .map((flowering) => flowering.plantId)
                    .join(", ")}
                </TableCell>
              )}
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() =>
                    handleDelete(deleteTypeSeason, plant.typeSeasonId)
                  }
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/type-season/${plant.typeSeasonId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Source Plant Data
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/source-plant");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Source Plant ID</TableHead>
            <TableHead>Plant ID</TableHead>
            <TableHead>Source ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sourcePlant.map((sp) => (
            <TableRow key={sp.sourcesPlantId}>
              <TableCell>{sp.sourcesPlantId}</TableCell>
              <TableCell>{sp.plantId}</TableCell>
              <TableCell>{sp.sourceId}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() =>
                    handleDelete(deleteSourcePlant, sp.sourcesPlantId)
                  }
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/source-plant/${sp.sourcesPlantId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Flowering Season Plant Data
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/flowering-season-plant");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Flowering Season Plant ID</TableHead>
            <TableHead>Plant ID</TableHead>
            <TableHead>Type Season ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {floweringSeasonPlants.map((fsp) => (
            <TableRow key={fsp.floweringSeasonPlantId}>
              <TableCell>{fsp.floweringSeasonPlantId}</TableCell>
              <TableCell>{fsp.plantId}</TableCell>
              <TableCell>{fsp.typeSeasonId}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() =>
                    handleDelete(
                      deleteFloweringSeasonPlant,
                      fsp.floweringSeasonPlantId
                    )
                  }
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(
                      `/flowering-season-plant/${fsp.floweringSeasonPlantId}`
                    );
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2 className="text-2xl font-semibold text-center mt-7 flex gap-5 justify-center">
        Family Plant Data
        <Button
          variant="default"
          onClick={() => {
            router.push("/create/family-plant");
          }}
        >
          Create New
        </Button>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Family Plant ID</TableHead>
            <TableHead>Plant ID</TableHead>
            <TableHead>Family ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {familyPlants.map((fp) => (
            <TableRow key={fp.familyPlantId}>
              <TableCell>{fp.familyPlantId}</TableCell>
              <TableCell>{fp.plantId}</TableCell>
              <TableCell>{fp.familyId}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() =>
                    handleDelete(deleteFamilyPlant, fp.familyPlantId)
                  }
                >
                  Delete
                </Button>
                <Button
                  className="ml-2"
                  variant="default"
                  onClick={() => {
                    router.push(`/family-plant/${fp.familyPlantId}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewAllData;
