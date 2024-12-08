"use client";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addSource } from "@/app/api/Source"; // Updated import for creating a source
import { useState } from "react";

const CreateSource = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await addSource(data); // Call addSource to create a new source
      setMessage("Source created successfully!");
    } catch (error) {
      console.error("Error creating source:", error);
      setMessage("Error creating source. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <h2 className="text-xl font-semibold text-center">Create New Source</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="author">Author</Label>
          <Controller
            name="author"
            control={control}
            defaultValue="" // Default value for new source
            rules={{ required: "Author is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.author && (
                  <p className="text-red-500">{errors.author.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Controller
            name="title"
            control={control}
            defaultValue="" // Default value for new source
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="url">URL</Label>
          <Controller
            name="url"
            control={control}
            defaultValue="" // Default value for new source
            rules={{ required: "URL is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.url && (
                  <p className="text-red-500">{errors.url.message}</p>
                )}
              </>
            )}
          />
        </div>

        <Button type="submit" variant="default">
          Create Source
        </Button>
      </form>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default CreateSource;
