import {useState} from "react";
import Result from "./result.jsx";


function Quiz(){
    const questionList = [
        {
            question : "What is the capital of France?",
            options : ["Berlin", "London", "Paris", "Rome"],
            answer : "Paris"
        },
        {
            question : "Which language is used for web apps?",
            options : ["PHP", "Python", "Javascript", "All"],
            answer : "All"
        },
        {
            question : "What does JSX stand for ?",
            options : ["JavaScript XML", "Java Syntax Extension", "Just a Simple example", "None of the above"],
            answer : "Javascript XML"
        },
    ];

    const [selectedOption, setSelectedOption] = useState("None");

    const initialAnswer = [null,null,null];
    const [userAnswer, setUserAnswer] = useState(initialAnswer);

    const[currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswer[currentQuestion];

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleSelectedOption = (option) => {
        const newUserAnswer = [...userAnswer];
        newUserAnswer[currentQuestion] = option;
        setUserAnswer(newUserAnswer);
    }

    const goToNext = () => {
        if(currentQuestion === questionList.length-1){
            setIsQuizFinished(true);
        }else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    const goToPrevious = () => {
        if(currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    }

    if(isQuizFinished){
        return <Result userAnswer={userAnswer} questionList={questionList}/>
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questionList[currentQuestion].question}</p>
            {questionList[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ? " selected" : " ")} onClick={() => handleSelectedOption(option)}>{option}</button>
            ))}
            <div className="nav-buttons">
                <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={selectedAnswer == null}>{currentQuestion === questionList.length -1 ? "Finish Quiz" : "Next"}</button>
            </div>
        </div>
    );
}


export default Quiz;