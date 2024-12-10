"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { updatePhoto } from "@/app/api/Photo"; // Updated import to match the context
import { useState } from "react";

const PhotoPage = ({ photo }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await updatePhoto(photo.photoId, {
        ...data,
        plantId: photo.plant.plantId,
      });
      setMessage("Photo updated successfully!");
    } catch (error) {
      console.error("Error updating photo:", error);
      setMessage("Error updating photo. Please try again.");
    }
  };

  return (
    <div className="mt-7">
      <div className="max-w-[600px] m-auto mb-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="flex gap-10 items-center">
          <Image
            src={photo?.url || "/placeholder.jpg"}
            alt={"Photo Image"}
            width={400}
            height={300}
            className="object-cover w-60 h-60 rounded-lg"
            style={{ aspectRatio: "400/300" }}
          />
          <div className="mt-2 ">
            <h2 className="text-xl font-semibold text-gray-800">
              {photo?.plant?.commonName}
            </h2>
            <p className="text-gray-600">{photo?.plant?.description}</p>
            {/* Added author display */}
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 max-w-[600px] m-auto"
      >
        <div className="mb-4">
          <Label htmlFor="photoId">Photo ID</Label>
          <Controller
            disabled
            name="photoId"
            control={control}
            defaultValue={photo.photoId}
            rules={{ required: "Photo ID is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="border rounded p-2 w-full" />
                {errors.photoId && (
                  <p className="text-red-500">{errors.photoId.message}</p>
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
            defaultValue={photo.author} // Use author from photo
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
          <Label htmlFor="url">URL</Label>
          <Controller
            name="url"
            control={control}
            defaultValue={photo.url} // Use URL from photo
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
    </div>
  );
};

export default PhotoPage;
