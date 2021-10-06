import React from "react";
import "./Breed.css";

export default function Breed({ name, image, temperament, weight,  }) {
  return (
    <div className="breed">
      <img className="dogImg" src={image} alt={"A " + name} />
      <div className="cardGlass"></div>
      <div className="cardInfo">
        <h3>{name}</h3>
        <h4>Weight:</h4>
        <p>{weight + " kilogramos"}</p>
        <h4>temperament:</h4>
        <p>{temperament}</p>
       
      </div>
    </div>
  );
}
