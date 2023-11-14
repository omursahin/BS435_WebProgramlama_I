*Ders 06* kapsamında,

* Callback ve promise yaklaşımlarını inceledik.
* Quiz uygulamasında ilk olarak babel ayarlarımızı aşağıdaki gibi güncelledik.

  ```
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/react"
  ]

  ```
* Daha sonra Quizzes.js'de soruları [https://opentdb.com/](https://opentdb.com/) adresinden çekmek için ayarlamalarda bulunduk. Bu ayarlamalar için aşağıdaki kodları kullandık:



  ```
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
  ```
Buradaki decode unescape paketi ile birlikte gelmektedir ve Türkçe karakter uyumsuzluğunu çözmek için kullanılmaktadır.
* Uygulama içerisinde ise async bir istek ile bu soruları çektik.
