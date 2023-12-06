/*
Burada veritabanına erişim de sağlanabilir ancak kolaylık
olması için memory'de tutuyoruz.
*/

const movies = new Map();

//tekil id için
let counter = 0;

const createNewMovie = (title,director,year) => {
    const id = "" + counter;
    counter++;

    const movie = {
        id,
        title,
        director,
        year
    };

    movies.set(id, movie);

    return id;
}

const deleteMovie = (id) => movies.delete(id);

const getMovie = (id) => movies.get(id);

const getAllMovies = () => Array.from(movies.values());

const updateMovie = (movie) => {
    if(! movies.has(movie.id)){
        return false;
    }

    movies.set(movie.id,movie);
    return true;
}

const getAllMoviesSince = (year) => Array.from(movies.values()).filter(m=>m.year>=year);

const initMovies = () => {
    movies.clear();
    counter = 0;
    createNewMovie("Noviembre", "Achero Mañas", 2003);
    createNewMovie("The Father", "Florian Zeller", 2020);
    createNewMovie("Gadjo Dilo", "Tony Gatlif",1997);
    createNewMovie("Mandariiinid","Zaza Urushadze",2018);
}

module.exports = {initMovies,getAllMovies,
getAllMoviesSince,updateMovie,getMovie,deleteMovie,createNewMovie}