import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBy } from "../../actions/actions";

export default function FilterByBreed() {
  const dispatch = useDispatch();
  const { allbreeds } = useSelector((state) => state);

  const filter = (e) => {
    dispatch(filterBy(e.target.value, "name"));
  };

  let dogNames = allbreeds.map((breed) => breed.name).sort();

  return (
    <select name="selectBreed" onChange={filter}>
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
