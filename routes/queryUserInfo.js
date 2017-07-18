import express from 'express';
const router = express.Router();

import mysql from 'mysql';
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '472561212',
    port: '3306',
    database: 'UserManage',
});
connection.connect();

router.get('/getUser', (req, res, next)=> {
    const sql = 'SELECT * FROM userInfo';
    connection.query(sql, (err, result)=>{
        if (err) {
            return next(err);
        }
        res.send(result);
    });
    connection.end();
});

module.exports = router;
