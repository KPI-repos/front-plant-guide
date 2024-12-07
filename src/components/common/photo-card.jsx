"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

const popoverRoutes = [
  { name: "About", url: "/plant" },
  { name: "Climate", url: "/climate" },
  { name: "Country", url: "/country" },
  { name: "Family", url: "/family" },
  { name: "Origin", url: "/origin" },
  { name: "Source", url: "/source" },
  { name: "TypeSeason", url: "/type-season" },
  { name: "Photo", url: "/photo" },
];

const PhotoCard = ({ photo, index }) => {
  const router = useRouter();

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Popover>
        <PopoverTrigger className="absolute inset-0 z-10 cursor-pointer">
          <span className="sr-only">View</span>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-4 rounded-lg shadow-lg">
          {popoverRoutes.map((route) => (
            <Button
              key={route.name}
              variant="link"
              onClick={() => router.push(`${route.url}/${photo.plantId}`)}
            >
              {route.name}
            </Button>
          ))}
        </PopoverContent>
        <Image
          src={
            photo.url && photo.url.includes("i.pinimg.com")
              ? photo.url
              : "/placeholder.jpg"
          }
          alt={`Image ${index + 1}`}
          width={400}
          height={300}
          className="object-cover w-full h-60 transition-opacity duration-300 group-hover:opacity-80"
          style={{ aspectRatio: "400/300" }}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-lg md:text-xl">
            {photo.plant.commonName || `Image ${index + 1}`}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {photo.author || `Description for Image ${index + 1}`}
          </p>
        </div>
      </Popover>
    </div>
  );
};

export default PhotoCard;
