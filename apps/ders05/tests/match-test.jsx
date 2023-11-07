const React = require('react');
const {quizzes} = require("../src/client/quizzes");
const { mount } = require('enzyme');
const {Match}  = require('../src/client/match');

const checkQuizIsDisplayed = (driver) =>{

    const quiz = driver.find('.quiz');
    expect(quiz.length).toEqual(1);

    const questions = driver.find('.question');
    expect(questions.length).toEqual(1);

    const answers = driver.find('.answer');
    expect(answers.length).toEqual(4);
}

const getDisplayedQuiz = (driver) => {
    const quizDiv = driver.find('.quiz').at(0);
    const html_id = quizDiv.prop('id');
    const id = parseInt(html_id.substring("quiz_".length, html_id.length));

    const quiz = quizzes.find(e => e.id === id);
    return quiz;

}
test("test oluşturuldu",()=>{
    const driver = mount(<Match/>);
    checkQuizIsDisplayed(driver);
});

test("Yanlış cevap",()=>{
    const driver = mount(<Match/>);
    checkQuizIsDisplayed(driver);

    const quiz = getDisplayedQuiz(driver);
    const wrong = (quiz.indexOfRightAnswer + 1) % 4;
    const first = driver.find('.answer').at(wrong);
    first.simulate('click');

    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Kazandın");

    expect(lost).toEqual(true);
    expect(won).toEqual(false);

})

test("doğru cevap", ()=>{
    const driver = mount(<Match/>);

    checkQuizIsDisplayed(driver);

    const quiz = getDisplayedQuiz(driver);
    const correct = quiz.indexOfRightAnswer;

    const first = driver.find('.answer').at(correct);
    first.simulate('click');

    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Kazandın");

    expect(lost).toEqual(false);
    expect(won).toEqual(false);

    //oyun devam ediyor
    checkQuizIsDisplayed(driver);
});

test("Oyunu kazan",()=>{
    const driver = mount(<Match/>);
    for(let i=0; i<3; i++) {
        checkQuizIsDisplayed(driver);

        const quiz = getDisplayedQuiz(driver);
        const correct = quiz.indexOfRightAnswer;

        const first = driver.find('.answer').at(correct);
        first.simulate('click');
    }
    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Kazandın");

    expect(lost).toEqual(false);
    expect(won).toEqual(true);
});
