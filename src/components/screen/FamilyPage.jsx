"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateFamily } from "@/app/api/Family"; // Updated import for family
import { useState } from "react";

const FamilyPage = ({ photo, family }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(family);

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { familyId, ...familyData } = data; // Updated variable name
      const updatedFamily = await updateFamily(familyId, {
        ...familyData,
        plantId: photo.plant.plantId,
      });
      setMessage("Family updated successfully!"); // Updated success message
      console.log(updatedFamily);
    } catch (error) {
      console.error("Error updating family:", error); // Updated error message
      setMessage("Error updating family. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Family Image"} // Updated alt text
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
          <Label htmlFor="familyId">Family ID</Label> {/* Updated label */}
          <Controller
            disabled
            name="familyId" // Updated name
            control={control}
            defaultValue={family.familyId || 4} // Set default value to 4
            rules={{ required: "Family ID is required" }} // Updated validation message
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.familyId && ( // Updated error handling
                  <p className="text-red-500">{errors.familyId.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Family Name</Label>{" "}
          {/* New label for family name */}
          <Controller
            name="name" // New name for family name
            control={control}
            defaultValue={family.name || "Default Family"} // Set default value to "Default Family"
            rules={{ required: "Family Name is required" }} // Validation message
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
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

export default FamilyPage; // Updated export
