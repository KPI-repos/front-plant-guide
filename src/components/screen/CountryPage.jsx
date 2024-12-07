"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateCountry } from "@/app/api/Country"; // Updated import for country
import { useState } from "react";

const CountryPage = ({ photo, country }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  console.log(country);

  const onSubmit = async (data) => {
    try {
      const { countryId, ...countryData } = data; // Updated variable name
      const updatedCountry = await updateCountry(countryId, {
        ...countryData,
        plantId: photo.plant.plantId,
      });
      setMessage("Country updated successfully!"); // Updated success message
      console.log(updatedCountry);
    } catch (error) {
      console.error("Error updating country:", error); // Updated error message
      setMessage("Error updating country. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Country Image"} // Updated alt text
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
          <Label htmlFor="countryId">Country ID</Label> {/* Updated label */}
          <Controller
            disabled
            name="countryId" // Updated name
            control={control}
            defaultValue={country.countryId || 4} // Set default value to 4
            rules={{ required: "Country ID is required" }} // Updated validation message
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.countryId && ( // Updated error handling
                  <p className="text-red-500">{errors.countryId.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Country Name</Label>{" "}
          {/* New label for country name */}
          <Controller
            name="name" // New name for country name
            control={control}
            defaultValue={country.name || "Italy"} // Set default value to "Italy"
            rules={{ required: "Country Name is required" }} // Validation message
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

export default CountryPage; // Updated export
