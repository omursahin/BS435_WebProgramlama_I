const quizzes = [
    {
        question: "JavaScript hangi tipte dildir?",
        answer_0: "Güçlü ve statik yazımlı",
        answer_1: "Güçlü ve dinamik yazımlı",
        answer_2: "Zayıf ve statik yazımlı",
        answer_3: "Zayıf ve dinamik yazımlı",
        indexOfRightAnswer: 3
    },
    {
        question: "JavaScript dilinde aşağıda verilen kodun çıktısı nedir? \n\n+(!![]+!![]+!![]+!![]+[]+(!![]+!![]))",
        answer_0: "Derleme hatas",
        answer_1: "Çalışma zamanı hatası",
        answer_2: "42",
        answer_3: "'42'",
        indexOfRightAnswer: 2
    },
    {
        question: "JavaScript dilinde false + true ifadesinin çıktısı nedir?",
        answer_0: "false",
        answer_1: "true",
        answer_2: "'falsetrue'",
        answer_3: "1",
        indexOfRightAnswer: 3
    }
];
let latestQuestionIndex;

const newQuiz = () => {

    let index = Math.floor(Math.random()*quizzes.length)
    if(latestQuestionIndex == index) {
        index = (index + 1) % quizzes.length
    }
    const quiz = quizzes[index];
    latestQuestionIndex = index;

    displayQuiz(quiz);
}

const displayQuiz = (quiz) => {
    const { question, answer_0, answer_1, answer_2, answer_3, indexOfRightAnswer } = quiz;
    let html = "<p class='question'>Soru: "+question+"</p>\n";
    html += getAnswerTag("A:",answer_0,indexOfRightAnswer === 0);
    html += getAnswerTag("B:",answer_1,indexOfRightAnswer === 1);
    html += getAnswerTag("C:",answer_2,indexOfRightAnswer === 2);
    html += getAnswerTag("D:",answer_3,indexOfRightAnswer === 3);
    console.log(html);
    const quizDiv = document.getElementById("quizDivId");
    quizDiv.innerHTML = html;
}

const getAnswerTag = (prefix, answer, isCorrect) => {
    let onclick;
    if(isCorrect){
        onclick = "alert('Doğru Cevap'); newQuiz();";
    }else {
        onclick = "alert('Yanlış Cevap');";
    }

    const html = "<div class='answer' onclick=\""+onclick+"\">"+prefix+answer+"</div>";
    return html;
}