import React, { Component } from 'react'
import '../styles/SignUpForm.css'

class SignUpForm extends Component {
    render() {
        return (
            <form className="SignUpForm">
                <p>SignUp</p>
                <p>Email</p>
                <input type="text" placeholder="Email" autoComplete="email"></input>
                <p>Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <p>Repeat Password</p>
                <input type="password" placeholder="Password" autoComplete="current-password"></input>
                <button>SignUp</button>
            </form>
        )
    }
}
export default SignUpForm
