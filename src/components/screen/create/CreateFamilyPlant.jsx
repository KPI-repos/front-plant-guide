"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addFamilyPlant } from "@/app/api/FamilyPlant"; // Updated import for creating a family plant
import { useState } from "react";

const CreateFamilyPlant = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { familyPlantId, plantId, familyId, ...familyPlantData } = data; // Updated variable names
      await addFamilyPlant({ ...familyPlantData, plantId, familyId }); // Call addFamilyPlant with familyPlantData, plantId, and familyId
      setMessage("Family Plant created successfully!"); // Updated success message
    } catch (error) {
      console.error("Error creating family plant:", error); // Updated error message
      setMessage("Error creating family plant. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">
        Create New Family Plant
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
            defaultValue="" // Default value for plant ID
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
          <Label htmlFor="familyId">Family ID</Label>
          <Controller
            name="familyId"
            control={control}
            defaultValue="" // Default value for family ID
            rules={{ required: "Family ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.familyId && (
                  <p className="text-red-500">{errors.familyId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <Button type="submit" variant="default">
          Create Family Plant
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateFamilyPlant;
