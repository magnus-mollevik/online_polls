import React from "react";
import { ButtonBlue } from '../styles/StyledComponents';
import {CreateQuestionDiv} from '../styles/StyledComponents';

const CreateQuestionComponent = () => {
    return (
        <CreateQuestionDiv>
            <p>Question</p>
            <input type="text"></input>
            <p>Answer</p>
            <input type="text"></input>
            <ButtonBlue>Add Answer</ButtonBlue>
            <div>
                <p>Answeres</p>
                <ul>
                    <li>answer 1</li>
                    <li>answer 2</li>
                </ul>
            </div>
            <ButtonBlue>Add question</ButtonBlue>
        </CreateQuestionDiv>
    )
}

export default CreateQuestionComponent