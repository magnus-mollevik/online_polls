import React, { useState, useEffect } from 'react';
import  AnswerPollQuestionComponent from './AnswerPollQuestionComponent';
import {UndetailedPollSection, UndetailedPollSectionWrapper} from '../styles/StyledComponents';


const DoPollComponent = ({poll}) => {
    
    return(
        <UndetailedPollSection>
        <h1>{poll.pollName}</h1>
        <AnswerPollQuestionComponent questionList={poll.questions}/>
        </UndetailedPollSection>
    
    )
};

export default DoPollComponent;


