import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import { NavBar } from '../styles/styles';

class NavBarComponent extends Component {
    render() {
        return (
            <NavBar>
                <p>Online polls</p>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SignUp">Sign up</Link></li>
                    <li><p>|</p></li>
                    <li><Link to="/DoPoll">Do Poll</Link></li>
                    <li><Link to="/Create">Create</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </NavBar>
        )
    }
}
export default NavBarComponent;