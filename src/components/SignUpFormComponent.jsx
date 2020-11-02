import React, { Component } from 'react'
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';

class SignUpForm extends Component {
    render() {
        return (
            <FormStyle className="SignUpForm">
                <p>SignUp</p>
                <p>Email</p>
                <input type="text" placeholder="Email" autoComplete="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <p>Repeat Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <FormButton>SignUp</FormButton>
            </FormStyle>
        )
    }
}
export default SignUpForm