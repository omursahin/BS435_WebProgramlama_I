*Ders 09* kapsamında,

Aşağıdaki paketler kurulmalıdır:

```
yarn add concurrently --dev
yarn add nodemon -–dev
yarn add express-session 
yarn add passport 
yarn add passport-local
```
Ardından package.json içerisindeki scripts alanı da aşağıdaki gibi düzenlenerek hem frontend hem de backend'in aynı anda çalışabilmesi sağlanmaktadır.
```
"scripts": {
  "build": "webpack --mode production",
  "dev": "concurrently \"yarn watch:client\" \"yarn watch:server\"",
  "test": "jest --coverage",
  "start": "node src/server/server.js",
  "watch:client": "webpack --watch --mode development",
  "watch:server": "nodemon src/server/server.js --watch src/server --watch public/bundle.js"
}
```
* Match içerisinde de getRandomQuizzes yeniden yazılarak backend'ten sorular çekilecek.

* Login isteyeceği için test etmek için matches-api.js içerisindeki aşağıdaki kodlar yorum yapılabilir.
```
if (!req.user) {
    res.status(401).send();
    return;
}
```