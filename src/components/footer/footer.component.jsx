import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-divider"></div>
      <div className="footer">
        <div className="footer__social">
          <Link to="/">
            <img src="./assets/icons/git.png" alt="git" />
          </Link>
          <Link to="/">
            <img src="./assets/icons/twi.png" alt="twitter" />
          </Link>
          <Link to="/">
            <img src="./assets/icons/fb.png" alt="facebook" />
          </Link>
          <Link to="/">
            <img src="./assets/icons/2168290.png" alt="google plus" />
          </Link>
          <Link to="/">
            <img src="./assets/icons/mail.png" alt="mail" />
          </Link>
          <Link to="/">
            <img src="./assets/icons/u.png" alt="user" />
          </Link>
        </div>
        <p className="footer__copyright">
          &copy; 2021 <Link to="/">Hangar WW - Code Playground</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
