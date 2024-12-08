"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addFloweringSeasonPlant } from "@/app/api/FloweringSeasonPlant"; // Updated import for creating a flowering season plant
import { useState } from "react";

const CreateFloweringSeasonPlant = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { floweringSeasonPlantId, ...floweringSeasonData } = data; // Updated variable name
      await addFloweringSeasonPlant(floweringSeasonData); // Call addFloweringSeasonPlant with floweringSeasonData
      setMessage("Flowering Season Plant created successfully!"); // Updated success message
    } catch (error) {
      console.error("Error creating flowering season plant:", error); // Updated error message
      setMessage("Error creating flowering season plant. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">
        Create New Flowering Season Plant
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>
          <Controller
            name="plantId"
            control={control}
            defaultValue="" // Default value for Plant ID
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
          <Label htmlFor="typeSeasonId">Type Season ID</Label>
          <Controller
            name="typeSeasonId"
            control={control}
            defaultValue="" // Default value for Type Season ID
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

        <Button type="submit" variant="default">
          Create Flowering Season Plant
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateFloweringSeasonPlant;
