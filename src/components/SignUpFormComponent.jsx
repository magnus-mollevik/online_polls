import React, { Component , useState} from 'react'
import { FormStyle } from '../styles/StyledComponents';
import { FormButton } from '../styles/StyledComponents';

const SignUpForm = () =>  {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmedPassword, setConfirmedPassword] = useState("");
        const [user,setUser] = useState({})
        const [message,setMessage] = useState(null);
        
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
        
        //needs to write to db
        const registerUser = (e) => {
            if(email !== "" && password !== "" && confirmedPassword !== ""){
                e.preventDefault();
                if(!email.includes("@") && !email.includes(".")){
                    setMessage("Real email needed")
                }   
                else if(password !== confirmedPassword){
                    setMessage("Passwords must match")
                }
                //check if user already exist first!!!
                else{ //
                    setMessage("User " + email + " created")
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
                <FormButton onClick={registerUser}>SignUp</FormButton>
                {message && <p>{message}</p>}
            </FormStyle>
        )
}
export default SignUpForm