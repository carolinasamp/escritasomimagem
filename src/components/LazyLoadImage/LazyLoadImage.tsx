import { useState } from "react";
import LazyLoad from "react-lazyload";
import { LazyLoadImageProps } from "./types";
import Placeholder from "../Placeholder";
import "./style.scss";

const LazyLoadImage = ({ src, alt, className }: LazyLoadImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad placeholder={<Placeholder />} once className={className || ""}>
      {!loaded && <Placeholder />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`image ${loaded ? "loaded" : "loading"}`}
      />
    </LazyLoad>
  );
};

export default LazyLoadImage;
