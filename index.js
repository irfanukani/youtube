const express = require('express')
const dotenv = require('dotenv')
const App = express();

dotenv.config();

App.get('/', function(req, res) {
    res.send("Hello World!")
})

App.listen(process.env.PORT , () => {
    console.log("Started Server on port " + process.env.PORT);
})