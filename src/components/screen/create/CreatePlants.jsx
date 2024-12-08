"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addPlant } from "@/app/api/Plant"; // Updated import for creating a plant
import { useState } from "react";

const CreatePlant = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addPlant(data); // Call addPlant to create a new plant
      setMessage("Plant created successfully!");
    } catch (error) {
      console.error("Error creating plant:", error);
      setMessage("Error creating plant. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Plant</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="commonName">Common Name</Label>
          <Controller
            name="commonName"
            control={control}
            defaultValue="" // Default value for new plant
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
            defaultValue="" // Default value for new plant
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
            defaultValue="" // Default value for new plant
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
          Create Plant
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreatePlant;
