import React, { useState, useEffect } from "react";
import CreateQuestionComponent from './CreateQuestionComponent'
import QuestionListComponent from './QuestionListComponent'
import { FinishPollButton } from '../styles/StyledComponents'
import { CreatePollForm } from '../styles/StyledComponents'
import { create } from '../utils/eventService.js'

const CreatePollComponent = () => {
    const [questionList, setQuestionList] = useState([]);
    const [pollName, setPollName] = useState("");
    const [error, setError] = useState([]);

    const addQuestionToList = (questionWithAnswers) => {
        let exists = false;
        questionList.forEach(element => {
            if (element.question === questionWithAnswers.question) {
                exists = true;
            }
        });
        if (!exists) {
            setQuestionList(prev => [...prev, questionWithAnswers]);
        }
        else {
            alert("question allready exists");
        }
    }

    const handlePollNameChange = (e) => {
        const input = e.target.value;
        setPollName(input);
    }

    const addPoll = (e) => {
        e.preventDefault();
        const poll = {
            pollName: pollName,
            creator: "5fa9618f4a5bec4ae8630bfc",
            questions: questionList,
        }

        console.log(poll);
        sendPollToApi(poll);
    }

    const sendPollToApi = (poll) => {
        const sendData = async () => {
            const { data, error } = await create(poll);
            if (error) {
                setError(error);
            }
            else {
                console.log("success posted!")
                console.log(data);
            }
        };
        sendData();
    }


    return (
        <CreatePollForm>
            <QuestionListComponent questionList={questionList} />
            <CreateQuestionComponent addQuestionToList={addQuestionToList} />
            <section>
                <p>Poll name</p>
                <input value={pollName} onChange={handlePollNameChange} type="text"></input>
                <FinishPollButton onClick={addPoll}>Save Poll</FinishPollButton>
            </section>

        </CreatePollForm>
    )
}

export default CreatePollComponent