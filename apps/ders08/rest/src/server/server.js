const app = require("./app");
const {initMovies} = require("./repository");
const port = process.env.PORT || 8081;

app.listen(port, () => {
    initMovies();
    console.log('Started RESTful API on port ' + port);
});