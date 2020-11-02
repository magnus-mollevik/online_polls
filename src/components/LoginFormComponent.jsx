import React, { Component } from "react";
import '../styles/LoginForm.css';
import { LoginFormStyle } from '../styles/styles';

class LoginForm extends Component {
    render() {
        return (
            <LoginFormStyle className="LoginForm">
                <p>Login</p>
                <p>Email</p>
                <input type="text" placeholder="Email" autoComplete="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <button>Login</button>
            </LoginFormStyle>
        )
    }
}
export default LoginForm;