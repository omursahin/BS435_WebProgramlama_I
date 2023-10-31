const React = require('react');
const { mount } = require('enzyme');
const {Match}  = require('../src/match');

const checkQuizIsDisplayed = (driver) =>{
    const questions = driver.find('.question');
    expect(questions.length).toEqual(1);
}

test("test oluşturuldu",()=>{
    const driver = mount(<Match/>);
    checkQuizIsDisplayed(driver);
});

test("cevap ver testi", () => {
    const driver = mount(<Match/>);

    let msg = undefined;

    global.alert = (s) => {msg = s};

    const first = driver.find('.answer').at(3);
    first.simulate('click');

    checkQuizIsDisplayed(driver);
    expect(msg).toBeDefined();
})

test("çoklu test", () => {
    let driver = mount(<Match/>);


    let msg = undefined;

    global.alert = (s) => {msg = s};

    for(let i=0;i<20;i++){

    const first = driver.find('.answer').at(3);
    first.simulate('click');

    checkQuizIsDisplayed(driver);
    expect(msg).toBeDefined();
    msg = undefined;
    driver = mount(<Match/>);

    }
})
