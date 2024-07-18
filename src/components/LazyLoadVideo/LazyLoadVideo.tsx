import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import "./style.scss";
import Placeholder from "../Placeholder";

interface LazyLoadVideoProps {
  src: string;
  className?: string;
  height?: number;
  offset?: number;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({
  src,
  className = "",
  height = 200,
  offset = 100,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad
      {...{ height, offset, className }}
      once
      placeholder={<Placeholder />}
    >
      {!loaded && <Placeholder />}
      <video
        className="lazy-load-video"
        onLoad={() => setLoaded(true)}
        controls
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </LazyLoad>
  );
};

export default LazyLoadVideo;
