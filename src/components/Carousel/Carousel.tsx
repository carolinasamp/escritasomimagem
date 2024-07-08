import { useState, useEffect } from "react";
import CarouselItem from "../CarouselItem";
import { CarouselProps } from "./types";
import "./styles.scss";

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <CarouselItem
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
