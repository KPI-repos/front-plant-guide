"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addClimate } from "@/app/api/Climate"; // Updated import for creating a climate
import { useState } from "react";

const CreateClimate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addClimate(data); // Call addClimate instead of addPhoto
      setMessage("Climate created successfully!");
    } catch (error) {
      console.error("Error creating climate:", error);
      setMessage("Error creating climate. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Climate</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Controller
            name="description"
            control={control}
            defaultValue="" // Default value for new climate
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
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
            defaultValue="" // Default value for new climate
            rules={{ required: "Minimum temperature is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
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
            defaultValue="" // Default value for new climate
            rules={{ required: "Maximum temperature is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
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
            defaultValue="" // Default value for new climate
            rules={{ required: "Minimum precipitation is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
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
            defaultValue="" // Default value for new climate
            rules={{ required: "Maximum precipitation is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
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
          Create Climate
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateClimate;
