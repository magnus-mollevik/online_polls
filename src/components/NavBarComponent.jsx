import React, { Component, useState } from "react";
import { NavLink } from 'react-router-dom'
import { NavBar } from '../styles/StyledComponents';
import {loggoutButton} from '../styles/StyledComponents'


const NavBarComponent = () => {
    const loggOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    if (localStorage.getItem('user') === null) {
        return (
            <NavBar>
                <p>Online polls</p>
                <ul>
                    <li><NavLink activeClassName="active" to="/Login">Login</NavLink></li>
                    <li><NavLink activeClassName="active" to="/SignUp">Sign up</NavLink></li>
                    <li><p>|</p></li>
                    <li><NavLink activeClassName="active" to="/DoPoll">Do Poll</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Create">Create</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Home</NavLink></li>
                </ul>
            </NavBar>
        )
    }
    else {
        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <NavBar>
                <p>Online polls</p>
                <ul>
                    <li><p className="loggOut" onClick={loggOut}>Logg out</p></li>
                    <li><p>{user.email}</p></li>
                    <li><p>|</p></li>
                    <li><NavLink activeClassName="active" to="/DoPoll">Do Poll</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Create">Create</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Home</NavLink></li>
                </ul>
            </NavBar>
        )
    }
}

export default NavBarComponent;