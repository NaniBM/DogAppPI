import React from "react";
import './Form.css';

export default function Form(props) {
  return (
    <>
      <h2>Add new breeds</h2>
      <form>
        <label>Name</label>
        <input name="name" type="text" value={props.name} onChange={props.handleChange} />
        <label>Minimum height</label>
        <input
          name="minHeight"
          type="text"
          value={props.minHeight}
          onChange={props.handleChange}
        />
        <label>Maximum height</label>
        <input
          name="maxHeight"
          type="text"
          value={props.maxHeight}
          onChange={props.handleChange}
        />
        <label>Minimum weight</label>
        <input
          name="minWeight"
          type="text"
          value={props.minWeight}
          onChange={props.handleChange}
        />
        <label>Maximum weight</label>
        <input
          name="maxWeight"
          type="text"
          value={props.maxWeight}
          onChange={props.handleChange}
        />
        <label>Minimum Life span</label>
        <input
          name="minLifeSpan"
          type="text"
          value={props.minLifeSpan}
          onChange={props.handleChange}
        />
        <label>Maximum Life span (max)</label>
        <input
          name="maxLifeSpan"
          type="text"
          value={props.maxLifeSpan}
          onChange={props.handleChange}
        />
        <label>Select temperament</label>
        <select name="temperament" onChange={props.handleSelectChange}>
          <option key={"temperament"} selected disabled></option>
          {props.temperaments.map((mood) => {
            return (
              <option key={mood} value={mood}>
                {mood}
              </option>
            );
          })}
        </select>
        <label>or add a new one...</label>
        <input type="button" value="Add temperament" onClick={props.addTemperament} />
        {props.newTemperament.map((el, i) => {
          return (
            <div key={`temperament-${i}`}>
              <label htmlFor={`temperament-${i}`}>{`Temperament #${
                i + 1
              }`}</label>
              <input
                type="text"
                name={`temperament-${i}`}
                id={i}
                data-name="temperament"
                value={el.temperament}
                onChange={props.handleTemperamentChange}
              />
            </div>
          );
        })}

        <input
          type="submit"
          value="submit"
          text="Add new breed"
          onClick={props.handleOnclick}
        ></input>
      </form>
    </>
  );
}
