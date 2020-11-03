import React, { useState } from 'react'
import { QuestionListDiv } from '../styles/StyledComponents'

const QuestionListComponent = ({ questionList }) => {
    const questions = [...questionList];
    return (
        <QuestionListDiv>
            <p>Questions</p>
            <ul>
                {questions.map((item) => {
                    const answers = [...item.answersList];
                    return <li key={item.question}>{item.question}
                        <ul>{answers.map((answer)=>{
                            return <li key={answer}>{answer}</li>
                        })}
                        </ul>
                    </li>
                })}
            </ul>
        </QuestionListDiv>
    )
}

export default QuestionListComponent