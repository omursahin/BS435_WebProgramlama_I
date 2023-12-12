const express = require('express');
const {getRandomQuizzes} = require("../db/quizzes");

const router = express.Router();

router.get('/matches',(req,res)=>{
    if (!req.user) {
        res.status(401).send();
        return;
    }

    const payload = getRandomQuizzes(3);

    res.status(200).json(payload);
});

module.exports = router;