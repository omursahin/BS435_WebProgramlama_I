import {getRandomQuizzes} from "../../../src/server/db/quizzes";

test('geçersiz quizler',()=>{
    expect(()=>{getRandomQuizzes(-1)}).toThrow();
    expect(()=>{getRandomQuizzes(0)}).toThrow();
    expect(()=>{getRandomQuizzes(9999)}).toThrow();
});

test("Tek 1 soru testi", () => {

    const quizzes = getRandomQuizzes(1);

    expect(quizzes.length).toBe(1);
    expect(quizzes[0].question).toBeDefined();
    expect(quizzes[0].answers).toBeDefined();
    expect(quizzes[0].answers.length).toBe(4);
});

test("Çoklu soru testi", () => {

    for(let i=0; i<1000; i++) {
        const quizzes = getRandomQuizzes(2);

        expect(quizzes.length).toBe(2);
        expect(quizzes[0].question).not.toBe(quizzes[1].question);
    }
});
