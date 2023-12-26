const React = require('react');
const {quizzes} = require("../../src/server/db/quizzes");
const { mount } = require('enzyme');
const {Match}  = require('../../src/client/match');
const app = require('../../src/server/app');
const {asyncCheckCondition, overrideFetch} = require("../test-utils");


const isQuizDisplayed = (driver) =>{

    const quiz = driver.find('.quiz');
    const questions = driver.find('.question');
    const answers = driver.find('.answer');

    return quiz.length === 1 && questions.length === 1 && answers.length ===4;
}

const getDisplayedQuiz = (driver) => {
    const quizDiv = driver.find('.quiz').at(0);
    const html_id = quizDiv.prop('id');
    const id = parseInt(html_id.substring("quiz_".length, html_id.length));

    const quiz = quizzes.find(e => e.id === id);
    return quiz;

}

const waitForQuizDisplayed = async (driver) => {
    const displayed = await asyncCheckCondition(()=>{
        driver.update();
        return isQuizDisplayed(driver);
    }, 2000 ,200);

    return displayed;
}

test("test oluşturuldu",async ()=>{
    overrideFetch(app);
    const driver = mount(<Match/>);
    const displayed = await waitForQuizDisplayed(driver);
    expect(displayed).toEqual(true);
});


test("Yanlış cevap",async ()=>{
    overrideFetch(app);

    const driver = mount(<Match/>);
    await waitForQuizDisplayed(driver);


    const quiz = getDisplayedQuiz(driver);
    const wrong = (quiz.indexOfRightAnswer + 1) % 4;
    const first = driver.find('.answer').at(wrong);
    first.simulate('click');

    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Doğru");

    expect(lost).toEqual(true);
    expect(won).toEqual(false);

})

test("doğru cevap", async ()=>{
    overrideFetch(app);

    const driver = mount(<Match/>);
    await waitForQuizDisplayed(driver);


    const quiz = getDisplayedQuiz(driver);
    const correct = quiz.indexOfRightAnswer;

    const first = driver.find('.answer').at(correct);
    first.simulate('click');

    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Doğru");

    expect(lost).toEqual(false);
    expect(won).toEqual(false);

    //oyun devam ediyor
    const displayed = await waitForQuizDisplayed(driver);
    expect(displayed).toEqual(true);

});

test("Oyunu kazan",async ()=>{
    overrideFetch(app);

    const driver = mount(<Match/>);
    await waitForQuizDisplayed(driver);

    for(let i=0; i<3; i++) {

        const quiz = getDisplayedQuiz(driver);
        const correct = quiz.indexOfRightAnswer;

        const first = driver.find('.answer').at(correct);
        first.simulate('click');
        driver.update();
        //Burada yeni quiz gösterilene kadar da beklenebilir ancak bizim senaryomuzda buna ihtiyaç yok çünkü bütün soruları en başta çekiyoruz.
    }
    const lost = driver.html().includes("Yanlış");
    const won = driver.html().includes("Kazandın");

    expect(lost).toEqual(false);
    expect(won).toEqual(true);
});
