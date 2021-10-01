import React from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <>
      <h2 className="addBreed">Add new breeds</h2>
      <form className='addform'>
        <label className='labelForm'>Bred name</label>
        <input
          className='inputForm'
          name="name"
          type="text"
          value={props.input.name}
          onChange={props.handleChange}
        />
        {props.errors.name && <p className="danger">{props.errors.name}</p>}
        <label className='labelForm'>Minimum height [Centimeters]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Maximum height [Centimeters]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Minimum weight [Kilograms]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Maximum weight [Kilograms]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Minimum Life span [Years]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Maximum Life span [Years]</label>
        <input
        className='inputForm'
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
        <label className='labelForm'>Choose or add at least one temperament</label>
        <select className='inputForm'  name="temperament" onChange={props.handleSelectChange}>
          <option className='inputForm' key={"temperament"} selected disabled></option>
          {props.temperaments.map((mood) => {
            return (
              <option  className='inputForm' key={mood} value={mood}>
                {mood}
              </option>
            );
          })}
        </select>
        <label className='labelForm'>or add a new one...</label>
        {props.newTemperament.map((el, i) => {
          return (
            <div key={`temperament-${i}`}>
              <label htmlFor={`temperament-${i}`}>{`Temperament #${
                i + 1
              }`}</label>
              <input
              className='inputForm'
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
              className='addTemperament'
                type="button"
                value="Add temperament"
                onClick={props.addTemperament}
              />
            
        <label className='labelForm'>Finally, you can add an image of the breed!</label>
        <input 
        className='inputForm'
        type="url" 
        name="imageUrl" 
        id="url"
        placeholder="https://example.com"
        pattern="https://.*" 
        size="30"
        />
        <input 
          className={props.errors.errors ? "disabled" : "submitForm"}
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
