import React from "react";
import landingWallpaper from "../../images/landing.jpg";
import logo from "../../images/Logo.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className='bubble1'>
     <div className='logocontainer'>
      <img src={logo} className='logo' alt='logo: a dog´s house'/>
      <div className='logoText'>
        <h1 >Doggy App</h1>
      <h1 >Doggy App</h1>
      </div>
     </div>
     </div>
          <div className="box">
        <img src={landingWallpaper} alt="A white dog" />
      </div>
      <div className='bubble2'>
        <div className="enterButton">
         <Link className="textButton" to="/home">
        Enter to discover amazing dog breeds
      </Link>
      </div>
      
      </div>
      <div>
        <p></p>
      </div>

    </div>
  );
}
