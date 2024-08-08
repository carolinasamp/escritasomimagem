import { memo } from "react";
import "./style.scss";
import { ListPersonProps } from "./types";
import LazyLoadImage from "../../components/LazyLoadImage";

const ListPerson = ({ list, className }: ListPersonProps) => {
  return (
    <div className="list-person-container">
      {list.map((person, index) => {
        const { name, presentation, details, caption, picture } = person;

        return (
          <div key={index} className={`person ${className || ""}`}>
            {picture && (
              <div>
                <LazyLoadImage src={picture} alt={`Foto de ${name}`} />
                {caption && (
                  <span className="person-image-caption">{caption}</span>
                )}
              </div>
            )}
            <figcaption
              className={`person-details ${!picture ? "no-image" : ""}`}
            >
              <h2 className="person-name">{name}</h2>
              {presentation && (
                <small className="person-presentation">{presentation}</small>
              )}
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
