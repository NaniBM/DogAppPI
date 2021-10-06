import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/Logo.png";
import addPaw from "../../images/add.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="home">
        <a className="textLogo" href="/home">
          <img src={logo} className="homeLogo" alt="logo: a dog´s house" />
          <div className="textLogo">
            <h1 className="NavLogo">Good-Boy </h1>
            <h1 className="NavLogo">Good-Boy</h1>
          </div>
        </a>
      </div>
      <div className="AddBreed">
        <Link className="addLink" to="/addbreed">
          <img className="addPaw" src={addPaw} alt="The paw of a dog" />
        </Link>
        <Link className="addLink" to="/addbreed">
          Add new breed
        </Link>
      </div>
    </div>
  );
}
