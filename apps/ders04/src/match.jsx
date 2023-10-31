import React, {useState} from "react";
import ReactDOM from "react-dom";

import {getRandomQuizzes} from "./quizzes";


export const Match = () => {
    const [quiz, setQuiz] = useState(getRandomQuizzes(1))
    const handleCorrect = (isCorrect) => {
        if (isCorrect) {
            setQuiz(getRandomQuizzes(1));
            alert("Doğru")
        } else {
            alert("Yanlış")
        }
    }
    const getAnswerTag = (prefix, answer, isCorrect) => {
        return <div onClick={() => handleCorrect(isCorrect)} className="answer">{prefix}: {answer}</div>;
    }

    return (
        <div className="App">
            <div className="question">{quiz[0].question}</div>
            {getAnswerTag("A:", quiz[0].answers[0], quiz[0].indexOfRightAnswer === 0)}
            {getAnswerTag("B:", quiz[0].answers[1], quiz[0].indexOfRightAnswer === 1)}
            {getAnswerTag("C:", quiz[0].answers[2], quiz[0].indexOfRightAnswer === 2)}
            {getAnswerTag("D:", quiz[0].answers[3], quiz[0].indexOfRightAnswer === 3)}
        </div>
    )
}

