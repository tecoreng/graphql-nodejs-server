
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql

//DEFINE DATA TYPES & ONLY GETTING DEFINE FIELDS IN REQUEST AND RESPONSE
const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

const db=require('./models')
const Users = db.users;

const RootQuery = new GraphQLObjectType({
    name: "tester",
    fields: {
        userList: {
            type: new GraphQLList(userType),
            resolve(parent, args) {                
                let data = Users.findAll();
                return data;
            }
        }
    }

});

module.exports = new GraphQLSchema({ query: RootQuery })