"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updatePlant } from "@/app/api/Plant";
import { useState } from "react";

const AboutPage = ({ photo, plant }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  console.log(plant);

  const onSubmit = async (data) => {
    try {
      const updatedPlant = await updatePlant(data.plantId, data);
      setMessage("Plant updated successfully!");
      console.log(updatedPlant);
    } catch (error) {
      console.error("Error updating plant:", error);
      setMessage("Error updating plant. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.commonName || "Plant Image"}
            width={400}
            height={300}
            className="object-cover w-60 h-60 rounded-lg"
            style={{ aspectRatio: "400/300" }}
          />
          <div className="mt-2 ">
            <h2 className="text-xl font-semibold text-gray-800">
              {plant.commonName}
            </h2>
            <p className="text-gray-600">{plant.description}</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>
          <Controller
            disabled
            name="plantId"
            control={control}
            defaultValue={plant.plantId}
            rules={{ required: "Plant ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.plantId && (
                  <p className="text-red-500">{errors.plantId.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="commonName">Common Name</Label>
          <Controller
            name="commonName"
            control={control}
            defaultValue={plant.commonName}
            rules={{ required: "Common Name is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.commonName && (
                  <p className="text-red-500">{errors.commonName.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="scientificName">Scientific Name</Label>
          <Controller
            name="scientificName"
            control={control}
            defaultValue={plant.scientificName}
            rules={{ required: "Scientific Name is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.scientificName && (
                  <p className="text-red-500">
                    {errors.scientificName.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Controller
            name="description"
            control={control}
            defaultValue={plant.description}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <>
                <textarea {...field} className="border rounded p-2 w-full" />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </>
            )}
          />
        </div>

        <Button type="submit" variant="default">
          Save Changes
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      <div className="max-w-[600px] m-auto">
        <Button className="mt-2" variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
