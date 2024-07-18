import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./style.scss";
import SocialMedia from "../SocialMedia";
import { SideMenuProps } from "./types";
import RouteInformation from "../../routes";
import { ArrowTabs } from "../../assets";

const SideMenu = ({ isMenuOpen, toggleMenu }: SideMenuProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const handleItemClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <section className={`side-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-close">
          <button
            className="side-menu-close-button"
            onClick={toggleMenu}
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="side-menu-content">
          <nav className="side-menu-tabs">
            {RouteInformation.map((route, index) => {
              const { title, url, subRoutes } = route;

              if (title) {
                return (
                  <div
                    key={index}
                    className={`side-menu-item ${
                      location.pathname === url ? "active" : ""
                    }`}
                  >
                    <div
                      className="side-menu-item-header"
                      onClick={() => handleItemClick(index)}
                    >
                      {url ? (
                        <NavLink
                          to={url}
                          className={({ isActive }) =>
                            `side-menu-link ${isActive ? "active" : ""}`
                          }
                          title={title}
                          onClick={handleLinkClick}
                        >
                          {title}
                        </NavLink>
                      ) : (
                        <div className="side-menu-link">{title}</div>
                      )}
                      {subRoutes && (
                        <ArrowTabs
                          className={`arrow-icon ${
                            expandedIndex === index ? "expanded" : ""
                          }`}
                        />
                      )}
                    </div>
                    {subRoutes && (
                      <div
                        className={`side-menu-sub-tabs ${
                          expandedIndex === index ? "expanded" : ""
                        }`}
                      >
                        {subRoutes.map((subRoute, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subRoute.url}
                            className={({ isActive }) =>
                              `side-menu-sub-link ${isActive ? "active" : ""}`
                            }
                            title={subRoute.title}
                            onClick={handleLinkClick}
                          >
                            {subRoute.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </nav>
          <SocialMedia className="side-menu-social-menu" />
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
