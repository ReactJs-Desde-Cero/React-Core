import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./Slides.css";

const Slides = ({ images, interval }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      if (active < images.length - 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }, interval);

    return () => {
      clearInterval(tick);
    };
  }, [active, images.length, interval]);

  return (
    <div className="Slide">
      <div className="Slide_Container">
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.title}
            key={image.title}
            className={
              index === active
                ? "Slide_Container_Img animaShow"
                : "Slide_Container_Img animaHide"
            }
          />
        ))}
        <div className="Slide_Container_Title">{images[active].title}</div>
      </div>
    </div>
  );
};

Slides.defaultProps = {
  interval: 1000,
  images: [],
};

Slides.propTypes = {
  interval: propTypes.number,
  images: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};

export default Slides;
