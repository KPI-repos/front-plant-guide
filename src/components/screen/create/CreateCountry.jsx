"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addCountry } from "@/app/api/Country"; // Updated import for creating a country
import { useState } from "react";

const CreateCountry = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { countryId, ...countryData } = data; // Updated variable name
      await addCountry(countryData); // Call addCountry with countryData
      setMessage("Country created successfully!"); // Updated success message
    } catch (error) {
      console.error("Error creating country:", error); // Updated error message
      setMessage("Error creating country. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Country</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue="" // Default value for new country
            rules={{ required: "Name is required" }}
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
          Create Country
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateCountry;
