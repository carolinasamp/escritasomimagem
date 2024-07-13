import { NavLink } from "react-router-dom";
import "./style.scss";
import RouteInformation from "../../routes";
import { TabsProps } from "./types";
import { ArrowIcon } from "../../assets";

const Tabs = ({ className, hasArrow }: TabsProps) => {
  return (
    <div className={`tabs ${className || ""}`}>
      <nav className="tab-header">
        {RouteInformation.map((route, index) => {
          const { title, url } = route;
          return (
            <NavLink key={index} to={url} className="tab-link" title={title}>
              {title}
              {hasArrow && <ArrowIcon />}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default Tabs;
