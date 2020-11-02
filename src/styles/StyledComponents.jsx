import styled, { css, keyframes } from 'styled-components';

export const FormStyle = styled.form`
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

    &>*{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>p:first-of-type{
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        font-size: x-large;
        border-radius: 0;
    }
`;


export const FormButton = styled.button`
    margin-top: auto;
    margin-bottom: 40px;
    border-radius: 5px;
    background-color: white;
    height: 35px;
    border: 0px solid transparent;

    :hover{
        background-color: darkgray;
        color: white;
        cursor: pointer;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    background-color: #000000;
    opacity: 0.72;
    flex-wrap: wrap;

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
    ul>li>.active{
        border-bottom: 1px solid white;
    }

    ul>li>a:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
    }
    @media all and (max-width: 700px){
        flex-direction: column;
        li{
            margin-left: 7px;
            margin-right: 7px;
        }
        ul{
            margin: 0 auto;
            padding: 0;
        }
        p{
            margin: 0 auto;
        }
    }
`;

export const CreatePollForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-right: 300px;
    margin-left: 300px;

    &>div{
        width: 350px;
        margin: 0 auto;
        height: 650px;
        background-color: #3d3d3d;
        color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 5px 5px grey;
    }
    &>button{
        margin: 0 auto;
    }
    margin-top: 100px;

    @media all and (max-width: 1660px){
        margin-right: 100px;
        margin-left: 100px;
    }
    @media all and (max-width: 1270px){
        margin-right: 0;
        margin-left: 0;
    }

    @media all and (max-width: 1070px){
        margin-top: 30px;
        &>div{
            margin-bottom: 20px;
        }
    }
    @media all and (max-width: 900px){
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        &>div:nth-child(1) {order: 1;}
        &>div:nth-child(3) {order: 1;}
        &>button:nth-child(3) {order: 2;}
        
        &>div{
            margin-bottom: 30px;
        }
    }
    section{
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
        height: 200px;
        background-color: #3d3d3d;
        color: white;
        border-radius: 5px;
        box-shadow: 5px 5px 5px grey;
    }
    section>*{
        margin: 0 auto;
        margin-top: 20px;
    }
    section>input{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
`;

export const QuestionListDiv = styled.div`
    
    &>*{
        text-align: center;
        margin: 0 auto;
        margin-top: 10px;
    }
    &>*:first-child{
        border-bottom: 1px solid white;
        width: 300px;
    }
    &>ul{
        list-style: none;
        padding: 0;
    }
    &>ul>li{
        margin: 10px;
    }
`;

export const CreateQuestionDiv = styled.div`
    &>*{
        text-align: center;
        margin: 0 auto;
        margin-top: 10px;
    }
    &>input{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>*>ul{
        list-style: none;
        padding: 0;
    }

    &>div{
        background-color: white;
        color: black;
        width: 280px;
        border-radius: 5px;
        height: 320px;
    
    }
    &>div>p{
        margin: 0 auto;
        border-bottom: 1px solid black;
        width: 200px;
        margin-top: 10px;
    }
`;

export const FinishPollButton = styled.button`
    margin-top: 20px;
    border-radius: 5px;
    background-color: green;
    height: 35px;
    border: 0px solid transparent;
    color: white;
    width: 170px;
    height: 40px;
    margin: 0 auto;

    &:hover{
        background-color: grey;
    }
`;



