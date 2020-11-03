import React, { useState } from "react";
import { ButtonBlue } from '../styles/StyledComponents';
import { CreateQuestionDiv } from '../styles/StyledComponents';

const CreateQuestionComponent = (props) => {
    const [answersList, setAnswersList] = useState([]);
    const [answer, setAnswer] = useState("");

    const handleAnswer = (e) => {
        e.preventDefault();
        if (answer !== "") {
            let exist = false;
            answersList.forEach(element => {
                if (element === answer) {
                    exist = true;
                }
            })
            if (!exist) {
                answersList.push(answer)
                setAnswersList(answersList);
                handleAnswerChange(e);
            }
        }

    };

    const handleQuestion = (e) => {

    };

    const handleAnswerChange = (e) => {
        const input = e.target.value;
        setAnswer(input);
    }

    return (
        <CreateQuestionDiv>
            <p>Question</p>
            <input type="text"></input>
            <p>Answer</p>
            <input value={answer} onChange={handleAnswerChange} type="text"></input>
            <ButtonBlue onClick={handleAnswer}>Add Answer</ButtonBlue>
            <div>
                <p>Answeres</p>
                <ul>{answersList.map((item) => {
                    return <li key={item}>{item}</li>
                })}
                </ul>
            </div>
            <ButtonBlue onClick={handleQuestion}>Add question</ButtonBlue>
        </CreateQuestionDiv>
    )
}



export default CreateQuestionComponent