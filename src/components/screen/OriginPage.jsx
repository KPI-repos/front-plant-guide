"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateOrigin } from "@/app/api/Origin";
import { useState } from "react";

const OriginPage = ({ origin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(origin);

  const onSubmit = async (data) => {
    try {
      const { originId, countryId, plantId, ...originData } = data; // Added plantId to destructuring
      await updateOrigin(origin.originId, {
        ...originData,
        countryId: parseInt(countryId), // Convert countryId to integer
        plantId: parseInt(plantId), // Convert plantId to integer
      });
      setMessage("Origin updated successfully!");
    } catch (error) {
      console.error("Error updating origin:", error);
      setMessage("Error updating origin. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="originId">Origin ID</Label>
          <Controller
            disabled
            name="originId"
            control={control}
            defaultValue={origin.originId || ""}
            rules={{ required: "Origin ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.originId && (
                  <p className="text-red-500">{errors.originId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="countryId">Country ID</Label>
          <Controller
            name="countryId"
            control={control}
            defaultValue={origin.countryId || ""}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.countryId && (
                  <p className="text-red-500">{errors.countryId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>{" "}
          {/* New label for plant ID */}
          <Controller
            name="plantId" // New name for plant ID
            control={control}
            defaultValue={origin.plantId || ""} // Set default value for plant ID
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
          <Label htmlFor="years">Years</Label>
          <Controller
            name="years"
            control={control}
            defaultValue={origin.years}
            rules={{ required: "Years are required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.years && (
                  <p className="text-red-500">{errors.years.message}</p>
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

export default OriginPage;
