import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import "./style.scss";
import Placeholder from "../Placeholder";

interface LazyLoadVideoProps {
  src: string;
  className?: string;
  height?: number;
  offset?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({
  src,
  className = "",
  height = 200,
  offset = 100,
  controls = true,
  autoPlay = false,
  loop = false,
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
        {...{ autoPlay, loop, controls }}
        playsInline
        className="lazy-load-video"
        muted={false}
        onLoad={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </LazyLoad>
  );
};

export default LazyLoadVideo;
