import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBy, setCurrentPage } from "../../actions/actions";
import "./Filter.css";

export default function FilterByBreed() {
  const dispatch = useDispatch();
  const { allbreeds } = useSelector((state) => state);

  const filter = (e) => {
    dispatch(setCurrentPage(1));
    dispatch(filterBy(e.target.value, "name"));
  };

  let dogNames = allbreeds.map((breed) => breed.name).sort();

  return (
    <select className="selectBreed" name="selectBreed" onChange={filter}>
      <option key={"selectBreed"} selected disabled>
        Select breed
      </option>
      {dogNames.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}
