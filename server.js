var express = require('express');
var app = express();
require('dotenv').config();
var { graphqlHTTP } = require('express-graphql');
var port = process.env.PORT;



var schema = require('./Schema/index');
const db = require('./models')
app.use(express.json());

var rootValue = { "rootValue": "Global", dbConfig: db }

const context = (req) => {
    let token = process.env.ENCRPT_TOKEN;
    let host = req.headers.host;
    return { token, host }
}

app.use('/graphql',
    graphqlHTTP(async (req) => ({
        schema: schema,
        rootValue: rootValue,
        graphiql: true,
        context: () => context(req)
    }))
);
app.listen(port, () => {
    console.log(`Running a GraphQL API server at ${process.env.BASE_URL}:${port}/graphql`);
});

