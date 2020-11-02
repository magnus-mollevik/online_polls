import React, { Component } from "react";
import { FormStyle } from '../styles/styles';
import { FormButton } from '../styles/styles';

class LoginForm extends Component {
    render() {
        return (
            <FormStyle>
                <p>Login</p>
                <p>Email</p>
                <input type="text" placeholder="Email" autoComplete="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <FormButton>Login</FormButton>
            </FormStyle>
        )
    }
}
export default LoginForm;