import './PhotoGallery.css';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photo-gallery">
      <ul className="photo-list">
        {photos.map((photo, index) => (
          <li key={index} className="photo-item">
            <img src={photo.src} alt={`Foto ${index}`} className="photo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoGallery;