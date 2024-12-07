import PhotoCard from "@/components/common/photo-card";

const MainPage = ({ photos }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-7">Plant guide!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
        {photos.map((photo, index) => (
          <PhotoCard key={photo.photoId} photo={photo} index={index} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
