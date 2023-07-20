const Sequelize = require('sequelize'); //puxando sequelize
const sequelize = new Sequelize('crud', 'root', '1234',{
    dialect: 'mysql', // qual banco irei usar
    host: 'localhost', //aonde esta o banco
    port: '3306'
} ) //nome do banco, usuario, senha, options



module.exports = sequelize;