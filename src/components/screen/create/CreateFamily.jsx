"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addFamily } from "@/app/api/Family"; // Updated import for creating a family
import { useState } from "react";

const CreateFamily = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { familyId, ...familyData } = data; // Updated variable name
      await addFamily(familyData); // Call addFamily with familyData
      setMessage("Family created successfully!"); // Updated success message
    } catch (error) {
      console.error("Error creating family:", error); // Updated error message
      setMessage("Error creating family. Please try again."); // Updated error message
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Family</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="name">Family Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue="" // Default value for new family
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
          Create Family
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateFamily;
