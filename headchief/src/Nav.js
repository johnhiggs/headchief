import './App.css';

import { Link } from 'react-router-dom'
import React from 'react';
import logo from './logo2.svg'

function Nav() {
    const logoStyle = {
        width: '25%',
        padding: '10px'
    };

  return (
    <nav>
        <img style={ logoStyle } alt="" src={ logo } />
        <ul className="nav-links">
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/beers">
                <li>On Tap</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
