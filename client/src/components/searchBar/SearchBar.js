import React from "react";
import { useDispatch } from "react-redux";
import { searchByName, getBreed } from "../../actions/actions";
import "./SearchBar.css";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== "") {
      dispatch(searchByName(e.target.value));
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getBreed());
  };

  return (
    <div>
      <form className="form" action="submit">
        <input type="search" placeholder="Breed..." onChange={handleChange} />
        <button onClick={handleReset}>Show All</button>
      </form>
    </div>
  );
}
