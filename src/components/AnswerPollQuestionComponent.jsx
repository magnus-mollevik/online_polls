import React, { useState } from 'react';
import { QuestionListDiv, ButtonBlue, UndetailedPollSection } from '../styles/StyledComponents';
import { update } from '../utils/eventService';

const AnswerPollQuestionComponent = ({ pollProp, setPoll, setShowResult }) => {
    const poll = pollProp;

    const onAnswerChange = (e) => {
        const answer = JSON.parse(e.currentTarget.value);
        console.log(answer);
    }

    const handleAnswers = async (e) => {
        e.preventDefault();
        poll.questions.forEach(question => {
            question.answers.forEach(answer => {
                if (document.getElementById(answer.answerDescription).checked) {
                    console.log(answer.answerDescription);
                    answer.voteCount++;
                }
            });
        });
        setPoll(poll);
        await update(poll, poll._id);
        setShowResult(true);
    }
    return (
        <QuestionListDiv>
                <h1>{poll.pollName}</h1>
                <h4>Poll id: {poll._id}</h4>
                <p>Questions</p>
                <ul>
                    {poll.questions.map((question) => {
                        return <div key={question.id}>
                            <h4>{question.questionDescription}</h4>
                            <form>
                                {question.answers.map((answer) => {
                                    return <li key={answer.id}>
                                        <input id={answer.answerDescription} onChange={onAnswerChange} type="radio" name={question} value={JSON.stringify(answer)
                                        } />{answer.answerDescription}
                                    </li>
                                })}
                            </form>
                        </div>
                    })}
                </ul>
                <ButtonBlue onClick={handleAnswers} style={{ marginTop: "30px" }}>Send</ButtonBlue>
            </QuestionListDiv>   
    )
}

export default AnswerPollQuestionComponent;