"use client";
import { useEffect, useState } from "react";
import { getAllPlant } from "@/app/api/Plant";
import { getAllPhoto } from "./api/Photo";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import PhotoCard from "@/components/photo-card"; // Importing the new PhotoCard component

export default function Home() {
  const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   const fetchPlants = async () => {
  //     const fetchedPlants = await getAllPlant();
  //     setPlants(fetchedPlants);
  //   };
  //   fetchPlants();
  // }, []);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = await getAllPhoto();
      console.log(fetchedPhotos);
      setPhotos(fetchedPhotos);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
        {photos.map((photo, index) => (
          <PhotoCard key={photo.photoId} photo={photo} index={index} />
        ))}
      </div>
    </div>
  );
}
