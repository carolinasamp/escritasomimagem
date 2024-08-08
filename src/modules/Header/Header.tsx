import { memo, useState, useRef, useEffect } from "react";
import "./style.scss";
import SocialMedia from "../../components/SocialMedia";
import { HeaderProps } from "./types";
import { ViewportEnum } from "../../context/Viewport.context";
import {
  AudioOffIcon,
  AudioOnIcon,
  AudioPauseIcon,
  AudioPlayIcon,
  imageUrls,
  SideMenuIcon,
} from "../../assets";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Link } from "react-router-dom";
import { RoutesURL } from "../../routes";

export interface AudioSettingsProps {
  muted: boolean;
  play: boolean;
}

const Header = ({ viewport }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSettings, setAudioSettings] = useState<AudioSettingsProps>({
    muted: false,
    play: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const manageAudioPlayback = async () => {
      if (audioRef.current) {
        if (audioSettings.play) {
          try {
            await audioRef.current.play();
          } catch (error) {
            console.error("Failed to play audio", error);
          }
        } else {
          audioRef.current.pause();
        }
      }
    };

    manageAudioPlayback();
  }, [audioSettings.play, audioSettings.muted]);

  const handlePlay = () => {
    setAudioSettings((prev) => ({ ...prev, play: true }));
  };

  const handlePause = () => {
    setAudioSettings((prev) => ({ ...prev, play: false }));
  };

  return (
    <header className="header">
      {viewport === ViewportEnum.DESKTOP ? (
        <div className="header-content">
          <Link to={RoutesURL.HOME} className="header-logo">
            <img src={imageUrls.banner_logo} alt="Logo" />
          </Link>
          <SocialMedia className="header-social-media" />
          <div className="header-button header-button-desktop">
            <button
              onClick={() =>
                setAudioSettings((prev) => ({
                  ...prev,
                  muted: !prev.muted,
                }))
              }
            >
              {audioSettings.muted ? <AudioOffIcon /> : <AudioOnIcon />}
            </button>

            {audioSettings.play ? (
              <button onClick={handlePause}>
                <AudioPauseIcon />
              </button>
            ) : (
              <button onClick={handlePlay}>
                <AudioPlayIcon />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="header-side-menu">
          <div className="header-button header-button-menu">
            <button onClick={toggleMenu}>
              <SideMenuIcon />
            </button>
            <SideMenu {...{ isMenuOpen, toggleMenu }} />
          </div>
          <Link to={RoutesURL.HOME} className="header-logo">
            <img src={imageUrls.banner_logo} alt="Logo" />
          </Link>
          <div className="header-button">
            <button
              onClick={() =>
                setAudioSettings((prev) => ({
                  ...prev,
                  muted: !prev.muted,
                }))
              }
            >
              {audioSettings.muted ? <AudioOffIcon /> : <AudioOnIcon />}
            </button>

            {audioSettings.play ? (
              <button onClick={handlePause}>
                <AudioPauseIcon />
              </button>
            ) : (
              <button onClick={handlePlay}>
                <AudioPlayIcon />
              </button>
            )}
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        loop
        style={{ display: "none" }}
        muted={audioSettings.muted}
      >
        <source src={imageUrls.BackgroundSound} type="audio/mpeg" />
      </audio>
    </header>
  );
};

export default memo(Header);
