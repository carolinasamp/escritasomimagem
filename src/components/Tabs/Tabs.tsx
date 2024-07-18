import { NavLink, useLocation } from "react-router-dom";
import "./style.scss";
import RouteInformation from "../../routes";
import { TabsProps } from "./types";
import { ArrowTabs } from "../../assets";
import { useState, useEffect, useRef } from "react";

const Tabs = ({ className }: TabsProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;

    // Find the index of the active tab based on the current route
    const foundIndex = RouteInformation.findIndex(
      (route) =>
        route.url === currentPath ||
        route.subRoutes?.some((subRoute) => subRoute.url === currentPath)
    );

    // Update the active tab based on the route
    setActiveIndex(foundIndex !== -1 ? foundIndex : null);

    // Close the hover state if the current path is a sub-route
    if (
      RouteInformation.some((route) =>
        route.subRoutes?.some((subRoute) => subRoute.url === currentPath)
      )
    ) {
      setHoverIndex(null);
    }
  }, [location.pathname]);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const shouldShowSubTabs = (index: number) => {
    return hoverIndex === index;
  };

  return (
    <div className={`tabs ${className || ""}`} ref={tabsRef}>
      <nav className="tab-header">
        {RouteInformation.map((route, index) => {
          const { title, id, url, subRoutes } = route;

          const isActive = activeIndex === index;
          const showSubTabs = shouldShowSubTabs(index);

          return (
            <div
              key={id}
              {...{ id }}
              id={id}
              className={`tab-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {url ? (
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    `tab-link ${isActive ? "active" : ""}`
                  }
                  {...{ title }}
                >
                  {title}
                </NavLink>
              ) : (
                <div className="tab-link">{title}</div>
              )}
              {subRoutes && showSubTabs && (
                <div className={`sub-tabs ${showSubTabs ? "active" : ""}`}>
                  {subRoutes.map((subRoute, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subRoute.url}
                      className={({ isActive }) =>
                        `sub-tab-link ${isActive ? "active" : ""}`
                      }
                      title={subRoute.title}
                    >
                      {subRoute.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;
