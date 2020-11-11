import React, { useState, useEffect } from 'react';
import AnswerPollQuestionComponent from './AnswerPollQuestionComponent';
import { UndetailedPollSection, UndetailedPollSectionWrapper, FormButton } from '../styles/StyledComponents';


const DoPollComponent = ({ poll, setPoll }) => {


    return (
        <UndetailedPollSection>
            <h4>ID: {poll._id}</h4>
            <h3>{poll.pollName}</h3>
            <AnswerPollQuestionComponent setPoll={setPoll} pollProp={poll} />
        </UndetailedPollSection>
    )
};

export default DoPollComponent;


