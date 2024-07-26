import React, { useState } from "react";
import "../Styles/gallery.css";
import NewsletterForm from "../Comp/NewsletterForm";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";

const Gallery = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleViewClick = (index) => {
    setActiveOverlay(index);
  };

  const handleCloseClick = () => {
    setActiveOverlay(null);
  };

  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
  ];

  return (
    <div>
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
                    X
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
      <NewsletterForm />
    </div>
  );
};

export default Gallery;
