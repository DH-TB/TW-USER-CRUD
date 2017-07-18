import mysql from 'mysql';

const $conf = require('./conf');
const $sql = require('./userSqlMapping');
const pool = mysql.createPool($conf.mysql);

const jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    queryAll: (req, res, next) => {
        pool.getConnection((err, connection)=> {
            connection.query($sql.queryAll, (err, result)=> {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryByUserName: (req, res, next) => {
        const username = req.params.username;
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryByUserName, username, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
};