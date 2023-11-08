import React from "react";

//Styles
import "./styles.scss";

//Images
import footerImg from "./assets/footer.jpg";
import gitHub from "./assets/github.png";

function Footer() {
  return (
    <div className="footer">
      <img src={footerImg} alt="Footer image" className="footerImg" />
      <p className="footerTxt footerTxt_red">By Yulia Polonskaya</p>
      <a
        className="footerTxt footerTxt_blue footerTxt_img"
        href="https://github.com/woachkatzl"
      >
        <img className="footerIcon" src={gitHub} alt="GitHub icon" />
        Author's GitHub
      </a>
    </div>
  );
}

export { Footer };
