const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const { USER_LIST, GET_SPECIFIC_USER } = require('../Schema/Queries/User')
const { CREATE_USER, UPDATE_USER, UPDATE_USER_TRICKY,DELETE_USER   } = require('../Schema/Mutations/User')


const RootQuery = new GraphQLObjectType({
    name: "tester",
    fields: {
        getUserList: USER_LIST,
        getSpecificUser: GET_SPECIFIC_USER
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        updateUser: UPDATE_USER,
        updateUserTricky: UPDATE_USER_TRICKY,
        deleteUser: DELETE_USER,
    }
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })