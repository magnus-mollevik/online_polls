
import React, { useState } from 'react';
import { QuestionListDiv, ButtonBlue, UndetailedPollSection } from '../styles/StyledComponents';

const ShowResultComponent = ({ pollProp }) => {

    const poll = pollProp;

    return (
        <QuestionListDiv>
            <h2 key={poll.id}>{poll.pollName}</h2>
            <ul>
                {poll.questions.map((question) => {
                    return <div key={question.id}>
                        <h4>{question.questionDescription}</h4>
                        <ul>
                            {question.answers.map((answer) => {
                                return <li key={answer.id}>
                                    {answer.answerDescription} votes: {answer.voteCount}
                                </li>
                            })}
                        </ul>
                    </div>
                })}
            </ul>
        </QuestionListDiv>
    )
}
export default ShowResultComponent;
