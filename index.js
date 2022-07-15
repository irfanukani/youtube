const express = require('express')
const dotenv = require('dotenv')
const { connection } = require('./db/connection');
const cors = require('cors');

const App = express();


dotenv.config();

App.use(express.json());
App.use(cors());

App.use('/api/users' , require("./routes/users"));

App.listen(process.env.PORT , () => {
    console.log("Started Server on port " + process.env.PORT);
})
