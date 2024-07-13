import { useEffect } from "react";
import "./style.scss";
import Tabs from "../Tabs";
import SocialMedia from "../SocialMedia";
import { SideMenuProps } from "./types";

const SideMenu = ({ isMenuOpen, toggleMenu }: SideMenuProps) => {
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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
          <Tabs className="side-menu-tabs" hasArrow />
          <SocialMedia className="side-menu-social-menu" />
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
