import { memo } from "react";
import ImageWithLoader from "../../components/LazyLoadImage";
import "./style.scss";
import { imageUrls } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column organizers">
        <h3>Organizadores</h3>
        <ImageWithLoader src={imageUrls.organizadores} alt="organizadores" />
      </div>
      <div className="footer-column supporters">
        <h3>Apoiadores</h3>
        <ImageWithLoader src={imageUrls.apoiadores} alt="apoiadores" />
      </div>
      <div className="footer-webdesigner">
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/carolinasamp" target="_blank">
            Carolina Sampaio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
