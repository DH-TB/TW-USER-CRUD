require('../registerBabel');
const server = require('../server');
const request = require('supertest');
const mysql = require('mysql');
const $conf = require('../routes/conf');
const pool = mysql.createPool($conf.mysql);

describe('unit test loading express', ()=> {
    const userInfo = {
        "username": 'huanglizhen',
        "name": 'hhh',
        "age": 21,
        "sex": 'gril',
        "phone": '15091671302',
        "email": '929659475@qq.com',
        "remark": 'dh'
    };
    afterEach((done)=> {
        pool.getConnection((err, connection)=> {
            connection.query('DELETE t.* FROM userInfo t INNER JOIN (SELECT MAX(id) maxt FROM userInfo) tmax ON t.id = tmax.maxt', (err, result)=> {
                connection.release();
                done();
            });
        });
    });
    it('response to /getOneUser', (done)=> {
        request(server.listen())
            .post('/addUser')
            .send(userInfo)
            .expect(200, {code: 200,msg: '增加成功'}, done);
    })
});
