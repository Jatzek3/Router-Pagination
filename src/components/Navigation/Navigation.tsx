import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
} from 'reactstrap';



function Navigation() {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand className="logo">Let's Paginate!</NavbarBrand>
            <Nav className="ml-auto" navbar>
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