"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addTypeSeason } from "@/app/api/TypeSeason"; // Updated import for creating a type season
import { useState } from "react";

const CreateTypeSeason = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addTypeSeason(data); // Call addTypeSeason to create a new type season
      setMessage("Type season created successfully!");
    } catch (error) {
      console.error("Error creating type season:", error);
      setMessage("Error creating type season. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">
        Create New Type Season
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue="" // Default value for new type season
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
          Create Type Season
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateTypeSeason;
