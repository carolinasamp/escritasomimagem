import { memo } from "react";
import "./style.scss";
import { ListPersonProps } from "./types";
import LazyLoadImage from "../../components/LazyLoadImage";

const ListPerson = ({ list, className }: ListPersonProps) => {
  return (
    <div className="list-person-container">
      {list.map((person, index) => {
        const { name, presentation, details, picture } = person;

        return (
          <div key={index} className={`person ${className || ""}`}>
            {picture && <LazyLoadImage src={picture} alt={`Foto de ${name}`} />}
            <figcaption className="person-details">
              <h2 className="person-name">{name}</h2>
              <small className="person-presentation">{presentation}</small>
              {details && (
                <p className="person-details">
                  <span
                    className="person-details-content"
                    dangerouslySetInnerHTML={{ __html: details }}
                  />
                </p>
              )}
            </figcaption>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ListPerson);
