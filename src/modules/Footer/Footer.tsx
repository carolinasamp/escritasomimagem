import { memo } from "react";
import { organizers, supporters } from "./mapper";
import "./style.scss";
import LazyLoad from "react-lazyload";
import ImagePlaceholder from "../../components/ImagePlaceholder";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-column">
          <h3>Organizadores</h3>
          <ul>
            {organizers.map((organizer, index) => {
              const { src, alt } = organizer;

              return (
                <li key={index}>
                  <ImagePlaceholder {...{ src, alt }} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Apoiadores</h3>
          <ul>
            {supporters.map((supporter, index) => {
              const { src, alt } = supporter;

              return (
                <li key={index}>
                  <ImagePlaceholder key={index} {...{ src, alt }} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
