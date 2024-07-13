import { memo, useState } from "react";
import "./style.scss";
import SocialMedia from "../../components/SocialMedia";
import { HeaderProps } from "./types";
import { ViewportEnum } from "../../context/Viewport.context";
import { SideMenuIcon } from "../../assets";
import SideMenu from "../../components/SideMenu/SideMenu";

const Header = ({ viewport }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {viewport === ViewportEnum.DESKTOP ? (
        <div className="header-content">
          <SocialMedia className="header-social-media" />
        </div>
      ) : (
        <div className="header-side-menu">
          <button className="header-side-menu-button" onClick={toggleMenu}>
            <SideMenuIcon />
          </button>

          <SideMenu {...{ isMenuOpen, toggleMenu }} />
        </div>
      )}
    </header>
  );
};

export default memo(Header);
