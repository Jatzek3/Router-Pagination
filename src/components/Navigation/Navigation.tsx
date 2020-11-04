import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



function Navigation() {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink><Link to='/'>Home</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/about'>About</Link></NavLink>
                </NavItem>
            </Nav>
        </Navbar >
    );
}

export default Navigation