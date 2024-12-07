"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateOrigin } from "@/app/api/Origin";
import { useState } from "react";

const OriginPage = ({ photo, origin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { originId, ...originData } = data;
      await updateOrigin(originId, {
        ...originData,
        plantId: photo.plant.plantId,
      });
      setMessage("Origin updated successfully!");
    } catch (error) {
      console.error("Error updating origin:", error);
      setMessage("Error updating origin. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Origin Image"}
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
          <Label htmlFor="originId">Origin ID</Label>
          <Controller
            disabled
            name="originId"
            control={control}
            defaultValue={origin.originId}
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
            disabled
            name="countryId"
            control={control}
            defaultValue={origin.countryId || 3}
            rules={{ required: "Country ID is required" }}
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
          <Label htmlFor="years">Years</Label>
          <Controller
            name="years"
            control={control}
            defaultValue={origin.years || 1811}
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
      <div className="max-w-[600px] m-auto">
        <Button className="mt-2 mb-7" variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default OriginPage;
