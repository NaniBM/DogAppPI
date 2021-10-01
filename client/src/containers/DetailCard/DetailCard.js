import React from "react";
import "./DetailCard.css";

export default function DetailCard({
  name,
  image,
  temperament,
  weight,
  height,
  life_span,
}) {
  return (
    <div className="detailContainer">
      <img className="detailedBreed" src={image && image}></img>
      <div className="detailedBgWhite">
        <div className="detailedBg2"></div>
        <div className="detailedBg1"></div>
      </div>
      <div className="detailedInfo">
        <h2>{name && name}</h2>
        <h3>Mood</h3>
        <p>{temperament && temperament}</p>
        <h3>weight</h3>
        <p>{weight && weight} kilograms</p>
        <h3>height</h3>
        <p>{height && height} meters</p>
        <h3>life_span</h3>
        <p>{life_span && life_span}</p>
      </div>
    </div>
  );
}
