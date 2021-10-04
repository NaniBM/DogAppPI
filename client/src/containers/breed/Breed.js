import React from "react";
import "./Breed.css";

export default function Breed({ name, image, temperament, weight, height }) {
  return (
    <div className="breed">
      <img className="dogImg" src={image} alt={"A " + name} />
      <div className="cardGlass"></div>
      <div className="cardInfo">
        <h3>{name}</h3>
        <h4>Moods:</h4>
        <h4>Weight:</h4>
        <p>{weight + " kilogramos"}</p>
        <h4>Height:</h4>
        <p>{height + " kilogramos"}</p>
      </div>
    </div>
  );
}
