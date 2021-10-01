import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions/actions";
import { filterBy } from "../../actions/actions";
import "./Filter.css";
export default function FilterByMood() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTemperaments()), []);
  const { temperaments } = useSelector((state) => state);

  const filter = (e) => {
    dispatch(filterBy(e.target.value, "temperament"));
    console.log(typeof e.target.value);
  };

  return (
    <select className="selectMood" name="selectMood" onChange={filter}>
      <option key={"selectMood"} selected disabled>
        Select temperament
      </option>
      {temperaments.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}
