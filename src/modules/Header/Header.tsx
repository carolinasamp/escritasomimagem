import { memo } from "react";
import "./style.scss";
import { SocialMediaList } from "../../infos/social-medias.list";
import ImagePlaceholder from "../../components/ImagePlaceholder";

const Header = () => {
  return (
    <header className="header">
      <ul className="social-media">
        {SocialMediaList.map((socialMedia, index) => {
          const { social, link, icon, text } = socialMedia;

          return (
            <li key={index} className="social-media-content">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ImagePlaceholder
                  className="social-media-lazy"
                  key={index}
                  src={icon}
                  alt={social}
                />
                <p>{text}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default memo(Header);
