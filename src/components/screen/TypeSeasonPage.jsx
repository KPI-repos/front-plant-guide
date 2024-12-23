"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateTypeSeason } from "@/app/api/TypeSeason";
import { useState } from "react";

const TypeSeasonPage = ({ typeSeason }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { typeSeasonId, ...typeSeasonData } = data;
      await updateTypeSeason(typeSeason.typeSeasonId, {
        ...typeSeasonData,
      });
      setMessage("Type Season updated successfully!");
    } catch (error) {
      console.error("Error updating type season:", error);
      setMessage("Error updating type season. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="typeSeasonId">Type Season ID</Label>
          <Controller
            name="typeSeasonId"
            disabled
            control={control}
            defaultValue={typeSeason.typeSeasonId}
            rules={{ required: "Type Season ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.typeSeasonId && (
                  <p className="text-red-500">{errors.typeSeasonId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="name">Type Season Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue={typeSeason.name}
            rules={{ required: "Type Season Name is required" }}
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

export default TypeSeasonPage;
