const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
})

sequelize.authenticate()
    .then(() => {
        console.log("Database Connected....")
    })
    .catch(e => {
        console.log("Erorr====>" + e)
    })

module.exports = sequelize;