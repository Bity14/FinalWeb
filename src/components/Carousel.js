import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Para los estilos

const ImageCarousel = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/carousel/carousel1.jpeg',
    process.env.PUBLIC_URL + '/images/carousel/carousel2.jpeg',
    process.env.PUBLIC_URL + '/images/carousel/carousel3.jpeg',
    process.env.PUBLIC_URL + '/images/carousel/carousel4.jpeg',
    process.env.PUBLIC_URL + '/images/carousel/carousel5.jpeg',
    process.env.PUBLIC_URL + '/images/carousel/carousel6.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides ${index === currentIndex ? 'active' : ''}`}
        >
          {index === currentIndex && (
            <img src={image} alt={`Slide ${index + 1}`} className="message-image" />
          )}
        </div>
      ))}

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
