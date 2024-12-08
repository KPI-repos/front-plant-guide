"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateCountry } from "@/app/api/Country"; // Updated import for country
import { useState } from "react";

const CountryPage = ({ country }) => {
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
      const updatedCountry = await updateCountry(country.countryId, {
        ...countryData,
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
    </div>
  );
};

export default CountryPage; // Updated export
