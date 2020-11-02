import React from 'react'
import { QuestionListDiv } from '../styles/StyledComponents'

const QuestionListComponent = () => {
    return (
        <QuestionListDiv>
            <p>Questions</p>
            <ul>
                <li>question 1</li>
                <li>question 2</li>
                <li>question 3</li>
            </ul>
        </QuestionListDiv>
    )
}

export default QuestionListComponent