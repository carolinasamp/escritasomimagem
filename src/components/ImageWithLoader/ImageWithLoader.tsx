import { useState } from "react";
import LazyLoad from "react-lazyload";
import { ImageWithLoaderProps } from "./types";
import Placeholder from "../Placeholder";
import "./style.scss";

const ImageWithLoader = ({ src, alt, className }: ImageWithLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  console.log(loaded);
  return (
    <LazyLoad
      className={`lazyload-wrapper ${className || ""}`}
      placeholder={<Placeholder />}
    >
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

export default ImageWithLoader;
