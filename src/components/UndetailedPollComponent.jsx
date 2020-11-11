import React from "react";
import {UndetailedPollSection, UndetailedPollSectionWrapper} from '../styles/StyledComponents';
import 'dotenv/config'

const UndetailedPollComponent = ({polls}) => {
    const pollsFetched = [...polls];



    const doPoll = (name) =>{
        localStorage.setItem('latestPollName', name);
        window.location="/dopoll";
    }


    return (
        <UndetailedPollSectionWrapper >{pollsFetched.map((poll) => {
            return <UndetailedPollSection onClick={() => doPoll(poll.pollName)}>
                <h2 key={poll._id}>{poll.pollName}</h2>
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
            </UndetailedPollSection>
        })}
        </UndetailedPollSectionWrapper>
    )
}

export default UndetailedPollComponent;