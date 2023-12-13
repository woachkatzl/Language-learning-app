import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./styles.scss";

//Images
import headerImg from "./assets/header.jpg";
import logo from "./assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="headerBar">
        <Link to="/">
          <img src={logo} alt="Logo" className="headerLogo" />
        </Link>
        <nav>
          <ul className="headerNav">
            <li>
              <Link className="headerLink" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="headerLink" to="/game">
                Карточки
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <img src={headerImg} alt="Header image" className="headerImg" />
    </div>
  );
}

export { Header };
