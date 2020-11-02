import React from "react";
import { FormButton } from '../styles/StyledComponents';
import {CreateQuestionDiv} from '../styles/StyledComponents';

const CreateQuestionComponent = () => {
    return (
        <CreateQuestionDiv>
            <p>Question</p>
            <input type="text"></input>
            <p>Answer</p>
            <input type="text"></input>
            <FormButton>Add Answer</FormButton>
            <div>
                <p>Answeres</p>
                <ul>
                    <li>answer 1</li>
                    <li>answer 2</li>
                </ul>
            </div>
            <FormButton>Add question</FormButton>
        </CreateQuestionDiv>
    )
}
export default CreateQuestionComponent