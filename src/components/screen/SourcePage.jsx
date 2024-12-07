"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updateSource } from "@/app/api/Source";
import { useState } from "react";

const SourcePage = ({ photo, source }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { sourceId, ...sourceData } = data;
      await updateSource(sourceId, {
        ...sourceData,
        plantId: photo.plant.plantId,
      });
      setMessage("Source updated successfully!");
    } catch (error) {
      console.error("Error updating source:", error);
      setMessage("Error updating source. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo.url || "/placeholder.jpg"}
            alt={photo.plant.commonName || "Source Image"}
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
          <Label htmlFor="sourceId">Source ID</Label>
          <Controller
            disabled
            name="sourceId"
            control={control}
            defaultValue={source.sourceId} // Use sourceId from source or default to 3
            rules={{ required: "Source ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.sourceId && (
                  <p className="text-red-500">{errors.sourceId.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="author">Author</Label>
          <Controller
            name="author"
            control={control}
            defaultValue={source.author} // Use author from source or default to "Prof. Adam Smith"
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
            defaultValue={source.title} // Use title from source or default to "Medicinal Plants and Their Uses"
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
            defaultValue={source.url} // Use url from source or default to "http://medicinalplants.org"
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

export default SourcePage;
