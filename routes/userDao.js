import mysql from 'mysql';

const $conf = require('./conf');
const $sql = require('./userSqlMapping');
const pool = mysql.createPool($conf.mysql);

const jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const body = req.body;
            connection.query($sql.insert, [
                body.username, body.name, body.age, body.sex,
                body.phone, body.email, body.remark
            ], (err, result)=> {
                if (err) {
                    return next(err);
                }
                if (result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryAll: (req, res, next) => {
        pool.getConnection((err, connection)=> {
            connection.query($sql.queryAll, (err, result)=> {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryOne: (req, res, next) => {
        const username = req.params.username;
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryByUserName, username, (err, result)=> {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryByUserName: (req, res, next) => {
        const username = req.params.username;
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryByUserName, username, (err, rows, result)=> {
                for (var i in rows) {
                    jsonWrite(res, rows[i]);
                }
                connection.release();
            });
        });
    },
    deleteByUserName: function (req, res, next) {
        pool.getConnection((err, connection) => {
            const username = req.params.username;
            connection.query($sql.deleteByUserName, username, function (err, result) {
                if (result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg: '删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
};