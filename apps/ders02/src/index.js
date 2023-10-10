import {getRandomQuizzes} from "./quizzes";


export const newQuiz = () => {

    const quiz = getRandomQuizzes(1)[0];

    displayQuiz(quiz);
}

const displayQuiz = (quiz) => {

    const { question, answers, indexOfRightAnswer } = quiz;

    let html = "<p class='question'>Soru: "+question+"</p>\n";
    html += getAnswerTag("A:",answers[0],indexOfRightAnswer === 0);
    html += getAnswerTag("B:",answers[1],indexOfRightAnswer === 1);
    html += getAnswerTag("C:",answers[2],indexOfRightAnswer === 2);
    html += getAnswerTag("D:",answers[3],indexOfRightAnswer === 3);
    const quizDiv = document.getElementById("quizDivId");
    quizDiv.innerHTML = html;
}

const getAnswerTag = (prefix, answer, isCorrect) => {
    let onclick;
    if(isCorrect){
        onclick = "alert('Doğru Cevap'); Quiz.newQuiz();";
    }else {
        onclick = "alert('Yanlış Cevap');";
    }

    const html = "<div class='answer' onclick=\""+onclick+"\">"+prefix+answer+"</div>";
    return html;
}