import React, { useState, useEffect } from 'react';
import AnswerPollQuestionComponent from './AnswerPollQuestionComponent';
import ShowResultComponent from './ShowResultComponent';
import { UndetailedPollSection, UndetailedPollSectionWrapper, FormButton } from '../styles/StyledComponents';


const DoPollComponent = ({ poll, setPoll }) => {

    const [showResult, setShowResult] = useState(false);

    return (
        <UndetailedPollSectionWrapper>
            <h4>ID: {poll._id}</h4>
            {!showResult ? <AnswerPollQuestionComponent setPoll={setPoll} pollProp={poll} setShowResult={setShowResult} />
            : <ShowResultComponent pollProp={poll}/>}
        </UndetailedPollSectionWrapper>
    )
};

export default DoPollComponent;


