"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateFamilyPlant } from "@/app/api/FamilyPlant"; // Updated import for family plant
import { useState } from "react";

const FamilyPlantPage = ({ familyPlant }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(familyPlant);

  const onSubmit = async (data) => {
    try {
      const { familyPlantId, familyId, plantId, ...familyPlantData } = data; // Updated variable name
      const updatedFamilyPlant = await updateFamilyPlant(
        familyPlant.familyPlantId,
        {
          ...familyPlantData,
        }
      );
      setMessage("Family Plant updated successfully!"); // Updated success message
      console.log(updatedFamilyPlant);
    } catch (error) {
      console.error("Error updating family plant:", error); // Updated error message
      setMessage("Error updating family plant. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="familyPlantId">Family Plant ID</Label>{" "}
          {/* Updated label */}
          <Controller
            disabled
            name="familyPlantId" // Updated name
            control={control}
            defaultValue={familyPlant.familyPlantId || ""} // Set default value to 4
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.familyPlantId && ( // Updated error handling
                  <p className="text-red-500">{errors.familyPlantId.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="familyId">Family ID</Label>{" "}
          {/* New label for family ID */}
          <Controller
            name="familyId" // New name for family ID
            control={control}
            defaultValue={familyPlant.familyId || ""} // Set default value to 1
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
        <div className="mb-4">
          <Label htmlFor="plantId">Plant ID</Label>{" "}
          {/* New label for plant ID */}
          <Controller
            name="plantId" // New name for plant ID
            control={control}
            defaultValue={familyPlant.plantId || ""} // Set default value to 1
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

export default FamilyPlantPage; // Updated export
