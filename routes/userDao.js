import mysql from 'mysql';

const $conf = require('./conf');
const $sql = require('./userSqlMapping');
const pool  = mysql.createPool($conf.mysql);

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, (err, result)=>{
                if (err) {
                    return next(err);
                }
                res.send(result);
                connection.release();
            });
        });
    }
};