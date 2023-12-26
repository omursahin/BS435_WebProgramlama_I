const { gql } = require('apollo-server-express');


/*
    gql`...` içerisinde taslak sorgular belirlenir.

    Varsayılan olarak null olabilir değerdir. Null olması istenmiyorsa sonunda "!"
    ile belirtilmesi gerekir.
 */

const typeDefs = gql`
    # Haberler icin GraphQL API
    type Query{
        
        #Butun haberleri cek
        getNews: [News!]
        
        #Belirli bir id'ye ait haberi cek
        getNewsById(id: String!) : News
        
        #Belirli bir id'ye ait kulalniciyi cek
        getUserById(id: String!) : User
    }

    type Mutation{
        createNews(title: String!, text: String!, authorId: String!): String
        createUser(id: String!, name: String!, middlename: String, surname: String!, email: String!) : Boolean!
        addComment(text: String!, newsId: String!, authorId: String!): Boolean!
    }


    type News{
        id: String
        title: String
        text: String
        author: User
        comments: [Comment!]
        commentsCount: Int
    }

    type Comment{
        id: String
        text: String
        author: User
        news: News
    }

    type User{
        id: String,
        name: String
        middlename: String
        surname: String,
        email: String
    }
`;

module.exports = typeDefs;