import { Link } from "react-router-dom";
import { NextPageBoxProps } from "./types";
import "./style.scss";

const NextPageBox = ({ url, title }: NextPageBoxProps) => {
  return (
    <aside className="next-page-box">
      <Link to={url} className="next-page-box-link">
        <div>
          <p>Próxima seção</p>
          <h4>{title}</h4>
        </div>
        <div className="next-page-box-arrow">&#10095;</div>
      </Link>
    </aside>
  );
};

export default NextPageBox;
