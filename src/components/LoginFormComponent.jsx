import React, { Component } from "react";
import '../styles/LoginForm.css'

class LoginForm extends Component {
    render() {
        return (
            <form className="LoginForm">
                <p>Login</p>
                <p>Email</p>
                <input type="text" placeholder="Email" autoComplete="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <button>Login</button>
            </form>
        )
    }
}
export default LoginForm;