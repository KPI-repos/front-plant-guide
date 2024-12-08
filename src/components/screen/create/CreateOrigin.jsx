"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addOrigin } from "@/app/api/Origin"; // Updated import for creating an origin
import { useState } from "react";

const CreateOrigin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addOrigin(data); // Uncommented to call addOrigin with originData
      setMessage("Origin created successfully!"); // Updated success message
    } catch (error) {
      console.error("Error creating origin:", error); // Updated error message
      setMessage("Error creating origin. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Origin</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>
          <Controller
            name="plantId"
            control={control}
            defaultValue="" // Set default value to avoid uncontrolled to controlled input warning
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
          <Label htmlFor="countryId">Country ID</Label>
          <Controller
            name="countryId"
            control={control}
            defaultValue="" // Set default value to avoid uncontrolled to controlled input warning
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
            defaultValue="" // Set default value to avoid uncontrolled to controlled input warning
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
          Create Origin
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateOrigin;
