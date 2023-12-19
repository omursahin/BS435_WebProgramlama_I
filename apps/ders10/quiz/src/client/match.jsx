import React, {useEffect, useState} from "react";

// import {getRandomQuizzes} from "./quizzes";


export const Match = () => {
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);


    const getRandomQuizzes = async (numberOfQuizzes) => {

        if (numberOfQuizzes < 3) {
            throw "Geçersiz sayıda quiz: " + numberOfQuizzes;
        }

        const url = "/api/matches";

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err){
            return null;
        }

        if (response.status !== 200) {
            return null;
        }

        return payload;

    }
    const startNewMatch = async () => {
        const quizzes = await getRandomQuizzes(3);
        if (!quizzes) {
            setError("Soruları çekerken hata meydana geldi");
        } else {
            setMatch({
                victory: false,
                defeat: false,
                currentIndex: 0,
                quizzes
            });
            setError(null);
        }
    }

    useEffect(() => {
        startNewMatch();
    }, []);

    const handleClick = (correct) => {
        if (correct) {
            if (match.currentIndex === match.quizzes.length - 1) {
                // Son soru doğru ise kazandı
                setMatch({
                    victory: true
                });
            } else {
                // Değilse sonraki soruya geç
                setMatch(prev => ({
                    ...prev,
                    currentIndex: prev.currentIndex + 1
                }));
            }
        } else {
            setMatch({
                defeat: true
            });
        }
    }

    if (error) {
        return <h2>{error}</h2>
    }

    if (!match) {
        return (
            <p>Yükleniyor...</p>
        )
    }

    if (match.victory) {
        return (
            <div data-testid="game-result" className="game-result">
                <h2>Kazandın!</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={startNewMatch}>Yeni Oyun</button>
                </div>
            </div>
        )
    }

    if (match.defeat) {
        return (
            <div data-testid="game-result" className="game-result">
                <h2>Yanlış cevap, kaybettin :(</h2>
                <div className="action">
                    <button className="button new-game-button" onClick={startNewMatch}>Yeni Oyun</button>
                </div>
            </div>
        );
    }
    const count = "" + (match.currentIndex + 1) + "/" + match.quizzes.length;
    const quiz = match.quizzes[match.currentIndex];

    const renderAnswerTag = (prefix, answer, correct, handleClick) => {
        return <div className="answer" onClick={() => handleClick(correct)}
                    tabIndex="0">{prefix + answer}</div>
    }

    return (
        <div id={"quiz_" + quiz.id} className="quiz">
            <p className="question">Soru {count}: {quiz.question}</p>
            {renderAnswerTag("A: ", quiz.answers[0], quiz.indexOfRightAnswer === 0, handleClick)}
            {renderAnswerTag("B: ", quiz.answers[1], quiz.indexOfRightAnswer === 1, handleClick)}
            {renderAnswerTag("C: ", quiz.answers[2], quiz.indexOfRightAnswer === 2, handleClick)}
            {renderAnswerTag("D: ", quiz.answers[3], quiz.indexOfRightAnswer === 3, handleClick)}
        </div>
    )
}

