import React from 'react';
import './Gallery.css';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
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



function Gallery() {
  const images = [
    { src: image1, alt: 'Rochester Jazz Festival', width: 1920, height: 1080  },
    { src: image2, alt: 'The Duke Roc Drink', width: 1920, height: 1080  },
    { src: image3, alt: 'The Duke Roc Table Settings', width: 1920, height: 1080  },
    { src: image4, alt: 'The Duke Roc Table Settings', width: 1920, height: 1080  },
    { src: image5, alt: 'The Duke Roc', width: 1920, height: 1080  },
    { src: image6, alt: 'The Duke Roc', width: 1920, height: 1080  },
    { src: image7, alt: 'The Duke Roc Bar', width: 1920, height: 1080  },
    { src: image8, alt: 'The Duke Roc Bar', width: 1920, height: 1080  },
    { src: image9, alt: 'The Duke Roc Bar', width: 1920, height: 1080  },
    { src: image10, alt: 'The Duke Roc Table Settings', width: 1920, height: 1080  },
    { src: image11, alt: 'The Duke Roc Floral', width: 1920, height: 1080  },
    { src: image12, alt: 'The Duke Roc Floral', width: 1920, height: 1080  },
    { src: image13, alt: 'The Duke Roc Table Settings', width: 1920, height: 1080  },
    { src: image14, alt: 'The Duke Roc Table Settings', width: 1920, height: 1080  },
    { src: image15, alt: 'The Duke Roc Events', width: 1920, height: 1080  },
    { src: image16, alt: 'The Duke Roc Events', width: 1920, height: 1080  },
    { src: image19, alt: 'The Duke Roc Events', width: 1920, height: 1080  },
    { src: image17, alt: 'The Duke Roc Events', width: 1920, height: 1080  },
    { src: image18, alt: 'The Duke Roc Wedding Reception', width: 1920, height: 1080  },
    { src: image20, alt: 'The Duke Roc', width: 1920, height: 1080  },
  ];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-image" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
        slides={images}
        open={open}
        index={currentIndex}
        close={() => setOpen(false)}
        />
      )}

      {/* Photographer Credit */}
      <div className="photographer-credit">
        <p>
          Photographs by{' '}
          <a
            href="https://johnschlia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Schlia
          </a>
        </p>
      </div>
    </div>
  );
}

export default Gallery;