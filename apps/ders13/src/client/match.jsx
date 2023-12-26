import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// import {getRandomQuizzes} from "./quizzes";


export const Match = ({user, setUser, fetchAndUpdateUserInfo}) => {
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const nav = useNavigate();

    const fetchCurrentMatch = async () => {

        const url = "/api/matches/ongoing";

        let response;

        try {
            response = await fetch(url);
        } catch (err) {
            setError("Sunucu bağlantısında hata" + err);
            return null;
        }
        if (response.status == 401) {
            setUser(null);
            nav('/');
            return null;
        }
        if (response.status == 404) {
            await startNewMatch();
            return;
        }
        if (response.status !== 200) {
            setError("Sunucu bağlantısında hata. Hata kodu:" + response.status);
            return null;
        }
        const match = await response.json();
        setMatch(match);
        setError(null);
    }
    const startNewMatch = async () => {
        const url = "/api/matches";

        let response;

        try {
            response = await fetch(url, {
                method: "post"
            });
        } catch (err) {
            setError("Sunucu bağlantısında hata: " + err);
            return;
        }

        if (response.status === 401) {
            setUser(null);
            nav("/");
            return;
        }

        if (response.status !== 201) {
            setError("Sunucu bağlantısında hata. Hata kodu: " + response.status);
            return;
        }

        const match = await response.json();
        setMatch(match);
        setError(null);
    }

    useEffect(() => {
        fetchCurrentMatch();
    }, []);

    const doAnswer = async index => {
        const url = "/api/matches/ongoing";

        let response;

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({answerIndex: index})
            });
        } catch (err) {
            setError("Sunucu bağlantısında hata: " + err);
            return;
        }

        if (response.status === 401) {
            setUser(null);
            nav("/");
            return;
        }

        if (response.status !== 201) {
            setError("Sunucu bağlantısında hata. Durum kodu: " + response.status);
            return;
        }

        const match = await response.json();
        setMatch(match);
        setError(null);

        if (match.victory || match.defeat) {
            await fetchAndUpdateUserInfo();
        }
    };

    const victoriesDefeatsDiv = () => {
        return (
            <div>
                <p>Galibiyet: {user.victories}</p>
                <p>Mağlubiyet: {user.defeats}</p>
            </div>
        );
    };

    if (error) {
        return <h2>HATA: {error}</h2>;
    }

    if (!match) {
        return <h2>Yükleniyor...</h2>;
    }
    if (match.victory) {
        return (
            <div className="center">
                <h2>Kazandın!</h2>
                <div className="action">
                    <button
                        className="button new-game-button"
                        onClick={startNewMatch}
                    >
                        Yeni Oyun
                    </button>
                </div>
                {user ? victoriesDefeatsDiv() : <div/>}
            </div>
        );
    }

    if (match.defeat) {
        return (
            <div className="center">
                <h2>Yanlış Cevap! Kaybettin :(</h2>
                <div className="action">
                    <button
                        className="button new-game-button"
                        onClick={startNewMatch}
                    >
                        Yeni Oyun
                    </button>
                </div>
                {user ? victoriesDefeatsDiv() : <div/>}
            </div>
        );
    }

    const answerDiv = (prefix, index) => {
        return (
            <button className="answer" onClick={() => doAnswer(index)}>
                {prefix + match.currentQuiz.answers[index]}
            </button>
        );
    };

    const count = "" + (match.currentIndex + 1) + "/" + match.numberOfQuizzes;
    return (
        <div className={"quiz"} id={"quiz_" + match.currentQuiz.id}>
            <p className={"question"}>
                Question {count}: {match.currentQuiz.question}
            </p>
            {answerDiv("A: ", 0)}
            {answerDiv("B: ", 1)}
            {answerDiv("C: ", 2)}
            {answerDiv("D: ", 3)}
        </div>
    );
}

