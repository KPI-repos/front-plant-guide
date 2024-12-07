"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateTypeSeason } from "@/app/api/TypeSeason";
import { useState } from "react";

const TypeSeasonPage = ({ photo, typeSeason }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(typeSeason);

  const onSubmit = async (data) => {
    try {
      const { typeSeasonId, ...typeSeasonData } = data;
      await updateTypeSeason(typeSeasonId, {
        ...typeSeasonData,
        plantId: photo.plant.plantId,
      });
      setMessage("Type Season updated successfully!");
    } catch (error) {
      console.error("Error updating type season:", error);
      setMessage("Error updating type season. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Type Season Image"}
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
          <Label htmlFor="typeSeasonId">Type Season ID</Label>
          <Controller
            name="typeSeasonId"
            disabled
            control={control}
            defaultValue={typeSeason.typeSeasonId}
            rules={{ required: "Type Season ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.typeSeasonId && (
                  <p className="text-red-500">{errors.typeSeasonId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="name">Type Season Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue={typeSeason.name}
            rules={{ required: "Type Season Name is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
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

export default TypeSeasonPage;
