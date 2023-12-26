const decode = require('unescape');

export const quizzes = [
    {
        question: "JavaScript hangi tipte dildir?",
        answers: [
            "Güçlü ve statik yazımlı",
            "Güçlü ve dinamik yazımlı",
            "Zayıf ve statik yazımlı",
            "Zayıf ve dinamik yazımlı"
        ],
        indexOfRightAnswer: 3,
        id: 0
    },
    {
        question: "JavaScript dilinde aşağıda verilen kodun çıktısı nedir? \n\n+(!![]+!![]+!![]+!![]+[]+(!![]+!![]))",
        answers: [
            "Derleme hatası",
            "Çalışma zamanı hatası",
            "42",
            "'42'"
        ],
        indexOfRightAnswer: 2,
        id: 1
    },
    {
        question: "JavaScript dilinde false + true ifadesinin çıktısı nedir?",
        answers: [
            "false",
            "true",
            "'falsetrue'",
            "1"
        ],
        indexOfRightAnswer: 3,
        id: 2
    },
    {
        question: "İfadenin çıktısı nedir?\n\n[3,28,1,2].sort()\n",
        answers: [
            "[1, 2, 3, 28]",
            "[1, 2, 28, 3]",
            "[28, 1, 2, 3]",
            "Runtime exception"
        ],
        indexOfRightAnswer: 1,
        id: 3
    },
    {
        question: "Babel temel olarak hangi amaçla kullanılır?",
        answers: [
            "Geçerli bir JS koduna dönüştürmek (transpile) için",
            "Farklı JS kodlarını birlikte paketlemek için",
            "3. parti yazılımları indirmek için",
            "Test senaryolarını çalıştırmak için"
        ],
        indexOfRightAnswer: 0,
        id: 4
    },
    {
        question: "React için route (yönlendirme) eylemlerini aşağıdaki paketlerden hangisi yapmaktadır?",
        answers: [
            "jest-router",
            "babel-router",
            "enzyme-router",
            "react-router"
        ],
        indexOfRightAnswer: 3,
        id: 5
    },
    {
        question: "React uygulamasında yazılım testleri yazmak için aşağıdakilerden hangi paket çiftine ihtiyaç duyulmaktadır?",
        answers: [
            "react-router ve react-router-dom",
            "react ve react-dom",
            "enzyme ve jest",
            "babel ve webpack"
        ],
        indexOfRightAnswer: 2,
        id: 6
    },
    {
        question: "Aşağıdakilerden hangisi NodeJS tabanlı sunucu frameworküdür?",
        answers: [
            "Apache server",
            "Express",
            "Tomcat",
            "Nginx"
        ],
        indexOfRightAnswer: 1,
        id: 7

    }
];

export const getRandomQuizzes = async (numberOfQuizzes) => {
    if(numberOfQuizzes < 1 ){
        throw "Geçersiz quiz sayısı: "+numberOfQuizzes;
    }
    if(numberOfQuizzes > quizzes.length){
        throw "Çok sayıda quiz";
    }
    const url = "https://opentdb.com/api.php?type=multiple&amount=" + numberOfQuizzes;
    let response;
    let payload;

    try{
        response = await fetch(url);
        payload = await response.json();
    }catch (err) {
        return null;
    }

    if(response.status !== 200) {
        return null;
    }
    /*
    * {
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Television",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What year did the television company BBC officially launch the channel BBC One?",
         "correct_answer":"1936",
         "incorrect_answers":[
            "1948",
            "1932",
            "1955"
         ]
      },
      {
         "category":"History",
         "type":"multiple",
         "difficulty":"hard",
         "question":"What year was Canada founded in?",
         "correct_answer":"1867",
         "incorrect_answers":[
            "1798",
            "1859",
            "1668"
         ]
      },
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What is the mod &quot;Cry of Fear&quot; based off of?",
         "correct_answer":"Half-Life",
         "incorrect_answers":[
            "Counter Strike: Source",
            "Half-Life 2",
            "It&#039;s a stand alone game, not a mod"
         ]
      }
   ]
}
    * */
    return payload.results.map(q=>{
        const correct = Math.floor(Math.random() * 3);
        const answers = q.incorrect_answers.map(e=>decode(e));
        answers.splice(correct,0,decode(q.correct_answer));
        console.log(q.correct_answer)

        return {
            question: decode(q.question),
            answers: answers,
            indexOfRightAnswer: correct,
            id: 0
        }
    });
}
