import React from "react";
import "./banner.styles.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src="./assets/images/caralog10.jpg"
        alt="Hp Banner"
      />
      <div className="banner__background"></div>
      <div className="banner__block">
        <h2 className="banner__block__subtitle">Small Bussiness</h2>
        <div className="banner__block__divider"></div>
        <p className="banner__block__text">
          A Small bussiness Responsive Theme by
          <Link to="/"> CodePlayground</Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
