import React, {useState} from "react";
import CreateQuestionComponent from './CreateQuestionComponent'
import QuestionListComponent from './QuestionListComponent'
import { FinishPollButton } from '../styles/StyledComponents'
import { CreatePollForm } from '../styles/StyledComponents'

const CreatePollComponent = () => {
    const [questionList, setQuestionList] = useState([]);
    const [pollName, setPollName] = useState("");

    const addQuestionToList = (questionWithAnswers) =>{
        let exists = false;
        questionList.forEach(element => {
            if(element.question===questionWithAnswers.question){
                exists = true;
            }
        });
        if(!exists){
        setQuestionList(prev => [...prev,questionWithAnswers]);
        }
        else{
            alert("question allready exists");
        }
    }

    const handlePollNameChange = (e) =>{
        const input = e.target.value;
        setPollName(input);
    }

    const addPoll = (e) =>{
        e.preventDefault();
        const poll = {
            pollName: pollName,
            creatorId: 0,
            questions: questionList
        }

        console.log(poll);
    }


    return (
        <CreatePollForm>
            <QuestionListComponent questionList={questionList}/>
            <CreateQuestionComponent addQuestionToList={addQuestionToList}/>
            <section>
                <p>Poll name</p>
                <input value={pollName} onChange={handlePollNameChange} type="text"></input>
                <FinishPollButton onClick={addPoll}>Save Poll</FinishPollButton>
            </section>

        </CreatePollForm>
    )
}

export default CreatePollComponent