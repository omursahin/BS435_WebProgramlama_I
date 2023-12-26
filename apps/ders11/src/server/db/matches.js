const {reportEndOfMatch} = require("./users");
const {getRandomQuizzes} = require("./quizzes");

/**
 * Key -> User Id
 * Value -> Match bilgisi
 */
const matches = new Map();

let counter = 0;


function createMatch(userId, numberOfQuizzes) {

    const ongoing = matches.get(userId);
    if (ongoing) {
        reportEndOfMatch(userId, false);
    }

    const id = counter;
    counter++;

    const match = {
        id: id,
        current: 0,
        quizzes: getRandomQuizzes(numberOfQuizzes),
        victory: false,
        defeat: false
    };

    matches.set(userId, match);

    return match;
}

function getMatch(userId) {
    return matches.get(userId);
}

function removeMatch(userId){
    matches.delete(userId);
}


module.exports = {getMatch, createMatch, removeMatch};