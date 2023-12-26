const quizzes = [
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

    },
    {
        question: "Aşağıdakilerden hangisi AJAX için doğrudur?",
        answers: [
            "JS koduna sunucu ile HTTP bağlantısı kurabilme yeteneği tanır.",
            "React uygulamasında sayfalar arası yönlendirme yapabilmeyi sağlar.",
            "fetch() komutu callback yaklaşımını kullanır.",
            "XMLHttpRequest, promise yaklaşımı kullanan yöntemdir."
        ],
        indexOfRightAnswer: 0,
        id: 8
    },
{
    question: "Aşağıdakilerden hangisi Promise için yanlıştır?",
    answers: [
        "resolve() fonksiyonu problemin başarı ile çözüldüğü ve bir değer dönmeye hazır olunduğunda çağırılır.",
        "reject() fonksiyoun Promise'in başarısız olması durumunda çağırılır.",
        "Promise'ler asenkron işlem yapmaya fayda sağlarlar.",
        "Asenkron olarak belirlenen fonksiyon async komutunu görene kadar çalışır."
    ],
    indexOfRightAnswer: 3,
    id: 9
}

];

const getRandomQuizzes = (numberOfQuizzes) => {
    if(numberOfQuizzes < 1 ){
        throw "Geçersiz quiz sayısı: "+numberOfQuizzes;
    }
    if(numberOfQuizzes > quizzes.length){
        throw "Çok sayıda quiz";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;

    while (i < numberOfQuizzes) {

        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => quizzes[e]);

}

module.exports = {quizzes, getRandomQuizzes};

