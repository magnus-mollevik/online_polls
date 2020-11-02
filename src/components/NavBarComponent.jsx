import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'

class NavBarComponent extends Component {
    render() {
        return (
            <nav className="Navigation">
                <p>Online polls</p>
                <ul className="NavigatonList">
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SignUp">Sign up</Link></li>
                    <li><p>|</p></li>
                    <li><Link to="/DoPoll">Do Poll</Link></li>
                    <li><Link to="/Create">Create</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavBarComponent;