import React from "react";
import Breed from "../../containers/breed/Breed";
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
                temperament={breed.temperament}
                weight={breed.weight.metric}
                height={breed.height.metric}
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
