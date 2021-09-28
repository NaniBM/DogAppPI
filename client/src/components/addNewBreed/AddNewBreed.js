import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions/actions";
import addNewBreed from "../../controllers/addNewBreed";
import { validateForm } from "../../controllers/validateForm";
import Form from "../form/Form";

export default function CreateBreed() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTemperaments()), []);
  const { temperaments } = useSelector((state) => state);

  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    minHeight: null,
    maxHeight: null,
    minWeight: null,
    maxWeight: null,
    minLifeSpan: null,
    maxLifeSpan: null
  });

  const temperamentList = { temperament: "" };
  const [newTemperament, setTemperament] = useState([{ ...temperamentList }]);

  const payload = {
    name: input.name,
    height: `${input.minHeight} + ${input.maxHeight}`,
    weight: `${input.minWeight} + ${input.maxWeight}`,
    life_span: `${input.minLifeSpan} + ${input.maxLifeSpan}`,
    temperament: newTemperament.map((i) => i.temperament),
  };

  const handleChange = (e) => {
    const error = validateForm(e.target.name, e.target.value);
    error ? setErrors({
        ...errors,
        [e.target.name]: error,
      }) :  setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
  };

  const addTemperament = () => {
    setTemperament([...newTemperament, { ...temperamentList }]);
  };

  const handleSelectChange = (e) => {
    setTemperament([...newTemperament, { temperament: e.target.value }]);
  };

  const handleTemperamentChange = (e) => {
    const moods = [...newTemperament];
    moods[e.target.id][e.target.dataset.name] = e.target.value;
    setTemperament(moods);
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(payload);
    // addNewBreed(payload);
  };

  return (
    <div className="addingBreed">
      <Form
        name={input.name}
        handleChange={handleChange}
        minHeight={input.minHeight}
        maxHeight={input.maxHeight}
        minWeight={input.minWeight}
        maxWeight={input.maxWeight}
        minLifeSpan={input.minLifeSpan}
        maxLifeSpan={input.maxLifeSpan}
        handleSelectChange={handleSelectChange}
        addTemperament={addTemperament}
        temperaments={temperaments}
        newTemperament={newTemperament}
        handleTemperamentChange={handleTemperamentChange}
        handleOnclick={handleOnclick}
      />
    </div>
  );
}
