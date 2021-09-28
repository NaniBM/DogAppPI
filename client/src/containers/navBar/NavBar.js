import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import Logo from '../../images/landing.jpg'




export default function NavBar() {

  
  return (
    <div className='NavBar'>
      <div className='Logo'>
        <NavLink to='/home' >
            <img width="36" height="36" src={Logo} alt="DogApp" />
            <span >DogApp</span>      
        </NavLink> 
      </div>          
      <div className='CreateBreed'>
        <NavLink to='/addbreed' >Add new breed</NavLink>
      </div>             
    </div>
  );
};