import React from "react";
import landingWallpaper from "../../images/landing.jpg";
import logo from "../../images/Logo.png";
import arrow from "../../images/arrow.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
      <div className="bubble1">
        <div className="logocontainer">
          <img src={logo} className="logo" alt="logo: a dog´s house" />
          <div className="logoText">
            <h1>Good-Boy </h1>
            <h1>Good-Boy</h1>
          </div>
        </div>
      </div>
      <div className="backGroundImg">
        <img src={landingWallpaper} alt="dogs" />
      </div>
      <p className="about">An app to learn about our best friends!</p>
      <div className="bubble2">
        <div>
          <Link to="/home">
            <img
              className="arrow"
              src={arrow}
              alt="An arrow, the enter button"
            />
          </Link>
        </div>
      </div>
      <svg
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        className="svg2"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  );
}
