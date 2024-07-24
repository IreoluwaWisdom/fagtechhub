import React, { useState } from "react";
import "../Styles/gallery.css";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";

const Gallery = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleViewClick = (index) => {
    setActiveOverlay(index);
  };

  const handleCloseClick = () => {
    setActiveOverlay(null);
  };

  const images = [pic1, pic2, pic3, pic4, pic5, pic6];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img
            className="gallery-image"
            src={src}
            alt={`Gallery item ${index + 1}`}
            onClick={() => handleViewClick(index)}
          />
          {activeOverlay === index && (
            <div className="overlay">
              <div className="overlay-inner">
                <button className="close" onClick={handleCloseClick}>
                  Close X
                </button>
                <img
                  className="overlay-image"
                  src={src}
                  alt={`Overlay item ${index + 1}`}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
