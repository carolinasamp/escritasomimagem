import { memo } from "react";
import ImageWithLoader from "../../components/LazyLoadImage";
import "./style.scss";
import { apoiadores, organizadores } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column organizers">
        <h3>Organizadores</h3>
        <ImageWithLoader src={organizadores} alt="organizadores" />
      </div>
      <div className="footer-column supporters">
        <h3>Apoiadores</h3>
        <ImageWithLoader src={apoiadores} alt="apoiadores" />
      </div>
      <div className="footer-webdesigner">
        <p>
          Desenvolvidor por{" "}
          <a href="https://github.com/carolinasamp" target="_blank">
            Carolina Sampaio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
