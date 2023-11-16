import React from "react";

//Styles
import "./styles.scss";

//Images
import headerImg from "./assets/header.jpg";

function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="Header image" className="headerImg" />
    </div>
  );
}

export { Header };
