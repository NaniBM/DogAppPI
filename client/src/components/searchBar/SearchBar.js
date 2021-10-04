import React from "react";
import { useDispatch } from "react-redux";
import { searchByName, getBreed, setCurrentPage } from "../../actions/actions";
import "./SearchBar.css";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== "") {
      dispatch(setCurrentPage(1));
      dispatch(searchByName(e.target.value));
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getBreed());
  };

  return (
    <div>
      <div className="searchbar">
        <IoSearchOutline />
        <div className="searchMark"></div>
        <input
          className="searchInput"
          placeholder="Breed..."
          onChange={handleChange}
        />
      </div>
      <button className="searchButton" onClick={handleReset}>
        Show all breeds
      </button>
    </div>
  );
}
