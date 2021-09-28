import React from "react";
import landingWallpaper from "../../images/landingWallpaper.jpg";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="box">
        <img src={landingWallpaper} alt="A white dog" />
      </div>
      <NavLink className="enterButton" to="/home">
        Ingresar
      </NavLink>
    </div>
  );
}
