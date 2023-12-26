const path = require('path');
const express = require('express');
const resolvers = require('./resolvers');
const typeDefs =  require('./schema');
const { ApolloServer} = require('apollo-server-express');


const app = express();

const apollo = new ApolloServer({ typeDefs, resolvers });
apollo.applyMiddleware({ app , path:"/graphql"});

app.use(express.static('public'));


app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;