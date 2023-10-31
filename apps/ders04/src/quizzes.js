const quizzes = [
    {
        question: "JavaScript hangi tipte dildir?",
        answers: [
            "Güçlü ve statik yazımlı",
            "Güçlü ve dinamik yazımlı",
            "Zayıf ve statik yazımlı",
            "Zayıf ve dinamik yazımlı"
        ],
        indexOfRightAnswer: 3
    },
    {
        question: "JavaScript dilinde aşağıda verilen kodun çıktısı nedir? \n\n+(!![]+!![]+!![]+!![]+[]+(!![]+!![]))",
        answers: [
            "Derleme hatası",
            "Çalışma zamanı hatası",
            "42",
            "'42'"
        ],
        indexOfRightAnswer: 2
    },
    {
        question: "JavaScript dilinde false + true ifadesinin çıktısı nedir?",
        answers: [
            "false",
            "true",
            "'falsetrue'",
            "1"
        ],
        indexOfRightAnswer: 3
    },
    {
        question: "İfadenin çıktısı nedir?\n\n[3,28,1,2].sort()\n",
        answers: [
            "[1, 2, 3, 28]",
            "[1, 2, 28, 3]",
            "[28, 1, 2, 3]",
            "Runtime exception"
        ],
        indexOfRightAnswer: 1
    },
    {
        question: "Babel temel olarak hangi amaçla kullanılır?",
        answers: [
            "Geçerli bir JS koduna dönüştürmek (transpile) için",
            "Farklı JS kodlarını birlikte paketlemek için",
            "3. parti yazılımları indirmek için",
            "Test senaryolarını çalıştırmak için"
        ],
        indexOfRightAnswer: 0
    }
];

export const getRandomQuizzes = (numberOfQuizzes) => {
    if(numberOfQuizzes < 1 ){
        throw "Geçersiz quiz sayısı: "+numberOfQuizzes;
    }
    if(numberOfQuizzes > quizzes.length){
        throw "Çok sayıda quiz";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while(i < numberOfQuizzes) {
        const k = Math.floor(quizzes.length*Math.random());
        if(selection.includes(k)){
            continue;
        }
        selection[i] = k;
        i++;
    }
    return Array.from(selection).map(e => quizzes[e]);

}