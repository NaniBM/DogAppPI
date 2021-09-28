import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName, getBreed } from '../../actions/actions';
import './SearchBar.css'


export default function Search() {

    const[name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name !== '') {        
        dispatch(searchByName(name));
        setName('');
       } 
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key === 'Enter') {
          handleSubmit(e);
        }
      }

    const handleReset = (e) => {
        e.preventDefault()
        dispatch(getBreed());
    }

    return (
        <div>
            <form className="form" action="submit">
            <input
                value={name}
                type="search"
                onKeyPress={handleEnterKeyPressed}
                placeholder='Breed...'
                onChange={handleChange}
            />
            
            <button 
                type='button' 
                onClick={handleSubmit}>
                Search
            </button>
            <button  onClick={handleReset}>Show All</button>
            </form>
        </div>
    )
}