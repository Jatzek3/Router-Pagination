import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    );
}

export default Nav