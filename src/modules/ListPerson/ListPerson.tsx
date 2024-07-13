import { memo } from "react";
import "./style.scss";
import { ListPersonProps } from "./types";
import ImageWithLoader from "../../components/ImageWithLoader";

const ListPerson = ({ list }: ListPersonProps) => {
  return (
    <section className="list-person-container">
      {list.map((person, index) => {
        const { name, presentation, picture } = person;

        return (
          <figure key={index} className="person">
            <ImageWithLoader
              className="person-lazy-load"
              src={picture}
              alt={`Foto de ${name}`}
            />
            <figcaption className="person-details">
              <h2 className="person-name">{name}</h2>
              <p className="person-presentation">{presentation}</p>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default memo(ListPerson);
