
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = graphql

//DEFINE DATA TYPES & ONLY GETTING DEFINE FIELDS IN REQUEST AND RESPONSE
const userType = new GraphQLObjectType({
    name: 'resType',
    fields: () => ({
        status: { type: GraphQLBoolean },
        message: { type: GraphQLString },
        error: { type: GraphQLString }
    })
})

module.exports = userType;