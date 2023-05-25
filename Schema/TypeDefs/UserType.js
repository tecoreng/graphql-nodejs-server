
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql

//DEFINE DATA TYPES & ONLY GETTING DEFINE FIELDS IN REQUEST AND RESPONSE
const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        phone: { type: GraphQLString },
        status: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString }
    })
})

module.exports = userType;