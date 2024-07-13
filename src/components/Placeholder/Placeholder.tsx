import "./style.scss";
import { PlaceholderProps } from "./types";

const Placeholder = ({ hasText }: PlaceholderProps) => {
  return (
    <div className="placeholder">
      {hasText ? <p className="placeholder-text">Carregando...</p> : null}
    </div>
  );
};

export default Placeholder;
