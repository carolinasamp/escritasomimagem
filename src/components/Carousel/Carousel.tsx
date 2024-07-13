import { useState, useEffect } from "react";
import { CarouselProps } from "./types";
import "./style.scss";
import ImageWithLoader from "../ImageWithLoader";

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => {
          const { image, title } = slide;

          return (
            <ImageWithLoader
              key={index}
              src={image}
              alt={title}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            />
          );
        })}
      </div>
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNextClick}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
