const mysql2 = require('mysql2')
const { connection } = require('./connection')

const getUsers = async () => {
    // const results = [];
    await connection.query("SELECT * from Users" , function (err , result) {
        console.log(result);
    });
}

module.exports = {
    getUsers
}