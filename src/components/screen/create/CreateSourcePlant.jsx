"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addSourcePlant } from "@/app/api/SourcePlant"; // Updated import for creating a source plant
import { useState } from "react";

const CreateSourcePlant = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addSourcePlant(data); // Call addSourcePlant to create a new source plant
      setMessage("Source Plant created successfully!");
    } catch (error) {
      console.error("Error creating source plant:", error);
      setMessage("Error creating source plant. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">
        Create New Source Plant
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
            defaultValue="" // Default value for new source plant
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
          <Label htmlFor="sourceId">Source ID</Label>
          <Controller
            name="sourceId"
            control={control}
            defaultValue="" // Default value for new source plant
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

        <Button type="submit" variant="default">
          Create Source Plant
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateSourcePlant;
