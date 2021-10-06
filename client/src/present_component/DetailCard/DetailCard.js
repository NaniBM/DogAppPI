import React from "react";
import "./DetailCard.css";
import Loading from "../../images/loading.gif";

export default function DetailCard({
  name,
  image,
  temperament,
  weight,
  height,
  life_span,
  loading,
}) {
  return loading ? (
    <div className="detailContainer">
      <img src={Loading} alt="loading" />
    </div>
  ) : (
    <div className="detailContainer">
      <img className="detailedBreed" src={image && image}></img>
      <div className="detailedBgWhite">
        <div className="detailedBg2"></div>
        <div className="detailedBg1"></div>
        <div className="detailedInfo">
        <h2>{name && name}</h2>
        <h3>Temperaments</h3>
        <p>{temperament && temperament}</p>
        <h3>weight</h3>
        <p>{weight && weight} kilograms</p>
        <h3>height</h3>
        <p>{height && height} meters</p>
        <h3>life_span</h3>
        <p>{life_span && life_span}</p>
      </div>
      </div>
      
    </div>
  );
}
