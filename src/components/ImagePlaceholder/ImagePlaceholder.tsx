import { useState } from "react";
import LazyLoad from "react-lazyload";
import { ImagePlaceholderProps } from "./types";

const ImagePlaceholder = ({ src, alt, className }: ImagePlaceholderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad
      once
      className={`lazyload-wrapper ${className}`}
      placeholder={<div className="placeholder"></div>}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`image ${loaded ? "loaded" : ""}`}
      />
    </LazyLoad>
  );
};

export default ImagePlaceholder;
