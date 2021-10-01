import React from "react";
import "./SideBar.css";
import Search from "../../components/searchBar/SearchBar";
import FilterByBreed from "../../components/filters/FilterByBreed";
import FilterByMood from "../../components/filters/FilterByMood";
import Sort from "../../components/sort/Sort";
import { GiWeight } from "react-icons/gi";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="search">
        <span className="searchDogs"> Search a breed </span>
        <Search />
      </div>

      <div className="filters">
        <label>Filter by breed</label>
        <FilterByBreed />
        <label>Filter by temperament</label>
        <FilterByMood />
      </div>

      <div className="sort">
        <div classsName="sortByName">
          <TiSortAlphabeticallyOutline />
          <div className="sort1">
            <Sort order={"A-Z"} type={"abc"} />
            <Sort order={"Z-A"} type={"abc"} />
          </div>
        </div>
        <div className="sortByWeight">
          <GiWeight />
          <div className="sort2">
            <Sort order={"Asc"} type={"weigth"} />
            <Sort order={"Desc"} type={"weigth"} />
          </div>
        </div>
      </div>
    </div>
  );
}
