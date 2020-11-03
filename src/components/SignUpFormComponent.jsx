import React, { Component } from 'react'
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';

const SignUpForm = () =>  {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmedPassword, setConfirmedPassword] = useState("");
        const [obj,setObj] = useState({})
        
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
        const validPartPattern = "[0-9][A-Z]{3}";

        const registerUser = (e) => {
           
               
           
        };

        return (
            <FormStyle className="SignUpForm">
                <Prompt when message="morendin" />
                <p>SignUp</p>
                <p>Email</p>
                <input type="email" placeholder="Email" onChange={handleEmailInpt} value={email} autoComplete="email" required></input>
                <p>Password</p>
                <input type="password" placeholder="Password" onChange={handlePasswordInpt} value={password} autoComplete="current-password"></input>
                <p>Repeat Password</p>
                <Page email={email}></Page>
                <input type="password" value={confirmedPassword} onChange={handleConfirmedPasswordInpt} placeholder="Password" autoComplete="current-password"></input>
                <FormButton onClick={registerUser}>SignUp</FormButton>
            </FormStyle>
        )
}
export default SignUpForm