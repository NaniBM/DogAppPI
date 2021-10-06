import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, getBreed, setCurrentPage } from "../../actions/actions";
import "./SearchBar.css";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      dispatch(setCurrentPage(1))
      dispatch(searchByName(name));
      setName("");
    }
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(1))
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
          onKeyPress={handleEnterKeyPressed}
          placeholder="Breed..."
          onChange={handleChange}
        />        
      </div>
      <button className="searchButton" onClick={handleSubmit}>
          Search
        </button>
      <button className="searchButton" onClick={handleReset}>
        Show all breeds
      </button>
    </div>
  );
}
