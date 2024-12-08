"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateFloweringSeasonPlant } from "@/app/api/FloweringSeasonPlant"; // Updated import for flowering season plant
import { useState } from "react";

const FloweringSeasonPlantPage = ({ floweringSeasonPlant }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(floweringSeasonPlant);

  const onSubmit = async (data) => {
    try {
      const {
        floweringSeasonPlantId,
        plantId, // Changed familyId to plantId
        typeSeasonId, // Added typeSeasonId
        ...floweringSeasonPlantData
      } = data; // Updated variable name
      const updatedFloweringSeasonPlant = await updateFloweringSeasonPlant(
        floweringSeasonPlant.floweringSeasonPlantId,
        {
          ...floweringSeasonPlantData,
        }
      );
      setMessage("Flowering Season Plant updated successfully!"); // Updated success message
      console.log(updatedFloweringSeasonPlant);
    } catch (error) {
      console.error("Error updating flowering season plant:", error); // Updated error message
      setMessage("Error updating flowering season plant. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="floweringSeasonPlantId">
            Flowering Season Plant ID
          </Label>{" "}
          {/* Updated label */}
          <Controller
            disabled
            name="floweringSeasonPlantId" // Updated name
            control={control}
            defaultValue={floweringSeasonPlant.floweringSeasonPlantId || ""} // Set default value
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.floweringSeasonPlantId && ( // Updated error handling
                  <p className="text-red-500">
                    {errors.floweringSeasonPlantId.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>{" "}
          {/* Changed label from Family ID to Plant ID */}
          <Controller
            name="plantId" // Updated name to plantId
            control={control}
            defaultValue={floweringSeasonPlant.plantId || ""} // Set default value
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
          <Label htmlFor="typeSeasonId">Type Season ID</Label>{" "}
          {/* New label for Type Season ID */}
          <Controller
            name="typeSeasonId" // New name for typeSeasonId
            control={control}
            defaultValue={floweringSeasonPlant.typeSeasonId || ""} // Set default value
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

        <Button type="submit" variant="default">
          Save Changes
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default FloweringSeasonPlantPage; // Updated export
