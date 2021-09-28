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
    <div className="detail">
      <p>{name && name}</p>
      <img src={image && image}></img>
      <p>{temperament && temperament}</p>
      <p>{weight && weight} kilograms</p>
      <p>{height && height} meters</p>
      <p>{life_span && life_span}</p>
    </div>
  );
}
