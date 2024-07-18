import { memo, useState } from "react";
import "./style.scss";
import SocialMedia from "../../components/SocialMedia";
import { HeaderProps } from "./types";
import { ViewportEnum } from "../../context/Viewport.context";
import { bannerPrimary, SideMenuIcon } from "../../assets";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Link } from "react-router-dom";
import { RoutesURL } from "../../routes";

const Header = ({ viewport }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {viewport === ViewportEnum.DESKTOP ? (
        <div className="header-content">
          <Link to={RoutesURL.HOME} className="header-logo">
            <img src={bannerPrimary} alt="Logo" />
          </Link>
          <SocialMedia className="header-social-media" />
        </div>
      ) : (
        <div className="header-side-menu">
          <div className="header-side-menu-wrapper-button">
            <button className="header-side-menu-button" onClick={toggleMenu}>
              <SideMenuIcon />
            </button>
            <SideMenu {...{ isMenuOpen, toggleMenu }} />
          </div>
          <Link to={RoutesURL.HOME} className="header-logo">
            <img src={bannerPrimary} alt="Logo" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
