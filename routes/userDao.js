import mysql from 'mysql';

const $conf = require('./conf');
const $sql = require('./userSqlMapping');
const pool = mysql.createPool($conf.mysql);

const jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.send({
            code: '1',
            msg: '操作失败'
        });
    }
    else{
        res.send(ret);
    }
};

module.exports = {
    add: (req, res, next)=> {
        pool.getConnection((err, connection)=> {
            const body = req.body;
            connection.query($sql.insert, [body.username, body.name, body.age, body.sex, body.phone, body.email, body.remark],
                (err, result)=> {
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
    modify: (req, res, next)=> {
        const body = req.body;
        pool.getConnection((err, connection)=> {
            connection.query($sql.update, [body.username, body.name, body.age, body.sex, body.phone, body.email, body.remark, body.id], (err, result)=> {
                if (result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg: '修改成功'
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
                if(err){
                    return next(err);
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryOne: (req, res, next) => {
        const username = req.params.username;
        pool.getConnection((err, connection)=> {
            connection.query($sql.queryOne, username, (err, result)=> {
                if(err){
                    return next(err);
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryById: (req, res, next) => {
        const id = req.params.id;
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryById, id, (err, rows, result)=> {
                if(err){
                    return next(err);
                }
                for (const i in rows) {
                    jsonWrite(res, rows[i]);
                }
                connection.release();
            });
        });
    },
    deleteById: function (req, res, next) {
        pool.getConnection((err, connection) => {
            const id = req.params.id;
            connection.query($sql.delete, id, function (err, result) {
                if(err){
                    return next(err);
                }
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