import React, { useState } from "react";
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';
import { login } from '../utils/eventService';

//Loginmetodikken er hentet fra https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/

const LoginForm = () => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        
        const { data, error } = await login(
            {
                email: email,
                password: password
            });
        if (error) {
            console.log(error)
            setError("Wrong password or username");
        }
        
        else {
            setError(null);
            localStorage.clear();
            localStorage.setItem('user', data.email);
            localStorage.setItem('id', data._id);
            window.location = "/Home";
        }
    };

    return (
        <FormStyle>
            <p>Login</p>
            <p>Email</p>
            <input type="text" placeholder="Email" autoComplete="email" onChange={handleEmailInpt}></input>
            <p>Password</p>
            <input type="password" placeholder="Password" autoComplete="current-password" onChange={handlePasswordInpt}></input>
            {error ? <p>{error}</p>: null}
            <FormButton onClick={handleLogin}>Login</FormButton>
        </FormStyle>
    );
};


export default LoginForm;