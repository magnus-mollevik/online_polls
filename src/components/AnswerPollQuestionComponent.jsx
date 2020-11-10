import React from 'react'
import { QuestionListDiv } from '../styles/StyledComponents'

const AnswerPollQuestionComponent = ({ questionList }) => {
    const questions = [...questionList];
    return (
        <QuestionListDiv>
            <p>Questions</p>
            <ul>
            {questions.map((question) => {
                        return <div key={question.id}>
                            <h4>{question.questionDescription}</h4>
                            <form>
                                {question.answers.map((answer) => {
                                    return <li key={answer.id}>
                                        <input type="radio"  value={answer.answerDescription}></input>
                                    </li>
                                })}
                            </form>
                        </div>
                    })}
            </ul>
        </QuestionListDiv>
    )
}

export default AnswerPollQuestionComponent;