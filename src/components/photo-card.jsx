const PhotoCard = ({ photo, index }) => (
  <div className="relative group overflow-hidden rounded-lg">
    <a className="absolute inset-0 z-10" href="#">
      <span className="sr-only">View</span>
    </a>
    <img
      src={photo.url || "/placeholder.svg"}
      alt={`Image ${index + 1}`}
      width="400"
      height="300"
      className="object-cover w-full h-60 transition-opacity duration-300 group-hover:opacity-80"
      style={{ aspectRatio: "400/300", objectFit: "cover" }}
    />
    <div className="bg-white p-4 dark:bg-gray-950">
      <h3 className="font-semibold text-lg md:text-xl">
        {photo.plant.commonName || `Image ${index + 1}`}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {photo.author || `Description for Image ${index + 1}`}
      </p>
    </div>
  </div>
);

export default PhotoCard;
