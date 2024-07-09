import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./style.scss";
import RouteInformation from "../../routes";

const Tabs = () => {
  return (
    <div className="tabs">
      <nav className="tab-header">
        {RouteInformation.map((route, index) => {
          const { title, url } = route;
          return (
            <NavLink key={index} to={url} className="tab-link" title={title}>
              {title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default Tabs;
