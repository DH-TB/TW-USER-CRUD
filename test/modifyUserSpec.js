require('../registerBabel');
const server = require('../server');
const request = require('supertest');
const mysql = require('mysql');
const $conf = require('../routes/conf');
const $sql = require('../routes/userSqlMapping');
const pool = mysql.createPool($conf.mysql);

describe('unit test loading express', ()=> {
    let id;
    beforeEach((done)=> {
        pool.getConnection((err, connection)=> {
            connection.query($sql.insert, ['huanglizhen', 'hhh', 21, 'gril', '15091671302', '929659475@qq.com', 'dh'], (err, result)=> {
                id = result.insertId;
                connection.release();
                done();
            });
        });
    });
    afterEach((done)=> {
        pool.getConnection((err, connection)=> {
            connection.query($sql.delete,id, (err, result)=> {
                connection.release();
                done();
            });
        });
    });
    it('response to /modifyUser', (done)=> {
        request(server.listen())
            .put('/modifyUser')
            .send({
                "id":id,
                "username": 'qqqqqqqq',
                "name": 'hhh',
                "age": 21,
                "sex": 'gril',
                "phone": '15091671302',
                "email": '929659475@qq.com',
                "remark": 'dh'
            })
            .expect(200, {code: 200,msg: '修改成功'}, done);
    })
});
