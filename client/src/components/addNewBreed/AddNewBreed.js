import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions/actions";
import { validateOnClick } from "../../controllers/ValidateOnclick";
import { validateForm } from "../../controllers/validateForm";
import Form from "../../containers/form/Form";
import "./AddNewBreed.css";

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
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    error: true,
  });

  const temperamentList = { temperament: "" };
  const [newTemperament, setTemperament] = useState([{ ...temperamentList }]);

  const payload = {
    name: input.name,
    height: `${input.minHeight} - ${input.maxHeight}`,
    weight: `${input.minWeight} - ${input.maxWeight}`,
    life_span: `${input.minLifeSpan} - ${input.maxLifeSpan}`,
    temperament: newTemperament.map(
      (i) => i.temperament !== "" && i.temperament
    ),
  };

  const handleChange = (e) => {
    const valid = validateForm(e.target.name, e.target.value);
    valid
      ? setErrors({
          ...errors,
          [e.target.name]: valid,
          error: true,
        })
      : setErrors({
          ...errors,
          [e.target.name]: "",
          error: false,
        });
    setInput({
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
    validateOnClick(payload, newTemperament);
    alert("new breed added");
  };

  return (
    <div className="addingBreed">
      <Form
        input={input}
        errors={errors}
        temperaments={temperaments}
        newTemperament={newTemperament}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        addTemperament={addTemperament}
        handleTemperamentChange={handleTemperamentChange}
        handleOnclick={handleOnclick}
      />
    </div>
  );
}
