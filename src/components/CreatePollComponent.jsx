import React, {useState} from "react";
import CreateQuestionComponent from './CreateQuestionComponent'
import QuestionListComponent from './QuestionListComponent'
import { FinishPollButton } from '../styles/StyledComponents'
import { CreatePollForm } from '../styles/StyledComponents'

const CreatePollComponent = () => {
    
    return (
        <CreatePollForm>
            <QuestionListComponent></QuestionListComponent>
            <CreateQuestionComponent/>
            <section>
                <p>Poll name</p>
                <input type="text"></input>
                <FinishPollButton>Save Poll</FinishPollButton>
            </section>

        </CreatePollForm>
    )
}

export default CreatePollComponent