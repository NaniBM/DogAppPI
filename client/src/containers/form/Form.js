import React from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <>
      <h2>Add new breeds</h2>
      <form>
        <label>Bred name</label>
        <input
          name="name"
          type="text"
          value={props.input.name}
          onChange={props.handleChange}
        />
        {props.errors.name && <p className="danger">{props.errors.name}</p>}
        <label>Minimum height [Centimeters]</label>
        <input
          name="minHeight"
          type="number"
          min="0"
          max="200"
          value={props.input.minHeight}
          onChange={props.handleChange}
        />
        {props.errors.minHeight && (
          <p className="danger">{props.errors.minHeight}</p>
        )}
        <label>Maximum height [Centimeters]</label>
        <input
          name="maxHeight"
          type="number"
          min="0"
          max="200"
          value={props.input.maxHeight}
          onChange={props.handleChange}
        />
        {props.errors.maxHeight && (
          <p className="danger">{props.errors.maxHeight}</p>
        )}
        <label>Minimum weight [Kilograms]</label>
        <input
          name="minWeight"
          type="number"
          min="0"
          max="200"
          value={props.input.minWeight}
          onChange={props.handleChange}
        />
        {props.errors.minWeight && (
          <p className="danger">{props.errors.minWeight}</p>
        )}
        <label>Maximum weight [Kilograms]</label>
        <input
          name="maxWeight"
          type="number"
          min="0"
          max="200"
          value={props.input.maxWeight}
          onChange={props.handleChange}
        />
        {props.errors.maxWeight && (
          <p className="danger">{props.errors.maxWeight}</p>
        )}
        <label>Minimum Life span [Years]</label>
        <input
          name="minLifeSpan"
          type="number"
          min="0"
          max="200"
          value={props.input.minLifeSpan}
          onChange={props.handleChange}
        />
        {props.errors.minLifeSpan && (
          <p className="danger">{props.errors.minLifeSpan}</p>
        )}
        <label>Maximum Life span [Years]</label>
        <input
          name="maxLifeSpan"
          type="number"
          min="0"
          max="200"
          value={props.input.maxLifeSpan}
          onChange={props.handleChange}
        />
        {props.errors.maxLifeSpan && (
          <p className="danger">{props.errors.maxLifeSpan}</p>
        )}
        <label>Choose or add at least one temperament</label>
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
        <label>add a new one...</label>
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
              <input
                type="button"
                value="Add temperament"
                onClick={props.addTemperament}
              />
            </div>
          );
        })}
      {/*enter image*/}
        <input
          className={props.errors.errors ? "disabled" : "active"}
          disabled={props.errors.error}
          type="submit"
          value="submit"
          text="Add new breed"
          onClick={props.handleOnclick}
        ></input>
      </form>
    </>
  );
}
