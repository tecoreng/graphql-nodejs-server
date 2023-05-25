// const db=require('../../models')
// const Users = db.users;

const graphql = require('graphql');
const { GraphQLList, GraphQLInt } = graphql

const userType = require('../TypeDefs/UserType');

module.exports.USER_LIST = {
    type: new GraphQLList(userType),
    resolve: async (parent, args, context) => {
        let contextData = await context();
        console.log('context===>', contextData.token);
        let { dbConfig } = parent;
        let data = dbConfig.users.findAll();
        return data;
    }
}

module.exports.GET_SPECIFIC_USER = {
    type: new GraphQLList(userType),
    args:{
      id:{type:GraphQLInt}      
    },
    resolve: async(parent, args, context)=> {
        console.log('=====>>>>',args);
        let { dbConfig } = parent;
        let data = dbConfig.users.findAll({ where: { id: args.id } });
        return data;
    }
}