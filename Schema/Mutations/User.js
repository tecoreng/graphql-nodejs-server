// const db = require('../../models')
// const Users = db.users;

const graphql = require('graphql');
const { GraphQLList, GraphQLString, GraphQLInt } = graphql

const userType = require('../TypeDefs/UserType');
const ResType = require('../TypeDefs/ResType');


module.exports.CREATE_USER = {
    type: userType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLInt }
    },
    resolve: async (parent, args, context) => {
        let { dbConfig } = parent;
        await dbConfig.users.create({
            name: args.name,
            email: args.email,
            gender: args.gender,
            status: args.status,
        });
        return args;
    }
    // resolve(parent, args,resolve) {
    //     Users.create({
    //         name: args.name,
    //         email: args.email,
    //         gender: args.gender,
    //         status: args.status,
    //     });
    //     return args;
    // }
}


module.exports.UPDATE_USER = {
    type: userType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLInt }
    },
    resolve: async (parent, args, context) => {
        let { dbConfig } = parent;
        await dbConfig.users.update({
            name: args.name,
            email: args.email,
            gender: args.gender,
            status: args.status,
        }, {
            where: {
                id: args.id
            }
        });
        return args;
    }
}

module.exports.UPDATE_USER_TRICKY = {
    type: ResType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLInt }
    },
    resolve: async (parent, args, context) => {
        let { dbConfig } = parent;
        await dbConfig.users.update({
            name: args.name,
            email: args.email,
            gender: args.gender,
            status: args.status,
        }, {
            where: {
                id: args.id
            }
        });
        return {
            status: 200,
            message: "You have sucessfully updated records...",
            error: ""
        };
    }
}

module.exports.DELETE_USER = {
    type: ResType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: async (parent, args, context) => {
        let { dbConfig } = parent;
        await dbConfig.users.destroy({
            where: {
                id: args.id
            }
        });
        return {
            status: 200,
            message: "You have sucessfully deleted records...",
            error: ""
        };
    }
}

