import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import { NavBar } from '../styles/StyledComponents';


class NavBarComponent extends Component {
    render() {
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
}
export default NavBarComponent;