const { connection } = require('../db/connection');

const router = require('express').Router();

router.get('/:id' , (req , res)=> {
    const id = req.params.id;
    connection.query(`SELECT * from Users WHERE id = ${id}` , (err , results) => {
        if(err) res.send("Error Occured");
        else res.send(results)
    })
})

router.post('/login' , (req , res)=> {
    const email = req.body.email;
    const password = req.body.password;

    connection.query(`SELECT * from Users WHERE email = ? and password = ?` , [email , password] , (err , results) => {
        if(err) res.send("Error Occured" + err);
        else res.send(results)
    })
})

router.post('/signup' , (req , res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const channel_name = req.body.channel_name;

    connection.query(`INSERT INTO Users (email , password , channel_name )VALUES (? , ? , ?)` , [email , password , channel_name] , (err , results) => {
        if(err) res.send("Error Occured" + err);
        else res.send(results)
    })
})

module.exports = router