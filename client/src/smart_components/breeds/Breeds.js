import React from "react";
import Breed from "../../present_component/breed/Breed";
import { NavLink } from "react-router-dom";
import "./Breeds.css";

export default function Breeds({ items }) {
  if (Array.isArray(items)) {
    return (
      <div className="breeds">
        {items.map((breed) => (
          <div key={breed.id}>
            <NavLink to={`/home/${breed.id}`}>
              <Breed
                name={breed.name}
                image={breed.image}                
                weight={breed.weight.metric}
                temperament={breed.temperament}
              />
            </NavLink>
          </div>
        ))}
      </div>
    );
  } else {
    return <>{items}</>;
  }
}
