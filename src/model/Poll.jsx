import React ,{useState} from 'react';

export const Poll = () => {
    const [pollName, setPollName] = useState("");
    const [creatorId, setCreatorId] = useState(0);
    const [questions, setQuestions] = useState([])
    return{
        pollName,
        setPollName,
        creatorId,
        setCreatorId,
        questions,
        setQuestions
    }
};

export const Question = () => {
    const [question, setQuestion] = useState("")
    const [id, setId] = useState(0);
    const [answers, setAnswers] = useState([]);
    return{
        question,
        setQuestion,
        id,
        setId,
        answers,
        setAnswers
    }
}

export const Answer = () => {
    const [answer, setAnswer] = useState("");
    const [id, setId] = useState(0);
    return{
        answer,
        setAnswer,
        id,
        setId
    }
}
