import React, { useEffect, useRef, useState } from "react";
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
  muted?: boolean;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({
  src,
  className = "",
  height = 200,
  offset = 100,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const refVideo = useRef<HTMLVideoElement>(null);

  return (
    <LazyLoad
      {...{ height, offset, className }}
      once
      placeholder={<Placeholder />}
    >
      {!isLoaded && <Placeholder />}
      <video
        {...{ autoPlay, loop, controls, muted }}
        ref={refVideo}
        preload="auto"
        className="lazy-load-video"
        onCanPlay={() => setIsLoaded(true)}
        disablePictureInPicture={false}
        style={{ display: isLoaded ? "block" : "none" }}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </LazyLoad>
  );
};

export default LazyLoadVideo;
