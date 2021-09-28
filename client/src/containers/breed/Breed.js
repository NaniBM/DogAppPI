import React from "react";
import "./Breed.css";

export default function Breed({ name, image, temperament, weight }) {
  return (
    <div className="breed">
      <p>{name}</p>
      <img src={image} alt={"A " + name} />
      <p>{temperament}</p>
      <p>{weight + " kilogramos"}</p>
    </div>
  );
}
