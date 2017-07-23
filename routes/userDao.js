const $sql = require('./userSqlMapping');
const connection = require('../routes/conf');

const jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.send({
            code: '1',
            msg: '操作失败'
        });
    }
    else {
        res.send(ret);
    }
};

module.exports = {
    add: (req, res, next)=> {
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
            });
    },
    modify: (req, res, next)=> {
        const body = req.body;
        connection.query($sql.update, [body.username, body.name, body.age, body.sex, body.phone, body.email, body.remark, body.id], (err, result)=> {
            if (result.affectedRows > 0) {
                result = {
                    code: 200,
                    msg: '修改成功'
                };
            }
            jsonWrite(res, result);
        });

    },
    queryAll: (req, res, next) => {
        connection.query($sql.queryAll, (err, result)=> {
            if (err) {
                return next(err);
            }
            jsonWrite(res, result);
        });
    },
    queryOne: (req, res, next) => {
        const username = req.params.username;
        connection.query($sql.queryOne, username, (err, result)=> {
            if (err) {
                return next(err);
            }
            jsonWrite(res, result);
        });
    },
    queryById: (req, res, next) => {
        const id = req.params.id;
        connection.query($sql.queryById, id, (err, rows, result)=> {
            if (err) {
                return next(err);
            }
            for (const i in rows) {
                jsonWrite(res, rows[i]);
            }
        });
    },
    deleteById: (req, res, next) => {
        const id = req.params.id;
        connection.query($sql.delete, id, (err, result)=> {
            if (err) {
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
        });
    },
};
