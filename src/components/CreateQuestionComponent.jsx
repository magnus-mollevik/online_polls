import React, { useState } from "react";
import { ButtonBlue } from '../styles/StyledComponents';
import { CreateQuestionDiv } from '../styles/StyledComponents';

const CreateQuestionComponent = ({ addQuestionToList }) => {
    const [answersList, setAnswersList] = useState([]);
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");

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
                answersList.push(answer);
                setAnswersList(answersList);
                handleAnswerChange(e);
            }
            else {
                alert("answer allready exists");
            }
        }
    };

    const handleQuestionChange = (e) => {
        const input = e.target.value;
        setQuestion(input);
    };

    const handleQuestion = (e) => {
        e.preventDefault();
        const QuestionWithAnswers = {
            question: question,
            answersList: answersList
        }
        if (QuestionWithAnswers.answersList.length < 0) {
            alert("You haven't added any answers")
        }
        if (QuestionWithAnswers.question === "") {
            alert("Please add a question")
        }
        else {
            addQuestionToList(QuestionWithAnswers);
            clearAll();
        }
    };

    const clearAll = () => {
        setAnswersList([]);
        setAnswer("");
        setQuestion("");
    }

    const handleAnswerChange = (e) => {
        const input = e.target.value;
        setAnswer(input);
    }

    return (
        <CreateQuestionDiv>
            <p>Question</p>
            <input value={question} onChange={handleQuestionChange} type="text"></input>
            <p>Answer</p>
            <input value={answer} onChange={handleAnswerChange} type="text"></input>
            <ButtonBlue onClick={handleAnswer}>Add Answer</ButtonBlue>
            <div>
                <p>{question}</p>
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