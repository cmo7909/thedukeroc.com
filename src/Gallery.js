import React from 'react';
import './Gallery.css';
import image1 from './/Images/TheDukeGold.png';

function GalleryImage({ src, alt }) {
  return (
    <div className="gallery-image">
      <img src={src} alt={alt} />
    </div>
  );
}

function Gallery() {
  const images = [
    { src: image1, alt: 'Image 1' }

  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default Gallery;
