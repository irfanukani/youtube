const dotenv = require('dotenv')
const mysql = require('mysql2');
const { getUsers } = require('./queries');

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');


module.exports = {
    connection
}