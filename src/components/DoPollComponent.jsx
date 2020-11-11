import React, { useState } from 'react';
import AnswerPollQuestionComponent from './AnswerPollQuestionComponent';
import ShowResultComponent from './ShowResultComponent';
import { UndetailedPollSection } from '../styles/StyledComponents';


const DoPollComponent = ({ poll, setPoll }) => {

    const [showResult, setShowResult] = useState(false);

    return (
        <UndetailedPollSection>
            {!showResult ? <AnswerPollQuestionComponent setPoll={setPoll} pollProp={poll} setShowResult={setShowResult} />
            : <ShowResultComponent pollProp={poll}/>}
        </UndetailedPollSection>
    )
};

export default DoPollComponent;


