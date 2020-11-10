import React, { useState, useEffect } from "react";
import {UndetailedPollSection, UndetailedPollSectionWrapper} from '../styles/StyledComponents';
import 'dotenv/config'

const UndetailedPollComponent = () => {
    
    const [polls, setPoll] = useState([]);
    let pollsFetched = [...polls]

    useEffect(() => {
        fetch("http://localhost:5000/polls")
            .then(res => res.json())
            .then((result) => {
                setPoll(result);
            })
    }, []);


    return (
        <UndetailedPollSectionWrapper>{pollsFetched.map((poll) => {
            return <UndetailedPollSection>
                <h2>{poll.pollName}</h2>
                <ul>
                    {poll.questions.map((question) => {
                        return <div>
                            <h4>{question.questionDescription}</h4>
                            <ul>
                                {question.answers.map((answer) => {
                                    return <li>
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