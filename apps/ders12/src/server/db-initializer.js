const DB = require('./db');

module.exports = {
    initDB: () => {
        const rachel = "Rachel";
        const ross = "Ross";
        const joey = "Joey";
        const phoebe = "Phoebe";
        const chandler = "Chandler";
        const monica = "Monica";

        DB.createUser(rachel, "Rachel", null, "Green", "rachel@erciyes.edu.tr")
        DB.createUser(ross, "Ross", null, "Geller", "ross@erciyes.edu.tr")
        DB.createUser(joey, "Joey", null, "Tribbiani", "joey@erciyes.edu.tr")
        DB.createUser(phoebe, "Phoebe", null, "Buffey", "phoebe@erciyes.edu.tr")
        DB.createUser(chandler, "Chandler", "Muriel", "Bing", "chandler@erciyes.edu.tr")
        DB.createUser(monica, "Monica", null, "Geller", "monica@erciyes.edu.tr")

        const rossNews = DB.createNews("Evleniyorum", "Düğünüme beklerim. Dr. Geller", ross);
        DB.addComment("Yine mi?",rossNews,monica);
        DB.addComment("Yemekli mi?",rossNews,joey);
        DB.addComment("Oley!",rossNews,phoebe);
        DB.addComment("Daha boşanmadık ki!",rossNews,rachel);

        const joeyNews = DB.createNews("Herkese duyuruyorum!","JOEY DOES'T SHARE FOOD",joey);
        DB.addComment("Teşekkür ederim.",joeyNews,phoebe);
        DB.addComment("Challenge accepted.",joeyNews,chandler);
        DB.addComment("OK.",joeyNews,monica);
        DB.addComment("Tamam. Sincerely, Dr. Geller.",joeyNews,ross);
    }
}