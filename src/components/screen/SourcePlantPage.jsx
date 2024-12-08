"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateSourcePlant } from "@/app/api/SourcePlant"; // Updated import for source plant
import { useState } from "react";

const SourcePlantPage = ({ sourcePlant }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(sourcePlant);

  const onSubmit = async (data) => {
    try {
      const { sourcePlantId, ...sourcePlantData } = data;
      await updateSourcePlant(sourcePlant.sourcesPlantId, sourcePlantData);
      setMessage("Source Plant updated successfully!");
    } catch (error) {
      console.error("Error updating source plant:", error);
      setMessage("Error updating source plant. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="sourcePlantId">Source Plant ID</Label>
          <Controller
            disabled
            name="sourcePlantId"
            control={control}
            defaultValue={sourcePlant.sourcesPlantId}
            rules={{ required: "Source Plant ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.sourcePlantId && (
                  <p className="text-red-500">{errors.sourcePlantId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="sourceId">Source ID</Label>
          <Controller
            name="sourceId"
            control={control}
            defaultValue={sourcePlant.sourceId}
            rules={{ required: "Source ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.sourceId && (
                  <p className="text-red-500">{errors.sourceId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>
          <Controller
            name="plantId"
            control={control}
            defaultValue={sourcePlant.plantId}
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

        <Button type="submit" variant="default">
          Save Changes
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default SourcePlantPage;
