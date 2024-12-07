"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateClimate } from "@/app/api/Climate";
import { useState } from "react";

const ClimatePage = ({ photo, climate }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { climateId, ...climateData } = data;
      const updatedClimate = await updateClimate(climateId, {
        ...climateData,
        plantId: photo.plant.plantId,
      });
      setMessage("Climate updated successfully!");
      console.log(updatedClimate);
    } catch (error) {
      console.error("Error updating climate:", error);
      setMessage("Error updating climate. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Climate Image"}
            width={400}
            height={300}
            className="object-cover w-60 h-60 rounded-lg"
            style={{ aspectRatio: "400/300" }}
          />
          <div className="mt-2 ">
            <h2 className="text-xl font-semibold text-gray-800">
              {photo.plant.commonName}
            </h2>
            <p className="text-gray-600">{photo.plant.description}</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="climateId">Climate ID</Label>
          <Controller
            disabled
            name="climateId"
            control={control}
            defaultValue={climate.climateId}
            rules={{ required: "Climate ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.climateId && (
                  <p className="text-red-500">{errors.climateId.message}</p>
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
            defaultValue={climate.description}
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
        <div className="mb-4">
          <Label htmlFor="temperatureMin">Minimum Temperature</Label>
          <Controller
            name="temperatureMin"
            control={control}
            defaultValue={climate.temperatureMin}
            rules={{ required: "Minimum Temperature is required" }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="border rounded p-2 w-full"
                />
                {errors.temperatureMin && (
                  <p className="text-red-500">
                    {errors.temperatureMin.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="temperatureMax">Maximum Temperature</Label>
          <Controller
            name="temperatureMax"
            control={control}
            defaultValue={climate.temperatureMax}
            rules={{ required: "Maximum Temperature is required" }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="border rounded p-2 w-full"
                />
                {errors.temperatureMax && (
                  <p className="text-red-500">
                    {errors.temperatureMax.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="precipitationMin">Minimum Precipitation</Label>
          <Controller
            name="precipitationMin"
            control={control}
            defaultValue={climate.precipitationMin}
            rules={{ required: "Minimum Precipitation is required" }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="border rounded p-2 w-full"
                />
                {errors.precipitationMin && (
                  <p className="text-red-500">
                    {errors.precipitationMin.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="precipitationMax">Maximum Precipitation</Label>
          <Controller
            name="precipitationMax"
            control={control}
            defaultValue={climate.precipitationMax}
            rules={{ required: "Maximum Precipitation is required" }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="border rounded p-2 w-full"
                />
                {errors.precipitationMax && (
                  <p className="text-red-500">
                    {errors.precipitationMax.message}
                  </p>
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
        <Button className="mt-2 mb-7" variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ClimatePage;
