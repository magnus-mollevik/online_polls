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
                                        <input type="radio" name={question} value={answer.answerDescription}/>{answer.answerDescription}
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