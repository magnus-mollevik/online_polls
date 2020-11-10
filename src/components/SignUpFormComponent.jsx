import React, { Component, useState } from 'react'
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';
import { register } from '../utils/eventService.js';

const SignUpForm = () => {
    const [error, setError] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [user, setUser] = useState({})
    const [message, setMessage] = useState(null);

    const handleEmailInpt = (e) => {
        let inptEmail = e.target.value;
        setEmail(inptEmail);
    };

    const handlePasswordInpt = (e) => {
        let inptPassword = e.target.value;
        setPassword(inptPassword);
    };

    const handleConfirmedPasswordInpt = (e) => {
        let inptConfirmedPassword = e.target.value;
        setConfirmedPassword(inptConfirmedPassword);
    };

    const postUserToApi = () => {
        const sendData = async () => {
            const { data, error } = await register({
                email: email,
                password: password,
            });
            if (error) {
                setError(error);
            }
            else {
                setMessage("User " + email + " created");
                console.log(data.email);
                localStorage.clear();
                localStorage.setItem('user', data.email);
                window.location = "/Home";
            }
        };
        sendData();
    }

    //needs to write to db
    const registerUser = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "" && confirmedPassword !== "") {
            if (!email.includes("@") && !email.includes(".")) {
                setMessage("Real email needed")
            }
            else if (password !== confirmedPassword) {
                setMessage("Passwords must match")
            }
            //check if user already exist first!!!
            else { //
                setUser({
                    email: email,
                    password: password,
                })
                postUserToApi()
            }
        }
    };

    return (

        <FormStyle className="SignUpForm">
            <p>SignUp</p>
            <p>Email</p>
            <input type="email" placeholder="Email" onChange={handleEmailInpt} value={email} autoComplete="email" required></input>
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={handlePasswordInpt} value={password} autoComplete="current-password" />
            <p>Repeat Password</p>
            <input type="password" value={confirmedPassword} onChange={handleConfirmedPasswordInpt} placeholder="Password" autoComplete="current-password"></input>
            {message && <p>{message}</p>}
            <FormButton onClick={registerUser}>SignUp</FormButton>
        </FormStyle>

    )
}
export default SignUpForm