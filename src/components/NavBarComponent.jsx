import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavBarComponent extends Component {
    render() {
        return (
            <div>
                <h5>NAVBAR</h5>
                <ul>
                    <p>Online polls</p>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Create">Create</Link></li>
                    <li><Link to="/DoPoll">Do Poll</Link></li>
                    <li><Link to="/SignUp">Sign up</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
                <hr />
            </div>
        )
    }
}
export default NavBarComponent;