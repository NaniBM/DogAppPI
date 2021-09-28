import React from "react";
import { useDispatch } from "react-redux";
import { sortBreeds } from "../../actions/actions";
import "./Sort.css";

export default function Sort({ type, order }) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(sortBreeds(type, order));
  };

  return <button onClick={handleOnClick}>{order}</button>;
}
