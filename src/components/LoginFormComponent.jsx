import React, { useState, useEffect } from "react";
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';
import { login } from '../utils/eventService';
import axios from 'axios';

//Loginmetodikken er hentet fra https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/

const LoginForm = () => {
    
    /*useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);*/

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleEmailInpt = (e) => {
        let inptEmail = e.target.value;
        setEmail(inptEmail);
    }; 

    const handlePasswordInpt = (e) => {
        let inptPassword = e.target.value;
        setPassword(inptPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const tempUser = { email : email, password : password };
        console.log(tempUser);
        // send the username and password to the server
        const response = await login(tempUser);
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)
        console.log(localStorage.user);
    };



    return (
        <FormStyle>
            <p>Login</p>
            <p>Email</p>
            <input type="text" placeholder="Email" autoComplete="email" onChange={handleEmailInpt}></input>
            <p>Password</p>
            <input type="password" placeholder="Password" autoComplete="current-password" onChange={handlePasswordInpt}></input>
            <FormButton onClick={handleLogin}>Login</FormButton>
        </FormStyle>
    );

};


export default LoginForm;