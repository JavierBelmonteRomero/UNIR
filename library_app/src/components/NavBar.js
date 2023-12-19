import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { Link } from 'react-router-dom';

export const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav className='navbar'>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/rent-history">My Books</Link>
        <Link to="/about">About</Link>
      </ul>
      <DarkModeSwitch onChange={toggleDarkMode} />
    </nav>
  );
};