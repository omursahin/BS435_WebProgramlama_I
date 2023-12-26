/*
    Veritabanını ve veritabanı işlemlerini simüle etmektedir.
 */

const users = new Map();

const news = new Map();

let counter = 0;

const createId = () => {
    const id = "id" + counter;
    counter++;
    return id;
};
const reset = () => {
    users.clear();
    news.clear();
    counter = 0;
}
const getNews = () => Array.from(news.values());


const getNewsById = (id) => news.get(id)

const createNews = (title, text, authorId) => {

    if (!users.get(authorId)) {
        return null;
    }

    const id = createId();

    news.set(id, {id, title, text, authorId, comments: []});

    return id;
}

const getUserById = (id) => users.get(id);


const createUser = (id, name, middlename, surname, email) => {

    if (!id || users[id]) {
        return false;
    }

    users.set(id, {id, name, middlename, surname, email});

    return true;
}

const addComment = (text, newsId, authorId) => {

    if (!news.get(newsId) || !users.get(authorId)) {
        return false;
    }

    const id = createId();
    const comment = {id, text, newsId, authorId, newsId};

    news.get(newsId).comments.push(comment);

    return true;
}

module.exports = {reset, getNews, getNewsById, createNews, getUserById, createUser, addComment};