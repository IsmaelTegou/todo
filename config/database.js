const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', '1901', {
    host: 'localhost',
    dialect: 'mysql'
});

// const sequelize = new Sequelize('postgres://ismael:1901:5432/todo_db');

module.exports = sequelize;