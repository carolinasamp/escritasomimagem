import { memo } from "react";
import { SocialMediaList } from "../../infos/social-medias.list";
import ImageWithLoader from "../LazyLoadImage";
import { SocialMediaProps } from "./types";
import "./style.scss";

const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <ul className={`social-media ${className || ""}`}>
      {SocialMediaList.map((socialMedia, index) => {
        const { social, link, icon, text } = socialMedia;

        return (
          <li key={index} className="social-media-content">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ImageWithLoader key={index} src={icon} alt={social} />
              <p>{text}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(SocialMedia);
