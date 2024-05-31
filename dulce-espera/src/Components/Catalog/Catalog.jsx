import "./PhotoGallery.css"
const PhotoGallery = ({ photos, onFilterChange }) => {
  return (
    <div className="photo-gallery">
      <FilterPhotos photos={photos} filterByCategory={onFilterChange} />
      <ul className="photo-list">
        {photos.filter(photo => photo.category === categoryFilter).map((photo, index) => (
          <li key={index} className="photo-item">
            <img src={photo.src} alt={`Foto ${index}`} className="photo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoGallery