import React, { useState, useEffect } from 'react';
import  AnswerPollQuestionComponent from './AnswerPollQuestionComponent';
import {UndetailedPollSection, UndetailedPollSectionWrapper, FormButton} from '../styles/StyledComponents';


const DoPollComponent = ({poll, setPoll}) => {


    return(
        <UndetailedPollSection>
        <h1>{poll.pollName}</h1>
        <AnswerPollQuestionComponent setPoll={setPoll} questionList={poll.questions}/>
        </UndetailedPollSection>
        
    )
};

export default DoPollComponent;


