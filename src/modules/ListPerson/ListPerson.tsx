import { memo } from "react";
import "./style.scss";
import { ListPersonProps } from "./types";
import ImagePlaceholder from "../../components/ImagePlaceholder";

const ListPerson = ({ list }: ListPersonProps) => {
  return (
    <ul className="list-person-container">
      {list.map((person, index) => {
        const { name, presentation, picture } = person;

        return (
          <li className="person" key={index}>
            <figure>
              <ImagePlaceholder
                className="img"
                src={picture}
                alt={`Foto de ${name}`}
              />
              <figcaption className="person-details">
                <h2 className="person-name">{name}</h2>
                <p className="person-presentation">{presentation}</p>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(ListPerson);
