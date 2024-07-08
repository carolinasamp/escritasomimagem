import "./styles.scss";
import { CarouselItemProps } from "./types";

const CarouselItem = ({ image, title, description }: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      <img src={image} alt={title} className="carousel-image" />
      <div className="carousel-content">
        <h3 className="carousel-title">{title}</h3>
        <p className="carousel-description">{description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
