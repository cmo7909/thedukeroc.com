import React from 'react';
import './Gallery.css';
import image1 from './Gallery/Gallery1.jpg';
import image2 from './Gallery/Gallery2.jpg';
import image3 from './Gallery/Gallery3.jpg';
import image4 from './Gallery/Gallery4.jpg';
import image5 from './Gallery/Gallery5.jpg';
import image6 from './Gallery/Gallery6.jpg';
import image7 from './Gallery/Gallery7.jpg';
import image8 from './Gallery/Gallery8.jpg';
import image9 from './Gallery/Gallery9.jpg';
import image10 from './Gallery/Gallery10.jpg';
import image11 from './Gallery/Gallery11.jpg';
import image12 from './Gallery/Gallery12.jpg';
import image13 from './Gallery/Gallery13.jpg';
import image14 from './Gallery/Gallery14.jpg';
import image15 from './Gallery/Gallery15.jpg';
import image16 from './Gallery/Gallery16.jpg';
import image17 from './Gallery/Gallery17.jpg';
import image18 from './Gallery/Gallery18.jpg';
import image19 from './Gallery/Gallery19.jpg';
import image20 from './Gallery/Gallery20.jpg';

function GalleryImage({ src, alt }) {
  return (
    <div className="gallery-image">
      <img src={src} alt={alt} />
    </div>
  );
}

function Gallery() {
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    { src: image7, alt: 'Image 7' },
    { src: image8, alt: 'Image 8' },
    { src: image9, alt: 'Image 9' },
    { src: image10, alt: 'Image 10' },
    { src: image11, alt: 'Image 11' },
    { src: image12, alt: 'Image 12' },
    { src: image13, alt: 'Image 13' },
    { src: image14, alt: 'Image 14' },
    { src: image15, alt: 'Image 15' },
    { src: image16, alt: 'Image 16' },
    { src: image19, alt: 'Image 19' },
    { src: image17, alt: 'Image 17' },
    { src: image18, alt: 'Image 18' },
    { src: image20, alt: 'Image 20' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>

      {/* Photographer Credit */}
      <div className="photographer-credit">
        <p>
          Photographs by {''}
          <a
            href="https://johnschlia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            [John Schlia]
          </a>
        </p>
      </div>
    </div>
  );
}

export default Gallery;
