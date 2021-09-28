import React from "react";
import "./SideBar.css";
import Search from "../../components/searchBar/SearchBar";
import FilterByBreed from "../../components/filters/FilterByBreed";
import FilterByMood from "../../components/filters/FilterByMood";
import Sort from "../../components/sort/Sort";

export default function SideBar() {
  return (
    <div className="sideBar">
      <Search />
      <div className="filters">
        <label>Filter by breed</label>
        <FilterByBreed />
        <label>Filter by temperament</label>
        <FilterByMood />
      </div>
      <div className="sort">
        <label>Sort by name</label>
        <Sort order={"A-Z"} type={"abc"} />
        <Sort order={"Z-A"} type={"abc"} />
        <label>Sort by weigth</label>
        <Sort order={"Asc"} type={"weigth"} />
        <Sort order={"Desc"} type={"weigth"} />
      </div>
    </div>
  );
}
