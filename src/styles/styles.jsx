import styled, { css, keyframes } from 'styled-components';

export const LoginFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    border-radius: 10px;
    width: 350px;
    margin: 0 auto;
    height: 500px;
    margin-top: 100px;
    background-color: #3d3d3d;
    box-shadow: 5px 5px 5px grey;

    
`;





























export const NavBar = styled.nav`
    display: flex;
    background-color: #000000;
    opacity: 0.72;

    ul{
        display: flex;
        list-style: none;
        color: white;
        text-decoration: none;
        flex-direction: row-reverse;
        height: 50px;
        flex-grow: inherit;
        margin: 0;
        margin-left: auto;
    }

    li{
        margin: auto 20px;
    }

    p{
        float: left;
        color: white;
        margin-left: 10px;
    }

    ul>li>a{
        text-decoration: none;
        color: white;
        text-align: center;
    }

    ul>li>a:hover{
        cursor: pointer;
         text-decoration: underline;
    }
`;