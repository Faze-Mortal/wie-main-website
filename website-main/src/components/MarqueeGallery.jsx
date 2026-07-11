import React from "react";
import "./MarqueeGallery.css";

const MarqueeGalleryRow = ({ images, reverse }) => {
  // Duplicate for seamless loop
  const loopImages = [...images, ...images];
  
  return (
    <div className={`marquee-row ${reverse ? "reverse" : ""}`}>
      <div className="marquee-track">
        {loopImages.map((img, i) => (
          <div key={i} className="marquee-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeGallery = ({ images }) => {
  if (!images || images.length === 0) return null;
  
  const half = Math.ceil(images.length / 2);
  const topImages = images.slice(0, half);
  const bottomImages = images.slice(half);

  return (
    <div className="marquee-container">
      <MarqueeGalleryRow images={topImages} reverse={false} />
      {bottomImages.length > 0 && (
        <MarqueeGalleryRow images={bottomImages} reverse={true} />
      )}
    </div>
  );
};

export default MarqueeGallery;
